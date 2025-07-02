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

    extractTheme(filename) {
        // Extract primary theme from filename
        const themes = {
            'bindung-sicherheit': 'BINDUNG',
            'besitz': 'BESITZ', 
            'bindungstrauma': 'TRAUMA',
            'erstesmal': 'INITIATION',
            'koerperlichkeit': 'KÖRPER',
            'leere-verschmelzung': 'VERSCHMELZUNG',
            'passivitaet': 'PASSIVITÄT',
            'scham-tabus': 'SCHAM',
            'schicksal': 'SCHICKSAL',
            'sog_hingabe': 'HINGABE',
            'zweifel': 'ZWEIFEL'
        };

        for (const [key, theme] of Object.entries(themes)) {
            if (filename.includes(key)) return theme;
        }
        return 'GENERAL';
    }

    calculateWeight(filename) {
        // Different weights based on psychological impact
        const weights = {
            'bindung-sicherheit': 10, // Core theme - highest weight
            'leere-verschmelzung': 9,
            'sog_hingabe': 9,
            'besitz': 8,
            'passivitaet': 8,
            'bindungstrauma': 7,
            'erstesmal': 6,
            'scham-tabus': 6,
            'koerperlichkeit': 5,
            'schicksal': 4,
            'zweifel': 3
        };

        for (const [key, weight] of Object.entries(weights)) {
            if (filename.includes(key)) return weight;
        }
        return 5; // Default weight
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
        const themeKeywords = {
            'BINDUNG': ['sicher', 'hafen', 'gehalten', 'bindung', 'zuhause', 'ankommen'],
            'BESITZ': ['gehören', 'mein', 'dein', 'besitz', 'markierung', 'exklusiv'],
            'VERSCHMELZUNG': ['leere', 'verschmelzung', 'eins werden', 'verlieren', 'aufgehen'],
            'HINGABE': ['hingabe', 'loslassen', 'fallen lassen', 'abgeben'],
            'PASSIVITÄT': ['führung', 'übernehmen', 'passiv', 'geführt', 'entscheidung'],
            'TRAUMA': ['trauma', 'verlust', 'angst', 'enttäuschung', 'verlassen'],
            'INITIATION': ['erste mal', 'erstes mal', 'jungfrau', 'unerfahren'],
            'SCHAM': ['scham', 'tabu', 'geheim', 'verstecken'],
            'KÖRPER': ['körper', 'berührung', 'physisch', 'brust', 'sinnlich']
        };

        const scores = {};
        const lowerContent = content.toLowerCase();

        for (const [theme, keywords] of Object.entries(themeKeywords)) {
            let score = 0;
            keywords.forEach(keyword => {
                const matches = (lowerContent.match(new RegExp(keyword, 'g')) || []).length;
                score += matches;
            });
            scores[theme] = score;
        }

        // Return theme with highest score
        const maxTheme = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        return maxTheme;
    }

    selectPrimaryChecklist(theme, previouslyUsed) {
        // Find best matching checklist for the theme
        const candidates = this.checklists.filter(checklist => {
            if (previouslyUsed.includes(checklist.name)) return false; // Avoid repetition
            return checklist.theme === theme || this.isThemeCompatible(checklist.theme, theme);
        });

        if (candidates.length === 0) {
            // Fallback: use any unused checklist
            return this.checklists.find(c => !previouslyUsed.includes(c.name)) || this.checklists[0];
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
        const compatibility = {
            'BINDUNG': ['VERSCHMELZUNG', 'HINGABE', 'TRAUMA'],
            'BESITZ': ['BINDUNG', 'PASSIVITÄT', 'SCHAM'],
            'VERSCHMELZUNG': ['BINDUNG', 'HINGABE', 'LEERE'],
            'HINGABE': ['PASSIVITÄT', 'BINDUNG', 'VERSCHMELZUNG'],
            'PASSIVITÄT': ['HINGABE', 'BESITZ', 'BINDUNG'],
            'TRAUMA': ['BINDUNG', 'SCHAM', 'HINGABE'],
            'INITIATION': ['SCHAM', 'KÖRPER', 'BINDUNG'],
            'SCHAM': ['TRAUMA', 'KÖRPER', 'BESITZ'],
            'KÖRPER': ['INITIATION', 'SCHAM', 'BESITZ']
        };

        return compatibility[checklistTheme]?.includes(contentTheme) || false;
    }

    isComplementaryTheme(checklistTheme, contentTheme, primaryTheme) {
        // Themes that work well together for deeper psychological impact
        const complementary = {
            'BINDUNG': ['VERSCHMELZUNG', 'BESITZ', 'HINGABE'],
            'BESITZ': ['BINDUNG', 'PASSIVITÄT', 'SCHAM'],
            'VERSCHMELZUNG': ['HINGABE', 'TRAUMA', 'BINDUNG'],
            'HINGABE': ['PASSIVITÄT', 'VERSCHMELZUNG', 'BINDUNG'],
            'PASSIVITÄT': ['HINGABE', 'BESITZ', 'SCHAM']
        };

        return complementary[primaryTheme]?.includes(checklistTheme) && 
               checklistTheme !== contentTheme && 
               checklistTheme !== primaryTheme;
    }

    // ==================== CHECKLIST EVALUATION ====================

    evaluateContentWithChecklists(filename, content) {
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
            overallRecommendations: this.generateOverallRecommendations(results)
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
        const themeRecommendations = {
            'BINDUNG': 'Verstärke Sicherheit und Geborgenheit-Aspekte',
            'BESITZ': 'Integriere Zugehörigkeit und Exklusivität-Gefühle',
            'VERSCHMELZUNG': 'Betone Eins-werden und Auflösung-Sehnsüchte',
            'HINGABE': 'Verstärke Loslassen und Vertrauen-Momente',
            'PASSIVITÄT': 'Integriere Führung und Entlastung-Aspekte'
        };

        return {
            criterion: criterion.substring(0, 100) + '...',
            suggestion: themeRecommendations[theme] || 'Verstärke emotionale Tiefe',
            theme: theme
        };
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
        const weights = {
            'BINDUNG': 10,
            'VERSCHMELZUNG': 9,
            'HINGABE': 9,
            'BESITZ': 8,
            'PASSIVITÄT': 8,
            'TRAUMA': 7,
            'INITIATION': 6,
            'SCHAM': 6,
            'KÖRPER': 5,
            'SCHICKSAL': 4,
            'ZWEIFEL': 3
        };
        return weights[theme] || 5;
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
