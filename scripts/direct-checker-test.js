#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import AdvancedContentValidator from './build-checks/check_scripts/advanced-content-validator.js';

// DIREKTER TEST: Multi-File-Checker Logik auf der-sichere-hafen.md
console.log(chalk.blue('🔍 DIREKTER MULTI-FILE-CHECKER TEST'));

const validator = new AdvancedContentValidator();
const filePath = 'blog/entwurf/der-sichere-hafen.md';
const content = fs.readFileSync(filePath, 'utf8');

console.log(chalk.cyan(`📄 Testing: ${filePath}`));
console.log(chalk.gray(`Content length: ${content.length} chars\n`));

// 1. STANDARD LOGICAL INCONSISTENCIES
console.log(chalk.yellow('1. Testing detectLogicalInconsistencies:'));
const standardIssues = validator.detectLogicalInconsistencies(content);
if (standardIssues.length > 0) {
    console.log(chalk.red(`🚨 Found ${standardIssues.length} standard issues:`));
    standardIssues.forEach((issue, index) => {
        console.log(chalk.red(`   ${index + 1}. [${issue.severity}] ${issue.type}`));
        console.log(chalk.red(`      → ${issue.message}`));
    });
} else {
    console.log(chalk.green('✅ No standard logical issues found'));
}

// 2. SPEZIELLE ABSURDHEITS-PATTERNS (direkt implementiert)
console.log(chalk.yellow('\n2. Testing Special Absurd Patterns:'));

const absurdIssues = [];

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
            absurdIssues.push({
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
            absurdIssues.push({
                type: 'LANGUAGE_CONSTRUCT_ABSURDITY',
                message: `Absurde Sprachkonstruktion: "${match}"`,
                severity: 'CRITICAL',
                suggestion: 'Entfernen - deplatziert in emotionalem Content'
            });
        });
    }
});

if (absurdIssues.length > 0) {
    console.log(chalk.red(`🚨 Found ${absurdIssues.length} special absurd issues:`));
    absurdIssues.forEach((issue, index) => {
        console.log(chalk.red(`   ${index + 1}. [${issue.severity}] ${issue.type}`));
        console.log(chalk.red(`      → ${issue.message}`));
        console.log(chalk.red(`      💡 ${issue.suggestion}`));
    });
} else {
    console.log(chalk.green('✅ No special absurd issues found'));
}

// 3. GESAMTERGEBNIS
const totalIssues = standardIssues.length + absurdIssues.length;
console.log(chalk.blue(`\n🎯 TOTAL ISSUES FOUND: ${totalIssues}`));

if (totalIssues > 0) {
    console.log(chalk.red('🚨 FILE HAS CRITICAL SINNLOSIGKEITS-PROBLEME!'));
    console.log(chalk.yellow('⚠️  BUILD SOLLTE DIESE ISSUES MELDEN'));
} else {
    console.log(chalk.green('✅ FILE IS CLEAN - NO ABSURDITIES FOUND'));
}

console.log(chalk.blue('\n🔍 DIRECT TEST COMPLETED'));
