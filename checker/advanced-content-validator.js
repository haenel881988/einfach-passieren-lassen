import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

// ==================== ADVANCED CHECKLIST ROTATION SYSTEM ====================

class AdvancedContentValidator {
    constructor() {
        this.checklistsPath = '.github/instructions/checklisten/checks';
        this.checklists = [];
        this.rotationState = new Map(); // Tracks which checklists were used for which files
        this.loadChecklists();
    }

    loadChecklists() {
        try {
            const checklistFiles = fs.readdirSync(this.checklistsPath)
                .filter(file => file.endsWith('.md'))
                .map(file => {
                    const content = fs.readFileSync(path.join(this.checklistsPath, file), 'utf8');
                    return {
                        name: file.replace('.md', ''),
                        file: file,
                        content: content,
                        criteriaCount: this.extractCriteriaCount(content),
                        theme: this.extractTheme(file),
                        weight: this.calculateWeight(file)
                    };
                });

            this.checklists = checklistFiles;
            console.log(chalk.blue(`📋 Loaded ${this.checklists.length} advanced checklists`));
        } catch (error) {
            console.log(chalk.red(`❌ Error loading checklists: ${error.message}`));
            this.checklists = [];
        }
    }

    extractCriteriaCount(content) {
        // Count bullet points (- ) in the checklist
        const matches = content.match(/^- /gm);
        return matches ? matches.length : 0;
    }

    // ==================== SINNLOSIGKEITS-DETEKTOR ====================
    detectLogicalInconsistencies(content, changes = []) {
        const issues = [];
        
        // 1. UNVOLLSTÄNDIGE SÄTZE (wie "fühlst du dich" ohne Kontext)
        const incompletePhrases = [
            /fühlst du dich(?!\s+\w{4,})/g,  // "fühlst du dich" ohne substantielle Fortsetzung
            /suchst du auch(?!\s+\w{4,})/g,  // "suchst du auch" ohne Kontext
            /verstehe ich(?!\s+\w{4,})/g,    // "verstehe ich" isoliert
            /träumst du davon(?!\s+\w{4,})/g // "träumst du davon" ohne Erklärung
        ];
        
        incompletePhrases.forEach(pattern => {
            const matches = content.match(pattern);
            if (matches) {
                issues.push({
                    type: 'INCOMPLETE_TRIGGER_PHRASE',
                    message: `Unvollständiger Trigger ohne Kontext gefunden: "${matches[0]}"`,
                    severity: 'CRITICAL',
                    suggestion: 'Trigger organisch in sinnvollen Kontext einbetten'
                });
            }
        });

        // 2. ABSURDE SPRACHKONSTRUKTE (wie "denkst du dir auf Schweizerdeutsch")
        const absurdPhrases = this.detectAbsurdPhrases(content);
        issues.push(...absurdPhrases);

        // 3. COPY-CAT DETECTION (wiederkehrende Textblöcke)
        const copyCatIssues = this.detectCopyCatText(content);
        issues.push(...copyCatIssues);

        // 4. KEYWORD-STUFFING ohne logische Verbindung
        const suspiciousRepeats = this.detectKeywordStuffing(content);
        if (suspiciousRepeats.length > 0) {
            issues.push({
                type: 'KEYWORD_STUFFING',
                message: `Verdächtiges Keyword-Stuffing: ${suspiciousRepeats.join(', ')}`,
                severity: 'HIGH',
                suggestion: 'Keywords natürlich und organisch verteilen'
            });
        }

        // 5. GRAMMATIKALISCHE DISKREPANZEN
        const grammarIssues = this.detectGrammarInconsistencies(content);
        issues.push(...grammarIssues);

        // 6. THEMATISCHE INKONSISTENZ
        const thematicIssues = this.detectThematicInconsistencies(content);
        issues.push(...thematicIssues);

        // 7. FLUSS-PROBLEME zwischen Abschnitten
        const flowIssues = this.detectFlowProblems(content);
        issues.push(...flowIssues);

        return issues;
    }

