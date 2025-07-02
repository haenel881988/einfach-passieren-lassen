# Build Process Log
            
**Timestamp:** 2025-07-02T19:56:41.893Z
**Dauer:** 967ms
**Log-Datei:** docs\015_build_logs\BUILD_LOG_2025-07-02_195641.md
**Node-Version:** v22.14.0
**Arbeitsverzeichnis:** C:\apps\website\einfach-passieren-lassen

## Vollständige Terminal-Ausgabe

### 1. [LOG] 2025-07-02T19:56:41.895Z

```
🚀 STARTE INTELLIGENT BUILD PROCESS...
```

### 2. [LOG] 2025-07-02T19:56:41.896Z

```
Neue Intention-Validation aktiv!
```

### 3. [LOG] 2025-07-02T19:56:41.897Z

```

▶️ Führe Check-Skript aus: advanced-content-validator.js
```

### 4. [LOG] 2025-07-02T19:56:41.968Z

```
✅ advanced-content-validator.js erfolgreich ausgeführt
```

### 5. [LOG] 2025-07-02T19:56:41.969Z

```

▶️ Führe Check-Skript aus: checklist-cli.js
```

### 6. [LOG] 2025-07-02T19:56:42.048Z

```
✅ checklist-cli.js erfolgreich ausgeführt
```

### 7. [LOG] 2025-07-02T19:56:42.048Z

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

### 8. [LOG] 2025-07-02T19:56:42.049Z

```

▶️ Führe Check-Skript aus: comprehensiveCheck.js
```

### 9. [LOG] 2025-07-02T19:56:42.139Z

```
✅ comprehensiveCheck.js erfolgreich ausgeführt
```

### 10. [LOG] 2025-07-02T19:56:42.140Z

```

▶️ Führe Check-Skript aus: keyword-cleanup.js
```

### 11. [LOG] 2025-07-02T19:56:42.199Z

```
✅ keyword-cleanup.js erfolgreich ausgeführt
```

### 12. [LOG] 2025-07-02T19:56:42.200Z

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

### 13. [LOG] 2025-07-02T19:56:42.200Z

```

▶️ Führe Check-Skript aus: logCleanup.js
```

### 14. [LOG] 2025-07-02T19:56:42.252Z

```
✅ logCleanup.js erfolgreich ausgeführt
```

### 15. [LOG] 2025-07-02T19:56:42.252Z

```

▶️ Führe Check-Skript aus: masterBuildChecker.js
```

### 16. [LOG] 2025-07-02T19:56:42.341Z

```
✅ masterBuildChecker.js erfolgreich ausgeführt
```

### 17. [LOG] 2025-07-02T19:56:42.342Z

```

▶️ Führe Check-Skript aus: multi-file-sinnlosigkeits-checker.js
```

### 18. [ERROR] 2025-07-02T19:56:42.395Z

```
🚨🚨🚨 CRITICAL ERROR IN multi-file-sinnlosigkeits-checker.js 🚨🚨🚨
```

### 19. [ERROR] 2025-07-02T19:56:42.395Z

```
📍 Error Type: SYNTAX ERROR
```

### 20. [ERROR] 2025-07-02T19:56:42.395Z

```
📍 Fehler in Datei checker.js, Zeile: 42
```

### 21. [ERROR] 2025-07-02T19:56:42.395Z

```
📋 Stderr: file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/multi-file-sinnlosigkeits-checker.js:42
const checker = new MultiFileSinnlosigkeitsChecker();
      ^^^^^^^

SyntaxError: Unexpected identifier 'checker'
    at compileSourceTextModule (node:internal/modules/esm/utils:338:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:102:18)
    at #translate (node:internal/modules/esm/loader:468:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:515:27)
    at async ModuleJob._link (node:internal/modules/esm/module_job:115:19)

Node.js v22.14.0

```

### 22. [ERROR] 2025-07-02T19:56:42.396Z

```
📋 Stdout: 
```

### 23. [ERROR] 2025-07-02T19:56:42.396Z

```
🚨 CRITICAL BUILD-BREAKING ERROR: multi-file-sinnlosigkeits-checker.js contains errors that prevent execution
```

### 24. [ERROR] 2025-07-02T19:56:42.396Z

```
Full Error Details: {
  "script": "multi-file-sinnlosigkeits-checker.js",
  "exitCode": 1,
  "stderr": "file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/multi-file-sinnlosigkeits-checker.js:42\r\nconst checker = new MultiFileSinnlosigkeitsChecker();\r\n      ^^^^^^^\r\n\r\nSyntaxError: Unexpected identifier 'checker'\r\n    at compileSourceTextModule (node:internal/modules/esm/utils:338:16)\r\n    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:102:18)\r\n    at #translate (node:internal/modules/esm/loader:468:12)\r\n    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:515:27)\r\n    at async ModuleJob._link (node:internal/modules/esm/module_job:115:19)\r\n\r\nNode.js v22.14.0\r\n",
  "stdout": "",
  "message": "Command failed: node C:\\apps\\website\\einfach-passieren-lassen\\scripts\\build-checks\\check_scripts\\multi-file-sinnlosigkeits-checker.js\nfile:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/multi-file-sinnlosigkeits-checker.js:42\r\nconst checker = new MultiFileSinnlosigkeitsChecker();\r\n      ^^^^^^^\r\n\r\nSyntaxError: Unexpected identifier 'checker'\r\n    at compileSourceTextModule (node:internal/modules/esm/utils:338:16)\r\n    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:102:18)\r\n    at #translate (node:internal/modules/esm/loader:468:12)\r\n    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:515:27)\r\n    at async ModuleJob._link (node:internal/modules/esm/module_job:115:19)\r\n\r\nNode.js v22.14.0\r\n",
  "timestamp": "2025-07-02T19:56:42.394Z"
}
```

### 25. [ERROR] 2025-07-02T19:56:42.396Z

```
⚠️ Build continues but multi-file-sinnlosigkeits-checker.js functionality is disabled!
```

### 26. [LOG] 2025-07-02T19:56:42.396Z

```

▶️ Führe Check-Skript aus: seoCheck.js
```

### 27. [LOG] 2025-07-02T19:56:42.446Z

```
✅ seoCheck.js erfolgreich ausgeführt
```

### 28. [LOG] 2025-07-02T19:56:42.447Z

```

▶️ Führe Check-Skript aus: test-absurd-checker.js
```

### 29. [LOG] 2025-07-02T19:56:42.519Z

```
✅ test-absurd-checker.js erfolgreich ausgeführt
```

### 30. [LOG] 2025-07-02T19:56:42.520Z

```
📋 test-absurd-checker.js Output: 🔍 EINFACHER ABSURD-CHECKER TEST
============================================================

📄 Prüfe: blog/entwurf/der-sichere-hafen.md
   🚨 ABSURD GEFUNDEN: "denkst du dir auf Schweizerdeutsch"
      Kontext: ...rauch öpper wo mi beschützt", denkst du dir auf Schweizerdeutsch. Und du hast recht. Du brauch...
   🚨 ABSURD GEFUNDEN: "denkst du dir auf Schweizerdeutsch"
      Kontext: ...rauch öpper wo mi beschützt", denkst du dir auf Schweizerdeutsch. Und du hast recht. Du brauch...

📄 Prüfe: blog/entwurf/kontrolle-abgeben.md
   ✅ Keine absurden Sätze gefunden

============================================================
🚨 TOTAL: 2 absurde Sätze gefunden!
   Diese müssen sofort behoben werden!
```

### 31. [LOG] 2025-07-02T19:56:42.522Z

```
🧹 STARTING CLEAN BUILD - Lösche vorhandene HTML-Dateien...
```

### 32. [LOG] 2025-07-02T19:56:42.523Z

```
📋 Gefunden: 10 Markdown-Dateien für Clean-Build
```

### 33. [LOG] 2025-07-02T19:56:42.524Z

```
   🗑️ Gelöscht: bindungssehnsucht-normal.html
```

### 34. [LOG] 2025-07-02T19:56:42.525Z

```
   🗑️ Gelöscht: das-erste-mal.html
```

### 35. [LOG] 2025-07-02T19:56:42.526Z

```
   🗑️ Gelöscht: der-sichere-hafen.html
```

### 36. [LOG] 2025-07-02T19:56:42.527Z

```
   🗑️ Gelöscht: emotionale-leere.html
```

### 37. [LOG] 2025-07-02T19:56:42.527Z

```
   🗑️ Gelöscht: erschoepft-vom-stark-sein.html
```

### 38. [LOG] 2025-07-02T19:56:42.528Z

```
   🗑️ Gelöscht: ich-will-einfach-gehalten-werden.html
```

### 39. [LOG] 2025-07-02T19:56:42.528Z

```
   🗑️ Gelöscht: kontrolle-abgeben.html
```

### 40. [LOG] 2025-07-02T19:56:42.528Z

```
   ➖ Nicht vorhanden: README.html
```

### 41. [LOG] 2025-07-02T19:56:42.529Z

```
   🗑️ Gelöscht: sehnsucht-nach-hingabe.html
```

### 42. [LOG] 2025-07-02T19:56:42.529Z

```
   🗑️ Gelöscht: zu-viel-liebe-zu-wenig-liebe.html
```

### 43. [LOG] 2025-07-02T19:56:42.529Z

```
✅ CLEAN COMPLETED: 9 Dateien gelöscht, 0 übersprungen
```

### 44. [LOG] 2025-07-02T19:56:42.529Z

```
🔨 Starte saubere Neu-Generierung...
```

### 45. [INFO] 2025-07-02T19:56:42.530Z

```
Clean Build: 9 HTML-Dateien gelöscht
```

### 46. [LOG] 2025-07-02T19:56:42.530Z

```

🚀 STARTE INTELLIGENT BUILD PROCESS...
```

### 47. [LOG] 2025-07-02T19:56:42.530Z

```
📋 Terminal-Ausgabe wird gespeichert in: docs\015_build_logs\BUILD_LOG_2025-07-02_195641.md
```

### 48. [LOG] 2025-07-02T19:56:42.531Z

```
Neue Intention-Validation aktiv!

```

### 49. [LOG] 2025-07-02T19:56:42.532Z

```
📋 Loaded 12 advanced checklists
```

### 50. [LOG] 2025-07-02T19:56:42.533Z

```
🧠 ADVANCED CHECKLIST SYSTEM ACTIVATED
```

### 51. [LOG] 2025-07-02T19:56:42.533Z

```
   → Intelligent rotation algorithm loaded
```

### 52. [LOG] 2025-07-02T19:56:42.533Z

```
   → 12 psychological validation modules ready
```

### 53. [LOG] 2025-07-02T19:56:42.533Z

```

🔍 FÜHRE ERWEITERTE SEO-VALIDIERUNG DURCH...
```

### 54. [LOG] 2025-07-02T19:56:42.534Z

```
   ℹ️ Sitemap enthält 14 URLs
```

### 55. [LOG] 2025-07-02T19:56:42.535Z

```
✅ Globale SEO-Validierung erfolgreich - Keine Issues gefunden
```

### 56. [LOG] 2025-07-02T19:56:42.535Z

```
🔍 Sammle VS Code Problems...
```

### 57. [PROBLEM] 2025-07-02T19:56:42.542Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:40 - Missing semicolon
```

### 58. [PROBLEM] 2025-07-02T19:56:42.542Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:1943 - Missing semicolon
```

### 59. [PROBLEM] 2025-07-02T19:56:42.542Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:2327 - Missing semicolon
```

### 60. [PROBLEM] 2025-07-02T19:56:42.542Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:2713 - Missing semicolon
```

### 61. [PROBLEM] 2025-07-02T19:56:42.542Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:2741 - Missing semicolon
```

### 62. [PROBLEM] 2025-07-02T19:56:42.543Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:3562 - Missing semicolon
```

### 63. [PROBLEM] 2025-07-02T19:56:42.543Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:3599 - Missing semicolon
```

### 64. [PROBLEM] 2025-07-02T19:56:42.543Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:4316 - Missing semicolon
```

### 65. [PROBLEM] 2025-07-02T19:56:42.543Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:5013 - Missing semicolon
```

### 66. [PROBLEM] 2025-07-02T19:56:42.543Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:5406 - Missing semicolon
```

### 67. [PROBLEM] 2025-07-02T19:56:42.543Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6202 - Missing semicolon
```

### 68. [PROBLEM] 2025-07-02T19:56:42.544Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6587 - Missing semicolon
```

### 69. [PROBLEM] 2025-07-02T19:56:42.544Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6720 - Missing semicolon
```

### 70. [PROBLEM] 2025-07-02T19:56:42.544Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6743 - Missing semicolon
```

### 71. [PROBLEM] 2025-07-02T19:56:42.544Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6803 - Missing semicolon
```

### 72. [PROBLEM] 2025-07-02T19:56:42.544Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6895 - Missing semicolon
```

### 73. [PROBLEM] 2025-07-02T19:56:42.544Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6923 - Missing semicolon
```

### 74. [PROBLEM] 2025-07-02T19:56:42.544Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6954 - Missing semicolon
```

### 75. [PROBLEM] 2025-07-02T19:56:42.544Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7029 - Missing semicolon
```

### 76. [PROBLEM] 2025-07-02T19:56:42.544Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7054 - Missing semicolon
```

### 77. [PROBLEM] 2025-07-02T19:56:42.544Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7099 - Missing semicolon
```

### 78. [PROBLEM] 2025-07-02T19:56:42.544Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7531 - Missing semicolon
```

### 79. [PROBLEM] 2025-07-02T19:56:42.544Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7585 - Missing semicolon
```

### 80. [PROBLEM] 2025-07-02T19:56:42.544Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7983 - Missing semicolon
```

### 81. [PROBLEM] 2025-07-02T19:56:42.544Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:8071 - Missing semicolon
```

### 82. [PROBLEM] 2025-07-02T19:56:42.544Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:8075 - Missing semicolon
```

### 83. [PROBLEM] 2025-07-02T19:56:42.544Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:8112 - Missing semicolon
```

### 84. [PROBLEM] 2025-07-02T19:56:42.544Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:8493 - Missing semicolon
```

### 85. [PROBLEM] 2025-07-02T19:56:42.544Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:9746 - Missing semicolon
```

### 86. [PROBLEM] 2025-07-02T19:56:42.544Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:9945 - Console.log statement found - consider removing in production
```

### 87. [PROBLEM] 2025-07-02T19:56:42.546Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:40 - Missing semicolon
```

### 88. [PROBLEM] 2025-07-02T19:56:42.546Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:1950 - Missing semicolon
```

### 89. [PROBLEM] 2025-07-02T19:56:42.546Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:2360 - Missing semicolon
```

### 90. [PROBLEM] 2025-07-02T19:56:42.546Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:2762 - Missing semicolon
```

### 91. [PROBLEM] 2025-07-02T19:56:42.546Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:2790 - Missing semicolon
```

### 92. [PROBLEM] 2025-07-02T19:56:42.547Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:3618 - Missing semicolon
```

### 93. [PROBLEM] 2025-07-02T19:56:42.547Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:3655 - Missing semicolon
```

### 94. [PROBLEM] 2025-07-02T19:56:42.547Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:4372 - Missing semicolon
```

### 95. [PROBLEM] 2025-07-02T19:56:42.547Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:5069 - Missing semicolon
```

### 96. [PROBLEM] 2025-07-02T19:56:42.547Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:5462 - Missing semicolon
```

### 97. [PROBLEM] 2025-07-02T19:56:42.547Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6258 - Missing semicolon
```

### 98. [PROBLEM] 2025-07-02T19:56:42.547Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6643 - Missing semicolon
```

### 99. [PROBLEM] 2025-07-02T19:56:42.548Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6776 - Missing semicolon
```

### 100. [PROBLEM] 2025-07-02T19:56:42.548Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6799 - Missing semicolon
```

### 101. [PROBLEM] 2025-07-02T19:56:42.548Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6859 - Missing semicolon
```

### 102. [PROBLEM] 2025-07-02T19:56:42.548Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6951 - Missing semicolon
```

### 103. [PROBLEM] 2025-07-02T19:56:42.548Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6979 - Missing semicolon
```

### 104. [PROBLEM] 2025-07-02T19:56:42.548Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:7010 - Missing semicolon
```

### 105. [PROBLEM] 2025-07-02T19:56:42.548Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:7085 - Missing semicolon
```

### 106. [PROBLEM] 2025-07-02T19:56:42.548Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:7110 - Missing semicolon
```

### 107. [PROBLEM] 2025-07-02T19:56:42.548Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:7155 - Missing semicolon
```

### 108. [PROBLEM] 2025-07-02T19:56:42.548Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:7587 - Missing semicolon
```

### 109. [PROBLEM] 2025-07-02T19:56:42.548Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:7641 - Missing semicolon
```

### 110. [PROBLEM] 2025-07-02T19:56:42.548Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:8039 - Missing semicolon
```

### 111. [PROBLEM] 2025-07-02T19:56:42.548Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:8127 - Missing semicolon
```

### 112. [PROBLEM] 2025-07-02T19:56:42.548Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:8131 - Missing semicolon
```

### 113. [PROBLEM] 2025-07-02T19:56:42.548Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:8168 - Missing semicolon
```

### 114. [PROBLEM] 2025-07-02T19:56:42.548Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:8549 - Missing semicolon
```

### 115. [PROBLEM] 2025-07-02T19:56:42.548Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:9802 - Missing semicolon
```

### 116. [PROBLEM] 2025-07-02T19:56:42.548Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:10001 - Console.log statement found - consider removing in production
```

### 117. [PROBLEM] 2025-07-02T19:56:42.551Z

```
[WARNING] app-gui\src\App.jsx:4 - Missing semicolon
```

### 118. [PROBLEM] 2025-07-02T19:56:42.551Z

```
[WARNING] app-gui\src\App.jsx:72 - Missing semicolon
```

### 119. [PROBLEM] 2025-07-02T19:56:42.551Z

```
[WARNING] app-gui\src\App.jsx:99 - Missing semicolon
```

### 120. [PROBLEM] 2025-07-02T19:56:42.551Z

```
[WARNING] build-process\mainBuild.js:52 - Console.log statement found - consider removing in production
```

### 121. [PROBLEM] 2025-07-02T19:56:42.551Z

```
[WARNING] build-process\mainBuild.js:64 - Console.log statement found - consider removing in production
```

### 122. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\mainBuild.js:98 - Console.log statement found - consider removing in production
```

### 123. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\mainBuild.js:102 - Console.log statement found - consider removing in production
```

### 124. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\mainBuild.js:104 - Console.log statement found - consider removing in production
```

### 125. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\mainBuild.js:110 - Console.log statement found - consider removing in production
```

### 126. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\mainBuild.js:112 - Console.log statement found - consider removing in production
```

### 127. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\mainBuild.js:116 - Console.log statement found - consider removing in production
```

### 128. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\mainBuild.js:123 - Console.log statement found - consider removing in production
```

### 129. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\mainBuild.js:145 - Console.log statement found - consider removing in production
```

### 130. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\mainBuild.js:147 - Missing semicolon
```

### 131. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\mainBuild.js:174 - Missing semicolon
```

### 132. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\mainBuild.js:205 - Console.log statement found - consider removing in production
```

### 133. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\mainBuild.js:231 - Console.log statement found - consider removing in production
```

### 134. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\mainBuild.js:254 - Console.log statement found - consider removing in production
```

### 135. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\modules\contentOptimizer.js:53 - Missing semicolon
```

### 136. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\modules\contentOptimizer.js:66 - Missing semicolon
```

### 137. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\modules\contentOptimizer.js:111 - Missing semicolon
```

### 138. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\modules\contentOptimizer.js:157 - Missing semicolon
```

### 139. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\modules\contentOptimizer.js:338 - Missing semicolon
```

### 140. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\modules\fileUtils.js:22 - Console.log statement found - consider removing in production
```

### 141. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\modules\fileUtils.js:45 - Console.log statement found - consider removing in production
```

### 142. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\modules\fileUtils.js:90 - Console.log statement found - consider removing in production
```

### 143. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\modules\fileUtils.js:151 - Console.log statement found - consider removing in production
```

### 144. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\modules\fileUtils.js:174 - Console.log statement found - consider removing in production
```

### 145. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\modules\logger.js:17 - Console.log statement found - consider removing in production
```

### 146. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\modules\logger.js:34 - Console.log statement found - consider removing in production
```

### 147. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\modules\logger.js:62 - Console.log statement found - consider removing in production
```

### 148. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[ERROR] build-process\modules\logger.js:145 - Typo: "fucntion" should be "function"
```

### 149. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[ERROR] build-process\modules\logger.js:146 - Typo: "fucntion" should be "function"
```

### 150. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\modules\logger.js:243 - Missing semicolon
```

### 151. [PROBLEM] 2025-07-02T19:56:42.552Z

```
[WARNING] build-process\modules\logger.js:276 - Console.log statement found - consider removing in production
```

### 152. [PROBLEM] 2025-07-02T19:56:42.553Z

```
[WARNING] build-process\modules\seoCheck.js:20 - Console.log statement found - consider removing in production
```

### 153. [PROBLEM] 2025-07-02T19:56:42.553Z

```
[WARNING] build-process\modules\seoCheck.js:94 - Console.log statement found - consider removing in production
```

### 154. [PROBLEM] 2025-07-02T19:56:42.553Z

```
[WARNING] build-process\modules\seoCheck.js:96 - Console.log statement found - consider removing in production
```

### 155. [PROBLEM] 2025-07-02T19:56:42.553Z

```
[WARNING] build-process\modules\seoCheck.js:109 - Console.log statement found - consider removing in production
```

### 156. [PROBLEM] 2025-07-02T19:56:42.553Z

```
[WARNING] build-process\modules\seoCheck.js:248 - Console.log statement found - consider removing in production
```

### 157. [PROBLEM] 2025-07-02T19:56:42.553Z

```
[WARNING] build-process\modules\seoCheck.js:335 - Console.log statement found - consider removing in production
```

### 158. [PROBLEM] 2025-07-02T19:56:42.553Z

```
[WARNING] build-process\modules\seoCheck.js:406 - Console.log statement found - consider removing in production
```

### 159. [PROBLEM] 2025-07-02T19:56:42.553Z

```
[WARNING] build-process\modules\seoCheck.js:423 - Missing semicolon
```

### 160. [PROBLEM] 2025-07-02T19:56:42.553Z

```
[WARNING] build-process\modules\seoCheck.js:505 - Console.log statement found - consider removing in production
```

### 161. [PROBLEM] 2025-07-02T19:56:42.553Z

```
[WARNING] build-process\modules\seoCheck.js:513 - Missing semicolon
```

### 162. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:17 - Missing semicolon
```

### 163. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:32 - Console.log statement found - consider removing in production
```

### 164. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:34 - Console.log statement found - consider removing in production
```

### 165. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:50 - Missing semicolon
```

### 166. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:107 - Missing semicolon
```

### 167. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:132 - Missing semicolon
```

### 168. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:220 - Missing semicolon
```

### 169. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:257 - Missing semicolon
```

### 170. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:264 - Missing semicolon
```

### 171. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:275 - Missing semicolon
```

### 172. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:319 - Missing semicolon
```

### 173. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:369 - Missing semicolon
```

### 174. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:402 - Missing semicolon
```

### 175. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:411 - Console.log statement found - consider removing in production
```

### 176. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:412 - Console.log statement found - consider removing in production
```

### 177. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:418 - Missing semicolon
```

### 178. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:427 - Console.log statement found - consider removing in production
```

### 179. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:467 - Missing semicolon
```

### 180. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:517 - Missing semicolon
```

### 181. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:525 - Missing semicolon
```

### 182. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:560 - Missing semicolon
```

### 183. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:588 - Missing semicolon
```

### 184. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:596 - Console.log statement found - consider removing in production
```

### 185. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:599 - Console.log statement found - consider removing in production
```

### 186. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:603 - Console.log statement found - consider removing in production
```

### 187. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:605 - Missing semicolon
```

### 188. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:607 - Console.log statement found - consider removing in production
```

### 189. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:608 - Console.log statement found - consider removing in production
```

### 190. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:611 - Console.log statement found - consider removing in production
```

### 191. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:693 - Missing semicolon
```

### 192. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:700 - Missing semicolon
```

### 193. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:705 - Missing semicolon
```

### 194. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:798 - Missing semicolon
```

### 195. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:807 - Missing semicolon
```

### 196. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:830 - Console.log statement found - consider removing in production
```

### 197. [PROBLEM] 2025-07-02T19:56:42.554Z

```
[WARNING] scripts\advanced-content-validator.js:853 - Console.log statement found - consider removing in production
```

