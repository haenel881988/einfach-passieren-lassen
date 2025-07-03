# Build-Process: Abhängigkeits-Website Technische Umsetzung

## 🎯 PROJEKT-INTENTION (NIEMALS VERGESSEN!)
**ZWECK:** Eine Frau finden, die sich von mir und meiner Liebe abhängig machen will und muss.
**NIEMALS MARKETING-SPRACHE!** - Authentische, organische Umsetzung ohne Marketing-Formulierungen.

## CONTENT FIRST PROTOCOL
**ZWINGEND:** Alle technischen Aspekte dienen ausschließlich der optimalen Präsentation des Abhängigkeits-Contents.

---

**Für den Build Prozess muss zwingend `pnpm build` verwendet werden.**

# Build-Prozess Modularisierung

**Erstellt:** 02.07.2025
**Aktualisiert:** 03.07.2025

Dieses Verzeichnis enthält alle Module und Hauptskripte für den neuen, modularen Build-Prozess. Ziel ist eine bessere Wartbarkeit, Erweiterbarkeit und Übersichtlichkeit.



## Automatische Ausführung aller Checks (ab 2025-07-02, 16:00)

**Wichtig:** Alle Check-Skripte aus `scripts/build-checks/check_scripts` (z.B. `seoCheck.js`, `logCleanup.js`) werden jetzt automatisch beim Start von `mainBuild.js` ausgeführt – vor dem eigentlichen Build-Prozess. Die Logfiles werden wie gewünscht in `scripts/build-checks/logfiles` erzeugt. Fehler/Warnungen werden direkt im Terminal angezeigt, der Build läuft aber immer durch (kein Abbruch bei Check-Fehlern).

**Vorteile:**
- Keine manuelle Ausführung der Checks mehr nötig
- Alle Logs werden automatisch erzeugt und versioniert
- Performance-Impact minimal, Build bleibt robust
- Rollback jederzeit möglich (siehe docs/aenderungsprotokoll.md)

**Rollback:**
- Entferne den neuen Codeblock zur Ausführung der Check-Skripte in `mainBuild.js` (siehe Patch 02.07.2025 16:00)
- Alternativ: `git checkout HEAD~1 -- build-process/mainBuild.js`

---
## Neue Build-Prozess-Struktur (ab 2025-07-02)

- `mainBuild.js`: Einstiegspunkt für den Build-Prozess (ruft keine Checks mehr direkt auf)
- `modules/`: Einzelne Funktionsmodule (z.B. logger.js, seoCheck.js, fileUtils.js)
- `check_scripts/`: Alle ausgelagerten Prüfskripte (z.B. `seoCheck.js`, `logCleanup.js`)
- `logfiles/`: Alle Log-Ausgaben der Checks (z.B. `seoCheck_YYYY-MM-DD_HH-MM.log`)

### Ablauf
1. **Logfile-Cleanup:** `node check_scripts/logCleanup.js` (bereinigt/archiviert alte Build-Logs)
2. **SEO-Check:** `node check_scripts/seoCheck.js` (führt SEO-Prüfungen aus, schreibt Logfile)
3. **Weitere Checks:** (optional, analoges Vorgehen)
4. **Build-Prozess:** `node build-process/mainBuild.js` (erst nach erfolgreichen Checks empfohlen)

### Vorteile
- Checks sind unabhängig, modular und können einzeln oder als Batch ausgeführt werden
- Jedes Prüfskript erzeugt ein eigenes Logfile in `logfiles/`
- Fehlerhafte Checks können den Build abbrechen (Exit-Code)
- Performance-Impact und Rollback sind pro Check nachvollziehbar

### Beispiel: Checks automatisiert ausführen
```bash
node check_scripts/logCleanup.js
node check_scripts/seoCheck.js
# ggf. weitere Checks ...
node build-process/mainBuild.js
```

### Neue Verzeichnisse
- `check_scripts/` – alle Prüfskripte (Node.js-Module, direkt aufrufbar)
- `logfiles/` – alle Log-Ausgaben der Checks

### Hinweise
- Die eigentliche Build-Logik bleibt in `build-process/` (keine Checks mehr direkt integriert)
- Rollback: Siehe docs/aenderungsprotokoll.md für genaue Anweisungen

---

## Implementierte Module
### 1. Logger-Modul (03.07.2025)
- Erfasst alle Terminal-Ausgaben mit Timestamps
- Identifiziert VS Code Problems und Warnings
- Speichert Logs in `docs/015_build_logs/`
- Archiviert beste Logs automatisch in `docs/016_log_archive/`

### 2. SEO-Check-Modul (03.07.2025)
- Validiert Sitemap.xml und Robots.txt
- Prüft URL-Konsistenz (www vs. non-www, HTTP vs. HTTPS)
- Validiert interne Links auf tote Ziele
- Prüft Ankertext-Qualität für SEO
- Erstellt detaillierte Fehler- und Warnungsberichte


## Hinweise
- Der Build-Prozess kann weiterhin aus dem Hauptverzeichnis gestartet werden (keine Änderung an Vercel nötig).
- Nach jeder Änderung: Dokumentation in `docs/aenderungsprotokoll.md` und Commit.

---
**Letzte Änderung:** 2025-07-02 – Auslagerung aller Prüfskripte in check_scripts/, neue Logik für Build-Checks und Logging.

---
**Nächste Schritte:**
1. Migration der Dateioperationen in `fileUtils.js`
2. Migration der HTML-Generierung und Markdown-Verarbeitung in eigene Module
3. Anpassung des Startskripts im Hauptverzeichnis
4. JSDoc-Dokumentation und Unit-Tests entwickeln
