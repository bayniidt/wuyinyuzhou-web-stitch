const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

// Use test database
const dbPath = process.env.NAV_DB_PATH || path.join(__dirname, 'database_test.sqlite');
const db = new Database(dbPath);

console.log('📁 Using database:', dbPath);
console.log('🔄 Starting navigation synchronization from i18n catalogs...\n');

// Read catalog files
const zhCatalogContent = fs.readFileSync(path.join(__dirname, '../src/i18n/catalog/zh.ts'), 'utf-8');
const enCatalogContent = fs.readFileSync(path.join(__dirname, '../src/i18n/catalog/en.ts'), 'utf-8');
const navConfigContent = fs.readFileSync(path.join(__dirname, '../src/config/navigation.ts'), 'utf-8');

// Extract href from config/navigation.ts
function getHref(groupName, itemName) {
  // Pattern: { key: 'hero', href: '/#home-hero' },
  const pattern = new RegExp(`${groupName}.items.${itemName}:\\s*{[^}]*?key:\\s*"([^"]+)"[^}]*?href:\\s*"([^"]+)"`, 's');
  const match = navConfigContent.match(pattern);
  if (match && match.length >= 3) {
    return match[2];
  }
  // Fallback
  return `/${groupName}-${itemName}`;
}

// Extract Chinese data from zh.ts - simpler approach
function extractZhData() {
  const result = {};
  
  // Match entire nav section
  const navMatch = zhCatalogContent.match(/nav:\s*\{[\s\S]*?groups:\s*\{([\s\S]+?)\},\s*home:/);
  if (!navMatch) {
    console.error('❌ Could not find nav.groups in zh.ts');
    return result;
  }
  
  const groupsText = navMatch[1];
  
  // Split by group boundaries (look for "label:" pattern)
  const groupBlocks = groupsText.split(/(\w+):\s*\{\s*label:/g);
  
  // First element is before first group, skip it
  for (let i = 1; i < groupBlocks.length; i += 2) {
    const groupId = groupBlocks[i];
    const block = groupBlocks[i + 1];
    
    if (!block) continue;
    
    // Extract group label
    const labelMatch = block.match(/^label:\s*"([^"]+)"/);
    if (!labelMatch) continue;
    const groupLabelZh = labelMatch[1];
    
    // Find items section
    const itemsSection = block.substring(labelMatch[0].length);
    
    result[groupId] = {
      label_zh: groupLabelZh,
      items: {}
    };
    
    // Parse each item: key: { label: "...", description: "..." }
    const itemPattern = /(\w+):\s*\{\s*label:\s*"([^"]+)"[^}]*?description:\s*"([^"]+)"/g;
    let itemMatch;
    
    while ((itemMatch = itemPattern.exec(itemsSection)) !== null) {
      const itemKey = itemMatch[1];
      result[groupId].items[itemKey] = {
        label: itemMatch[2],
        description: itemMatch[3]
      };
    }
  }
  
  return result;
}

// Extract English data from en.ts
function extractEnData() {
  const result = {};
  
  // Match entire nav section
  const navMatch = enCatalogContent.match(/nav:\s*\{[\s\S]*?groups:\s*\{([\s\S]+?)\},\s*home:/);
  if (!navMatch) {
    console.error('❌ Could not find nav.groups in en.ts');
    return result;
  }
  
  const groupsText = navMatch[1];
  
  // Split by group boundaries
  const groupBlocks = groupsText.split(/(\w+):\s*\{\s*label:/g);
  
  for (let i = 1; i < groupBlocks.length; i += 2) {
    const groupId = groupBlocks[i];
    const block = groupBlocks[i + 1];
    
    if (!block) continue;
    
    // Extract group label
    const labelMatch = block.match(/^label:\s*"([^"]+)"/);
    if (!labelMatch) continue;
    const groupLabelEn = labelMatch[1];
    
    // Find items section
    const itemsSection = block.substring(labelMatch[0].length);
    
    result[groupId] = {
      label_en: groupLabelEn,
      items: {}
    };
    
    // Parse items
    const itemPattern = /(\w+):\s*\{\s*label:\s*"([^"]+)"[^}]*?description:\s*"([^"]+)"/g;
    let itemMatch;
    
    while ((itemMatch = itemPattern.exec(itemsSection)) !== null) {
      const itemKey = itemMatch[1];
      result[groupId].items[itemKey] = {
        label: itemMatch[2],
        description: itemMatch[3]
      };
    }
  }
  
  return result;
}

console.log('📖 Extracting data from zh.ts...');
const zhData = extractZhData();
console.log(`   Found ${Object.keys(zhData).length} groups`);

console.log('\n📖 Extracting data from en.ts...');
const enData = extractEnData();
console.log(`   Found ${Object.keys(enData).length} groups`);

// Check and create table structure
console.log('\n🔧 Checking/updating navigation table structure...');
const columnInfo = db.prepare("PRAGMA table_info(navigation)").all();
const hasGroupId = columnInfo.some(col => col.name === 'group_id');

if (!hasGroupId) {
  console.log('   Creating new table with correct structure...\n');
  db.exec('DROP TABLE IF EXISTS navigation_new');
  db.exec(`
    CREATE TABLE navigation_new (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      group_id TEXT,
      group_label_zh TEXT,
      group_label_en TEXT,
      name_zh TEXT,
      name_en TEXT,
      href TEXT,
      description_zh TEXT,
      description_en TEXT,
      display_order INTEGER DEFAULT 0,
      parent_id INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  
  const existingCount = db.prepare('SELECT COUNT(*) as count FROM navigation').get().count;
  if (existingCount > 0) {
    db.exec(`
      INSERT INTO navigation_new 
      (id, name_zh, name_en, href, display_order, parent_id, created_at, updated_at)
      SELECT id, name_zh, name_en, href, display_order, parent_id, created_at, updated_at
      FROM navigation
    `);
    console.log(`   Copied ${existingCount} old records`);
    db.exec('DROP TABLE navigation');
    db.exec('ALTER TABLE navigation_new RENAME TO navigation');
  } else {
    db.exec('DROP TABLE IF EXISTS navigation');
    db.exec('ALTER TABLE navigation_new RENAME TO navigation');
  }
  console.log('   ✅ Table structure updated\n');
} else {
  console.log('   ✅ Table already has correct structure\n');
  // Clear existing data
  db.prepare('DELETE FROM navigation').run();
  console.log('   🗑️ Cleared existing navigation data\n');
}

// Get English group labels
function getGroupLabelEn(groupId) {
  return enData[groupId]?.label_en || groupId.charAt(0).toUpperCase() + groupId.slice(1);
}

// Insert all navigation data
console.log('\n💾 Inserting navigation data...\n');

const insertStmt = db.prepare(`
  INSERT INTO navigation (
    group_id, group_label_zh, group_label_en,
    name_zh, name_en, href,
    description_zh, description_en,
    display_order, parent_id
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

let totalInserted = 0;

db.transaction(() => {
  Object.keys(zhData).forEach((groupId, groupIdx) => {
    const groupZh = zhData[groupId];
    const groupEn = enData[groupId] || {};
    const items = Object.keys(groupZh.items || {}).sort();
    
    // If no items found in zh, try to extract from en too
    if (items.length === 0) {
      console.warn(`   ⚠️ No items found for group "${groupId}"`);
      return;
    }
    
    items.forEach((itemKey, itemIdx) => {
      const zhItem = groupZh.items[itemKey];
      const enItem = groupEn.items?.[itemKey] || {};
      
      try {
        insertStmt.run(
          groupId,                                      // group_id
          groupZh.label_zh,                             // group_label_zh
          groupEn.label_en,                             // group_label_en
          zhItem.label,                                 // name_zh
          enItem.label || itemKey,                      // name_en
          getHref(groupId, itemKey),                    // href
          zhItem.description,                           // description_zh
          enItem.description || '',                     // description_en
          itemIdx + 1,                                  // display_order
          0                                             // parent_id
        );
        totalInserted++;
        
        if (totalInserted % 10 === 0) {
          console.log(`   Progress: ${totalInserted}/${Object.values(zhData).reduce((sum, g) => sum + Object.keys(g.items).length, 0)} records inserted...`);
        }
      } catch (err) {
        console.error(`   ❌ Error inserting ${groupId}.${itemKey}:`, err.message);
      }
    });
  });
})();

console.log(`\n✨ Synchronization complete!`);
console.log(`📈 Total records: ${totalInserted}`);

// Verify final data
const finalCount = db.prepare('SELECT COUNT(*) as count FROM navigation').get().count;
console.log(`📝 Final count: ${finalCount} records`);

// Show sample
console.log('\n📄 Sample data (first 3):');
const sampleNavs = db.prepare('SELECT * FROM navigation LIMIT 3').all();
sampleNavs.forEach(nav => {
  console.log(`  ID: ${nav.id}`);
  console.log(`    Group: ${nav.group_label_zh} → ${nav.name_zh}${nav.href ? ' (' + nav.href + ')' : ''}`);
  console.log(`    Description CN: ${nav.description_zh || '-'}`);
  console.log(`    Description EN: ${nav.description_en || '-'}`);
  console.log();
});

console.log('🎉 Ready to use!\n');
db.close();
process.exit(0);
