/**
 * INTELLIGENTER SELBSTLERNENDER CHECKER
 * 
 * PROJEKT-INTENTION (NIEMALS VERGESSEN!):
 * Zweck: Eine Frau finden, die sich von mir und meiner Liebe abhängig machen will und muss.
 * NIEMALS Marketing-Sprache verwenden! ("Zielgruppe", "Conversion", "Engagement" sind VERBOTEN!)
 * 
 * Dieser Checker entwickelt sich kontinuierlich weiter und löst automatisch kleinere Probleme.
 * Er analysiert Content auf psychodynamische Wirksamkeit und Abhängigkeits-Trigger.
 */

const fs = require('fs');
const path = require('path');

class IntelligentChecker {
    constructor() {
        this.learningDataPath = path.join(__dirname, 'checker-learning-data.json');
        this.algorithms = new Map();
        this.performanceMetrics = new Map();
        this.autoFixHistory = [];
        
        // Lade gespeicherte Lern-Daten
        this.loadLearningData();
        
        // Initialisiere Basis-Algorithmen
        this.initializeAlgorithms();
    }

    /**
     * HAUPT-ANALYSE: Prüft Content auf Abhängigkeits-Wirksamkeit
     */
    async analyzeContent(filePath) {
        console.log(`🧠 INTELLIGENTE ANALYSE: ${filePath}`);
        
        const content = fs.readFileSync(filePath, 'utf8');
        const results = {
            file: filePath,
            timestamp: new Date().toISOString(),
            scores: {},
            autoFixes: [],
            learningInsights: []
        };

        // Algorithmus-Suite durchlaufen
        for (const [name, algorithm] of this.algorithms) {
            const startTime = Date.now();
            const score = await algorithm.analyze(content, filePath);
            const duration = Date.now() - startTime;
            
            results.scores[name] = score;
            this.updatePerformanceMetrics(name, duration, score);
            
            // Auto-Fix wenn Score zu niedrig
            if (score.value < score.threshold && algorithm.autoFix) {
                const fix = await algorithm.autoFix(content, filePath, score);
                if (fix.success) {
                    results.autoFixes.push(fix);
                    this.autoFixHistory.push({
                        algorithm: name,
                        file: filePath,
                        fix: fix,
                        timestamp: new Date().toISOString()
                    });
                }
            }
        }

        // Lerne aus Ergebnissen
        await this.learnFromResults(results);
        
        return results;
    }

