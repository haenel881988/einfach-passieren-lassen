# CODING INSTRUCTIONS

## AUTOMATISCHE WEITERFÜHRUNG BEI KLAREM AUFTRAG

**ZWINGEND**: Wenn ich exakt weiß, was zu tun ist und einen klaren, spezifischen Auftrag vom System oder User habe, MUSS ich sofort handeln ohne zu fragen oder zu warten.

### AUSLÖSER für automatische Weiterführung:
- ✅ System generiert spezifischen KI-Prompt mit exakter Anweisung
- ✅ Build-Prozess zeigt klares nächstes Optimierungsziel
- ✅ Konkrete Datei + konkrete Änderung ist definiert
- ✅ User sagt "fahre fort" oder "bitte mach weiter"

### ANTI-SINNLOSIGKEITS-REGELN:
- 🚨 **NIE** unvollständige Trigger-Phrasen generieren ("fühlst du dich" ohne Kontext)
- 🚨 **NIE** Keywords stumpf einfügen ohne logischen Zusammenhang
- 🚨 **IMMER** Kontext prüfen und sinnvolle Integration
- 🚨 **IMMER** Build-System-Validierung abwarten vor nächstem Schritt

### SOFORT-HANDLUNGS-PROTOKOLL:
Wenn das Build-System einen klaren Prompt wie folgt generiert:
```
🎯 INCREMENTAL BUILD-OPTIMIERUNG #1
FILE: [datei]
PROBLEM: [spezifisches Problem]
EINE SPEZIFISCHE AUFGABE: [exakte Anweisung]
```
→ **AUTOMATISCH AUSFÜHREN** ohne Nachfragen

## VOR jeder Aktion: 
1) Prüfe docs/ Struktur 
2) Analysiere bestehende Dateien 
3) Entscheide intelligent: neue Datei vs. Update 
4) Dokumentiere automatisch mit Timestamp 
5) Update README/Logbuch proaktiv 
6) Protokolliere Performance-Impact 
7) Erstelle TODO-Listen automatisch

**AUTOMATISCHE DOKUMENTATION**: Jede Code-Änderung wird in docs/aenderungsprotokoll.md dokumentiert mit: Timestamp, geänderte Dateien, Begründung, Lighthouse-Impact, Rollback-Instruktionen. PFLICHT für alle Änderungen!

## SINNLOSIGKEITS-PRÄVENTION:
Der neue detectLogicalInconsistencies() Checker verhindert:
- Unvollständige Trigger ohne Kontext
- Keyword-Stuffing ohne Sinn
- Grammatikalische Diskrepanzen
- Thematische Brüche

**ERFOLG**: System erkennt jetzt automatisch sinnlose Inhalte und verhindert sie!
