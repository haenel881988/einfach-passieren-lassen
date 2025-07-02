/**
 * logger.js
 * Modul für Terminal- und Build-Logging
 * Erstellt: 02.07.2025
 *
 * TODO: Migration der Logger-Klasse aus scripts/build.js
 */

// TerminalLogger-Klasse migriert aus scripts/build.js
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

class TerminalLogger {
    constructor() {
        this.logBuffer = [];
        this.originalConsoleLog = console.log;
        this.originalConsoleError = console.error;
        this.originalConsoleWarn = console.warn;
        this.logFilePath = null;
        this.startTime = new Date();
        this.problems = [];
        this.setupLogger();
    }
    setupLogger() {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T');
        const dateStr = timestamp[0];
        const timeStr = timestamp[1].split('-').slice(0, 3).join('');
        this.logFilePath = path.join('docs', '03_exception', `BUILD_LOG_${dateStr}_${timeStr}.md`);
        const logDir = path.dirname(this.logFilePath);
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });
        }
        console.log = (...args) => {
            const message = args.map(arg => typeof arg === 'string' ? arg : JSON.stringify(arg)).join(' ');
            this.logToBuffer('LOG', message);
            this.originalConsoleLog(...args);
        };
        console.error = (...args) => {
            const message = args.map(arg => typeof arg === 'string' ? arg : JSON.stringify(arg)).join(' ');
            this.logToBuffer('ERROR', message);
            this.originalConsoleError(...args);
        };
        console.warn = (...args) => {
            const message = args.map(arg => typeof arg === 'string' ? arg : JSON.stringify(arg)).join(' ');
            this.logToBuffer('WARN', message);
            this.originalConsoleWarn(...args);
        };
    }
    logToBuffer(level, message) {
        const timestamp = new Date().toISOString();
        const cleanMessage = message.replace(/\u001b\[[0-9;]*m/g, '');
        this.logBuffer.push({
            timestamp,
            level,
            message: cleanMessage,
            rawMessage: message
        });
    }
    async collectVSCodeProblems() {
        try {
            console.log('🔍 Sammle VS Code Problems...');
            const projectFiles = await this.getAllProjectFiles();
            for (const filePath of projectFiles) {
                try {
                    await this.checkFileForProblems(filePath);
                } catch (error) {
                    this.logToBuffer('ERROR', `Problem beim Scannen von ${filePath}: ${error.message}`);
                }
            }
            this.logToBuffer('INFO', `✅ Problems-Scan abgeschlossen. ${this.problems.length} Problem(e) gefunden.`);
        } catch (error) {
            this.logToBuffer('ERROR', `Fehler beim Sammeln von VS Code Problems: ${error.message}`);
        }
    }
    async getAllProjectFiles() {
        const extensions = ['.js', '.ts', '.json', '.jsx', '.tsx', '.vue', '.html', '.css'];
        const excludeDirs = ['node_modules', '.git', 'dist', 'build', '.vscode'];
        const files = [];
        const scanDir = (dir) => {
            if (!fs.existsSync(dir)) return;
            const entries = fs.readdirSync(dir, { withFileTypes: true });
            for (const entry of entries) {
                const fullPath = path.join(dir, entry.name);
                if (entry.isDirectory()) {
                    if (!excludeDirs.includes(entry.name)) {
                        scanDir(fullPath);
                    }
                } else if (entry.isFile()) {
                    const ext = path.extname(entry.name);
                    if (extensions.includes(ext)) {
                        files.push(fullPath);
                    }
                }
            }
        };
        scanDir('.');
        return files;
    }
    async checkFileForProblems(filePath) {
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            const relativePath = path.relative('.', filePath);
            const ext = path.extname(filePath);
            if (ext === '.json') {
                await this.checkJSONProblems(relativePath, content);
            } else if (['.js', '.ts', '.jsx', '.tsx'].includes(ext)) {
                await this.checkJavaScriptProblems(relativePath, content);
            } else if (ext === '.css') {
                await this.checkCSSProblems(relativePath, content);
            }
        } catch (error) {
            this.addProblem(filePath, 0, 'error', `Datei konnte nicht gelesen werden: ${error.message}`);
        }
    }
    async checkJSONProblems(filePath, content) {
        try {
            JSON.parse(content);
        } catch (error) {
            const match = error.message.match(/position (\d+)/);
            const position = match ? parseInt(match[1]) : 0;
            const lines = content.substring(0, position).split('\n');
            const line = lines.length;
            this.addProblem(filePath, line, 'error', `JSON Syntax Error: ${error.message}`);
        }
        if (filePath.includes('package.json')) {
            try {
                const pkg = JSON.parse(content);
                if (pkg.type && !['commonjs', 'module'].includes(pkg.type)) {
                    this.addProblem(filePath, this.findLineWithProperty(content, 'type'), 'error', 
                        `Invalid "type" value: "${pkg.type}". Valid values: "commonjs", "module"`);
                }
            } catch (e) {
                // JSON Parse Error bereits behandelt
            }
        }
    }
    async checkJavaScriptProblems(filePath, content) {
        const lines = content.split('\n');
        lines.forEach((line, index) => {
            const lineNum = index + 1;
            if (line.includes('console.log') && !line.includes('//')) {
                this.addProblem(filePath, lineNum, 'warning', 'Console.log statement found - consider removing in production');
            }
            if (line.includes('fucntion')) {
                this.addProblem(filePath, lineNum, 'error', 'Typo: "fucntion" should be "function"');
            }
            if (line.trim().match(/^(let|const|var|return)\s+.*[^;{}\s]$/)) {
                this.addProblem(filePath, lineNum, 'warning', 'Missing semicolon');
            }
        });
    }
    async checkCSSProblems(filePath, content) {
        const lines = content.split('\n');
        lines.forEach((line, index) => {
            const lineNum = index + 1;
            if (line.trim().match(/:\s*[^;{}]+$/) && !line.trim().endsWith('}')) {
                this.addProblem(filePath, lineNum, 'warning', 'Missing semicolon in CSS property');
            }
        });
    }
    findLineWithProperty(content, property) {
        const lines = content.split('\n');
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].includes(`"${property}"`)) {
                return i + 1;
            }
        }
        return 1;
    }
    addProblem(filePath, line, severity, message) {
        this.problems.push({
            file: filePath,
            line,
            severity,
            message,
            timestamp: new Date().toISOString()
        });
        this.logToBuffer('PROBLEM', `[${severity.toUpperCase()}] ${filePath}:${line} - ${message}`);
    }
    generateProblemsReport() {
        if (this.problems.length === 0) {
            return `**✅ Keine Problems gefunden!**\n\nDas Projekt hat alle automatisierten Checks bestanden.\n`;
        }
        const errors = this.problems.filter(p => p.severity === 'error');
        const warnings = this.problems.filter(p => p.severity === 'warning');
        const infos = this.problems.filter(p => p.severity === 'info');
        let report = `**❌ ${this.problems.length} Problem(e) gefunden:**\n\n### Übersicht\n- **Errors:** ${errors.length}\n- **Warnings:** ${warnings.length}  \n- **Infos:** ${infos.length}\n\n`;
        if (errors.length > 0) {
            report += `### 🚨 Errors (${errors.length})\n\n`;
            errors.forEach((problem, index) => {
                report += `#### ${index + 1}. ${problem.file}:${problem.line}\n**Severity:** ERROR  \n**Message:** ${problem.message}  \n**Timestamp:** ${problem.timestamp}\n\n`;
            });
        }
        if (warnings.length > 0) {
            report += `### ⚠️ Warnings (${warnings.length})\n\n`;
            warnings.forEach((problem, index) => {
                report += `#### ${index + 1}. ${problem.file}:${problem.line}\n**Severity:** WARNING  \n**Message:** ${problem.message}  \n**Timestamp:** ${problem.timestamp}\n\n`;
            });
        }
        if (infos.length > 0) {
            report += `### ℹ️ Infos (${infos.length})\n\n`;
            infos.forEach((problem, index) => {
                report += `#### ${index + 1}. ${problem.file}:${problem.line}\n**Severity:** INFO  \n**Message:** ${problem.message}  \n**Timestamp:** ${problem.timestamp}\n\n`;
            });
        }
        const problemsByFile = {};
        this.problems.forEach(problem => {
            if (!problemsByFile[problem.file]) {
                problemsByFile[problem.file] = [];
            }
            problemsByFile[problem.file].push(problem);
        });
        report += `### 📁 Problems gruppiert nach Datei\n\n`;
        Object.entries(problemsByFile).forEach(([file, problems]) => {
            report += `#### ${file} (${problems.length} Problem(e))\n`;
            problems.forEach(problem => {
                const icon = problem.severity === 'error' ? '🚨' : problem.severity === 'warning' ? '⚠️' : 'ℹ️';
                report += `- **Zeile ${problem.line}:** ${icon} ${problem.message}\n`;
            });
            report += `\n`;
        });
        return report;
    }
    saveToFile() {
        try {
            const endTime = new Date();
            const duration = endTime - this.startTime;
            let logContent = `# Build Process Log\n\n**Timestamp:** ${this.startTime.toISOString()}\n**Dauer:** ${duration}ms\n**Log-Datei:** ${this.logFilePath}\n**Node-Version:** ${process.version}\n**Arbeitsverzeichnis:** ${process.cwd()}\n\n## Vollständige Terminal-Ausgabe\n\n`;
            this.logBuffer.forEach((entry, index) => {
                logContent += `### ${index + 1}. [${entry.level}] ${entry.timestamp}\n\n\`\`\`\n${entry.message}\n\`\`\`\n\n`;
            });
            logContent += `## Performance-Statistiken\n\n- **Gesamte Log-Einträge:** ${this.logBuffer.length}\n- **ERROR-Level:** ${this.logBuffer.filter(e => e.level === 'ERROR').length}\n- **WARN-Level:** ${this.logBuffer.filter(e => e.level === 'WARN').length}\n- **LOG-Level:** ${this.logBuffer.filter(e => e.level === 'LOG').length}\n- **PROBLEM-Level:** ${this.logBuffer.filter(e => e.level === 'PROBLEM').length}\n- **Build-Dauer:** ${duration}ms\n- **Durchschnitt pro Log:** ${Math.round(duration / this.logBuffer.length)}ms\n\n## VS Code Problems Report\n\n${this.generateProblemsReport()}\n\n## Raw-Output für Debugging\n\n\`\`\`\n${this.logBuffer.map(e => `[${e.level}] ${e.rawMessage}`).join('\\n')}\n\`\`\`\n\n## System-Information\n\n- **Datum:** ${new Date().toLocaleString('de-DE')}\n- **Timezone:** ${Intl.DateTimeFormat().resolvedOptions().timeZone}\n- **Platform:** ${process.platform}\n- **Architecture:** ${process.arch}\n- **Memory Usage:** ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB\n\n## Exception-Kandidaten\n\n${this.identifyExceptions()}\n\n---\n*Automatisch generiert durch TerminalLogger*\n`;
            fs.writeFileSync(this.logFilePath, logContent, 'utf8');
            this.originalConsoleLog(chalk.blue(`📋 Terminal-Log gespeichert: ${this.logFilePath}`));
        } catch (error) {
            this.originalConsoleError('❌ Fehler beim Speichern des Terminal-Logs:', error);
        }
    }
    identifyExceptions() {
        const errors = this.logBuffer.filter(e => e.level === 'ERROR');
        const warnings = this.logBuffer.filter(e => e.level === 'WARN');
        const criticalMessages = this.logBuffer.filter(e => 
            e.message.includes('CRITICAL') || 
            e.message.includes('EXCEPTION') || 
            e.message.includes('FAILED')
        );
        let exceptionsText = '';
        if (errors.length > 0) {
            exceptionsText += `### 🚨 ERRORS (${errors.length})\n\n`;
            errors.forEach(error => {
                exceptionsText += `- ${error.message}\n`;
            });
            exceptionsText += '\n';
        }
        if (warnings.length > 0) {
            exceptionsText += `### ⚠️ WARNINGS (${warnings.length})\n\n`;
            warnings.forEach(warning => {
                exceptionsText += `- ${warning.message}\n`;
            });
            exceptionsText += '\n';
        }
        if (criticalMessages.length > 0) {
            exceptionsText += `### 💥 CRITICAL MESSAGES (${criticalMessages.length})\n\n`;
            criticalMessages.forEach(critical => {
                exceptionsText += `- ${critical.message}\n`;
            });
            exceptionsText += '\n';
        }
        if (errors.length === 0 && warnings.length === 0 && criticalMessages.length === 0) {
            exceptionsText = 'Keine Exceptions gefunden - Build erfolgreich! ✅';
        }
        return exceptionsText;
    }
    restore() {
        console.log = this.originalConsoleLog;
        console.error = this.originalConsoleError;
        console.warn = this.originalConsoleWarn;
    }
}

module.exports = TerminalLogger;