    detectAbsurdPhrases(content) {
        const issues = [];
        
        // ABSURDE SPRACHKONSTRUKTE - völlig deplatzierte Sätze
        const absurdPatterns = [
            /denkst du dir auf Schweizerdeutsch/gi,
            /sagst du auf [A-Za-z]+/gi,
            /\w+st du dir auf \w+deutsch/gi,
            /denkst du dir in \w+/gi,
            /sagst du in \w+sprache/gi,
            /überlegst du dir auf \w+/gi,
            /formulierst du auf \w+/gi
        ];

        absurdPatterns.forEach(pattern => {
            const matches = content.match(pattern);
            if (matches) {
                matches.forEach(match => {
                    issues.push({
                        type: 'ABSURD_LANGUAGE_CONSTRUCT',
                        message: `Völlig deplatzierte Sprachkonstruktion gefunden: "${match}"`,
                        severity: 'CRITICAL',
                        suggestion: 'Absurde Sprachkonstrukte entfernen - passen nicht zum Thema'
                    });
                });
            }
        });

        // DEPLATZIERTE SPRACHREFERENZEN
        const languageReferences = [
            /auf deutsch/gi,
            /auf englisch/gi,
            /auf französisch/gi,
            /in deutscher sprache/gi,
            /in \w+sprache/gi
        ];

        languageReferences.forEach(pattern => {
            const matches = content.match(pattern);
            if (matches) {
                matches.forEach(match => {
                    issues.push({
                        type: 'MISPLACED_LANGUAGE_REFERENCE',
                        message: `Deplatzierte Sprachreferenz: "${match}"`,
                        severity: 'HIGH',
                        suggestion: 'Sprachreferenzen in emotionalem Content vermeiden'
                    });
                });
            }
        });

        return issues;
    }

    detectCopyCatText(content) {
        const issues = [];
        
        // Teile Content in Sätze auf
        const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 20);
        const duplicates = new Map();
        
        // Ähnliche Sätze finden (mehr als 70% Übereinstimmung)
        sentences.forEach((sentence, index) => {
            const normalizedSentence = sentence.trim().toLowerCase();
            sentences.slice(index + 1).forEach((otherSentence, otherIndex) => {
                const normalizedOther = otherSentence.trim().toLowerCase();
                const similarity = this.calculateSimilarity(normalizedSentence, normalizedOther);
                
                if (similarity > 0.7) {
                    const key = `${normalizedSentence.substring(0, 50)}...`;
                    if (!duplicates.has(key)) {
                        duplicates.set(key, []);
                    }
                    duplicates.get(key).push({
                        original: sentence.trim(),
                        duplicate: otherSentence.trim(),
                        similarity: Math.round(similarity * 100)
                    });
                }
            });
        });

        // COPY-CAT ISSUES erstellen
        duplicates.forEach((matches, key) => {
            if (matches.length > 0) {
                issues.push({
                    type: 'COPY_CAT_TEXT',
                    message: `Copy-Cat Text gefunden (${matches[0].similarity}% ähnlich): "${key}"`,
                    severity: 'HIGH',
                    suggestion: 'Wiederholende Textpassagen umformulieren oder entfernen',
                    details: matches
                });
            }
        });

        // PHRASEN-WIEDERHOLUNGEN (exakte Matches)
        const phrasePattern = /(.{20,})\1+/g;
        const repeats = content.match(phrasePattern);
        if (repeats) {
            repeats.forEach(repeat => {
                issues.push({
                    type: 'EXACT_PHRASE_REPETITION',
                    message: `Exakte Phrasen-Wiederholung gefunden: "${repeat.substring(0, 50)}..."`,
                    severity: 'CRITICAL',
                    suggestion: 'Identische Phrasen-Wiederholungen entfernen'
                });
            });
        }

