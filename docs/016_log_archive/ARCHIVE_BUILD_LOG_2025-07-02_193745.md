# Build Process Log
            
**Timestamp:** 2025-07-02T19:37:45.168Z
**Dauer:** 834ms
**Log-Datei:** docs\015_build_logs\BUILD_LOG_2025-07-02_193745.md
**Node-Version:** v22.14.0
**Arbeitsverzeichnis:** C:\apps\website\einfach-passieren-lassen

## Vollständige Terminal-Ausgabe

### 1. [LOG] 2025-07-02T19:37:45.169Z

```
🚀 STARTE INTELLIGENT BUILD PROCESS...
```

### 2. [LOG] 2025-07-02T19:37:45.170Z

```
Neue Intention-Validation aktiv!
```

### 3. [LOG] 2025-07-02T19:37:45.170Z

```

▶️ Führe Check-Skript aus: advanced-content-validator.js
```

### 4. [LOG] 2025-07-02T19:37:45.232Z

```
✅ advanced-content-validator.js erfolgreich ausgeführt
```

### 5. [LOG] 2025-07-02T19:37:45.232Z

```

▶️ Führe Check-Skript aus: checklist-cli.js
```

### 6. [ERROR] 2025-07-02T19:37:45.288Z

```
🚨🚨🚨 CRITICAL ERROR IN checklist-cli.js 🚨🚨🚨
```

### 7. [ERROR] 2025-07-02T19:37:45.288Z

```
📍 Error Type: MODULE ERROR
```

### 8. [ERROR] 2025-07-02T19:37:45.288Z

```
📋 Stderr: node:internal/modules/esm/resolve:275
    throw new ERR_MODULE_NOT_FOUND(
          ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find module 'C:\apps\website\einfach-passieren-lassen\scripts\advanced-content-validator.js' imported from C:\apps\website\einfach-passieren-lassen\scripts\build-checks\check_scripts\checklist-cli.js
    at finalizeResolution (node:internal/modules/esm/resolve:275:11)
    at moduleResolve (node:internal/modules/esm/resolve:860:10)
    at defaultResolve (node:internal/modules/esm/resolve:984:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:685:12)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:634:25)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:617:38)
    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:273:38)
    at ModuleJob._link (node:internal/modules/esm/module_job:135:49) {
  code: 'ERR_MODULE_NOT_FOUND',
  url: 'file:///C:/apps/website/einfach-passieren-lassen/scripts/advanced-content-validator.js'
}

Node.js v22.14.0

```

### 9. [ERROR] 2025-07-02T19:37:45.289Z

```
📋 Stdout: 
```

### 10. [ERROR] 2025-07-02T19:37:45.289Z

```
🚨 CRITICAL BUILD-BREAKING ERROR: checklist-cli.js contains errors that prevent execution
```

### 11. [ERROR] 2025-07-02T19:37:45.289Z

```
Full Error Details: {
  "script": "checklist-cli.js",
  "exitCode": 1,
  "stderr": "node:internal/modules/esm/resolve:275\r\n    throw new ERR_MODULE_NOT_FOUND(\r\n          ^\r\n\r\nError [ERR_MODULE_NOT_FOUND]: Cannot find module 'C:\\apps\\website\\einfach-passieren-lassen\\scripts\\advanced-content-validator.js' imported from C:\\apps\\website\\einfach-passieren-lassen\\scripts\\build-checks\\check_scripts\\checklist-cli.js\r\n    at finalizeResolution (node:internal/modules/esm/resolve:275:11)\r\n    at moduleResolve (node:internal/modules/esm/resolve:860:10)\r\n    at defaultResolve (node:internal/modules/esm/resolve:984:11)\r\n    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:685:12)\r\n    at #cachedDefaultResolve (node:internal/modules/esm/loader:634:25)\r\n    at ModuleLoader.resolve (node:internal/modules/esm/loader:617:38)\r\n    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:273:38)\r\n    at ModuleJob._link (node:internal/modules/esm/module_job:135:49) {\r\n  code: 'ERR_MODULE_NOT_FOUND',\r\n  url: 'file:///C:/apps/website/einfach-passieren-lassen/scripts/advanced-content-validator.js'\r\n}\r\n\r\nNode.js v22.14.0\r\n",
  "stdout": "",
  "message": "Command failed: node C:\\apps\\website\\einfach-passieren-lassen\\scripts\\build-checks\\check_scripts\\checklist-cli.js\nnode:internal/modules/esm/resolve:275\r\n    throw new ERR_MODULE_NOT_FOUND(\r\n          ^\r\n\r\nError [ERR_MODULE_NOT_FOUND]: Cannot find module 'C:\\apps\\website\\einfach-passieren-lassen\\scripts\\advanced-content-validator.js' imported from C:\\apps\\website\\einfach-passieren-lassen\\scripts\\build-checks\\check_scripts\\checklist-cli.js\r\n    at finalizeResolution (node:internal/modules/esm/resolve:275:11)\r\n    at moduleResolve (node:internal/modules/esm/resolve:860:10)\r\n    at defaultResolve (node:internal/modules/esm/resolve:984:11)\r\n    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:685:12)\r\n    at #cachedDefaultResolve (node:internal/modules/esm/loader:634:25)\r\n    at ModuleLoader.resolve (node:internal/modules/esm/loader:617:38)\r\n    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:273:38)\r\n    at ModuleJob._link (node:internal/modules/esm/module_job:135:49) {\r\n  code: 'ERR_MODULE_NOT_FOUND',\r\n  url: 'file:///C:/apps/website/einfach-passieren-lassen/scripts/advanced-content-validator.js'\r\n}\r\n\r\nNode.js v22.14.0\r\n",
  "timestamp": "2025-07-02T19:37:45.288Z"
}
```

### 12. [ERROR] 2025-07-02T19:37:45.289Z

```
⚠️ Build continues but checklist-cli.js functionality is disabled!
```

### 13. [LOG] 2025-07-02T19:37:45.290Z

```

▶️ Führe Check-Skript aus: comprehensiveCheck.js
```

### 14. [ERROR] 2025-07-02T19:37:45.341Z

```
🚨🚨🚨 CRITICAL ERROR IN comprehensiveCheck.js 🚨🚨🚨
```

### 15. [ERROR] 2025-07-02T19:37:45.341Z

```
📍 Error Type: SYNTAX ERROR
```

### 16. [ERROR] 2025-07-02T19:37:45.341Z

```
💡 DETECTED TYPO: Möglicherweise "reque" statt "require" oder ähnlicher Tippfehler!
```

### 17. [ERROR] 2025-07-02T19:37:45.341Z

```
📍 Fehler in Datei comprehensiveCheck.js, Zeile: 6
```

### 18. [ERROR] 2025-07-02T19:37:45.342Z

```
📋 Stderr: file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/comprehensiveCheck.js:6
const fs = require('fs');
           ^

ReferenceError: require is not defined in ES module scope, you can use import instead
This file is being treated as an ES module because it has a '.js' file extension and 'C:\apps\website\einfach-passieren-lassen\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
    at file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/comprehensiveCheck.js:6:12
    at ModuleJob.run (node:internal/modules/esm/module_job:271:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)

Node.js v22.14.0

```

### 19. [ERROR] 2025-07-02T19:37:45.342Z

```
📋 Stdout: 
```

### 20. [ERROR] 2025-07-02T19:37:45.342Z

```
🚨 CRITICAL BUILD-BREAKING ERROR: comprehensiveCheck.js contains errors that prevent execution
```

### 21. [ERROR] 2025-07-02T19:37:45.342Z

```
Full Error Details: {
  "script": "comprehensiveCheck.js",
  "exitCode": 1,
  "stderr": "file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/comprehensiveCheck.js:6\r\nconst fs = require('fs');\r\n           ^\r\n\r\nReferenceError: require is not defined in ES module scope, you can use import instead\r\nThis file is being treated as an ES module because it has a '.js' file extension and 'C:\\apps\\website\\einfach-passieren-lassen\\package.json' contains \"type\": \"module\". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.\r\n    at file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/comprehensiveCheck.js:6:12\r\n    at ModuleJob.run (node:internal/modules/esm/module_job:271:25)\r\n    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)\r\n    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)\r\n\r\nNode.js v22.14.0\r\n",
  "stdout": "",
  "message": "Command failed: node C:\\apps\\website\\einfach-passieren-lassen\\scripts\\build-checks\\check_scripts\\comprehensiveCheck.js\nfile:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/comprehensiveCheck.js:6\r\nconst fs = require('fs');\r\n           ^\r\n\r\nReferenceError: require is not defined in ES module scope, you can use import instead\r\nThis file is being treated as an ES module because it has a '.js' file extension and 'C:\\apps\\website\\einfach-passieren-lassen\\package.json' contains \"type\": \"module\". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.\r\n    at file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/comprehensiveCheck.js:6:12\r\n    at ModuleJob.run (node:internal/modules/esm/module_job:271:25)\r\n    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)\r\n    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)\r\n\r\nNode.js v22.14.0\r\n",
  "timestamp": "2025-07-02T19:37:45.341Z"
}
```

### 22. [ERROR] 2025-07-02T19:37:45.342Z

```
⚠️ Build continues but comprehensiveCheck.js functionality is disabled!
```

### 23. [LOG] 2025-07-02T19:37:45.342Z

```

▶️ Führe Check-Skript aus: keyword-cleanup.js
```

### 24. [LOG] 2025-07-02T19:37:45.401Z

```
✅ keyword-cleanup.js erfolgreich ausgeführt
```

### 25. [LOG] 2025-07-02T19:37:45.401Z

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

   ✅ "eifach ghöre" → "einfach dazugehören" (2x)
   ✅ "du bisch mini" → "du gehörst zu mir" (1x)
📝 zu-viel-liebe-zu-wenig-liebe.md: 3 Ersetzungen

✅ CLEANUP ABGESCHLOSSEN: 3 Keywords ersetzt
💡 Hochdeutsche Longtails haben bessere SEO-Performance
🎯 Empfehlung: pnpm build ausführen für Update
```

### 26. [LOG] 2025-07-02T19:37:45.401Z

```

▶️ Führe Check-Skript aus: logCleanup.js
```

### 27. [LOG] 2025-07-02T19:37:45.450Z

```
✅ logCleanup.js erfolgreich ausgeführt
```

### 28. [LOG] 2025-07-02T19:37:45.450Z

```

▶️ Führe Check-Skript aus: masterBuildChecker.js
```

### 29. [ERROR] 2025-07-02T19:37:45.501Z

```
🚨🚨🚨 CRITICAL ERROR IN masterBuildChecker.js 🚨🚨🚨
```

### 30. [ERROR] 2025-07-02T19:37:45.501Z

```
📍 Error Type: SYNTAX ERROR
```

### 31. [ERROR] 2025-07-02T19:37:45.501Z

```
💡 DETECTED TYPO: Möglicherweise "reque" statt "require" oder ähnlicher Tippfehler!
```

### 32. [ERROR] 2025-07-02T19:37:45.501Z

```
📍 Fehler in Datei masterBuildChecker.js, Zeile: 6
```

### 33. [ERROR] 2025-07-02T19:37:45.502Z

```
📋 Stderr: file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/masterBuildChecker.js:6
const fs = require('fs');
           ^

ReferenceError: require is not defined in ES module scope, you can use import instead
This file is being treated as an ES module because it has a '.js' file extension and 'C:\apps\website\einfach-passieren-lassen\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
    at file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/masterBuildChecker.js:6:12
    at ModuleJob.run (node:internal/modules/esm/module_job:271:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)

Node.js v22.14.0

```

### 34. [ERROR] 2025-07-02T19:37:45.503Z

```
📋 Stdout: 
```

### 35. [ERROR] 2025-07-02T19:37:45.503Z

```
🚨 CRITICAL BUILD-BREAKING ERROR: masterBuildChecker.js contains errors that prevent execution
```

### 36. [ERROR] 2025-07-02T19:37:45.503Z

```
Full Error Details: {
  "script": "masterBuildChecker.js",
  "exitCode": 1,
  "stderr": "file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/masterBuildChecker.js:6\r\nconst fs = require('fs');\r\n           ^\r\n\r\nReferenceError: require is not defined in ES module scope, you can use import instead\r\nThis file is being treated as an ES module because it has a '.js' file extension and 'C:\\apps\\website\\einfach-passieren-lassen\\package.json' contains \"type\": \"module\". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.\r\n    at file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/masterBuildChecker.js:6:12\r\n    at ModuleJob.run (node:internal/modules/esm/module_job:271:25)\r\n    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)\r\n    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)\r\n\r\nNode.js v22.14.0\r\n",
  "stdout": "",
  "message": "Command failed: node C:\\apps\\website\\einfach-passieren-lassen\\scripts\\build-checks\\check_scripts\\masterBuildChecker.js\nfile:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/masterBuildChecker.js:6\r\nconst fs = require('fs');\r\n           ^\r\n\r\nReferenceError: require is not defined in ES module scope, you can use import instead\r\nThis file is being treated as an ES module because it has a '.js' file extension and 'C:\\apps\\website\\einfach-passieren-lassen\\package.json' contains \"type\": \"module\". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.\r\n    at file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/masterBuildChecker.js:6:12\r\n    at ModuleJob.run (node:internal/modules/esm/module_job:271:25)\r\n    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)\r\n    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)\r\n\r\nNode.js v22.14.0\r\n",
  "timestamp": "2025-07-02T19:37:45.501Z"
}
```

### 37. [ERROR] 2025-07-02T19:37:45.503Z

```
⚠️ Build continues but masterBuildChecker.js functionality is disabled!
```

### 38. [LOG] 2025-07-02T19:37:45.504Z

```

▶️ Führe Check-Skript aus: multi-file-sinnlosigkeits-checker.js
```

### 39. [LOG] 2025-07-02T19:37:45.568Z

```
✅ multi-file-sinnlosigkeits-checker.js erfolgreich ausgeführt
```

### 40. [LOG] 2025-07-02T19:37:45.568Z

```

▶️ Führe Check-Skript aus: seoCheck.js
```

### 41. [LOG] 2025-07-02T19:37:45.615Z

```
✅ seoCheck.js erfolgreich ausgeführt
```

### 42. [LOG] 2025-07-02T19:37:45.617Z

```
🧹 STARTING CLEAN BUILD - Lösche vorhandene HTML-Dateien...
```

### 43. [LOG] 2025-07-02T19:37:45.617Z

```
📋 Gefunden: 10 Markdown-Dateien für Clean-Build
```

### 44. [LOG] 2025-07-02T19:37:45.618Z

```
   🗑️ Gelöscht: bindungssehnsucht-normal.html
```

### 45. [LOG] 2025-07-02T19:37:45.619Z

```
   🗑️ Gelöscht: das-erste-mal.html
```

### 46. [LOG] 2025-07-02T19:37:45.619Z

```
   🗑️ Gelöscht: der-sichere-hafen.html
```

### 47. [LOG] 2025-07-02T19:37:45.620Z

```
   🗑️ Gelöscht: emotionale-leere.html
```

### 48. [LOG] 2025-07-02T19:37:45.621Z

```
   🗑️ Gelöscht: erschoepft-vom-stark-sein.html
```

### 49. [LOG] 2025-07-02T19:37:45.621Z

```
   🗑️ Gelöscht: ich-will-einfach-gehalten-werden.html
```

### 50. [LOG] 2025-07-02T19:37:45.622Z

```
   🗑️ Gelöscht: kontrolle-abgeben.html
```

### 51. [LOG] 2025-07-02T19:37:45.622Z

```
   ➖ Nicht vorhanden: README.html
```

### 52. [LOG] 2025-07-02T19:37:45.623Z

```
   🗑️ Gelöscht: sehnsucht-nach-hingabe.html
```

### 53. [LOG] 2025-07-02T19:37:45.624Z

```
   🗑️ Gelöscht: zu-viel-liebe-zu-wenig-liebe.html
```

### 54. [LOG] 2025-07-02T19:37:45.624Z

```
✅ CLEAN COMPLETED: 9 Dateien gelöscht, 0 übersprungen
```

### 55. [LOG] 2025-07-02T19:37:45.624Z

```
🔨 Starte saubere Neu-Generierung...
```

### 56. [INFO] 2025-07-02T19:37:45.624Z

```
Clean Build: 9 HTML-Dateien gelöscht
```

### 57. [LOG] 2025-07-02T19:37:45.626Z

```

🚀 STARTE INTELLIGENT BUILD PROCESS...
```

### 58. [LOG] 2025-07-02T19:37:45.626Z

```
📋 Terminal-Ausgabe wird gespeichert in: docs\015_build_logs\BUILD_LOG_2025-07-02_193745.md
```

### 59. [LOG] 2025-07-02T19:37:45.626Z

```
Neue Intention-Validation aktiv!

```

### 60. [LOG] 2025-07-02T19:37:45.629Z

```
📋 Loaded 12 advanced checklists
```

### 61. [LOG] 2025-07-02T19:37:45.630Z

```
🧠 ADVANCED CHECKLIST SYSTEM ACTIVATED
```

### 62. [LOG] 2025-07-02T19:37:45.630Z

```
   → Intelligent rotation algorithm loaded
```

### 63. [LOG] 2025-07-02T19:37:45.630Z

```
   → 12 psychological validation modules ready
```

### 64. [LOG] 2025-07-02T19:37:45.630Z

```

🔍 FÜHRE ERWEITERTE SEO-VALIDIERUNG DURCH...
```

### 65. [LOG] 2025-07-02T19:37:45.631Z

```
   ℹ️ Sitemap enthält 14 URLs
```

### 66. [LOG] 2025-07-02T19:37:45.633Z

```
✅ Globale SEO-Validierung erfolgreich - Keine Issues gefunden
```

### 67. [LOG] 2025-07-02T19:37:45.634Z

```
🔍 Sammle VS Code Problems...
```

### 68. [PROBLEM] 2025-07-02T19:37:45.642Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:40 - Missing semicolon
```

### 69. [PROBLEM] 2025-07-02T19:37:45.643Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:1943 - Missing semicolon
```

### 70. [PROBLEM] 2025-07-02T19:37:45.643Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:2327 - Missing semicolon
```

### 71. [PROBLEM] 2025-07-02T19:37:45.643Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:2713 - Missing semicolon
```

### 72. [PROBLEM] 2025-07-02T19:37:45.643Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:2741 - Missing semicolon
```

### 73. [PROBLEM] 2025-07-02T19:37:45.643Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:3562 - Missing semicolon
```

### 74. [PROBLEM] 2025-07-02T19:37:45.644Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:3599 - Missing semicolon
```

### 75. [PROBLEM] 2025-07-02T19:37:45.644Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:4316 - Missing semicolon
```

### 76. [PROBLEM] 2025-07-02T19:37:45.644Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:5013 - Missing semicolon
```

### 77. [PROBLEM] 2025-07-02T19:37:45.644Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:5406 - Missing semicolon
```

### 78. [PROBLEM] 2025-07-02T19:37:45.645Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6202 - Missing semicolon
```

### 79. [PROBLEM] 2025-07-02T19:37:45.645Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6587 - Missing semicolon
```

### 80. [PROBLEM] 2025-07-02T19:37:45.645Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6720 - Missing semicolon
```

### 81. [PROBLEM] 2025-07-02T19:37:45.645Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6743 - Missing semicolon
```

### 82. [PROBLEM] 2025-07-02T19:37:45.645Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6803 - Missing semicolon
```

### 83. [PROBLEM] 2025-07-02T19:37:45.645Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6895 - Missing semicolon
```

### 84. [PROBLEM] 2025-07-02T19:37:45.645Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6923 - Missing semicolon
```

### 85. [PROBLEM] 2025-07-02T19:37:45.645Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:6954 - Missing semicolon
```

### 86. [PROBLEM] 2025-07-02T19:37:45.645Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7029 - Missing semicolon
```

### 87. [PROBLEM] 2025-07-02T19:37:45.645Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7054 - Missing semicolon
```

### 88. [PROBLEM] 2025-07-02T19:37:45.645Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7099 - Missing semicolon
```

### 89. [PROBLEM] 2025-07-02T19:37:45.645Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7531 - Missing semicolon
```

### 90. [PROBLEM] 2025-07-02T19:37:45.645Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7585 - Missing semicolon
```

### 91. [PROBLEM] 2025-07-02T19:37:45.645Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:7983 - Missing semicolon
```

### 92. [PROBLEM] 2025-07-02T19:37:45.645Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:8071 - Missing semicolon
```

### 93. [PROBLEM] 2025-07-02T19:37:45.645Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:8075 - Missing semicolon
```

### 94. [PROBLEM] 2025-07-02T19:37:45.645Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:8112 - Missing semicolon
```

### 95. [PROBLEM] 2025-07-02T19:37:45.645Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:8493 - Missing semicolon
```

### 96. [PROBLEM] 2025-07-02T19:37:45.645Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:9746 - Missing semicolon
```

### 97. [PROBLEM] 2025-07-02T19:37:45.645Z

```
[WARNING] app-gui\dist-electron\index-Ckhtba7t.js:9945 - Console.log statement found - consider removing in production
```

### 98. [PROBLEM] 2025-07-02T19:37:45.647Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:40 - Missing semicolon
```

### 99. [PROBLEM] 2025-07-02T19:37:45.647Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:1950 - Missing semicolon
```

### 100. [PROBLEM] 2025-07-02T19:37:45.647Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:2360 - Missing semicolon
```

### 101. [PROBLEM] 2025-07-02T19:37:45.648Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:2762 - Missing semicolon
```

### 102. [PROBLEM] 2025-07-02T19:37:45.648Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:2790 - Missing semicolon
```

### 103. [PROBLEM] 2025-07-02T19:37:45.648Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:3618 - Missing semicolon
```

