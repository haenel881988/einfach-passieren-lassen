/**
 * seoCheck.js
 * Modul für SEO-Checklisten und Validierung
 * Erstellt: 02.07.2025
 * 
 * Vollständige Implementierung aller SEO-Check-Funktionen aus scripts/build.js
 */

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
// const chalk = require('chalk'); // Temporär deaktiviert

/**
 * Haupteinstiegspunkt für globale SEO-Checks
 * @param {Object} options - Konfigurationsoptionen für die SEO-Checks
 * @returns {Object} Ergebnis der SEO-Validierung mit Fehlern und Warnungen
 */
function validateGlobalSEO(options = {}) {
    console.log('🌐 Führe umfassende SEO-Validierung durch...');
    
    const defaultOptions = {
        sitemapPath: 'sitemap.xml',
        robotsPath: 'robots.txt',
        wwwFormat: true, // true = www, false = non-www
        maxLastmodAgeDays: 30,
        htmlFiles: [],
        baseUrl: 'https://www.einfach-passieren-lassen.ch'
    };
    
    const mergedOptions = { ...defaultOptions, ...options };
    const results = {
        errors: [],
        warnings: [],
        info: []
    };
    
    // Prüfe ob Dateien existieren
    if (!fs.existsSync(mergedOptions.sitemapPath)) {
        results.errors.push({
            type: 'MISSING_FILE',
            message: `Sitemap-Datei nicht gefunden: ${mergedOptions.sitemapPath}`,
            file: mergedOptions.sitemapPath
        });
    }
    
    if (!fs.existsSync(mergedOptions.robotsPath)) {
        results.errors.push({
            type: 'MISSING_FILE',
            message: `Robots.txt-Datei nicht gefunden: ${mergedOptions.robotsPath}`,
            file: mergedOptions.robotsPath
        });
    }
    
    // Führe Validierungen durch wenn Dateien existieren
    if (fs.existsSync(mergedOptions.sitemapPath)) {
        const sitemapResults = validateSitemap(mergedOptions.sitemapPath, mergedOptions);
        results.errors.push(...sitemapResults.errors);
        results.warnings.push(...sitemapResults.warnings);
        results.info.push(...sitemapResults.info);
    }
    
    if (fs.existsSync(mergedOptions.robotsPath)) {
        const robotsResults = validateRobots(mergedOptions.robotsPath, mergedOptions);
        results.errors.push(...robotsResults.errors);
        results.warnings.push(...robotsResults.warnings);
        results.info.push(...robotsResults.info);
    }
    
    // Cross-Validierung zwischen Dateien
    if (fs.existsSync(mergedOptions.sitemapPath) && fs.existsSync(mergedOptions.robotsPath)) {
        const consistencyResults = validateURLConsistency(mergedOptions);
        results.errors.push(...consistencyResults.errors);
        results.warnings.push(...consistencyResults.warnings);
        results.info.push(...consistencyResults.info);
    }
    
    // Validierung der internen Links, wenn HTML-Dateien angegeben wurden
    if (mergedOptions.htmlFiles && mergedOptions.htmlFiles.length > 0) {
        const linkTargetResults = validateInternalLinkTargets(mergedOptions.htmlFiles, mergedOptions);
        results.errors.push(...linkTargetResults.errors);
        results.warnings.push(...linkTargetResults.warnings);
        results.info.push(...linkTargetResults.info);
        
        const linkStructureResults = validateLinkStructure(mergedOptions.htmlFiles, mergedOptions);
        results.errors.push(...linkStructureResults.errors);
        results.warnings.push(...linkStructureResults.warnings);
        results.info.push(...linkStructureResults.info);
    }
    
    // Ausgabe der Ergebnisse
    const totalIssues = results.errors.length + results.warnings.length;
    if (totalIssues === 0) {
        console.log('✅ SEO-Validierung erfolgreich - keine Probleme gefunden!');
    } else {
        console.log(`⚠️ SEO-Validierung abgeschlossen - ${results.errors.length} Fehler, ${results.warnings.length} Warnungen gefunden.`);
    }
    
    return results;
}