### 198. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:17 - Missing semicolon
```

### 199. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:32 - Console.log statement found - consider removing in production
```

### 200. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:34 - Console.log statement found - consider removing in production
```

### 201. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:50 - Missing semicolon
```

### 202. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:118 - Missing semicolon
```

### 203. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:143 - Missing semicolon
```

### 204. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:217 - Missing semicolon
```

### 205. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:247 - Missing semicolon
```

### 206. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:297 - Missing semicolon
```

### 207. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:330 - Missing semicolon
```

### 208. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:339 - Console.log statement found - consider removing in production
```

### 209. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:340 - Console.log statement found - consider removing in production
```

### 210. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:346 - Missing semicolon
```

### 211. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:355 - Console.log statement found - consider removing in production
```

### 212. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:395 - Missing semicolon
```

### 213. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:445 - Missing semicolon
```

### 214. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:453 - Missing semicolon
```

### 215. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:488 - Missing semicolon
```

### 216. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:516 - Missing semicolon
```

### 217. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:602 - Missing semicolon
```

### 218. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:609 - Missing semicolon
```

### 219. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:614 - Missing semicolon
```

### 220. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:707 - Missing semicolon
```

### 221. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:716 - Missing semicolon
```

### 222. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:739 - Console.log statement found - consider removing in production
```

### 223. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:762 - Console.log statement found - consider removing in production
```

### 224. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:14 - Console.log statement found - consider removing in production
```

### 225. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:15 - Console.log statement found - consider removing in production
```

### 226. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:20 - Console.log statement found - consider removing in production
```

### 227. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:21 - Console.log statement found - consider removing in production
```

### 228. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:24 - Console.log statement found - consider removing in production
```

### 229. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:28 - Console.log statement found - consider removing in production
```

### 230. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:33 - Console.log statement found - consider removing in production
```

### 231. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:34 - Console.log statement found - consider removing in production
```

### 232. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:35 - Console.log statement found - consider removing in production
```

### 233. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:42 - Console.log statement found - consider removing in production
```

### 234. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:50 - Console.log statement found - consider removing in production
```

### 235. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:52 - Console.log statement found - consider removing in production
```

### 236. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:53 - Console.log statement found - consider removing in production
```

### 237. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:64 - Missing semicolon
```

### 238. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:69 - Console.log statement found - consider removing in production
```

### 239. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:72 - Console.log statement found - consider removing in production
```

### 240. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:79 - Console.log statement found - consider removing in production
```

### 241. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:84 - Console.log statement found - consider removing in production
```

### 242. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:89 - Console.log statement found - consider removing in production
```

### 243. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:93 - Console.log statement found - consider removing in production
```

### 244. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:94 - Console.log statement found - consider removing in production
```

### 245. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:96 - Missing semicolon
```

### 246. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:113 - Console.log statement found - consider removing in production
```

### 247. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:115 - Console.log statement found - consider removing in production
```

### 248. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:116 - Console.log statement found - consider removing in production
```

### 249. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:118 - Console.log statement found - consider removing in production
```

### 250. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:126 - Console.log statement found - consider removing in production
```

### 251. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:131 - Console.log statement found - consider removing in production
```

### 252. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:132 - Console.log statement found - consider removing in production
```

### 253. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:136 - Console.log statement found - consider removing in production
```

### 254. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:137 - Console.log statement found - consider removing in production
```

### 255. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:141 - Console.log statement found - consider removing in production
```

### 256. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:143 - Console.log statement found - consider removing in production
```

### 257. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:145 - Console.log statement found - consider removing in production
```

### 258. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:149 - Console.log statement found - consider removing in production
```

### 259. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:151 - Console.log statement found - consider removing in production
```

### 260. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:156 - Console.log statement found - consider removing in production
```

### 261. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:158 - Console.log statement found - consider removing in production
```

### 262. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:164 - Console.log statement found - consider removing in production
```

### 263. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:166 - Console.log statement found - consider removing in production
```

### 264. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:172 - Console.log statement found - consider removing in production
```

### 265. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:173 - Console.log statement found - consider removing in production
```

### 266. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:174 - Console.log statement found - consider removing in production
```

### 267. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:175 - Console.log statement found - consider removing in production
```

### 268. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:176 - Console.log statement found - consider removing in production
```

### 269. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:177 - Console.log statement found - consider removing in production
```

### 270. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:178 - Console.log statement found - consider removing in production
```

### 271. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:179 - Console.log statement found - consider removing in production
```

### 272. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:180 - Console.log statement found - consider removing in production
```

### 273. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:181 - Console.log statement found - consider removing in production
```

### 274. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:182 - Console.log statement found - consider removing in production
```

### 275. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:183 - Console.log statement found - consider removing in production
```

### 276. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:184 - Console.log statement found - consider removing in production
```

### 277. [PROBLEM] 2025-07-02T19:56:42.555Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:185 - Console.log statement found - consider removing in production
```

### 278. [PROBLEM] 2025-07-02T19:56:42.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:217 - Console.log statement found - consider removing in production
```

### 279. [PROBLEM] 2025-07-02T19:56:42.556Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:218 - Console.log statement found - consider removing in production
```

### 280. [PROBLEM] 2025-07-02T19:56:42.556Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:19 - Console.log statement found - consider removing in production
```

### 281. [PROBLEM] 2025-07-02T19:56:42.556Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:38 - Missing semicolon
```

### 282. [PROBLEM] 2025-07-02T19:56:42.556Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:66 - Console.log statement found - consider removing in production
```

### 283. [PROBLEM] 2025-07-02T19:56:42.556Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:67 - Console.log statement found - consider removing in production
```

### 284. [PROBLEM] 2025-07-02T19:56:42.556Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:70 - Console.log statement found - consider removing in production
```

### 285. [PROBLEM] 2025-07-02T19:56:42.556Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:162 - Missing semicolon
```

### 286. [PROBLEM] 2025-07-02T19:56:42.556Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:213 - Missing semicolon
```

### 287. [PROBLEM] 2025-07-02T19:56:42.556Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:250 - Missing semicolon
```

### 288. [PROBLEM] 2025-07-02T19:56:42.556Z

```
[WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:38 - Console.log statement found - consider removing in production
```

### 289. [PROBLEM] 2025-07-02T19:56:42.556Z

```
[WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:40 - Missing semicolon
```

### 290. [PROBLEM] 2025-07-02T19:56:42.556Z

```
[WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:58 - Console.log statement found - consider removing in production
```

### 291. [PROBLEM] 2025-07-02T19:56:42.556Z

```
[WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:64 - Console.log statement found - consider removing in production
```

### 292. [PROBLEM] 2025-07-02T19:56:42.556Z

```
[WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:67 - Console.log statement found - consider removing in production
```

### 293. [PROBLEM] 2025-07-02T19:56:42.556Z

```
[WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:71 - Console.log statement found - consider removing in production
```

### 294. [PROBLEM] 2025-07-02T19:56:42.556Z

```
[WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:72 - Console.log statement found - consider removing in production
```

### 295. [PROBLEM] 2025-07-02T19:56:42.556Z

```
[WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:73 - Console.log statement found - consider removing in production
```

### 296. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:19 - Console.log statement found - consider removing in production
```

### 297. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:91 - Console.log statement found - consider removing in production
```

### 298. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:92 - Console.log statement found - consider removing in production
```

### 299. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:93 - Console.log statement found - consider removing in production
```

### 300. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:94 - Console.log statement found - consider removing in production
```

### 301. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:95 - Console.log statement found - consider removing in production
```

### 302. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:100 - Console.log statement found - consider removing in production
```

### 303. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:103 - Missing semicolon
```

### 304. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:132 - Missing semicolon
```

### 305. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:256 - Missing semicolon
```

### 306. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:389 - Missing semicolon
```

### 307. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:437 - Missing semicolon
```

### 308. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:486 - Missing semicolon
```

### 309. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:515 - Missing semicolon
```

### 310. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:577 - Console.log statement found - consider removing in production
```

### 311. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:45 - Console.log statement found - consider removing in production
```

### 312. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:48 - Console.log statement found - consider removing in production
```

### 313. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:50 - Console.log statement found - consider removing in production
```

### 314. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:74 - Console.log statement found - consider removing in production
```

### 315. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:75 - Console.log statement found - consider removing in production
```

### 316. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:81 - Console.log statement found - consider removing in production
```

### 317. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:117 - Missing semicolon
```

### 318. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:141 - Console.log statement found - consider removing in production
```

### 319. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:154 - Console.log statement found - consider removing in production
```

### 320. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:164 - Console.log statement found - consider removing in production
```

### 321. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:168 - Console.log statement found - consider removing in production
```

### 322. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:169 - Console.log statement found - consider removing in production
```

### 323. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:170 - Console.log statement found - consider removing in production
```

### 324. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:181 - Console.log statement found - consider removing in production
```

### 325. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:185 - Console.log statement found - consider removing in production
```

### 326. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:195 - Missing semicolon
```

### 327. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:220 - Missing semicolon
```

### 328. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:244 - Missing semicolon
```

### 329. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:300 - Console.log statement found - consider removing in production
```

### 330. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:309 - Console.log statement found - consider removing in production
```

### 331. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:317 - Console.log statement found - consider removing in production
```

### 332. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:320 - Console.log statement found - consider removing in production
```

### 333. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:321 - Console.log statement found - consider removing in production
```

### 334. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:322 - Console.log statement found - consider removing in production
```

### 335. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:323 - Console.log statement found - consider removing in production
```

### 336. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:338 - Console.log statement found - consider removing in production
```

### 337. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:361 - Missing semicolon
```

### 338. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:385 - Missing semicolon
```

### 339. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:396 - Console.log statement found - consider removing in production
```

### 340. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:397 - Console.log statement found - consider removing in production
```

### 341. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:398 - Console.log statement found - consider removing in production
```

### 342. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:400 - Console.log statement found - consider removing in production
```

### 343. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:401 - Console.log statement found - consider removing in production
```

### 344. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:402 - Console.log statement found - consider removing in production
```

### 345. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:405 - Console.log statement found - consider removing in production
```

### 346. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:406 - Console.log statement found - consider removing in production
```

### 347. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:407 - Console.log statement found - consider removing in production
```

### 348. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:408 - Console.log statement found - consider removing in production
```

### 349. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:416 - Console.log statement found - consider removing in production
```

### 350. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:421 - Console.log statement found - consider removing in production
```

### 351. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:426 - Console.log statement found - consider removing in production
```

### 352. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:429 - Console.log statement found - consider removing in production
```

### 353. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:433 - Console.log statement found - consider removing in production
```

### 354. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:437 - Console.log statement found - consider removing in production
```

### 355. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:439 - Console.log statement found - consider removing in production
```

### 356. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:441 - Console.log statement found - consider removing in production
```

### 357. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:443 - Console.log statement found - consider removing in production
```

### 358. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:445 - Console.log statement found - consider removing in production
```

### 359. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:478 - Console.log statement found - consider removing in production
```

### 360. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:498 - Console.log statement found - consider removing in production
```

### 361. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:502 - Missing semicolon
```

### 362. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:521 - Console.log statement found - consider removing in production
```

### 363. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:532 - Console.log statement found - consider removing in production
```

### 364. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:536 - Console.log statement found - consider removing in production
```

### 365. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:538 - Console.log statement found - consider removing in production
```

