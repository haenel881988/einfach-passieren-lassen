#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import AdvancedContentValidator from '../../advanced-content-validator.js';

// ==================== MULTI-FILE SINNLOSIGKEITS-CHECKER ====================
// Überprüft ALLE Seiten auf sinnlose Sätze, absurde Konstrukte und Copy-Cat-Texte

class MultiFileSinnlosigkeitsChecker {
    constructor() {
        this.validator = new AdvancedContentValidator();
        this.scanPaths = [
            'blog/',
            'blog/entwurf/',
            './kontakt.html',
            './ueber-mich.html',
            './index.html'
        ];
        this.totalIssues = [];
        this.processedFiles = 0;
        this.criticalCount = 0;
        this.highCount = 0;
        this.mediumCount = 0;
    }

    // ==================== MAIN EXECUTION ====================
    
    async runCompleteCheck() {
        console.log(chalk.blue('🔍 MULTI-FILE SINNLOSIGKEITS-CHECKER GESTARTET'));
        console.log(chalk.gray('   Prüft alle Seiten auf absurde Sätze, Copy-Cats und logische Inkonsistenzen\n'));

        const startTime = Date.now();
        
        // 1. ALLE DATEIEN SAMMELN
        const allFiles = await this.collectAllFiles();
        console.log(chalk.cyan(`📁 ${allFiles.length} Dateien zur Überprüfung gefunden\n`));

        // 2. JEDE DATEI ÜBERPRÜFEN
        for (const filePath of allFiles) {
            await this.checkSingleFile(filePath);
        }

        // 3. CROSS-FILE COPY-CAT DETECTION
        await this.runCrossFileAnalysis(allFiles);

        // 4. GESAMTBERICHT ERSTELLEN
        const duration = Date.now() - startTime;
        this.generateFinalReport(duration);

        // 5. PROTOKOLL SPEICHERN
        await this.saveCheckProtocol();

        return this.totalIssues;
    }

    // ==================== FILE COLLECTION ====================
    
    async collectAllFiles() {
        const files = [];
        
        for (const scanPath of this.scanPaths) {
            if (fs.existsSync(scanPath)) {
                if (fs.statSync(scanPath).isDirectory()) {
                    const dirFiles = this.scanDirectory(scanPath);
                    files.push(...dirFiles);
                } else if (fs.statSync(scanPath).isFile()) {
                    files.push(scanPath);
                }
            }
        }

        return files.filter(file => 
            file.endsWith('.html') || 
            file.endsWith('.md')
        );
    }

    scanDirectory(dirPath) {
        const files = [];
        
        try {
            const entries = fs.readdirSync(dirPath);
            
            for (const entry of entries) {
                const fullPath = path.join(dirPath, entry);
                const stat = fs.statSync(fullPath);
                
                if (stat.isDirectory()) {
                    // Rekursiv durch Unterordner
                    files.push(...this.scanDirectory(fullPath));
                } else if (stat.isFile()) {
                    files.push(fullPath);
                }
            }
        } catch (error) {
            console.log(chalk.yellow(`⚠️  Fehler beim Scannen von ${dirPath}: ${error.message}`));
        }

        return files;
    }

    // ==================== SINGLE FILE CHECKING ====================
    
    async checkSingleFile(filePath) {
        try {
            this.processedFiles++;
            const content = fs.readFileSync(filePath, 'utf8');
            
            console.log(chalk.cyan(`📄 [${this.processedFiles}] Prüfe: ${filePath}`));
            
            // SINNLOSIGKEITS-DETECTION
            const issues = this.validator.detectLogicalInconsistencies(content);
            
            if (issues.length > 0) {
                console.log(chalk.red(`   🚨 ${issues.length} Problem(e) gefunden:`));
                
                issues.forEach((issue, index) => {
                    const color = this.getSeverityColor(issue.severity);
                    console.log(color(`   ${index + 1}. [${issue.severity}] ${issue.type}`));
                    console.log(color(`      → ${issue.message}`));
                    console.log(color(`      💡 ${issue.suggestion}\n`));
                    
                    // Issue mit Datei-Info anreichern
                    issue.filePath = filePath;
                    issue.fileIndex = this.processedFiles;
                    this.totalIssues.push(issue);
                    
                    // Zähler aktualisieren
                    this.updateSeverityCounts(issue.severity);
                });
            } else {
                console.log(chalk.green(`   ✅ Keine Probleme gefunden`));
            }
            
        } catch (error) {
            console.log(chalk.red(`❌ Fehler beim Prüfen von ${filePath}: ${error.message}`));
        }
    }

    getSeverityColor(severity) {
        switch(severity) {
            case 'CRITICAL': return chalk.redBright;
            case 'HIGH': return chalk.yellow;
            case 'MEDIUM': return chalk.gray;
            default: return chalk.white;
        }
    }

    updateSeverityCounts(severity) {
        switch(severity) {
            case 'CRITICAL': this.criticalCount++; break;
            case 'HIGH': this.highCount++; break;
            case 'MEDIUM': this.mediumCount++; break;
        }
    }

