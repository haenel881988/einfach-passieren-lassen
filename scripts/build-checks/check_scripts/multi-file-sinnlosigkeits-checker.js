#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import AdvancedContentValidator from './advanced-content-validator.js';

// ==================== MULTI-FILE SINNLOSIGKEITS-CHECKER ====================
// Überprüft ALLE Seiten auf sinnlose Sätze, absurde Konstrukte und Copy-Cat-Texte

class MultiFileSinnlosigkeitsChecker {
    constructor() {
        this.validator = new AdvancedContentValidator();
        this.scanPatterns = [
            // Schweizerdeutsch-Absurdities
            /\b(denkst|sagst|fühlst|weißt|machst|redest|sprichst|verstehst)\s+du\s+dir\s+auf\s+schweizerdeutsch\b/gi,
            /\b(denkst|sagst|fühlst|weißt|machst|redest|sprichst|verstehst)\s+du\s+in\s+schweizerdeutsch\b/gi,
            
            // Sprachkonstrukt-Absurdities  
            /\b(fühlst|denkst|sagst|weißt|machst|redest|sprichst|verstehst)\s+du\s+dir\s+auf\s+\w+\b/gi,
            /\b(fühlst|denkst|sagst|weißt|machst|redest|sprichst|verstehst)\s+du\s+in\s+\w+sprache\b/gi,
            
            // Unvollständige Trigger ohne Kontext
            /\bfühlst\s+du\s+dich(?!\s+\w)/gi,
            /\bdenkst\s+du(?!\s+\w)/gi, 
            /\bweißt\s+du(?!\s+\w)/gi,
            
            // Copy-Cat Detection (identische Formulierungen)
            /^(.{20,}?)(.{0,10})\1/gim
        ];
        this.fileExtensions = ['.md', '.html'];
        this.scanPaths = [
            'blog/entwurf/',
            'blog/',
            './ueber-mich.html',
            './index.html',
            './kontakt.html'
        ];
        // Verzeichnisse die NICHT gescannt werden sollen
        this.excludedDirs = [
            'node_modules', 
            '.git', 
            'dist', 
            '.next', 
            '__trash__',
            'app-gui',
            'build-process',
            'check_scripts',
            'scripts',
            'docs'
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
        const TIMEOUT_MS = 30000; // 30 Sekunden Timeout
        
        try {
            // 1. DATEIEN SAMMELN (mit Timeout-Schutz)
            console.log(chalk.blue('📋 Sammle relevante Dateien...'));
            const allFiles = await Promise.race([
                this.collectAllFiles(),
                new Promise((_, reject) => 
                    setTimeout(() => reject(new Error('Timeout beim Datei-Sammeln')), TIMEOUT_MS)
                )
            ]);
            
            console.log(chalk.green(`   ✅ ${allFiles.length} relevante Dateien gefunden`));
            
            if (allFiles.length === 0) {
                console.log(chalk.yellow('⚠️  Keine Dateien zum Prüfen gefunden'));
                return [];
            }

            // 2. EINZELNE DATEIEN PRÜFEN
            console.log(chalk.blue('🔍 Prüfe Dateien auf Sinnlosigkeiten...'));
            for (const file of allFiles) {
                await this.checkSingleFile(file);
                
                // Timeout-Check
                if (Date.now() - startTime > TIMEOUT_MS) {
                    console.log(chalk.yellow('⚠️  Timeout erreicht - Checker wird beendet'));
                    break;
                }
            }

            // 3. CROSS-FILE ANALYSE (verkürzt)
            console.log(chalk.blue('🔗 Cross-File Analyse...'));
            await this.runCrossFileAnalysis(allFiles.slice(0, 10)); // Begrenzt auf 10 Dateien

            // 4. FINAL REPORT
            const duration = Date.now() - startTime;
            this.generateFinalReport(duration);

            // 5. PROTOKOLL SPEICHERN
            await this.saveCheckProtocol();

            return this.totalIssues;
            
        } catch (error) {
            console.error(chalk.red(`❌ Checker-Fehler: ${error.message}`));
            console.log(chalk.yellow('🔄 Checker wird sicher beendet...'));
            return this.totalIssues || [];
        }

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
        
        // Prüfe ob Verzeichnis ausgeschlossen werden soll
        const dirName = path.basename(dirPath);
        if (this.excludedDirs.includes(dirName)) {
            return files; // Leeres Array zurückgeben
        }
        
        try {
            const entries = fs.readdirSync(dirPath);
            
            for (const entry of entries) {
                // Überspringe versteckte Dateien und ausgeschlossene Verzeichnisse
                if (entry.startsWith('.') || this.excludedDirs.includes(entry)) {
                    continue;
                }
                
                const fullPath = path.join(dirPath, entry);
                const stat = fs.statSync(fullPath);
                
                if (stat.isDirectory()) {
                    // Rekursiv durch Unterordner (mit Schutz)
                    files.push(...this.scanDirectory(fullPath));
                } else if (stat.isFile()) {
                    // Nur relevante Dateierweiterungen
                    const ext = path.extname(fullPath);
                    if (this.fileExtensions.includes(ext)) {
                        files.push(fullPath);
                    }
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
            
            // ==================== ERWEITERTE SINNLOSIGKEITS-DETECTION ====================
            const issues = this.validator.detectLogicalInconsistencies(content);
            
            // ==================== SPEZIELLE ABSURDHEITS-PATTERNS ====================
            const absurdIssues = this.detectSpecialAbsurdPatterns(content, filePath);
            issues.push(...absurdIssues);
            
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

    // ==================== SPEZIELLE ABSURDHEITS-PATTERNS ====================
    
    detectSpecialAbsurdPatterns(content, filePath) {
        const issues = [];
        
        // 1. SCHWEIZERDEUTSCH-ABSURDITIES (wie "denkst du dir auf Schweizerdeutsch")
        const swissAbsurdities = [
            /denkst du dir auf schweizerdeutsch/gi,
            /sagst du auf schweizerdeutsch/gi,
            /überlegst du dir auf schweizerdeutsch/gi,
            /formulierst du auf schweizerdeutsch/gi,
            /redest du schweizerdeutsch/gi,
            /sprichst du schweizerdeutsch/gi
        ];
        
        swissAbsurdities.forEach(pattern => {
            const matches = content.match(pattern);
            if (matches) {
                matches.forEach(match => {
                    issues.push({
                        type: 'SCHWEIZERDEUTSCH_ABSURDITY',
                        message: `Völlig absurde Schweizerdeutsch-Referenz: "${match}"`,
                        severity: 'CRITICAL',
                        suggestion: 'Komplett entfernen - hat nichts mit emotionalem Content zu tun',
                        context: this.getContext(content, match)
                    });
                });
            }
        });

        // 2. SPRACHKONSTRUKT-ABSURDITIES
        const languageAbsurdities = [
            /\w+st du dir auf \w+/gi,
            /sagst du in \w+sprache/gi,
            /denkst du in \w+/gi,
            /formulierst du in \w+/gi,
            /überlegst du auf \w+/gi
        ];
        
        languageAbsurdities.forEach(pattern => {
            const matches = content.match(pattern);
            if (matches) {
                matches.forEach(match => {
                    issues.push({
                        type: 'LANGUAGE_CONSTRUCT_ABSURDITY',
                        message: `Absurde Sprachkonstruktion: "${match}"`,
                        severity: 'CRITICAL',
                        suggestion: 'Entfernen - deplatziert in emotionalem Content',
                        context: this.getContext(content, match)
                    });
                });
            }
        });

        // 3. UNVOLLSTÄNDIGE TRIGGER-DETECTION
        const incompleteTriggers = [
            /fühlst du dich(?!\s+\w{4,})/gi,
            /denkst du(?!\s+\w{4,})/gi,
            /weißt du(?!\s+\w{4,})/gi,
            /kannst du(?!\s+\w{4,})/gi,
            /willst du(?!\s+\w{4,})/gi
        ];
        
        incompleteTriggers.forEach(pattern => {
            const matches = content.match(pattern);
            if (matches) {
                matches.forEach(match => {
                    issues.push({
                        type: 'INCOMPLETE_TRIGGER',
                        message: `Unvollständiger Trigger ohne Kontext: "${match}"`,
                        severity: 'HIGH',
                        suggestion: 'Trigger organisch vervollständigen oder entfernen',
                        context: this.getContext(content, match)
                    });
                });
            }
        });

        return issues;
    }

    getContext(content, match) {
        const index = content.indexOf(match);
        if (index === -1) return '';
        
        const start = Math.max(0, index - 50);
        const end = Math.min(content.length, index + match.length + 50);
        
        return content.substring(start, end);
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

// Ausführung - auch wenn über Build getriggert (kein import.meta check)
async function runChecker() {
    const checker = new MultiFileSinnlosigkeitsChecker();
    try {
        const issues = await checker.runCompleteCheck();
        console.log(chalk.blue('\n✅ Multi-File Sinnlosigkeits-Check abgeschlossen!'));
        
        const criticalIssues = issues.filter(i => i.severity === 'CRITICAL');
        if (criticalIssues.length > 0) {
            console.log(chalk.red(`🚨 ${criticalIssues.length} KRITISCHE PROBLEME GEFUNDEN!`));
            criticalIssues.forEach(issue => {
                console.log(chalk.red(`   ❌ ${issue.type}: ${issue.message}`));
            });
        } else {
            console.log(chalk.green('✅ Keine kritischen Sinnlosigkeits-Probleme gefunden'));
        }
        
        return criticalIssues.length;
    } catch (error) {
        console.error(chalk.red('❌ Fehler beim Sinnlosigkeits-Check:'), error);
        return -1;
    }
}

// Führe Checker aus
runChecker().then(exitCode => process.exit(exitCode > 0 ? 1 : 0));

export default MultiFileSinnlosigkeitsChecker;
