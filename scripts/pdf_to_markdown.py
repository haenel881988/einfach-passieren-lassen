#!/usr/bin/env python3
"""
PDF zu Markdown Konverter
Konvertiert alle PDFs im docs/01_recherchematerial/ Ordner zu Markdown-Dateien
"""

import os
import sys
from pathlib import Path
import datetime

def install_required_packages():
    """Installiert benötigte Pakete"""
    import subprocess
    packages = ['PyPDF2', 'markdown']
    
    for package in packages:
        try:
            __import__(package.lower().replace('-', '_'))
        except ImportError:
            print(f"Installiere {package}...")
            subprocess.check_call([sys.executable, "-m", "pip", "install", package])

def extract_text_from_pdf(pdf_path):
    """Extrahiert Text aus einer PDF-Datei"""
    try:
        import PyPDF2
        
        with open(pdf_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            text = ""
            
            for page_num, page in enumerate(reader.pages):
                text += f"\n## Seite {page_num + 1}\n\n"
                text += page.extract_text()
                text += "\n\n"
        
        return text
    except Exception as e:
        return f"Fehler beim Lesen der PDF: {str(e)}"

def clean_text_for_markdown(text):
    """Bereinigt den Text für Markdown-Format"""
    # Entferne übermäßige Leerzeilen
    lines = text.split('\n')
    cleaned_lines = []
    
    for line in lines:
        line = line.strip()
        if line:
            cleaned_lines.append(line)
        elif cleaned_lines and cleaned_lines[-1] != "":
            cleaned_lines.append("")
    
    return '\n'.join(cleaned_lines)

def convert_pdfs_to_markdown():
    """Hauptfunktion: Konvertiert alle PDFs zu Markdown"""
    
    # Pfade definieren
    base_path = Path(__file__).parent.parent
    pdf_dir = base_path / "docs" / "01_recherchematerial"
    output_dir = base_path / "docs" / "02_markdown_recherche"
    
    # Output-Verzeichnis erstellen
    output_dir.mkdir(exist_ok=True)
    
    # Liste für Protokoll
    converted_files = []
    errors = []
    
    print("Starte PDF zu Markdown Konvertierung...")
    print(f"PDF-Verzeichnis: {pdf_dir}")
    print(f"Output-Verzeichnis: {output_dir}")
    
    # Alle PDF-Dateien finden
    pdf_files = list(pdf_dir.glob("*.pdf"))
    
    if not pdf_files:
        print("Keine PDF-Dateien gefunden!")
        return
    
    print(f"Gefunden: {len(pdf_files)} PDF-Dateien")
    
    for pdf_file in pdf_files:
        print(f"\nKonvertiere: {pdf_file.name}")
        
        try:
            # Text extrahieren
            text = extract_text_from_pdf(pdf_file)
            
            # Text bereinigen
            cleaned_text = clean_text_for_markdown(text)
            
            # Markdown-Header hinzufügen
            markdown_content = f"""# {pdf_file.stem}

> **Quelle:** {pdf_file.name}  
> **Konvertiert am:** {datetime.datetime.now().strftime("%d.%m.%Y %H:%M")}  
> **Original-Pfad:** `{pdf_file}`

---

{cleaned_text}

---

*Automatisch konvertiert mit pdf_to_markdown.py*
"""
            
            # Markdown-Datei erstellen
            md_filename = pdf_file.stem.replace(" ", "_").replace(":", "_") + ".md"
            md_path = output_dir / md_filename
            
            with open(md_path, 'w', encoding='utf-8') as f:
                f.write(markdown_content)
            
            converted_files.append({
                'pdf': pdf_file.name,
                'markdown': md_filename,
                'size': len(cleaned_text)
            })
            
            print(f"✓ Erstellt: {md_filename}")
            
        except Exception as e:
            error_msg = f"Fehler bei {pdf_file.name}: {str(e)}"
            errors.append(error_msg)
            print(f"✗ {error_msg}")
    
    # Zusammenfassung erstellen
    summary = f"""# PDF zu Markdown Konvertierung - Protokoll

**Datum:** {datetime.datetime.now().strftime("%d.%m.%Y %H:%M")}

## Erfolgreich konvertiert ({len(converted_files)} Dateien)

"""
    
    for file_info in converted_files:
        summary += f"- **{file_info['pdf']}** → `{file_info['markdown']}` ({file_info['size']} Zeichen)\n"
    
    if errors:
        summary += f"\n## Fehler ({len(errors)})\n\n"
        for error in errors:
            summary += f"- {error}\n"
    
    summary += f"\n## Verzeichnisse\n\n- **PDF-Quelle:** `{pdf_dir}`\n- **Markdown-Output:** `{output_dir}`\n"
    
    # Protokoll speichern
    protocol_path = output_dir / "konvertierungs_protokoll.md"
    with open(protocol_path, 'w', encoding='utf-8') as f:
        f.write(summary)
    
    print(f"\n{'='*50}")
    print("KONVERTIERUNG ABGESCHLOSSEN")
    print(f"{'='*50}")
    print(f"Erfolgreich: {len(converted_files)} Dateien")
    print(f"Fehler: {len(errors)} Dateien")
    print(f"Protokoll: {protocol_path}")
    
    return converted_files, errors

if __name__ == "__main__":
    print("PDF zu Markdown Konverter")
    print("=" * 50)
    
    # Pakete installieren
    install_required_packages()
    
    # Konvertierung starten
    converted_files, errors = convert_pdfs_to_markdown()
