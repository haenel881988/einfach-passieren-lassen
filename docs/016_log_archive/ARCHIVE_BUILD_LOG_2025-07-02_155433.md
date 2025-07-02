# Build Process Log

**Timestamp:** 2025-07-02T15:54:33.881Z
**Dauer:** 584ms
**Log-Datei:** docs\015_build_logs\BUILD_LOG_2025-07-02_155433.md
**Node-Version:** v22.14.0
**Arbeitsverzeichnis:** C:\apps\website\einfach-passieren-lassen

## Vollständige Terminal-Ausgabe

### 1. [LOG] 2025-07-02T15:54:33.882Z

```

▶️ Führe Check-Skript aus: logCleanup.js
```

### 2. [LOG] 2025-07-02T15:54:33.927Z

```

▶️ Führe Check-Skript aus: seoCheck.js
```

### 3. [ERROR] 2025-07-02T15:54:34.343Z

```
Fehler beim Ausführen von seoCheck.js: Command failed: node C:\apps\website\einfach-passieren-lassen\scripts\build-checks\check_scripts\seoCheck.js
```

### 4. [LOG] 2025-07-02T15:54:34.343Z

```
🧹 Führe Log-Cleanup durch...
```

### 5. [LOG] 2025-07-02T15:54:34.344Z

```
🔍 Suche HTML-Dateien für SEO-Validierung...
```

### 6. [LOG] 2025-07-02T15:54:34.348Z

```
✓ 16 HTML-Dateien gefunden.
```

### 7. [LOG] 2025-07-02T15:54:34.348Z

```
🌐 Führe umfassende SEO-Validierung durch...
```

### 8. [LOG] 2025-07-02T15:54:34.349Z

```
🔍 Prüfe Sitemap: sitemap.xml
```

### 9. [LOG] 2025-07-02T15:54:34.350Z

```
🔍 Prüfe robots.txt: robots.txt
```

### 10. [LOG] 2025-07-02T15:54:34.350Z

```
🔍 Prüfe URL-Konsistenz zwischen Sitemap und robots.txt...
```

### 11. [LOG] 2025-07-02T15:54:34.351Z

```
🔍 Prüfe interne Link-Ziele in 16 HTML-Dateien...
```

### 12. [LOG] 2025-07-02T15:54:34.427Z

```
🔍 Prüfe Link-Struktur in 16 HTML-Dateien...
```

### 13. [LOG] 2025-07-02T15:54:34.462Z

```
⚠️ SEO-Validierung abgeschlossen - 1 Fehler, 11 Warnungen gefunden.
```

### 14. [LOG] 2025-07-02T15:54:34.462Z

```

⚠️ SEO-Validierung: 1 Fehler, 11 Warnungen gefunden.
```

### 15. [LOG] 2025-07-02T15:54:34.463Z

```

🚨 SEO-FEHLER:
```

### 16. [LOG] 2025-07-02T15:54:34.463Z

```
  • Toter Link: index.html verweist auf nicht existierende Datei endlich-zuhause-angekommen.html
```

### 17. [LOG] 2025-07-02T15:54:34.463Z

```

⚠️ SEO-WARNUNGEN:
```

### 18. [LOG] 2025-07-02T15:54:34.463Z

```
  • Keine Links gefunden in app-gui\index.html
```

### 19. [LOG] 2025-07-02T15:54:34.463Z

```
  • Generischer Ankertext "Weiterlesen" für Link zu "zu-viel-liebe-zu-wenig-liebe.html" in blog\index.html
```

### 20. [LOG] 2025-07-02T15:54:34.463Z

```
  • Generischer Ankertext "Weiterlesen" für Link zu "das-erste-mal.html" in blog\index.html
```

### 21. [LOG] 2025-07-02T15:54:34.463Z

```
  • Generischer Ankertext "Weiterlesen" für Link zu "der-sichere-hafen.html" in blog\index.html
```

### 22. [LOG] 2025-07-02T15:54:34.464Z

```
  • Generischer Ankertext "Weiterlesen" für Link zu "emotionale-leere.html" in blog\index.html
```

### 23. [LOG] 2025-07-02T15:54:34.464Z

```
  • Generischer Ankertext "Weiterlesen" für Link zu "ich-will-einfach-gehalten-werden.html" in blog\index.html
```

### 24. [LOG] 2025-07-02T15:54:34.464Z

```
  • Generischer Ankertext "Weiterlesen" für Link zu "bindungssehnsucht-normal.html" in blog\index.html
```

### 25. [LOG] 2025-07-02T15:54:34.464Z

```
  • Generischer Ankertext "Weiterlesen" für Link zu "erschoepft-vom-stark-sein.html" in blog\index.html
```

### 26. [LOG] 2025-07-02T15:54:34.464Z

