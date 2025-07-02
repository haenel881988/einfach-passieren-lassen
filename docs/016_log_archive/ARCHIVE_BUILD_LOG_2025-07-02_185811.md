# Build Process Log
            
**Timestamp:** 2025-07-02T18:58:11.676Z
**Dauer:** 777ms
**Log-Datei:** docs\015_build_logs\BUILD_LOG_2025-07-02_185811.md
**Node-Version:** v22.14.0
**Arbeitsverzeichnis:** C:\apps\website\einfach-passieren-lassen

## Vollständige Terminal-Ausgabe

### 1. [LOG] 2025-07-02T18:58:11.677Z

```
🚀 STARTE INTELLIGENT BUILD PROCESS...
```

### 2. [LOG] 2025-07-02T18:58:11.678Z

```
Neue Intention-Validation aktiv!
```

### 3. [LOG] 2025-07-02T18:58:11.679Z

```

▶️ Führe Check-Skript aus: advanced-content-validator.js
```

### 4. [LOG] 2025-07-02T18:58:11.749Z

```
✅ advanced-content-validator.js erfolgreich ausgeführt
```

### 5. [LOG] 2025-07-02T18:58:11.749Z

```

▶️ Führe Check-Skript aus: checklist-cli.js
```

### 6. [LOG] 2025-07-02T18:58:11.822Z

```
✅ checklist-cli.js erfolgreich ausgeführt
```

### 7. [LOG] 2025-07-02T18:58:11.822Z

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

### 8. [LOG] 2025-07-02T18:58:11.823Z

```

▶️ Führe Check-Skript aus: comprehensiveCheck.js
```

### 9. [LOG] 2025-07-02T18:58:11.943Z

```
✅ comprehensiveCheck.js erfolgreich ausgeführt
```

### 10. [LOG] 2025-07-02T18:58:11.943Z

```
📋 comprehensiveCheck.js Output: 🔍 Starte umfassenden Build-Prozess Check...
✅ Umfassender Check abgeschlossen. Logfile: C:\apps\website\einfach-passieren-lassen\scripts\build-checks\logfiles\comprehensiveCheck_2025-07-02_18-58-11-889.log
📊 Analysiert: 9 Blogs, Durchschnitt: 2337 Wörter
⚠️ 12 kritische Issues gefunden
```

### 11. [LOG] 2025-07-02T18:58:11.943Z

```

▶️ Führe Check-Skript aus: logCleanup.js
```

### 12. [LOG] 2025-07-02T18:58:11.986Z

```
✅ logCleanup.js erfolgreich ausgeführt
```

### 13. [LOG] 2025-07-02T18:58:11.986Z

```

▶️ Führe Check-Skript aus: masterBuildChecker.js
```

### 14. [LOG] 2025-07-02T18:58:12.108Z

```
✅ masterBuildChecker.js erfolgreich ausgeführt
```

### 15. [LOG] 2025-07-02T18:58:12.108Z

```
📋 masterBuildChecker.js Output: 🔍 Starte MASTER BUILD CHECK - Alle Prüfungen in einer Logdatei...
✅ MASTER BUILD CHECK abgeschlossen!
📊 Eine Logdatei: C:\apps\website\einfach-passieren-lassen\scripts\build-checks\logfiles\MASTER_BUILD_CHECK_2025-07-02_18-58-12-060.log
📈 Analysiert: 9 Blogs, ⌀ 2337 Wörter
⚠️ 12 Errors, 24 Warnings
✅ Build-Prozess: NIEMALS ABGEBROCHEN (wie gefordert)
```

### 16. [LOG] 2025-07-02T18:58:12.108Z

```

▶️ Führe Check-Skript aus: seoCheck.js
```

### 17. [LOG] 2025-07-02T18:58:12.152Z

```
✅ seoCheck.js erfolgreich ausgeführt
```

### 18. [LOG] 2025-07-02T18:58:12.153Z

```
🧹 STARTING CLEAN BUILD - Lösche vorhandene HTML-Dateien...
```

### 19. [LOG] 2025-07-02T18:58:12.153Z

```
📋 Gefunden: 10 Markdown-Dateien für Clean-Build
```

### 20. [LOG] 2025-07-02T18:58:12.154Z

```
   🗑️ Gelöscht: bindungssehnsucht-normal.html
```

### 21. [LOG] 2025-07-02T18:58:12.154Z

```
   🗑️ Gelöscht: das-erste-mal.html
```

### 22. [LOG] 2025-07-02T18:58:12.155Z

```
   🗑️ Gelöscht: der-sichere-hafen.html
```

### 23. [LOG] 2025-07-02T18:58:12.155Z

```
   🗑️ Gelöscht: emotionale-leere.html
```

### 24. [LOG] 2025-07-02T18:58:12.156Z

```
   🗑️ Gelöscht: erschoepft-vom-stark-sein.html
```

### 25. [LOG] 2025-07-02T18:58:12.156Z

```
   🗑️ Gelöscht: ich-will-einfach-gehalten-werden.html
```

### 26. [LOG] 2025-07-02T18:58:12.156Z

```
   🗑️ Gelöscht: kontrolle-abgeben.html
```

### 27. [LOG] 2025-07-02T18:58:12.157Z

```
   ➖ Nicht vorhanden: README.html
```

### 28. [LOG] 2025-07-02T18:58:12.157Z

```
   🗑️ Gelöscht: sehnsucht-nach-hingabe.html
```

### 29. [LOG] 2025-07-02T18:58:12.158Z

```
   🗑️ Gelöscht: zu-viel-liebe-zu-wenig-liebe.html
```

### 30. [LOG] 2025-07-02T18:58:12.158Z

```
✅ CLEAN COMPLETED: 9 Dateien gelöscht, 0 übersprungen
```

### 31. [LOG] 2025-07-02T18:58:12.158Z

```
🔨 Starte saubere Neu-Generierung...
```

### 32. [INFO] 2025-07-02T18:58:12.158Z

```
Clean Build: 9 HTML-Dateien gelöscht
```

### 33. [LOG] 2025-07-02T18:58:12.159Z

```

🚀 STARTE INTELLIGENT BUILD PROCESS...
```

### 34. [LOG] 2025-07-02T18:58:12.159Z

```
📋 Terminal-Ausgabe wird gespeichert in: docs\015_build_logs\BUILD_LOG_2025-07-02_185811.md
```

### 35. [LOG] 2025-07-02T18:58:12.159Z

```
Neue Intention-Validation aktiv!

```

### 36. [LOG] 2025-07-02T18:58:12.161Z

```
📋 Loaded 12 advanced checklists
```

### 37. [LOG] 2025-07-02T18:58:12.161Z

```
🧠 ADVANCED CHECKLIST SYSTEM ACTIVATED
```

### 38. [LOG] 2025-07-02T18:58:12.161Z

```
   → Intelligent rotation algorithm loaded
```

### 39. [LOG] 2025-07-02T18:58:12.161Z

```
   → 12 psychological validation modules ready
```

### 40. [LOG] 2025-07-02T18:58:12.161Z

```

🔍 FÜHRE ERWEITERTE SEO-VALIDIERUNG DURCH...
```

### 41. [LOG] 2025-07-02T18:58:12.161Z

```
   ℹ️ Sitemap enthält 14 URLs
```

### 42. [LOG] 2025-07-02T18:58:12.163Z

```
✅ Globale SEO-Validierung erfolgreich - Keine Issues gefunden
```

### 43. [LOG] 2025-07-02T18:58:12.163Z

```
🔍 Sammle VS Code Problems...
```

### 44. [PROBLEM] 2025-07-02T18:58:12.170Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:40 - Missing semicolon
```

### 45. [PROBLEM] 2025-07-02T18:58:12.171Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:1943 - Missing semicolon
```

### 46. [PROBLEM] 2025-07-02T18:58:12.171Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:2327 - Missing semicolon
```

### 47. [PROBLEM] 2025-07-02T18:58:12.171Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:2713 - Missing semicolon
```

### 48. [PROBLEM] 2025-07-02T18:58:12.171Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:2741 - Missing semicolon
```

### 49. [PROBLEM] 2025-07-02T18:58:12.171Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:3562 - Missing semicolon
```

### 50. [PROBLEM] 2025-07-02T18:58:12.171Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:3599 - Missing semicolon
```

### 51. [PROBLEM] 2025-07-02T18:58:12.171Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:4316 - Missing semicolon
```

### 52. [PROBLEM] 2025-07-02T18:58:12.172Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:5013 - Missing semicolon
```

### 53. [PROBLEM] 2025-07-02T18:58:12.172Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:5406 - Missing semicolon
```

### 54. [PROBLEM] 2025-07-02T18:58:12.172Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6202 - Missing semicolon
```

### 55. [PROBLEM] 2025-07-02T18:58:12.172Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6587 - Missing semicolon
```

### 56. [PROBLEM] 2025-07-02T18:58:12.172Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6720 - Missing semicolon
```

### 57. [PROBLEM] 2025-07-02T18:58:12.172Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6743 - Missing semicolon
```

### 58. [PROBLEM] 2025-07-02T18:58:12.172Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6803 - Missing semicolon
```

### 59. [PROBLEM] 2025-07-02T18:58:12.172Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6895 - Missing semicolon
```

### 60. [PROBLEM] 2025-07-02T18:58:12.172Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6923 - Missing semicolon
```

### 61. [PROBLEM] 2025-07-02T18:58:12.172Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6954 - Missing semicolon
```

### 62. [PROBLEM] 2025-07-02T18:58:12.172Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7029 - Missing semicolon
```

### 63. [PROBLEM] 2025-07-02T18:58:12.172Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7054 - Missing semicolon
```

### 64. [PROBLEM] 2025-07-02T18:58:12.172Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7099 - Missing semicolon
```

### 65. [PROBLEM] 2025-07-02T18:58:12.172Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7531 - Missing semicolon
```

### 66. [PROBLEM] 2025-07-02T18:58:12.172Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7585 - Missing semicolon
```

### 67. [PROBLEM] 2025-07-02T18:58:12.172Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7983 - Missing semicolon
```

### 68. [PROBLEM] 2025-07-02T18:58:12.172Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:8071 - Missing semicolon
```

### 69. [PROBLEM] 2025-07-02T18:58:12.172Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:8075 - Missing semicolon
```

### 70. [PROBLEM] 2025-07-02T18:58:12.172Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:8112 - Missing semicolon
```

### 71. [PROBLEM] 2025-07-02T18:58:12.172Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:8493 - Missing semicolon
```

### 72. [PROBLEM] 2025-07-02T18:58:12.173Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:9746 - Missing semicolon
```

### 73. [PROBLEM] 2025-07-02T18:58:12.173Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:9945 - Console.log statement found - consider removing in production
```

### 74. [PROBLEM] 2025-07-02T18:58:12.174Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:40 - Missing semicolon
```

### 75. [PROBLEM] 2025-07-02T18:58:12.175Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:1950 - Missing semicolon
```

### 76. [PROBLEM] 2025-07-02T18:58:12.175Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:2360 - Missing semicolon
```

### 77. [PROBLEM] 2025-07-02T18:58:12.175Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:2762 - Missing semicolon
```

### 78. [PROBLEM] 2025-07-02T18:58:12.175Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:2790 - Missing semicolon
```

### 79. [PROBLEM] 2025-07-02T18:58:12.175Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:3618 - Missing semicolon
```

### 80. [PROBLEM] 2025-07-02T18:58:12.175Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:3655 - Missing semicolon
```

### 81. [PROBLEM] 2025-07-02T18:58:12.175Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:4372 - Missing semicolon
```

### 82. [PROBLEM] 2025-07-02T18:58:12.175Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:5069 - Missing semicolon
```

### 83. [PROBLEM] 2025-07-02T18:58:12.176Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:5462 - Missing semicolon
```

### 84. [PROBLEM] 2025-07-02T18:58:12.176Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6258 - Missing semicolon
```

### 85. [PROBLEM] 2025-07-02T18:58:12.176Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6643 - Missing semicolon
```

### 86. [PROBLEM] 2025-07-02T18:58:12.176Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6776 - Missing semicolon
```

### 87. [PROBLEM] 2025-07-02T18:58:12.176Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6799 - Missing semicolon
```

### 88. [PROBLEM] 2025-07-02T18:58:12.176Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6859 - Missing semicolon
```

### 89. [PROBLEM] 2025-07-02T18:58:12.176Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6951 - Missing semicolon
```

### 90. [PROBLEM] 2025-07-02T18:58:12.176Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6979 - Missing semicolon
```

### 91. [PROBLEM] 2025-07-02T18:58:12.176Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:7010 - Missing semicolon
```

### 92. [PROBLEM] 2025-07-02T18:58:12.176Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:7085 - Missing semicolon
```

### 93. [PROBLEM] 2025-07-02T18:58:12.176Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:7110 - Missing semicolon
```

### 94. [PROBLEM] 2025-07-02T18:58:12.176Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:7155 - Missing semicolon
```

### 95. [PROBLEM] 2025-07-02T18:58:12.176Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:7587 - Missing semicolon
```

### 96. [PROBLEM] 2025-07-02T18:58:12.176Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:7641 - Missing semicolon
```

### 97. [PROBLEM] 2025-07-02T18:58:12.176Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:8039 - Missing semicolon
```

### 98. [PROBLEM] 2025-07-02T18:58:12.176Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:8127 - Missing semicolon
```

### 99. [PROBLEM] 2025-07-02T18:58:12.176Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:8131 - Missing semicolon
```

### 100. [PROBLEM] 2025-07-02T18:58:12.176Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:8168 - Missing semicolon
```

### 101. [PROBLEM] 2025-07-02T18:58:12.176Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:8549 - Missing semicolon
```

### 102. [PROBLEM] 2025-07-02T18:58:12.177Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:9802 - Missing semicolon
```

### 103. [PROBLEM] 2025-07-02T18:58:12.177Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:10001 - Console.log statement found - consider removing in production
```

### 104. [PROBLEM] 2025-07-02T18:58:12.179Z

```
[WARNING] app-gui\src\App.jsx:4 - Missing semicolon
```

### 105. [PROBLEM] 2025-07-02T18:58:12.179Z

```
[WARNING] app-gui\src\App.jsx:72 - Missing semicolon
```

### 106. [PROBLEM] 2025-07-02T18:58:12.179Z

```
[WARNING] app-gui\src\App.jsx:99 - Missing semicolon
```

### 107. [PROBLEM] 2025-07-02T18:58:12.180Z

```
[WARNING] build-process\mainBuild.js:52 - Console.log statement found - consider removing in production
```

### 108. [PROBLEM] 2025-07-02T18:58:12.180Z

```
[WARNING] build-process\mainBuild.js:64 - Console.log statement found - consider removing in production
```

### 109. [PROBLEM] 2025-07-02T18:58:12.180Z

```
[WARNING] build-process\mainBuild.js:98 - Console.log statement found - consider removing in production
```

### 110. [PROBLEM] 2025-07-02T18:58:12.180Z

```
[WARNING] build-process\mainBuild.js:102 - Console.log statement found - consider removing in production
```

### 111. [PROBLEM] 2025-07-02T18:58:12.180Z

```
[WARNING] build-process\mainBuild.js:104 - Console.log statement found - consider removing in production
```

### 112. [PROBLEM] 2025-07-02T18:58:12.180Z

```
[WARNING] build-process\mainBuild.js:110 - Console.log statement found - consider removing in production
```

### 113. [PROBLEM] 2025-07-02T18:58:12.180Z

```
[WARNING] build-process\mainBuild.js:112 - Console.log statement found - consider removing in production
```

### 114. [PROBLEM] 2025-07-02T18:58:12.180Z

```
[WARNING] build-process\mainBuild.js:116 - Console.log statement found - consider removing in production
```

### 115. [PROBLEM] 2025-07-02T18:58:12.180Z

```
[WARNING] build-process\mainBuild.js:123 - Console.log statement found - consider removing in production
```

### 116. [PROBLEM] 2025-07-02T18:58:12.180Z

```
[WARNING] build-process\mainBuild.js:145 - Console.log statement found - consider removing in production
```

### 117. [PROBLEM] 2025-07-02T18:58:12.180Z

```
[WARNING] build-process\mainBuild.js:147 - Missing semicolon
```

### 118. [PROBLEM] 2025-07-02T18:58:12.180Z

```
[WARNING] build-process\mainBuild.js:174 - Missing semicolon
```

### 119. [PROBLEM] 2025-07-02T18:58:12.180Z

```
[WARNING] build-process\mainBuild.js:205 - Console.log statement found - consider removing in production
```

### 120. [PROBLEM] 2025-07-02T18:58:12.180Z

```
[WARNING] build-process\mainBuild.js:231 - Console.log statement found - consider removing in production
```

### 121. [PROBLEM] 2025-07-02T18:58:12.180Z

```
[WARNING] build-process\mainBuild.js:254 - Console.log statement found - consider removing in production
```

### 122. [PROBLEM] 2025-07-02T18:58:12.180Z

```
[WARNING] build-process\modules\contentOptimizer.js:53 - Missing semicolon
```

### 123. [PROBLEM] 2025-07-02T18:58:12.180Z

```
[WARNING] build-process\modules\contentOptimizer.js:66 - Missing semicolon
```

### 124. [PROBLEM] 2025-07-02T18:58:12.180Z

```
[WARNING] build-process\modules\contentOptimizer.js:111 - Missing semicolon
```

### 125. [PROBLEM] 2025-07-02T18:58:12.180Z

```
[WARNING] build-process\modules\contentOptimizer.js:157 - Missing semicolon
```

### 126. [PROBLEM] 2025-07-02T18:58:12.180Z

```
[WARNING] build-process\modules\contentOptimizer.js:338 - Missing semicolon
```

### 127. [PROBLEM] 2025-07-02T18:58:12.180Z

```
[WARNING] build-process\modules\fileUtils.js:22 - Console.log statement found - consider removing in production
```

### 128. [PROBLEM] 2025-07-02T18:58:12.180Z

```
[WARNING] build-process\modules\fileUtils.js:45 - Console.log statement found - consider removing in production
```

### 129. [PROBLEM] 2025-07-02T18:58:12.180Z

```
[WARNING] build-process\modules\fileUtils.js:90 - Console.log statement found - consider removing in production
```

### 130. [PROBLEM] 2025-07-02T18:58:12.180Z

```
[WARNING] build-process\modules\fileUtils.js:151 - Console.log statement found - consider removing in production
```

### 131. [PROBLEM] 2025-07-02T18:58:12.180Z

```
[WARNING] build-process\modules\fileUtils.js:174 - Console.log statement found - consider removing in production
```

### 132. [PROBLEM] 2025-07-02T18:58:12.181Z

```
[WARNING] build-process\modules\logger.js:17 - Console.log statement found - consider removing in production
```

### 133. [PROBLEM] 2025-07-02T18:58:12.181Z

```
[WARNING] build-process\modules\logger.js:34 - Console.log statement found - consider removing in production
```

### 134. [PROBLEM] 2025-07-02T18:58:12.181Z

```
[WARNING] build-process\modules\logger.js:62 - Console.log statement found - consider removing in production
```

### 135. [PROBLEM] 2025-07-02T18:58:12.181Z

```
[ERROR] build-process\modules\logger.js:145 - Typo: "fucntion" should be "function"
```

### 136. [PROBLEM] 2025-07-02T18:58:12.181Z

```
[ERROR] build-process\modules\logger.js:146 - Typo: "fucntion" should be "function"
```

### 137. [PROBLEM] 2025-07-02T18:58:12.181Z

```
[WARNING] build-process\modules\logger.js:243 - Missing semicolon
```

### 138. [PROBLEM] 2025-07-02T18:58:12.181Z

```
[WARNING] build-process\modules\logger.js:276 - Console.log statement found - consider removing in production
```

### 139. [PROBLEM] 2025-07-02T18:58:12.181Z

```
[WARNING] build-process\modules\seoCheck.js:20 - Console.log statement found - consider removing in production
```

### 140. [PROBLEM] 2025-07-02T18:58:12.181Z

```
[WARNING] build-process\modules\seoCheck.js:94 - Console.log statement found - consider removing in production
```

### 141. [PROBLEM] 2025-07-02T18:58:12.181Z

```
[WARNING] build-process\modules\seoCheck.js:96 - Console.log statement found - consider removing in production
```

### 142. [PROBLEM] 2025-07-02T18:58:12.181Z

```
[WARNING] build-process\modules\seoCheck.js:109 - Console.log statement found - consider removing in production
```

### 143. [PROBLEM] 2025-07-02T18:58:12.181Z

```
[WARNING] build-process\modules\seoCheck.js:248 - Console.log statement found - consider removing in production
```

### 144. [PROBLEM] 2025-07-02T18:58:12.181Z

```
[WARNING] build-process\modules\seoCheck.js:335 - Console.log statement found - consider removing in production
```

### 145. [PROBLEM] 2025-07-02T18:58:12.181Z

```
[WARNING] build-process\modules\seoCheck.js:406 - Console.log statement found - consider removing in production
```

### 146. [PROBLEM] 2025-07-02T18:58:12.181Z

```
[WARNING] build-process\modules\seoCheck.js:423 - Missing semicolon
```

### 147. [PROBLEM] 2025-07-02T18:58:12.181Z

```
[WARNING] build-process\modules\seoCheck.js:505 - Console.log statement found - consider removing in production
```

### 148. [PROBLEM] 2025-07-02T18:58:12.181Z

```
[WARNING] build-process\modules\seoCheck.js:513 - Missing semicolon
```

### 149. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:17 - Missing semicolon
```

### 150. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:32 - Console.log statement found - consider removing in production
```

### 151. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:34 - Console.log statement found - consider removing in production
```

### 152. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:50 - Missing semicolon
```

### 153. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:128 - Missing semicolon
```

### 154. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:178 - Missing semicolon
```

### 155. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:211 - Missing semicolon
```

### 156. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:220 - Console.log statement found - consider removing in production
```

### 157. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:221 - Console.log statement found - consider removing in production
```

### 158. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:227 - Missing semicolon
```

### 159. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:236 - Console.log statement found - consider removing in production
```

### 160. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:276 - Missing semicolon
```

### 161. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:326 - Missing semicolon
```

### 162. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:334 - Missing semicolon
```

### 163. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:369 - Missing semicolon
```

### 164. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:397 - Missing semicolon
```

### 165. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:405 - Console.log statement found - consider removing in production
```

### 166. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:408 - Console.log statement found - consider removing in production
```

### 167. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:412 - Console.log statement found - consider removing in production
```

### 168. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:414 - Missing semicolon
```

### 169. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:416 - Console.log statement found - consider removing in production
```

### 170. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:417 - Console.log statement found - consider removing in production
```

### 171. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:420 - Console.log statement found - consider removing in production
```

### 172. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:502 - Missing semicolon
```

### 173. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:509 - Missing semicolon
```

### 174. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:514 - Missing semicolon
```

### 175. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:607 - Missing semicolon
```

### 176. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:616 - Missing semicolon
```

### 177. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:639 - Console.log statement found - consider removing in production
```

### 178. [PROBLEM] 2025-07-02T18:58:12.183Z

```
[WARNING] scripts\advanced-content-validator.js:662 - Console.log statement found - consider removing in production
```

### 179. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:17 - Missing semicolon
```

### 180. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:32 - Console.log statement found - consider removing in production
```

### 181. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:34 - Console.log statement found - consider removing in production
```

### 182. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:50 - Missing semicolon
```

### 183. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:128 - Missing semicolon
```

### 184. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:178 - Missing semicolon
```

### 185. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:211 - Missing semicolon
```

### 186. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:220 - Console.log statement found - consider removing in production
```

### 187. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:221 - Console.log statement found - consider removing in production
```

### 188. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:227 - Missing semicolon
```

### 189. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:236 - Console.log statement found - consider removing in production
```

### 190. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:276 - Missing semicolon
```

### 191. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:326 - Missing semicolon
```

### 192. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:334 - Missing semicolon
```

### 193. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:369 - Missing semicolon
```

### 194. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:397 - Missing semicolon
```

### 195. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:483 - Missing semicolon
```

### 196. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:490 - Missing semicolon
```

### 197. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:495 - Missing semicolon
```

### 198. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:588 - Missing semicolon
```

### 199. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:597 - Missing semicolon
```

### 200. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:620 - Console.log statement found - consider removing in production
```

### 201. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:643 - Console.log statement found - consider removing in production
```

### 202. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:14 - Console.log statement found - consider removing in production
```

### 203. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:15 - Console.log statement found - consider removing in production
```

### 204. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:20 - Console.log statement found - consider removing in production
```

### 205. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:21 - Console.log statement found - consider removing in production
```

### 206. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:24 - Console.log statement found - consider removing in production
```

### 207. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:28 - Console.log statement found - consider removing in production
```

### 208. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:33 - Console.log statement found - consider removing in production
```

### 209. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:34 - Console.log statement found - consider removing in production
```

### 210. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:35 - Console.log statement found - consider removing in production
```

### 211. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:42 - Console.log statement found - consider removing in production
```

### 212. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:50 - Console.log statement found - consider removing in production
```

### 213. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:52 - Console.log statement found - consider removing in production
```

### 214. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:53 - Console.log statement found - consider removing in production
```

### 215. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:64 - Missing semicolon
```