    // ==================== CROSS-FILE ANALYSIS ====================
    
    async runCrossFileAnalysis(allFiles) {
        console.log(chalk.blue('\n🔗 CROSS-FILE COPY-CAT ANALYSIS GESTARTET'));
        
        const fileContents = {};
        
        // Alle Inhalte laden
        allFiles.forEach(filePath => {
            try {
                fileContents[filePath] = fs.readFileSync(filePath, 'utf8');
            } catch (error) {
                console.log(chalk.yellow(`⚠️  Datei ${filePath} nicht lesbar`));
            }
        });

        // Datei-übergreifende Duplikate finden
        const crossFileDuplicates = this.findCrossFileDuplicates(fileContents);
        
        if (crossFileDuplicates.length > 0) {
            console.log(chalk.red(`🚨 ${crossFileDuplicates.length} dateiübergreifende Duplikate gefunden:`));
            
            crossFileDuplicates.forEach((duplicate, index) => {
                console.log(chalk.yellow(`\n${index + 1}. CROSS-FILE DUPLICATE:`));
                console.log(chalk.yellow(`   Text: "${duplicate.text.substring(0, 80)}..."`));
                console.log(chalk.yellow(`   Dateien: ${duplicate.files.join(', ')}`));
                console.log(chalk.yellow(`   Ähnlichkeit: ${duplicate.similarity}%`));
                
                // Als Issue hinzufügen
                this.totalIssues.push({
                    type: 'CROSS_FILE_DUPLICATE',
                    severity: 'HIGH',
                    message: `Dateiübergreifendes Duplikat: "${duplicate.text.substring(0, 50)}..."`,
                    suggestion: 'Identische Inhalte zwischen Dateien vermeiden oder bewusst verlinken',
                    filePath: 'MULTIPLE_FILES',
                    details: duplicate
                });
                
                this.highCount++;
            });
        } else {
            console.log(chalk.green('✅ Keine dateiübergreifenden Duplikate gefunden'));
        }
    }

    findCrossFileDuplicates(fileContents) {
        const duplicates = [];
        const files = Object.keys(fileContents);
        
        // Alle Datei-Kombinationen prüfen
        for (let i = 0; i < files.length; i++) {
            for (let j = i + 1; j < files.length; j++) {
                const file1 = files[i];
                const file2 = files[j];
                
                const content1 = fileContents[file1];
                const content2 = fileContents[file2];
                
                // Finde gemeinsame Sätze (min. 30 Zeichen)
                const sentences1 = content1.split(/[.!?]+/).filter(s => s.trim().length > 30);
                const sentences2 = content2.split(/[.!?]+/).filter(s => s.trim().length > 30);
                
                sentences1.forEach(sentence1 => {
                    sentences2.forEach(sentence2 => {
                        const similarity = this.calculateSimilarity(
                            sentence1.trim().toLowerCase(),
                            sentence2.trim().toLowerCase()
                        );
                        
                        if (similarity > 0.8) { // 80% Ähnlichkeit
                            duplicates.push({
                                text: sentence1.trim(),
                                files: [file1, file2],
                                similarity: Math.round(similarity * 100)
                            });
                        }
                    });
                });
            }
        }
        
        return duplicates;
    }

    calculateSimilarity(str1, str2) {
        const words1 = str1.split(/\s+/);
        const words2 = str2.split(/\s+/);
        
        const commonWords = words1.filter(word => 
            words2.includes(word) && word.length > 3
        );
        
        const totalWords = Math.max(words1.length, words2.length);
        return commonWords.length / totalWords;
    }

    // ==================== REPORTING ====================
    
    generateFinalReport(duration) {
        console.log(chalk.blue('\n' + '='.repeat(70)));
        console.log(chalk.blue('📊 SINNLOSIGKEITS-CHECK ABGESCHLOSSEN'));
        console.log(chalk.blue('='.repeat(70)));
        
        console.log(chalk.cyan(`⏱️  Dauer: ${duration}ms`));
        console.log(chalk.cyan(`📁 Geprüfte Dateien: ${this.processedFiles}`));
        console.log(chalk.cyan(`🔍 Gefundene Issues: ${this.totalIssues.length}\n`));
        
        // SEVERITY BREAKDOWN
        console.log(chalk.white('📈 ISSUE-VERTEILUNG:'));
        console.log(chalk.redBright(`   🔴 CRITICAL: ${this.criticalCount}`));
        console.log(chalk.yellow(`   🟡 HIGH: ${this.highCount}`));
        console.log(chalk.gray(`   ⚪ MEDIUM: ${this.mediumCount}\n`));
        
        // TOP ISSUE TYPES
        const issueTypes = {};
        this.totalIssues.forEach(issue => {
            issueTypes[issue.type] = (issueTypes[issue.type] || 0) + 1;
        });
        
        console.log(chalk.white('🏆 TOP ISSUE-TYPEN:'));
        Object.entries(issueTypes)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 5)
            .forEach(([type, count]) => {
                console.log(chalk.white(`   ${type}: ${count}x`));
            });
        