```
  • Generischer Ankertext "Weiterlesen" für Link zu "kontrolle-abgeben.html" in blog\index.html
```

### 27. [LOG] 2025-07-02T15:54:34.464Z

```
  • Generischer Ankertext "Weiterlesen" für Link zu "sehnsucht-nach-hingabe.html" in blog\index.html
```

### 28. [LOG] 2025-07-02T15:54:34.464Z

```
  • Generischer Ankertext "Weiterlesen" für Link zu "README.html" in blog\index.html
```

### 29. [LOG] 2025-07-02T15:54:34.465Z

```

✅ Modularer Build-Prozess erfolgreich abgeschlossen!
```

## Performance-Statistiken

- **Gesamte Log-Einträge:** 29
- **ERROR-Level:** 1
- **WARN-Level:** 0
- **LOG-Level:** 28
- **PROBLEM-Level:** 0
- **Build-Dauer:** 584ms
- **Durchschnitt pro Log:** 20ms

## VS Code Problems Report

**✅ Keine Problems gefunden!**

Das Projekt hat alle automatisierten Checks bestanden.


## Raw-Output für Debugging

```
[LOG] 
▶️ Führe Check-Skript aus: logCleanup.js\n[LOG] 
▶️ Führe Check-Skript aus: seoCheck.js\n[ERROR] Fehler beim Ausführen von seoCheck.js: Command failed: node C:\apps\website\einfach-passieren-lassen\scripts\build-checks\check_scripts\seoCheck.js\n[LOG] 🧹 Führe Log-Cleanup durch...\n[LOG] 🔍 Suche HTML-Dateien für SEO-Validierung...\n[LOG] ✓ 16 HTML-Dateien gefunden.\n[LOG] 🌐 Führe umfassende SEO-Validierung durch...\n[LOG] 🔍 Prüfe Sitemap: sitemap.xml\n[LOG] 🔍 Prüfe robots.txt: robots.txt\n[LOG] 🔍 Prüfe URL-Konsistenz zwischen Sitemap und robots.txt...\n[LOG] 🔍 Prüfe interne Link-Ziele in 16 HTML-Dateien...\n[LOG] 🔍 Prüfe Link-Struktur in 16 HTML-Dateien...\n[LOG] ⚠️ SEO-Validierung abgeschlossen - 1 Fehler, 11 Warnungen gefunden.\n[LOG] 
⚠️ SEO-Validierung: 1 Fehler, 11 Warnungen gefunden.\n[LOG] 
🚨 SEO-FEHLER:\n[LOG]   • Toter Link: index.html verweist auf nicht existierende Datei endlich-zuhause-angekommen.html\n[LOG] 
⚠️ SEO-WARNUNGEN:\n[LOG]   • Keine Links gefunden in app-gui\index.html\n[LOG]   • Generischer Ankertext "Weiterlesen" für Link zu "zu-viel-liebe-zu-wenig-liebe.html" in blog\index.html\n[LOG]   • Generischer Ankertext "Weiterlesen" für Link zu "das-erste-mal.html" in blog\index.html\n[LOG]   • Generischer Ankertext "Weiterlesen" für Link zu "der-sichere-hafen.html" in blog\index.html\n[LOG]   • Generischer Ankertext "Weiterlesen" für Link zu "emotionale-leere.html" in blog\index.html\n[LOG]   • Generischer Ankertext "Weiterlesen" für Link zu "ich-will-einfach-gehalten-werden.html" in blog\index.html\n[LOG]   • Generischer Ankertext "Weiterlesen" für Link zu "bindungssehnsucht-normal.html" in blog\index.html\n[LOG]   • Generischer Ankertext "Weiterlesen" für Link zu "erschoepft-vom-stark-sein.html" in blog\index.html\n[LOG]   • Generischer Ankertext "Weiterlesen" für Link zu "kontrolle-abgeben.html" in blog\index.html\n[LOG]   • Generischer Ankertext "Weiterlesen" für Link zu "sehnsucht-nach-hingabe.html" in blog\index.html\n[LOG]   • Generischer Ankertext "Weiterlesen" für Link zu "README.html" in blog\index.html\n[LOG] 
✅ Modularer Build-Prozess erfolgreich abgeschlossen!
```

## System-Information

- **Datum:** 2.7.2025, 17:54:34
- **Timezone:** Europe/Zurich
- **Platform:** win32
- **Architecture:** x64
- **Memory Usage:** 21MB

## Quality-Alerts & Build-Issues

### 🚨 ERRORS (1)

- Fehler beim Ausführen von seoCheck.js: Command failed: node C:\apps\website\einfach-passieren-lassen\scripts\build-checks\check_scripts\seoCheck.js



---
*Automatisch generiert durch TerminalLogger*