### 216. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:69 - Console.log statement found - consider removing in production
```

### 217. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:72 - Console.log statement found - consider removing in production
```

### 218. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:79 - Console.log statement found - consider removing in production
```

### 219. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:84 - Console.log statement found - consider removing in production
```

### 220. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:89 - Console.log statement found - consider removing in production
```

### 221. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:93 - Console.log statement found - consider removing in production
```

### 222. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:94 - Console.log statement found - consider removing in production
```

### 223. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:96 - Missing semicolon
```

### 224. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:113 - Console.log statement found - consider removing in production
```

### 225. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:115 - Console.log statement found - consider removing in production
```

### 226. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:116 - Console.log statement found - consider removing in production
```

### 227. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:118 - Console.log statement found - consider removing in production
```

### 228. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:126 - Console.log statement found - consider removing in production
```

### 229. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:131 - Console.log statement found - consider removing in production
```

### 230. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:132 - Console.log statement found - consider removing in production
```

### 231. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:136 - Console.log statement found - consider removing in production
```

### 232. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:137 - Console.log statement found - consider removing in production
```

### 233. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:141 - Console.log statement found - consider removing in production
```

### 234. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:143 - Console.log statement found - consider removing in production
```

### 235. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:145 - Console.log statement found - consider removing in production
```

### 236. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:149 - Console.log statement found - consider removing in production
```

### 237. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:151 - Console.log statement found - consider removing in production
```

### 238. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:156 - Console.log statement found - consider removing in production
```

### 239. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:158 - Console.log statement found - consider removing in production
```

### 240. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:164 - Console.log statement found - consider removing in production
```

### 241. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:166 - Console.log statement found - consider removing in production
```

### 242. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:172 - Console.log statement found - consider removing in production
```

### 243. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:173 - Console.log statement found - consider removing in production
```

### 244. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:174 - Console.log statement found - consider removing in production
```

### 245. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:175 - Console.log statement found - consider removing in production
```

### 246. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:176 - Console.log statement found - consider removing in production
```

### 247. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:177 - Console.log statement found - consider removing in production
```

### 248. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:178 - Console.log statement found - consider removing in production
```

### 249. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:179 - Console.log statement found - consider removing in production
```

### 250. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:180 - Console.log statement found - consider removing in production
```

### 251. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:181 - Console.log statement found - consider removing in production
```

### 252. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:182 - Console.log statement found - consider removing in production
```

### 253. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:183 - Console.log statement found - consider removing in production
```

### 254. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:184 - Console.log statement found - consider removing in production
```

### 255. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:185 - Console.log statement found - consider removing in production
```

### 256. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:217 - Console.log statement found - consider removing in production
```

### 257. [PROBLEM] 2025-07-02T18:58:12.184Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:218 - Console.log statement found - consider removing in production
```

### 258. [PROBLEM] 2025-07-02T18:58:12.185Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:15 - Console.log statement found - consider removing in production
```

### 259. [PROBLEM] 2025-07-02T18:58:12.185Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:34 - Missing semicolon
```

### 260. [PROBLEM] 2025-07-02T18:58:12.185Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:62 - Console.log statement found - consider removing in production
```

### 261. [PROBLEM] 2025-07-02T18:58:12.185Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:63 - Console.log statement found - consider removing in production
```

### 262. [PROBLEM] 2025-07-02T18:58:12.185Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:66 - Console.log statement found - consider removing in production
```

### 263. [PROBLEM] 2025-07-02T18:58:12.185Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:158 - Missing semicolon
```

### 264. [PROBLEM] 2025-07-02T18:58:12.185Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:209 - Missing semicolon
```

### 265. [PROBLEM] 2025-07-02T18:58:12.185Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:246 - Missing semicolon
```

### 266. [PROBLEM] 2025-07-02T18:58:12.185Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:15 - Console.log statement found - consider removing in production
```

### 267. [PROBLEM] 2025-07-02T18:58:12.185Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:75 - Console.log statement found - consider removing in production
```

### 268. [PROBLEM] 2025-07-02T18:58:12.185Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:76 - Console.log statement found - consider removing in production
```

### 269. [PROBLEM] 2025-07-02T18:58:12.185Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:77 - Console.log statement found - consider removing in production
```

### 270. [PROBLEM] 2025-07-02T18:58:12.185Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:78 - Console.log statement found - consider removing in production
```

### 271. [PROBLEM] 2025-07-02T18:58:12.185Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:79 - Console.log statement found - consider removing in production
```

### 272. [PROBLEM] 2025-07-02T18:58:12.185Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:84 - Console.log statement found - consider removing in production
```

### 273. [PROBLEM] 2025-07-02T18:58:12.185Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:87 - Missing semicolon
```

### 274. [PROBLEM] 2025-07-02T18:58:12.185Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:116 - Missing semicolon
```

### 275. [PROBLEM] 2025-07-02T18:58:12.185Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:240 - Missing semicolon
```

### 276. [PROBLEM] 2025-07-02T18:58:12.185Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:373 - Missing semicolon
```

### 277. [PROBLEM] 2025-07-02T18:58:12.185Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:421 - Missing semicolon
```

### 278. [PROBLEM] 2025-07-02T18:58:12.185Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:470 - Missing semicolon
```

### 279. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:13 - Console.log statement found - consider removing in production
```

### 280. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:16 - Missing semicolon
```

### 281. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:17 - Missing semicolon
```

### 282. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:20 - Missing semicolon
```

### 283. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:30 - Missing semicolon
```

### 284. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:36 - Console.log statement found - consider removing in production
```

### 285. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:88 - Console.log statement found - consider removing in production
```

### 286. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:100 - Console.log statement found - consider removing in production
```

### 287. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:115 - Console.log statement found - consider removing in production
```

### 288. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:118 - Console.log statement found - consider removing in production
```

### 289. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:120 - Console.log statement found - consider removing in production
```

### 290. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:131 - Console.log statement found - consider removing in production
```

### 291. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:133 - Console.log statement found - consider removing in production
```

### 292. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:136 - Console.log statement found - consider removing in production
```

### 293. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:143 - Console.log statement found - consider removing in production
```

### 294. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:145 - Console.log statement found - consider removing in production
```

### 295. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:148 - Console.log statement found - consider removing in production
```

### 296. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:155 - Console.log statement found - consider removing in production
```

### 297. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:157 - Console.log statement found - consider removing in production
```

### 298. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:173 - Console.log statement found - consider removing in production
```

### 299. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:195 - Missing semicolon
```

### 300. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:213 - Console.log statement found - consider removing in production
```

### 301. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:221 - Missing semicolon
```

### 302. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:237 - Missing semicolon
```

### 303. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:252 - Missing semicolon
```

### 304. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:269 - Console.log statement found - consider removing in production
```

### 305. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:272 - Missing semicolon
```

### 306. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:277 - Console.log statement found - consider removing in production
```

### 307. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:280 - Console.log statement found - consider removing in production
```

### 308. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:282 - Console.log statement found - consider removing in production
```

### 309. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:286 - Missing semicolon
```

### 310. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:305 - Console.log statement found - consider removing in production
```

### 311. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:307 - Missing semicolon
```

### 312. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:326 - Console.log statement found - consider removing in production
```

### 313. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:338 - Missing semicolon
```

### 314. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:347 - Console.log statement found - consider removing in production
```

### 315. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:348 - Console.log statement found - consider removing in production
```

### 316. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:349 - Console.log statement found - consider removing in production
```

### 317. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:354 - Console.log statement found - consider removing in production
```

### 318. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:355 - Console.log statement found - consider removing in production
```

### 319. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:366 - Console.log statement found - consider removing in production
```

### 320. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:367 - Console.log statement found - consider removing in production
```

### 321. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:368 - Console.log statement found - consider removing in production
```

### 322. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:369 - Console.log statement found - consider removing in production
```

### 323. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:370 - Console.log statement found - consider removing in production
```

### 324. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:374 - Console.log statement found - consider removing in production
```

### 325. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:375 - Console.log statement found - consider removing in production
```

### 326. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:376 - Console.log statement found - consider removing in production
```

### 327. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:377 - Console.log statement found - consider removing in production
```

### 328. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:378 - Console.log statement found - consider removing in production
```

### 329. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:382 - Console.log statement found - consider removing in production
```

### 330. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:383 - Console.log statement found - consider removing in production
```

### 331. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:386 - Console.log statement found - consider removing in production
```

### 332. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:393 - Console.log statement found - consider removing in production
```

### 333. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:394 - Console.log statement found - consider removing in production
```

### 334. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:395 - Console.log statement found - consider removing in production
```

### 335. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:416 - Console.log statement found - consider removing in production
```

### 336. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:425 - Console.log statement found - consider removing in production
```

### 337. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:434 - Missing semicolon
```

### 338. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:461 - Missing semicolon
```

### 339. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:492 - Console.log statement found - consider removing in production
```

### 340. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:515 - Console.log statement found - consider removing in production
```

### 341. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:538 - Console.log statement found - consider removing in production
```

### 342. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:559 - Missing semicolon
```

### 343. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:571 - Console.log statement found - consider removing in production
```

### 344. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[ERROR] scripts\build.js:686 - Typo: "fucntion" should be "function"
```

### 345. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[ERROR] scripts\build.js:687 - Typo: "fucntion" should be "function"
```

### 346. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:734 - Missing semicolon
```

### 347. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:744 - Missing semicolon
```

### 348. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:830 - Missing semicolon
```

### 349. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:900 - Missing semicolon
```

### 350. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:940 - Console.log statement found - consider removing in production
```

### 351. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:1069 - Missing semicolon
```

### 352. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:1073 - Missing semicolon
```

### 353. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:1080 - Missing semicolon
```

### 354. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:1087 - Missing semicolon
```

### 355. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:1149 - Missing semicolon
```

### 356. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:1174 - Missing semicolon
```

### 357. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:1193 - Missing semicolon
```

### 358. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:1221 - Missing semicolon
```

### 359. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:1300 - Missing semicolon
```

### 360. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:1343 - Missing semicolon
```

### 361. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:1354 - Missing semicolon
```

### 362. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:1416 - Missing semicolon
```

### 363. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:1445 - Missing semicolon
```

### 364. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:1449 - Missing semicolon
```

### 365. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:1509 - Missing semicolon
```

### 366. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:1574 - Missing semicolon
```

### 367. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:1765 - Missing semicolon
```

### 368. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:1803 - Missing semicolon
```

### 369. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:1815 - Missing semicolon
```

### 370. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:1895 - Missing semicolon
```

### 371. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:1991 - Missing semicolon
```

### 372. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:1992 - Missing semicolon
```

### 373. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:2113 - Console.log statement found - consider removing in production
```

### 374. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:2114 - Console.log statement found - consider removing in production
```

### 375. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:2120 - Console.log statement found - consider removing in production
```

### 376. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:2121 - Console.log statement found - consider removing in production
```

### 377. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:2122 - Console.log statement found - consider removing in production
```

### 378. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:2142 - Missing semicolon
```

### 379. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:2146 - Console.log statement found - consider removing in production
```

### 380. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:2156 - Console.log statement found - consider removing in production
```

### 381. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:2161 - Console.log statement found - consider removing in production
```

### 382. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:2175 - Console.log statement found - consider removing in production
```

### 383. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:2181 - Console.log statement found - consider removing in production
```

### 384. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:2183 - Missing semicolon
```

### 385. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:2185 - Console.log statement found - consider removing in production
```

### 386. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:2186 - Console.log statement found - consider removing in production
```

### 387. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:2198 - Console.log statement found - consider removing in production
```

### 388. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:2201 - Console.log statement found - consider removing in production
```

### 389. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:2213 - Console.log statement found - consider removing in production
```

### 390. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:2217 - Console.log statement found - consider removing in production
```

### 391. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:2219 - Console.log statement found - consider removing in production
```

### 392. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:2222 - Console.log statement found - consider removing in production
```

### 393. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:2273 - Console.log statement found - consider removing in production
```

### 394. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:2275 - Console.log statement found - consider removing in production
```

### 395. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:2280 - Console.log statement found - consider removing in production
```

### 396. [PROBLEM] 2025-07-02T18:58:12.187Z

```
[WARNING] scripts\build.js:2286 - Console.log statement found - consider removing in production
```

### 397. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2288 - Console.log statement found - consider removing in production
```

### 398. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2300 - Console.log statement found - consider removing in production
```

### 399. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2301 - Console.log statement found - consider removing in production
```

### 400. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2302 - Console.log statement found - consider removing in production
```

### 401. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2305 - Console.log statement found - consider removing in production
```

### 402. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2306 - Console.log statement found - consider removing in production
```

### 403. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2307 - Console.log statement found - consider removing in production
```

### 404. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2308 - Console.log statement found - consider removing in production
```

### 405. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2309 - Console.log statement found - consider removing in production
```

### 406. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2310 - Console.log statement found - consider removing in production
```

### 407. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2313 - Console.log statement found - consider removing in production
```

### 408. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2317 - Console.log statement found - consider removing in production
```

### 409. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2318 - Console.log statement found - consider removing in production
```

### 410. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2319 - Console.log statement found - consider removing in production
```

### 411. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2323 - Missing semicolon
```

### 412. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2347 - Console.log statement found - consider removing in production
```

### 413. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2349 - Console.log statement found - consider removing in production
```

### 414. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2355 - Console.log statement found - consider removing in production
```

### 415. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2358 - Console.log statement found - consider removing in production
```

### 416. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2378 - Console.log statement found - consider removing in production
```

### 417. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2379 - Console.log statement found - consider removing in production
```

### 418. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2402 - Console.log statement found - consider removing in production
```

### 419. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2406 - Console.log statement found - consider removing in production
```

### 420. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2407 - Console.log statement found - consider removing in production
```

### 421. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2409 - Console.log statement found - consider removing in production
```

### 422. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2410 - Console.log statement found - consider removing in production
```

### 423. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2414 - Console.log statement found - consider removing in production
```

### 424. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2416 - Console.log statement found - consider removing in production
```

### 425. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2419 - Console.log statement found - consider removing in production
```

### 426. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2422 - Console.log statement found - consider removing in production
```

### 427. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2425 - Console.log statement found - consider removing in production
```

### 428. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2426 - Console.log statement found - consider removing in production
```

### 429. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2429 - Console.log statement found - consider removing in production
```

### 430. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2430 - Console.log statement found - consider removing in production
```

### 431. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2437 - Console.log statement found - consider removing in production
```

### 432. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2443 - Console.log statement found - consider removing in production
```

### 433. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2444 - Console.log statement found - consider removing in production
```

### 434. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2445 - Console.log statement found - consider removing in production
```

### 435. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2448 - Console.log statement found - consider removing in production
```

### 436. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2450 - Console.log statement found - consider removing in production
```

### 437. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2452 - Console.log statement found - consider removing in production
```

### 438. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2459 - Console.log statement found - consider removing in production
```

### 439. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2461 - Console.log statement found - consider removing in production
```

### 440. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2467 - Console.log statement found - consider removing in production
```

### 441. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2468 - Console.log statement found - consider removing in production
```

### 442. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2487 - Missing semicolon
```

### 443. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2495 - Console.log statement found - consider removing in production
```

### 444. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2499 - Console.log statement found - consider removing in production
```

### 445. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2501 - Console.log statement found - consider removing in production
```

### 446. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2504 - Console.log statement found - consider removing in production
```

### 447. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2505 - Console.log statement found - consider removing in production
```

### 448. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2506 - Console.log statement found - consider removing in production
```

### 449. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2507 - Console.log statement found - consider removing in production
```

### 450. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2508 - Console.log statement found - consider removing in production
```

### 451. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2511 - Console.log statement found - consider removing in production
```

### 452. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2513 - Console.log statement found - consider removing in production
```

### 453. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2518 - Console.log statement found - consider removing in production
```

### 454. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2520 - Console.log statement found - consider removing in production
```

### 455. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2525 - Console.log statement found - consider removing in production
```

### 456. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2535 - Console.log statement found - consider removing in production
```

### 457. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2549 - Console.log statement found - consider removing in production
```

### 458. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2550 - Console.log statement found - consider removing in production
```

### 459. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2551 - Console.log statement found - consider removing in production
```

### 460. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2552 - Console.log statement found - consider removing in production
```

### 461. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2553 - Console.log statement found - consider removing in production
```

### 462. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2554 - Console.log statement found - consider removing in production
```

### 463. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2555 - Console.log statement found - consider removing in production
```

### 464. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2559 - Console.log statement found - consider removing in production
```

### 465. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2560 - Console.log statement found - consider removing in production
```

### 466. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2561 - Console.log statement found - consider removing in production
```

### 467. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2562 - Console.log statement found - consider removing in production
```

### 468. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2563 - Console.log statement found - consider removing in production
```

### 469. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2564 - Console.log statement found - consider removing in production
```

### 470. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2565 - Console.log statement found - consider removing in production
```

### 471. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2566 - Console.log statement found - consider removing in production
```

### 472. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2586 - Console.log statement found - consider removing in production
```

### 473. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2603 - Console.log statement found - consider removing in production
```

### 474. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2641 - Missing semicolon
```

### 475. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2697 - Console.log statement found - consider removing in production
```

### 476. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2750 - Missing semicolon
```

### 477. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2779 - Missing semicolon
```

### 478. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2816 - Missing semicolon
```

### 479. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2828 - Missing semicolon
```

### 480. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2856 - Missing semicolon
```

### 481. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2868 - Missing semicolon
```

### 482. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2894 - Console.log statement found - consider removing in production
```

### 483. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2946 - Missing semicolon
```

### 484. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2950 - Missing semicolon
```

### 485. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2963 - Missing semicolon
```

### 486. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2972 - Missing semicolon
```

### 487. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2981 - Missing semicolon
```

### 488. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:2990 - Missing semicolon
```

### 489. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3011 - Missing semicolon
```

### 490. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3024 - Missing semicolon
```

### 491. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3037 - Missing semicolon
```

### 492. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3050 - Missing semicolon
```

### 493. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3077 - Missing semicolon
```

### 494. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3086 - Missing semicolon
```

### 495. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3095 - Missing semicolon
```

### 496. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3104 - Missing semicolon
```

### 497. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3113 - Missing semicolon
```

### 498. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3206 - Missing semicolon
```

### 499. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3210 - Missing semicolon
```

### 500. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3220 - Missing semicolon
```

### 501. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3230 - Missing semicolon
```

### 502. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3249 - Missing semicolon
```

### 503. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3274 - Missing semicolon
```

### 504. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3283 - Missing semicolon
```

### 505. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3292 - Missing semicolon
```

### 506. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3301 - Missing semicolon
```

### 507. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3310 - Missing semicolon
```

### 508. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3319 - Missing semicolon
```

### 509. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3342 - Missing semicolon
```

### 510. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3355 - Missing semicolon
```

### 511. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3368 - Missing semicolon
```

### 512. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3377 - Missing semicolon
```

### 513. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3386 - Missing semicolon
```

### 514. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3395 - Missing semicolon
```

### 515. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3425 - Console.log statement found - consider removing in production
```

### 516. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3452 - Console.log statement found - consider removing in production
```

### 517. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3454 - Console.log statement found - consider removing in production
```

### 518. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3456 - Console.log statement found - consider removing in production
```

### 519. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3484 - Console.log statement found - consider removing in production
```

### 520. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3633 - Console.log statement found - consider removing in production
```

### 521. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3634 - Console.log statement found - consider removing in production
```

### 522. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3635 - Console.log statement found - consider removing in production
```

### 523. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3641 - Console.log statement found - consider removing in production
```

### 524. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3642 - Console.log statement found - consider removing in production
```

### 525. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3643 - Console.log statement found - consider removing in production
```

### 526. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3645 - Missing semicolon
```

### 527. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3655 - Missing semicolon
```

### 528. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3660 - Console.log statement found - consider removing in production
```

### 529. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3664 - Console.log statement found - consider removing in production
```

### 530. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3668 - Missing semicolon
```

### 531. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3672 - Console.log statement found - consider removing in production
```

### 532. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3678 - Missing semicolon
```

### 533. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3679 - Missing semicolon
```

### 534. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3682 - Console.log statement found - consider removing in production
```

### 535. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3686 - Console.log statement found - consider removing in production
```

### 536. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3689 - Console.log statement found - consider removing in production
```

### 537. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3702 - Console.log statement found - consider removing in production
```

### 538. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3714 - Console.log statement found - consider removing in production
```

### 539. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3717 - Missing semicolon
```

### 540. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3720 - Console.log statement found - consider removing in production
```

### 541. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3723 - Console.log statement found - consider removing in production
```

### 542. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3727 - Console.log statement found - consider removing in production
```

### 543. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3728 - Missing semicolon
```

### 544. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3734 - Console.log statement found - consider removing in production
```

### 545. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3736 - Console.log statement found - consider removing in production
```

### 546. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3740 - Console.log statement found - consider removing in production
```

### 547. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3744 - Missing semicolon
```

### 548. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3752 - Console.log statement found - consider removing in production
```

### 549. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3756 - Console.log statement found - consider removing in production
```

### 550. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3762 - Console.log statement found - consider removing in production
```

### 551. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3767 - Console.log statement found - consider removing in production
```

### 552. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3770 - Console.log statement found - consider removing in production
```

### 553. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3772 - Console.log statement found - consider removing in production
```

### 554. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3776 - Console.log statement found - consider removing in production
```

### 555. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3777 - Console.log statement found - consider removing in production
```

### 556. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3778 - Console.log statement found - consider removing in production
```

### 557. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3780 - Console.log statement found - consider removing in production
```

### 558. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3789 - Console.log statement found - consider removing in production
```

### 559. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3794 - Console.log statement found - consider removing in production
```

### 560. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3795 - Console.log statement found - consider removing in production
```

### 561. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3796 - Console.log statement found - consider removing in production
```

### 562. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3797 - Console.log statement found - consider removing in production
```

### 563. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3811 - Console.log statement found - consider removing in production
```

### 564. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3813 - Console.log statement found - consider removing in production
```

### 565. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3823 - Console.log statement found - consider removing in production
```

### 566. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3826 - Console.log statement found - consider removing in production
```

### 567. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3829 - Console.log statement found - consider removing in production
```

### 568. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3830 - Console.log statement found - consider removing in production
```

### 569. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3837 - Console.log statement found - consider removing in production
```

### 570. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3843 - Console.log statement found - consider removing in production
```

### 571. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3844 - Console.log statement found - consider removing in production
```

### 572. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3845 - Console.log statement found - consider removing in production
```

### 573. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3848 - Console.log statement found - consider removing in production
```

### 574. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3850 - Console.log statement found - consider removing in production
```

### 575. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3852 - Console.log statement found - consider removing in production
```

### 576. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3859 - Console.log statement found - consider removing in production
```

### 577. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3861 - Console.log statement found - consider removing in production
```

### 578. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3866 - Console.log statement found - consider removing in production
```

### 579. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3867 - Console.log statement found - consider removing in production
```

### 580. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3868 - Console.log statement found - consider removing in production
```

### 581. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3869 - Console.log statement found - consider removing in production
```

### 582. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3870 - Console.log statement found - consider removing in production
```

### 583. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3875 - Console.log statement found - consider removing in production
```

### 584. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3876 - Console.log statement found - consider removing in production
```

### 585. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3907 - Console.log statement found - consider removing in production
```

### 586. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3910 - Console.log statement found - consider removing in production
```

### 587. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3911 - Console.log statement found - consider removing in production
```

### 588. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3912 - Console.log statement found - consider removing in production
```

### 589. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3913 - Console.log statement found - consider removing in production
```

### 590. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3914 - Console.log statement found - consider removing in production
```

### 591. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3915 - Console.log statement found - consider removing in production
```

### 592. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3918 - Console.log statement found - consider removing in production
```

### 593. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3919 - Console.log statement found - consider removing in production
```

### 594. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3920 - Console.log statement found - consider removing in production
```

### 595. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3921 - Console.log statement found - consider removing in production
```

### 596. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3922 - Console.log statement found - consider removing in production
```

### 597. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3923 - Console.log statement found - consider removing in production
```

### 598. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3924 - Console.log statement found - consider removing in production
```

### 599. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3926 - Console.log statement found - consider removing in production
```

### 600. [PROBLEM] 2025-07-02T18:58:12.188Z

```
[WARNING] scripts\build.js:3928 - Console.log statement found - consider removing in production
```

### 601. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:3931 - Console.log statement found - consider removing in production
```

### 602. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:3932 - Console.log statement found - consider removing in production
```

### 603. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:3933 - Console.log statement found - consider removing in production
```

### 604. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:3934 - Console.log statement found - consider removing in production
```

### 605. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:3936 - Console.log statement found - consider removing in production
```

### 606. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:3937 - Console.log statement found - consider removing in production
```

### 607. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:3938 - Console.log statement found - consider removing in production
```

### 608. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:3939 - Console.log statement found - consider removing in production
```

### 609. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:3941 - Console.log statement found - consider removing in production
```

### 610. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:3942 - Console.log statement found - consider removing in production
```

### 611. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:3943 - Console.log statement found - consider removing in production
```

