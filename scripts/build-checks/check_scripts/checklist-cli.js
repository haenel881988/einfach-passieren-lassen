import chalk from 'chalk';
import AdvancedContentValidator from '../../advanced-content-validator.js';
import fs from 'fs';

// ==================== CHECKLIST ROTATION MANAGEMENT CLI ====================

class ChecklistRotationCLI {
    constructor() {
        this.validator = new AdvancedContentValidator();
        this.validator.loadRotationState();
    }

    displayStatus() {
        console.log(chalk.magenta('🧠 ADVANCED CHECKLIST ROTATION STATUS'));
        console.log('='.repeat(80));
        
        const rotationStatus = this.validator.getRotationStatus();
        const availableChecklists = this.validator.checklists.map(c => c.name);
        
        console.log(chalk.blue(`📋 Total Checklists Available: ${availableChecklists.length}`));
        console.log(chalk.gray(`   Available: ${availableChecklists.join(', ')}`));
        
        if (Object.keys(rotationStatus).length === 0) {
            console.log(chalk.yellow('🔄 No rotation history found - fresh start for all files'));
            return;
        }
        
        console.log(chalk.cyan('\n📊 CURRENT ROTATION STATE:'));
        Object.entries(rotationStatus).forEach(([file, status]) => {
            const usedPercent = Math.round((status.usedChecklists.length / availableChecklists.length) * 100);
            const statusColor = usedPercent > 80 ? 'red' : usedPercent > 50 ? 'yellow' : 'green';
            
            console.log(chalk[statusColor](`   ${file}:`));
            console.log(chalk.gray(`     Used: ${status.usedChecklists.join(', ')} (${usedPercent}%)`));
            console.log(chalk.gray(`     Available: ${status.availableChecklists} checklists remaining`));
        });
        
        this.displayOptimizationRecommendations(rotationStatus, availableChecklists);
    }

    displayOptimizationRecommendations(rotationStatus, availableChecklists) {
        console.log(chalk.blue('\n🎯 ROTATION OPTIMIZATION RECOMMENDATIONS:'));
        
        // Find files that need more variety
        const needsVariety = Object.entries(rotationStatus).filter(([file, status]) => {
            return status.usedChecklists.length >= availableChecklists.length * 0.7;
        });
        
        if (needsVariety.length > 0) {
            console.log(chalk.yellow('⚠️  Files approaching checklist exhaustion:'));
            needsVariety.forEach(([file, status]) => {
                console.log(chalk.red(`   • ${file}: ${status.usedChecklists.length}/${availableChecklists.length} used`));
                console.log(chalk.gray(`     → Consider reset or use different evaluation strategy`));
            });
        }
        
        // Find underutilized checklists
        const allUsedChecklists = Object.values(rotationStatus).flatMap(status => status.usedChecklists);
        const usageCount = {};
        allUsedChecklists.forEach(checklist => {
            usageCount[checklist] = (usageCount[checklist] || 0) + 1;
        });
        
        const underutilized = availableChecklists.filter(checklist => 
            (usageCount[checklist] || 0) < Object.keys(rotationStatus).length * 0.3
        );
        
        if (underutilized.length > 0) {
            console.log(chalk.cyan('💡 Underutilized checklists (good for next rotation):'));
            underutilized.forEach(checklist => {
                const count = usageCount[checklist] || 0;
                console.log(chalk.green(`   • ${checklist}: used ${count} times`));
            });
        }
    }

    resetRotation(targetFiles = null) {
        if (targetFiles) {
            console.log(chalk.yellow(`🔄 Resetting rotation for specific files: ${targetFiles.join(', ')}`));
            targetFiles.forEach(file => {
                this.validator.rotationState.delete(file);
            });
        } else {
            console.log(chalk.yellow('🔄 Resetting complete rotation state...'));
            this.validator.resetRotation();
        }
        
        this.validator.saveRotationState();
        console.log(chalk.green('✅ Rotation reset completed'));
    }

    simulateNextRotation() {
        console.log(chalk.magenta('🎯 SIMULATING NEXT ROTATION ASSIGNMENTS'));
        console.log('='.repeat(80));
        
        const blogFiles = [
            'bindungssehnsucht-normal.md',
            'das-erste-mal.md', 
            'der-sichere-hafen.md',
            'emotionale-leere.md',
            'erschoepft-vom-stark-sein.md',
            'ich-will-einfach-gehalten-werden.md',
            'kontrolle-abgeben.md',
            'sehnsucht-nach-hingabe.md',
            'zu-viel-liebe-zu-wenig-liebe.md'
        ];
        
        blogFiles.forEach(file => {
            // Simulate content analysis (using placeholder content)
            const placeholderContent = `# ${file}\n\nDiese Datei würde analysiert werden...`;
            const selectedChecklists = this.validator.selectChecklistsForFile(file, placeholderContent);
            
            console.log(chalk.cyan(`📄 ${file}:`));
            selectedChecklists.forEach(checklist => {
                console.log(chalk.green(`   ✓ ${checklist.theme} (${checklist.name})`));
                console.log(chalk.gray(`     Weight: ${checklist.weight}, Criteria: ${checklist.criteriaCount}`));
            });
            console.log('');
        });
    }

