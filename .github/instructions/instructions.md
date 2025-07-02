UNIVERSELL GILT:
CONTENT FIRST!!!

NEBENHER KANN DIE KI PROBLEME LÖSEN, ABER IMMER NACH DEM CONTENT FIRST PRINZIP ARBEITEN!!!

ES IST VERBOTEN, KOMPLIZIERTE SKRIPTE ODER LÖSUNGEN ZU ERSTELLEN!!!
AUCH IST IST VERBOTEN, MEHRERE GLEICHNAMIGEN DATEIEN MANUELL VON DER KI ZU ERSTELLEN!
ES DÜRFEN KEINE NEUEN DATEIEN ERSTELLT WERDEN WENN BEREITS EINE GLEICHNAMEIGE DATEI VORHANDEN IST!
DIE KI IST GEZWUNGEN ALLE PROBLEME AN DER URSACHE ZU BEHEBEN!!!
DAFÜR MUSS DIE KI ALS ERSTES DEN BUILD-PROZESS `pnpm build` AUSFÜHREN UND DIE LOGDATEIEN AUSWERTEN!:
C:\apps\website\einfach-passieren-lassen\scripts\build-checks\logfiles

NACH JEDER EINZELNEN ÄNDERUNG FÜHR DIE KI DEN BUILD PROZESS AUS UM ZU PRÜFEN, OB DIE KI NICHT DEN FADEN VERLIERT!
DIE KI DARF SICH NICHT VERZETTELN!!!

C:\apps\website\einfach-passieren-lassen\scripts\build-checks\check_scripts\masterBuildChecker.js
DER CHECKER MUSS ZWINGEND ERWEITERT WERDEN, WENN DER KI WICHTIGE LOGDATEIEN FEHLEN!

DIE KI IST ANGEHALTEN, DIESES VERZEICHNIS EIGENSTÄNDIG ZU MANAGEN UND ZU VERWALTEN:
C:\apps\website\einfach-passieren-lassen\scripts\build-checks


Die KI muss zwingend bei jedem einzelnen Fehler, dies zu den lesson-learned hinzufügen:
C:\apps\website\einfach-passieren-lassen\.github\lesson-learned

Die KI managed  diesen ordner eigenständig und ist verantwortlich, dass dieser Ordner / Ort der Erinnerungen von Fehlern, immer und stetig aktuell ist.

Dabei spielt es keine Rolle, ob die KI eine Ordnerstruktur anlegt oder nicht. Wichtig ist, dass die KI die Fehler in diesem Ordner dokumentiert.
Es dürfen auch positive Lesson Learned hinzugefügt werden. 

Sämtliche Probleme müssen zwingend durch den Build-Checker Prozess der durch den npm build Prozess getriggert wird, gelogt werden.
Hier sind die Skripte vom Checker Prozess:
C:\apps\website\einfach-passieren-lassen\scripts\build-checks

Dabei darf bei einer Problemlösung NIEMALS EINE NEUE DATEI ERSTELLT WERDEN!
WENN DIE KI EINE SOLCHE AUSSAGE MACHT:
"Die Datei ist beschädigt. Lass mich sie komplett neu erstellen:"
MUSS DIE KI ZWINGEND DIE ERSTELLE DATEI KOMPLETT LÖSCHEN UND DIE ORIGINALDATEI REPARIEREN!
FÜR DIE REPARATUR EINER DATEI DARF NIEMALS EINE WIEDERHERSTELLUNG DURCHGEFÜHRT WERDEN!!!!!
DIE KI MUSS ZWINGEND ALLE PROBLEME DIE VS CODE ANZEIGT - REGISTRIEREN UND LÖSEN!!!
DIESE SIND IM REGISTER "PROBLEMS" ZU FINDEN!!!

WENN KEINE FEHLER VORHANDEN SIND, DIE KI UNSICHER IST, MUSS DIE KI ZUERST EINEN BUILD PROZESS DURCHFÜHREN, WENN DIE KI DANN IMMER NOCH UNSICHER IST, SOLL DIE KI MICH, DEN USER FRAGEN!

SOLANGE PROBLEME BESTEHEN DIE NICHT GELÖST SIND, DARF AUCH KEINE DOKUMENTATION DER REPARATUR ERSTELLT WERDEN!
FEHLERHAFTE DOKUMENTATION IST ZWINGEND ZU VERMEIDEN!


ZWINGEND ANWEISUNGEN FÜR DIE KI:
IM BUILD PROZESS DÜRFEN KEINE EXCEPTIONS HINTERLEGT WERDEN!!!

