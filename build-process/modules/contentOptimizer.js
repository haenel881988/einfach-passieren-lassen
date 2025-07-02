/**
 * contentOptimizer.js
 * Modul für intelligente Content-Optimierung
 * Erstellt: 02.07.2025 19:50
 *
 * Intelligente Content-Optimierung basierend auf Score-Analyse
 */

const fs = require('fs');
const path = require('path');

class ContentOptimizer {
    constructor() {
        this.triggerCategories = {
            TraumfrauMagnetismus: [
                "suchst du auch", "kennst du das", "verstehst du",
                "fühlst du dich", "spürst du", "weißt du"
            ],
            SicherheitsVermittlung: [
                "bin ich da", "halte ich dich", "fängst du auf",
                "sicher bei mir", "beschütze ich", "in sicherheit"
            ],
            BeschützerPositionierung: [
                "rücken stärken", "halt dir", "führung übernehmen",
                "starke schulter", "beschütze dich", "übernehme ich",
                "sichere hafen"
            ],
            HandlungsAufforderung: [
                "nimm kontakt auf", "melde dich", "schreib mir",
                "trau dich", "lass uns", "komm zu mir"
            ]
        };
    }

    /**
     * Analysiert Content und gibt Optimierungsvorschläge
     * @param {string} content - Der zu analysierende Content
     * @param {string} fileName - Name der Datei
     * @returns {Object} Optimierungsvorschläge
     */
    analyzeContent(content, fileName) {
        const analysis = {
            fileName,
            currentScore: this.calculateScore(content),
            weakestCategory: null,
            suggestions: [],
            missingTriggers: []
        };

        // Analysiere jede Trigger-Kategorie
        const categoryScores = {};
        for (const [category, triggers] of Object.entries(this.triggerCategories)) {
            const found = triggers.filter(trigger => 
                content.toLowerCase().includes(trigger.toLowerCase())
            );
            categoryScores[category] = {
                score: (found.length / triggers.length) * 100,
                foundTriggers: found,
                missingTriggers: triggers.filter(trigger => 
                    !content.toLowerCase().includes(trigger.toLowerCase())
                )
            };
        }

        // Finde schwächste Kategorie
        const sortedCategories = Object.entries(categoryScores)
            .sort(([,a], [,b]) => a.score - b.score);
        
        analysis.weakestCategory = sortedCategories[0][0];
        analysis.categoryScores = categoryScores;

        // Generiere Optimierungsvorschläge
        this.generateOptimizationSuggestions(analysis, content);

        return analysis;
    }

    /**
     * Berechnet den aktuellen Score basierend auf Trigger-Dichte
     * @param {string} content - Der Content
     * @returns {number} Score von 0-100
     */
    calculateScore(content) {
        let totalTriggers = 0;
        let foundTriggers = 0;

        for (const triggers of Object.values(this.triggerCategories)) {
            totalTriggers += triggers.length;
            foundTriggers += triggers.filter(trigger => 
                content.toLowerCase().includes(trigger.toLowerCase())
            ).length;
        }

        return Math.round((foundTriggers / totalTriggers) * 100);
    }

    /**
     * Generiert konkrete Optimierungsvorschläge
     * @param {Object} analysis - Die Analyse-Ergebnisse
     * @param {string} content - Der Original-Content
     */
    generateOptimizationSuggestions(analysis, content) {
        const weakestCategory = analysis.categoryScores[analysis.weakestCategory];
        const missingTriggers = weakestCategory.missingTriggers;

        if (missingTriggers.length > 0) {
            // Priorisiere die ersten 3 fehlenden Trigger
            const prioritizedTriggers = missingTriggers.slice(0, 3);
            
            prioritizedTriggers.forEach((trigger, index) => {
                const suggestion = this.createTriggerIntegrationSuggestion(
                    trigger, 
                    analysis.weakestCategory,
                    content,
                    index + 1
                );
                analysis.suggestions.push(suggestion);
            });
        }
    }

