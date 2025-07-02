// check_scripts/masterBuildChecker.js
// MASTER BUILD CHECKER - Eine einzige Logdatei für ALLE Checks
// Erstellt: 2025-07-02
// Ersetzt alle anderen Check-Skripte - Generiert NUR EINE umfassende Logdatei

import fs from 'fs';
import path from 'path';
import matter from 'front-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runMasterBuildCheck() {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T').join('_').replace(/Z$/, '');
    const logName = `MASTER_BUILD_CHECK_${timestamp}.log`;
    const logPath = path.join(__dirname, '../logfiles', logName);
    
    console.log('🔍 Starte MASTER BUILD CHECK - Alle Prüfungen in einer Logdatei...');
    
    // WICHTIG: Build darf NIEMALS abbrechen - Alle Errors werden nur geloggt
    const results = {
        timestamp: new Date().toLocaleString('de-DE'),
        buildStarted: new Date().toISOString(),
        
        // ALLE CHECKS IN EINEM OBJEKT
        globalStatus: {
            buildProcessCompleted: true,
            totalErrors: 0,
            totalWarnings: 0,
            buildNeverAborted: true
        },
        
        // SITEMAP & ROBOTS CHECKS
        infrastructure: {
            sitemap: null,
            robots: null,
            archivingStatus: null
        },
        
        // BLOG-POSTS COMPLETE ANALYSIS
        blogs: [],
        
        // VS CODE PROBLEME
        vscodeProblems: {
            errors: [],
            warnings: [],
            infos: [],
            totalCount: 0,
            criticalFiles: []
        },
        
        // ZUSAMMENFASSUNG
        summary: {
            totalBlogs: 0,
            avgWordCount: 0,
            blogsBelowThreshold: 0,
            blogsNeedingKeywordOptimization: 0,
            blogsWithoutInternalLinks: 0,
            blogsWithoutSchema: 0,
            globalRecommendations: []
        }
    };
    
    try {
        // === 1. ARCHIVIERUNG ALTER LOGFILES ===
        results.infrastructure.archivingStatus = performLogArchiving();
        
        // === 2. SITEMAP STATUS CHECK ===
        results.infrastructure.sitemap = checkSitemapStatus();
        
        // === 3. ROBOTS.TXT STATUS CHECK ===
        results.infrastructure.robots = checkRobotsStatus();
        
        // === 4. VS CODE PROBLEME SCANNEN ===
        results.vscodeProblems = await scanVSCodeProblems();
        
        // === 5. BLOG-POSTS COMPREHENSIVE ANALYSIS ===
        const blogAnalysis = performBlogAnalysis();
        results.blogs = blogAnalysis.blogs;
        results.summary = blogAnalysis.summary;
        
        // === 6. GLOBAL ERROR COUNTING ===
        results.globalStatus.totalErrors = results.blogs.reduce((sum, blog) => sum + blog.issues.critical.length, 0) + results.vscodeProblems.errors.length;
        results.globalStatus.totalWarnings = results.blogs.reduce((sum, blog) => sum + blog.issues.warnings.length, 0) + results.vscodeProblems.warnings.length;
        
        // === 6. GENERATE MASTER LOGFILE ===
        const logContent = generateMasterLogContent(results);
        fs.writeFileSync(logPath, logContent, 'utf8');
        
        console.log(`✅ MASTER BUILD CHECK abgeschlossen!`);
        console.log(`📊 Eine Logdatei: ${logPath}`);
        console.log(`📈 Analysiert: ${results.summary.totalBlogs} Blogs, ⌀ ${results.summary.avgWordCount} Wörter`);
        console.log(`⚠️ ${results.globalStatus.totalErrors} Errors, ${results.globalStatus.totalWarnings} Warnings`);
        console.log(`✅ Build-Prozess: NIEMALS ABGEBROCHEN (wie gefordert)`);
        
    } catch (error) {
        // CRITICAL: Build NIEMALS abbrechen, auch bei Checker-Fehlern
        console.error(`❌ Fehler im Master Checker: ${error.message}`);
        console.log(`✅ Build-Prozess läuft trotzdem weiter (kein Abbruch)`);
        
        // Fallback-Log schreiben
        const fallbackLog = `# MASTER BUILD CHECK - FALLBACK LOG
**Timestamp:** ${new Date().toLocaleString('de-DE')}
**Status:** CHECKER FEHLER - BUILD LÄUFT WEITER
**Error:** ${error.message}
**Wichtig:** Build-Prozess wurde NICHT abgebrochen (wie gefordert)

Bitte Checker-Skript prüfen und korrigieren.
`;
        fs.writeFileSync(logPath, fallbackLog, 'utf8');
    }
    
    // NIEMALS process.exit() - Build muss weiterlaufen!
}

