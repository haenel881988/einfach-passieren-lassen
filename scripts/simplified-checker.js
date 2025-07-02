#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

// SIMPLIFIED MULTI-FILE-CHECKER für direkte Ausführung
console.log(chalk.blue('🔍 SIMPLIFIED MULTI-FILE SINNLOSIGKEITS-CHECKER'));

const scanPaths = ['blog/entwurf/der-sichere-hafen.md', 'blog/entwurf/kontrolle-abgeben.md'];
let totalIssues = 0;

for (const filePath of scanPaths) {
    if (!fs.existsSync(filePath)) {
        console.log(chalk.yellow(`⚠️  Datei nicht gefunden: ${filePath}`));
        continue;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(chalk.cyan(`\n📄 Prüfe: ${filePath}`));
    
    const issues = [];
    
    // SCHWEIZERDEUTSCH-ABSURDITIES
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
                    suggestion: 'Komplett entfernen - hat nichts mit emotionalem Content zu tun'
                });
            });
        }
    });

    // SPRACHKONSTRUKT-ABSURDITIES
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
                    suggestion: 'Entfernen - deplatziert in emotionalem Content'
                });
            });
        }
    });
    
    if (issues.length > 0) {
        console.log(chalk.red(`   🚨 ${issues.length} KRITISCHE Problem(e) gefunden:`));
        issues.forEach((issue, index) => {
            console.log(chalk.red(`   ${index + 1}. [${issue.severity}] ${issue.type}`));
            console.log(chalk.red(`      → ${issue.message}`));
            console.log(chalk.red(`      💡 ${issue.suggestion}`));
        });
        totalIssues += issues.length;
    } else {
        console.log(chalk.green(`   ✅ Keine Probleme gefunden`));
    }
}

console.log(chalk.blue(`\n🎯 GESAMT: ${totalIssues} kritische Sinnlosigkeits-Probleme gefunden`));

if (totalIssues > 0) {
    console.log(chalk.red('🚨 BUILD MUSS DIESE ISSUES PROTOKOLLIEREN!'));
    console.log(chalk.yellow('⚠️  DIESE SÄTZE SIND VÖLLIG ABSURD UND MÜSSEN ENTFERNT WERDEN!'));
} else {
    console.log(chalk.green('✅ ALLE DATEIEN SIND SAUBER'));
}

console.log(chalk.blue('\n🔍 SIMPLIFIED CHECK COMPLETED'));
