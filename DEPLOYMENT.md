# DEPLOYMENT ANLEITUNG FÜR VERCEL

Dieses Dokument beschreibt die exakten Schritte und Einstellungen, um dieses Projekt erfolgreich auf Vercel zu deployen.

## Projekt-Struktur

Das Projekt ist eine **statische HTML-Website** ohne Build-System oder Dependencies.

- **`/` (Root-Verzeichnis):** Enthält die fertigen HTML-Dateien (`index.html`, `ueber-mich.html`) und Assets (`style.css`, `favicon.svg`).
- **`blog/`:** Enthält statische Blog-HTML-Dateien.
- **`src/`:** Enthält Template-Dateien (wird nicht für Deployment verwendet).
- **Keine `package.json` oder Build-Skripte erforderlich.**

## Vercel Konfiguration

Nimm die folgenden Einstellungen in deinem Vercel-Projekt vor. Du findest sie unter **Project Settings > Build and Development Settings**.

### Framework Settings (WICHTIG):

- **Framework Preset:** `Other`
- **Build Command:** ❌ **Override AUSSCHALTEN** (Toggle OFF, Feld leer lassen)
- **Output Directory:** ❌ **Override AUSSCHALTEN** (Toggle OFF, Feld leer lassen)
- **Install Command:** ❌ **Override AUSSCHALTEN** (Toggle OFF, Feld leer lassen)  
- **Development Command:** ❌ **Override AUSSCHALTEN** (Toggle OFF, Feld leer lassen)

### Root Directory

- **Root Directory:** Lasse dieses Feld **LEER**. Vercel soll direkt aus dem Repository-Root deployen.
- **Include source files outside of the Root Directory...:** Lasse diese Option **deaktiviert** (nicht angehakt).

---

## Warum keine Build-Commands?

Deine Website besteht aus fertigen HTML-Dateien:
- ✅ `index.html` (18 KB, vollständig optimiert)
- ✅ `ueber-mich.html` (10 KB, vollständig optimiert)  
- ✅ `blog/*.html` (alle Blog-Posts als statische HTML)
- ✅ `style.css` (7 KB, optimiert)

**Kein Build nötig** - Vercel soll diese Dateien direkt verwenden.

---

## Workflow für Updates

1. **Inhalte bearbeiten:** Ändere HTML-Dateien direkt (`index.html`, `ueber-mich.html`, `blog/*.html`).
2. **Auf GitHub pushen:** `git add .` && `git commit -m "Update"` && `git push`
3. **Automatisches Deployment:** Vercel erkennt Änderungen und deployed automatisch (ca. 30 Sekunden).

**Kein `npm run build` erforderlich!**

## Workflow zum Erstellen neuer Inhalte

1.  **Neuen Blogartikel schreiben:** Erstelle eine neue `.md`-Datei im Ordner `src/posts/`. Kopiere die `---` Frontmatter-Sektion von einem bestehenden Artikel und passe Titel, Subtitle und Description an.
2.  **Seiten bearbeiten:** Ändere die entsprechenden HTML-Dateien im Ordner `src/pages/`.
3.  **Build lokal testen (optional):** Führe den Befehl `npm run build` in deinem Terminal aus. Der `public`-Ordner wird aktualisiert. Du kannst die `index.html` aus diesem Ordner in deinem Browser öffnen, um eine Vorschau zu sehen.
4.  **Auf Vercel deployen:** Pushe deine Änderungen in dein verbundenes Git-Repository (z.B. GitHub). Vercel wird den neuen Build automatisch erkennen und deine Webseite aktualisieren.