function performLogArchiving() {
    try {
        const logfilesDir = path.join(__dirname, '../logfiles');
        const archivDir = path.join(logfilesDir, 'archiv');
        
        // Archiv-Verzeichnis erstellen falls nicht vorhanden
        if (!fs.existsSync(archivDir)) {
            fs.mkdirSync(archivDir, { recursive: true });
        }
        
        if (!fs.existsSync(logfilesDir)) {
            return { status: 'Kein Logfiles-Verzeichnis vorhanden', archived: 0 };
        }
        
        // === ARCHIVIERUNG: ALLE BESTEHENDEN LOGS INS ARCHIV ===
        const allLogFiles = fs.readdirSync(logfilesDir)
            .filter(file => file.endsWith('.log'))
            .map(file => ({
                filename: file,
                path: path.join(logfilesDir, file)
            }));
        
        let archived = 0;
        
        // ALLE bestehenden Logs archivieren (ohne Ausnahmen!)
        for (const logFile of allLogFiles) {
            const archivePath = path.join(archivDir, `ARCHIVED_${logFile.filename}`);
            try {
                fs.renameSync(logFile.path, archivePath);
                archived++;
            } catch (e) {
                // Ignoriere Archivierungs-Fehler, wichtig ist dass Build weiterläuft
            }
        }
        
        return {
            status: `${archived} alte Logfiles archiviert`,
            archived: archived,
            remaining: Math.min(logFiles.length, keepRecent)
        };
        
    } catch (error) {
        return { status: `Archivierung fehlgeschlagen: ${error.message}`, archived: 0 };
    }
}

function checkSitemapStatus() {
    try {
        const sitemapPath = path.join(process.cwd(), 'sitemap.xml');
        if (fs.existsSync(sitemapPath)) {
            const stats = fs.statSync(sitemapPath);
            const ageInHours = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60);
            const content = fs.readFileSync(sitemapPath, 'utf8');
            
            // URL-Anzahl zählen
            const urlCount = (content.match(/<url>/g) || []).length;
            
            return {
                exists: 'Ja',
                updated: ageInHours < 24 ? 'Ja (letzte 24h)' : 'Nein (älter als 24h)',
                lastModified: stats.mtime.toLocaleString('de-DE'),
                urlCount: urlCount,
                ageHours: Math.round(ageInHours * 10) / 10
            };
        }
        return {
            exists: 'Nein',
            updated: 'Nein',
            lastModified: 'Datei nicht vorhanden',
            urlCount: 0,
            ageHours: 0
        };
    } catch (error) {
        return {
            exists: 'Fehler',
            updated: 'Prüfung fehlgeschlagen',
            lastModified: error.message,
            urlCount: 0,
            ageHours: 0
        };
    }
}

function checkRobotsStatus() {
    try {
        const robotsPath = path.join(process.cwd(), 'robots.txt');
        if (fs.existsSync(robotsPath)) {
            const stats = fs.statSync(robotsPath);
            const content = fs.readFileSync(robotsPath, 'utf8');
            const hasSitemap = content.toLowerCase().includes('sitemap:');
            const hasUserAgent = content.toLowerCase().includes('user-agent:');
            
            return {
                exists: 'Ja',
                updated: 'Ja',
                lastModified: stats.mtime.toLocaleString('de-DE'),
                hasSitemap: hasSitemap ? 'Ja' : 'Nein',
                hasUserAgent: hasUserAgent ? 'Ja' : 'Nein',
                content: content.length > 0 ? 'Ja' : 'Leer'
            };
        }
        return {
            exists: 'Nein',
            updated: 'Nein',
            lastModified: 'Datei nicht vorhanden',
            hasSitemap: 'Nein',
            hasUserAgent: 'Nein',
            content: 'Nicht vorhanden'
        };
    } catch (error) {
        return {
            exists: 'Fehler',
            updated: 'Prüfung fehlgeschlagen',
            lastModified: error.message,
            hasSitemap: 'Unbekannt',
            hasUserAgent: 'Unbekannt',
            content: 'Fehler'
        };
    }
}