    evaluateSpecificFile(filename) {
        const blogPath = `blog/entwurf/${filename}`;
        
        if (!fs.existsSync(blogPath)) {
            console.log(chalk.red(`❌ File not found: ${blogPath}`));
            return;
        }
        
        const content = fs.readFileSync(blogPath, 'utf8');
        console.log(chalk.magenta(`🧠 EVALUATING: ${filename}`));
        console.log('='.repeat(80));
        
        const evaluation = this.validator.evaluateContentWithChecklists(filename, content);
        
        console.log(chalk.cyan(`📊 Overall Score: ${evaluation.totalScore}%`));
        console.log(chalk.blue('\n📋 CHECKLIST RESULTS:'));
        
        evaluation.checklistResults.forEach(result => {
            const scoreColor = result.score >= 80 ? 'green' : result.score >= 60 ? 'yellow' : 'red';
            console.log(chalk[scoreColor](`\n   ${result.theme} (${result.checklist}): ${result.score}%`));
            
            console.log(chalk.green(`   ✅ Passed Criteria (${result.passedCriteria.length}):`));
            result.passedCriteria.slice(0, 3).forEach(criterion => {
                console.log(chalk.gray(`      • ${criterion.substring(0, 80)}...`));
            });
            
            if (result.failedCriteria.length > 0) {
                console.log(chalk.red(`   ❌ Failed Criteria (${result.failedCriteria.length}):`));
                result.failedCriteria.slice(0, 3).forEach(criterion => {
                    console.log(chalk.gray(`      • ${criterion.substring(0, 80)}...`));
                });
            }
            
            if (result.recommendations.length > 0) {
                console.log(chalk.yellow(`   💡 Recommendations:`));
                result.recommendations.slice(0, 2).forEach(rec => {
                    console.log(chalk.gray(`      → ${rec.suggestion}`));
                });
            }
        });
        
        if (evaluation.overallRecommendations.length > 0) {
            console.log(chalk.blue('\n🎯 OVERALL RECOMMENDATIONS:'));
            evaluation.overallRecommendations.forEach(rec => {
                console.log(chalk.yellow(`   • ${rec}`));
            });
        }
    }

    displayHelp() {
        console.log(chalk.magenta('🧠 ADVANCED CHECKLIST ROTATION CLI'));
        console.log('='.repeat(80));
        console.log('Available commands:');
        console.log(chalk.cyan('  status              ') + chalk.gray('Show current rotation state and recommendations'));
        console.log(chalk.cyan('  reset               ') + chalk.gray('Reset rotation for all files'));
        console.log(chalk.cyan('  reset <file1,file2> ') + chalk.gray('Reset rotation for specific files'));
        console.log(chalk.cyan('  simulate            ') + chalk.gray('Simulate next rotation assignments'));
        console.log(chalk.cyan('  evaluate <filename> ') + chalk.gray('Evaluate specific file with current rotation'));
        console.log(chalk.cyan('  help                ') + chalk.gray('Show this help message'));
        console.log('');
        console.log(chalk.yellow('Examples:'));
        console.log(chalk.gray('  node scripts/checklist-cli.js status'));
        console.log(chalk.gray('  node scripts/checklist-cli.js reset das-erste-mal.md,bindungssehnsucht-normal.md'));
        console.log(chalk.gray('  node scripts/checklist-cli.js evaluate das-erste-mal.md'));
    }
}

// ==================== CLI EXECUTION ====================

const cli = new ChecklistRotationCLI();
const command = process.argv[2];
const args = process.argv[3];

switch (command) {
    case 'status':
        cli.displayStatus();
        break;
    
    case 'reset':
        if (args) {
            const files = args.split(',').map(f => f.trim());
            cli.resetRotation(files);
        } else {
            cli.resetRotation();
        }
        break;
    
    case 'simulate':
        cli.simulateNextRotation();
        break;
    
    case 'evaluate':
        if (args) {
            cli.evaluateSpecificFile(args);
        } else {
            console.log(chalk.red('❌ Please specify a filename to evaluate'));
            console.log(chalk.gray('   Example: node scripts/checklist-cli.js evaluate das-erste-mal.md'));
        }
        break;
    
    case 'help':
    default:
        cli.displayHelp();
        break;
}