    /**
     * Erstellt einen konkreten Optimierungsvorschlag für einen Trigger
     * @param {string} trigger - Der zu integrierende Trigger
     * @param {string} category - Die Kategorie des Triggers
     * @param {string} content - Der Original-Content
     * @param {number} priority - Priorität des Vorschlags
     * @returns {Object} Optimierungsvorschlag
     */
    createTriggerIntegrationSuggestion(trigger, category, content, priority) {
        // Finde passende Integration-Stelle
        const integrationSpot = this.findBestIntegrationSpot(content, trigger, category);
        
        return {
            priority,
            trigger,
            category,
            integrationSpot,
            originalText: integrationSpot.context,
            suggestedText: this.generateImprovedText(integrationSpot.context, trigger, category),
            expectedScoreIncrease: this.calculateExpectedIncrease(trigger, category),
            instructions: this.getIntegrationInstructions(trigger, category)
        };
    }

    /**
     * Findet die beste Stelle zur Trigger-Integration
     * @param {string} content - Der Content
     * @param {string} trigger - Der Trigger
     * @param {string} category - Die Kategorie
     * @returns {Object} Integration-Stelle
     */
    findBestIntegrationSpot(content, trigger, category) {
        const lines = content.split('\n');
        
        // Suche nach emotionalen Schlüsselstellen
        const emotionalKeywords = [
            'verstehst du', 'kennst du', 'spürst du', 'fühlst du',
            'sehnsucht', 'angst', 'unsicherheit', 'vertrauen',
            'halt', 'sicherheit', 'geborgen', 'beschützt'
        ];

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].toLowerCase();
            