### 612. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:3944 - Console.log statement found - consider removing in production
```

### 613. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:3945 - Console.log statement found - consider removing in production
```

### 614. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:3946 - Console.log statement found - consider removing in production
```

### 615. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:3948 - Console.log statement found - consider removing in production
```

### 616. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:3949 - Console.log statement found - consider removing in production
```

### 617. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:3950 - Console.log statement found - consider removing in production
```

### 618. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:3951 - Console.log statement found - consider removing in production
```

### 619. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:3954 - Console.log statement found - consider removing in production
```

### 620. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:3955 - Console.log statement found - consider removing in production
```

### 621. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:3956 - Console.log statement found - consider removing in production
```

### 622. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:3983 - Console.log statement found - consider removing in production
```

### 623. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4019 - Missing semicolon
```

### 624. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4039 - Missing semicolon
```

### 625. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4067 - Missing semicolon
```

### 626. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4109 - Missing semicolon
```

### 627. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4152 - Missing semicolon
```

### 628. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4194 - Console.log statement found - consider removing in production
```

### 629. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4199 - Console.log statement found - consider removing in production
```

### 630. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4204 - Console.log statement found - consider removing in production
```

### 631. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4210 - Missing semicolon
```

### 632. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4213 - Console.log statement found - consider removing in production
```

### 633. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4228 - Console.log statement found - consider removing in production
```

### 634. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4231 - Console.log statement found - consider removing in production
```

### 635. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4235 - Console.log statement found - consider removing in production
```

### 636. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4240 - Console.log statement found - consider removing in production
```

### 637. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4244 - Console.log statement found - consider removing in production
```

### 638. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4245 - Console.log statement found - consider removing in production
```

### 639. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4251 - Console.log statement found - consider removing in production
```

### 640. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4252 - Console.log statement found - consider removing in production
```

### 641. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4260 - Console.log statement found - consider removing in production
```

### 642. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4261 - Console.log statement found - consider removing in production
```

### 643. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4271 - Console.log statement found - consider removing in production
```

### 644. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4278 - Console.log statement found - consider removing in production
```

### 645. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4280 - Console.log statement found - consider removing in production
```

### 646. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4346 - Console.log statement found - consider removing in production
```

### 647. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4347 - Console.log statement found - consider removing in production
```

### 648. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4352 - Console.log statement found - consider removing in production
```

### 649. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4354 - Console.log statement found - consider removing in production
```

### 650. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4357 - Console.log statement found - consider removing in production
```

### 651. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\build.js:4361 - Console.log statement found - consider removing in production
```

### 652. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\keyword-cleanup.js:38 - Console.log statement found - consider removing in production
```

### 653. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\keyword-cleanup.js:40 - Missing semicolon
```

### 654. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\keyword-cleanup.js:58 - Console.log statement found - consider removing in production
```

### 655. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\keyword-cleanup.js:64 - Console.log statement found - consider removing in production
```

### 656. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\keyword-cleanup.js:67 - Console.log statement found - consider removing in production
```

### 657. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\keyword-cleanup.js:71 - Console.log statement found - consider removing in production
```

### 658. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\keyword-cleanup.js:72 - Console.log statement found - consider removing in production
```

### 659. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\keyword-cleanup.js:73 - Console.log statement found - consider removing in production
```

### 660. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\log-manager.js:45 - Missing semicolon
```

### 661. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\log-manager.js:61 - Console.log statement found - consider removing in production
```

### 662. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\log-manager.js:68 - Console.log statement found - consider removing in production
```

### 663. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\log-manager.js:83 - Console.log statement found - consider removing in production
```

### 664. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\log-manager.js:91 - Missing semicolon
```

### 665. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\log-manager.js:116 - Console.log statement found - consider removing in production
```

### 666. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\log-manager.js:144 - Missing semicolon
```

### 667. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\log-manager.js:158 - Missing semicolon
```

### 668. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\log-manager.js:174 - Console.log statement found - consider removing in production
```

### 669. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\log-manager.js:177 - Missing semicolon
```

### 670. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\log-manager.js:185 - Console.log statement found - consider removing in production
```

### 671. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\log-manager.js:204 - Console.log statement found - consider removing in production
```

### 672. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\log-manager.js:209 - Console.log statement found - consider removing in production
```

### 673. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\log-manager.js:228 - Missing semicolon
```

### 674. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\log-manager.js:235 - Console.log statement found - consider removing in production
```

### 675. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\log-manager.js:264 - Console.log statement found - consider removing in production
```

### 676. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\log-manager.js:265 - Console.log statement found - consider removing in production
```

### 677. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\log-manager.js:266 - Console.log statement found - consider removing in production
```

### 678. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] scripts\log-manager.js:267 - Console.log statement found - consider removing in production
```

### 679. [PROBLEM] 2025-07-02T18:58:12.189Z

```
[WARNING] style.css:170 - Missing semicolon in CSS property
```

### 680. [INFO] 2025-07-02T18:58:12.190Z

```
✅ Problems-Scan abgeschlossen. 636 Problem(e) gefunden.
```

### 681. [LOG] 2025-07-02T18:58:12.190Z

```
📄 Gefunden: 9 Markdown-Dateien

```

### 682. [LOG] 2025-07-02T18:58:12.190Z

```

📋 Verarbeite: bindungssehnsucht-normal.md
```

### 683. [LOG] 2025-07-02T18:58:12.193Z

```
   🧠 Running advanced checklist validation for bindungssehnsucht-normal.md...
```

### 684. [LOG] 2025-07-02T18:58:12.194Z

```
🎯 Analyzing: bindungssehnsucht-normal.md
```

### 685. [LOG] 2025-07-02T18:58:12.195Z

```
   Detected theme: BINDUNG_KERN
```

### 686. [LOG] 2025-07-02T18:58:12.195Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 687. [LOG] 2025-07-02T18:58:12.201Z

```
   📊 Checklist Score: 1%
```

### 688. [LOG] 2025-07-02T18:58:12.201Z

```
      • BINDUNG_KERN: 0%
```

### 689. [LOG] 2025-07-02T18:58:12.201Z

```
      • VERSCHMELZUNG: 0%
```

### 690. [LOG] 2025-07-02T18:58:12.201Z

```
      • HINGABE: 2%
```

### 691. [LOG] 2025-07-02T18:58:12.202Z

```
   🎯 Intentionen-Analyse...
```

### 692. [LOG] 2025-07-02T18:58:12.205Z

```
   ✅ Intention-Score: 60% - EXCELLENT!
```

### 693. [LOG] 2025-07-02T18:58:12.205Z

```
   📊 Code-Quality Check...
```

### 694. [LOG] 2025-07-02T18:58:12.223Z

```
   ✅ Code Quality OK
```

### 695. [LOG] 2025-07-02T18:58:12.224Z

```
   🔨 HTML generieren...
```

### 696. [LOG] 2025-07-02T18:58:12.224Z

```
   ✅ HTML erstellt: bindungssehnsucht-normal.html
```

### 697. [LOG] 2025-07-02T18:58:12.225Z

```

📋 Verarbeite: das-erste-mal.md
```

### 698. [LOG] 2025-07-02T18:58:12.226Z

```
   🧠 Running advanced checklist validation for das-erste-mal.md...
```

### 699. [LOG] 2025-07-02T18:58:12.227Z

```
🎯 Analyzing: das-erste-mal.md
```

### 700. [LOG] 2025-07-02T18:58:12.227Z

```
   Detected theme: BINDUNG_KERN
```

### 701. [LOG] 2025-07-02T18:58:12.227Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 702. [LOG] 2025-07-02T18:58:12.232Z

```
   📊 Checklist Score: 8%
```

### 703. [LOG] 2025-07-02T18:58:12.232Z

```
      • BINDUNG_KERN: 8%
```

### 704. [LOG] 2025-07-02T18:58:12.232Z

```
      • VERSCHMELZUNG: 8%
```

### 705. [LOG] 2025-07-02T18:58:12.232Z

```
      • HINGABE: 7%
```

### 706. [LOG] 2025-07-02T18:58:12.233Z

```
   🎯 Intentionen-Analyse...
```

### 707. [LOG] 2025-07-02T18:58:12.233Z

```
   ✅ Intention-Score: 60% - EXCELLENT!
```

### 708. [LOG] 2025-07-02T18:58:12.233Z

```
   📊 Code-Quality Check...
```

### 709. [LOG] 2025-07-02T18:58:12.234Z

```
   ✅ Code Quality OK
```

### 710. [LOG] 2025-07-02T18:58:12.234Z

```
   🔨 HTML generieren...
```

### 711. [LOG] 2025-07-02T18:58:12.235Z

```
   ✅ HTML erstellt: das-erste-mal.html
```

### 712. [LOG] 2025-07-02T18:58:12.235Z

```

📋 Verarbeite: der-sichere-hafen.md
```

### 713. [LOG] 2025-07-02T18:58:12.236Z

```
   🧠 Running advanced checklist validation for der-sichere-hafen.md...
```

### 714. [LOG] 2025-07-02T18:58:12.236Z

```
🎯 Analyzing: der-sichere-hafen.md
```

### 715. [LOG] 2025-07-02T18:58:12.237Z

```
   Detected theme: BINDUNG_KERN
```

### 716. [LOG] 2025-07-02T18:58:12.237Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 717. [LOG] 2025-07-02T18:58:12.241Z

```
   📊 Checklist Score: 9%
```

### 718. [LOG] 2025-07-02T18:58:12.241Z

```
      • BINDUNG_KERN: 17%
```

### 719. [LOG] 2025-07-02T18:58:12.242Z

```
      • VERSCHMELZUNG: 8%
```

### 720. [LOG] 2025-07-02T18:58:12.242Z

```
      • HINGABE: 2%
```

### 721. [LOG] 2025-07-02T18:58:12.242Z

```
   🎯 Intentionen-Analyse...
```

### 722. [LOG] 2025-07-02T18:58:12.244Z

```
   ❌ Intention-Score: 29% (Min: 60%)
```

### 723. [LOG] 2025-07-02T18:58:12.245Z

```
   📊 Code-Quality Check...
```

### 724. [LOG] 2025-07-02T18:58:12.246Z

```
   ✅ Code Quality OK
```

### 725. [LOG] 2025-07-02T18:58:12.246Z

```
   🔨 HTML generieren...
```

### 726. [LOG] 2025-07-02T18:58:12.247Z

```
   ✅ HTML erstellt: der-sichere-hafen.html
```

### 727. [LOG] 2025-07-02T18:58:12.247Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 728. [LOG] 2025-07-02T18:58:12.248Z

```

📋 Verarbeite: emotionale-leere.md
```

### 729. [LOG] 2025-07-02T18:58:12.249Z

```
   🧠 Running advanced checklist validation for emotionale-leere.md...
```

### 730. [LOG] 2025-07-02T18:58:12.250Z

```
🎯 Analyzing: emotionale-leere.md
```

### 731. [LOG] 2025-07-02T18:58:12.250Z

```
   Detected theme: BESITZ
```

### 732. [LOG] 2025-07-02T18:58:12.250Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 733. [LOG] 2025-07-02T18:58:12.256Z

```
   📊 Checklist Score: 18%
```

### 734. [LOG] 2025-07-02T18:58:12.256Z

```
      • BINDUNG_KERN: 17%
```

### 735. [LOG] 2025-07-02T18:58:12.256Z

```
      • VERSCHMELZUNG: 25%
```

### 736. [LOG] 2025-07-02T18:58:12.256Z

```
      • HINGABE: 12%
```

### 737. [LOG] 2025-07-02T18:58:12.257Z

```
   🎯 Intentionen-Analyse...
```

### 738. [LOG] 2025-07-02T18:58:12.258Z

```
   ❌ Intention-Score: 16% (Min: 60%)
```

### 739. [LOG] 2025-07-02T18:58:12.258Z

```
   📊 Code-Quality Check...
```

### 740. [LOG] 2025-07-02T18:58:12.260Z

```
   ✅ Code Quality OK
```

### 741. [LOG] 2025-07-02T18:58:12.260Z

```
   🔨 HTML generieren...
```

### 742. [LOG] 2025-07-02T18:58:12.261Z

```
   ✅ HTML erstellt: emotionale-leere.html
```

### 743. [LOG] 2025-07-02T18:58:12.261Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 744. [LOG] 2025-07-02T18:58:12.262Z

```

📋 Verarbeite: erschoepft-vom-stark-sein.md
```

### 745. [LOG] 2025-07-02T18:58:12.262Z

```
   🧠 Running advanced checklist validation for erschoepft-vom-stark-sein.md...
```

### 746. [LOG] 2025-07-02T18:58:12.263Z

```
🎯 Analyzing: erschoepft-vom-stark-sein.md
```

### 747. [LOG] 2025-07-02T18:58:12.263Z

```
   Detected theme: BESITZ
```

### 748. [LOG] 2025-07-02T18:58:12.263Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 749. [LOG] 2025-07-02T18:58:12.266Z

```
   📊 Checklist Score: 1%
```

### 750. [LOG] 2025-07-02T18:58:12.266Z

```
      • BINDUNG_KERN: 0%
```

### 751. [LOG] 2025-07-02T18:58:12.266Z

```
      • VERSCHMELZUNG: 0%
```

### 752. [LOG] 2025-07-02T18:58:12.266Z

```
      • HINGABE: 2%
```

### 753. [LOG] 2025-07-02T18:58:12.266Z

```
   🎯 Intentionen-Analyse...
```

### 754. [LOG] 2025-07-02T18:58:12.267Z

```
   ❌ Intention-Score: 22% (Min: 60%)
```

### 755. [LOG] 2025-07-02T18:58:12.267Z

```
   📊 Code-Quality Check...
```

### 756. [LOG] 2025-07-02T18:58:12.268Z

```
   ✅ Code Quality OK
```

### 757. [LOG] 2025-07-02T18:58:12.268Z

```
   🔨 HTML generieren...
```

### 758. [LOG] 2025-07-02T18:58:12.268Z

```
   ✅ HTML erstellt: erschoepft-vom-stark-sein.html
```

### 759. [LOG] 2025-07-02T18:58:12.269Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 760. [LOG] 2025-07-02T18:58:12.269Z

```

📋 Verarbeite: ich-will-einfach-gehalten-werden.md
```

### 761. [LOG] 2025-07-02T18:58:12.269Z

```
   🧠 Running advanced checklist validation for ich-will-einfach-gehalten-werden.md...
```

### 762. [LOG] 2025-07-02T18:58:12.270Z

```
🎯 Analyzing: ich-will-einfach-gehalten-werden.md
```

### 763. [LOG] 2025-07-02T18:58:12.270Z

```
   Detected theme: BINDUNG_KERN
```

### 764. [LOG] 2025-07-02T18:58:12.271Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 765. [LOG] 2025-07-02T18:58:12.277Z

```
   📊 Checklist Score: 18%
```

### 766. [LOG] 2025-07-02T18:58:12.277Z

```
      • BINDUNG_KERN: 17%
```

### 767. [LOG] 2025-07-02T18:58:12.278Z

```
      • VERSCHMELZUNG: 17%
```

### 768. [LOG] 2025-07-02T18:58:12.278Z

```
      • HINGABE: 19%
```

### 769. [LOG] 2025-07-02T18:58:12.278Z

```
   🎯 Intentionen-Analyse...
```

### 770. [LOG] 2025-07-02T18:58:12.279Z

```
   ❌ Intention-Score: 49% (Min: 60%)
```

### 771. [LOG] 2025-07-02T18:58:12.279Z

```
   📊 Code-Quality Check...
```

### 772. [LOG] 2025-07-02T18:58:12.280Z

```
   ✅ Code Quality OK
```

### 773. [LOG] 2025-07-02T18:58:12.280Z

```
   🔨 HTML generieren...
```

### 774. [LOG] 2025-07-02T18:58:12.281Z

```
   ✅ HTML erstellt: ich-will-einfach-gehalten-werden.html
```

### 775. [LOG] 2025-07-02T18:58:12.281Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 776. [LOG] 2025-07-02T18:58:12.281Z

```

📋 Verarbeite: kontrolle-abgeben.md
```

### 777. [LOG] 2025-07-02T18:58:12.282Z

```
   🧠 Running advanced checklist validation for kontrolle-abgeben.md...
```

### 778. [LOG] 2025-07-02T18:58:12.282Z

```
🎯 Analyzing: kontrolle-abgeben.md
```

### 779. [LOG] 2025-07-02T18:58:12.282Z

```
   Detected theme: PASSIVITÄT
```

### 780. [LOG] 2025-07-02T18:58:12.283Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 781. [LOG] 2025-07-02T18:58:12.287Z

```
   📊 Checklist Score: 4%
```

### 782. [LOG] 2025-07-02T18:58:12.287Z

```
      • BINDUNG_KERN: 8%
```

### 783. [LOG] 2025-07-02T18:58:12.287Z

```
      • VERSCHMELZUNG: 0%
```

### 784. [LOG] 2025-07-02T18:58:12.288Z

```
      • HINGABE: 2%
```

### 785. [LOG] 2025-07-02T18:58:12.288Z

```
   🎯 Intentionen-Analyse...
```

### 786. [LOG] 2025-07-02T18:58:12.289Z

```
   ❌ Intention-Score: 18% (Min: 60%)
```

### 787. [LOG] 2025-07-02T18:58:12.289Z

```
   📊 Code-Quality Check...
```

### 788. [LOG] 2025-07-02T18:58:12.289Z

```
   ✅ Code Quality OK
```

### 789. [LOG] 2025-07-02T18:58:12.289Z

```
   🔨 HTML generieren...
```

### 790. [LOG] 2025-07-02T18:58:12.290Z

```
   ✅ HTML erstellt: kontrolle-abgeben.html
```

### 791. [LOG] 2025-07-02T18:58:12.290Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 792. [LOG] 2025-07-02T18:58:12.291Z

```

📋 Verarbeite: sehnsucht-nach-hingabe.md
```

### 793. [LOG] 2025-07-02T18:58:12.291Z

```
   🧠 Running advanced checklist validation for sehnsucht-nach-hingabe.md...
```

### 794. [LOG] 2025-07-02T18:58:12.292Z

```
🎯 Analyzing: sehnsucht-nach-hingabe.md
```

### 795. [LOG] 2025-07-02T18:58:12.293Z

```
   Detected theme: BINDUNG_KERN
```

### 796. [LOG] 2025-07-02T18:58:12.293Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 797. [LOG] 2025-07-02T18:58:12.299Z

```
   📊 Checklist Score: 11%
```

### 798. [LOG] 2025-07-02T18:58:12.299Z

```
      • BINDUNG_KERN: 0%
```

### 799. [LOG] 2025-07-02T18:58:12.299Z

```
      • VERSCHMELZUNG: 25%
```

### 800. [LOG] 2025-07-02T18:58:12.299Z

```
      • HINGABE: 10%
```

### 801. [LOG] 2025-07-02T18:58:12.299Z

```
   🎯 Intentionen-Analyse...
```

### 802. [LOG] 2025-07-02T18:58:12.300Z

```
   ❌ Intention-Score: 18% (Min: 60%)
```

### 803. [LOG] 2025-07-02T18:58:12.300Z

```
   📊 Code-Quality Check...
```

### 804. [LOG] 2025-07-02T18:58:12.301Z

```
   ✅ Code Quality OK
```

### 805. [LOG] 2025-07-02T18:58:12.301Z

```
   🔨 HTML generieren...
```

### 806. [LOG] 2025-07-02T18:58:12.302Z

```
   ✅ HTML erstellt: sehnsucht-nach-hingabe.html
```

### 807. [LOG] 2025-07-02T18:58:12.302Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 808. [LOG] 2025-07-02T18:58:12.302Z

```

📋 Verarbeite: zu-viel-liebe-zu-wenig-liebe.md
```

### 809. [LOG] 2025-07-02T18:58:12.303Z

```
   🧠 Running advanced checklist validation for zu-viel-liebe-zu-wenig-liebe.md...
```

### 810. [LOG] 2025-07-02T18:58:12.304Z

```
🎯 Analyzing: zu-viel-liebe-zu-wenig-liebe.md
```

### 811. [LOG] 2025-07-02T18:58:12.305Z

```
   Detected theme: BESITZ
```

### 812. [LOG] 2025-07-02T18:58:12.305Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 813. [LOG] 2025-07-02T18:58:12.313Z

```
   📊 Checklist Score: 8%
```

### 814. [LOG] 2025-07-02T18:58:12.313Z

```
      • BINDUNG_KERN: 8%
```

### 815. [LOG] 2025-07-02T18:58:12.314Z

```
      • VERSCHMELZUNG: 8%
```

### 816. [LOG] 2025-07-02T18:58:12.314Z

```
      • HINGABE: 7%
```

### 817. [LOG] 2025-07-02T18:58:12.314Z

```
   🎯 Intentionen-Analyse...
```

### 818. [LOG] 2025-07-02T18:58:12.315Z

```
   ❌ Intention-Score: 14% (Min: 60%)
```

### 819. [LOG] 2025-07-02T18:58:12.315Z

```
   📊 Code-Quality Check...
```

### 820. [LOG] 2025-07-02T18:58:12.317Z

```
   ✅ Code Quality OK
```

### 821. [LOG] 2025-07-02T18:58:12.317Z

```
   🔨 HTML generieren...
```

### 822. [LOG] 2025-07-02T18:58:12.318Z

```
   ✅ HTML erstellt: zu-viel-liebe-zu-wenig-liebe.html
```

### 823. [LOG] 2025-07-02T18:58:12.318Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 824. [LOG] 2025-07-02T18:58:12.318Z

```

🔨 Generiere Blog-Index...
```

### 825. [LOG] 2025-07-02T18:58:12.321Z

```
   ✅ Blog-Index erstellt: blog/index.html
```

### 826. [LOG] 2025-07-02T18:58:12.321Z

```

════════════════════════════════════════════════════════════════════════════════
```

### 827. [LOG] 2025-07-02T18:58:12.322Z

```
📊 BUILD REPORT
```

### 828. [LOG] 2025-07-02T18:58:12.322Z

```
════════════════════════════════════════════════════════════════════════════════
```

### 829. [LOG] 2025-07-02T18:58:12.322Z

```

📄 Verarbeitete Dateien: 9/9
```

### 830. [LOG] 2025-07-02T18:58:12.322Z

```

🎯 INTENTION-OPTIMIERUNG ERFORDERLICH: 7 Dateien

```

### 831. [LOG] 2025-07-02T18:58:12.322Z

```
🤖 AUTOMATISCH GENERIERTER KI-PROMPT:
```

### 832. [LOG] 2025-07-02T18:58:12.322Z

```
────────────────────────────────────────────────────────────
```

### 833. [LOG] 2025-07-02T18:58:12.322Z

```

🎯 INCREMENTAL BUILD-OPTIMIERUNG #1

FILE: der-sichere-hafen.md
PROBLEM: SicherheitsVermittlung schwächste Intention (25%)
PRIORITY: #1 von 0 Problemen

═══════════════════════════════════════

EINE SPEZIFISCHE AUFGABE:
Verstärke "fühle ich mit" Trigger


INTEGRATION-STELLE GEFUNDEN:
ZEILE 7: ""Wo chan ich endlich akomme?", fragst du dich manchmal. Die Antwort ist: Bei mir. In Zuchwil. In meinen Armen. In unserem Zuhause. Hier ist dein sicherer Hafen. Hier gehörst du hin. Spürst du bereits diese Verbindung? Verstehe ich dich richtig, wenn ich sage, dass du genau das gesucht hast?"

AKTUELLER CONTEXT:
  Du weißt bereits, was ich meine, wenn ich vom sicheren Hafen spreche. Es ist nicht nur ein Ort - es ist ein Gefühl. Das Gefühl von Ankommen. Von Zuhause. Von endlich sicher sein. Von nicht mehr allein sein müssen. Kennst du das auch, diese tiefe Sehnsucht? Suchst du auch diesen einen Ort, wo du endlich zur Ruhe kommen kannst?
> "Wo chan ich endlich akomme?", fragst du dich manchmal. Die Antwort ist: Bei mir. In Zuchwil. In meinen Armen. In unserem Zuhause. Hier ist dein sicherer Hafen. Hier gehörst du hin. Spürst du bereits diese Verbindung? Verstehe ich dich richtig, wenn ich sage, dass du genau das gesucht hast? ← HIER VERSTÄRKEN
  Du weißt bereits, dass du müde bist vom Kämpfen. Müde vom stark sein müssen. Müde vom immer funktionieren müssen. Du sehnst dich nach einem Ort, an dem du die Rüstung ablegen kannst. An dem du einfach sein kannst. An dem du beschützt bist. Verstehst du, was ich meine? Du brauchst eine starke Schulter, an die du dich lehnen kannst, wenn alles zu schwer wird.

OPTIMIERUNG:
Entwickle eine authentische, situationsgerechte Integration von "fühle ich mit" 

INTEGRATION-PRINZIPIEN:
- Organisch in bestehenden emotionalen Kontext einweben
- Natürliche Sprache ohne künstliche Dialekt-Versuche
- Persönliche Ansprache ohne generische Template-Phrasen
- Trigger als natürlichen Teil des Gedankenflusses integrieren