        // BETROFFENE DATEIEN
        const affectedFiles = [...new Set(this.totalIssues.map(issue => issue.filePath))];
        console.log(chalk.white(`\n📁 BETROFFENE DATEIEN (${affectedFiles.length}):`));
        affectedFiles.slice(0, 10).forEach(file => {
            const fileIssues = this.totalIssues.filter(issue => issue.filePath === file);
            console.log(chalk.gray(`   ${file}: ${fileIssues.length} Issue(s)`));
        });
        
        if (affectedFiles.length > 10) {
            console.log(chalk.gray(`   ... und ${affectedFiles.length - 10} weitere`));
        }

        // GESAMTBEWERTUNG
        console.log(chalk.blue('\n' + '='.repeat(70)));
        if (this.criticalCount === 0 && this.highCount === 0) {
            console.log(chalk.green('🎉 EXCELLENT! Keine kritischen Sinnlosigkeits-Probleme gefunden!'));
        } else if (this.criticalCount === 0) {
            console.log(chalk.yellow('⚠️  MODERATE: Einige Verbesserungen möglich, aber keine kritischen Probleme'));
        } else {
            console.log(chalk.red('🚨 CRITICAL: Dringende Behebung der sinnlosen Inhalte erforderlich!'));
        }
        console.log(chalk.blue('='.repeat(70)));
    }

    // ==================== PROTOCOL SAVING ====================
    
    async saveCheckProtocol() {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const protocol = {
            timestamp: new Date().toISOString(),
            processedFiles: this.processedFiles,
            totalIssues: this.totalIssues.length,
            severityCounts: {
                critical: this.criticalCount,
                high: this.highCount,
                medium: this.mediumCount
            },
            issues: this.totalIssues,
            summary: {
                status: this.criticalCount === 0 && this.highCount === 0 ? 'CLEAN' :
                        this.criticalCount === 0 ? 'MODERATE' : 'CRITICAL',
                recommendation: this.generateRecommendation()
            }
        };

        // In logfiles speichern
        const logDir = 'scripts/build-checks/logfiles';
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });
        }

        const logFile = path.join(logDir, `SINNLOSIGKEITS_CHECK_${timestamp}.json`);
        fs.writeFileSync(logFile, JSON.stringify(protocol, null, 2));
        
        console.log(chalk.gray(`\n💾 Protokoll gespeichert: ${logFile}`));
        
        // Auch in docs/aenderungsprotokoll.md dokumentieren
        await this.updateChangeLog(protocol);
    }

    generateRecommendation() {
        if (this.criticalCount > 0) {
            return 'SOFORTIGE BEHEBUNG ERFORDERLICH: Kritische sinnlose Inhalte gefunden';
        } else if (this.highCount > 0) {
            return 'VERBESSERUNG EMPFOHLEN: Einige problematische Inhalte optimieren';
        } else {
            return 'CONTENT QUALITÄT GUT: Keine wesentlichen Sinnlosigkeits-Probleme';
        }
    }

    async updateChangeLog(protocol) {
        const changeLogPath = 'docs/aenderungsprotokoll.md';
        
        if (!fs.existsSync(changeLogPath)) {
            console.log(chalk.yellow('⚠️  aenderungsprotokoll.md nicht gefunden - erstelle neue'));
            fs.writeFileSync(changeLogPath, '# Änderungsprotokoll\n\n');
        }

        const entry = `
## ${new Date().toLocaleString('de-DE')} - Sinnlosigkeits-Check

**STATUS:** ${protocol.summary.status}  
**GEPRÜFTE DATEIEN:** ${protocol.processedFiles}  
**GEFUNDENE ISSUES:** ${protocol.totalIssues}  
**BREAKDOWN:** ${protocol.severityCounts.critical}🔴 ${protocol.severityCounts.high}🟡 ${protocol.severityCounts.medium}⚪

**EMPFEHLUNG:** ${protocol.summary.recommendation}

**AUTOMATISCHER CHECK:** Multi-File-Sinnlosigkeits-Checker v2.0

---
`;

        const existingContent = fs.readFileSync(changeLogPath, 'utf8');
        const newContent = existingContent.replace('# Änderungsprotokoll\n\n', `# Änderungsprotokoll\n\n${entry}`);
        fs.writeFileSync(changeLogPath, newContent);
        
        console.log(chalk.gray('📝 Änderungsprotokoll aktualisiert'));
    }
}

// ==================== EXECUTION ====================

// Ausführung wenn direkt aufgerufen
if (import.meta.url === `file://${process.argv[1]}`) {
    const checker = new MultiFileSinnlosigkeitsChecker();
    checker.runCompleteCheck()
        .then(issues => {
            console.log(chalk.blue('\n✅ Multi-File Sinnlosigkeits-Check abgeschlossen!'));
            process.exit(issues.filter(i => i.severity === 'CRITICAL').length > 0 ? 1 : 0);
        })
        .catch(error => {
            console.error(chalk.red('❌ Fehler beim Sinnlosigkeits-Check:'), error);
            process.exit(1);
        });
}

export default MultiFileSinnlosigkeitsChecker;