/**
 * Validiert die Sitemap.xml auf SEO-Best-Practices
 * @param {string} filePath - Pfad zur Sitemap-Datei
 * @param {Object} options - Konfigurationsoptionen
 * @returns {Object} Validierungsergebnisse
 */
function validateSitemap(filePath, options = {}) {
    console.log(`🔍 Prüfe Sitemap: ${filePath}`);
    
    const results = {
        errors: [],
        warnings: [],
        info: []
    };
    
    try {
        const sitemapContent = fs.readFileSync(filePath, 'utf8');
        
        // Prüfe XML-Format und Namespace
        if (!sitemapContent.includes('<?xml version="1.0"')) {
            results.errors.push({
                type: 'INVALID_XML',
                message: 'Sitemap fehlt XML-Deklaration',
                file: filePath
            });
        }
        
        if (!sitemapContent.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) {
            results.errors.push({
                type: 'INVALID_NAMESPACE',
                message: 'Sitemap fehlt korrekter Namespace (xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")',
                file: filePath
            });
        }
        
        // Extrahiere URLs aus Sitemap
        const urlMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g) || [];
        const urls = urlMatches.map(match => match.replace(/<\/?loc>/g, ''));
        
        // Prüfe ob URLs vorhanden sind
        if (urls.length === 0) {
            results.errors.push({
                type: 'EMPTY_SITEMAP',
                message: 'Sitemap enthält keine URLs (<loc> Tags)',
                file: filePath
            });
        } else {
            results.info.push({
                type: 'URL_COUNT',
                message: `Sitemap enthält ${urls.length} URLs`,
                file: filePath
            });
        }
        
        // Prüfe URL-Format und Konsistenz
        let wwwCount = 0;
        let nonWwwCount = 0;
        let httpCount = 0;
        let httpsCount = 0;
        
        for (const url of urls) {
            // Prüfe HTTP vs HTTPS
            if (url.startsWith('http://')) {
                httpCount++;
                results.errors.push({
                    type: 'HTTP_URL',
                    message: `URL verwendet HTTP statt HTTPS: ${url}`,
                    file: filePath
                });
            } else if (url.startsWith('https://')) {
                httpsCount++;
            }
            
            // Prüfe www vs non-www
            if (url.includes('://www.')) {
                wwwCount++;
            } else if (url.match(/https?:\/\/[^/]+\//)) {
                nonWwwCount++;
            }
        }
        
        // Prüfe URL-Format-Konsistenz
        if (wwwCount > 0 && nonWwwCount > 0) {
            results.errors.push({
                type: 'MIXED_URL_FORMAT',
                message: `Sitemap enthält gemischte URL-Formate: ${wwwCount} mit www, ${nonWwwCount} ohne www`,
                file: filePath
            });
        }
        
        // Prüfe ob URL-Format mit Konfiguration übereinstimmt
        const expectedFormat = options.wwwFormat ? 'www' : 'non-www';
        const actualFormat = wwwCount > nonWwwCount ? 'www' : 'non-www';
        
        if (expectedFormat !== actualFormat) {
            results.warnings.push({
                type: 'URL_FORMAT_MISMATCH',
                message: `Sitemap URLs verwenden hauptsächlich ${actualFormat}, erwartet wurde ${expectedFormat}`,
                file: filePath
            });
        }
        
        // Prüfe lastmod Daten
        const lastmodMatches = sitemapContent.match(/<lastmod>(.*?)<\/lastmod>/g) || [];
        const today = new Date();
        const maxAgeDays = options.maxLastmodAgeDays || 30;
        const minDate = new Date(today);
        minDate.setDate(today.getDate() - maxAgeDays);
        
        for (const lastmodMatch of lastmodMatches) {
            const dateStr = lastmodMatch.replace(/<\/?lastmod>/g, '');
            const lastmodDate = new Date(dateStr);
            
            if (isNaN(lastmodDate.getTime())) {
                results.warnings.push({
                    type: 'INVALID_LASTMOD',
                    message: `Ungültiges lastmod-Datum: ${dateStr}`,
                    file: filePath
                });
            } else if (lastmodDate < minDate) {
                results.warnings.push({
                    type: 'OUTDATED_LASTMOD',
                    message: `lastmod-Datum älter als ${maxAgeDays} Tage: ${dateStr}`,
                    file: filePath
                });
            }
        }
        
    } catch (error) {
        results.errors.push({
            type: 'FILE_READ_ERROR',
            message: `Fehler beim Lesen der Sitemap: ${error.message}`,
            file: filePath
        });
    }
    
    return results;
}

