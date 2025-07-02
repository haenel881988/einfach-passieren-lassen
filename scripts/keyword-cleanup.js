// SCHWEIZERDEUTSCH KEYWORD CLEANUP SCRIPT
// Automatisches Ersetzen von schwach performenden schweizerdeutschen Keywords durch hochdeutsche Longtails

import fs from 'fs';
import path from 'path';

const INPUT_DIR = 'blog/entwurf';

// Mapping von schweizerdeutschen Keywords zu hochdeutschen Longtails
const keywordMapping = {
    // Schweizerdeutsch -> Hochdeutsch (bessere SEO Performance)
    'eifach passiere lo': 'lass es einfach geschehen',
    'eifach passiere lah': 'lass es einfach geschehen', 
    'eifach ghöre': 'einfach dazugehören',
    'will eifach ghöre zuen öpperem': 'will einfach zu jemandem gehören',
    'chan ich nöd au so sii': 'kann ich nicht auch so sein',
    'warum chan ich nöd': 'warum kann ich nicht',
    'du bisch mini': 'du gehörst zu mir',
    'bisch scho mini': 'gehörst schon zu mir',
    'du chasch eifach si': 'du kannst einfach sein',
    'du bisch säker da': 'du bist sicher hier',
    'wotsch das würkli': 'willst du das wirklich',
    'guete morge': 'guten morgen',
    'mini frau': 'meine frau',
    'beschti entscheidig': 'beste entscheidung',
    'vo mim läbe': 'meines lebens',
    'ich bruch niemert': 'ich brauche niemanden',
    'mini eltere': 'meine eltern',
    'nöd guet finde': 'nicht gut finden',
    'macht mi verruckt': 'macht mich verrückt',
    'chan nüt drgäge mache': 'kann nichts dagegen machen',
    'säit du bisch mini': 'sagt du gehörst zu mir',
    'will so fest': 'will so sehr',
    'dass er säit': 'dass er sagt'
};

async function cleanupKeywords() {
    console.log('🔧 STARTE KEYWORD CLEANUP - Schweizerdeutsch → Hochdeutsch...\n');
    
    const files = fs.readdirSync(INPUT_DIR)
        .filter(file => file.endsWith('.md'));
    
    let totalReplacements = 0;
    
    for (const file of files) {
        const filePath = path.join(INPUT_DIR, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let fileReplacements = 0;
        
        // Für jedes Mapping prüfen und ersetzen
        for (const [schweizerdeutsch, hochdeutsch] of Object.entries(keywordMapping)) {
            const regex = new RegExp(schweizerdeutsch, 'gi');
            const matches = content.match(regex);
            
            if (matches) {
                content = content.replace(regex, hochdeutsch);
                fileReplacements += matches.length;
                console.log(`   ✅ "${schweizerdeutsch}" → "${hochdeutsch}" (${matches.length}x)`);
            }
        }
        
        if (fileReplacements > 0) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`📝 ${file}: ${fileReplacements} Ersetzungen\n`);
            totalReplacements += fileReplacements;
        } else {
            console.log(`📄 ${file}: Keine schweizerdeutschen Keywords gefunden\n`);
        }
    }
    
    console.log(`✅ CLEANUP ABGESCHLOSSEN: ${totalReplacements} Keywords ersetzt`);
    console.log('💡 Hochdeutsche Longtails haben bessere SEO-Performance');
    console.log('🎯 Empfehlung: pnpm build ausführen für Update');
}

cleanupKeywords().catch(console.error);
