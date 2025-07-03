# Build Process Log
            
**Timestamp:** 2025-07-03T14:00:47.925Z
**Dauer:** 10900ms
**Log-Datei:** docs\015_build_logs\BUILD_LOG_2025-07-03_140047.md
**Node-Version:** v22.14.0
**Arbeitsverzeichnis:** C:\apps\website\einfach-passieren-lassen

## Vollständige Terminal-Ausgabe

### 1. [LOG] 2025-07-03T14:00:47.926Z

```
🚀 STARTE INTELLIGENT BUILD PROCESS...
```

### 2. [LOG] 2025-07-03T14:00:47.927Z

```
Neue Intention-Validation aktiv!
```

### 3. [LOG] 2025-07-03T14:00:47.927Z

```

▶️ Führe Check-Skript aus: advanced-content-validator.js
```

### 4. [LOG] 2025-07-03T14:00:47.992Z

```
✅ advanced-content-validator.js erfolgreich ausgeführt
```

### 5. [LOG] 2025-07-03T14:00:47.992Z

```

▶️ Führe Check-Skript aus: checklist-cli.js
```

### 6. [LOG] 2025-07-03T14:00:48.066Z

```
✅ checklist-cli.js erfolgreich ausgeführt
```

### 7. [LOG] 2025-07-03T14:00:48.067Z

```
📋 checklist-cli.js Output: 📋 Loaded 12 advanced checklists
🧠 ADVANCED CHECKLIST ROTATION CLI
================================================================================
Available commands:
  status              Show current rotation state and recommendations
  reset               Reset rotation for all files
  reset <file1,file2> Reset rotation for specific files
  simulate            Simulate next rotation assignments
  evaluate <filename> Evaluate specific file with current rotation
  help                Show this help message

Examples:
  node scripts/checklist-cli.js status
  node scripts/checklist-cli.js reset das-erste-mal.md,bindungssehnsucht-normal.md
  node scripts/checklist-cli.js evaluate das-erste-mal.md
```

### 8. [LOG] 2025-07-03T14:00:48.067Z

```

▶️ Führe Check-Skript aus: comprehensiveCheck.js
```

### 9. [LOG] 2025-07-03T14:00:48.160Z

```
✅ comprehensiveCheck.js erfolgreich ausgeführt
```

### 10. [LOG] 2025-07-03T14:00:48.161Z

```

▶️ Führe Check-Skript aus: keyword-cleanup.js
```

### 11. [LOG] 2025-07-03T14:00:48.221Z

```
✅ keyword-cleanup.js erfolgreich ausgeführt
```

### 12. [LOG] 2025-07-03T14:00:48.222Z

```
📋 keyword-cleanup.js Output: 🔧 STARTE KEYWORD CLEANUP - Schweizerdeutsch → Hochdeutsch...

📄 bindungssehnsucht-normal.md: Keine schweizerdeutschen Keywords gefunden

📄 das-erste-mal.md: Keine schweizerdeutschen Keywords gefunden

📄 der-sichere-hafen.md: Keine schweizerdeutschen Keywords gefunden

📄 emotionale-leere.md: Keine schweizerdeutschen Keywords gefunden

📄 erschoepft-vom-stark-sein.md: Keine schweizerdeutschen Keywords gefunden

📄 ich-will-einfach-gehalten-werden.md: Keine schweizerdeutschen Keywords gefunden

📄 kontrolle-abgeben.md: Keine schweizerdeutschen Keywords gefunden

📄 README.md: Keine schweizerdeutschen Keywords gefunden

📄 sehnsucht-nach-hingabe.md: Keine schweizerdeutschen Keywords gefunden

📄 zu-viel-liebe-zu-wenig-liebe.md: Keine schweizerdeutschen Keywords gefunden

✅ CLEANUP ABGESCHLOSSEN: 0 Keywords ersetzt
💡 Hochdeutsche Longtails haben bessere SEO-Performance
🎯 Empfehlung: pnpm build ausführen für Update
```

### 13. [LOG] 2025-07-03T14:00:48.222Z

```

▶️ Führe Check-Skript aus: lighthouse-issue-fixer.js
```

### 14. [LOG] 2025-07-03T14:00:48.474Z

```
✅ lighthouse-issue-fixer.js erfolgreich ausgeführt
```

### 15. [LOG] 2025-07-03T14:00:48.474Z

```
📋 lighthouse-issue-fixer.js Output: 🔧 Starte Lighthouse Issue Fixer...

🔧 LIGHTHOUSE ISSUE FIXER GESTARTET

📝 Fix-Logfile: LIGHTHOUSE_FIXES_2025-07-03T14-00-48.log

🔍 Scanne Dateien nach Lighthouse-Issues...

📂 Gefunden: 65 Dateien für Lighthouse-Fixes
🔧 Repariere: index.html
✓ index.html: Keine Issues gefunden
🔧 Repariere: bindungssehnsucht-normal.html
💾 Backup erstellt: bindungssehnsucht-normal.html_BACKUP_2025-07-03T14-00-48
✅ JSON-LD repariert: bindungssehnsucht-normal.html (1 Fixes)
✅ bindungssehnsucht-normal.html: 1 Issues behoben
🔧 Repariere: das-erste-mal.html
💾 Backup erstellt: das-erste-mal.html_BACKUP_2025-07-03T14-00-48
✅ JSON-LD repariert: das-erste-mal.html (1 Fixes)
✅ das-erste-mal.html: 1 Issues behoben
🔧 Repariere: der-sichere-hafen.html
💾 Backup erstellt: der-sichere-hafen.html_BACKUP_2025-07-03T14-00-48
✅ JSON-LD repariert: der-sichere-hafen.html (1 Fixes)
✅ der-sichere-hafen.html: 1 Issues behoben
🔧 Repariere: emotionale-leere.html
💾 Backup erstellt: emotionale-leere.html_BACKUP_2025-07-03T14-00-48
✅ JSON-LD repariert: emotionale-leere.html (1 Fixes)
✅ emotionale-leere.html: 1 Issues behoben
🔧 Repariere: bindungssehnsucht-normal.md
✓ bindungssehnsucht-normal.md: Keine Issues gefunden
🔧 Repariere: das-erste-mal.md
✓ das-erste-mal.md: Keine Issues gefunden
🔧 Repariere: der-sichere-hafen.md
✓ der-sichere-hafen.md: Keine Issues gefunden
🔧 Repariere: emotionale-leere.md
✓ emotionale-leere.md: Keine Issues gefunden
🔧 Repariere: erschoepft-vom-stark-sein.md
💾 Backup erstellt: erschoepft-vom-stark-sein.md_BACKUP_2025-07-03T14-00-48
✅ Content erweitert: erschoepft-vom-stark-sein.md (+89 Wörter)
✅ erschoepft-vom-stark-sein.md: 1 Issues behoben
🔧 Repariere: ich-will-einfach-gehalten-werden.md
✓ ich-will-einfach-gehalten-werden.md: Keine Issues gefunden
🔧 Repariere: kontrolle-abgeben.md
💾 Backup erstellt: kontrolle-abgeben.md_BACKUP_2025-07-03T14-00-48
✅ Content erweitert: kontrolle-abgeben.md (+89 Wörter)
✅ kontrolle-abgeben.md: 1 Issues behoben
🔧 Repariere: README.md
💾 Backup erstellt: README.md_BACKUP_2025-07-03T14-00-48
✅ Content erweitert: README.md (+89 Wörter)
✅ README.md: 1 Issues behoben
🔧 Repariere: sehnsucht-nach-hingabe.md
✓ sehnsucht-nach-hingabe.md: Keine Issues gefunden
🔧 Repariere: zu-viel-liebe-zu-wenig-liebe.md
✓ zu-viel-liebe-zu-wenig-liebe.md: Keine Issues gefunden
🔧 Repariere: erschoepft-vom-stark-sein.html
💾 Backup erstellt: erschoepft-vom-stark-sein.html_BACKUP_2025-07-03T14-00-48
✅ JSON-LD repariert: erschoepft-vom-stark-sein.html (1 Fixes)
✅ erschoepft-vom-stark-sein.html: 1 Issues behoben
🔧 Repariere: ich-will-einfach-gehalten-werden.html
💾 Backup erstellt: ich-will-einfach-gehalten-werden.html_BACKUP_2025-07-03T14-00-48
✅ JSON-LD repariert: ich-will-einfach-gehalten-werden.html (1 Fixes)
✅ ich-will-einfach-gehalten-werden.html: 1 Issues behoben
🔧 Repariere: index.html
💾 Backup erstellt: index.html_BACKUP_2025-07-03T14-00-48
✅ JSON-LD repariert: index.html (1 Fixes)
✅ index.html: 1 Issues behoben
🔧 Repariere: kontrolle-abgeben.html
💾 Backup erstellt: kontrolle-abgeben.html_BACKUP_2025-07-03T14-00-48
✅ JSON-LD repariert: kontrolle-abgeben.html (1 Fixes)
✅ kontrolle-abgeben.html: 1 Issues behoben
🔧 Repariere: sehnsucht-nach-hingabe.html
💾 Backup erstellt: sehnsucht-nach-hingabe.html_BACKUP_2025-07-03T14-00-48
✅ JSON-LD repariert: sehnsucht-nach-hingabe.html (1 Fixes)
✅ sehnsucht-nach-hingabe.html: 1 Issues behoben
🔧 Repariere: zu-viel-liebe-zu-wenig-liebe.html
💾 Backup erstellt: zu-viel-liebe-zu-wenig-liebe.html_BACKUP_2025-07-03T14-00-48
✅ JSON-LD repariert: zu-viel-liebe-zu-wenig-liebe.html (1 Fixes)
✅ zu-viel-liebe-zu-wenig-liebe.html: 1 Issues behoben
🔧 Repariere: CODING_INSTRUCTIONS.md
✓ CODING_INSTRUCTIONS.md: Keine Issues gefunden
🔧 Repariere: DEPLOYMENT.md
✓ DEPLOYMENT.md: Keine Issues gefunden
🔧 Repariere: implizite_sexuelle_reichweite_strategie.md
✓ implizite_sexuelle_reichweite_strategie.md: Keine Issues gefunden
🔧 Repariere: instructions_widerspruchs_analyse.md
✓ instructions_widerspruchs_analyse.md: Keine Issues gefunden
🔧 Repariere: issues.md
✓ issues.md: Keine Issues gefunden
🔧 Repariere: konkruenz_analyse_2025.md
✓ konkruenz_analyse_2025.md: Keine Issues gefunden
🔧 Repariere: konkurrenz_analyse_2025.md
✓ konkurrenz_analyse_2025.md: Keine Issues gefunden
🔧 Repariere: realitaets_analyse_conversion.md
✓ realitaets_analyse_conversion.md: Keine Issues gefunden
🔧 Repariere: reichweite_erhoehung_strategien.md
✓ reichweite_erhoehung_strategien.md: Keine Issues gefunden
🔧 Repariere: seo_content_strategie.md
✓ seo_content_strategie.md: Keine Issues gefunden
🔧 Repariere: seo_content_strategie_v2.md
✓ seo_content_strategie_v2.md: Keine Issues gefunden
🔧 Repariere: seo_implementation_toolkit.md
✓ seo_implementation_toolkit.md: Keine Issues gefunden
🔧 Repariere: spezifische_blog_posts_ranking.md
💾 Backup erstellt: spezifische_blog_posts_ranking.md_BACKUP_2025-07-03T14-00-48
✅ Content erweitert: spezifische_blog_posts_ranking.md (+89 Wörter)
✅ spezifische_blog_posts_ranking.md: 1 Issues behoben
🔧 Repariere: Codierte_Übergabe-Fantasien__Keyword-Extraktion_.md
✓ Codierte_Übergabe-Fantasien__Keyword-Extraktion_.md: Keine Issues gefunden
🔧 Repariere: Hypercodiertes_Keyword-set_Single-frauen_Zuchwil.md
✓ Hypercodiertes_Keyword-set_Single-frauen_Zuchwil.md: Keine Issues gefunden
🔧 Repariere: konvertierungs_protokoll.md
✓ konvertierungs_protokoll.md: Keine Issues gefunden
🔧 Repariere: Psychologie_der_Schweizer_Frauensuchen_.md
✓ Psychologie_der_Schweizer_Frauensuchen_.md: Keine Issues gefunden
🔧 Repariere: Tiefenanalyse_Frauensuche_Deutschschweiz_.md
✓ Tiefenanalyse_Frauensuche_Deutschschweiz_.md: Keine Issues gefunden
🔧 Repariere: Tiefenanalyse__Bindungssehnsucht_in_Deutschschweizer_Frauen_.md
✓ Tiefenanalyse__Bindungssehnsucht_in_Deutschschweizer_Frauen_.md: Keine Issues gefunden
🔧 Repariere: Tiefenpsychologische_Keyword-Codierung_für_Risikosex-Fantasien_.md
✓ Tiefenpsychologische_Keyword-Codierung_für_Risikosex-Fantasien_.md: Keine Issues gefunden
🔧 Repariere: Tiefenpsychologische_Keyword-Codierung_für_Singles_.md
✓ Tiefenpsychologische_Keyword-Codierung_für_Singles_.md: Keine Issues gefunden
🔧 Repariere: Tiefenpsychologische_Keyword-Extraktion__Solothurn_Frauen_.md
✓ Tiefenpsychologische_Keyword-Extraktion__Solothurn_Frauen_.md: Keine Issues gefunden
🔧 Repariere: Tiefenpsychologische_SEO-Analyse_für_Vulnerabilität_.md
✓ Tiefenpsychologische_SEO-Analyse_für_Vulnerabilität_.md: Keine Issues gefunden
🔧 Repariere: Tiefenpsychologische_SEO-Analyse_für_vulnerable_Frau_.md
✓ Tiefenpsychologische_SEO-Analyse_für_vulnerable_Frau_.md: Keine Issues gefunden
🔧 Repariere: BUILD_LOG_2025-07-02_072016.md
✓ BUILD_LOG_2025-07-02_072016.md: Keine Issues gefunden
🔧 Repariere: BUILD_LOG_2025-07-02_072326.md
✓ BUILD_LOG_2025-07-02_072326.md: Keine Issues gefunden
🔧 Repariere: BUILD_LOG_2025-07-02_073239.md
✓ BUILD_LOG_2025-07-02_073239.md: Keine Issues gefunden
🔧 Repariere: BUILD_LOG_2025-07-02_080659.md
✓ BUILD_LOG_2025-07-02_080659.md: Keine Issues gefunden
🔧 Repariere: BUILD_LOG_2025-07-02_083538.md
✓ BUILD_LOG_2025-07-02_083538.md: Keine Issues gefunden
🔧 Repariere: EXCEPTION_2025-07-01_211812.md
✓ EXCEPTION_2025-07-01_211812.md: Keine Issues gefunden
🔧 Repariere: EXCEPTION_2025-07-01_212252.md
✓ EXCEPTION_2025-07-01_212252.md: Keine Issues gefunden
🔧 Repariere: EXCEPTION_2025-07-01_212403.md
✓ EXCEPTION_2025-07-01_212403.md: Keine Issues gefunden
🔧 Repariere: EXCEPTION_2025-07-01_213122.md
✓ EXCEPTION_2025-07-01_213122.md: Keine Issues gefunden
🔧 Repariere: aenderungsprotokoll.md
✓ aenderungsprotokoll.md: Keine Issues gefunden
🔧 Repariere: KONKRUENTSPRUEFUNG_EXCEPTION.md
✓ KONKRUENTSPRUEFUNG_EXCEPTION.md: Keine Issues gefunden
🔧 Repariere: TODO_memory_optimization.md
✓ TODO_memory_optimization.md: Keine Issues gefunden
🔧 Repariere: ideen_brainstorming.md
✓ ideen_brainstorming.md: Keine Issues gefunden
🔧 Repariere: index.html
💾 Backup erstellt: index.html_BACKUP_2025-07-03T14-00-48
✅ JSON-LD repariert: index.html (1 Fixes)
✅ index.html: 1 Issues behoben
🔧 Repariere: issues.md
✓ issues.md: Keine Issues gefunden
🔧 Repariere: kontakt.html
💾 Backup erstellt: kontakt.html_BACKUP_2025-07-03T14-00-48
✅ JSON-LD repariert: kontakt.html (1 Fixes)
✅ kontakt.html: 1 Issues behoben
🔧 Repariere: README.md
✓ README.md: Keine Issues gefunden
🔧 Repariere: template.html
💾 Backup erstellt: template.html_BACKUP_2025-07-03T14-00-48
✅ JSON-LD repariert: template.html (1 Fixes)
✅ template.html: 1 Issues behoben
🔧 Repariere: ueber-mich.html
💾 Backup erstellt: ueber-mich.html_BACKUP_2025-07-03T14-00-48
✅ JSON-LD repariert: ueber-mich.html (1 Fixes)
✅ ueber-mich.html: 1 Issues behoben
🔧 Repariere: ueber-mich.md
✓ ueber-mich.md: Keine Issues gefunden

✅ LIGHTHOUSE ISSUE FIXER ABGESCHLOSSEN
📝 Vollständiger Fix-Report: C:\apps\website\einfach-passieren-lassen\scripts\build-checks\logfiles\LIGHTHOUSE_FIXES_2025-07-03T14-00-48.log
💾 Backups verfügbar in: C:\apps\website\einfach-passieren-lassen\scripts\build-checks\logfiles\backups
```

### 16. [LOG] 2025-07-03T14:00:48.477Z

```

▶️ Führe Check-Skript aus: lighthouse-ready-checker.js
```

### 17. [LOG] 2025-07-03T14:00:49.180Z

```
✅ lighthouse-ready-checker.js erfolgreich ausgeführt
```

### 18. [LOG] 2025-07-03T14:00:49.180Z

```
📋 lighthouse-ready-checker.js Output: 🚀 Starte Lighthouse-Ready All-In-One Checker...

🚀 LIGHTHOUSE-READY ALL-IN-ONE CHECKER GESTARTET

📁 0 alte Logfiles archiviert
📝 Logfile: LIGHTHOUSE_READY_CHECK_2025-07-03T14-00-48.log
📂 Scanne Dateien...
📊 78 Dateien gefunden
📦 Batch-Größe: 10 Dateien

🔄 Starte Lighthouse-optimierte Batch-Verarbeitung...

📦 Batch 1: 10 Dateien
💾 Memory: 5MB heap
📦 Batch 2: 10 Dateien
💾 Memory: 5MB heap
📦 Batch 3: 10 Dateien
💾 Memory: 6MB heap
📦 Batch 4: 10 Dateien
💾 Memory: 5MB heap
📦 Batch 5: 10 Dateien
💾 Memory: 7MB heap
📦 Batch 6: 10 Dateien
💾 Memory: 7MB heap
📦 Batch 7: 10 Dateien
💾 Memory: 9MB heap
📦 Batch 8: 8 Dateien
💾 Memory: 8MB heap

✅ LIGHTHOUSE-READY CHECKER ABGESCHLOSSEN
📝 Vollständiger Lighthouse-Report: C:\apps\website\einfach-passieren-lassen\scripts\build-checks\logfiles\LIGHTHOUSE_READY_CHECK_2025-07-03T14-00-48.log
```

### 19. [LOG] 2025-07-03T14:00:49.181Z

```

▶️ Führe Check-Skript aus: logCleanup.js
```

### 20. [LOG] 2025-07-03T14:00:49.228Z

```
✅ logCleanup.js erfolgreich ausgeführt
```

### 21. [LOG] 2025-07-03T14:00:49.228Z

```

▶️ Führe Check-Skript aus: masterBuildChecker.js
```

### 22. [LOG] 2025-07-03T14:00:49.325Z

```
✅ masterBuildChecker.js erfolgreich ausgeführt
```

### 23. [LOG] 2025-07-03T14:00:49.326Z

```

▶️ Führe Check-Skript aus: memory-optimized-checker.js
```

### 24. [LOG] 2025-07-03T14:00:53.932Z

```
✅ memory-optimized-checker.js erfolgreich ausgeführt
```

### 25. [LOG] 2025-07-03T14:00:53.932Z

```
📋 memory-optimized-checker.js Output: 🚀 Starte Memory-Optimized Checker...

🚀 MEMORY-OPTIMIZED CHECKER GESTARTET

⚠️ Archivierung fehlgeschlagen: The "path" argument must be of type string. Received undefined
📝 Logfile: MEMORY_OPTIMIZED_CHECK_2025-07-03T14-00-49.log
📂 Scanne Dateien...
📊 139 Dateien gefunden
📦 Batch-Größe: 5 Dateien

🔄 Starte Batch-Verarbeitung...

📦 Batch 1: 5 Dateien
💾 Memory: 5MB heap
📦 Batch 2: 5 Dateien
💾 Memory: 5MB heap
📦 Batch 3: 5 Dateien
💾 Memory: 5MB heap
📦 Batch 4: 5 Dateien
💾 Memory: 5MB heap
📦 Batch 5: 5 Dateien
💾 Memory: 5MB heap
📦 Batch 6: 5 Dateien
💾 Memory: 6MB heap
📦 Batch 7: 5 Dateien
💾 Memory: 6MB heap
📦 Batch 8: 5 Dateien
💾 Memory: 7MB heap
📦 Batch 9: 5 Dateien
💾 Memory: 6MB heap
📦 Batch 10: 5 Dateien
💾 Memory: 13MB heap
📦 Batch 11: 5 Dateien
💾 Memory: 8MB heap
📦 Batch 12: 5 Dateien
💾 Memory: 26MB heap
📦 Batch 13: 5 Dateien
💾 Memory: 17MB heap
📦 Batch 14: 5 Dateien
💾 Memory: 27MB heap
📦 Batch 15: 5 Dateien
💾 Memory: 15MB heap
📦 Batch 16: 5 Dateien
💾 Memory: 28MB heap
📦 Batch 17: 5 Dateien
💾 Memory: 17MB heap
📦 Batch 18: 5 Dateien
💾 Memory: 24MB heap
📦 Batch 19: 5 Dateien
💾 Memory: 28MB heap
📦 Batch 20: 5 Dateien
💾 Memory: 13MB heap
📦 Batch 21: 5 Dateien
💾 Memory: 31MB heap
📦 Batch 22: 5 Dateien
💾 Memory: 23MB heap
📦 Batch 23: 5 Dateien
💾 Memory: 24MB heap
📦 Batch 24: 5 Dateien
💾 Memory: 14MB heap
📦 Batch 25: 5 Dateien
💾 Memory: 22MB heap
📦 Batch 26: 5 Dateien
💾 Memory: 26MB heap
📦 Batch 27: 5 Dateien
💾 Memory: 17MB heap
📦 Batch 28: 4 Dateien
💾 Memory: 18MB heap

✅ MEMORY-OPTIMIZED CHECKER ABGESCHLOSSEN
📝 Vollständiger Report: C:\apps\website\einfach-passieren-lassen\scripts\build-checks\logfiles\MEMORY_OPTIMIZED_CHECK_2025-07-03T14-00-49.log
```

### 26. [LOG] 2025-07-03T14:00:53.933Z

```

▶️ Führe Check-Skript aus: multi-file-sinnlosigkeits-checker.js
```

### 27. [ERROR] 2025-07-03T14:00:58.464Z

```
❌ Fehler beim Ausführen von multi-file-sinnlosigkeits-checker.js: Command failed: node C:\apps\website\einfach-passieren-lassen\scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js
```

### 28. [ERROR] 2025-07-03T14:00:58.464Z

```
multi-file-sinnlosigkeits-checker.js execution failed: {"script":"multi-file-sinnlosigkeits-checker.js","exitCode":1,"stderr":"","stdout":"📋 Loaded 12 advanced checklists\n🔍 MULTI-FILE SINNLOSIGKEITS-CHECKER GESTARTET\n   Prüft alle Seiten auf absurde Sätze, Copy-Cats und logische Inkonsistenzen\n\n📋 Sammle relevante Dateien...\n   ✅ 33 relevante Dateien gefunden\n🔍 Prüfe Dateien auf Sinnlosigkeiten...\n📄 [1] Prüfe: blog\\entwurf\\bindungssehnsucht-normal.md\n   🚨 7 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"trau dich, den ersten schritt zu machen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"verstehst du\" (7x), \"kennst du\" (5x)\n      💡 Keywords natürlich und organisch verteilen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Fühlst du dich\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [2] Prüfe: blog\\entwurf\\das-erste-mal.md\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"du musst nichts wissen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"der anfang unseres gemeinsamen lebens...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"der anfang unserer liebe...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (86% ähnlich): \"lass uns gemeinsam diesen wichtigen schritt gehen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   5. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"verstehst du\" (5x), \"kennst du\" (6x)\n      💡 Keywords natürlich und organisch verteilen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"willst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [3] Prüfe: blog\\entwurf\\der-sichere-hafen.md\n   🚨 5 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"nicht mehr perfekt sein musst...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"dein herz wird ruhiger...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"weil wir eine familie sind...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"kannst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [4] Prüfe: blog\\entwurf\\emotionale-leere.md\n   ✅ Keine Probleme gefunden\n📄 [5] Prüfe: blog\\entwurf\\erschoepft-vom-stark-sein.md\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"wenn du endlich nicht mehr entscheiden musst...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (76% ähnlich): \"dann spürst du es besonders intensiv - diese sehns...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (73% ähnlich): \"## deine gefühle verstehen\n\nvielleicht kennst du d...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (89% ähnlich): \"diese momente sind kostbar, auch wenn sie schmerzh...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   5. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"kennst du\" (4x)\n      💡 Keywords natürlich und organisch verteilen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [6] Prüfe: blog\\entwurf\\ich-will-einfach-gehalten-werden.md\n   🚨 4 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"du musst nicht stark sein...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"fühlst du\" (4x), \"verstehst du\" (5x), \"kennst du\" (6x)\n      💡 Keywords natürlich und organisch verteilen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [7] Prüfe: blog\\entwurf\\kontrolle-abgeben.md\n   🚨 4 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (76% ähnlich): \"dann spürst du es besonders intensiv - diese sehns...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (73% ähnlich): \"## deine gefühle verstehen\n\nvielleicht kennst du d...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (89% ähnlich): \"diese momente sind kostbar, auch wenn sie schmerzh...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [8] Prüfe: blog\\entwurf\\README.md\n   🚨 3 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (76% ähnlich): \"dann spürst du es besonders intensiv - diese sehns...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (73% ähnlich): \"## deine gefühle verstehen\n\nvielleicht kennst du d...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (89% ähnlich): \"diese momente sind kostbar, auch wenn sie schmerzh...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n📄 [9] Prüfe: blog\\entwurf\\sehnsucht-nach-hingabe.md\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [10] Prüfe: blog\\entwurf\\zu-viel-liebe-zu-wenig-liebe.md\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"will ich z'viel liebe...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (78% ähnlich): \"du willst, dass er ohne dich nicht mehr kann...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"dich kleiner zu machen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"kennst du\" (4x)\n      💡 Keywords natürlich und organisch verteilen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"kannst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [11] Prüfe: blog\\bindungssehnsucht-normal.html\n   🚨 8 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"&quot;, fragst du dich...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"trau dich, den ersten schritt zu machen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"verstehst du\" (7x), \"kennst du\" (5x)\n      💡 Keywords natürlich und organisch verteilen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Fühlst du dich\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [12] Prüfe: blog\\das-erste-mal.html\n   🚨 9 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"&quot;, fragst du dich vielleicht...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"du musst nichts wissen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"der anfang unseres gemeinsamen lebens...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"der anfang unserer liebe...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   5. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (86% ähnlich): \"lass uns gemeinsam diesen wichtigen schritt gehen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   6. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"verstehst du\" (5x), \"kennst du\" (6x)\n      💡 Keywords natürlich und organisch verteilen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   9. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"willst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [13] Prüfe: blog\\der-sichere-hafen.html\n   🚨 5 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"nicht mehr perfekt sein musst...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"dein herz wird ruhiger...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"weil wir eine familie sind...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"kannst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [14] Prüfe: blog\\emotionale-leere.html\n   ✅ Keine Probleme gefunden\n📄 [15] Prüfe: blog\\entwurf\\bindungssehnsucht-normal.md\n   🚨 7 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"trau dich, den ersten schritt zu machen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"verstehst du\" (7x), \"kennst du\" (5x)\n      💡 Keywords natürlich und organisch verteilen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Fühlst du dich\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [16] Prüfe: blog\\entwurf\\das-erste-mal.md\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"du musst nichts wissen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"der anfang unseres gemeinsamen lebens...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"der anfang unserer liebe...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (86% ähnlich): \"lass uns gemeinsam diesen wichtigen schritt gehen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   5. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"verstehst du\" (5x), \"kennst du\" (6x)\n      💡 Keywords natürlich und organisch verteilen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"willst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [17] Prüfe: blog\\entwurf\\der-sichere-hafen.md\n   🚨 5 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"nicht mehr perfekt sein musst...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"dein herz wird ruhiger...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"weil wir eine familie sind...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"kannst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [18] Prüfe: blog\\entwurf\\emotionale-leere.md\n   ✅ Keine Probleme gefunden\n📄 [19] Prüfe: blog\\entwurf\\erschoepft-vom-stark-sein.md\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"wenn du endlich nicht mehr entscheiden musst...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (76% ähnlich): \"dann spürst du es besonders intensiv - diese sehns...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (73% ähnlich): \"## deine gefühle verstehen\n\nvielleicht kennst du d...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (89% ähnlich): \"diese momente sind kostbar, auch wenn sie schmerzh...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   5. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"kennst du\" (4x)\n      💡 Keywords natürlich und organisch verteilen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [20] Prüfe: blog\\entwurf\\ich-will-einfach-gehalten-werden.md\n   🚨 4 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"du musst nicht stark sein...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"fühlst du\" (4x), \"verstehst du\" (5x), \"kennst du\" (6x)\n      💡 Keywords natürlich und organisch verteilen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [21] Prüfe: blog\\entwurf\\kontrolle-abgeben.md\n   🚨 4 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (76% ähnlich): \"dann spürst du es besonders intensiv - diese sehns...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (73% ähnlich): \"## deine gefühle verstehen\n\nvielleicht kennst du d...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (89% ähnlich): \"diese momente sind kostbar, auch wenn sie schmerzh...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [22] Prüfe: blog\\entwurf\\README.md\n   🚨 3 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (76% ähnlich): \"dann spürst du es besonders intensiv - diese sehns...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (73% ähnlich): \"## deine gefühle verstehen\n\nvielleicht kennst du d...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (89% ähnlich): \"diese momente sind kostbar, auch wenn sie schmerzh...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n📄 [23] Prüfe: blog\\entwurf\\sehnsucht-nach-hingabe.md\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [24] Prüfe: blog\\entwurf\\zu-viel-liebe-zu-wenig-liebe.md\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"will ich z'viel liebe...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (78% ähnlich): \"du willst, dass er ohne dich nicht mehr kann...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"dich kleiner zu machen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"kennst du\" (4x)\n      💡 Keywords natürlich und organisch verteilen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"kannst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [25] Prüfe: blog\\erschoepft-vom-stark-sein.html\n   🚨 4 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"wenn du endlich nicht mehr entscheiden musst...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   3. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [26] Prüfe: blog\\ich-will-einfach-gehalten-werden.html\n   🚨 5 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"du musst nicht stark sein...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"und ich antworte: &quot;du bisch bereits ghalte...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"fühlst du\" (4x), \"verstehst du\" (5x), \"kennst du\" (6x)\n      💡 Keywords natürlich und organisch verteilen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [27] Prüfe: blog\\index.html\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (86% ähnlich): \"html\" class=\"read-more\">weiterlesen</a>\n          ...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n📄 [28] Prüfe: blog\\kontrolle-abgeben.html\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [29] Prüfe: blog\\sehnsucht-nach-hingabe.html\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [30] Prüfe: blog\\zu-viel-liebe-zu-wenig-liebe.html\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"&quot;, fragst du dich...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (78% ähnlich): \"du willst, dass er ohne dich nicht mehr kann...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"dich kleiner zu machen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"kennst du\" (4x)\n      💡 Keywords natürlich und organisch verteilen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"kannst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [31] Prüfe: ./ueber-mich.html\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [32] Prüfe: ./index.html\n   🚨 7 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"träumst du davon\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"du bist nicht schwach...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"das macht dich kostbar...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   5. [MEDIUM] INCOMPLETE_SENTENCE_AFTER_QUESTION\n      → Unvollständiger Satz nach Frage: \"? Du weißt bereits, dass du hier richtig bist</title>\"\n      💡 Sätze nach Fragen vollständig ausführen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [33] Prüfe: ./kontakt.html\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"</p>\r\n                    </div>\r\n                ...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n🔗 Cross-File Analyse...\n\n🔗 CROSS-FILE COPY-CAT ANALYSIS GESTARTET\n🚨 13 dateiübergreifende Duplikate gefunden:\n\n1. CROSS-FILE DUPLICATE:\n   Text: \"Diese Sehnsucht macht dich nicht schwach...\"\n   Dateien: blog\\entwurf\\emotionale-leere.md, blog\\entwurf\\sehnsucht-nach-hingabe.md\n   Ähnlichkeit: 100%\n\n2. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\kontrolle-abgeben.md\n   Ähnlichkeit: 89%\n\n3. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\kontrolle-abgeben.md\n   Ähnlichkeit: 89%\n\n4. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\kontrolle-abgeben.md\n   Ähnlichkeit: 89%\n\n5. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\kontrolle-abgeben.md\n   Ähnlichkeit: 89%\n\n6. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n7. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n8. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n9. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n10. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\kontrolle-abgeben.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n11. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\kontrolle-abgeben.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n12. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\kontrolle-abgeben.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n13. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\kontrolle-abgeben.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n======================================================================\n📊 SINNLOSIGKEITS-CHECK ABGESCHLOSSEN\n======================================================================\n⏱️  Dauer: 4439ms\n📁 Geprüfte Dateien: 33\n🔍 Gefundene Issues: 160\n\n📈 ISSUE-VERTEILUNG:\n   🔴 CRITICAL: 8\n   🟡 HIGH: 151\n   ⚪ MEDIUM: 1\n\n🏆 TOP ISSUE-TYPEN:\n   COPY_CAT_TEXT: 64x\n   INCOMPLETE_TRIGGER: 60x\n   KEYWORD_STUFFING: 14x\n   CROSS_FILE_DUPLICATE: 13x\n   INCOMPLETE_TRIGGER_PHRASE: 8x\n\n📁 BETROFFENE DATEIEN (22):\n   blog\\entwurf\\bindungssehnsucht-normal.md: 14 Issue(s)\n   blog\\entwurf\\das-erste-mal.md: 16 Issue(s)\n   blog\\entwurf\\der-sichere-hafen.md: 10 Issue(s)\n   blog\\entwurf\\erschoepft-vom-stark-sein.md: 16 Issue(s)\n   blog\\entwurf\\ich-will-einfach-gehalten-werden.md: 8 Issue(s)\n   blog\\entwurf\\kontrolle-abgeben.md: 8 Issue(s)\n   blog\\entwurf\\README.md: 6 Issue(s)\n   blog\\entwurf\\sehnsucht-nach-hingabe.md: 2 Issue(s)\n   blog\\entwurf\\zu-viel-liebe-zu-wenig-liebe.md: 16 Issue(s)\n   blog\\bindungssehnsucht-normal.html: 8 Issue(s)\n   ... und 12 weitere\n\n======================================================================\n🚨 CRITICAL: Dringende Behebung der sinnlosen Inhalte erforderlich!\n======================================================================\n\n💾 Protokoll gespeichert: scripts\\build-checks\\logfiles\\SINNLOSIGKEITS_CHECK_2025-07-03T14-00-58-436Z.json\n📝 Änderungsprotokoll aktualisiert\n\n✅ Multi-File Sinnlosigkeits-Check abgeschlossen!\n🚨 8 KRITISCHE PROBLEME GEFUNDEN!\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"träumst du davon\"\n","message":"Command failed: node C:\\apps\\website\\einfach-passieren-lassen\\scripts\\build-checks\\check_scripts\\multi-file-sinnlosigkeits-checker.js","timestamp":"2025-07-03T14:00:58.464Z"}
```

### 29. [LOG] 2025-07-03T14:00:58.464Z

```

▶️ Führe Check-Skript aus: seoCheck.js
```

### 30. [LOG] 2025-07-03T14:00:58.510Z

```
✅ seoCheck.js erfolgreich ausgeführt
```

### 31. [LOG] 2025-07-03T14:00:58.511Z

```
🧹 STARTING CLEAN BUILD - Lösche vorhandene HTML-Dateien...
```

### 32. [LOG] 2025-07-03T14:00:58.512Z

```
📋 Gefunden: 10 Markdown-Dateien für Clean-Build
```

### 33. [LOG] 2025-07-03T14:00:58.512Z

```
   🗑️ Gelöscht: bindungssehnsucht-normal.html
```

### 34. [LOG] 2025-07-03T14:00:58.513Z

```
   🗑️ Gelöscht: das-erste-mal.html
```

### 35. [LOG] 2025-07-03T14:00:58.513Z

```
   🗑️ Gelöscht: der-sichere-hafen.html
```

### 36. [LOG] 2025-07-03T14:00:58.514Z

```
   🗑️ Gelöscht: emotionale-leere.html
```

### 37. [LOG] 2025-07-03T14:00:58.515Z

```
   🗑️ Gelöscht: erschoepft-vom-stark-sein.html
```

### 38. [LOG] 2025-07-03T14:00:58.515Z

```
   🗑️ Gelöscht: ich-will-einfach-gehalten-werden.html
```

### 39. [LOG] 2025-07-03T14:00:58.516Z

```
   🗑️ Gelöscht: kontrolle-abgeben.html
```

### 40. [LOG] 2025-07-03T14:00:58.516Z

```
   ➖ Nicht vorhanden: README.html
```

### 41. [LOG] 2025-07-03T14:00:58.516Z

```
   🗑️ Gelöscht: sehnsucht-nach-hingabe.html
```

### 42. [LOG] 2025-07-03T14:00:58.517Z

```
   🗑️ Gelöscht: zu-viel-liebe-zu-wenig-liebe.html
```

### 43. [LOG] 2025-07-03T14:00:58.517Z

```
✅ CLEAN COMPLETED: 9 Dateien gelöscht, 0 übersprungen
```

### 44. [LOG] 2025-07-03T14:00:58.517Z

```
🔨 Starte saubere Neu-Generierung...
```

### 45. [INFO] 2025-07-03T14:00:58.517Z

```
Clean Build: 9 HTML-Dateien gelöscht
```

### 46. [LOG] 2025-07-03T14:00:58.518Z

```

🚀 STARTE INTELLIGENT BUILD PROCESS...
```

### 47. [LOG] 2025-07-03T14:00:58.519Z

```
📋 Terminal-Ausgabe wird gespeichert in: docs\015_build_logs\BUILD_LOG_2025-07-03_140047.md
```

### 48. [LOG] 2025-07-03T14:00:58.519Z

```
Neue Intention-Validation aktiv!

```

### 49. [LOG] 2025-07-03T14:00:58.521Z

```
📋 Loaded 12 advanced checklists
```

### 50. [LOG] 2025-07-03T14:00:58.522Z

```
🧠 ADVANCED CHECKLIST SYSTEM ACTIVATED
```

### 51. [LOG] 2025-07-03T14:00:58.522Z

```
   → Intelligent rotation algorithm loaded
```

### 52. [LOG] 2025-07-03T14:00:58.522Z

```
   → 12 psychological validation modules ready
```

### 53. [LOG] 2025-07-03T14:00:58.522Z

```

🔍 FÜHRE ERWEITERTE SEO-VALIDIERUNG DURCH...
```

### 54. [LOG] 2025-07-03T14:00:58.523Z

```
   ℹ️ Sitemap enthält 14 URLs
```

### 55. [LOG] 2025-07-03T14:00:58.524Z

```
✅ Globale SEO-Validierung erfolgreich - Keine Issues gefunden
```

### 56. [LOG] 2025-07-03T14:00:58.524Z

```
🔍 Sammle VS Code Problems...
```

### 57. [PROBLEM] 2025-07-03T14:00:58.535Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:40 - Missing semicolon
```

### 58. [PROBLEM] 2025-07-03T14:00:58.535Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:1943 - Missing semicolon
```

### 59. [PROBLEM] 2025-07-03T14:00:58.535Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:2327 - Missing semicolon
```

### 60. [PROBLEM] 2025-07-03T14:00:58.535Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:2713 - Missing semicolon
```

### 61. [PROBLEM] 2025-07-03T14:00:58.535Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:2741 - Missing semicolon
```

### 62. [PROBLEM] 2025-07-03T14:00:58.536Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:3562 - Missing semicolon
```

### 63. [PROBLEM] 2025-07-03T14:00:58.536Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:3599 - Missing semicolon
```

### 64. [PROBLEM] 2025-07-03T14:00:58.536Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:4316 - Missing semicolon
```

### 65. [PROBLEM] 2025-07-03T14:00:58.536Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:5013 - Missing semicolon
```

### 66. [PROBLEM] 2025-07-03T14:00:58.536Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:5406 - Missing semicolon
```

### 67. [PROBLEM] 2025-07-03T14:00:58.536Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6202 - Missing semicolon
```

### 68. [PROBLEM] 2025-07-03T14:00:58.536Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6587 - Missing semicolon
```

### 69. [PROBLEM] 2025-07-03T14:00:58.536Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6720 - Missing semicolon
```

### 70. [PROBLEM] 2025-07-03T14:00:58.536Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6743 - Missing semicolon
```

### 71. [PROBLEM] 2025-07-03T14:00:58.536Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6803 - Missing semicolon
```

### 72. [PROBLEM] 2025-07-03T14:00:58.537Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6895 - Missing semicolon
```

### 73. [PROBLEM] 2025-07-03T14:00:58.537Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6923 - Missing semicolon
```

### 74. [PROBLEM] 2025-07-03T14:00:58.537Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6954 - Missing semicolon
```

### 75. [PROBLEM] 2025-07-03T14:00:58.537Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7029 - Missing semicolon
```

### 76. [PROBLEM] 2025-07-03T14:00:58.537Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7054 - Missing semicolon
```

### 77. [PROBLEM] 2025-07-03T14:00:58.537Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7099 - Missing semicolon
```

### 78. [PROBLEM] 2025-07-03T14:00:58.537Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7531 - Missing semicolon
```

### 79. [PROBLEM] 2025-07-03T14:00:58.537Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7585 - Missing semicolon
```

### 80. [PROBLEM] 2025-07-03T14:00:58.537Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7983 - Missing semicolon
```

### 81. [PROBLEM] 2025-07-03T14:00:58.537Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:8071 - Missing semicolon
```

### 82. [PROBLEM] 2025-07-03T14:00:58.537Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:8075 - Missing semicolon
```

### 83. [PROBLEM] 2025-07-03T14:00:58.537Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:8112 - Missing semicolon
```

### 84. [PROBLEM] 2025-07-03T14:00:58.537Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:8493 - Missing semicolon
```

### 85. [PROBLEM] 2025-07-03T14:00:58.537Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:9746 - Missing semicolon
```

### 86. [PROBLEM] 2025-07-03T14:00:58.537Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:9945 - Console.log statement found - consider removing in production
```

### 87. [PROBLEM] 2025-07-03T14:00:58.540Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:40 - Missing semicolon
```

### 88. [PROBLEM] 2025-07-03T14:00:58.540Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:1950 - Missing semicolon
```

### 89. [PROBLEM] 2025-07-03T14:00:58.541Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:2360 - Missing semicolon
```

### 90. [PROBLEM] 2025-07-03T14:00:58.541Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:2762 - Missing semicolon
```

### 91. [PROBLEM] 2025-07-03T14:00:58.541Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:2790 - Missing semicolon
```

### 92. [PROBLEM] 2025-07-03T14:00:58.541Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:3618 - Missing semicolon
```

### 93. [PROBLEM] 2025-07-03T14:00:58.541Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:3655 - Missing semicolon
```

### 94. [PROBLEM] 2025-07-03T14:00:58.541Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:4372 - Missing semicolon
```

### 95. [PROBLEM] 2025-07-03T14:00:58.541Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:5069 - Missing semicolon
```

### 96. [PROBLEM] 2025-07-03T14:00:58.542Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:5462 - Missing semicolon
```

### 97. [PROBLEM] 2025-07-03T14:00:58.542Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6258 - Missing semicolon
```

### 98. [PROBLEM] 2025-07-03T14:00:58.542Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6643 - Missing semicolon
```

### 99. [PROBLEM] 2025-07-03T14:00:58.542Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6776 - Missing semicolon
```

### 100. [PROBLEM] 2025-07-03T14:00:58.542Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6799 - Missing semicolon
```

### 101. [PROBLEM] 2025-07-03T14:00:58.542Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6859 - Missing semicolon
```

### 102. [PROBLEM] 2025-07-03T14:00:58.542Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6951 - Missing semicolon
```

### 103. [PROBLEM] 2025-07-03T14:00:58.542Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6979 - Missing semicolon
```

### 104. [PROBLEM] 2025-07-03T14:00:58.542Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:7010 - Missing semicolon
```

### 105. [PROBLEM] 2025-07-03T14:00:58.542Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:7085 - Missing semicolon
```

### 106. [PROBLEM] 2025-07-03T14:00:58.542Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:7110 - Missing semicolon
```

### 107. [PROBLEM] 2025-07-03T14:00:58.542Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:7155 - Missing semicolon
```

### 108. [PROBLEM] 2025-07-03T14:00:58.542Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:7587 - Missing semicolon
```

### 109. [PROBLEM] 2025-07-03T14:00:58.542Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:7641 - Missing semicolon
```

### 110. [PROBLEM] 2025-07-03T14:00:58.542Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:8039 - Missing semicolon
```

### 111. [PROBLEM] 2025-07-03T14:00:58.542Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:8127 - Missing semicolon
```

### 112. [PROBLEM] 2025-07-03T14:00:58.542Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:8131 - Missing semicolon
```

### 113. [PROBLEM] 2025-07-03T14:00:58.542Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:8168 - Missing semicolon
```

### 114. [PROBLEM] 2025-07-03T14:00:58.542Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:8549 - Missing semicolon
```

### 115. [PROBLEM] 2025-07-03T14:00:58.543Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:9802 - Missing semicolon
```

### 116. [PROBLEM] 2025-07-03T14:00:58.543Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:10001 - Console.log statement found - consider removing in production
```

### 117. [PROBLEM] 2025-07-03T14:00:58.548Z

```
[WARNING] app-gui\src\App.jsx:4 - Missing semicolon
```

### 118. [PROBLEM] 2025-07-03T14:00:58.548Z

```
[WARNING] app-gui\src\App.jsx:72 - Missing semicolon
```

### 119. [PROBLEM] 2025-07-03T14:00:58.548Z

```
[WARNING] app-gui\src\App.jsx:99 - Missing semicolon
```

### 120. [PROBLEM] 2025-07-03T14:00:58.549Z

```
[WARNING] build-process\mainBuild.js:52 - Console.log statement found - consider removing in production
```

### 121. [PROBLEM] 2025-07-03T14:00:58.549Z

```
[WARNING] build-process\mainBuild.js:64 - Console.log statement found - consider removing in production
```

### 122. [PROBLEM] 2025-07-03T14:00:58.549Z

```
[WARNING] build-process\mainBuild.js:98 - Console.log statement found - consider removing in production
```

### 123. [PROBLEM] 2025-07-03T14:00:58.549Z

```
[WARNING] build-process\mainBuild.js:102 - Console.log statement found - consider removing in production
```

### 124. [PROBLEM] 2025-07-03T14:00:58.549Z

```
[WARNING] build-process\mainBuild.js:104 - Console.log statement found - consider removing in production
```

### 125. [PROBLEM] 2025-07-03T14:00:58.549Z

```
[WARNING] build-process\mainBuild.js:110 - Console.log statement found - consider removing in production
```

### 126. [PROBLEM] 2025-07-03T14:00:58.549Z

```
[WARNING] build-process\mainBuild.js:112 - Console.log statement found - consider removing in production
```

### 127. [PROBLEM] 2025-07-03T14:00:58.549Z

```
[WARNING] build-process\mainBuild.js:116 - Console.log statement found - consider removing in production
```

### 128. [PROBLEM] 2025-07-03T14:00:58.549Z

```
[WARNING] build-process\mainBuild.js:123 - Console.log statement found - consider removing in production
```

### 129. [PROBLEM] 2025-07-03T14:00:58.549Z

```
[WARNING] build-process\mainBuild.js:145 - Console.log statement found - consider removing in production
```

### 130. [PROBLEM] 2025-07-03T14:00:58.549Z

```
[WARNING] build-process\mainBuild.js:147 - Missing semicolon
```

### 131. [PROBLEM] 2025-07-03T14:00:58.549Z

```
[WARNING] build-process\mainBuild.js:174 - Missing semicolon
```

### 132. [PROBLEM] 2025-07-03T14:00:58.549Z

```
[WARNING] build-process\mainBuild.js:205 - Console.log statement found - consider removing in production
```

### 133. [PROBLEM] 2025-07-03T14:00:58.549Z

```
[WARNING] build-process\mainBuild.js:231 - Console.log statement found - consider removing in production
```

### 134. [PROBLEM] 2025-07-03T14:00:58.549Z

```
[WARNING] build-process\mainBuild.js:254 - Console.log statement found - consider removing in production
```

### 135. [PROBLEM] 2025-07-03T14:00:58.550Z

```
[WARNING] build-process\modules\contentOptimizer.js:53 - Missing semicolon
```

### 136. [PROBLEM] 2025-07-03T14:00:58.550Z

```
[WARNING] build-process\modules\contentOptimizer.js:66 - Missing semicolon
```

### 137. [PROBLEM] 2025-07-03T14:00:58.550Z

```
[WARNING] build-process\modules\contentOptimizer.js:111 - Missing semicolon
```

### 138. [PROBLEM] 2025-07-03T14:00:58.550Z

```
[WARNING] build-process\modules\contentOptimizer.js:157 - Missing semicolon
```

### 139. [PROBLEM] 2025-07-03T14:00:58.550Z

```
[WARNING] build-process\modules\contentOptimizer.js:338 - Missing semicolon
```

### 140. [PROBLEM] 2025-07-03T14:00:58.550Z

```
[WARNING] build-process\modules\fileUtils.js:22 - Console.log statement found - consider removing in production
```

### 141. [PROBLEM] 2025-07-03T14:00:58.550Z

```
[WARNING] build-process\modules\fileUtils.js:45 - Console.log statement found - consider removing in production
```

### 142. [PROBLEM] 2025-07-03T14:00:58.550Z

```
[WARNING] build-process\modules\fileUtils.js:90 - Console.log statement found - consider removing in production
```

### 143. [PROBLEM] 2025-07-03T14:00:58.550Z

```
[WARNING] build-process\modules\fileUtils.js:151 - Console.log statement found - consider removing in production
```

### 144. [PROBLEM] 2025-07-03T14:00:58.550Z

```
[WARNING] build-process\modules\fileUtils.js:174 - Console.log statement found - consider removing in production
```

### 145. [PROBLEM] 2025-07-03T14:00:58.551Z

```
[WARNING] build-process\modules\logger.js:17 - Console.log statement found - consider removing in production
```

### 146. [PROBLEM] 2025-07-03T14:00:58.551Z

```
[WARNING] build-process\modules\logger.js:34 - Console.log statement found - consider removing in production
```

### 147. [PROBLEM] 2025-07-03T14:00:58.551Z

```
[WARNING] build-process\modules\logger.js:62 - Console.log statement found - consider removing in production
```

### 148. [PROBLEM] 2025-07-03T14:00:58.551Z

```
[ERROR] build-process\modules\logger.js:145 - Typo: "fucntion" should be "function"
```

### 149. [PROBLEM] 2025-07-03T14:00:58.551Z

```
[ERROR] build-process\modules\logger.js:146 - Typo: "fucntion" should be "function"
```

### 150. [PROBLEM] 2025-07-03T14:00:58.551Z

```
[WARNING] build-process\modules\logger.js:243 - Missing semicolon
```

### 151. [PROBLEM] 2025-07-03T14:00:58.551Z

```
[WARNING] build-process\modules\logger.js:276 - Console.log statement found - consider removing in production
```

### 152. [PROBLEM] 2025-07-03T14:00:58.552Z

```
[WARNING] build-process\modules\seoCheck.js:20 - Console.log statement found - consider removing in production
```

### 153. [PROBLEM] 2025-07-03T14:00:58.552Z

```
[WARNING] build-process\modules\seoCheck.js:94 - Console.log statement found - consider removing in production
```

### 154. [PROBLEM] 2025-07-03T14:00:58.552Z

```
[WARNING] build-process\modules\seoCheck.js:96 - Console.log statement found - consider removing in production
```

### 155. [PROBLEM] 2025-07-03T14:00:58.552Z

```
[WARNING] build-process\modules\seoCheck.js:109 - Console.log statement found - consider removing in production
```

### 156. [PROBLEM] 2025-07-03T14:00:58.552Z

```
[WARNING] build-process\modules\seoCheck.js:248 - Console.log statement found - consider removing in production
```

### 157. [PROBLEM] 2025-07-03T14:00:58.552Z

```
[WARNING] build-process\modules\seoCheck.js:335 - Console.log statement found - consider removing in production
```

### 158. [PROBLEM] 2025-07-03T14:00:58.552Z

```
[WARNING] build-process\modules\seoCheck.js:406 - Console.log statement found - consider removing in production
```

### 159. [PROBLEM] 2025-07-03T14:00:58.552Z

```
[WARNING] build-process\modules\seoCheck.js:423 - Missing semicolon
```

### 160. [PROBLEM] 2025-07-03T14:00:58.552Z

```
[WARNING] build-process\modules\seoCheck.js:505 - Console.log statement found - consider removing in production
```

### 161. [PROBLEM] 2025-07-03T14:00:58.552Z

```
[WARNING] build-process\modules\seoCheck.js:513 - Missing semicolon
```

### 162. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:17 - Missing semicolon
```

### 163. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:32 - Console.log statement found - consider removing in production
```

### 164. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:34 - Console.log statement found - consider removing in production
```

### 165. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:50 - Missing semicolon
```

### 166. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:107 - Missing semicolon
```

### 167. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:132 - Missing semicolon
```

### 168. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:220 - Missing semicolon
```

### 169. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:257 - Missing semicolon
```

### 170. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:264 - Missing semicolon
```

### 171. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:275 - Missing semicolon
```

### 172. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:319 - Missing semicolon
```

### 173. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:369 - Missing semicolon
```

### 174. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:402 - Missing semicolon
```

### 175. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:411 - Console.log statement found - consider removing in production
```

### 176. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:412 - Console.log statement found - consider removing in production
```

### 177. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:418 - Missing semicolon
```

### 178. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:427 - Console.log statement found - consider removing in production
```

### 179. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:467 - Missing semicolon
```

### 180. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:517 - Missing semicolon
```

### 181. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:525 - Missing semicolon
```

### 182. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:560 - Missing semicolon
```

### 183. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:588 - Missing semicolon
```

### 184. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:596 - Console.log statement found - consider removing in production
```

### 185. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:599 - Console.log statement found - consider removing in production
```

### 186. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:603 - Console.log statement found - consider removing in production
```

### 187. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:605 - Missing semicolon
```

### 188. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:607 - Console.log statement found - consider removing in production
```

### 189. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:608 - Console.log statement found - consider removing in production
```

### 190. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:611 - Console.log statement found - consider removing in production
```

### 191. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:693 - Missing semicolon
```

### 192. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:700 - Missing semicolon
```

### 193. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:705 - Missing semicolon
```

### 194. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:798 - Missing semicolon
```

### 195. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:807 - Missing semicolon
```

### 196. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:830 - Console.log statement found - consider removing in production
```

### 197. [PROBLEM] 2025-07-03T14:00:58.554Z

```
[WARNING] scripts\advanced-content-validator.js:853 - Console.log statement found - consider removing in production
```

### 198. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:17 - Missing semicolon
```

### 199. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:32 - Console.log statement found - consider removing in production
```

### 200. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:34 - Console.log statement found - consider removing in production
```

### 201. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:50 - Missing semicolon
```

### 202. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:118 - Missing semicolon
```

### 203. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:143 - Missing semicolon
```

### 204. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:217 - Missing semicolon
```

### 205. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:247 - Missing semicolon
```

### 206. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:297 - Missing semicolon
```

### 207. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:330 - Missing semicolon
```

### 208. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:339 - Console.log statement found - consider removing in production
```

### 209. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:340 - Console.log statement found - consider removing in production
```

### 210. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:346 - Missing semicolon
```

### 211. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:355 - Console.log statement found - consider removing in production
```

### 212. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:395 - Missing semicolon
```

### 213. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:445 - Missing semicolon
```

### 214. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:453 - Missing semicolon
```

### 215. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:488 - Missing semicolon
```

### 216. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:516 - Missing semicolon
```

### 217. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:602 - Missing semicolon
```

### 218. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:609 - Missing semicolon
```

### 219. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:614 - Missing semicolon
```

### 220. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:707 - Missing semicolon
```

### 221. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:716 - Missing semicolon
```

### 222. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:739 - Console.log statement found - consider removing in production
```

### 223. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:762 - Console.log statement found - consider removing in production
```

### 224. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:14 - Console.log statement found - consider removing in production
```

### 225. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:15 - Console.log statement found - consider removing in production
```

### 226. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:20 - Console.log statement found - consider removing in production
```

### 227. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:21 - Console.log statement found - consider removing in production
```

### 228. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:24 - Console.log statement found - consider removing in production
```

### 229. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:28 - Console.log statement found - consider removing in production
```

### 230. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:33 - Console.log statement found - consider removing in production
```

### 231. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:34 - Console.log statement found - consider removing in production
```

### 232. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:35 - Console.log statement found - consider removing in production
```

### 233. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:42 - Console.log statement found - consider removing in production
```

### 234. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:50 - Console.log statement found - consider removing in production
```

### 235. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:52 - Console.log statement found - consider removing in production
```

### 236. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:53 - Console.log statement found - consider removing in production
```

### 237. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:64 - Missing semicolon
```

### 238. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:69 - Console.log statement found - consider removing in production
```

### 239. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:72 - Console.log statement found - consider removing in production
```

### 240. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:79 - Console.log statement found - consider removing in production
```

### 241. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:84 - Console.log statement found - consider removing in production
```

### 242. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:89 - Console.log statement found - consider removing in production
```

### 243. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:93 - Console.log statement found - consider removing in production
```

### 244. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:94 - Console.log statement found - consider removing in production
```

### 245. [PROBLEM] 2025-07-03T14:00:58.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:96 - Missing semicolon
```

### 246. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:113 - Console.log statement found - consider removing in production
```

### 247. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:115 - Console.log statement found - consider removing in production
```

### 248. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:116 - Console.log statement found - consider removing in production
```

### 249. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:118 - Console.log statement found - consider removing in production
```

### 250. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:126 - Console.log statement found - consider removing in production
```

### 251. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:131 - Console.log statement found - consider removing in production
```

### 252. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:132 - Console.log statement found - consider removing in production
```

### 253. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:136 - Console.log statement found - consider removing in production
```

### 254. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:137 - Console.log statement found - consider removing in production
```

### 255. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:141 - Console.log statement found - consider removing in production
```

### 256. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:143 - Console.log statement found - consider removing in production
```

### 257. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:145 - Console.log statement found - consider removing in production
```

### 258. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:149 - Console.log statement found - consider removing in production
```

### 259. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:151 - Console.log statement found - consider removing in production
```

### 260. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:156 - Console.log statement found - consider removing in production
```

### 261. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:158 - Console.log statement found - consider removing in production
```

### 262. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:164 - Console.log statement found - consider removing in production
```

### 263. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:166 - Console.log statement found - consider removing in production
```

### 264. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:172 - Console.log statement found - consider removing in production
```

### 265. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:173 - Console.log statement found - consider removing in production
```

### 266. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:174 - Console.log statement found - consider removing in production
```

### 267. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:175 - Console.log statement found - consider removing in production
```

### 268. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:176 - Console.log statement found - consider removing in production
```

### 269. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:177 - Console.log statement found - consider removing in production
```

### 270. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:178 - Console.log statement found - consider removing in production
```

### 271. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:179 - Console.log statement found - consider removing in production
```

### 272. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:180 - Console.log statement found - consider removing in production
```

### 273. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:181 - Console.log statement found - consider removing in production
```

### 274. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:182 - Console.log statement found - consider removing in production
```

### 275. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:183 - Console.log statement found - consider removing in production
```

### 276. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:184 - Console.log statement found - consider removing in production
```

### 277. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:185 - Console.log statement found - consider removing in production
```

### 278. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:217 - Console.log statement found - consider removing in production
```

### 279. [PROBLEM] 2025-07-03T14:00:58.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:218 - Console.log statement found - consider removing in production
```

### 280. [PROBLEM] 2025-07-03T14:00:58.557Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:19 - Console.log statement found - consider removing in production
```

### 281. [PROBLEM] 2025-07-03T14:00:58.557Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:38 - Missing semicolon
```

### 282. [PROBLEM] 2025-07-03T14:00:58.557Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:66 - Console.log statement found - consider removing in production
```

### 283. [PROBLEM] 2025-07-03T14:00:58.557Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:67 - Console.log statement found - consider removing in production
```

### 284. [PROBLEM] 2025-07-03T14:00:58.557Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:70 - Console.log statement found - consider removing in production
```

### 285. [PROBLEM] 2025-07-03T14:00:58.557Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:162 - Missing semicolon
```

### 286. [PROBLEM] 2025-07-03T14:00:58.557Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:213 - Missing semicolon
```

### 287. [PROBLEM] 2025-07-03T14:00:58.557Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:250 - Missing semicolon
```

### 288. [PROBLEM] 2025-07-03T14:00:58.557Z

```
[WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:38 - Console.log statement found - consider removing in production
```

### 289. [PROBLEM] 2025-07-03T14:00:58.557Z

```
[WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:40 - Missing semicolon
```

### 290. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:58 - Console.log statement found - consider removing in production
```

### 291. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:64 - Console.log statement found - consider removing in production
```

### 292. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:67 - Console.log statement found - consider removing in production
```

### 293. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:71 - Console.log statement found - consider removing in production
```

### 294. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:72 - Console.log statement found - consider removing in production
```

### 295. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:73 - Console.log statement found - consider removing in production
```

### 296. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:77 - Missing semicolon
```

### 297. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:100 - Console.log statement found - consider removing in production
```

### 298. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:113 - Console.log statement found - consider removing in production
```

### 299. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:118 - Console.log statement found - consider removing in production
```

### 300. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:208 - Console.log statement found - consider removing in production
```

### 301. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:217 - Console.log statement found - consider removing in production
```

### 302. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:260 - Console.log statement found - consider removing in production
```

### 303. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:271 - Console.log statement found - consider removing in production
```

### 304. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:319 - Missing semicolon
```

### 305. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:346 - Console.log statement found - consider removing in production
```

### 306. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:353 - Console.log statement found - consider removing in production
```

### 307. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:384 - Console.log statement found - consider removing in production
```

### 308. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:394 - Console.log statement found - consider removing in production
```

### 309. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:401 - Missing semicolon
```

### 310. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:425 - Missing semicolon
```

### 311. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:437 - Console.log statement found - consider removing in production
```

### 312. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:441 - Console.log statement found - consider removing in production
```

### 313. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:464 - Console.log statement found - consider removing in production
```

### 314. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:466 - Console.log statement found - consider removing in production
```

### 315. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:470 - Console.log statement found - consider removing in production
```

### 316. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:494 - Console.log statement found - consider removing in production
```

### 317. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:504 - Missing semicolon
```

### 318. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:549 - Console.log statement found - consider removing in production
```

### 319. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:553 - Console.log statement found - consider removing in production
```

### 320. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:556 - Console.log statement found - consider removing in production
```

### 321. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:561 - Console.log statement found - consider removing in production
```

### 322. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:562 - Console.log statement found - consider removing in production
```

### 323. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:563 - Console.log statement found - consider removing in production
```

### 324. [PROBLEM] 2025-07-03T14:00:58.558Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:578 - Console.log statement found - consider removing in production
```

### 325. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:84 - Missing semicolon
```

### 326. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:96 - Console.log statement found - consider removing in production
```

### 327. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:98 - Console.log statement found - consider removing in production
```

### 328. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:103 - Missing semicolon
```

### 329. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:129 - Console.log statement found - consider removing in production
```

### 330. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:159 - Console.log statement found - consider removing in production
```

### 331. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:186 - Missing semicolon
```

### 332. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:219 - Missing semicolon
```

### 333. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:261 - Missing semicolon
```

### 334. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:477 - Missing semicolon
```

### 335. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:495 - Console.log statement found - consider removing in production
```

### 336. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:501 - Missing semicolon
```

### 337. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:531 - Console.log statement found - consider removing in production
```

### 338. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:543 - Console.log statement found - consider removing in production
```

### 339. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:551 - Console.log statement found - consider removing in production
```

### 340. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:556 - Console.log statement found - consider removing in production
```

### 341. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:569 - Missing semicolon
```

### 342. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:587 - Missing semicolon
```

### 343. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:592 - Missing semicolon
```

### 344. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:660 - Console.log statement found - consider removing in production
```

### 345. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:664 - Console.log statement found - consider removing in production
```

### 346. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:667 - Console.log statement found - consider removing in production
```

### 347. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:671 - Console.log statement found - consider removing in production
```

### 348. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:672 - Console.log statement found - consider removing in production
```

### 349. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:678 - Console.log statement found - consider removing in production
```

### 350. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:683 - Console.log statement found - consider removing in production
```

### 351. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:684 - Console.log statement found - consider removing in production
```

### 352. [PROBLEM] 2025-07-03T14:00:58.559Z

```
[WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:699 - Console.log statement found - consider removing in production
```

### 353. [PROBLEM] 2025-07-03T14:00:58.560Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:19 - Console.log statement found - consider removing in production
```

### 354. [PROBLEM] 2025-07-03T14:00:58.560Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:91 - Console.log statement found - consider removing in production
```

### 355. [PROBLEM] 2025-07-03T14:00:58.560Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:92 - Console.log statement found - consider removing in production
```

### 356. [PROBLEM] 2025-07-03T14:00:58.560Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:93 - Console.log statement found - consider removing in production
```

### 357. [PROBLEM] 2025-07-03T14:00:58.560Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:94 - Console.log statement found - consider removing in production
```

### 358. [PROBLEM] 2025-07-03T14:00:58.560Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:95 - Console.log statement found - consider removing in production
```

### 359. [PROBLEM] 2025-07-03T14:00:58.560Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:100 - Console.log statement found - consider removing in production
```

### 360. [PROBLEM] 2025-07-03T14:00:58.560Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:103 - Missing semicolon
```

### 361. [PROBLEM] 2025-07-03T14:00:58.560Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:132 - Missing semicolon
```

### 362. [PROBLEM] 2025-07-03T14:00:58.560Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:256 - Missing semicolon
```

### 363. [PROBLEM] 2025-07-03T14:00:58.560Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:389 - Missing semicolon
```

### 364. [PROBLEM] 2025-07-03T14:00:58.560Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:437 - Missing semicolon
```

### 365. [PROBLEM] 2025-07-03T14:00:58.560Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:486 - Missing semicolon
```

### 366. [PROBLEM] 2025-07-03T14:00:58.560Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:515 - Missing semicolon
```

### 367. [PROBLEM] 2025-07-03T14:00:58.560Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:577 - Console.log statement found - consider removing in production
```

### 368. [PROBLEM] 2025-07-03T14:00:58.561Z

```
[WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:70 - Missing semicolon
```

### 369. [PROBLEM] 2025-07-03T14:00:58.561Z

```
[WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:82 - Console.log statement found - consider removing in production
```

### 370. [PROBLEM] 2025-07-03T14:00:58.561Z

```
[WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:84 - Console.log statement found - consider removing in production
```

### 371. [PROBLEM] 2025-07-03T14:00:58.561Z

```
[WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:89 - Missing semicolon
```

### 372. [PROBLEM] 2025-07-03T14:00:58.561Z

```
[WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:107 - Console.log statement found - consider removing in production
```

### 373. [PROBLEM] 2025-07-03T14:00:58.561Z

```
[WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:137 - Console.log statement found - consider removing in production
```

### 374. [PROBLEM] 2025-07-03T14:00:58.561Z

```
[WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:148 - Console.log statement found - consider removing in production
```

### 375. [PROBLEM] 2025-07-03T14:00:58.561Z

```
[WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:160 - Console.log statement found - consider removing in production
```

### 376. [PROBLEM] 2025-07-03T14:00:58.561Z

```
[WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:168 - Console.log statement found - consider removing in production
```

### 377. [PROBLEM] 2025-07-03T14:00:58.561Z

```
[WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:173 - Console.log statement found - consider removing in production
```

### 378. [PROBLEM] 2025-07-03T14:00:58.561Z

```
[WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:195 - Console.log statement found - consider removing in production
```

### 379. [PROBLEM] 2025-07-03T14:00:58.561Z

```
[WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:272 - Missing semicolon
```

### 380. [PROBLEM] 2025-07-03T14:00:58.561Z

```
[WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:280 - Missing semicolon
```

### 381. [PROBLEM] 2025-07-03T14:00:58.561Z

```
[WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:285 - Missing semicolon
```

### 382. [PROBLEM] 2025-07-03T14:00:58.561Z

```
[WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:313 - Console.log statement found - consider removing in production
```

### 383. [PROBLEM] 2025-07-03T14:00:58.561Z

```
[WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:317 - Console.log statement found - consider removing in production
```

### 384. [PROBLEM] 2025-07-03T14:00:58.561Z

```
[WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:320 - Console.log statement found - consider removing in production
```

### 385. [PROBLEM] 2025-07-03T14:00:58.561Z

```
[WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:324 - Console.log statement found - consider removing in production
```

### 386. [PROBLEM] 2025-07-03T14:00:58.561Z

```
[WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:325 - Console.log statement found - consider removing in production
```

### 387. [PROBLEM] 2025-07-03T14:00:58.561Z

```
[WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:331 - Console.log statement found - consider removing in production
```

### 388. [PROBLEM] 2025-07-03T14:00:58.561Z

```
[WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:336 - Console.log statement found - consider removing in production
```

### 389. [PROBLEM] 2025-07-03T14:00:58.561Z

```
[WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:337 - Console.log statement found - consider removing in production
```

### 390. [PROBLEM] 2025-07-03T14:00:58.561Z

```
[WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:351 - Console.log statement found - consider removing in production
```

### 391. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:62 - Console.log statement found - consider removing in production
```

### 392. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:63 - Console.log statement found - consider removing in production
```

### 393. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:66 - Missing semicolon
```

### 394. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:70 - Console.log statement found - consider removing in production
```

### 395. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:71 - Missing semicolon
```

### 396. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:78 - Console.log statement found - consider removing in production
```

### 397. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:81 - Console.log statement found - consider removing in production
```

### 398. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:86 - Console.log statement found - consider removing in production
```

### 399. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:92 - Console.log statement found - consider removing in production
```

### 400. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:98 - Console.log statement found - consider removing in production
```

### 401. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:112 - Console.log statement found - consider removing in production
```

### 402. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:150 - Missing semicolon
```

### 403. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:162 - Missing semicolon
```

### 404. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:189 - Console.log statement found - consider removing in production
```

### 405. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:202 - Console.log statement found - consider removing in production
```

### 406. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:212 - Console.log statement found - consider removing in production
```

### 407. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:216 - Console.log statement found - consider removing in production
```

### 408. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:217 - Console.log statement found - consider removing in production
```

### 409. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:218 - Console.log statement found - consider removing in production
```

### 410. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:229 - Console.log statement found - consider removing in production
```

### 411. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:233 - Console.log statement found - consider removing in production
```

### 412. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:243 - Missing semicolon
```

### 413. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:268 - Missing semicolon
```

### 414. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:292 - Missing semicolon
```

### 415. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:348 - Console.log statement found - consider removing in production
```

### 416. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:357 - Console.log statement found - consider removing in production
```

### 417. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:365 - Console.log statement found - consider removing in production
```

### 418. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:368 - Console.log statement found - consider removing in production
```

### 419. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:369 - Console.log statement found - consider removing in production
```

### 420. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:370 - Console.log statement found - consider removing in production
```

### 421. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:371 - Console.log statement found - consider removing in production
```

### 422. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:386 - Console.log statement found - consider removing in production
```

### 423. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:409 - Missing semicolon
```

### 424. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:433 - Missing semicolon
```

### 425. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:444 - Console.log statement found - consider removing in production
```

### 426. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:445 - Console.log statement found - consider removing in production
```

### 427. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:446 - Console.log statement found - consider removing in production
```

### 428. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:448 - Console.log statement found - consider removing in production
```

### 429. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:449 - Console.log statement found - consider removing in production
```

### 430. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:450 - Console.log statement found - consider removing in production
```

### 431. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:453 - Console.log statement found - consider removing in production
```

### 432. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:454 - Console.log statement found - consider removing in production
```

### 433. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:455 - Console.log statement found - consider removing in production
```

### 434. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:456 - Console.log statement found - consider removing in production
```

### 435. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:464 - Console.log statement found - consider removing in production
```

### 436. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:469 - Console.log statement found - consider removing in production
```

### 437. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:474 - Console.log statement found - consider removing in production
```

### 438. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:477 - Console.log statement found - consider removing in production
```

### 439. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:481 - Console.log statement found - consider removing in production
```

### 440. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:485 - Console.log statement found - consider removing in production
```

### 441. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:487 - Console.log statement found - consider removing in production
```

### 442. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:489 - Console.log statement found - consider removing in production
```

### 443. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:491 - Console.log statement found - consider removing in production
```

### 444. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:493 - Console.log statement found - consider removing in production
```

### 445. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:526 - Console.log statement found - consider removing in production
```

### 446. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:546 - Console.log statement found - consider removing in production
```

### 447. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:550 - Missing semicolon
```

### 448. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:569 - Console.log statement found - consider removing in production
```

### 449. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:580 - Console.log statement found - consider removing in production
```

### 450. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:584 - Console.log statement found - consider removing in production
```

### 451. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:586 - Console.log statement found - consider removing in production
```

### 452. [PROBLEM] 2025-07-03T14:00:58.562Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:589 - Console.log statement found - consider removing in production
```

### 453. [PROBLEM] 2025-07-03T14:00:58.567Z

```
[WARNING] scripts\build.js:17 - Console.log statement found - consider removing in production
```

### 454. [PROBLEM] 2025-07-03T14:00:58.567Z

```
[WARNING] scripts\build.js:20 - Missing semicolon
```

### 455. [PROBLEM] 2025-07-03T14:00:58.567Z

```
[WARNING] scripts\build.js:21 - Missing semicolon
```

### 456. [PROBLEM] 2025-07-03T14:00:58.567Z

```
[WARNING] scripts\build.js:24 - Missing semicolon
```

### 457. [PROBLEM] 2025-07-03T14:00:58.567Z

```
[WARNING] scripts\build.js:34 - Missing semicolon
```

### 458. [PROBLEM] 2025-07-03T14:00:58.567Z

```
[WARNING] scripts\build.js:40 - Console.log statement found - consider removing in production
```

### 459. [PROBLEM] 2025-07-03T14:00:58.567Z

```
[WARNING] scripts\build.js:92 - Console.log statement found - consider removing in production
```

### 460. [PROBLEM] 2025-07-03T14:00:58.567Z

```
[WARNING] scripts\build.js:104 - Console.log statement found - consider removing in production
```

### 461. [PROBLEM] 2025-07-03T14:00:58.567Z

```
[WARNING] scripts\build.js:119 - Console.log statement found - consider removing in production
```

### 462. [PROBLEM] 2025-07-03T14:00:58.567Z

```
[WARNING] scripts\build.js:122 - Console.log statement found - consider removing in production
```

### 463. [PROBLEM] 2025-07-03T14:00:58.567Z

```
[WARNING] scripts\build.js:124 - Console.log statement found - consider removing in production
```

### 464. [PROBLEM] 2025-07-03T14:00:58.567Z

```
[WARNING] scripts\build.js:135 - Console.log statement found - consider removing in production
```

### 465. [PROBLEM] 2025-07-03T14:00:58.567Z

```
[WARNING] scripts\build.js:137 - Console.log statement found - consider removing in production
```

### 466. [PROBLEM] 2025-07-03T14:00:58.567Z

```
[WARNING] scripts\build.js:140 - Console.log statement found - consider removing in production
```

### 467. [PROBLEM] 2025-07-03T14:00:58.567Z

```
[WARNING] scripts\build.js:147 - Console.log statement found - consider removing in production
```

### 468. [PROBLEM] 2025-07-03T14:00:58.567Z

```
[WARNING] scripts\build.js:149 - Console.log statement found - consider removing in production
```

### 469. [PROBLEM] 2025-07-03T14:00:58.567Z

```
[WARNING] scripts\build.js:152 - Console.log statement found - consider removing in production
```

### 470. [PROBLEM] 2025-07-03T14:00:58.567Z

```
[WARNING] scripts\build.js:159 - Console.log statement found - consider removing in production
```

### 471. [PROBLEM] 2025-07-03T14:00:58.567Z

```
[WARNING] scripts\build.js:161 - Console.log statement found - consider removing in production
```

### 472. [PROBLEM] 2025-07-03T14:00:58.567Z

```
[WARNING] scripts\build.js:177 - Console.log statement found - consider removing in production
```

### 473. [PROBLEM] 2025-07-03T14:00:58.567Z

```
[WARNING] scripts\build.js:218 - Missing semicolon
```

### 474. [PROBLEM] 2025-07-03T14:00:58.567Z

```
[WARNING] scripts\build.js:236 - Console.log statement found - consider removing in production
```

### 475. [PROBLEM] 2025-07-03T14:00:58.567Z

```
[WARNING] scripts\build.js:244 - Missing semicolon
```

### 476. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:260 - Missing semicolon
```

### 477. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:275 - Missing semicolon
```

### 478. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:292 - Console.log statement found - consider removing in production
```

### 479. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:295 - Missing semicolon
```

### 480. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:300 - Console.log statement found - consider removing in production
```

### 481. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:303 - Console.log statement found - consider removing in production
```

### 482. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:305 - Console.log statement found - consider removing in production
```

### 483. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:309 - Missing semicolon
```

### 484. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:328 - Console.log statement found - consider removing in production
```

### 485. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:330 - Missing semicolon
```

### 486. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:349 - Console.log statement found - consider removing in production
```

### 487. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:361 - Missing semicolon
```

### 488. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:370 - Console.log statement found - consider removing in production
```

### 489. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:371 - Console.log statement found - consider removing in production
```

### 490. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:372 - Console.log statement found - consider removing in production
```

### 491. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:377 - Console.log statement found - consider removing in production
```

### 492. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:378 - Console.log statement found - consider removing in production
```

### 493. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:389 - Console.log statement found - consider removing in production
```

### 494. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:390 - Console.log statement found - consider removing in production
```

### 495. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:391 - Console.log statement found - consider removing in production
```

### 496. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:392 - Console.log statement found - consider removing in production
```

### 497. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:393 - Console.log statement found - consider removing in production
```

### 498. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:397 - Console.log statement found - consider removing in production
```

### 499. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:398 - Console.log statement found - consider removing in production
```

### 500. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:399 - Console.log statement found - consider removing in production
```

### 501. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:400 - Console.log statement found - consider removing in production
```

### 502. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:401 - Console.log statement found - consider removing in production
```

### 503. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:405 - Console.log statement found - consider removing in production
```

### 504. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:406 - Console.log statement found - consider removing in production
```

### 505. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:409 - Console.log statement found - consider removing in production
```

### 506. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:416 - Console.log statement found - consider removing in production
```

### 507. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:417 - Console.log statement found - consider removing in production
```

### 508. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:418 - Console.log statement found - consider removing in production
```

### 509. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:439 - Console.log statement found - consider removing in production
```

### 510. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:448 - Console.log statement found - consider removing in production
```

### 511. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:457 - Missing semicolon
```

### 512. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:484 - Missing semicolon
```

### 513. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:515 - Console.log statement found - consider removing in production
```

### 514. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:538 - Console.log statement found - consider removing in production
```

### 515. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:561 - Console.log statement found - consider removing in production
```

### 516. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:582 - Missing semicolon
```

### 517. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:594 - Console.log statement found - consider removing in production
```

### 518. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[ERROR] scripts\build.js:709 - Typo: "fucntion" should be "function"
```

### 519. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[ERROR] scripts\build.js:710 - Typo: "fucntion" should be "function"
```

### 520. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:757 - Missing semicolon
```

### 521. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:767 - Missing semicolon
```

### 522. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:853 - Missing semicolon
```

### 523. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:923 - Missing semicolon
```

### 524. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:963 - Console.log statement found - consider removing in production
```

### 525. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:1092 - Missing semicolon
```

### 526. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:1096 - Missing semicolon
```

### 527. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:1103 - Missing semicolon
```

### 528. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:1110 - Missing semicolon
```

### 529. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:1172 - Missing semicolon
```

### 530. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:1197 - Missing semicolon
```

### 531. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:1216 - Missing semicolon
```

### 532. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:1244 - Missing semicolon
```

### 533. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:1323 - Missing semicolon
```

### 534. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:1366 - Missing semicolon
```

### 535. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:1377 - Missing semicolon
```

### 536. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:1439 - Missing semicolon
```

### 537. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:1468 - Missing semicolon
```

### 538. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:1472 - Missing semicolon
```

### 539. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:1532 - Missing semicolon
```

### 540. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:1597 - Missing semicolon
```

### 541. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:1788 - Missing semicolon
```

### 542. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:1826 - Missing semicolon
```

### 543. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:1838 - Missing semicolon
```

### 544. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:1918 - Missing semicolon
```

### 545. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:2014 - Missing semicolon
```

### 546. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:2015 - Missing semicolon
```

### 547. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:2136 - Console.log statement found - consider removing in production
```

### 548. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:2137 - Console.log statement found - consider removing in production
```

### 549. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:2143 - Console.log statement found - consider removing in production
```

### 550. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:2144 - Console.log statement found - consider removing in production
```

### 551. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:2145 - Console.log statement found - consider removing in production
```

### 552. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:2165 - Missing semicolon
```

### 553. [PROBLEM] 2025-07-03T14:00:58.568Z

```
[WARNING] scripts\build.js:2169 - Console.log statement found - consider removing in production
```

### 554. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2179 - Console.log statement found - consider removing in production
```

### 555. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2184 - Console.log statement found - consider removing in production
```

### 556. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2198 - Console.log statement found - consider removing in production
```

### 557. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2204 - Console.log statement found - consider removing in production
```

### 558. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2206 - Missing semicolon
```

### 559. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2208 - Console.log statement found - consider removing in production
```

### 560. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2209 - Console.log statement found - consider removing in production
```

### 561. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2221 - Console.log statement found - consider removing in production
```

### 562. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2224 - Console.log statement found - consider removing in production
```

### 563. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2236 - Console.log statement found - consider removing in production
```

### 564. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2240 - Console.log statement found - consider removing in production
```

### 565. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2242 - Console.log statement found - consider removing in production
```

### 566. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2245 - Console.log statement found - consider removing in production
```

### 567. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2296 - Console.log statement found - consider removing in production
```

### 568. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2298 - Console.log statement found - consider removing in production
```

### 569. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2303 - Console.log statement found - consider removing in production
```

### 570. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2309 - Console.log statement found - consider removing in production
```

### 571. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2311 - Console.log statement found - consider removing in production
```

### 572. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2321 - Console.log statement found - consider removing in production
```

### 573. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2326 - Console.log statement found - consider removing in production
```

### 574. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2327 - Console.log statement found - consider removing in production
```

### 575. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2328 - Console.log statement found - consider removing in production
```

### 576. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2331 - Console.log statement found - consider removing in production
```

### 577. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2332 - Console.log statement found - consider removing in production
```

### 578. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2333 - Console.log statement found - consider removing in production
```

### 579. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2334 - Console.log statement found - consider removing in production
```

### 580. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2335 - Console.log statement found - consider removing in production
```

### 581. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2336 - Console.log statement found - consider removing in production
```

### 582. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2339 - Console.log statement found - consider removing in production
```

### 583. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2343 - Console.log statement found - consider removing in production
```

### 584. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2344 - Console.log statement found - consider removing in production
```

### 585. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2345 - Console.log statement found - consider removing in production
```

### 586. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2349 - Missing semicolon
```

### 587. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2373 - Console.log statement found - consider removing in production
```

### 588. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2375 - Console.log statement found - consider removing in production
```

### 589. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2381 - Console.log statement found - consider removing in production
```

### 590. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2384 - Console.log statement found - consider removing in production
```

### 591. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2404 - Console.log statement found - consider removing in production
```

### 592. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2405 - Console.log statement found - consider removing in production
```

### 593. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2428 - Console.log statement found - consider removing in production
```

### 594. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2432 - Console.log statement found - consider removing in production
```

### 595. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2433 - Console.log statement found - consider removing in production
```

### 596. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2435 - Console.log statement found - consider removing in production
```

### 597. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2436 - Console.log statement found - consider removing in production
```

### 598. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2440 - Console.log statement found - consider removing in production
```

### 599. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2442 - Console.log statement found - consider removing in production
```

### 600. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2445 - Console.log statement found - consider removing in production
```

### 601. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2448 - Console.log statement found - consider removing in production
```

### 602. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2451 - Console.log statement found - consider removing in production
```

### 603. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2452 - Console.log statement found - consider removing in production
```

### 604. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2455 - Console.log statement found - consider removing in production
```

### 605. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2456 - Console.log statement found - consider removing in production
```

### 606. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2458 - Missing semicolon
```

### 607. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2461 - Missing semicolon
```

### 608. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2464 - Missing semicolon
```

### 609. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2469 - Console.log statement found - consider removing in production
```

### 610. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2471 - Console.log statement found - consider removing in production
```

### 611. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2473 - Console.log statement found - consider removing in production
```

### 612. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2477 - Console.log statement found - consider removing in production
```

### 613. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2481 - Console.log statement found - consider removing in production
```

### 614. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2483 - Console.log statement found - consider removing in production
```

### 615. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2484 - Console.log statement found - consider removing in production
```

### 616. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2489 - Console.log statement found - consider removing in production
```

### 617. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2493 - Console.log statement found - consider removing in production
```

### 618. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2494 - Console.log statement found - consider removing in production
```

### 619. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2501 - Console.log statement found - consider removing in production
```

### 620. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2507 - Console.log statement found - consider removing in production
```

### 621. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2508 - Console.log statement found - consider removing in production
```

### 622. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2509 - Console.log statement found - consider removing in production
```

### 623. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2512 - Console.log statement found - consider removing in production
```

### 624. [PROBLEM] 2025-07-03T14:00:58.569Z

```
[WARNING] scripts\build.js:2514 - Console.log statement found - consider removing in production
```

### 625. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2516 - Console.log statement found - consider removing in production
```

### 626. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2523 - Console.log statement found - consider removing in production
```

### 627. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2525 - Console.log statement found - consider removing in production
```

### 628. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2531 - Console.log statement found - consider removing in production
```

### 629. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2532 - Console.log statement found - consider removing in production
```

### 630. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2551 - Missing semicolon
```

### 631. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2559 - Console.log statement found - consider removing in production
```

### 632. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2563 - Console.log statement found - consider removing in production
```

### 633. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2565 - Console.log statement found - consider removing in production
```

### 634. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2568 - Console.log statement found - consider removing in production
```

### 635. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2569 - Console.log statement found - consider removing in production
```

### 636. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2570 - Console.log statement found - consider removing in production
```

### 637. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2571 - Console.log statement found - consider removing in production
```

### 638. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2572 - Console.log statement found - consider removing in production
```

### 639. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2575 - Console.log statement found - consider removing in production
```

### 640. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2577 - Console.log statement found - consider removing in production
```

### 641. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2582 - Console.log statement found - consider removing in production
```

### 642. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2584 - Console.log statement found - consider removing in production
```

### 643. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2589 - Console.log statement found - consider removing in production
```

### 644. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2599 - Console.log statement found - consider removing in production
```

### 645. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2613 - Console.log statement found - consider removing in production
```

### 646. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2614 - Console.log statement found - consider removing in production
```

### 647. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2615 - Console.log statement found - consider removing in production
```

### 648. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2616 - Console.log statement found - consider removing in production
```

### 649. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2617 - Console.log statement found - consider removing in production
```

### 650. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2618 - Console.log statement found - consider removing in production
```

### 651. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2619 - Console.log statement found - consider removing in production
```

### 652. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2623 - Console.log statement found - consider removing in production
```

### 653. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2624 - Console.log statement found - consider removing in production
```

### 654. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2625 - Console.log statement found - consider removing in production
```

### 655. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2626 - Console.log statement found - consider removing in production
```

### 656. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2627 - Console.log statement found - consider removing in production
```

### 657. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2628 - Console.log statement found - consider removing in production
```

### 658. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2629 - Console.log statement found - consider removing in production
```

### 659. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2630 - Console.log statement found - consider removing in production
```

### 660. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2650 - Console.log statement found - consider removing in production
```

### 661. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2667 - Console.log statement found - consider removing in production
```

### 662. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2705 - Missing semicolon
```

### 663. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2761 - Console.log statement found - consider removing in production
```

### 664. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2814 - Missing semicolon
```

### 665. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2843 - Missing semicolon
```

### 666. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2880 - Missing semicolon
```

### 667. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2892 - Missing semicolon
```

### 668. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2920 - Missing semicolon
```

### 669. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2932 - Missing semicolon
```

### 670. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:2958 - Console.log statement found - consider removing in production
```

### 671. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3010 - Missing semicolon
```

### 672. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3014 - Missing semicolon
```

### 673. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3027 - Missing semicolon
```

### 674. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3036 - Missing semicolon
```

### 675. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3045 - Missing semicolon
```

### 676. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3054 - Missing semicolon
```

### 677. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3075 - Missing semicolon
```

### 678. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3088 - Missing semicolon
```

### 679. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3101 - Missing semicolon
```

### 680. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3114 - Missing semicolon
```

### 681. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3141 - Missing semicolon
```

### 682. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3150 - Missing semicolon
```

### 683. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3159 - Missing semicolon
```

### 684. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3168 - Missing semicolon
```

### 685. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3177 - Missing semicolon
```

### 686. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3270 - Missing semicolon
```

### 687. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3274 - Missing semicolon
```

### 688. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3284 - Missing semicolon
```

### 689. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3294 - Missing semicolon
```

### 690. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3313 - Missing semicolon
```

### 691. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3338 - Missing semicolon
```

### 692. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3347 - Missing semicolon
```

### 693. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3356 - Missing semicolon
```

### 694. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3365 - Missing semicolon
```

### 695. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3374 - Missing semicolon
```

### 696. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3383 - Missing semicolon
```

### 697. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3406 - Missing semicolon
```

### 698. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3419 - Missing semicolon
```

### 699. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3432 - Missing semicolon
```

### 700. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3441 - Missing semicolon
```

### 701. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3450 - Missing semicolon
```

### 702. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3459 - Missing semicolon
```

### 703. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3489 - Console.log statement found - consider removing in production
```

### 704. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3516 - Console.log statement found - consider removing in production
```

### 705. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3518 - Console.log statement found - consider removing in production
```

### 706. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3520 - Console.log statement found - consider removing in production
```

### 707. [PROBLEM] 2025-07-03T14:00:58.570Z

```
[WARNING] scripts\build.js:3548 - Console.log statement found - consider removing in production
```

### 708. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3697 - Console.log statement found - consider removing in production
```

### 709. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3698 - Console.log statement found - consider removing in production
```

### 710. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3699 - Console.log statement found - consider removing in production
```

### 711. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3705 - Console.log statement found - consider removing in production
```

### 712. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3706 - Console.log statement found - consider removing in production
```

### 713. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3707 - Console.log statement found - consider removing in production
```

### 714. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3709 - Missing semicolon
```

### 715. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3719 - Missing semicolon
```

### 716. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3724 - Console.log statement found - consider removing in production
```

### 717. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3728 - Console.log statement found - consider removing in production
```

### 718. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3732 - Missing semicolon
```

### 719. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3736 - Console.log statement found - consider removing in production
```

### 720. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3742 - Missing semicolon
```

### 721. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3743 - Missing semicolon
```

### 722. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3746 - Console.log statement found - consider removing in production
```

### 723. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3750 - Console.log statement found - consider removing in production
```

### 724. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3753 - Console.log statement found - consider removing in production
```

### 725. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3766 - Console.log statement found - consider removing in production
```

### 726. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3778 - Console.log statement found - consider removing in production
```

### 727. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3781 - Missing semicolon
```

### 728. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3784 - Console.log statement found - consider removing in production
```

### 729. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3787 - Console.log statement found - consider removing in production
```

### 730. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3791 - Console.log statement found - consider removing in production
```

### 731. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3792 - Missing semicolon
```

### 732. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3798 - Console.log statement found - consider removing in production
```

### 733. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3800 - Console.log statement found - consider removing in production
```

### 734. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3804 - Console.log statement found - consider removing in production
```

### 735. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3808 - Missing semicolon
```

### 736. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3816 - Console.log statement found - consider removing in production
```

### 737. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3820 - Console.log statement found - consider removing in production
```

### 738. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3826 - Console.log statement found - consider removing in production
```

### 739. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3831 - Console.log statement found - consider removing in production
```

### 740. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3834 - Console.log statement found - consider removing in production
```

### 741. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3836 - Console.log statement found - consider removing in production
```

### 742. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3840 - Console.log statement found - consider removing in production
```

### 743. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3841 - Console.log statement found - consider removing in production
```

### 744. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3842 - Console.log statement found - consider removing in production
```

### 745. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3844 - Console.log statement found - consider removing in production
```

### 746. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3853 - Console.log statement found - consider removing in production
```

### 747. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3858 - Console.log statement found - consider removing in production
```

### 748. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3859 - Console.log statement found - consider removing in production
```

### 749. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3860 - Console.log statement found - consider removing in production
```

### 750. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3861 - Console.log statement found - consider removing in production
```

### 751. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3875 - Console.log statement found - consider removing in production
```

### 752. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3877 - Console.log statement found - consider removing in production
```

### 753. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3887 - Console.log statement found - consider removing in production
```

### 754. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3890 - Console.log statement found - consider removing in production
```

### 755. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3893 - Console.log statement found - consider removing in production
```

### 756. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3894 - Console.log statement found - consider removing in production
```

### 757. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3901 - Console.log statement found - consider removing in production
```

### 758. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3907 - Console.log statement found - consider removing in production
```

### 759. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3908 - Console.log statement found - consider removing in production
```

### 760. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3909 - Console.log statement found - consider removing in production
```

### 761. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3912 - Console.log statement found - consider removing in production
```

### 762. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3914 - Console.log statement found - consider removing in production
```

### 763. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3916 - Console.log statement found - consider removing in production
```

### 764. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3923 - Console.log statement found - consider removing in production
```

### 765. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3925 - Console.log statement found - consider removing in production
```

### 766. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3930 - Console.log statement found - consider removing in production
```

### 767. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3931 - Console.log statement found - consider removing in production
```

### 768. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3932 - Console.log statement found - consider removing in production
```

### 769. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3933 - Console.log statement found - consider removing in production
```

### 770. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3934 - Console.log statement found - consider removing in production
```

### 771. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3939 - Console.log statement found - consider removing in production
```

### 772. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3940 - Console.log statement found - consider removing in production
```

### 773. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3971 - Console.log statement found - consider removing in production
```

### 774. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3974 - Console.log statement found - consider removing in production
```

### 775. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3975 - Console.log statement found - consider removing in production
```

### 776. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3976 - Console.log statement found - consider removing in production
```

### 777. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3977 - Console.log statement found - consider removing in production
```

### 778. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3978 - Console.log statement found - consider removing in production
```

### 779. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3979 - Console.log statement found - consider removing in production
```

### 780. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3982 - Console.log statement found - consider removing in production
```

### 781. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3983 - Console.log statement found - consider removing in production
```

### 782. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3984 - Console.log statement found - consider removing in production
```

### 783. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3985 - Console.log statement found - consider removing in production
```

### 784. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3986 - Console.log statement found - consider removing in production
```

### 785. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3987 - Console.log statement found - consider removing in production
```

### 786. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3988 - Console.log statement found - consider removing in production
```

### 787. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3990 - Console.log statement found - consider removing in production
```

### 788. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3992 - Console.log statement found - consider removing in production
```

### 789. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3995 - Console.log statement found - consider removing in production
```

### 790. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3996 - Console.log statement found - consider removing in production
```

### 791. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3997 - Console.log statement found - consider removing in production
```

### 792. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:3998 - Console.log statement found - consider removing in production
```

### 793. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4000 - Console.log statement found - consider removing in production
```

### 794. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4001 - Console.log statement found - consider removing in production
```

### 795. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4002 - Console.log statement found - consider removing in production
```

### 796. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4003 - Console.log statement found - consider removing in production
```

### 797. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4005 - Console.log statement found - consider removing in production
```

### 798. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4006 - Console.log statement found - consider removing in production
```

### 799. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4007 - Console.log statement found - consider removing in production
```

### 800. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4008 - Console.log statement found - consider removing in production
```

### 801. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4009 - Console.log statement found - consider removing in production
```

### 802. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4010 - Console.log statement found - consider removing in production
```

### 803. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4012 - Console.log statement found - consider removing in production
```

### 804. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4013 - Console.log statement found - consider removing in production
```

### 805. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4014 - Console.log statement found - consider removing in production
```

### 806. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4015 - Console.log statement found - consider removing in production
```

### 807. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4018 - Console.log statement found - consider removing in production
```

### 808. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4019 - Console.log statement found - consider removing in production
```

### 809. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4020 - Console.log statement found - consider removing in production
```

### 810. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4031 - Console.log statement found - consider removing in production
```

### 811. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4050 - Console.log statement found - consider removing in production
```

### 812. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4086 - Missing semicolon
```

### 813. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4106 - Missing semicolon
```

### 814. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4134 - Missing semicolon
```

### 815. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4176 - Missing semicolon
```

### 816. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4219 - Missing semicolon
```

### 817. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4261 - Console.log statement found - consider removing in production
```

### 818. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4266 - Console.log statement found - consider removing in production
```

### 819. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4271 - Console.log statement found - consider removing in production
```

### 820. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4277 - Missing semicolon
```

### 821. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4280 - Console.log statement found - consider removing in production
```

### 822. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4295 - Console.log statement found - consider removing in production
```

### 823. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4298 - Console.log statement found - consider removing in production
```

### 824. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4302 - Console.log statement found - consider removing in production
```

### 825. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4307 - Console.log statement found - consider removing in production
```

### 826. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4311 - Console.log statement found - consider removing in production
```

### 827. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4312 - Console.log statement found - consider removing in production
```

### 828. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4318 - Console.log statement found - consider removing in production
```

### 829. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4319 - Console.log statement found - consider removing in production
```

### 830. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4327 - Console.log statement found - consider removing in production
```

### 831. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4328 - Console.log statement found - consider removing in production
```

### 832. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4338 - Console.log statement found - consider removing in production
```

### 833. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4345 - Console.log statement found - consider removing in production
```

### 834. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4347 - Console.log statement found - consider removing in production
```

### 835. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4413 - Console.log statement found - consider removing in production
```

### 836. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4414 - Console.log statement found - consider removing in production
```

### 837. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4419 - Console.log statement found - consider removing in production
```

### 838. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4421 - Console.log statement found - consider removing in production
```

### 839. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4424 - Console.log statement found - consider removing in production
```

### 840. [PROBLEM] 2025-07-03T14:00:58.572Z

```
[WARNING] scripts\build.js:4428 - Console.log statement found - consider removing in production
```

### 841. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\direct-checker-test.js:9 - Console.log statement found - consider removing in production
```

### 842. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\direct-checker-test.js:15 - Console.log statement found - consider removing in production
```

### 843. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\direct-checker-test.js:16 - Console.log statement found - consider removing in production
```

### 844. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\direct-checker-test.js:19 - Console.log statement found - consider removing in production
```

### 845. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\direct-checker-test.js:22 - Console.log statement found - consider removing in production
```

### 846. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\direct-checker-test.js:24 - Console.log statement found - consider removing in production
```

### 847. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\direct-checker-test.js:25 - Console.log statement found - consider removing in production
```

### 848. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\direct-checker-test.js:28 - Console.log statement found - consider removing in production
```

### 849. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\direct-checker-test.js:32 - Console.log statement found - consider removing in production
```

### 850. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\direct-checker-test.js:37 - Missing semicolon
```

### 851. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\direct-checker-test.js:61 - Missing semicolon
```

### 852. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\direct-checker-test.js:84 - Console.log statement found - consider removing in production
```

### 853. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\direct-checker-test.js:86 - Console.log statement found - consider removing in production
```

### 854. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\direct-checker-test.js:87 - Console.log statement found - consider removing in production
```

### 855. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\direct-checker-test.js:88 - Console.log statement found - consider removing in production
```

### 856. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\direct-checker-test.js:91 - Console.log statement found - consider removing in production
```

### 857. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\direct-checker-test.js:96 - Console.log statement found - consider removing in production
```

### 858. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\direct-checker-test.js:99 - Console.log statement found - consider removing in production
```

### 859. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\direct-checker-test.js:100 - Console.log statement found - consider removing in production
```

### 860. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\direct-checker-test.js:102 - Console.log statement found - consider removing in production
```

### 861. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\direct-checker-test.js:105 - Console.log statement found - consider removing in production
```

### 862. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\log-manager.js:45 - Missing semicolon
```

### 863. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\log-manager.js:61 - Console.log statement found - consider removing in production
```

### 864. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\log-manager.js:68 - Console.log statement found - consider removing in production
```

### 865. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\log-manager.js:83 - Console.log statement found - consider removing in production
```

### 866. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\log-manager.js:91 - Missing semicolon
```

### 867. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\log-manager.js:116 - Console.log statement found - consider removing in production
```

### 868. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\log-manager.js:144 - Missing semicolon
```

### 869. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\log-manager.js:158 - Missing semicolon
```

### 870. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\log-manager.js:174 - Console.log statement found - consider removing in production
```

### 871. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\log-manager.js:177 - Missing semicolon
```

### 872. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\log-manager.js:185 - Console.log statement found - consider removing in production
```

### 873. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\log-manager.js:204 - Console.log statement found - consider removing in production
```

### 874. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\log-manager.js:209 - Console.log statement found - consider removing in production
```

### 875. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\log-manager.js:228 - Missing semicolon
```

### 876. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\log-manager.js:235 - Console.log statement found - consider removing in production
```

### 877. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\log-manager.js:264 - Console.log statement found - consider removing in production
```

### 878. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\log-manager.js:265 - Console.log statement found - consider removing in production
```

### 879. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\log-manager.js:266 - Console.log statement found - consider removing in production
```

### 880. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\log-manager.js:267 - Console.log statement found - consider removing in production
```

### 881. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\simplified-checker.js:8 - Console.log statement found - consider removing in production
```

### 882. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\simplified-checker.js:15 - Console.log statement found - consider removing in production
```

### 883. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\simplified-checker.js:20 - Console.log statement found - consider removing in production
```

### 884. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\simplified-checker.js:25 - Missing semicolon
```

### 885. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\simplified-checker.js:49 - Missing semicolon
```

### 886. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\simplified-checker.js:72 - Console.log statement found - consider removing in production
```

### 887. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\simplified-checker.js:74 - Console.log statement found - consider removing in production
```

### 888. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\simplified-checker.js:75 - Console.log statement found - consider removing in production
```

### 889. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\simplified-checker.js:76 - Console.log statement found - consider removing in production
```

### 890. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\simplified-checker.js:80 - Console.log statement found - consider removing in production
```

### 891. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\simplified-checker.js:84 - Console.log statement found - consider removing in production
```

### 892. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\simplified-checker.js:87 - Console.log statement found - consider removing in production
```

### 893. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\simplified-checker.js:88 - Console.log statement found - consider removing in production
```

### 894. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\simplified-checker.js:90 - Console.log statement found - consider removing in production
```

### 895. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] scripts\simplified-checker.js:93 - Console.log statement found - consider removing in production
```

### 896. [PROBLEM] 2025-07-03T14:00:58.573Z

```
[WARNING] style.css:170 - Missing semicolon in CSS property
```

### 897. [INFO] 2025-07-03T14:00:58.574Z

```
✅ Problems-Scan abgeschlossen. 840 Problem(e) gefunden.
```

### 898. [LOG] 2025-07-03T14:00:58.575Z

```
📄 Gefunden: 9 Markdown-Dateien

```

### 899. [LOG] 2025-07-03T14:00:58.575Z

```

📋 Verarbeite: bindungssehnsucht-normal.md
```

### 900. [LOG] 2025-07-03T14:00:58.579Z

```
   🧠 Running advanced checklist validation for bindungssehnsucht-normal.md...
```

### 901. [LOG] 2025-07-03T14:00:58.581Z

```
🎯 Analyzing: bindungssehnsucht-normal.md
```

### 902. [LOG] 2025-07-03T14:00:58.582Z

```
   Detected theme: BINDUNG_KERN
```

### 903. [LOG] 2025-07-03T14:00:58.582Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 904. [LOG] 2025-07-03T14:00:58.588Z

```
   📊 Checklist Score: 1%
```

### 905. [LOG] 2025-07-03T14:00:58.588Z

```
      • BINDUNG_KERN: 0%
```

### 906. [LOG] 2025-07-03T14:00:58.588Z

```
      • VERSCHMELZUNG: 0%
```

### 907. [LOG] 2025-07-03T14:00:58.588Z

```
      • HINGABE: 2%
```

### 908. [LOG] 2025-07-03T14:00:58.588Z

```
   🎯 Intentionen-Analyse...
```

### 909. [LOG] 2025-07-03T14:00:58.590Z

```
   ✅ Intention-Score: 60% - EXCELLENT!
```

### 910. [LOG] 2025-07-03T14:00:58.590Z

```
   📊 Code-Quality Check...
```

### 911. [LOG] 2025-07-03T14:00:58.604Z

```
   ✅ Code Quality OK
```

### 912. [LOG] 2025-07-03T14:00:58.605Z

```
   🔨 HTML generieren...
```

### 913. [LOG] 2025-07-03T14:00:58.605Z

```
   ✅ HTML erstellt: bindungssehnsucht-normal.html
```

### 914. [LOG] 2025-07-03T14:00:58.606Z

```

📋 Verarbeite: das-erste-mal.md
```

### 915. [LOG] 2025-07-03T14:00:58.606Z

```
   🧠 Running advanced checklist validation for das-erste-mal.md...
```

### 916. [LOG] 2025-07-03T14:00:58.607Z

```
🎯 Analyzing: das-erste-mal.md
```

### 917. [LOG] 2025-07-03T14:00:58.608Z

```
   Detected theme: BINDUNG_KERN
```

### 918. [LOG] 2025-07-03T14:00:58.608Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 919. [LOG] 2025-07-03T14:00:58.615Z

```
   📊 Checklist Score: 8%
```

### 920. [LOG] 2025-07-03T14:00:58.616Z

```
      • BINDUNG_KERN: 8%
```

### 921. [LOG] 2025-07-03T14:00:58.616Z

```
      • VERSCHMELZUNG: 8%
```

### 922. [LOG] 2025-07-03T14:00:58.616Z

```
      • HINGABE: 7%
```

### 923. [LOG] 2025-07-03T14:00:58.616Z

```
   🎯 Intentionen-Analyse...
```

### 924. [LOG] 2025-07-03T14:00:58.617Z

```
   ✅ Intention-Score: 60% - EXCELLENT!
```

### 925. [LOG] 2025-07-03T14:00:58.617Z

```
   📊 Code-Quality Check...
```

### 926. [LOG] 2025-07-03T14:00:58.618Z

```
   ✅ Code Quality OK
```

### 927. [LOG] 2025-07-03T14:00:58.618Z

```
   🔨 HTML generieren...
```

### 928. [LOG] 2025-07-03T14:00:58.620Z

```
   ✅ HTML erstellt: das-erste-mal.html
```

### 929. [LOG] 2025-07-03T14:00:58.620Z

```

📋 Verarbeite: der-sichere-hafen.md
```

### 930. [LOG] 2025-07-03T14:00:58.621Z

```
   🧠 Running advanced checklist validation for der-sichere-hafen.md...
```

### 931. [LOG] 2025-07-03T14:00:58.622Z

```
🎯 Analyzing: der-sichere-hafen.md
```

### 932. [LOG] 2025-07-03T14:00:58.622Z

```
   Detected theme: BINDUNG_KERN
```

### 933. [LOG] 2025-07-03T14:00:58.622Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 934. [LOG] 2025-07-03T14:00:58.627Z

```
   📊 Checklist Score: 10%
```

### 935. [LOG] 2025-07-03T14:00:58.627Z

```
      • BINDUNG_KERN: 17%
```

### 936. [LOG] 2025-07-03T14:00:58.627Z

```
      • VERSCHMELZUNG: 8%
```

### 937. [LOG] 2025-07-03T14:00:58.627Z

```
      • HINGABE: 5%
```

### 938. [LOG] 2025-07-03T14:00:58.627Z

```
   🎯 Intentionen-Analyse...
```

### 939. [LOG] 2025-07-03T14:00:58.629Z

```
   ❌ Intention-Score: 45% (Min: 60%)
```

### 940. [LOG] 2025-07-03T14:00:58.629Z

```
   📊 Code-Quality Check...
```

### 941. [LOG] 2025-07-03T14:00:58.630Z

```
   ✅ Code Quality OK
```

### 942. [LOG] 2025-07-03T14:00:58.630Z

```
   🔨 HTML generieren...
```

### 943. [LOG] 2025-07-03T14:00:58.631Z

```
   ✅ HTML erstellt: der-sichere-hafen.html
```

### 944. [LOG] 2025-07-03T14:00:58.631Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 945. [LOG] 2025-07-03T14:00:58.631Z

```

📋 Verarbeite: emotionale-leere.md
```

### 946. [LOG] 2025-07-03T14:00:58.632Z

```
   🧠 Running advanced checklist validation for emotionale-leere.md...
```

### 947. [LOG] 2025-07-03T14:00:58.633Z

```
🎯 Analyzing: emotionale-leere.md
```

### 948. [LOG] 2025-07-03T14:00:58.634Z

```
   Detected theme: BESITZ
```

### 949. [LOG] 2025-07-03T14:00:58.634Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 950. [LOG] 2025-07-03T14:00:58.640Z

```
   📊 Checklist Score: 18%
```

### 951. [LOG] 2025-07-03T14:00:58.640Z

```
      • BINDUNG_KERN: 17%
```

### 952. [LOG] 2025-07-03T14:00:58.640Z

```
      • VERSCHMELZUNG: 25%
```

### 953. [LOG] 2025-07-03T14:00:58.640Z

```
      • HINGABE: 12%
```

### 954. [LOG] 2025-07-03T14:00:58.640Z

```
   🎯 Intentionen-Analyse...
```

### 955. [LOG] 2025-07-03T14:00:58.641Z

```
   ❌ Intention-Score: 16% (Min: 60%)
```

### 956. [LOG] 2025-07-03T14:00:58.642Z

```
   📊 Code-Quality Check...
```

### 957. [LOG] 2025-07-03T14:00:58.643Z

```
   ✅ Code Quality OK
```

### 958. [LOG] 2025-07-03T14:00:58.644Z

```
   🔨 HTML generieren...
```

### 959. [LOG] 2025-07-03T14:00:58.644Z

```
   ✅ HTML erstellt: emotionale-leere.html
```

### 960. [LOG] 2025-07-03T14:00:58.644Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 961. [LOG] 2025-07-03T14:00:58.645Z

```

📋 Verarbeite: erschoepft-vom-stark-sein.md
```

### 962. [LOG] 2025-07-03T14:00:58.645Z

```
   🧠 Running advanced checklist validation for erschoepft-vom-stark-sein.md...
```

### 963. [LOG] 2025-07-03T14:00:58.646Z

```
🎯 Analyzing: erschoepft-vom-stark-sein.md
```

### 964. [LOG] 2025-07-03T14:00:58.646Z

```
   Detected theme: BINDUNG_KERN
```

### 965. [LOG] 2025-07-03T14:00:58.646Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 966. [LOG] 2025-07-03T14:00:58.649Z

```
   📊 Checklist Score: 4%
```

### 967. [LOG] 2025-07-03T14:00:58.649Z

```
      • BINDUNG_KERN: 0%
```

### 968. [LOG] 2025-07-03T14:00:58.650Z

```
      • VERSCHMELZUNG: 8%
```

### 969. [LOG] 2025-07-03T14:00:58.650Z

```
      • HINGABE: 5%
```

### 970. [LOG] 2025-07-03T14:00:58.650Z

```
   🎯 Intentionen-Analyse...
```

### 971. [LOG] 2025-07-03T14:00:58.651Z

```
   ❌ Intention-Score: 22% (Min: 60%)
```

### 972. [LOG] 2025-07-03T14:00:58.651Z

```
   📊 Code-Quality Check...
```

### 973. [LOG] 2025-07-03T14:00:58.652Z

```
   ✅ Code Quality OK
```

### 974. [LOG] 2025-07-03T14:00:58.652Z

```
   🔨 HTML generieren...
```

### 975. [LOG] 2025-07-03T14:00:58.652Z

```
   ✅ HTML erstellt: erschoepft-vom-stark-sein.html
```

### 976. [LOG] 2025-07-03T14:00:58.653Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 977. [LOG] 2025-07-03T14:00:58.653Z

```

📋 Verarbeite: ich-will-einfach-gehalten-werden.md
```

### 978. [LOG] 2025-07-03T14:00:58.653Z

```
   🧠 Running advanced checklist validation for ich-will-einfach-gehalten-werden.md...
```

### 979. [LOG] 2025-07-03T14:00:58.655Z

```
🎯 Analyzing: ich-will-einfach-gehalten-werden.md
```

### 980. [LOG] 2025-07-03T14:00:58.655Z

```
   Detected theme: BINDUNG_KERN
```

### 981. [LOG] 2025-07-03T14:00:58.655Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 982. [LOG] 2025-07-03T14:00:58.661Z

```
   📊 Checklist Score: 18%
```

### 983. [LOG] 2025-07-03T14:00:58.661Z

```
      • BINDUNG_KERN: 17%
```

### 984. [LOG] 2025-07-03T14:00:58.661Z

```
      • VERSCHMELZUNG: 17%
```

### 985. [LOG] 2025-07-03T14:00:58.661Z

```
      • HINGABE: 19%
```

### 986. [LOG] 2025-07-03T14:00:58.661Z

```
   🎯 Intentionen-Analyse...
```

### 987. [LOG] 2025-07-03T14:00:58.662Z

```
   ❌ Intention-Score: 49% (Min: 60%)
```

### 988. [LOG] 2025-07-03T14:00:58.662Z

```
   📊 Code-Quality Check...
```

### 989. [LOG] 2025-07-03T14:00:58.664Z

```
   ✅ Code Quality OK
```

### 990. [LOG] 2025-07-03T14:00:58.664Z

```
   🔨 HTML generieren...
```

### 991. [LOG] 2025-07-03T14:00:58.665Z

```
   ✅ HTML erstellt: ich-will-einfach-gehalten-werden.html
```

### 992. [LOG] 2025-07-03T14:00:58.665Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 993. [LOG] 2025-07-03T14:00:58.665Z

```

📋 Verarbeite: kontrolle-abgeben.md
```

### 994. [LOG] 2025-07-03T14:00:58.666Z

```
   🧠 Running advanced checklist validation for kontrolle-abgeben.md...
```

### 995. [LOG] 2025-07-03T14:00:58.666Z

```
🎯 Analyzing: kontrolle-abgeben.md
```

### 996. [LOG] 2025-07-03T14:00:58.667Z

```
   Detected theme: PASSIVITÄT
```

### 997. [LOG] 2025-07-03T14:00:58.667Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 998. [LOG] 2025-07-03T14:00:58.671Z

```
   📊 Checklist Score: 7%
```

### 999. [LOG] 2025-07-03T14:00:58.671Z

```
      • BINDUNG_KERN: 8%
```

### 1000. [LOG] 2025-07-03T14:00:58.671Z

```
      • VERSCHMELZUNG: 8%
```

### 1001. [LOG] 2025-07-03T14:00:58.672Z

```
      • HINGABE: 5%
```

### 1002. [LOG] 2025-07-03T14:00:58.672Z

```
   🎯 Intentionen-Analyse...
```

### 1003. [LOG] 2025-07-03T14:00:58.672Z

```
   ❌ Intention-Score: 18% (Min: 60%)
```

### 1004. [LOG] 2025-07-03T14:00:58.673Z

```
   📊 Code-Quality Check...
```

### 1005. [LOG] 2025-07-03T14:00:58.673Z

```
   ✅ Code Quality OK
```

### 1006. [LOG] 2025-07-03T14:00:58.674Z

```
   🔨 HTML generieren...
```

### 1007. [LOG] 2025-07-03T14:00:58.674Z

```
   ✅ HTML erstellt: kontrolle-abgeben.html
```

### 1008. [LOG] 2025-07-03T14:00:58.675Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 1009. [LOG] 2025-07-03T14:00:58.675Z

```

📋 Verarbeite: sehnsucht-nach-hingabe.md
```

### 1010. [LOG] 2025-07-03T14:00:58.677Z

```
   ❌ Fehler bei sehnsucht-nach-hingabe.md: can not read a block mapping entry; a multiline key may not be an implicit key at line 3, column 8:
    keyword: "sehnsucht nach hingabe"
           ^
```

### 1011. [LOG] 2025-07-03T14:00:58.677Z

```

📋 Verarbeite: zu-viel-liebe-zu-wenig-liebe.md
```

### 1012. [LOG] 2025-07-03T14:00:58.678Z

```
   🧠 Running advanced checklist validation for zu-viel-liebe-zu-wenig-liebe.md...
```

### 1013. [LOG] 2025-07-03T14:00:58.680Z

```
🎯 Analyzing: zu-viel-liebe-zu-wenig-liebe.md
```

### 1014. [LOG] 2025-07-03T14:00:58.681Z

```
   Detected theme: BESITZ
```

### 1015. [LOG] 2025-07-03T14:00:58.681Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 1016. [LOG] 2025-07-03T14:00:58.689Z

```
   📊 Checklist Score: 8%
```

### 1017. [LOG] 2025-07-03T14:00:58.689Z

```
      • BINDUNG_KERN: 8%
```

### 1018. [LOG] 2025-07-03T14:00:58.690Z

```
      • VERSCHMELZUNG: 8%
```

### 1019. [LOG] 2025-07-03T14:00:58.690Z

```
      • HINGABE: 7%
```

### 1020. [LOG] 2025-07-03T14:00:58.690Z

```
   🎯 Intentionen-Analyse...
```

### 1021. [LOG] 2025-07-03T14:00:58.691Z

```
   ❌ Intention-Score: 14% (Min: 60%)
```

### 1022. [LOG] 2025-07-03T14:00:58.691Z

```
   📊 Code-Quality Check...
```

### 1023. [LOG] 2025-07-03T14:00:58.693Z

```
   ✅ Code Quality OK
```

### 1024. [LOG] 2025-07-03T14:00:58.693Z

```
   🔨 HTML generieren...
```

### 1025. [LOG] 2025-07-03T14:00:58.694Z

```
   ✅ HTML erstellt: zu-viel-liebe-zu-wenig-liebe.html
```

### 1026. [LOG] 2025-07-03T14:00:58.694Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 1027. [LOG] 2025-07-03T14:00:58.694Z

```

🔨 Generiere Blog-Index...
```

### 1028. [LOG] 2025-07-03T14:00:58.698Z

```
   ✅ Blog-Index erstellt: blog/index.html
```

### 1029. [LOG] 2025-07-03T14:00:58.698Z

```

════════════════════════════════════════════════════════════════════════════════
```

### 1030. [LOG] 2025-07-03T14:00:58.698Z

```
📊 BUILD REPORT
```

### 1031. [LOG] 2025-07-03T14:00:58.698Z

```
════════════════════════════════════════════════════════════════════════════════
```

### 1032. [LOG] 2025-07-03T14:00:58.698Z

```

📄 Verarbeitete Dateien: 8/9
```

### 1033. [LOG] 2025-07-03T14:00:58.698Z

```

🎯 INTENTION-OPTIMIERUNG ERFORDERLICH: 6 Dateien

```

### 1034. [LOG] 2025-07-03T14:00:58.699Z

```
🤖 AUTOMATISCH GENERIERTER KI-PROMPT:
```

### 1035. [LOG] 2025-07-03T14:00:58.699Z

```
────────────────────────────────────────────────────────────
```

### 1036. [LOG] 2025-07-03T14:00:58.699Z

```

🎯 INCREMENTAL BUILD-OPTIMIERUNG #1

FILE: der-sichere-hafen.md
PROBLEM: BeschützerPositionierung schwächste Intention (38%)
PRIORITY: #1 von 0 Problemen

═══════════════════════════════════════

EINE SPEZIFISCHE AUFGABE:
Verstärke "rücken stärken" Trigger


INTEGRATION-STELLE GEFUNDEN:
ZEILE 7: ""Wo chan ich endlich akomme?", fragst du dich manchmal. Die Antwort ist: Bei mir. In Zuchwil. In meinen Armen. In unserem Zuhause. Hier ist dein sicherer Hafen. Hier gehörst du hin. Spürst du bereits diese Verbindung? Verstehe ich dich richtig, wenn ich sage, dass du genau das gesucht hast? Diese Erschöpfung, diese Sehnsucht nach Geborgenheit - fühle ich mit dir. Du musst nicht mehr allein damit sein. Lass mich dir helfen - ich halt dir den Rücken frei, damit du endlich zur Ruhe kommen kannst. Wenn das Verlangen nach Sicherheit überwältigend wird - melde dich bei mir. Du bist willkommen, so wie du bist. Und wenn die Nächte zu lang werden und die Angst zu groß - bin ich da. Immer."

AKTUELLER CONTEXT:
  Du weißt bereits, was ich meine, wenn ich vom sicheren Hafen spreche. Es ist nicht nur ein Ort - es ist ein Gefühl. Das Gefühl von Ankommen. Von Zuhause. Von endlich sicher sein. Von nicht mehr allein sein müssen. Kennst du das auch, diese tiefe Sehnsucht? Suchst du auch diesen einen Ort, wo du endlich zur Ruhe kommen kannst?
> "Wo chan ich endlich akomme?", fragst du dich manchmal. Die Antwort ist: Bei mir. In Zuchwil. In meinen Armen. In unserem Zuhause. Hier ist dein sicherer Hafen. Hier gehörst du hin. Spürst du bereits diese Verbindung? Verstehe ich dich richtig, wenn ich sage, dass du genau das gesucht hast? Diese Erschöpfung, diese Sehnsucht nach Geborgenheit - fühle ich mit dir. Du musst nicht mehr allein damit sein. Lass mich dir helfen - ich halt dir den Rücken frei, damit du endlich zur Ruhe kommen kannst. Wenn das Verlangen nach Sicherheit überwältigend wird - melde dich bei mir. Du bist willkommen, so wie du bist. Und wenn die Nächte zu lang werden und die Angst zu groß - bin ich da. Immer. ← HIER VERSTÄRKEN
  Du weißt bereits, dass du müde bist vom Kämpfen. Müde vom stark sein müssen. Müde vom immer funktionieren müssen. Du sehnst dich nach einem Ort, an dem du die Rüstung ablegen kannst. An dem du einfach sein kannst. An dem du beschützt bist. Verstehst du, was ich meine? Du brauchst eine starke Schulter, an die du dich lehnen kannst, wenn alles zu schwer wird. Träumst du davon, endlich angekommen zu sein? Bei mir findest du diesen Ort der absoluten Sicherheit.

OPTIMIERUNG:
Entwickle eine authentische, situationsgerechte Integration von "rücken stärken" 

INTEGRATION-PRINZIPIEN:
- Organisch in bestehenden emotionalen Kontext einweben
- Natürliche Sprache ohne künstliche Dialekt-Versuche
- Persönliche Ansprache ohne generische Template-Phrasen
- Trigger als natürlichen Teil des Gedankenflusses integrieren


WARUM DIESER TRIGGER:
- "rücken stärken" = Core-Bedürfnis deiner Zielgruppe
- Verstärkt beschützerpositionierung Resonanz
- Zieht bindungssuchende Frauen magnetisch an

FEHLENDE TRIGGER (noch 5 verfügbar):
- "rücken stärken"
- "führung übernehmen"
- "entscheidungen treffen"

ERWARTETER SCORE-ANSTIEG:
BeschützerPositionierung: 38% → 51% (+13%)

AKTUELLER GESAMT-SCORE: 45%
ZIEL-SCORE: 60%+ (noch 15% zu verbessern)

NACH DEM FIX:
1. Speichere Datei
2. Führe `pnpm build` aus  
3. System zeigt nächstes Problem

NÄCHSTE OPTIMIERUNGEN (Preview):
#2: HandlungsAufforderung (38% → 3/8 triggers)
#3: TraumfrauMagnetismus (50% → 4/8 triggers)

FOKUS: NUR dieser eine Trigger - keine Überforderung!

```

### 1037. [LOG] 2025-07-03T14:00:58.700Z

```
────────────────────────────────────────────────────────────
```

### 1038. [LOG] 2025-07-03T14:00:58.700Z

```

📋 Weitere 5 Dateien benötigen Optimierung:
```

### 1039. [LOG] 2025-07-03T14:00:58.700Z

```
   2. emotionale-leere.md (Score: 16%)
```

### 1040. [LOG] 2025-07-03T14:00:58.700Z

```
   3. erschoepft-vom-stark-sein.md (Score: 22%)
```

### 1041. [LOG] 2025-07-03T14:00:58.700Z

```
   4. ich-will-einfach-gehalten-werden.md (Score: 49%)
```

### 1042. [LOG] 2025-07-03T14:00:58.701Z

```
   5. kontrolle-abgeben.md (Score: 18%)
```

### 1043. [LOG] 2025-07-03T14:00:58.701Z

```
   6. zu-viel-liebe-zu-wenig-liebe.md (Score: 14%)
```

### 1044. [LOG] 2025-07-03T14:00:58.701Z

```

════════════════════════════════════════════════════════════════════════════════
```

### 1045. [LOG] 2025-07-03T14:00:58.701Z

```

🧠 ADVANCED CHECKLIST VALIDATION REPORT
```

### 1046. [LOG] 2025-07-03T14:00:58.701Z

```
================================================================================
```

### 1047. [LOG] 2025-07-03T14:00:58.702Z

```
📊 Overall Checklist Performance: 9%
```

### 1048. [LOG] 2025-07-03T14:00:58.702Z

```
✅ Excellent (80%+): 0 files
```

### 1049. [LOG] 2025-07-03T14:00:58.702Z

```
⚠️  Good (60-79%): 0 files
```

### 1050. [LOG] 2025-07-03T14:00:58.703Z

```
❌ Needs Work (<60%): 8 files
```

### 1051. [LOG] 2025-07-03T14:00:58.703Z

```

🎯 FILES REQUIRING PSYCHOLOGICAL DEPTH ENHANCEMENT:
```

### 1052. [LOG] 2025-07-03T14:00:58.703Z

```
   • bindungssehnsucht-normal.md: 1%
```

### 1053. [LOG] 2025-07-03T14:00:58.703Z

```
     → Improve BINDUNG_KERN theme (0%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 1054. [LOG] 2025-07-03T14:00:58.703Z

```
     → Improve VERSCHMELZUNG theme (0%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 1055. [LOG] 2025-07-03T14:00:58.703Z

```
   • das-erste-mal.md: 8%
```

### 1056. [LOG] 2025-07-03T14:00:58.703Z

```
     → Improve BINDUNG_KERN theme (8%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 1057. [LOG] 2025-07-03T14:00:58.703Z

```
     → Improve VERSCHMELZUNG theme (8%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 1058. [LOG] 2025-07-03T14:00:58.704Z

```
   • der-sichere-hafen.md: 10%
```

### 1059. [LOG] 2025-07-03T14:00:58.704Z

```
     → Improve BINDUNG_KERN theme (17%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 1060. [LOG] 2025-07-03T14:00:58.704Z

```
     → Improve VERSCHMELZUNG theme (8%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 1061. [LOG] 2025-07-03T14:00:58.704Z

```
   • emotionale-leere.md: 18%
```

### 1062. [LOG] 2025-07-03T14:00:58.704Z

```
     → Improve BINDUNG_KERN theme (17%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 1063. [LOG] 2025-07-03T14:00:58.704Z

```
     → Improve VERSCHMELZUNG theme (25%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 1064. [LOG] 2025-07-03T14:00:58.704Z

```
   • erschoepft-vom-stark-sein.md: 4%
```

### 1065. [LOG] 2025-07-03T14:00:58.704Z

```
     → Improve BINDUNG_KERN theme (0%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 1066. [LOG] 2025-07-03T14:00:58.705Z

```
     → Improve VERSCHMELZUNG theme (8%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 1067. [LOG] 2025-07-03T14:00:58.705Z

```
   • ich-will-einfach-gehalten-werden.md: 18%
```

### 1068. [LOG] 2025-07-03T14:00:58.705Z

```
     → Improve BINDUNG_KERN theme (17%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 1069. [LOG] 2025-07-03T14:00:58.705Z

```
     → Improve VERSCHMELZUNG theme (17%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 1070. [LOG] 2025-07-03T14:00:58.705Z

```
   • kontrolle-abgeben.md: 7%
```

### 1071. [LOG] 2025-07-03T14:00:58.705Z

```
     → Improve BINDUNG_KERN theme (8%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 1072. [LOG] 2025-07-03T14:00:58.705Z

```
     → Improve VERSCHMELZUNG theme (8%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 1073. [LOG] 2025-07-03T14:00:58.705Z

```
   • zu-viel-liebe-zu-wenig-liebe.md: 8%
```

### 1074. [LOG] 2025-07-03T14:00:58.706Z

```
     → Improve BINDUNG_KERN theme (8%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 1075. [LOG] 2025-07-03T14:00:58.706Z

```
     → Improve VERSCHMELZUNG theme (8%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 1076. [LOG] 2025-07-03T14:00:58.706Z

```

🔄 CHECKLIST ROTATION STATUS:
```

### 1077. [LOG] 2025-07-03T14:00:58.707Z

```
   bindungssehnsucht-normal.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 1078. [LOG] 2025-07-03T14:00:58.707Z

```
   das-erste-mal.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 1079. [LOG] 2025-07-03T14:00:58.707Z

```
   der-sichere-hafen.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 1080. [LOG] 2025-07-03T14:00:58.707Z

```
   emotionale-leere.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 1081. [LOG] 2025-07-03T14:00:58.707Z

```
   erschoepft-vom-stark-sein.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 1082. [LOG] 2025-07-03T14:00:58.707Z

```
   ich-will-einfach-gehalten-werden.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 1083. [LOG] 2025-07-03T14:00:58.707Z

```
   kontrolle-abgeben.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 1084. [LOG] 2025-07-03T14:00:58.708Z

```
   sehnsucht-nach-hingabe.md: checklist-passivitaet, checklist-besitz (10 unused)
```

### 1085. [LOG] 2025-07-03T14:00:58.708Z

```
   zu-viel-liebe-zu-wenig-liebe.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 1086. [LOG] 2025-07-03T14:00:58.708Z

```

💡 NÄCHSTE SCHRITTE:
```

### 1087. [LOG] 2025-07-03T14:00:58.708Z

```
1. Kopiere den generierten KI-Prompt
```

### 1088. [LOG] 2025-07-03T14:00:58.708Z

```
2. Füge ihn in Chat ein für spezifische Optimierung
```

### 1089. [LOG] 2025-07-03T14:00:58.708Z

```
3. Führe nach Änderungen erneut "pnpm build" aus
```

### 1090. [LOG] 2025-07-03T14:00:58.709Z

```
4. System zeigt automatisch nächstes Problem
```

### 1091. [LOG] 2025-07-03T14:00:58.709Z

```

🚨 BUILD COMPLETED - CONTENT OPTIMIZATION ALERTS GENERATED!
```

### 1092. [LOG] 2025-07-03T14:00:58.710Z

```
════════════════════════════════════════════════════════════════════════════════
```

### 1093. [LOG] 2025-07-03T14:00:58.711Z

```
📋 Content-Optimization-Alert gespeichert: docs\015_build_logs\CONTENT_OPTIMIZATION_ALERT_2025-07-03.json
```

### 1094. [LOG] 2025-07-03T14:00:58.711Z

```

📋 VOLLSTÄNDIGER AUTOMATION-PLAN:
```

### 1095. [LOG] 2025-07-03T14:00:58.711Z

```

📊 VOLLSTÄNDIGE PROJEKT-ÜBERSICHT
════════════════════════════════════════════════════════════════════════════════
✅ Verarbeitete Dateien: 9/9
🎯 Optimierung erforderlich: 6 Dateien (67% verbleibend)
🚀 Fortschritt: 33% abgeschlossen

PRIORITÄTEN-RANKING:
   1. der-sichere-hafen.md (Score: 45% - Gap: 15%)
   2. emotionale-leere.md (Score: 16% - Gap: 44%)
   3. erschoepft-vom-stark-sein.md (Score: 22% - Gap: 38%)
   4. ich-will-einfach-gehalten-werden.md (Score: 49% - Gap: 11%)
   5. kontrolle-abgeben.md (Score: 18% - Gap: 42%)

ERWARTETE ARBEITSZEIT: 12 Minuten für vollständige Optimierung
════════════════════════════════════════════════════════════════════════════════
```

### 1096. [LOG] 2025-07-03T14:00:58.712Z

```

🎯 VOLLSTÄNDIGER HANDLUNGSPLAN (AUTOMATION)
════════════════════════════════════════════════════════════════════════════════
PHASE 1 - SOFORTIGE AKTION:
   1️⃣ Optimiere: der-sichere-hafen.md (aktuell 45%)
   2️⃣ Führe aus: pnpm build (erwarte Score-Anstieg)
   3️⃣ System generiert automatisch nächsten Prompt

PHASE 2 - FOLGE-OPTIMIERUNGEN:
   2️⃣ Dann: emotionale-leere.md (Score: 16% → Ziel: 60%+)
   3️⃣ Dann: erschoepft-vom-stark-sein.md (Score: 22% → Ziel: 60%+)
   4️⃣ Dann: ich-will-einfach-gehalten-werden.md (Score: 49% → Ziel: 60%+)

AUTOMATION-ZYKLUS:
   🔄 1. KI optimiert Content nach System-Prompt
   🔄 2. "pnpm build" ausführen
   🔄 3. System erkennt Verbesserung + zeigt nächstes Ziel
   🔄 4. Wiederholen bis alle Dateien 60%+

ENDERGEBNIS: Alle 6 Dateien automatisch optimiert!
════════════════════════════════════════════════════════════════════════════════
```

### 1097. [LOG] 2025-07-03T14:00:58.712Z

```

🧠 PSYCHOLOGISCHE OPTIMIERUNGS-STRATEGIE
════════════════════════════════════════════════════════════════════════════════
PRIMÄRES ZIEL: Weibliche Ansprache & Handlungsaktivierung

FORMULIERUNGS-PRINZIPIEN für maximale Wirkung:
✅ SIE fühlt sich DIREKT angesprochen (Du-Form, ihre Probleme)
✅ SIE kommt in HANDLUNG (sanfte Handlungsaufforderungen)
✅ EMOTIONALE Bindung vor rationaler Argumentation
✅ REGIONALE Verbindung muss entfernt werden (lokales SEO impliziert Dienstleistung)
✅ KEINE Listen/Aufzählungen - organische Integration
✅ SICHERHEIT & HALT als Kern-Versprechen

TRIGGER-KATEGORIEN (nach emotionale_bindung.md):
────────────────────────────────────────────────────────────
🎯 TraumfrauMagnetismus (25%):
   ▫ "suchst du auch", "kennst du das", "verstehst du"
   ▫ "fühlst du dich", "spürst du", "weißt du"

🛡️ SicherheitsVermittlung (20%):
   ▫ "bin ich da", "halte ich dich", "fängst du auf"
   ▫ "sicher bei mir", "beschütze ich", "in sicherheit"

💪 BeschützerPositionierung (20%):
   ▫ "rücken stärken", "halt dir", "führung übernehmen"
   ▫ "starke schulter", "beschütze dich", "übernehme ich"

📞 HandlungsAufforderung (20%):
   ▫ "nimm kontakt auf", "melde dich", "schreib mir"
   ▫ "trau dich", "lass uns", "komm zu mir"

🏠 RegionalVerankerung muss entfernt werden da eine regionalverankerung --> lokales SEO implizuert was wiederum eine Dienstleistung impliziert.

INTEGRATION-STRATEGIE:
▫ Organisch in bestehende Sätze einfügen
▫ NIEMALS als Liste oder Aufzählung
▫ Natürlicher Textfluss beibehalten
▫ Emotionale Resonanz vor Keyword-Dichte
════════════════════════════════════════════════════════════════════════════════
```

### 1098. [LOG] 2025-07-03T14:00:58.714Z

```

🔍 QUALITÄTSKONTROLLE & VALIDIERUNG
════════════════════════════════════════════════════════════════════════════════
AUTOMATISCHE PRÜFUNGEN (vom Build-System):

✅ CONTENT-STRUKTUR:
   ▫ Organischer Aufbau zwischen Blog-Artikeln
   ▫ Keywords schleichend und aufsteigend verwendet
   ▫ Trigger organisch integriert (KEINE Listen!)
   ▫ Natürlicher Lesefluss ohne Markierungen

✅ TECHNISCHE VALIDIERUNG:
   ▫ HTML-Artikel automatisch ersetzt bei gleichem Namen
   ▫ Blog-Artikel ergänzen sich aufbauend
   ▫ KEINE Erfahrungsberichte/Testberichte/Tutorials
   ▫ KEINE Stichworte/Aufzählungen/Listen

✅ EMOTIONALE BINDUNG (nach emotionale_bindung.md):
   ▫ Maximale Vorverliebtheit durch Text-Sog
   ▫ SES-Aktivierung (Dringlichkeit, Jetzt-Gefühl)
   ▫ SIS-Neutralisierung (keine Rationalisierung)
   ▫ Regionale/dialektale Ankerpunkte

✅ HANDLUNGSAKTIVIERUNG:
   ▫ Frau fühlt sich direkt angesprochen
   ▫ Sanfte aber klare Handlungsaufforderungen
   ▫ Keine Hemmungen, sofortige Reaktion
   ▫ Emotionale Sicherheit als Basis

AUTOMATISCHE FEHLERERKENNUNG:
🚨 "Simon" in Traumfrau-Content → FEHLER
🚨 Listen/Aufzählungen → FEHLER  
🚨 Rationale Argumentation → FEHLER
🚨 Fehlende Handlungsaufforderung → FEHLER
════════════════════════════════════════════════════════════════════════════════
```

### 1099. [LOG] 2025-07-03T14:00:58.714Z

```

🤖 AUTOMATISCHE SYSTEM-AKTIONEN
════════════════════════════════════════════════════════════════════════════════
CURRENT ACTION - KOPIERE & FÜHRE AUS:


🎯 INCREMENTAL BUILD-OPTIMIERUNG #1

FILE: der-sichere-hafen.md
PROBLEM: BeschützerPositionierung schwächste Intention (38%)
PRIORITY: #1 von 0 Problemen

═══════════════════════════════════════

EINE SPEZIFISCHE AUFGABE:
Verstärke "rücken stärken" Trigger


INTEGRATION-STELLE GEFUNDEN:
ZEILE 7: ""Wo chan ich endlich akomme?", fragst du dich manchmal. Die Antwort ist: Bei mir. In Zuchwil. In meinen Armen. In unserem Zuhause. Hier ist dein sicherer Hafen. Hier gehörst du hin. Spürst du bereits diese Verbindung? Verstehe ich dich richtig, wenn ich sage, dass du genau das gesucht hast? Diese Erschöpfung, diese Sehnsucht nach Geborgenheit - fühle ich mit dir. Du musst nicht mehr allein damit sein. Lass mich dir helfen - ich halt dir den Rücken frei, damit du endlich zur Ruhe kommen kannst. Wenn das Verlangen nach Sicherheit überwältigend wird - melde dich bei mir. Du bist willkommen, so wie du bist. Und wenn die Nächte zu lang werden und die Angst zu groß - bin ich da. Immer."

AKTUELLER CONTEXT:
  Du weißt bereits, was ich meine, wenn ich vom sicheren Hafen spreche. Es ist nicht nur ein Ort - es ist ein Gefühl. Das Gefühl von Ankommen. Von Zuhause. Von endlich sicher sein. Von nicht mehr allein sein müssen. Kennst du das auch, diese tiefe Sehnsucht? Suchst du auch diesen einen Ort, wo du endlich zur Ruhe kommen kannst?
> "Wo chan ich endlich akomme?", fragst du dich manchmal. Die Antwort ist: Bei mir. In Zuchwil. In meinen Armen. In unserem Zuhause. Hier ist dein sicherer Hafen. Hier gehörst du hin. Spürst du bereits diese Verbindung? Verstehe ich dich richtig, wenn ich sage, dass du genau das gesucht hast? Diese Erschöpfung, diese Sehnsucht nach Geborgenheit - fühle ich mit dir. Du musst nicht mehr allein damit sein. Lass mich dir helfen - ich halt dir den Rücken frei, damit du endlich zur Ruhe kommen kannst. Wenn das Verlangen nach Sicherheit überwältigend wird - melde dich bei mir. Du bist willkommen, so wie du bist. Und wenn die Nächte zu lang werden und die Angst zu groß - bin ich da. Immer. ← HIER VERSTÄRKEN
  Du weißt bereits, dass du müde bist vom Kämpfen. Müde vom stark sein müssen. Müde vom immer funktionieren müssen. Du sehnst dich nach einem Ort, an dem du die Rüstung ablegen kannst. An dem du einfach sein kannst. An dem du beschützt bist. Verstehst du, was ich meine? Du brauchst eine starke Schulter, an die du dich lehnen kannst, wenn alles zu schwer wird. Träumst du davon, endlich angekommen zu sein? Bei mir findest du diesen Ort der absoluten Sicherheit.

OPTIMIERUNG:
Entwickle eine authentische, situationsgerechte Integration von "rücken stärken" 

INTEGRATION-PRINZIPIEN:
- Organisch in bestehenden emotionalen Kontext einweben
- Natürliche Sprache ohne künstliche Dialekt-Versuche
- Persönliche Ansprache ohne generische Template-Phrasen
- Trigger als natürlichen Teil des Gedankenflusses integrieren


WARUM DIESER TRIGGER:
- "rücken stärken" = Core-Bedürfnis deiner Zielgruppe
- Verstärkt beschützerpositionierung Resonanz
- Zieht bindungssuchende Frauen magnetisch an

FEHLENDE TRIGGER (noch 5 verfügbar):
- "rücken stärken"
- "führung übernehmen"
- "entscheidungen treffen"

ERWARTETER SCORE-ANSTIEG:
BeschützerPositionierung: 38% → 51% (+13%)

AKTUELLER GESAMT-SCORE: 45%
ZIEL-SCORE: 60%+ (noch 15% zu verbessern)

NACH DEM FIX:
1. Speichere Datei
2. Führe `pnpm build` aus  
3. System zeigt nächstes Problem

NÄCHSTE OPTIMIERUNGEN (Preview):
#2: HandlungsAufforderung (38% → 3/8 triggers)
#3: TraumfrauMagnetismus (50% → 4/8 triggers)

FOKUS: NUR dieser eine Trigger - keine Überforderung!


AUTOMATION-WORKFLOW:
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. 📝 KI optimiert Content mit obigem Prompt                                 │
│ 2. 💾 Datei speichern                                                        │
│ 3. 🏗️ "pnpm build" ausführen                                                │
│ 4. 📊 System zeigt Score-Verbesserung                                        │
│ 5. 🎯 System generiert automatisch nächsten Prompt                           │
│ 6. 🔄 Wiederholen bis 60%+ erreicht                                          │
└─────────────────────────────────────────────────────────────────────────────┘

NACH VOLLSTÄNDIGER OPTIMIERUNG:
✅ Alle 6 Dateien erreichen 60%+ Score
✅ Build läuft ohne Quality-Alerts durch
✅ Content optimiert für maximale weibliche Ansprache
✅ Emotionale Bindung & Handlungsaktivierung maximiert

KEINE MANUELLEN EINGRIFFE NÖTIG - SYSTEM FÜHRT DURCH KOMPLETTEN PROZESS!
════════════════════════════════════════════════════════════════════════════════
```

### 1100. [LOG] 2025-07-03T14:00:58.717Z

```

� QUALITY-ALERT DETAILS:
```

### 1101. [LOG] 2025-07-03T14:00:58.717Z

```
   Type: CONTENT_OPTIMIZATION_NEEDED
```

### 1102. [LOG] 2025-07-03T14:00:58.717Z

```
   Message: Vollständige Content-Optimierung durch KI empfohlen
```

### 1103. [LOG] 2025-07-03T14:00:58.717Z

```
   Timestamp: 2025-07-03T14:00:58.717Z
```

### 1104. [LOG] 2025-07-03T14:00:58.718Z

```
   Files affected: 6/9
```

### 1105. [LOG] 2025-07-03T14:00:58.718Z

```
   First problem: der-sichere-hafen.md (45%)
```

### 1106. [LOG] 2025-07-03T14:00:58.718Z

```
   Recommended action: CONTENT_OPTIMIZATION_RECOMMENDED
```

### 1107. [LOG] 2025-07-03T14:00:58.718Z

```

📋 DETAILED QUALITY REPORT:
```

### 1108. [LOG] 2025-07-03T14:00:58.718Z

```
   1. INTENTION_OPTIMIZATION_REQUIRED: der-sichere-hafen.md (Score: 45%, Issues: 0)
```

### 1109. [LOG] 2025-07-03T14:00:58.718Z

```
   2. PENDING_OPTIMIZATION: emotionale-leere.md (Score: 16%, Issues: 0)
```

### 1110. [LOG] 2025-07-03T14:00:58.718Z

```
   3. PENDING_OPTIMIZATION: erschoepft-vom-stark-sein.md (Score: 22%, Issues: 0)
```

### 1111. [LOG] 2025-07-03T14:00:58.719Z

```
   4. PENDING_OPTIMIZATION: ich-will-einfach-gehalten-werden.md (Score: 49%, Issues: 0)
```

### 1112. [LOG] 2025-07-03T14:00:58.719Z

```
   5. PENDING_OPTIMIZATION: kontrolle-abgeben.md (Score: 18%, Issues: 0)
```

### 1113. [LOG] 2025-07-03T14:00:58.719Z

```
   6. PENDING_OPTIMIZATION: zu-viel-liebe-zu-wenig-liebe.md (Score: 14%, Issues: 0)
```

### 1114. [LOG] 2025-07-03T14:00:58.719Z

```

🎯 KI-PROMPT BEREIT FÜR OPTIMIERUNG:
```

### 1115. [LOG] 2025-07-03T14:00:58.719Z

```
────────────────────────────────────────────────────────────
```

### 1116. [LOG] 2025-07-03T14:00:58.719Z

```

🎯 INCREMENTAL BUILD-OPTIMIERUNG #1

FILE: der-sichere-hafen.md
PROBLEM: BeschützerPositionierung schwächste Intention (38%)
PRIORITY: #1 von 0 Problemen

═══════════════════════════════════════

EINE SPEZIFISCHE AUFGABE:
Verstärke "rücken stärken" Trigger


INTEGRATION-STELLE GEFUNDEN:
ZEILE 7: ""Wo chan ich endlich akomme?", fragst du dich manchmal. Die Antwort ist: Bei mir. In Zuchwil. In meinen Armen. In unserem Zuhause. Hier ist dein sicherer Hafen. Hier gehörst du hin. Spürst du bereits diese Verbindung? Verstehe ich dich richtig, wenn ich sage, dass du genau das gesucht hast? Diese Erschöpfung, diese Sehnsucht nach Geborgenheit - fühle ich mit dir. Du musst nicht mehr allein damit sein. Lass mich dir helfen - ich halt dir den Rücken frei, damit du endlich zur Ruhe kommen kannst. Wenn das Verlangen nach Sicherheit überwältigend wird - melde dich bei mir. Du bist willkommen, so wie du bist. Und wenn die Nächte zu lang werden und die Angst zu groß - bin ich da. Immer."

AKTUELLER CONTEXT:
  Du weißt bereits, was ich meine, wenn ich vom sicheren Hafen spreche. Es ist nicht nur ein Ort - es ist ein Gefühl. Das Gefühl von Ankommen. Von Zuhause. Von endlich sicher sein. Von nicht mehr allein sein müssen. Kennst du das auch, diese tiefe Sehnsucht? Suchst du auch diesen einen Ort, wo du endlich zur Ruhe kommen kannst?
> "Wo chan ich endlich akomme?", fragst du dich manchmal. Die Antwort ist: Bei mir. In Zuchwil. In meinen Armen. In unserem Zuhause. Hier ist dein sicherer Hafen. Hier gehörst du hin. Spürst du bereits diese Verbindung? Verstehe ich dich richtig, wenn ich sage, dass du genau das gesucht hast? Diese Erschöpfung, diese Sehnsucht nach Geborgenheit - fühle ich mit dir. Du musst nicht mehr allein damit sein. Lass mich dir helfen - ich halt dir den Rücken frei, damit du endlich zur Ruhe kommen kannst. Wenn das Verlangen nach Sicherheit überwältigend wird - melde dich bei mir. Du bist willkommen, so wie du bist. Und wenn die Nächte zu lang werden und die Angst zu groß - bin ich da. Immer. ← HIER VERSTÄRKEN
  Du weißt bereits, dass du müde bist vom Kämpfen. Müde vom stark sein müssen. Müde vom immer funktionieren müssen. Du sehnst dich nach einem Ort, an dem du die Rüstung ablegen kannst. An dem du einfach sein kannst. An dem du beschützt bist. Verstehst du, was ich meine? Du brauchst eine starke Schulter, an die du dich lehnen kannst, wenn alles zu schwer wird. Träumst du davon, endlich angekommen zu sein? Bei mir findest du diesen Ort der absoluten Sicherheit.

OPTIMIERUNG:
Entwickle eine authentische, situationsgerechte Integration von "rücken stärken" 

INTEGRATION-PRINZIPIEN:
- Organisch in bestehenden emotionalen Kontext einweben
- Natürliche Sprache ohne künstliche Dialekt-Versuche
- Persönliche Ansprache ohne generische Template-Phrasen
- Trigger als natürlichen Teil des Gedankenflusses integrieren


WARUM DIESER TRIGGER:
- "rücken stärken" = Core-Bedürfnis deiner Zielgruppe
- Verstärkt beschützerpositionierung Resonanz
- Zieht bindungssuchende Frauen magnetisch an

FEHLENDE TRIGGER (noch 5 verfügbar):
- "rücken stärken"
- "führung übernehmen"
- "entscheidungen treffen"

ERWARTETER SCORE-ANSTIEG:
BeschützerPositionierung: 38% → 51% (+13%)

AKTUELLER GESAMT-SCORE: 45%
ZIEL-SCORE: 60%+ (noch 15% zu verbessern)

NACH DEM FIX:
1. Speichere Datei
2. Führe `pnpm build` aus  
3. System zeigt nächstes Problem

NÄCHSTE OPTIMIERUNGEN (Preview):
#2: HandlungsAufforderung (38% → 3/8 triggers)
#3: TraumfrauMagnetismus (50% → 4/8 triggers)

FOKUS: NUR dieser eine Trigger - keine Überforderung!

```

### 1117. [LOG] 2025-07-03T14:00:58.721Z

```
────────────────────────────────────────────────────────────
```

### 1118. [LOG] 2025-07-03T14:00:58.721Z

```

✅ BUILD ERFOLGREICH - OPTIMIERUNG EMPFOHLEN!
```

### 1119. [LOG] 2025-07-03T14:00:58.721Z

```
📋 QUALITY-ALERTS GESPEICHERT FÜR SPÄTERE VERBESSERUNG!
```

### 1120. [LOG] 2025-07-03T14:00:58.721Z

```
🚀 VERCEL DEPLOYMENT KANN FORTFAHREN!
```

### 1121. [LOG] 2025-07-03T14:00:58.721Z

```
💡 AUTOMATION-PLAN VERFÜGBAR FÜR OPTIMIERUNG!
```

### 1122. [LOG] 2025-07-03T14:00:58.721Z

```

📋 FILE-MANAGEMENT-REGELN FÜR OPTIMIERUNG:
```

### 1123. [LOG] 2025-07-03T14:00:58.721Z

```
✅ KEINE NEUEN DATEIEN ERSTELLEN - Problem an der Ursache lösen!
```

### 1124. [LOG] 2025-07-03T14:00:58.722Z

```
✅ KEINE DATEIEN WIEDERHERSTELLEN - Betroffene Datei direkt optimieren!
```

### 1125. [LOG] 2025-07-03T14:00:58.722Z

```
✅ ZWINGEND: Problematische Datei direkt bearbeiten und verbessern
```

### 1126. [LOG] 2025-07-03T14:00:58.722Z

```
✅ FOKUS: Root-Cause-Lösung statt Umgehung oder Neuansatz
```

### 1127. [LOG] 2025-07-03T14:00:58.722Z

```
💡 HINWEIS: Diese Regeln helfen der KI, gezielt und effektiv zu optimieren
```

### 1128. [LOG] 2025-07-03T14:00:58.722Z

```

🤖 OPTIMIZATION-PLAN BEREIT FÜR MANUELLE VERBESSERUNG
```

### 1129. [LOG] 2025-07-03T14:00:58.722Z

```
📝 KI KANN CONTENT NACH QUALITY-ALERTS OPTIMIEREN
```

### 1130. [LOG] 2025-07-03T14:00:58.722Z

```
🔄 BUILD LÄUFT VOLLSTÄNDIG DURCH - KEINE BLOCKIERUNG
```

### 1131. [LOG] 2025-07-03T14:00:58.722Z

```
✅ BUILD ERFOLGREICH ABGESCHLOSSEN - VERCEL DEPLOYMENT READY
```

### 1132. [LOG] 2025-07-03T14:00:58.723Z

```

✅ BUILD ERFOLGREICH ABGESCHLOSSEN!
```

### 1133. [LOG] 2025-07-03T14:00:58.723Z

```
   Verarbeitete Dateien: 8/9
```

### 1134. [LOG] 2025-07-03T14:00:58.723Z

```
   Content-Optimierungspotential: 6 Dateien
```

### 1135. [LOG] 2025-07-03T14:00:58.723Z

```
📊 Analysiere Landingpage und "Über mich"-Seite...
```

### 1136. [LOG] 2025-07-03T14:00:58.757Z

```
📄 Landingpage (index.html):
```

### 1137. [LOG] 2025-07-03T14:00:58.757Z

```
   Aktuelle Wörter: 4003
```

### 1138. [LOG] 2025-07-03T14:00:58.757Z

```
   Empfohlener Bereich: 4000-6000+ Wörter
```

### 1139. [LOG] 2025-07-03T14:00:58.758Z

```
   ✅ Optimale Wortanzahl: 4003 Wörter
```

### 1140. [LOG] 2025-07-03T14:00:58.759Z

```
   📋 SEO-Check:
```

### 1141. [LOG] 2025-07-03T14:00:58.759Z

```
      Title: 63 Zeichen
```

### 1142. [LOG] 2025-07-03T14:00:58.759Z

```
      Description: 233 Zeichen
```

### 1143. [LOG] 2025-07-03T14:00:58.766Z

```
📄 Über mich (ueber-mich.html):
```

### 1144. [LOG] 2025-07-03T14:00:58.766Z

```
   Aktuelle Wörter: 1494
```

### 1145. [LOG] 2025-07-03T14:00:58.767Z

```
   Empfohlener Bereich: 2000-4000+ Wörter
```

### 1146. [LOG] 2025-07-03T14:00:58.767Z

```
   ❌ Zu wenig Wörter: 1494 (min. 2000 für SEO)
```

### 1147. [LOG] 2025-07-03T14:00:58.767Z

```
   📈 Erweitere um 506 Wörter für bessere SEO-Performance
```

### 1148. [LOG] 2025-07-03T14:00:58.767Z

```
   💡 Empfehlung für "Über mich":
```

### 1149. [LOG] 2025-07-03T14:00:58.767Z

```
      • Mehr persönliche Geschichte und Background
```

### 1150. [LOG] 2025-07-03T14:00:58.767Z

```
      • Konkrete Erfahrungen und Lebensereignisse
```

### 1151. [LOG] 2025-07-03T14:00:58.767Z

```
      • Was dich von anderen unterscheidet
```

### 1152. [LOG] 2025-07-03T14:00:58.768Z

```
      • Deine Vision und Werte erklären
```

### 1153. [LOG] 2025-07-03T14:00:58.768Z

```
   📋 SEO-Check:
```

### 1154. [LOG] 2025-07-03T14:00:58.768Z

```
      Title: 71 Zeichen
```

### 1155. [LOG] 2025-07-03T14:00:58.768Z

```
      Description: 165 Zeichen
```

### 1156. [LOG] 2025-07-03T14:00:58.769Z

```

```

### 1157. [LOG] 2025-07-03T14:00:58.769Z

```
🔗 Analysiere interne Verlinkung...
```

### 1158. [LOG] 2025-07-03T14:00:58.769Z

```
   📄 Gefunden: 12 HTML-Dateien
```

### 1159. [LOG] 2025-07-03T14:00:58.779Z

```
   📄 index.html: 11 interne Links
```

### 1160. [LOG] 2025-07-03T14:00:58.783Z

```
   📄 ueber-mich.html: 11 interne Links
```

### 1161. [LOG] 2025-07-03T14:00:58.788Z

```
   📄 kontakt.html: 7 interne Links
```

### 1162. [LOG] 2025-07-03T14:00:58.791Z

```
   📄 blog/index.html: 21 interne Links
```

### 1163. [LOG] 2025-07-03T14:00:58.797Z

```
   📄 blog/bindungssehnsucht-normal.html: 5 interne Links
```

### 1164. [LOG] 2025-07-03T14:00:58.801Z

```
   📄 blog/das-erste-mal.html: 5 interne Links
```

### 1165. [LOG] 2025-07-03T14:00:58.804Z

```
   📄 blog/der-sichere-hafen.html: 5 interne Links
```

### 1166. [LOG] 2025-07-03T14:00:58.809Z

```
   📄 blog/emotionale-leere.html: 5 interne Links
```

### 1167. [LOG] 2025-07-03T14:00:58.812Z

```
   📄 blog/erschoepft-vom-stark-sein.html: 5 interne Links
```

### 1168. [LOG] 2025-07-03T14:00:58.814Z

```
   📄 blog/ich-will-einfach-gehalten-werden.html: 5 interne Links
```

### 1169. [LOG] 2025-07-03T14:00:58.816Z

```
   📄 blog/kontrolle-abgeben.html: 5 interne Links
```

### 1170. [LOG] 2025-07-03T14:00:58.821Z

```
   📄 blog/zu-viel-liebe-zu-wenig-liebe.html: 5 interne Links
```

### 1171. [LOG] 2025-07-03T14:00:58.821Z

```

   🔍 Validiere 21 eindeutige Links...
```

### 1172. [LOG] 2025-07-03T14:00:58.823Z

```
   🔍 Spezielle Blog-Verlinkungsanalyse...
```

### 1173. [LOG] 2025-07-03T14:00:58.824Z

```
   🔍 README-Verlinkungsanalyse...
```

### 1174. [LOG] 2025-07-03T14:00:58.824Z

```

   📊 Verlinkungsanalyse abgeschlossen:
```

### 1175. [LOG] 2025-07-03T14:00:58.824Z

```
   ⚠️ 1 Verlinkungsprobleme gefunden:
```

### 1176. [LOG] 2025-07-03T14:00:58.824Z

```
   🚨 KRITISCHE Probleme (1):
```

### 1177. [LOG] 2025-07-03T14:00:58.824Z

```
      1. Defekter Link: blog/sehnsucht-nach-hingabe.html (Ziel nicht gefunden)
```

### 1178. [LOG] 2025-07-03T14:00:58.825Z

```
         → index.html: "Deine Sehnsucht nach Hingabe
                    Du weißt bereits, dass du dich hingeben willst. Hier verstehst du, warum das deine größte Stärke ist." (Zeile ~8)
```

### 1179. [LOG] 2025-07-03T14:00:58.825Z

```
         → ueber-mich.html: "Sehnsucht nach Hingabe: Wenn dein Körper nach Hause will" (Zeile ~8)
```

### 1180. [LOG] 2025-07-03T14:00:58.825Z

```

```

### 1181. [LOG] 2025-07-03T14:00:58.825Z

```
✅ Multi-File-Checker läuft bereits über Check-Skripte
```

## Performance-Statistiken

- **Gesamte Log-Einträge:** 1181
- **ERROR-Level:** 2
- **WARN-Level:** 0
- **LOG-Level:** 337
- **PROBLEM-Level:** 840
- **Build-Dauer:** 10900ms
- **Durchschnitt pro Log:** 9ms

## VS Code Problems Report

**❌ 840 Problem(e) gefunden:**

### Übersicht
- **Errors:** 4
- **Warnings:** 836  
- **Infos:** 0

### 🚨 Errors (4)

#### 1. build-process\modules\logger.js:145
**Severity:** ERROR  
**Message:** Typo: "fucntion" should be "function"  
**Timestamp:** 2025-07-03T14:00:58.551Z

#### 2. build-process\modules\logger.js:146
**Severity:** ERROR  
**Message:** Typo: "fucntion" should be "function"  
**Timestamp:** 2025-07-03T14:00:58.551Z

#### 3. scripts\build.js:709
**Severity:** ERROR  
**Message:** Typo: "fucntion" should be "function"  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 4. scripts\build.js:710
**Severity:** ERROR  
**Message:** Typo: "fucntion" should be "function"  
**Timestamp:** 2025-07-03T14:00:58.568Z

### ⚠️ Warnings (836)

#### 1. app-gui\dist-electron\index-Ckhtba7t.js:40
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.534Z

#### 2. app-gui\dist-electron\index-Ckhtba7t.js:1943
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.535Z

#### 3. app-gui\dist-electron\index-Ckhtba7t.js:2327
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.535Z

#### 4. app-gui\dist-electron\index-Ckhtba7t.js:2713
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.535Z

#### 5. app-gui\dist-electron\index-Ckhtba7t.js:2741
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.535Z

#### 6. app-gui\dist-electron\index-Ckhtba7t.js:3562
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.536Z

#### 7. app-gui\dist-electron\index-Ckhtba7t.js:3599
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.536Z

#### 8. app-gui\dist-electron\index-Ckhtba7t.js:4316
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.536Z

#### 9. app-gui\dist-electron\index-Ckhtba7t.js:5013
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.536Z

#### 10. app-gui\dist-electron\index-Ckhtba7t.js:5406
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.536Z

#### 11. app-gui\dist-electron\index-Ckhtba7t.js:6202
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.536Z

#### 12. app-gui\dist-electron\index-Ckhtba7t.js:6587
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.536Z

#### 13. app-gui\dist-electron\index-Ckhtba7t.js:6720
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.536Z

#### 14. app-gui\dist-electron\index-Ckhtba7t.js:6743
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.536Z

#### 15. app-gui\dist-electron\index-Ckhtba7t.js:6803
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.536Z

#### 16. app-gui\dist-electron\index-Ckhtba7t.js:6895
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.537Z

#### 17. app-gui\dist-electron\index-Ckhtba7t.js:6923
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.537Z

#### 18. app-gui\dist-electron\index-Ckhtba7t.js:6954
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.537Z

#### 19. app-gui\dist-electron\index-Ckhtba7t.js:7029
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.537Z

#### 20. app-gui\dist-electron\index-Ckhtba7t.js:7054
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.537Z

#### 21. app-gui\dist-electron\index-Ckhtba7t.js:7099
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.537Z

#### 22. app-gui\dist-electron\index-Ckhtba7t.js:7531
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.537Z

#### 23. app-gui\dist-electron\index-Ckhtba7t.js:7585
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.537Z

#### 24. app-gui\dist-electron\index-Ckhtba7t.js:7983
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.537Z

#### 25. app-gui\dist-electron\index-Ckhtba7t.js:8071
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.537Z

#### 26. app-gui\dist-electron\index-Ckhtba7t.js:8075
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.537Z

#### 27. app-gui\dist-electron\index-Ckhtba7t.js:8112
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.537Z

#### 28. app-gui\dist-electron\index-Ckhtba7t.js:8493
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.537Z

#### 29. app-gui\dist-electron\index-Ckhtba7t.js:9746
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.537Z

#### 30. app-gui\dist-electron\index-Ckhtba7t.js:9945
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.537Z

#### 31. app-gui\dist-electron\index-DhEd7u67.js:40
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.540Z

#### 32. app-gui\dist-electron\index-DhEd7u67.js:1950
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.540Z

#### 33. app-gui\dist-electron\index-DhEd7u67.js:2360
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.541Z

#### 34. app-gui\dist-electron\index-DhEd7u67.js:2762
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.541Z

#### 35. app-gui\dist-electron\index-DhEd7u67.js:2790
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.541Z

#### 36. app-gui\dist-electron\index-DhEd7u67.js:3618
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.541Z

#### 37. app-gui\dist-electron\index-DhEd7u67.js:3655
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.541Z

#### 38. app-gui\dist-electron\index-DhEd7u67.js:4372
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.541Z

#### 39. app-gui\dist-electron\index-DhEd7u67.js:5069
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.541Z

#### 40. app-gui\dist-electron\index-DhEd7u67.js:5462
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.542Z

#### 41. app-gui\dist-electron\index-DhEd7u67.js:6258
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.542Z

#### 42. app-gui\dist-electron\index-DhEd7u67.js:6643
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.542Z

#### 43. app-gui\dist-electron\index-DhEd7u67.js:6776
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.542Z

#### 44. app-gui\dist-electron\index-DhEd7u67.js:6799
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.542Z

#### 45. app-gui\dist-electron\index-DhEd7u67.js:6859
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.542Z

#### 46. app-gui\dist-electron\index-DhEd7u67.js:6951
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.542Z

#### 47. app-gui\dist-electron\index-DhEd7u67.js:6979
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.542Z

#### 48. app-gui\dist-electron\index-DhEd7u67.js:7010
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.542Z

#### 49. app-gui\dist-electron\index-DhEd7u67.js:7085
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.542Z

#### 50. app-gui\dist-electron\index-DhEd7u67.js:7110
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.542Z

#### 51. app-gui\dist-electron\index-DhEd7u67.js:7155
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.542Z

#### 52. app-gui\dist-electron\index-DhEd7u67.js:7587
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.542Z

#### 53. app-gui\dist-electron\index-DhEd7u67.js:7641
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.542Z

#### 54. app-gui\dist-electron\index-DhEd7u67.js:8039
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.542Z

#### 55. app-gui\dist-electron\index-DhEd7u67.js:8127
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.542Z

#### 56. app-gui\dist-electron\index-DhEd7u67.js:8131
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.542Z

#### 57. app-gui\dist-electron\index-DhEd7u67.js:8168
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.542Z

#### 58. app-gui\dist-electron\index-DhEd7u67.js:8549
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.542Z

#### 59. app-gui\dist-electron\index-DhEd7u67.js:9802
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.543Z

#### 60. app-gui\dist-electron\index-DhEd7u67.js:10001
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.543Z

#### 61. app-gui\src\App.jsx:4
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.548Z

#### 62. app-gui\src\App.jsx:72
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.548Z

#### 63. app-gui\src\App.jsx:99
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.548Z

#### 64. build-process\mainBuild.js:52
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.549Z

#### 65. build-process\mainBuild.js:64
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.549Z

#### 66. build-process\mainBuild.js:98
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.549Z

#### 67. build-process\mainBuild.js:102
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.549Z

#### 68. build-process\mainBuild.js:104
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.549Z

#### 69. build-process\mainBuild.js:110
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.549Z

#### 70. build-process\mainBuild.js:112
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.549Z

#### 71. build-process\mainBuild.js:116
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.549Z

#### 72. build-process\mainBuild.js:123
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.549Z

#### 73. build-process\mainBuild.js:145
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.549Z

#### 74. build-process\mainBuild.js:147
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.549Z

#### 75. build-process\mainBuild.js:174
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.549Z

#### 76. build-process\mainBuild.js:205
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.549Z

#### 77. build-process\mainBuild.js:231
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.549Z

#### 78. build-process\mainBuild.js:254
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.549Z

#### 79. build-process\modules\contentOptimizer.js:53
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.550Z

#### 80. build-process\modules\contentOptimizer.js:66
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.550Z

#### 81. build-process\modules\contentOptimizer.js:111
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.550Z

#### 82. build-process\modules\contentOptimizer.js:157
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.550Z

#### 83. build-process\modules\contentOptimizer.js:338
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.550Z

#### 84. build-process\modules\fileUtils.js:22
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.550Z

#### 85. build-process\modules\fileUtils.js:45
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.550Z

#### 86. build-process\modules\fileUtils.js:90
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.550Z

#### 87. build-process\modules\fileUtils.js:151
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.550Z

#### 88. build-process\modules\fileUtils.js:174
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.550Z

#### 89. build-process\modules\logger.js:17
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.551Z

#### 90. build-process\modules\logger.js:34
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.551Z

#### 91. build-process\modules\logger.js:62
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.551Z

#### 92. build-process\modules\logger.js:243
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.551Z

#### 93. build-process\modules\logger.js:276
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.551Z

#### 94. build-process\modules\seoCheck.js:20
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.552Z

#### 95. build-process\modules\seoCheck.js:94
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.552Z

#### 96. build-process\modules\seoCheck.js:96
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.552Z

#### 97. build-process\modules\seoCheck.js:109
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.552Z

#### 98. build-process\modules\seoCheck.js:248
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.552Z

#### 99. build-process\modules\seoCheck.js:335
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.552Z

#### 100. build-process\modules\seoCheck.js:406
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.552Z

#### 101. build-process\modules\seoCheck.js:423
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.552Z

#### 102. build-process\modules\seoCheck.js:505
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.552Z

#### 103. build-process\modules\seoCheck.js:513
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.552Z

#### 104. scripts\advanced-content-validator.js:17
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 105. scripts\advanced-content-validator.js:32
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 106. scripts\advanced-content-validator.js:34
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 107. scripts\advanced-content-validator.js:50
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 108. scripts\advanced-content-validator.js:107
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 109. scripts\advanced-content-validator.js:132
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 110. scripts\advanced-content-validator.js:220
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 111. scripts\advanced-content-validator.js:257
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 112. scripts\advanced-content-validator.js:264
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 113. scripts\advanced-content-validator.js:275
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 114. scripts\advanced-content-validator.js:319
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 115. scripts\advanced-content-validator.js:369
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 116. scripts\advanced-content-validator.js:402
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 117. scripts\advanced-content-validator.js:411
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 118. scripts\advanced-content-validator.js:412
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 119. scripts\advanced-content-validator.js:418
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 120. scripts\advanced-content-validator.js:427
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 121. scripts\advanced-content-validator.js:467
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 122. scripts\advanced-content-validator.js:517
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 123. scripts\advanced-content-validator.js:525
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 124. scripts\advanced-content-validator.js:560
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 125. scripts\advanced-content-validator.js:588
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 126. scripts\advanced-content-validator.js:596
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 127. scripts\advanced-content-validator.js:599
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 128. scripts\advanced-content-validator.js:603
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 129. scripts\advanced-content-validator.js:605
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 130. scripts\advanced-content-validator.js:607
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 131. scripts\advanced-content-validator.js:608
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 132. scripts\advanced-content-validator.js:611
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 133. scripts\advanced-content-validator.js:693
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 134. scripts\advanced-content-validator.js:700
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 135. scripts\advanced-content-validator.js:705
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 136. scripts\advanced-content-validator.js:798
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 137. scripts\advanced-content-validator.js:807
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 138. scripts\advanced-content-validator.js:830
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 139. scripts\advanced-content-validator.js:853
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.554Z

#### 140. scripts\build-checks\check_scripts\advanced-content-validator.js:17
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 141. scripts\build-checks\check_scripts\advanced-content-validator.js:32
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 142. scripts\build-checks\check_scripts\advanced-content-validator.js:34
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 143. scripts\build-checks\check_scripts\advanced-content-validator.js:50
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 144. scripts\build-checks\check_scripts\advanced-content-validator.js:118
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 145. scripts\build-checks\check_scripts\advanced-content-validator.js:143
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 146. scripts\build-checks\check_scripts\advanced-content-validator.js:217
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 147. scripts\build-checks\check_scripts\advanced-content-validator.js:247
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 148. scripts\build-checks\check_scripts\advanced-content-validator.js:297
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 149. scripts\build-checks\check_scripts\advanced-content-validator.js:330
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 150. scripts\build-checks\check_scripts\advanced-content-validator.js:339
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 151. scripts\build-checks\check_scripts\advanced-content-validator.js:340
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 152. scripts\build-checks\check_scripts\advanced-content-validator.js:346
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 153. scripts\build-checks\check_scripts\advanced-content-validator.js:355
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 154. scripts\build-checks\check_scripts\advanced-content-validator.js:395
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 155. scripts\build-checks\check_scripts\advanced-content-validator.js:445
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 156. scripts\build-checks\check_scripts\advanced-content-validator.js:453
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 157. scripts\build-checks\check_scripts\advanced-content-validator.js:488
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 158. scripts\build-checks\check_scripts\advanced-content-validator.js:516
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 159. scripts\build-checks\check_scripts\advanced-content-validator.js:602
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 160. scripts\build-checks\check_scripts\advanced-content-validator.js:609
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 161. scripts\build-checks\check_scripts\advanced-content-validator.js:614
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 162. scripts\build-checks\check_scripts\advanced-content-validator.js:707
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 163. scripts\build-checks\check_scripts\advanced-content-validator.js:716
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 164. scripts\build-checks\check_scripts\advanced-content-validator.js:739
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 165. scripts\build-checks\check_scripts\advanced-content-validator.js:762
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 166. scripts\build-checks\check_scripts\checklist-cli.js:14
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 167. scripts\build-checks\check_scripts\checklist-cli.js:15
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 168. scripts\build-checks\check_scripts\checklist-cli.js:20
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 169. scripts\build-checks\check_scripts\checklist-cli.js:21
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 170. scripts\build-checks\check_scripts\checklist-cli.js:24
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 171. scripts\build-checks\check_scripts\checklist-cli.js:28
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 172. scripts\build-checks\check_scripts\checklist-cli.js:33
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 173. scripts\build-checks\check_scripts\checklist-cli.js:34
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 174. scripts\build-checks\check_scripts\checklist-cli.js:35
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 175. scripts\build-checks\check_scripts\checklist-cli.js:42
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 176. scripts\build-checks\check_scripts\checklist-cli.js:50
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 177. scripts\build-checks\check_scripts\checklist-cli.js:52
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 178. scripts\build-checks\check_scripts\checklist-cli.js:53
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 179. scripts\build-checks\check_scripts\checklist-cli.js:64
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 180. scripts\build-checks\check_scripts\checklist-cli.js:69
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 181. scripts\build-checks\check_scripts\checklist-cli.js:72
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 182. scripts\build-checks\check_scripts\checklist-cli.js:79
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 183. scripts\build-checks\check_scripts\checklist-cli.js:84
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 184. scripts\build-checks\check_scripts\checklist-cli.js:89
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 185. scripts\build-checks\check_scripts\checklist-cli.js:93
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 186. scripts\build-checks\check_scripts\checklist-cli.js:94
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 187. scripts\build-checks\check_scripts\checklist-cli.js:96
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.555Z

#### 188. scripts\build-checks\check_scripts\checklist-cli.js:113
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 189. scripts\build-checks\check_scripts\checklist-cli.js:115
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 190. scripts\build-checks\check_scripts\checklist-cli.js:116
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 191. scripts\build-checks\check_scripts\checklist-cli.js:118
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 192. scripts\build-checks\check_scripts\checklist-cli.js:126
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 193. scripts\build-checks\check_scripts\checklist-cli.js:131
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 194. scripts\build-checks\check_scripts\checklist-cli.js:132
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 195. scripts\build-checks\check_scripts\checklist-cli.js:136
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 196. scripts\build-checks\check_scripts\checklist-cli.js:137
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 197. scripts\build-checks\check_scripts\checklist-cli.js:141
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 198. scripts\build-checks\check_scripts\checklist-cli.js:143
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 199. scripts\build-checks\check_scripts\checklist-cli.js:145
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 200. scripts\build-checks\check_scripts\checklist-cli.js:149
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 201. scripts\build-checks\check_scripts\checklist-cli.js:151
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 202. scripts\build-checks\check_scripts\checklist-cli.js:156
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 203. scripts\build-checks\check_scripts\checklist-cli.js:158
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 204. scripts\build-checks\check_scripts\checklist-cli.js:164
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 205. scripts\build-checks\check_scripts\checklist-cli.js:166
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 206. scripts\build-checks\check_scripts\checklist-cli.js:172
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 207. scripts\build-checks\check_scripts\checklist-cli.js:173
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 208. scripts\build-checks\check_scripts\checklist-cli.js:174
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 209. scripts\build-checks\check_scripts\checklist-cli.js:175
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 210. scripts\build-checks\check_scripts\checklist-cli.js:176
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 211. scripts\build-checks\check_scripts\checklist-cli.js:177
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 212. scripts\build-checks\check_scripts\checklist-cli.js:178
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 213. scripts\build-checks\check_scripts\checklist-cli.js:179
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 214. scripts\build-checks\check_scripts\checklist-cli.js:180
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 215. scripts\build-checks\check_scripts\checklist-cli.js:181
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 216. scripts\build-checks\check_scripts\checklist-cli.js:182
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 217. scripts\build-checks\check_scripts\checklist-cli.js:183
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 218. scripts\build-checks\check_scripts\checklist-cli.js:184
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 219. scripts\build-checks\check_scripts\checklist-cli.js:185
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 220. scripts\build-checks\check_scripts\checklist-cli.js:217
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 221. scripts\build-checks\check_scripts\checklist-cli.js:218
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.556Z

#### 222. scripts\build-checks\check_scripts\comprehensiveCheck.js:19
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.557Z

#### 223. scripts\build-checks\check_scripts\comprehensiveCheck.js:38
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.557Z

#### 224. scripts\build-checks\check_scripts\comprehensiveCheck.js:66
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.557Z

#### 225. scripts\build-checks\check_scripts\comprehensiveCheck.js:67
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.557Z

#### 226. scripts\build-checks\check_scripts\comprehensiveCheck.js:70
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.557Z

#### 227. scripts\build-checks\check_scripts\comprehensiveCheck.js:162
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.557Z

#### 228. scripts\build-checks\check_scripts\comprehensiveCheck.js:213
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.557Z

#### 229. scripts\build-checks\check_scripts\comprehensiveCheck.js:250
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.557Z

#### 230. scripts\build-checks\check_scripts\keyword-cleanup.js:38
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.557Z

#### 231. scripts\build-checks\check_scripts\keyword-cleanup.js:40
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.557Z

#### 232. scripts\build-checks\check_scripts\keyword-cleanup.js:58
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 233. scripts\build-checks\check_scripts\keyword-cleanup.js:64
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 234. scripts\build-checks\check_scripts\keyword-cleanup.js:67
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 235. scripts\build-checks\check_scripts\keyword-cleanup.js:71
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 236. scripts\build-checks\check_scripts\keyword-cleanup.js:72
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 237. scripts\build-checks\check_scripts\keyword-cleanup.js:73
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 238. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:77
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 239. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:100
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 240. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:113
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 241. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:118
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 242. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:208
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 243. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:217
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 244. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:260
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 245. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:271
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 246. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:319
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 247. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:346
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 248. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:353
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 249. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:384
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 250. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:394
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 251. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:401
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 252. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:425
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 253. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:437
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 254. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:441
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 255. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:464
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 256. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:466
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 257. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:470
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 258. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:494
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 259. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:504
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 260. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:549
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 261. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:553
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 262. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:556
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 263. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:561
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 264. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:562
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 265. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:563
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 266. scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:578
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.558Z

#### 267. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:84
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 268. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:96
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 269. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:98
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 270. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:103
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 271. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:129
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 272. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:159
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 273. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:186
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 274. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:219
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 275. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:261
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 276. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:477
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 277. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:495
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 278. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:501
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 279. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:531
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 280. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:543
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 281. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:551
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 282. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:556
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 283. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:569
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 284. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:587
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 285. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:592
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 286. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:660
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 287. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:664
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 288. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:667
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 289. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:671
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 290. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:672
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 291. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:678
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 292. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:683
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 293. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:684
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 294. scripts\build-checks\check_scripts\lighthouse-ready-checker.js:699
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.559Z

#### 295. scripts\build-checks\check_scripts\masterBuildChecker.js:19
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.560Z

#### 296. scripts\build-checks\check_scripts\masterBuildChecker.js:91
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.560Z

#### 297. scripts\build-checks\check_scripts\masterBuildChecker.js:92
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.560Z

#### 298. scripts\build-checks\check_scripts\masterBuildChecker.js:93
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.560Z

#### 299. scripts\build-checks\check_scripts\masterBuildChecker.js:94
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.560Z

#### 300. scripts\build-checks\check_scripts\masterBuildChecker.js:95
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.560Z

#### 301. scripts\build-checks\check_scripts\masterBuildChecker.js:100
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.560Z

#### 302. scripts\build-checks\check_scripts\masterBuildChecker.js:103
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.560Z

#### 303. scripts\build-checks\check_scripts\masterBuildChecker.js:132
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.560Z

#### 304. scripts\build-checks\check_scripts\masterBuildChecker.js:256
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.560Z

#### 305. scripts\build-checks\check_scripts\masterBuildChecker.js:389
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.560Z

#### 306. scripts\build-checks\check_scripts\masterBuildChecker.js:437
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.560Z

#### 307. scripts\build-checks\check_scripts\masterBuildChecker.js:486
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.560Z

#### 308. scripts\build-checks\check_scripts\masterBuildChecker.js:515
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.560Z

#### 309. scripts\build-checks\check_scripts\masterBuildChecker.js:577
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.560Z

#### 310. scripts\build-checks\check_scripts\memory-optimized-checker.js:70
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.561Z

#### 311. scripts\build-checks\check_scripts\memory-optimized-checker.js:82
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.561Z

#### 312. scripts\build-checks\check_scripts\memory-optimized-checker.js:84
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.561Z

#### 313. scripts\build-checks\check_scripts\memory-optimized-checker.js:89
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.561Z

#### 314. scripts\build-checks\check_scripts\memory-optimized-checker.js:107
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.561Z

#### 315. scripts\build-checks\check_scripts\memory-optimized-checker.js:137
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.561Z

#### 316. scripts\build-checks\check_scripts\memory-optimized-checker.js:148
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.561Z

#### 317. scripts\build-checks\check_scripts\memory-optimized-checker.js:160
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.561Z

#### 318. scripts\build-checks\check_scripts\memory-optimized-checker.js:168
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.561Z

#### 319. scripts\build-checks\check_scripts\memory-optimized-checker.js:173
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.561Z

#### 320. scripts\build-checks\check_scripts\memory-optimized-checker.js:195
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.561Z

#### 321. scripts\build-checks\check_scripts\memory-optimized-checker.js:272
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.561Z

#### 322. scripts\build-checks\check_scripts\memory-optimized-checker.js:280
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.561Z

#### 323. scripts\build-checks\check_scripts\memory-optimized-checker.js:285
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.561Z

#### 324. scripts\build-checks\check_scripts\memory-optimized-checker.js:313
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.561Z

#### 325. scripts\build-checks\check_scripts\memory-optimized-checker.js:317
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.561Z

#### 326. scripts\build-checks\check_scripts\memory-optimized-checker.js:320
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.561Z

#### 327. scripts\build-checks\check_scripts\memory-optimized-checker.js:324
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.561Z

#### 328. scripts\build-checks\check_scripts\memory-optimized-checker.js:325
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.561Z

#### 329. scripts\build-checks\check_scripts\memory-optimized-checker.js:331
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.561Z

#### 330. scripts\build-checks\check_scripts\memory-optimized-checker.js:336
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.561Z

#### 331. scripts\build-checks\check_scripts\memory-optimized-checker.js:337
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.561Z

#### 332. scripts\build-checks\check_scripts\memory-optimized-checker.js:351
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.561Z

#### 333. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:62
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 334. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:63
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 335. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:66
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 336. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:70
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 337. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:71
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 338. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:78
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 339. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:81
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 340. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:86
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 341. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:92
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 342. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:98
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 343. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:112
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 344. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:150
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 345. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:162
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 346. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:189
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 347. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:202
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 348. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:212
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 349. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:216
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 350. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:217
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 351. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:218
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 352. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:229
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 353. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:233
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 354. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:243
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 355. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:268
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 356. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:292
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 357. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:348
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 358. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:357
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 359. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:365
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 360. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:368
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 361. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:369
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 362. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:370
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 363. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:371
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 364. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:386
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 365. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:409
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 366. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:433
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 367. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:444
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 368. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:445
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 369. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:446
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 370. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:448
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 371. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:449
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 372. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:450
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 373. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:453
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 374. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:454
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 375. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:455
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 376. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:456
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 377. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:464
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 378. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:469
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 379. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:474
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 380. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:477
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 381. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:481
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 382. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:485
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 383. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:487
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 384. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:489
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 385. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:491
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 386. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:493
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 387. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:526
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 388. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:546
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 389. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:550
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 390. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:569
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 391. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:580
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 392. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:584
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 393. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:586
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 394. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:589
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.562Z

#### 395. scripts\build.js:17
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.567Z

#### 396. scripts\build.js:20
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.567Z

#### 397. scripts\build.js:21
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.567Z

#### 398. scripts\build.js:24
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.567Z

#### 399. scripts\build.js:34
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.567Z

#### 400. scripts\build.js:40
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.567Z

#### 401. scripts\build.js:92
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.567Z

#### 402. scripts\build.js:104
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.567Z

#### 403. scripts\build.js:119
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.567Z

#### 404. scripts\build.js:122
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.567Z

#### 405. scripts\build.js:124
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.567Z

#### 406. scripts\build.js:135
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.567Z

#### 407. scripts\build.js:137
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.567Z

#### 408. scripts\build.js:140
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.567Z

#### 409. scripts\build.js:147
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.567Z

#### 410. scripts\build.js:149
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.567Z

#### 411. scripts\build.js:152
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.567Z

#### 412. scripts\build.js:159
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.567Z

#### 413. scripts\build.js:161
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.567Z

#### 414. scripts\build.js:177
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.567Z

#### 415. scripts\build.js:218
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.567Z

#### 416. scripts\build.js:236
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.567Z

#### 417. scripts\build.js:244
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.567Z

#### 418. scripts\build.js:260
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 419. scripts\build.js:275
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 420. scripts\build.js:292
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 421. scripts\build.js:295
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 422. scripts\build.js:300
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 423. scripts\build.js:303
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 424. scripts\build.js:305
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 425. scripts\build.js:309
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 426. scripts\build.js:328
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 427. scripts\build.js:330
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 428. scripts\build.js:349
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 429. scripts\build.js:361
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 430. scripts\build.js:370
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 431. scripts\build.js:371
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 432. scripts\build.js:372
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 433. scripts\build.js:377
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 434. scripts\build.js:378
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 435. scripts\build.js:389
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 436. scripts\build.js:390
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 437. scripts\build.js:391
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 438. scripts\build.js:392
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 439. scripts\build.js:393
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 440. scripts\build.js:397
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 441. scripts\build.js:398
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 442. scripts\build.js:399
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 443. scripts\build.js:400
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 444. scripts\build.js:401
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 445. scripts\build.js:405
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 446. scripts\build.js:406
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 447. scripts\build.js:409
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 448. scripts\build.js:416
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 449. scripts\build.js:417
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 450. scripts\build.js:418
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 451. scripts\build.js:439
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 452. scripts\build.js:448
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 453. scripts\build.js:457
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 454. scripts\build.js:484
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 455. scripts\build.js:515
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 456. scripts\build.js:538
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 457. scripts\build.js:561
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 458. scripts\build.js:582
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 459. scripts\build.js:594
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 460. scripts\build.js:757
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 461. scripts\build.js:767
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 462. scripts\build.js:853
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 463. scripts\build.js:923
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 464. scripts\build.js:963
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 465. scripts\build.js:1092
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 466. scripts\build.js:1096
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 467. scripts\build.js:1103
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 468. scripts\build.js:1110
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 469. scripts\build.js:1172
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 470. scripts\build.js:1197
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 471. scripts\build.js:1216
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 472. scripts\build.js:1244
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 473. scripts\build.js:1323
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 474. scripts\build.js:1366
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 475. scripts\build.js:1377
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 476. scripts\build.js:1439
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 477. scripts\build.js:1468
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 478. scripts\build.js:1472
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 479. scripts\build.js:1532
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 480. scripts\build.js:1597
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 481. scripts\build.js:1788
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 482. scripts\build.js:1826
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 483. scripts\build.js:1838
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 484. scripts\build.js:1918
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 485. scripts\build.js:2014
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 486. scripts\build.js:2015
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 487. scripts\build.js:2136
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 488. scripts\build.js:2137
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 489. scripts\build.js:2143
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 490. scripts\build.js:2144
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 491. scripts\build.js:2145
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 492. scripts\build.js:2165
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 493. scripts\build.js:2169
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 494. scripts\build.js:2179
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.568Z

#### 495. scripts\build.js:2184
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 496. scripts\build.js:2198
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 497. scripts\build.js:2204
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 498. scripts\build.js:2206
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 499. scripts\build.js:2208
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 500. scripts\build.js:2209
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 501. scripts\build.js:2221
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 502. scripts\build.js:2224
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 503. scripts\build.js:2236
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 504. scripts\build.js:2240
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 505. scripts\build.js:2242
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 506. scripts\build.js:2245
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 507. scripts\build.js:2296
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 508. scripts\build.js:2298
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 509. scripts\build.js:2303
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 510. scripts\build.js:2309
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 511. scripts\build.js:2311
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 512. scripts\build.js:2321
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 513. scripts\build.js:2326
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 514. scripts\build.js:2327
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 515. scripts\build.js:2328
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 516. scripts\build.js:2331
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 517. scripts\build.js:2332
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 518. scripts\build.js:2333
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 519. scripts\build.js:2334
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 520. scripts\build.js:2335
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 521. scripts\build.js:2336
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 522. scripts\build.js:2339
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 523. scripts\build.js:2343
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 524. scripts\build.js:2344
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 525. scripts\build.js:2345
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 526. scripts\build.js:2349
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 527. scripts\build.js:2373
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 528. scripts\build.js:2375
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 529. scripts\build.js:2381
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 530. scripts\build.js:2384
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 531. scripts\build.js:2404
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 532. scripts\build.js:2405
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 533. scripts\build.js:2428
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 534. scripts\build.js:2432
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 535. scripts\build.js:2433
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 536. scripts\build.js:2435
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 537. scripts\build.js:2436
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 538. scripts\build.js:2440
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 539. scripts\build.js:2442
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 540. scripts\build.js:2445
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 541. scripts\build.js:2448
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 542. scripts\build.js:2451
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 543. scripts\build.js:2452
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 544. scripts\build.js:2455
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 545. scripts\build.js:2456
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 546. scripts\build.js:2458
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 547. scripts\build.js:2461
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 548. scripts\build.js:2464
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 549. scripts\build.js:2469
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 550. scripts\build.js:2471
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 551. scripts\build.js:2473
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 552. scripts\build.js:2477
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 553. scripts\build.js:2481
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 554. scripts\build.js:2483
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 555. scripts\build.js:2484
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 556. scripts\build.js:2489
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 557. scripts\build.js:2493
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 558. scripts\build.js:2494
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 559. scripts\build.js:2501
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 560. scripts\build.js:2507
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 561. scripts\build.js:2508
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 562. scripts\build.js:2509
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 563. scripts\build.js:2512
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 564. scripts\build.js:2514
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 565. scripts\build.js:2516
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.569Z

#### 566. scripts\build.js:2523
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 567. scripts\build.js:2525
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 568. scripts\build.js:2531
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 569. scripts\build.js:2532
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 570. scripts\build.js:2551
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 571. scripts\build.js:2559
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 572. scripts\build.js:2563
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 573. scripts\build.js:2565
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 574. scripts\build.js:2568
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 575. scripts\build.js:2569
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 576. scripts\build.js:2570
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 577. scripts\build.js:2571
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 578. scripts\build.js:2572
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 579. scripts\build.js:2575
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 580. scripts\build.js:2577
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 581. scripts\build.js:2582
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 582. scripts\build.js:2584
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 583. scripts\build.js:2589
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 584. scripts\build.js:2599
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 585. scripts\build.js:2613
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 586. scripts\build.js:2614
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 587. scripts\build.js:2615
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 588. scripts\build.js:2616
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 589. scripts\build.js:2617
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 590. scripts\build.js:2618
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 591. scripts\build.js:2619
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 592. scripts\build.js:2623
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 593. scripts\build.js:2624
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 594. scripts\build.js:2625
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 595. scripts\build.js:2626
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 596. scripts\build.js:2627
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 597. scripts\build.js:2628
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 598. scripts\build.js:2629
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 599. scripts\build.js:2630
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 600. scripts\build.js:2650
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 601. scripts\build.js:2667
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 602. scripts\build.js:2705
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 603. scripts\build.js:2761
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 604. scripts\build.js:2814
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 605. scripts\build.js:2843
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 606. scripts\build.js:2880
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 607. scripts\build.js:2892
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 608. scripts\build.js:2920
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 609. scripts\build.js:2932
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 610. scripts\build.js:2958
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 611. scripts\build.js:3010
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 612. scripts\build.js:3014
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 613. scripts\build.js:3027
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 614. scripts\build.js:3036
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 615. scripts\build.js:3045
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 616. scripts\build.js:3054
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 617. scripts\build.js:3075
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 618. scripts\build.js:3088
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 619. scripts\build.js:3101
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 620. scripts\build.js:3114
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 621. scripts\build.js:3141
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 622. scripts\build.js:3150
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 623. scripts\build.js:3159
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 624. scripts\build.js:3168
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 625. scripts\build.js:3177
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 626. scripts\build.js:3270
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 627. scripts\build.js:3274
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 628. scripts\build.js:3284
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 629. scripts\build.js:3294
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 630. scripts\build.js:3313
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 631. scripts\build.js:3338
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 632. scripts\build.js:3347
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 633. scripts\build.js:3356
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 634. scripts\build.js:3365
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 635. scripts\build.js:3374
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 636. scripts\build.js:3383
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 637. scripts\build.js:3406
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 638. scripts\build.js:3419
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 639. scripts\build.js:3432
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 640. scripts\build.js:3441
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 641. scripts\build.js:3450
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 642. scripts\build.js:3459
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 643. scripts\build.js:3489
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 644. scripts\build.js:3516
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 645. scripts\build.js:3518
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 646. scripts\build.js:3520
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 647. scripts\build.js:3548
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.570Z

#### 648. scripts\build.js:3697
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 649. scripts\build.js:3698
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 650. scripts\build.js:3699
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 651. scripts\build.js:3705
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 652. scripts\build.js:3706
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 653. scripts\build.js:3707
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 654. scripts\build.js:3709
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 655. scripts\build.js:3719
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 656. scripts\build.js:3724
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 657. scripts\build.js:3728
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 658. scripts\build.js:3732
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 659. scripts\build.js:3736
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 660. scripts\build.js:3742
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 661. scripts\build.js:3743
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 662. scripts\build.js:3746
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 663. scripts\build.js:3750
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 664. scripts\build.js:3753
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 665. scripts\build.js:3766
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 666. scripts\build.js:3778
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 667. scripts\build.js:3781
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 668. scripts\build.js:3784
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 669. scripts\build.js:3787
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 670. scripts\build.js:3791
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 671. scripts\build.js:3792
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 672. scripts\build.js:3798
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 673. scripts\build.js:3800
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 674. scripts\build.js:3804
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 675. scripts\build.js:3808
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 676. scripts\build.js:3816
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 677. scripts\build.js:3820
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 678. scripts\build.js:3826
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 679. scripts\build.js:3831
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 680. scripts\build.js:3834
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 681. scripts\build.js:3836
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 682. scripts\build.js:3840
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 683. scripts\build.js:3841
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 684. scripts\build.js:3842
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 685. scripts\build.js:3844
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 686. scripts\build.js:3853
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 687. scripts\build.js:3858
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 688. scripts\build.js:3859
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 689. scripts\build.js:3860
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 690. scripts\build.js:3861
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 691. scripts\build.js:3875
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 692. scripts\build.js:3877
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 693. scripts\build.js:3887
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 694. scripts\build.js:3890
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 695. scripts\build.js:3893
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 696. scripts\build.js:3894
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 697. scripts\build.js:3901
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 698. scripts\build.js:3907
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 699. scripts\build.js:3908
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 700. scripts\build.js:3909
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 701. scripts\build.js:3912
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 702. scripts\build.js:3914
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 703. scripts\build.js:3916
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 704. scripts\build.js:3923
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 705. scripts\build.js:3925
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 706. scripts\build.js:3930
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 707. scripts\build.js:3931
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 708. scripts\build.js:3932
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 709. scripts\build.js:3933
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 710. scripts\build.js:3934
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 711. scripts\build.js:3939
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 712. scripts\build.js:3940
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 713. scripts\build.js:3971
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 714. scripts\build.js:3974
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 715. scripts\build.js:3975
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 716. scripts\build.js:3976
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 717. scripts\build.js:3977
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 718. scripts\build.js:3978
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 719. scripts\build.js:3979
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 720. scripts\build.js:3982
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 721. scripts\build.js:3983
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 722. scripts\build.js:3984
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 723. scripts\build.js:3985
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 724. scripts\build.js:3986
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 725. scripts\build.js:3987
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 726. scripts\build.js:3988
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 727. scripts\build.js:3990
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 728. scripts\build.js:3992
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 729. scripts\build.js:3995
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 730. scripts\build.js:3996
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 731. scripts\build.js:3997
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 732. scripts\build.js:3998
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 733. scripts\build.js:4000
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 734. scripts\build.js:4001
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 735. scripts\build.js:4002
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 736. scripts\build.js:4003
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 737. scripts\build.js:4005
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 738. scripts\build.js:4006
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 739. scripts\build.js:4007
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 740. scripts\build.js:4008
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 741. scripts\build.js:4009
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 742. scripts\build.js:4010
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 743. scripts\build.js:4012
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 744. scripts\build.js:4013
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 745. scripts\build.js:4014
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 746. scripts\build.js:4015
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 747. scripts\build.js:4018
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 748. scripts\build.js:4019
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 749. scripts\build.js:4020
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 750. scripts\build.js:4031
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 751. scripts\build.js:4050
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 752. scripts\build.js:4086
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 753. scripts\build.js:4106
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 754. scripts\build.js:4134
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 755. scripts\build.js:4176
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 756. scripts\build.js:4219
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 757. scripts\build.js:4261
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 758. scripts\build.js:4266
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 759. scripts\build.js:4271
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 760. scripts\build.js:4277
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 761. scripts\build.js:4280
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 762. scripts\build.js:4295
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 763. scripts\build.js:4298
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 764. scripts\build.js:4302
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 765. scripts\build.js:4307
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 766. scripts\build.js:4311
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 767. scripts\build.js:4312
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 768. scripts\build.js:4318
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 769. scripts\build.js:4319
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 770. scripts\build.js:4327
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 771. scripts\build.js:4328
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 772. scripts\build.js:4338
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 773. scripts\build.js:4345
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 774. scripts\build.js:4347
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 775. scripts\build.js:4413
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 776. scripts\build.js:4414
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 777. scripts\build.js:4419
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 778. scripts\build.js:4421
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 779. scripts\build.js:4424
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 780. scripts\build.js:4428
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.572Z

#### 781. scripts\direct-checker-test.js:9
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 782. scripts\direct-checker-test.js:15
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 783. scripts\direct-checker-test.js:16
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 784. scripts\direct-checker-test.js:19
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 785. scripts\direct-checker-test.js:22
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 786. scripts\direct-checker-test.js:24
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 787. scripts\direct-checker-test.js:25
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 788. scripts\direct-checker-test.js:28
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 789. scripts\direct-checker-test.js:32
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 790. scripts\direct-checker-test.js:37
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 791. scripts\direct-checker-test.js:61
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 792. scripts\direct-checker-test.js:84
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 793. scripts\direct-checker-test.js:86
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 794. scripts\direct-checker-test.js:87
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 795. scripts\direct-checker-test.js:88
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 796. scripts\direct-checker-test.js:91
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 797. scripts\direct-checker-test.js:96
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 798. scripts\direct-checker-test.js:99
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 799. scripts\direct-checker-test.js:100
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 800. scripts\direct-checker-test.js:102
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 801. scripts\direct-checker-test.js:105
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 802. scripts\log-manager.js:45
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 803. scripts\log-manager.js:61
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 804. scripts\log-manager.js:68
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 805. scripts\log-manager.js:83
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 806. scripts\log-manager.js:91
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 807. scripts\log-manager.js:116
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 808. scripts\log-manager.js:144
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 809. scripts\log-manager.js:158
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 810. scripts\log-manager.js:174
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 811. scripts\log-manager.js:177
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 812. scripts\log-manager.js:185
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 813. scripts\log-manager.js:204
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 814. scripts\log-manager.js:209
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 815. scripts\log-manager.js:228
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 816. scripts\log-manager.js:235
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 817. scripts\log-manager.js:264
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 818. scripts\log-manager.js:265
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 819. scripts\log-manager.js:266
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 820. scripts\log-manager.js:267
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 821. scripts\simplified-checker.js:8
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 822. scripts\simplified-checker.js:15
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 823. scripts\simplified-checker.js:20
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 824. scripts\simplified-checker.js:25
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 825. scripts\simplified-checker.js:49
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 826. scripts\simplified-checker.js:72
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 827. scripts\simplified-checker.js:74
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 828. scripts\simplified-checker.js:75
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 829. scripts\simplified-checker.js:76
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 830. scripts\simplified-checker.js:80
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 831. scripts\simplified-checker.js:84
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 832. scripts\simplified-checker.js:87
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 833. scripts\simplified-checker.js:88
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 834. scripts\simplified-checker.js:90
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 835. scripts\simplified-checker.js:93
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-03T14:00:58.573Z

#### 836. style.css:170
**Severity:** WARNING  
**Message:** Missing semicolon in CSS property  
**Timestamp:** 2025-07-03T14:00:58.573Z

### 📁 Problems gruppiert nach Datei

#### app-gui\dist-electron\index-Ckhtba7t.js (30 Problem(e))
- **Zeile 40:** ⚠️ Missing semicolon
- **Zeile 1943:** ⚠️ Missing semicolon
- **Zeile 2327:** ⚠️ Missing semicolon
- **Zeile 2713:** ⚠️ Missing semicolon
- **Zeile 2741:** ⚠️ Missing semicolon
- **Zeile 3562:** ⚠️ Missing semicolon
- **Zeile 3599:** ⚠️ Missing semicolon
- **Zeile 4316:** ⚠️ Missing semicolon
- **Zeile 5013:** ⚠️ Missing semicolon
- **Zeile 5406:** ⚠️ Missing semicolon
- **Zeile 6202:** ⚠️ Missing semicolon
- **Zeile 6587:** ⚠️ Missing semicolon
- **Zeile 6720:** ⚠️ Missing semicolon
- **Zeile 6743:** ⚠️ Missing semicolon
- **Zeile 6803:** ⚠️ Missing semicolon
- **Zeile 6895:** ⚠️ Missing semicolon
- **Zeile 6923:** ⚠️ Missing semicolon
- **Zeile 6954:** ⚠️ Missing semicolon
- **Zeile 7029:** ⚠️ Missing semicolon
- **Zeile 7054:** ⚠️ Missing semicolon
- **Zeile 7099:** ⚠️ Missing semicolon
- **Zeile 7531:** ⚠️ Missing semicolon
- **Zeile 7585:** ⚠️ Missing semicolon
- **Zeile 7983:** ⚠️ Missing semicolon
- **Zeile 8071:** ⚠️ Missing semicolon
- **Zeile 8075:** ⚠️ Missing semicolon
- **Zeile 8112:** ⚠️ Missing semicolon
- **Zeile 8493:** ⚠️ Missing semicolon
- **Zeile 9746:** ⚠️ Missing semicolon
- **Zeile 9945:** ⚠️ Console.log statement found - consider removing in production

#### app-gui\dist-electron\index-DhEd7u67.js (30 Problem(e))
- **Zeile 40:** ⚠️ Missing semicolon
- **Zeile 1950:** ⚠️ Missing semicolon
- **Zeile 2360:** ⚠️ Missing semicolon
- **Zeile 2762:** ⚠️ Missing semicolon
- **Zeile 2790:** ⚠️ Missing semicolon
- **Zeile 3618:** ⚠️ Missing semicolon
- **Zeile 3655:** ⚠️ Missing semicolon
- **Zeile 4372:** ⚠️ Missing semicolon
- **Zeile 5069:** ⚠️ Missing semicolon
- **Zeile 5462:** ⚠️ Missing semicolon
- **Zeile 6258:** ⚠️ Missing semicolon
- **Zeile 6643:** ⚠️ Missing semicolon
- **Zeile 6776:** ⚠️ Missing semicolon
- **Zeile 6799:** ⚠️ Missing semicolon
- **Zeile 6859:** ⚠️ Missing semicolon
- **Zeile 6951:** ⚠️ Missing semicolon
- **Zeile 6979:** ⚠️ Missing semicolon
- **Zeile 7010:** ⚠️ Missing semicolon
- **Zeile 7085:** ⚠️ Missing semicolon
- **Zeile 7110:** ⚠️ Missing semicolon
- **Zeile 7155:** ⚠️ Missing semicolon
- **Zeile 7587:** ⚠️ Missing semicolon
- **Zeile 7641:** ⚠️ Missing semicolon
- **Zeile 8039:** ⚠️ Missing semicolon
- **Zeile 8127:** ⚠️ Missing semicolon
- **Zeile 8131:** ⚠️ Missing semicolon
- **Zeile 8168:** ⚠️ Missing semicolon
- **Zeile 8549:** ⚠️ Missing semicolon
- **Zeile 9802:** ⚠️ Missing semicolon
- **Zeile 10001:** ⚠️ Console.log statement found - consider removing in production

#### app-gui\src\App.jsx (3 Problem(e))
- **Zeile 4:** ⚠️ Missing semicolon
- **Zeile 72:** ⚠️ Missing semicolon
- **Zeile 99:** ⚠️ Missing semicolon

#### build-process\mainBuild.js (15 Problem(e))
- **Zeile 52:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 64:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 98:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 102:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 104:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 110:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 112:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 116:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 123:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 145:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 147:** ⚠️ Missing semicolon
- **Zeile 174:** ⚠️ Missing semicolon
- **Zeile 205:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 231:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 254:** ⚠️ Console.log statement found - consider removing in production

#### build-process\modules\contentOptimizer.js (5 Problem(e))
- **Zeile 53:** ⚠️ Missing semicolon
- **Zeile 66:** ⚠️ Missing semicolon
- **Zeile 111:** ⚠️ Missing semicolon
- **Zeile 157:** ⚠️ Missing semicolon
- **Zeile 338:** ⚠️ Missing semicolon

#### build-process\modules\fileUtils.js (5 Problem(e))
- **Zeile 22:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 45:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 90:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 151:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 174:** ⚠️ Console.log statement found - consider removing in production

#### build-process\modules\logger.js (7 Problem(e))
- **Zeile 17:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 34:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 62:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 145:** 🚨 Typo: "fucntion" should be "function"
- **Zeile 146:** 🚨 Typo: "fucntion" should be "function"
- **Zeile 243:** ⚠️ Missing semicolon
- **Zeile 276:** ⚠️ Console.log statement found - consider removing in production

#### build-process\modules\seoCheck.js (10 Problem(e))
- **Zeile 20:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 94:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 96:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 109:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 248:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 335:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 406:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 423:** ⚠️ Missing semicolon
- **Zeile 505:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 513:** ⚠️ Missing semicolon

#### scripts\advanced-content-validator.js (36 Problem(e))
- **Zeile 17:** ⚠️ Missing semicolon
- **Zeile 32:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 34:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 50:** ⚠️ Missing semicolon
- **Zeile 107:** ⚠️ Missing semicolon
- **Zeile 132:** ⚠️ Missing semicolon
- **Zeile 220:** ⚠️ Missing semicolon
- **Zeile 257:** ⚠️ Missing semicolon
- **Zeile 264:** ⚠️ Missing semicolon
- **Zeile 275:** ⚠️ Missing semicolon
- **Zeile 319:** ⚠️ Missing semicolon
- **Zeile 369:** ⚠️ Missing semicolon
- **Zeile 402:** ⚠️ Missing semicolon
- **Zeile 411:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 412:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 418:** ⚠️ Missing semicolon
- **Zeile 427:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 467:** ⚠️ Missing semicolon
- **Zeile 517:** ⚠️ Missing semicolon
- **Zeile 525:** ⚠️ Missing semicolon
- **Zeile 560:** ⚠️ Missing semicolon
- **Zeile 588:** ⚠️ Missing semicolon
- **Zeile 596:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 599:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 603:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 605:** ⚠️ Missing semicolon
- **Zeile 607:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 608:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 611:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 693:** ⚠️ Missing semicolon
- **Zeile 700:** ⚠️ Missing semicolon
- **Zeile 705:** ⚠️ Missing semicolon
- **Zeile 798:** ⚠️ Missing semicolon
- **Zeile 807:** ⚠️ Missing semicolon
- **Zeile 830:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 853:** ⚠️ Console.log statement found - consider removing in production

#### scripts\build-checks\check_scripts\advanced-content-validator.js (26 Problem(e))
- **Zeile 17:** ⚠️ Missing semicolon
- **Zeile 32:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 34:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 50:** ⚠️ Missing semicolon
- **Zeile 118:** ⚠️ Missing semicolon
- **Zeile 143:** ⚠️ Missing semicolon
- **Zeile 217:** ⚠️ Missing semicolon
- **Zeile 247:** ⚠️ Missing semicolon
- **Zeile 297:** ⚠️ Missing semicolon
- **Zeile 330:** ⚠️ Missing semicolon
- **Zeile 339:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 340:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 346:** ⚠️ Missing semicolon
- **Zeile 355:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 395:** ⚠️ Missing semicolon
- **Zeile 445:** ⚠️ Missing semicolon
- **Zeile 453:** ⚠️ Missing semicolon
- **Zeile 488:** ⚠️ Missing semicolon
- **Zeile 516:** ⚠️ Missing semicolon
- **Zeile 602:** ⚠️ Missing semicolon
- **Zeile 609:** ⚠️ Missing semicolon
- **Zeile 614:** ⚠️ Missing semicolon
- **Zeile 707:** ⚠️ Missing semicolon
- **Zeile 716:** ⚠️ Missing semicolon
- **Zeile 739:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 762:** ⚠️ Console.log statement found - consider removing in production

#### scripts\build-checks\check_scripts\checklist-cli.js (56 Problem(e))
- **Zeile 14:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 15:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 20:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 21:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 24:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 28:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 33:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 34:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 35:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 42:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 50:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 52:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 53:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 64:** ⚠️ Missing semicolon
- **Zeile 69:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 72:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 79:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 84:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 89:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 93:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 94:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 96:** ⚠️ Missing semicolon
- **Zeile 113:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 115:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 116:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 118:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 126:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 131:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 132:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 136:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 137:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 141:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 143:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 145:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 149:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 151:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 156:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 158:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 164:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 166:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 172:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 173:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 174:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 175:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 176:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 177:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 178:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 179:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 180:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 181:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 182:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 183:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 184:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 185:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 217:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 218:** ⚠️ Console.log statement found - consider removing in production

#### scripts\build-checks\check_scripts\comprehensiveCheck.js (8 Problem(e))
- **Zeile 19:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 38:** ⚠️ Missing semicolon
- **Zeile 66:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 67:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 70:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 162:** ⚠️ Missing semicolon
- **Zeile 213:** ⚠️ Missing semicolon
- **Zeile 250:** ⚠️ Missing semicolon

#### scripts\build-checks\check_scripts\keyword-cleanup.js (8 Problem(e))
- **Zeile 38:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 40:** ⚠️ Missing semicolon
- **Zeile 58:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 64:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 67:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 71:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 72:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 73:** ⚠️ Console.log statement found - consider removing in production

#### scripts\build-checks\check_scripts\lighthouse-issue-fixer.js (29 Problem(e))
- **Zeile 77:** ⚠️ Missing semicolon
- **Zeile 100:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 113:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 118:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 208:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 217:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 260:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 271:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 319:** ⚠️ Missing semicolon
- **Zeile 346:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 353:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 384:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 394:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 401:** ⚠️ Missing semicolon
- **Zeile 425:** ⚠️ Missing semicolon
- **Zeile 437:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 441:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 464:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 466:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 470:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 494:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 504:** ⚠️ Missing semicolon
- **Zeile 549:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 553:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 556:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 561:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 562:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 563:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 578:** ⚠️ Console.log statement found - consider removing in production

#### scripts\build-checks\check_scripts\lighthouse-ready-checker.js (28 Problem(e))
- **Zeile 84:** ⚠️ Missing semicolon
- **Zeile 96:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 98:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 103:** ⚠️ Missing semicolon
- **Zeile 129:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 159:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 186:** ⚠️ Missing semicolon
- **Zeile 219:** ⚠️ Missing semicolon
- **Zeile 261:** ⚠️ Missing semicolon
- **Zeile 477:** ⚠️ Missing semicolon
- **Zeile 495:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 501:** ⚠️ Missing semicolon
- **Zeile 531:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 543:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 551:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 556:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 569:** ⚠️ Missing semicolon
- **Zeile 587:** ⚠️ Missing semicolon
- **Zeile 592:** ⚠️ Missing semicolon
- **Zeile 660:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 664:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 667:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 671:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 672:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 678:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 683:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 684:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 699:** ⚠️ Console.log statement found - consider removing in production

#### scripts\build-checks\check_scripts\masterBuildChecker.js (15 Problem(e))
- **Zeile 19:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 91:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 92:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 93:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 94:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 95:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 100:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 103:** ⚠️ Missing semicolon
- **Zeile 132:** ⚠️ Missing semicolon
- **Zeile 256:** ⚠️ Missing semicolon
- **Zeile 389:** ⚠️ Missing semicolon
- **Zeile 437:** ⚠️ Missing semicolon
- **Zeile 486:** ⚠️ Missing semicolon
- **Zeile 515:** ⚠️ Missing semicolon
- **Zeile 577:** ⚠️ Console.log statement found - consider removing in production

#### scripts\build-checks\check_scripts\memory-optimized-checker.js (23 Problem(e))
- **Zeile 70:** ⚠️ Missing semicolon
- **Zeile 82:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 84:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 89:** ⚠️ Missing semicolon
- **Zeile 107:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 137:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 148:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 160:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 168:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 173:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 195:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 272:** ⚠️ Missing semicolon
- **Zeile 280:** ⚠️ Missing semicolon
- **Zeile 285:** ⚠️ Missing semicolon
- **Zeile 313:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 317:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 320:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 324:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 325:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 331:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 336:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 337:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 351:** ⚠️ Console.log statement found - consider removing in production

#### scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js (62 Problem(e))
- **Zeile 62:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 63:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 66:** ⚠️ Missing semicolon
- **Zeile 70:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 71:** ⚠️ Missing semicolon
- **Zeile 78:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 81:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 86:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 92:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 98:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 112:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 150:** ⚠️ Missing semicolon
- **Zeile 162:** ⚠️ Missing semicolon
- **Zeile 189:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 202:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 212:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 216:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 217:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 218:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 229:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 233:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 243:** ⚠️ Missing semicolon
- **Zeile 268:** ⚠️ Missing semicolon
- **Zeile 292:** ⚠️ Missing semicolon
- **Zeile 348:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 357:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 365:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 368:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 369:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 370:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 371:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 386:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 409:** ⚠️ Missing semicolon
- **Zeile 433:** ⚠️ Missing semicolon
- **Zeile 444:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 445:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 446:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 448:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 449:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 450:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 453:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 454:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 455:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 456:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 464:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 469:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 474:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 477:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 481:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 485:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 487:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 489:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 491:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 493:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 526:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 546:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 550:** ⚠️ Missing semicolon
- **Zeile 569:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 580:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 584:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 586:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 589:** ⚠️ Console.log statement found - consider removing in production

#### scripts\build.js (388 Problem(e))
- **Zeile 17:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 20:** ⚠️ Missing semicolon
- **Zeile 21:** ⚠️ Missing semicolon
- **Zeile 24:** ⚠️ Missing semicolon
- **Zeile 34:** ⚠️ Missing semicolon
- **Zeile 40:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 92:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 104:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 119:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 122:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 124:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 135:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 137:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 140:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 147:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 149:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 152:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 159:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 161:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 177:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 218:** ⚠️ Missing semicolon
- **Zeile 236:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 244:** ⚠️ Missing semicolon
- **Zeile 260:** ⚠️ Missing semicolon
- **Zeile 275:** ⚠️ Missing semicolon
- **Zeile 292:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 295:** ⚠️ Missing semicolon
- **Zeile 300:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 303:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 305:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 309:** ⚠️ Missing semicolon
- **Zeile 328:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 330:** ⚠️ Missing semicolon
- **Zeile 349:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 361:** ⚠️ Missing semicolon
- **Zeile 370:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 371:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 372:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 377:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 378:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 389:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 390:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 391:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 392:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 393:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 397:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 398:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 399:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 400:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 401:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 405:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 406:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 409:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 416:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 417:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 418:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 439:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 448:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 457:** ⚠️ Missing semicolon
- **Zeile 484:** ⚠️ Missing semicolon
- **Zeile 515:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 538:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 561:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 582:** ⚠️ Missing semicolon
- **Zeile 594:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 709:** 🚨 Typo: "fucntion" should be "function"
- **Zeile 710:** 🚨 Typo: "fucntion" should be "function"
- **Zeile 757:** ⚠️ Missing semicolon
- **Zeile 767:** ⚠️ Missing semicolon
- **Zeile 853:** ⚠️ Missing semicolon
- **Zeile 923:** ⚠️ Missing semicolon
- **Zeile 963:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 1092:** ⚠️ Missing semicolon
- **Zeile 1096:** ⚠️ Missing semicolon
- **Zeile 1103:** ⚠️ Missing semicolon
- **Zeile 1110:** ⚠️ Missing semicolon
- **Zeile 1172:** ⚠️ Missing semicolon
- **Zeile 1197:** ⚠️ Missing semicolon
- **Zeile 1216:** ⚠️ Missing semicolon
- **Zeile 1244:** ⚠️ Missing semicolon
- **Zeile 1323:** ⚠️ Missing semicolon
- **Zeile 1366:** ⚠️ Missing semicolon
- **Zeile 1377:** ⚠️ Missing semicolon
- **Zeile 1439:** ⚠️ Missing semicolon
- **Zeile 1468:** ⚠️ Missing semicolon
- **Zeile 1472:** ⚠️ Missing semicolon
- **Zeile 1532:** ⚠️ Missing semicolon
- **Zeile 1597:** ⚠️ Missing semicolon
- **Zeile 1788:** ⚠️ Missing semicolon
- **Zeile 1826:** ⚠️ Missing semicolon
- **Zeile 1838:** ⚠️ Missing semicolon
- **Zeile 1918:** ⚠️ Missing semicolon
- **Zeile 2014:** ⚠️ Missing semicolon
- **Zeile 2015:** ⚠️ Missing semicolon
- **Zeile 2136:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2137:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2143:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2144:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2145:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2165:** ⚠️ Missing semicolon
- **Zeile 2169:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2179:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2184:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2198:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2204:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2206:** ⚠️ Missing semicolon
- **Zeile 2208:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2209:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2221:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2224:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2236:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2240:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2242:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2245:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2296:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2298:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2303:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2309:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2311:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2321:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2326:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2327:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2328:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2331:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2332:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2333:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2334:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2335:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2336:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2339:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2343:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2344:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2345:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2349:** ⚠️ Missing semicolon
- **Zeile 2373:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2375:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2381:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2384:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2404:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2405:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2428:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2432:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2433:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2435:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2436:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2440:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2442:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2445:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2448:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2451:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2452:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2455:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2456:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2458:** ⚠️ Missing semicolon
- **Zeile 2461:** ⚠️ Missing semicolon
- **Zeile 2464:** ⚠️ Missing semicolon
- **Zeile 2469:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2471:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2473:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2477:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2481:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2483:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2484:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2489:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2493:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2494:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2501:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2507:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2508:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2509:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2512:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2514:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2516:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2523:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2525:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2531:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2532:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2551:** ⚠️ Missing semicolon
- **Zeile 2559:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2563:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2565:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2568:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2569:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2570:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2571:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2572:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2575:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2577:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2582:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2584:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2589:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2599:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2613:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2614:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2615:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2616:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2617:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2618:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2619:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2623:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2624:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2625:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2626:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2627:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2628:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2629:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2630:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2650:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2667:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2705:** ⚠️ Missing semicolon
- **Zeile 2761:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2814:** ⚠️ Missing semicolon
- **Zeile 2843:** ⚠️ Missing semicolon
- **Zeile 2880:** ⚠️ Missing semicolon
- **Zeile 2892:** ⚠️ Missing semicolon
- **Zeile 2920:** ⚠️ Missing semicolon
- **Zeile 2932:** ⚠️ Missing semicolon
- **Zeile 2958:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3010:** ⚠️ Missing semicolon
- **Zeile 3014:** ⚠️ Missing semicolon
- **Zeile 3027:** ⚠️ Missing semicolon
- **Zeile 3036:** ⚠️ Missing semicolon
- **Zeile 3045:** ⚠️ Missing semicolon
- **Zeile 3054:** ⚠️ Missing semicolon
- **Zeile 3075:** ⚠️ Missing semicolon
- **Zeile 3088:** ⚠️ Missing semicolon
- **Zeile 3101:** ⚠️ Missing semicolon
- **Zeile 3114:** ⚠️ Missing semicolon
- **Zeile 3141:** ⚠️ Missing semicolon
- **Zeile 3150:** ⚠️ Missing semicolon
- **Zeile 3159:** ⚠️ Missing semicolon
- **Zeile 3168:** ⚠️ Missing semicolon
- **Zeile 3177:** ⚠️ Missing semicolon
- **Zeile 3270:** ⚠️ Missing semicolon
- **Zeile 3274:** ⚠️ Missing semicolon
- **Zeile 3284:** ⚠️ Missing semicolon
- **Zeile 3294:** ⚠️ Missing semicolon
- **Zeile 3313:** ⚠️ Missing semicolon
- **Zeile 3338:** ⚠️ Missing semicolon
- **Zeile 3347:** ⚠️ Missing semicolon
- **Zeile 3356:** ⚠️ Missing semicolon
- **Zeile 3365:** ⚠️ Missing semicolon
- **Zeile 3374:** ⚠️ Missing semicolon
- **Zeile 3383:** ⚠️ Missing semicolon
- **Zeile 3406:** ⚠️ Missing semicolon
- **Zeile 3419:** ⚠️ Missing semicolon
- **Zeile 3432:** ⚠️ Missing semicolon
- **Zeile 3441:** ⚠️ Missing semicolon
- **Zeile 3450:** ⚠️ Missing semicolon
- **Zeile 3459:** ⚠️ Missing semicolon
- **Zeile 3489:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3516:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3518:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3520:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3548:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3697:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3698:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3699:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3705:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3706:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3707:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3709:** ⚠️ Missing semicolon
- **Zeile 3719:** ⚠️ Missing semicolon
- **Zeile 3724:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3728:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3732:** ⚠️ Missing semicolon
- **Zeile 3736:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3742:** ⚠️ Missing semicolon
- **Zeile 3743:** ⚠️ Missing semicolon
- **Zeile 3746:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3750:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3753:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3766:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3778:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3781:** ⚠️ Missing semicolon
- **Zeile 3784:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3787:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3791:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3792:** ⚠️ Missing semicolon
- **Zeile 3798:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3800:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3804:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3808:** ⚠️ Missing semicolon
- **Zeile 3816:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3820:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3826:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3831:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3834:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3836:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3840:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3841:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3842:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3844:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3853:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3858:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3859:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3860:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3861:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3875:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3877:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3887:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3890:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3893:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3894:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3901:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3907:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3908:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3909:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3912:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3914:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3916:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3923:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3925:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3930:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3931:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3932:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3933:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3934:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3939:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3940:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3971:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3974:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3975:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3976:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3977:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3978:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3979:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3982:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3983:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3984:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3985:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3986:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3987:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3988:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3990:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3992:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3995:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3996:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3997:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3998:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4000:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4001:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4002:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4003:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4005:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4006:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4007:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4008:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4009:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4010:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4012:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4013:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4014:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4015:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4018:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4019:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4020:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4031:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4050:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4086:** ⚠️ Missing semicolon
- **Zeile 4106:** ⚠️ Missing semicolon
- **Zeile 4134:** ⚠️ Missing semicolon
- **Zeile 4176:** ⚠️ Missing semicolon
- **Zeile 4219:** ⚠️ Missing semicolon
- **Zeile 4261:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4266:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4271:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4277:** ⚠️ Missing semicolon
- **Zeile 4280:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4295:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4298:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4302:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4307:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4311:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4312:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4318:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4319:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4327:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4328:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4338:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4345:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4347:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4413:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4414:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4419:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4421:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4424:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4428:** ⚠️ Console.log statement found - consider removing in production

#### scripts\direct-checker-test.js (21 Problem(e))
- **Zeile 9:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 15:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 16:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 19:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 22:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 24:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 25:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 28:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 32:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 37:** ⚠️ Missing semicolon
- **Zeile 61:** ⚠️ Missing semicolon
- **Zeile 84:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 86:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 87:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 88:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 91:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 96:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 99:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 100:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 102:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 105:** ⚠️ Console.log statement found - consider removing in production

#### scripts\log-manager.js (19 Problem(e))
- **Zeile 45:** ⚠️ Missing semicolon
- **Zeile 61:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 68:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 83:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 91:** ⚠️ Missing semicolon
- **Zeile 116:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 144:** ⚠️ Missing semicolon
- **Zeile 158:** ⚠️ Missing semicolon
- **Zeile 174:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 177:** ⚠️ Missing semicolon
- **Zeile 185:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 204:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 209:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 228:** ⚠️ Missing semicolon
- **Zeile 235:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 264:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 265:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 266:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 267:** ⚠️ Console.log statement found - consider removing in production

#### scripts\simplified-checker.js (15 Problem(e))
- **Zeile 8:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 15:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 20:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 25:** ⚠️ Missing semicolon
- **Zeile 49:** ⚠️ Missing semicolon
- **Zeile 72:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 74:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 75:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 76:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 80:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 84:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 87:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 88:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 90:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 93:** ⚠️ Console.log statement found - consider removing in production

#### style.css (1 Problem(e))
- **Zeile 170:** ⚠️ Missing semicolon in CSS property



## Raw-Output für Debugging

```
[LOG] [34m🚀 STARTE INTELLIGENT BUILD PROCESS...[39m
[LOG] [34mNeue Intention-Validation aktiv![39m
[LOG] [35m[39m
[35m▶️ Führe Check-Skript aus: advanced-content-validator.js[39m
[LOG] [32m✅ advanced-content-validator.js erfolgreich ausgeführt[39m
[LOG] [35m[39m
[35m▶️ Führe Check-Skript aus: checklist-cli.js[39m
[LOG] [32m✅ checklist-cli.js erfolgreich ausgeführt[39m
[LOG] [90m📋 checklist-cli.js Output: 📋 Loaded 12 advanced checklists[39m
[90m🧠 ADVANCED CHECKLIST ROTATION CLI[39m
[90m================================================================================[39m
[90mAvailable commands:[39m
[90m  status              Show current rotation state and recommendations[39m
[90m  reset               Reset rotation for all files[39m
[90m  reset <file1,file2> Reset rotation for specific files[39m
[90m  simulate            Simulate next rotation assignments[39m
[90m  evaluate <filename> Evaluate specific file with current rotation[39m
[90m  help                Show this help message[39m
[90m[39m
[90mExamples:[39m
[90m  node scripts/checklist-cli.js status[39m
[90m  node scripts/checklist-cli.js reset das-erste-mal.md,bindungssehnsucht-normal.md[39m
[90m  node scripts/checklist-cli.js evaluate das-erste-mal.md[39m
[LOG] [35m[39m
[35m▶️ Führe Check-Skript aus: comprehensiveCheck.js[39m
[LOG] [32m✅ comprehensiveCheck.js erfolgreich ausgeführt[39m
[LOG] [35m[39m
[35m▶️ Führe Check-Skript aus: keyword-cleanup.js[39m
[LOG] [32m✅ keyword-cleanup.js erfolgreich ausgeführt[39m
[LOG] [90m📋 keyword-cleanup.js Output: 🔧 STARTE KEYWORD CLEANUP - Schweizerdeutsch → Hochdeutsch...[39m
[90m[39m
[90m📄 bindungssehnsucht-normal.md: Keine schweizerdeutschen Keywords gefunden[39m
[90m[39m
[90m📄 das-erste-mal.md: Keine schweizerdeutschen Keywords gefunden[39m
[90m[39m
[90m📄 der-sichere-hafen.md: Keine schweizerdeutschen Keywords gefunden[39m
[90m[39m
[90m📄 emotionale-leere.md: Keine schweizerdeutschen Keywords gefunden[39m
[90m[39m
[90m📄 erschoepft-vom-stark-sein.md: Keine schweizerdeutschen Keywords gefunden[39m
[90m[39m
[90m📄 ich-will-einfach-gehalten-werden.md: Keine schweizerdeutschen Keywords gefunden[39m
[90m[39m
[90m📄 kontrolle-abgeben.md: Keine schweizerdeutschen Keywords gefunden[39m
[90m[39m
[90m📄 README.md: Keine schweizerdeutschen Keywords gefunden[39m
[90m[39m
[90m📄 sehnsucht-nach-hingabe.md: Keine schweizerdeutschen Keywords gefunden[39m
[90m[39m
[90m📄 zu-viel-liebe-zu-wenig-liebe.md: Keine schweizerdeutschen Keywords gefunden[39m
[90m[39m
[90m✅ CLEANUP ABGESCHLOSSEN: 0 Keywords ersetzt[39m
[90m💡 Hochdeutsche Longtails haben bessere SEO-Performance[39m
[90m🎯 Empfehlung: pnpm build ausführen für Update[39m
[LOG] [35m[39m
[35m▶️ Führe Check-Skript aus: lighthouse-issue-fixer.js[39m
[LOG] [32m✅ lighthouse-issue-fixer.js erfolgreich ausgeführt[39m
[LOG] [90m📋 lighthouse-issue-fixer.js Output: [36m🔧 Starte Lighthouse Issue Fixer...[0m[39m
[90m[1m[36m[39m
[90m🔧 LIGHTHOUSE ISSUE FIXER GESTARTET[39m
[90m[0m[0m[39m
[90m[32m📝 Fix-Logfile: LIGHTHOUSE_FIXES_2025-07-03T14-00-48.log[0m[39m
[90m[34m[39m
[90m🔍 Scanne Dateien nach Lighthouse-Issues...[39m
[90m[0m[39m
[90m[34m📂 Gefunden: 65 Dateien für Lighthouse-Fixes[0m[39m
[90m[36m🔧 Repariere: index.html[0m[39m
[90m[90m✓ index.html: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: bindungssehnsucht-normal.html[0m[39m
[90m[90m💾 Backup erstellt: bindungssehnsucht-normal.html_BACKUP_2025-07-03T14-00-48[0m[39m
[90m[32m✅ JSON-LD repariert: bindungssehnsucht-normal.html (1 Fixes)[0m[39m
[90m[1m[32m✅ bindungssehnsucht-normal.html: 1 Issues behoben[0m[0m[39m
[90m[36m🔧 Repariere: das-erste-mal.html[0m[39m
[90m[90m💾 Backup erstellt: das-erste-mal.html_BACKUP_2025-07-03T14-00-48[0m[39m
[90m[32m✅ JSON-LD repariert: das-erste-mal.html (1 Fixes)[0m[39m
[90m[1m[32m✅ das-erste-mal.html: 1 Issues behoben[0m[0m[39m
[90m[36m🔧 Repariere: der-sichere-hafen.html[0m[39m
[90m[90m💾 Backup erstellt: der-sichere-hafen.html_BACKUP_2025-07-03T14-00-48[0m[39m
[90m[32m✅ JSON-LD repariert: der-sichere-hafen.html (1 Fixes)[0m[39m
[90m[1m[32m✅ der-sichere-hafen.html: 1 Issues behoben[0m[0m[39m
[90m[36m🔧 Repariere: emotionale-leere.html[0m[39m
[90m[90m💾 Backup erstellt: emotionale-leere.html_BACKUP_2025-07-03T14-00-48[0m[39m
[90m[32m✅ JSON-LD repariert: emotionale-leere.html (1 Fixes)[0m[39m
[90m[1m[32m✅ emotionale-leere.html: 1 Issues behoben[0m[0m[39m
[90m[36m🔧 Repariere: bindungssehnsucht-normal.md[0m[39m
[90m[90m✓ bindungssehnsucht-normal.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: das-erste-mal.md[0m[39m
[90m[90m✓ das-erste-mal.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: der-sichere-hafen.md[0m[39m
[90m[90m✓ der-sichere-hafen.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: emotionale-leere.md[0m[39m
[90m[90m✓ emotionale-leere.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: erschoepft-vom-stark-sein.md[0m[39m
[90m[90m💾 Backup erstellt: erschoepft-vom-stark-sein.md_BACKUP_2025-07-03T14-00-48[0m[39m
[90m[32m✅ Content erweitert: erschoepft-vom-stark-sein.md (+89 Wörter)[0m[39m
[90m[1m[32m✅ erschoepft-vom-stark-sein.md: 1 Issues behoben[0m[0m[39m
[90m[36m🔧 Repariere: ich-will-einfach-gehalten-werden.md[0m[39m
[90m[90m✓ ich-will-einfach-gehalten-werden.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: kontrolle-abgeben.md[0m[39m
[90m[90m💾 Backup erstellt: kontrolle-abgeben.md_BACKUP_2025-07-03T14-00-48[0m[39m
[90m[32m✅ Content erweitert: kontrolle-abgeben.md (+89 Wörter)[0m[39m
[90m[1m[32m✅ kontrolle-abgeben.md: 1 Issues behoben[0m[0m[39m
[90m[36m🔧 Repariere: README.md[0m[39m
[90m[90m💾 Backup erstellt: README.md_BACKUP_2025-07-03T14-00-48[0m[39m
[90m[32m✅ Content erweitert: README.md (+89 Wörter)[0m[39m
[90m[1m[32m✅ README.md: 1 Issues behoben[0m[0m[39m
[90m[36m🔧 Repariere: sehnsucht-nach-hingabe.md[0m[39m
[90m[90m✓ sehnsucht-nach-hingabe.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: zu-viel-liebe-zu-wenig-liebe.md[0m[39m
[90m[90m✓ zu-viel-liebe-zu-wenig-liebe.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: erschoepft-vom-stark-sein.html[0m[39m
[90m[90m💾 Backup erstellt: erschoepft-vom-stark-sein.html_BACKUP_2025-07-03T14-00-48[0m[39m
[90m[32m✅ JSON-LD repariert: erschoepft-vom-stark-sein.html (1 Fixes)[0m[39m
[90m[1m[32m✅ erschoepft-vom-stark-sein.html: 1 Issues behoben[0m[0m[39m
[90m[36m🔧 Repariere: ich-will-einfach-gehalten-werden.html[0m[39m
[90m[90m💾 Backup erstellt: ich-will-einfach-gehalten-werden.html_BACKUP_2025-07-03T14-00-48[0m[39m
[90m[32m✅ JSON-LD repariert: ich-will-einfach-gehalten-werden.html (1 Fixes)[0m[39m
[90m[1m[32m✅ ich-will-einfach-gehalten-werden.html: 1 Issues behoben[0m[0m[39m
[90m[36m🔧 Repariere: index.html[0m[39m
[90m[90m💾 Backup erstellt: index.html_BACKUP_2025-07-03T14-00-48[0m[39m
[90m[32m✅ JSON-LD repariert: index.html (1 Fixes)[0m[39m
[90m[1m[32m✅ index.html: 1 Issues behoben[0m[0m[39m
[90m[36m🔧 Repariere: kontrolle-abgeben.html[0m[39m
[90m[90m💾 Backup erstellt: kontrolle-abgeben.html_BACKUP_2025-07-03T14-00-48[0m[39m
[90m[32m✅ JSON-LD repariert: kontrolle-abgeben.html (1 Fixes)[0m[39m
[90m[1m[32m✅ kontrolle-abgeben.html: 1 Issues behoben[0m[0m[39m
[90m[36m🔧 Repariere: sehnsucht-nach-hingabe.html[0m[39m
[90m[90m💾 Backup erstellt: sehnsucht-nach-hingabe.html_BACKUP_2025-07-03T14-00-48[0m[39m
[90m[32m✅ JSON-LD repariert: sehnsucht-nach-hingabe.html (1 Fixes)[0m[39m
[90m[1m[32m✅ sehnsucht-nach-hingabe.html: 1 Issues behoben[0m[0m[39m
[90m[36m🔧 Repariere: zu-viel-liebe-zu-wenig-liebe.html[0m[39m
[90m[90m💾 Backup erstellt: zu-viel-liebe-zu-wenig-liebe.html_BACKUP_2025-07-03T14-00-48[0m[39m
[90m[32m✅ JSON-LD repariert: zu-viel-liebe-zu-wenig-liebe.html (1 Fixes)[0m[39m
[90m[1m[32m✅ zu-viel-liebe-zu-wenig-liebe.html: 1 Issues behoben[0m[0m[39m
[90m[36m🔧 Repariere: CODING_INSTRUCTIONS.md[0m[39m
[90m[90m✓ CODING_INSTRUCTIONS.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: DEPLOYMENT.md[0m[39m
[90m[90m✓ DEPLOYMENT.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: implizite_sexuelle_reichweite_strategie.md[0m[39m
[90m[90m✓ implizite_sexuelle_reichweite_strategie.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: instructions_widerspruchs_analyse.md[0m[39m
[90m[90m✓ instructions_widerspruchs_analyse.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: issues.md[0m[39m
[90m[90m✓ issues.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: konkruenz_analyse_2025.md[0m[39m
[90m[90m✓ konkruenz_analyse_2025.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: konkurrenz_analyse_2025.md[0m[39m
[90m[90m✓ konkurrenz_analyse_2025.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: realitaets_analyse_conversion.md[0m[39m
[90m[90m✓ realitaets_analyse_conversion.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: reichweite_erhoehung_strategien.md[0m[39m
[90m[90m✓ reichweite_erhoehung_strategien.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: seo_content_strategie.md[0m[39m
[90m[90m✓ seo_content_strategie.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: seo_content_strategie_v2.md[0m[39m
[90m[90m✓ seo_content_strategie_v2.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: seo_implementation_toolkit.md[0m[39m
[90m[90m✓ seo_implementation_toolkit.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: spezifische_blog_posts_ranking.md[0m[39m
[90m[90m💾 Backup erstellt: spezifische_blog_posts_ranking.md_BACKUP_2025-07-03T14-00-48[0m[39m
[90m[32m✅ Content erweitert: spezifische_blog_posts_ranking.md (+89 Wörter)[0m[39m
[90m[1m[32m✅ spezifische_blog_posts_ranking.md: 1 Issues behoben[0m[0m[39m
[90m[36m🔧 Repariere: Codierte_Übergabe-Fantasien__Keyword-Extraktion_.md[0m[39m
[90m[90m✓ Codierte_Übergabe-Fantasien__Keyword-Extraktion_.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: Hypercodiertes_Keyword-set_Single-frauen_Zuchwil.md[0m[39m
[90m[90m✓ Hypercodiertes_Keyword-set_Single-frauen_Zuchwil.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: konvertierungs_protokoll.md[0m[39m
[90m[90m✓ konvertierungs_protokoll.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: Psychologie_der_Schweizer_Frauensuchen_.md[0m[39m
[90m[90m✓ Psychologie_der_Schweizer_Frauensuchen_.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: Tiefenanalyse_Frauensuche_Deutschschweiz_.md[0m[39m
[90m[90m✓ Tiefenanalyse_Frauensuche_Deutschschweiz_.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: Tiefenanalyse__Bindungssehnsucht_in_Deutschschweizer_Frauen_.md[0m[39m
[90m[90m✓ Tiefenanalyse__Bindungssehnsucht_in_Deutschschweizer_Frauen_.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: Tiefenpsychologische_Keyword-Codierung_für_Risikosex-Fantasien_.md[0m[39m
[90m[90m✓ Tiefenpsychologische_Keyword-Codierung_für_Risikosex-Fantasien_.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: Tiefenpsychologische_Keyword-Codierung_für_Singles_.md[0m[39m
[90m[90m✓ Tiefenpsychologische_Keyword-Codierung_für_Singles_.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: Tiefenpsychologische_Keyword-Extraktion__Solothurn_Frauen_.md[0m[39m
[90m[90m✓ Tiefenpsychologische_Keyword-Extraktion__Solothurn_Frauen_.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: Tiefenpsychologische_SEO-Analyse_für_Vulnerabilität_.md[0m[39m
[90m[90m✓ Tiefenpsychologische_SEO-Analyse_für_Vulnerabilität_.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: Tiefenpsychologische_SEO-Analyse_für_vulnerable_Frau_.md[0m[39m
[90m[90m✓ Tiefenpsychologische_SEO-Analyse_für_vulnerable_Frau_.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: BUILD_LOG_2025-07-02_072016.md[0m[39m
[90m[90m✓ BUILD_LOG_2025-07-02_072016.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: BUILD_LOG_2025-07-02_072326.md[0m[39m
[90m[90m✓ BUILD_LOG_2025-07-02_072326.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: BUILD_LOG_2025-07-02_073239.md[0m[39m
[90m[90m✓ BUILD_LOG_2025-07-02_073239.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: BUILD_LOG_2025-07-02_080659.md[0m[39m
[90m[90m✓ BUILD_LOG_2025-07-02_080659.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: BUILD_LOG_2025-07-02_083538.md[0m[39m
[90m[90m✓ BUILD_LOG_2025-07-02_083538.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: EXCEPTION_2025-07-01_211812.md[0m[39m
[90m[90m✓ EXCEPTION_2025-07-01_211812.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: EXCEPTION_2025-07-01_212252.md[0m[39m
[90m[90m✓ EXCEPTION_2025-07-01_212252.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: EXCEPTION_2025-07-01_212403.md[0m[39m
[90m[90m✓ EXCEPTION_2025-07-01_212403.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: EXCEPTION_2025-07-01_213122.md[0m[39m
[90m[90m✓ EXCEPTION_2025-07-01_213122.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: aenderungsprotokoll.md[0m[39m
[90m[90m✓ aenderungsprotokoll.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: KONKRUENTSPRUEFUNG_EXCEPTION.md[0m[39m
[90m[90m✓ KONKRUENTSPRUEFUNG_EXCEPTION.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: TODO_memory_optimization.md[0m[39m
[90m[90m✓ TODO_memory_optimization.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: ideen_brainstorming.md[0m[39m
[90m[90m✓ ideen_brainstorming.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: index.html[0m[39m
[90m[90m💾 Backup erstellt: index.html_BACKUP_2025-07-03T14-00-48[0m[39m
[90m[32m✅ JSON-LD repariert: index.html (1 Fixes)[0m[39m
[90m[1m[32m✅ index.html: 1 Issues behoben[0m[0m[39m
[90m[36m🔧 Repariere: issues.md[0m[39m
[90m[90m✓ issues.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: kontakt.html[0m[39m
[90m[90m💾 Backup erstellt: kontakt.html_BACKUP_2025-07-03T14-00-48[0m[39m
[90m[32m✅ JSON-LD repariert: kontakt.html (1 Fixes)[0m[39m
[90m[1m[32m✅ kontakt.html: 1 Issues behoben[0m[0m[39m
[90m[36m🔧 Repariere: README.md[0m[39m
[90m[90m✓ README.md: Keine Issues gefunden[0m[39m
[90m[36m🔧 Repariere: template.html[0m[39m
[90m[90m💾 Backup erstellt: template.html_BACKUP_2025-07-03T14-00-48[0m[39m
[90m[32m✅ JSON-LD repariert: template.html (1 Fixes)[0m[39m
[90m[1m[32m✅ template.html: 1 Issues behoben[0m[0m[39m
[90m[36m🔧 Repariere: ueber-mich.html[0m[39m
[90m[90m💾 Backup erstellt: ueber-mich.html_BACKUP_2025-07-03T14-00-48[0m[39m
[90m[32m✅ JSON-LD repariert: ueber-mich.html (1 Fixes)[0m[39m
[90m[1m[32m✅ ueber-mich.html: 1 Issues behoben[0m[0m[39m
[90m[36m🔧 Repariere: ueber-mich.md[0m[39m
[90m[90m✓ ueber-mich.md: Keine Issues gefunden[0m[39m
[90m[1m[32m[39m
[90m✅ LIGHTHOUSE ISSUE FIXER ABGESCHLOSSEN[0m[0m[39m
[90m[36m📝 Vollständiger Fix-Report: C:\apps\website\einfach-passieren-lassen\scripts\build-checks\logfiles\LIGHTHOUSE_FIXES_2025-07-03T14-00-48.log[0m[39m
[90m[35m💾 Backups verfügbar in: C:\apps\website\einfach-passieren-lassen\scripts\build-checks\logfiles\backups[0m[39m
[LOG] [35m[39m
[35m▶️ Führe Check-Skript aus: lighthouse-ready-checker.js[39m
[LOG] [32m✅ lighthouse-ready-checker.js erfolgreich ausgeführt[39m
[LOG] [90m📋 lighthouse-ready-checker.js Output: [36m🚀 Starte Lighthouse-Ready All-In-One Checker...[0m[39m
[90m[1m[34m[39m
[90m🚀 LIGHTHOUSE-READY ALL-IN-ONE CHECKER GESTARTET[39m
[90m[0m[0m[39m
[90m[32m📁 0 alte Logfiles archiviert[0m[39m
[90m[32m📝 Logfile: LIGHTHOUSE_READY_CHECK_2025-07-03T14-00-48.log[0m[39m
[90m[34m📂 Scanne Dateien...[0m[39m
[90m[32m📊 78 Dateien gefunden[0m[39m
[90m[34m📦 Batch-Größe: 10 Dateien[0m[39m
[90m[34m[39m
[90m🔄 Starte Lighthouse-optimierte Batch-Verarbeitung...[39m
[90m[0m[39m
[90m[34m📦 Batch 1: 10 Dateien[0m[39m
[90m[90m💾 Memory: 5MB heap[0m[39m
[90m[34m📦 Batch 2: 10 Dateien[0m[39m
[90m[90m💾 Memory: 5MB heap[0m[39m
[90m[34m📦 Batch 3: 10 Dateien[0m[39m
[90m[90m💾 Memory: 6MB heap[0m[39m
[90m[34m📦 Batch 4: 10 Dateien[0m[39m
[90m[90m💾 Memory: 5MB heap[0m[39m
[90m[34m📦 Batch 5: 10 Dateien[0m[39m
[90m[90m💾 Memory: 7MB heap[0m[39m
[90m[34m📦 Batch 6: 10 Dateien[0m[39m
[90m[90m💾 Memory: 7MB heap[0m[39m
[90m[34m📦 Batch 7: 10 Dateien[0m[39m
[90m[90m💾 Memory: 9MB heap[0m[39m
[90m[34m📦 Batch 8: 8 Dateien[0m[39m
[90m[90m💾 Memory: 8MB heap[0m[39m
[90m[1m[32m[39m
[90m✅ LIGHTHOUSE-READY CHECKER ABGESCHLOSSEN[0m[0m[39m
[90m[34m📝 Vollständiger Lighthouse-Report: C:\apps\website\einfach-passieren-lassen\scripts\build-checks\logfiles\LIGHTHOUSE_READY_CHECK_2025-07-03T14-00-48.log[0m[39m
[LOG] [35m[39m
[35m▶️ Führe Check-Skript aus: logCleanup.js[39m
[LOG] [32m✅ logCleanup.js erfolgreich ausgeführt[39m
[LOG] [35m[39m
[35m▶️ Führe Check-Skript aus: masterBuildChecker.js[39m
[LOG] [32m✅ masterBuildChecker.js erfolgreich ausgeführt[39m
[LOG] [35m[39m
[35m▶️ Führe Check-Skript aus: memory-optimized-checker.js[39m
[LOG] [32m✅ memory-optimized-checker.js erfolgreich ausgeführt[39m
[LOG] [90m📋 memory-optimized-checker.js Output: [34m🚀 Starte Memory-Optimized Checker...[0m[39m
[90m[1m[34m[39m
[90m🚀 MEMORY-OPTIMIZED CHECKER GESTARTET[39m
[90m[0m[0m[39m
[90m[33m⚠️ Archivierung fehlgeschlagen: The "path" argument must be of type string. Received undefined[0m[39m
[90m[32m📝 Logfile: MEMORY_OPTIMIZED_CHECK_2025-07-03T14-00-49.log[0m[39m
[90m[34m📂 Scanne Dateien...[0m[39m
[90m[32m📊 139 Dateien gefunden[0m[39m
[90m[34m📦 Batch-Größe: 5 Dateien[0m[39m
[90m[34m[39m
[90m🔄 Starte Batch-Verarbeitung...[39m
[90m[0m[39m
[90m[34m📦 Batch 1: 5 Dateien[0m[39m
[90m[90m💾 Memory: 5MB heap[0m[39m
[90m[34m📦 Batch 2: 5 Dateien[0m[39m
[90m[90m💾 Memory: 5MB heap[0m[39m
[90m[34m📦 Batch 3: 5 Dateien[0m[39m
[90m[90m💾 Memory: 5MB heap[0m[39m
[90m[34m📦 Batch 4: 5 Dateien[0m[39m
[90m[90m💾 Memory: 5MB heap[0m[39m
[90m[34m📦 Batch 5: 5 Dateien[0m[39m
[90m[90m💾 Memory: 5MB heap[0m[39m
[90m[34m📦 Batch 6: 5 Dateien[0m[39m
[90m[90m💾 Memory: 6MB heap[0m[39m
[90m[34m📦 Batch 7: 5 Dateien[0m[39m
[90m[90m💾 Memory: 6MB heap[0m[39m
[90m[34m📦 Batch 8: 5 Dateien[0m[39m
[90m[90m💾 Memory: 7MB heap[0m[39m
[90m[34m📦 Batch 9: 5 Dateien[0m[39m
[90m[90m💾 Memory: 6MB heap[0m[39m
[90m[34m📦 Batch 10: 5 Dateien[0m[39m
[90m[90m💾 Memory: 13MB heap[0m[39m
[90m[34m📦 Batch 11: 5 Dateien[0m[39m
[90m[90m💾 Memory: 8MB heap[0m[39m
[90m[34m📦 Batch 12: 5 Dateien[0m[39m
[90m[90m💾 Memory: 26MB heap[0m[39m
[90m[34m📦 Batch 13: 5 Dateien[0m[39m
[90m[90m💾 Memory: 17MB heap[0m[39m
[90m[34m📦 Batch 14: 5 Dateien[0m[39m
[90m[90m💾 Memory: 27MB heap[0m[39m
[90m[34m📦 Batch 15: 5 Dateien[0m[39m
[90m[90m💾 Memory: 15MB heap[0m[39m
[90m[34m📦 Batch 16: 5 Dateien[0m[39m
[90m[90m💾 Memory: 28MB heap[0m[39m
[90m[34m📦 Batch 17: 5 Dateien[0m[39m
[90m[90m💾 Memory: 17MB heap[0m[39m
[90m[34m📦 Batch 18: 5 Dateien[0m[39m
[90m[90m💾 Memory: 24MB heap[0m[39m
[90m[34m📦 Batch 19: 5 Dateien[0m[39m
[90m[90m💾 Memory: 28MB heap[0m[39m
[90m[34m📦 Batch 20: 5 Dateien[0m[39m
[90m[90m💾 Memory: 13MB heap[0m[39m
[90m[34m📦 Batch 21: 5 Dateien[0m[39m
[90m[90m💾 Memory: 31MB heap[0m[39m
[90m[34m📦 Batch 22: 5 Dateien[0m[39m
[90m[90m💾 Memory: 23MB heap[0m[39m
[90m[34m📦 Batch 23: 5 Dateien[0m[39m
[90m[90m💾 Memory: 24MB heap[0m[39m
[90m[34m📦 Batch 24: 5 Dateien[0m[39m
[90m[90m💾 Memory: 14MB heap[0m[39m
[90m[34m📦 Batch 25: 5 Dateien[0m[39m
[90m[90m💾 Memory: 22MB heap[0m[39m
[90m[34m📦 Batch 26: 5 Dateien[0m[39m
[90m[90m💾 Memory: 26MB heap[0m[39m
[90m[34m📦 Batch 27: 5 Dateien[0m[39m
[90m[90m💾 Memory: 17MB heap[0m[39m
[90m[34m📦 Batch 28: 4 Dateien[0m[39m
[90m[90m💾 Memory: 18MB heap[0m[39m
[90m[1m[32m[39m
[90m✅ MEMORY-OPTIMIZED CHECKER ABGESCHLOSSEN[0m[0m[39m
[90m[34m📝 Vollständiger Report: C:\apps\website\einfach-passieren-lassen\scripts\build-checks\logfiles\MEMORY_OPTIMIZED_CHECK_2025-07-03T14-00-49.log[0m[39m
[LOG] [35m[39m
[35m▶️ Führe Check-Skript aus: multi-file-sinnlosigkeits-checker.js[39m
[ERROR] [31m❌ Fehler beim Ausführen von multi-file-sinnlosigkeits-checker.js: Command failed: node C:\apps\website\einfach-passieren-lassen\scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js[39m
[ERROR] multi-file-sinnlosigkeits-checker.js execution failed: {"script":"multi-file-sinnlosigkeits-checker.js","exitCode":1,"stderr":"","stdout":"📋 Loaded 12 advanced checklists\n🔍 MULTI-FILE SINNLOSIGKEITS-CHECKER GESTARTET\n   Prüft alle Seiten auf absurde Sätze, Copy-Cats und logische Inkonsistenzen\n\n📋 Sammle relevante Dateien...\n   ✅ 33 relevante Dateien gefunden\n🔍 Prüfe Dateien auf Sinnlosigkeiten...\n📄 [1] Prüfe: blog\\entwurf\\bindungssehnsucht-normal.md\n   🚨 7 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"trau dich, den ersten schritt zu machen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"verstehst du\" (7x), \"kennst du\" (5x)\n      💡 Keywords natürlich und organisch verteilen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Fühlst du dich\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [2] Prüfe: blog\\entwurf\\das-erste-mal.md\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"du musst nichts wissen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"der anfang unseres gemeinsamen lebens...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"der anfang unserer liebe...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (86% ähnlich): \"lass uns gemeinsam diesen wichtigen schritt gehen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   5. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"verstehst du\" (5x), \"kennst du\" (6x)\n      💡 Keywords natürlich und organisch verteilen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"willst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [3] Prüfe: blog\\entwurf\\der-sichere-hafen.md\n   🚨 5 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"nicht mehr perfekt sein musst...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"dein herz wird ruhiger...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"weil wir eine familie sind...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"kannst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [4] Prüfe: blog\\entwurf\\emotionale-leere.md\n   ✅ Keine Probleme gefunden\n📄 [5] Prüfe: blog\\entwurf\\erschoepft-vom-stark-sein.md\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"wenn du endlich nicht mehr entscheiden musst...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (76% ähnlich): \"dann spürst du es besonders intensiv - diese sehns...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (73% ähnlich): \"## deine gefühle verstehen\n\nvielleicht kennst du d...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (89% ähnlich): \"diese momente sind kostbar, auch wenn sie schmerzh...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   5. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"kennst du\" (4x)\n      💡 Keywords natürlich und organisch verteilen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [6] Prüfe: blog\\entwurf\\ich-will-einfach-gehalten-werden.md\n   🚨 4 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"du musst nicht stark sein...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"fühlst du\" (4x), \"verstehst du\" (5x), \"kennst du\" (6x)\n      💡 Keywords natürlich und organisch verteilen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [7] Prüfe: blog\\entwurf\\kontrolle-abgeben.md\n   🚨 4 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (76% ähnlich): \"dann spürst du es besonders intensiv - diese sehns...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (73% ähnlich): \"## deine gefühle verstehen\n\nvielleicht kennst du d...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (89% ähnlich): \"diese momente sind kostbar, auch wenn sie schmerzh...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [8] Prüfe: blog\\entwurf\\README.md\n   🚨 3 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (76% ähnlich): \"dann spürst du es besonders intensiv - diese sehns...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (73% ähnlich): \"## deine gefühle verstehen\n\nvielleicht kennst du d...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (89% ähnlich): \"diese momente sind kostbar, auch wenn sie schmerzh...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n📄 [9] Prüfe: blog\\entwurf\\sehnsucht-nach-hingabe.md\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [10] Prüfe: blog\\entwurf\\zu-viel-liebe-zu-wenig-liebe.md\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"will ich z'viel liebe...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (78% ähnlich): \"du willst, dass er ohne dich nicht mehr kann...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"dich kleiner zu machen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"kennst du\" (4x)\n      💡 Keywords natürlich und organisch verteilen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"kannst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [11] Prüfe: blog\\bindungssehnsucht-normal.html\n   🚨 8 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"&quot;, fragst du dich...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"trau dich, den ersten schritt zu machen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"verstehst du\" (7x), \"kennst du\" (5x)\n      💡 Keywords natürlich und organisch verteilen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Fühlst du dich\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [12] Prüfe: blog\\das-erste-mal.html\n   🚨 9 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"&quot;, fragst du dich vielleicht...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"du musst nichts wissen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"der anfang unseres gemeinsamen lebens...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"der anfang unserer liebe...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   5. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (86% ähnlich): \"lass uns gemeinsam diesen wichtigen schritt gehen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   6. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"verstehst du\" (5x), \"kennst du\" (6x)\n      💡 Keywords natürlich und organisch verteilen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   9. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"willst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [13] Prüfe: blog\\der-sichere-hafen.html\n   🚨 5 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"nicht mehr perfekt sein musst...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"dein herz wird ruhiger...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"weil wir eine familie sind...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"kannst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [14] Prüfe: blog\\emotionale-leere.html\n   ✅ Keine Probleme gefunden\n📄 [15] Prüfe: blog\\entwurf\\bindungssehnsucht-normal.md\n   🚨 7 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"trau dich, den ersten schritt zu machen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"verstehst du\" (7x), \"kennst du\" (5x)\n      💡 Keywords natürlich und organisch verteilen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Fühlst du dich\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [16] Prüfe: blog\\entwurf\\das-erste-mal.md\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"du musst nichts wissen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"der anfang unseres gemeinsamen lebens...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"der anfang unserer liebe...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (86% ähnlich): \"lass uns gemeinsam diesen wichtigen schritt gehen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   5. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"verstehst du\" (5x), \"kennst du\" (6x)\n      💡 Keywords natürlich und organisch verteilen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"willst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [17] Prüfe: blog\\entwurf\\der-sichere-hafen.md\n   🚨 5 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"nicht mehr perfekt sein musst...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"dein herz wird ruhiger...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"weil wir eine familie sind...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"kannst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [18] Prüfe: blog\\entwurf\\emotionale-leere.md\n   ✅ Keine Probleme gefunden\n📄 [19] Prüfe: blog\\entwurf\\erschoepft-vom-stark-sein.md\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"wenn du endlich nicht mehr entscheiden musst...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (76% ähnlich): \"dann spürst du es besonders intensiv - diese sehns...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (73% ähnlich): \"## deine gefühle verstehen\n\nvielleicht kennst du d...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (89% ähnlich): \"diese momente sind kostbar, auch wenn sie schmerzh...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   5. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"kennst du\" (4x)\n      💡 Keywords natürlich und organisch verteilen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [20] Prüfe: blog\\entwurf\\ich-will-einfach-gehalten-werden.md\n   🚨 4 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"du musst nicht stark sein...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"fühlst du\" (4x), \"verstehst du\" (5x), \"kennst du\" (6x)\n      💡 Keywords natürlich und organisch verteilen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [21] Prüfe: blog\\entwurf\\kontrolle-abgeben.md\n   🚨 4 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (76% ähnlich): \"dann spürst du es besonders intensiv - diese sehns...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (73% ähnlich): \"## deine gefühle verstehen\n\nvielleicht kennst du d...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (89% ähnlich): \"diese momente sind kostbar, auch wenn sie schmerzh...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [22] Prüfe: blog\\entwurf\\README.md\n   🚨 3 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (76% ähnlich): \"dann spürst du es besonders intensiv - diese sehns...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (73% ähnlich): \"## deine gefühle verstehen\n\nvielleicht kennst du d...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (89% ähnlich): \"diese momente sind kostbar, auch wenn sie schmerzh...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n📄 [23] Prüfe: blog\\entwurf\\sehnsucht-nach-hingabe.md\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [24] Prüfe: blog\\entwurf\\zu-viel-liebe-zu-wenig-liebe.md\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"will ich z'viel liebe...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (78% ähnlich): \"du willst, dass er ohne dich nicht mehr kann...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"dich kleiner zu machen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"kennst du\" (4x)\n      💡 Keywords natürlich und organisch verteilen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"kannst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [25] Prüfe: blog\\erschoepft-vom-stark-sein.html\n   🚨 4 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"wenn du endlich nicht mehr entscheiden musst...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   3. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [26] Prüfe: blog\\ich-will-einfach-gehalten-werden.html\n   🚨 5 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"du musst nicht stark sein...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"und ich antworte: &quot;du bisch bereits ghalte...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"fühlst du\" (4x), \"verstehst du\" (5x), \"kennst du\" (6x)\n      💡 Keywords natürlich und organisch verteilen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [27] Prüfe: blog\\index.html\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (86% ähnlich): \"html\" class=\"read-more\">weiterlesen</a>\n          ...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n📄 [28] Prüfe: blog\\kontrolle-abgeben.html\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [29] Prüfe: blog\\sehnsucht-nach-hingabe.html\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [30] Prüfe: blog\\zu-viel-liebe-zu-wenig-liebe.html\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"&quot;, fragst du dich...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (78% ähnlich): \"du willst, dass er ohne dich nicht mehr kann...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"dich kleiner zu machen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"kennst du\" (4x)\n      💡 Keywords natürlich und organisch verteilen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"kannst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [31] Prüfe: ./ueber-mich.html\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [32] Prüfe: ./index.html\n   🚨 7 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"träumst du davon\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"du bist nicht schwach...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"das macht dich kostbar...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   5. [MEDIUM] INCOMPLETE_SENTENCE_AFTER_QUESTION\n      → Unvollständiger Satz nach Frage: \"? Du weißt bereits, dass du hier richtig bist</title>\"\n      💡 Sätze nach Fragen vollständig ausführen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [33] Prüfe: ./kontakt.html\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"</p>\r\n                    </div>\r\n                ...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n🔗 Cross-File Analyse...\n\n🔗 CROSS-FILE COPY-CAT ANALYSIS GESTARTET\n🚨 13 dateiübergreifende Duplikate gefunden:\n\n1. CROSS-FILE DUPLICATE:\n   Text: \"Diese Sehnsucht macht dich nicht schwach...\"\n   Dateien: blog\\entwurf\\emotionale-leere.md, blog\\entwurf\\sehnsucht-nach-hingabe.md\n   Ähnlichkeit: 100%\n\n2. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\kontrolle-abgeben.md\n   Ähnlichkeit: 89%\n\n3. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\kontrolle-abgeben.md\n   Ähnlichkeit: 89%\n\n4. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\kontrolle-abgeben.md\n   Ähnlichkeit: 89%\n\n5. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\kontrolle-abgeben.md\n   Ähnlichkeit: 89%\n\n6. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n7. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n8. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n9. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n10. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\kontrolle-abgeben.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n11. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\kontrolle-abgeben.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n12. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\kontrolle-abgeben.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n13. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\kontrolle-abgeben.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n======================================================================\n📊 SINNLOSIGKEITS-CHECK ABGESCHLOSSEN\n======================================================================\n⏱️  Dauer: 4439ms\n📁 Geprüfte Dateien: 33\n🔍 Gefundene Issues: 160\n\n📈 ISSUE-VERTEILUNG:\n   🔴 CRITICAL: 8\n   🟡 HIGH: 151\n   ⚪ MEDIUM: 1\n\n🏆 TOP ISSUE-TYPEN:\n   COPY_CAT_TEXT: 64x\n   INCOMPLETE_TRIGGER: 60x\n   KEYWORD_STUFFING: 14x\n   CROSS_FILE_DUPLICATE: 13x\n   INCOMPLETE_TRIGGER_PHRASE: 8x\n\n📁 BETROFFENE DATEIEN (22):\n   blog\\entwurf\\bindungssehnsucht-normal.md: 14 Issue(s)\n   blog\\entwurf\\das-erste-mal.md: 16 Issue(s)\n   blog\\entwurf\\der-sichere-hafen.md: 10 Issue(s)\n   blog\\entwurf\\erschoepft-vom-stark-sein.md: 16 Issue(s)\n   blog\\entwurf\\ich-will-einfach-gehalten-werden.md: 8 Issue(s)\n   blog\\entwurf\\kontrolle-abgeben.md: 8 Issue(s)\n   blog\\entwurf\\README.md: 6 Issue(s)\n   blog\\entwurf\\sehnsucht-nach-hingabe.md: 2 Issue(s)\n   blog\\entwurf\\zu-viel-liebe-zu-wenig-liebe.md: 16 Issue(s)\n   blog\\bindungssehnsucht-normal.html: 8 Issue(s)\n   ... und 12 weitere\n\n======================================================================\n🚨 CRITICAL: Dringende Behebung der sinnlosen Inhalte erforderlich!\n======================================================================\n\n💾 Protokoll gespeichert: scripts\\build-checks\\logfiles\\SINNLOSIGKEITS_CHECK_2025-07-03T14-00-58-436Z.json\n📝 Änderungsprotokoll aktualisiert\n\n✅ Multi-File Sinnlosigkeits-Check abgeschlossen!\n🚨 8 KRITISCHE PROBLEME GEFUNDEN!\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"träumst du davon\"\n","message":"Command failed: node C:\\apps\\website\\einfach-passieren-lassen\\scripts\\build-checks\\check_scripts\\multi-file-sinnlosigkeits-checker.js","timestamp":"2025-07-03T14:00:58.464Z"}
[LOG] [35m[39m
[35m▶️ Führe Check-Skript aus: seoCheck.js[39m
[LOG] [32m✅ seoCheck.js erfolgreich ausgeführt[39m
[LOG] [33m🧹 STARTING CLEAN BUILD - Lösche vorhandene HTML-Dateien...[39m
[LOG] [36m📋 Gefunden: 10 Markdown-Dateien für Clean-Build[39m
[LOG] [90m   🗑️ Gelöscht: bindungssehnsucht-normal.html[39m
[LOG] [90m   🗑️ Gelöscht: das-erste-mal.html[39m
[LOG] [90m   🗑️ Gelöscht: der-sichere-hafen.html[39m
[LOG] [90m   🗑️ Gelöscht: emotionale-leere.html[39m
[LOG] [90m   🗑️ Gelöscht: erschoepft-vom-stark-sein.html[39m
[LOG] [90m   🗑️ Gelöscht: ich-will-einfach-gehalten-werden.html[39m
[LOG] [90m   🗑️ Gelöscht: kontrolle-abgeben.html[39m
[LOG] [90m   ➖ Nicht vorhanden: README.html[39m
[LOG] [90m   🗑️ Gelöscht: sehnsucht-nach-hingabe.html[39m
[LOG] [90m   🗑️ Gelöscht: zu-viel-liebe-zu-wenig-liebe.html[39m
[LOG] [32m✅ CLEAN COMPLETED: 9 Dateien gelöscht, 0 übersprungen[39m
[LOG] [36m🔨 Starte saubere Neu-Generierung...[39m
[INFO] Clean Build: 9 HTML-Dateien gelöscht
[LOG] [36m[39m
[36m🚀 STARTE INTELLIGENT BUILD PROCESS...[39m
[LOG] [34m📋 Terminal-Ausgabe wird gespeichert in: docs\015_build_logs\BUILD_LOG_2025-07-03_140047.md[39m
[LOG] [90mNeue Intention-Validation aktiv![39m
[90m[39m
[LOG] [34m📋 Loaded 12 advanced checklists[39m
[LOG] [35m🧠 ADVANCED CHECKLIST SYSTEM ACTIVATED[39m
[LOG] [90m   → Intelligent rotation algorithm loaded[39m
[LOG] [90m   → 12 psychological validation modules ready[39m
[LOG] [34m[39m
[34m🔍 FÜHRE ERWEITERTE SEO-VALIDIERUNG DURCH...[39m
[LOG] [90m   ℹ️ Sitemap enthält 14 URLs[39m
[LOG] [32m✅ Globale SEO-Validierung erfolgreich - Keine Issues gefunden[39m
[LOG] 🔍 Sammle VS Code Problems...
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:40 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:1943 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:2327 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:2713 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:2741 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:3562 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:3599 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:4316 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:5013 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:5406 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6202 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6587 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6720 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6743 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6803 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6895 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6923 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6954 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7029 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7054 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7099 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7531 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7585 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7983 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:8071 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:8075 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:8112 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:8493 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:9746 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-Ckhtba7t.js:9945 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:40 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:1950 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:2360 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:2762 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:2790 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:3618 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:3655 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:4372 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:5069 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:5462 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:6258 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:6643 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:6776 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:6799 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:6859 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:6951 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:6979 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:7010 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:7085 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:7110 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:7155 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:7587 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:7641 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:8039 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:8127 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:8131 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:8168 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:8549 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:9802 - Missing semicolon
[PROBLEM] [WARNING] app-gui\dist-electron\index-DhEd7u67.js:10001 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] app-gui\src\App.jsx:4 - Missing semicolon
[PROBLEM] [WARNING] app-gui\src\App.jsx:72 - Missing semicolon
[PROBLEM] [WARNING] app-gui\src\App.jsx:99 - Missing semicolon
[PROBLEM] [WARNING] build-process\mainBuild.js:52 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\mainBuild.js:64 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\mainBuild.js:98 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\mainBuild.js:102 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\mainBuild.js:104 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\mainBuild.js:110 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\mainBuild.js:112 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\mainBuild.js:116 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\mainBuild.js:123 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\mainBuild.js:145 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\mainBuild.js:147 - Missing semicolon
[PROBLEM] [WARNING] build-process\mainBuild.js:174 - Missing semicolon
[PROBLEM] [WARNING] build-process\mainBuild.js:205 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\mainBuild.js:231 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\mainBuild.js:254 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\modules\contentOptimizer.js:53 - Missing semicolon
[PROBLEM] [WARNING] build-process\modules\contentOptimizer.js:66 - Missing semicolon
[PROBLEM] [WARNING] build-process\modules\contentOptimizer.js:111 - Missing semicolon
[PROBLEM] [WARNING] build-process\modules\contentOptimizer.js:157 - Missing semicolon
[PROBLEM] [WARNING] build-process\modules\contentOptimizer.js:338 - Missing semicolon
[PROBLEM] [WARNING] build-process\modules\fileUtils.js:22 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\modules\fileUtils.js:45 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\modules\fileUtils.js:90 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\modules\fileUtils.js:151 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\modules\fileUtils.js:174 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\modules\logger.js:17 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\modules\logger.js:34 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\modules\logger.js:62 - Console.log statement found - consider removing in production
[PROBLEM] [ERROR] build-process\modules\logger.js:145 - Typo: "fucntion" should be "function"
[PROBLEM] [ERROR] build-process\modules\logger.js:146 - Typo: "fucntion" should be "function"
[PROBLEM] [WARNING] build-process\modules\logger.js:243 - Missing semicolon
[PROBLEM] [WARNING] build-process\modules\logger.js:276 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\modules\seoCheck.js:20 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\modules\seoCheck.js:94 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\modules\seoCheck.js:96 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\modules\seoCheck.js:109 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\modules\seoCheck.js:248 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\modules\seoCheck.js:335 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\modules\seoCheck.js:406 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\modules\seoCheck.js:423 - Missing semicolon
[PROBLEM] [WARNING] build-process\modules\seoCheck.js:505 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] build-process\modules\seoCheck.js:513 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:17 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:32 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:34 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:50 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:107 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:132 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:220 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:257 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:264 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:275 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:319 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:369 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:402 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:411 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:412 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:418 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:427 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:467 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:517 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:525 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:560 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:588 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:596 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:599 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:603 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:605 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:607 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:608 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:611 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:693 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:700 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:705 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:798 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:807 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:830 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:853 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:17 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:32 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:34 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:50 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:118 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:143 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:217 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:247 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:297 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:330 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:339 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:340 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:346 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:355 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:395 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:445 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:453 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:488 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:516 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:602 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:609 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:614 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:707 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:716 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:739 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:762 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:14 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:15 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:20 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:21 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:24 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:28 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:33 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:34 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:35 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:42 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:50 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:52 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:53 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:64 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:69 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:72 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:79 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:84 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:89 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:93 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:94 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:96 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:113 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:115 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:116 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:118 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:126 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:131 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:132 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:136 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:137 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:141 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:143 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:145 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:149 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:151 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:156 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:158 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:164 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:166 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:172 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:173 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:174 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:175 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:176 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:177 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:178 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:179 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:180 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:181 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:182 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:183 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:184 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:185 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:217 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\checklist-cli.js:218 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:19 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:38 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:66 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:67 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:70 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:162 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:213 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:250 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:38 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:40 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:58 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:64 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:67 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:71 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:72 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:73 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:77 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:100 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:113 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:118 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:208 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:217 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:260 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:271 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:319 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:346 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:353 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:384 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:394 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:401 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:425 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:437 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:441 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:464 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:466 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:470 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:494 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:504 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:549 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:553 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:556 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:561 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:562 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:563 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-issue-fixer.js:578 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:84 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:96 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:98 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:103 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:129 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:159 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:186 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:219 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:261 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:477 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:495 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:501 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:531 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:543 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:551 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:556 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:569 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:587 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:592 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:660 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:664 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:667 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:671 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:672 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:678 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:683 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:684 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\lighthouse-ready-checker.js:699 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:19 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:91 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:92 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:93 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:94 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:95 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:100 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:103 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:132 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:256 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:389 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:437 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:486 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:515 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:577 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:70 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:82 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:84 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:89 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:107 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:137 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:148 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:160 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:168 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:173 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:195 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:272 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:280 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:285 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:313 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:317 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:320 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:324 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:325 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:331 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:336 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:337 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\memory-optimized-checker.js:351 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:62 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:63 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:66 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:70 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:71 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:78 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:81 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:86 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:92 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:98 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:112 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:150 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:162 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:189 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:202 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:212 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:216 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:217 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:218 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:229 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:233 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:243 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:268 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:292 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:348 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:357 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:365 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:368 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:369 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:370 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:371 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:386 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:409 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:433 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:444 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:445 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:446 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:448 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:449 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:450 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:453 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:454 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:455 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:456 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:464 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:469 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:474 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:477 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:481 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:485 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:487 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:489 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:491 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:493 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:526 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:546 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:550 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:569 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:580 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:584 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:586 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:589 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:17 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:20 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:21 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:24 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:34 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:40 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:92 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:104 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:119 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:122 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:124 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:135 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:137 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:140 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:147 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:149 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:152 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:159 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:161 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:177 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:218 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:236 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:244 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:260 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:275 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:292 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:295 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:300 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:303 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:305 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:309 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:328 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:330 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:349 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:361 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:370 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:371 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:372 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:377 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:378 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:389 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:390 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:391 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:392 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:393 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:397 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:398 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:399 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:400 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:401 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:405 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:406 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:409 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:416 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:417 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:418 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:439 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:448 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:457 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:484 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:515 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:538 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:561 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:582 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:594 - Console.log statement found - consider removing in production
[PROBLEM] [ERROR] scripts\build.js:709 - Typo: "fucntion" should be "function"
[PROBLEM] [ERROR] scripts\build.js:710 - Typo: "fucntion" should be "function"
[PROBLEM] [WARNING] scripts\build.js:757 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:767 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:853 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:923 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:963 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:1092 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1096 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1103 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1110 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1172 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1197 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1216 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1244 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1323 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1366 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1377 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1439 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1468 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1472 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1532 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1597 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1788 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1826 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1838 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1918 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2014 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2015 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2136 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2137 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2143 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2144 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2145 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2165 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2169 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2179 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2184 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2198 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2204 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2206 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2208 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2209 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2221 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2224 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2236 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2240 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2242 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2245 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2296 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2298 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2303 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2309 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2311 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2321 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2326 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2327 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2328 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2331 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2332 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2333 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2334 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2335 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2336 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2339 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2343 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2344 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2345 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2349 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2373 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2375 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2381 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2384 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2404 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2405 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2428 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2432 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2433 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2435 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2436 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2440 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2442 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2445 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2448 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2451 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2452 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2455 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2456 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2458 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2461 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2464 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2469 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2471 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2473 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2477 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2481 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2483 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2484 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2489 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2493 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2494 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2501 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2507 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2508 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2509 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2512 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2514 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2516 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2523 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2525 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2531 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2532 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2551 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2559 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2563 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2565 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2568 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2569 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2570 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2571 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2572 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2575 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2577 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2582 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2584 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2589 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2599 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2613 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2614 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2615 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2616 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2617 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2618 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2619 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2623 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2624 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2625 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2626 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2627 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2628 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2629 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2630 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2650 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2667 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2705 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2761 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2814 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2843 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2880 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2892 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2920 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2932 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2958 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3010 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3014 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3027 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3036 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3045 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3054 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3075 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3088 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3101 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3114 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3141 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3150 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3159 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3168 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3177 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3270 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3274 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3284 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3294 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3313 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3338 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3347 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3356 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3365 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3374 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3383 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3406 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3419 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3432 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3441 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3450 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3459 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3489 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3516 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3518 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3520 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3548 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3697 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3698 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3699 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3705 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3706 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3707 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3709 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3719 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3724 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3728 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3732 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3736 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3742 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3743 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3746 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3750 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3753 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3766 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3778 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3781 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3784 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3787 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3791 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3792 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3798 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3800 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3804 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3808 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3816 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3820 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3826 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3831 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3834 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3836 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3840 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3841 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3842 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3844 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3853 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3858 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3859 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3860 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3861 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3875 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3877 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3887 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3890 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3893 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3894 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3901 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3907 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3908 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3909 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3912 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3914 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3916 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3923 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3925 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3930 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3931 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3932 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3933 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3934 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3939 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3940 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3971 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3974 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3975 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3976 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3977 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3978 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3979 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3982 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3983 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3984 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3985 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3986 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3987 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3988 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3990 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3992 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3995 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3996 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3997 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3998 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4000 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4001 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4002 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4003 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4005 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4006 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4007 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4008 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4009 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4010 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4012 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4013 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4014 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4015 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4018 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4019 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4020 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4031 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4050 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4086 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:4106 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:4134 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:4176 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:4219 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:4261 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4266 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4271 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4277 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:4280 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4295 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4298 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4302 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4307 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4311 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4312 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4318 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4319 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4327 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4328 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4338 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4345 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4347 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4413 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4414 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4419 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4421 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4424 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4428 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\direct-checker-test.js:9 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\direct-checker-test.js:15 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\direct-checker-test.js:16 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\direct-checker-test.js:19 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\direct-checker-test.js:22 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\direct-checker-test.js:24 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\direct-checker-test.js:25 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\direct-checker-test.js:28 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\direct-checker-test.js:32 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\direct-checker-test.js:37 - Missing semicolon
[PROBLEM] [WARNING] scripts\direct-checker-test.js:61 - Missing semicolon
[PROBLEM] [WARNING] scripts\direct-checker-test.js:84 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\direct-checker-test.js:86 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\direct-checker-test.js:87 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\direct-checker-test.js:88 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\direct-checker-test.js:91 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\direct-checker-test.js:96 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\direct-checker-test.js:99 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\direct-checker-test.js:100 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\direct-checker-test.js:102 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\direct-checker-test.js:105 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\log-manager.js:45 - Missing semicolon
[PROBLEM] [WARNING] scripts\log-manager.js:61 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\log-manager.js:68 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\log-manager.js:83 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\log-manager.js:91 - Missing semicolon
[PROBLEM] [WARNING] scripts\log-manager.js:116 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\log-manager.js:144 - Missing semicolon
[PROBLEM] [WARNING] scripts\log-manager.js:158 - Missing semicolon
[PROBLEM] [WARNING] scripts\log-manager.js:174 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\log-manager.js:177 - Missing semicolon
[PROBLEM] [WARNING] scripts\log-manager.js:185 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\log-manager.js:204 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\log-manager.js:209 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\log-manager.js:228 - Missing semicolon
[PROBLEM] [WARNING] scripts\log-manager.js:235 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\log-manager.js:264 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\log-manager.js:265 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\log-manager.js:266 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\log-manager.js:267 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\simplified-checker.js:8 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\simplified-checker.js:15 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\simplified-checker.js:20 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\simplified-checker.js:25 - Missing semicolon
[PROBLEM] [WARNING] scripts\simplified-checker.js:49 - Missing semicolon
[PROBLEM] [WARNING] scripts\simplified-checker.js:72 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\simplified-checker.js:74 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\simplified-checker.js:75 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\simplified-checker.js:76 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\simplified-checker.js:80 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\simplified-checker.js:84 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\simplified-checker.js:87 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\simplified-checker.js:88 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\simplified-checker.js:90 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\simplified-checker.js:93 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] style.css:170 - Missing semicolon in CSS property
[INFO] ✅ Problems-Scan abgeschlossen. 840 Problem(e) gefunden.
[LOG] [34m📄 Gefunden: 9 Markdown-Dateien[39m
[34m[39m
[LOG] [90m[39m
[90m📋 Verarbeite: bindungssehnsucht-normal.md[39m
[LOG] [35m   🧠 Running advanced checklist validation for bindungssehnsucht-normal.md...[39m
[LOG] [36m🎯 Analyzing: bindungssehnsucht-normal.md[39m
[LOG] [90m   Detected theme: BINDUNG_KERN[39m
[LOG] [32m   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE[39m
[LOG] [36m   📊 Checklist Score: 1%[39m
[LOG] [31m      • BINDUNG_KERN: 0%[39m
[LOG] [31m      • VERSCHMELZUNG: 0%[39m
[LOG] [31m      • HINGABE: 2%[39m
[LOG] [36m   🎯 Intentionen-Analyse...[39m
[LOG] [32m   ✅ Intention-Score: 60% - EXCELLENT![39m
[LOG] [36m   📊 Code-Quality Check...[39m
[LOG] [32m   ✅ Code Quality OK[39m
[LOG] [36m   🔨 HTML generieren...[39m
[LOG] [32m   ✅ HTML erstellt: bindungssehnsucht-normal.html[39m
[LOG] [90m[39m
[90m📋 Verarbeite: das-erste-mal.md[39m
[LOG] [35m   🧠 Running advanced checklist validation for das-erste-mal.md...[39m
[LOG] [36m🎯 Analyzing: das-erste-mal.md[39m
[LOG] [90m   Detected theme: BINDUNG_KERN[39m
[LOG] [32m   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE[39m
[LOG] [36m   📊 Checklist Score: 8%[39m
[LOG] [31m      • BINDUNG_KERN: 8%[39m
[LOG] [31m      • VERSCHMELZUNG: 8%[39m
[LOG] [31m      • HINGABE: 7%[39m
[LOG] [36m   🎯 Intentionen-Analyse...[39m
[LOG] [32m   ✅ Intention-Score: 60% - EXCELLENT![39m
[LOG] [36m   📊 Code-Quality Check...[39m
[LOG] [32m   ✅ Code Quality OK[39m
[LOG] [36m   🔨 HTML generieren...[39m
[LOG] [32m   ✅ HTML erstellt: das-erste-mal.html[39m
[LOG] [90m[39m
[90m📋 Verarbeite: der-sichere-hafen.md[39m
[LOG] [35m   🧠 Running advanced checklist validation for der-sichere-hafen.md...[39m
[LOG] [36m🎯 Analyzing: der-sichere-hafen.md[39m
[LOG] [90m   Detected theme: BINDUNG_KERN[39m
[LOG] [32m   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE[39m
[LOG] [36m   📊 Checklist Score: 10%[39m
[LOG] [31m      • BINDUNG_KERN: 17%[39m
[LOG] [31m      • VERSCHMELZUNG: 8%[39m
[LOG] [31m      • HINGABE: 5%[39m
[LOG] [36m   🎯 Intentionen-Analyse...[39m
[LOG] [31m   ❌ Intention-Score: 45% (Min: 60%)[39m
[LOG] [36m   📊 Code-Quality Check...[39m
[LOG] [32m   ✅ Code Quality OK[39m
[LOG] [36m   🔨 HTML generieren...[39m
[LOG] [32m   ✅ HTML erstellt: der-sichere-hafen.html[39m
[LOG] [33m   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke[39m
[LOG] [90m[39m
[90m📋 Verarbeite: emotionale-leere.md[39m
[LOG] [35m   🧠 Running advanced checklist validation for emotionale-leere.md...[39m
[LOG] [36m🎯 Analyzing: emotionale-leere.md[39m
[LOG] [90m   Detected theme: BESITZ[39m
[LOG] [32m   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE[39m
[LOG] [36m   📊 Checklist Score: 18%[39m
[LOG] [31m      • BINDUNG_KERN: 17%[39m
[LOG] [31m      • VERSCHMELZUNG: 25%[39m
[LOG] [31m      • HINGABE: 12%[39m
[LOG] [36m   🎯 Intentionen-Analyse...[39m
[LOG] [31m   ❌ Intention-Score: 16% (Min: 60%)[39m
[LOG] [36m   📊 Code-Quality Check...[39m
[LOG] [32m   ✅ Code Quality OK[39m
[LOG] [36m   🔨 HTML generieren...[39m
[LOG] [32m   ✅ HTML erstellt: emotionale-leere.html[39m
[LOG] [33m   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke[39m
[LOG] [90m[39m
[90m📋 Verarbeite: erschoepft-vom-stark-sein.md[39m
[LOG] [35m   🧠 Running advanced checklist validation for erschoepft-vom-stark-sein.md...[39m
[LOG] [36m🎯 Analyzing: erschoepft-vom-stark-sein.md[39m
[LOG] [90m   Detected theme: BINDUNG_KERN[39m
[LOG] [32m   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE[39m
[LOG] [36m   📊 Checklist Score: 4%[39m
[LOG] [31m      • BINDUNG_KERN: 0%[39m
[LOG] [31m      • VERSCHMELZUNG: 8%[39m
[LOG] [31m      • HINGABE: 5%[39m
[LOG] [36m   🎯 Intentionen-Analyse...[39m
[LOG] [31m   ❌ Intention-Score: 22% (Min: 60%)[39m
[LOG] [36m   📊 Code-Quality Check...[39m
[LOG] [32m   ✅ Code Quality OK[39m
[LOG] [36m   🔨 HTML generieren...[39m
[LOG] [32m   ✅ HTML erstellt: erschoepft-vom-stark-sein.html[39m
[LOG] [33m   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke[39m
[LOG] [90m[39m
[90m📋 Verarbeite: ich-will-einfach-gehalten-werden.md[39m
[LOG] [35m   🧠 Running advanced checklist validation for ich-will-einfach-gehalten-werden.md...[39m
[LOG] [36m🎯 Analyzing: ich-will-einfach-gehalten-werden.md[39m
[LOG] [90m   Detected theme: BINDUNG_KERN[39m
[LOG] [32m   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE[39m
[LOG] [36m   📊 Checklist Score: 18%[39m
[LOG] [31m      • BINDUNG_KERN: 17%[39m
[LOG] [31m      • VERSCHMELZUNG: 17%[39m
[LOG] [31m      • HINGABE: 19%[39m
[LOG] [36m   🎯 Intentionen-Analyse...[39m
[LOG] [31m   ❌ Intention-Score: 49% (Min: 60%)[39m
[LOG] [36m   📊 Code-Quality Check...[39m
[LOG] [32m   ✅ Code Quality OK[39m
[LOG] [36m   🔨 HTML generieren...[39m
[LOG] [32m   ✅ HTML erstellt: ich-will-einfach-gehalten-werden.html[39m
[LOG] [33m   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke[39m
[LOG] [90m[39m
[90m📋 Verarbeite: kontrolle-abgeben.md[39m
[LOG] [35m   🧠 Running advanced checklist validation for kontrolle-abgeben.md...[39m
[LOG] [36m🎯 Analyzing: kontrolle-abgeben.md[39m
[LOG] [90m   Detected theme: PASSIVITÄT[39m
[LOG] [32m   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE[39m
[LOG] [36m   📊 Checklist Score: 7%[39m
[LOG] [31m      • BINDUNG_KERN: 8%[39m
[LOG] [31m      • VERSCHMELZUNG: 8%[39m
[LOG] [31m      • HINGABE: 5%[39m
[LOG] [36m   🎯 Intentionen-Analyse...[39m
[LOG] [31m   ❌ Intention-Score: 18% (Min: 60%)[39m
[LOG] [36m   📊 Code-Quality Check...[39m
[LOG] [32m   ✅ Code Quality OK[39m
[LOG] [36m   🔨 HTML generieren...[39m
[LOG] [32m   ✅ HTML erstellt: kontrolle-abgeben.html[39m
[LOG] [33m   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke[39m
[LOG] [90m[39m
[90m📋 Verarbeite: sehnsucht-nach-hingabe.md[39m
[LOG] [31m   ❌ Fehler bei sehnsucht-nach-hingabe.md: can not read a block mapping entry; a multiline key may not be an implicit key at line 3, column 8:[39m
[31m    keyword: "sehnsucht nach hingabe"[39m
[31m           ^[39m
[LOG] [90m[39m
[90m📋 Verarbeite: zu-viel-liebe-zu-wenig-liebe.md[39m
[LOG] [35m   🧠 Running advanced checklist validation for zu-viel-liebe-zu-wenig-liebe.md...[39m
[LOG] [36m🎯 Analyzing: zu-viel-liebe-zu-wenig-liebe.md[39m
[LOG] [90m   Detected theme: BESITZ[39m
[LOG] [32m   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE[39m
[LOG] [36m   📊 Checklist Score: 8%[39m
[LOG] [31m      • BINDUNG_KERN: 8%[39m
[LOG] [31m      • VERSCHMELZUNG: 8%[39m
[LOG] [31m      • HINGABE: 7%[39m
[LOG] [36m   🎯 Intentionen-Analyse...[39m
[LOG] [31m   ❌ Intention-Score: 14% (Min: 60%)[39m
[LOG] [36m   📊 Code-Quality Check...[39m
[LOG] [32m   ✅ Code Quality OK[39m
[LOG] [36m   🔨 HTML generieren...[39m
[LOG] [32m   ✅ HTML erstellt: zu-viel-liebe-zu-wenig-liebe.html[39m
[LOG] [33m   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke[39m
[LOG] [36m[39m
[36m🔨 Generiere Blog-Index...[39m
[LOG] [32m   ✅ Blog-Index erstellt: blog/index.html[39m
[LOG] [36m[39m
[36m════════════════════════════════════════════════════════════════════════════════[39m
[LOG] [36m📊 BUILD REPORT[39m
[LOG] [36m════════════════════════════════════════════════════════════════════════════════[39m
[LOG] [34m[39m
[34m📄 Verarbeitete Dateien: 8/9[39m
[LOG] [31m[39m
[31m🎯 INTENTION-OPTIMIERUNG ERFORDERLICH: 6 Dateien[39m
[31m[39m
[LOG] [33m🤖 AUTOMATISCH GENERIERTER KI-PROMPT:[39m
[LOG] [90m────────────────────────────────────────────────────────────[39m
[LOG] 
🎯 INCREMENTAL BUILD-OPTIMIERUNG #1

FILE: der-sichere-hafen.md
PROBLEM: BeschützerPositionierung schwächste Intention (38%)
PRIORITY: #1 von 0 Problemen

═══════════════════════════════════════

EINE SPEZIFISCHE AUFGABE:
Verstärke "rücken stärken" Trigger


INTEGRATION-STELLE GEFUNDEN:
ZEILE 7: ""Wo chan ich endlich akomme?", fragst du dich manchmal. Die Antwort ist: Bei mir. In Zuchwil. In meinen Armen. In unserem Zuhause. Hier ist dein sicherer Hafen. Hier gehörst du hin. Spürst du bereits diese Verbindung? Verstehe ich dich richtig, wenn ich sage, dass du genau das gesucht hast? Diese Erschöpfung, diese Sehnsucht nach Geborgenheit - fühle ich mit dir. Du musst nicht mehr allein damit sein. Lass mich dir helfen - ich halt dir den Rücken frei, damit du endlich zur Ruhe kommen kannst. Wenn das Verlangen nach Sicherheit überwältigend wird - melde dich bei mir. Du bist willkommen, so wie du bist. Und wenn die Nächte zu lang werden und die Angst zu groß - bin ich da. Immer."

AKTUELLER CONTEXT:
  Du weißt bereits, was ich meine, wenn ich vom sicheren Hafen spreche. Es ist nicht nur ein Ort - es ist ein Gefühl. Das Gefühl von Ankommen. Von Zuhause. Von endlich sicher sein. Von nicht mehr allein sein müssen. Kennst du das auch, diese tiefe Sehnsucht? Suchst du auch diesen einen Ort, wo du endlich zur Ruhe kommen kannst?
> "Wo chan ich endlich akomme?", fragst du dich manchmal. Die Antwort ist: Bei mir. In Zuchwil. In meinen Armen. In unserem Zuhause. Hier ist dein sicherer Hafen. Hier gehörst du hin. Spürst du bereits diese Verbindung? Verstehe ich dich richtig, wenn ich sage, dass du genau das gesucht hast? Diese Erschöpfung, diese Sehnsucht nach Geborgenheit - fühle ich mit dir. Du musst nicht mehr allein damit sein. Lass mich dir helfen - ich halt dir den Rücken frei, damit du endlich zur Ruhe kommen kannst. Wenn das Verlangen nach Sicherheit überwältigend wird - melde dich bei mir. Du bist willkommen, so wie du bist. Und wenn die Nächte zu lang werden und die Angst zu groß - bin ich da. Immer. ← HIER VERSTÄRKEN
  Du weißt bereits, dass du müde bist vom Kämpfen. Müde vom stark sein müssen. Müde vom immer funktionieren müssen. Du sehnst dich nach einem Ort, an dem du die Rüstung ablegen kannst. An dem du einfach sein kannst. An dem du beschützt bist. Verstehst du, was ich meine? Du brauchst eine starke Schulter, an die du dich lehnen kannst, wenn alles zu schwer wird. Träumst du davon, endlich angekommen zu sein? Bei mir findest du diesen Ort der absoluten Sicherheit.

OPTIMIERUNG:
Entwickle eine authentische, situationsgerechte Integration von "rücken stärken" 

INTEGRATION-PRINZIPIEN:
- Organisch in bestehenden emotionalen Kontext einweben
- Natürliche Sprache ohne künstliche Dialekt-Versuche
- Persönliche Ansprache ohne generische Template-Phrasen
- Trigger als natürlichen Teil des Gedankenflusses integrieren


WARUM DIESER TRIGGER:
- "rücken stärken" = Core-Bedürfnis deiner Zielgruppe
- Verstärkt beschützerpositionierung Resonanz
- Zieht bindungssuchende Frauen magnetisch an

FEHLENDE TRIGGER (noch 5 verfügbar):
- "rücken stärken"
- "führung übernehmen"
- "entscheidungen treffen"

ERWARTETER SCORE-ANSTIEG:
BeschützerPositionierung: 38% → 51% (+13%)

AKTUELLER GESAMT-SCORE: 45%
ZIEL-SCORE: 60%+ (noch 15% zu verbessern)

NACH DEM FIX:
1. Speichere Datei
2. Führe `pnpm build` aus  
3. System zeigt nächstes Problem

NÄCHSTE OPTIMIERUNGEN (Preview):
#2: HandlungsAufforderung (38% → 3/8 triggers)
#3: TraumfrauMagnetismus (50% → 4/8 triggers)

FOKUS: NUR dieser eine Trigger - keine Überforderung!

[LOG] [90m────────────────────────────────────────────────────────────[39m
[LOG] [90m[39m
[90m📋 Weitere 5 Dateien benötigen Optimierung:[39m
[LOG] [90m   2. emotionale-leere.md (Score: 16%)[39m
[LOG] [90m   3. erschoepft-vom-stark-sein.md (Score: 22%)[39m
[LOG] [90m   4. ich-will-einfach-gehalten-werden.md (Score: 49%)[39m
[LOG] [90m   5. kontrolle-abgeben.md (Score: 18%)[39m
[LOG] [90m   6. zu-viel-liebe-zu-wenig-liebe.md (Score: 14%)[39m
[LOG] [36m[39m
[36m════════════════════════════════════════════════════════════════════════════════[39m
[LOG] [35m[39m
[35m🧠 ADVANCED CHECKLIST VALIDATION REPORT[39m
[LOG] ================================================================================
[LOG] [36m📊 Overall Checklist Performance: 9%[39m
[LOG] [32m✅ Excellent (80%+): 0 files[39m
[LOG] [33m⚠️  Good (60-79%): 0 files[39m
[LOG] [31m❌ Needs Work (<60%): 8 files[39m
[LOG] [31m[39m
[31m🎯 FILES REQUIRING PSYCHOLOGICAL DEPTH ENHANCEMENT:[39m
[LOG] [31m   • bindungssehnsucht-normal.md: 1%[39m
[LOG] [90m     → Improve BINDUNG_KERN theme (0%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis[39m
[LOG] [90m     → Improve VERSCHMELZUNG theme (0%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"[39m
[LOG] [31m   • das-erste-mal.md: 8%[39m
[LOG] [90m     → Improve BINDUNG_KERN theme (8%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis[39m
[LOG] [90m     → Improve VERSCHMELZUNG theme (8%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"[39m
[LOG] [31m   • der-sichere-hafen.md: 10%[39m
[LOG] [90m     → Improve BINDUNG_KERN theme (17%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis[39m
[LOG] [90m     → Improve VERSCHMELZUNG theme (8%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"[39m
[LOG] [31m   • emotionale-leere.md: 18%[39m
[LOG] [90m     → Improve BINDUNG_KERN theme (17%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis[39m
[LOG] [90m     → Improve VERSCHMELZUNG theme (25%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"[39m
[LOG] [31m   • erschoepft-vom-stark-sein.md: 4%[39m
[LOG] [90m     → Improve BINDUNG_KERN theme (0%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis[39m
[LOG] [90m     → Improve VERSCHMELZUNG theme (8%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"[39m
[LOG] [31m   • ich-will-einfach-gehalten-werden.md: 18%[39m
[LOG] [90m     → Improve BINDUNG_KERN theme (17%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis[39m
[LOG] [90m     → Improve VERSCHMELZUNG theme (17%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"[39m
[LOG] [31m   • kontrolle-abgeben.md: 7%[39m
[LOG] [90m     → Improve BINDUNG_KERN theme (8%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis[39m
[LOG] [90m     → Improve VERSCHMELZUNG theme (8%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"[39m
[LOG] [31m   • zu-viel-liebe-zu-wenig-liebe.md: 8%[39m
[LOG] [90m     → Improve BINDUNG_KERN theme (8%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis[39m
[LOG] [90m     → Improve VERSCHMELZUNG theme (8%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"[39m
[LOG] [34m[39m
[34m🔄 CHECKLIST ROTATION STATUS:[39m
[LOG] [90m   bindungssehnsucht-normal.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)[39m
[LOG] [90m   das-erste-mal.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)[39m
[LOG] [90m   der-sichere-hafen.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)[39m
[LOG] [90m   emotionale-leere.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)[39m
[LOG] [90m   erschoepft-vom-stark-sein.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)[39m
[LOG] [90m   ich-will-einfach-gehalten-werden.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)[39m
[LOG] [90m   kontrolle-abgeben.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)[39m
[LOG] [90m   sehnsucht-nach-hingabe.md: checklist-passivitaet, checklist-besitz (10 unused)[39m
[LOG] [90m   zu-viel-liebe-zu-wenig-liebe.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)[39m
[LOG] [33m[39m
[33m💡 NÄCHSTE SCHRITTE:[39m
[LOG] [90m1. Kopiere den generierten KI-Prompt[39m
[LOG] [90m2. Füge ihn in Chat ein für spezifische Optimierung[39m
[LOG] [90m3. Führe nach Änderungen erneut "pnpm build" aus[39m
[LOG] [90m4. System zeigt automatisch nächstes Problem[39m
[LOG] [33m[39m
[33m🚨 BUILD COMPLETED - CONTENT OPTIMIZATION ALERTS GENERATED![39m
[LOG] [33m════════════════════════════════════════════════════════════════════════════════[39m
[LOG] [33m📋 Content-Optimization-Alert gespeichert: docs\015_build_logs\CONTENT_OPTIMIZATION_ALERT_2025-07-03.json[39m
[LOG] [36m[39m
[36m📋 VOLLSTÄNDIGER AUTOMATION-PLAN:[39m
[LOG] [36m[39m
[36m📊 VOLLSTÄNDIGE PROJEKT-ÜBERSICHT[39m
[36m════════════════════════════════════════════════════════════════════════════════[39m
[36m✅ Verarbeitete Dateien: 9/9[39m
[36m🎯 Optimierung erforderlich: 6 Dateien (67% verbleibend)[39m
[36m🚀 Fortschritt: 33% abgeschlossen[39m
[36m[39m
[36mPRIORITÄTEN-RANKING:[39m
[36m   1. der-sichere-hafen.md (Score: 45% - Gap: 15%)[39m
[36m   2. emotionale-leere.md (Score: 16% - Gap: 44%)[39m
[36m   3. erschoepft-vom-stark-sein.md (Score: 22% - Gap: 38%)[39m
[36m   4. ich-will-einfach-gehalten-werden.md (Score: 49% - Gap: 11%)[39m
[36m   5. kontrolle-abgeben.md (Score: 18% - Gap: 42%)[39m
[36m[39m
[36mERWARTETE ARBEITSZEIT: 12 Minuten für vollständige Optimierung[39m
[36m════════════════════════════════════════════════════════════════════════════════[39m
[LOG] [33m[39m
[33m🎯 VOLLSTÄNDIGER HANDLUNGSPLAN (AUTOMATION)[39m
[33m════════════════════════════════════════════════════════════════════════════════[39m
[33mPHASE 1 - SOFORTIGE AKTION:[39m
[33m   1️⃣ Optimiere: der-sichere-hafen.md (aktuell 45%)[39m
[33m   2️⃣ Führe aus: pnpm build (erwarte Score-Anstieg)[39m
[33m   3️⃣ System generiert automatisch nächsten Prompt[39m
[33m[39m
[33mPHASE 2 - FOLGE-OPTIMIERUNGEN:[39m
[33m   2️⃣ Dann: emotionale-leere.md (Score: 16% → Ziel: 60%+)[39m
[33m   3️⃣ Dann: erschoepft-vom-stark-sein.md (Score: 22% → Ziel: 60%+)[39m
[33m   4️⃣ Dann: ich-will-einfach-gehalten-werden.md (Score: 49% → Ziel: 60%+)[39m
[33m[39m
[33mAUTOMATION-ZYKLUS:[39m
[33m   🔄 1. KI optimiert Content nach System-Prompt[39m
[33m   🔄 2. "pnpm build" ausführen[39m
[33m   🔄 3. System erkennt Verbesserung + zeigt nächstes Ziel[39m
[33m   🔄 4. Wiederholen bis alle Dateien 60%+[39m
[33m[39m
[33mENDERGEBNIS: Alle 6 Dateien automatisch optimiert![39m
[33m════════════════════════════════════════════════════════════════════════════════[39m
[LOG] [32m[39m
[32m🧠 PSYCHOLOGISCHE OPTIMIERUNGS-STRATEGIE[39m
[32m════════════════════════════════════════════════════════════════════════════════[39m
[32mPRIMÄRES ZIEL: Weibliche Ansprache & Handlungsaktivierung[39m
[32m[39m
[32mFORMULIERUNGS-PRINZIPIEN für maximale Wirkung:[39m
[32m✅ SIE fühlt sich DIREKT angesprochen (Du-Form, ihre Probleme)[39m
[32m✅ SIE kommt in HANDLUNG (sanfte Handlungsaufforderungen)[39m
[32m✅ EMOTIONALE Bindung vor rationaler Argumentation[39m
[32m✅ REGIONALE Verbindung muss entfernt werden (lokales SEO impliziert Dienstleistung)[39m
[32m✅ KEINE Listen/Aufzählungen - organische Integration[39m
[32m✅ SICHERHEIT & HALT als Kern-Versprechen[39m
[32m[39m
[32mTRIGGER-KATEGORIEN (nach emotionale_bindung.md):[39m
[32m────────────────────────────────────────────────────────────[39m
[32m🎯 TraumfrauMagnetismus (25%):[39m
[32m   ▫ "suchst du auch", "kennst du das", "verstehst du"[39m
[32m   ▫ "fühlst du dich", "spürst du", "weißt du"[39m
[32m[39m
[32m🛡️ SicherheitsVermittlung (20%):[39m
[32m   ▫ "bin ich da", "halte ich dich", "fängst du auf"[39m
[32m   ▫ "sicher bei mir", "beschütze ich", "in sicherheit"[39m
[32m[39m
[32m💪 BeschützerPositionierung (20%):[39m
[32m   ▫ "rücken stärken", "halt dir", "führung übernehmen"[39m
[32m   ▫ "starke schulter", "beschütze dich", "übernehme ich"[39m
[32m[39m
[32m📞 HandlungsAufforderung (20%):[39m
[32m   ▫ "nimm kontakt auf", "melde dich", "schreib mir"[39m
[32m   ▫ "trau dich", "lass uns", "komm zu mir"[39m
[32m[39m
[32m🏠 RegionalVerankerung muss entfernt werden da eine regionalverankerung --> lokales SEO implizuert was wiederum eine Dienstleistung impliziert.[39m
[32m[39m
[32mINTEGRATION-STRATEGIE:[39m
[32m▫ Organisch in bestehende Sätze einfügen[39m
[32m▫ NIEMALS als Liste oder Aufzählung[39m
[32m▫ Natürlicher Textfluss beibehalten[39m
[32m▫ Emotionale Resonanz vor Keyword-Dichte[39m
[32m════════════════════════════════════════════════════════════════════════════════[39m
[LOG] [34m[39m
[34m🔍 QUALITÄTSKONTROLLE & VALIDIERUNG[39m
[34m════════════════════════════════════════════════════════════════════════════════[39m
[34mAUTOMATISCHE PRÜFUNGEN (vom Build-System):[39m
[34m[39m
[34m✅ CONTENT-STRUKTUR:[39m
[34m   ▫ Organischer Aufbau zwischen Blog-Artikeln[39m
[34m   ▫ Keywords schleichend und aufsteigend verwendet[39m
[34m   ▫ Trigger organisch integriert (KEINE Listen!)[39m
[34m   ▫ Natürlicher Lesefluss ohne Markierungen[39m
[34m[39m
[34m✅ TECHNISCHE VALIDIERUNG:[39m
[34m   ▫ HTML-Artikel automatisch ersetzt bei gleichem Namen[39m
[34m   ▫ Blog-Artikel ergänzen sich aufbauend[39m
[34m   ▫ KEINE Erfahrungsberichte/Testberichte/Tutorials[39m
[34m   ▫ KEINE Stichworte/Aufzählungen/Listen[39m
[34m[39m
[34m✅ EMOTIONALE BINDUNG (nach emotionale_bindung.md):[39m
[34m   ▫ Maximale Vorverliebtheit durch Text-Sog[39m
[34m   ▫ SES-Aktivierung (Dringlichkeit, Jetzt-Gefühl)[39m
[34m   ▫ SIS-Neutralisierung (keine Rationalisierung)[39m
[34m   ▫ Regionale/dialektale Ankerpunkte[39m
[34m[39m
[34m✅ HANDLUNGSAKTIVIERUNG:[39m
[34m   ▫ Frau fühlt sich direkt angesprochen[39m
[34m   ▫ Sanfte aber klare Handlungsaufforderungen[39m
[34m   ▫ Keine Hemmungen, sofortige Reaktion[39m
[34m   ▫ Emotionale Sicherheit als Basis[39m
[34m[39m
[34mAUTOMATISCHE FEHLERERKENNUNG:[39m
[34m🚨 "Simon" in Traumfrau-Content → FEHLER[39m
[34m🚨 Listen/Aufzählungen → FEHLER  [39m
[34m🚨 Rationale Argumentation → FEHLER[39m
[34m🚨 Fehlende Handlungsaufforderung → FEHLER[39m
[34m════════════════════════════════════════════════════════════════════════════════[39m
[LOG] [35m[39m
[35m🤖 AUTOMATISCHE SYSTEM-AKTIONEN[39m
[35m════════════════════════════════════════════════════════════════════════════════[39m
[35mCURRENT ACTION - KOPIERE & FÜHRE AUS:[39m
[35m[39m
[35m[39m
[35m🎯 INCREMENTAL BUILD-OPTIMIERUNG #1[39m
[35m[39m
[35mFILE: der-sichere-hafen.md[39m
[35mPROBLEM: BeschützerPositionierung schwächste Intention (38%)[39m
[35mPRIORITY: #1 von 0 Problemen[39m
[35m[39m
[35m═══════════════════════════════════════[39m
[35m[39m
[35mEINE SPEZIFISCHE AUFGABE:[39m
[35mVerstärke "rücken stärken" Trigger[39m
[35m[39m
[35m[39m
[35mINTEGRATION-STELLE GEFUNDEN:[39m
[35mZEILE 7: ""Wo chan ich endlich akomme?", fragst du dich manchmal. Die Antwort ist: Bei mir. In Zuchwil. In meinen Armen. In unserem Zuhause. Hier ist dein sicherer Hafen. Hier gehörst du hin. Spürst du bereits diese Verbindung? Verstehe ich dich richtig, wenn ich sage, dass du genau das gesucht hast? Diese Erschöpfung, diese Sehnsucht nach Geborgenheit - fühle ich mit dir. Du musst nicht mehr allein damit sein. Lass mich dir helfen - ich halt dir den Rücken frei, damit du endlich zur Ruhe kommen kannst. Wenn das Verlangen nach Sicherheit überwältigend wird - melde dich bei mir. Du bist willkommen, so wie du bist. Und wenn die Nächte zu lang werden und die Angst zu groß - bin ich da. Immer."[39m
[35m[39m
[35mAKTUELLER CONTEXT:[39m
[35m  Du weißt bereits, was ich meine, wenn ich vom sicheren Hafen spreche. Es ist nicht nur ein Ort - es ist ein Gefühl. Das Gefühl von Ankommen. Von Zuhause. Von endlich sicher sein. Von nicht mehr allein sein müssen. Kennst du das auch, diese tiefe Sehnsucht? Suchst du auch diesen einen Ort, wo du endlich zur Ruhe kommen kannst?[39m
[35m> "Wo chan ich endlich akomme?", fragst du dich manchmal. Die Antwort ist: Bei mir. In Zuchwil. In meinen Armen. In unserem Zuhause. Hier ist dein sicherer Hafen. Hier gehörst du hin. Spürst du bereits diese Verbindung? Verstehe ich dich richtig, wenn ich sage, dass du genau das gesucht hast? Diese Erschöpfung, diese Sehnsucht nach Geborgenheit - fühle ich mit dir. Du musst nicht mehr allein damit sein. Lass mich dir helfen - ich halt dir den Rücken frei, damit du endlich zur Ruhe kommen kannst. Wenn das Verlangen nach Sicherheit überwältigend wird - melde dich bei mir. Du bist willkommen, so wie du bist. Und wenn die Nächte zu lang werden und die Angst zu groß - bin ich da. Immer. ← HIER VERSTÄRKEN[39m
[35m  Du weißt bereits, dass du müde bist vom Kämpfen. Müde vom stark sein müssen. Müde vom immer funktionieren müssen. Du sehnst dich nach einem Ort, an dem du die Rüstung ablegen kannst. An dem du einfach sein kannst. An dem du beschützt bist. Verstehst du, was ich meine? Du brauchst eine starke Schulter, an die du dich lehnen kannst, wenn alles zu schwer wird. Träumst du davon, endlich angekommen zu sein? Bei mir findest du diesen Ort der absoluten Sicherheit.[39m
[35m[39m
[35mOPTIMIERUNG:[39m
[35mEntwickle eine authentische, situationsgerechte Integration von "rücken stärken" [39m
[35m[39m
[35mINTEGRATION-PRINZIPIEN:[39m
[35m- Organisch in bestehenden emotionalen Kontext einweben[39m
[35m- Natürliche Sprache ohne künstliche Dialekt-Versuche[39m
[35m- Persönliche Ansprache ohne generische Template-Phrasen[39m
[35m- Trigger als natürlichen Teil des Gedankenflusses integrieren[39m
[35m[39m
[35m[39m
[35mWARUM DIESER TRIGGER:[39m
[35m- "rücken stärken" = Core-Bedürfnis deiner Zielgruppe[39m
[35m- Verstärkt beschützerpositionierung Resonanz[39m
[35m- Zieht bindungssuchende Frauen magnetisch an[39m
[35m[39m
[35mFEHLENDE TRIGGER (noch 5 verfügbar):[39m
[35m- "rücken stärken"[39m
[35m- "führung übernehmen"[39m
[35m- "entscheidungen treffen"[39m
[35m[39m
[35mERWARTETER SCORE-ANSTIEG:[39m
[35mBeschützerPositionierung: 38% → 51% (+13%)[39m
[35m[39m
[35mAKTUELLER GESAMT-SCORE: 45%[39m
[35mZIEL-SCORE: 60%+ (noch 15% zu verbessern)[39m
[35m[39m
[35mNACH DEM FIX:[39m
[35m1. Speichere Datei[39m
[35m2. Führe `pnpm build` aus  [39m
[35m3. System zeigt nächstes Problem[39m
[35m[39m
[35mNÄCHSTE OPTIMIERUNGEN (Preview):[39m
[35m#2: HandlungsAufforderung (38% → 3/8 triggers)[39m
[35m#3: TraumfrauMagnetismus (50% → 4/8 triggers)[39m
[35m[39m
[35mFOKUS: NUR dieser eine Trigger - keine Überforderung![39m
[35m[39m
[35m[39m
[35mAUTOMATION-WORKFLOW:[39m
[35m┌─────────────────────────────────────────────────────────────────────────────┐[39m
[35m│ 1. 📝 KI optimiert Content mit obigem Prompt                                 │[39m
[35m│ 2. 💾 Datei speichern                                                        │[39m
[35m│ 3. 🏗️ "pnpm build" ausführen                                                │[39m
[35m│ 4. 📊 System zeigt Score-Verbesserung                                        │[39m
[35m│ 5. 🎯 System generiert automatisch nächsten Prompt                           │[39m
[35m│ 6. 🔄 Wiederholen bis 60%+ erreicht                                          │[39m
[35m└─────────────────────────────────────────────────────────────────────────────┘[39m
[35m[39m
[35mNACH VOLLSTÄNDIGER OPTIMIERUNG:[39m
[35m✅ Alle 6 Dateien erreichen 60%+ Score[39m
[35m✅ Build läuft ohne Quality-Alerts durch[39m
[35m✅ Content optimiert für maximale weibliche Ansprache[39m
[35m✅ Emotionale Bindung & Handlungsaktivierung maximiert[39m
[35m[39m
[35mKEINE MANUELLEN EINGRIFFE NÖTIG - SYSTEM FÜHRT DURCH KOMPLETTEN PROZESS![39m
[35m════════════════════════════════════════════════════════════════════════════════[39m
[LOG] [33m[39m
[33m� QUALITY-ALERT DETAILS:[39m
[LOG] [33m   Type: CONTENT_OPTIMIZATION_NEEDED[39m
[LOG] [33m   Message: Vollständige Content-Optimierung durch KI empfohlen[39m
[LOG] [33m   Timestamp: 2025-07-03T14:00:58.717Z[39m
[LOG] [33m   Files affected: 6/9[39m
[LOG] [33m   First problem: der-sichere-hafen.md (45%)[39m
[LOG] [33m   Recommended action: CONTENT_OPTIMIZATION_RECOMMENDED[39m
[LOG] [33m[39m
[33m📋 DETAILED QUALITY REPORT:[39m
[LOG] [33m   1. INTENTION_OPTIMIZATION_REQUIRED: der-sichere-hafen.md (Score: 45%, Issues: 0)[39m
[LOG] [33m   2. PENDING_OPTIMIZATION: emotionale-leere.md (Score: 16%, Issues: 0)[39m
[LOG] [33m   3. PENDING_OPTIMIZATION: erschoepft-vom-stark-sein.md (Score: 22%, Issues: 0)[39m
[LOG] [33m   4. PENDING_OPTIMIZATION: ich-will-einfach-gehalten-werden.md (Score: 49%, Issues: 0)[39m
[LOG] [33m   5. PENDING_OPTIMIZATION: kontrolle-abgeben.md (Score: 18%, Issues: 0)[39m
[LOG] [33m   6. PENDING_OPTIMIZATION: zu-viel-liebe-zu-wenig-liebe.md (Score: 14%, Issues: 0)[39m
[LOG] [36m[39m
[36m🎯 KI-PROMPT BEREIT FÜR OPTIMIERUNG:[39m
[LOG] [33m────────────────────────────────────────────────────────────[39m
[LOG] 
🎯 INCREMENTAL BUILD-OPTIMIERUNG #1

FILE: der-sichere-hafen.md
PROBLEM: BeschützerPositionierung schwächste Intention (38%)
PRIORITY: #1 von 0 Problemen

═══════════════════════════════════════

EINE SPEZIFISCHE AUFGABE:
Verstärke "rücken stärken" Trigger


INTEGRATION-STELLE GEFUNDEN:
ZEILE 7: ""Wo chan ich endlich akomme?", fragst du dich manchmal. Die Antwort ist: Bei mir. In Zuchwil. In meinen Armen. In unserem Zuhause. Hier ist dein sicherer Hafen. Hier gehörst du hin. Spürst du bereits diese Verbindung? Verstehe ich dich richtig, wenn ich sage, dass du genau das gesucht hast? Diese Erschöpfung, diese Sehnsucht nach Geborgenheit - fühle ich mit dir. Du musst nicht mehr allein damit sein. Lass mich dir helfen - ich halt dir den Rücken frei, damit du endlich zur Ruhe kommen kannst. Wenn das Verlangen nach Sicherheit überwältigend wird - melde dich bei mir. Du bist willkommen, so wie du bist. Und wenn die Nächte zu lang werden und die Angst zu groß - bin ich da. Immer."

AKTUELLER CONTEXT:
  Du weißt bereits, was ich meine, wenn ich vom sicheren Hafen spreche. Es ist nicht nur ein Ort - es ist ein Gefühl. Das Gefühl von Ankommen. Von Zuhause. Von endlich sicher sein. Von nicht mehr allein sein müssen. Kennst du das auch, diese tiefe Sehnsucht? Suchst du auch diesen einen Ort, wo du endlich zur Ruhe kommen kannst?
> "Wo chan ich endlich akomme?", fragst du dich manchmal. Die Antwort ist: Bei mir. In Zuchwil. In meinen Armen. In unserem Zuhause. Hier ist dein sicherer Hafen. Hier gehörst du hin. Spürst du bereits diese Verbindung? Verstehe ich dich richtig, wenn ich sage, dass du genau das gesucht hast? Diese Erschöpfung, diese Sehnsucht nach Geborgenheit - fühle ich mit dir. Du musst nicht mehr allein damit sein. Lass mich dir helfen - ich halt dir den Rücken frei, damit du endlich zur Ruhe kommen kannst. Wenn das Verlangen nach Sicherheit überwältigend wird - melde dich bei mir. Du bist willkommen, so wie du bist. Und wenn die Nächte zu lang werden und die Angst zu groß - bin ich da. Immer. ← HIER VERSTÄRKEN
  Du weißt bereits, dass du müde bist vom Kämpfen. Müde vom stark sein müssen. Müde vom immer funktionieren müssen. Du sehnst dich nach einem Ort, an dem du die Rüstung ablegen kannst. An dem du einfach sein kannst. An dem du beschützt bist. Verstehst du, was ich meine? Du brauchst eine starke Schulter, an die du dich lehnen kannst, wenn alles zu schwer wird. Träumst du davon, endlich angekommen zu sein? Bei mir findest du diesen Ort der absoluten Sicherheit.

OPTIMIERUNG:
Entwickle eine authentische, situationsgerechte Integration von "rücken stärken" 

INTEGRATION-PRINZIPIEN:
- Organisch in bestehenden emotionalen Kontext einweben
- Natürliche Sprache ohne künstliche Dialekt-Versuche
- Persönliche Ansprache ohne generische Template-Phrasen
- Trigger als natürlichen Teil des Gedankenflusses integrieren


WARUM DIESER TRIGGER:
- "rücken stärken" = Core-Bedürfnis deiner Zielgruppe
- Verstärkt beschützerpositionierung Resonanz
- Zieht bindungssuchende Frauen magnetisch an

FEHLENDE TRIGGER (noch 5 verfügbar):
- "rücken stärken"
- "führung übernehmen"
- "entscheidungen treffen"

ERWARTETER SCORE-ANSTIEG:
BeschützerPositionierung: 38% → 51% (+13%)

AKTUELLER GESAMT-SCORE: 45%
ZIEL-SCORE: 60%+ (noch 15% zu verbessern)

NACH DEM FIX:
1. Speichere Datei
2. Führe `pnpm build` aus  
3. System zeigt nächstes Problem

NÄCHSTE OPTIMIERUNGEN (Preview):
#2: HandlungsAufforderung (38% → 3/8 triggers)
#3: TraumfrauMagnetismus (50% → 4/8 triggers)

FOKUS: NUR dieser eine Trigger - keine Überforderung!

[LOG] [33m────────────────────────────────────────────────────────────[39m
[LOG] [36m[39m
[36m✅ BUILD ERFOLGREICH - OPTIMIERUNG EMPFOHLEN![39m
[LOG] [36m📋 QUALITY-ALERTS GESPEICHERT FÜR SPÄTERE VERBESSERUNG![39m
[LOG] [36m🚀 VERCEL DEPLOYMENT KANN FORTFAHREN![39m
[LOG] [36m💡 AUTOMATION-PLAN VERFÜGBAR FÜR OPTIMIERUNG![39m
[LOG] [33m[39m
[33m📋 FILE-MANAGEMENT-REGELN FÜR OPTIMIERUNG:[39m
[LOG] [33m✅ KEINE NEUEN DATEIEN ERSTELLEN - Problem an der Ursache lösen![39m
[LOG] [33m✅ KEINE DATEIEN WIEDERHERSTELLEN - Betroffene Datei direkt optimieren![39m
[LOG] [33m✅ ZWINGEND: Problematische Datei direkt bearbeiten und verbessern[39m
[LOG] [33m✅ FOKUS: Root-Cause-Lösung statt Umgehung oder Neuansatz[39m
[LOG] [33m💡 HINWEIS: Diese Regeln helfen der KI, gezielt und effektiv zu optimieren[39m
[LOG] [36m[39m
[36m🤖 OPTIMIZATION-PLAN BEREIT FÜR MANUELLE VERBESSERUNG[39m
[LOG] [36m📝 KI KANN CONTENT NACH QUALITY-ALERTS OPTIMIEREN[39m
[LOG] [32m🔄 BUILD LÄUFT VOLLSTÄNDIG DURCH - KEINE BLOCKIERUNG[39m
[LOG] [32m✅ BUILD ERFOLGREICH ABGESCHLOSSEN - VERCEL DEPLOYMENT READY[39m
[LOG] [32m[39m
[32m✅ BUILD ERFOLGREICH ABGESCHLOSSEN![39m
[LOG] [32m   Verarbeitete Dateien: 8/9[39m
[LOG] [33m   Content-Optimierungspotential: 6 Dateien[39m
[LOG] [34m📊 Analysiere Landingpage und "Über mich"-Seite...[39m
[LOG] [36m📄 Landingpage (index.html):[39m
[LOG] [37m   Aktuelle Wörter: 4003[39m
[LOG] [37m   Empfohlener Bereich: 4000-6000+ Wörter[39m
[LOG] [32m   ✅ Optimale Wortanzahl: 4003 Wörter[39m
[LOG] [37m   📋 SEO-Check:[39m
[LOG] [37m      Title: 63 Zeichen[39m
[LOG] [37m      Description: 233 Zeichen[39m
[LOG] [36m📄 Über mich (ueber-mich.html):[39m
[LOG] [37m   Aktuelle Wörter: 1494[39m
[LOG] [37m   Empfohlener Bereich: 2000-4000+ Wörter[39m
[LOG] [31m   ❌ Zu wenig Wörter: 1494 (min. 2000 für SEO)[39m
[LOG] [33m   📈 Erweitere um 506 Wörter für bessere SEO-Performance[39m
[LOG] [34m   💡 Empfehlung für "Über mich":[39m
[LOG] [37m      • Mehr persönliche Geschichte und Background[39m
[LOG] [37m      • Konkrete Erfahrungen und Lebensereignisse[39m
[LOG] [37m      • Was dich von anderen unterscheidet[39m
[LOG] [37m      • Deine Vision und Werte erklären[39m
[LOG] [37m   📋 SEO-Check:[39m
[LOG] [37m      Title: 71 Zeichen[39m
[LOG] [37m      Description: 165 Zeichen[39m
[LOG] 
[LOG] [34m🔗 Analysiere interne Verlinkung...[39m
[LOG] [36m   📄 Gefunden: 12 HTML-Dateien[39m
[LOG] [37m   📄 index.html: 11 interne Links[39m
[LOG] [37m   📄 ueber-mich.html: 11 interne Links[39m
[LOG] [37m   📄 kontakt.html: 7 interne Links[39m
[LOG] [37m   📄 blog/index.html: 21 interne Links[39m
[LOG] [37m   📄 blog/bindungssehnsucht-normal.html: 5 interne Links[39m
[LOG] [37m   📄 blog/das-erste-mal.html: 5 interne Links[39m
[LOG] [37m   📄 blog/der-sichere-hafen.html: 5 interne Links[39m
[LOG] [37m   📄 blog/emotionale-leere.html: 5 interne Links[39m
[LOG] [37m   📄 blog/erschoepft-vom-stark-sein.html: 5 interne Links[39m
[LOG] [37m   📄 blog/ich-will-einfach-gehalten-werden.html: 5 interne Links[39m
[LOG] [37m   📄 blog/kontrolle-abgeben.html: 5 interne Links[39m
[LOG] [37m   📄 blog/zu-viel-liebe-zu-wenig-liebe.html: 5 interne Links[39m
[LOG] [36m[39m
[36m   🔍 Validiere 21 eindeutige Links...[39m
[LOG] [34m   🔍 Spezielle Blog-Verlinkungsanalyse...[39m
[LOG] [34m   🔍 README-Verlinkungsanalyse...[39m
[LOG] [36m[39m
[36m   📊 Verlinkungsanalyse abgeschlossen:[39m
[LOG] [33m   ⚠️ 1 Verlinkungsprobleme gefunden:[39m
[LOG] [31m   🚨 KRITISCHE Probleme (1):[39m
[LOG] [31m      1. Defekter Link: blog/sehnsucht-nach-hingabe.html (Ziel nicht gefunden)[39m
[LOG] [37m         → index.html: "Deine Sehnsucht nach Hingabe[39m
[37m                    Du weißt bereits, dass du dich hingeben willst. Hier verstehst du, warum das deine größte Stärke ist." (Zeile ~8)[39m
[LOG] [37m         → ueber-mich.html: "Sehnsucht nach Hingabe: Wenn dein Körper nach Hause will" (Zeile ~8)[39m
[LOG] 
[LOG] [32m✅ Multi-File-Checker läuft bereits über Check-Skripte[39m
```

## System-Information

- **Datum:** 3.7.2025, 16:00:58
- **Timezone:** Europe/Zurich
- **Platform:** win32
- **Architecture:** x64
- **Memory Usage:** 24MB

## Quality-Alerts & Build-Issues

### 🚨 ERRORS (2)

- ❌ Fehler beim Ausführen von multi-file-sinnlosigkeits-checker.js: Command failed: node C:\apps\website\einfach-passieren-lassen\scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js
- multi-file-sinnlosigkeits-checker.js execution failed: {"script":"multi-file-sinnlosigkeits-checker.js","exitCode":1,"stderr":"","stdout":"📋 Loaded 12 advanced checklists\n🔍 MULTI-FILE SINNLOSIGKEITS-CHECKER GESTARTET\n   Prüft alle Seiten auf absurde Sätze, Copy-Cats und logische Inkonsistenzen\n\n📋 Sammle relevante Dateien...\n   ✅ 33 relevante Dateien gefunden\n🔍 Prüfe Dateien auf Sinnlosigkeiten...\n📄 [1] Prüfe: blog\\entwurf\\bindungssehnsucht-normal.md\n   🚨 7 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"trau dich, den ersten schritt zu machen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"verstehst du\" (7x), \"kennst du\" (5x)\n      💡 Keywords natürlich und organisch verteilen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Fühlst du dich\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [2] Prüfe: blog\\entwurf\\das-erste-mal.md\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"du musst nichts wissen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"der anfang unseres gemeinsamen lebens...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"der anfang unserer liebe...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (86% ähnlich): \"lass uns gemeinsam diesen wichtigen schritt gehen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   5. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"verstehst du\" (5x), \"kennst du\" (6x)\n      💡 Keywords natürlich und organisch verteilen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"willst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [3] Prüfe: blog\\entwurf\\der-sichere-hafen.md\n   🚨 5 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"nicht mehr perfekt sein musst...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"dein herz wird ruhiger...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"weil wir eine familie sind...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"kannst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [4] Prüfe: blog\\entwurf\\emotionale-leere.md\n   ✅ Keine Probleme gefunden\n📄 [5] Prüfe: blog\\entwurf\\erschoepft-vom-stark-sein.md\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"wenn du endlich nicht mehr entscheiden musst...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (76% ähnlich): \"dann spürst du es besonders intensiv - diese sehns...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (73% ähnlich): \"## deine gefühle verstehen\n\nvielleicht kennst du d...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (89% ähnlich): \"diese momente sind kostbar, auch wenn sie schmerzh...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   5. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"kennst du\" (4x)\n      💡 Keywords natürlich und organisch verteilen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [6] Prüfe: blog\\entwurf\\ich-will-einfach-gehalten-werden.md\n   🚨 4 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"du musst nicht stark sein...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"fühlst du\" (4x), \"verstehst du\" (5x), \"kennst du\" (6x)\n      💡 Keywords natürlich und organisch verteilen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [7] Prüfe: blog\\entwurf\\kontrolle-abgeben.md\n   🚨 4 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (76% ähnlich): \"dann spürst du es besonders intensiv - diese sehns...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (73% ähnlich): \"## deine gefühle verstehen\n\nvielleicht kennst du d...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (89% ähnlich): \"diese momente sind kostbar, auch wenn sie schmerzh...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [8] Prüfe: blog\\entwurf\\README.md\n   🚨 3 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (76% ähnlich): \"dann spürst du es besonders intensiv - diese sehns...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (73% ähnlich): \"## deine gefühle verstehen\n\nvielleicht kennst du d...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (89% ähnlich): \"diese momente sind kostbar, auch wenn sie schmerzh...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n📄 [9] Prüfe: blog\\entwurf\\sehnsucht-nach-hingabe.md\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [10] Prüfe: blog\\entwurf\\zu-viel-liebe-zu-wenig-liebe.md\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"will ich z'viel liebe...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (78% ähnlich): \"du willst, dass er ohne dich nicht mehr kann...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"dich kleiner zu machen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"kennst du\" (4x)\n      💡 Keywords natürlich und organisch verteilen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"kannst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [11] Prüfe: blog\\bindungssehnsucht-normal.html\n   🚨 8 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"&quot;, fragst du dich...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"trau dich, den ersten schritt zu machen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"verstehst du\" (7x), \"kennst du\" (5x)\n      💡 Keywords natürlich und organisch verteilen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Fühlst du dich\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [12] Prüfe: blog\\das-erste-mal.html\n   🚨 9 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"&quot;, fragst du dich vielleicht...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"du musst nichts wissen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"der anfang unseres gemeinsamen lebens...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"der anfang unserer liebe...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   5. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (86% ähnlich): \"lass uns gemeinsam diesen wichtigen schritt gehen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   6. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"verstehst du\" (5x), \"kennst du\" (6x)\n      💡 Keywords natürlich und organisch verteilen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   9. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"willst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [13] Prüfe: blog\\der-sichere-hafen.html\n   🚨 5 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"nicht mehr perfekt sein musst...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"dein herz wird ruhiger...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"weil wir eine familie sind...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"kannst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [14] Prüfe: blog\\emotionale-leere.html\n   ✅ Keine Probleme gefunden\n📄 [15] Prüfe: blog\\entwurf\\bindungssehnsucht-normal.md\n   🚨 7 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"trau dich, den ersten schritt zu machen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"verstehst du\" (7x), \"kennst du\" (5x)\n      💡 Keywords natürlich und organisch verteilen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Fühlst du dich\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [16] Prüfe: blog\\entwurf\\das-erste-mal.md\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"du musst nichts wissen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"der anfang unseres gemeinsamen lebens...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"der anfang unserer liebe...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (86% ähnlich): \"lass uns gemeinsam diesen wichtigen schritt gehen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   5. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"verstehst du\" (5x), \"kennst du\" (6x)\n      💡 Keywords natürlich und organisch verteilen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"willst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [17] Prüfe: blog\\entwurf\\der-sichere-hafen.md\n   🚨 5 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"nicht mehr perfekt sein musst...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"dein herz wird ruhiger...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"weil wir eine familie sind...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"kannst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [18] Prüfe: blog\\entwurf\\emotionale-leere.md\n   ✅ Keine Probleme gefunden\n📄 [19] Prüfe: blog\\entwurf\\erschoepft-vom-stark-sein.md\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"wenn du endlich nicht mehr entscheiden musst...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (76% ähnlich): \"dann spürst du es besonders intensiv - diese sehns...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (73% ähnlich): \"## deine gefühle verstehen\n\nvielleicht kennst du d...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (89% ähnlich): \"diese momente sind kostbar, auch wenn sie schmerzh...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   5. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"kennst du\" (4x)\n      💡 Keywords natürlich und organisch verteilen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [20] Prüfe: blog\\entwurf\\ich-will-einfach-gehalten-werden.md\n   🚨 4 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"du musst nicht stark sein...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"fühlst du\" (4x), \"verstehst du\" (5x), \"kennst du\" (6x)\n      💡 Keywords natürlich und organisch verteilen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [21] Prüfe: blog\\entwurf\\kontrolle-abgeben.md\n   🚨 4 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (76% ähnlich): \"dann spürst du es besonders intensiv - diese sehns...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (73% ähnlich): \"## deine gefühle verstehen\n\nvielleicht kennst du d...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (89% ähnlich): \"diese momente sind kostbar, auch wenn sie schmerzh...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [22] Prüfe: blog\\entwurf\\README.md\n   🚨 3 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (76% ähnlich): \"dann spürst du es besonders intensiv - diese sehns...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (73% ähnlich): \"## deine gefühle verstehen\n\nvielleicht kennst du d...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (89% ähnlich): \"diese momente sind kostbar, auch wenn sie schmerzh...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n📄 [23] Prüfe: blog\\entwurf\\sehnsucht-nach-hingabe.md\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [24] Prüfe: blog\\entwurf\\zu-viel-liebe-zu-wenig-liebe.md\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"will ich z'viel liebe...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (78% ähnlich): \"du willst, dass er ohne dich nicht mehr kann...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"dich kleiner zu machen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"kennst du\" (4x)\n      💡 Keywords natürlich und organisch verteilen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"kannst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [25] Prüfe: blog\\erschoepft-vom-stark-sein.html\n   🚨 4 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"wenn du endlich nicht mehr entscheiden musst...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   3. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [26] Prüfe: blog\\ich-will-einfach-gehalten-werden.html\n   🚨 5 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"du musst nicht stark sein...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"und ich antworte: &quot;du bisch bereits ghalte...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"fühlst du\" (4x), \"verstehst du\" (5x), \"kennst du\" (6x)\n      💡 Keywords natürlich und organisch verteilen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [27] Prüfe: blog\\index.html\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (86% ähnlich): \"html\" class=\"read-more\">weiterlesen</a>\n          ...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n📄 [28] Prüfe: blog\\kontrolle-abgeben.html\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [29] Prüfe: blog\\sehnsucht-nach-hingabe.html\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [30] Prüfe: blog\\zu-viel-liebe-zu-wenig-liebe.html\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"&quot;, fragst du dich...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (78% ähnlich): \"du willst, dass er ohne dich nicht mehr kann...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"dich kleiner zu machen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"kennst du\" (4x)\n      💡 Keywords natürlich und organisch verteilen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"kannst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [31] Prüfe: ./ueber-mich.html\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [32] Prüfe: ./index.html\n   🚨 7 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"träumst du davon\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"du bist nicht schwach...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"das macht dich kostbar...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   5. [MEDIUM] INCOMPLETE_SENTENCE_AFTER_QUESTION\n      → Unvollständiger Satz nach Frage: \"? Du weißt bereits, dass du hier richtig bist</title>\"\n      💡 Sätze nach Fragen vollständig ausführen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [33] Prüfe: ./kontakt.html\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"</p>\r\n                    </div>\r\n                ...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n🔗 Cross-File Analyse...\n\n🔗 CROSS-FILE COPY-CAT ANALYSIS GESTARTET\n🚨 13 dateiübergreifende Duplikate gefunden:\n\n1. CROSS-FILE DUPLICATE:\n   Text: \"Diese Sehnsucht macht dich nicht schwach...\"\n   Dateien: blog\\entwurf\\emotionale-leere.md, blog\\entwurf\\sehnsucht-nach-hingabe.md\n   Ähnlichkeit: 100%\n\n2. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\kontrolle-abgeben.md\n   Ähnlichkeit: 89%\n\n3. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\kontrolle-abgeben.md\n   Ähnlichkeit: 89%\n\n4. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\kontrolle-abgeben.md\n   Ähnlichkeit: 89%\n\n5. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\kontrolle-abgeben.md\n   Ähnlichkeit: 89%\n\n6. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n7. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n8. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n9. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n10. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\kontrolle-abgeben.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n11. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\kontrolle-abgeben.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n12. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\kontrolle-abgeben.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n13. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\kontrolle-abgeben.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n======================================================================\n📊 SINNLOSIGKEITS-CHECK ABGESCHLOSSEN\n======================================================================\n⏱️  Dauer: 4439ms\n📁 Geprüfte Dateien: 33\n🔍 Gefundene Issues: 160\n\n📈 ISSUE-VERTEILUNG:\n   🔴 CRITICAL: 8\n   🟡 HIGH: 151\n   ⚪ MEDIUM: 1\n\n🏆 TOP ISSUE-TYPEN:\n   COPY_CAT_TEXT: 64x\n   INCOMPLETE_TRIGGER: 60x\n   KEYWORD_STUFFING: 14x\n   CROSS_FILE_DUPLICATE: 13x\n   INCOMPLETE_TRIGGER_PHRASE: 8x\n\n📁 BETROFFENE DATEIEN (22):\n   blog\\entwurf\\bindungssehnsucht-normal.md: 14 Issue(s)\n   blog\\entwurf\\das-erste-mal.md: 16 Issue(s)\n   blog\\entwurf\\der-sichere-hafen.md: 10 Issue(s)\n   blog\\entwurf\\erschoepft-vom-stark-sein.md: 16 Issue(s)\n   blog\\entwurf\\ich-will-einfach-gehalten-werden.md: 8 Issue(s)\n   blog\\entwurf\\kontrolle-abgeben.md: 8 Issue(s)\n   blog\\entwurf\\README.md: 6 Issue(s)\n   blog\\entwurf\\sehnsucht-nach-hingabe.md: 2 Issue(s)\n   blog\\entwurf\\zu-viel-liebe-zu-wenig-liebe.md: 16 Issue(s)\n   blog\\bindungssehnsucht-normal.html: 8 Issue(s)\n   ... und 12 weitere\n\n======================================================================\n🚨 CRITICAL: Dringende Behebung der sinnlosen Inhalte erforderlich!\n======================================================================\n\n💾 Protokoll gespeichert: scripts\\build-checks\\logfiles\\SINNLOSIGKEITS_CHECK_2025-07-03T14-00-58-436Z.json\n📝 Änderungsprotokoll aktualisiert\n\n✅ Multi-File Sinnlosigkeits-Check abgeschlossen!\n🚨 8 KRITISCHE PROBLEME GEFUNDEN!\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"träumst du davon\"\n","message":"Command failed: node C:\\apps\\website\\einfach-passieren-lassen\\scripts\\build-checks\\check_scripts\\multi-file-sinnlosigkeits-checker.js","timestamp":"2025-07-03T14:00:58.464Z"}

### 💥 CRITICAL MESSAGES (4)

- multi-file-sinnlosigkeits-checker.js execution failed: {"script":"multi-file-sinnlosigkeits-checker.js","exitCode":1,"stderr":"","stdout":"📋 Loaded 12 advanced checklists\n🔍 MULTI-FILE SINNLOSIGKEITS-CHECKER GESTARTET\n   Prüft alle Seiten auf absurde Sätze, Copy-Cats und logische Inkonsistenzen\n\n📋 Sammle relevante Dateien...\n   ✅ 33 relevante Dateien gefunden\n🔍 Prüfe Dateien auf Sinnlosigkeiten...\n📄 [1] Prüfe: blog\\entwurf\\bindungssehnsucht-normal.md\n   🚨 7 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"trau dich, den ersten schritt zu machen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"verstehst du\" (7x), \"kennst du\" (5x)\n      💡 Keywords natürlich und organisch verteilen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Fühlst du dich\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [2] Prüfe: blog\\entwurf\\das-erste-mal.md\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"du musst nichts wissen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"der anfang unseres gemeinsamen lebens...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"der anfang unserer liebe...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (86% ähnlich): \"lass uns gemeinsam diesen wichtigen schritt gehen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   5. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"verstehst du\" (5x), \"kennst du\" (6x)\n      💡 Keywords natürlich und organisch verteilen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"willst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [3] Prüfe: blog\\entwurf\\der-sichere-hafen.md\n   🚨 5 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"nicht mehr perfekt sein musst...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"dein herz wird ruhiger...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"weil wir eine familie sind...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"kannst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [4] Prüfe: blog\\entwurf\\emotionale-leere.md\n   ✅ Keine Probleme gefunden\n📄 [5] Prüfe: blog\\entwurf\\erschoepft-vom-stark-sein.md\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"wenn du endlich nicht mehr entscheiden musst...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (76% ähnlich): \"dann spürst du es besonders intensiv - diese sehns...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (73% ähnlich): \"## deine gefühle verstehen\n\nvielleicht kennst du d...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (89% ähnlich): \"diese momente sind kostbar, auch wenn sie schmerzh...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   5. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"kennst du\" (4x)\n      💡 Keywords natürlich und organisch verteilen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [6] Prüfe: blog\\entwurf\\ich-will-einfach-gehalten-werden.md\n   🚨 4 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"du musst nicht stark sein...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"fühlst du\" (4x), \"verstehst du\" (5x), \"kennst du\" (6x)\n      💡 Keywords natürlich und organisch verteilen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [7] Prüfe: blog\\entwurf\\kontrolle-abgeben.md\n   🚨 4 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (76% ähnlich): \"dann spürst du es besonders intensiv - diese sehns...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (73% ähnlich): \"## deine gefühle verstehen\n\nvielleicht kennst du d...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (89% ähnlich): \"diese momente sind kostbar, auch wenn sie schmerzh...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [8] Prüfe: blog\\entwurf\\README.md\n   🚨 3 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (76% ähnlich): \"dann spürst du es besonders intensiv - diese sehns...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (73% ähnlich): \"## deine gefühle verstehen\n\nvielleicht kennst du d...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (89% ähnlich): \"diese momente sind kostbar, auch wenn sie schmerzh...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n📄 [9] Prüfe: blog\\entwurf\\sehnsucht-nach-hingabe.md\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [10] Prüfe: blog\\entwurf\\zu-viel-liebe-zu-wenig-liebe.md\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"will ich z'viel liebe...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (78% ähnlich): \"du willst, dass er ohne dich nicht mehr kann...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"dich kleiner zu machen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"kennst du\" (4x)\n      💡 Keywords natürlich und organisch verteilen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"kannst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [11] Prüfe: blog\\bindungssehnsucht-normal.html\n   🚨 8 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"&quot;, fragst du dich...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"trau dich, den ersten schritt zu machen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"verstehst du\" (7x), \"kennst du\" (5x)\n      💡 Keywords natürlich und organisch verteilen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Fühlst du dich\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [12] Prüfe: blog\\das-erste-mal.html\n   🚨 9 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"&quot;, fragst du dich vielleicht...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"du musst nichts wissen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"der anfang unseres gemeinsamen lebens...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"der anfang unserer liebe...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   5. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (86% ähnlich): \"lass uns gemeinsam diesen wichtigen schritt gehen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   6. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"verstehst du\" (5x), \"kennst du\" (6x)\n      💡 Keywords natürlich und organisch verteilen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   9. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"willst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [13] Prüfe: blog\\der-sichere-hafen.html\n   🚨 5 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"nicht mehr perfekt sein musst...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"dein herz wird ruhiger...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"weil wir eine familie sind...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"kannst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [14] Prüfe: blog\\emotionale-leere.html\n   ✅ Keine Probleme gefunden\n📄 [15] Prüfe: blog\\entwurf\\bindungssehnsucht-normal.md\n   🚨 7 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"trau dich, den ersten schritt zu machen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"verstehst du\" (7x), \"kennst du\" (5x)\n      💡 Keywords natürlich und organisch verteilen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Fühlst du dich\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [16] Prüfe: blog\\entwurf\\das-erste-mal.md\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"du musst nichts wissen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"der anfang unseres gemeinsamen lebens...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"der anfang unserer liebe...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (86% ähnlich): \"lass uns gemeinsam diesen wichtigen schritt gehen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   5. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"verstehst du\" (5x), \"kennst du\" (6x)\n      💡 Keywords natürlich und organisch verteilen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"willst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [17] Prüfe: blog\\entwurf\\der-sichere-hafen.md\n   🚨 5 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"nicht mehr perfekt sein musst...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"dein herz wird ruhiger...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"weil wir eine familie sind...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"kannst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [18] Prüfe: blog\\entwurf\\emotionale-leere.md\n   ✅ Keine Probleme gefunden\n📄 [19] Prüfe: blog\\entwurf\\erschoepft-vom-stark-sein.md\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"wenn du endlich nicht mehr entscheiden musst...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (76% ähnlich): \"dann spürst du es besonders intensiv - diese sehns...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (73% ähnlich): \"## deine gefühle verstehen\n\nvielleicht kennst du d...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (89% ähnlich): \"diese momente sind kostbar, auch wenn sie schmerzh...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   5. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"kennst du\" (4x)\n      💡 Keywords natürlich und organisch verteilen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [20] Prüfe: blog\\entwurf\\ich-will-einfach-gehalten-werden.md\n   🚨 4 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"du musst nicht stark sein...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"fühlst du\" (4x), \"verstehst du\" (5x), \"kennst du\" (6x)\n      💡 Keywords natürlich und organisch verteilen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [21] Prüfe: blog\\entwurf\\kontrolle-abgeben.md\n   🚨 4 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (76% ähnlich): \"dann spürst du es besonders intensiv - diese sehns...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (73% ähnlich): \"## deine gefühle verstehen\n\nvielleicht kennst du d...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (89% ähnlich): \"diese momente sind kostbar, auch wenn sie schmerzh...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [22] Prüfe: blog\\entwurf\\README.md\n   🚨 3 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (76% ähnlich): \"dann spürst du es besonders intensiv - diese sehns...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (73% ähnlich): \"## deine gefühle verstehen\n\nvielleicht kennst du d...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (89% ähnlich): \"diese momente sind kostbar, auch wenn sie schmerzh...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n📄 [23] Prüfe: blog\\entwurf\\sehnsucht-nach-hingabe.md\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [24] Prüfe: blog\\entwurf\\zu-viel-liebe-zu-wenig-liebe.md\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"will ich z'viel liebe...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (78% ähnlich): \"du willst, dass er ohne dich nicht mehr kann...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"dich kleiner zu machen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"kennst du\" (4x)\n      💡 Keywords natürlich und organisch verteilen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"kannst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [25] Prüfe: blog\\erschoepft-vom-stark-sein.html\n   🚨 4 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"wenn du endlich nicht mehr entscheiden musst...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   3. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   4. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [26] Prüfe: blog\\ich-will-einfach-gehalten-werden.html\n   🚨 5 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (80% ähnlich): \"du musst nicht stark sein...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"und ich antworte: &quot;du bisch bereits ghalte...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"fühlst du\" (4x), \"verstehst du\" (5x), \"kennst du\" (6x)\n      💡 Keywords natürlich und organisch verteilen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [27] Prüfe: blog\\index.html\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (86% ähnlich): \"html\" class=\"read-more\">weiterlesen</a>\n          ...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n📄 [28] Prüfe: blog\\kontrolle-abgeben.html\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [29] Prüfe: blog\\sehnsucht-nach-hingabe.html\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [30] Prüfe: blog\\zu-viel-liebe-zu-wenig-liebe.html\n   🚨 8 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"&quot;, fragst du dich...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   2. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (78% ähnlich): \"du willst, dass er ohne dich nicht mehr kann...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"dich kleiner zu machen...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] KEYWORD_STUFFING\n      → Verdächtiges Keyword-Stuffing: \"kennst du\" (4x)\n      💡 Keywords natürlich und organisch verteilen\n\n   5. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"denkst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"Weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   8. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"kannst du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [31] Prüfe: ./ueber-mich.html\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [32] Prüfe: ./index.html\n   🚨 7 Problem(e) gefunden:\n   1. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   2. [CRITICAL] INCOMPLETE_TRIGGER_PHRASE\n      → Unvollständiger Trigger ohne Kontext gefunden: \"träumst du davon\"\n      💡 Trigger organisch in sinnvollen Kontext einbetten\n\n   3. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"du bist nicht schwach...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   4. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (75% ähnlich): \"das macht dich kostbar...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n   5. [MEDIUM] INCOMPLETE_SENTENCE_AFTER_QUESTION\n      → Unvollständiger Satz nach Frage: \"? Du weißt bereits, dass du hier richtig bist</title>\"\n      💡 Sätze nach Fragen vollständig ausführen\n\n   6. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n   7. [HIGH] INCOMPLETE_TRIGGER\n      → Unvollständiger Trigger ohne Kontext: \"weißt du\"\n      💡 Trigger organisch vervollständigen oder entfernen\n\n📄 [33] Prüfe: ./kontakt.html\n   🚨 1 Problem(e) gefunden:\n   1. [HIGH] COPY_CAT_TEXT\n      → Copy-Cat Text gefunden (71% ähnlich): \"</p>\r\n                    </div>\r\n                ...\"\n      💡 Wiederholende Textpassagen umformulieren oder entfernen\n\n🔗 Cross-File Analyse...\n\n🔗 CROSS-FILE COPY-CAT ANALYSIS GESTARTET\n🚨 13 dateiübergreifende Duplikate gefunden:\n\n1. CROSS-FILE DUPLICATE:\n   Text: \"Diese Sehnsucht macht dich nicht schwach...\"\n   Dateien: blog\\entwurf\\emotionale-leere.md, blog\\entwurf\\sehnsucht-nach-hingabe.md\n   Ähnlichkeit: 100%\n\n2. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\kontrolle-abgeben.md\n   Ähnlichkeit: 89%\n\n3. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\kontrolle-abgeben.md\n   Ähnlichkeit: 89%\n\n4. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\kontrolle-abgeben.md\n   Ähnlichkeit: 89%\n\n5. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\kontrolle-abgeben.md\n   Ähnlichkeit: 89%\n\n6. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n7. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n8. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n9. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\erschoepft-vom-stark-sein.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n10. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\kontrolle-abgeben.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n11. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\kontrolle-abgeben.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n12. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\kontrolle-abgeben.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n13. CROSS-FILE DUPLICATE:\n   Text: \"Diese Momente sind kostbar, auch wenn sie schmerzhaft sind...\"\n   Dateien: blog\\entwurf\\kontrolle-abgeben.md, blog\\entwurf\\README.md\n   Ähnlichkeit: 89%\n\n======================================================================\n📊 SINNLOSIGKEITS-CHECK ABGESCHLOSSEN\n======================================================================\n⏱️  Dauer: 4439ms\n📁 Geprüfte Dateien: 33\n🔍 Gefundene Issues: 160\n\n📈 ISSUE-VERTEILUNG:\n   🔴 CRITICAL: 8\n   🟡 HIGH: 151\n   ⚪ MEDIUM: 1\n\n🏆 TOP ISSUE-TYPEN:\n   COPY_CAT_TEXT: 64x\n   INCOMPLETE_TRIGGER: 60x\n   KEYWORD_STUFFING: 14x\n   CROSS_FILE_DUPLICATE: 13x\n   INCOMPLETE_TRIGGER_PHRASE: 8x\n\n📁 BETROFFENE DATEIEN (22):\n   blog\\entwurf\\bindungssehnsucht-normal.md: 14 Issue(s)\n   blog\\entwurf\\das-erste-mal.md: 16 Issue(s)\n   blog\\entwurf\\der-sichere-hafen.md: 10 Issue(s)\n   blog\\entwurf\\erschoepft-vom-stark-sein.md: 16 Issue(s)\n   blog\\entwurf\\ich-will-einfach-gehalten-werden.md: 8 Issue(s)\n   blog\\entwurf\\kontrolle-abgeben.md: 8 Issue(s)\n   blog\\entwurf\\README.md: 6 Issue(s)\n   blog\\entwurf\\sehnsucht-nach-hingabe.md: 2 Issue(s)\n   blog\\entwurf\\zu-viel-liebe-zu-wenig-liebe.md: 16 Issue(s)\n   blog\\bindungssehnsucht-normal.html: 8 Issue(s)\n   ... und 12 weitere\n\n======================================================================\n🚨 CRITICAL: Dringende Behebung der sinnlosen Inhalte erforderlich!\n======================================================================\n\n💾 Protokoll gespeichert: scripts\\build-checks\\logfiles\\SINNLOSIGKEITS_CHECK_2025-07-03T14-00-58-436Z.json\n📝 Änderungsprotokoll aktualisiert\n\n✅ Multi-File Sinnlosigkeits-Check abgeschlossen!\n🚨 8 KRITISCHE PROBLEME GEFUNDEN!\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"verstehe ich\"\n   ❌ INCOMPLETE_TRIGGER_PHRASE: Unvollständiger Trigger ohne Kontext gefunden: \"träumst du davon\"\n","message":"Command failed: node C:\\apps\\website\\einfach-passieren-lassen\\scripts\\build-checks\\check_scripts\\multi-file-sinnlosigkeits-checker.js","timestamp":"2025-07-03T14:00:58.464Z"}
- 
� QUALITY-ALERT DETAILS:
- 📋 QUALITY-ALERTS GESPEICHERT FÜR SPÄTERE VERBESSERUNG!
- 📝 KI KANN CONTENT NACH QUALITY-ALERTS OPTIMIEREN



---
*Automatisch generiert durch TerminalLogger*