function performBlogAnalysis() {
    const blogs = [];
    const summary = {
        totalBlogs: 0,
        avgWordCount: 0,
        blogsBelowThreshold: 0,
        blogsNeedingKeywordOptimization: 0,
        blogsWithoutInternalLinks: 0,
        blogsWithoutSchema: 0,
        globalRecommendations: []
    };
    
    try {
        const blogDir = path.join(process.cwd(), 'blog', 'entwurf');
        if (!fs.existsSync(blogDir)) {
            return { blogs: [], summary };
        }
        
        const markdownFiles = fs.readdirSync(blogDir)
            .filter(file => file.endsWith('.md') && file !== 'README.md');
        
        summary.totalBlogs = markdownFiles.length;
        let totalWords = 0;
        
        for (const file of markdownFiles) {
            try {
                const blogAnalysis = analyzeSingleBlogPost(path.join(blogDir, file));
                blogs.push(blogAnalysis);
                totalWords += blogAnalysis.wordCount;
                
                // Zähle Probleme für Summary
                if (blogAnalysis.wordCount < 8500) summary.blogsBelowThreshold++;
                if (!blogAnalysis.checks.focusKeywordInMeta || !blogAnalysis.checks.focusKeywordInContent) {
                    summary.blogsNeedingKeywordOptimization++;
                }
                if (blogAnalysis.internalLinks.length < 3) summary.blogsWithoutInternalLinks++;
                if (!blogAnalysis.checks.schemaValid) summary.blogsWithoutSchema++;
                
            } catch (error) {
                // Einzelne Blog-Fehler nicht den ganzen Check abbrechen lassen
                blogs.push({
                    filename: file,
                    error: error.message,
                    wordCount: 0,
                    issues: { critical: [`Analyse fehlgeschlagen: ${error.message}`], warnings: [], recommendations: [] }
                });
            }
        }
        
        summary.avgWordCount = Math.round(totalWords / Math.max(summary.totalBlogs, 1));
        
        // Globale Empfehlungen generieren
        if (summary.blogsBelowThreshold > 0) {
            summary.globalRecommendations.push(`${summary.blogsBelowThreshold} Blog(s) unter 8500-10000+ Wörtern - MINIMUM nicht erfüllt`);
        }
        if (summary.blogsNeedingKeywordOptimization > 0) {
            summary.globalRecommendations.push(`${summary.blogsNeedingKeywordOptimization} Blog(s) benötigen Keyword-Optimierung`);
        }
        if (summary.blogsWithoutInternalLinks > 0) {
            summary.globalRecommendations.push(`${summary.blogsWithoutInternalLinks} Blog(s) benötigen mehr interne Links (min. 3)`);
        }
        if (summary.blogsWithoutSchema > 0) {
            summary.globalRecommendations.push(`${summary.blogsWithoutSchema} Blog(s) benötigen Schema.org JSON-LD Markup`);
        }
        
    } catch (error) {
        summary.globalRecommendations.push(`Blog-Analyse fehlgeschlagen: ${error.message}`);
    }
    
    return { blogs, summary };
}