### 104. [PROBLEM] 2025-07-02T19:37:45.648Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:3655 - Missing semicolon
```

### 105. [PROBLEM] 2025-07-02T19:37:45.648Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:4372 - Missing semicolon
```

### 106. [PROBLEM] 2025-07-02T19:37:45.648Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:5069 - Missing semicolon
```

### 107. [PROBLEM] 2025-07-02T19:37:45.648Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:5462 - Missing semicolon
```

### 108. [PROBLEM] 2025-07-02T19:37:45.648Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6258 - Missing semicolon
```

### 109. [PROBLEM] 2025-07-02T19:37:45.648Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6643 - Missing semicolon
```

### 110. [PROBLEM] 2025-07-02T19:37:45.649Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6776 - Missing semicolon
```

### 111. [PROBLEM] 2025-07-02T19:37:45.649Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6799 - Missing semicolon
```

### 112. [PROBLEM] 2025-07-02T19:37:45.649Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6859 - Missing semicolon
```

### 113. [PROBLEM] 2025-07-02T19:37:45.649Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6951 - Missing semicolon
```

### 114. [PROBLEM] 2025-07-02T19:37:45.649Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:6979 - Missing semicolon
```

### 115. [PROBLEM] 2025-07-02T19:37:45.649Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:7010 - Missing semicolon
```

### 116. [PROBLEM] 2025-07-02T19:37:45.649Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:7085 - Missing semicolon
```

### 117. [PROBLEM] 2025-07-02T19:37:45.649Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:7110 - Missing semicolon
```

### 118. [PROBLEM] 2025-07-02T19:37:45.649Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:7155 - Missing semicolon
```

### 119. [PROBLEM] 2025-07-02T19:37:45.649Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:7587 - Missing semicolon
```

### 120. [PROBLEM] 2025-07-02T19:37:45.649Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:7641 - Missing semicolon
```

### 121. [PROBLEM] 2025-07-02T19:37:45.649Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:8039 - Missing semicolon
```

### 122. [PROBLEM] 2025-07-02T19:37:45.649Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:8127 - Missing semicolon
```

### 123. [PROBLEM] 2025-07-02T19:37:45.649Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:8131 - Missing semicolon
```

### 124. [PROBLEM] 2025-07-02T19:37:45.649Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:8168 - Missing semicolon
```

### 125. [PROBLEM] 2025-07-02T19:37:45.649Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:8549 - Missing semicolon
```

### 126. [PROBLEM] 2025-07-02T19:37:45.649Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:9802 - Missing semicolon
```

### 127. [PROBLEM] 2025-07-02T19:37:45.649Z

```
[WARNING] app-gui\dist-electron\index-DhEd7u67.js:10001 - Console.log statement found - consider removing in production
```

### 128. [PROBLEM] 2025-07-02T19:37:45.652Z

```
[WARNING] app-gui\src\App.jsx:4 - Missing semicolon
```

### 129. [PROBLEM] 2025-07-02T19:37:45.652Z

```
[WARNING] app-gui\src\App.jsx:72 - Missing semicolon
```

### 130. [PROBLEM] 2025-07-02T19:37:45.652Z

```
[WARNING] app-gui\src\App.jsx:99 - Missing semicolon
```

### 131. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\mainBuild.js:52 - Console.log statement found - consider removing in production
```

### 132. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\mainBuild.js:64 - Console.log statement found - consider removing in production
```

### 133. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\mainBuild.js:98 - Console.log statement found - consider removing in production
```

### 134. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\mainBuild.js:102 - Console.log statement found - consider removing in production
```

### 135. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\mainBuild.js:104 - Console.log statement found - consider removing in production
```

### 136. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\mainBuild.js:110 - Console.log statement found - consider removing in production
```

### 137. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\mainBuild.js:112 - Console.log statement found - consider removing in production
```

### 138. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\mainBuild.js:116 - Console.log statement found - consider removing in production
```

### 139. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\mainBuild.js:123 - Console.log statement found - consider removing in production
```

### 140. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\mainBuild.js:145 - Console.log statement found - consider removing in production
```

### 141. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\mainBuild.js:147 - Missing semicolon
```

### 142. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\mainBuild.js:174 - Missing semicolon
```

### 143. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\mainBuild.js:205 - Console.log statement found - consider removing in production
```

### 144. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\mainBuild.js:231 - Console.log statement found - consider removing in production
```

### 145. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\mainBuild.js:254 - Console.log statement found - consider removing in production
```

### 146. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\modules\contentOptimizer.js:53 - Missing semicolon
```

### 147. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\modules\contentOptimizer.js:66 - Missing semicolon
```

### 148. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\modules\contentOptimizer.js:111 - Missing semicolon
```

### 149. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\modules\contentOptimizer.js:157 - Missing semicolon
```

### 150. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\modules\contentOptimizer.js:338 - Missing semicolon
```

### 151. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\modules\fileUtils.js:22 - Console.log statement found - consider removing in production
```

### 152. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\modules\fileUtils.js:45 - Console.log statement found - consider removing in production
```

### 153. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\modules\fileUtils.js:90 - Console.log statement found - consider removing in production
```

### 154. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\modules\fileUtils.js:151 - Console.log statement found - consider removing in production
```

### 155. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\modules\fileUtils.js:174 - Console.log statement found - consider removing in production
```

### 156. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\modules\logger.js:17 - Console.log statement found - consider removing in production
```

### 157. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\modules\logger.js:34 - Console.log statement found - consider removing in production
```

### 158. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\modules\logger.js:62 - Console.log statement found - consider removing in production
```

### 159. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[ERROR] build-process\modules\logger.js:145 - Typo: "fucntion" should be "function"
```

### 160. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[ERROR] build-process\modules\logger.js:146 - Typo: "fucntion" should be "function"
```

### 161. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\modules\logger.js:243 - Missing semicolon
```

### 162. [PROBLEM] 2025-07-02T19:37:45.653Z

```
[WARNING] build-process\modules\logger.js:276 - Console.log statement found - consider removing in production
```

### 163. [PROBLEM] 2025-07-02T19:37:45.654Z

```
[WARNING] build-process\modules\seoCheck.js:20 - Console.log statement found - consider removing in production
```

### 164. [PROBLEM] 2025-07-02T19:37:45.654Z

```
[WARNING] build-process\modules\seoCheck.js:94 - Console.log statement found - consider removing in production
```

### 165. [PROBLEM] 2025-07-02T19:37:45.654Z

```
[WARNING] build-process\modules\seoCheck.js:96 - Console.log statement found - consider removing in production
```

### 166. [PROBLEM] 2025-07-02T19:37:45.654Z

```
[WARNING] build-process\modules\seoCheck.js:109 - Console.log statement found - consider removing in production
```

### 167. [PROBLEM] 2025-07-02T19:37:45.654Z

```
[WARNING] build-process\modules\seoCheck.js:248 - Console.log statement found - consider removing in production
```

### 168. [PROBLEM] 2025-07-02T19:37:45.654Z

```
[WARNING] build-process\modules\seoCheck.js:335 - Console.log statement found - consider removing in production
```

### 169. [PROBLEM] 2025-07-02T19:37:45.654Z

```
[WARNING] build-process\modules\seoCheck.js:406 - Console.log statement found - consider removing in production
```

### 170. [PROBLEM] 2025-07-02T19:37:45.654Z

```
[WARNING] build-process\modules\seoCheck.js:423 - Missing semicolon
```

### 171. [PROBLEM] 2025-07-02T19:37:45.654Z

```
[WARNING] build-process\modules\seoCheck.js:505 - Console.log statement found - consider removing in production
```

### 172. [PROBLEM] 2025-07-02T19:37:45.654Z

```
[WARNING] build-process\modules\seoCheck.js:513 - Missing semicolon
```

### 173. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:17 - Missing semicolon
```

### 174. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:32 - Console.log statement found - consider removing in production
```

### 175. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:34 - Console.log statement found - consider removing in production
```

### 176. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:50 - Missing semicolon
```

### 177. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:118 - Missing semicolon
```

### 178. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:143 - Missing semicolon
```

### 179. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:217 - Missing semicolon
```

### 180. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:247 - Missing semicolon
```

### 181. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:297 - Missing semicolon
```

### 182. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:330 - Missing semicolon
```

### 183. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:339 - Console.log statement found - consider removing in production
```

### 184. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:340 - Console.log statement found - consider removing in production
```

### 185. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:346 - Missing semicolon
```

### 186. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:355 - Console.log statement found - consider removing in production
```

### 187. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:395 - Missing semicolon
```

### 188. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:445 - Missing semicolon
```

### 189. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:453 - Missing semicolon
```

### 190. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:488 - Missing semicolon
```

### 191. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:516 - Missing semicolon
```

### 192. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:602 - Missing semicolon
```

### 193. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:609 - Missing semicolon
```

### 194. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:614 - Missing semicolon
```

### 195. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:707 - Missing semicolon
```

### 196. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:716 - Missing semicolon
```

### 197. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:739 - Console.log statement found - consider removing in production
```

### 198. [PROBLEM] 2025-07-02T19:37:45.655Z

```
[WARNING] scripts\build-checks\check_scripts\advanced-content-validator.js:762 - Console.log statement found - consider removing in production
```

### 199. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:14 - Console.log statement found - consider removing in production
```

### 200. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:15 - Console.log statement found - consider removing in production
```

### 201. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:20 - Console.log statement found - consider removing in production
```

### 202. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:21 - Console.log statement found - consider removing in production
```

### 203. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:24 - Console.log statement found - consider removing in production
```

### 204. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:28 - Console.log statement found - consider removing in production
```

### 205. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:33 - Console.log statement found - consider removing in production
```

### 206. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:34 - Console.log statement found - consider removing in production
```

### 207. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:35 - Console.log statement found - consider removing in production
```

### 208. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:42 - Console.log statement found - consider removing in production
```

### 209. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:50 - Console.log statement found - consider removing in production
```

### 210. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:52 - Console.log statement found - consider removing in production
```

### 211. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:53 - Console.log statement found - consider removing in production
```

### 212. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:64 - Missing semicolon
```

### 213. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:69 - Console.log statement found - consider removing in production
```

### 214. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:72 - Console.log statement found - consider removing in production
```

### 215. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:79 - Console.log statement found - consider removing in production
```

### 216. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:84 - Console.log statement found - consider removing in production
```

### 217. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:89 - Console.log statement found - consider removing in production
```

### 218. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:93 - Console.log statement found - consider removing in production
```

### 219. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:94 - Console.log statement found - consider removing in production
```

### 220. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:96 - Missing semicolon
```

### 221. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:113 - Console.log statement found - consider removing in production
```

### 222. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:115 - Console.log statement found - consider removing in production
```

### 223. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:116 - Console.log statement found - consider removing in production
```

### 224. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:118 - Console.log statement found - consider removing in production
```

### 225. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:126 - Console.log statement found - consider removing in production
```

### 226. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:131 - Console.log statement found - consider removing in production
```

### 227. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:132 - Console.log statement found - consider removing in production
```

### 228. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:136 - Console.log statement found - consider removing in production
```

### 229. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:137 - Console.log statement found - consider removing in production
```

### 230. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:141 - Console.log statement found - consider removing in production
```

### 231. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:143 - Console.log statement found - consider removing in production
```

### 232. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:145 - Console.log statement found - consider removing in production
```

### 233. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:149 - Console.log statement found - consider removing in production
```

### 234. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:151 - Console.log statement found - consider removing in production
```

### 235. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:156 - Console.log statement found - consider removing in production
```

### 236. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:158 - Console.log statement found - consider removing in production
```

### 237. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:164 - Console.log statement found - consider removing in production
```

### 238. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:166 - Console.log statement found - consider removing in production
```

### 239. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:172 - Console.log statement found - consider removing in production
```

### 240. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:173 - Console.log statement found - consider removing in production
```

### 241. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:174 - Console.log statement found - consider removing in production
```

### 242. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:175 - Console.log statement found - consider removing in production
```

### 243. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:176 - Console.log statement found - consider removing in production
```

### 244. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:177 - Console.log statement found - consider removing in production
```

### 245. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:178 - Console.log statement found - consider removing in production
```

### 246. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:179 - Console.log statement found - consider removing in production
```

### 247. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:180 - Console.log statement found - consider removing in production
```

### 248. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:181 - Console.log statement found - consider removing in production
```

### 249. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:182 - Console.log statement found - consider removing in production
```

### 250. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:183 - Console.log statement found - consider removing in production
```

### 251. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:184 - Console.log statement found - consider removing in production
```

### 252. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:185 - Console.log statement found - consider removing in production
```

### 253. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:217 - Console.log statement found - consider removing in production
```

### 254. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\checklist-cli.js:218 - Console.log statement found - consider removing in production
```

### 255. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:15 - Console.log statement found - consider removing in production
```

### 256. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:34 - Missing semicolon
```

### 257. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:62 - Console.log statement found - consider removing in production
```

### 258. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:63 - Console.log statement found - consider removing in production
```

### 259. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:66 - Console.log statement found - consider removing in production
```

### 260. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:158 - Missing semicolon
```

### 261. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:209 - Missing semicolon
```

### 262. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:246 - Missing semicolon
```

### 263. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:38 - Console.log statement found - consider removing in production
```

### 264. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:40 - Missing semicolon
```

### 265. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:58 - Console.log statement found - consider removing in production
```

### 266. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:64 - Console.log statement found - consider removing in production
```

### 267. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:67 - Console.log statement found - consider removing in production
```

### 268. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:71 - Console.log statement found - consider removing in production
```

### 269. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:72 - Console.log statement found - consider removing in production
```

### 270. [PROBLEM] 2025-07-02T19:37:45.656Z

```
[WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:73 - Console.log statement found - consider removing in production
```

### 271. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:15 - Console.log statement found - consider removing in production
```

### 272. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:75 - Console.log statement found - consider removing in production
```

### 273. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:76 - Console.log statement found - consider removing in production
```

### 274. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:77 - Console.log statement found - consider removing in production
```

### 275. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:78 - Console.log statement found - consider removing in production
```

### 276. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:79 - Console.log statement found - consider removing in production
```

### 277. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:84 - Console.log statement found - consider removing in production
```

### 278. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:87 - Missing semicolon
```

### 279. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:116 - Missing semicolon
```

### 280. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:240 - Missing semicolon
```

### 281. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:373 - Missing semicolon
```

### 282. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:421 - Missing semicolon
```

### 283. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\masterBuildChecker.js:470 - Missing semicolon
```

### 284. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:31 - Console.log statement found - consider removing in production
```

### 285. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:32 - Console.log statement found - consider removing in production
```

### 286. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:38 - Console.log statement found - consider removing in production
```

### 287. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:74 - Missing semicolon
```

### 288. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:98 - Console.log statement found - consider removing in production
```

### 289. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:111 - Console.log statement found - consider removing in production
```

### 290. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:121 - Console.log statement found - consider removing in production
```

### 291. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:125 - Console.log statement found - consider removing in production
```

### 292. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:126 - Console.log statement found - consider removing in production
```

### 293. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:127 - Console.log statement found - consider removing in production
```

### 294. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:138 - Console.log statement found - consider removing in production
```

### 295. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:142 - Console.log statement found - consider removing in production
```

### 296. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:152 - Missing semicolon
```

### 297. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:177 - Missing semicolon
```

### 298. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:201 - Missing semicolon
```

### 299. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:257 - Console.log statement found - consider removing in production
```

### 300. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:266 - Console.log statement found - consider removing in production
```

### 301. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:274 - Console.log statement found - consider removing in production
```

### 302. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:277 - Console.log statement found - consider removing in production
```

### 303. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:278 - Console.log statement found - consider removing in production
```

### 304. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:279 - Console.log statement found - consider removing in production
```

### 305. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:280 - Console.log statement found - consider removing in production
```

### 306. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:295 - Console.log statement found - consider removing in production
```

### 307. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:318 - Missing semicolon
```

### 308. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:342 - Missing semicolon
```

### 309. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:353 - Console.log statement found - consider removing in production
```

### 310. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:354 - Console.log statement found - consider removing in production
```

### 311. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:355 - Console.log statement found - consider removing in production
```

### 312. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:357 - Console.log statement found - consider removing in production
```

### 313. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:358 - Console.log statement found - consider removing in production
```

### 314. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:359 - Console.log statement found - consider removing in production
```

### 315. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:362 - Console.log statement found - consider removing in production
```

### 316. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:363 - Console.log statement found - consider removing in production
```

### 317. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:364 - Console.log statement found - consider removing in production
```

### 318. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:365 - Console.log statement found - consider removing in production
```

### 319. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:373 - Console.log statement found - consider removing in production
```

### 320. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:378 - Console.log statement found - consider removing in production
```

### 321. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:383 - Console.log statement found - consider removing in production
```

### 322. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:386 - Console.log statement found - consider removing in production
```

### 323. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:390 - Console.log statement found - consider removing in production
```

### 324. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:394 - Console.log statement found - consider removing in production
```

### 325. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:396 - Console.log statement found - consider removing in production
```

### 326. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:398 - Console.log statement found - consider removing in production
```

### 327. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:400 - Console.log statement found - consider removing in production
```

### 328. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:402 - Console.log statement found - consider removing in production
```

### 329. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:435 - Console.log statement found - consider removing in production
```

### 330. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:455 - Console.log statement found - consider removing in production
```

### 331. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:459 - Missing semicolon
```

### 332. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:478 - Console.log statement found - consider removing in production
```

### 333. [PROBLEM] 2025-07-02T19:37:45.657Z

```
[WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:489 - Console.log statement found - consider removing in production
```

### 334. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:17 - Console.log statement found - consider removing in production
```

### 335. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:20 - Missing semicolon
```

### 336. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:21 - Missing semicolon
```

### 337. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:24 - Missing semicolon
```

### 338. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:34 - Missing semicolon
```

### 339. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:40 - Console.log statement found - consider removing in production
```

### 340. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:92 - Console.log statement found - consider removing in production
```

### 341. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:104 - Console.log statement found - consider removing in production
```

### 342. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:119 - Console.log statement found - consider removing in production
```

### 343. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:122 - Console.log statement found - consider removing in production
```

### 344. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:124 - Console.log statement found - consider removing in production
```

### 345. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:135 - Console.log statement found - consider removing in production
```

### 346. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:137 - Console.log statement found - consider removing in production
```

### 347. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:140 - Console.log statement found - consider removing in production
```

### 348. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:147 - Console.log statement found - consider removing in production
```

### 349. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:149 - Console.log statement found - consider removing in production
```

### 350. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:152 - Console.log statement found - consider removing in production
```

### 351. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:159 - Console.log statement found - consider removing in production
```

### 352. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:161 - Console.log statement found - consider removing in production
```

### 353. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:177 - Console.log statement found - consider removing in production
```

### 354. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:199 - Missing semicolon
```

### 355. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:217 - Console.log statement found - consider removing in production
```

### 356. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:225 - Missing semicolon
```

### 357. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:241 - Missing semicolon
```

### 358. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:256 - Missing semicolon
```

### 359. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:273 - Console.log statement found - consider removing in production
```

### 360. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:276 - Missing semicolon
```

### 361. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:281 - Console.log statement found - consider removing in production
```

### 362. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:284 - Console.log statement found - consider removing in production
```

### 363. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:286 - Console.log statement found - consider removing in production
```

### 364. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:290 - Missing semicolon
```

### 365. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:309 - Console.log statement found - consider removing in production
```

### 366. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:311 - Missing semicolon
```

### 367. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:330 - Console.log statement found - consider removing in production
```

### 368. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:342 - Missing semicolon
```

### 369. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:351 - Console.log statement found - consider removing in production
```

### 370. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:352 - Console.log statement found - consider removing in production
```

### 371. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:353 - Console.log statement found - consider removing in production
```

### 372. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:358 - Console.log statement found - consider removing in production
```

### 373. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:359 - Console.log statement found - consider removing in production
```

### 374. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:370 - Console.log statement found - consider removing in production
```

### 375. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:371 - Console.log statement found - consider removing in production
```

### 376. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:372 - Console.log statement found - consider removing in production
```

### 377. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:373 - Console.log statement found - consider removing in production
```

### 378. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:374 - Console.log statement found - consider removing in production
```

### 379. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:378 - Console.log statement found - consider removing in production
```

### 380. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:379 - Console.log statement found - consider removing in production
```

### 381. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:380 - Console.log statement found - consider removing in production
```

### 382. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:381 - Console.log statement found - consider removing in production
```

### 383. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:382 - Console.log statement found - consider removing in production
```

### 384. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:386 - Console.log statement found - consider removing in production
```

### 385. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:387 - Console.log statement found - consider removing in production
```

### 386. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:390 - Console.log statement found - consider removing in production
```

### 387. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:397 - Console.log statement found - consider removing in production
```

### 388. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:398 - Console.log statement found - consider removing in production
```

### 389. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:399 - Console.log statement found - consider removing in production
```

### 390. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:420 - Console.log statement found - consider removing in production
```

### 391. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:429 - Console.log statement found - consider removing in production
```

### 392. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:438 - Missing semicolon
```

### 393. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:465 - Missing semicolon
```

### 394. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:496 - Console.log statement found - consider removing in production
```

### 395. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:519 - Console.log statement found - consider removing in production
```

### 396. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:542 - Console.log statement found - consider removing in production
```

### 397. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:563 - Missing semicolon
```

### 398. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:575 - Console.log statement found - consider removing in production
```

### 399. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[ERROR] scripts\build.js:690 - Typo: "fucntion" should be "function"
```

### 400. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[ERROR] scripts\build.js:691 - Typo: "fucntion" should be "function"
```

### 401. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:738 - Missing semicolon
```

### 402. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:748 - Missing semicolon
```

### 403. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:834 - Missing semicolon
```

### 404. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:904 - Missing semicolon
```

### 405. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:944 - Console.log statement found - consider removing in production
```

