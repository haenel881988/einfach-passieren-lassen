# Build-Prozess Modularisierung

**Erstellt:** 02.07.2025

Dieses Verzeichnis enthält alle Module und Hauptskripte für den neuen, modularen Build-Prozess. Ziel ist eine bessere Wartbarkeit, Erweiterbarkeit und Übersichtlichkeit.

## Struktur
- `mainBuild.js`: Einstiegspunkt für den Build-Prozess
- `modules/`: Einzelne Funktionsmodule (z.B. logger, seoCheck, fileUtils)

## Hinweise
- Der Build-Prozess kann weiterhin aus dem Hauptverzeichnis gestartet werden (keine Änderung an Vercel nötig).
- Nach jeder Änderung: Dokumentation in `docs/aenderungsprotokoll.md` und Commit.
- TODO: Migration der Logik aus `scripts/build.js` in die neuen Module.

---
**Nächste Schritte:**
1. Migration der Build-Logik in `mainBuild.js` und Untermodule
2. Anpassung des Startskripts im Hauptverzeichnis
3. Erweiterung um neue Features (z.B. SEO-Checklisten, Logging)