            // Prüfe ob Zeile emotionale Keywords enthält
            if (emotionalKeywords.some(keyword => line.includes(keyword))) {
                return {
                    lineNumber: i + 1,
                    context: lines[i],
                    surrounding: lines.slice(Math.max(0, i-2), i+3).join('\n'),
                    type: 'emotional_context'
                };
            }
        }

        // Fallback: Erste Zeile mit genügend Text
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].length > 100) {
                return {
                    lineNumber: i + 1,
                    context: lines[i],
                    surrounding: lines.slice(Math.max(0, i-1), i+2).join('\n'),
                    type: 'text_block'
                };
            }
        }

        return {
            lineNumber: 1,
            context: lines[0] || '',
            surrounding: lines.slice(0, 3).join('\n'),
            type: 'default'
        };
    }

    /**
     * Generiert verbesserten Text mit integriertem Trigger
     * @param {string} originalText - Original-Text
     * @param {string} trigger - Der Trigger
     * @param {string} category - Die Kategorie
     * @returns {string} Verbesserter Text
     */
    generateImprovedText(originalText, trigger, category) {
        const integrationPatterns = {
            'sichere hafen': [
                'Bei mir findest du deinen sicheren Hafen',
                'In meinen Armen ist dein sicherer Hafen',
                'Du suchst einen sicheren Hafen - hier ist er'
            ],
            'rücken stärken': [
                'Ich stärke dir den Rücken',
                'Lehne dich an - ich stärke dir den Rücken',
                'Ich stärke dir den Rücken gegen alle Zweifel'
            ],
            'führung übernehmen': [
                'Ich übernehme die Führung',
                'Lass mich die Führung übernehmen',
                'Ich übernehme die Führung in diesem Moment'
            ],
            'bin ich da': [
                'Ich bin da für dich',
                'Wenn du mich brauchst - ich bin da',
                'Ich bin da, wenn du bereit bist'
            ],
            'sicher bei mir': [
                'Bei mir bist du sicher',
                'In meinen Armen bist du sicher bei mir',
                'Du bist sicher bei mir'
            ],
            'schreib mir': [
                'Schreib mir, wenn du bereit bist',
                'Trau dich, schreib mir',
                'Schreib mir deine Gedanken'
            ]
        };

        const patterns = integrationPatterns[trigger] || [`${trigger} - authentisch integriert`];
        const selectedPattern = patterns[Math.floor(Math.random() * patterns.length)];

        // Erweitere den Original-Text organisch
        if (originalText.endsWith('.')) {
            return `${originalText.slice(0, -1)}. ${selectedPattern}.`;
        } else {
            return `${originalText} ${selectedPattern}.`;
        }
    }

    /**
     * Berechnet erwartete Score-Steigerung
     * @param {string} trigger - Der Trigger
     * @param {string} category - Die Kategorie
     * @returns {number} Erwartete Steigerung in Prozent
     */
    calculateExpectedIncrease(trigger, category) {
        const categoryWeights = {
            'TraumfrauMagnetismus': 25,
            'SicherheitsVermittlung': 20,
            'BeschützerPositionierung': 20,
            'HandlungsAufforderung': 20
        };

        const categoryWeight = categoryWeights[category] || 15;
        const totalTriggers = Object.values(this.triggerCategories).flat().length;
        
        return Math.round((categoryWeight / totalTriggers) * 100);
    }

    /**
     * Gibt Integrations-Instruktionen für einen Trigger
     * @param {string} trigger - Der Trigger
     * @param {string} category - Die Kategorie
     * @returns {string} Instruktionen
     */
    getIntegrationInstructions(trigger, category) {
        const instructions = {
            'TraumfrauMagnetismus': 'Organisch in emotionale Fragen einweben, natürlich und nicht aufdringlich',
            'SicherheitsVermittlung': 'Als Versprechen formulieren, Vertrauen aufbauen',
            'BeschützerPositionierung': 'Stark und beschützend, aber nicht dominant',
            'HandlungsAufforderung': 'Sanft und einladend, keine Drucksituationen'
        };

        return instructions[category] || 'Authentisch und situationsgerecht integrieren';
    }

    /**
     * Generiert einen detaillierten Optimierungsplan
     * @param {string} filePath - Pfad zur Datei
     * @returns {Object} Optimierungsplan
     */
    generateOptimizationPlan(filePath) {
        const content = fs.readFileSync(filePath, 'utf8');
        const fileName = path.basename(filePath);
        
        const analysis = this.analyzeContent(content, fileName);
        
        return {
            file: fileName,
            currentScore: analysis.currentScore,
            targetScore: 60,
            gap: 60 - analysis.currentScore,
            priority: this.calculatePriority(analysis.currentScore),
            suggestions: analysis.suggestions,
            estimatedTime: this.estimateOptimizationTime(analysis.suggestions.length),
            nextSteps: this.generateNextSteps(analysis)
        };
    }

    /**
     * Berechnet Priorität basierend auf Score
     * @param {number} score - Aktueller Score
     * @returns {string} Priorität
     */
    calculatePriority(score) {
        if (score >= 50) return 'HIGH (nahe am Ziel)';
        if (score >= 30) return 'MEDIUM (mittlere Distanz)';
        if (score >= 15) return 'LOW (große Distanz)';
        return 'CRITICAL (sehr niedrig)';
    }

    /**
     * Schätzt Optimierungszeit
     * @param {number} suggestionCount - Anzahl Vorschläge
     * @returns {string} Geschätzte Zeit
     */
    estimateOptimizationTime(suggestionCount) {
        const minutesPerSuggestion = 3;
        const totalMinutes = suggestionCount * minutesPerSuggestion;
        return `${totalMinutes} Minuten (${suggestionCount} Optimierungen)`;
    }

    /**
     * Generiert nächste Schritte
     * @param {Object} analysis - Die Analyse
     * @returns {Array} Nächste Schritte
     */
    generateNextSteps(analysis) {
        const steps = [
            `1. Fokus auf ${analysis.weakestCategory} (schwächste Kategorie)`,
            `2. Integriere fehlende Trigger organisch`,
            `3. Führe 'pnpm build' aus für Score-Messung`,
            `4. Wiederhole bis 60%+ erreicht`
        ];

        if (analysis.currentScore >= 50) {
            steps.unshift('QUICK WIN: Nur 1-2 Optimierungen nötig!');
        }

        return steps;
    }
}

module.exports = ContentOptimizer;