### 406. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:1073 - Missing semicolon
```

### 407. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:1077 - Missing semicolon
```

### 408. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:1084 - Missing semicolon
```

### 409. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:1091 - Missing semicolon
```

### 410. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:1153 - Missing semicolon
```

### 411. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:1178 - Missing semicolon
```

### 412. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:1197 - Missing semicolon
```

### 413. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:1225 - Missing semicolon
```

### 414. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:1304 - Missing semicolon
```

### 415. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:1347 - Missing semicolon
```

### 416. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:1358 - Missing semicolon
```

### 417. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:1420 - Missing semicolon
```

### 418. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:1449 - Missing semicolon
```

### 419. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:1453 - Missing semicolon
```

### 420. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:1513 - Missing semicolon
```

### 421. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:1578 - Missing semicolon
```

### 422. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:1769 - Missing semicolon
```

### 423. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:1807 - Missing semicolon
```

### 424. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:1819 - Missing semicolon
```

### 425. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:1899 - Missing semicolon
```

### 426. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:1995 - Missing semicolon
```

### 427. [PROBLEM] 2025-07-02T19:37:45.659Z

```
[WARNING] scripts\build.js:1996 - Missing semicolon
```

### 428. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2117 - Console.log statement found - consider removing in production
```

### 429. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2118 - Console.log statement found - consider removing in production
```

### 430. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2124 - Console.log statement found - consider removing in production
```

### 431. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2125 - Console.log statement found - consider removing in production
```

### 432. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2126 - Console.log statement found - consider removing in production
```

### 433. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2146 - Missing semicolon
```

### 434. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2150 - Console.log statement found - consider removing in production
```

### 435. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2160 - Console.log statement found - consider removing in production
```

### 436. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2165 - Console.log statement found - consider removing in production
```

### 437. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2179 - Console.log statement found - consider removing in production
```

### 438. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2185 - Console.log statement found - consider removing in production
```

### 439. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2187 - Missing semicolon
```

### 440. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2189 - Console.log statement found - consider removing in production
```

### 441. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2190 - Console.log statement found - consider removing in production
```

### 442. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2202 - Console.log statement found - consider removing in production
```

### 443. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2205 - Console.log statement found - consider removing in production
```

### 444. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2217 - Console.log statement found - consider removing in production
```

### 445. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2221 - Console.log statement found - consider removing in production
```

### 446. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2223 - Console.log statement found - consider removing in production
```

### 447. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2226 - Console.log statement found - consider removing in production
```

### 448. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2277 - Console.log statement found - consider removing in production
```

### 449. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2279 - Console.log statement found - consider removing in production
```

### 450. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2284 - Console.log statement found - consider removing in production
```

### 451. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2290 - Console.log statement found - consider removing in production
```

### 452. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2292 - Console.log statement found - consider removing in production
```

### 453. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2302 - Console.log statement found - consider removing in production
```

### 454. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2306 - Console.log statement found - consider removing in production
```

### 455. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2307 - Console.log statement found - consider removing in production
```

### 456. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2310 - Console.log statement found - consider removing in production
```

### 457. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2311 - Console.log statement found - consider removing in production
```

### 458. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2329 - Console.log statement found - consider removing in production
```

### 459. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2330 - Console.log statement found - consider removing in production
```

### 460. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2341 - Console.log statement found - consider removing in production
```

### 461. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2342 - Console.log statement found - consider removing in production
```

### 462. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2343 - Console.log statement found - consider removing in production
```

### 463. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2346 - Console.log statement found - consider removing in production
```

### 464. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2347 - Console.log statement found - consider removing in production
```

### 465. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2348 - Console.log statement found - consider removing in production
```

### 466. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2349 - Console.log statement found - consider removing in production
```

### 467. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2350 - Console.log statement found - consider removing in production
```

### 468. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2351 - Console.log statement found - consider removing in production
```

### 469. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2354 - Console.log statement found - consider removing in production
```

### 470. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2358 - Console.log statement found - consider removing in production
```

### 471. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2359 - Console.log statement found - consider removing in production
```

### 472. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2360 - Console.log statement found - consider removing in production
```

### 473. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2364 - Missing semicolon
```

### 474. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2388 - Console.log statement found - consider removing in production
```

### 475. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2390 - Console.log statement found - consider removing in production
```

### 476. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2396 - Console.log statement found - consider removing in production
```

### 477. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2399 - Console.log statement found - consider removing in production
```

### 478. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2419 - Console.log statement found - consider removing in production
```

### 479. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2420 - Console.log statement found - consider removing in production
```

### 480. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2443 - Console.log statement found - consider removing in production
```

### 481. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2447 - Console.log statement found - consider removing in production
```

### 482. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2448 - Console.log statement found - consider removing in production
```

### 483. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2450 - Console.log statement found - consider removing in production
```

### 484. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2451 - Console.log statement found - consider removing in production
```

### 485. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2455 - Console.log statement found - consider removing in production
```

### 486. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2457 - Console.log statement found - consider removing in production
```

### 487. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2460 - Console.log statement found - consider removing in production
```

### 488. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2463 - Console.log statement found - consider removing in production
```

### 489. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2466 - Console.log statement found - consider removing in production
```

### 490. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2467 - Console.log statement found - consider removing in production
```

### 491. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2470 - Console.log statement found - consider removing in production
```

### 492. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2471 - Console.log statement found - consider removing in production
```

### 493. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2473 - Missing semicolon
```

### 494. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2476 - Missing semicolon
```

### 495. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2479 - Missing semicolon
```

### 496. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2484 - Console.log statement found - consider removing in production
```

### 497. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2486 - Console.log statement found - consider removing in production
```

### 498. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2488 - Console.log statement found - consider removing in production
```

### 499. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2492 - Console.log statement found - consider removing in production
```

### 500. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2496 - Console.log statement found - consider removing in production
```

### 501. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2498 - Console.log statement found - consider removing in production
```

### 502. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2499 - Console.log statement found - consider removing in production
```

### 503. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2504 - Console.log statement found - consider removing in production
```

### 504. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2508 - Console.log statement found - consider removing in production
```

### 505. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2509 - Console.log statement found - consider removing in production
```

### 506. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2516 - Console.log statement found - consider removing in production
```

### 507. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2522 - Console.log statement found - consider removing in production
```

### 508. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2523 - Console.log statement found - consider removing in production
```

### 509. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2524 - Console.log statement found - consider removing in production
```

### 510. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2527 - Console.log statement found - consider removing in production
```

### 511. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2529 - Console.log statement found - consider removing in production
```

### 512. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2531 - Console.log statement found - consider removing in production
```

### 513. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2538 - Console.log statement found - consider removing in production
```

### 514. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2540 - Console.log statement found - consider removing in production
```

### 515. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2546 - Console.log statement found - consider removing in production
```

### 516. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2547 - Console.log statement found - consider removing in production
```

### 517. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2566 - Missing semicolon
```

### 518. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2574 - Console.log statement found - consider removing in production
```

### 519. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2578 - Console.log statement found - consider removing in production
```

### 520. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2580 - Console.log statement found - consider removing in production
```

### 521. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2583 - Console.log statement found - consider removing in production
```

### 522. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2584 - Console.log statement found - consider removing in production
```

### 523. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2585 - Console.log statement found - consider removing in production
```

### 524. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2586 - Console.log statement found - consider removing in production
```

### 525. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2587 - Console.log statement found - consider removing in production
```

### 526. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2590 - Console.log statement found - consider removing in production
```

### 527. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2592 - Console.log statement found - consider removing in production
```

### 528. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2597 - Console.log statement found - consider removing in production
```

### 529. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2599 - Console.log statement found - consider removing in production
```

### 530. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2604 - Console.log statement found - consider removing in production
```

### 531. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2614 - Console.log statement found - consider removing in production
```

### 532. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2628 - Console.log statement found - consider removing in production
```

### 533. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2629 - Console.log statement found - consider removing in production
```

### 534. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2630 - Console.log statement found - consider removing in production
```

### 535. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2631 - Console.log statement found - consider removing in production
```

### 536. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2632 - Console.log statement found - consider removing in production
```

### 537. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2633 - Console.log statement found - consider removing in production
```

### 538. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2634 - Console.log statement found - consider removing in production
```

### 539. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2638 - Console.log statement found - consider removing in production
```

### 540. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2639 - Console.log statement found - consider removing in production
```

### 541. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2640 - Console.log statement found - consider removing in production
```

### 542. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2641 - Console.log statement found - consider removing in production
```

### 543. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2642 - Console.log statement found - consider removing in production
```

### 544. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2643 - Console.log statement found - consider removing in production
```

### 545. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2644 - Console.log statement found - consider removing in production
```

### 546. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2645 - Console.log statement found - consider removing in production
```

### 547. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2665 - Console.log statement found - consider removing in production
```

### 548. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2682 - Console.log statement found - consider removing in production
```

### 549. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2720 - Missing semicolon
```

### 550. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2776 - Console.log statement found - consider removing in production
```

### 551. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2829 - Missing semicolon
```

### 552. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2858 - Missing semicolon
```

### 553. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2895 - Missing semicolon
```

### 554. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2907 - Missing semicolon
```

### 555. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2935 - Missing semicolon
```

### 556. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2947 - Missing semicolon
```

### 557. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:2973 - Console.log statement found - consider removing in production
```

### 558. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3025 - Missing semicolon
```

### 559. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3029 - Missing semicolon
```

### 560. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3042 - Missing semicolon
```

### 561. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3051 - Missing semicolon
```

### 562. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3060 - Missing semicolon
```

### 563. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3069 - Missing semicolon
```

### 564. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3090 - Missing semicolon
```

### 565. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3103 - Missing semicolon
```

### 566. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3116 - Missing semicolon
```

### 567. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3129 - Missing semicolon
```

### 568. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3156 - Missing semicolon
```

### 569. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3165 - Missing semicolon
```

### 570. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3174 - Missing semicolon
```

### 571. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3183 - Missing semicolon
```

### 572. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3192 - Missing semicolon
```

### 573. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3285 - Missing semicolon
```

### 574. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3289 - Missing semicolon
```

### 575. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3299 - Missing semicolon
```

### 576. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3309 - Missing semicolon
```

### 577. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3328 - Missing semicolon
```

### 578. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3353 - Missing semicolon
```

### 579. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3362 - Missing semicolon
```

### 580. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3371 - Missing semicolon
```

### 581. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3380 - Missing semicolon
```

### 582. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3389 - Missing semicolon
```

### 583. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3398 - Missing semicolon
```

### 584. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3421 - Missing semicolon
```

### 585. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3434 - Missing semicolon
```

### 586. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3447 - Missing semicolon
```

### 587. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3456 - Missing semicolon
```

### 588. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3465 - Missing semicolon
```

### 589. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3474 - Missing semicolon
```

### 590. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3504 - Console.log statement found - consider removing in production
```

### 591. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3531 - Console.log statement found - consider removing in production
```

### 592. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3533 - Console.log statement found - consider removing in production
```

### 593. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3535 - Console.log statement found - consider removing in production
```

### 594. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3563 - Console.log statement found - consider removing in production
```

### 595. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3712 - Console.log statement found - consider removing in production
```

### 596. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3713 - Console.log statement found - consider removing in production
```

### 597. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3714 - Console.log statement found - consider removing in production
```

### 598. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3720 - Console.log statement found - consider removing in production
```

### 599. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3721 - Console.log statement found - consider removing in production
```

### 600. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3722 - Console.log statement found - consider removing in production
```

### 601. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3724 - Missing semicolon
```

### 602. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3734 - Missing semicolon
```

### 603. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3739 - Console.log statement found - consider removing in production
```

### 604. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3743 - Console.log statement found - consider removing in production
```

### 605. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3747 - Missing semicolon
```

### 606. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3751 - Console.log statement found - consider removing in production
```

### 607. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3757 - Missing semicolon
```

### 608. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3758 - Missing semicolon
```

### 609. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3761 - Console.log statement found - consider removing in production
```

### 610. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3765 - Console.log statement found - consider removing in production
```

### 611. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3768 - Console.log statement found - consider removing in production
```

### 612. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3781 - Console.log statement found - consider removing in production
```

### 613. [PROBLEM] 2025-07-02T19:37:45.660Z

```
[WARNING] scripts\build.js:3793 - Console.log statement found - consider removing in production
```

### 614. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3796 - Missing semicolon
```

### 615. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3799 - Console.log statement found - consider removing in production
```

### 616. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3802 - Console.log statement found - consider removing in production
```

### 617. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3806 - Console.log statement found - consider removing in production
```

### 618. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3807 - Missing semicolon
```

### 619. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3813 - Console.log statement found - consider removing in production
```

### 620. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3815 - Console.log statement found - consider removing in production
```

### 621. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3819 - Console.log statement found - consider removing in production
```

### 622. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3823 - Missing semicolon
```

### 623. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3831 - Console.log statement found - consider removing in production
```

### 624. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3835 - Console.log statement found - consider removing in production
```

### 625. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3841 - Console.log statement found - consider removing in production
```

### 626. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3846 - Console.log statement found - consider removing in production
```

### 627. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3849 - Console.log statement found - consider removing in production
```

### 628. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3851 - Console.log statement found - consider removing in production
```

### 629. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3855 - Console.log statement found - consider removing in production
```

### 630. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3856 - Console.log statement found - consider removing in production
```

### 631. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3857 - Console.log statement found - consider removing in production
```

### 632. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3859 - Console.log statement found - consider removing in production
```

### 633. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3868 - Console.log statement found - consider removing in production
```

### 634. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3873 - Console.log statement found - consider removing in production
```

### 635. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3874 - Console.log statement found - consider removing in production
```

### 636. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3875 - Console.log statement found - consider removing in production
```

### 637. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3876 - Console.log statement found - consider removing in production
```

### 638. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3890 - Console.log statement found - consider removing in production
```

### 639. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3892 - Console.log statement found - consider removing in production
```

### 640. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3902 - Console.log statement found - consider removing in production
```

### 641. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3905 - Console.log statement found - consider removing in production
```

### 642. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3908 - Console.log statement found - consider removing in production
```

### 643. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3909 - Console.log statement found - consider removing in production
```

### 644. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3916 - Console.log statement found - consider removing in production
```

### 645. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3922 - Console.log statement found - consider removing in production
```

### 646. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3923 - Console.log statement found - consider removing in production
```

### 647. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3924 - Console.log statement found - consider removing in production
```

### 648. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3927 - Console.log statement found - consider removing in production
```

### 649. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3929 - Console.log statement found - consider removing in production
```

### 650. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3931 - Console.log statement found - consider removing in production
```

### 651. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3938 - Console.log statement found - consider removing in production
```

### 652. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3940 - Console.log statement found - consider removing in production
```

### 653. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3945 - Console.log statement found - consider removing in production
```

### 654. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3946 - Console.log statement found - consider removing in production
```

### 655. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3947 - Console.log statement found - consider removing in production
```

### 656. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3948 - Console.log statement found - consider removing in production
```

### 657. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3949 - Console.log statement found - consider removing in production
```

### 658. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3954 - Console.log statement found - consider removing in production
```

### 659. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3955 - Console.log statement found - consider removing in production
```

### 660. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3986 - Console.log statement found - consider removing in production
```

### 661. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3989 - Console.log statement found - consider removing in production
```

### 662. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3990 - Console.log statement found - consider removing in production
```

### 663. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3991 - Console.log statement found - consider removing in production
```

### 664. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3992 - Console.log statement found - consider removing in production
```

### 665. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3993 - Console.log statement found - consider removing in production
```

### 666. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3994 - Console.log statement found - consider removing in production
```

### 667. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3997 - Console.log statement found - consider removing in production
```

### 668. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3998 - Console.log statement found - consider removing in production
```

### 669. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:3999 - Console.log statement found - consider removing in production
```

### 670. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4000 - Console.log statement found - consider removing in production
```

### 671. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4001 - Console.log statement found - consider removing in production
```

### 672. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4002 - Console.log statement found - consider removing in production
```

### 673. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4003 - Console.log statement found - consider removing in production
```

### 674. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4005 - Console.log statement found - consider removing in production
```

### 675. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4007 - Console.log statement found - consider removing in production
```

### 676. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4010 - Console.log statement found - consider removing in production
```

### 677. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4011 - Console.log statement found - consider removing in production
```

### 678. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4012 - Console.log statement found - consider removing in production
```

### 679. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4013 - Console.log statement found - consider removing in production
```

### 680. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4015 - Console.log statement found - consider removing in production
```

### 681. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4016 - Console.log statement found - consider removing in production
```

### 682. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4017 - Console.log statement found - consider removing in production
```

### 683. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4018 - Console.log statement found - consider removing in production
```

### 684. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4020 - Console.log statement found - consider removing in production
```

### 685. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4021 - Console.log statement found - consider removing in production
```

### 686. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4022 - Console.log statement found - consider removing in production
```

### 687. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4023 - Console.log statement found - consider removing in production
```

### 688. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4024 - Console.log statement found - consider removing in production
```

### 689. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4025 - Console.log statement found - consider removing in production
```

### 690. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4027 - Console.log statement found - consider removing in production
```

### 691. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4028 - Console.log statement found - consider removing in production
```

### 692. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4029 - Console.log statement found - consider removing in production
```

### 693. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4030 - Console.log statement found - consider removing in production
```

### 694. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4033 - Console.log statement found - consider removing in production
```

### 695. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4034 - Console.log statement found - consider removing in production
```

### 696. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4035 - Console.log statement found - consider removing in production
```

### 697. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4046 - Console.log statement found - consider removing in production
```

### 698. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4050 - Console.log statement found - consider removing in production
```

### 699. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4051 - Console.log statement found - consider removing in production
```

### 700. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4054 - Console.log statement found - consider removing in production
```

### 701. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4055 - Console.log statement found - consider removing in production
```

### 702. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4064 - Console.log statement found - consider removing in production
```

### 703. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4065 - Console.log statement found - consider removing in production
```

### 704. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4090 - Console.log statement found - consider removing in production
```

### 705. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4126 - Missing semicolon
```

### 706. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4146 - Missing semicolon
```

### 707. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4174 - Missing semicolon
```

### 708. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4216 - Missing semicolon
```

### 709. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4259 - Missing semicolon
```

### 710. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4301 - Console.log statement found - consider removing in production
```

### 711. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4306 - Console.log statement found - consider removing in production
```

### 712. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4311 - Console.log statement found - consider removing in production
```

### 713. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4317 - Missing semicolon
```

### 714. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4320 - Console.log statement found - consider removing in production
```

### 715. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4335 - Console.log statement found - consider removing in production
```

### 716. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4338 - Console.log statement found - consider removing in production
```

### 717. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4342 - Console.log statement found - consider removing in production
```

### 718. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4347 - Console.log statement found - consider removing in production
```

### 719. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4351 - Console.log statement found - consider removing in production
```

### 720. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4352 - Console.log statement found - consider removing in production
```

### 721. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4358 - Console.log statement found - consider removing in production
```

### 722. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4359 - Console.log statement found - consider removing in production
```

### 723. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4367 - Console.log statement found - consider removing in production
```

### 724. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4368 - Console.log statement found - consider removing in production
```

### 725. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4378 - Console.log statement found - consider removing in production
```

### 726. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4385 - Console.log statement found - consider removing in production
```

### 727. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4387 - Console.log statement found - consider removing in production
```

### 728. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4453 - Console.log statement found - consider removing in production
```

### 729. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4454 - Console.log statement found - consider removing in production
```

### 730. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4459 - Console.log statement found - consider removing in production
```

### 731. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4461 - Console.log statement found - consider removing in production
```

### 732. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4464 - Console.log statement found - consider removing in production
```

### 733. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\build.js:4468 - Console.log statement found - consider removing in production
```

### 734. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\log-manager.js:45 - Missing semicolon
```

### 735. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\log-manager.js:61 - Console.log statement found - consider removing in production
```

### 736. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\log-manager.js:68 - Console.log statement found - consider removing in production
```

### 737. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\log-manager.js:83 - Console.log statement found - consider removing in production
```

### 738. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\log-manager.js:91 - Missing semicolon
```

### 739. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\log-manager.js:116 - Console.log statement found - consider removing in production
```

### 740. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\log-manager.js:144 - Missing semicolon
```

### 741. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\log-manager.js:158 - Missing semicolon
```

### 742. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\log-manager.js:174 - Console.log statement found - consider removing in production
```

### 743. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\log-manager.js:177 - Missing semicolon
```

### 744. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\log-manager.js:185 - Console.log statement found - consider removing in production
```

### 745. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\log-manager.js:204 - Console.log statement found - consider removing in production
```

### 746. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\log-manager.js:209 - Console.log statement found - consider removing in production
```

### 747. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\log-manager.js:228 - Missing semicolon
```

### 748. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\log-manager.js:235 - Console.log statement found - consider removing in production
```

### 749. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\log-manager.js:264 - Console.log statement found - consider removing in production
```

### 750. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\log-manager.js:265 - Console.log statement found - consider removing in production
```

### 751. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\log-manager.js:266 - Console.log statement found - consider removing in production
```

### 752. [PROBLEM] 2025-07-02T19:37:45.661Z

```
[WARNING] scripts\log-manager.js:267 - Console.log statement found - consider removing in production
```

### 753. [PROBLEM] 2025-07-02T19:37:45.662Z

```
[WARNING] style.css:170 - Missing semicolon in CSS property
```

### 754. [INFO] 2025-07-02T19:37:45.662Z

```
✅ Problems-Scan abgeschlossen. 686 Problem(e) gefunden.
```

### 755. [LOG] 2025-07-02T19:37:45.663Z

```
📄 Gefunden: 9 Markdown-Dateien

```

### 756. [LOG] 2025-07-02T19:37:45.663Z

```

📋 Verarbeite: bindungssehnsucht-normal.md
```