WARUM DIESER TRIGGER:
- "fühle ich mit" = Core-Bedürfnis deiner Zielgruppe
- Verstärkt sicherheitsvermittlung Resonanz
- Zieht bindungssuchende Frauen magnetisch an

FEHLENDE TRIGGER (noch 6 verfügbar):
- "fühle ich mit"
- "bin ich da"
- "beschütze ich"

ERWARTETER SCORE-ANSTIEG:
SicherheitsVermittlung: 25% → 38% (+13%)

AKTUELLER GESAMT-SCORE: 29%
ZIEL-SCORE: 60%+ (noch 31% zu verbessern)

NACH DEM FIX:
1. Speichere Datei
2. Führe `pnpm build` aus  
3. System zeigt nächstes Problem

NÄCHSTE OPTIMIERUNGEN (Preview):
#2: BeschützerPositionierung (25% → 2/8 triggers)
#3: HandlungsAufforderung (25% → 2/8 triggers)

FOKUS: NUR dieser eine Trigger - keine Überforderung!

```

### 834. [LOG] 2025-07-02T18:58:12.323Z

```
────────────────────────────────────────────────────────────
```

### 835. [LOG] 2025-07-02T18:58:12.324Z

```

📋 Weitere 6 Dateien benötigen Optimierung:
```

### 836. [LOG] 2025-07-02T18:58:12.324Z

```
   2. emotionale-leere.md (Score: 16%)
```

### 837. [LOG] 2025-07-02T18:58:12.324Z

```
   3. erschoepft-vom-stark-sein.md (Score: 22%)
```

### 838. [LOG] 2025-07-02T18:58:12.324Z

```
   4. ich-will-einfach-gehalten-werden.md (Score: 49%)
```

### 839. [LOG] 2025-07-02T18:58:12.324Z

```
   5. kontrolle-abgeben.md (Score: 18%)
```

### 840. [LOG] 2025-07-02T18:58:12.324Z

```
   6. sehnsucht-nach-hingabe.md (Score: 18%)
```

### 841. [LOG] 2025-07-02T18:58:12.324Z

```
   7. zu-viel-liebe-zu-wenig-liebe.md (Score: 14%)
```

### 842. [LOG] 2025-07-02T18:58:12.324Z

```

════════════════════════════════════════════════════════════════════════════════
```

### 843. [LOG] 2025-07-02T18:58:12.325Z

```

🧠 ADVANCED CHECKLIST VALIDATION REPORT
```

### 844. [LOG] 2025-07-02T18:58:12.325Z

```
================================================================================
```

### 845. [LOG] 2025-07-02T18:58:12.325Z

```
📊 Overall Checklist Performance: 9%
```

### 846. [LOG] 2025-07-02T18:58:12.326Z

```
✅ Excellent (80%+): 0 files
```

### 847. [LOG] 2025-07-02T18:58:12.326Z

```
⚠️  Good (60-79%): 0 files
```

### 848. [LOG] 2025-07-02T18:58:12.326Z

```
❌ Needs Work (<60%): 9 files
```

### 849. [LOG] 2025-07-02T18:58:12.326Z

```

🎯 FILES REQUIRING PSYCHOLOGICAL DEPTH ENHANCEMENT:
```

### 850. [LOG] 2025-07-02T18:58:12.326Z

```
   • bindungssehnsucht-normal.md: 1%
