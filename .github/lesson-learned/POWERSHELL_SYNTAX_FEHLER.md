# LESSON LEARNED: PowerShell-Syntax Fehler

**Datum:** 02.07.2025, 17:20
**Fehler-Typ:** Terminal-Syntax
**Schweregrad:** KRITISCH

## ❌ PROBLEM
KI verwendet permanent falsche Terminal-Syntax:
- `&&` statt `;` für PowerShell
- Bash-Befehle statt PowerShell-Befehle
- Falsche Verzeichniswechsel

## 🔍 URSACHE
**HAUPTPROBLEM:** Instructions enthielten KEINE PowerShell-Syntax-Regel!
- System meldet PowerShell als Shell
- Instructions schweigen zu Terminal-Syntax
- KI defaultet zu Unix/Bash-Syntax

## ✅ LÖSUNG IMPLEMENTIERT
**Instructions erweitert um:**
```markdown
## 🖥️ TERMINAL-SYNTAX ZWINGEND
**WINDOWS POWERSHELL PFLICHT:** Alle Terminal-Befehle MÜSSEN PowerShell-Syntax verwenden:
- ✅ RICHTIG: `cd path; command` (Semikolon als Trenner)
- ❌ FALSCH: `cd path && command` (Bash-Syntax verboten!)
```

## 🚨 PRÄVENTIONS-REGEL
**AB SOFORT:** Vor jedem Terminal-Befehl prüfen:
1. Ist es PowerShell-Syntax? (`;` nicht `&&`)
2. Ist es das richtige Verzeichnis?
3. Ist es der richtige Build-Befehl? (`pnpm build`)

## 📋 CHECKLIST FÜR ALLE TERMINAL-BEFEHLE
- [ ] PowerShell-Syntax verwendet (`;`)
- [ ] package.json geprüft für Build-Befehl
- [ ] Hauptverzeichnis als Arbeitsverzeichnis
- [ ] Keine Bash-Syntax (`&&`, `||`, etc.)
