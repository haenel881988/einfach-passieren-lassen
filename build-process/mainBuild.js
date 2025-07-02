/**
 * mainBuild.js
 * Einstiegspunkt für den modularen Build-Prozess
 * Erstellt: 02.07.2025
 * Letzte Aktualisierung: 03.07.2025
 *
 * Modular strukturierter Build-Prozess für bessere Wartbarkeit
 */

// Modulare Build-System Imports
const fs = require('fs');
const path = require('path');
// const chalk = require('chalk'); // Temporär deaktiviert
const { execFileSync } = require('child_process');

// Einfacher Chalk-Ersatz
const chalk = {
    blue: (text) => text,
    magenta: (text) => text,
    red: (text) => text,
    yellow: (text) => text,
    green: (text) => text,
    gray: (text) => text,
    cyan: (text) => text
};

// Module importieren
const TerminalLogger = require('./modules/logger');
const seoCheck = require('./modules/seoCheck');

// Build-Prozess Konfiguration
const CONFIG = {
    seoValidation: {
        enabled: true,
        sitemapPath: 'sitemap.xml',
        robotsPath: 'robots.txt',
        wwwFormat: true,
        maxLastmodAgeDays: 30
    },
    buildOptions: {
        scanMarkdownFiles: true,
        generateHtml: true,
        validateLinks: true
    }
};

/**
 * Haupteinstiegspunkt für den Build-Prozess
 */

async function startBuild() {
    console.log(chalk.blue('🚀 Starte modularen Build-Prozess... (03.07.2025)'));

    // Logger initialisieren für Terminal-Output Erfassung
    const terminalLogger = new TerminalLogger();

    // === NEU: Alle Check-Skripte automatisch ausführen ===
    try {
        const checkDir = path.resolve(__dirname, '../scripts/build-checks/check_scripts');
        if (fs.existsSync(checkDir)) {
            const checkFiles = fs.readdirSync(checkDir).filter(f => f.endsWith('.js'));
            for (const file of checkFiles) {
                const absPath = path.join(checkDir, file);
                console.log(chalk.magenta(`\n▶️ Führe Check-Skript aus: ${file}`));
                try {
                    execFileSync('node', [absPath], { stdio: 'inherit' });
                } catch (e) {
                    console.error(chalk.red(`Fehler beim Ausführen von ${file}: ${e.message}`));
                    // Build nicht abbrechen, aber Fehler anzeigen
                }
            }
        } else {
            console.warn(chalk.yellow('Kein Check-Skript-Verzeichnis gefunden.'));
        }

        // ...existierender Build-Prozess...
        // Log-Management (alte Logs bereinigen)
        await performLogCleanup();

        // HTML-Dateien für SEO-Validierung sammeln
        const htmlFiles = findHtmlFiles();

        // SEO-Validierung durchführen
        if (CONFIG.seoValidation.enabled) {
            const seoResults = seoCheck.validateGlobalSEO({
                sitemapPath: CONFIG.seoValidation.sitemapPath,
                robotsPath: CONFIG.seoValidation.robotsPath,
                wwwFormat: CONFIG.seoValidation.wwwFormat,
                maxLastmodAgeDays: CONFIG.seoValidation.maxLastmodAgeDays,
                htmlFiles: htmlFiles
            });

            // Ergebnisse zusammenfassen
            const totalErrors = seoResults.errors.length;
            const totalWarnings = seoResults.warnings.length;

            if (totalErrors > 0 || totalWarnings > 0) {
                console.log(chalk.yellow(`\n⚠️ SEO-Validierung: ${totalErrors} Fehler, ${totalWarnings} Warnungen gefunden.`));

                // Fehler detailliert ausgeben
                if (totalErrors > 0) {
                    console.log(chalk.red('\n🚨 SEO-FEHLER:'));
                    seoResults.errors.forEach(error => {
                        console.log(chalk.red(`  • ${error.message}`));
                    });
                }

                // Warnungen detailliert ausgeben
                if (totalWarnings > 0) {
                    console.log(chalk.yellow('\n⚠️ SEO-WARNUNGEN:'));
                    seoResults.warnings.forEach(warning => {
                        console.log(chalk.yellow(`  • ${warning.message}`));
                    });
                }
            } else {
                console.log(chalk.green('\n✅ SEO-Validierung erfolgreich abgeschlossen - keine Probleme gefunden!'));
            }
        }

        // TODO: Weitere Module integrieren (fileUtils, etc.)

        // Build erfolgreich abgeschlossen
        console.log(chalk.green('\n✅ Modularer Build-Prozess erfolgreich abgeschlossen!'));

    } catch (error) {
        // Fehlerbehandlung
        console.error(chalk.red(`\n❌ Build-Fehler: ${error.message}`));
        if (error.stack) {
            console.error(chalk.gray(error.stack));
        }
    } finally {
        // Log-Datei speichern und Console wiederherstellen
        terminalLogger.saveToFile();
        terminalLogger.restore();
    }
}