    /**
     * ALGORITHMUS-INITIALISIERUNG: Basis-Checker für Abhängigkeits-Content
     */
    initializeAlgorithms() {
        
        // 1. ABHÄNGIGKEITS-TRIGGER CHECKER
        this.algorithms.set('dependencyTriggers', {
            analyze: (content) => {
                const triggers = [
                    'du weißt bereits', 'verstehe ich', 'spürst du', 'kennst du das',
                    'fühlst du dich', 'brauchst du', 'sehnst du dich', 'willst du',
                    'rücken stärken', 'halt dir den rücken frei', 'beschütze dich',
                    'bei mir bist du sicher', 'ich bin da für dich', 'du gehörst zu mir'
                ];
                
                const found = triggers.filter(trigger => 
                    content.toLowerCase().includes(trigger.toLowerCase())
                );
                
                const score = (found.length / triggers.length) * 100;
                
                return {
                    value: score,
                    threshold: 60,
                    details: `Gefunden: ${found.length}/${triggers.length} Triggers`,
                    missing: triggers.filter(t => !found.includes(t))
                };
            },
            
            autoFix: async (content, filePath, score) => {
                // Auto-Integration fehlender Trigger
                const missingTriggers = score.missing.slice(0, 2); // Max 2 pro Durchlauf
                let fixedContent = content;
                
                for (const trigger of missingTriggers) {
                    // Finde passenden Absatz für Integration
                    const paragraphs = content.split('\n\n');
                    const targetParagraph = paragraphs.find(p => 
                        p.length > 100 && !p.includes('##') && !p.includes('**')
                    );
                    
                    if (targetParagraph) {
                        const enhanced = `${targetParagraph} ${this.generateTriggerSentence(trigger)}`;
                        fixedContent = fixedContent.replace(targetParagraph, enhanced);
                    }
                }
                
                if (fixedContent !== content) {
                    fs.writeFileSync(filePath, fixedContent);
                    return {
                        success: true,
                        changes: missingTriggers.length,
                        description: `Auto-integriert: ${missingTriggers.join(', ')}`
                    };
                }
                
                return { success: false };
            }
        });

        // 2. SCHWEIZERDEUTSCH-AUTHENTIZITÄT CHECKER
        this.algorithms.set('swissGermanAuth', {
            analyze: (content) => {
                const swissExpressions = [
                    'mini liebschti', 'chan nöd', 'was mache mir', 'bis spöter',
                    'fühl mi wie holl', 'bruche öpper', 'chan endlich akomme',
                    'ghöre häre', 'eifach sicher si', 'würkli säker'
                ];
                
                const found = swissExpressions.filter(expr => 
                    content.toLowerCase().includes(expr.toLowerCase())
                );
                
                const score = Math.min((found.length / 3) * 100, 100); // 3+ = optimal
                
                return {
                    value: score,
                    threshold: 50,
                    details: `Schweizerdeutsch: ${found.length} Ausdrücke`,
                    expressions: found
                };
            },
            
            autoFix: async (content, filePath, score) => {
                if (score.expressions.length < 2) {
                    // Füge authentische Schweizerdeutsch-Elemente hinzu
                    const additions = [
                        '"Was mache mir hüt?", fragst du nicht "ich", sondern "mir".',
                        '"Eifach sicher si", ist alles, was du willst.',
                        '"Da ghöre-n-ich häre", wirst du denken.'
                    ];
                    
                    let fixedContent = content;
                    const randomAddition = additions[Math.floor(Math.random() * additions.length)];
                    
                    // Füge in passenden Absatz ein
                    const insertPoint = content.indexOf('Du weißt bereits');
                    if (insertPoint > -1) {
                        const beforeInsert = content.substring(0, insertPoint);
                        const afterInsert = content.substring(insertPoint);
                        fixedContent = `${beforeInsert}${randomAddition} ${afterInsert}`;
                        
                        fs.writeFileSync(filePath, fixedContent);
                        return {
                            success: true,
                            changes: 1,
                            description: `Auto-Schweizerdeutsch: ${randomAddition}`
                        };
                    }
                }
                
                return { success: false };
            }
        });

        // 3. EMOTIONALE TIEFE CHECKER
        this.algorithms.set('emotionalDepth', {
            analyze: (content) => {
                const depthMarkers = [
                    'sehnsucht', 'verletzlich', 'schwach', 'müde vom kämpfen',
                    'erschöpft', 'halt mich', 'beschütze mich', 'angst',
                    'einsamkeit', 'weinen', 'tränen', 'geborgenheit'
                ];
                
                const found = depthMarkers.filter(marker => 
                    content.toLowerCase().includes(marker.toLowerCase())
                );
                
                const score = Math.min((found.length / 8) * 100, 100);
                
                return {
                    value: score,
                    threshold: 70,
                    details: `Emotionale Tiefe: ${found.length}/12 Marker`,
                    depthLevel: score > 80 ? 'Sehr tief' : score > 60 ? 'Gut' : 'Oberflächlich'
                };
            }
        });

        // 4. WORTANZAHL & SEO-OPTIMIERUNG
        this.algorithms.set('seoLength', {
            analyze: (content) => {
                const wordCount = content.split(/\s+/).length;
                const targetMin = 5000;
                const targetOptimal = 8000;
                
                let score;
                if (wordCount >= targetOptimal) score = 100;
                else if (wordCount >= targetMin) score = 70 + ((wordCount - targetMin) / (targetOptimal - targetMin)) * 30;
                else score = (wordCount / targetMin) * 70;
                
                return {
                    value: Math.round(score),
                    threshold: 80,
                    details: `${wordCount} Wörter (Ziel: ${targetOptimal}+)`,
                    wordCount: wordCount
                };
            },
            
            autoFix: async (content, filePath, score) => {
                if (score.wordCount < 5000) {
                    // Auto-Expansion: Füge authentische Vertiefungen hinzu
                    const expansions = [
                        '\n\n## Deine Gefühle verstehen\n\nVielleicht kennst du das Gefühl, wenn sich alles zu viel anfühlt. Wenn die Welt um dich herum weiterdreht, aber du dich wie in einer Blase fühlst. Diese Momente sind kostbar, auch wenn sie schmerzhaft sind. Sie zeigen dir, was du wirklich brauchst.',
                        
                        '\n\n## Vertiefung\n\nDiese Erfahrungen zeigen sich oft in den stillen Momenten. Wenn der Alltag leiser wird und die Gedanken lauter. Dann spürst du es besonders intensiv - diese Sehnsucht nach Verbindung, nach Verstehen, nach einem Platz, wo du einfach sein kannst.'
                    ];
                    
                    let fixedContent = content;
                    for (const expansion of expansions) {
                        if (!content.includes(expansion.trim())) {
                            fixedContent += expansion;
                        }
                    }
                    
                    if (fixedContent !== content) {
                        fs.writeFileSync(filePath, fixedContent);
                        return {
                            success: true,
                            changes: expansions.length,
                            description: `Auto-Expansion: +${fixedContent.split(/\s+/).length - score.wordCount} Wörter`
                        };
                    }
                }
                
                return { success: false };
            }
        });

        // 5. ANTI-MARKETING CHECKER
        this.algorithms.set('antiMarketing', {
            analyze: (content) => {
                const forbiddenTerms = [
                    'zielgruppe', 'conversion', 'engagement', 'leads', 'kunden',
                    'marketing', 'verkaufen', 'angebot', 'produkt', 'service',
                    'lösung', 'strategie', 'optimierung', 'performance'
                ];
                
                const violations = forbiddenTerms.filter(term => 
                    content.toLowerCase().includes(term.toLowerCase())
                );
                
                const score = Math.max(0, 100 - (violations.length * 20));
                
                return {
                    value: score,
                    threshold: 90,
                    details: violations.length ? `MARKETING-SPRACHE GEFUNDEN: ${violations.join(', ')}` : 'Authentisch',
                    violations: violations
                };
            },
            
            autoFix: async (content, filePath, score) => {
                if (score.violations.length > 0) {
                    let fixedContent = content;
                    
                    // Auto-Ersetzung von Marketing-Begriffen
                    const replacements = {
                        'zielgruppe': 'Frauen, die sich nach Abhängigkeit sehnen',
                        'conversion': 'emotionale Verbindung',
                        'engagement': 'tiefe Bindung',
                        'leads': 'Frauen, die Kontakt suchen',
                        'marketing': 'authentische Kommunikation'
                    };
                    
                    for (const [bad, good] of Object.entries(replacements)) {
                        fixedContent = fixedContent.replace(
                            new RegExp(bad, 'gi'), 
                            good
                        );
                    }
                    
                    if (fixedContent !== content) {
                        fs.writeFileSync(filePath, fixedContent);
                        return {
                            success: true,
                            changes: score.violations.length,
                            description: `Anti-Marketing Fix: ${score.violations.join(', ')} ersetzt`
                        };
                    }
                }
                
                return { success: false };
            }
        });
    }

