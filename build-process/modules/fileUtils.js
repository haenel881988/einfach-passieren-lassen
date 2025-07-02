/**
 * fileUtils.js
 * Modul für Dateioperationen (lesen, schreiben, scannen, etc.)
 * Erstellt: 02.07.2025
 * Aktualisiert: 03.07.2025
 * 
 * Dieses Modul stellt Funktionen für den Umgang mit Dateien bereit.
 */

const fs = require('fs');
const path = require('path');
const matter = require('front-matter');
const chalk = require('chalk');

/**
 * Findet alle Markdown-Dateien im angegebenen Verzeichnis und Unterverzeichnissen
 * @param {string} rootDir - Das Wurzelverzeichnis für die Suche
 * @param {Array<string>} excludeDirs - Zu ignorierende Verzeichnisse
 * @returns {Array<string>} - Liste der gefundenen Markdown-Dateien (absolute Pfade)
 */
function findMarkdownFiles(rootDir = '.', excludeDirs = ['node_modules', '.git', 'dist', 'build', '.vscode']) {
    console.log(chalk.cyan(`🔍 Suche Markdown-Dateien in ${rootDir}...`));
    
    const markdownFiles = [];
    
    function scanDir(dir) {
        if (!fs.existsSync(dir)) return;
        
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            
            if (entry.isDirectory()) {
                if (!excludeDirs.includes(entry.name)) {
                    scanDir(fullPath);
                }
            } else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.markdown'))) {
                markdownFiles.push(fullPath);
            }
        }
    }
    
    scanDir(rootDir);
    console.log(chalk.cyan(`✓ ${markdownFiles.length} Markdown-Dateien gefunden.`));
    
    return markdownFiles;
}

/**
 * Liest den Inhalt einer Markdown-Datei und extrahiert Frontmatter und Content
 * @param {string} filePath - Pfad zur Markdown-Datei
 * @returns {Object} - Objekt mit content, data (frontmatter) und weiteren Metadaten
 */
function readMarkdownFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const parsedContent = matter(content);
        
        return {
            content: parsedContent.body,
            data: parsedContent.attributes,
            filePath: filePath,
            fileName: path.basename(filePath),
            dirPath: path.dirname(filePath),
            extension: path.extname(filePath),
            baseName: path.basename(filePath, path.extname(filePath))
        };
    } catch (error) {
        console.error(chalk.red(`❌ Fehler beim Lesen von ${filePath}: ${error.message}`));
        throw error;
    }
}

/**
 * Schreibt HTML-Inhalt in eine Datei und erstellt Verzeichnisse falls nötig
 * @param {string} filePath - Pfad zur Zieldatei
 * @param {string} content - HTML-Inhalt
 */
function writeHtmlFile(filePath, content) {
    try {
        const dirPath = path.dirname(filePath);
        
        // Erstelle Verzeichnisse, falls sie nicht existieren
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(chalk.green(`✅ Generiert: ${path.basename(filePath)}`));
        
        return true;
    } catch (error) {
        console.error(chalk.red(`❌ Fehler beim Schreiben von ${filePath}: ${error.message}`));
        return false;
    }
}

/**
 * Liest den Inhalt einer Template-Datei
 * @param {string} templatePath - Pfad zur Template-Datei
 * @returns {string} - Inhalt des Templates
 */
function readTemplate(templatePath) {
    try {
        if (!fs.existsSync(templatePath)) {
            throw new Error(`Template-Datei nicht gefunden: ${templatePath}`);
        }
        
        return fs.readFileSync(templatePath, 'utf8');
    } catch (error) {
        console.error(chalk.red(`❌ Fehler beim Lesen des Templates ${templatePath}: ${error.message}`));
        throw error;
    }
}

/**
 * Liest den Inhalt einer Datei
 * @param {string} filePath - Pfad zur Datei
 * @returns {string} - Inhalt der Datei
 */
function readFile(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            throw new Error(`Datei nicht gefunden: ${filePath}`);
        }
        
        return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        console.error(chalk.red(`❌ Fehler beim Lesen von ${filePath}: ${error.message}`));
        throw error;
    }
}

/**
 * Prüft ob eine Datei existiert
 * @param {string} filePath - Pfad zur Datei
 * @returns {boolean} - true wenn die Datei existiert, sonst false
 */
function fileExists(filePath) {
    return fs.existsSync(filePath);
}

/**
 * Findet alle HTML-Dateien im angegebenen Verzeichnis und Unterverzeichnissen
 * @param {string} rootDir - Das Wurzelverzeichnis für die Suche
 * @param {Array<string>} excludeDirs - Zu ignorierende Verzeichnisse
 * @returns {Array<string>} - Liste der gefundenen HTML-Dateien (absolute Pfade)
 */
function findHtmlFiles(rootDir = '.', excludeDirs = ['node_modules', '.git', 'dist', 'build', '.vscode']) {
    console.log(chalk.cyan(`🔍 Suche HTML-Dateien in ${rootDir}...`));
    
    const htmlFiles = [];
    
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
    
    scanDir(rootDir);
    console.log(chalk.cyan(`✓ ${htmlFiles.length} HTML-Dateien gefunden.`));
    
    return htmlFiles;
}

/**
 * Sichert eine Datei durch Erstellen einer Backup-Kopie
 * @param {string} filePath - Pfad zur zu sichernden Datei
 * @returns {string} - Pfad zur Backup-Datei
 */
function backupFile(filePath) {
    if (!fs.existsSync(filePath)) {
        throw new Error(`Datei zum Backup nicht gefunden: ${filePath}`);
    }
    
    const backupPath = `${filePath}.bak`;
    fs.copyFileSync(filePath, backupPath);
    
    return backupPath;
}

/**
 * Stellt eine Datei aus einem Backup wieder her
 * @param {string} backupPath - Pfad zur Backup-Datei
 * @returns {boolean} - true wenn erfolgreich, sonst false
 */
function restoreFromBackup(backupPath) {
    if (!fs.existsSync(backupPath)) {
        throw new Error(`Backup-Datei nicht gefunden: ${backupPath}`);
    }
    
    const originalPath = backupPath.replace(/\.bak$/, '');
    fs.copyFileSync(backupPath, originalPath);
    
    return true;
}

module.exports = {
    findMarkdownFiles,
    readMarkdownFile,
    writeHtmlFile,
    readTemplate,
    readFile,
    fileExists,
    findHtmlFiles,
    backupFile,
    restoreFromBackup
};