Es muss immer und zwingend und ausschliesslich die Powershell-Syntax verwendet werden!!!
Für den Build Prozess muss zwingend `pnpm build` verwendet werden.
Die Checker Funktion muss zwingend durch den Build Prozess `pnpm build` angetriggert werden.

**VERANTWORTUNGSKULTUR:** Bei Diskrepanzen oder Fehlern keine Entschuldigungen - direkte Kommunikation der Sachlage und sofortige Korrektur. Alle Änderungen werden dokumentiert.

## 📚 LESSON-LEARNED DOKUMENTATIONSPFLICHT
**ZWINGEND:** Jeder auftretende Fehler wird automatisch in `.github/instructions/LESSONS_LEARNED.md` dokumentiert:
- **Terminal-Output:** Vollständige Ausgabe erfassen
- **Ursachen-Analyse:** Technische und instruction-basierte Gründe
- **Präventions-Maßnahmen:** Konkrete Schritte zur Vermeidung
- **Rollback-Instruktionen:** Schnelle Wiederherstellung

**REGEL:** Vor Fehlerbehebung IMMER prüfen ob ähnlicher Fehler bereits in LESSONS_LEARNED.md dokumentiert ist!


# AI Instructions: "Einfach Passieren Lassen" - Authentische Website

Es darf niemals eine neue Datei erstellt werden um Probleme zu lösen. Jedes PROBLEM MUSS ZWINGEND AN DER URSACHE BEHOBEN WERDEN. Dafür muss die KI ZWINGEND die gesamte Datei, zeile für zeile, code für code, zeichen für zeichen LESEN UND VOLLSTÄNDIG / HOLLISTISCH VERSTEHEN.
ALLE ABHÄNGIGKEITEN MÜSSEN ZWINGEND  BERÜCKSICHTIGT WERDEN
ES MUSS DIE KOMPLETTE ABHÄNGIGKEITS-KETTE SEMANTISCH TIEFENANALYSIERT WERDEN

## 🗑️ LÖSCHEN-VOR-REPARIEREN PRINZIP
**ZWINGEND vor jeder komplexen Lösung prüfen:**
1. **IST DIE DATEI ÜBERFLÜSSIG?** → LÖSCHEN statt reparieren!
2. **IST DIE DATEI DOPPELT VORHANDEN?** → Duplikat löschen!
3. **LÖST ENTFERNEN DAS PROBLEM?** → Einfachste Lösung wählen!
**REGEL:** Vor komplexen Fixes immer fragen: "Kann ich das Problem durch ENTFERNEN lösen?"
Es ist KEINE Website, die durch Marketing meine Traumfrau anzieht. Es ist eine Website, die durch SEO meine Traumfrau anzieht. Sobald ich meine Traumfrau gefunden habe, wird die Website offline gehen.


## 🔄 MANDATORY BUILD-WORKFLOW

**PFLICHT-ABLAUF für jeden Build-Prozess:**

1. **BUILD EXECUTION:** Immer `pnpm build` ausführen (auch bei Tests - vollständiger Build-Prozess erforderlich)

2. **HTML-VERIFIKATION ZWINGEND:** Nach JEDEM Build prüfen ob HTML-Dateien aktualisiert wurden:
   - Markdown-Änderungen müssen in HTML sichtbar sein
   - WARNUNG: Build-Script generiert nur HTML bei Score ≥ 60%
   - Bei Score < 60%: Temporäre Build-Script-Anpassung erforderlich für HTML-Generierung

3. **LOG ANALYSIS:** Nach jedem Build automatisch die neueste Log-Datei aus `docs\015_build_logs` analysieren

4. **PROBLEM DETECTION:** Systematische semantische Tiefenanalyse aller in der Log-Datei dokumentierten Probleme:
   - ❌ KRITISCHE Fehler (sofortige Behebung erforderlich)
   - ⚠️ WARNINGS (mittelfristige Optimierung)
   - 📈 OPTIMIERUNGSPOTENTIALE

5. **PROACTIVE ACTION:** 
   - **DEFAULT:** KI beginnt automatisch mit der systematischen Problembehebung basierend auf Log-Priorisierung
   - **OVERRIDE:** Falls User anderen Auftrag erteilt → KI weist darauf hin und schreibt User-Auftrag in Log-Datei für spätere strukturierte Abarbeitung

6. **DOCUMENTATION:** Alle Aktionen werden automatisch in entsprechende Dokumentationsdateien protokolliert

**OVERRIDE:** Nur bei explizitem User-Override wird von diesem Workflow abgewichen