/**
 * Validiert die robots.txt auf SEO-Best-Practices
 * @param {string} filePath - Pfad zur robots.txt-Datei
 * @param {Object} options - Konfigurationsoptionen
 * @returns {Object} Validierungsergebnisse
 */
function validateRobots(filePath, options = {}) {
    console.log(`🔍 Prüfe robots.txt: ${filePath}`);
    
    const results = {
        errors: [],
        warnings: [],
        info: []
    };
    
    try {
        const robotsContent = fs.readFileSync(filePath, 'utf8');
        const lines = robotsContent.split('\n').map(line => line.trim());
        
        // Prüfe auf User-Agent Direktiven
        const userAgentLines = lines.filter(line => line.startsWith('User-agent:'));
        if (userAgentLines.length === 0) {
            results.warnings.push({
                type: 'NO_USER_AGENT',
                message: 'robots.txt enthält keine User-agent Direktiven',
                file: filePath
            });
        }
        
        // Prüfe auf Sitemap-Eintrag
        const sitemapLines = lines.filter(line => line.startsWith('Sitemap:'));
        if (sitemapLines.length === 0) {
            results.warnings.push({
                type: 'NO_SITEMAP',
                message: 'robots.txt enthält keinen Sitemap-Eintrag',
                file: filePath
            });
        } else {
            // Extrahiere Sitemap-URL
            const sitemapUrl = sitemapLines[0].replace('Sitemap:', '').trim();
            
            // Prüfe HTTP vs HTTPS
            if (sitemapUrl.startsWith('http://')) {
                results.errors.push({
                    type: 'HTTP_SITEMAP',
                    message: `Sitemap-URL verwendet HTTP statt HTTPS: ${sitemapUrl}`,
                    file: filePath
                });
            }
            
            // Prüfe www vs non-www
            const hasWww = sitemapUrl.includes('://www.');
            if (options.wwwFormat && !hasWww) {
                results.warnings.push({
                    type: 'WWW_FORMAT_MISMATCH',
                    message: `Sitemap-URL verwendet non-www Format, erwartet wurde www: ${sitemapUrl}`,
                    file: filePath
                });
            } else if (!options.wwwFormat && hasWww) {
                results.warnings.push({
                    type: 'WWW_FORMAT_MISMATCH',
                    message: `Sitemap-URL verwendet www Format, erwartet wurde non-www: ${sitemapUrl}`,
                    file: filePath
                });
            }
        }
        
        // Prüfe auf zu restriktive Disallow-Regeln
        const disallowAllLines = lines.filter(line => line === 'Disallow: /');
        if (disallowAllLines.length > 0) {
            results.warnings.push({
                type: 'DISALLOW_ALL',
                message: 'robots.txt enthält "Disallow: /" - die gesamte Website wird blockiert!',
                file: filePath
            });
        }
        
    } catch (error) {
        results.errors.push({
            type: 'FILE_READ_ERROR',
            message: `Fehler beim Lesen der robots.txt: ${error.message}`,
            file: filePath
        });
    }
    
    return results;
}

/**
 * Prüft die Konsistenz zwischen Sitemap und robots.txt
 * @param {Object} options - Konfigurationsoptionen
 * @returns {Object} Validierungsergebnisse
 */