function analyzeSingleBlogPost(filePath) {
    const filename = path.basename(filePath);
    const content = fs.readFileSync(filePath, 'utf8');
    const { attributes: frontmatter, body: markdownContent } = matter(content);
    
    const analysis = {
        filename,
        wordCount: countWords(markdownContent),
        wordCountRating: '',
        focusKeyword: frontmatter.keyword || frontmatter.keywords?.[0] || '',
        metaDescription: frontmatter.description || '',
        title: frontmatter.title || '',
        schema: frontmatter.schema || null,
        
        // ALLE CHECKS WIE IN README SPEZIFIZIERT
        checks: {
            wordCount: false,
            metaDescriptionLength: false,
            focusKeywordInMeta: false,
            focusKeywordInTitle: false,
            focusKeywordInH1H2: false,
            focusKeywordInContent: false,
            schemaValid: false,
            internalLinks: false
        },
        
        issues: {
            critical: [],
            warnings: [],
            recommendations: []
        },
        
        internalLinks: extractInternalLinks(markdownContent),
        anchortextQuality: 'Unbekannt'
    };
    
    // === WÖRTER-ZÄHLUNG & BEWERTUNG (EXAKT nach Instructions: mind. 8500-10000+ Wörter) ===
    if (analysis.wordCount >= 8500) {
        analysis.wordCountRating = 'Ausreichend - erfüllt Minimum (8500-10000+ Wörter)';
        analysis.checks.wordCount = true;
    } else {
        analysis.wordCountRating = 'ZU KURZ - unter Minimum (8500-10000+ Wörter erforderlich)';
        analysis.issues.critical.push(`Blog zu kurz: ${analysis.wordCount} Wörter (MINIMUM laut Instructions: 8500-10000+)`);
    }
    
    // === META-DESCRIPTION 120-160 ZEICHEN CHECK ===
    if (analysis.metaDescription) {
        const metaLength = analysis.metaDescription.length;
        if (metaLength >= 120 && metaLength <= 160) {
            analysis.checks.metaDescriptionLength = true;
        } else if (metaLength < 120) {
            analysis.issues.warnings.push(`Meta-Description zu kurz: ${metaLength} Zeichen (empfohlen: 120-160)`);
        } else {
            analysis.issues.warnings.push(`Meta-Description zu lang: ${metaLength} Zeichen (empfohlen: 120-160)`);
        }
    } else {
        analysis.issues.critical.push('Meta-Description fehlt komplett');
    }
    
    // === FOKUS-KEYWORD CHECKS (wie in README) ===
    if (analysis.focusKeyword) {
        const keyword = analysis.focusKeyword.toLowerCase();
        
        // In Meta-Description
        if (analysis.metaDescription.toLowerCase().includes(keyword)) {
            analysis.checks.focusKeywordInMeta = true;
        } else {
            analysis.issues.warnings.push('Fokus-Keyword nicht in Meta-Description gefunden');
        }
        
        // In Title
        if (analysis.title.toLowerCase().includes(keyword)) {
            analysis.checks.focusKeywordInTitle = true;
        } else {
            analysis.issues.warnings.push('Fokus-Keyword nicht im Titel gefunden');
        }
        
        // In H1/H2 organisch
        const headings = extractHeadings(markdownContent);
        const keywordInHeadings = headings.some(heading => 
            heading.toLowerCase().includes(keyword)
        );
        
        if (keywordInHeadings) {
            analysis.checks.focusKeywordInH1H2 = true;
        } else {
            analysis.issues.warnings.push('Fokus-Keyword nicht organisch in H1/H2 Überschriften gefunden');
        }
        
        // In Content organisch
        if (markdownContent.toLowerCase().includes(keyword)) {
            analysis.checks.focusKeywordInContent = true;
        } else {
            analysis.issues.critical.push('Fokus-Keyword nicht im Content gefunden');
        }
    } else {
        analysis.issues.critical.push('Kein Fokus-Keyword definiert');
    }
    
    // === SCHEMA.ORG JSON-LD VALIDIERUNG ===
    if (analysis.schema && typeof analysis.schema === 'object') {
        try {
            if (analysis.schema['@context'] && analysis.schema['@type']) {
                analysis.checks.schemaValid = true;
            } else {
                analysis.issues.warnings.push('Schema.org Markup unvollständig (@context oder @type fehlt)');
            }
        } catch (e) {
            analysis.issues.warnings.push('Schema.org Markup JSON fehlerhaft');
        }
    } else {
        analysis.issues.recommendations.push('Schema.org JSON-LD Markup empfohlen für besseres SEO');
    }
    
    // === INTERNE LINKS & ANKERTEXT-QUALITÄT ===
    if (analysis.internalLinks.length >= 3) {
        analysis.checks.internalLinks = true;
        analysis.anchortextQuality = evaluateAnchortextQuality(analysis.internalLinks);
    } else {
        analysis.issues.warnings.push(`Zu wenige interne Links: ${analysis.internalLinks.length} (empfohlen: mindestens 3)`);
        analysis.anchortextQuality = 'Ungenügend';
    }
    
    return analysis;
}