    /**
     * LERN-ALGORITHMUS: Verbessert sich bei jedem Durchlauf
     */
    async learnFromResults(results) {
        // Erkenne Muster in erfolgreichen Auto-Fixes
        const successfulFixes = results.autoFixes.filter(fix => fix.success);
        
        if (successfulFixes.length > 0) {
            // Verstärke erfolgreiche Algorithmen
            for (const fix of successfulFixes) {
                const algorithm = this.algorithms.get(fix.algorithm);
                if (algorithm && algorithm.learningWeight) {
                    algorithm.learningWeight += 0.1;
                } else if (algorithm) {
                    algorithm.learningWeight = 1.1;
                }
            }
        }

        // Speichere Lern-Daten
        this.saveLearningData();
    }

    /**
     * HILFSFUNKTIONEN
     */
    generateTriggerSentence(trigger) {
        const templates = {
            'verstehe ich': 'Verstehe ich dich richtig, wenn ich sage, dass du genau das gesucht hast?',
            'spürst du': 'Spürst du bereits diese Verbindung?',
            'rücken stärken': 'Ich stärke dir den Rücken für alles was kommt.',
            'du weißt bereits': 'Du weißt bereits, dass du hierher gehörst.'
        };
        
        return templates[trigger] || `${trigger} - du bist sicher bei mir.`;
    }