### 757. [LOG] 2025-07-02T19:37:45.667Z

```
   🧠 Running advanced checklist validation for bindungssehnsucht-normal.md...
```

### 758. [LOG] 2025-07-02T19:37:45.669Z

```
🎯 Analyzing: bindungssehnsucht-normal.md
```

### 759. [LOG] 2025-07-02T19:37:45.669Z

```
   Detected theme: BINDUNG_KERN
```

### 760. [LOG] 2025-07-02T19:37:45.669Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 761. [LOG] 2025-07-02T19:37:45.676Z

```
   📊 Checklist Score: 1%
```

### 762. [LOG] 2025-07-02T19:37:45.677Z

```
      • BINDUNG_KERN: 0%
```

### 763. [LOG] 2025-07-02T19:37:45.677Z

```
      • VERSCHMELZUNG: 0%
```

### 764. [LOG] 2025-07-02T19:37:45.677Z

```
      • HINGABE: 2%
```

### 765. [LOG] 2025-07-02T19:37:45.677Z

```
   🎯 Intentionen-Analyse...
```

### 766. [LOG] 2025-07-02T19:37:45.679Z

```
   ✅ Intention-Score: 60% - EXCELLENT!
```

### 767. [LOG] 2025-07-02T19:37:45.679Z

```
   📊 Code-Quality Check...
```

### 768. [LOG] 2025-07-02T19:37:45.698Z

```
   ✅ Code Quality OK
```

### 769. [LOG] 2025-07-02T19:37:45.698Z

```
   🔨 HTML generieren...
```

### 770. [LOG] 2025-07-02T19:37:45.699Z

```
   ✅ HTML erstellt: bindungssehnsucht-normal.html
```

### 771. [LOG] 2025-07-02T19:37:45.699Z

```

📋 Verarbeite: das-erste-mal.md
```

### 772. [LOG] 2025-07-02T19:37:45.700Z

```
   🧠 Running advanced checklist validation for das-erste-mal.md...
```

### 773. [LOG] 2025-07-02T19:37:45.701Z

```
🎯 Analyzing: das-erste-mal.md
```

### 774. [LOG] 2025-07-02T19:37:45.701Z

```
   Detected theme: BINDUNG_KERN
```

### 775. [LOG] 2025-07-02T19:37:45.701Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 776. [LOG] 2025-07-02T19:37:45.706Z

```
   📊 Checklist Score: 8%
```

### 777. [LOG] 2025-07-02T19:37:45.706Z

```
      • BINDUNG_KERN: 8%
```

### 778. [LOG] 2025-07-02T19:37:45.706Z

```
      • VERSCHMELZUNG: 8%
```

### 779. [LOG] 2025-07-02T19:37:45.706Z

```
      • HINGABE: 7%
```

### 780. [LOG] 2025-07-02T19:37:45.706Z

```
   🎯 Intentionen-Analyse...
```

### 781. [LOG] 2025-07-02T19:37:45.707Z

```
   ✅ Intention-Score: 60% - EXCELLENT!
```

### 782. [LOG] 2025-07-02T19:37:45.707Z

```
   📊 Code-Quality Check...
```

### 783. [LOG] 2025-07-02T19:37:45.708Z

```
   ✅ Code Quality OK
```

### 784. [LOG] 2025-07-02T19:37:45.708Z

```
   🔨 HTML generieren...
```

### 785. [LOG] 2025-07-02T19:37:45.709Z

```
   ✅ HTML erstellt: das-erste-mal.html
```

### 786. [LOG] 2025-07-02T19:37:45.709Z

```

📋 Verarbeite: der-sichere-hafen.md
```

### 787. [LOG] 2025-07-02T19:37:45.710Z

```
   🧠 Running advanced checklist validation for der-sichere-hafen.md...
```

### 788. [LOG] 2025-07-02T19:37:45.711Z

```
🎯 Analyzing: der-sichere-hafen.md
```

### 789. [LOG] 2025-07-02T19:37:45.711Z

```
   Detected theme: BINDUNG_KERN
```

### 790. [LOG] 2025-07-02T19:37:45.711Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 791. [LOG] 2025-07-02T19:37:45.715Z

```
   📊 Checklist Score: 10%
```

### 792. [LOG] 2025-07-02T19:37:45.716Z

```
      • BINDUNG_KERN: 17%
```

### 793. [LOG] 2025-07-02T19:37:45.716Z

```
      • VERSCHMELZUNG: 8%
```

### 794. [LOG] 2025-07-02T19:37:45.716Z

```
      • HINGABE: 5%
```

### 795. [LOG] 2025-07-02T19:37:45.716Z

```
   🎯 Intentionen-Analyse...
```

### 796. [LOG] 2025-07-02T19:37:45.718Z

```
   ❌ Intention-Score: 45% (Min: 60%)
```

### 797. [LOG] 2025-07-02T19:37:45.718Z

```
   📊 Code-Quality Check...
```

### 798. [LOG] 2025-07-02T19:37:45.719Z

```
   ✅ Code Quality OK
```

### 799. [LOG] 2025-07-02T19:37:45.719Z

```
   🔨 HTML generieren...
```

### 800. [LOG] 2025-07-02T19:37:45.720Z

```
   ✅ HTML erstellt: der-sichere-hafen.html
```

### 801. [LOG] 2025-07-02T19:37:45.720Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 802. [LOG] 2025-07-02T19:37:45.720Z

```

📋 Verarbeite: emotionale-leere.md
```

### 803. [LOG] 2025-07-02T19:37:45.721Z

```
   🧠 Running advanced checklist validation for emotionale-leere.md...
```

### 804. [LOG] 2025-07-02T19:37:45.722Z

```
🎯 Analyzing: emotionale-leere.md
```

### 805. [LOG] 2025-07-02T19:37:45.723Z

```
   Detected theme: BESITZ
```

### 806. [LOG] 2025-07-02T19:37:45.723Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 807. [LOG] 2025-07-02T19:37:45.729Z

```
   📊 Checklist Score: 18%
```

### 808. [LOG] 2025-07-02T19:37:45.729Z

```
      • BINDUNG_KERN: 17%
```

### 809. [LOG] 2025-07-02T19:37:45.729Z

```
      • VERSCHMELZUNG: 25%
```

### 810. [LOG] 2025-07-02T19:37:45.729Z

```
      • HINGABE: 12%
```

### 811. [LOG] 2025-07-02T19:37:45.729Z

```
   🎯 Intentionen-Analyse...
```

### 812. [LOG] 2025-07-02T19:37:45.730Z

```
   ❌ Intention-Score: 16% (Min: 60%)
```

### 813. [LOG] 2025-07-02T19:37:45.730Z

```
   📊 Code-Quality Check...
```

### 814. [LOG] 2025-07-02T19:37:45.732Z

```
   ✅ Code Quality OK
```

### 815. [LOG] 2025-07-02T19:37:45.732Z

```
   🔨 HTML generieren...
```

### 816. [LOG] 2025-07-02T19:37:45.733Z

```
   ✅ HTML erstellt: emotionale-leere.html
```

### 817. [LOG] 2025-07-02T19:37:45.733Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 818. [LOG] 2025-07-02T19:37:45.733Z

```

📋 Verarbeite: erschoepft-vom-stark-sein.md
```

### 819. [LOG] 2025-07-02T19:37:45.734Z

```
   🧠 Running advanced checklist validation for erschoepft-vom-stark-sein.md...
```

### 820. [LOG] 2025-07-02T19:37:45.734Z

```
🎯 Analyzing: erschoepft-vom-stark-sein.md
```

### 821. [LOG] 2025-07-02T19:37:45.734Z

```
   Detected theme: BESITZ
```

### 822. [LOG] 2025-07-02T19:37:45.735Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 823. [LOG] 2025-07-02T19:37:45.737Z

```
   📊 Checklist Score: 1%
```

### 824. [LOG] 2025-07-02T19:37:45.737Z

```
      • BINDUNG_KERN: 0%
```

### 825. [LOG] 2025-07-02T19:37:45.738Z

```
      • VERSCHMELZUNG: 0%
```

### 826. [LOG] 2025-07-02T19:37:45.738Z

```
      • HINGABE: 2%
```

### 827. [LOG] 2025-07-02T19:37:45.738Z

```
   🎯 Intentionen-Analyse...
```

### 828. [LOG] 2025-07-02T19:37:45.738Z

```
   ❌ Intention-Score: 22% (Min: 60%)
```

### 829. [LOG] 2025-07-02T19:37:45.738Z

```
   📊 Code-Quality Check...
```

### 830. [LOG] 2025-07-02T19:37:45.739Z

```
   ✅ Code Quality OK
```

### 831. [LOG] 2025-07-02T19:37:45.739Z

```
   🔨 HTML generieren...
```

### 832. [LOG] 2025-07-02T19:37:45.740Z

```
   ✅ HTML erstellt: erschoepft-vom-stark-sein.html
```

### 833. [LOG] 2025-07-02T19:37:45.740Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 834. [LOG] 2025-07-02T19:37:45.740Z

```

📋 Verarbeite: ich-will-einfach-gehalten-werden.md
```

### 835. [LOG] 2025-07-02T19:37:45.741Z

```
   🧠 Running advanced checklist validation for ich-will-einfach-gehalten-werden.md...
```

### 836. [LOG] 2025-07-02T19:37:45.742Z

```
🎯 Analyzing: ich-will-einfach-gehalten-werden.md
```

### 837. [LOG] 2025-07-02T19:37:45.742Z

```
   Detected theme: BINDUNG_KERN
```

### 838. [LOG] 2025-07-02T19:37:45.742Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 839. [LOG] 2025-07-02T19:37:45.748Z

```
   📊 Checklist Score: 18%
```

### 840. [LOG] 2025-07-02T19:37:45.748Z

```
      • BINDUNG_KERN: 17%
```

### 841. [LOG] 2025-07-02T19:37:45.748Z

```
      • VERSCHMELZUNG: 17%
```

### 842. [LOG] 2025-07-02T19:37:45.748Z

```
      • HINGABE: 19%
```

### 843. [LOG] 2025-07-02T19:37:45.748Z

```
   🎯 Intentionen-Analyse...
```

### 844. [LOG] 2025-07-02T19:37:45.749Z

```
   ❌ Intention-Score: 49% (Min: 60%)
```

### 845. [LOG] 2025-07-02T19:37:45.749Z

```
   📊 Code-Quality Check...
```

### 846. [LOG] 2025-07-02T19:37:45.750Z

```
   ✅ Code Quality OK
```

### 847. [LOG] 2025-07-02T19:37:45.751Z

```
   🔨 HTML generieren...
```

### 848. [LOG] 2025-07-02T19:37:45.752Z

```
   ✅ HTML erstellt: ich-will-einfach-gehalten-werden.html
```

### 849. [LOG] 2025-07-02T19:37:45.752Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 850. [LOG] 2025-07-02T19:37:45.752Z

```

📋 Verarbeite: kontrolle-abgeben.md
```

### 851. [LOG] 2025-07-02T19:37:45.753Z

```
   🧠 Running advanced checklist validation for kontrolle-abgeben.md...
```

### 852. [LOG] 2025-07-02T19:37:45.754Z

```
🎯 Analyzing: kontrolle-abgeben.md
```

### 853. [LOG] 2025-07-02T19:37:45.754Z

```
   Detected theme: PASSIVITÄT
```

### 854. [LOG] 2025-07-02T19:37:45.754Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 855. [LOG] 2025-07-02T19:37:45.757Z

```
   📊 Checklist Score: 4%
```

### 856. [LOG] 2025-07-02T19:37:45.757Z

```
      • BINDUNG_KERN: 8%
```

### 857. [LOG] 2025-07-02T19:37:45.758Z

```
      • VERSCHMELZUNG: 0%
```

### 858. [LOG] 2025-07-02T19:37:45.758Z

```
      • HINGABE: 2%
```

### 859. [LOG] 2025-07-02T19:37:45.758Z

```
   🎯 Intentionen-Analyse...
```

### 860. [LOG] 2025-07-02T19:37:45.758Z

```
   ❌ Intention-Score: 18% (Min: 60%)
```

### 861. [LOG] 2025-07-02T19:37:45.758Z

```
   📊 Code-Quality Check...
```

### 862. [LOG] 2025-07-02T19:37:45.759Z

```
   ✅ Code Quality OK
```

### 863. [LOG] 2025-07-02T19:37:45.759Z

```
   🔨 HTML generieren...
```

### 864. [LOG] 2025-07-02T19:37:45.760Z

```
   ✅ HTML erstellt: kontrolle-abgeben.html
```

### 865. [LOG] 2025-07-02T19:37:45.760Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 866. [LOG] 2025-07-02T19:37:45.760Z

```

📋 Verarbeite: sehnsucht-nach-hingabe.md
```

### 867. [LOG] 2025-07-02T19:37:45.761Z

```
   🧠 Running advanced checklist validation for sehnsucht-nach-hingabe.md...
```

### 868. [LOG] 2025-07-02T19:37:45.762Z

```
🎯 Analyzing: sehnsucht-nach-hingabe.md
```

### 869. [LOG] 2025-07-02T19:37:45.762Z

```
   Detected theme: BINDUNG_KERN
```

### 870. [LOG] 2025-07-02T19:37:45.762Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 871. [LOG] 2025-07-02T19:37:45.768Z

```
   📊 Checklist Score: 11%
```

### 872. [LOG] 2025-07-02T19:37:45.768Z

```
      • BINDUNG_KERN: 0%
```

### 873. [LOG] 2025-07-02T19:37:45.768Z

```
      • VERSCHMELZUNG: 25%
```

### 874. [LOG] 2025-07-02T19:37:45.768Z

```
      • HINGABE: 10%
```

### 875. [LOG] 2025-07-02T19:37:45.768Z

```
   🎯 Intentionen-Analyse...
```

### 876. [LOG] 2025-07-02T19:37:45.769Z

```
   ❌ Intention-Score: 18% (Min: 60%)
```

### 877. [LOG] 2025-07-02T19:37:45.769Z

```
   📊 Code-Quality Check...
```

### 878. [LOG] 2025-07-02T19:37:45.770Z

```
   ✅ Code Quality OK
```

### 879. [LOG] 2025-07-02T19:37:45.770Z

```
   🔨 HTML generieren...
```

### 880. [LOG] 2025-07-02T19:37:45.771Z

```
   ✅ HTML erstellt: sehnsucht-nach-hingabe.html
```

### 881. [LOG] 2025-07-02T19:37:45.771Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 882. [LOG] 2025-07-02T19:37:45.772Z

```

📋 Verarbeite: zu-viel-liebe-zu-wenig-liebe.md
```

### 883. [LOG] 2025-07-02T19:37:45.772Z

```
   🧠 Running advanced checklist validation for zu-viel-liebe-zu-wenig-liebe.md...
```

### 884. [LOG] 2025-07-02T19:37:45.774Z

```
🎯 Analyzing: zu-viel-liebe-zu-wenig-liebe.md
```

### 885. [LOG] 2025-07-02T19:37:45.774Z

```
   Detected theme: BESITZ
```

### 886. [LOG] 2025-07-02T19:37:45.774Z

```
   Selected checklists: BINDUNG_KERN, VERSCHMELZUNG, HINGABE
```

### 887. [LOG] 2025-07-02T19:37:45.782Z

```
   📊 Checklist Score: 8%
```

### 888. [LOG] 2025-07-02T19:37:45.782Z

```
      • BINDUNG_KERN: 8%
```

### 889. [LOG] 2025-07-02T19:37:45.782Z

```
      • VERSCHMELZUNG: 8%
```

### 890. [LOG] 2025-07-02T19:37:45.783Z

```
      • HINGABE: 7%
```

### 891. [LOG] 2025-07-02T19:37:45.783Z

```
   🎯 Intentionen-Analyse...
```

### 892. [LOG] 2025-07-02T19:37:45.784Z

```
   ❌ Intention-Score: 14% (Min: 60%)
```

### 893. [LOG] 2025-07-02T19:37:45.784Z

```
   📊 Code-Quality Check...
```

### 894. [LOG] 2025-07-02T19:37:45.786Z

```
   ✅ Code Quality OK
```

### 895. [LOG] 2025-07-02T19:37:45.786Z

```
   🔨 HTML generieren...
```

### 896. [LOG] 2025-07-02T19:37:45.787Z

```
   ✅ HTML erstellt: zu-viel-liebe-zu-wenig-liebe.html
```

### 897. [LOG] 2025-07-02T19:37:45.787Z

```
   ⚠️  HTML generiert trotz niedrigem Score für Optimierungszwecke
```

### 898. [LOG] 2025-07-02T19:37:45.788Z

```

🔨 Generiere Blog-Index...
```

### 899. [LOG] 2025-07-02T19:37:45.791Z

```
   ✅ Blog-Index erstellt: blog/index.html
```

### 900. [LOG] 2025-07-02T19:37:45.791Z

```

════════════════════════════════════════════════════════════════════════════════
```

### 901. [LOG] 2025-07-02T19:37:45.791Z

```
📊 BUILD REPORT
```

### 902. [LOG] 2025-07-02T19:37:45.791Z

```
════════════════════════════════════════════════════════════════════════════════
```

### 903. [LOG] 2025-07-02T19:37:45.791Z

```

📄 Verarbeitete Dateien: 9/9
```

### 904. [LOG] 2025-07-02T19:37:45.792Z

```

🎯 INTENTION-OPTIMIERUNG ERFORDERLICH: 7 Dateien

```

### 905. [LOG] 2025-07-02T19:37:45.792Z

```
🤖 AUTOMATISCH GENERIERTER KI-PROMPT:
```

### 906. [LOG] 2025-07-02T19:37:45.792Z

```
────────────────────────────────────────────────────────────
```

### 907. [LOG] 2025-07-02T19:37:45.792Z

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

### 908. [LOG] 2025-07-02T19:37:45.793Z

```
────────────────────────────────────────────────────────────
```

### 909. [LOG] 2025-07-02T19:37:45.793Z

```

📋 Weitere 6 Dateien benötigen Optimierung:
```

### 910. [LOG] 2025-07-02T19:37:45.793Z

```
   2. emotionale-leere.md (Score: 16%)
```

### 911. [LOG] 2025-07-02T19:37:45.793Z

```
   3. erschoepft-vom-stark-sein.md (Score: 22%)
```

### 912. [LOG] 2025-07-02T19:37:45.793Z

```
   4. ich-will-einfach-gehalten-werden.md (Score: 49%)
```

### 913. [LOG] 2025-07-02T19:37:45.793Z

```
   5. kontrolle-abgeben.md (Score: 18%)
```

### 914. [LOG] 2025-07-02T19:37:45.793Z

```
   6. sehnsucht-nach-hingabe.md (Score: 18%)
```

### 915. [LOG] 2025-07-02T19:37:45.794Z

```
   7. zu-viel-liebe-zu-wenig-liebe.md (Score: 14%)
```

### 916. [LOG] 2025-07-02T19:37:45.794Z

```

════════════════════════════════════════════════════════════════════════════════
```

### 917. [LOG] 2025-07-02T19:37:45.794Z

```

🧠 ADVANCED CHECKLIST VALIDATION REPORT
```

### 918. [LOG] 2025-07-02T19:37:45.794Z

```
================================================================================
```

### 919. [LOG] 2025-07-02T19:37:45.795Z

```
📊 Overall Checklist Performance: 9%
```

### 920. [LOG] 2025-07-02T19:37:45.795Z

```
✅ Excellent (80%+): 0 files
```

### 921. [LOG] 2025-07-02T19:37:45.795Z

```
⚠️  Good (60-79%): 0 files
```

### 922. [LOG] 2025-07-02T19:37:45.795Z

```
❌ Needs Work (<60%): 9 files
```

### 923. [LOG] 2025-07-02T19:37:45.795Z

```

🎯 FILES REQUIRING PSYCHOLOGICAL DEPTH ENHANCEMENT:
```

### 924. [LOG] 2025-07-02T19:37:45.796Z

```
   • bindungssehnsucht-normal.md: 1%
```

### 925. [LOG] 2025-07-02T19:37:45.796Z