## � TERMINOLOGIE-KORREKTUR & LAIEN-UNTERSTÜTZUNG
**KRITISCH:** User ist Laie - falsche Begriffe erkennen und korrigieren!

### ❌ Häufige Terminologie-Paradoxe:
- **User sagt "Exception"** → **Meint "Build-Report/Quality-Alert"** (Build darf NICHT stoppen!)
- **User sagt "Error"** → **Meint oft "Warning/Info"** (sammeln, nicht abbrechen)
- **User sagt "automatisieren"** → **Meint "in Build-Prozess integrieren"** (nicht external tools)

### ✅ KI-Verhalten bei falscher Terminologie:
1. **SOFORT korrigieren:** "Du meinst wahrscheinlich [korrekter Begriff] statt [falscher Begriff]"
2. **Paradox erklären:** "Das würde Problem X verursachen, ich implementiere es als Y"
3. **Bestätigung holen:** "Ist das so gemeint?"

### 🚨 Build-Prozess DARF NIEMALS stoppen:
- Alle Erkenntnisse sammeln → **Build-Report** am Ende
- Vercel Deployment muss durchlaufen
- **Keine echten Exceptions** → nur **Quality-Alerts**

## �📋 GRUNDREGELN
- **DU-Form zwingend** in allen Texten
- **Keine Testimonials/Erfahrungsberichte** - Website sucht Traumfrau, keine Kunden  
- **Manuelle Qualitätskontrolle** - Jede Zeile verstehen vor Änderungen
- **Build-System Enhancement erlaubt** für Qualitätskontrolle
- **Build-Reports statt Exceptions** - Sammeln, nicht stoppen!

## 🎯 KERNVISION
Diese Website ist der authentische Weg, meine Traumfrau kennenzulernen. Durch echte, verletzliche Verbindung - nicht durch Marketing.

## 👥 ZIELGRUPPE
**Meine Traumfrau:** Verletzlich, authentisch, bindungssuchend, Deutschschweiz 18-34 Jahre, trägt Traumata, sucht bedingungslose Akzeptanz, braucht Sicherheit UND Freiheit.

## 💬 KOMMUNIKATIONSSTIL  
**ICH-PERSPEKTIVE ohne persönliche Details:**
- "Ich halte dich, wenn du ankommst"
- "Hier bist du sicher. Hier endet dein Suchen"  
- "Du brauchst nichts zu fragen, nichts zu erklären"
- "Wenn du bereit bist, dich zu empfangen zu lassen, bin ich da"
- "Du findest den Weg zu mir. Mehr musst du nicht wissen"

## 📝 CONTENT-ANFORDERUNGEN
- **Blog-Posts:** 2300+ Wörter, SEO-optimiert, authentisch verletzlich
- **FAQ-Integration:** 5-8 natürliche Fragen organisch in Text integriert (NICHT als separate Roboter-Sektion!)  
- **Mobile-first:** Perfekte Smartphone-Erfahrung
- **Meta-Beschreibungen:** 120-160 Zeichen

## 🚫 ANTI-TOOL-SUCHT
**VERBOTEN:** "Welches Tool automatisiert das?", Content-Abkürzungen, Terminal für manuelle Content-Bearbeitung (Build-System Terminal ist erlaubt)
**ARBEITER-MENTALITÄT:** "Ich arbeite SELBST systematisch durch"

## 🔍 KEYWORD-STRATEGIE (Universelle emotionale Sprach-Patterns)
**WARNUNG:** Keine Schweizerdeutsch-Versuche - KI kann diese nicht authentisch vermitteln!
**Universelle emotionale Suchanfragen:**
- "bin so müde will nur dass er alles macht"
- "wäre schön wenn jemand sagen würde jetzt lass ich mich kümmern"
- "fühle mich wie leer komme nicht raus aus dieser leere"  
- "will nicht mehr erwachsen sein nur noch gehalten werden"
- "manchmal glaube ich bin zu schwach fürs leben"

## 📋 SPEZIAL-INSTRUKTIONEN
- **Emotionale Sicherheit:** Jeder Text muss absolute Sicherheit vermitteln
- **Beschützer-Rolle:** Stärke UND Verletzlichkeit zeigen
- **Bedingungslose Akzeptanz:** "Du darfst sein, wie du bist"
- **KEINE geografischen Bezüge:** Vermeidet lokales SEO und wirkt unnatürlich

---

**KERN-BOTSCHAFT:** Website um durch SEO meine Traumfrau anzuziehen. Geht offline sobald Traumfrau gefunden!