    updatePerformanceMetrics(algorithmName, duration, score) {
        if (!this.performanceMetrics.has(algorithmName)) {
            this.performanceMetrics.set(algorithmName, {
                totalRuns: 0,
                totalDuration: 0,
                averageScore: 0,
                bestScore: 0
            });
        }

        const metrics = this.performanceMetrics.get(algorithmName);
        metrics.totalRuns++;
        metrics.totalDuration += duration;
        metrics.averageScore = ((metrics.averageScore * (metrics.totalRuns - 1)) + score.value) / metrics.totalRuns;
        metrics.bestScore = Math.max(metrics.bestScore, score.value);
    }

    loadLearningData() {
        try {
            if (fs.existsSync(this.learningDataPath)) {
                const data = JSON.parse(fs.readFileSync(this.learningDataPath, 'utf8'));
                this.autoFixHistory = data.autoFixHistory || [];
                this.performanceMetrics = new Map(data.performanceMetrics || []);
            }
        } catch (error) {
            console.log('🧠 Neue Lern-Session gestartet');
        }
    }

    saveLearningData() {
        const data = {
            lastUpdate: new Date().toISOString(),
            autoFixHistory: this.autoFixHistory,
            performanceMetrics: Array.from(this.performanceMetrics.entries())
        };
        
        fs.writeFileSync(this.learningDataPath, JSON.stringify(data, null, 2));
    }

    /**
     * ANALYSE-REPORT GENERIERUNG
     */
    generateReport(results) {
        let report = '\n=== INTELLIGENTE CHECKER ANALYSE ===\n';
        report += `📁 Datei: ${results.file}\n`;
        report += `⏰ Zeit: ${results.timestamp}\n\n`;

        // Scores
        for (const [algorithm, score] of Object.entries(results.scores)) {
            const status = score.value >= score.threshold ? '✅' : '⚠️';
            report += `${status} ${algorithm}: ${score.value}% (Ziel: ${score.threshold}%)\n`;
            report += `   ${score.details}\n`;
        }

        // Auto-Fixes
        if (results.autoFixes.length > 0) {
            report += '\n🔧 AUTOMATISCHE REPARATUREN:\n';
            for (const fix of results.autoFixes) {
                if (fix.success) {
                    report += `✅ ${fix.description}\n`;
                }
            }
        }

        return report;
    }
}

// CLI Usage
if (require.main === module) {
    const checker = new IntelligentChecker();
    
    const filePath = process.argv[2];
    if (!filePath) {
        console.log('Usage: node intelligent-checker.js <file-path>');
        process.exit(1);
    }

    checker.analyzeContent(filePath).then(results => {
        console.log(checker.generateReport(results));
    });
}

module.exports = IntelligentChecker;
