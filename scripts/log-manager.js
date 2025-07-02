#!/usr/bin/env node

/**
 * INTELLIGENTES LOG-MANAGEMENT SYSTEM
 * 
 * Features:
 * 1. Automatische Archivierung alter Logs
 * 2. Intelligente Retention-Policy
 * 3. Komprimierung für Speicherplatz
 * 4. Performance-Analyse-Reports
 */

import fs from 'fs';
import path from 'path';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';

const LOG_CONFIG = {
    // Basis-Verzeichnisse
    sourceDir: 'docs/015_build_logs',
    archiveDir: 'docs/016_log_archive',
    
    // Retention-Policy
    retention: {
        current: 5,      // Letzte 5 Logs behalten (aktuelle Session)
        daily: 10,       // 10 beste Logs pro Tag archivieren
        weekly: 30,      // 30 beste Logs pro Woche
        monthly: 100     // 100 beste Logs pro Monat
    },
    
    // Performance-Thresholds
    performance: {
        excellent: 2000,  // <2s = excellent
        good: 5000,       // <5s = good
        acceptable: 10000 // <10s = acceptable
    }
};

class LogManager {
    constructor() {
        this.ensureDirectories();
    }

    ensureDirectories() {
        const dirs = [
            LOG_CONFIG.archiveDir,
            `${LOG_CONFIG.archiveDir}/daily`,
            `${LOG_CONFIG.archiveDir}/weekly`, 
            `${LOG_CONFIG.archiveDir}/monthly`,
            `${LOG_CONFIG.archiveDir}/performance_reports`
        ];
        
        dirs.forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
        });
    }

    async cleanupAndArchive() {
        console.log('🧹 STARTE INTELLIGENTE LOG-BEREINIGUNG...');
        
        const logs = this.getAllLogs();
        const analysis = this.analyzeLogs(logs);
        
        // 1. Aktuelle Session-Logs behalten
        const currentLogs = logs.slice(-LOG_CONFIG.retention.current);
        console.log(`✅ Behalte ${currentLogs.length} aktuelle Session-Logs`);
        
        // 2. Beste Logs für Archiv auswählen
        const archiveCandidates = logs.slice(0, -LOG_CONFIG.retention.current);
        const bestLogs = this.selectBestLogs(archiveCandidates, analysis);
        
        // 3. Archivierung durchführen
        await this.archiveLogs(bestLogs);
        
        // 4. Alte Logs löschen
        await this.deleteOldLogs(archiveCandidates, bestLogs);
        
        // 5. Performance-Report generieren
        await this.generatePerformanceReport(analysis);
        
        console.log('✅ LOG-BEREINIGUNG ABGESCHLOSSEN!');
        return analysis;
    }

    getAllLogs() {
        const logDir = LOG_CONFIG.sourceDir;
        if (!fs.existsSync(logDir)) return [];
        
        return fs.readdirSync(logDir)
            .filter(file => file.startsWith('BUILD_LOG_') && file.endsWith('.md'))
            .map(file => ({
                filename: file,
                path: path.join(logDir, file),
                timestamp: this.extractTimestamp(file),
                stats: fs.statSync(path.join(logDir, file))
            }))
            .sort((a, b) => a.timestamp - b.timestamp);
    }

    extractTimestamp(filename) {
        // BUILD_LOG_2025-07-02_121350.md -> Date
        const match = filename.match(/BUILD_LOG_(\d{4}-\d{2}-\d{2})_(\d{6})\.md/);
        if (!match) return new Date(0);
        
        const [, date, time] = match;
        const hour = time.substring(0, 2);
        const minute = time.substring(2, 4);
        const second = time.substring(4, 6);
        
        return new Date(`${date}T${hour}:${minute}:${second}`);
    }

    analyzeLogs(logs) {
        console.log(`📊 Analysiere ${logs.length} Log-Dateien...`);
        
        const analysis = {
            total: logs.length,
            totalSize: 0,
            performance: { excellent: 0, good: 0, acceptable: 0, poor: 0 },
            buildTrends: [],
            errorCounts: [],
            scoreProgressions: []
        };

        logs.forEach(log => {
            analysis.totalSize += log.stats.size;
            
            // Performance-Analyse (vereinfacht)
            const buildTime = this.estimateBuildTime(log);
            if (buildTime < LOG_CONFIG.performance.excellent) analysis.performance.excellent++;
            else if (buildTime < LOG_CONFIG.performance.good) analysis.performance.good++;
            else if (buildTime < LOG_CONFIG.performance.acceptable) analysis.performance.acceptable++;
            else analysis.performance.poor++;
        });

        return analysis;
    }

    estimateBuildTime(log) {
        // Vereinfachte Schätzung basierend auf Dateigröße
        // Größere Logs = komplexere Builds = längere Zeit
        return Math.min(log.stats.size * 0.1, 15000); // Max 15s
    }

    selectBestLogs(logs, analysis) {
        // Intelligente Auswahl der wertvollsten Logs:
        // 1. Performance-Champions (sehr schnelle Builds)
        // 2. Error-Logs (für Debugging)
        // 3. Score-Progression-Milestones
        // 4. Zeitlich verteilte Samples
        
        const bestLogs = [];
        const daily = LOG_CONFIG.retention.daily;
        
        // Top Performance-Logs
        const performanceLogs = logs
            .filter(log => this.estimateBuildTime(log) < LOG_CONFIG.performance.excellent)
            .slice(0, Math.floor(daily * 0.3));
        
        // Zeitlich verteilte Samples
        const sampleInterval = Math.max(1, Math.floor(logs.length / (daily * 0.7)));
        const sampleLogs = logs.filter((_, index) => index % sampleInterval === 0);
        
        bestLogs.push(...performanceLogs, ...sampleLogs);
        
        // Deduplizierung und Limit
        const uniqueLogs = [...new Map(bestLogs.map(log => [log.filename, log])).values()];
        return uniqueLogs.slice(0, daily);
    }

    async archiveLogs(logs) {
        console.log(`📦 Archiviere ${logs.length} wertvolle Logs...`);
        
        for (const log of logs) {
            const archivePath = path.join(
                LOG_CONFIG.archiveDir, 
                'daily', 
                `${log.filename}.gz`
            );
            
            try {
                await this.compressFile(log.path, archivePath);
                console.log(`   ✅ Archiviert: ${log.filename}`);
            } catch (error) {
                console.error(`   ❌ Fehler bei ${log.filename}:`, error.message);
            }
        }
    }

    async compressFile(sourcePath, targetPath) {
        const readStream = fs.createReadStream(sourcePath);
        const writeStream = fs.createWriteStream(targetPath);
        const gzipStream = createGzip();
        
        await pipeline(readStream, gzipStream, writeStream);
    }

    async deleteOldLogs(candidates, archived) {
        const archivedFilenames = new Set(archived.map(log => log.filename));
        const toDelete = candidates.filter(log => !archivedFilenames.has(log.filename));
        
        console.log(`🗑️ Lösche ${toDelete.length} veraltete Logs...`);
        
        toDelete.forEach(log => {
            try {
                fs.unlinkSync(log.path);
                console.log(`   🗑️ Gelöscht: ${log.filename}`);
            } catch (error) {
                console.error(`   ❌ Fehler beim Löschen ${log.filename}:`, error.message);
            }
        });
    }

    async generatePerformanceReport(analysis) {
        const report = {
            timestamp: new Date().toISOString(),
            summary: analysis,
            recommendations: this.generateRecommendations(analysis),
            savings: {
                filesDeleted: analysis.total - LOG_CONFIG.retention.current,
                spaceSaved: `${(analysis.totalSize / 1024 / 1024).toFixed(2)} MB`,
                archiveRatio: `${((LOG_CONFIG.retention.daily / analysis.total) * 100).toFixed(1)}%`
            }
        };

        const reportPath = path.join(
            LOG_CONFIG.archiveDir, 
            'performance_reports',
            `CLEANUP_REPORT_${new Date().toISOString().split('T')[0]}.json`
        );

        fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
        console.log(`📊 Performance-Report erstellt: ${reportPath}`);
        
        return report;
    }

    generateRecommendations(analysis) {
        const recommendations = [];
        
        if (analysis.performance.poor > analysis.total * 0.3) {
            recommendations.push("⚠️ Viele langsame Builds erkannt - Build-Optimierung empfohlen");
        }
        
        if (analysis.total > 50) {
            recommendations.push("💡 Sehr aktive Entwicklung - tägliche Log-Bereinigung aktivieren");
        }
        
        if (analysis.performance.excellent > analysis.total * 0.7) {
            recommendations.push("🚀 Exzellente Build-Performance - System optimal konfiguriert");
        }
        
        return recommendations;
    }
}

// CLI Integration
if (import.meta.url === `file://${process.argv[1]}`) {
    const manager = new LogManager();
    manager.cleanupAndArchive()
        .then(analysis => {
            console.log('\n📊 BEREINIGUNG ABGESCHLOSSEN:');
            console.log(`   Analysierte Logs: ${analysis.total}`);
            console.log(`   Performance: ${analysis.performance.excellent} excellent, ${analysis.performance.good} good`);
            console.log(`   Gesamtgröße: ${(analysis.totalSize / 1024 / 1024).toFixed(2)} MB`);
        })
        .catch(console.error);
}

export default LogManager;
