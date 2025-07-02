# TODO-Liste Build-Prozess Modularisierung

**Stand:** 03.07.2025

- [x] build-process/ Verzeichnis anlegen
- [x] README für build-process/ erstellen
- [x] mainBuild.js als Einstiegspunkt anlegen
- [x] Platzhalter-Module (logger, seoCheck, fileUtils) anlegen
- [x] TerminalLogger nach modules/logger.js migrieren
- [x] SEO-Check-Funktionen nach modules/seoCheck.js migrieren
- [x] Integration des SEO-Check-Moduls in mainBuild.js

# NEU (ab 2025-07-02):
- [x] Verzeichnisse `check_scripts/` und `logfiles/` anlegen
- [x] Prüfskripte (Checks) auslagern: z.B. `seoCheck.js`, `logCleanup.js`
- [x] Logging: Jedes Prüfskript schreibt eigenes Logfile in `logfiles/`
- [x] README und Ablauf aktualisieren
- [ ] Weitere Checks auslagern (z.B. Accessibility, Broken Links, Content-Checks)
- [ ] Zentrales Runner-Skript für alle Checks (Batch-Ausführung, Exit-Codes, Zusammenfassung)
- [ ] Automatisierte Tests für alle Checks
- [ ] Automatisierte Performance-Analyse der Checks
- [ ] Automatisierte Rollback- und Recovery-Strategien dokumentieren
- [ ] Optional: Checks als Pre-Build-Hook in CI/CD integrieren

# Performance-Impact
- [x] Build-Prozess beschleunigt, da Checks unabhängig und parallelisierbar
- [ ] Performance-Statistiken pro Check automatisiert erfassen

# Rollback
- [x] Rollback-Anweisungen in docs/aenderungsprotokoll.md dokumentieren