        return issues;
    }

    calculateSimilarity(str1, str2) {
        // Levenshtein-ähnlicher Algorithmus für Textähnlichkeit
        const words1 = str1.split(/\s+/);
        const words2 = str2.split(/\s+/);
        
        const commonWords = words1.filter(word => 
            words2.includes(word) && word.length > 3
        );
        
        const totalWords = Math.max(words1.length, words2.length);
        return commonWords.length / totalWords;
    }

    detectFlowProblems(content) {
        const issues = [];
        
        // ABRUPTE ÜBERGÄNGE zwischen Absätzen
        const paragraphs = content.split('\n\n').filter(p => p.trim().length > 50);
        
        paragraphs.forEach((paragraph, index) => {
            if (index < paragraphs.length - 1) {
                const currentEnd = paragraph.trim().split('.').slice(-2).join('.').toLowerCase();
                const nextStart = paragraphs[index + 1].trim().split('.')[0].toLowerCase();
                
                // Prüfe auf abrupte Themenwechsel ohne Übergang
                if (this.hasAbruptTransition(currentEnd, nextStart)) {
                    issues.push({
                        type: 'ABRUPT_FLOW_TRANSITION',
                        message: `Abrupter Übergang zwischen Absätzen ${index + 1} und ${index + 2}`,
                        severity: 'MEDIUM',
                        suggestion: 'Sanfteren Übergang zwischen Themen schaffen',
                        context: `"${currentEnd.substring(0, 50)}..." → "${nextStart.substring(0, 50)}..."`
                    });
                }
            }
        });

        return issues;
    }

    hasAbruptTransition(endText, startText) {
        // Übergangs-Keywords die sanfte Verbindungen anzeigen
        const transitionWords = [
            'deshalb', 'daher', 'deswegen', 'also', 'somit',
            'außerdem', 'zudem', 'darüber hinaus', 'weiterhin',
            'jedoch', 'aber', 'dennoch', 'trotzdem',
            'gleichzeitig', 'dabei', 'während', 'währenddessen'
        ];
        
        const hasTransition = transitionWords.some(word => 
            startText.includes(word) || endText.includes(word)
        );
        
        // Wenn keine Übergangswörter und verschiedene Themenwörter
        if (!hasTransition) {
            const emotionalWords = ['fühl', 'denk', 'angst', 'sicher', 'vertrauen', 'lieb'];
            const endEmotion = emotionalWords.filter(word => endText.includes(word));
            const startEmotion = emotionalWords.filter(word => startText.includes(word));
            
            // Verschiedene emotionale Themen ohne Übergang = abrupt
            return endEmotion.length > 0 && startEmotion.length > 0 && 
                   !endEmotion.some(word => startEmotion.includes(word));
        }
        
        return false;
    }

    detectKeywordStuffing(content) {
        const keywords = ['fühlst du', 'suchst du', 'verstehst du', 'träumst du', 'kennst du'];
        const stuffed = [];
        
        keywords.forEach(keyword => {
            const regex = new RegExp(keyword, 'gi');
            const matches = content.match(regex);
            if (matches && matches.length > 3) { // Mehr als 3x = verdächtig
                stuffed.push(`"${keyword}" (${matches.length}x)`);
            }
        });
        
        return stuffed;
    }

    detectGrammarInconsistencies(content) {
        const issues = [];
        
        // Unvollständige Sätze nach Fragen
        const incompleteAfterQuestion = /\?\s+[A-Z][^.!?]*$/gm;
        const matches = content.match(incompleteAfterQuestion);
        if (matches) {
            issues.push({
                type: 'INCOMPLETE_SENTENCE_AFTER_QUESTION',
                message: `Unvollständiger Satz nach Frage: "${matches[0].trim()}"`,
                severity: 'MEDIUM',
                suggestion: 'Sätze nach Fragen vollständig ausführen'
            });
        }

        return issues;
    }

    detectThematicInconsistencies(content) {
        const issues = [];
        
        // Thematischer Bruch: Plötzlicher Wechsel ohne Übergang
        const abruptTopicChanges = [
            /\.\s+Aber plötzlich\s+/g,
            /\.\s+Übrigens\s+/g,
            /\.\s+Apropos\s+/g
        ];
        
        abruptTopicChanges.forEach(pattern => {
            const matches = content.match(pattern);
            if (matches) {
                issues.push({
                    type: 'ABRUPT_TOPIC_CHANGE',
                    message: `Abrupter Themenwechsel ohne Übergang gefunden`,
                    severity: 'MEDIUM',
                    suggestion: 'Sanfte Übergänge zwischen Themen schaffen'
                });
            }
        });

        return issues;
    }

    extractTheme(filename) {
        // BINDUNGSSEHNSUCHT-zentrierte Themen-Hierarchie
        const themes = {
            // === HAUPTCLUSTER ===
            'bindung-sicherheit': 'BINDUNG_KERN',
            
            // === BINDUNGS-VERSTÄRKER ===
            'leere-verschmelzung': 'VERSCHMELZUNG', 
            'sog_hingabe': 'HINGABE',
            'passivitaet': 'PASSIVITÄT',
            
            // === BINDUNGS-ENABLER ===
            'bindungstrauma': 'TRAUMA',
            'scham-tabus': 'SCHAM',
            'erstesmal': 'INITIATION',
            
            // === BINDUNGS-AUSDRUCK ===
            'besitz': 'BESITZ',
            'koerperlichkeit': 'KÖRPER',
            
            // === BINDUNGS-KONTEXT ===
            'schicksal': 'SCHICKSAL',
            'zweifel': 'ZWEIFEL',
            'gemeinschaft': 'GEMEINSCHAFT'
        };

        for (const [key, theme] of Object.entries(themes)) {
            if (filename.includes(key)) return theme;
        }
        return 'BINDUNG_ALLGEMEIN'; // Default führt zu Bindung
    }

    calculateWeight(filename) {
        // BINDUNGSSEHNSUCHT als HAUPTCLUSTER - höchste Gewichtung
        // Alle anderen als Untercluster mit abgestuften Gewichtungen
        const weights = {
            // === HAUPTCLUSTER ===
            'bindung-sicherheit': 20, // KERN-THEMA - absolute Priorität
            
            // === DIREKTE BINDUNGS-VERSTÄRKER (Tier 1) ===
            'leere-verschmelzung': 18, // "gehalten werden", "Verschmelzung", "Aufnahme"
            'sog_hingabe': 17,         // "bedingungslose Aufnahme", "fallen lassen"
            'passivitaet': 16,         // "Kontrollabgabe", "einer übernimmt"
            
            // === BINDUNGS-ENABLER (Tier 2) ===
            'bindungstrauma': 15,      // Wege zur Bindung durch Heilung
            'scham-tabus': 14,         // "darf alles sein ohne Bewertung"
            'erstesmal': 13,           // "darf alles fragen, darf alles sein"
            
            // === BINDUNGS-AUSDRUCK (Tier 3) ===
            'besitz': 12,              // "radikale Steigerung der Verschmelzungssehnsucht"
            'koerperlichkeit': 11,     // "auch mit allem was ich bin, willkommen"
            
            // === BINDUNGS-KONTEXT (Tier 4) ===
            'schicksal': 8,            // Philosophischer Rahmen
            'zweifel': 6,              // Rationale Überwindung für emotionale Bindung
            'gemeinschaft': 5          // Soziale Dimension
        };

        for (const [key, weight] of Object.entries(weights)) {
            if (filename.includes(key)) return weight;
        }
        return 10; // Default weight für unbekannte Checklisten
    }

    // ==================== INTELLIGENT ROTATION ALGORITHM ====================

    selectChecklistsForFile(filename, content) {
        const fileTheme = this.analyzeContentTheme(content);
        const previouslyUsed = this.rotationState.get(filename) || [];
        
        console.log(chalk.cyan(`🎯 Analyzing: ${filename}`));
        console.log(chalk.gray(`   Detected theme: ${fileTheme}`));
        
        // STEP 1: Select primary checklist based on content theme
        const primaryChecklist = this.selectPrimaryChecklist(fileTheme, previouslyUsed);
        
        // STEP 2: Select 1-2 complementary checklists
        const complementaryChecklists = this.selectComplementaryChecklists(
            primaryChecklist, fileTheme, previouslyUsed
        );
        
        const selectedChecklists = [primaryChecklist, ...complementaryChecklists].filter(Boolean);
        
        // Update rotation state
        this.rotationState.set(filename, selectedChecklists.map(c => c.name));
        
        console.log(chalk.green(`   Selected checklists: ${selectedChecklists.map(c => c.theme).join(', ')}`));
        
        return selectedChecklists;
    }

    analyzeContentTheme(content) {
        // BINDUNGSSEHNSUCHT-zentrierte Content-Analyse
        const themeKeywords = {
            // === HAUPTCLUSTER: Bindungssehnsucht ===
            'BINDUNG_KERN': ['sicher', 'hafen', 'gehalten', 'bindung', 'zuhause', 'ankommen', 'aufgenommen', 'geborgen'],
            
            // === BINDUNGS-VERSTÄRKER ===
            'VERSCHMELZUNG': ['verschmelzung', 'eins werden', 'auflösen', 'verlieren', 'aufgehen', 'fallen lassen'],
            'HINGABE': ['hingabe', 'loslassen', 'fallen lassen', 'abgeben', 'überlassen', 'vertrauen'],
            'PASSIVITÄT': ['führung', 'übernehmen', 'passiv', 'geführt', 'entscheidung', 'übernimmt'],
            
            // === BINDUNGS-ENABLER ===  
            'TRAUMA': ['trauma', 'verlust', 'angst', 'enttäuschung', 'verlassen', 'allein'],
            'SCHAM': ['scham', 'tabu', 'geheim', 'verstecken', 'bewertung', 'urteilen'],
            'INITIATION': ['erste mal', 'erstes mal', 'jungfrau', 'unerfahren', 'neu'],
            
            // === BINDUNGS-AUSDRUCK ===
            'BESITZ': ['gehören', 'mein', 'dein', 'besitz', 'markierung', 'exklusiv'],
            'KÖRPER': ['körper', 'berührung', 'physisch', 'brust', 'sinnlich', 'brüste'],
            
            // === BINDUNGS-KONTEXT ===
            'SCHICKSAL': ['schicksal', 'bestimmt', 'vorherbestimmt', 'fügung'],
            'ZWEIFEL': ['zweifel', 'unsicher', 'fragen', 'richtig'],
            'GEMEINSCHAFT': ['gemeinschaft', 'zusammen', 'verständnis', 'verstehen']
        };

        const scores = {};
        const lowerContent = content.toLowerCase();

        // Bindungssehnsucht-Keywords haben doppelte Gewichtung
        for (const [theme, keywords] of Object.entries(themeKeywords)) {
            let score = 0;
            keywords.forEach(keyword => {
                const matches = (lowerContent.match(new RegExp(keyword, 'g')) || []).length;
                // BINDUNG_KERN bekommt 3x Gewichtung, andere Bindungs-Verstärker 2x
                const multiplier = theme === 'BINDUNG_KERN' ? 3 : 
                                 ['VERSCHMELZUNG', 'HINGABE', 'PASSIVITÄT'].includes(theme) ? 2 : 1;
                score += matches * multiplier;
            });
            scores[theme] = score;
        }

        // Return theme with highest score, mit Bindungs-Präferenz
        const maxTheme = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        return maxTheme;
    }

    selectPrimaryChecklist(theme, previouslyUsed) {
        // BINDUNGSSEHNSUCHT-PRIORITÄT: Immer Bindung bevorzugen wenn verfügbar
        
        // 1. ERSTE PRIORITÄT: Bindung-Sicherheit wenn nicht verwendet
        if (!previouslyUsed.includes('checklist-bindung-sicherheit')) {
            const bindungChecklist = this.checklists.find(c => c.name === 'checklist-bindung-sicherheit');
            if (bindungChecklist) {
                return bindungChecklist;
            }
        }
        
        // 2. BINDUNGS-VERSTÄRKER wenn Bindung-Kern schon verwendet
        const bindungsVerstaerker = ['checklist-leere-verschmelzung', 'checkliste_sog_hingabe', 'checklist-passivitaet'];
        for (const checklist of bindungsVerstaerker) {
            if (!previouslyUsed.includes(checklist)) {
                const found = this.checklists.find(c => c.name === checklist);
                if (found) return found;
            }
        }
        
        // 3. Theme-spezifische Checklisten
        const candidates = this.checklists.filter(checklist => {
            if (previouslyUsed.includes(checklist.name)) return false;
            return checklist.theme === theme || this.isThemeCompatible(checklist.theme, theme);
        });

        if (candidates.length === 0) {
            // Fallback: any unused checklist, aber Bindung bevorzugen
            const unused = this.checklists.filter(c => !previouslyUsed.includes(c.name));
            return unused.sort((a, b) => b.weight - a.weight)[0] || this.checklists[0];
        }

        // Select highest weighted candidate
        return candidates.sort((a, b) => b.weight - a.weight)[0];
    }

    selectComplementaryChecklists(primaryChecklist, fileTheme, previouslyUsed) {
        const usedNames = [...previouslyUsed, primaryChecklist.name];
        const maxComplementary = 2; // Maximum 2 additional checklists
        
        const candidates = this.checklists.filter(checklist => {
            if (usedNames.includes(checklist.name)) return false;
            return this.isComplementaryTheme(checklist.theme, fileTheme, primaryChecklist.theme);
        });

        // Sort by compatibility and weight
        const selected = candidates
            .sort((a, b) => b.weight - a.weight)
            .slice(0, maxComplementary);

        return selected;
    }

    isThemeCompatible(checklistTheme, contentTheme) {
        // BINDUNGSSEHNSUCHT-ZENTRALE KOMPATIBILITÄT
        // Alle Themes sind mit Bindung kompatibel (Bindung = Hauptcluster)
        
        const compatibility = {
            // === HAUPTCLUSTER ===
            'BINDUNG_KERN': ['VERSCHMELZUNG', 'HINGABE', 'PASSIVITÄT', 'TRAUMA', 'SCHAM', 'INITIATION', 'BESITZ', 'KÖRPER'],
            
            // === BINDUNGS-VERSTÄRKER ===
            'VERSCHMELZUNG': ['BINDUNG_KERN', 'HINGABE', 'PASSIVITÄT', 'TRAUMA'],
            'HINGABE': ['BINDUNG_KERN', 'VERSCHMELZUNG', 'PASSIVITÄT', 'SCHAM'],
            'PASSIVITÄT': ['BINDUNG_KERN', 'HINGABE', 'VERSCHMELZUNG', 'SCHAM'],
            
            // === BINDUNGS-ENABLER ===
            'TRAUMA': ['BINDUNG_KERN', 'VERSCHMELZUNG', 'SCHAM', 'INITIATION'],
            'SCHAM': ['BINDUNG_KERN', 'TRAUMA', 'INITIATION', 'KÖRPER'],
            'INITIATION': ['BINDUNG_KERN', 'SCHAM', 'KÖRPER', 'TRAUMA'],
            
            // === BINDUNGS-AUSDRUCK ===
            'BESITZ': ['BINDUNG_KERN', 'PASSIVITÄT', 'VERSCHMELZUNG'],
            'KÖRPER': ['BINDUNG_KERN', 'INITIATION', 'SCHAM'],
            
            // === BINDUNGS-KONTEXT ===
            'SCHICKSAL': ['BINDUNG_KERN', 'VERSCHMELZUNG'],
            'ZWEIFEL': ['BINDUNG_KERN', 'SCHAM'],
            'GEMEINSCHAFT': ['BINDUNG_KERN']
        };

        return compatibility[checklistTheme]?.includes(contentTheme) || 
               compatibility[contentTheme]?.includes(checklistTheme) ||
               contentTheme === 'BINDUNG_KERN' || checklistTheme === 'BINDUNG_KERN'; // Bindung ist immer kompatibel
    }

    isComplementaryTheme(checklistTheme, contentTheme, primaryTheme) {
        // BINDUNGSSEHNSUCHT-ZENTRALE KOMPLEMENTARITÄT
        // Alles ergänzt sich um Bindung herum
        
        const complementary = {
            // === HAUPTCLUSTER ergänzt sich mit allem ===
            'BINDUNG_KERN': ['VERSCHMELZUNG', 'HINGABE', 'PASSIVITÄT', 'TRAUMA', 'SCHAM', 'INITIATION', 'BESITZ', 'KÖRPER'],
            
            // === BINDUNGS-VERSTÄRKER ergänzen sich untereinander ===
            'VERSCHMELZUNG': ['HINGABE', 'PASSIVITÄT', 'BINDUNG_KERN', 'TRAUMA'],
            'HINGABE': ['PASSIVITÄT', 'VERSCHMELZUNG', 'BINDUNG_KERN', 'SCHAM'],
            'PASSIVITÄT': ['HINGABE', 'VERSCHMELZUNG', 'BINDUNG_KERN', 'BESITZ'],
            
            // === BINDUNGS-ENABLER führen zu Verstärkern ===
            'TRAUMA': ['BINDUNG_KERN', 'VERSCHMELZUNG', 'HINGABE'],
            'SCHAM': ['BINDUNG_KERN', 'HINGABE', 'INITIATION'],
            'INITIATION': ['BINDUNG_KERN', 'SCHAM', 'KÖRPER'],
            
            // === BINDUNGS-AUSDRUCK verstärkt Kern ===
            'BESITZ': ['BINDUNG_KERN', 'PASSIVITÄT', 'VERSCHMELZUNG'],
            'KÖRPER': ['BINDUNG_KERN', 'INITIATION', 'SCHAM']
        };

        return complementary[primaryTheme]?.includes(checklistTheme) && 
               checklistTheme !== contentTheme && 
               checklistTheme !== primaryTheme;
    }

    // ==================== CHECKLIST EVALUATION ====================

    evaluateContentWithChecklists(filename, content) {
        console.log(chalk.blue(`🧠 Running advanced checklist validation for ${filename}...`));
        
        // ==================== SINNLOSIGKEITS-CHECK ZUERST ====================
        console.log(chalk.yellow(`🔍 Prüfe logische Konsistenz...`));
        const logicalIssues = this.detectLogicalInconsistencies(content);
        
        if (logicalIssues.length > 0) {
            console.log(chalk.red(`🚨 LOGISCHE PROBLEME GEFUNDEN:`));
            logicalIssues.forEach(issue => {
                const color = issue.severity === 'CRITICAL' ? chalk.red : 
                             issue.severity === 'HIGH' ? chalk.yellow : chalk.gray;
                console.log(color(`   ${issue.type}: ${issue.message}`));
                console.log(color(`   → ${issue.suggestion}`));
            });
        } else {
            console.log(chalk.green(`✅ Keine logischen Inkonsistenzen gefunden`));
        }

        const selectedChecklists = this.selectChecklistsForFile(filename, content);
        const results = [];

        for (const checklist of selectedChecklists) {
            const evaluation = this.evaluateAgainstChecklist(content, checklist);
            results.push({
                checklist: checklist.name,
                theme: checklist.theme,
                score: evaluation.score,
                passedCriteria: evaluation.passed,
                failedCriteria: evaluation.failed,
                recommendations: evaluation.recommendations
            });
        }

        return {
            filename,
            totalScore: this.calculateTotalScore(results),
            checklistResults: results,
            overallRecommendations: this.generateOverallRecommendations(results),
            logicalIssues: logicalIssues // NEU: Inkludiere logische Probleme
        };
    }

    evaluateAgainstChecklist(content, checklist) {
        const criteria = this.extractCriteria(checklist.content);
        const passed = [];
        const failed = [];
        const recommendations = [];

        for (const criterion of criteria) {
            const isMatched = this.evaluateCriterion(content, criterion);
            if (isMatched) {
                passed.push(criterion);
            } else {
                failed.push(criterion);
                recommendations.push(this.generateRecommendation(criterion, checklist.theme));
            }
        }

        const score = Math.round((passed.length / criteria.length) * 100);

        return { score, passed, failed, recommendations };
    }

    extractCriteria(checklistContent) {
        const lines = checklistContent.split('\n');
        const criteria = [];
        
        for (const line of lines) {
            if (line.trim().startsWith('- ') && !line.includes('**') && line.length > 10) {
                const criterion = line.replace(/^- /, '').trim();
                if (criterion.endsWith('?')) {
                    criteria.push(criterion);
                }
            }
        }
        
        return criteria;
    }

    evaluateCriterion(content, criterion) {
        // Advanced NLP-like evaluation
        const keywords = this.extractKeywordsFromCriterion(criterion);
        const lowerContent = content.toLowerCase();
        
        let matches = 0;
        for (const keyword of keywords) {
            if (lowerContent.includes(keyword.toLowerCase())) {
                matches++;
            }
        }
        
        // Require at least 50% keyword coverage
        return matches >= Math.ceil(keywords.length * 0.5);
    }

    extractKeywordsFromCriterion(criterion) {
        // Extract key emotional/psychological terms
        const emotionalKeywords = [
            'bindung', 'sicherheit', 'gehalten', 'besitz', 'gehören', 'verschmelzung',
            'hingabe', 'passivität', 'führung', 'trauma', 'verlust', 'scham', 'tabu',
            'körper', 'berührung', 'sinnlich', 'vertrauen', 'angst', 'sehnsucht'
        ];
        
        const words = criterion.toLowerCase().split(/\s+/);
        const relevantWords = words.filter(word => 
            emotionalKeywords.some(keyword => word.includes(keyword)) ||
            word.length > 6 // Longer words often carry more meaning
        );
        
        return relevantWords.slice(0, 5); // Top 5 most relevant words
    }

    generateRecommendation(criterion, theme) {
        // BINDUNGSSEHNSUCHT-ZENTRALE EMPFEHLUNGEN
        const themeRecommendations = {
            // === HAUPTCLUSTER ===
            'BINDUNG_KERN': 'Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis',
            
            // === BINDUNGS-VERSTÄRKER ===
            'VERSCHMELZUNG': 'Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"',
            'HINGABE': 'Verstärke "loslassen", "vertrauen", "sich überlassen"',
            'PASSIVITÄT': 'Integriere "Führung übernehmen", "einer entscheidet", "sich führen lassen"',
            
            // === BINDUNGS-ENABLER ===
            'TRAUMA': 'Adressiere "Heilung durch Bindung", "endlich sicher sein"',
            'SCHAM': 'Vermittle "darf alles sein ohne Bewertung", "keine Scham nötig"',
            'INITIATION': 'Betone "darf alles fragen", "wird verstanden ohne Erklärung"',
            
            // === BINDUNGS-AUSDRUCK ===
            'BESITZ': 'Verstärke "gehören", "exklusiv sein", "markiert werden"',
            'KÖRPER': 'Integriere "mit allem willkommen", "körperliche Aufnahme"',
            
            // === BINDUNGS-KONTEXT ===
            'SCHICKSAL': 'Betone "vorherbestimmt", "Schicksal führt zusammen"',
            'ZWEIFEL': 'Löse Zweifel durch "bedingungslose Aufnahme"',
            'GEMEINSCHAFT': 'Verstärke "verstanden werden", "Zugehörigkeit"'
        };

        return {
            criterion: criterion.substring(0, 100) + '...',
            suggestion: themeRecommendations[theme] || 'Verstärke Bindungssehnsucht-Aspekte',
            theme: theme,
            bindungsRelevanz: this.getBindungsRelevanz(theme)
        };
    }

    getBindungsRelevanz(theme) {
        // Zeigt wie direkt das Theme zur Bindungssehnsucht führt
        const relevanz = {
            'BINDUNG_KERN': 'DIREKTER KERN',
            'VERSCHMELZUNG': 'PRIMÄRER VERSTÄRKER', 
            'HINGABE': 'PRIMÄRER VERSTÄRKER',
            'PASSIVITÄT': 'PRIMÄRER VERSTÄRKER',
            'TRAUMA': 'ENABLER → BINDUNG',
            'SCHAM': 'ENABLER → BINDUNG', 
            'INITIATION': 'ENABLER → BINDUNG',
            'BESITZ': 'AUSDRUCK DER BINDUNG',
            'KÖRPER': 'AUSDRUCK DER BINDUNG'
        };
        return relevanz[theme] || 'FÜHRT ZU BINDUNG';
    }

    calculateTotalScore(results) {
        if (results.length === 0) return 0;
        
        const weightedSum = results.reduce((sum, result) => {
            const weight = this.getThemeWeight(result.theme);
            return sum + (result.score * weight);
        }, 0);
        
        const totalWeight = results.reduce((sum, result) => {
            return sum + this.getThemeWeight(result.theme);
        }, 0);
        
        return Math.round(weightedSum / totalWeight);
    }

    getThemeWeight(theme) {
        // BINDUNGSSEHNSUCHT-ZENTRALE GEWICHTUNG
        const weights = {
            // === HAUPTCLUSTER ===
            'BINDUNG_KERN': 20,
            
            // === BINDUNGS-VERSTÄRKER ===
            'VERSCHMELZUNG': 18,
            'HINGABE': 17,
            'PASSIVITÄT': 16,
            
            // === BINDUNGS-ENABLER ===
            'TRAUMA': 15,
            'SCHAM': 14,
            'INITIATION': 13,
            
            // === BINDUNGS-AUSDRUCK ===
            'BESITZ': 12,
            'KÖRPER': 11,
            
            // === BINDUNGS-KONTEXT ===
            'SCHICKSAL': 8,
            'ZWEIFEL': 6,
            'GEMEINSCHAFT': 5
        };
        return weights[theme] || 10; // Default für unbekannte Themes
    }

    generateOverallRecommendations(results) {
        const lowScoreChecklists = results.filter(r => r.score < 70);
        if (lowScoreChecklists.length === 0) {
            return ['Excellent psychological depth achieved across all evaluated themes'];
        }

        return lowScoreChecklists.map(result => 
            `Improve ${result.theme} theme (${result.score}%): ${result.recommendations[0]?.suggestion || 'Add more depth'}`
        );
    }

    // ==================== ROTATION STATE MANAGEMENT ====================

    saveRotationState() {
        const stateFile = 'scripts/checklist-rotation-state.json';
        const state = Object.fromEntries(this.rotationState);
        fs.writeFileSync(stateFile, JSON.stringify(state, null, 2));
    }

    loadRotationState() {
        const stateFile = 'scripts/checklist-rotation-state.json';
        if (fs.existsSync(stateFile)) {
            const state = JSON.parse(fs.readFileSync(stateFile, 'utf8'));
            this.rotationState = new Map(Object.entries(state));
        }
    }

    resetRotation() {
        this.rotationState.clear();
        console.log(chalk.yellow('🔄 Rotation state reset - fresh checklist selection for all files'));
    }

    getRotationStatus() {
        const status = {};
        for (const [filename, usedChecklists] of this.rotationState) {
            status[filename] = {
                usedChecklists: usedChecklists,
                availableChecklists: this.checklists.length - usedChecklists.length
            };
        }
        return status;
    }
}

// ==================== EXPORT ====================

export default AdvancedContentValidator;

// Usage example:
/*
const validator = new AdvancedContentValidator();
const evaluation = validator.evaluateContentWithChecklists('blog-file.md', content);
console.log(evaluation);
*/