/**
 * Alte Log-Dateien bereinigen
 */
async function performLogCleanup() {
    const logDir = 'docs/015_build_logs';
    if (!fs.existsSync(logDir)) return;
    
    console.log(chalk.gray('🧹 Führe Log-Cleanup durch...'));
    
    const logs = fs.readdirSync(logDir)
        .filter(file => file.startsWith('BUILD_LOG_') && file.endsWith('.md'))
        .map(file => ({
            filename: file,
            path: path.join(logDir, file),
            timestamp: extractTimestamp(file),
            stats: fs.statSync(path.join(logDir, file))
        }))
        .sort((a, b) => a.timestamp - b.timestamp);
    
    // Behalte nur die letzten 5 Logs + beste Performance-Logs
    const keepRecent = 5;
    const keepBest = 3;
    
    if (logs.length <= keepRecent + keepBest) return;
    
    // Archiv-Verzeichnis erstellen
    const archiveDir = 'docs/016_log_archive';
    if (!fs.existsSync(archiveDir)) {
        fs.mkdirSync(archiveDir, { recursive: true });
    }
    
    // Aktuelle Session-Logs behalten
    const recentLogs = logs.slice(-keepRecent);
    
    // Beste Performance-Logs identifizieren (kleinste Dateien = schnellste Builds)
    const oldLogs = logs.slice(0, -keepRecent);
    const bestLogs = oldLogs
        .sort((a, b) => a.stats.size - b.stats.size)
        .slice(0, keepBest);
    
    // Logs die gelöscht werden können
    const bestFilenames = new Set(bestLogs.map(log => log.filename));
    const toDelete = oldLogs.filter(log => !bestFilenames.has(log.filename));
    
    // Beste Logs ins Archiv verschieben
    for (const log of bestLogs) {
        const archivePath = path.join(archiveDir, `ARCHIVE_${log.filename}`);
        try {
            fs.renameSync(log.path, archivePath);
        } catch (e) {
            // Silent fail
        }
    }
    
    // Alte Logs löschen
    for (const log of toDelete) {
        try {
            fs.unlinkSync(log.path);
        } catch (e) {
            // Silent fail
        }
    }
    
    const cleaned = toDelete.length;
    const archived = bestLogs.length;
    
    if (cleaned > 0 || archived > 0) {
        console.log(chalk.gray(`🧹 Log-Cleanup: ${cleaned} gelöscht, ${archived} archiviert, ${recentLogs.length} behalten`));
    }
}

/**
 * Extrahiert den Timestamp aus einem Log-Dateinamen
 * @param {string} filename - Der Dateiname
 * @returns {Date} - Das extrahierte Datum
 */
function extractTimestamp(filename) {
    const match = filename.match(/BUILD_LOG_(\d{4}-\d{2}-\d{2})_(\d{6})\.md/);
    if (!match) return new Date(0);
    
    const [, date, time] = match;
    const hour = time.substring(0, 2);
    const minute = time.substring(2, 4);
    const second = time.substring(4, 6);
    
    return new Date(`${date}T${hour}:${minute}:${second}`);
}

/**
 * Findet alle HTML-Dateien im Projekt
 * @returns {Array<string>} - Liste der HTML-Dateien
 */
function findHtmlFiles() {
    console.log(chalk.cyan('🔍 Suche HTML-Dateien für SEO-Validierung...'));
    
    const htmlFiles = [];
    const excludeDirs = ['node_modules', '.git', 'dist', 'build', '.vscode'];
    
    function scanDir(dir) {
        if (!fs.existsSync(dir)) return;
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            
            if (entry.isDirectory()) {
                if (!excludeDirs.includes(entry.name)) {
                    scanDir(fullPath);
                }
            } else if (entry.isFile() && entry.name.endsWith('.html')) {
                htmlFiles.push(fullPath);
            }
        }
    }
    
    scanDir('.');
    console.log(chalk.cyan(`✓ ${htmlFiles.length} HTML-Dateien gefunden.`));
    
    return htmlFiles;
}

// Starte den Build-Prozess
startBuild().catch(error => {
    console.error(chalk.red(`\n❌ Unbehandelte Ausnahme: ${error.message}`));
    if (error.stack) {
        console.error(chalk.gray(error.stack));
    }
    process.exit(1);
});
