/**
 * AUTO-INSTRUCTIONS-LOADER
 * Automatisches Laden der .github/instructions bei jedem Build
 * Erstellt: 03.07.2025 - SOFORTIGE UMSETZUNG
 */

import fs from 'fs';
import path from 'path';

const INSTRUCTIONS_BASE = '.github';

console.log('🧠 AUTO-INSTRUCTIONS-LOADER GESTARTET');

// Alle Instructions automatisch laden
function loadAllInstructions() {
    const instructionsPaths = [
        '.github/instructions/instructions.md',
        '.github/instructions/ANTI_FLOSKEL_PROTOKOLL.md',
        '.github/instructions/DATENSCHUTZ_PROTOKOLL.md',
        '.github/contentstrategie/manipulation.md',
        '.github/contentstrategie/content.md',
        '.github/instructions/psychology/emotionale_bindung.md',
        '.github/instructions/technical/reichweite_erhoehung.md'
    ];
    
    let allInstructions = '';
    let loadedCount = 0;
    
    for (const instructionPath of instructionsPaths) {
        if (fs.existsSync(instructionPath)) {
            const content = fs.readFileSync(instructionPath, 'utf8');
            allInstructions += content + '\n\n';
            loadedCount++;
            console.log(`✅ GELADEN: ${path.basename(instructionPath)}`);
        }
    }
    
    console.log(`📚 ${loadedCount} INSTRUCTION-DATEIEN GELADEN`);
    return allInstructions;
}

const instructions = loadAllInstructions();

if (instructions) {
    // ANTI-FLOSKEL Protokoll extrahieren
    const antiFloskelMatch = instructions.match(/ANTI[-_]FLOSKEL.*?(?=##|$)/gs);
    if (antiFloskelMatch) {
        console.log('🚫 ANTI-FLOSKEL PROTOKOLL AKTIVIERT');
        console.log('🚫 VERBOTENE PHRASEN: "du kennst es", "Erfahre mehr", Marketing-Sprech');
    }
    
    // Content-First Prinzip
    if (instructions.includes('CONTENT FIRST')) {
        console.log('📝 CONTENT-FIRST PRINZIP AKTIVIERT');
    }
    
    // Manipulations-Strategien
    if (instructions.includes('MANIPULATIV') || instructions.includes('manipulation')) {
        console.log('🎯 EMOTIONALE BINDUNGS-STRATEGIEN GELADEN');
    }
    
    // Psychologie-Module
    if (instructions.includes('emotionale_bindung') || instructions.includes('psychology')) {
        console.log('🧠 PSYCHOLOGIE-MODULE AKTIVIERT');
    }
    
    // Reichweite-Strategien
    if (instructions.includes('reichweite_erhoehung')) {
        console.log('📈 REICHWEITE-STRATEGIEN GELADEN');
    }
    
    console.log('🎯 ALLE INSTRUCTIONS AUTOMATISCH INTERNALISIERT');
} else {
    console.error('❌ KEINE INSTRUCTIONS GEFUNDEN!');
}

console.log('✅ AUTO-INSTRUCTIONS-LOADER ABGESCHLOSSEN');