function validateURLConsistency(options = {}) {
    console.log('🔍 Prüfe URL-Konsistenz zwischen Sitemap und robots.txt...');
    
    const results = {
        errors: [],
        warnings: [],
        info: []
    };
    
    try {
        const sitemapContent = fs.readFileSync(options.sitemapPath, 'utf8');
        const robotsContent = fs.readFileSync(options.robotsPath, 'utf8');
        
        // Extrahiere Domain aus Sitemap
        const sitemapUrlMatch = sitemapContent.match(/<loc>(https?:\/\/[^/]+)\/.*?<\/loc>/);
        if (!sitemapUrlMatch) {
            results.warnings.push({
                type: 'NO_DOMAIN',
                message: 'Keine Domain in Sitemap-URLs gefunden',
                files: [options.sitemapPath, options.robotsPath]
            });
            return results;
        }
        
        const sitemapDomain = sitemapUrlMatch[1];
        
        // Extrahiere Sitemap-URL aus robots.txt
        const robotsSitemapMatch = robotsContent.match(/Sitemap:\s*(https?:\/\/[^/]+)\//);
        if (!robotsSitemapMatch) {
            results.warnings.push({
                type: 'NO_SITEMAP_URL',
                message: 'Keine Sitemap-URL in robots.txt gefunden',
                files: [options.sitemapPath, options.robotsPath]
            });
            return results;
        }
        
        const robotsDomain = robotsSitemapMatch[1];
        
        // Vergleiche Domains
        if (sitemapDomain !== robotsDomain) {
            results.errors.push({
                type: 'DOMAIN_MISMATCH',
                message: `Domain-Inkonsistenz: Sitemap verwendet "${sitemapDomain}", robots.txt verwendet "${robotsDomain}"`,
                files: [options.sitemapPath, options.robotsPath]
            });
        } else {
            results.info.push({
                type: 'DOMAIN_MATCH',
                message: `Domain-Konsistenz: Sitemap und robots.txt verwenden beide "${sitemapDomain}"`,
                files: [options.sitemapPath, options.robotsPath]
            });
        }
        
    } catch (error) {
        results.errors.push({
            type: 'FILE_READ_ERROR',
            message: `Fehler beim Validieren der URL-Konsistenz: ${error.message}`,
            files: [options.sitemapPath, options.robotsPath]
        });
    }
    
    return results;
}

/**
 * Validiert die Ziele interner Links in HTML-Dateien
 * @param {Array<string>} htmlFiles - Liste der HTML-Dateien
 * @param {Object} options - Konfigurationsoptionen
 * @returns {Object} Validierungsergebnisse
 */
function validateInternalLinkTargets(htmlFiles, options = {}) {
    console.log(`🔍 Prüfe interne Link-Ziele in ${htmlFiles.length} HTML-Dateien...`);
    
    const results = {
        errors: [],
        warnings: [],
        info: []
    };
    
    // Sammle alle verfügbaren Dateien
    const availableFiles = new Set();
    
    // Füge HTML-Dateien hinzu
    for (const htmlFile of htmlFiles) {
        availableFiles.add(path.basename(htmlFile));
    }
    
    // Sammle alle internen Links
    const internalLinks = new Map(); // Map<source, Set<target>>
    
    for (const htmlFile of htmlFiles) {
        try {
            const content = fs.readFileSync(htmlFile, 'utf8');
            const $ = cheerio.load(content);
            const links = $('a[href]');
            
            if (links.length === 0) {
                results.warnings.push({
                    type: 'NO_LINKS',
                    message: `Keine Links gefunden in ${htmlFile}`,
                    file: htmlFile
                });
                continue;
            }
            
            const sourceFile = path.basename(htmlFile);
            if (!internalLinks.has(sourceFile)) {
                internalLinks.set(sourceFile, new Set());
            }
            
            links.each((i, link) => {
                const href = $(link).attr('href');
                
                // Ignoriere externe Links und Anker-Links
                if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
                    return;
                }
                
                // Extrahiere Zieldatei
                let targetFile;
                if (href.includes('#')) {
                    targetFile = href.split('#')[0];
                } else {
                    targetFile = href;
                }
                
                // Normalisiere leere Links und index.html
                if (targetFile === '' || targetFile === './') {
                    targetFile = 'index.html';
                }
                
                // Entferne Pfad-Komponenten und behalte nur den Dateinamen
                targetFile = path.basename(targetFile);
                
                // Füge zur Map hinzu
                internalLinks.get(sourceFile).add(targetFile);
            });
            
        } catch (error) {
            results.errors.push({
                type: 'FILE_READ_ERROR',
                message: `Fehler beim Lesen von ${htmlFile}: ${error.message}`,
                file: htmlFile
            });
        }
    }
    
    // Prüfe ob Zieldateien existieren
    for (const [sourceFile, targetFiles] of internalLinks.entries()) {
        for (const targetFile of targetFiles) {
            if (!availableFiles.has(targetFile) && targetFile !== '') {
                results.errors.push({
                    type: 'DEAD_LINK',
                    message: `Toter Link: ${sourceFile} verweist auf nicht existierende Datei ${targetFile}`,
                    file: sourceFile
                });
            }
        }
    }
    
    return results;
}

