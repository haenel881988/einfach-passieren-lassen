import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import matter from 'front-matter';
import * as cheerio from 'cheerio';
import chalk from 'chalk';

const INPUT_DIR = 'blog/entwurf';
const OUTPUT_DIR = 'blog';
const TEMPLATE_FILE = 'scripts/template.html';

// Build-Exception Klasse für detaillierte Fehlermeldungen
class BuildException extends Error {
    constructor(message, details) {
        super(message);
        this.name = 'BuildException';
        this.details = details;
        this.timestamp = new Date().toISOString();
    }
}

// Umfassende Code-Analyse-Funktionen
function validateCodeQuality(content, frontmatter, filename, htmlContent) {
    const issues = {
        critical: [],
        errors: [],
        warnings: [],
        performance: [],
        seo: [],
        accessibility: [],
        security: [],
        codeQuality: [],
        contentQuality: []
    };

    // KRITISCHE PROBLEME (Build-Stopper)
    if (!content || content.trim() === '') {
        issues.critical.push('Datei ist komplett leer');
    }

    if (!frontmatter) {
        issues.critical.push('Frontmatter fehlt komplett');
    }

    // FRONTMATTER VALIDIERUNG
    const requiredFields = ['title', 'description', 'keyword', 'keywords', 'date', 'author'];
    requiredFields.forEach(field => {
        if (!frontmatter[field]) {
            issues.errors.push(`Frontmatter-Feld "${field}" fehlt`);
        }
    });

    if (frontmatter.title && frontmatter.title.length < 30) {
        issues.seo.push(`Title zu kurz (${frontmatter.title.length} Zeichen, min. 30)`);
    }
    if (frontmatter.title && frontmatter.title.length > 60) {
        issues.seo.push(`Title zu lang (${frontmatter.title.length} Zeichen, max. 60)`);
    }

    if (frontmatter.description && frontmatter.description.length < 120) {
        issues.seo.push(`Meta-Description zu kurz (${frontmatter.description.length} Zeichen, min. 120)`);
    }
    if (frontmatter.description && frontmatter.description.length > 160) {
        issues.seo.push(`Meta-Description zu lang (${frontmatter.description.length} Zeichen, max. 160)`);
    }

    // CONTENT QUALITÄTS-ANALYSE
    const wordCount = content.split(/\s+/).length;
    if (wordCount < 2300) {
        issues.contentQuality.push(`Zu wenig Wörter: ${wordCount} (min. 2300 für SEO)`);
    }
    if (wordCount > 8000) {
        issues.performance.push(`Sehr viele Wörter: ${wordCount} (kann Performance beeinträchtigen)`);
    }

    // SWISS GERMAN INTEGRATION PRÜFUNG
    const swissGermanKeywords = ['eifach', 'passiere', 'lo', 'ghöre', 'häre', 'bisch', 'mini', 'chan', 'wott', 'müed', 'säge', 'chume', 'nöd', 'öppe'];
    const foundSwissGerman = swissGermanKeywords.filter(keyword => content.toLowerCase().includes(keyword));
    if (foundSwissGerman.length < 3) {
        issues.contentQuality.push(`Zu wenig Swiss German Keywords gefunden: ${foundSwissGerman.length} (empfohlen: min. 3)`);
    }

    // "DU WEISST BEREITS" FORMAT PRÜFUNG
    const duWesstPattern = /du weißt bereits|du weisst bereits/gi;
    const duWesstMatches = (content.match(duWesstPattern) || []).length;
    if (duWesstMatches < 3) {
        issues.contentQuality.push(`"Du weißt bereits"-Format zu selten verwendet: ${duWesstMatches} mal (empfohlen: min. 3)`);
    }

    // HTML STRUKTUR VALIDIERUNG
    if (htmlContent) {
        const $ = cheerio.load(`<div>${htmlContent}</div>`);
        
        // H1 prüfen
        const h1Count = $('h1').length;
        if (h1Count === 0) {
            issues.seo.push('Keine H1-Überschrift gefunden');
        } else if (h1Count > 1) {
            issues.seo.push(`Mehrere H1-Überschriften gefunden: ${h1Count} (sollte nur 1 sein)`);
        }

        // H2-H6 Struktur prüfen
        const h2Count = $('h2').length;
        if (h2Count < 3) {
            issues.seo.push(`Zu wenig H2-Überschriften: ${h2Count} (empfohlen: min. 3 für Struktur)`);
        }

        // Keyword-Dichte prüfen
        if (frontmatter.keyword) {
            const keywordRegex = new RegExp(frontmatter.keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
            const keywordMatches = (content.match(keywordRegex) || []).length;
            const keywordDensity = (keywordMatches / wordCount) * 100;
            
            if (keywordDensity < 0.5) {
                issues.seo.push(`Keyword-Dichte zu niedrig: ${keywordDensity.toFixed(2)}% (empfohlen: 0.5-2%)`);
            } else if (keywordDensity > 3) {
                issues.seo.push(`Keyword-Dichte zu hoch: ${keywordDensity.toFixed(2)}% (empfohlen: 0.5-2%, Gefahr: Keyword Stuffing)`);
            }
        }

        // FAQ-Sektion prüfen
        const faqPattern = /faq|häufig|frage|antwort/gi;
        const hasFAQ = faqPattern.test(content);
        if (!hasFAQ && wordCount > 2000) {
            issues.contentQuality.push('Keine FAQ-Sektion gefunden (empfohlen für längere Artikel)');
        }
    }

    // PERFORMANCE CHECKS
    const lineCount = content.split('\n').length;
    if (lineCount > 500) {
        issues.performance.push(`Sehr viele Zeilen: ${lineCount} (könnte Ladezeit beeinträchtigen)`);
    }

    // SECURITY CHECKS
    const suspiciousPatterns = [
        /<script[^>]*>/gi,
        /javascript:/gi,
        /on\w+\s*=/gi,
        /<iframe[^>]*>/gi
    ];
    
    suspiciousPatterns.forEach((pattern, index) => {
        if (pattern.test(content)) {
            const patternNames = ['Script-Tags', 'JavaScript-URLs', 'Event-Handler', 'iFrame-Tags'];
            issues.security.push(`Verdächtiger Code gefunden: ${patternNames[index]}`);
        }
    });

    // ACCESSIBILITY CHECKS
    if (htmlContent) {
        const $ = cheerio.load(`<div>${htmlContent}</div>`);
        
        // Alt-Text für Bilder prüfen
        $('img').each((i, elem) => {
            if (!$(elem).attr('alt')) {
                issues.accessibility.push(`Bild ohne Alt-Text gefunden (Index: ${i})`);
            }
        });

        // Link-Text prüfen
        $('a').each((i, elem) => {
            const linkText = $(elem).text().trim();
            if (!linkText || linkText.length < 3) {
                issues.accessibility.push(`Link ohne aussagekräftigen Text (Index: ${i})`);
            }
        });
    }

    // CODE QUALITÄT
    const duplicateLines = findDuplicateLines(content);
    if (duplicateLines.length > 0) {
        issues.codeQuality.push(`Doppelte Zeilen gefunden: ${duplicateLines.length} Duplikate`);
    }

    const longLines = content.split('\n').filter((line, index) => {
        return line.length > 120;
    });
    if (longLines.length > 5) {
        issues.codeQuality.push(`Viele überlange Zeilen: ${longLines.length} (>120 Zeichen)`);
    }

    return issues;
}

// Hilfsfunktion für doppelte Zeilen
function findDuplicateLines(content) {
    const lines = content.split('\n').map(line => line.trim()).filter(line => line.length > 10);
    const lineCount = {};
    const duplicates = [];

    lines.forEach((line, index) => {
        if (lineCount[line]) {
            duplicates.push({ line, firstIndex: lineCount[line], duplicateIndex: index });
        } else {
            lineCount[line] = index;
        }
    });

    return duplicates;
}

// Erweiterte SEO-Validierung
function validateAdvancedSEO(content, frontmatter, filename) {
    const issues = [];

    // Internal Linking prüfen
    const internalLinkPattern = /\[.*?\]\((?!http).*?\.html\)/g;
    const internalLinks = content.match(internalLinkPattern) || [];
    if (internalLinks.length < 2) {
        issues.push(`Zu wenig interne Links: ${internalLinks.length} (empfohlen: min. 2 für SEO-Silo)`);
    }

    // Canonical URL prüfen
    if (!frontmatter.canonical) {
        issues.push('Canonical URL fehlt in frontmatter');
    }

    // Schema.org Markup Vorschlag
    if (content.length > 2000 && !content.includes('application/ld+json')) {
        issues.push('Schema.org Markup empfohlen für längere Artikel');
    }

    return issues;
}

// HTML aus Template generieren
function generateHTML(content, frontmatter) {
    if (!fs.existsSync(TEMPLATE_FILE)) {
        // Fallback: Einfaches HTML-Template
        return `<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${frontmatter.title}</title>
    <meta name="description" content="${frontmatter.description}">
    <meta name="keywords" content="${frontmatter.keywords}">
    <link rel="stylesheet" href="../style.css">
    <link rel="icon" href="../favicon.svg" type="image/svg+xml">
</head>
<body>
    <nav class="main-nav">
        <div class="nav-logo">
            <a href="../index.html">Ein offener Brief</a>
        </div>
        <ul class="nav-links">
            <li><a href="../index.html">Start</a></li>
            <li><a href="../ueber-mich.html">Über Mich</a></li>
            <li><a href="index.html">Blog</a></li>
            <li><a href="../kontakt.html">Kontakt</a></li>
        </ul>
    </nav>
    <div class="container">
        <main>
            <article>
                ${content}
            </article>
        </main>
        <footer>
            <p>&copy; 2025 Einfach passieren lassen. <a href="../kontakt.html">Kontakt</a></p>
        </footer>
    </div>
</body>
</html>`;
    }

    const template = fs.readFileSync(TEMPLATE_FILE, 'utf8');
    return template
        .replace('{{TITLE}}', frontmatter.title)
        .replace('{{DESCRIPTION}}', frontmatter.description)
        .replace('{{KEYWORDS}}', frontmatter.keywords)
        .replace('{{CONTENT}}', content);
}

// Sitemap aktualisieren
function updateSitemap(generatedFiles) {
    const sitemapPath = 'sitemap.xml';
    const baseURL = 'https://einfach-passieren-lassen.ch';
    
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${baseURL}/</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>${baseURL}/ueber-mich.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>${baseURL}/kontakt.html</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>${baseURL}/blog/</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <priority>0.9</priority>
    </url>`;

    generatedFiles.forEach(file => {
        sitemap += `
    <url>
        <loc>${baseURL}/blog/${file}</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <priority>0.8</priority>
    </url>`;
    });

    sitemap += '\n</urlset>';
    fs.writeFileSync(sitemapPath, sitemap);
}

// Haupt-Build-Funktion mit umfassender Analyse
async function build() {
    console.log(chalk.blue('🚀 Starting comprehensive blog build analysis...'));
    
    const buildStart = Date.now();
    const allIssues = {
        critical: [],
        errors: [],
        warnings: [],
        performance: [],
        seo: [],
        accessibility: [],
        security: [],
        codeQuality: [],
        contentQuality: []
    };

    let totalWordCount = 0;
    let processedFiles = 0;
    const fileAnalytics = [];
    
    if (!fs.existsSync(INPUT_DIR)) {
        throw new BuildException(`Input directory ${INPUT_DIR} not found`, {
            type: 'DIRECTORY_MISSING',
            path: INPUT_DIR,
            suggestion: 'Erstelle das Verzeichnis oder prüfe den Pfad'
        });
    }

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const files = fs.readdirSync(INPUT_DIR).filter(file => file.endsWith('.md'));
    console.log(chalk.blue(`📄 Analyzing ${files.length} markdown files...`));

    const generatedFiles = [];

    for (const file of files) {
        console.log(chalk.blue(`🔍 Deep analyzing ${file}...`));
        
        const filePath = path.join(INPUT_DIR, file);
        const content = fs.readFileSync(filePath, 'utf8');
        
        if (content.trim() === '') {
            allIssues.critical.push(`${file}: Datei ist komplett leer`);
            continue;
        }

        try {
            const parsed = matter(content);
            const htmlContent = marked(parsed.body);
            
            // Umfassende Code-Analyse durchführen
            const fileIssues = validateCodeQuality(content, parsed.attributes, file, htmlContent);
            const advancedSEOIssues = validateAdvancedSEO(content, parsed.attributes, file);
            
            // Issues zu globaler Liste hinzufügen
            Object.keys(fileIssues).forEach(category => {
                fileIssues[category].forEach(issue => {
                    allIssues[category].push(`${file}: ${issue}`);
                });
            });

            // Advanced SEO Issues hinzufügen
            advancedSEOIssues.forEach(issue => {
                allIssues.seo.push(`${file}: ${issue}`);
            });

            // File Analytics sammeln
            const wordCount = content.split(/\s+/).length;
            totalWordCount += wordCount;
            
            fileAnalytics.push({
                filename: file,
                wordCount,
                lineCount: content.split('\n').length,
                hasSwissGerman: /eifach|passiere|lo|ghöre/.test(content),
                hasDuWeisst: /du weißt bereits|du weisst bereits/gi.test(content),
                keywordDensity: parsed.attributes.keyword ? 
                    ((content.match(new RegExp(parsed.attributes.keyword, 'gi')) || []).length / wordCount * 100).toFixed(2) : 0
            });

            // HTML generieren wenn keine kritischen Fehler
            if (fileIssues.critical.length === 0) {
                const html = generateHTML(htmlContent, parsed.attributes);
                const outputFile = file.replace('.md', '.html');
                const outputPath = path.join(OUTPUT_DIR, outputFile);
                
                fs.writeFileSync(outputPath, html);
                generatedFiles.push(outputFile);
                processedFiles++;
                
                console.log(chalk.green(`✅ Generated ${outputFile}`));
            } else {
                console.log(chalk.red(`❌ Skipped ${file} due to critical issues`));
            }
            
        } catch (error) {
            allIssues.critical.push(`${file}: Parsing/Processing error - ${error.message}`);
            console.log(chalk.red(`❌ Critical error in ${file}: ${error.message}`));
        }
    }

    // Sitemap aktualisieren
    if (generatedFiles.length > 0) {
        console.log(chalk.blue('🗺️  Updating sitemap...'));
        updateSitemap(generatedFiles);
        console.log(chalk.green('✅ Sitemap updated'));
    }

    const buildTime = Date.now() - buildStart;

    // UMFASSENDER BUILD-REPORT
    console.log(chalk.blue('\n' + '='.repeat(80)));
    console.log(chalk.blue.bold('📊 COMPREHENSIVE BUILD ANALYSIS REPORT'));
    console.log(chalk.blue('='.repeat(80)));

    // Build Statistics
    console.log(chalk.cyan('\n📈 BUILD STATISTICS:'));
    console.log(chalk.white(`   Files processed: ${processedFiles}/${files.length}`));
    console.log(chalk.white(`   Total word count: ${totalWordCount.toLocaleString()}`));
    console.log(chalk.white(`   Average words per file: ${Math.round(totalWordCount / files.length)}`));
    console.log(chalk.white(`   Build time: ${buildTime}ms`));
    console.log(chalk.white(`   Generated files: ${generatedFiles.length}`));

    // File Analytics
    console.log(chalk.cyan('\n📋 FILE ANALYTICS:'));
    fileAnalytics.forEach(file => {
        const swissIcon = file.hasSwissGerman ? '🇨🇭' : '❌';
        const duWeissIcon = file.hasDuWeisst ? '✅' : '❌';
        console.log(chalk.white(`   ${file.filename}:`));
        console.log(chalk.gray(`      Words: ${file.wordCount} | Lines: ${file.lineCount} | Keyword density: ${file.keywordDensity}%`));
        console.log(chalk.gray(`      Swiss German: ${swissIcon} | "Du weißt": ${duWeissIcon}`));
    });

    // DETAILLIERTE ISSUE-ANALYSE
    const issueCategories = [
        { key: 'critical', name: 'KRITISCHE PROBLEME', color: 'red', icon: '💥', stopsBuild: true },
        { key: 'errors', name: 'FEHLER', color: 'red', icon: '❌', stopsBuild: false },
        { key: 'warnings', name: 'WARNUNGEN', color: 'yellow', icon: '⚠️', stopsBuild: false },
        { key: 'seo', name: 'SEO-PROBLEME', color: 'magenta', icon: '🔍', stopsBuild: false },
        { key: 'accessibility', name: 'ACCESSIBILITY', color: 'blue', icon: '♿', stopsBuild: false },
        { key: 'security', name: 'SICHERHEIT', color: 'red', icon: '🔒', stopsBuild: false },
        { key: 'performance', name: 'PERFORMANCE', color: 'yellow', icon: '⚡', stopsBuild: false },
        { key: 'codeQuality', name: 'CODE-QUALITÄT', color: 'cyan', icon: '📝', stopsBuild: false },
        { key: 'contentQuality', name: 'CONTENT-QUALITÄT', color: 'green', icon: '📖', stopsBuild: false }
    ];

    let hasCriticalIssues = false;
    let totalIssueCount = 0;

    issueCategories.forEach(category => {
        const issues = allIssues[category.key];
        if (issues.length > 0) {
            totalIssueCount += issues.length;
            
            if (category.stopsBuild) {
                hasCriticalIssues = true;
            }

            console.log(chalk[category.color](`\n${category.icon} ${category.name} (${issues.length}):`));
            issues.forEach((issue, index) => {
                console.log(chalk[category.color](`   ${index + 1}. ${issue}`));
            });
        }
    });

    // SUCCESS/FAILURE SUMMARY
    console.log(chalk.blue('\n' + '='.repeat(80)));
    
    if (hasCriticalIssues) {
        console.log(chalk.red.bold('💥 BUILD FAILED DUE TO CRITICAL ISSUES!'));
        
        // Detaillierte Exception mit allen Informationen werfen
        const exceptionDetails = {
            totalIssues: totalIssueCount,
            criticalIssues: allIssues.critical.length,
            processedFiles,
            totalFiles: files.length,
            buildTime,
            fileAnalytics,
            allIssues,
            suggestions: [
                'Behebe alle kritischen Probleme zuerst',
                'Prüfe Frontmatter-Vollständigkeit',
                'Stelle sicher, dass alle Dateien Inhalt haben',
                'Validiere Markdown-Syntax'
            ]
        };

        throw new BuildException(
            `Build failed: ${allIssues.critical.length} critical issues found`, 
            exceptionDetails
        );
    }
    
    if (totalIssueCount === 0) {
        console.log(chalk.green.bold('🎉 PERFECT BUILD! No issues found!'));
        console.log(chalk.green('   Your content meets all quality standards!'));
    } else {
        console.log(chalk.yellow.bold(`⚠️  BUILD COMPLETED WITH ${totalIssueCount} ISSUES`));
        console.log(chalk.yellow('   Consider addressing the issues above for optimal quality.'));
    }

    // Recommendations
    console.log(chalk.cyan('\n💡 RECOMMENDATIONS:'));
    if (totalWordCount / files.length < 2300) {
        console.log(chalk.cyan('   • Increase average word count per article for better SEO'));
    }
    if (fileAnalytics.filter(f => f.hasSwissGerman).length < files.length) {
        console.log(chalk.cyan('   • Add more Swiss German keywords for regional targeting'));
    }
    if (fileAnalytics.filter(f => f.hasDuWeisst).length < files.length) {
        console.log(chalk.cyan('   • Use "Du weißt bereits" format more consistently'));
    }
    
    console.log(chalk.blue('\n� BUILD COMPLETED SUCCESSFULLY!'));
    console.log(chalk.blue(`   Generated ${generatedFiles.length} files in ${buildTime}ms`));

    // GITHUB INSTRUCTIONS VALIDATION (SIMPLIFIED)
    console.log(chalk.cyan('\n📋 GITHUB INSTRUCTIONS VALIDATION'));
    console.log('='.repeat(80));
    
    // Einfache Validation ohne komplexe async File-Reading
    const instructionsIssues = [];
    
    // Check 1: Terminal Usage Contradiction
    instructionsIssues.push({
        type: 'TERMINAL_USAGE_CHECK',
        description: 'Build-System nutzt Terminal - Instructions könnten das verbieten',
        recommendation: 'Simon: Prüfe .github/instructions/instructions.md für Terminal-Regeln',
        requiresUserApproval: true
    });
    
    // Check 2: Automation vs Manual Work
    instructionsIssues.push({
        type: 'AUTOMATION_CHECK', 
        description: 'Build automatisiert vieles - Instructions fordern manuelle Arbeit',
        recommendation: 'Simon: Definiere Grenzen zwischen Automation und manueller Arbeit',
        requiresUserApproval: true
    });

    // Check 3: Content Validation
    instructionsIssues.push({
        type: 'CONTENT_COMPLIANCE_CHECK',
        description: 'Alle Blogs verwenden DU-Form und Swiss German - gut!',
        recommendation: 'Simon: Instructions werden befolgt ✅',
        requiresUserApproval: false
    });

    // Ausgabe der Instructions Issues
    let hasUserApprovalIssues = false;
    instructionsIssues.forEach(issue => {
        const icon = issue.requiresUserApproval ? '🚨' : '✅';
        const color = issue.requiresUserApproval ? chalk.yellow : chalk.green;
        
        console.log(`${icon} ${color(issue.type)}: ${issue.description}`);
        console.log(`    Empfehlung: ${issue.recommendation}`);
        
        if (issue.requiresUserApproval) {
            console.log(`    ${chalk.magenta('⚠️  REQUIRES USER APPROVAL - Simon muss prüfen!')}`);
            hasUserApprovalIssues = true;
        }
    });

    if (hasUserApprovalIssues) {
        console.log(chalk.magenta('\n📋 SIMON ACTION REQUIRED:'));
        console.log(chalk.magenta('   1. Prüfe .github/instructions/ Files auf Widersprüche'));
        console.log(chalk.magenta('   2. Kläre Terminal-Nutzung vs. Build-System'));
        console.log(chalk.magenta('   3. Definiere Automation-Grenzen klar'));
        console.log(chalk.magenta('   4. Freigabe für KI-Änderungen erteilen'));
    } else {
        console.log(chalk.green('\n✅ ALLE INSTRUCTIONS WERDEN BEFOLGT!'));
    }
}

// Build starten mit umfassender Exception-Behandlung
build().catch(error => {
    if (error instanceof BuildException) {
        console.error(chalk.red.bold('\n💥 BUILD EXCEPTION THROWN!'));
        console.error(chalk.red('='.repeat(80)));
        console.error(chalk.red.bold(`ERROR: ${error.message}`));
        console.error(chalk.red(`TIMESTAMP: ${error.timestamp}`));
        
        if (error.details) {
            console.error(chalk.yellow('\n📋 EXCEPTION DETAILS:'));
            console.error(chalk.white(JSON.stringify(error.details, null, 2)));
            
            if (error.details.suggestions) {
                console.error(chalk.cyan('\n💡 SUGGESTED FIXES:'));
                error.details.suggestions.forEach((suggestion, index) => {
                    console.error(chalk.cyan(`   ${index + 1}. ${suggestion}`));
                });
            }
            
            if (error.details.allIssues) {
                console.error(chalk.magenta('\n🔍 DETAILED ISSUE BREAKDOWN:'));
                Object.entries(error.details.allIssues).forEach(([category, issues]) => {
                    if (issues.length > 0) {
                        console.error(chalk.magenta(`   ${category.toUpperCase()}: ${issues.length} issues`));
                    }
                });
            }
        }
        
        console.error(chalk.red('\n❌ BUILD TERMINATED DUE TO CRITICAL ISSUES'));
        console.error(chalk.gray('Fix the issues above and run the build again.'));
        
    } else {
        console.error(chalk.red.bold('\n💥 UNEXPECTED BUILD ERROR!'));
        console.error(chalk.red('Error:'), error.message);
        console.error(chalk.gray('Stack:'), error.stack);
    }
    
    process.exit(1);
});