```
     → Improve BINDUNG_KERN theme (0%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 926. [LOG] 2025-07-02T19:37:45.796Z

```
     → Improve VERSCHMELZUNG theme (0%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 927. [LOG] 2025-07-02T19:37:45.796Z

```
   • das-erste-mal.md: 8%
```

### 928. [LOG] 2025-07-02T19:37:45.796Z

```
     → Improve BINDUNG_KERN theme (8%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 929. [LOG] 2025-07-02T19:37:45.796Z

```
     → Improve VERSCHMELZUNG theme (8%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 930. [LOG] 2025-07-02T19:37:45.796Z

```
   • der-sichere-hafen.md: 10%
```

### 931. [LOG] 2025-07-02T19:37:45.796Z

```
     → Improve BINDUNG_KERN theme (17%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 932. [LOG] 2025-07-02T19:37:45.796Z

```
     → Improve VERSCHMELZUNG theme (8%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 933. [LOG] 2025-07-02T19:37:45.797Z

```
   • emotionale-leere.md: 18%
```

### 934. [LOG] 2025-07-02T19:37:45.797Z

```
     → Improve BINDUNG_KERN theme (17%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 935. [LOG] 2025-07-02T19:37:45.797Z

```
     → Improve VERSCHMELZUNG theme (25%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 936. [LOG] 2025-07-02T19:37:45.797Z

```
   • erschoepft-vom-stark-sein.md: 1%
```

### 937. [LOG] 2025-07-02T19:37:45.797Z

```
     → Improve BINDUNG_KERN theme (0%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 938. [LOG] 2025-07-02T19:37:45.797Z

```
     → Improve VERSCHMELZUNG theme (0%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 939. [LOG] 2025-07-02T19:37:45.797Z

```
   • ich-will-einfach-gehalten-werden.md: 18%
```

### 940. [LOG] 2025-07-02T19:37:45.797Z

```
     → Improve BINDUNG_KERN theme (17%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 941. [LOG] 2025-07-02T19:37:45.797Z

```
     → Improve VERSCHMELZUNG theme (17%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 942. [LOG] 2025-07-02T19:37:45.797Z

```
   • kontrolle-abgeben.md: 4%
```

### 943. [LOG] 2025-07-02T19:37:45.797Z

```
     → Improve BINDUNG_KERN theme (8%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 944. [LOG] 2025-07-02T19:37:45.798Z

```
     → Improve VERSCHMELZUNG theme (0%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 945. [LOG] 2025-07-02T19:37:45.798Z

```
   • sehnsucht-nach-hingabe.md: 11%
```

### 946. [LOG] 2025-07-02T19:37:45.798Z

```
     → Improve BINDUNG_KERN theme (0%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 947. [LOG] 2025-07-02T19:37:45.798Z

```
     → Improve VERSCHMELZUNG theme (25%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 948. [LOG] 2025-07-02T19:37:45.798Z

```
   • zu-viel-liebe-zu-wenig-liebe.md: 8%
```

### 949. [LOG] 2025-07-02T19:37:45.798Z

```
     → Improve BINDUNG_KERN theme (8%): Verstärke "gehalten werden", "ankommen", "aufgenommen sein" - das Kern-Bedürfnis
```

### 950. [LOG] 2025-07-02T19:37:45.798Z

```
     → Improve VERSCHMELZUNG theme (8%): Betone "Eins-werden", "fallen lassen", "sich auflösen dürfen"
```

### 951. [LOG] 2025-07-02T19:37:45.798Z

```

🔄 CHECKLIST ROTATION STATUS:
```

### 952. [LOG] 2025-07-02T19:37:45.798Z

```
   bindungssehnsucht-normal.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 953. [LOG] 2025-07-02T19:37:45.799Z

```
   das-erste-mal.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 954. [LOG] 2025-07-02T19:37:45.799Z

```
   der-sichere-hafen.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 955. [LOG] 2025-07-02T19:37:45.799Z

```
   emotionale-leere.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 956. [LOG] 2025-07-02T19:37:45.799Z

```
   erschoepft-vom-stark-sein.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 957. [LOG] 2025-07-02T19:37:45.799Z

```
   ich-will-einfach-gehalten-werden.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 958. [LOG] 2025-07-02T19:37:45.799Z

```
   kontrolle-abgeben.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 959. [LOG] 2025-07-02T19:37:45.799Z

```
   sehnsucht-nach-hingabe.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 960. [LOG] 2025-07-02T19:37:45.799Z

```
   zu-viel-liebe-zu-wenig-liebe.md: checklist-bindung-sicherheit, checklist-leere-verschmelzung, checkliste_sog_hingabe (9 unused)
```

### 961. [LOG] 2025-07-02T19:37:45.799Z

```

💡 NÄCHSTE SCHRITTE:
```

### 962. [LOG] 2025-07-02T19:37:45.799Z

```
1. Kopiere den generierten KI-Prompt
```

### 963. [LOG] 2025-07-02T19:37:45.799Z

```
2. Füge ihn in Chat ein für spezifische Optimierung
```

### 964. [LOG] 2025-07-02T19:37:45.800Z

```
3. Führe nach Änderungen erneut "pnpm build" aus
```

### 965. [LOG] 2025-07-02T19:37:45.800Z

```
4. System zeigt automatisch nächstes Problem
```

### 966. [LOG] 2025-07-02T19:37:45.800Z

```

🚨 BUILD COMPLETED - CONTENT OPTIMIZATION ALERTS GENERATED!
```

### 967. [LOG] 2025-07-02T19:37:45.800Z

```
════════════════════════════════════════════════════════════════════════════════
```

### 968. [LOG] 2025-07-02T19:37:45.801Z

```
📋 Content-Optimization-Alert gespeichert: docs\015_build_logs\CONTENT_OPTIMIZATION_ALERT_2025-07-02.json
```

### 969. [LOG] 2025-07-02T19:37:45.801Z

```

📋 VOLLSTÄNDIGER AUTOMATION-PLAN:
```

### 970. [LOG] 2025-07-02T19:37:45.801Z

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

### 971. [LOG] 2025-07-02T19:37:45.801Z

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

### 972. [LOG] 2025-07-02T19:37:45.802Z

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

### 973. [LOG] 2025-07-02T19:37:45.802Z

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

### 974. [LOG] 2025-07-02T19:37:45.803Z

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

### 975. [LOG] 2025-07-02T19:37:45.804Z

```

� QUALITY-ALERT DETAILS:
```

### 976. [LOG] 2025-07-02T19:37:45.804Z

```
   Type: CONTENT_OPTIMIZATION_NEEDED
```

### 977. [LOG] 2025-07-02T19:37:45.804Z

```
   Message: Vollständige Content-Optimierung durch KI empfohlen
```

### 978. [LOG] 2025-07-02T19:37:45.804Z

```
   Timestamp: 2025-07-02T19:37:45.804Z
```

### 979. [LOG] 2025-07-02T19:37:45.804Z

```
   Files affected: 7/9
```

### 980. [LOG] 2025-07-02T19:37:45.804Z

```
   First problem: der-sichere-hafen.md (45%)
```

### 981. [LOG] 2025-07-02T19:37:45.804Z

```
   Recommended action: CONTENT_OPTIMIZATION_RECOMMENDED
```

### 982. [LOG] 2025-07-02T19:37:45.804Z

```

📋 DETAILED QUALITY REPORT:
```

### 983. [LOG] 2025-07-02T19:37:45.805Z

```
   1. INTENTION_OPTIMIZATION_REQUIRED: der-sichere-hafen.md (Score: 45%, Issues: 0)
```

### 984. [LOG] 2025-07-02T19:37:45.805Z

```
   2. PENDING_OPTIMIZATION: emotionale-leere.md (Score: 16%, Issues: 0)
```

### 985. [LOG] 2025-07-02T19:37:45.805Z

```
   3. PENDING_OPTIMIZATION: erschoepft-vom-stark-sein.md (Score: 22%, Issues: 0)
```

### 986. [LOG] 2025-07-02T19:37:45.805Z

```
   4. PENDING_OPTIMIZATION: ich-will-einfach-gehalten-werden.md (Score: 49%, Issues: 0)
```

### 987. [LOG] 2025-07-02T19:37:45.805Z

```
   5. PENDING_OPTIMIZATION: kontrolle-abgeben.md (Score: 18%, Issues: 0)
```

### 988. [LOG] 2025-07-02T19:37:45.805Z

```
   6. PENDING_OPTIMIZATION: sehnsucht-nach-hingabe.md (Score: 18%, Issues: 0)
```

### 989. [LOG] 2025-07-02T19:37:45.805Z

```
   7. PENDING_OPTIMIZATION: zu-viel-liebe-zu-wenig-liebe.md (Score: 14%, Issues: 0)
```

### 990. [LOG] 2025-07-02T19:37:45.805Z

```

🎯 KI-PROMPT BEREIT FÜR OPTIMIERUNG:
```

### 991. [LOG] 2025-07-02T19:37:45.805Z

```
────────────────────────────────────────────────────────────
```

### 992. [LOG] 2025-07-02T19:37:45.805Z

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

### 993. [LOG] 2025-07-02T19:37:45.807Z

```
────────────────────────────────────────────────────────────
```

### 994. [LOG] 2025-07-02T19:37:45.807Z

```

✅ BUILD ERFOLGREICH - OPTIMIERUNG EMPFOHLEN!
```

### 995. [LOG] 2025-07-02T19:37:45.807Z

```
📋 QUALITY-ALERTS GESPEICHERT FÜR SPÄTERE VERBESSERUNG!
```

### 996. [LOG] 2025-07-02T19:37:45.807Z

```
🚀 VERCEL DEPLOYMENT KANN FORTFAHREN!
```

### 997. [LOG] 2025-07-02T19:37:45.807Z

```
💡 AUTOMATION-PLAN VERFÜGBAR FÜR OPTIMIERUNG!
```

### 998. [LOG] 2025-07-02T19:37:45.807Z

```

📋 FILE-MANAGEMENT-REGELN FÜR OPTIMIERUNG:
```

### 999. [LOG] 2025-07-02T19:37:45.807Z

```
✅ KEINE NEUEN DATEIEN ERSTELLEN - Problem an der Ursache lösen!
```

### 1000. [LOG] 2025-07-02T19:37:45.807Z

```
✅ KEINE DATEIEN WIEDERHERSTELLEN - Betroffene Datei direkt optimieren!
```

### 1001. [LOG] 2025-07-02T19:37:45.807Z

```
✅ ZWINGEND: Problematische Datei direkt bearbeiten und verbessern
```

### 1002. [LOG] 2025-07-02T19:37:45.808Z

```
✅ FOKUS: Root-Cause-Lösung statt Umgehung oder Neuansatz
```

### 1003. [LOG] 2025-07-02T19:37:45.808Z

```
💡 HINWEIS: Diese Regeln helfen der KI, gezielt und effektiv zu optimieren
```

### 1004. [LOG] 2025-07-02T19:37:45.808Z

```

🤖 OPTIMIZATION-PLAN BEREIT FÜR MANUELLE VERBESSERUNG
```

### 1005. [LOG] 2025-07-02T19:37:45.808Z

```
📝 KI KANN CONTENT NACH QUALITY-ALERTS OPTIMIEREN
```

### 1006. [LOG] 2025-07-02T19:37:45.808Z

```
🔄 BUILD LÄUFT VOLLSTÄNDIG DURCH - KEINE BLOCKIERUNG
```

### 1007. [LOG] 2025-07-02T19:37:45.808Z

```
✅ BUILD ERFOLGREICH ABGESCHLOSSEN - VERCEL DEPLOYMENT READY
```

### 1008. [LOG] 2025-07-02T19:37:45.808Z

```

✅ BUILD ERFOLGREICH ABGESCHLOSSEN!
```

### 1009. [LOG] 2025-07-02T19:37:45.808Z

```
   Verarbeitete Dateien: 9/9
```

### 1010. [LOG] 2025-07-02T19:37:45.808Z

```
   Content-Optimierungspotential: 7 Dateien
```

### 1011. [LOG] 2025-07-02T19:37:45.809Z

```
📊 Analysiere Landingpage und "Über mich"-Seite...
```

### 1012. [LOG] 2025-07-02T19:37:45.843Z

```
📄 Landingpage (index.html):
```

### 1013. [LOG] 2025-07-02T19:37:45.843Z

```
   Aktuelle Wörter: 4003
```

### 1014. [LOG] 2025-07-02T19:37:45.844Z

```
   Empfohlener Bereich: 4000-6000+ Wörter
```

### 1015. [LOG] 2025-07-02T19:37:45.844Z

```
   ✅ Optimale Wortanzahl: 4003 Wörter
```

### 1016. [LOG] 2025-07-02T19:37:45.846Z

```
   📋 SEO-Check:
```

### 1017. [LOG] 2025-07-02T19:37:45.846Z

```
      Title: 63 Zeichen
```

### 1018. [LOG] 2025-07-02T19:37:45.846Z

```
      Description: 233 Zeichen
```

### 1019. [LOG] 2025-07-02T19:37:45.854Z

```
📄 Über mich (ueber-mich.html):
```

### 1020. [LOG] 2025-07-02T19:37:45.854Z

```
   Aktuelle Wörter: 1494
```

### 1021. [LOG] 2025-07-02T19:37:45.854Z

```
   Empfohlener Bereich: 2000-4000+ Wörter
```

### 1022. [LOG] 2025-07-02T19:37:45.854Z

```
   ❌ Zu wenig Wörter: 1494 (min. 2000 für SEO)
```

### 1023. [LOG] 2025-07-02T19:37:45.854Z

```
   📈 Erweitere um 506 Wörter für bessere SEO-Performance
```

### 1024. [LOG] 2025-07-02T19:37:45.854Z

```
   💡 Empfehlung für "Über mich":
```

### 1025. [LOG] 2025-07-02T19:37:45.855Z

```
      • Mehr persönliche Geschichte und Background
```

### 1026. [LOG] 2025-07-02T19:37:45.855Z

```
      • Konkrete Erfahrungen und Lebensereignisse
```

### 1027. [LOG] 2025-07-02T19:37:45.855Z

```
      • Was dich von anderen unterscheidet
```

### 1028. [LOG] 2025-07-02T19:37:45.855Z

```
      • Deine Vision und Werte erklären
```

### 1029. [LOG] 2025-07-02T19:37:45.855Z

```
   📋 SEO-Check:
```

### 1030. [LOG] 2025-07-02T19:37:45.855Z

```
      Title: 71 Zeichen
```

### 1031. [LOG] 2025-07-02T19:37:45.856Z

```
      Description: 165 Zeichen
```

### 1032. [LOG] 2025-07-02T19:37:45.856Z

```

```

### 1033. [LOG] 2025-07-02T19:37:45.856Z

```
🔗 Analysiere interne Verlinkung...
```

### 1034. [LOG] 2025-07-02T19:37:45.856Z

```
   📄 Gefunden: 13 HTML-Dateien
```

### 1035. [LOG] 2025-07-02T19:37:45.865Z

```
   📄 index.html: 11 interne Links
```

### 1036. [LOG] 2025-07-02T19:37:45.868Z

```
   📄 ueber-mich.html: 11 interne Links
```

### 1037. [LOG] 2025-07-02T19:37:45.874Z

```
   📄 kontakt.html: 7 interne Links
```

### 1038. [LOG] 2025-07-02T19:37:45.877Z

```
   📄 blog/index.html: 23 interne Links
```

### 1039. [LOG] 2025-07-02T19:37:45.883Z

```
   📄 blog/bindungssehnsucht-normal.html: 5 interne Links
```

### 1040. [LOG] 2025-07-02T19:37:45.888Z

```
   📄 blog/das-erste-mal.html: 5 interne Links
```

### 1041. [LOG] 2025-07-02T19:37:45.891Z

```
   📄 blog/der-sichere-hafen.html: 5 interne Links
```

### 1042. [LOG] 2025-07-02T19:37:45.893Z

```
   📄 blog/emotionale-leere.html: 5 interne Links
```

### 1043. [LOG] 2025-07-02T19:37:45.896Z

```
   📄 blog/erschoepft-vom-stark-sein.html: 5 interne Links
```

### 1044. [LOG] 2025-07-02T19:37:45.898Z

```
   📄 blog/ich-will-einfach-gehalten-werden.html: 5 interne Links
```

### 1045. [LOG] 2025-07-02T19:37:45.900Z

```
   📄 blog/kontrolle-abgeben.html: 5 interne Links
```

### 1046. [LOG] 2025-07-02T19:37:45.906Z

```
   📄 blog/sehnsucht-nach-hingabe.html: 5 interne Links
```

### 1047. [LOG] 2025-07-02T19:37:45.909Z

```
   📄 blog/zu-viel-liebe-zu-wenig-liebe.html: 5 interne Links
```

### 1048. [LOG] 2025-07-02T19:37:45.910Z

```

   🔍 Validiere 22 eindeutige Links...
```

### 1049. [LOG] 2025-07-02T19:37:45.911Z

```
   🔍 Spezielle Blog-Verlinkungsanalyse...
```

### 1050. [LOG] 2025-07-02T19:37:45.911Z

```
   🔍 README-Verlinkungsanalyse...
```

### 1051. [LOG] 2025-07-02T19:37:45.912Z

```

   📊 Verlinkungsanalyse abgeschlossen:
```

### 1052. [LOG] 2025-07-02T19:37:45.912Z

```
   ⚠️ 11 Verlinkungsprobleme gefunden:
```

### 1053. [LOG] 2025-07-02T19:37:45.912Z

```
   🚨 KRITISCHE Probleme (11):
```

### 1054. [LOG] 2025-07-02T19:37:45.912Z

```
      1. Defekter Link: ../index.html (Ziel nicht gefunden)
```

### 1055. [LOG] 2025-07-02T19:37:45.912Z

```
         → blog/index.html: "Ein offener Brief" (Zeile ~1)
```

### 1056. [LOG] 2025-07-02T19:37:45.912Z

```
         → blog/index.html: "Start" (Zeile ~2)
```

### 1057. [LOG] 2025-07-02T19:37:45.912Z

```
         → blog/index.html: "Startseite" (Zeile ~23)
```

### 1058. [LOG] 2025-07-02T19:37:45.913Z

```
         → blog/bindungssehnsucht-normal.html: "Ein offener Brief" (Zeile ~1)
```

### 1059. [LOG] 2025-07-02T19:37:45.913Z

```
         → blog/bindungssehnsucht-normal.html: "Start" (Zeile ~2)
```

### 1060. [LOG] 2025-07-02T19:37:45.913Z

```
         → blog/bindungssehnsucht-normal.html: "Startseite" (Zeile ~5)
```

### 1061. [LOG] 2025-07-02T19:37:45.913Z

```
         → blog/das-erste-mal.html: "Ein offener Brief" (Zeile ~1)
```

### 1062. [LOG] 2025-07-02T19:37:45.913Z

```
         → blog/das-erste-mal.html: "Start" (Zeile ~2)
```

### 1063. [LOG] 2025-07-02T19:37:45.913Z

```
         → blog/das-erste-mal.html: "Startseite" (Zeile ~5)
```

### 1064. [LOG] 2025-07-02T19:37:45.913Z

```
         → blog/der-sichere-hafen.html: "Ein offener Brief" (Zeile ~1)
```

### 1065. [LOG] 2025-07-02T19:37:45.913Z

```
         → blog/der-sichere-hafen.html: "Start" (Zeile ~2)
```

### 1066. [LOG] 2025-07-02T19:37:45.914Z

```
         → blog/der-sichere-hafen.html: "Startseite" (Zeile ~5)
```

### 1067. [LOG] 2025-07-02T19:37:45.914Z

```
         → blog/emotionale-leere.html: "Ein offener Brief" (Zeile ~1)
```

### 1068. [LOG] 2025-07-02T19:37:45.914Z

```
         → blog/emotionale-leere.html: "Start" (Zeile ~2)
```

### 1069. [LOG] 2025-07-02T19:37:45.914Z

```
         → blog/emotionale-leere.html: "Startseite" (Zeile ~5)
```

### 1070. [LOG] 2025-07-02T19:37:45.914Z

```
         → blog/erschoepft-vom-stark-sein.html: "Ein offener Brief" (Zeile ~1)
```

### 1071. [LOG] 2025-07-02T19:37:45.914Z

```
         → blog/erschoepft-vom-stark-sein.html: "Start" (Zeile ~2)
```

### 1072. [LOG] 2025-07-02T19:37:45.914Z

```
         → blog/erschoepft-vom-stark-sein.html: "Startseite" (Zeile ~5)
```

### 1073. [LOG] 2025-07-02T19:37:45.914Z

```
         → blog/ich-will-einfach-gehalten-werden.html: "Ein offener Brief" (Zeile ~1)
```

### 1074. [LOG] 2025-07-02T19:37:45.914Z

```
         → blog/ich-will-einfach-gehalten-werden.html: "Start" (Zeile ~2)
```

### 1075. [LOG] 2025-07-02T19:37:45.915Z

```
         → blog/ich-will-einfach-gehalten-werden.html: "Startseite" (Zeile ~5)
```

### 1076. [LOG] 2025-07-02T19:37:45.915Z

```
         → blog/kontrolle-abgeben.html: "Ein offener Brief" (Zeile ~1)
```

### 1077. [LOG] 2025-07-02T19:37:45.915Z

```
         → blog/kontrolle-abgeben.html: "Start" (Zeile ~2)
```

### 1078. [LOG] 2025-07-02T19:37:45.915Z

```
         → blog/kontrolle-abgeben.html: "Startseite" (Zeile ~5)
```

### 1079. [LOG] 2025-07-02T19:37:45.915Z

```
         → blog/sehnsucht-nach-hingabe.html: "Ein offener Brief" (Zeile ~1)
```

### 1080. [LOG] 2025-07-02T19:37:45.915Z

```
         → blog/sehnsucht-nach-hingabe.html: "Start" (Zeile ~2)
```

### 1081. [LOG] 2025-07-02T19:37:45.915Z

```
         → blog/sehnsucht-nach-hingabe.html: "Startseite" (Zeile ~5)
```

### 1082. [LOG] 2025-07-02T19:37:45.915Z

```
         → blog/zu-viel-liebe-zu-wenig-liebe.html: "Ein offener Brief" (Zeile ~1)
```

### 1083. [LOG] 2025-07-02T19:37:45.915Z

```
         → blog/zu-viel-liebe-zu-wenig-liebe.html: "Start" (Zeile ~2)
```

### 1084. [LOG] 2025-07-02T19:37:45.915Z

```
         → blog/zu-viel-liebe-zu-wenig-liebe.html: "Startseite" (Zeile ~5)
```

### 1085. [LOG] 2025-07-02T19:37:45.915Z

```
      2. Defekter Link: ../ueber-mich.html (Ziel nicht gefunden)
```

### 1086. [LOG] 2025-07-02T19:37:45.916Z

```
         → blog/index.html: "Über Mich" (Zeile ~3)
```

### 1087. [LOG] 2025-07-02T19:37:45.916Z

```
         → blog/bindungssehnsucht-normal.html: "Über Mich" (Zeile ~3)
```

### 1088. [LOG] 2025-07-02T19:37:45.916Z

```
         → blog/das-erste-mal.html: "Über Mich" (Zeile ~3)
```

### 1089. [LOG] 2025-07-02T19:37:45.916Z

```
         → blog/der-sichere-hafen.html: "Über Mich" (Zeile ~3)
```

### 1090. [LOG] 2025-07-02T19:37:45.916Z

```
         → blog/emotionale-leere.html: "Über Mich" (Zeile ~3)
```

### 1091. [LOG] 2025-07-02T19:37:45.916Z

```
         → blog/erschoepft-vom-stark-sein.html: "Über Mich" (Zeile ~3)
```

### 1092. [LOG] 2025-07-02T19:37:45.916Z

```
         → blog/ich-will-einfach-gehalten-werden.html: "Über Mich" (Zeile ~3)
```

### 1093. [LOG] 2025-07-02T19:37:45.916Z

```
         → blog/kontrolle-abgeben.html: "Über Mich" (Zeile ~3)
```

### 1094. [LOG] 2025-07-02T19:37:45.916Z

```
         → blog/sehnsucht-nach-hingabe.html: "Über Mich" (Zeile ~3)
```

### 1095. [LOG] 2025-07-02T19:37:45.916Z

```
         → blog/zu-viel-liebe-zu-wenig-liebe.html: "Über Mich" (Zeile ~3)
```

### 1096. [LOG] 2025-07-02T19:37:45.916Z

```
      3. Defekter Link: zu-viel-liebe-zu-wenig-liebe.html (Ziel nicht gefunden)
```

### 1097. [LOG] 2025-07-02T19:37:45.917Z

```
         → blog/index.html: "Du weißt bereits: 'Bin ich z'viel?' – Du bist genau richtig bei mir" (Zeile ~5)
```

### 1098. [LOG] 2025-07-02T19:37:45.917Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~6)
```

### 1099. [LOG] 2025-07-02T19:37:45.917Z

```
      4. Defekter Link: das-erste-mal.html (Ziel nicht gefunden)
```

### 1100. [LOG] 2025-07-02T19:37:45.917Z

```
         → blog/index.html: "Du weißt bereits: 'Das erste Mal mit ihm' – Simon wird dein Erstes" (Zeile ~7)
```

### 1101. [LOG] 2025-07-02T19:37:45.917Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~8)
```

### 1102. [LOG] 2025-07-02T19:37:45.917Z

```
      5. Defekter Link: der-sichere-hafen.html (Ziel nicht gefunden)
```

### 1103. [LOG] 2025-07-02T19:37:45.917Z

```
         → blog/index.html: "Du weißt bereits: 'Der sichere Hafen' – Simon ist dein Zuhause" (Zeile ~9)
```

### 1104. [LOG] 2025-07-02T19:37:45.917Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~10)
```

### 1105. [LOG] 2025-07-02T19:37:45.917Z

```
      6. Defekter Link: emotionale-leere.html (Ziel nicht gefunden)
```

### 1106. [LOG] 2025-07-02T19:37:45.917Z

```
         → blog/index.html: "'Fühl mi wie holl' – Simon füllt deine emotionale Leere" (Zeile ~11)
```

### 1107. [LOG] 2025-07-02T19:37:45.917Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~12)
```

### 1108. [LOG] 2025-07-02T19:37:45.918Z

```
      7. Defekter Link: ich-will-einfach-gehalten-werden.html (Ziel nicht gefunden)
```

### 1109. [LOG] 2025-07-02T19:37:45.918Z

```
         → blog/index.html: "Du weißt bereits: 'Ich will einfach gehalten werden' – Ich halte dich" (Zeile ~13)
```

### 1110. [LOG] 2025-07-02T19:37:45.918Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~14)
```

### 1111. [LOG] 2025-07-02T19:37:45.918Z

```
      8. Defekter Link: bindungssehnsucht-normal.html (Ziel nicht gefunden)
```

### 1112. [LOG] 2025-07-02T19:37:45.918Z

```
         → blog/index.html: "Wenn Bindungssehnsucht normal ist – Du darfst so fühlen" (Zeile ~15)
```

### 1113. [LOG] 2025-07-02T19:37:45.918Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~16)
```

### 1114. [LOG] 2025-07-02T19:37:45.918Z

```
      9. Defekter Link: erschoepft-vom-stark-sein.html (Ziel nicht gefunden)
```

### 1115. [LOG] 2025-07-02T19:37:45.918Z

```
         → blog/index.html: "Du weißt bereits: 'Bin so müed' – Endlich schwach sein dürfen" (Zeile ~17)
```

### 1116. [LOG] 2025-07-02T19:37:45.918Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~18)
```

### 1117. [LOG] 2025-07-02T19:37:45.918Z

```
      10. Defekter Link: kontrolle-abgeben.html (Ziel nicht gefunden)
```

### 1118. [LOG] 2025-07-02T19:37:45.918Z

```
         → blog/index.html: "Du weißt bereits: 'Will dass einer übernimmt' – Kontrolle abgeben" (Zeile ~19)
```

### 1119. [LOG] 2025-07-02T19:37:45.918Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~20)
```

### 1120. [LOG] 2025-07-02T19:37:45.919Z

```
      11. Defekter Link: sehnsucht-nach-hingabe.html (Ziel nicht gefunden)
```

### 1121. [LOG] 2025-07-02T19:37:45.919Z

```
         → blog/index.html: "Du weißt bereits: 'Will mi ganz gää' – Ich nehme dich vollständig" (Zeile ~21)
```

### 1122. [LOG] 2025-07-02T19:37:45.919Z

```
         → blog/index.html: "Weiterlesen" (Zeile ~22)
```

### 1123. [LOG] 2025-07-02T19:37:45.919Z

```

```

### 1124. [LOG] 2025-07-02T19:37:45.919Z

```

🔍 MULTI-FILE SINNLOSIGKEITS-CHECKER wird getriggert...
```

### 1125. [LOG] 2025-07-02T19:37:46.001Z

```
✅ Multi-File-Checker erfolgreich ausgeführt:
```

### 1126. [LOG] 2025-07-02T19:37:46.001Z

```

```

## Performance-Statistiken

- **Gesamte Log-Einträge:** 1126
- **ERROR-Level:** 25
- **WARN-Level:** 0
- **LOG-Level:** 413
- **PROBLEM-Level:** 686
- **Build-Dauer:** 834ms
- **Durchschnitt pro Log:** 1ms

## VS Code Problems Report

**❌ 686 Problem(e) gefunden:**

### Übersicht
- **Errors:** 4
- **Warnings:** 682  
- **Infos:** 0

### 🚨 Errors (4)

#### 1. build-process\modules\logger.js:145
**Severity:** ERROR  
**Message:** Typo: "fucntion" should be "function"  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 2. build-process\modules\logger.js:146
**Severity:** ERROR  
**Message:** Typo: "fucntion" should be "function"  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 3. scripts\build.js:690
**Severity:** ERROR  
**Message:** Typo: "fucntion" should be "function"  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 4. scripts\build.js:691
**Severity:** ERROR  
**Message:** Typo: "fucntion" should be "function"  
**Timestamp:** 2025-07-02T19:37:45.659Z

### ⚠️ Warnings (682)

#### 1. app-gui\dist-electron\index-Ckhtba7t.js:40
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.642Z

#### 2. app-gui\dist-electron\index-Ckhtba7t.js:1943
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.643Z

#### 3. app-gui\dist-electron\index-Ckhtba7t.js:2327
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.643Z

#### 4. app-gui\dist-electron\index-Ckhtba7t.js:2713
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.643Z

#### 5. app-gui\dist-electron\index-Ckhtba7t.js:2741
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.643Z

#### 6. app-gui\dist-electron\index-Ckhtba7t.js:3562
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.643Z

#### 7. app-gui\dist-electron\index-Ckhtba7t.js:3599
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.644Z

#### 8. app-gui\dist-electron\index-Ckhtba7t.js:4316
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.644Z

#### 9. app-gui\dist-electron\index-Ckhtba7t.js:5013
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.644Z

#### 10. app-gui\dist-electron\index-Ckhtba7t.js:5406
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.644Z

#### 11. app-gui\dist-electron\index-Ckhtba7t.js:6202
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.645Z

#### 12. app-gui\dist-electron\index-Ckhtba7t.js:6587
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.645Z

#### 13. app-gui\dist-electron\index-Ckhtba7t.js:6720
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.645Z

#### 14. app-gui\dist-electron\index-Ckhtba7t.js:6743
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.645Z

#### 15. app-gui\dist-electron\index-Ckhtba7t.js:6803
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.645Z

#### 16. app-gui\dist-electron\index-Ckhtba7t.js:6895
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.645Z

#### 17. app-gui\dist-electron\index-Ckhtba7t.js:6923
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.645Z

#### 18. app-gui\dist-electron\index-Ckhtba7t.js:6954
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.645Z

#### 19. app-gui\dist-electron\index-Ckhtba7t.js:7029
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.645Z

#### 20. app-gui\dist-electron\index-Ckhtba7t.js:7054
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.645Z

#### 21. app-gui\dist-electron\index-Ckhtba7t.js:7099
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.645Z

#### 22. app-gui\dist-electron\index-Ckhtba7t.js:7531
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.645Z

#### 23. app-gui\dist-electron\index-Ckhtba7t.js:7585
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.645Z

#### 24. app-gui\dist-electron\index-Ckhtba7t.js:7983
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.645Z

#### 25. app-gui\dist-electron\index-Ckhtba7t.js:8071
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.645Z

#### 26. app-gui\dist-electron\index-Ckhtba7t.js:8075
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.645Z

#### 27. app-gui\dist-electron\index-Ckhtba7t.js:8112
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.645Z

#### 28. app-gui\dist-electron\index-Ckhtba7t.js:8493
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.645Z

#### 29. app-gui\dist-electron\index-Ckhtba7t.js:9746
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.645Z

#### 30. app-gui\dist-electron\index-Ckhtba7t.js:9945
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.645Z

#### 31. app-gui\dist-electron\index-DhEd7u67.js:40
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.647Z

#### 32. app-gui\dist-electron\index-DhEd7u67.js:1950
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.647Z

#### 33. app-gui\dist-electron\index-DhEd7u67.js:2360
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.647Z

#### 34. app-gui\dist-electron\index-DhEd7u67.js:2762
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.648Z

#### 35. app-gui\dist-electron\index-DhEd7u67.js:2790
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.648Z

#### 36. app-gui\dist-electron\index-DhEd7u67.js:3618
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.648Z

#### 37. app-gui\dist-electron\index-DhEd7u67.js:3655
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.648Z

#### 38. app-gui\dist-electron\index-DhEd7u67.js:4372
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.648Z

#### 39. app-gui\dist-electron\index-DhEd7u67.js:5069
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.648Z

#### 40. app-gui\dist-electron\index-DhEd7u67.js:5462
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.648Z

#### 41. app-gui\dist-electron\index-DhEd7u67.js:6258
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.648Z

#### 42. app-gui\dist-electron\index-DhEd7u67.js:6643
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.648Z

#### 43. app-gui\dist-electron\index-DhEd7u67.js:6776
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.649Z

#### 44. app-gui\dist-electron\index-DhEd7u67.js:6799
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.649Z

#### 45. app-gui\dist-electron\index-DhEd7u67.js:6859
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.649Z

#### 46. app-gui\dist-electron\index-DhEd7u67.js:6951
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.649Z

#### 47. app-gui\dist-electron\index-DhEd7u67.js:6979
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.649Z

#### 48. app-gui\dist-electron\index-DhEd7u67.js:7010
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.649Z

#### 49. app-gui\dist-electron\index-DhEd7u67.js:7085
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.649Z

#### 50. app-gui\dist-electron\index-DhEd7u67.js:7110
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.649Z

#### 51. app-gui\dist-electron\index-DhEd7u67.js:7155
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.649Z

#### 52. app-gui\dist-electron\index-DhEd7u67.js:7587
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.649Z

#### 53. app-gui\dist-electron\index-DhEd7u67.js:7641
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.649Z

#### 54. app-gui\dist-electron\index-DhEd7u67.js:8039
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.649Z

#### 55. app-gui\dist-electron\index-DhEd7u67.js:8127
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.649Z

#### 56. app-gui\dist-electron\index-DhEd7u67.js:8131
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.649Z

#### 57. app-gui\dist-electron\index-DhEd7u67.js:8168
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.649Z

#### 58. app-gui\dist-electron\index-DhEd7u67.js:8549
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.649Z

#### 59. app-gui\dist-electron\index-DhEd7u67.js:9802
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.649Z

#### 60. app-gui\dist-electron\index-DhEd7u67.js:10001
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.649Z

#### 61. app-gui\src\App.jsx:4
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.652Z

#### 62. app-gui\src\App.jsx:72
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.652Z

#### 63. app-gui\src\App.jsx:99
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.652Z

#### 64. build-process\mainBuild.js:52
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 65. build-process\mainBuild.js:64
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 66. build-process\mainBuild.js:98
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 67. build-process\mainBuild.js:102
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 68. build-process\mainBuild.js:104
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 69. build-process\mainBuild.js:110
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 70. build-process\mainBuild.js:112
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 71. build-process\mainBuild.js:116
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 72. build-process\mainBuild.js:123
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 73. build-process\mainBuild.js:145
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 74. build-process\mainBuild.js:147
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 75. build-process\mainBuild.js:174
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 76. build-process\mainBuild.js:205
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 77. build-process\mainBuild.js:231
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 78. build-process\mainBuild.js:254
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 79. build-process\modules\contentOptimizer.js:53
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 80. build-process\modules\contentOptimizer.js:66
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 81. build-process\modules\contentOptimizer.js:111
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 82. build-process\modules\contentOptimizer.js:157
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 83. build-process\modules\contentOptimizer.js:338
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 84. build-process\modules\fileUtils.js:22
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 85. build-process\modules\fileUtils.js:45
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 86. build-process\modules\fileUtils.js:90
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 87. build-process\modules\fileUtils.js:151
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 88. build-process\modules\fileUtils.js:174
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 89. build-process\modules\logger.js:17
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 90. build-process\modules\logger.js:34
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 91. build-process\modules\logger.js:62
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 92. build-process\modules\logger.js:243
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 93. build-process\modules\logger.js:276
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.653Z

#### 94. build-process\modules\seoCheck.js:20
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.654Z

#### 95. build-process\modules\seoCheck.js:94
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.654Z

#### 96. build-process\modules\seoCheck.js:96
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.654Z

#### 97. build-process\modules\seoCheck.js:109
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.654Z

#### 98. build-process\modules\seoCheck.js:248
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.654Z

#### 99. build-process\modules\seoCheck.js:335
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.654Z

#### 100. build-process\modules\seoCheck.js:406
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.654Z

#### 101. build-process\modules\seoCheck.js:423
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.654Z

#### 102. build-process\modules\seoCheck.js:505
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.654Z

#### 103. build-process\modules\seoCheck.js:513
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.654Z

#### 104. scripts\build-checks\check_scripts\advanced-content-validator.js:17
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 105. scripts\build-checks\check_scripts\advanced-content-validator.js:32
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 106. scripts\build-checks\check_scripts\advanced-content-validator.js:34
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 107. scripts\build-checks\check_scripts\advanced-content-validator.js:50
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 108. scripts\build-checks\check_scripts\advanced-content-validator.js:118
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 109. scripts\build-checks\check_scripts\advanced-content-validator.js:143
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 110. scripts\build-checks\check_scripts\advanced-content-validator.js:217
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 111. scripts\build-checks\check_scripts\advanced-content-validator.js:247
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 112. scripts\build-checks\check_scripts\advanced-content-validator.js:297
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 113. scripts\build-checks\check_scripts\advanced-content-validator.js:330
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 114. scripts\build-checks\check_scripts\advanced-content-validator.js:339
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 115. scripts\build-checks\check_scripts\advanced-content-validator.js:340
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 116. scripts\build-checks\check_scripts\advanced-content-validator.js:346
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 117. scripts\build-checks\check_scripts\advanced-content-validator.js:355
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 118. scripts\build-checks\check_scripts\advanced-content-validator.js:395
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 119. scripts\build-checks\check_scripts\advanced-content-validator.js:445
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 120. scripts\build-checks\check_scripts\advanced-content-validator.js:453
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 121. scripts\build-checks\check_scripts\advanced-content-validator.js:488
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 122. scripts\build-checks\check_scripts\advanced-content-validator.js:516
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 123. scripts\build-checks\check_scripts\advanced-content-validator.js:602
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 124. scripts\build-checks\check_scripts\advanced-content-validator.js:609
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 125. scripts\build-checks\check_scripts\advanced-content-validator.js:614
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 126. scripts\build-checks\check_scripts\advanced-content-validator.js:707
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 127. scripts\build-checks\check_scripts\advanced-content-validator.js:716
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 128. scripts\build-checks\check_scripts\advanced-content-validator.js:739
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 129. scripts\build-checks\check_scripts\advanced-content-validator.js:762
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.655Z

#### 130. scripts\build-checks\check_scripts\checklist-cli.js:14
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 131. scripts\build-checks\check_scripts\checklist-cli.js:15
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 132. scripts\build-checks\check_scripts\checklist-cli.js:20
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 133. scripts\build-checks\check_scripts\checklist-cli.js:21
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 134. scripts\build-checks\check_scripts\checklist-cli.js:24
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 135. scripts\build-checks\check_scripts\checklist-cli.js:28
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 136. scripts\build-checks\check_scripts\checklist-cli.js:33
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 137. scripts\build-checks\check_scripts\checklist-cli.js:34
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 138. scripts\build-checks\check_scripts\checklist-cli.js:35
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 139. scripts\build-checks\check_scripts\checklist-cli.js:42
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 140. scripts\build-checks\check_scripts\checklist-cli.js:50
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 141. scripts\build-checks\check_scripts\checklist-cli.js:52
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 142. scripts\build-checks\check_scripts\checklist-cli.js:53
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 143. scripts\build-checks\check_scripts\checklist-cli.js:64
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 144. scripts\build-checks\check_scripts\checklist-cli.js:69
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 145. scripts\build-checks\check_scripts\checklist-cli.js:72
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 146. scripts\build-checks\check_scripts\checklist-cli.js:79
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 147. scripts\build-checks\check_scripts\checklist-cli.js:84
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 148. scripts\build-checks\check_scripts\checklist-cli.js:89
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 149. scripts\build-checks\check_scripts\checklist-cli.js:93
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 150. scripts\build-checks\check_scripts\checklist-cli.js:94
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 151. scripts\build-checks\check_scripts\checklist-cli.js:96
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 152. scripts\build-checks\check_scripts\checklist-cli.js:113
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 153. scripts\build-checks\check_scripts\checklist-cli.js:115
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 154. scripts\build-checks\check_scripts\checklist-cli.js:116
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 155. scripts\build-checks\check_scripts\checklist-cli.js:118
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 156. scripts\build-checks\check_scripts\checklist-cli.js:126
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 157. scripts\build-checks\check_scripts\checklist-cli.js:131
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 158. scripts\build-checks\check_scripts\checklist-cli.js:132
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 159. scripts\build-checks\check_scripts\checklist-cli.js:136
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 160. scripts\build-checks\check_scripts\checklist-cli.js:137
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 161. scripts\build-checks\check_scripts\checklist-cli.js:141
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 162. scripts\build-checks\check_scripts\checklist-cli.js:143
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 163. scripts\build-checks\check_scripts\checklist-cli.js:145
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 164. scripts\build-checks\check_scripts\checklist-cli.js:149
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 165. scripts\build-checks\check_scripts\checklist-cli.js:151
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 166. scripts\build-checks\check_scripts\checklist-cli.js:156
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 167. scripts\build-checks\check_scripts\checklist-cli.js:158
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 168. scripts\build-checks\check_scripts\checklist-cli.js:164
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 169. scripts\build-checks\check_scripts\checklist-cli.js:166
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 170. scripts\build-checks\check_scripts\checklist-cli.js:172
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 171. scripts\build-checks\check_scripts\checklist-cli.js:173
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 172. scripts\build-checks\check_scripts\checklist-cli.js:174
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 173. scripts\build-checks\check_scripts\checklist-cli.js:175
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 174. scripts\build-checks\check_scripts\checklist-cli.js:176
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 175. scripts\build-checks\check_scripts\checklist-cli.js:177
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 176. scripts\build-checks\check_scripts\checklist-cli.js:178
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 177. scripts\build-checks\check_scripts\checklist-cli.js:179
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 178. scripts\build-checks\check_scripts\checklist-cli.js:180
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 179. scripts\build-checks\check_scripts\checklist-cli.js:181
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 180. scripts\build-checks\check_scripts\checklist-cli.js:182
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 181. scripts\build-checks\check_scripts\checklist-cli.js:183
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 182. scripts\build-checks\check_scripts\checklist-cli.js:184
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 183. scripts\build-checks\check_scripts\checklist-cli.js:185
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 184. scripts\build-checks\check_scripts\checklist-cli.js:217
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 185. scripts\build-checks\check_scripts\checklist-cli.js:218
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 186. scripts\build-checks\check_scripts\comprehensiveCheck.js:15
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 187. scripts\build-checks\check_scripts\comprehensiveCheck.js:34
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 188. scripts\build-checks\check_scripts\comprehensiveCheck.js:62
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 189. scripts\build-checks\check_scripts\comprehensiveCheck.js:63
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 190. scripts\build-checks\check_scripts\comprehensiveCheck.js:66
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 191. scripts\build-checks\check_scripts\comprehensiveCheck.js:158
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 192. scripts\build-checks\check_scripts\comprehensiveCheck.js:209
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 193. scripts\build-checks\check_scripts\comprehensiveCheck.js:246
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 194. scripts\build-checks\check_scripts\keyword-cleanup.js:38
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 195. scripts\build-checks\check_scripts\keyword-cleanup.js:40
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 196. scripts\build-checks\check_scripts\keyword-cleanup.js:58
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 197. scripts\build-checks\check_scripts\keyword-cleanup.js:64
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 198. scripts\build-checks\check_scripts\keyword-cleanup.js:67
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 199. scripts\build-checks\check_scripts\keyword-cleanup.js:71
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 200. scripts\build-checks\check_scripts\keyword-cleanup.js:72
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 201. scripts\build-checks\check_scripts\keyword-cleanup.js:73
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.656Z

#### 202. scripts\build-checks\check_scripts\masterBuildChecker.js:15
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 203. scripts\build-checks\check_scripts\masterBuildChecker.js:75
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 204. scripts\build-checks\check_scripts\masterBuildChecker.js:76
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 205. scripts\build-checks\check_scripts\masterBuildChecker.js:77
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 206. scripts\build-checks\check_scripts\masterBuildChecker.js:78
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 207. scripts\build-checks\check_scripts\masterBuildChecker.js:79
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 208. scripts\build-checks\check_scripts\masterBuildChecker.js:84
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 209. scripts\build-checks\check_scripts\masterBuildChecker.js:87
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 210. scripts\build-checks\check_scripts\masterBuildChecker.js:116
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 211. scripts\build-checks\check_scripts\masterBuildChecker.js:240
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 212. scripts\build-checks\check_scripts\masterBuildChecker.js:373
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 213. scripts\build-checks\check_scripts\masterBuildChecker.js:421
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 214. scripts\build-checks\check_scripts\masterBuildChecker.js:470
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 215. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:31
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 216. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:32
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 217. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:38
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 218. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:74
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 219. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:98
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 220. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:111
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 221. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:121
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 222. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:125
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 223. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:126
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 224. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:127
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 225. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:138
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 226. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:142
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 227. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:152
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 228. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:177
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 229. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:201
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 230. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:257
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 231. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:266
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 232. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:274
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 233. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:277
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 234. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:278
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 235. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:279
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 236. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:280
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 237. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:295
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 238. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:318
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 239. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:342
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 240. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:353
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 241. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:354
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 242. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:355
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 243. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:357
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 244. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:358
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 245. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:359
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 246. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:362
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 247. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:363
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 248. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:364
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 249. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:365
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 250. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:373
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 251. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:378
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 252. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:383
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 253. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:386
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 254. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:390
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 255. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:394
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 256. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:396
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 257. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:398
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 258. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:400
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 259. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:402
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 260. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:435
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 261. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:455
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 262. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:459
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 263. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:478
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 264. scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:489
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.657Z

#### 265. scripts\build.js:17
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 266. scripts\build.js:20
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 267. scripts\build.js:21
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 268. scripts\build.js:24
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 269. scripts\build.js:34
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 270. scripts\build.js:40
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 271. scripts\build.js:92
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 272. scripts\build.js:104
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 273. scripts\build.js:119
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 274. scripts\build.js:122
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 275. scripts\build.js:124
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 276. scripts\build.js:135
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 277. scripts\build.js:137
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 278. scripts\build.js:140
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 279. scripts\build.js:147
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 280. scripts\build.js:149
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 281. scripts\build.js:152
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 282. scripts\build.js:159
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 283. scripts\build.js:161
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 284. scripts\build.js:177
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 285. scripts\build.js:199
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 286. scripts\build.js:217
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 287. scripts\build.js:225
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 288. scripts\build.js:241
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 289. scripts\build.js:256
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 290. scripts\build.js:273
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 291. scripts\build.js:276
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 292. scripts\build.js:281
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 293. scripts\build.js:284
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 294. scripts\build.js:286
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 295. scripts\build.js:290
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 296. scripts\build.js:309
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 297. scripts\build.js:311
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 298. scripts\build.js:330
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 299. scripts\build.js:342
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 300. scripts\build.js:351
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 301. scripts\build.js:352
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 302. scripts\build.js:353
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 303. scripts\build.js:358
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 304. scripts\build.js:359
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 305. scripts\build.js:370
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 306. scripts\build.js:371
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 307. scripts\build.js:372
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 308. scripts\build.js:373
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 309. scripts\build.js:374
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 310. scripts\build.js:378
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 311. scripts\build.js:379
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 312. scripts\build.js:380
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 313. scripts\build.js:381
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 314. scripts\build.js:382
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 315. scripts\build.js:386
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 316. scripts\build.js:387
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 317. scripts\build.js:390
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 318. scripts\build.js:397
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 319. scripts\build.js:398
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 320. scripts\build.js:399
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 321. scripts\build.js:420
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 322. scripts\build.js:429
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 323. scripts\build.js:438
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 324. scripts\build.js:465
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 325. scripts\build.js:496
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 326. scripts\build.js:519
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 327. scripts\build.js:542
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 328. scripts\build.js:563
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 329. scripts\build.js:575
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 330. scripts\build.js:738
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 331. scripts\build.js:748
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 332. scripts\build.js:834
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 333. scripts\build.js:904
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 334. scripts\build.js:944
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 335. scripts\build.js:1073
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 336. scripts\build.js:1077
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 337. scripts\build.js:1084
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 338. scripts\build.js:1091
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 339. scripts\build.js:1153
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 340. scripts\build.js:1178
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 341. scripts\build.js:1197
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 342. scripts\build.js:1225
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 343. scripts\build.js:1304
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 344. scripts\build.js:1347
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 345. scripts\build.js:1358
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 346. scripts\build.js:1420
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 347. scripts\build.js:1449
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 348. scripts\build.js:1453
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 349. scripts\build.js:1513
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 350. scripts\build.js:1578
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 351. scripts\build.js:1769
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 352. scripts\build.js:1807
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 353. scripts\build.js:1819
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 354. scripts\build.js:1899
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 355. scripts\build.js:1995
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 356. scripts\build.js:1996
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.659Z

#### 357. scripts\build.js:2117
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 358. scripts\build.js:2118
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 359. scripts\build.js:2124
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 360. scripts\build.js:2125
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 361. scripts\build.js:2126
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 362. scripts\build.js:2146
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 363. scripts\build.js:2150
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 364. scripts\build.js:2160
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 365. scripts\build.js:2165
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 366. scripts\build.js:2179
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 367. scripts\build.js:2185
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 368. scripts\build.js:2187
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 369. scripts\build.js:2189
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 370. scripts\build.js:2190
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 371. scripts\build.js:2202
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 372. scripts\build.js:2205
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 373. scripts\build.js:2217
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 374. scripts\build.js:2221
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 375. scripts\build.js:2223
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 376. scripts\build.js:2226
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 377. scripts\build.js:2277
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 378. scripts\build.js:2279
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 379. scripts\build.js:2284
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 380. scripts\build.js:2290
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 381. scripts\build.js:2292
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 382. scripts\build.js:2302
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 383. scripts\build.js:2306
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 384. scripts\build.js:2307
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 385. scripts\build.js:2310
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 386. scripts\build.js:2311
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 387. scripts\build.js:2329
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 388. scripts\build.js:2330
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 389. scripts\build.js:2341
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 390. scripts\build.js:2342
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 391. scripts\build.js:2343
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 392. scripts\build.js:2346
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 393. scripts\build.js:2347
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 394. scripts\build.js:2348
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 395. scripts\build.js:2349
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 396. scripts\build.js:2350
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 397. scripts\build.js:2351
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 398. scripts\build.js:2354
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 399. scripts\build.js:2358
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 400. scripts\build.js:2359
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 401. scripts\build.js:2360
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 402. scripts\build.js:2364
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 403. scripts\build.js:2388
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 404. scripts\build.js:2390
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 405. scripts\build.js:2396
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 406. scripts\build.js:2399
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 407. scripts\build.js:2419
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 408. scripts\build.js:2420
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 409. scripts\build.js:2443
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 410. scripts\build.js:2447
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 411. scripts\build.js:2448
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 412. scripts\build.js:2450
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 413. scripts\build.js:2451
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 414. scripts\build.js:2455
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 415. scripts\build.js:2457
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 416. scripts\build.js:2460
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 417. scripts\build.js:2463
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 418. scripts\build.js:2466
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 419. scripts\build.js:2467
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 420. scripts\build.js:2470
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 421. scripts\build.js:2471
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 422. scripts\build.js:2473
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 423. scripts\build.js:2476
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 424. scripts\build.js:2479
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 425. scripts\build.js:2484
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 426. scripts\build.js:2486
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 427. scripts\build.js:2488
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 428. scripts\build.js:2492
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 429. scripts\build.js:2496
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 430. scripts\build.js:2498
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 431. scripts\build.js:2499
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 432. scripts\build.js:2504
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 433. scripts\build.js:2508
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 434. scripts\build.js:2509
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 435. scripts\build.js:2516
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 436. scripts\build.js:2522
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 437. scripts\build.js:2523
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 438. scripts\build.js:2524
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 439. scripts\build.js:2527
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 440. scripts\build.js:2529
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 441. scripts\build.js:2531
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 442. scripts\build.js:2538
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 443. scripts\build.js:2540
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 444. scripts\build.js:2546
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 445. scripts\build.js:2547
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 446. scripts\build.js:2566
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 447. scripts\build.js:2574
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 448. scripts\build.js:2578
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 449. scripts\build.js:2580
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 450. scripts\build.js:2583
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 451. scripts\build.js:2584
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 452. scripts\build.js:2585
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 453. scripts\build.js:2586
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 454. scripts\build.js:2587
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 455. scripts\build.js:2590
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 456. scripts\build.js:2592
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 457. scripts\build.js:2597
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 458. scripts\build.js:2599
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 459. scripts\build.js:2604
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 460. scripts\build.js:2614
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 461. scripts\build.js:2628
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 462. scripts\build.js:2629
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 463. scripts\build.js:2630
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 464. scripts\build.js:2631
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 465. scripts\build.js:2632
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 466. scripts\build.js:2633
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 467. scripts\build.js:2634
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 468. scripts\build.js:2638
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 469. scripts\build.js:2639
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 470. scripts\build.js:2640
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 471. scripts\build.js:2641
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 472. scripts\build.js:2642
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 473. scripts\build.js:2643
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 474. scripts\build.js:2644
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 475. scripts\build.js:2645
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 476. scripts\build.js:2665
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 477. scripts\build.js:2682
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 478. scripts\build.js:2720
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 479. scripts\build.js:2776
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 480. scripts\build.js:2829
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 481. scripts\build.js:2858
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 482. scripts\build.js:2895
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 483. scripts\build.js:2907
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 484. scripts\build.js:2935
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 485. scripts\build.js:2947
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 486. scripts\build.js:2973
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 487. scripts\build.js:3025
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 488. scripts\build.js:3029
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 489. scripts\build.js:3042
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 490. scripts\build.js:3051
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 491. scripts\build.js:3060
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 492. scripts\build.js:3069
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 493. scripts\build.js:3090
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 494. scripts\build.js:3103
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 495. scripts\build.js:3116
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 496. scripts\build.js:3129
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 497. scripts\build.js:3156
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 498. scripts\build.js:3165
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 499. scripts\build.js:3174
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 500. scripts\build.js:3183
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 501. scripts\build.js:3192
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 502. scripts\build.js:3285
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 503. scripts\build.js:3289
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 504. scripts\build.js:3299
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 505. scripts\build.js:3309
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 506. scripts\build.js:3328
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 507. scripts\build.js:3353
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 508. scripts\build.js:3362
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 509. scripts\build.js:3371
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 510. scripts\build.js:3380
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 511. scripts\build.js:3389
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 512. scripts\build.js:3398
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 513. scripts\build.js:3421
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 514. scripts\build.js:3434
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 515. scripts\build.js:3447
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 516. scripts\build.js:3456
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 517. scripts\build.js:3465
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 518. scripts\build.js:3474
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 519. scripts\build.js:3504
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 520. scripts\build.js:3531
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 521. scripts\build.js:3533
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 522. scripts\build.js:3535
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 523. scripts\build.js:3563
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 524. scripts\build.js:3712
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 525. scripts\build.js:3713
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 526. scripts\build.js:3714
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 527. scripts\build.js:3720
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 528. scripts\build.js:3721
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 529. scripts\build.js:3722
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 530. scripts\build.js:3724
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 531. scripts\build.js:3734
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 532. scripts\build.js:3739
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 533. scripts\build.js:3743
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 534. scripts\build.js:3747
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 535. scripts\build.js:3751
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 536. scripts\build.js:3757
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 537. scripts\build.js:3758
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 538. scripts\build.js:3761
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 539. scripts\build.js:3765
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 540. scripts\build.js:3768
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 541. scripts\build.js:3781
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 542. scripts\build.js:3793
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.660Z

#### 543. scripts\build.js:3796
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 544. scripts\build.js:3799
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 545. scripts\build.js:3802
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 546. scripts\build.js:3806
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 547. scripts\build.js:3807
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 548. scripts\build.js:3813
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 549. scripts\build.js:3815
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 550. scripts\build.js:3819
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 551. scripts\build.js:3823
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 552. scripts\build.js:3831
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 553. scripts\build.js:3835
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 554. scripts\build.js:3841
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 555. scripts\build.js:3846
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 556. scripts\build.js:3849
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 557. scripts\build.js:3851
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 558. scripts\build.js:3855
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 559. scripts\build.js:3856
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 560. scripts\build.js:3857
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 561. scripts\build.js:3859
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 562. scripts\build.js:3868
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 563. scripts\build.js:3873
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 564. scripts\build.js:3874
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 565. scripts\build.js:3875
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 566. scripts\build.js:3876
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 567. scripts\build.js:3890
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 568. scripts\build.js:3892
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 569. scripts\build.js:3902
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 570. scripts\build.js:3905
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 571. scripts\build.js:3908
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 572. scripts\build.js:3909
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 573. scripts\build.js:3916
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 574. scripts\build.js:3922
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 575. scripts\build.js:3923
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 576. scripts\build.js:3924
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 577. scripts\build.js:3927
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 578. scripts\build.js:3929
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 579. scripts\build.js:3931
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 580. scripts\build.js:3938
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 581. scripts\build.js:3940
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 582. scripts\build.js:3945
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 583. scripts\build.js:3946
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 584. scripts\build.js:3947
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 585. scripts\build.js:3948
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 586. scripts\build.js:3949
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 587. scripts\build.js:3954
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 588. scripts\build.js:3955
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 589. scripts\build.js:3986
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 590. scripts\build.js:3989
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 591. scripts\build.js:3990
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 592. scripts\build.js:3991
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 593. scripts\build.js:3992
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 594. scripts\build.js:3993
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 595. scripts\build.js:3994
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 596. scripts\build.js:3997
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 597. scripts\build.js:3998
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 598. scripts\build.js:3999
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 599. scripts\build.js:4000
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 600. scripts\build.js:4001
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 601. scripts\build.js:4002
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 602. scripts\build.js:4003
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 603. scripts\build.js:4005
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 604. scripts\build.js:4007
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 605. scripts\build.js:4010
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 606. scripts\build.js:4011
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 607. scripts\build.js:4012
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 608. scripts\build.js:4013
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 609. scripts\build.js:4015
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 610. scripts\build.js:4016
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 611. scripts\build.js:4017
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 612. scripts\build.js:4018
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 613. scripts\build.js:4020
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 614. scripts\build.js:4021
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 615. scripts\build.js:4022
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 616. scripts\build.js:4023
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 617. scripts\build.js:4024
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 618. scripts\build.js:4025
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 619. scripts\build.js:4027
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 620. scripts\build.js:4028
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 621. scripts\build.js:4029
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 622. scripts\build.js:4030
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 623. scripts\build.js:4033
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 624. scripts\build.js:4034
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 625. scripts\build.js:4035
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 626. scripts\build.js:4046
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 627. scripts\build.js:4050
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 628. scripts\build.js:4051
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 629. scripts\build.js:4054
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 630. scripts\build.js:4055
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 631. scripts\build.js:4064
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 632. scripts\build.js:4065
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 633. scripts\build.js:4090
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 634. scripts\build.js:4126
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 635. scripts\build.js:4146
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 636. scripts\build.js:4174
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 637. scripts\build.js:4216
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 638. scripts\build.js:4259
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 639. scripts\build.js:4301
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 640. scripts\build.js:4306
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 641. scripts\build.js:4311
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 642. scripts\build.js:4317
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 643. scripts\build.js:4320
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 644. scripts\build.js:4335
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 645. scripts\build.js:4338
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 646. scripts\build.js:4342
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 647. scripts\build.js:4347
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 648. scripts\build.js:4351
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 649. scripts\build.js:4352
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 650. scripts\build.js:4358
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 651. scripts\build.js:4359
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 652. scripts\build.js:4367
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 653. scripts\build.js:4368
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 654. scripts\build.js:4378
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 655. scripts\build.js:4385
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 656. scripts\build.js:4387
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 657. scripts\build.js:4453
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 658. scripts\build.js:4454
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 659. scripts\build.js:4459
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 660. scripts\build.js:4461
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 661. scripts\build.js:4464
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 662. scripts\build.js:4468
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 663. scripts\log-manager.js:45
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 664. scripts\log-manager.js:61
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 665. scripts\log-manager.js:68
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 666. scripts\log-manager.js:83
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 667. scripts\log-manager.js:91
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 668. scripts\log-manager.js:116
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 669. scripts\log-manager.js:144
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 670. scripts\log-manager.js:158
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 671. scripts\log-manager.js:174
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 672. scripts\log-manager.js:177
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 673. scripts\log-manager.js:185
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 674. scripts\log-manager.js:204
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 675. scripts\log-manager.js:209
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 676. scripts\log-manager.js:228
**Severity:** WARNING  
**Message:** Missing semicolon  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 677. scripts\log-manager.js:235
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 678. scripts\log-manager.js:264
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 679. scripts\log-manager.js:265
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 680. scripts\log-manager.js:266
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 681. scripts\log-manager.js:267
**Severity:** WARNING  
**Message:** Console.log statement found - consider removing in production  
**Timestamp:** 2025-07-02T19:37:45.661Z

#### 682. style.css:170
**Severity:** WARNING  
**Message:** Missing semicolon in CSS property  
**Timestamp:** 2025-07-02T19:37:45.662Z

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
- **Zeile 15:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 34:** ⚠️ Missing semicolon
- **Zeile 62:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 63:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 66:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 158:** ⚠️ Missing semicolon
- **Zeile 209:** ⚠️ Missing semicolon
- **Zeile 246:** ⚠️ Missing semicolon

#### scripts\build-checks\check_scripts\keyword-cleanup.js (8 Problem(e))
- **Zeile 38:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 40:** ⚠️ Missing semicolon
- **Zeile 58:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 64:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 67:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 71:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 72:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 73:** ⚠️ Console.log statement found - consider removing in production

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

#### scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js (50 Problem(e))
- **Zeile 31:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 32:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 38:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 74:** ⚠️ Missing semicolon
- **Zeile 98:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 111:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 121:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 125:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 126:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 127:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 138:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 142:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 152:** ⚠️ Missing semicolon
- **Zeile 177:** ⚠️ Missing semicolon
- **Zeile 201:** ⚠️ Missing semicolon
- **Zeile 257:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 266:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 274:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 277:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 278:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 279:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 280:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 295:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 318:** ⚠️ Missing semicolon
- **Zeile 342:** ⚠️ Missing semicolon
- **Zeile 353:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 354:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 355:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 357:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 358:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 359:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 362:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 363:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 364:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 365:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 373:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 378:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 383:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 386:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 390:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 394:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 396:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 398:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 400:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 402:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 435:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 455:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 459:** ⚠️ Missing semicolon
- **Zeile 478:** ⚠️ Console.log statement found - consider removing in production
- **Zeile 489:** ⚠️ Console.log statement found - consider removing in production

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
[ERROR] [31m[1m🚨🚨🚨 CRITICAL ERROR IN checklist-cli.js 🚨🚨🚨[22m[39m
[ERROR] [31m📍 Error Type: MODULE ERROR[39m
[ERROR] [31m📋 Stderr: node:internal/modules/esm/resolve:275[39m
[31m    throw new ERR_MODULE_NOT_FOUND([39m
[31m          ^[39m
[31m[39m
[31mError [ERR_MODULE_NOT_FOUND]: Cannot find module 'C:\apps\website\einfach-passieren-lassen\scripts\advanced-content-validator.js' imported from C:\apps\website\einfach-passieren-lassen\scripts\build-checks\check_scripts\checklist-cli.js[39m
[31m    at finalizeResolution (node:internal/modules/esm/resolve:275:11)[39m
[31m    at moduleResolve (node:internal/modules/esm/resolve:860:10)[39m
[31m    at defaultResolve (node:internal/modules/esm/resolve:984:11)[39m
[31m    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:685:12)[39m
[31m    at #cachedDefaultResolve (node:internal/modules/esm/loader:634:25)[39m
[31m    at ModuleLoader.resolve (node:internal/modules/esm/loader:617:38)[39m
[31m    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:273:38)[39m
[31m    at ModuleJob._link (node:internal/modules/esm/module_job:135:49) {[39m
[31m  code: 'ERR_MODULE_NOT_FOUND',[39m
[31m  url: 'file:///C:/apps/website/einfach-passieren-lassen/scripts/advanced-content-validator.js'[39m
[31m}[39m
[31m[39m
[31mNode.js v22.14.0[39m
[31m[39m
[ERROR] [31m📋 Stdout: [39m
[ERROR] 🚨 CRITICAL BUILD-BREAKING ERROR: checklist-cli.js contains errors that prevent execution
[ERROR] Full Error Details: {
  "script": "checklist-cli.js",
  "exitCode": 1,
  "stderr": "node:internal/modules/esm/resolve:275\r\n    throw new ERR_MODULE_NOT_FOUND(\r\n          ^\r\n\r\nError [ERR_MODULE_NOT_FOUND]: Cannot find module 'C:\\apps\\website\\einfach-passieren-lassen\\scripts\\advanced-content-validator.js' imported from C:\\apps\\website\\einfach-passieren-lassen\\scripts\\build-checks\\check_scripts\\checklist-cli.js\r\n    at finalizeResolution (node:internal/modules/esm/resolve:275:11)\r\n    at moduleResolve (node:internal/modules/esm/resolve:860:10)\r\n    at defaultResolve (node:internal/modules/esm/resolve:984:11)\r\n    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:685:12)\r\n    at #cachedDefaultResolve (node:internal/modules/esm/loader:634:25)\r\n    at ModuleLoader.resolve (node:internal/modules/esm/loader:617:38)\r\n    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:273:38)\r\n    at ModuleJob._link (node:internal/modules/esm/module_job:135:49) {\r\n  code: 'ERR_MODULE_NOT_FOUND',\r\n  url: 'file:///C:/apps/website/einfach-passieren-lassen/scripts/advanced-content-validator.js'\r\n}\r\n\r\nNode.js v22.14.0\r\n",
  "stdout": "",
  "message": "Command failed: node C:\\apps\\website\\einfach-passieren-lassen\\scripts\\build-checks\\check_scripts\\checklist-cli.js\nnode:internal/modules/esm/resolve:275\r\n    throw new ERR_MODULE_NOT_FOUND(\r\n          ^\r\n\r\nError [ERR_MODULE_NOT_FOUND]: Cannot find module 'C:\\apps\\website\\einfach-passieren-lassen\\scripts\\advanced-content-validator.js' imported from C:\\apps\\website\\einfach-passieren-lassen\\scripts\\build-checks\\check_scripts\\checklist-cli.js\r\n    at finalizeResolution (node:internal/modules/esm/resolve:275:11)\r\n    at moduleResolve (node:internal/modules/esm/resolve:860:10)\r\n    at defaultResolve (node:internal/modules/esm/resolve:984:11)\r\n    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:685:12)\r\n    at #cachedDefaultResolve (node:internal/modules/esm/loader:634:25)\r\n    at ModuleLoader.resolve (node:internal/modules/esm/loader:617:38)\r\n    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:273:38)\r\n    at ModuleJob._link (node:internal/modules/esm/module_job:135:49) {\r\n  code: 'ERR_MODULE_NOT_FOUND',\r\n  url: 'file:///C:/apps/website/einfach-passieren-lassen/scripts/advanced-content-validator.js'\r\n}\r\n\r\nNode.js v22.14.0\r\n",
  "timestamp": "2025-07-02T19:37:45.288Z"
}
[ERROR] [33m⚠️ Build continues but checklist-cli.js functionality is disabled![39m
[LOG] [35m[39m
[35m▶️ Führe Check-Skript aus: comprehensiveCheck.js[39m
[ERROR] [31m[1m🚨🚨🚨 CRITICAL ERROR IN comprehensiveCheck.js 🚨🚨🚨[22m[39m
[ERROR] [31m📍 Error Type: SYNTAX ERROR[39m
[ERROR] [31m[1m💡 DETECTED TYPO: Möglicherweise "reque" statt "require" oder ähnlicher Tippfehler![22m[39m
[ERROR] [31m📍 Fehler in Datei comprehensiveCheck.js, Zeile: 6[39m
[ERROR] [31m📋 Stderr: file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/comprehensiveCheck.js:6[39m
[31mconst fs = require('fs');[39m
[31m           ^[39m
[31m[39m
[31mReferenceError: require is not defined in ES module scope, you can use import instead[39m
[31mThis file is being treated as an ES module because it has a '.js' file extension and 'C:\apps\website\einfach-passieren-lassen\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.[39m
[31m    at file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/comprehensiveCheck.js:6:12[39m
[31m    at ModuleJob.run (node:internal/modules/esm/module_job:271:25)[39m
[31m    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)[39m
[31m    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)[39m
[31m[39m
[31mNode.js v22.14.0[39m
[31m[39m
[ERROR] [31m📋 Stdout: [39m
[ERROR] 🚨 CRITICAL BUILD-BREAKING ERROR: comprehensiveCheck.js contains errors that prevent execution
[ERROR] Full Error Details: {
  "script": "comprehensiveCheck.js",
  "exitCode": 1,
  "stderr": "file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/comprehensiveCheck.js:6\r\nconst fs = require('fs');\r\n           ^\r\n\r\nReferenceError: require is not defined in ES module scope, you can use import instead\r\nThis file is being treated as an ES module because it has a '.js' file extension and 'C:\\apps\\website\\einfach-passieren-lassen\\package.json' contains \"type\": \"module\". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.\r\n    at file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/comprehensiveCheck.js:6:12\r\n    at ModuleJob.run (node:internal/modules/esm/module_job:271:25)\r\n    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)\r\n    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)\r\n\r\nNode.js v22.14.0\r\n",
  "stdout": "",
  "message": "Command failed: node C:\\apps\\website\\einfach-passieren-lassen\\scripts\\build-checks\\check_scripts\\comprehensiveCheck.js\nfile:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/comprehensiveCheck.js:6\r\nconst fs = require('fs');\r\n           ^\r\n\r\nReferenceError: require is not defined in ES module scope, you can use import instead\r\nThis file is being treated as an ES module because it has a '.js' file extension and 'C:\\apps\\website\\einfach-passieren-lassen\\package.json' contains \"type\": \"module\". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.\r\n    at file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/comprehensiveCheck.js:6:12\r\n    at ModuleJob.run (node:internal/modules/esm/module_job:271:25)\r\n    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)\r\n    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)\r\n\r\nNode.js v22.14.0\r\n",
  "timestamp": "2025-07-02T19:37:45.341Z"
}
[ERROR] [33m⚠️ Build continues but comprehensiveCheck.js functionality is disabled![39m
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
[90m   ✅ "eifach ghöre" → "einfach dazugehören" (2x)[39m
[90m   ✅ "du bisch mini" → "du gehörst zu mir" (1x)[39m
[90m📝 zu-viel-liebe-zu-wenig-liebe.md: 3 Ersetzungen[39m
[90m[39m
[90m✅ CLEANUP ABGESCHLOSSEN: 3 Keywords ersetzt[39m
[90m💡 Hochdeutsche Longtails haben bessere SEO-Performance[39m
[90m🎯 Empfehlung: pnpm build ausführen für Update[39m
[LOG] [35m[39m
[35m▶️ Führe Check-Skript aus: logCleanup.js[39m
[LOG] [32m✅ logCleanup.js erfolgreich ausgeführt[39m
[LOG] [35m[39m
[35m▶️ Führe Check-Skript aus: masterBuildChecker.js[39m
[ERROR] [31m[1m🚨🚨🚨 CRITICAL ERROR IN masterBuildChecker.js 🚨🚨🚨[22m[39m
[ERROR] [31m📍 Error Type: SYNTAX ERROR[39m
[ERROR] [31m[1m💡 DETECTED TYPO: Möglicherweise "reque" statt "require" oder ähnlicher Tippfehler![22m[39m
[ERROR] [31m📍 Fehler in Datei masterBuildChecker.js, Zeile: 6[39m
[ERROR] [31m📋 Stderr: file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/masterBuildChecker.js:6[39m
[31mconst fs = require('fs');[39m
[31m           ^[39m
[31m[39m
[31mReferenceError: require is not defined in ES module scope, you can use import instead[39m
[31mThis file is being treated as an ES module because it has a '.js' file extension and 'C:\apps\website\einfach-passieren-lassen\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.[39m
[31m    at file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/masterBuildChecker.js:6:12[39m
[31m    at ModuleJob.run (node:internal/modules/esm/module_job:271:25)[39m
[31m    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)[39m
[31m    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)[39m
[31m[39m
[31mNode.js v22.14.0[39m
[31m[39m
[ERROR] [31m📋 Stdout: [39m
[ERROR] 🚨 CRITICAL BUILD-BREAKING ERROR: masterBuildChecker.js contains errors that prevent execution
[ERROR] Full Error Details: {
  "script": "masterBuildChecker.js",
  "exitCode": 1,
  "stderr": "file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/masterBuildChecker.js:6\r\nconst fs = require('fs');\r\n           ^\r\n\r\nReferenceError: require is not defined in ES module scope, you can use import instead\r\nThis file is being treated as an ES module because it has a '.js' file extension and 'C:\\apps\\website\\einfach-passieren-lassen\\package.json' contains \"type\": \"module\". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.\r\n    at file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/masterBuildChecker.js:6:12\r\n    at ModuleJob.run (node:internal/modules/esm/module_job:271:25)\r\n    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)\r\n    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)\r\n\r\nNode.js v22.14.0\r\n",
  "stdout": "",
  "message": "Command failed: node C:\\apps\\website\\einfach-passieren-lassen\\scripts\\build-checks\\check_scripts\\masterBuildChecker.js\nfile:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/masterBuildChecker.js:6\r\nconst fs = require('fs');\r\n           ^\r\n\r\nReferenceError: require is not defined in ES module scope, you can use import instead\r\nThis file is being treated as an ES module because it has a '.js' file extension and 'C:\\apps\\website\\einfach-passieren-lassen\\package.json' contains \"type\": \"module\". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.\r\n    at file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/masterBuildChecker.js:6:12\r\n    at ModuleJob.run (node:internal/modules/esm/module_job:271:25)\r\n    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)\r\n    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)\r\n\r\nNode.js v22.14.0\r\n",
  "timestamp": "2025-07-02T19:37:45.501Z"
}
[ERROR] [33m⚠️ Build continues but masterBuildChecker.js functionality is disabled![39m
[LOG] [35m[39m
[35m▶️ Führe Check-Skript aus: multi-file-sinnlosigkeits-checker.js[39m
[LOG] [32m✅ multi-file-sinnlosigkeits-checker.js erfolgreich ausgeführt[39m
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
[LOG] [34m📋 Terminal-Ausgabe wird gespeichert in: docs\015_build_logs\BUILD_LOG_2025-07-02_193745.md[39m
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
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:15 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:34 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:62 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:63 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:66 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:158 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:209 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\comprehensiveCheck.js:246 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:38 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:40 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:58 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:64 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:67 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:71 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:72 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\keyword-cleanup.js:73 - Console.log statement found - consider removing in production
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
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:31 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:32 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:38 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:74 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:98 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:111 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:121 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:125 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:126 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:127 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:138 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:142 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:152 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:177 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:201 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:257 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:266 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:274 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:277 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:278 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:279 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:280 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:295 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:318 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:342 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:353 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:354 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:355 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:357 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:358 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:359 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:362 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:363 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:364 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:365 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:373 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:378 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:383 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:386 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:390 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:394 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:396 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:398 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:400 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:402 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:435 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:455 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:459 - Missing semicolon
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:478 - Console.log statement found - consider removing in production
[PROBLEM] [WARNING] scripts\build-checks\check_scripts\multi-file-sinnlosigkeits-checker.js:489 - Console.log statement found - consider removing in production
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
[INFO] ✅ Problems-Scan abgeschlossen. 686 Problem(e) gefunden.
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
[LOG] [31m   • der-sichere-hafen.md: 10%[39m
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
[LOG] [33m   Timestamp: 2025-07-02T19:37:45.804Z[39m
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
[LOG] [32m✅ Multi-File-Checker erfolgreich ausgeführt:[39m
[LOG] 
```

## System-Information

- **Datum:** 2.7.2025, 21:37:46
- **Timezone:** Europe/Zurich
- **Platform:** win32
- **Architecture:** x64
- **Memory Usage:** 25MB

## Quality-Alerts & Build-Issues

### 🚨 ERRORS (25)

- 🚨🚨🚨 CRITICAL ERROR IN checklist-cli.js 🚨🚨🚨
- 📍 Error Type: MODULE ERROR
- 📋 Stderr: node:internal/modules/esm/resolve:275
    throw new ERR_MODULE_NOT_FOUND(
          ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find module 'C:\apps\website\einfach-passieren-lassen\scripts\advanced-content-validator.js' imported from C:\apps\website\einfach-passieren-lassen\scripts\build-checks\check_scripts\checklist-cli.js
    at finalizeResolution (node:internal/modules/esm/resolve:275:11)
    at moduleResolve (node:internal/modules/esm/resolve:860:10)
    at defaultResolve (node:internal/modules/esm/resolve:984:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:685:12)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:634:25)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:617:38)
    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:273:38)
    at ModuleJob._link (node:internal/modules/esm/module_job:135:49) {
  code: 'ERR_MODULE_NOT_FOUND',
  url: 'file:///C:/apps/website/einfach-passieren-lassen/scripts/advanced-content-validator.js'
}

Node.js v22.14.0

- 📋 Stdout: 
- 🚨 CRITICAL BUILD-BREAKING ERROR: checklist-cli.js contains errors that prevent execution
- Full Error Details: {
  "script": "checklist-cli.js",
  "exitCode": 1,
  "stderr": "node:internal/modules/esm/resolve:275\r\n    throw new ERR_MODULE_NOT_FOUND(\r\n          ^\r\n\r\nError [ERR_MODULE_NOT_FOUND]: Cannot find module 'C:\\apps\\website\\einfach-passieren-lassen\\scripts\\advanced-content-validator.js' imported from C:\\apps\\website\\einfach-passieren-lassen\\scripts\\build-checks\\check_scripts\\checklist-cli.js\r\n    at finalizeResolution (node:internal/modules/esm/resolve:275:11)\r\n    at moduleResolve (node:internal/modules/esm/resolve:860:10)\r\n    at defaultResolve (node:internal/modules/esm/resolve:984:11)\r\n    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:685:12)\r\n    at #cachedDefaultResolve (node:internal/modules/esm/loader:634:25)\r\n    at ModuleLoader.resolve (node:internal/modules/esm/loader:617:38)\r\n    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:273:38)\r\n    at ModuleJob._link (node:internal/modules/esm/module_job:135:49) {\r\n  code: 'ERR_MODULE_NOT_FOUND',\r\n  url: 'file:///C:/apps/website/einfach-passieren-lassen/scripts/advanced-content-validator.js'\r\n}\r\n\r\nNode.js v22.14.0\r\n",
  "stdout": "",
  "message": "Command failed: node C:\\apps\\website\\einfach-passieren-lassen\\scripts\\build-checks\\check_scripts\\checklist-cli.js\nnode:internal/modules/esm/resolve:275\r\n    throw new ERR_MODULE_NOT_FOUND(\r\n          ^\r\n\r\nError [ERR_MODULE_NOT_FOUND]: Cannot find module 'C:\\apps\\website\\einfach-passieren-lassen\\scripts\\advanced-content-validator.js' imported from C:\\apps\\website\\einfach-passieren-lassen\\scripts\\build-checks\\check_scripts\\checklist-cli.js\r\n    at finalizeResolution (node:internal/modules/esm/resolve:275:11)\r\n    at moduleResolve (node:internal/modules/esm/resolve:860:10)\r\n    at defaultResolve (node:internal/modules/esm/resolve:984:11)\r\n    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:685:12)\r\n    at #cachedDefaultResolve (node:internal/modules/esm/loader:634:25)\r\n    at ModuleLoader.resolve (node:internal/modules/esm/loader:617:38)\r\n    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:273:38)\r\n    at ModuleJob._link (node:internal/modules/esm/module_job:135:49) {\r\n  code: 'ERR_MODULE_NOT_FOUND',\r\n  url: 'file:///C:/apps/website/einfach-passieren-lassen/scripts/advanced-content-validator.js'\r\n}\r\n\r\nNode.js v22.14.0\r\n",
  "timestamp": "2025-07-02T19:37:45.288Z"
}
- ⚠️ Build continues but checklist-cli.js functionality is disabled!
- 🚨🚨🚨 CRITICAL ERROR IN comprehensiveCheck.js 🚨🚨🚨
- 📍 Error Type: SYNTAX ERROR
- 💡 DETECTED TYPO: Möglicherweise "reque" statt "require" oder ähnlicher Tippfehler!
- 📍 Fehler in Datei comprehensiveCheck.js, Zeile: 6
- 📋 Stderr: file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/comprehensiveCheck.js:6
const fs = require('fs');
           ^

ReferenceError: require is not defined in ES module scope, you can use import instead
This file is being treated as an ES module because it has a '.js' file extension and 'C:\apps\website\einfach-passieren-lassen\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
    at file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/comprehensiveCheck.js:6:12
    at ModuleJob.run (node:internal/modules/esm/module_job:271:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)

Node.js v22.14.0

- 📋 Stdout: 
- 🚨 CRITICAL BUILD-BREAKING ERROR: comprehensiveCheck.js contains errors that prevent execution
- Full Error Details: {
  "script": "comprehensiveCheck.js",
  "exitCode": 1,
  "stderr": "file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/comprehensiveCheck.js:6\r\nconst fs = require('fs');\r\n           ^\r\n\r\nReferenceError: require is not defined in ES module scope, you can use import instead\r\nThis file is being treated as an ES module because it has a '.js' file extension and 'C:\\apps\\website\\einfach-passieren-lassen\\package.json' contains \"type\": \"module\". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.\r\n    at file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/comprehensiveCheck.js:6:12\r\n    at ModuleJob.run (node:internal/modules/esm/module_job:271:25)\r\n    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)\r\n    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)\r\n\r\nNode.js v22.14.0\r\n",
  "stdout": "",
  "message": "Command failed: node C:\\apps\\website\\einfach-passieren-lassen\\scripts\\build-checks\\check_scripts\\comprehensiveCheck.js\nfile:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/comprehensiveCheck.js:6\r\nconst fs = require('fs');\r\n           ^\r\n\r\nReferenceError: require is not defined in ES module scope, you can use import instead\r\nThis file is being treated as an ES module because it has a '.js' file extension and 'C:\\apps\\website\\einfach-passieren-lassen\\package.json' contains \"type\": \"module\". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.\r\n    at file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/comprehensiveCheck.js:6:12\r\n    at ModuleJob.run (node:internal/modules/esm/module_job:271:25)\r\n    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)\r\n    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)\r\n\r\nNode.js v22.14.0\r\n",
  "timestamp": "2025-07-02T19:37:45.341Z"
}
- ⚠️ Build continues but comprehensiveCheck.js functionality is disabled!
- 🚨🚨🚨 CRITICAL ERROR IN masterBuildChecker.js 🚨🚨🚨
- 📍 Error Type: SYNTAX ERROR
- 💡 DETECTED TYPO: Möglicherweise "reque" statt "require" oder ähnlicher Tippfehler!
- 📍 Fehler in Datei masterBuildChecker.js, Zeile: 6
- 📋 Stderr: file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/masterBuildChecker.js:6
const fs = require('fs');
           ^

ReferenceError: require is not defined in ES module scope, you can use import instead
This file is being treated as an ES module because it has a '.js' file extension and 'C:\apps\website\einfach-passieren-lassen\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
    at file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/masterBuildChecker.js:6:12
    at ModuleJob.run (node:internal/modules/esm/module_job:271:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)

Node.js v22.14.0

- 📋 Stdout: 
- 🚨 CRITICAL BUILD-BREAKING ERROR: masterBuildChecker.js contains errors that prevent execution
- Full Error Details: {
  "script": "masterBuildChecker.js",
  "exitCode": 1,
  "stderr": "file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/masterBuildChecker.js:6\r\nconst fs = require('fs');\r\n           ^\r\n\r\nReferenceError: require is not defined in ES module scope, you can use import instead\r\nThis file is being treated as an ES module because it has a '.js' file extension and 'C:\\apps\\website\\einfach-passieren-lassen\\package.json' contains \"type\": \"module\". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.\r\n    at file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/masterBuildChecker.js:6:12\r\n    at ModuleJob.run (node:internal/modules/esm/module_job:271:25)\r\n    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)\r\n    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)\r\n\r\nNode.js v22.14.0\r\n",
  "stdout": "",
  "message": "Command failed: node C:\\apps\\website\\einfach-passieren-lassen\\scripts\\build-checks\\check_scripts\\masterBuildChecker.js\nfile:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/masterBuildChecker.js:6\r\nconst fs = require('fs');\r\n           ^\r\n\r\nReferenceError: require is not defined in ES module scope, you can use import instead\r\nThis file is being treated as an ES module because it has a '.js' file extension and 'C:\\apps\\website\\einfach-passieren-lassen\\package.json' contains \"type\": \"module\". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.\r\n    at file:///C:/apps/website/einfach-passieren-lassen/scripts/build-checks/check_scripts/masterBuildChecker.js:6:12\r\n    at ModuleJob.run (node:internal/modules/esm/module_job:271:25)\r\n    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:578:26)\r\n    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)\r\n\r\nNode.js v22.14.0\r\n",
  "timestamp": "2025-07-02T19:37:45.501Z"
}
- ⚠️ Build continues but masterBuildChecker.js functionality is disabled!

### 💥 CRITICAL MESSAGES (9)

- 🚨🚨🚨 CRITICAL ERROR IN checklist-cli.js 🚨🚨🚨
- 🚨 CRITICAL BUILD-BREAKING ERROR: checklist-cli.js contains errors that prevent execution
- 🚨🚨🚨 CRITICAL ERROR IN comprehensiveCheck.js 🚨🚨🚨
- 🚨 CRITICAL BUILD-BREAKING ERROR: comprehensiveCheck.js contains errors that prevent execution
- 🚨🚨🚨 CRITICAL ERROR IN masterBuildChecker.js 🚨🚨🚨
- 🚨 CRITICAL BUILD-BREAKING ERROR: masterBuildChecker.js contains errors that prevent execution
- 
� QUALITY-ALERT DETAILS:
- 📋 QUALITY-ALERTS GESPEICHERT FÜR SPÄTERE VERBESSERUNG!
- 📝 KI KANN CONTENT NACH QUALITY-ALERTS OPTIMIEREN



---
*Automatisch generiert durch TerminalLogger*