/**
 * Validiert die Struktur der Links (Ankertexte, etc.)
 * @param {Array<string>} htmlFiles - Liste der HTML-Dateien
 * @param {Object} options - Konfigurationsoptionen
 * @returns {Object} Validierungsergebnisse
 */
function validateLinkStructure(htmlFiles, options = {}) {
    console.log(`🔍 Prüfe Link-Struktur in ${htmlFiles.length} HTML-Dateien...`);
    
    const results = {
        errors: [],
        warnings: [],
        info: []
    };
    
    const genericAnchorTexts = [
        'hier', 'klick', 'klicken', 'link', 'hier klicken', 'mehr', 'weiter', 'weiterlesen',
        'click', 'click here', 'here', 'link', 'more', 'read more'
    ];
    
    for (const htmlFile of htmlFiles) {
        try {
            const content = fs.readFileSync(htmlFile, 'utf8');
            const $ = cheerio.load(content);
            const links = $('a[href]');
            
            links.each((i, link) => {
                const $link = $(link);
                const href = $link.attr('href');
                const anchorText = $link.text().trim();
                
                // Ignoriere externe Links
                if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
                    return;
                }
                
                // Prüfe auf leere Ankertexte
                if (anchorText === '') {
                    results.warnings.push({
                        type: 'EMPTY_ANCHOR',
                        message: `Leerer Ankertext für Link zu "${href}" in ${htmlFile}`,
                        file: htmlFile
                    });
                }
                
                // Prüfe auf zu kurze Ankertexte
                if (anchorText.length < 3 && anchorText !== '') {
                    results.warnings.push({
                        type: 'SHORT_ANCHOR',
                        message: `Zu kurzer Ankertext "${anchorText}" für Link zu "${href}" in ${htmlFile}`,
                        file: htmlFile
                    });
                }
                
                // Prüfe auf generische Ankertexte
                if (genericAnchorTexts.some(text => anchorText.toLowerCase() === text)) {
                    results.warnings.push({
                        type: 'GENERIC_ANCHOR',
                        message: `Generischer Ankertext "${anchorText}" für Link zu "${href}" in ${htmlFile}`,
                        file: htmlFile
                    });
                }
            });
            
        } catch (error) {
            results.errors.push({
                type: 'FILE_READ_ERROR',
                message: `Fehler beim Lesen von ${htmlFile}: ${error.message}`,
                file: htmlFile
            });
        }
    }
    
    return results;
}

module.exports = {
    validateGlobalSEO,
    validateSitemap,
    validateRobots,
    validateURLConsistency,
    validateInternalLinkTargets,
    validateLinkStructure
};