```

### 851. [LOG] 2025-07-02T18:58:12.327Z

```
     → Improve BINDUNG_KERN theme (0%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 852. [LOG] 2025-07-02T18:58:12.327Z

```
     → Improve VERSCHMELZUNG theme (0%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 853. [LOG] 2025-07-02T18:58:12.327Z

```
   • das-erste-mal.md: 8%
```

### 854. [LOG] 2025-07-02T18:58:12.327Z

```
     → Improve BINDUNG_KERN theme (8%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 855. [LOG] 2025-07-02T18:58:12.327Z

```
     → Improve VERSCHMELZUNG theme (8%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 856. [LOG] 2025-07-02T18:58:12.327Z

```
   • der-sichere-hafen.md: 9%
```

### 857. [LOG] 2025-07-02T18:58:12.328Z

```
     → Improve BINDUNG_KERN theme (17%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 858. [LOG] 2025-07-02T18:58:12.328Z

```
     → Improve VERSCHMELZUNG theme (8%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 859. [LOG] 2025-07-02T18:58:12.328Z

```
   • emotionale-leere.md: 18%
```

### 860. [LOG] 2025-07-02T18:58:12.328Z

```
     → Improve BINDUNG_KERN theme (17%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 861. [LOG] 2025-07-02T18:58:12.328Z

```
     → Improve VERSCHMELZUNG theme (25%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 862. [LOG] 2025-07-02T18:58:12.328Z

```
   • erschoepft-vom-stark-sein.md: 1%
```

### 863. [LOG] 2025-07-02T18:58:12.328Z

```
     → Improve BINDUNG_KERN theme (0%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 864. [LOG] 2025-07-02T18:58:12.328Z

```
     → Improve VERSCHMELZUNG theme (0%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 865. [LOG] 2025-07-02T18:58:12.329Z

```
   • ich-will-einfach-gehalten-werden.md: 18%
```

### 866. [LOG] 2025-07-02T18:58:12.329Z

```
     → Improve BINDUNG_KERN theme (17%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 867. [LOG] 2025-07-02T18:58:12.329Z

```
     → Improve VERSCHMELZUNG theme (17%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 868. [LOG] 2025-07-02T18:58:12.329Z

```
   • kontrolle-abgeben.md: 4%
```

### 869. [LOG] 2025-07-02T18:58:12.329Z

```
     → Improve BINDUNG_KERN theme (8%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 870. [LOG] 2025-07-02T18:58:12.329Z

```
     → Improve VERSCHMELZUNG theme (0%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 871. [LOG] 2025-07-02T18:58:12.329Z

```
   • sehnsucht-nach-hingabe.md: 11%
```

### 872. [LOG] 2025-07-02T18:58:12.330Z

```
     → Improve BINDUNG_KERN theme (0%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 873. [LOG] 2025-07-02T18:58:12.330Z

```
     → Improve VERSCHMELZUNG theme (25%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 874. [LOG] 2025-07-02T18:58:12.330Z

```
   • zu-viel-liebe-zu-wenig-liebe.md: 8%
```

### 875. [LOG] 2025-07-02T18:58:12.330Z

```
     → Improve BINDUNG_KERN theme (8%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 876. [LOG] 2025-07-02T18:58:12.330Z

```
     → Improve VERSCHMELZUNG theme (8%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 877. [LOG] 2025-07-02T18:58:12.330Z

```

🔄 CHECKLIST ROTATION STATUS:
```

### 878. [LOG] 2025-07-02T18:58:12.331Z

```
   bindungssehnsucht-normal.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 879. [LOG] 2025-07-02T18:58:12.331Z

```
   das-erste-mal.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 880. [LOG] 2025-07-02T18:58:12.331Z

```
   der-sichere-hafen.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 881. [LOG] 2025-07-02T18:58:12.331Z

```
   emotionale-leere.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 882. [LOG] 2025-07-02T18:58:12.331Z

```
   erschoepft-vom-stark-sein.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 883. [LOG] 2025-07-02T18:58:12.331Z

```
   ich-will-einfach-gehalten-werden.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 884. [LOG] 2025-07-02T18:58:12.332Z

```
   kontrolle-abgeben.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 885. [LOG] 2025-07-02T18:58:12.332Z

```
   sehnsucht-nach-hingabe.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 886. [LOG] 2025-07-02T18:58:12.332Z

```
   zu-viel-liebe-zu-wenig-liebe.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 887. [LOG] 2025-07-02T18:58:12.332Z

```

💡 NÄCHSTE SCHRITTE:
```

### 888. [LOG] 2025-07-02T18:58:12.332Z

```
1. Kopiere den generierten KI-Prompt
```

### 889. [LOG] 2025-07-02T18:58:12.332Z

```
2. Füge ihn in Chat ein für spezifische Optimierung
```

### 890. [LOG] 2025-07-02T18:58:12.332Z

```
3. Führe nach Änderungen erneut "pnpm build" aus
```

### 891. [LOG] 2025-07-02T18:58:12.332Z

```
4. System zeigt automatisch nächstes Problem
```

### 892. [LOG] 2025-07-02T18:58:12.333Z

```

🚨 BUILD COMPLETED - CONTENT OPTIMIZATION ALERTS GENERATED!
```

### 893. [LOG] 2025-07-02T18:58:12.333Z

```
════════════════════════════════════════════════════════════════════════════════
```

### 894. [LOG] 2025-07-02T18:58:12.334Z

```
📋 Content-Optimization-Alert gespeichert: docs\015_build_logs\CONTENT_OPTIMIZATION_ALERT_2025-07-02.json
```

### 895. [LOG] 2025-07-02T18:58:12.334Z

```

📋 VOLLSTÄNDIGER AUTOMATION-PLAN:
```

### 896. [LOG] 2025-07-02T18:58:12.334Z

```

📊 VOLLSTÄNDIGE PROJEKT-ÜBERSICHT
════════════════════════════════════════════════════════════════════════════════
✅ Verarbeitete Dateien: 9/9
🎯 Optimierung erforderlich: 7 Dateien (78% verbleibend)
🚀 Fortschritt: 22% abgeschlossen

PRIORITÄTEN-RANKING:
   1. der-sichere-hafen.md (Score: 29% - Gap: 31%)
   2. emotionale-leere.md (Score: 16% - Gap: 44%)
   3. erschoepft-vom-stark-sein.md (Score: 22% - Gap: 38%)
   4. ich-will-einfach-gehalten-werden.md (Score: 49% - Gap: 11%)
   5. kontrolle-abgeben.md (Score: 18% - Gap: 42%)

ERWARTETE ARBEITSZEIT: 14 Minuten für vollständige Optimierung
════════════════════════════════════════════════════════════════════════════════
```

### 897. [LOG] 2025-07-02T18:58:12.335Z

```

🎯 VOLLSTÄNDIGER HANDLUNGSPLAN (AUTOMATION)
════════════════════════════════════════════════════════════════════════════════
PHASE 1 - SOFORTIGE AKTION:
   1️⃣ Optimiere: der-sichere-hafen.md (aktuell 29%)
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

ENDERGEBNIS: Alle 7 Dateien automatisch optimiert!
════════════════════════════════════════════════════════════════════════════════
```

### 898. [LOG] 2025-07-02T18:58:12.335Z

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

### 899. [LOG] 2025-07-02T18:58:12.336Z

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

### 900. [LOG] 2025-07-02T18:58:12.337Z

```

🤖 AUTOMATISCHE SYSTEM-AKTIONEN
════════════════════════════════════════════════════════════════════════════════
CURRENT ACTION - KOPIERE & FÜHRE AUS:


🎯 INCREMENTAL BUILD-OPTIMIERUNG #1

FILE: der-sichere-hafen.md
PROBLEM: SicherheitsVermittlung schwächste Intention (25%)
PRIORITY: #1 von 0 Problemen

═══════════════════════════════════════

EINE SPEZIFISCHE AUFGABE:
Verstärke "fühle ich mit" Trigger


INTEGRATION-STELLE GEFUNDEN:
ZEILE 7: ""Wo chan ich endlich akomme?", fragst du dich manchmal. Die Antwort ist: Bei mir. In Zuchwil. In meinen Armen. In unserem Zuhause. Hier ist dein sicherer Hafen. Hier gehörst du hin. Spürst du bereits diese Verbindung? Verstehe ich dich richtig, wenn ich sage, dass du genau das gesucht hast?"

AKTUELLER CONTEXT:
  Du weißt bereits, was ich meine, wenn ich vom sicheren Hafen spreche. Es ist nicht nur ein Ort - es ist ein Gefühl. Das Gefühl von Ankommen. Von Zuhause. Von endlich sicher sein. Von nicht mehr allein sein müssen. Kennst du das auch, diese tiefe Sehnsucht? Suchst du auch diesen einen Ort, wo du endlich zur Ruhe kommen kannst?
> "Wo chan ich endlich akomme?", fragst du dich manchmal. Die Antwort ist: Bei mir. In Zuchwil. In meinen Armen. In unserem Zuhause. Hier ist dein sicherer Hafen. Hier gehörst du hin. Spürst du bereits diese Verbindung? Verstehe ich dich richtig, wenn ich sage, dass du genau das gesucht hast? ← HIER VERSTÄRKEN
  Du weißt bereits, dass du müde bist vom Kämpfen. Müde vom stark sein müssen. Müde vom immer funktionieren müssen. Du sehnst dich nach einem Ort, an dem du die Rüstung ablegen kannst. An dem du einfach sein kannst. An dem du beschützt bist. Verstehst du, was ich meine? Du brauchst eine starke Schulter, an die du dich lehnen kannst, wenn alles zu schwer wird.

OPTIMIERUNG:
Entwickle eine authentische, situationsgerechte Integration von "fühle ich mit" 

INTEGRATION-PRINZIPIEN:
- Organisch in bestehenden emotionalen Kontext einweben
- Natürliche Sprache ohne künstliche Dialekt-Versuche
- Persönliche Ansprache ohne generische Template-Phrasen
- Trigger als natürlichen Teil des Gedankenflusses integrieren


WARUM DIESER TRIGGER:
- "fühle ich mit" = Core-Bedürfnis deiner Zielgruppe
- Verstärkt sicherheitsvermittlung Resonanz
- Zieht bindungssuchende Frauen magnetisch an

FEHLENDE TRIGGER (noch 6 verfügbar):
- "fühle ich mit"
- "bin ich da"
- "beschütze ich"

ERWARTETER SCORE-ANSTIEG:
SicherheitsVermittlung: 25% → 38% (+13%)

AKTUELLER GESAMT-SCORE: 29%
ZIEL-SCORE: 60%+ (noch 31% zu verbessern)

NACH DEM FIX:
1. Speichere Datei
2. Führe `pnpm build` aus  
3. System zeigt nächstes Problem

NÄCHSTE OPTIMIERUNGEN (Preview):
#2: BeschützerPositionierung (25% → 2/8 triggers)
#3: HandlungsAufforderung (25% → 2/8 triggers)

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
✅ Alle 7 Dateien erreichen 60%+ Score
✅ Build läuft ohne Quality-Alerts durch
✅ Content optimiert für maximale weibliche Ansprache
✅ Emotionale Bindung & Handlungsaktivierung maximiert

KEINE MANUELLEN EINGRIFFE NÖTIG - SYSTEM FÜHRT DURCH KOMPLETTEN PROZESS!
════════════════════════════════════════════════════════════════════════════════
```

### 901. [LOG] 2025-07-02T18:58:12.338Z

```

� QUALITY-ALERT DETAILS:
```

### 902. [LOG] 2025-07-02T18:58:12.339Z

```
   Type: CONTENT_OPTIMIZATION_NEEDED
```

### 903. [LOG] 2025-07-02T18:58:12.339Z

```
   Message: Vollständige Content-Optimierung durch KI empfohlen
```

### 904. [LOG] 2025-07-02T18:58:12.339Z

```
   Timestamp: 2025-07-02T18:58:12.339Z
```

### 905. [LOG] 2025-07-02T18:58:12.339Z

```
   Files affected: 7/9
```

### 906. [LOG] 2025-07-02T18:58:12.339Z

```
   First problem: der-sichere-hafen.md (29%)
```

### 907. [LOG] 2025-07-02T18:58:12.339Z

```
   Recommended action: CONTENT_OPTIMIZATION_RECOMMENDED
```

### 908. [LOG] 2025-07-02T18:58:12.339Z

```

📋 DETAILED QUALITY REPORT:
```

### 909. [LOG] 2025-07-02T18:58:12.340Z

```
   1. INTENTION_OPTIMIZATION_REQUIRED: der-sichere-hafen.md (Score: 29%, Issues: 0)
```

### 910. [LOG] 2025-07-02T18:58:12.340Z

```
   2. PENDING_OPTIMIZATION: emotionale-leere.md (Score: 16%, Issues: 0)
```

### 911. [LOG] 2025-07-02T18:58:12.340Z

```
   3. PENDING_OPTIMIZATION: erschoepft-vom-stark-sein.md (Score: 22%, Issues: 0)
```

### 912. [LOG] 2025-07-02T18:58:12.340Z

```
   4. PENDING_OPTIMIZATION: ich-will-einfach-gehalten-werden.md (Score: 49%, Issues: 0)
```

### 913. [LOG] 2025-07-02T18:58:12.341Z

```
   5. PENDING_OPTIMIZATION: kontrolle-abgeben.md (Score: 18%, Issues: 0)
```

### 914. [LOG] 2025-07-02T18:58:12.341Z

```
   6. PENDING_OPTIMIZATION: sehnsucht-nach-hingabe.md (Score: 18%, Issues: 0)
```

### 915. [LOG] 2025-07-02T18:58:12.341Z

```
   7. PENDING_OPTIMIZATION: zu-viel-liebe-zu-wenig-liebe.md (Score: 14%, Issues: 0)
```

### 916. [LOG] 2025-07-02T18:58:12.341Z

```

🎯 KI-PROMPT BEREIT FÜR OPTIMIERUNG:
```

### 917. [LOG] 2025-07-02T18:58:12.341Z

```
────────────────────────────────────────────────────────────
```

### 918. [LOG] 2025-07-02T18:58:12.341Z

```

🎯 INCREMENTAL BUILD-OPTIMIERUNG #1

FILE: der-sichere-hafen.md
PROBLEM: SicherheitsVermittlung schwächste Intention (25%)
PRIORITY: #1 von 0 Problemen

═══════════════════════════════════════

EINE SPEZIFISCHE AUFGABE:
Verstärke "fühle ich mit" Trigger


INTEGRATION-STELLE GEFUNDEN:
ZEILE 7: ""Wo chan ich endlich akomme?", fragst du dich manchmal. Die Antwort ist: Bei mir. In Zuchwil. In meinen Armen. In unserem Zuhause. Hier ist dein sicherer Hafen. Hier gehörst du hin. Spürst du bereits diese Verbindung? Verstehe ich dich richtig, wenn ich sage, dass du genau das gesucht hast?"

AKTUELLER CONTEXT:
  Du weißt bereits, was ich meine, wenn ich vom sicheren Hafen spreche. Es ist nicht nur ein Ort - es ist ein Gefühl. Das Gefühl von Ankommen. Von Zuhause. Von endlich sicher sein. Von nicht mehr allein sein müssen. Kennst du das auch, diese tiefe Sehnsucht? Suchst du auch diesen einen Ort, wo du endlich zur Ruhe kommen kannst?
> "Wo chan ich endlich akomme?", fragst du dich manchmal. Die Antwort ist: Bei mir. In Zuchwil. In meinen Armen. In unserem Zuhause. Hier ist dein sicherer Hafen. Hier gehörst du hin. Spürst du bereits diese Verbindung? Verstehe ich dich richtig, wenn ich sage, dass du genau das gesucht hast? ← HIER VERSTÄRKEN
  Du weißt bereits, dass du müde bist vom Kämpfen. Müde vom stark sein müssen. Müde vom immer funktionieren müssen. Du sehnst dich nach einem Ort, an dem du die Rüstung ablegen kannst. An dem du einfach sein kannst. An dem du beschützt bist. Verstehst du, was ich meine? Du brauchst eine starke Schulter, an die du dich lehnen kannst, wenn alles zu schwer wird.

OPTIMIERUNG:
Entwickle eine authentische, situationsgerechte Integration von "fühle ich mit" 

INTEGRATION-PRINZIPIEN:
- Organisch in bestehenden emotionalen Kontext einweben
- Natürliche Sprache ohne künstliche Dialekt-Versuche
- Persönliche Ansprache ohne generische Template-Phrasen
- Trigger als natürlichen Teil des Gedankenflusses integrieren


WARUM DIESER TRIGGER:
- "fühle ich mit" = Core-Bedürfnis deiner Zielgruppe
- Verstärkt sicherheitsvermittlung Resonanz
- Zieht bindungssuchende Frauen magnetisch an

FEHLENDE TRIGGER (noch 6 verfügbar):
- "fühle ich mit"
- "bin ich da"
- "beschütze ich"

ERWARTETER SCORE-ANSTIEG:
SicherheitsVermittlung: 25% → 38% (+13%)

AKTUELLER GESAMT-SCORE: 29%
ZIEL-SCORE: 60%+ (noch 31% zu verbessern)

NACH DEM FIX:
1. Speichere Datei
2. Führe `pnpm build` aus  
3. System zeigt nächstes Problem

NÄCHSTE OPTIMIERUNGEN (Preview):
#2: BeschützerPositionierung (25% → 2/8 triggers)
#3: HandlungsAufforderung (25% → 2/8 triggers)

FOKUS: NUR dieser eine Trigger - keine Überforderung!

```

### 919. [LOG] 2025-07-02T18:58:12.343Z

```
────────────────────────────────────────────────────────────
```

### 920. [LOG] 2025-07-02T18:58:12.343Z

```

✅ BUILD ERFOLGREICH - OPTIMIERUNG EMPFOHLEN!
```

### 921. [LOG] 2025-07-02T18:58:12.343Z

```
📋 QUALITY-ALERTS GESPEICHERT FÜR SPÄTERE VERBESSERUNG!
```

### 922. [LOG] 2025-07-02T18:58:12.343Z

```
🚀 VERCEL DEPLOYMENT KANN FORTFAHREN!
```

### 923. [LOG] 2025-07-02T18:58:12.343Z

```
💡 AUTOMATION-PLAN VERFÜGBAR FÜR OPTIMIERUNG!
```

### 924. [LOG] 2025-07-02T18:58:12.343Z

```

📋 FILE-MANAGEMENT-REGELN FÜR OPTIMIERUNG:
```

### 925. [LOG] 2025-07-02T18:58:12.344Z

```
✅ KEINE NEUEN DATEIEN ERSTELLEN - Problem an der Ursache lösen!
```

### 926. [LOG] 2025-07-02T18:58:12.344Z

```
✅ KEINE DATEIEN WIEDERHERSTELLEN - Betroffene Datei direkt optimieren!
```

### 927. [LOG] 2025-07-02T18:58:12.344Z

```
✅ ZWINGEND: Problematische Datei direkt bearbeiten und verbessern
```

### 928. [LOG] 2025-07-02T18:58:12.344Z

```
✅ FOKUS: Root-Cause-Lösung statt Umgehung oder Neuansatz
```

### 929. [LOG] 2025-07-02T18:58:12.344Z

```
💡 HINWEIS: Diese Regeln helfen der KI, gezielt und effektiv zu optimieren
```

### 930. [LOG] 2025-07-02T18:58:12.344Z

```

🤖 OPTIMIZATION-PLAN BEREIT FÜR MANUELLE VERBESSERUNG
```

### 931. [LOG] 2025-07-02T18:58:12.344Z

```
📝 KI KANN CONTENT NACH QUALITY-ALERTS OPTIMIEREN
```

### 932. [LOG] 2025-07-02T18:58:12.344Z

```
🔄 BUILD LÄUFT VOLLSTÄNDIG DURCH - KEINE BLOCKIERUNG
```

### 933. [LOG] 2025-07-02T18:58:12.344Z

```
✅ BUILD ERFOLGREICH ABGESCHLOSSEN - VERCEL DEPLOYMENT READY
```

### 934. [LOG] 2025-07-02T18:58:12.345Z

```

✅ BUILD ERFOLGREICH ABGESCHLOSSEN!
```

### 935. [LOG] 2025-07-02T18:58:12.345Z

```
   Verarbeitete Dateien: 9/9
```

### 936. [LOG] 2025-07-02T18:58:12.345Z

```
   Content-Optimierungspotential: 7 Dateien
```

### 937. [LOG] 2025-07-02T18:58:12.345Z

```
📊 Analysiere Landingpage und "Über mich"-Seite...
```

### 938. [LOG] 2025-07-02T18:58:12.379Z

```
📄 Landingpage (index.html):
```

### 939. [LOG] 2025-07-02T18:58:12.379Z

```
   Aktuelle Wörter: 4003
```

### 940. [LOG] 2025-07-02T18:58:12.379Z

```
   Empfohlener Bereich: 4000-6000+ Wörter
```

### 941. [LOG] 2025-07-02T18:58:12.379Z

```
   ✅ Optimale Wortanzahl: 4003 Wörter
```

### 942. [LOG] 2025-07-02T18:58:12.380Z

```
   📋 SEO-Check:
```

### 943. [LOG] 2025-07-02T18:58:12.381Z

```
      Title: 63 Zeichen
```

### 944. [LOG] 2025-07-02T18:58:12.381Z

```
      Description: 233 Zeichen
```

### 945. [LOG] 2025-07-02T18:58:12.386Z

```
📄 Über mich (ueber-mich.html):
```

### 946. [LOG] 2025-07-02T18:58:12.386Z

```
   Aktuelle Wörter: 1494
```

### 947. [LOG] 2025-07-02T18:58:12.386Z

```
   Empfohlener Bereich: 2000-4000+ Wörter
```

### 948. [LOG] 2025-07-02T18:58:12.386Z

```
   ❌ Zu wenig Wörter: 1494 (min. 2000 für SEO)
```

### 949. [LOG] 2025-07-02T18:58:12.387Z

```
   📈 Erweitere um 506 Wörter für bessere SEO-Performance
```

### 950. [LOG] 2025-07-02T18:58:12.387Z

```
   💡 Empfehlung für "Über mich":
```

### 951. [LOG] 2025-07-02T18:58:12.387Z

```
      • Mehr persönliche Geschichte und Background
```

### 952. [LOG] 2025-07-02T18:58:12.387Z

```
      • Konkrete Erfahrungen und Lebensereignisse
```

### 953. [LOG] 2025-07-02T18:58:12.387Z

```
      • Was dich von anderen unterscheidet
```

### 954. [LOG] 2025-07-02T18:58:12.387Z

```
      • Deine Vision und Werte erklären
```

### 955. [LOG] 2025-07-02T18:58:12.388Z

```
   📋 SEO-Check:
```

### 956. [LOG] 2025-07-02T18:58:12.388Z

```
      Title: 71 Zeichen
```

### 957. [LOG] 2025-07-02T18:58:12.388Z

```
      Description: 165 Zeichen
```

### 958. [LOG] 2025-07-02T18:58:12.388Z

```

```

### 959. [LOG] 2025-07-02T18:58:12.388Z

```
🔗 Analysiere interne Verlinkung...
```

### 960. [LOG] 2025-07-02T18:58:12.389Z

```
   📄 Gefunden: 13 HTML-Dateien
```

### 961. [LOG] 2025-07-02T18:58:12.396Z

```
   📄 index.html: 11 interne Links
```

### 962. [LOG] 2025-07-02T18:58:12.400Z

```
   📄 ueber-mich.html: 11 interne Links
```

### 963. [LOG] 2025-07-02T18:58:12.405Z

```
   📄 kontakt.html: 7 interne Links
```

### 964. [LOG] 2025-07-02T18:58:12.408Z

```
   📄 blog/index.html: 23 interne Links
```

### 965. [LOG] 2025-07-02T18:58:12.413Z

```
   📄 blog/bindungssehnsucht-normal.html: 5 interne Links
```

### 966. [LOG] 2025-07-02T18:58:12.418Z

```
   📄 blog/das-erste-mal.html: 5 interne Links
```

### 967. [LOG] 2025-07-02T18:58:12.421Z

```
   📄 blog/der-sichere-hafen.html: 5 interne Links
```

### 968. [LOG] 2025-07-02T18:58:12.424Z

```
   📄 blog/emotionale-leere.html: 5 interne Links
```

### 969. [LOG] 2025-07-02T18:58:12.427Z

```
   📄 blog/erschoepft-vom-stark-sein.html: 5 interne Links
```

### 970. [LOG] 2025-07-02T18:58:12.430Z

```
   📄 blog/ich-will-einfach-gehalten-werden.html: 5 interne Links
```

### 971. [LOG] 2025-07-02T18:58:12.434Z

```
   📄 blog/kontrolle-abgeben.html: 5 interne Links
```

### 972. [LOG] 2025-07-02T18:58:12.441Z

```
   📄 blog/sehnsucht-nach-hingabe.html: 5 interne Links
```

### 973. [LOG] 2025-07-02T18:58:12.444Z

```
   📄 blog/zu-viel-liebe-zu-wenig-liebe.html: 5 interne Links
```

### 974. [LOG] 2025-07-02T18:58:12.444Z

```

   🔍 Validiere 22 eindeutige Links...
```

### 975. [LOG] 2025-07-02T18:58:12.445Z

```
   🔍 Spezielle Blog-Verlinkungsanalyse...
```

### 976. [LOG] 2025-07-02T18:58:12.446Z

```
   🔍 README-Verlinkungsanalyse...
```

### 977. [LOG] 2025-07-02T18:58:12.446Z

```

   📊 Verlinkungsanalyse abgeschlossen:
```

### 978. [LOG] 2025-07-02T18:58:12.446Z

```
   ⚠️ 11 Verlinkungsprobleme gefunden:
```

### 979. [LOG] 2025-07-02T18:58:12.446Z

```
   🚨 KRITISCHE Probleme (11):
```

### 980. [LOG] 2025-07-02T18:58:12.446Z

```
      1. Defekter Link: ../index.html (Ziel nicht gefunden)
```

### 981. [LOG] 2025-07-02T18:58:12.446Z

```
         → blog/index.html: "Ein offener Brief" (Zeile ~1)
```

### 982. [LOG] 2025-07-02T18:58:12.446Z

```
         → blog/index.html: "Start" (Zeile ~2)
```

### 983. [LOG] 2025-07-02T18:58:12.447Z

```
         → blog/index.html: "Startseite" (Zeile ~23)
```

### 984. [LOG] 2025-07-02T18:58:12.447Z

```
         → blog/bindungssehnsucht-normal.html: "Ein offener Brief" (Zeile ~1)
```

### 985. [LOG] 2025-07-02T18:58:12.447Z

```
         → blog/bindungssehnsucht-normal.html: "Start" (Zeile ~2)
```

### 986. [LOG] 2025-07-02T18:58:12.447Z

```
         → blog/bindungssehnsucht-normal.html: "Startseite" (Zeile ~5)
```

### 987. [LOG] 2025-07-02T18:58:12.447Z

```
         → blog/das-erste-mal.html: "Ein offener Brief" (Zeile ~1)
```

### 988. [LOG] 2025-07-02T18:58:12.447Z

```
         → blog/das-erste-mal.html: "Start" (Zeile ~2)
```

### 989. [LOG] 2025-07-02T18:58:12.447Z

```
         → blog/das-erste-mal.html: "Startseite" (Zeile ~5)
```

### 990. [LOG] 2025-07-02T18:58:12.447Z

```
         → blog/der-sichere-hafen.html: "Ein offener Brief" (Zeile ~1)
```

### 991. [LOG] 2025-07-02T18:58:12.447Z

```
         → blog/der-sichere-hafen.html: "Start" (Zeile ~2)
```

### 992. [LOG] 2025-07-02T18:58:12.448Z

```
         → blog/der-sichere-hafen.html: "Startseite" (Zeile ~5)
```

### 993. [LOG] 2025-07-02T18:58:12.448Z

```
         → blog/emotionale-leere.html: "Ein offener Brief" (Zeile ~1)
```

### 994. [LOG] 2025-07-02T18:58:12.448Z

```
         → blog/emotionale-leere.html: "Start" (Zeile ~2)
```

### 995. [LOG] 2025-07-02T18:58:12.448Z

```
         → blog/emotionale-leere.html: "Startseite" (Zeile ~5)
```

### 996. [LOG] 2025-07-02T18:58:12.448Z

```
         → blog/erschoepft-vom-stark-sein.html: "Ein offener Brief" (Zeile ~1)
```

### 997. [LOG] 2025-07-02T18:58:12.448Z

```
         → blog/erschoepft-vom-stark-sein.html: "Start" (Zeile ~2)
```

### 998. [LOG] 2025-07-02T18:58:12.448Z

```
         → blog/erschoepft-vom-stark-sein.html: "Startseite" (Zeile ~5)
```

### 999. [LOG] 2025-07-02T18:58:12.448Z

```
         → blog/ich-will-einfach-gehalten-werden.html: "Ein offener Brief" (Zeile ~1)
```

### 1000. [LOG] 2025-07-02T18:58:12.448Z

```
         → blog/ich-will-einfach-gehalten-werden.html: "Start" (Zeile ~2)
```

### 1001. [LOG] 2025-07-02T18:58:12.448Z

```
         → blog/ich-will-einfach-gehalten-werden.html: "Startseite" (Zeile ~5)
```

### 1002. [LOG] 2025-07-02T18:58:12.449Z

```
         → blog/kontrolle-abgeben.html: "Ein offener Brief" (Zeile ~1)
```

### 1003. [LOG] 2025-07-02T18:58:12.449Z

```
         → blog/kontrolle-abgeben.html: "Start" (Zeile ~2)
```

### 1004. [LOG] 2025-07-02T18:58:12.449Z

```
         → blog/kontrolle-abgeben.html: "Startseite" (Zeile ~5)
```

### 1005. [LOG] 2025-07-02T18:58:12.449Z

```
         → blog/sehnsucht-nach-hingabe.html: "Ein offener Brief" (Zeile ~1)
```

### 1006. [LOG] 2025-07-02T18:58:12.449Z

```
         → blog/sehnsucht-nach-hingabe.html: "Start" (Zeile ~2)
```

### 1007. [LOG] 2025-07-02T18:58:12.449Z

```
         → blog/sehnsucht-nach-hingabe.html: "Startseite" (Zeile ~5)
```

### 1008. [LOG] 2025-07-02T18:58:12.449Z

```
         → blog/zu-viel-liebe-zu-wenig-liebe.html: "Ein offener Brief" (Zeile ~1)
```

### 1009. [LOG] 2025-07-02T18:58:12.449Z

```
         → blog/zu-viel-liebe-zu-wenig-liebe.html: "Start" (Zeile ~2)
```

### 1010. [LOG] 2025-07-02T18:58:12.449Z

```
         → blog/zu-viel-liebe-zu-wenig-liebe.html: "Startseite" (Zeile ~5)
```

### 1011. [LOG] 2025-07-02T18:58:12.449Z

```
      2. Defekter Link: ../ueber-mich.html (Ziel nicht gefunden)
```

### 1012. [LOG] 2025-07-02T18:58:12.450Z

```
         → blog/index.html: "Über Mich" (Zeile ~3)
```

### 1013. [LOG] 2025-07-02T18:58:12.450Z

```
         → blog/bindungssehnsucht-normal.html: "Über Mich" (Zeile ~3)
```

### 1014. [LOG] 2025-07-02T18:58:12.450Z

```
         → blog/das-erste-mal.html: "Über Mich" (Zeile ~3)
```

### 1015. [LOG] 2025-07-02T18:58:12.450Z

```
         → blog/der-sichere-hafen.html: "Über Mich" (Zeile ~3)
```

### 1016. [LOG] 2025-07-02T18:58:12.450Z

```
         → blog/emotionale-leere.html: "Über Mich" (Zeile ~3)
```

### 1017. [LOG] 2025-07-02T18:58:12.450Z

```
         → blog/erschoepft-vom-stark-sein.html: "Über Mich" (Zeile ~3)
```

### 1018. [LOG] 2025-07-02T18:58:12.450Z

```
         → blog/ich-will-einfach-gehalten-werden.html: "Über Mich" (Zeile ~3)
```

### 1019. [LOG] 2025-07-02T18:58:12.450Z

```
         → blog/kontrolle-abgeben.html: "Über Mich" (Zeile ~3)
```

### 1020. [LOG] 2025-07-02T18:58:12.450Z

```
         → blog/sehnsucht-nach-hingabe.html: "Über Mich" (Zeile ~3)
```

### 1021. [LOG] 2025-07-02T18:58:12.450Z

```
         → blog/zu-viel-liebe-zu-wenig-liebe.html: "Über Mich" (Zeile ~3)
```

### 1022. [LOG] 2025-07-02T18:58:12.450Z

```
      3. Defekter Link: zu-viel-liebe-zu-wenig-liebe.html (Ziel nicht gefunden)
```

### 1023. [LOG] 2025-07-02T18:58:12.451Z

```
         → blog/index.html: "Du weißt bereits: 'Bin ich z'viel?' – Du bist genau richtig bei mir" (Zeile ~5)
```

### 1024. [LOG] 2025-07-02T18:58:12.451Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~6)
```

### 1025. [LOG] 2025-07-02T18:58:12.451Z

```
      4. Defekter Link: das-erste-mal.html (Ziel nicht gefunden)
```

### 1026. [LOG] 2025-07-02T18:58:12.451Z

```
         → blog/index.html: "Du weißt bereits: 'Das erste Mal mit ihm' – Simon wird dein Erstes" (Zeile ~7)
```

### 1027. [LOG] 2025-07-02T18:58:12.451Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~8)
```

### 1028. [LOG] 2025-07-02T18:58:12.451Z

```
      5. Defekter Link: der-sichere-hafen.html (Ziel nicht gefunden)
```

### 1029. [LOG] 2025-07-02T18:58:12.451Z

```
         → blog/index.html: "Du weißt bereits: 'Der sichere Hafen' – Simon ist dein Zuhause" (Zeile ~9)
```

### 1030. [LOG] 2025-07-02T18:58:12.451Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~10)
```

### 1031. [LOG] 2025-07-02T18:58:12.451Z

```
      6. Defekter Link: emotionale-leere.html (Ziel nicht gefunden)
```

### 1032. [LOG] 2025-07-02T18:58:12.451Z

```
         → blog/index.html: "'Fühl mi wie holl' – Simon füllt deine emotionale Leere" (Zeile ~11)
```

### 1033. [LOG] 2025-07-02T18:58:12.451Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~12)
```

### 1034. [LOG] 2025-07-02T18:58:12.451Z

```
      7. Defekter Link: ich-will-einfach-gehalten-werden.html (Ziel nicht gefunden)
```

### 1035. [LOG] 2025-07-02T18:58:12.452Z

```
         → blog/index.html: "Du weißt bereits: 'Ich will einfach gehalten werden' – Ich halte dich" (Zeile ~13)
```

### 1036. [LOG] 2025-07-02T18:58:12.452Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~14)
```

### 1037. [LOG] 2025-07-02T18:58:12.452Z

```
      8. Defekter Link: bindungssehnsucht-normal.html (Ziel nicht gefunden)
```

### 1038. [LOG] 2025-07-02T18:58:12.452Z

```
         → blog/index.html: "Wenn Bindungssehnsucht normal ist – Du darfst so fühlen" (Zeile ~15)
```

### 1039. [LOG] 2025-07-02T18:58:12.452Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~16)
```

### 1040. [LOG] 2025-07-02T18:58:12.452Z

```
      9. Defekter Link: erschoepft-vom-stark-sein.html (Ziel nicht gefunden)
```

### 1041. [LOG] 2025-07-02T18:58:12.452Z

```
         → blog/index.html: "Du weißt bereits: 'Bin so müed' – Endlich schwach sein dürfen" (Zeile ~17)
```

### 1042. [LOG] 2025-07-02T18:58:12.452Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~18)
```

### 1043. [LOG] 2025-07-02T18:58:12.452Z

```
      10. Defekter Link: kontrolle-abgeben.html (Ziel nicht gefunden)
```

### 1044. [LOG] 2025-07-02T18:58:12.452Z

```
         → blog/index.html: "Du weißt bereits: 'Will dass einer übernimmt' – Kontrolle abgeben" (Zeile ~19)
```

### 1045. [LOG] 2025-07-02T18:58:12.452Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~20)
```

### 1046. [LOG] 2025-07-02T18:58:12.453Z

```
      11. Defekter Link: sehnsucht-nach-hingabe.html (Ziel nicht gefunden)
```

### 1047. [LOG] 2025-07-02T18:58:12.453Z

```
         → blog/index.html: "Du weißt bereits: 'Will mi ganz gää' – Ich nehme dich vollständig" (Zeile ~21)
```

### 1048. [LOG] 2025-07-02T18:58:12.453Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~22)
```

### 1049. [LOG] 2025-07-02T18:58:12.453Z

```

```

## Performance-Statistiken

- **Gesamte Log-Einträge:** 1049
- **ERROR-Level:** 0
- **WARN-Level:** 0
- **LOG-Level:** 411
- **PROBLEM-Level:** 636
- **Build-Dauer:** 777ms
- **Durchschnitt pro Log:** 1ms

## VS Code Problems Report

**❌ 636 Problem(e) gefunden:**

### Übersicht
- **Errors:** 4
- **Warnings:** 632  
- **Infos:** 0

### 🚨 Errors (4)

#### 1. build-process\modules\logger.js:145
**Severity:** ERROR  
**Message:** Typo: "fucntion" should be "function"  
**Timestamp:** 2025-07-02T18:58:12.181Z

#### 2. build-process\modules\logger.js:146
**Severity:** ERROR  
**Message:** Typo: "fucntion" should be "function"  
**Timestamp:** 2025-07-02T18:58:12.181Z

#### 3. scripts\build.js:686
**Severity:** ERROR  
**Message:** Typo: "fucntion" should be "function"  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 4. scripts\build.js:687
**Severity:** ERROR  
**Message:** Typo: "fucntion" should be "function"  
**Timestamp:** 2025-07-02T18:58:12.187Z

### ⚠️ Warnings (632)

#### 1. app-gui\dist-electron\index-Ckhtba7t.js:40
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.170Z

#### 2. app-gui\dist-electron\index-Ckhtba7t.js:1943
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.171Z

#### 3. app-gui\dist-electron\index-Ckhtba7t.js:2327
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.171Z

#### 4. app-gui\dist-electron\index-Ckhtba7t.js:2713
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.171Z

#### 5. app-gui\dist-electron\index-Ckhtba7t.js:2741
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.171Z

#### 6. app-gui\dist-electron\index-Ckhtba7t.js:3562
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.171Z

#### 7. app-gui\dist-electron\index-Ckhtba7t.js:3599
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.171Z

#### 8. app-gui\dist-electron\index-Ckhtba7t.js:4316
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.171Z

#### 9. app-gui\dist-electron\index-Ckhtba7t.js:5013
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.172Z

#### 10. app-gui\dist-electron\index-Ckhtba7t.js:5406
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.172Z

#### 11. app-gui\dist-electron\index-Ckhtba7t.js:6202
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.172Z

#### 12. app-gui\dist-electron\index-Ckhtba7t.js:6587
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.172Z

#### 13. app-gui\dist-electron\index-Ckhtba7t.js:6720
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.172Z

#### 14. app-gui\dist-electron\index-Ckhtba7t.js:6743
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.172Z

#### 15. app-gui\dist-electron\index-Ckhtba7t.js:6803
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.172Z

#### 16. app-gui\dist-electron\index-Ckhtba7t.js:6895
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.172Z

#### 17. app-gui\dist-electron\index-Ckhtba7t.js:6923
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.172Z

#### 18. app-gui\dist-electron\index-Ckhtba7t.js:6954
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.172Z

#### 19. app-gui\dist-electron\index-Ckhtba7t.js:7029
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.172Z

#### 20. app-gui\dist-electron\index-Ckhtba7t.js:7054
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.172Z

#### 21. app-gui\dist-electron\index-Ckhtba7t.js:7099
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.172Z

#### 22. app-gui\dist-electron\index-Ckhtba7t.js:7531
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.172Z

#### 23. app-gui\dist-electron\index-Ckhtba7t.js:7585
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.172Z

#### 24. app-gui\dist-electron\index-Ckhtba7t.js:7983
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.172Z

#### 25. app-gui\dist-electron\index-Ckhtba7t.js:8071
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.172Z

#### 26. app-gui\dist-electron\index-Ckhtba7t.js:8075
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.172Z

#### 27. app-gui\dist-electron\index-Ckhtba7t.js:8112
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.172Z

#### 28. app-gui\dist-electron\index-Ckhtba7t.js:8493
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.172Z

#### 29. app-gui\dist-electron\index-Ckhtba7t.js:9746
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.173Z

#### 30. app-gui\dist-electron\index-Ckhtba7t.js:9945
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.173Z

#### 31. app-gui\dist-electron\index-DhEd7u67.js:40
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.174Z

#### 32. app-gui\dist-electron\index-DhEd7u67.js:1950
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.175Z

#### 33. app-gui\dist-electron\index-DhEd7u67.js:2360
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.175Z

#### 34. app-gui\dist-electron\index-DhEd7u67.js:2762
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.175Z

#### 35. app-gui\dist-electron\index-DhEd7u67.js:2790
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.175Z

#### 36. app-gui\dist-electron\index-DhEd7u67.js:3618
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.175Z

#### 37. app-gui\dist-electron\index-DhEd7u67.js:3655
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.175Z

#### 38. app-gui\dist-electron\index-DhEd7u67.js:4372
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.175Z

#### 39. app-gui\dist-electron\index-DhEd7u67.js:5069
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.175Z

#### 40. app-gui\dist-electron\index-DhEd7u67.js:5462
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.176Z

#### 41. app-gui\dist-electron\index-DhEd7u67.js:6258
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.176Z

#### 42. app-gui\dist-electron\index-DhEd7u67.js:6643
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.176Z

#### 43. app-gui\dist-electron\index-DhEd7u67.js:6776
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.176Z

#### 44. app-gui\dist-electron\index-DhEd7u67.js:6799
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.176Z

#### 45. app-gui\dist-electron\index-DhEd7u67.js:6859
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.176Z

#### 46. app-gui\dist-electron\index-DhEd7u67.js:6951
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.176Z

#### 47. app-gui\dist-electron\index-DhEd7u67.js:6979
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.176Z

#### 48. app-gui\dist-electron\index-DhEd7u67.js:7010
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.176Z

#### 49. app-gui\dist-electron\index-DhEd7u67.js:7085
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.176Z

#### 50. app-gui\dist-electron\index-DhEd7u67.js:7110
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.176Z

#### 51. app-gui\dist-electron\index-DhEd7u67.js:7155
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.176Z

#### 52. app-gui\dist-electron\index-DhEd7u67.js:7587
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.176Z

#### 53. app-gui\dist-electron\index-DhEd7u67.js:7641
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.176Z

#### 54. app-gui\dist-electron\index-DhEd7u67.js:8039
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.176Z

#### 55. app-gui\dist-electron\index-DhEd7u67.js:8127
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.176Z

#### 56. app-gui\dist-electron\index-DhEd7u67.js:8131
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.176Z

#### 57. app-gui\dist-electron\index-DhEd7u67.js:8168
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.176Z

#### 58. app-gui\dist-electron\index-DhEd7u67.js:8549
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.176Z

#### 59. app-gui\dist-electron\index-DhEd7u67.js:9802
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.177Z

#### 60. app-gui\dist-electron\index-DhEd7u67.js:10001
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.177Z

#### 61. app-gui\src\App.jsx:4
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.179Z

#### 62. app-gui\src\App.jsx:72
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.179Z

#### 63. app-gui\src\App.jsx:99
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.179Z

#### 64. build-process\mainBuild.js:52
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.180Z

#### 65. build-process\mainBuild.js:64
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.180Z

#### 66. build-process\mainBuild.js:98
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.180Z

#### 67. build-process\mainBuild.js:102
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.180Z

#### 68. build-process\mainBuild.js:104
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.180Z

#### 69. build-process\mainBuild.js:110
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.180Z

#### 70. build-process\mainBuild.js:112
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.180Z

#### 71. build-process\mainBuild.js:116
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.180Z

#### 72. build-process\mainBuild.js:123
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.180Z

#### 73. build-process\mainBuild.js:145
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.180Z

#### 74. build-process\mainBuild.js:147
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.180Z

#### 75. build-process\mainBuild.js:174
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.180Z

#### 76. build-process\mainBuild.js:205
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.180Z

#### 77. build-process\mainBuild.js:231
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.180Z

#### 78. build-process\mainBuild.js:254
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.180Z

#### 79. build-process\modules\contentOptimizer.js:53
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.180Z

#### 80. build-process\modules\contentOptimizer.js:66
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.180Z

#### 81. build-process\modules\contentOptimizer.js:111
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.180Z

#### 82. build-process\modules\contentOptimizer.js:157
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.180Z

#### 83. build-process\modules\contentOptimizer.js:338
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.180Z

#### 84. build-process\modules\fileUtils.js:22
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.180Z

#### 85. build-process\modules\fileUtils.js:45
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.180Z

#### 86. build-process\modules\fileUtils.js:90
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.180Z

#### 87. build-process\modules\fileUtils.js:151
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.180Z

#### 88. build-process\modules\fileUtils.js:174
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.180Z

#### 89. build-process\modules\logger.js:17
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.181Z

#### 90. build-process\modules\logger.js:34
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.181Z

#### 91. build-process\modules\logger.js:62
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.181Z

#### 92. build-process\modules\logger.js:243
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.181Z

#### 93. build-process\modules\logger.js:276
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.181Z

#### 94. build-process\modules\seoCheck.js:20
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.181Z

#### 95. build-process\modules\seoCheck.js:94
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.181Z

#### 96. build-process\modules\seoCheck.js:96
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.181Z

#### 97. build-process\modules\seoCheck.js:109
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.181Z

#### 98. build-process\modules\seoCheck.js:248
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.181Z

#### 99. build-process\modules\seoCheck.js:335
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.181Z

#### 100. build-process\modules\seoCheck.js:406
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.181Z

#### 101. build-process\modules\seoCheck.js:423
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.181Z

#### 102. build-process\modules\seoCheck.js:505
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.181Z

#### 103. build-process\modules\seoCheck.js:513
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.181Z

#### 104. scripts\advanced-content-validator.js:17
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 105. scripts\advanced-content-validator.js:32
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 106. scripts\advanced-content-validator.js:34
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 107. scripts\advanced-content-validator.js:50
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 108. scripts\advanced-content-validator.js:128
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 109. scripts\advanced-content-validator.js:178
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 110. scripts\advanced-content-validator.js:211
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 111. scripts\advanced-content-validator.js:220
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 112. scripts\advanced-content-validator.js:221
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 113. scripts\advanced-content-validator.js:227
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 114. scripts\advanced-content-validator.js:236
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 115. scripts\advanced-content-validator.js:276
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 116. scripts\advanced-content-validator.js:326
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 117. scripts\advanced-content-validator.js:334
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 118. scripts\advanced-content-validator.js:369
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 119. scripts\advanced-content-validator.js:397
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 120. scripts\advanced-content-validator.js:405
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 121. scripts\advanced-content-validator.js:408
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 122. scripts\advanced-content-validator.js:412
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 123. scripts\advanced-content-validator.js:414
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 124. scripts\advanced-content-validator.js:416
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 125. scripts\advanced-content-validator.js:417
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 126. scripts\advanced-content-validator.js:420
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 127. scripts\advanced-content-validator.js:502
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 128. scripts\advanced-content-validator.js:509
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 129. scripts\advanced-content-validator.js:514
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 130. scripts\advanced-content-validator.js:607
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 131. scripts\advanced-content-validator.js:616
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 132. scripts\advanced-content-validator.js:639
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 133. scripts\advanced-content-validator.js:662
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.183Z

#### 134. scripts\build-checks\check_scripts\advanced-content-validator.js:17
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 135. scripts\build-checks\check_scripts\advanced-content-validator.js:32
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 136. scripts\build-checks\check_scripts\advanced-content-validator.js:34
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 137. scripts\build-checks\check_scripts\advanced-content-validator.js:50
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 138. scripts\build-checks\check_scripts\advanced-content-validator.js:128
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 139. scripts\build-checks\check_scripts\advanced-content-validator.js:178
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 140. scripts\build-checks\check_scripts\advanced-content-validator.js:211
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 141. scripts\build-checks\check_scripts\advanced-content-validator.js:220
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 142. scripts\build-checks\check_scripts\advanced-content-validator.js:221
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 143. scripts\build-checks\check_scripts\advanced-content-validator.js:227
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 144. scripts\build-checks\check_scripts\advanced-content-validator.js:236
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 145. scripts\build-checks\check_scripts\advanced-content-validator.js:276
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 146. scripts\build-checks\check_scripts\advanced-content-validator.js:326
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 147. scripts\build-checks\check_scripts\advanced-content-validator.js:334
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 148. scripts\build-checks\check_scripts\advanced-content-validator.js:369
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 149. scripts\build-checks\check_scripts\advanced-content-validator.js:397
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 150. scripts\build-checks\check_scripts\advanced-content-validator.js:483
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 151. scripts\build-checks\check_scripts\advanced-content-validator.js:490
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 152. scripts\build-checks\check_scripts\advanced-content-validator.js:495
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 153. scripts\build-checks\check_scripts\advanced-content-validator.js:588
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 154. scripts\build-checks\check_scripts\advanced-content-validator.js:597
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 155. scripts\build-checks\check_scripts\advanced-content-validator.js:620
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 156. scripts\build-checks\check_scripts\advanced-content-validator.js:643
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 157. scripts\build-checks\check_scripts\checklist-cli.js:14
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 158. scripts\build-checks\check_scripts\checklist-cli.js:15
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 159. scripts\build-checks\check_scripts\checklist-cli.js:20
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 160. scripts\build-checks\check_scripts\checklist-cli.js:21
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 161. scripts\build-checks\check_scripts\checklist-cli.js:24
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 162. scripts\build-checks\check_scripts\checklist-cli.js:28
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 163. scripts\build-checks\check_scripts\checklist-cli.js:33
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 164. scripts\build-checks\check_scripts\checklist-cli.js:34
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 165. scripts\build-checks\check_scripts\checklist-cli.js:35
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 166. scripts\build-checks\check_scripts\checklist-cli.js:42
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 167. scripts\build-checks\check_scripts\checklist-cli.js:50
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 168. scripts\build-checks\check_scripts\checklist-cli.js:52
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 169. scripts\build-checks\check_scripts\checklist-cli.js:53
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 170. scripts\build-checks\check_scripts\checklist-cli.js:64
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 171. scripts\build-checks\check_scripts\checklist-cli.js:69
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 172. scripts\build-checks\check_scripts\checklist-cli.js:72
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 173. scripts\build-checks\check_scripts\checklist-cli.js:79
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 174. scripts\build-checks\check_scripts\checklist-cli.js:84
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 175. scripts\build-checks\check_scripts\checklist-cli.js:89
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 176. scripts\build-checks\check_scripts\checklist-cli.js:93
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 177. scripts\build-checks\check_scripts\checklist-cli.js:94
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 178. scripts\build-checks\check_scripts\checklist-cli.js:96
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 179. scripts\build-checks\check_scripts\checklist-cli.js:113
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 180. scripts\build-checks\check_scripts\checklist-cli.js:115
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 181. scripts\build-checks\check_scripts\checklist-cli.js:116
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 182. scripts\build-checks\check_scripts\checklist-cli.js:118
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 183. scripts\build-checks\check_scripts\checklist-cli.js:126
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 184. scripts\build-checks\check_scripts\checklist-cli.js:131
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 185. scripts\build-checks\check_scripts\checklist-cli.js:132
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 186. scripts\build-checks\check_scripts\checklist-cli.js:136
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 187. scripts\build-checks\check_scripts\checklist-cli.js:137
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 188. scripts\build-checks\check_scripts\checklist-cli.js:141
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 189. scripts\build-checks\check_scripts\checklist-cli.js:143
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 190. scripts\build-checks\check_scripts\checklist-cli.js:145
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 191. scripts\build-checks\check_scripts\checklist-cli.js:149
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 192. scripts\build-checks\check_scripts\checklist-cli.js:151
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 193. scripts\build-checks\check_scripts\checklist-cli.js:156
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 194. scripts\build-checks\check_scripts\checklist-cli.js:158
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 195. scripts\build-checks\check_scripts\checklist-cli.js:164
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 196. scripts\build-checks\check_scripts\checklist-cli.js:166
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 197. scripts\build-checks\check_scripts\checklist-cli.js:172
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 198. scripts\build-checks\check_scripts\checklist-cli.js:173
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 199. scripts\build-checks\check_scripts\checklist-cli.js:174
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 200. scripts\build-checks\check_scripts\checklist-cli.js:175
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 201. scripts\build-checks\check_scripts\checklist-cli.js:176
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 202. scripts\build-checks\check_scripts\checklist-cli.js:177
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 203. scripts\build-checks\check_scripts\checklist-cli.js:178
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 204. scripts\build-checks\check_scripts\checklist-cli.js:179
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 205. scripts\build-checks\check_scripts\checklist-cli.js:180
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 206. scripts\build-checks\check_scripts\checklist-cli.js:181
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 207. scripts\build-checks\check_scripts\checklist-cli.js:182
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 208. scripts\build-checks\check_scripts\checklist-cli.js:183
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 209. scripts\build-checks\check_scripts\checklist-cli.js:184
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 210. scripts\build-checks\check_scripts\checklist-cli.js:185
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 211. scripts\build-checks\check_scripts\checklist-cli.js:217
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 212. scripts\build-checks\check_scripts\checklist-cli.js:218
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.184Z

#### 213. scripts\build-checks\check_scripts\comprehensiveCheck.js:15
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.185Z

#### 214. scripts\build-checks\check_scripts\comprehensiveCheck.js:34
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.185Z

#### 215. scripts\build-checks\check_scripts\comprehensiveCheck.js:62
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.185Z

#### 216. scripts\build-checks\check_scripts\comprehensiveCheck.js:63
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.185Z

#### 217. scripts\build-checks\check_scripts\comprehensiveCheck.js:66
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.185Z

#### 218. scripts\build-checks\check_scripts\comprehensiveCheck.js:158
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.185Z

#### 219. scripts\build-checks\check_scripts\comprehensiveCheck.js:209
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.185Z

#### 220. scripts\build-checks\check_scripts\comprehensiveCheck.js:246
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.185Z

#### 221. scripts\build-checks\check_scripts\masterBuildChecker.js:15
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.185Z

#### 222. scripts\build-checks\check_scripts\masterBuildChecker.js:75
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.185Z

#### 223. scripts\build-checks\check_scripts\masterBuildChecker.js:76
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.185Z

#### 224. scripts\build-checks\check_scripts\masterBuildChecker.js:77
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.185Z

#### 225. scripts\build-checks\check_scripts\masterBuildChecker.js:78
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.185Z

#### 226. scripts\build-checks\check_scripts\masterBuildChecker.js:79
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.185Z

#### 227. scripts\build-checks\check_scripts\masterBuildChecker.js:84
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.185Z

#### 228. scripts\build-checks\check_scripts\masterBuildChecker.js:87
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.185Z

#### 229. scripts\build-checks\check_scripts\masterBuildChecker.js:116
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.185Z

#### 230. scripts\build-checks\check_scripts\masterBuildChecker.js:240
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.185Z

#### 231. scripts\build-checks\check_scripts\masterBuildChecker.js:373
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.185Z

#### 232. scripts\build-checks\check_scripts\masterBuildChecker.js:421
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.185Z

#### 233. scripts\build-checks\check_scripts\masterBuildChecker.js:470
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.185Z

#### 234. scripts\build.js:13
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 235. scripts\build.js:16
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 236. scripts\build.js:17
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 237. scripts\build.js:20
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 238. scripts\build.js:30
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 239. scripts\build.js:36
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 240. scripts\build.js:88
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 241. scripts\build.js:100
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 242. scripts\build.js:115
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 243. scripts\build.js:118
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 244. scripts\build.js:120
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 245. scripts\build.js:131
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 246. scripts\build.js:133
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 247. scripts\build.js:136
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 248. scripts\build.js:143
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 249. scripts\build.js:145
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 250. scripts\build.js:148
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 251. scripts\build.js:155
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 252. scripts\build.js:157
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 253. scripts\build.js:173
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 254. scripts\build.js:195
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 255. scripts\build.js:213
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 256. scripts\build.js:221
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 257. scripts\build.js:237
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 258. scripts\build.js:252
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 259. scripts\build.js:269
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 260. scripts\build.js:272
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 261. scripts\build.js:277
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 262. scripts\build.js:280
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 263. scripts\build.js:282
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 264. scripts\build.js:286
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 265. scripts\build.js:305
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 266. scripts\build.js:307
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 267. scripts\build.js:326
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 268. scripts\build.js:338
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 269. scripts\build.js:347
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 270. scripts\build.js:348
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 271. scripts\build.js:349
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 272. scripts\build.js:354
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 273. scripts\build.js:355
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 274. scripts\build.js:366
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 275. scripts\build.js:367
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 276. scripts\build.js:368
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 277. scripts\build.js:369
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 278. scripts\build.js:370
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 279. scripts\build.js:374
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 280. scripts\build.js:375
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 281. scripts\build.js:376
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 282. scripts\build.js:377
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 283. scripts\build.js:378
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 284. scripts\build.js:382
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 285. scripts\build.js:383
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 286. scripts\build.js:386
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 287. scripts\build.js:393
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 288. scripts\build.js:394
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 289. scripts\build.js:395
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 290. scripts\build.js:416
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 291. scripts\build.js:425
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 292. scripts\build.js:434
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 293. scripts\build.js:461
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 294. scripts\build.js:492
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 295. scripts\build.js:515
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 296. scripts\build.js:538
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 297. scripts\build.js:559
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 298. scripts\build.js:571
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 299. scripts\build.js:734
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 300. scripts\build.js:744
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 301. scripts\build.js:830
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 302. scripts\build.js:900
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 303. scripts\build.js:940
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 304. scripts\build.js:1069
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 305. scripts\build.js:1073
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 306. scripts\build.js:1080
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 307. scripts\build.js:1087
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 308. scripts\build.js:1149
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 309. scripts\build.js:1174
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 310. scripts\build.js:1193
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 311. scripts\build.js:1221
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 312. scripts\build.js:1300
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 313. scripts\build.js:1343
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 314. scripts\build.js:1354
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 315. scripts\build.js:1416
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 316. scripts\build.js:1445
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 317. scripts\build.js:1449
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 318. scripts\build.js:1509
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 319. scripts\build.js:1574
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 320. scripts\build.js:1765
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 321. scripts\build.js:1803
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 322. scripts\build.js:1815
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 323. scripts\build.js:1895
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 324. scripts\build.js:1991
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 325. scripts\build.js:1992
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 326. scripts\build.js:2113
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 327. scripts\build.js:2114
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 328. scripts\build.js:2120
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 329. scripts\build.js:2121
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 330. scripts\build.js:2122
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 331. scripts\build.js:2142
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 332. scripts\build.js:2146
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 333. scripts\build.js:2156
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 334. scripts\build.js:2161
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 335. scripts\build.js:2175
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 336. scripts\build.js:2181
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 337. scripts\build.js:2183
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 338. scripts\build.js:2185
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 339. scripts\build.js:2186
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 340. scripts\build.js:2198
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 341. scripts\build.js:2201
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 342. scripts\build.js:2213
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 343. scripts\build.js:2217
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 344. scripts\build.js:2219
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 345. scripts\build.js:2222
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 346. scripts\build.js:2273
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 347. scripts\build.js:2275
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 348. scripts\build.js:2280
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 349. scripts\build.js:2286
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 350. scripts\build.js:2288
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.187Z

#### 351. scripts\build.js:2300
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 352. scripts\build.js:2301
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 353. scripts\build.js:2302
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 354. scripts\build.js:2305
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 355. scripts\build.js:2306
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 356. scripts\build.js:2307
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 357. scripts\build.js:2308
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 358. scripts\build.js:2309
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 359. scripts\build.js:2310
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 360. scripts\build.js:2313
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 361. scripts\build.js:2317
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 362. scripts\build.js:2318
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 363. scripts\build.js:2319
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 364. scripts\build.js:2323
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 365. scripts\build.js:2347
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 366. scripts\build.js:2349
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 367. scripts\build.js:2355
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 368. scripts\build.js:2358
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 369. scripts\build.js:2378
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 370. scripts\build.js:2379
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 371. scripts\build.js:2402
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 372. scripts\build.js:2406
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 373. scripts\build.js:2407
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 374. scripts\build.js:2409
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 375. scripts\build.js:2410
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 376. scripts\build.js:2414
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 377. scripts\build.js:2416
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 378. scripts\build.js:2419
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 379. scripts\build.js:2422
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 380. scripts\build.js:2425
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 381. scripts\build.js:2426
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 382. scripts\build.js:2429
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 383. scripts\build.js:2430
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 384. scripts\build.js:2437
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 385. scripts\build.js:2443
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 386. scripts\build.js:2444
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 387. scripts\build.js:2445
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 388. scripts\build.js:2448
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 389. scripts\build.js:2450
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 390. scripts\build.js:2452
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 391. scripts\build.js:2459
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 392. scripts\build.js:2461
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 393. scripts\build.js:2467
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 394. scripts\build.js:2468
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 395. scripts\build.js:2487
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 396. scripts\build.js:2495
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 397. scripts\build.js:2499
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 398. scripts\build.js:2501
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 399. scripts\build.js:2504
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 400. scripts\build.js:2505
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 401. scripts\build.js:2506
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 402. scripts\build.js:2507
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 403. scripts\build.js:2508
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 404. scripts\build.js:2511
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 405. scripts\build.js:2513
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 406. scripts\build.js:2518
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 407. scripts\build.js:2520
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 408. scripts\build.js:2525
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 409. scripts\build.js:2535
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 410. scripts\build.js:2549
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 411. scripts\build.js:2550
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 412. scripts\build.js:2551
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 413. scripts\build.js:2552
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 414. scripts\build.js:2553
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 415. scripts\build.js:2554
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 416. scripts\build.js:2555
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 417. scripts\build.js:2559
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 418. scripts\build.js:2560
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 419. scripts\build.js:2561
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 420. scripts\build.js:2562
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 421. scripts\build.js:2563
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 422. scripts\build.js:2564
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 423. scripts\build.js:2565
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 424. scripts\build.js:2566
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 425. scripts\build.js:2586
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 426. scripts\build.js:2603
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 427. scripts\build.js:2641
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 428. scripts\build.js:2697
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 429. scripts\build.js:2750
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 430. scripts\build.js:2779
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 431. scripts\build.js:2816
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 432. scripts\build.js:2828
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 433. scripts\build.js:2856
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 434. scripts\build.js:2868
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 435. scripts\build.js:2894
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 436. scripts\build.js:2946
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 437. scripts\build.js:2950
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 438. scripts\build.js:2963
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 439. scripts\build.js:2972
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 440. scripts\build.js:2981
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 441. scripts\build.js:2990
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 442. scripts\build.js:3011
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 443. scripts\build.js:3024
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 444. scripts\build.js:3037
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 445. scripts\build.js:3050
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 446. scripts\build.js:3077
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 447. scripts\build.js:3086
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 448. scripts\build.js:3095
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 449. scripts\build.js:3104
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 450. scripts\build.js:3113
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 451. scripts\build.js:3206
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 452. scripts\build.js:3210
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 453. scripts\build.js:3220
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 454. scripts\build.js:3230
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 455. scripts\build.js:3249
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 456. scripts\build.js:3274
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 457. scripts\build.js:3283
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 458. scripts\build.js:3292
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 459. scripts\build.js:3301
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 460. scripts\build.js:3310
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 461. scripts\build.js:3319
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 462. scripts\build.js:3342
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 463. scripts\build.js:3355
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 464. scripts\build.js:3368
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 465. scripts\build.js:3377
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 466. scripts\build.js:3386
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 467. scripts\build.js:3395
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 468. scripts\build.js:3425
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 469. scripts\build.js:3452
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 470. scripts\build.js:3454
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 471. scripts\build.js:3456
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 472. scripts\build.js:3484
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 473. scripts\build.js:3633
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 474. scripts\build.js:3634
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 475. scripts\build.js:3635
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 476. scripts\build.js:3641
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 477. scripts\build.js:3642
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 478. scripts\build.js:3643
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 479. scripts\build.js:3645
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 480. scripts\build.js:3655
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 481. scripts\build.js:3660
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 482. scripts\build.js:3664
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 483. scripts\build.js:3668
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 484. scripts\build.js:3672
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 485. scripts\build.js:3678
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 486. scripts\build.js:3679
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 487. scripts\build.js:3682
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 488. scripts\build.js:3686
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 489. scripts\build.js:3689
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 490. scripts\build.js:3702
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 491. scripts\build.js:3714
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 492. scripts\build.js:3717
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 493. scripts\build.js:3720
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 494. scripts\build.js:3723
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 495. scripts\build.js:3727
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 496. scripts\build.js:3728
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 497. scripts\build.js:3734
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 498. scripts\build.js:3736
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 499. scripts\build.js:3740
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 500. scripts\build.js:3744
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 501. scripts\build.js:3752
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 502. scripts\build.js:3756
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 503. scripts\build.js:3762
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 504. scripts\build.js:3767
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 505. scripts\build.js:3770
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 506. scripts\build.js:3772
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 507. scripts\build.js:3776
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 508. scripts\build.js:3777
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 509. scripts\build.js:3778
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 510. scripts\build.js:3780
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 511. scripts\build.js:3789
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 512. scripts\build.js:3794
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 513. scripts\build.js:3795
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 514. scripts\build.js:3796
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 515. scripts\build.js:3797
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 516. scripts\build.js:3811
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 517. scripts\build.js:3813
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 518. scripts\build.js:3823
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 519. scripts\build.js:3826
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 520. scripts\build.js:3829
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 521. scripts\build.js:3830
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 522. scripts\build.js:3837
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 523. scripts\build.js:3843
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 524. scripts\build.js:3844
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 525. scripts\build.js:3845
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 526. scripts\build.js:3848
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 527. scripts\build.js:3850
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 528. scripts\build.js:3852
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 529. scripts\build.js:3859
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 530. scripts\build.js:3861
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 531. scripts\build.js:3866
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 532. scripts\build.js:3867
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 533. scripts\build.js:3868
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 534. scripts\build.js:3869
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 535. scripts\build.js:3870
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 536. scripts\build.js:3875
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 537. scripts\build.js:3876
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 538. scripts\build.js:3907
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 539. scripts\build.js:3910
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 540. scripts\build.js:3911
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 541. scripts\build.js:3912
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 542. scripts\build.js:3913
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 543. scripts\build.js:3914
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 544. scripts\build.js:3915
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 545. scripts\build.js:3918
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 546. scripts\build.js:3919
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 547. scripts\build.js:3920
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 548. scripts\build.js:3921
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 549. scripts\build.js:3922
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 550. scripts\build.js:3923
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 551. scripts\build.js:3924
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 552. scripts\build.js:3926
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 553. scripts\build.js:3928
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.188Z

#### 554. scripts\build.js:3931
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 555. scripts\build.js:3932
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 556. scripts\build.js:3933
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 557. scripts\build.js:3934
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 558. scripts\build.js:3936
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 559. scripts\build.js:3937
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 560. scripts\build.js:3938
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 561. scripts\build.js:3939
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 562. scripts\build.js:3941
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 563. scripts\build.js:3942
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 564. scripts\build.js:3943
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 565. scripts\build.js:3944
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 566. scripts\build.js:3945
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 567. scripts\build.js:3946
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 568. scripts\build.js:3948
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 569. scripts\build.js:3949
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 570. scripts\build.js:3950
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 571. scripts\build.js:3951
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 572. scripts\build.js:3954
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 573. scripts\build.js:3955
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 574. scripts\build.js:3956
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 575. scripts\build.js:3983
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 576. scripts\build.js:4019
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 577. scripts\build.js:4039
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 578. scripts\build.js:4067
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 579. scripts\build.js:4109
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 580. scripts\build.js:4152
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 581. scripts\build.js:4194
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 582. scripts\build.js:4199
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 583. scripts\build.js:4204
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 584. scripts\build.js:4210
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 585. scripts\build.js:4213
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 586. scripts\build.js:4228
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 587. scripts\build.js:4231
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 588. scripts\build.js:4235
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 589. scripts\build.js:4240
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 590. scripts\build.js:4244
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 591. scripts\build.js:4245
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 592. scripts\build.js:4251
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 593. scripts\build.js:4252
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 594. scripts\build.js:4260
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 595. scripts\build.js:4261
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 596. scripts\build.js:4271
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 597. scripts\build.js:4278
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 598. scripts\build.js:4280
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 599. scripts\build.js:4346
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 600. scripts\build.js:4347
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 601. scripts\build.js:4352
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 602. scripts\build.js:4354
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 603. scripts\build.js:4357
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 604. scripts\build.js:4361
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 605. scripts\keyword-cleanup.js:38
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 606. scripts\keyword-cleanup.js:40
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 607. scripts\keyword-cleanup.js:58
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 608. scripts\keyword-cleanup.js:64
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 609. scripts\keyword-cleanup.js:67
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 610. scripts\keyword-cleanup.js:71
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 611. scripts\keyword-cleanup.js:72
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 612. scripts\keyword-cleanup.js:73
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 613. scripts\log-manager.js:45
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 614. scripts\log-manager.js:61
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 615. scripts\log-manager.js:68
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 616. scripts\log-manager.js:83
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 617. scripts\log-manager.js:91
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 618. scripts\log-manager.js:116
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 619. scripts\log-manager.js:144
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 620. scripts\log-manager.js:158
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 621. scripts\log-manager.js:174
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 622. scripts\log-manager.js:177
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 623. scripts\log-manager.js:185
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 624. scripts\log-manager.js:204
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 625. scripts\log-manager.js:209
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 626. scripts\log-manager.js:228
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 627. scripts\log-manager.js:235
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 628. scripts\log-manager.js:264
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 629. scripts\log-manager.js:265
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 630. scripts\log-manager.js:266
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 631. scripts\log-manager.js:267
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T18:58:12.189Z

#### 632. style.css:170
**Severity:** WARNING  
**Message:** Missing semicolon in CSS property  
**Timestamp:** 2025-07-02T18:58:12.189Z

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

#### scripts\advanced-content-validator.js (30 Problem(e))
- **Zeile 17:** ⚠️ Missing semicolon
- **Zeile 32:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 34:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 50:** ⚠️ Missing semicolon
- **Zeile 128:** ⚠️ Missing semicolon
- **Zeile 178:** ⚠️ Missing semicolon
- **Zeile 211:** ⚠️ Missing semicolon
- **Zeile 220:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 221:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 227:** ⚠️ Missing semicolon
- **Zeile 236:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 276:** ⚠️ Missing semicolon
- **Zeile 326:** ⚠️ Missing semicolon
- **Zeile 334:** ⚠️ Missing semicolon
- **Zeile 369:** ⚠️ Missing semicolon
- **Zeile 397:** ⚠️ Missing semicolon
- **Zeile 405:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 408:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 412:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 414:** ⚠️ Missing semicolon
- **Zeile 416:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 417:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 420:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 502:** ⚠️ Missing semicolon
- **Zeile 509:** ⚠️ Missing semicolon
- **Zeile 514:** ⚠️ Missing semicolon
- **Zeile 607:** ⚠️ Missing semicolon
- **Zeile 616:** ⚠️ Missing semicolon
- **Zeile 639:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 662:** ⚠️ Console.log statement found - consider removing in production

#### scripts\build-checks\check_scripts\advanced-content-validator.js (23 Problem(e))
- **Zeile 17:** ⚠️ Missing semicolon
- **Zeile 32:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 34:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 50:** ⚠️ Missing semicolon
- **Zeile 128:** ⚠️ Missing semicolon
- **Zeile 178:** ⚠️ Missing semicolon
- **Zeile 211:** ⚠️ Missing semicolon
- **Zeile 220:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 221:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 227:** ⚠️ Missing semicolon
- **Zeile 236:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 276:** ⚠️ Missing semicolon
- **Zeile 326:** ⚠️ Missing semicolon
- **Zeile 334:** ⚠️ Missing semicolon
- **Zeile 369:** ⚠️ Missing semicolon
- **Zeile 397:** ⚠️ Missing semicolon
- **Zeile 483:** ⚠️ Missing semicolon
- **Zeile 490:** ⚠️ Missing semicolon
- **Zeile 495:** ⚠️ Missing semicolon
- **Zeile 588:** ⚠️ Missing semicolon
- **Zeile 597:** ⚠️ Missing semicolon
- **Zeile 620:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 643:** ⚠️ Console.log statement found - consider removing in production

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
- **Zeile 15:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 34:** ⚠️ Missing semicolon
- **Zeile 62:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 63:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 66:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 158:** ⚠️ Missing semicolon
- **Zeile 209:** ⚠️ Missing semicolon
- **Zeile 246:** ⚠️ Missing semicolon

#### scripts\build-checks\check_scripts\masterBuildChecker.js (13 Problem(e))
- **Zeile 15:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 75:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 76:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 77:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 78:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 79:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 84:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 87:** ⚠️ Missing semicolon
- **Zeile 116:** ⚠️ Missing semicolon
- **Zeile 240:** ⚠️ Missing semicolon
- **Zeile 373:** ⚠️ Missing semicolon
- **Zeile 421:** ⚠️ Missing semicolon
- **Zeile 470:** ⚠️ Missing semicolon

#### scripts\build.js (373 Problem(e))
- **Zeile 13:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 16:** ⚠️ Missing semicolon
- **Zeile 17:** ⚠️ Missing semicolon
- **Zeile 20:** ⚠️ Missing semicolon
- **Zeile 30:** ⚠️ Missing semicolon
- **Zeile 36:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 88:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 100:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 115:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 118:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 120:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 131:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 133:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 136:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 143:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 145:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 148:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 155:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 157:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 173:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 195:** ⚠️ Missing semicolon
- **Zeile 213:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 221:** ⚠️ Missing semicolon
- **Zeile 237:** ⚠️ Missing semicolon
- **Zeile 252:** ⚠️ Missing semicolon
- **Zeile 269:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 272:** ⚠️ Missing semicolon
- **Zeile 277:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 280:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 282:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 286:** ⚠️ Missing semicolon
- **Zeile 305:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 307:** ⚠️ Missing semicolon
- **Zeile 326:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 338:** ⚠️ Missing semicolon
- **Zeile 347:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 348:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 349:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 354:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 355:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 366:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 367:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 368:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 369:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 370:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 374:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 375:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 376:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 377:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 378:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 382:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 383:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 386:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 393:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 394:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 395:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 416:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 425:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 434:** ⚠️ Missing semicolon
- **Zeile 461:** ⚠️ Missing semicolon
- **Zeile 492:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 515:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 538:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 559:** ⚠️ Missing semicolon
- **Zeile 571:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 686:** 🚨 Typo: "fucntion" should be "function"
- **Zeile 687:** 🚨 Typo: "fucntion" should be "function"
- **Zeile 734:** ⚠️ Missing semicolon
- **Zeile 744:** ⚠️ Missing semicolon
- **Zeile 830:** ⚠️ Missing semicolon
- **Zeile 900:** ⚠️ Missing semicolon
- **Zeile 940:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 1069:** ⚠️ Missing semicolon
- **Zeile 1073:** ⚠️ Missing semicolon
- **Zeile 1080:** ⚠️ Missing semicolon
- **Zeile 1087:** ⚠️ Missing semicolon
- **Zeile 1149:** ⚠️ Missing semicolon
- **Zeile 1174:** ⚠️ Missing semicolon
- **Zeile 1193:** ⚠️ Missing semicolon
- **Zeile 1221:** ⚠️ Missing semicolon
- **Zeile 1300:** ⚠️ Missing semicolon
- **Zeile 1343:** ⚠️ Missing semicolon
- **Zeile 1354:** ⚠️ Missing semicolon
- **Zeile 1416:** ⚠️ Missing semicolon
- **Zeile 1445:** ⚠️ Missing semicolon
- **Zeile 1449:** ⚠️ Missing semicolon
- **Zeile 1509:** ⚠️ Missing semicolon
- **Zeile 1574:** ⚠️ Missing semicolon
- **Zeile 1765:** ⚠️ Missing semicolon
- **Zeile 1803:** ⚠️ Missing semicolon
- **Zeile 1815:** ⚠️ Missing semicolon
- **Zeile 1895:** ⚠️ Missing semicolon
- **Zeile 1991:** ⚠️ Missing semicolon
- **Zeile 1992:** ⚠️ Missing semicolon
- **Zeile 2113:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2114:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2120:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2121:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2122:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2142:** ⚠️ Missing semicolon
- **Zeile 2146:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2156:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2161:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2175:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2181:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2183:** ⚠️ Missing semicolon
- **Zeile 2185:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2186:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2198:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2201:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2213:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2217:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2219:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2222:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2273:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2275:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2280:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2286:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2288:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2300:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2301:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2302:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2305:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2306:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2307:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2308:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2309:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2310:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2313:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2317:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2318:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2319:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2323:** ⚠️ Missing semicolon
- **Zeile 2347:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2349:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2355:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2358:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2378:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2379:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2402:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2406:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2407:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2409:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2410:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2414:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2416:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2419:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2422:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2425:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2426:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2429:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2430:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2437:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2443:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2444:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2445:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2448:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2450:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2452:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2459:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2461:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2467:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2468:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2487:** ⚠️ Missing semicolon
- **Zeile 2495:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2499:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2501:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2504:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2505:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2506:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2507:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2508:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2511:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2513:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2518:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2520:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2525:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2535:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2549:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2550:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2551:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2552:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2553:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2554:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2555:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2559:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2560:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2561:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2562:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2563:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2564:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2565:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2566:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2586:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2603:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2641:** ⚠️ Missing semicolon
- **Zeile 2697:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2750:** ⚠️ Missing semicolon
- **Zeile 2779:** ⚠️ Missing semicolon
- **Zeile 2816:** ⚠️ Missing semicolon
- **Zeile 2828:** ⚠️ Missing semicolon
- **Zeile 2856:** ⚠️ Missing semicolon
- **Zeile 2868:** ⚠️ Missing semicolon
- **Zeile 2894:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2946:** ⚠️ Missing semicolon
- **Zeile 2950:** ⚠️ Missing semicolon
- **Zeile 2963:** ⚠️ Missing semicolon
- **Zeile 2972:** ⚠️ Missing semicolon
- **Zeile 2981:** ⚠️ Missing semicolon
- **Zeile 2990:** ⚠️ Missing semicolon
- **Zeile 3011:** ⚠️ Missing semicolon
- **Zeile 3024:** ⚠️ Missing semicolon
- **Zeile 3037:** ⚠️ Missing semicolon
- **Zeile 3050:** ⚠️ Missing semicolon
- **Zeile 3077:** ⚠️ Missing semicolon
- **Zeile 3086:** ⚠️ Missing semicolon
- **Zeile 3095:** ⚠️ Missing semicolon
- **Zeile 3104:** ⚠️ Missing semicolon
- **Zeile 3113:** ⚠️ Missing semicolon
- **Zeile 3206:** ⚠️ Missing semicolon
- **Zeile 3210:** ⚠️ Missing semicolon
- **Zeile 3220:** ⚠️ Missing semicolon
- **Zeile 3230:** ⚠️ Missing semicolon
- **Zeile 3249:** ⚠️ Missing semicolon
- **Zeile 3274:** ⚠️ Missing semicolon
- **Zeile 3283:** ⚠️ Missing semicolon
- **Zeile 3292:** ⚠️ Missing semicolon
- **Zeile 3301:** ⚠️ Missing semicolon
- **Zeile 3310:** ⚠️ Missing semicolon
- **Zeile 3319:** ⚠️ Missing semicolon
- **Zeile 3342:** ⚠️ Missing semicolon
- **Zeile 3355:** ⚠️ Missing semicolon
- **Zeile 3368:** ⚠️ Missing semicolon
- **Zeile 3377:** ⚠️ Missing semicolon
- **Zeile 3386:** ⚠️ Missing semicolon
- **Zeile 3395:** ⚠️ Missing semicolon
- **Zeile 3425:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3452:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3454:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3456:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3484:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3633:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3634:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3635:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3641:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3642:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3643:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3645:** ⚠️ Missing semicolon
- **Zeile 3655:** ⚠️ Missing semicolon
- **Zeile 3660:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3664:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3668:** ⚠️ Missing semicolon
- **Zeile 3672:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3678:** ⚠️ Missing semicolon
- **Zeile 3679:** ⚠️ Missing semicolon
- **Zeile 3682:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3686:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3689:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3702:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3714:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3717:** ⚠️ Missing semicolon
- **Zeile 3720:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3723:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3727:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3728:** ⚠️ Missing semicolon
- **Zeile 3734:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3736:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3740:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3744:** ⚠️ Missing semicolon
- **Zeile 3752:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3756:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3762:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3767:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3770:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3772:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3776:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3777:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3778:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3780:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3789:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3794:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3795:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3796:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3797:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3811:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3813:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3823:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3826:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3829:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3830:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3837:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3843:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3844:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3845:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3848:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3850:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3852:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3859:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3861:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3866:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3867:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3868:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3869:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3870:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3875:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3876:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3907:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3910:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3911:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3912:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3913:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3914:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3915:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3918:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3919:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3920:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3921:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3922:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3923:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3924:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3926:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3928:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3931:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3932:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3933:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3934:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3936:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3937:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3938:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3939:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3941:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3942:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3943:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3944:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3945:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3946:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3948:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3949:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3950:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3951:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3954:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3955:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3956:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3983:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4019:** ⚠️ Missing semicolon
- **Zeile 4039:** ⚠️ Missing semicolon
- **Zeile 4067:** ⚠️ Missing semicolon
- **Zeile 4109:** ⚠️ Missing semicolon
- **Zeile 4152:** ⚠️ Missing semicolon
- **Zeile 4194:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4199:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4204:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4210:** ⚠️ Missing semicolon
- **Zeile 4213:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4228:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4231:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4235:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4240:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4244:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4245:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4251:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4252:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4260:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4261:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4271:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4278:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4280:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4346:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4347:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4352:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4354:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4357:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4361:** ⚠️ Console.log statement found - consider removing in production

#### scripts\keyword-cleanup.js (8 Problem(e))
- **Zeile 38:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 40:** ⚠️ Missing semicolon
- **Zeile 58:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 64:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 67:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 71:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 72:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 73:** ⚠️ Console.log statement found - consider removing in production

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
[LOG] [90m📋 comprehensiveCheck.js Output: 🔍 Starte umfassenden Build-Prozess Check...[39m
[90m✅ Umfassender Check abgeschlossen. Logfile: C:\apps\website\einfach-passieren-lassen\scripts\build-checks\logfiles\comprehensiveCheck_2025-07-02_18-58-11-889.log[39m
[90m📊 Analysiert: 9 Blogs, Durchschnitt: 2337 Wörter[39m
[90m⚠️ 12 kritische Issues gefunden[39m
[LOG] [35m[39m
[35m▶️ Führe Check-Skript aus: logCleanup.js[39m
[LOG] [32m✅ logCleanup.js erfolgreich ausgeführt[39m
[LOG] [35m[39m
[35m▶️ Führe Check-Skript aus: masterBuildChecker.js[39m
[LOG] [32m✅ masterBuildChecker.js erfolgreich ausgeführt[39m
[LOG] [90m📋 masterBuildChecker.js Output: 🔍 Starte MASTER BUILD CHECK - Alle Prüfungen in einer Logdatei...[39m
[90m✅ MASTER BUILD CHECK abgeschlossen![39m
[90m📊 Eine Logdatei: C:\apps\website\einfach-passieren-lassen\scripts\build-checks\logfiles\MASTER_BUILD_CHECK_2025-07-02_18-58-12-060.log[39m
[90m📈 Analysiert: 9 Blogs, ⌀ 2337 Wörter[39m
[90m⚠️ 12 Errors, 24 Warnings[39m
[90m✅ Build-Prozess: NIEMALS ABGEBROCHEN (wie gefordert)[39m
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
[LOG] [34m📋 Terminal-Ausgabe wird gespeichert in: docs\015_build_logs\BUILD_LOG_2025-07-02_185811.md[39m
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
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:128 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:178 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:211 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:220 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:221 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:227 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:236 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:276 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:326 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:334 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:369 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:397 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:405 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:408 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:412 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:414 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:416 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:417 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:420 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:502 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:509 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:514 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:607 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:616 - Missing semicolon
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:639 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\advanced-content-validator.js:662 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:17 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:32 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:34 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:50 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:128 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:178 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:211 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:220 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:221 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:227 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:236 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:276 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:326 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:334 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:369 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:397 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:483 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:490 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:495 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:588 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:597 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:620 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:643 - Console.log statement found - consider removing in production
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
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:15 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:34 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:62 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:63 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:66 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:158 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:209 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:246 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:15 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:75 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:76 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:77 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:78 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:79 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:84 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:87 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:116 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:240 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:373 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:421 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:470 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:13 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:16 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:17 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:20 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:30 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:36 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:88 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:100 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:115 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:118 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:120 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:131 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:133 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:136 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:143 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:145 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:148 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:155 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:157 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:173 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:195 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:213 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:221 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:237 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:252 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:269 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:272 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:277 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:280 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:282 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:286 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:305 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:307 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:326 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:338 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:347 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:348 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:349 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:354 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:355 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:366 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:367 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:368 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:369 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:370 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:374 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:375 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:376 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:377 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:378 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:382 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:383 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:386 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:393 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:394 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:395 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:416 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:425 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:434 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:461 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:492 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:515 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:538 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:559 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:571 - Console.log statement found - consider removing in production
[PROBLEM] [ERROR] scripts\build.js:686 - Typo: "fucntion" should be "function"
[PROBLEM] [ERROR] scripts\build.js:687 - Typo: "fucntion" should be "function"
[PROBLEM] [WARNING] scripts\build.js:734 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:744 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:830 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:900 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:940 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:1069 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1073 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1080 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1087 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1149 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1174 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1193 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1221 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1300 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1343 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1354 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1416 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1445 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1449 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1509 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1574 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1765 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1803 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1815 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1895 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1991 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1992 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2113 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2114 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2120 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2121 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2122 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2142 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2146 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2156 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2161 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2175 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2181 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2183 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2185 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2186 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2198 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2201 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2213 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2217 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2219 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2222 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2273 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2275 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2280 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2286 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2288 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2300 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2301 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2302 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2305 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2306 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2307 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2308 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2309 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2310 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2313 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2317 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2318 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2319 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2323 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2347 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2349 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2355 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2358 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2378 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2379 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2402 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2406 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2407 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2409 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2410 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2414 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2416 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2419 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2422 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2425 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2426 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2429 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2430 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2437 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2443 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2444 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2445 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2448 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2450 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2452 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2459 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2461 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2467 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2468 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2487 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2495 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2499 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2501 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2504 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2505 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2506 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2507 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2508 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2511 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2513 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2518 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2520 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2525 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2535 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2549 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2550 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2551 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2552 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2553 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2554 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2555 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2559 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2560 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2561 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2562 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2563 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2564 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2565 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2566 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2586 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2603 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2641 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2697 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2750 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2779 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2816 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2828 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2856 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2868 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2894 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2946 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2950 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2963 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2972 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2981 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2990 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3011 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3024 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3037 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3050 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3077 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3086 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3095 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3104 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3113 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3206 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3210 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3220 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3230 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3249 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3274 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3283 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3292 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3301 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3310 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3319 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3342 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3355 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3368 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3377 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3386 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3395 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3425 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3452 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3454 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3456 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3484 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3633 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3634 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3635 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3641 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3642 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3643 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3645 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3655 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3660 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3664 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3668 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3672 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3678 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3679 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3682 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3686 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3689 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3702 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3714 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3717 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3720 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3723 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3727 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3728 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3734 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3736 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3740 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3744 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3752 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3756 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3762 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3767 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3770 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3772 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3776 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3777 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3778 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3780 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3789 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3794 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3795 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3796 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3797 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3811 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3813 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3823 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3826 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3829 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3830 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3837 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3843 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3844 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3845 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3848 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3850 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3852 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3859 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3861 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3866 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3867 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3868 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3869 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3870 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3875 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3876 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3907 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3910 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3911 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3912 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3913 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3914 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3915 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3918 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3919 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3920 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3921 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3922 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3923 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3924 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3926 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3928 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3931 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3932 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3933 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3934 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3936 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3937 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3938 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3939 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3941 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3942 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3943 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3944 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3945 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3946 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3948 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3949 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3950 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3951 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3954 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3955 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3956 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3983 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4019 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:4039 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:4067 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:4109 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:4152 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:4194 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4199 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4204 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4210 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:4213 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4228 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4231 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4235 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4240 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4244 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4245 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4251 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4252 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4260 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4261 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4271 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4278 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4280 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4346 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4347 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4352 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4354 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4357 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4361 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\keyword-cleanup.js:38 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\keyword-cleanup.js:40 - Missing semicolon
[PROBLEM] [WARNING] scripts\keyword-cleanup.js:58 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\keyword-cleanup.js:64 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\keyword-cleanup.js:67 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\keyword-cleanup.js:71 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\keyword-cleanup.js:72 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\keyword-cleanup.js:73 - Console.log statement found - consider removing in production
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
[PROBLEM] [WARNING] style.css:170 - Missing semicolon in CSS property
[INFO] ✅ Problems-Scan abgeschlossen. 636 Problem(e) gefunden.
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
[LOG] [36m   📊 Checklist Score: 9%[39m
[LOG] [31m      • BINDUNG_KERN: 17%[39m
[LOG] [31m      • VERSCHMELZUNG: 8%[39m
[LOG] [31m      • HINGABE: 2%[39m
[LOG] [36m   🎯 Intentionen-Analyse...[39m
[LOG] [31m   ❌ Intention-Score: 29% (Min: 60%)[39m
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
[LOG] [90m   Detected theme: BESITZ[39m
[LOG] [32m   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE[39m
[LOG] [36m   📊 Checklist Score: 1%[39m
[LOG] [31m      • BINDUNG_KERN: 0%[39m
[LOG] [31m      • VERSCHMELZUNG: 0%[39m
[LOG] [31m      • HINGABE: 2%[39m
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
[LOG] [36m   📊 Checklist Score: 4%[39m
[LOG] [31m      • BINDUNG_KERN: 8%[39m
[LOG] [31m      • VERSCHMELZUNG: 0%[39m
[LOG] [31m      • HINGABE: 2%[39m
[LOG] [36m   🎯 Intentionen-Analyse...[39m
[LOG] [31m   ❌ Intention-Score: 18% (Min: 60%)[39m
[LOG] [36m   📊 Code-Quality Check...[39m
[LOG] [32m   ✅ Code Quality OK[39m
[LOG] [36m   🔨 HTML generieren...[39m
[LOG] [32m   ✅ HTML erstellt: kontrolle-abgeben.html[39m
[LOG] [33m   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke[39m
[LOG] [90m[39m
[90m📋 Verarbeite: sehnsucht-nach-hingabe.md[39m
[LOG] [35m   🧠 Running advanced checklist validation for sehnsucht-nach-hingabe.md...[39m
[LOG] [36m🎯 Analyzing: sehnsucht-nach-hingabe.md[39m
[LOG] [90m   Detected theme: BINDUNG_KERN[39m
[LOG] [32m   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE[39m
[LOG] [36m   📊 Checklist Score: 11%[39m
[LOG] [31m      • BINDUNG_KERN: 0%[39m
[LOG] [31m      • VERSCHMELZUNG: 25%[39m
[LOG] [31m      • HINGABE: 10%[39m
[LOG] [36m   🎯 Intentionen-Analyse...[39m
[LOG] [31m   ❌ Intention-Score: 18% (Min: 60%)[39m
[LOG] [36m   📊 Code-Quality Check...[39m
[LOG] [32m   ✅ Code Quality OK[39m
[LOG] [36m   🔨 HTML generieren...[39m
[LOG] [32m   ✅ HTML erstellt: sehnsucht-nach-hingabe.html[39m
[LOG] [33m   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke[39m
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
[34m📄 Verarbeitete Dateien: 9/9[39m
[LOG] [31m[39m
[31m🎯 INTENTION-OPTIMIERUNG ERFORDERLICH: 7 Dateien[39m
[31m[39m
[LOG] [33m🤖 AUTOMATISCH GENERIERTER KI-PROMPT:[39m
[LOG] [90m────────────────────────────────────────────────────────────[39m
[LOG] 
🎯 INCREMENTAL BUILD-OPTIMIERUNG #1

FILE: der-sichere-hafen.md
PROBLEM: SicherheitsVermittlung schwächste Intention (25%)
PRIORITY: #1 von 0 Problemen

═══════════════════════════════════════

EINE SPEZIFISCHE AUFGABE:
Verstärke "fühle ich mit" Trigger


INTEGRATION-STELLE GEFUNDEN:
ZEILE 7: ""Wo chan ich endlich akomme?", fragst du dich manchmal. Die Antwort ist: Bei mir. In Zuchwil. In meinen Armen. In unserem Zuhause. Hier ist dein sicherer Hafen. Hier gehörst du hin. Spürst du bereits diese Verbindung? Verstehe ich dich richtig, wenn ich sage, dass du genau das gesucht hast?"

AKTUELLER CONTEXT:
  Du weißt bereits, was ich meine, wenn ich vom sicheren Hafen spreche. Es ist nicht nur ein Ort - es ist ein Gefühl. Das Gefühl von Ankommen. Von Zuhause. Von endlich sicher sein. Von nicht mehr allein sein müssen. Kennst du das auch, diese tiefe Sehnsucht? Suchst du auch diesen einen Ort, wo du endlich zur Ruhe kommen kannst?
> "Wo chan ich endlich akomme?", fragst du dich manchmal. Die Antwort ist: Bei mir. In Zuchwil. In meinen Armen. In unserem Zuhause. Hier ist dein sicherer Hafen. Hier gehörst du hin. Spürst du bereits diese Verbindung? Verstehe ich dich richtig, wenn ich sage, dass du genau das gesucht hast? ← HIER VERSTÄRKEN
  Du weißt bereits, dass du müde bist vom Kämpfen. Müde vom stark sein müssen. Müde vom immer funktionieren müssen. Du sehnst dich nach einem Ort, an dem du die Rüstung ablegen kannst. An dem du einfach sein kannst. An dem du beschützt bist. Verstehst du, was ich meine? Du brauchst eine starke Schulter, an die du dich lehnen kannst, wenn alles zu schwer wird.

OPTIMIERUNG:
Entwickle eine authentische, situationsgerechte Integration von "fühle ich mit" 

INTEGRATION-PRINZIPIEN:
- Organisch in bestehenden emotionalen Kontext einweben
- Natürliche Sprache ohne künstliche Dialekt-Versuche
- Persönliche Ansprache ohne generische Template-Phrasen
- Trigger als natürlichen Teil des Gedankenflusses integrieren


WARUM DIESER TRIGGER:
- "fühle ich mit" = Core-Bedürfnis deiner Zielgruppe
- Verstärkt sicherheitsvermittlung Resonanz
- Zieht bindungssuchende Frauen magnetisch an

FEHLENDE TRIGGER (noch 6 verfügbar):
- "fühle ich mit"
- "bin ich da"
- "beschütze ich"

ERWARTETER SCORE-ANSTIEG:
SicherheitsVermittlung: 25% → 38% (+13%)

AKTUELLER GESAMT-SCORE: 29%
ZIEL-SCORE: 60%+ (noch 31% zu verbessern)

NACH DEM FIX:
1. Speichere Datei
2. Führe `pnpm build` aus  
3. System zeigt nächstes Problem

NÄCHSTE OPTIMIERUNGEN (Preview):
#2: BeschützerPositionierung (25% → 2/8 triggers)
#3: HandlungsAufforderung (25% → 2/8 triggers)

FOKUS: NUR dieser eine Trigger - keine Überforderung!

[LOG] [90m────────────────────────────────────────────────────────────[39m
[LOG] [90m[39m
[90m📋 Weitere 6 Dateien benötigen Optimierung:[39m
[LOG] [90m   2. emotionale-leere.md (Score: 16%)[39m
[LOG] [90m   3. erschoepft-vom-stark-sein.md (Score: 22%)[39m
[LOG] [90m   4. ich-will-einfach-gehalten-werden.md (Score: 49%)[39m
[LOG] [90m   5. kontrolle-abgeben.md (Score: 18%)[39m
[LOG] [90m   6. sehnsucht-nach-hingabe.md (Score: 18%)[39m
[LOG] [90m   7. zu-viel-liebe-zu-wenig-liebe.md (Score: 14%)[39m
[LOG] [36m[39m
[36m════════════════════════════════════════════════════════════════════════════════[39m
[LOG] [35m[39m
[35m🧠 ADVANCED CHECKLIST VALIDATION REPORT[39m
[LOG] ================================================================================
[LOG] [36m📊 Overall Checklist Performance: 9%[39m
[LOG] [32m✅ Excellent (80%+): 0 files[39m
[LOG] [33m⚠️  Good (60-79%): 0 files[39m
[LOG] [31m❌ Needs Work (<60%): 9 files[39m
[LOG] [31m[39m
[31m🎯 FILES REQUIRING PSYCHOLOGICAL DEPTH ENHANCEMENT:[39m
[LOG] [31m   • bindungssehnsucht-normal.md: 1%[39m
[LOG] [90m     → Improve BINDUNG_KERN theme (0%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis[39m
[LOG] [90m     → Improve VERSCHMELZUNG theme (0%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"[39m
[LOG] [31m   • das-erste-mal.md: 8%[39m
[LOG] [90m     → Improve BINDUNG_KERN theme (8%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis[39m
[LOG] [90m     → Improve VERSCHMELZUNG theme (8%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"[39m
[LOG] [31m   • der-sichere-hafen.md: 9%[39m
[LOG] [90m     → Improve BINDUNG_KERN theme (17%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis[39m
[LOG] [90m     → Improve VERSCHMELZUNG theme (8%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"[39m
[LOG] [31m   • emotionale-leere.md: 18%[39m
[LOG] [90m     → Improve BINDUNG_KERN theme (17%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis[39m
[LOG] [90m     → Improve VERSCHMELZUNG theme (25%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"[39m
[LOG] [31m   • erschoepft-vom-stark-sein.md: 1%[39m
[LOG] [90m     → Improve BINDUNG_KERN theme (0%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis[39m
[LOG] [90m     → Improve VERSCHMELZUNG theme (0%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"[39m
[LOG] [31m   • ich-will-einfach-gehalten-werden.md: 18%[39m
[LOG] [90m     → Improve BINDUNG_KERN theme (17%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis[39m
[LOG] [90m     → Improve VERSCHMELZUNG theme (17%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"[39m
[LOG] [31m   • kontrolle-abgeben.md: 4%[39m
[LOG] [90m     → Improve BINDUNG_KERN theme (8%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis[39m
[LOG] [90m     → Improve VERSCHMELZUNG theme (0%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"[39m
[LOG] [31m   • sehnsucht-nach-hingabe.md: 11%[39m
[LOG] [90m     → Improve BINDUNG_KERN theme (0%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis[39m
[LOG] [90m     → Improve VERSCHMELZUNG theme (25%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"[39m
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
[LOG] [90m   sehnsucht-nach-hingabe.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)[39m
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
[LOG] [33m📋 Content-Optimization-Alert gespeichert: docs\015_build_logs\CONTENT_OPTIMIZATION_ALERT_2025-07-02.json[39m
[LOG] [36m[39m
[36m📋 VOLLSTÄNDIGER AUTOMATION-PLAN:[39m
[LOG] [36m[39m
[36m📊 VOLLSTÄNDIGE PROJEKT-ÜBERSICHT[39m
[36m════════════════════════════════════════════════════════════════════════════════[39m
[36m✅ Verarbeitete Dateien: 9/9[39m
[36m🎯 Optimierung erforderlich: 7 Dateien (78% verbleibend)[39m
[36m🚀 Fortschritt: 22% abgeschlossen[39m
[36m[39m
[36mPRIORITÄTEN-RANKING:[39m
[36m   1. der-sichere-hafen.md (Score: 29% - Gap: 31%)[39m
[36m   2. emotionale-leere.md (Score: 16% - Gap: 44%)[39m
[36m   3. erschoepft-vom-stark-sein.md (Score: 22% - Gap: 38%)[39m
[36m   4. ich-will-einfach-gehalten-werden.md (Score: 49% - Gap: 11%)[39m
[36m   5. kontrolle-abgeben.md (Score: 18% - Gap: 42%)[39m
[36m[39m
[36mERWARTETE ARBEITSZEIT: 14 Minuten für vollständige Optimierung[39m
[36m════════════════════════════════════════════════════════════════════════════════[39m
[LOG] [33m[39m
[33m🎯 VOLLSTÄNDIGER HANDLUNGSPLAN (AUTOMATION)[39m
[33m════════════════════════════════════════════════════════════════════════════════[39m
[33mPHASE 1 - SOFORTIGE AKTION:[39m
[33m   1️⃣ Optimiere: der-sichere-hafen.md (aktuell 29%)[39m
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
[33mENDERGEBNIS: Alle 7 Dateien automatisch optimiert![39m
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
[35mPROBLEM: SicherheitsVermittlung schwächste Intention (25%)[39m
[35mPRIORITY: #1 von 0 Problemen[39m
[35m[39m
[35m═══════════════════════════════════════[39m
[35m[39m
[35mEINE SPEZIFISCHE AUFGABE:[39m
[35mVerstärke "fühle ich mit" Trigger[39m
[35m[39m
[35m[39m
[35mINTEGRATION-STELLE GEFUNDEN:[39m
[35mZEILE 7: ""Wo chan ich endlich akomme?", fragst du dich manchmal. Die Antwort ist: Bei mir. In Zuchwil. In meinen Armen. In unserem Zuhause. Hier ist dein sicherer Hafen. Hier gehörst du hin. Spürst du bereits diese Verbindung? Verstehe ich dich richtig, wenn ich sage, dass du genau das gesucht hast?"[39m
[35m[39m
[35mAKTUELLER CONTEXT:[39m
[35m  Du weißt bereits, was ich meine, wenn ich vom sicheren Hafen spreche. Es ist nicht nur ein Ort - es ist ein Gefühl. Das Gefühl von Ankommen. Von Zuhause. Von endlich sicher sein. Von nicht mehr allein sein müssen. Kennst du das auch, diese tiefe Sehnsucht? Suchst du auch diesen einen Ort, wo du endlich zur Ruhe kommen kannst?[39m
[35m> "Wo chan ich endlich akomme?", fragst du dich manchmal. Die Antwort ist: Bei mir. In Zuchwil. In meinen Armen. In unserem Zuhause. Hier ist dein sicherer Hafen. Hier gehörst du hin. Spürst du bereits diese Verbindung? Verstehe ich dich richtig, wenn ich sage, dass du genau das gesucht hast? ← HIER VERSTÄRKEN[39m
[35m  Du weißt bereits, dass du müde bist vom Kämpfen. Müde vom stark sein müssen. Müde vom immer funktionieren müssen. Du sehnst dich nach einem Ort, an dem du die Rüstung ablegen kannst. An dem du einfach sein kannst. An dem du beschützt bist. Verstehst du, was ich meine? Du brauchst eine starke Schulter, an die du dich lehnen kannst, wenn alles zu schwer wird.[39m
[35m[39m
[35mOPTIMIERUNG:[39m
[35mEntwickle eine authentische, situationsgerechte Integration von "fühle ich mit" [39m
[35m[39m
[35mINTEGRATION-PRINZIPIEN:[39m
[35m- Organisch in bestehenden emotionalen Kontext einweben[39m
[35m- Natürliche Sprache ohne künstliche Dialekt-Versuche[39m
[35m- Persönliche Ansprache ohne generische Template-Phrasen[39m
[35m- Trigger als natürlichen Teil des Gedankenflusses integrieren[39m
[35m[39m
[35m[39m
[35mWARUM DIESER TRIGGER:[39m
[35m- "fühle ich mit" = Core-Bedürfnis deiner Zielgruppe[39m
[35m- Verstärkt sicherheitsvermittlung Resonanz[39m
[35m- Zieht bindungssuchende Frauen magnetisch an[39m
[35m[39m
[35mFEHLENDE TRIGGER (noch 6 verfügbar):[39m
[35m- "fühle ich mit"[39m
[35m- "bin ich da"[39m
[35m- "beschütze ich"[39m
[35m[39m
[35mERWARTETER SCORE-ANSTIEG:[39m
[35mSicherheitsVermittlung: 25% → 38% (+13%)[39m
[35m[39m
[35mAKTUELLER GESAMT-SCORE: 29%[39m
[35mZIEL-SCORE: 60%+ (noch 31% zu verbessern)[39m
[35m[39m
[35mNACH DEM FIX:[39m
[35m1. Speichere Datei[39m
[35m2. Führe `pnpm build` aus  [39m
[35m3. System zeigt nächstes Problem[39m
[35m[39m
[35mNÄCHSTE OPTIMIERUNGEN (Preview):[39m
[35m#2: BeschützerPositionierung (25% → 2/8 triggers)[39m
[35m#3: HandlungsAufforderung (25% → 2/8 triggers)[39m
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
[35m✅ Alle 7 Dateien erreichen 60%+ Score[39m
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
[LOG] [33m   Timestamp: 2025-07-02T18:58:12.339Z[39m
[LOG] [33m   Files affected: 7/9[39m
[LOG] [33m   First problem: der-sichere-hafen.md (29%)[39m
[LOG] [33m   Recommended action: CONTENT_OPTIMIZATION_RECOMMENDED[39m
[LOG] [33m[39m
[33m📋 DETAILED QUALITY REPORT:[39m
[LOG] [33m   1. INTENTION_OPTIMIZATION_REQUIRED: der-sichere-hafen.md (Score: 29%, Issues: 0)[39m
[LOG] [33m   2. PENDING_OPTIMIZATION: emotionale-leere.md (Score: 16%, Issues: 0)[39m
[LOG] [33m   3. PENDING_OPTIMIZATION: erschoepft-vom-stark-sein.md (Score: 22%, Issues: 0)[39m
[LOG] [33m   4. PENDING_OPTIMIZATION: ich-will-einfach-gehalten-werden.md (Score: 49%, Issues: 0)[39m
[LOG] [33m   5. PENDING_OPTIMIZATION: kontrolle-abgeben.md (Score: 18%, Issues: 0)[39m
[LOG] [33m   6. PENDING_OPTIMIZATION: sehnsucht-nach-hingabe.md (Score: 18%, Issues: 0)[39m
[LOG] [33m   7. PENDING_OPTIMIZATION: zu-viel-liebe-zu-wenig-liebe.md (Score: 14%, Issues: 0)[39m
[LOG] [36m[39m
[36m🎯 KI-PROMPT BEREIT FÜR OPTIMIERUNG:[39m
[LOG] [33m────────────────────────────────────────────────────────────[39m
[LOG] 
🎯 INCREMENTAL BUILD-OPTIMIERUNG #1

FILE: der-sichere-hafen.md
PROBLEM: SicherheitsVermittlung schwächste Intention (25%)
PRIORITY: #1 von 0 Problemen

═══════════════════════════════════════

EINE SPEZIFISCHE AUFGABE:
Verstärke "fühle ich mit" Trigger


INTEGRATION-STELLE GEFUNDEN:
ZEILE 7: ""Wo chan ich endlich akomme?", fragst du dich manchmal. Die Antwort ist: Bei mir. In Zuchwil. In meinen Armen. In unserem Zuhause. Hier ist dein sicherer Hafen. Hier gehörst du hin. Spürst du bereits diese Verbindung? Verstehe ich dich richtig, wenn ich sage, dass du genau das gesucht hast?"

AKTUELLER CONTEXT:
  Du weißt bereits, was ich meine, wenn ich vom sicheren Hafen spreche. Es ist nicht nur ein Ort - es ist ein Gefühl. Das Gefühl von Ankommen. Von Zuhause. Von endlich sicher sein. Von nicht mehr allein sein müssen. Kennst du das auch, diese tiefe Sehnsucht? Suchst du auch diesen einen Ort, wo du endlich zur Ruhe kommen kannst?
> "Wo chan ich endlich akomme?", fragst du dich manchmal. Die Antwort ist: Bei mir. In Zuchwil. In meinen Armen. In unserem Zuhause. Hier ist dein sicherer Hafen. Hier gehörst du hin. Spürst du bereits diese Verbindung? Verstehe ich dich richtig, wenn ich sage, dass du genau das gesucht hast? ← HIER VERSTÄRKEN
  Du weißt bereits, dass du müde bist vom Kämpfen. Müde vom stark sein müssen. Müde vom immer funktionieren müssen. Du sehnst dich nach einem Ort, an dem du die Rüstung ablegen kannst. An dem du einfach sein kannst. An dem du beschützt bist. Verstehst du, was ich meine? Du brauchst eine starke Schulter, an die du dich lehnen kannst, wenn alles zu schwer wird.

OPTIMIERUNG:
Entwickle eine authentische, situationsgerechte Integration von "fühle ich mit" 

INTEGRATION-PRINZIPIEN:
- Organisch in bestehenden emotionalen Kontext einweben
- Natürliche Sprache ohne künstliche Dialekt-Versuche
- Persönliche Ansprache ohne generische Template-Phrasen
- Trigger als natürlichen Teil des Gedankenflusses integrieren


WARUM DIESER TRIGGER:
- "fühle ich mit" = Core-Bedürfnis deiner Zielgruppe
- Verstärkt sicherheitsvermittlung Resonanz
- Zieht bindungssuchende Frauen magnetisch an

FEHLENDE TRIGGER (noch 6 verfügbar):
- "fühle ich mit"
- "bin ich da"
- "beschütze ich"

ERWARTETER SCORE-ANSTIEG:
SicherheitsVermittlung: 25% → 38% (+13%)

AKTUELLER GESAMT-SCORE: 29%
ZIEL-SCORE: 60%+ (noch 31% zu verbessern)

NACH DEM FIX:
1. Speichere Datei
2. Führe `pnpm build` aus  
3. System zeigt nächstes Problem

NÄCHSTE OPTIMIERUNGEN (Preview):
#2: BeschützerPositionierung (25% → 2/8 triggers)
#3: HandlungsAufforderung (25% → 2/8 triggers)

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
[LOG] [32m   Verarbeitete Dateien: 9/9[39m
[LOG] [33m   Content-Optimierungspotential: 7 Dateien[39m
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
[LOG] [36m   📄 Gefunden: 13 HTML-Dateien[39m
[LOG] [37m   📄 index.html: 11 interne Links[39m
[LOG] [37m   📄 ueber-mich.html: 11 interne Links[39m
[LOG] [37m   📄 kontakt.html: 7 interne Links[39m
[LOG] [37m   📄 blog/index.html: 23 interne Links[39m
[LOG] [37m   📄 blog/bindungssehnsucht-normal.html: 5 interne Links[39m
[LOG] [37m   📄 blog/das-erste-mal.html: 5 interne Links[39m
[LOG] [37m   📄 blog/der-sichere-hafen.html: 5 interne Links[39m
[LOG] [37m   📄 blog/emotionale-leere.html: 5 interne Links[39m
[LOG] [37m   📄 blog/erschoepft-vom-stark-sein.html: 5 interne Links[39m
[LOG] [37m   📄 blog/ich-will-einfach-gehalten-werden.html: 5 interne Links[39m
[LOG] [37m   📄 blog/kontrolle-abgeben.html: 5 interne Links[39m
[LOG] [37m   📄 blog/sehnsucht-nach-hingabe.html: 5 interne Links[39m
[LOG] [37m   📄 blog/zu-viel-liebe-zu-wenig-liebe.html: 5 interne Links[39m
[LOG] [36m[39m
[36m   🔍 Validiere 22 eindeutige Links...[39m
[LOG] [34m   🔍 Spezielle Blog-Verlinkungsanalyse...[39m
[LOG] [34m   🔍 README-Verlinkungsanalyse...[39m
[LOG] [36m[39m
[36m   📊 Verlinkungsanalyse abgeschlossen:[39m
[LOG] [33m   ⚠️ 11 Verlinkungsprobleme gefunden:[39m
[LOG] [31m   🚨 KRITISCHE Probleme (11):[39m
[LOG] [31m      1. Defekter Link: ../index.html (Ziel nicht gefunden)[39m
[LOG] [37m         → blog/index.html: "Ein offener Brief" (Zeile ~1)[39m
[LOG] [37m         → blog/index.html: "Start" (Zeile ~2)[39m
[LOG] [37m         → blog/index.html: "Startseite" (Zeile ~23)[39m
[LOG] [37m         → blog/bindungssehnsucht-normal.html: "Ein offener Brief" (Zeile ~1)[39m
[LOG] [37m         → blog/bindungssehnsucht-normal.html: "Start" (Zeile ~2)[39m
[LOG] [37m         → blog/bindungssehnsucht-normal.html: "Startseite" (Zeile ~5)[39m
[LOG] [37m         → blog/das-erste-mal.html: "Ein offener Brief" (Zeile ~1)[39m
[LOG] [37m         → blog/das-erste-mal.html: "Start" (Zeile ~2)[39m
[LOG] [37m         → blog/das-erste-mal.html: "Startseite" (Zeile ~5)[39m
[LOG] [37m         → blog/der-sichere-hafen.html: "Ein offener Brief" (Zeile ~1)[39m
[LOG] [37m         → blog/der-sichere-hafen.html: "Start" (Zeile ~2)[39m
[LOG] [37m         → blog/der-sichere-hafen.html: "Startseite" (Zeile ~5)[39m
[LOG] [37m         → blog/emotionale-leere.html: "Ein offener Brief" (Zeile ~1)[39m
[LOG] [37m         → blog/emotionale-leere.html: "Start" (Zeile ~2)[39m
[LOG] [37m         → blog/emotionale-leere.html: "Startseite" (Zeile ~5)[39m
[LOG] [37m         → blog/erschoepft-vom-stark-sein.html: "Ein offener Brief" (Zeile ~1)[39m
[LOG] [37m         → blog/erschoepft-vom-stark-sein.html: "Start" (Zeile ~2)[39m
[LOG] [37m         → blog/erschoepft-vom-stark-sein.html: "Startseite" (Zeile ~5)[39m
[LOG] [37m         → blog/ich-will-einfach-gehalten-werden.html: "Ein offener Brief" (Zeile ~1)[39m
[LOG] [37m         → blog/ich-will-einfach-gehalten-werden.html: "Start" (Zeile ~2)[39m
[LOG] [37m         → blog/ich-will-einfach-gehalten-werden.html: "Startseite" (Zeile ~5)[39m
[LOG] [37m         → blog/kontrolle-abgeben.html: "Ein offener Brief" (Zeile ~1)[39m
[LOG] [37m         → blog/kontrolle-abgeben.html: "Start" (Zeile ~2)[39m
[LOG] [37m         → blog/kontrolle-abgeben.html: "Startseite" (Zeile ~5)[39m
[LOG] [37m         → blog/sehnsucht-nach-hingabe.html: "Ein offener Brief" (Zeile ~1)[39m
[LOG] [37m         → blog/sehnsucht-nach-hingabe.html: "Start" (Zeile ~2)[39m
[LOG] [37m         → blog/sehnsucht-nach-hingabe.html: "Startseite" (Zeile ~5)[39m
[LOG] [37m         → blog/zu-viel-liebe-zu-wenig-liebe.html: "Ein offener Brief" (Zeile ~1)[39m
[LOG] [37m         → blog/zu-viel-liebe-zu-wenig-liebe.html: "Start" (Zeile ~2)[39m
[LOG] [37m         → blog/zu-viel-liebe-zu-wenig-liebe.html: "Startseite" (Zeile ~5)[39m
[LOG] [31m      2. Defekter Link: ../ueber-mich.html (Ziel nicht gefunden)[39m
[LOG] [37m         → blog/index.html: "Über Mich" (Zeile ~3)[39m
[LOG] [37m         → blog/bindungssehnsucht-normal.html: "Über Mich" (Zeile ~3)[39m
[LOG] [37m         → blog/das-erste-mal.html: "Über Mich" (Zeile ~3)[39m
[LOG] [37m         → blog/der-sichere-hafen.html: "Über Mich" (Zeile ~3)[39m
[LOG] [37m         → blog/emotionale-leere.html: "Über Mich" (Zeile ~3)[39m
[LOG] [37m         → blog/erschoepft-vom-stark-sein.html: "Über Mich" (Zeile ~3)[39m
[LOG] [37m         → blog/ich-will-einfach-gehalten-werden.html: "Über Mich" (Zeile ~3)[39m
[LOG] [37m         → blog/kontrolle-abgeben.html: "Über Mich" (Zeile ~3)[39m
[LOG] [37m         → blog/sehnsucht-nach-hingabe.html: "Über Mich" (Zeile ~3)[39m
[LOG] [37m         → blog/zu-viel-liebe-zu-wenig-liebe.html: "Über Mich" (Zeile ~3)[39m
[LOG] [31m      3. Defekter Link: zu-viel-liebe-zu-wenig-liebe.html (Ziel nicht gefunden)[39m
[LOG] [37m         → blog/index.html: "Du weißt bereits: 'Bin ich z'viel?' – Du bist genau richtig bei mir" (Zeile ~5)[39m
[LOG] [37m         → blog/index.html: "Weiterlesen" (Zeile ~6)[39m
[LOG] [31m      4. Defekter Link: das-erste-mal.html (Ziel nicht gefunden)[39m
[LOG] [37m         → blog/index.html: "Du weißt bereits: 'Das erste Mal mit ihm' – Simon wird dein Erstes" (Zeile ~7)[39m
[LOG] [37m         → blog/index.html: "Weiterlesen" (Zeile ~8)[39m
[LOG] [31m      5. Defekter Link: der-sichere-hafen.html (Ziel nicht gefunden)[39m
[LOG] [37m         → blog/index.html: "Du weißt bereits: 'Der sichere Hafen' – Simon ist dein Zuhause" (Zeile ~9)[39m
[LOG] [37m         → blog/index.html: "Weiterlesen" (Zeile ~10)[39m
[LOG] [31m      6. Defekter Link: emotionale-leere.html (Ziel nicht gefunden)[39m
[LOG] [37m         → blog/index.html: "'Fühl mi wie holl' – Simon füllt deine emotionale Leere" (Zeile ~11)[39m
[LOG] [37m         → blog/index.html: "Weiterlesen" (Zeile ~12)[39m
[LOG] [31m      7. Defekter Link: ich-will-einfach-gehalten-werden.html (Ziel nicht gefunden)[39m
[LOG] [37m         → blog/index.html: "Du weißt bereits: 'Ich will einfach gehalten werden' – Ich halte dich" (Zeile ~13)[39m
[LOG] [37m         → blog/index.html: "Weiterlesen" (Zeile ~14)[39m
[LOG] [31m      8. Defekter Link: bindungssehnsucht-normal.html (Ziel nicht gefunden)[39m
[LOG] [37m         → blog/index.html: "Wenn Bindungssehnsucht normal ist – Du darfst so fühlen" (Zeile ~15)[39m
[LOG] [37m         → blog/index.html: "Weiterlesen" (Zeile ~16)[39m
[LOG] [31m      9. Defekter Link: erschoepft-vom-stark-sein.html (Ziel nicht gefunden)[39m
[LOG] [37m         → blog/index.html: "Du weißt bereits: 'Bin so müed' – Endlich schwach sein dürfen" (Zeile ~17)[39m
[LOG] [37m         → blog/index.html: "Weiterlesen" (Zeile ~18)[39m
[LOG] [31m      10. Defekter Link: kontrolle-abgeben.html (Ziel nicht gefunden)[39m
[LOG] [37m         → blog/index.html: "Du weißt bereits: 'Will dass einer übernimmt' – Kontrolle abgeben" (Zeile ~19)[39m
[LOG] [37m         → blog/index.html: "Weiterlesen" (Zeile ~20)[39m
[LOG] [31m      11. Defekter Link: sehnsucht-nach-hingabe.html (Ziel nicht gefunden)[39m
[LOG] [37m         → blog/index.html: "Du weißt bereits: 'Will mi ganz gää' – Ich nehme dich vollständig" (Zeile ~21)[39m
[LOG] [37m         → blog/index.html: "Weiterlesen" (Zeile ~22)[39m
[LOG] 
```

## System-Information

- **Datum:** 2.7.2025, 20:58:12
- **Timezone:** Europe/Zurich
- **Platform:** win32
- **Architecture:** x64
- **Memory Usage:** 25MB

## Quality-Alerts & Build-Issues

### 💥 CRITICAL MESSAGES (3)

- 
� QUALITY-ALERT DETAILS:
- 📋 QUALITY-ALERTS GESPEICHERT FÜR SPÄTERE VERBESSERUNG!
- 📝 KI KANN CONTENT NACH QUALITY-ALERTS OPTIMIEREN



---
*Automatisch generiert durch TerminalLogger*