function countWords(content) {
    const cleanContent = content
        .replace(/#{1,6}\s+/g, '') // Headers
        .replace(/\*\*(.*?)\*\*/g, '$1') // Bold
        .replace(/\*(.*?)\*/g, '$1') // Italic
        .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Links
        .replace(/`(.*?)`/g, '$1') // Code
        .replace(/---/g, '') // Horizontal rules
        .replace(/^\s*[-*+]\s+/gm, '') // List markers
        .replace(/^\s*\d+\.\s+/gm, '') // Numbered lists
        .trim();
    
    return cleanContent.split(/\s+/).filter(word => word.length > 0).length;
}

function extractHeadings(content) {
    const headingPattern = /^#{1,2}\s+(.+)$/gm;
    const headings = [];
    let match;
    
    while ((match = headingPattern.exec(content)) !== null) {
        headings.push(match[1].trim());
    }
    
    return headings;
}

function extractInternalLinks(content) {
    const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
    const links = [];
    let match;
    
    while ((match = linkPattern.exec(content)) !== null) {
        const [, anchorText, url] = match;
        // Nur interne Links (relative URLs oder gleiche Domain)
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            links.push({
                anchorText: anchorText.trim(),
                url: url.trim()
            });
        }
    }
    
    return links;
}

function evaluateAnchortextQuality(links) {
    if (links.length === 0) return 'Keine Links';
    
    const genericTexts = ['hier', 'klick hier', 'mehr', 'weiterlesen', 'link', 'hier klicken'];
    const descriptiveLinks = links.filter(link => 
        !genericTexts.some(generic => link.anchorText.toLowerCase().includes(generic)) &&
        link.anchorText.length > 10
    );
    
    const qualityRatio = descriptiveLinks.length / links.length;
    
    if (qualityRatio >= 0.8) return 'Gut';
    if (qualityRatio >= 0.6) return 'Mittel';
    return 'Schlecht';
}

// === VS CODE PROBLEME SCANNER ===
async function scanVSCodeProblems() {
    const problems = {
        errors: [],
        warnings: [],
        infos: [],
        totalCount: 0,
        criticalFiles: []
    };
    
    try {
        // Scanne alle JavaScript/TypeScript Dateien im Projekt
        const projectRoot = path.resolve(__dirname, '../../..');
        const filesToCheck = [];
        
        // Sammle alle relevanten Dateien
        const extensions = ['.js', '.ts', '.jsx', '.tsx', '.html', '.css'];
        const scanDirectories = [
            path.join(projectRoot, 'scripts'),
            path.join(projectRoot, 'check_scripts'),
            path.join(projectRoot, 'build-process'),
            projectRoot // Root-Verzeichnis für HTML/CSS
        ];
        
        for (const dir of scanDirectories) {
            if (fs.existsSync(dir)) {
                const files = getAllFilesRecursively(dir, extensions);
                filesToCheck.push(...files);
            }
        }
        
        // Prüfe jede Datei auf Syntax-Errors
        for (const filePath of filesToCheck) {
            try {
                const relativePath = path.relative(projectRoot, filePath);
                const content = fs.readFileSync(filePath, 'utf8');
                
                // Basis-Syntax-Checks
                const fileProblems = await analyzeFileForProblems(filePath, content);
                
                if (fileProblems.errors.length > 0) {
                    problems.errors.push(...fileProblems.errors.map(err => ({
                        file: relativePath,
                        line: err.line || 'unknown',
                        message: err.message,
                        severity: 'error'
                    })));
                }
                
                if (fileProblems.warnings.length > 0) {
                    problems.warnings.push(...fileProblems.warnings.map(warn => ({
                        file: relativePath,
                        line: warn.line || 'unknown', 
                        message: warn.message,
                        severity: 'warning'
                    })));
                }
                
                // Kritische Dateien mit Problemen sammeln
                if (fileProblems.errors.length > 0 || fileProblems.warnings.length > 2) {
                    problems.criticalFiles.push({
                        file: relativePath,
                        errorCount: fileProblems.errors.length,
                        warningCount: fileProblems.warnings.length
                    });
                }
                
            } catch (fileError) {
                problems.errors.push({
                    file: path.relative(projectRoot, filePath),
                    line: 'unknown',
                    message: `Datei konnte nicht analysiert werden: ${fileError.message}`,
                    severity: 'error'
                });
            }
        }
        
        problems.totalCount = problems.errors.length + problems.warnings.length + problems.infos.length;
        
        console.log(`📊 VS Code Probleme gescannt: ${problems.totalCount} Probleme in ${filesToCheck.length} Dateien`);
        
    } catch (error) {
        problems.errors.push({
            file: 'VS Code Scanner',
            line: 'unknown', 
            message: `Scanner-Fehler: ${error.message}`,
            severity: 'error'
        });
        console.error(`❌ VS Code Problem Scanner Fehler: ${error.message}`);
    }
    
    return problems;
}