### 366. [PROBLEM] 2025-07-02T19:56:42.557Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:541 - Console.log statement found - consider removing in production
```

### 367. [PROBLEM] 2025-07-02T19:56:42.558Z

```
[WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:9 - Console.log statement found - consider removing in production
```

### 368. [PROBLEM] 2025-07-02T19:56:42.558Z

```
[WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:10 - Console.log statement found - consider removing in production
```

### 369. [PROBLEM] 2025-07-02T19:56:42.558Z

```
[WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:12 - Missing semicolon
```

### 370. [PROBLEM] 2025-07-02T19:56:42.558Z

```
[WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:18 - Missing semicolon
```

### 371. [PROBLEM] 2025-07-02T19:56:42.558Z

```
[WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:28 - Console.log statement found - consider removing in production
```

### 372. [PROBLEM] 2025-07-02T19:56:42.558Z

```
[WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:31 - Console.log statement found - consider removing in production
```

### 373. [PROBLEM] 2025-07-02T19:56:42.558Z

```
[WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:44 - Console.log statement found - consider removing in production
```

### 374. [PROBLEM] 2025-07-02T19:56:42.558Z

```
[WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:51 - Console.log statement found - consider removing in production
```

### 375. [PROBLEM] 2025-07-02T19:56:42.558Z

```
[WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:57 - Console.log statement found - consider removing in production
```

### 376. [PROBLEM] 2025-07-02T19:56:42.558Z

```
[WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:61 - Console.log statement found - consider removing in production
```

### 377. [PROBLEM] 2025-07-02T19:56:42.558Z

```
[WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:63 - Console.log statement found - consider removing in production
```

### 378. [PROBLEM] 2025-07-02T19:56:42.558Z

```
[WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:64 - Console.log statement found - consider removing in production
```

### 379. [PROBLEM] 2025-07-02T19:56:42.558Z

```
[WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:66 - Console.log statement found - consider removing in production
```

### 380. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:17 - Console.log statement found - consider removing in production
```

### 381. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:20 - Missing semicolon
```

### 382. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:21 - Missing semicolon
```

### 383. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:24 - Missing semicolon
```

### 384. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:34 - Missing semicolon
```

### 385. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:40 - Console.log statement found - consider removing in production
```

### 386. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:92 - Console.log statement found - consider removing in production
```

### 387. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:104 - Console.log statement found - consider removing in production
```

### 388. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:119 - Console.log statement found - consider removing in production
```

### 389. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:122 - Console.log statement found - consider removing in production
```

### 390. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:124 - Console.log statement found - consider removing in production
```

### 391. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:135 - Console.log statement found - consider removing in production
```

### 392. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:137 - Console.log statement found - consider removing in production
```

### 393. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:140 - Console.log statement found - consider removing in production
```

### 394. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:147 - Console.log statement found - consider removing in production
```

### 395. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:149 - Console.log statement found - consider removing in production
```

### 396. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:152 - Console.log statement found - consider removing in production
```

### 397. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:159 - Console.log statement found - consider removing in production
```

### 398. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:161 - Console.log statement found - consider removing in production
```

### 399. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:177 - Console.log statement found - consider removing in production
```

### 400. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:199 - Missing semicolon
```

### 401. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:217 - Console.log statement found - consider removing in production
```

### 402. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:225 - Missing semicolon
```

### 403. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:241 - Missing semicolon
```

### 404. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:256 - Missing semicolon
```

### 405. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:273 - Console.log statement found - consider removing in production
```

### 406. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:276 - Missing semicolon
```

### 407. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:281 - Console.log statement found - consider removing in production
```

### 408. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:284 - Console.log statement found - consider removing in production
```

### 409. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:286 - Console.log statement found - consider removing in production
```

### 410. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:290 - Missing semicolon
```

### 411. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:309 - Console.log statement found - consider removing in production
```

### 412. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:311 - Missing semicolon
```

### 413. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:330 - Console.log statement found - consider removing in production
```

### 414. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:342 - Missing semicolon
```

### 415. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:351 - Console.log statement found - consider removing in production
```

### 416. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:352 - Console.log statement found - consider removing in production
```

### 417. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:353 - Console.log statement found - consider removing in production
```

### 418. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:358 - Console.log statement found - consider removing in production
```

### 419. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:359 - Console.log statement found - consider removing in production
```

### 420. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:370 - Console.log statement found - consider removing in production
```

### 421. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:371 - Console.log statement found - consider removing in production
```

### 422. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:372 - Console.log statement found - consider removing in production
```

### 423. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:373 - Console.log statement found - consider removing in production
```

### 424. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:374 - Console.log statement found - consider removing in production
```

### 425. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:378 - Console.log statement found - consider removing in production
```

### 426. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:379 - Console.log statement found - consider removing in production
```

### 427. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:380 - Console.log statement found - consider removing in production
```

### 428. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:381 - Console.log statement found - consider removing in production
```

### 429. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:382 - Console.log statement found - consider removing in production
```

### 430. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:386 - Console.log statement found - consider removing in production
```

### 431. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:387 - Console.log statement found - consider removing in production
```

### 432. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:390 - Console.log statement found - consider removing in production
```

### 433. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:397 - Console.log statement found - consider removing in production
```

### 434. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:398 - Console.log statement found - consider removing in production
```

### 435. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:399 - Console.log statement found - consider removing in production
```

### 436. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:420 - Console.log statement found - consider removing in production
```

### 437. [PROBLEM] 2025-07-02T19:56:42.559Z

```
[WARNING] scripts\build.js:429 - Console.log statement found - consider removing in production
```

### 438. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:438 - Missing semicolon
```

### 439. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:465 - Missing semicolon
```

### 440. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:496 - Console.log statement found - consider removing in production
```

### 441. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:519 - Console.log statement found - consider removing in production
```

### 442. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:542 - Console.log statement found - consider removing in production
```

### 443. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:563 - Missing semicolon
```

### 444. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:575 - Console.log statement found - consider removing in production
```

### 445. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[ERROR] scripts\build.js:690 - Typo: "fucntion" should be "function"
```

### 446. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[ERROR] scripts\build.js:691 - Typo: "fucntion" should be "function"
```

### 447. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:738 - Missing semicolon
```

### 448. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:748 - Missing semicolon
```

### 449. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:834 - Missing semicolon
```

### 450. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:904 - Missing semicolon
```

### 451. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:944 - Console.log statement found - consider removing in production
```

### 452. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:1073 - Missing semicolon
```

### 453. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:1077 - Missing semicolon
```

### 454. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:1084 - Missing semicolon
```

### 455. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:1091 - Missing semicolon
```

### 456. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:1153 - Missing semicolon
```

### 457. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:1178 - Missing semicolon
```

### 458. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:1197 - Missing semicolon
```

### 459. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:1225 - Missing semicolon
```

### 460. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:1304 - Missing semicolon
```

### 461. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:1347 - Missing semicolon
```

### 462. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:1358 - Missing semicolon
```

### 463. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:1420 - Missing semicolon
```

### 464. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:1449 - Missing semicolon
```

### 465. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:1453 - Missing semicolon
```

### 466. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:1513 - Missing semicolon
```

### 467. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:1578 - Missing semicolon
```

### 468. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:1769 - Missing semicolon
```

### 469. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:1807 - Missing semicolon
```

### 470. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:1819 - Missing semicolon
```

### 471. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:1899 - Missing semicolon
```

### 472. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:1995 - Missing semicolon
```

### 473. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:1996 - Missing semicolon
```

### 474. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2117 - Console.log statement found - consider removing in production
```

### 475. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2118 - Console.log statement found - consider removing in production
```

### 476. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2124 - Console.log statement found - consider removing in production
```

### 477. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2125 - Console.log statement found - consider removing in production
```

### 478. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2126 - Console.log statement found - consider removing in production
```

### 479. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2146 - Missing semicolon
```

### 480. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2150 - Console.log statement found - consider removing in production
```

### 481. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2160 - Console.log statement found - consider removing in production
```

### 482. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2165 - Console.log statement found - consider removing in production
```

### 483. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2179 - Console.log statement found - consider removing in production
```

### 484. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2185 - Console.log statement found - consider removing in production
```

### 485. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2187 - Missing semicolon
```

### 486. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2189 - Console.log statement found - consider removing in production
```

### 487. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2190 - Console.log statement found - consider removing in production
```

### 488. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2202 - Console.log statement found - consider removing in production
```

### 489. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2205 - Console.log statement found - consider removing in production
```

### 490. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2217 - Console.log statement found - consider removing in production
```

### 491. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2221 - Console.log statement found - consider removing in production
```

### 492. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2223 - Console.log statement found - consider removing in production
```

### 493. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2226 - Console.log statement found - consider removing in production
```

### 494. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2277 - Console.log statement found - consider removing in production
```

### 495. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2279 - Console.log statement found - consider removing in production
```

### 496. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2284 - Console.log statement found - consider removing in production
```

### 497. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2290 - Console.log statement found - consider removing in production
```

### 498. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2292 - Console.log statement found - consider removing in production
```

### 499. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2302 - Console.log statement found - consider removing in production
```

### 500. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2306 - Console.log statement found - consider removing in production
```

### 501. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2307 - Console.log statement found - consider removing in production
```

### 502. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2310 - Console.log statement found - consider removing in production
```

### 503. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2311 - Console.log statement found - consider removing in production
```

### 504. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2329 - Console.log statement found - consider removing in production
```

### 505. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2330 - Console.log statement found - consider removing in production
```

### 506. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2341 - Console.log statement found - consider removing in production
```

### 507. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2342 - Console.log statement found - consider removing in production
```

### 508. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2343 - Console.log statement found - consider removing in production
```

### 509. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2346 - Console.log statement found - consider removing in production
```

### 510. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2347 - Console.log statement found - consider removing in production
```

### 511. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2348 - Console.log statement found - consider removing in production
```

### 512. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2349 - Console.log statement found - consider removing in production
```

### 513. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2350 - Console.log statement found - consider removing in production
```

### 514. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2351 - Console.log statement found - consider removing in production
```

### 515. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2354 - Console.log statement found - consider removing in production
```

### 516. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2358 - Console.log statement found - consider removing in production
```

### 517. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2359 - Console.log statement found - consider removing in production
```

### 518. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2360 - Console.log statement found - consider removing in production
```

### 519. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2364 - Missing semicolon
```

### 520. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2388 - Console.log statement found - consider removing in production
```

### 521. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2390 - Console.log statement found - consider removing in production
```

### 522. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2396 - Console.log statement found - consider removing in production
```

### 523. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2399 - Console.log statement found - consider removing in production
```

### 524. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2419 - Console.log statement found - consider removing in production
```

### 525. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2420 - Console.log statement found - consider removing in production
```

### 526. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2443 - Console.log statement found - consider removing in production
```

### 527. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2447 - Console.log statement found - consider removing in production
```

### 528. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2448 - Console.log statement found - consider removing in production
```

### 529. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2450 - Console.log statement found - consider removing in production
```

### 530. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2451 - Console.log statement found - consider removing in production
```

### 531. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2455 - Console.log statement found - consider removing in production
```

### 532. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2457 - Console.log statement found - consider removing in production
```

### 533. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2460 - Console.log statement found - consider removing in production
```

### 534. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2463 - Console.log statement found - consider removing in production
```

### 535. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2466 - Console.log statement found - consider removing in production
```

### 536. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2467 - Console.log statement found - consider removing in production
```

### 537. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2470 - Console.log statement found - consider removing in production
```

### 538. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2471 - Console.log statement found - consider removing in production
```

### 539. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2473 - Missing semicolon
```

### 540. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2476 - Missing semicolon
```

### 541. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2479 - Missing semicolon
```

### 542. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2484 - Console.log statement found - consider removing in production
```

### 543. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2486 - Console.log statement found - consider removing in production
```

### 544. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2488 - Console.log statement found - consider removing in production
```

### 545. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2492 - Console.log statement found - consider removing in production
```

### 546. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2496 - Console.log statement found - consider removing in production
```

### 547. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2498 - Console.log statement found - consider removing in production
```

### 548. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2499 - Console.log statement found - consider removing in production
```

### 549. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2504 - Console.log statement found - consider removing in production
```

### 550. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2508 - Console.log statement found - consider removing in production
```

### 551. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2509 - Console.log statement found - consider removing in production
```

### 552. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2516 - Console.log statement found - consider removing in production
```

### 553. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2522 - Console.log statement found - consider removing in production
```

### 554. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2523 - Console.log statement found - consider removing in production
```

### 555. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2524 - Console.log statement found - consider removing in production
```

### 556. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2527 - Console.log statement found - consider removing in production
```

### 557. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2529 - Console.log statement found - consider removing in production
```

### 558. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2531 - Console.log statement found - consider removing in production
```

### 559. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2538 - Console.log statement found - consider removing in production
```

### 560. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2540 - Console.log statement found - consider removing in production
```

### 561. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2546 - Console.log statement found - consider removing in production
```

### 562. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2547 - Console.log statement found - consider removing in production
```

### 563. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2566 - Missing semicolon
```

### 564. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2574 - Console.log statement found - consider removing in production
```

### 565. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2578 - Console.log statement found - consider removing in production
```

### 566. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2580 - Console.log statement found - consider removing in production
```

### 567. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2583 - Console.log statement found - consider removing in production
```

### 568. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2584 - Console.log statement found - consider removing in production
```

### 569. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2585 - Console.log statement found - consider removing in production
```

### 570. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2586 - Console.log statement found - consider removing in production
```

### 571. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2587 - Console.log statement found - consider removing in production
```

### 572. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2590 - Console.log statement found - consider removing in production
```

### 573. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2592 - Console.log statement found - consider removing in production
```

### 574. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2597 - Console.log statement found - consider removing in production
```

### 575. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2599 - Console.log statement found - consider removing in production
```

### 576. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2604 - Console.log statement found - consider removing in production
```

### 577. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2614 - Console.log statement found - consider removing in production
```

### 578. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2628 - Console.log statement found - consider removing in production
```

### 579. [PROBLEM] 2025-07-02T19:56:42.560Z

```
[WARNING] scripts\build.js:2629 - Console.log statement found - consider removing in production
```

### 580. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:2630 - Console.log statement found - consider removing in production
```

### 581. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:2631 - Console.log statement found - consider removing in production
```

### 582. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:2632 - Console.log statement found - consider removing in production
```

### 583. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:2633 - Console.log statement found - consider removing in production
```

### 584. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:2634 - Console.log statement found - consider removing in production
```

### 585. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:2638 - Console.log statement found - consider removing in production
```

### 586. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:2639 - Console.log statement found - consider removing in production
```

### 587. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:2640 - Console.log statement found - consider removing in production
```

### 588. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:2641 - Console.log statement found - consider removing in production
```

### 589. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:2642 - Console.log statement found - consider removing in production
```

### 590. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:2643 - Console.log statement found - consider removing in production
```

### 591. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:2644 - Console.log statement found - consider removing in production
```

### 592. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:2645 - Console.log statement found - consider removing in production
```

### 593. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:2665 - Console.log statement found - consider removing in production
```

### 594. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:2682 - Console.log statement found - consider removing in production
```

### 595. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:2720 - Missing semicolon
```

### 596. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:2776 - Console.log statement found - consider removing in production
```

### 597. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:2829 - Missing semicolon
```

### 598. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:2858 - Missing semicolon
```

### 599. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:2895 - Missing semicolon
```

### 600. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:2907 - Missing semicolon
```

### 601. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:2935 - Missing semicolon
```

### 602. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:2947 - Missing semicolon
```

### 603. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:2973 - Console.log statement found - consider removing in production
```

### 604. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3025 - Missing semicolon
```

### 605. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3029 - Missing semicolon
```

### 606. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3042 - Missing semicolon
```

### 607. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3051 - Missing semicolon
```

### 608. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3060 - Missing semicolon
```

### 609. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3069 - Missing semicolon
```

### 610. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3090 - Missing semicolon
```

### 611. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3103 - Missing semicolon
```

### 612. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3116 - Missing semicolon
```

### 613. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3129 - Missing semicolon
```

### 614. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3156 - Missing semicolon
```

### 615. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3165 - Missing semicolon
```

### 616. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3174 - Missing semicolon
```

### 617. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3183 - Missing semicolon
```

### 618. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3192 - Missing semicolon
```

### 619. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3285 - Missing semicolon
```

### 620. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3289 - Missing semicolon
```

### 621. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3299 - Missing semicolon
```

### 622. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3309 - Missing semicolon
```

### 623. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3328 - Missing semicolon
```

### 624. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3353 - Missing semicolon
```

### 625. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3362 - Missing semicolon
```

### 626. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3371 - Missing semicolon
```

### 627. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3380 - Missing semicolon
```

### 628. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3389 - Missing semicolon
```

### 629. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3398 - Missing semicolon
```

### 630. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3421 - Missing semicolon
```

### 631. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3434 - Missing semicolon
```

### 632. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3447 - Missing semicolon
```

### 633. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3456 - Missing semicolon
```

### 634. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3465 - Missing semicolon
```

### 635. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3474 - Missing semicolon
```

### 636. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3504 - Console.log statement found - consider removing in production
```

### 637. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3531 - Console.log statement found - consider removing in production
```

### 638. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3533 - Console.log statement found - consider removing in production
```

### 639. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3535 - Console.log statement found - consider removing in production
```

### 640. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3563 - Console.log statement found - consider removing in production
```

### 641. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3712 - Console.log statement found - consider removing in production
```

### 642. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3713 - Console.log statement found - consider removing in production
```

### 643. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3714 - Console.log statement found - consider removing in production
```

### 644. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3720 - Console.log statement found - consider removing in production
```

### 645. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3721 - Console.log statement found - consider removing in production
```

### 646. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3722 - Console.log statement found - consider removing in production
```

### 647. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3724 - Missing semicolon
```

### 648. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3734 - Missing semicolon
```

### 649. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3739 - Console.log statement found - consider removing in production
```

### 650. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3743 - Console.log statement found - consider removing in production
```

### 651. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3747 - Missing semicolon
```

### 652. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3751 - Console.log statement found - consider removing in production
```

### 653. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3757 - Missing semicolon
```

### 654. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3758 - Missing semicolon
```

### 655. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3761 - Console.log statement found - consider removing in production
```

### 656. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3765 - Console.log statement found - consider removing in production
```

### 657. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3768 - Console.log statement found - consider removing in production
```

### 658. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3781 - Console.log statement found - consider removing in production
```

### 659. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3793 - Console.log statement found - consider removing in production
```

### 660. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3796 - Missing semicolon
```

### 661. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3799 - Console.log statement found - consider removing in production
```

### 662. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3802 - Console.log statement found - consider removing in production
```

### 663. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3806 - Console.log statement found - consider removing in production
```

### 664. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3807 - Missing semicolon
```

### 665. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3813 - Console.log statement found - consider removing in production
```

### 666. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3815 - Console.log statement found - consider removing in production
```

### 667. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3819 - Console.log statement found - consider removing in production
```

### 668. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3823 - Missing semicolon
```

### 669. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3831 - Console.log statement found - consider removing in production
```

### 670. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3835 - Console.log statement found - consider removing in production
```

### 671. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3841 - Console.log statement found - consider removing in production
```

### 672. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3846 - Console.log statement found - consider removing in production
```

### 673. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3849 - Console.log statement found - consider removing in production
```

### 674. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3851 - Console.log statement found - consider removing in production
```

### 675. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3855 - Console.log statement found - consider removing in production
```

### 676. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3856 - Console.log statement found - consider removing in production
```

### 677. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3857 - Console.log statement found - consider removing in production
```

### 678. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3859 - Console.log statement found - consider removing in production
```

### 679. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3868 - Console.log statement found - consider removing in production
```

### 680. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3873 - Console.log statement found - consider removing in production
```

### 681. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3874 - Console.log statement found - consider removing in production
```

### 682. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3875 - Console.log statement found - consider removing in production
```

### 683. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3876 - Console.log statement found - consider removing in production
```

### 684. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3890 - Console.log statement found - consider removing in production
```

### 685. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3892 - Console.log statement found - consider removing in production
```

### 686. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3902 - Console.log statement found - consider removing in production
```

### 687. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3905 - Console.log statement found - consider removing in production
```

### 688. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3908 - Console.log statement found - consider removing in production
```

### 689. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3909 - Console.log statement found - consider removing in production
```

### 690. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3916 - Console.log statement found - consider removing in production
```

### 691. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3922 - Console.log statement found - consider removing in production
```

### 692. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3923 - Console.log statement found - consider removing in production
```

### 693. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3924 - Console.log statement found - consider removing in production
```

### 694. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3927 - Console.log statement found - consider removing in production
```

### 695. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3929 - Console.log statement found - consider removing in production
```

### 696. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3931 - Console.log statement found - consider removing in production
```

### 697. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3938 - Console.log statement found - consider removing in production
```

### 698. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3940 - Console.log statement found - consider removing in production
```

### 699. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3945 - Console.log statement found - consider removing in production
```

### 700. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3946 - Console.log statement found - consider removing in production
```

### 701. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3947 - Console.log statement found - consider removing in production
```

### 702. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3948 - Console.log statement found - consider removing in production
```

### 703. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3949 - Console.log statement found - consider removing in production
```

### 704. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3954 - Console.log statement found - consider removing in production
```

### 705. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3955 - Console.log statement found - consider removing in production
```

### 706. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3986 - Console.log statement found - consider removing in production
```

### 707. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3989 - Console.log statement found - consider removing in production
```

### 708. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3990 - Console.log statement found - consider removing in production
```

### 709. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3991 - Console.log statement found - consider removing in production
```

### 710. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3992 - Console.log statement found - consider removing in production
```

### 711. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3993 - Console.log statement found - consider removing in production
```

### 712. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3994 - Console.log statement found - consider removing in production
```

### 713. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3997 - Console.log statement found - consider removing in production
```

### 714. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3998 - Console.log statement found - consider removing in production
```

### 715. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:3999 - Console.log statement found - consider removing in production
```

### 716. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4000 - Console.log statement found - consider removing in production
```

### 717. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4001 - Console.log statement found - consider removing in production
```

### 718. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4002 - Console.log statement found - consider removing in production
```

### 719. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4003 - Console.log statement found - consider removing in production
```

### 720. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4005 - Console.log statement found - consider removing in production
```

### 721. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4007 - Console.log statement found - consider removing in production
```

### 722. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4010 - Console.log statement found - consider removing in production
```

### 723. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4011 - Console.log statement found - consider removing in production
```

### 724. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4012 - Console.log statement found - consider removing in production
```

### 725. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4013 - Console.log statement found - consider removing in production
```

### 726. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4015 - Console.log statement found - consider removing in production
```

### 727. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4016 - Console.log statement found - consider removing in production
```

### 728. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4017 - Console.log statement found - consider removing in production
```

### 729. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4018 - Console.log statement found - consider removing in production
```

### 730. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4020 - Console.log statement found - consider removing in production
```

### 731. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4021 - Console.log statement found - consider removing in production
```

### 732. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4022 - Console.log statement found - consider removing in production
```

### 733. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4023 - Console.log statement found - consider removing in production
```

### 734. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4024 - Console.log statement found - consider removing in production
```

### 735. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4025 - Console.log statement found - consider removing in production
```

### 736. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4027 - Console.log statement found - consider removing in production
```

### 737. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4028 - Console.log statement found - consider removing in production
```

### 738. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4029 - Console.log statement found - consider removing in production
```

### 739. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4030 - Console.log statement found - consider removing in production
```

### 740. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4033 - Console.log statement found - consider removing in production
```

### 741. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4034 - Console.log statement found - consider removing in production
```

### 742. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4035 - Console.log statement found - consider removing in production
```

### 743. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4046 - Console.log statement found - consider removing in production
```

### 744. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4050 - Console.log statement found - consider removing in production
```

### 745. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4051 - Console.log statement found - consider removing in production
```

### 746. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4054 - Console.log statement found - consider removing in production
```

### 747. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4055 - Console.log statement found - consider removing in production
```

### 748. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4064 - Console.log statement found - consider removing in production
```

### 749. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4065 - Console.log statement found - consider removing in production
```

### 750. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4090 - Console.log statement found - consider removing in production
```

### 751. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4126 - Missing semicolon
```

### 752. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4146 - Missing semicolon
```

### 753. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4174 - Missing semicolon
```

### 754. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4216 - Missing semicolon
```

### 755. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4259 - Missing semicolon
```

### 756. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4301 - Console.log statement found - consider removing in production
```

### 757. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4306 - Console.log statement found - consider removing in production
```

### 758. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4311 - Console.log statement found - consider removing in production
```

### 759. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4317 - Missing semicolon
```

### 760. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4320 - Console.log statement found - consider removing in production
```

### 761. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4335 - Console.log statement found - consider removing in production
```

### 762. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4338 - Console.log statement found - consider removing in production
```

### 763. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4342 - Console.log statement found - consider removing in production
```

### 764. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4347 - Console.log statement found - consider removing in production
```

### 765. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4351 - Console.log statement found - consider removing in production
```

### 766. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4352 - Console.log statement found - consider removing in production
```

### 767. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4358 - Console.log statement found - consider removing in production
```

### 768. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4359 - Console.log statement found - consider removing in production
```

### 769. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4367 - Console.log statement found - consider removing in production
```

### 770. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4368 - Console.log statement found - consider removing in production
```

### 771. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4378 - Console.log statement found - consider removing in production
```

### 772. [PROBLEM] 2025-07-02T19:56:42.561Z

```
[WARNING] scripts\build.js:4385 - Console.log statement found - consider removing in production
```

### 773. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\build.js:4387 - Console.log statement found - consider removing in production
```

### 774. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\build.js:4453 - Console.log statement found - consider removing in production
```

### 775. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\build.js:4454 - Console.log statement found - consider removing in production
```

### 776. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\build.js:4459 - Console.log statement found - consider removing in production
```

### 777. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\build.js:4461 - Console.log statement found - consider removing in production
```

### 778. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\build.js:4464 - Console.log statement found - consider removing in production
```

### 779. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\build.js:4468 - Console.log statement found - consider removing in production
```

### 780. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\direct-checker-test.js:9 - Console.log statement found - consider removing in production
```

### 781. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\direct-checker-test.js:15 - Console.log statement found - consider removing in production
```

### 782. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\direct-checker-test.js:16 - Console.log statement found - consider removing in production
```

### 783. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\direct-checker-test.js:19 - Console.log statement found - consider removing in production
```

### 784. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\direct-checker-test.js:22 - Console.log statement found - consider removing in production
```

### 785. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\direct-checker-test.js:24 - Console.log statement found - consider removing in production
```

### 786. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\direct-checker-test.js:25 - Console.log statement found - consider removing in production
```

### 787. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\direct-checker-test.js:28 - Console.log statement found - consider removing in production
```

### 788. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\direct-checker-test.js:32 - Console.log statement found - consider removing in production
```

### 789. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\direct-checker-test.js:37 - Missing semicolon
```

### 790. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\direct-checker-test.js:61 - Missing semicolon
```

### 791. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\direct-checker-test.js:84 - Console.log statement found - consider removing in production
```

### 792. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\direct-checker-test.js:86 - Console.log statement found - consider removing in production
```

### 793. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\direct-checker-test.js:87 - Console.log statement found - consider removing in production
```

### 794. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\direct-checker-test.js:88 - Console.log statement found - consider removing in production
```

### 795. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\direct-checker-test.js:91 - Console.log statement found - consider removing in production
```

### 796. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\direct-checker-test.js:96 - Console.log statement found - consider removing in production
```

### 797. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\direct-checker-test.js:99 - Console.log statement found - consider removing in production
```

### 798. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\direct-checker-test.js:100 - Console.log statement found - consider removing in production
```

### 799. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\direct-checker-test.js:102 - Console.log statement found - consider removing in production
```

### 800. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\direct-checker-test.js:105 - Console.log statement found - consider removing in production
```

### 801. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\log-manager.js:45 - Missing semicolon
```

### 802. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\log-manager.js:61 - Console.log statement found - consider removing in production
```

### 803. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\log-manager.js:68 - Console.log statement found - consider removing in production
```

### 804. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\log-manager.js:83 - Console.log statement found - consider removing in production
```

### 805. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\log-manager.js:91 - Missing semicolon
```

### 806. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\log-manager.js:116 - Console.log statement found - consider removing in production
```

### 807. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\log-manager.js:144 - Missing semicolon
```

### 808. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\log-manager.js:158 - Missing semicolon
```

### 809. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\log-manager.js:174 - Console.log statement found - consider removing in production
```

### 810. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\log-manager.js:177 - Missing semicolon
```

### 811. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\log-manager.js:185 - Console.log statement found - consider removing in production
```

### 812. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\log-manager.js:204 - Console.log statement found - consider removing in production
```

### 813. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\log-manager.js:209 - Console.log statement found - consider removing in production
```

### 814. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\log-manager.js:228 - Missing semicolon
```

### 815. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\log-manager.js:235 - Console.log statement found - consider removing in production
```

### 816. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\log-manager.js:264 - Console.log statement found - consider removing in production
```

### 817. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\log-manager.js:265 - Console.log statement found - consider removing in production
```

### 818. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\log-manager.js:266 - Console.log statement found - consider removing in production
```

### 819. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\log-manager.js:267 - Console.log statement found - consider removing in production
```

### 820. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\simplified-checker.js:8 - Console.log statement found - consider removing in production
```

### 821. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\simplified-checker.js:15 - Console.log statement found - consider removing in production
```

### 822. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\simplified-checker.js:20 - Console.log statement found - consider removing in production
```

### 823. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\simplified-checker.js:25 - Missing semicolon
```

### 824. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\simplified-checker.js:49 - Missing semicolon
```

### 825. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\simplified-checker.js:72 - Console.log statement found - consider removing in production
```

### 826. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\simplified-checker.js:74 - Console.log statement found - consider removing in production
```

### 827. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\simplified-checker.js:75 - Console.log statement found - consider removing in production
```

### 828. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\simplified-checker.js:76 - Console.log statement found - consider removing in production
```

### 829. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\simplified-checker.js:80 - Console.log statement found - consider removing in production
```

### 830. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\simplified-checker.js:84 - Console.log statement found - consider removing in production
```

### 831. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\simplified-checker.js:87 - Console.log statement found - consider removing in production
```

### 832. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\simplified-checker.js:88 - Console.log statement found - consider removing in production
```

### 833. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\simplified-checker.js:90 - Console.log statement found - consider removing in production
```

### 834. [PROBLEM] 2025-07-02T19:56:42.562Z

```
[WARNING] scripts\simplified-checker.js:93 - Console.log statement found - consider removing in production
```

### 835. [PROBLEM] 2025-07-02T19:56:42.563Z

```
[WARNING] scripts\test-absurd-check.js:10 - Console.log statement found - consider removing in production
```

### 836. [PROBLEM] 2025-07-02T19:56:42.563Z

```
[WARNING] scripts\test-absurd-check.js:11 - Console.log statement found - consider removing in production
```

### 837. [PROBLEM] 2025-07-02T19:56:42.563Z

```
[WARNING] scripts\test-absurd-check.js:12 - Console.log statement found - consider removing in production
```

### 838. [PROBLEM] 2025-07-02T19:56:42.563Z

```
[WARNING] scripts\test-absurd-check.js:15 - Missing semicolon
```

### 839. [PROBLEM] 2025-07-02T19:56:42.563Z

```
[WARNING] scripts\test-absurd-check.js:24 - Console.log statement found - consider removing in production
```

### 840. [PROBLEM] 2025-07-02T19:56:42.563Z

```
[WARNING] scripts\test-absurd-check.js:27 - Console.log statement found - consider removing in production
```

### 841. [PROBLEM] 2025-07-02T19:56:42.563Z

```
[WARNING] scripts\test-absurd-check.js:31 - Console.log statement found - consider removing in production
```

### 842. [PROBLEM] 2025-07-02T19:56:42.563Z

```
[WARNING] scripts\test-absurd-check.js:33 - Console.log statement found - consider removing in production
```

### 843. [PROBLEM] 2025-07-02T19:56:42.563Z

```
[WARNING] scripts\test-absurd-check.js:40 - Console.log statement found - consider removing in production
```

### 844. [PROBLEM] 2025-07-02T19:56:42.563Z

```
[WARNING] scripts\test-absurd-check.js:43 - Console.log statement found - consider removing in production
```

### 845. [PROBLEM] 2025-07-02T19:56:42.563Z

```
[WARNING] scripts\test-absurd-check.js:48 - Missing semicolon
```

### 846. [PROBLEM] 2025-07-02T19:56:42.563Z

```
[WARNING] scripts\test-absurd-check.js:56 - Console.log statement found - consider removing in production
```

### 847. [PROBLEM] 2025-07-02T19:56:42.563Z

```
[WARNING] scripts\test-absurd-check.js:59 - Console.log statement found - consider removing in production
```

### 848. [PROBLEM] 2025-07-02T19:56:42.563Z

```
[WARNING] scripts\test-absurd-check.js:63 - Console.log statement found - consider removing in production
```

### 849. [PROBLEM] 2025-07-02T19:56:42.563Z

```
[WARNING] scripts\test-absurd-check.js:65 - Console.log statement found - consider removing in production
```

### 850. [PROBLEM] 2025-07-02T19:56:42.563Z

```
[WARNING] scripts\test-absurd-check.js:68 - Console.log statement found - consider removing in production
```

### 851. [PROBLEM] 2025-07-02T19:56:42.563Z

```
[WARNING] scripts\test-absurd-check.js:72 - Console.log statement found - consider removing in production
```

### 852. [PROBLEM] 2025-07-02T19:56:42.563Z

```
[WARNING] style.css:170 - Missing semicolon in CSS property
```

### 853. [INFO] 2025-07-02T19:56:42.563Z

```
✅ Problems-Scan abgeschlossen. 796 Problem(e) gefunden.
```

### 854. [LOG] 2025-07-02T19:56:42.563Z

```
📄 Gefunden: 9 Markdown-Dateien

```

### 855. [LOG] 2025-07-02T19:56:42.564Z

```

📋 Verarbeite: bindungssehnsucht-normal.md
```

### 856. [LOG] 2025-07-02T19:56:42.567Z

```
   🧠 Running advanced checklist validation for bindungssehnsucht-normal.md...
```

### 857. [LOG] 2025-07-02T19:56:42.568Z

```
🎯 Analyzing: bindungssehnsucht-normal.md
```

### 858. [LOG] 2025-07-02T19:56:42.568Z

```
   Detected theme: BINDUNG_KERN
```

### 859. [LOG] 2025-07-02T19:56:42.569Z

```
   Selected checklists: PASSIVITÄT, BESITZ
```

### 860. [LOG] 2025-07-02T19:56:42.573Z

```
   📊 Checklist Score: 0%
```

### 861. [LOG] 2025-07-02T19:56:42.573Z

```
      • PASSIVITÄT: 0%
```

### 862. [LOG] 2025-07-02T19:56:42.573Z

```
      • BESITZ: 0%
```

### 863. [LOG] 2025-07-02T19:56:42.573Z

```
   🎯 Intentionen-Analyse...
```

### 864. [LOG] 2025-07-02T19:56:42.576Z

```
   ✅ Intention-Score: 60% - EXCELLENT!
```

### 865. [LOG] 2025-07-02T19:56:42.576Z

```
   📊 Code-Quality Check...
```

### 866. [LOG] 2025-07-02T19:56:42.593Z

```
   ✅ Code Quality OK
```

### 867. [LOG] 2025-07-02T19:56:42.593Z

```
   🔨 HTML generieren...
```

### 868. [LOG] 2025-07-02T19:56:42.594Z

```
   ✅ HTML erstellt: bindungssehnsucht-normal.html
```

### 869. [LOG] 2025-07-02T19:56:42.594Z

```

📋 Verarbeite: das-erste-mal.md
```

### 870. [LOG] 2025-07-02T19:56:42.595Z

```
   🧠 Running advanced checklist validation for das-erste-mal.md...
```

### 871. [LOG] 2025-07-02T19:56:42.596Z

```
🎯 Analyzing: das-erste-mal.md
```

### 872. [LOG] 2025-07-02T19:56:42.596Z

```
   Detected theme: BINDUNG_KERN
```

### 873. [LOG] 2025-07-02T19:56:42.596Z

```
   Selected checklists: PASSIVITÄT, BESITZ
```

### 874. [LOG] 2025-07-02T19:56:42.599Z

```
   📊 Checklist Score: 0%
```

### 875. [LOG] 2025-07-02T19:56:42.599Z

```
      • PASSIVITÄT: 0%
```

### 876. [LOG] 2025-07-02T19:56:42.599Z

```
      • BESITZ: 0%
```

### 877. [LOG] 2025-07-02T19:56:42.599Z

```
   🎯 Intentionen-Analyse...
```

### 878. [LOG] 2025-07-02T19:56:42.600Z

```
   ✅ Intention-Score: 60% - EXCELLENT!
```

### 879. [LOG] 2025-07-02T19:56:42.600Z

```
   📊 Code-Quality Check...
```

### 880. [LOG] 2025-07-02T19:56:42.601Z

```
   ✅ Code Quality OK
```

### 881. [LOG] 2025-07-02T19:56:42.601Z

```
   🔨 HTML generieren...
```

### 882. [LOG] 2025-07-02T19:56:42.602Z

```
   ✅ HTML erstellt: das-erste-mal.html
```

### 883. [LOG] 2025-07-02T19:56:42.602Z

```

📋 Verarbeite: der-sichere-hafen.md
```

### 884. [LOG] 2025-07-02T19:56:42.603Z

```
   🧠 Running advanced checklist validation for der-sichere-hafen.md...
```

### 885. [LOG] 2025-07-02T19:56:42.603Z

```
🎯 Analyzing: der-sichere-hafen.md
```

### 886. [LOG] 2025-07-02T19:56:42.603Z

```
   Detected theme: BINDUNG_KERN
```

### 887. [LOG] 2025-07-02T19:56:42.604Z

```
   Selected checklists: PASSIVITÄT, BESITZ
```

### 888. [LOG] 2025-07-02T19:56:42.606Z

```
   📊 Checklist Score: 0%
```

### 889. [LOG] 2025-07-02T19:56:42.606Z

```
      • PASSIVITÄT: 0%
```

### 890. [LOG] 2025-07-02T19:56:42.606Z

```
      • BESITZ: 0%
```

### 891. [LOG] 2025-07-02T19:56:42.606Z

```
   🎯 Intentionen-Analyse...
```

### 892. [LOG] 2025-07-02T19:56:42.607Z

```
   ❌ Intention-Score: 45% (Min: 60%)
```

### 893. [LOG] 2025-07-02T19:56:42.608Z

```
   📊 Code-Quality Check...
```

### 894. [LOG] 2025-07-02T19:56:42.608Z

```
   ✅ Code Quality OK
```

### 895. [LOG] 2025-07-02T19:56:42.608Z

```
   🔨 HTML generieren...
```

### 896. [LOG] 2025-07-02T19:56:42.609Z

```
   ✅ HTML erstellt: der-sichere-hafen.html
```

### 897. [LOG] 2025-07-02T19:56:42.609Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 898. [LOG] 2025-07-02T19:56:42.609Z

```

📋 Verarbeite: emotionale-leere.md
```

### 899. [LOG] 2025-07-02T19:56:42.610Z

```
   🧠 Running advanced checklist validation for emotionale-leere.md...
```

### 900. [LOG] 2025-07-02T19:56:42.611Z

```
🎯 Analyzing: emotionale-leere.md
```

### 901. [LOG] 2025-07-02T19:56:42.611Z

```
   Detected theme: BESITZ
```

### 902. [LOG] 2025-07-02T19:56:42.611Z

```
   Selected checklists: PASSIVITÄT
```

### 903. [LOG] 2025-07-02T19:56:42.613Z

```
   📊 Checklist Score: 0%
```

### 904. [LOG] 2025-07-02T19:56:42.613Z

```
      • PASSIVITÄT: 0%
```

### 905. [LOG] 2025-07-02T19:56:42.613Z

```
   🎯 Intentionen-Analyse...
```

### 906. [LOG] 2025-07-02T19:56:42.614Z

```
   ❌ Intention-Score: 16% (Min: 60%)
```

### 907. [LOG] 2025-07-02T19:56:42.614Z

```
   📊 Code-Quality Check...
```

### 908. [LOG] 2025-07-02T19:56:42.616Z

```
   ✅ Code Quality OK
```

### 909. [LOG] 2025-07-02T19:56:42.616Z

```
   🔨 HTML generieren...
```

### 910. [LOG] 2025-07-02T19:56:42.617Z

```
   ✅ HTML erstellt: emotionale-leere.html
```

### 911. [LOG] 2025-07-02T19:56:42.617Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 912. [LOG] 2025-07-02T19:56:42.618Z

```

📋 Verarbeite: erschoepft-vom-stark-sein.md
```

### 913. [LOG] 2025-07-02T19:56:42.618Z

```
   🧠 Running advanced checklist validation for erschoepft-vom-stark-sein.md...
```

### 914. [LOG] 2025-07-02T19:56:42.619Z

```
🎯 Analyzing: erschoepft-vom-stark-sein.md
```

### 915. [LOG] 2025-07-02T19:56:42.619Z

```
   Detected theme: BESITZ
```

### 916. [LOG] 2025-07-02T19:56:42.619Z

```
   Selected checklists: PASSIVITÄT
```

### 917. [LOG] 2025-07-02T19:56:42.620Z

```
   📊 Checklist Score: 0%
```

### 918. [LOG] 2025-07-02T19:56:42.620Z

```
      • PASSIVITÄT: 0%
```

### 919. [LOG] 2025-07-02T19:56:42.620Z

```
   🎯 Intentionen-Analyse...
```

### 920. [LOG] 2025-07-02T19:56:42.620Z

```
   ❌ Intention-Score: 22% (Min: 60%)
```

### 921. [LOG] 2025-07-02T19:56:42.621Z

```
   📊 Code-Quality Check...
```

### 922. [LOG] 2025-07-02T19:56:42.621Z

```
   ✅ Code Quality OK
```

### 923. [LOG] 2025-07-02T19:56:42.621Z

```
   🔨 HTML generieren...
```

### 924. [LOG] 2025-07-02T19:56:42.622Z

```
   ✅ HTML erstellt: erschoepft-vom-stark-sein.html
```

### 925. [LOG] 2025-07-02T19:56:42.622Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 926. [LOG] 2025-07-02T19:56:42.622Z

```

📋 Verarbeite: ich-will-einfach-gehalten-werden.md
```

### 927. [LOG] 2025-07-02T19:56:42.623Z

```
   🧠 Running advanced checklist validation for ich-will-einfach-gehalten-werden.md...
```

### 928. [LOG] 2025-07-02T19:56:42.624Z

```
🎯 Analyzing: ich-will-einfach-gehalten-werden.md
```

### 929. [LOG] 2025-07-02T19:56:42.624Z

```
   Detected theme: BINDUNG_KERN
```

### 930. [LOG] 2025-07-02T19:56:42.624Z

```
   Selected checklists: PASSIVITÄT, BESITZ
```

### 931. [LOG] 2025-07-02T19:56:42.627Z

```
   📊 Checklist Score: 5%
```

### 932. [LOG] 2025-07-02T19:56:42.627Z

```
      • PASSIVITÄT: 8%
```

### 933. [LOG] 2025-07-02T19:56:42.627Z

```
      • BESITZ: 0%
```

### 934. [LOG] 2025-07-02T19:56:42.627Z

```
   🎯 Intentionen-Analyse...
```

### 935. [LOG] 2025-07-02T19:56:42.628Z

```
   ❌ Intention-Score: 49% (Min: 60%)
```

### 936. [LOG] 2025-07-02T19:56:42.628Z

```
   📊 Code-Quality Check...
```

### 937. [LOG] 2025-07-02T19:56:42.629Z

```
   ✅ Code Quality OK
```

### 938. [LOG] 2025-07-02T19:56:42.629Z

```
   🔨 HTML generieren...
```

### 939. [LOG] 2025-07-02T19:56:42.630Z

```
   ✅ HTML erstellt: ich-will-einfach-gehalten-werden.html
```

### 940. [LOG] 2025-07-02T19:56:42.630Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 941. [LOG] 2025-07-02T19:56:42.630Z

```

📋 Verarbeite: kontrolle-abgeben.md
```

### 942. [LOG] 2025-07-02T19:56:42.631Z

```
   🧠 Running advanced checklist validation for kontrolle-abgeben.md...
```

### 943. [LOG] 2025-07-02T19:56:42.631Z

```
🎯 Analyzing: kontrolle-abgeben.md
```

### 944. [LOG] 2025-07-02T19:56:42.632Z

```
   Detected theme: PASSIVITÄT
```

### 945. [LOG] 2025-07-02T19:56:42.632Z

```
   Selected checklists: PASSIVITÄT, BESITZ
```

### 946. [LOG] 2025-07-02T19:56:42.633Z

```
   📊 Checklist Score: 0%
```

### 947. [LOG] 2025-07-02T19:56:42.633Z

```
      • PASSIVITÄT: 0%
```

### 948. [LOG] 2025-07-02T19:56:42.634Z

```
      • BESITZ: 0%
```

### 949. [LOG] 2025-07-02T19:56:42.634Z

```
   🎯 Intentionen-Analyse...
```

### 950. [LOG] 2025-07-02T19:56:42.634Z

```
   ❌ Intention-Score: 18% (Min: 60%)
```

### 951. [LOG] 2025-07-02T19:56:42.634Z

```
   📊 Code-Quality Check...
```

### 952. [LOG] 2025-07-02T19:56:42.635Z

```
   ✅ Code Quality OK
```

### 953. [LOG] 2025-07-02T19:56:42.635Z

```
   🔨 HTML generieren...
```

### 954. [LOG] 2025-07-02T19:56:42.636Z

```
   ✅ HTML erstellt: kontrolle-abgeben.html
```

### 955. [LOG] 2025-07-02T19:56:42.636Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 956. [LOG] 2025-07-02T19:56:42.636Z

```

📋 Verarbeite: sehnsucht-nach-hingabe.md
```

### 957. [LOG] 2025-07-02T19:56:42.637Z

```
   🧠 Running advanced checklist validation for sehnsucht-nach-hingabe.md...
```

### 958. [LOG] 2025-07-02T19:56:42.637Z

```
🎯 Analyzing: sehnsucht-nach-hingabe.md
```

### 959. [LOG] 2025-07-02T19:56:42.638Z

```
   Detected theme: BINDUNG_KERN
```

### 960. [LOG] 2025-07-02T19:56:42.638Z

```
   Selected checklists: PASSIVITÄT, BESITZ
```

### 961. [LOG] 2025-07-02T19:56:42.640Z

```
   📊 Checklist Score: 0%
```

### 962. [LOG] 2025-07-02T19:56:42.640Z

```
      • PASSIVITÄT: 0%
```

### 963. [LOG] 2025-07-02T19:56:42.640Z

```
      • BESITZ: 0%
```

### 964. [LOG] 2025-07-02T19:56:42.641Z

```
   🎯 Intentionen-Analyse...
```

### 965. [LOG] 2025-07-02T19:56:42.641Z

```
   ❌ Intention-Score: 18% (Min: 60%)
```

### 966. [LOG] 2025-07-02T19:56:42.641Z

```
   📊 Code-Quality Check...
```

### 967. [LOG] 2025-07-02T19:56:42.642Z

```
   ✅ Code Quality OK
```

### 968. [LOG] 2025-07-02T19:56:42.642Z

```
   🔨 HTML generieren...
```

### 969. [LOG] 2025-07-02T19:56:42.643Z

```
   ✅ HTML erstellt: sehnsucht-nach-hingabe.html
```

### 970. [LOG] 2025-07-02T19:56:42.643Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 971. [LOG] 2025-07-02T19:56:42.643Z

```

📋 Verarbeite: zu-viel-liebe-zu-wenig-liebe.md
```

### 972. [LOG] 2025-07-02T19:56:42.645Z

```
   🧠 Running advanced checklist validation for zu-viel-liebe-zu-wenig-liebe.md...
```

### 973. [LOG] 2025-07-02T19:56:42.646Z

```
🎯 Analyzing: zu-viel-liebe-zu-wenig-liebe.md
```

### 974. [LOG] 2025-07-02T19:56:42.646Z

```
   Detected theme: BESITZ
```

### 975. [LOG] 2025-07-02T19:56:42.647Z

```
   Selected checklists: PASSIVITÄT
```

### 976. [LOG] 2025-07-02T19:56:42.649Z

```
   📊 Checklist Score: 8%
```

### 977. [LOG] 2025-07-02T19:56:42.649Z

```
      • PASSIVITÄT: 8%
```

### 978. [LOG] 2025-07-02T19:56:42.649Z

```
   🎯 Intentionen-Analyse...
```

### 979. [LOG] 2025-07-02T19:56:42.651Z

```
   ❌ Intention-Score: 14% (Min: 60%)
```

### 980. [LOG] 2025-07-02T19:56:42.651Z

```
   📊 Code-Quality Check...
```

### 981. [LOG] 2025-07-02T19:56:42.653Z

```
   ✅ Code Quality OK
```

### 982. [LOG] 2025-07-02T19:56:42.653Z

```
   🔨 HTML generieren...
```

### 983. [LOG] 2025-07-02T19:56:42.654Z

```
   ✅ HTML erstellt: zu-viel-liebe-zu-wenig-liebe.html
```

### 984. [LOG] 2025-07-02T19:56:42.654Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 985. [LOG] 2025-07-02T19:56:42.654Z

```

🔨 Generiere Blog-Index...
```

### 986. [LOG] 2025-07-02T19:56:42.657Z

```
   ✅ Blog-Index erstellt: blog/index.html
```

### 987. [LOG] 2025-07-02T19:56:42.657Z

```

════════════════════════════════════════════════════════════════════════════════
```

### 988. [LOG] 2025-07-02T19:56:42.657Z

```
📊 BUILD REPORT
```

### 989. [LOG] 2025-07-02T19:56:42.657Z

```
════════════════════════════════════════════════════════════════════════════════
```

### 990. [LOG] 2025-07-02T19:56:42.658Z

```

📄 Verarbeitete Dateien: 9/9
```

### 991. [LOG] 2025-07-02T19:56:42.658Z

```

🎯 INTENTION-OPTIMIERUNG ERFORDERLICH: 7 Dateien

```

### 992. [LOG] 2025-07-02T19:56:42.658Z

```
🤖 AUTOMATISCH GENERIERTER KI-PROMPT:
```

### 993. [LOG] 2025-07-02T19:56:42.658Z

```
────────────────────────────────────────────────────────────
```

### 994. [LOG] 2025-07-02T19:56:42.658Z

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

### 995. [LOG] 2025-07-02T19:56:42.659Z

```
────────────────────────────────────────────────────────────
```

### 996. [LOG] 2025-07-02T19:56:42.659Z

```

📋 Weitere 6 Dateien benötigen Optimierung:
```

### 997. [LOG] 2025-07-02T19:56:42.659Z

```
   2. emotionale-leere.md (Score: 16%)
```

### 998. [LOG] 2025-07-02T19:56:42.660Z

```
   3. erschoepft-vom-stark-sein.md (Score: 22%)
```

### 999. [LOG] 2025-07-02T19:56:42.660Z

```
   4. ich-will-einfach-gehalten-werden.md (Score: 49%)
```

### 1000. [LOG] 2025-07-02T19:56:42.660Z

```
   5. kontrolle-abgeben.md (Score: 18%)
```

### 1001. [LOG] 2025-07-02T19:56:42.660Z

```
   6. sehnsucht-nach-hingabe.md (Score: 18%)
```

### 1002. [LOG] 2025-07-02T19:56:42.660Z

```
   7. zu-viel-liebe-zu-wenig-liebe.md (Score: 14%)
```

### 1003. [LOG] 2025-07-02T19:56:42.660Z

```

════════════════════════════════════════════════════════════════════════════════
```

### 1004. [LOG] 2025-07-02T19:56:42.660Z

```

🧠 ADVANCED CHECKLIST VALIDATION REPORT
```

### 1005. [LOG] 2025-07-02T19:56:42.660Z

```
================================================================================
```

### 1006. [LOG] 2025-07-02T19:56:42.661Z

```
📊 Overall Checklist Performance: 1%
```

### 1007. [LOG] 2025-07-02T19:56:42.661Z

```
✅ Excellent (80%+): 0 files
```

### 1008. [LOG] 2025-07-02T19:56:42.661Z

```
⚠️  Good (60-79%): 0 files
```

### 1009. [LOG] 2025-07-02T19:56:42.661Z

```
❌ Needs Work (<60%): 9 files
```

### 1010. [LOG] 2025-07-02T19:56:42.661Z

```

🎯 FILES REQUIRING PSYCHOLOGICAL DEPTH ENHANCEMENT:
```

### 1011. [LOG] 2025-07-02T19:56:42.662Z

```
   • bindungssehnsucht-normal.md: 0%
```

### 1012. [LOG] 2025-07-02T19:56:42.662Z

```
     → Improve PASSIVITÄT theme (0%): Integriere "Führung übernehmen", "einer entscheidet", "sich führen lassen"
```

### 1013. [LOG] 2025-07-02T19:56:42.662Z

```
     → Improve BESITZ theme (0%): Verstärke "gehören", "exklusiv sein", "markiert werden"
```

### 1014. [LOG] 2025-07-02T19:56:42.662Z

```
   • das-erste-mal.md: 0%
```

### 1015. [LOG] 2025-07-02T19:56:42.662Z

```
     → Improve PASSIVITÄT theme (0%): Integriere "Führung übernehmen", "einer entscheidet", "sich führen lassen"
```

### 1016. [LOG] 2025-07-02T19:56:42.662Z

```
     → Improve BESITZ theme (0%): Verstärke "gehören", "exklusiv sein", "markiert werden"
```

### 1017. [LOG] 2025-07-02T19:56:42.662Z

```
   • der-sichere-hafen.md: 0%
```

### 1018. [LOG] 2025-07-02T19:56:42.662Z

```
     → Improve PASSIVITÄT theme (0%): Integriere "Führung übernehmen", "einer entscheidet", "sich führen lassen"
```

### 1019. [LOG] 2025-07-02T19:56:42.663Z

```
     → Improve BESITZ theme (0%): Verstärke "gehören", "exklusiv sein", "markiert werden"
```

### 1020. [LOG] 2025-07-02T19:56:42.663Z

```
   • emotionale-leere.md: 0%
```

### 1021. [LOG] 2025-07-02T19:56:42.663Z

```
     → Improve PASSIVITÄT theme (0%): Integriere "Führung übernehmen", "einer entscheidet", "sich führen lassen"
```

### 1022. [LOG] 2025-07-02T19:56:42.663Z

```
   • erschoepft-vom-stark-sein.md: 0%
```

### 1023. [LOG] 2025-07-02T19:56:42.663Z

```
     → Improve PASSIVITÄT theme (0%): Integriere "Führung übernehmen", "einer entscheidet", "sich führen lassen"
```

### 1024. [LOG] 2025-07-02T19:56:42.663Z

```
   • ich-will-einfach-gehalten-werden.md: 5%
```

### 1025. [LOG] 2025-07-02T19:56:42.663Z

```
     → Improve PASSIVITÄT theme (8%): Integriere "Führung übernehmen", "einer entscheidet", "sich führen lassen"
```

### 1026. [LOG] 2025-07-02T19:56:42.663Z

```
     → Improve BESITZ theme (0%): Verstärke "gehören", "exklusiv sein", "markiert werden"
```

### 1027. [LOG] 2025-07-02T19:56:42.663Z

```
   • kontrolle-abgeben.md: 0%
```

### 1028. [LOG] 2025-07-02T19:56:42.663Z

```
     → Improve PASSIVITÄT theme (0%): Integriere "Führung übernehmen", "einer entscheidet", "sich führen lassen"
```

### 1029. [LOG] 2025-07-02T19:56:42.664Z

```
     → Improve BESITZ theme (0%): Verstärke "gehören", "exklusiv sein", "markiert werden"
```

### 1030. [LOG] 2025-07-02T19:56:42.664Z

```
   • sehnsucht-nach-hingabe.md: 0%
```

### 1031. [LOG] 2025-07-02T19:56:42.664Z

```
     → Improve PASSIVITÄT theme (0%): Integriere "Führung übernehmen", "einer entscheidet", "sich führen lassen"
```

### 1032. [LOG] 2025-07-02T19:56:42.664Z

```
     → Improve BESITZ theme (0%): Verstärke "gehören", "exklusiv sein", "markiert werden"
```

### 1033. [LOG] 2025-07-02T19:56:42.664Z

```
   • zu-viel-liebe-zu-wenig-liebe.md: 8%
```

### 1034. [LOG] 2025-07-02T19:56:42.664Z

```
     → Improve PASSIVITÄT theme (8%): Integriere "Führung übernehmen", "einer entscheidet", "sich führen lassen"
```

### 1035. [LOG] 2025-07-02T19:56:42.664Z

```

🔄 CHECKLIST ROTATION STATUS:
```

### 1036. [LOG] 2025-07-02T19:56:42.664Z

```
   bindungssehnsucht-normal.md: checklist-passivitaet, checklist-besitz (10 unused)
```

### 1037. [LOG] 2025-07-02T19:56:42.664Z

```
   das-erste-mal.md: checklist-passivitaet, checklist-besitz (10 unused)
```

### 1038. [LOG] 2025-07-02T19:56:42.665Z

```
   der-sichere-hafen.md: checklist-passivitaet, checklist-besitz (10 unused)
```

### 1039. [LOG] 2025-07-02T19:56:42.665Z

```
   emotionale-leere.md: checklist-passivitaet (11 unused)
```

### 1040. [LOG] 2025-07-02T19:56:42.665Z

```
   erschoepft-vom-stark-sein.md: checklist-passivitaet (11 unused)
```

### 1041. [LOG] 2025-07-02T19:56:42.665Z

```
   ich-will-einfach-gehalten-werden.md: checklist-passivitaet, checklist-besitz (10 unused)
```

### 1042. [LOG] 2025-07-02T19:56:42.665Z

```
   kontrolle-abgeben.md: checklist-passivitaet, checklist-besitz (10 unused)
```

### 1043. [LOG] 2025-07-02T19:56:42.665Z

```
   sehnsucht-nach-hingabe.md: checklist-passivitaet, checklist-besitz (10 unused)
```

### 1044. [LOG] 2025-07-02T19:56:42.665Z

```
   zu-viel-liebe-zu-wenig-liebe.md: checklist-passivitaet (11 unused)
```

### 1045. [LOG] 2025-07-02T19:56:42.665Z

```

💡 NÄCHSTE SCHRITTE:
```

### 1046. [LOG] 2025-07-02T19:56:42.665Z

```
1. Kopiere den generierten KI-Prompt
```

### 1047. [LOG] 2025-07-02T19:56:42.666Z

```
2. Füge ihn in Chat ein für spezifische Optimierung
```

### 1048. [LOG] 2025-07-02T19:56:42.666Z

```
3. Führe nach Änderungen erneut "pnpm build" aus
```

### 1049. [LOG] 2025-07-02T19:56:42.666Z

```
4. System zeigt automatisch nächstes Problem
```

### 1050. [LOG] 2025-07-02T19:56:42.666Z

```

🚨 BUILD COMPLETED - CONTENT OPTIMIZATION ALERTS GENERATED!
```

### 1051. [LOG] 2025-07-02T19:56:42.666Z

```
════════════════════════════════════════════════════════════════════════════════
```

### 1052. [LOG] 2025-07-02T19:56:42.667Z

```
📋 Content-Optimization-Alert gespeichert: docs\015_build_logs\CONTENT_OPTIMIZATION_ALERT_2025-07-02.json
```

### 1053. [LOG] 2025-07-02T19:56:42.667Z

```

📋 VOLLSTÄNDIGER AUTOMATION-PLAN:
```

### 1054. [LOG] 2025-07-02T19:56:42.667Z

```

📊 VOLLSTÄNDIGE PROJEKT-ÜBERSICHT
════════════════════════════════════════════════════════════════════════════════
✅ Verarbeitete Dateien: 9/9
🎯 Optimierung erforderlich: 7 Dateien (78% verbleibend)
🚀 Fortschritt: 22% abgeschlossen

PRIORITÄTEN-RANKING:
   1. der-sichere-hafen.md (Score: 45% - Gap: 15%)
   2. emotionale-leere.md (Score: 16% - Gap: 44%)
   3. erschoepft-vom-stark-sein.md (Score: 22% - Gap: 38%)
   4. ich-will-einfach-gehalten-werden.md (Score: 49% - Gap: 11%)
   5. kontrolle-abgeben.md (Score: 18% - Gap: 42%)

ERWARTETE ARBEITSZEIT: 14 Minuten für vollständige Optimierung
════════════════════════════════════════════════════════════════════════════════
```

### 1055. [LOG] 2025-07-02T19:56:42.667Z

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

ENDERGEBNIS: Alle 7 Dateien automatisch optimiert!
════════════════════════════════════════════════════════════════════════════════
```

### 1056. [LOG] 2025-07-02T19:56:42.668Z

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

### 1057. [LOG] 2025-07-02T19:56:42.668Z

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

### 1058. [LOG] 2025-07-02T19:56:42.669Z

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
✅ Alle 7 Dateien erreichen 60%+ Score
✅ Build läuft ohne Quality-Alerts durch
✅ Content optimiert für maximale weibliche Ansprache
✅ Emotionale Bindung & Handlungsaktivierung maximiert

KEINE MANUELLEN EINGRIFFE NÖTIG - SYSTEM FÜHRT DURCH KOMPLETTEN PROZESS!
════════════════════════════════════════════════════════════════════════════════
```

### 1059. [LOG] 2025-07-02T19:56:42.670Z

```

� QUALITY-ALERT DETAILS:
```

### 1060. [LOG] 2025-07-02T19:56:42.670Z

```
   Type: CONTENT_OPTIMIZATION_NEEDED
```

### 1061. [LOG] 2025-07-02T19:56:42.670Z

```
   Message: Vollständige Content-Optimierung durch KI empfohlen
```

### 1062. [LOG] 2025-07-02T19:56:42.671Z

```
   Timestamp: 2025-07-02T19:56:42.671Z
```

### 1063. [LOG] 2025-07-02T19:56:42.671Z

```
   Files affected: 7/9
```

### 1064. [LOG] 2025-07-02T19:56:42.671Z

```
   First problem: der-sichere-hafen.md (45%)
```

### 1065. [LOG] 2025-07-02T19:56:42.671Z

```
   Recommended action: CONTENT_OPTIMIZATION_RECOMMENDED
```

### 1066. [LOG] 2025-07-02T19:56:42.671Z

```

📋 DETAILED QUALITY REPORT:
```

### 1067. [LOG] 2025-07-02T19:56:42.671Z

```
   1. INTENTION_OPTIMIZATION_REQUIRED: der-sichere-hafen.md (Score: 45%, Issues: 0)
```

### 1068. [LOG] 2025-07-02T19:56:42.671Z

```
   2. PENDING_OPTIMIZATION: emotionale-leere.md (Score: 16%, Issues: 0)
```

### 1069. [LOG] 2025-07-02T19:56:42.671Z

```
   3. PENDING_OPTIMIZATION: erschoepft-vom-stark-sein.md (Score: 22%, Issues: 0)
```

### 1070. [LOG] 2025-07-02T19:56:42.671Z

```
   4. PENDING_OPTIMIZATION: ich-will-einfach-gehalten-werden.md (Score: 49%, Issues: 0)
```

### 1071. [LOG] 2025-07-02T19:56:42.671Z

```
   5. PENDING_OPTIMIZATION: kontrolle-abgeben.md (Score: 18%, Issues: 0)
```

### 1072. [LOG] 2025-07-02T19:56:42.672Z

```
   6. PENDING_OPTIMIZATION: sehnsucht-nach-hingabe.md (Score: 18%, Issues: 0)
```

### 1073. [LOG] 2025-07-02T19:56:42.672Z

```
   7. PENDING_OPTIMIZATION: zu-viel-liebe-zu-wenig-liebe.md (Score: 14%, Issues: 0)
```

### 1074. [LOG] 2025-07-02T19:56:42.672Z

```

🎯 KI-PROMPT BEREIT FÜR OPTIMIERUNG:
```

### 1075. [LOG] 2025-07-02T19:56:42.672Z

```
────────────────────────────────────────────────────────────
```

### 1076. [LOG] 2025-07-02T19:56:42.672Z

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

### 1077. [LOG] 2025-07-02T19:56:42.673Z

```
────────────────────────────────────────────────────────────
```

### 1078. [LOG] 2025-07-02T19:56:42.673Z

```

✅ BUILD ERFOLGREICH - OPTIMIERUNG EMPFOHLEN!
```

### 1079. [LOG] 2025-07-02T19:56:42.673Z

```
📋 QUALITY-ALERTS GESPEICHERT FÜR SPÄTERE VERBESSERUNG!
```

### 1080. [LOG] 2025-07-02T19:56:42.673Z

```
🚀 VERCEL DEPLOYMENT KANN FORTFAHREN!
```

### 1081. [LOG] 2025-07-02T19:56:42.673Z

```
💡 AUTOMATION-PLAN VERFÜGBAR FÜR OPTIMIERUNG!
```

### 1082. [LOG] 2025-07-02T19:56:42.673Z

```

📋 FILE-MANAGEMENT-REGELN FÜR OPTIMIERUNG:
```

### 1083. [LOG] 2025-07-02T19:56:42.673Z

```
✅ KEINE NEUEN DATEIEN ERSTELLEN - Problem an der Ursache lösen!
```

### 1084. [LOG] 2025-07-02T19:56:42.674Z

```
✅ KEINE DATEIEN WIEDERHERSTELLEN - Betroffene Datei direkt optimieren!
```

### 1085. [LOG] 2025-07-02T19:56:42.674Z

```
✅ ZWINGEND: Problematische Datei direkt bearbeiten und verbessern
```

### 1086. [LOG] 2025-07-02T19:56:42.674Z

```
✅ FOKUS: Root-Cause-Lösung statt Umgehung oder Neuansatz
```

### 1087. [LOG] 2025-07-02T19:56:42.674Z

```
💡 HINWEIS: Diese Regeln helfen der KI, gezielt und effektiv zu optimieren
```

### 1088. [LOG] 2025-07-02T19:56:42.674Z

```

🤖 OPTIMIZATION-PLAN BEREIT FÜR MANUELLE VERBESSERUNG
```

### 1089. [LOG] 2025-07-02T19:56:42.674Z

```
📝 KI KANN CONTENT NACH QUALITY-ALERTS OPTIMIEREN
```

### 1090. [LOG] 2025-07-02T19:56:42.674Z

```
🔄 BUILD LÄUFT VOLLSTÄNDIG DURCH - KEINE BLOCKIERUNG
```

### 1091. [LOG] 2025-07-02T19:56:42.674Z

```
✅ BUILD ERFOLGREICH ABGESCHLOSSEN - VERCEL DEPLOYMENT READY
```

### 1092. [LOG] 2025-07-02T19:56:42.674Z

```

✅ BUILD ERFOLGREICH ABGESCHLOSSEN!
```

### 1093. [LOG] 2025-07-02T19:56:42.674Z

```
   Verarbeitete Dateien: 9/9
```

### 1094. [LOG] 2025-07-02T19:56:42.675Z

```
   Content-Optimierungspotential: 7 Dateien
```

### 1095. [LOG] 2025-07-02T19:56:42.675Z

```
📊 Analysiere Landingpage und "Über mich"-Seite...
```

### 1096. [LOG] 2025-07-02T19:56:42.703Z

```
📄 Landingpage (index.html):
```

### 1097. [LOG] 2025-07-02T19:56:42.703Z

```
   Aktuelle Wörter: 4003
```

### 1098. [LOG] 2025-07-02T19:56:42.703Z

```
   Empfohlener Bereich: 4000-6000+ Wörter
```

### 1099. [LOG] 2025-07-02T19:56:42.703Z

```
   ✅ Optimale Wortanzahl: 4003 Wörter
```

### 1100. [LOG] 2025-07-02T19:56:42.704Z

```
   📋 SEO-Check:
```

### 1101. [LOG] 2025-07-02T19:56:42.704Z

```
      Title: 63 Zeichen
```

### 1102. [LOG] 2025-07-02T19:56:42.705Z

```
      Description: 233 Zeichen
```

### 1103. [LOG] 2025-07-02T19:56:42.712Z

```
📄 Über mich (ueber-mich.html):
```

### 1104. [LOG] 2025-07-02T19:56:42.712Z

```
   Aktuelle Wörter: 1494
```

### 1105. [LOG] 2025-07-02T19:56:42.712Z

```
   Empfohlener Bereich: 2000-4000+ Wörter
```

### 1106. [LOG] 2025-07-02T19:56:42.713Z

```
   ❌ Zu wenig Wörter: 1494 (min. 2000 für SEO)
```

### 1107. [LOG] 2025-07-02T19:56:42.713Z

```
   📈 Erweitere um 506 Wörter für bessere SEO-Performance
```

### 1108. [LOG] 2025-07-02T19:56:42.713Z

```
   💡 Empfehlung für "Über mich":
```

### 1109. [LOG] 2025-07-02T19:56:42.713Z

```
      • Mehr persönliche Geschichte und Background
```

### 1110. [LOG] 2025-07-02T19:56:42.713Z

```
      • Konkrete Erfahrungen und Lebensereignisse
```

### 1111. [LOG] 2025-07-02T19:56:42.713Z

```
      • Was dich von anderen unterscheidet
```

### 1112. [LOG] 2025-07-02T19:56:42.714Z

```
      • Deine Vision und Werte erklären
```

### 1113. [LOG] 2025-07-02T19:56:42.714Z

```
   📋 SEO-Check:
```

### 1114. [LOG] 2025-07-02T19:56:42.714Z

```
      Title: 71 Zeichen
```

### 1115. [LOG] 2025-07-02T19:56:42.714Z

```
      Description: 165 Zeichen
```

### 1116. [LOG] 2025-07-02T19:56:42.714Z

```

```

### 1117. [LOG] 2025-07-02T19:56:42.715Z

```
🔗 Analysiere interne Verlinkung...
```

### 1118. [LOG] 2025-07-02T19:56:42.715Z

```
   📄 Gefunden: 13 HTML-Dateien
```

### 1119. [LOG] 2025-07-02T19:56:42.725Z

```
   📄 index.html: 11 interne Links
```

### 1120. [LOG] 2025-07-02T19:56:42.728Z

```
   📄 ueber-mich.html: 11 interne Links
```

### 1121. [LOG] 2025-07-02T19:56:42.733Z

```
   📄 kontakt.html: 7 interne Links
```

### 1122. [LOG] 2025-07-02T19:56:42.736Z

```
   📄 blog/index.html: 23 interne Links
```

### 1123. [LOG] 2025-07-02T19:56:42.743Z

```
   📄 blog/bindungssehnsucht-normal.html: 5 interne Links
```

### 1124. [LOG] 2025-07-02T19:56:42.746Z

```
   📄 blog/das-erste-mal.html: 5 interne Links
```

### 1125. [LOG] 2025-07-02T19:56:42.749Z

```
   📄 blog/der-sichere-hafen.html: 5 interne Links
```

### 1126. [LOG] 2025-07-02T19:56:42.753Z

```
   📄 blog/emotionale-leere.html: 5 interne Links
```

### 1127. [LOG] 2025-07-02T19:56:42.756Z

```
   📄 blog/erschoepft-vom-stark-sein.html: 5 interne Links
```

### 1128. [LOG] 2025-07-02T19:56:42.758Z

```
   📄 blog/ich-will-einfach-gehalten-werden.html: 5 interne Links
```

### 1129. [LOG] 2025-07-02T19:56:42.760Z

```
   📄 blog/kontrolle-abgeben.html: 5 interne Links
```

### 1130. [LOG] 2025-07-02T19:56:42.762Z

```
   📄 blog/sehnsucht-nach-hingabe.html: 5 interne Links
```

### 1131. [LOG] 2025-07-02T19:56:42.766Z

```
   📄 blog/zu-viel-liebe-zu-wenig-liebe.html: 5 interne Links
```

### 1132. [LOG] 2025-07-02T19:56:42.766Z

```

   🔍 Validiere 22 eindeutige Links...
```

### 1133. [LOG] 2025-07-02T19:56:42.768Z

```
   🔍 Spezielle Blog-Verlinkungsanalyse...
```

### 1134. [LOG] 2025-07-02T19:56:42.769Z

```
   🔍 README-Verlinkungsanalyse...
```

### 1135. [LOG] 2025-07-02T19:56:42.770Z

```

   📊 Verlinkungsanalyse abgeschlossen:
```

### 1136. [LOG] 2025-07-02T19:56:42.770Z

```
   ⚠️ 11 Verlinkungsprobleme gefunden:
```

### 1137. [LOG] 2025-07-02T19:56:42.770Z

```
   🚨 KRITISCHE Probleme (11):
```

### 1138. [LOG] 2025-07-02T19:56:42.771Z

```
      1. Defekter Link: ../index.html (Ziel nicht gefunden)
```

### 1139. [LOG] 2025-07-02T19:56:42.771Z

```
         → blog/index.html: "Ein offener Brief" (Zeile ~1)
```

### 1140. [LOG] 2025-07-02T19:56:42.771Z

```
         → blog/index.html: "Start" (Zeile ~2)
```

### 1141. [LOG] 2025-07-02T19:56:42.771Z

```
         → blog/index.html: "Startseite" (Zeile ~23)
```

### 1142. [LOG] 2025-07-02T19:56:42.771Z

```
         → blog/bindungssehnsucht-normal.html: "Ein offener Brief" (Zeile ~1)
```

### 1143. [LOG] 2025-07-02T19:56:42.771Z

```
         → blog/bindungssehnsucht-normal.html: "Start" (Zeile ~2)
```

### 1144. [LOG] 2025-07-02T19:56:42.772Z

```
         → blog/bindungssehnsucht-normal.html: "Startseite" (Zeile ~5)
```

### 1145. [LOG] 2025-07-02T19:56:42.772Z

```
         → blog/das-erste-mal.html: "Ein offener Brief" (Zeile ~1)
```

### 1146. [LOG] 2025-07-02T19:56:42.772Z

```
         → blog/das-erste-mal.html: "Start" (Zeile ~2)
```

### 1147. [LOG] 2025-07-02T19:56:42.773Z

```
         → blog/das-erste-mal.html: "Startseite" (Zeile ~5)
```

### 1148. [LOG] 2025-07-02T19:56:42.773Z

```
         → blog/der-sichere-hafen.html: "Ein offener Brief" (Zeile ~1)
```

### 1149. [LOG] 2025-07-02T19:56:42.773Z

```
         → blog/der-sichere-hafen.html: "Start" (Zeile ~2)
```

### 1150. [LOG] 2025-07-02T19:56:42.773Z

```
         → blog/der-sichere-hafen.html: "Startseite" (Zeile ~5)
```

### 1151. [LOG] 2025-07-02T19:56:42.773Z

```
         → blog/emotionale-leere.html: "Ein offener Brief" (Zeile ~1)
```

### 1152. [LOG] 2025-07-02T19:56:42.773Z

```
         → blog/emotionale-leere.html: "Start" (Zeile ~2)
```

### 1153. [LOG] 2025-07-02T19:56:42.773Z

```
         → blog/emotionale-leere.html: "Startseite" (Zeile ~5)
```

### 1154. [LOG] 2025-07-02T19:56:42.773Z

```
         → blog/erschoepft-vom-stark-sein.html: "Ein offener Brief" (Zeile ~1)
```

### 1155. [LOG] 2025-07-02T19:56:42.776Z

```
         → blog/erschoepft-vom-stark-sein.html: "Start" (Zeile ~2)
```

### 1156. [LOG] 2025-07-02T19:56:42.777Z

```
         → blog/erschoepft-vom-stark-sein.html: "Startseite" (Zeile ~5)
```

### 1157. [LOG] 2025-07-02T19:56:42.777Z

```
         → blog/ich-will-einfach-gehalten-werden.html: "Ein offener Brief" (Zeile ~1)
```

### 1158. [LOG] 2025-07-02T19:56:42.777Z

```
         → blog/ich-will-einfach-gehalten-werden.html: "Start" (Zeile ~2)
```

### 1159. [LOG] 2025-07-02T19:56:42.777Z

```
         → blog/ich-will-einfach-gehalten-werden.html: "Startseite" (Zeile ~5)
```

### 1160. [LOG] 2025-07-02T19:56:42.777Z

```
         → blog/kontrolle-abgeben.html: "Ein offener Brief" (Zeile ~1)
```

### 1161. [LOG] 2025-07-02T19:56:42.777Z

```
         → blog/kontrolle-abgeben.html: "Start" (Zeile ~2)
```

### 1162. [LOG] 2025-07-02T19:56:42.777Z

```
         → blog/kontrolle-abgeben.html: "Startseite" (Zeile ~5)
```

### 1163. [LOG] 2025-07-02T19:56:42.778Z

```
         → blog/sehnsucht-nach-hingabe.html: "Ein offener Brief" (Zeile ~1)
```

### 1164. [LOG] 2025-07-02T19:56:42.778Z

```
         → blog/sehnsucht-nach-hingabe.html: "Start" (Zeile ~2)
```

### 1165. [LOG] 2025-07-02T19:56:42.778Z

```
         → blog/sehnsucht-nach-hingabe.html: "Startseite" (Zeile ~5)
```

### 1166. [LOG] 2025-07-02T19:56:42.778Z

```
         → blog/zu-viel-liebe-zu-wenig-liebe.html: "Ein offener Brief" (Zeile ~1)
```

### 1167. [LOG] 2025-07-02T19:56:42.778Z

```
         → blog/zu-viel-liebe-zu-wenig-liebe.html: "Start" (Zeile ~2)
```

### 1168. [LOG] 2025-07-02T19:56:42.778Z

```
         → blog/zu-viel-liebe-zu-wenig-liebe.html: "Startseite" (Zeile ~5)
```

### 1169. [LOG] 2025-07-02T19:56:42.778Z

```
      2. Defekter Link: ../ueber-mich.html (Ziel nicht gefunden)
```

### 1170. [LOG] 2025-07-02T19:56:42.778Z

```
         → blog/index.html: "Über Mich" (Zeile ~3)
```

### 1171. [LOG] 2025-07-02T19:56:42.778Z

```
         → blog/bindungssehnsucht-normal.html: "Über Mich" (Zeile ~3)
```

### 1172. [LOG] 2025-07-02T19:56:42.779Z

```
         → blog/das-erste-mal.html: "Über Mich" (Zeile ~3)
```

### 1173. [LOG] 2025-07-02T19:56:42.779Z

```
         → blog/der-sichere-hafen.html: "Über Mich" (Zeile ~3)
```

### 1174. [LOG] 2025-07-02T19:56:42.779Z

```
         → blog/emotionale-leere.html: "Über Mich" (Zeile ~3)
```

### 1175. [LOG] 2025-07-02T19:56:42.779Z

```
         → blog/erschoepft-vom-stark-sein.html: "Über Mich" (Zeile ~3)
```

### 1176. [LOG] 2025-07-02T19:56:42.779Z

```
         → blog/ich-will-einfach-gehalten-werden.html: "Über Mich" (Zeile ~3)
```

### 1177. [LOG] 2025-07-02T19:56:42.779Z

```
         → blog/kontrolle-abgeben.html: "Über Mich" (Zeile ~3)
```

### 1178. [LOG] 2025-07-02T19:56:42.779Z

```
         → blog/sehnsucht-nach-hingabe.html: "Über Mich" (Zeile ~3)
```

### 1179. [LOG] 2025-07-02T19:56:42.779Z

```
         → blog/zu-viel-liebe-zu-wenig-liebe.html: "Über Mich" (Zeile ~3)
```

### 1180. [LOG] 2025-07-02T19:56:42.779Z

```
      3. Defekter Link: zu-viel-liebe-zu-wenig-liebe.html (Ziel nicht gefunden)
```

### 1181. [LOG] 2025-07-02T19:56:42.780Z

```
         → blog/index.html: "Du weißt bereits: 'Bin ich z'viel?' – Du bist genau richtig bei mir" (Zeile ~5)
```

### 1182. [LOG] 2025-07-02T19:56:42.780Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~6)
```

### 1183. [LOG] 2025-07-02T19:56:42.780Z

```
      4. Defekter Link: das-erste-mal.html (Ziel nicht gefunden)
```

### 1184. [LOG] 2025-07-02T19:56:42.780Z

```
         → blog/index.html: "Du weißt bereits: 'Das erste Mal mit ihm' – Simon wird dein Erstes" (Zeile ~7)
```

### 1185. [LOG] 2025-07-02T19:56:42.780Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~8)
```

### 1186. [LOG] 2025-07-02T19:56:42.780Z

```
      5. Defekter Link: der-sichere-hafen.html (Ziel nicht gefunden)
```

### 1187. [LOG] 2025-07-02T19:56:42.780Z

```
         → blog/index.html: "Du weißt bereits: 'Der sichere Hafen' – Simon ist dein Zuhause" (Zeile ~9)
```

### 1188. [LOG] 2025-07-02T19:56:42.780Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~10)
```

### 1189. [LOG] 2025-07-02T19:56:42.780Z

```
      6. Defekter Link: emotionale-leere.html (Ziel nicht gefunden)
```

### 1190. [LOG] 2025-07-02T19:56:42.781Z

```
         → blog/index.html: "'Fühl mi wie holl' – Simon füllt deine emotionale Leere" (Zeile ~11)
```

### 1191. [LOG] 2025-07-02T19:56:42.781Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~12)
```

### 1192. [LOG] 2025-07-02T19:56:42.781Z

```
      7. Defekter Link: ich-will-einfach-gehalten-werden.html (Ziel nicht gefunden)
```

### 1193. [LOG] 2025-07-02T19:56:42.781Z

```
         → blog/index.html: "Du weißt bereits: 'Ich will einfach gehalten werden' – Ich halte dich" (Zeile ~13)
```

### 1194. [LOG] 2025-07-02T19:56:42.781Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~14)
```

### 1195. [LOG] 2025-07-02T19:56:42.781Z

```
      8. Defekter Link: bindungssehnsucht-normal.html (Ziel nicht gefunden)
```

### 1196. [LOG] 2025-07-02T19:56:42.781Z

```
         → blog/index.html: "Wenn Bindungssehnsucht normal ist – Du darfst so fühlen" (Zeile ~15)
```

### 1197. [LOG] 2025-07-02T19:56:42.781Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~16)
```

### 1198. [LOG] 2025-07-02T19:56:42.782Z

```
      9. Defekter Link: erschoepft-vom-stark-sein.html (Ziel nicht gefunden)
```

### 1199. [LOG] 2025-07-02T19:56:42.782Z

```
         → blog/index.html: "Du weißt bereits: 'Bin so müed' – Endlich schwach sein dürfen" (Zeile ~17)
```

### 1200. [LOG] 2025-07-02T19:56:42.782Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~18)
```

### 1201. [LOG] 2025-07-02T19:56:42.782Z

```
      10. Defekter Link: kontrolle-abgeben.html (Ziel nicht gefunden)
```

### 1202. [LOG] 2025-07-02T19:56:42.782Z

```
         → blog/index.html: "Du weißt bereits: 'Will dass einer übernimmt' – Kontrolle abgeben" (Zeile ~19)
```

### 1203. [LOG] 2025-07-02T19:56:42.782Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~20)
```

### 1204. [LOG] 2025-07-02T19:56:42.782Z

```
      11. Defekter Link: sehnsucht-nach-hingabe.html (Ziel nicht gefunden)
```

### 1205. [LOG] 2025-07-02T19:56:42.783Z

```
         → blog/index.html: "Du weißt bereits: 'Will mi ganz gää' – Ich nehme dich vollständig" (Zeile ~21)
```

### 1206. [LOG] 2025-07-02T19:56:42.783Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~22)
```

### 1207. [LOG] 2025-07-02T19:56:42.783Z

```

```

### 1208. [LOG] 2025-07-02T19:56:42.783Z

```

🔍 MULTI-FILE SINNLOSIGKEITS-CHECKER wird getriggert...
```

### 1209. [LOG] 2025-07-02T19:56:42.859Z

```
❌ Multi-File-Checker Fehler:
```

### 1210. [LOG] 2025-07-02T19:56:42.860Z

```
Command failed: node scripts/build-checks/check_scripts/multi-file-sinnlosigkeits-checker.js
file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/multi-file-sinnlosigkeits-checker.js:42
const checker = new MultiFileSinnlosigkeitsChecker();
      ^^^^^^^

SyntaxError: Unexpected identifier 'checker'
    at compileSourceTextModule (node:internal/modules/esm/utils:338:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:102:18)
    at #translate (node:internal/modules/esm/loader:468:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:515:27)
    at async ModuleJob._link (node:internal/modules/esm/module_job:115:19)

Node.js v22.14.0

```

## Performance-Statistiken

- **Gesamte Log-Einträge:** 1210
- **ERROR-Level:** 8
- **WARN-Level:** 0
- **LOG-Level:** 404
- **PROBLEM-Level:** 796
- **Build-Dauer:** 967ms
- **Durchschnitt pro Log:** 1ms

## VS Code Problems Report

**❌ 796 Problem(e) gefunden:**

### Übersicht
- **Errors:** 4
- **Warnings:** 792  
- **Infos:** 0

### 🚨 Errors (4)

#### 1. build-process\modules\logger.js:145
**Severity:** ERROR  
**Message:** Typo: "fucntion" should be "function"  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 2. build-process\modules\logger.js:146
**Severity:** ERROR  
**Message:** Typo: "fucntion" should be "function"  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 3. scripts\build.js:690
**Severity:** ERROR  
**Message:** Typo: "fucntion" should be "function"  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 4. scripts\build.js:691
**Severity:** ERROR  
**Message:** Typo: "fucntion" should be "function"  
**Timestamp:** 2025-07-02T19:56:42.560Z

### ⚠️ Warnings (792)

#### 1. app-gui\dist-electron\index-Ckhtba7t.js:40
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.542Z

#### 2. app-gui\dist-electron\index-Ckhtba7t.js:1943
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.542Z

#### 3. app-gui\dist-electron\index-Ckhtba7t.js:2327
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.542Z

#### 4. app-gui\dist-electron\index-Ckhtba7t.js:2713
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.542Z

#### 5. app-gui\dist-electron\index-Ckhtba7t.js:2741
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.542Z

#### 6. app-gui\dist-electron\index-Ckhtba7t.js:3562
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.543Z

#### 7. app-gui\dist-electron\index-Ckhtba7t.js:3599
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.543Z

#### 8. app-gui\dist-electron\index-Ckhtba7t.js:4316
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.543Z

#### 9. app-gui\dist-electron\index-Ckhtba7t.js:5013
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.543Z

#### 10. app-gui\dist-electron\index-Ckhtba7t.js:5406
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.543Z

#### 11. app-gui\dist-electron\index-Ckhtba7t.js:6202
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.543Z

#### 12. app-gui\dist-electron\index-Ckhtba7t.js:6587
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.543Z

#### 13. app-gui\dist-electron\index-Ckhtba7t.js:6720
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.544Z

#### 14. app-gui\dist-electron\index-Ckhtba7t.js:6743
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.544Z

#### 15. app-gui\dist-electron\index-Ckhtba7t.js:6803
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.544Z

#### 16. app-gui\dist-electron\index-Ckhtba7t.js:6895
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.544Z

#### 17. app-gui\dist-electron\index-Ckhtba7t.js:6923
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.544Z

#### 18. app-gui\dist-electron\index-Ckhtba7t.js:6954
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.544Z

#### 19. app-gui\dist-electron\index-Ckhtba7t.js:7029
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.544Z

#### 20. app-gui\dist-electron\index-Ckhtba7t.js:7054
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.544Z

#### 21. app-gui\dist-electron\index-Ckhtba7t.js:7099
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.544Z

#### 22. app-gui\dist-electron\index-Ckhtba7t.js:7531
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.544Z

#### 23. app-gui\dist-electron\index-Ckhtba7t.js:7585
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.544Z

#### 24. app-gui\dist-electron\index-Ckhtba7t.js:7983
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.544Z

#### 25. app-gui\dist-electron\index-Ckhtba7t.js:8071
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.544Z

#### 26. app-gui\dist-electron\index-Ckhtba7t.js:8075
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.544Z

#### 27. app-gui\dist-electron\index-Ckhtba7t.js:8112
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.544Z

#### 28. app-gui\dist-electron\index-Ckhtba7t.js:8493
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.544Z

#### 29. app-gui\dist-electron\index-Ckhtba7t.js:9746
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.544Z

#### 30. app-gui\dist-electron\index-Ckhtba7t.js:9945
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.544Z

#### 31. app-gui\dist-electron\index-DhEd7u67.js:40
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.546Z

#### 32. app-gui\dist-electron\index-DhEd7u67.js:1950
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.546Z

#### 33. app-gui\dist-electron\index-DhEd7u67.js:2360
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.546Z

#### 34. app-gui\dist-electron\index-DhEd7u67.js:2762
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.546Z

#### 35. app-gui\dist-electron\index-DhEd7u67.js:2790
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.546Z

#### 36. app-gui\dist-electron\index-DhEd7u67.js:3618
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.547Z

#### 37. app-gui\dist-electron\index-DhEd7u67.js:3655
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.547Z

#### 38. app-gui\dist-electron\index-DhEd7u67.js:4372
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.547Z

#### 39. app-gui\dist-electron\index-DhEd7u67.js:5069
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.547Z

#### 40. app-gui\dist-electron\index-DhEd7u67.js:5462
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.547Z

#### 41. app-gui\dist-electron\index-DhEd7u67.js:6258
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.547Z

#### 42. app-gui\dist-electron\index-DhEd7u67.js:6643
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.547Z

#### 43. app-gui\dist-electron\index-DhEd7u67.js:6776
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.548Z

#### 44. app-gui\dist-electron\index-DhEd7u67.js:6799
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.548Z

#### 45. app-gui\dist-electron\index-DhEd7u67.js:6859
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.548Z

#### 46. app-gui\dist-electron\index-DhEd7u67.js:6951
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.548Z

#### 47. app-gui\dist-electron\index-DhEd7u67.js:6979
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.548Z

#### 48. app-gui\dist-electron\index-DhEd7u67.js:7010
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.548Z

#### 49. app-gui\dist-electron\index-DhEd7u67.js:7085
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.548Z

#### 50. app-gui\dist-electron\index-DhEd7u67.js:7110
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.548Z

#### 51. app-gui\dist-electron\index-DhEd7u67.js:7155
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.548Z

#### 52. app-gui\dist-electron\index-DhEd7u67.js:7587
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.548Z

#### 53. app-gui\dist-electron\index-DhEd7u67.js:7641
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.548Z

#### 54. app-gui\dist-electron\index-DhEd7u67.js:8039
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.548Z

#### 55. app-gui\dist-electron\index-DhEd7u67.js:8127
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.548Z

#### 56. app-gui\dist-electron\index-DhEd7u67.js:8131
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.548Z

#### 57. app-gui\dist-electron\index-DhEd7u67.js:8168
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.548Z

#### 58. app-gui\dist-electron\index-DhEd7u67.js:8549
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.548Z

#### 59. app-gui\dist-electron\index-DhEd7u67.js:9802
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.548Z

#### 60. app-gui\dist-electron\index-DhEd7u67.js:10001
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.548Z

#### 61. app-gui\src\App.jsx:4
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.551Z

#### 62. app-gui\src\App.jsx:72
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.551Z

#### 63. app-gui\src\App.jsx:99
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.551Z

#### 64. build-process\mainBuild.js:52
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.551Z

#### 65. build-process\mainBuild.js:64
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.551Z

#### 66. build-process\mainBuild.js:98
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 67. build-process\mainBuild.js:102
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 68. build-process\mainBuild.js:104
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 69. build-process\mainBuild.js:110
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 70. build-process\mainBuild.js:112
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 71. build-process\mainBuild.js:116
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 72. build-process\mainBuild.js:123
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 73. build-process\mainBuild.js:145
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 74. build-process\mainBuild.js:147
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 75. build-process\mainBuild.js:174
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 76. build-process\mainBuild.js:205
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 77. build-process\mainBuild.js:231
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 78. build-process\mainBuild.js:254
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 79. build-process\modules\contentOptimizer.js:53
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 80. build-process\modules\contentOptimizer.js:66
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 81. build-process\modules\contentOptimizer.js:111
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 82. build-process\modules\contentOptimizer.js:157
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 83. build-process\modules\contentOptimizer.js:338
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 84. build-process\modules\fileUtils.js:22
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 85. build-process\modules\fileUtils.js:45
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 86. build-process\modules\fileUtils.js:90
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 87. build-process\modules\fileUtils.js:151
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 88. build-process\modules\fileUtils.js:174
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 89. build-process\modules\logger.js:17
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 90. build-process\modules\logger.js:34
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 91. build-process\modules\logger.js:62
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 92. build-process\modules\logger.js:243
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 93. build-process\modules\logger.js:276
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.552Z

#### 94. build-process\modules\seoCheck.js:20
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.553Z

#### 95. build-process\modules\seoCheck.js:94
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.553Z

#### 96. build-process\modules\seoCheck.js:96
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.553Z

#### 97. build-process\modules\seoCheck.js:109
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.553Z

#### 98. build-process\modules\seoCheck.js:248
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.553Z

#### 99. build-process\modules\seoCheck.js:335
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.553Z

#### 100. build-process\modules\seoCheck.js:406
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.553Z

#### 101. build-process\modules\seoCheck.js:423
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.553Z

#### 102. build-process\modules\seoCheck.js:505
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.553Z

#### 103. build-process\modules\seoCheck.js:513
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.553Z

#### 104. scripts\advanced-content-validator.js:17
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 105. scripts\advanced-content-validator.js:32
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 106. scripts\advanced-content-validator.js:34
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 107. scripts\advanced-content-validator.js:50
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 108. scripts\advanced-content-validator.js:107
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 109. scripts\advanced-content-validator.js:132
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 110. scripts\advanced-content-validator.js:220
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 111. scripts\advanced-content-validator.js:257
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 112. scripts\advanced-content-validator.js:264
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 113. scripts\advanced-content-validator.js:275
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 114. scripts\advanced-content-validator.js:319
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 115. scripts\advanced-content-validator.js:369
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 116. scripts\advanced-content-validator.js:402
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 117. scripts\advanced-content-validator.js:411
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 118. scripts\advanced-content-validator.js:412
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 119. scripts\advanced-content-validator.js:418
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 120. scripts\advanced-content-validator.js:427
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 121. scripts\advanced-content-validator.js:467
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 122. scripts\advanced-content-validator.js:517
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 123. scripts\advanced-content-validator.js:525
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 124. scripts\advanced-content-validator.js:560
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 125. scripts\advanced-content-validator.js:588
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 126. scripts\advanced-content-validator.js:596
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 127. scripts\advanced-content-validator.js:599
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 128. scripts\advanced-content-validator.js:603
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 129. scripts\advanced-content-validator.js:605
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 130. scripts\advanced-content-validator.js:607
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 131. scripts\advanced-content-validator.js:608
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 132. scripts\advanced-content-validator.js:611
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 133. scripts\advanced-content-validator.js:693
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 134. scripts\advanced-content-validator.js:700
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 135. scripts\advanced-content-validator.js:705
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 136. scripts\advanced-content-validator.js:798
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 137. scripts\advanced-content-validator.js:807
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 138. scripts\advanced-content-validator.js:830
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 139. scripts\advanced-content-validator.js:853
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.554Z

#### 140. scripts\build-checks\check_scripts\advanced-content-validator.js:17
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 141. scripts\build-checks\check_scripts\advanced-content-validator.js:32
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 142. scripts\build-checks\check_scripts\advanced-content-validator.js:34
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 143. scripts\build-checks\check_scripts\advanced-content-validator.js:50
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 144. scripts\build-checks\check_scripts\advanced-content-validator.js:118
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 145. scripts\build-checks\check_scripts\advanced-content-validator.js:143
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 146. scripts\build-checks\check_scripts\advanced-content-validator.js:217
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 147. scripts\build-checks\check_scripts\advanced-content-validator.js:247
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 148. scripts\build-checks\check_scripts\advanced-content-validator.js:297
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 149. scripts\build-checks\check_scripts\advanced-content-validator.js:330
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 150. scripts\build-checks\check_scripts\advanced-content-validator.js:339
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 151. scripts\build-checks\check_scripts\advanced-content-validator.js:340
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 152. scripts\build-checks\check_scripts\advanced-content-validator.js:346
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 153. scripts\build-checks\check_scripts\advanced-content-validator.js:355
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 154. scripts\build-checks\check_scripts\advanced-content-validator.js:395
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 155. scripts\build-checks\check_scripts\advanced-content-validator.js:445
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 156. scripts\build-checks\check_scripts\advanced-content-validator.js:453
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 157. scripts\build-checks\check_scripts\advanced-content-validator.js:488
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 158. scripts\build-checks\check_scripts\advanced-content-validator.js:516
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 159. scripts\build-checks\check_scripts\advanced-content-validator.js:602
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 160. scripts\build-checks\check_scripts\advanced-content-validator.js:609
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 161. scripts\build-checks\check_scripts\advanced-content-validator.js:614
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 162. scripts\build-checks\check_scripts\advanced-content-validator.js:707
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 163. scripts\build-checks\check_scripts\advanced-content-validator.js:716
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 164. scripts\build-checks\check_scripts\advanced-content-validator.js:739
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 165. scripts\build-checks\check_scripts\advanced-content-validator.js:762
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 166. scripts\build-checks\check_scripts\checklist-cli.js:14
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 167. scripts\build-checks\check_scripts\checklist-cli.js:15
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 168. scripts\build-checks\check_scripts\checklist-cli.js:20
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 169. scripts\build-checks\check_scripts\checklist-cli.js:21
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 170. scripts\build-checks\check_scripts\checklist-cli.js:24
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 171. scripts\build-checks\check_scripts\checklist-cli.js:28
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 172. scripts\build-checks\check_scripts\checklist-cli.js:33
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 173. scripts\build-checks\check_scripts\checklist-cli.js:34
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 174. scripts\build-checks\check_scripts\checklist-cli.js:35
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 175. scripts\build-checks\check_scripts\checklist-cli.js:42
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 176. scripts\build-checks\check_scripts\checklist-cli.js:50
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 177. scripts\build-checks\check_scripts\checklist-cli.js:52
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 178. scripts\build-checks\check_scripts\checklist-cli.js:53
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 179. scripts\build-checks\check_scripts\checklist-cli.js:64
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 180. scripts\build-checks\check_scripts\checklist-cli.js:69
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 181. scripts\build-checks\check_scripts\checklist-cli.js:72
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 182. scripts\build-checks\check_scripts\checklist-cli.js:79
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 183. scripts\build-checks\check_scripts\checklist-cli.js:84
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 184. scripts\build-checks\check_scripts\checklist-cli.js:89
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 185. scripts\build-checks\check_scripts\checklist-cli.js:93
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 186. scripts\build-checks\check_scripts\checklist-cli.js:94
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 187. scripts\build-checks\check_scripts\checklist-cli.js:96
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 188. scripts\build-checks\check_scripts\checklist-cli.js:113
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 189. scripts\build-checks\check_scripts\checklist-cli.js:115
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 190. scripts\build-checks\check_scripts\checklist-cli.js:116
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 191. scripts\build-checks\check_scripts\checklist-cli.js:118
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 192. scripts\build-checks\check_scripts\checklist-cli.js:126
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 193. scripts\build-checks\check_scripts\checklist-cli.js:131
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 194. scripts\build-checks\check_scripts\checklist-cli.js:132
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 195. scripts\build-checks\check_scripts\checklist-cli.js:136
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 196. scripts\build-checks\check_scripts\checklist-cli.js:137
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 197. scripts\build-checks\check_scripts\checklist-cli.js:141
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 198. scripts\build-checks\check_scripts\checklist-cli.js:143
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 199. scripts\build-checks\check_scripts\checklist-cli.js:145
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 200. scripts\build-checks\check_scripts\checklist-cli.js:149
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 201. scripts\build-checks\check_scripts\checklist-cli.js:151
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 202. scripts\build-checks\check_scripts\checklist-cli.js:156
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 203. scripts\build-checks\check_scripts\checklist-cli.js:158
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 204. scripts\build-checks\check_scripts\checklist-cli.js:164
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 205. scripts\build-checks\check_scripts\checklist-cli.js:166
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 206. scripts\build-checks\check_scripts\checklist-cli.js:172
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 207. scripts\build-checks\check_scripts\checklist-cli.js:173
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 208. scripts\build-checks\check_scripts\checklist-cli.js:174
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 209. scripts\build-checks\check_scripts\checklist-cli.js:175
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 210. scripts\build-checks\check_scripts\checklist-cli.js:176
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 211. scripts\build-checks\check_scripts\checklist-cli.js:177
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 212. scripts\build-checks\check_scripts\checklist-cli.js:178
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 213. scripts\build-checks\check_scripts\checklist-cli.js:179
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 214. scripts\build-checks\check_scripts\checklist-cli.js:180
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 215. scripts\build-checks\check_scripts\checklist-cli.js:181
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 216. scripts\build-checks\check_scripts\checklist-cli.js:182
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 217. scripts\build-checks\check_scripts\checklist-cli.js:183
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 218. scripts\build-checks\check_scripts\checklist-cli.js:184
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 219. scripts\build-checks\check_scripts\checklist-cli.js:185
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 220. scripts\build-checks\check_scripts\checklist-cli.js:217
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.555Z

#### 221. scripts\build-checks\check_scripts\checklist-cli.js:218
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.556Z

#### 222. scripts\build-checks\check_scripts\comprehensiveCheck.js:19
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.556Z

#### 223. scripts\build-checks\check_scripts\comprehensiveCheck.js:38
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.556Z

#### 224. scripts\build-checks\check_scripts\comprehensiveCheck.js:66
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.556Z

#### 225. scripts\build-checks\check_scripts\comprehensiveCheck.js:67
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.556Z

#### 226. scripts\build-checks\check_scripts\comprehensiveCheck.js:70
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.556Z

#### 227. scripts\build-checks\check_scripts\comprehensiveCheck.js:162
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.556Z

#### 228. scripts\build-checks\check_scripts\comprehensiveCheck.js:213
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.556Z

#### 229. scripts\build-checks\check_scripts\comprehensiveCheck.js:250
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.556Z

#### 230. scripts\build-checks\check_scripts\keyword-cleanup.js:38
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.556Z

#### 231. scripts\build-checks\check_scripts\keyword-cleanup.js:40
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.556Z

#### 232. scripts\build-checks\check_scripts\keyword-cleanup.js:58
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.556Z

#### 233. scripts\build-checks\check_scripts\keyword-cleanup.js:64
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.556Z

#### 234. scripts\build-checks\check_scripts\keyword-cleanup.js:67
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.556Z

#### 235. scripts\build-checks\check_scripts\keyword-cleanup.js:71
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.556Z

#### 236. scripts\build-checks\check_scripts\keyword-cleanup.js:72
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.556Z

#### 237. scripts\build-checks\check_scripts\keyword-cleanup.js:73
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.556Z

#### 238. scripts\build-checks\check_scripts\masterBuildChecker.js:19
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 239. scripts\build-checks\check_scripts\masterBuildChecker.js:91
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 240. scripts\build-checks\check_scripts\masterBuildChecker.js:92
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 241. scripts\build-checks\check_scripts\masterBuildChecker.js:93
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 242. scripts\build-checks\check_scripts\masterBuildChecker.js:94
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 243. scripts\build-checks\check_scripts\masterBuildChecker.js:95
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 244. scripts\build-checks\check_scripts\masterBuildChecker.js:100
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 245. scripts\build-checks\check_scripts\masterBuildChecker.js:103
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 246. scripts\build-checks\check_scripts\masterBuildChecker.js:132
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 247. scripts\build-checks\check_scripts\masterBuildChecker.js:256
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 248. scripts\build-checks\check_scripts\masterBuildChecker.js:389
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 249. scripts\build-checks\check_scripts\masterBuildChecker.js:437
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 250. scripts\build-checks\check_scripts\masterBuildChecker.js:486
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 251. scripts\build-checks\check_scripts\masterBuildChecker.js:515
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 252. scripts\build-checks\check_scripts\masterBuildChecker.js:577
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 253. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:45
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 254. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:48
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 255. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:50
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 256. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:74
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 257. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:75
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 258. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:81
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 259. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:117
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 260. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:141
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 261. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:154
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 262. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:164
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 263. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:168
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 264. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:169
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 265. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:170
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 266. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:181
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 267. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:185
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 268. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:195
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 269. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:220
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 270. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:244
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 271. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:300
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 272. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:309
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 273. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:317
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 274. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:320
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 275. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:321
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 276. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:322
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 277. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:323
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 278. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:338
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 279. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:361
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 280. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:385
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 281. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:396
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 282. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:397
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 283. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:398
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 284. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:400
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 285. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:401
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 286. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:402
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 287. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:405
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 288. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:406
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 289. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:407
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 290. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:408
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 291. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:416
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 292. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:421
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 293. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:426
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 294. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:429
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 295. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:433
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 296. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:437
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 297. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:439
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 298. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:441
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 299. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:443
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 300. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:445
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 301. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:478
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 302. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:498
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 303. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:502
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 304. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:521
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 305. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:532
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 306. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:536
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 307. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:538
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 308. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:541
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.557Z

#### 309. scripts\build-checks\check_scripts\test-absurd-checker.js:9
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.558Z

#### 310. scripts\build-checks\check_scripts\test-absurd-checker.js:10
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.558Z

#### 311. scripts\build-checks\check_scripts\test-absurd-checker.js:12
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.558Z

#### 312. scripts\build-checks\check_scripts\test-absurd-checker.js:18
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.558Z

#### 313. scripts\build-checks\check_scripts\test-absurd-checker.js:28
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.558Z

#### 314. scripts\build-checks\check_scripts\test-absurd-checker.js:31
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.558Z

#### 315. scripts\build-checks\check_scripts\test-absurd-checker.js:44
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.558Z

#### 316. scripts\build-checks\check_scripts\test-absurd-checker.js:51
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.558Z

#### 317. scripts\build-checks\check_scripts\test-absurd-checker.js:57
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.558Z

#### 318. scripts\build-checks\check_scripts\test-absurd-checker.js:61
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.558Z

#### 319. scripts\build-checks\check_scripts\test-absurd-checker.js:63
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.558Z

#### 320. scripts\build-checks\check_scripts\test-absurd-checker.js:64
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.558Z

#### 321. scripts\build-checks\check_scripts\test-absurd-checker.js:66
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.558Z

#### 322. scripts\build.js:17
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 323. scripts\build.js:20
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 324. scripts\build.js:21
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 325. scripts\build.js:24
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 326. scripts\build.js:34
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 327. scripts\build.js:40
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 328. scripts\build.js:92
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 329. scripts\build.js:104
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 330. scripts\build.js:119
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 331. scripts\build.js:122
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 332. scripts\build.js:124
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 333. scripts\build.js:135
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 334. scripts\build.js:137
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 335. scripts\build.js:140
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 336. scripts\build.js:147
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 337. scripts\build.js:149
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 338. scripts\build.js:152
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 339. scripts\build.js:159
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 340. scripts\build.js:161
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 341. scripts\build.js:177
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 342. scripts\build.js:199
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 343. scripts\build.js:217
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 344. scripts\build.js:225
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 345. scripts\build.js:241
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 346. scripts\build.js:256
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 347. scripts\build.js:273
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 348. scripts\build.js:276
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 349. scripts\build.js:281
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 350. scripts\build.js:284
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 351. scripts\build.js:286
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 352. scripts\build.js:290
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 353. scripts\build.js:309
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 354. scripts\build.js:311
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 355. scripts\build.js:330
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 356. scripts\build.js:342
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 357. scripts\build.js:351
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 358. scripts\build.js:352
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 359. scripts\build.js:353
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 360. scripts\build.js:358
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 361. scripts\build.js:359
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 362. scripts\build.js:370
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 363. scripts\build.js:371
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 364. scripts\build.js:372
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 365. scripts\build.js:373
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 366. scripts\build.js:374
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 367. scripts\build.js:378
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 368. scripts\build.js:379
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 369. scripts\build.js:380
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 370. scripts\build.js:381
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 371. scripts\build.js:382
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 372. scripts\build.js:386
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 373. scripts\build.js:387
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 374. scripts\build.js:390
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 375. scripts\build.js:397
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 376. scripts\build.js:398
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 377. scripts\build.js:399
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 378. scripts\build.js:420
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 379. scripts\build.js:429
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.559Z

#### 380. scripts\build.js:438
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 381. scripts\build.js:465
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 382. scripts\build.js:496
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 383. scripts\build.js:519
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 384. scripts\build.js:542
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 385. scripts\build.js:563
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 386. scripts\build.js:575
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 387. scripts\build.js:738
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 388. scripts\build.js:748
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 389. scripts\build.js:834
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 390. scripts\build.js:904
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 391. scripts\build.js:944
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 392. scripts\build.js:1073
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 393. scripts\build.js:1077
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 394. scripts\build.js:1084
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 395. scripts\build.js:1091
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 396. scripts\build.js:1153
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 397. scripts\build.js:1178
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 398. scripts\build.js:1197
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 399. scripts\build.js:1225
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 400. scripts\build.js:1304
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 401. scripts\build.js:1347
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 402. scripts\build.js:1358
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 403. scripts\build.js:1420
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 404. scripts\build.js:1449
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 405. scripts\build.js:1453
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 406. scripts\build.js:1513
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 407. scripts\build.js:1578
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 408. scripts\build.js:1769
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 409. scripts\build.js:1807
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 410. scripts\build.js:1819
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 411. scripts\build.js:1899
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 412. scripts\build.js:1995
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 413. scripts\build.js:1996
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 414. scripts\build.js:2117
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 415. scripts\build.js:2118
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 416. scripts\build.js:2124
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 417. scripts\build.js:2125
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 418. scripts\build.js:2126
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 419. scripts\build.js:2146
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 420. scripts\build.js:2150
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 421. scripts\build.js:2160
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 422. scripts\build.js:2165
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 423. scripts\build.js:2179
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 424. scripts\build.js:2185
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 425. scripts\build.js:2187
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 426. scripts\build.js:2189
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 427. scripts\build.js:2190
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 428. scripts\build.js:2202
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 429. scripts\build.js:2205
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 430. scripts\build.js:2217
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 431. scripts\build.js:2221
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 432. scripts\build.js:2223
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 433. scripts\build.js:2226
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 434. scripts\build.js:2277
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 435. scripts\build.js:2279
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 436. scripts\build.js:2284
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 437. scripts\build.js:2290
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 438. scripts\build.js:2292
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 439. scripts\build.js:2302
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 440. scripts\build.js:2306
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 441. scripts\build.js:2307
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 442. scripts\build.js:2310
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 443. scripts\build.js:2311
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 444. scripts\build.js:2329
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 445. scripts\build.js:2330
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 446. scripts\build.js:2341
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 447. scripts\build.js:2342
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 448. scripts\build.js:2343
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 449. scripts\build.js:2346
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 450. scripts\build.js:2347
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 451. scripts\build.js:2348
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 452. scripts\build.js:2349
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 453. scripts\build.js:2350
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 454. scripts\build.js:2351
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 455. scripts\build.js:2354
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 456. scripts\build.js:2358
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 457. scripts\build.js:2359
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 458. scripts\build.js:2360
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 459. scripts\build.js:2364
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 460. scripts\build.js:2388
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 461. scripts\build.js:2390
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 462. scripts\build.js:2396
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 463. scripts\build.js:2399
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 464. scripts\build.js:2419
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 465. scripts\build.js:2420
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 466. scripts\build.js:2443
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 467. scripts\build.js:2447
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 468. scripts\build.js:2448
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 469. scripts\build.js:2450
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 470. scripts\build.js:2451
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 471. scripts\build.js:2455
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 472. scripts\build.js:2457
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 473. scripts\build.js:2460
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 474. scripts\build.js:2463
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 475. scripts\build.js:2466
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 476. scripts\build.js:2467
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 477. scripts\build.js:2470
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 478. scripts\build.js:2471
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 479. scripts\build.js:2473
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 480. scripts\build.js:2476
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 481. scripts\build.js:2479
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 482. scripts\build.js:2484
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 483. scripts\build.js:2486
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 484. scripts\build.js:2488
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 485. scripts\build.js:2492
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 486. scripts\build.js:2496
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 487. scripts\build.js:2498
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 488. scripts\build.js:2499
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 489. scripts\build.js:2504
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 490. scripts\build.js:2508
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 491. scripts\build.js:2509
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 492. scripts\build.js:2516
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 493. scripts\build.js:2522
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 494. scripts\build.js:2523
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 495. scripts\build.js:2524
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 496. scripts\build.js:2527
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 497. scripts\build.js:2529
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 498. scripts\build.js:2531
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 499. scripts\build.js:2538
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 500. scripts\build.js:2540
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 501. scripts\build.js:2546
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 502. scripts\build.js:2547
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 503. scripts\build.js:2566
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 504. scripts\build.js:2574
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 505. scripts\build.js:2578
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 506. scripts\build.js:2580
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 507. scripts\build.js:2583
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 508. scripts\build.js:2584
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 509. scripts\build.js:2585
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 510. scripts\build.js:2586
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 511. scripts\build.js:2587
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 512. scripts\build.js:2590
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 513. scripts\build.js:2592
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 514. scripts\build.js:2597
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 515. scripts\build.js:2599
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 516. scripts\build.js:2604
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 517. scripts\build.js:2614
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 518. scripts\build.js:2628
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 519. scripts\build.js:2629
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.560Z

#### 520. scripts\build.js:2630
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 521. scripts\build.js:2631
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 522. scripts\build.js:2632
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 523. scripts\build.js:2633
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 524. scripts\build.js:2634
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 525. scripts\build.js:2638
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 526. scripts\build.js:2639
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 527. scripts\build.js:2640
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 528. scripts\build.js:2641
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 529. scripts\build.js:2642
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 530. scripts\build.js:2643
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 531. scripts\build.js:2644
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 532. scripts\build.js:2645
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 533. scripts\build.js:2665
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 534. scripts\build.js:2682
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 535. scripts\build.js:2720
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 536. scripts\build.js:2776
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 537. scripts\build.js:2829
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 538. scripts\build.js:2858
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 539. scripts\build.js:2895
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 540. scripts\build.js:2907
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 541. scripts\build.js:2935
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 542. scripts\build.js:2947
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 543. scripts\build.js:2973
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 544. scripts\build.js:3025
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 545. scripts\build.js:3029
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 546. scripts\build.js:3042
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 547. scripts\build.js:3051
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 548. scripts\build.js:3060
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 549. scripts\build.js:3069
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 550. scripts\build.js:3090
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 551. scripts\build.js:3103
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 552. scripts\build.js:3116
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 553. scripts\build.js:3129
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 554. scripts\build.js:3156
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 555. scripts\build.js:3165
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 556. scripts\build.js:3174
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 557. scripts\build.js:3183
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 558. scripts\build.js:3192
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 559. scripts\build.js:3285
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 560. scripts\build.js:3289
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 561. scripts\build.js:3299
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 562. scripts\build.js:3309
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 563. scripts\build.js:3328
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 564. scripts\build.js:3353
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 565. scripts\build.js:3362
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 566. scripts\build.js:3371
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 567. scripts\build.js:3380
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 568. scripts\build.js:3389
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 569. scripts\build.js:3398
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 570. scripts\build.js:3421
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 571. scripts\build.js:3434
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 572. scripts\build.js:3447
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 573. scripts\build.js:3456
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 574. scripts\build.js:3465
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 575. scripts\build.js:3474
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 576. scripts\build.js:3504
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 577. scripts\build.js:3531
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 578. scripts\build.js:3533
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 579. scripts\build.js:3535
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 580. scripts\build.js:3563
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 581. scripts\build.js:3712
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 582. scripts\build.js:3713
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 583. scripts\build.js:3714
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 584. scripts\build.js:3720
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 585. scripts\build.js:3721
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 586. scripts\build.js:3722
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 587. scripts\build.js:3724
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 588. scripts\build.js:3734
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 589. scripts\build.js:3739
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 590. scripts\build.js:3743
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 591. scripts\build.js:3747
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 592. scripts\build.js:3751
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 593. scripts\build.js:3757
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 594. scripts\build.js:3758
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 595. scripts\build.js:3761
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 596. scripts\build.js:3765
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 597. scripts\build.js:3768
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 598. scripts\build.js:3781
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 599. scripts\build.js:3793
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 600. scripts\build.js:3796
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 601. scripts\build.js:3799
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 602. scripts\build.js:3802
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 603. scripts\build.js:3806
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 604. scripts\build.js:3807
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 605. scripts\build.js:3813
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 606. scripts\build.js:3815
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 607. scripts\build.js:3819
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 608. scripts\build.js:3823
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 609. scripts\build.js:3831
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 610. scripts\build.js:3835
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 611. scripts\build.js:3841
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 612. scripts\build.js:3846
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 613. scripts\build.js:3849
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 614. scripts\build.js:3851
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 615. scripts\build.js:3855
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 616. scripts\build.js:3856
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 617. scripts\build.js:3857
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 618. scripts\build.js:3859
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 619. scripts\build.js:3868
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 620. scripts\build.js:3873
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 621. scripts\build.js:3874
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 622. scripts\build.js:3875
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 623. scripts\build.js:3876
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 624. scripts\build.js:3890
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 625. scripts\build.js:3892
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 626. scripts\build.js:3902
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 627. scripts\build.js:3905
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 628. scripts\build.js:3908
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 629. scripts\build.js:3909
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 630. scripts\build.js:3916
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 631. scripts\build.js:3922
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 632. scripts\build.js:3923
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 633. scripts\build.js:3924
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 634. scripts\build.js:3927
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 635. scripts\build.js:3929
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 636. scripts\build.js:3931
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 637. scripts\build.js:3938
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 638. scripts\build.js:3940
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 639. scripts\build.js:3945
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 640. scripts\build.js:3946
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 641. scripts\build.js:3947
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 642. scripts\build.js:3948
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 643. scripts\build.js:3949
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 644. scripts\build.js:3954
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 645. scripts\build.js:3955
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 646. scripts\build.js:3986
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 647. scripts\build.js:3989
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 648. scripts\build.js:3990
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 649. scripts\build.js:3991
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 650. scripts\build.js:3992
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 651. scripts\build.js:3993
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 652. scripts\build.js:3994
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 653. scripts\build.js:3997
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 654. scripts\build.js:3998
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 655. scripts\build.js:3999
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 656. scripts\build.js:4000
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 657. scripts\build.js:4001
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 658. scripts\build.js:4002
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 659. scripts\build.js:4003
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 660. scripts\build.js:4005
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 661. scripts\build.js:4007
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 662. scripts\build.js:4010
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 663. scripts\build.js:4011
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 664. scripts\build.js:4012
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 665. scripts\build.js:4013
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 666. scripts\build.js:4015
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 667. scripts\build.js:4016
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 668. scripts\build.js:4017
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 669. scripts\build.js:4018
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 670. scripts\build.js:4020
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 671. scripts\build.js:4021
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 672. scripts\build.js:4022
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 673. scripts\build.js:4023
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 674. scripts\build.js:4024
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 675. scripts\build.js:4025
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 676. scripts\build.js:4027
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 677. scripts\build.js:4028
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 678. scripts\build.js:4029
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 679. scripts\build.js:4030
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 680. scripts\build.js:4033
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 681. scripts\build.js:4034
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 682. scripts\build.js:4035
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 683. scripts\build.js:4046
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 684. scripts\build.js:4050
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 685. scripts\build.js:4051
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 686. scripts\build.js:4054
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 687. scripts\build.js:4055
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 688. scripts\build.js:4064
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 689. scripts\build.js:4065
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 690. scripts\build.js:4090
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 691. scripts\build.js:4126
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 692. scripts\build.js:4146
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 693. scripts\build.js:4174
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 694. scripts\build.js:4216
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 695. scripts\build.js:4259
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 696. scripts\build.js:4301
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 697. scripts\build.js:4306
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 698. scripts\build.js:4311
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 699. scripts\build.js:4317
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 700. scripts\build.js:4320
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 701. scripts\build.js:4335
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 702. scripts\build.js:4338
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 703. scripts\build.js:4342
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 704. scripts\build.js:4347
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 705. scripts\build.js:4351
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 706. scripts\build.js:4352
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 707. scripts\build.js:4358
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 708. scripts\build.js:4359
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 709. scripts\build.js:4367
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 710. scripts\build.js:4368
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 711. scripts\build.js:4378
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 712. scripts\build.js:4385
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 713. scripts\build.js:4387
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.561Z

#### 714. scripts\build.js:4453
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 715. scripts\build.js:4454
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 716. scripts\build.js:4459
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 717. scripts\build.js:4461
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 718. scripts\build.js:4464
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 719. scripts\build.js:4468
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 720. scripts\direct-checker-test.js:9
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 721. scripts\direct-checker-test.js:15
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 722. scripts\direct-checker-test.js:16
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 723. scripts\direct-checker-test.js:19
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 724. scripts\direct-checker-test.js:22
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 725. scripts\direct-checker-test.js:24
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 726. scripts\direct-checker-test.js:25
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 727. scripts\direct-checker-test.js:28
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 728. scripts\direct-checker-test.js:32
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 729. scripts\direct-checker-test.js:37
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 730. scripts\direct-checker-test.js:61
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 731. scripts\direct-checker-test.js:84
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 732. scripts\direct-checker-test.js:86
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 733. scripts\direct-checker-test.js:87
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 734. scripts\direct-checker-test.js:88
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 735. scripts\direct-checker-test.js:91
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 736. scripts\direct-checker-test.js:96
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 737. scripts\direct-checker-test.js:99
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 738. scripts\direct-checker-test.js:100
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 739. scripts\direct-checker-test.js:102
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 740. scripts\direct-checker-test.js:105
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 741. scripts\log-manager.js:45
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 742. scripts\log-manager.js:61
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 743. scripts\log-manager.js:68
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 744. scripts\log-manager.js:83
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 745. scripts\log-manager.js:91
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 746. scripts\log-manager.js:116
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 747. scripts\log-manager.js:144
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 748. scripts\log-manager.js:158
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 749. scripts\log-manager.js:174
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 750. scripts\log-manager.js:177
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 751. scripts\log-manager.js:185
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 752. scripts\log-manager.js:204
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 753. scripts\log-manager.js:209
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 754. scripts\log-manager.js:228
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 755. scripts\log-manager.js:235
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 756. scripts\log-manager.js:264
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 757. scripts\log-manager.js:265
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 758. scripts\log-manager.js:266
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 759. scripts\log-manager.js:267
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 760. scripts\simplified-checker.js:8
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 761. scripts\simplified-checker.js:15
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 762. scripts\simplified-checker.js:20
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 763. scripts\simplified-checker.js:25
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 764. scripts\simplified-checker.js:49
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 765. scripts\simplified-checker.js:72
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 766. scripts\simplified-checker.js:74
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 767. scripts\simplified-checker.js:75
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 768. scripts\simplified-checker.js:76
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 769. scripts\simplified-checker.js:80
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 770. scripts\simplified-checker.js:84
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 771. scripts\simplified-checker.js:87
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 772. scripts\simplified-checker.js:88
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 773. scripts\simplified-checker.js:90
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 774. scripts\simplified-checker.js:93
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.562Z

#### 775. scripts\test-absurd-check.js:10
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.563Z

#### 776. scripts\test-absurd-check.js:11
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.563Z

#### 777. scripts\test-absurd-check.js:12
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.563Z

#### 778. scripts\test-absurd-check.js:15
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.563Z

#### 779. scripts\test-absurd-check.js:24
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.563Z

#### 780. scripts\test-absurd-check.js:27
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.563Z

#### 781. scripts\test-absurd-check.js:31
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.563Z

#### 782. scripts\test-absurd-check.js:33
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.563Z

#### 783. scripts\test-absurd-check.js:40
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.563Z

#### 784. scripts\test-absurd-check.js:43
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.563Z

#### 785. scripts\test-absurd-check.js:48
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:56:42.563Z

#### 786. scripts\test-absurd-check.js:56
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.563Z

#### 787. scripts\test-absurd-check.js:59
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.563Z

#### 788. scripts\test-absurd-check.js:63
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.563Z

#### 789. scripts\test-absurd-check.js:65
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.563Z

#### 790. scripts\test-absurd-check.js:68
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.563Z

#### 791. scripts\test-absurd-check.js:72
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:56:42.563Z

#### 792. style.css:170
**Severity:** WARNING  
**Message:** Missing semicolon in CSS property  
**Timestamp:** 2025-07-02T19:56:42.563Z

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

#### scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js (56 Problem(e))
- **Zeile 45:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 48:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 50:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 74:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 75:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 81:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 117:** ⚠️ Missing semicolon
- **Zeile 141:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 154:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 164:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 168:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 169:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 170:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 181:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 185:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 195:** ⚠️ Missing semicolon
- **Zeile 220:** ⚠️ Missing semicolon
- **Zeile 244:** ⚠️ Missing semicolon
- **Zeile 300:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 309:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 317:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 320:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 321:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 322:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 323:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 338:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 361:** ⚠️ Missing semicolon
- **Zeile 385:** ⚠️ Missing semicolon
- **Zeile 396:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 397:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 398:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 400:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 401:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 402:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 405:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 406:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 407:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 408:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 416:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 421:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 426:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 429:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 433:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 437:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 439:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 441:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 443:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 445:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 478:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 498:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 502:** ⚠️ Missing semicolon
- **Zeile 521:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 532:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 536:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 538:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 541:** ⚠️ Console.log statement found - consider removing in production

#### scripts\build-checks\check_scripts\test-absurd-checker.js (13 Problem(e))
- **Zeile 9:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 10:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 12:** ⚠️ Missing semicolon
- **Zeile 18:** ⚠️ Missing semicolon
- **Zeile 28:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 31:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 44:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 51:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 57:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 61:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 63:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 64:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 66:** ⚠️ Console.log statement found - consider removing in production

#### scripts\build.js (400 Problem(e))
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
- **Zeile 199:** ⚠️ Missing semicolon
- **Zeile 217:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 225:** ⚠️ Missing semicolon
- **Zeile 241:** ⚠️ Missing semicolon
- **Zeile 256:** ⚠️ Missing semicolon
- **Zeile 273:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 276:** ⚠️ Missing semicolon
- **Zeile 281:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 284:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 286:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 290:** ⚠️ Missing semicolon
- **Zeile 309:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 311:** ⚠️ Missing semicolon
- **Zeile 330:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 342:** ⚠️ Missing semicolon
- **Zeile 351:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 352:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 353:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 358:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 359:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 370:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 371:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 372:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 373:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 374:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 378:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 379:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 380:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 381:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 382:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 386:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 387:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 390:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 397:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 398:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 399:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 420:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 429:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 438:** ⚠️ Missing semicolon
- **Zeile 465:** ⚠️ Missing semicolon
- **Zeile 496:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 519:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 542:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 563:** ⚠️ Missing semicolon
- **Zeile 575:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 690:** 🚨 Typo: "fucntion" should be "function"
- **Zeile 691:** 🚨 Typo: "fucntion" should be "function"
- **Zeile 738:** ⚠️ Missing semicolon
- **Zeile 748:** ⚠️ Missing semicolon
- **Zeile 834:** ⚠️ Missing semicolon
- **Zeile 904:** ⚠️ Missing semicolon
- **Zeile 944:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 1073:** ⚠️ Missing semicolon
- **Zeile 1077:** ⚠️ Missing semicolon
- **Zeile 1084:** ⚠️ Missing semicolon
- **Zeile 1091:** ⚠️ Missing semicolon
- **Zeile 1153:** ⚠️ Missing semicolon
- **Zeile 1178:** ⚠️ Missing semicolon
- **Zeile 1197:** ⚠️ Missing semicolon
- **Zeile 1225:** ⚠️ Missing semicolon
- **Zeile 1304:** ⚠️ Missing semicolon
- **Zeile 1347:** ⚠️ Missing semicolon
- **Zeile 1358:** ⚠️ Missing semicolon
- **Zeile 1420:** ⚠️ Missing semicolon
- **Zeile 1449:** ⚠️ Missing semicolon
- **Zeile 1453:** ⚠️ Missing semicolon
- **Zeile 1513:** ⚠️ Missing semicolon
- **Zeile 1578:** ⚠️ Missing semicolon
- **Zeile 1769:** ⚠️ Missing semicolon
- **Zeile 1807:** ⚠️ Missing semicolon
- **Zeile 1819:** ⚠️ Missing semicolon
- **Zeile 1899:** ⚠️ Missing semicolon
- **Zeile 1995:** ⚠️ Missing semicolon
- **Zeile 1996:** ⚠️ Missing semicolon
- **Zeile 2117:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2118:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2124:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2125:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2126:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2146:** ⚠️ Missing semicolon
- **Zeile 2150:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2160:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2165:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2179:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2185:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2187:** ⚠️ Missing semicolon
- **Zeile 2189:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2190:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2202:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2205:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2217:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2221:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2223:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2226:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2277:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2279:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2284:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2290:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2292:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2302:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2306:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2307:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2310:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2311:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2329:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2330:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2341:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2342:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2343:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2346:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2347:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2348:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2349:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2350:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2351:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2354:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2358:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2359:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2360:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2364:** ⚠️ Missing semicolon
- **Zeile 2388:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2390:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2396:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2399:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2419:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2420:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2443:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2447:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2448:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2450:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2451:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2455:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2457:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2460:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2463:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2466:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2467:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2470:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2471:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2473:** ⚠️ Missing semicolon
- **Zeile 2476:** ⚠️ Missing semicolon
- **Zeile 2479:** ⚠️ Missing semicolon
- **Zeile 2484:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2486:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2488:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2492:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2496:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2498:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2499:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2504:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2508:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2509:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2516:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2522:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2523:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2524:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2527:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2529:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2531:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2538:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2540:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2546:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2547:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2566:** ⚠️ Missing semicolon
- **Zeile 2574:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2578:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2580:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2583:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2584:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2585:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2586:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2587:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2590:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2592:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2597:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2599:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2604:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2614:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2628:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2629:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2630:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2631:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2632:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2633:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2634:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2638:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2639:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2640:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2641:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2642:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2643:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2644:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2645:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2665:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2682:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2720:** ⚠️ Missing semicolon
- **Zeile 2776:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 2829:** ⚠️ Missing semicolon
- **Zeile 2858:** ⚠️ Missing semicolon
- **Zeile 2895:** ⚠️ Missing semicolon
- **Zeile 2907:** ⚠️ Missing semicolon
- **Zeile 2935:** ⚠️ Missing semicolon
- **Zeile 2947:** ⚠️ Missing semicolon
- **Zeile 2973:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3025:** ⚠️ Missing semicolon
- **Zeile 3029:** ⚠️ Missing semicolon
- **Zeile 3042:** ⚠️ Missing semicolon
- **Zeile 3051:** ⚠️ Missing semicolon
- **Zeile 3060:** ⚠️ Missing semicolon
- **Zeile 3069:** ⚠️ Missing semicolon
- **Zeile 3090:** ⚠️ Missing semicolon
- **Zeile 3103:** ⚠️ Missing semicolon
- **Zeile 3116:** ⚠️ Missing semicolon
- **Zeile 3129:** ⚠️ Missing semicolon
- **Zeile 3156:** ⚠️ Missing semicolon
- **Zeile 3165:** ⚠️ Missing semicolon
- **Zeile 3174:** ⚠️ Missing semicolon
- **Zeile 3183:** ⚠️ Missing semicolon
- **Zeile 3192:** ⚠️ Missing semicolon
- **Zeile 3285:** ⚠️ Missing semicolon
- **Zeile 3289:** ⚠️ Missing semicolon
- **Zeile 3299:** ⚠️ Missing semicolon
- **Zeile 3309:** ⚠️ Missing semicolon
- **Zeile 3328:** ⚠️ Missing semicolon
- **Zeile 3353:** ⚠️ Missing semicolon
- **Zeile 3362:** ⚠️ Missing semicolon
- **Zeile 3371:** ⚠️ Missing semicolon
- **Zeile 3380:** ⚠️ Missing semicolon
- **Zeile 3389:** ⚠️ Missing semicolon
- **Zeile 3398:** ⚠️ Missing semicolon
- **Zeile 3421:** ⚠️ Missing semicolon
- **Zeile 3434:** ⚠️ Missing semicolon
- **Zeile 3447:** ⚠️ Missing semicolon
- **Zeile 3456:** ⚠️ Missing semicolon
- **Zeile 3465:** ⚠️ Missing semicolon
- **Zeile 3474:** ⚠️ Missing semicolon
- **Zeile 3504:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3531:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3533:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3535:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3563:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3712:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3713:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3714:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3720:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3721:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3722:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3724:** ⚠️ Missing semicolon
- **Zeile 3734:** ⚠️ Missing semicolon
- **Zeile 3739:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3743:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3747:** ⚠️ Missing semicolon
- **Zeile 3751:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3757:** ⚠️ Missing semicolon
- **Zeile 3758:** ⚠️ Missing semicolon
- **Zeile 3761:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3765:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3768:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3781:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3793:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3796:** ⚠️ Missing semicolon
- **Zeile 3799:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3802:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3806:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3807:** ⚠️ Missing semicolon
- **Zeile 3813:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3815:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3819:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3823:** ⚠️ Missing semicolon
- **Zeile 3831:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3835:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3841:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3846:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3849:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3851:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3855:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3856:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3857:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3859:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3868:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3873:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3874:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3875:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3876:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3890:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3892:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3902:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3905:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3908:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3909:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3916:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3922:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3923:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3924:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3927:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3929:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3931:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3938:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3940:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3945:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3946:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3947:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3948:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3949:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3954:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3955:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3986:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3989:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3990:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3991:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3992:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3993:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3994:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3997:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3998:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 3999:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4000:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4001:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4002:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4003:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4005:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4007:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4010:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4011:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4012:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4013:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4015:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4016:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4017:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4018:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4020:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4021:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4022:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4023:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4024:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4025:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4027:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4028:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4029:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4030:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4033:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4034:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4035:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4046:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4050:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4051:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4054:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4055:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4064:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4065:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4090:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4126:** ⚠️ Missing semicolon
- **Zeile 4146:** ⚠️ Missing semicolon
- **Zeile 4174:** ⚠️ Missing semicolon
- **Zeile 4216:** ⚠️ Missing semicolon
- **Zeile 4259:** ⚠️ Missing semicolon
- **Zeile 4301:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4306:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4311:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4317:** ⚠️ Missing semicolon
- **Zeile 4320:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4335:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4338:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4342:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4347:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4351:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4352:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4358:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4359:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4367:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4368:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4378:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4385:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4387:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4453:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4454:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4459:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4461:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4464:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 4468:** ⚠️ Console.log statement found - consider removing in production

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

#### scripts\test-absurd-check.js (17 Problem(e))
- **Zeile 10:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 11:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 12:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 15:** ⚠️ Missing semicolon
- **Zeile 24:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 27:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 31:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 33:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 40:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 43:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 48:** ⚠️ Missing semicolon
- **Zeile 56:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 59:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 63:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 65:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 68:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 72:** ⚠️ Console.log statement found - consider removing in production

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
[35m▶️ Führe Check-Skript aus: logCleanup.js[39m
[LOG] [32m✅ logCleanup.js erfolgreich ausgeführt[39m
[LOG] [35m[39m
[35m▶️ Führe Check-Skript aus: masterBuildChecker.js[39m
[LOG] [32m✅ masterBuildChecker.js erfolgreich ausgeführt[39m
[LOG] [35m[39m
[35m▶️ Führe Check-Skript aus: multi-file-sinnlosigkeits-checker.js[39m
[ERROR] [31m[1m🚨🚨🚨 CRITICAL ERROR IN multi-file-sinnlosigkeits-checker.js 🚨🚨🚨[22m[39m
[ERROR] [31m📍 Error Type: SYNTAX ERROR[39m
[ERROR] [31m📍 Fehler in Datei checker.js, Zeile: 42[39m
[ERROR] [31m📋 Stderr: file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/multi-file-sinnlosigkeits-checker.js:42[39m
[31mconst checker = new MultiFileSinnlosigkeitsChecker();[39m
[31m      ^^^^^^^[39m
[31m[39m
[31mSyntaxError: Unexpected identifier 'checker'[39m
[31m    at compileSourceTextModule (node:internal/modules/esm/utils:338:16)[39m
[31m    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:102:18)[39m
[31m    at #translate (node:internal/modules/esm/loader:468:12)[39m
[31m    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:515:27)[39m
[31m    at async ModuleJob._link (node:internal/modules/esm/module_job:115:19)[39m
[31m[39m
[31mNode.js v22.14.0[39m
[31m[39m
[ERROR] [31m📋 Stdout: [39m
[ERROR] 🚨 CRITICAL BUILD-BREAKING ERROR: multi-file-sinnlosigkeits-checker.js contains errors that prevent execution
[ERROR] Full Error Details: {
  "script": "multi-file-sinnlosigkeits-checker.js",
  "exitCode": 1,
  "stderr": "file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/multi-file-sinnlosigkeits-checker.js:42\r\nconst checker = new MultiFileSinnlosigkeitsChecker();\r\n      ^^^^^^^\r\n\r\nSyntaxError: Unexpected identifier 'checker'\r\n    at compileSourceTextModule (node:internal/modules/esm/utils:338:16)\r\n    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:102:18)\r\n    at #translate (node:internal/modules/esm/loader:468:12)\r\n    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:515:27)\r\n    at async ModuleJob._link (node:internal/modules/esm/module_job:115:19)\r\n\r\nNode.js v22.14.0\r\n",
  "stdout": "",
  "message": "Command failed: node C:\\apps\\website\\einfach-passieren-lassen\\scripts\\build-checks\\check_scripts\\multi-file-sinnlosigkeits-checker.js\nfile:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/multi-file-sinnlosigkeits-checker.js:42\r\nconst checker = new MultiFileSinnlosigkeitsChecker();\r\n      ^^^^^^^\r\n\r\nSyntaxError: Unexpected identifier 'checker'\r\n    at compileSourceTextModule (node:internal/modules/esm/utils:338:16)\r\n    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:102:18)\r\n    at #translate (node:internal/modules/esm/loader:468:12)\r\n    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:515:27)\r\n    at async ModuleJob._link (node:internal/modules/esm/module_job:115:19)\r\n\r\nNode.js v22.14.0\r\n",
  "timestamp": "2025-07-02T19:56:42.394Z"
}
[ERROR] [33m⚠️ Build continues but multi-file-sinnlosigkeits-checker.js functionality is disabled![39m
[LOG] [35m[39m
[35m▶️ Führe Check-Skript aus: seoCheck.js[39m
[LOG] [32m✅ seoCheck.js erfolgreich ausgeführt[39m
[LOG] [35m[39m
[35m▶️ Führe Check-Skript aus: test-absurd-checker.js[39m
[LOG] [32m✅ test-absurd-checker.js erfolgreich ausgeführt[39m
[LOG] [90m📋 test-absurd-checker.js Output: 🔍 EINFACHER ABSURD-CHECKER TEST[39m
[90m============================================================[39m
[90m[39m
[90m📄 Prüfe: blog/entwurf/der-sichere-hafen.md[39m
[90m   🚨 ABSURD GEFUNDEN: "denkst du dir auf Schweizerdeutsch"[39m
[90m      Kontext: ...rauch öpper wo mi beschützt", denkst du dir auf Schweizerdeutsch. Und du hast recht. Du brauch...[39m
[90m   🚨 ABSURD GEFUNDEN: "denkst du dir auf Schweizerdeutsch"[39m
[90m      Kontext: ...rauch öpper wo mi beschützt", denkst du dir auf Schweizerdeutsch. Und du hast recht. Du brauch...[39m
[90m[39m
[90m📄 Prüfe: blog/entwurf/kontrolle-abgeben.md[39m
[90m   ✅ Keine absurden Sätze gefunden[39m
[90m[39m
[90m============================================================[39m
[90m🚨 TOTAL: 2 absurde Sätze gefunden![39m
[90m   Diese müssen sofort behoben werden![39m
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
[LOG] [34m📋 Terminal-Ausgabe wird gespeichert in: docs\015_build_logs\BUILD_LOG_2025-07-02_195641.md[39m
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
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:45 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:48 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:50 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:74 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:75 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:81 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:117 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:141 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:154 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:164 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:168 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:169 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:170 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:181 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:185 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:195 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:220 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:244 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:300 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:309 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:317 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:320 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:321 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:322 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:323 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:338 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:361 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:385 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:396 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:397 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:398 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:400 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:401 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:402 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:405 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:406 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:407 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:408 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:416 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:421 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:426 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:429 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:433 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:437 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:439 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:441 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:443 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:445 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:478 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:498 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:502 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:521 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:532 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:536 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:538 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:541 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:9 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:10 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:12 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:18 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:28 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:31 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:44 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:51 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:57 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:61 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:63 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:64 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\test-absurd-checker.js:66 - Console.log statement found - consider removing in production
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
[PROBLEM] [WARNING] scripts\build.js:199 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:217 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:225 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:241 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:256 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:273 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:276 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:281 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:284 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:286 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:290 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:309 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:311 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:330 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:342 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:351 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:352 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:353 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:358 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:359 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:370 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:371 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:372 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:373 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:374 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:378 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:379 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:380 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:381 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:382 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:386 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:387 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:390 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:397 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:398 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:399 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:420 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:429 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:438 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:465 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:496 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:519 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:542 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:563 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:575 - Console.log statement found - consider removing in production
[PROBLEM] [ERROR] scripts\build.js:690 - Typo: "fucntion" should be "function"
[PROBLEM] [ERROR] scripts\build.js:691 - Typo: "fucntion" should be "function"
[PROBLEM] [WARNING] scripts\build.js:738 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:748 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:834 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:904 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:944 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:1073 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1077 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1084 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1091 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1153 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1178 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1197 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1225 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1304 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1347 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1358 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1420 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1449 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1453 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1513 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1578 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1769 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1807 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1819 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1899 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1995 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:1996 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2117 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2118 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2124 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2125 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2126 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2146 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2150 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2160 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2165 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2179 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2185 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2187 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2189 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2190 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2202 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2205 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2217 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2221 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2223 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2226 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2277 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2279 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2284 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2290 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2292 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2302 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2306 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2307 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2310 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2311 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2329 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2330 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2341 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2342 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2343 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2346 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2347 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2348 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2349 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2350 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2351 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2354 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2358 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2359 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2360 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2364 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2388 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2390 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2396 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2399 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2419 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2420 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2443 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2447 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2448 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2450 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2451 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2455 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2457 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2460 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2463 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2466 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2467 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2470 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2471 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2473 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2476 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2479 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2484 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2486 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2488 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2492 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2496 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2498 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2499 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2504 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2508 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2509 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2516 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2522 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2523 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2524 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2527 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2529 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2531 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2538 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2540 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2546 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2547 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2566 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2574 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2578 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2580 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2583 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2584 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2585 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2586 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2587 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2590 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2592 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2597 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2599 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2604 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2614 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2628 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2629 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2630 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2631 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2632 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2633 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2634 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2638 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2639 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2640 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2641 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2642 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2643 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2644 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2645 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2665 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2682 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2720 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2776 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:2829 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2858 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2895 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2907 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2935 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2947 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:2973 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3025 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3029 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3042 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3051 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3060 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3069 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3090 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3103 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3116 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3129 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3156 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3165 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3174 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3183 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3192 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3285 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3289 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3299 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3309 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3328 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3353 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3362 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3371 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3380 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3389 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3398 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3421 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3434 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3447 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3456 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3465 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3474 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3504 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3531 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3533 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3535 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3563 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3712 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3713 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3714 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3720 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3721 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3722 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3724 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3734 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3739 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3743 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3747 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3751 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3757 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3758 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3761 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3765 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3768 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3781 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3793 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3796 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3799 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3802 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3806 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3807 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3813 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3815 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3819 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3823 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:3831 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3835 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3841 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3846 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3849 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3851 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3855 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3856 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3857 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3859 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3868 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3873 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3874 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3875 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3876 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3890 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3892 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3902 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3905 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3908 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3909 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3916 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3922 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3923 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3924 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3927 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3929 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3931 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3938 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3940 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3945 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3946 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3947 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3948 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3949 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3954 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3955 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3986 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3989 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3990 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3991 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3992 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3993 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3994 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3997 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3998 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:3999 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4000 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4001 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4002 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4003 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4005 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4007 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4010 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4011 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4012 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4013 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4015 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4016 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4017 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4018 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4020 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4021 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4022 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4023 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4024 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4025 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4027 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4028 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4029 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4030 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4033 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4034 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4035 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4046 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4050 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4051 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4054 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4055 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4064 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4065 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4090 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4126 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:4146 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:4174 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:4216 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:4259 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:4301 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4306 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4311 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4317 - Missing semicolon
[PROBLEM] [WARNING] scripts\build.js:4320 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4335 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4338 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4342 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4347 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4351 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4352 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4358 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4359 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4367 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4368 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4378 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4385 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4387 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4453 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4454 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4459 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4461 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4464 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build.js:4468 - Console.log statement found - consider removing in production
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
[PROBLEM] [WARNING] scripts\test-absurd-check.js:10 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\test-absurd-check.js:11 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\test-absurd-check.js:12 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\test-absurd-check.js:15 - Missing semicolon
[PROBLEM] [WARNING] scripts\test-absurd-check.js:24 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\test-absurd-check.js:27 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\test-absurd-check.js:31 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\test-absurd-check.js:33 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\test-absurd-check.js:40 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\test-absurd-check.js:43 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\test-absurd-check.js:48 - Missing semicolon
[PROBLEM] [WARNING] scripts\test-absurd-check.js:56 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\test-absurd-check.js:59 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\test-absurd-check.js:63 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\test-absurd-check.js:65 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\test-absurd-check.js:68 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\test-absurd-check.js:72 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] style.css:170 - Missing semicolon in CSS property
[INFO] ✅ Problems-Scan abgeschlossen. 796 Problem(e) gefunden.
[LOG] [34m📄 Gefunden: 9 Markdown-Dateien[39m
[34m[39m
[LOG] [90m[39m
[90m📋 Verarbeite: bindungssehnsucht-normal.md[39m
[LOG] [35m   🧠 Running advanced checklist validation for bindungssehnsucht-normal.md...[39m
[LOG] [36m🎯 Analyzing: bindungssehnsucht-normal.md[39m
[LOG] [90m   Detected theme: BINDUNG_KERN[39m
[LOG] [32m   Selected checklists: PASSIVITÄT, BESITZ[39m
[LOG] [36m   📊 Checklist Score: 0%[39m
[LOG] [31m      • PASSIVITÄT: 0%[39m
[LOG] [31m      • BESITZ: 0%[39m
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
[LOG] [32m   Selected checklists: PASSIVITÄT, BESITZ[39m
[LOG] [36m   📊 Checklist Score: 0%[39m
[LOG] [31m      • PASSIVITÄT: 0%[39m
[LOG] [31m      • BESITZ: 0%[39m
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
[LOG] [32m   Selected checklists: PASSIVITÄT, BESITZ[39m
[LOG] [36m   📊 Checklist Score: 0%[39m
[LOG] [31m      • PASSIVITÄT: 0%[39m
[LOG] [31m      • BESITZ: 0%[39m
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
[LOG] [32m   Selected checklists: PASSIVITÄT[39m
[LOG] [36m   📊 Checklist Score: 0%[39m
[LOG] [31m      • PASSIVITÄT: 0%[39m
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
[LOG] [32m   Selected checklists: PASSIVITÄT[39m
[LOG] [36m   📊 Checklist Score: 0%[39m
[LOG] [31m      • PASSIVITÄT: 0%[39m
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
[LOG] [32m   Selected checklists: PASSIVITÄT, BESITZ[39m
[LOG] [36m   📊 Checklist Score: 5%[39m
[LOG] [31m      • PASSIVITÄT: 8%[39m
[LOG] [31m      • BESITZ: 0%[39m
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
[LOG] [32m   Selected checklists: PASSIVITÄT, BESITZ[39m
[LOG] [36m   📊 Checklist Score: 0%[39m
[LOG] [31m      • PASSIVITÄT: 0%[39m
[LOG] [31m      • BESITZ: 0%[39m
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
[LOG] [32m   Selected checklists: PASSIVITÄT, BESITZ[39m
[LOG] [36m   📊 Checklist Score: 0%[39m
[LOG] [31m      • PASSIVITÄT: 0%[39m
[LOG] [31m      • BESITZ: 0%[39m
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
[LOG] [32m   Selected checklists: PASSIVITÄT[39m
[LOG] [36m   📊 Checklist Score: 8%[39m
[LOG] [31m      • PASSIVITÄT: 8%[39m
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
[LOG] [36m📊 Overall Checklist Performance: 1%[39m
[LOG] [32m✅ Excellent (80%+): 0 files[39m
[LOG] [33m⚠️  Good (60-79%): 0 files[39m
[LOG] [31m❌ Needs Work (<60%): 9 files[39m
[LOG] [31m[39m
[31m🎯 FILES REQUIRING PSYCHOLOGICAL DEPTH ENHANCEMENT:[39m
[LOG] [31m   • bindungssehnsucht-normal.md: 0%[39m
[LOG] [90m     → Improve PASSIVITÄT theme (0%): Integriere "Führung übernehmen", "einer entscheidet", "sich führen lassen"[39m
[LOG] [90m     → Improve BESITZ theme (0%): Verstärke "gehören", "exklusiv sein", "markiert werden"[39m
[LOG] [31m   • das-erste-mal.md: 0%[39m
[LOG] [90m     → Improve PASSIVITÄT theme (0%): Integriere "Führung übernehmen", "einer entscheidet", "sich führen lassen"[39m
[LOG] [90m     → Improve BESITZ theme (0%): Verstärke "gehören", "exklusiv sein", "markiert werden"[39m
[LOG] [31m   • der-sichere-hafen.md: 0%[39m
[LOG] [90m     → Improve PASSIVITÄT theme (0%): Integriere "Führung übernehmen", "einer entscheidet", "sich führen lassen"[39m
[LOG] [90m     → Improve BESITZ theme (0%): Verstärke "gehören", "exklusiv sein", "markiert werden"[39m
[LOG] [31m   • emotionale-leere.md: 0%[39m
[LOG] [90m     → Improve PASSIVITÄT theme (0%): Integriere "Führung übernehmen", "einer entscheidet", "sich führen lassen"[39m
[LOG] [31m   • erschoepft-vom-stark-sein.md: 0%[39m
[LOG] [90m     → Improve PASSIVITÄT theme (0%): Integriere "Führung übernehmen", "einer entscheidet", "sich führen lassen"[39m
[LOG] [31m   • ich-will-einfach-gehalten-werden.md: 5%[39m
[LOG] [90m     → Improve PASSIVITÄT theme (8%): Integriere "Führung übernehmen", "einer entscheidet", "sich führen lassen"[39m
[LOG] [90m     → Improve BESITZ theme (0%): Verstärke "gehören", "exklusiv sein", "markiert werden"[39m
[LOG] [31m   • kontrolle-abgeben.md: 0%[39m
[LOG] [90m     → Improve PASSIVITÄT theme (0%): Integriere "Führung übernehmen", "einer entscheidet", "sich führen lassen"[39m
[LOG] [90m     → Improve BESITZ theme (0%): Verstärke "gehören", "exklusiv sein", "markiert werden"[39m
[LOG] [31m   • sehnsucht-nach-hingabe.md: 0%[39m
[LOG] [90m     → Improve PASSIVITÄT theme (0%): Integriere "Führung übernehmen", "einer entscheidet", "sich führen lassen"[39m
[LOG] [90m     → Improve BESITZ theme (0%): Verstärke "gehören", "exklusiv sein", "markiert werden"[39m
[LOG] [31m   • zu-viel-liebe-zu-wenig-liebe.md: 8%[39m
[LOG] [90m     → Improve PASSIVITÄT theme (8%): Integriere "Führung übernehmen", "einer entscheidet", "sich führen lassen"[39m
[LOG] [34m[39m
[34m🔄 CHECKLIST ROTATION STATUS:[39m
[LOG] [90m   bindungssehnsucht-normal.md: checklist-passivitaet, checklist-besitz (10 unused)[39m
[LOG] [90m   das-erste-mal.md: checklist-passivitaet, checklist-besitz (10 unused)[39m
[LOG] [90m   der-sichere-hafen.md: checklist-passivitaet, checklist-besitz (10 unused)[39m
[LOG] [90m   emotionale-leere.md: checklist-passivitaet (11 unused)[39m
[LOG] [90m   erschoepft-vom-stark-sein.md: checklist-passivitaet (11 unused)[39m
[LOG] [90m   ich-will-einfach-gehalten-werden.md: checklist-passivitaet, checklist-besitz (10 unused)[39m
[LOG] [90m   kontrolle-abgeben.md: checklist-passivitaet, checklist-besitz (10 unused)[39m
[LOG] [90m   sehnsucht-nach-hingabe.md: checklist-passivitaet, checklist-besitz (10 unused)[39m
[LOG] [90m   zu-viel-liebe-zu-wenig-liebe.md: checklist-passivitaet (11 unused)[39m
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
[36m   1. der-sichere-hafen.md (Score: 45% - Gap: 15%)[39m
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
[LOG] [33m   Timestamp: 2025-07-02T19:56:42.671Z[39m
[LOG] [33m   Files affected: 7/9[39m
[LOG] [33m   First problem: der-sichere-hafen.md (45%)[39m
[LOG] [33m   Recommended action: CONTENT_OPTIMIZATION_RECOMMENDED[39m
[LOG] [33m[39m
[33m📋 DETAILED QUALITY REPORT:[39m
[LOG] [33m   1. INTENTION_OPTIMIZATION_REQUIRED: der-sichere-hafen.md (Score: 45%, Issues: 0)[39m
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
[LOG] [34m[39m
[34m🔍 MULTI-FILE SINNLOSIGKEITS-CHECKER wird getriggert...[39m
[LOG] [31m❌ Multi-File-Checker Fehler:[39m
[LOG] [31mCommand failed: node scripts/build-checks/check_scripts/multi-file-sinnlosigkeits-checker.js[39m
[31mfile:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/multi-file-sinnlosigkeits-checker.js:42[39m
[31mconst checker = new MultiFileSinnlosigkeitsChecker();[39m
[31m      ^^^^^^^[39m
[31m[39m
[31mSyntaxError: Unexpected identifier 'checker'[39m
[31m    at compileSourceTextModule (node:internal/modules/esm/utils:338:16)[39m
[31m    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:102:18)[39m
[31m    at #translate (node:internal/modules/esm/loader:468:12)[39m
[31m    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:515:27)[39m
[31m    at async ModuleJob._link (node:internal/modules/esm/module_job:115:19)[39m
[31m[39m
[31mNode.js v22.14.0[39m
[31m[39m
```

## System-Information

- **Datum:** 2.7.2025, 21:56:42
- **Timezone:** Europe/Zurich
- **Platform:** win32
- **Architecture:** x64
- **Memory Usage:** 23MB

## Quality-Alerts & Build-Issues

### 🚨 ERRORS (8)

- 🚨🚨🚨 CRITICAL ERROR IN multi-file-sinnlosigkeits-checker.js 🚨🚨🚨
- 📍 Error Type: SYNTAX ERROR
- 📍 Fehler in Datei checker.js, Zeile: 42
- 📋 Stderr: file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/multi-file-sinnlosigkeits-checker.js:42
const checker = new MultiFileSinnlosigkeitsChecker();
      ^^^^^^^

SyntaxError: Unexpected identifier 'checker'
    at compileSourceTextModule (node:internal/modules/esm/utils:338:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:102:18)
    at #translate (node:internal/modules/esm/loader:468:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:515:27)
    at async ModuleJob._link (node:internal/modules/esm/module_job:115:19)

Node.js v22.14.0

- 📋 Stdout: 
- 🚨 CRITICAL BUILD-BREAKING ERROR: multi-file-sinnlosigkeits-checker.js contains errors that prevent execution
- Full Error Details: {
  "script": "multi-file-sinnlosigkeits-checker.js",
  "exitCode": 1,
  "stderr": "file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/multi-file-sinnlosigkeits-checker.js:42\r\nconst checker = new MultiFileSinnlosigkeitsChecker();\r\n      ^^^^^^^\r\n\r\nSyntaxError: Unexpected identifier 'checker'\r\n    at compileSourceTextModule (node:internal/modules/esm/utils:338:16)\r\n    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:102:18)\r\n    at #translate (node:internal/modules/esm/loader:468:12)\r\n    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:515:27)\r\n    at async ModuleJob._link (node:internal/modules/esm/module_job:115:19)\r\n\r\nNode.js v22.14.0\r\n",
  "stdout": "",
  "message": "Command failed: node C:\\apps\\website\\einfach-passieren-lassen\\scripts\\build-checks\\check_scripts\\multi-file-sinnlosigkeits-checker.js\nfile:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/multi-file-sinnlosigkeits-checker.js:42\r\nconst checker = new MultiFileSinnlosigkeitsChecker();\r\n      ^^^^^^^\r\n\r\nSyntaxError: Unexpected identifier 'checker'\r\n    at compileSourceTextModule (node:internal/modules/esm/utils:338:16)\r\n    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:102:18)\r\n    at #translate (node:internal/modules/esm/loader:468:12)\r\n    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:515:27)\r\n    at async ModuleJob._link (node:internal/modules/esm/module_job:115:19)\r\n\r\nNode.js v22.14.0\r\n",
  "timestamp": "2025-07-02T19:56:42.394Z"
}
- ⚠️ Build continues but multi-file-sinnlosigkeits-checker.js functionality is disabled!

### 💥 CRITICAL MESSAGES (5)

- 🚨🚨🚨 CRITICAL ERROR IN multi-file-sinnlosigkeits-checker.js 🚨🚨🚨
- 🚨 CRITICAL BUILD-BREAKING ERROR: multi-file-sinnlosigkeits-checker.js contains errors that prevent execution
- 
� QUALITY-ALERT DETAILS:
- 📋 QUALITY-ALERTS GESPEICHERT FÜR SPÄTERE VERBESSERUNG!
- 📝 KI KANN CONTENT NACH QUALITY-ALERTS OPTIMIEREN



---
*Automatisch generiert durch TerminalLogger*