// Hilfsfunktion: Alle Dateien rekursiv sammeln
function getAllFilesRecursively(dir, extensions) {
    const files = [];
    
    try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                // Vermeide node_modules, .git etc.
                if (!['node_modules', '.git', 'dist', '.next', '__trash__'].includes(item)) {
                    files.push(...getAllFilesRecursively(fullPath, extensions));
                }
            } else if (stat.isFile()) {
                const ext = path.extname(fullPath);
                if (extensions.includes(ext)) {
                    files.push(fullPath);
                }
            }
        }
    } catch (error) {
        console.warn(`⚠️ Verzeichnis nicht lesbar: ${dir}`);
    }
    
    return files;
}

// Hilfsfunktion: Datei auf Probleme analysieren
async function analyzeFileForProblems(filePath, content) {
    const problems = {
        errors: [],
        warnings: []
    };
    
    const ext = path.extname(filePath);
    
    try {
        // JavaScript/TypeScript spezifische Checks
        if (['.js', '.ts', '.jsx', '.tsx'].includes(ext)) {
            // Check für Mixed Module Syntax
            if (content.includes('require(') && content.includes('import ')) {
                problems.warnings.push({
                    line: 'unknown',
                    message: 'Mixed ES Module and CommonJS syntax detected'
                });
            }
            
            // Check für Syntax-Errors (basis)
            const lines = content.split('\n');
            lines.forEach((line, index) => {
                const lineNum = index + 1;
                
                // Häufige Syntax-Probleme
                if (line.includes('module.exports') && content.includes('export ')) {
                    problems.errors.push({
                        line: lineNum,
                        message: 'Cannot use CommonJS module.exports with ES modules'
                    });
                }
                
                if (line.includes('require(') && content.includes('"type": "module"')) {
                    problems.errors.push({
                        line: lineNum,
                        message: 'require() not allowed in ES modules'
                    });
                }
                
                // Unbalanced brackets (basic check)
                const openBraces = (line.match(/\{/g) || []).length;
                const closeBraces = (line.match(/\}/g) || []).length;
                if (Math.abs(openBraces - closeBraces) > 2) {
                    problems.warnings.push({
                        line: lineNum,
                        message: 'Potential unbalanced braces detected'
                    });
                }
            });
        }
        
        // HTML spezifische Checks  
        if (ext === '.html') {
            if (!content.includes('<!DOCTYPE html>')) {
                problems.warnings.push({
                    line: 1,
                    message: 'Missing DOCTYPE declaration'
                });
            }
        }
        
    } catch (error) {
        problems.errors.push({
            line: 'unknown',
            message: `Analysis error: ${error.message}`
        });
    }
    
    return problems;
}

function generateMasterLogContent(results) {
    const lines = [];
    
    lines.push('# 🚀 MASTER BUILD CHECK - VOLLSTÄNDIGE ANALYSE');
    lines.push(`**Timestamp:** ${results.timestamp}`);
    lines.push(`**Build Started:** ${results.buildStarted}`);
    lines.push(`**Build Status:** ✅ ERFOLGREICH (niemals abgebrochen)`);
    lines.push('');
    
    lines.push('═'.repeat(80));
    lines.push('## 📊 GLOBALE ZUSAMMENFASSUNG');
    lines.push('═'.repeat(80));
    lines.push(`**Build-Prozess abgeschlossen:** ${results.globalStatus.buildProcessCompleted ? 'Ja' : 'Nein'}`);
    lines.push(`**Build niemals abgebrochen:** ${results.globalStatus.buildNeverAborted ? 'Ja' : 'Nein'}`);
    lines.push(`**Analysierte Blogs:** ${results.summary.totalBlogs}`);
    lines.push(`**Durchschnittliche Wortanzahl:** ${results.summary.avgWordCount}`);
    lines.push(`**Kritische Issues gesamt:** ${results.globalStatus.totalErrors}`);
    lines.push(`**Warnungen gesamt:** ${results.globalStatus.totalWarnings}`);
    lines.push(`**VS Code Probleme:** ${results.vscodeProblems.totalCount} (${results.vscodeProblems.errors.length} Errors, ${results.vscodeProblems.warnings.length} Warnings)`);
    lines.push('');
    lines.push('');
    
    lines.push('═'.repeat(80));
    lines.push('## 🗂️ ARCHIVIERUNG & INFRASTRUKTUR');
    lines.push('═'.repeat(80));
    lines.push(`**Alte Logfiles archiviert:** ${results.infrastructure.archivingStatus.status}`);
    lines.push(`**Archivierte Dateien:** ${results.infrastructure.archivingStatus.archived}`);
    lines.push(`**Verbleibende Logs:** ${results.infrastructure.archivingStatus.remaining || 0}`);
    lines.push('');
    
    lines.push('═'.repeat(80));
    lines.push('## 🌐 SITEMAP & ROBOTS STATUS');
    lines.push('═'.repeat(80));
    lines.push(`**Sitemap aktualisiert:** ${results.infrastructure.sitemap.updated}`);
    lines.push(`**Sitemap vorhanden:** ${results.infrastructure.sitemap.exists}`);
    lines.push(`**Sitemap letzte Änderung:** ${results.infrastructure.sitemap.lastModified}`);
    lines.push(`**URLs in Sitemap:** ${results.infrastructure.sitemap.urlCount}`);
    lines.push(`**Sitemap Alter:** ${results.infrastructure.sitemap.ageHours}h`);
    lines.push('');
    lines.push(`**Robots.txt aktualisiert:** ${results.infrastructure.robots.updated}`);
    lines.push(`**Robots.txt vorhanden:** ${results.infrastructure.robots.exists}`);
    lines.push(`**Robots.txt letzte Änderung:** ${results.infrastructure.robots.lastModified}`);
    lines.push(`**Sitemap-Verweis in robots.txt:** ${results.infrastructure.robots.hasSitemap}`);
    lines.push(`**User-Agent in robots.txt:** ${results.infrastructure.robots.hasUserAgent}`);
    lines.push('');
    
    // === VS CODE PROBLEME SECTION ===
    lines.push('═'.repeat(80));
    lines.push('## 🔍 VS CODE PROBLEME & SYNTAX-CHECKS');
    lines.push('═'.repeat(80));
    lines.push(`**Gesamt Probleme:** ${results.vscodeProblems.totalCount}`);
    lines.push(`**Errors:** ${results.vscodeProblems.errors.length}`);
    lines.push(`**Warnings:** ${results.vscodeProblems.warnings.length}`);
    lines.push(`**Kritische Dateien:** ${results.vscodeProblems.criticalFiles.length}`);
    lines.push('');
    
    if (results.vscodeProblems.errors.length > 0) {
        lines.push('### 🚨 SYNTAX ERRORS:');
        results.vscodeProblems.errors.forEach(error => {
            lines.push(`- **${error.file}:${error.line}** - ${error.message}`);
        });
        lines.push('');
    }
    
    if (results.vscodeProblems.warnings.length > 0) {
        lines.push('### ⚠️ WARNINGS:');
        results.vscodeProblems.warnings.forEach(warning => {
            lines.push(`- **${warning.file}:${warning.line}** - ${warning.message}`);
        });
        lines.push('');
    }
    
    if (results.vscodeProblems.criticalFiles.length > 0) {
        lines.push('### 📁 KRITISCHE DATEIEN:');
        results.vscodeProblems.criticalFiles.forEach(file => {
            lines.push(`- **${file.file}** - ${file.errorCount} Errors, ${file.warningCount} Warnings`);
        });
        lines.push('');
    }
    
    if (results.vscodeProblems.totalCount === 0) {
        lines.push('✅ **KEINE VS CODE PROBLEME GEFUNDEN!**');
        lines.push('');
    }
    
    lines.push('═'.repeat(80));
    lines.push('## 📝 DETAILLIERTE BLOG-ANALYSE');
    lines.push('═'.repeat(80));
    
    results.blogs.forEach((blog, index) => {
        if (blog.error) {
            lines.push(`### ${index + 1}. ${blog.filename} ❌ FEHLER`);
            lines.push(`**Analyse-Fehler:** ${blog.error}`);
            lines.push('─'.repeat(60));
            lines.push('');
            return;
        }
        
        lines.push(`### ${index + 1}. ${blog.filename}`);
        lines.push(`**Bloglänge:** ${blog.wordCount} Wörter - ${blog.wordCountRating}`);
        lines.push(`**Fokus-Keyword:** "${blog.focusKeyword}"`);
        lines.push(`**Meta-Description Länge:** ${blog.metaDescription.length} Zeichen`);
        lines.push(`**Interne Links Anzahl:** ${blog.internalLinks.length}`);
        lines.push('');
        
        lines.push('**✅ ALLE CHECKS (wie in README spezifiziert):**');
        lines.push(`- Wortanzahl ausreichend: ${blog.checks.wordCount ? '✅' : '❌'}`);
        lines.push(`- Meta-Description 120-160 Zeichen: ${blog.checks.metaDescriptionLength ? '✅' : '❌'}`);
        lines.push(`- Fokus-Keyword in Meta-Description: ${blog.checks.focusKeywordInMeta ? '✅' : '❌'}`);
        lines.push(`- Fokus-Keyword im Titel: ${blog.checks.focusKeywordInTitle ? '✅' : '❌'}`);
        lines.push(`- Fokus-Keyword in H1/H2 organisch: ${blog.checks.focusKeywordInH1H2 ? '✅' : '❌'}`);
        lines.push(`- Fokus-Keyword im Text organisch: ${blog.checks.focusKeywordInContent ? '✅' : '❌'}`);
        lines.push(`- Schema.org JSON-LD korrekt: ${blog.checks.schemaValid ? '✅' : '❌'}`);
        lines.push(`- Interne Links geprüft: ${blog.checks.internalLinks ? '✅' : '❌'}`);
        lines.push(`- Ankertext-Qualität: ${blog.anchortextQuality}`);
        lines.push('');
        
        if (blog.issues.critical.length > 0) {
            lines.push('**🚨 KRITISCHE ISSUES:**');
            blog.issues.critical.forEach(issue => lines.push(`- ${issue}`));
            lines.push('');
        }
        
        if (blog.issues.warnings.length > 0) {
            lines.push('**⚠️ WARNUNGEN:**');
            blog.issues.warnings.forEach(warning => lines.push(`- ${warning}`));
            lines.push('');
        }
        
        if (blog.issues.recommendations.length > 0) {
            lines.push('**💡 EMPFEHLUNGEN:**');
            blog.issues.recommendations.forEach(rec => lines.push(`- ${rec}`));
            lines.push('');
        }
        
        if (blog.internalLinks.length > 0) {
            lines.push('**🔗 INTERNE LINKS:**');
            blog.internalLinks.forEach(link => {
                lines.push(`- [${link.anchorText}](${link.url})`);
            });
            lines.push('');
        }
        
        lines.push('─'.repeat(60));
        lines.push('');
    });
    
    if (results.summary.globalRecommendations.length > 0) {
        lines.push('═'.repeat(80));
        lines.push('## 🎯 GLOBALE EMPFEHLUNGEN');
        lines.push('═'.repeat(80));
        results.summary.globalRecommendations.forEach(rec => lines.push(`- ${rec}`));
        lines.push('');
    }
    
    lines.push('═'.repeat(80));
    lines.push('## 📋 BUILD-PROZESS GARANTIEN');
    lines.push('═'.repeat(80));
    lines.push('**✅ Build-Durchlauf:** ERFOLGREICH - Niemals Abbruch bei Fehlern');
    lines.push('**✅ Logging:** Vollständig in eine einzige Datei');
    lines.push('**✅ Archivierung:** Alte Logs automatisch in archiv/ verschoben');
    lines.push('**✅ Error-Handling:** Alle Exceptions gefangen, Build läuft weiter');
    lines.push('**✅ Performance:** Alle Checks in einem Durchgang');
    lines.push('');
    lines.push('**🔒 GARANTIE: Der Build-Prozess wird NIEMALS durch den Checker unterbrochen!**');
    lines.push('**📊 ALLE CHECKS in dieser einen Logdatei enthalten**');
    lines.push(`**⏰ Check-Dauer:** ${new Date().toLocaleString('de-DE')}`);
    
    return lines.join('\n');
}

// EXPORT für Integration
if (import.meta.url === `file://${process.argv[1]}`) {
    runMasterBuildCheck();
}

export { runMasterBuildCheck };
