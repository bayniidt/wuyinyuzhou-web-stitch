const db = require('./db');
const fs = require('fs');
const path = require('path');

// Override DATABASE_PATH for testing
process.env.DATABASE_PATH = process.env.NAV_DB_PATH || path.join(__dirname, 'database_test.sqlite');
console.log(`📁 Using database: ${process.env.DATABASE_PATH}`);
console.log('');

console.log('🔄 Starting navigation data synchronization...');
console.log('Extracting nav configuration from src/config/navigation.ts and i18n catalogs...\n');

// Read the navigation config file
const navConfigPath = path.join(__dirname, '../src/config/navigation.ts');
const zhCatalogPath = path.join(__dirname, '../src/i18n/catalog/zh.ts');

let navConfigContent = '';
let zhCatalogContent = '';

try {
  navConfigContent = fs.readFileSync(navConfigPath, 'utf-8');
  console.log('✅ Navigation config loaded');
} catch (err) {
  console.error('❌ Failed to read navigation config:', err.message);
  process.exit(1);
}

try {
  zhCatalogContent = fs.readFileSync(zhCatalogPath, 'utf-8');
  console.log('✅ Chinese catalog loaded');
} catch (err) {
  console.error('❌ Failed to read Chinese catalog:', err.message);
  // Continue anyway - we'll use defaults
}

// Extract groups from config/navigation.ts using regex
// Format: id: "ecosystem", primaryRoute: "/" as const, end: true as boolean, items: [...]
const groupRegex = /id:\s*"([^"]+)",\s*primaryRoute:\s*"[^"]+"[\s\S]*?items:\s*\[(.*?)\]/gs;
const itemRegex = /{[^{]*?key:\s*"([^"]+)"[^}]*?}/g;

const navGroups = [];
let groupMatch;

while ((groupMatch = groupRegex.exec(navConfigContent)) !== null) {
  const groupId = groupMatch[1];
  const itemsSection = groupMatch[2];
  
  // Find all items in this group
  const items = [];
  let itemMatch;
  
  while ((itemMatch = itemRegex.exec(itemsSection)) !== null) {
    const key = itemMatch[1];
    items.push(key);
  }
  
  if (items.length > 0) {
    navGroups.push({
      id: groupId,
      items: items
    });
  }
}

console.log(`\n📋 Found ${navGroups.length} navigation groups:`);
navGroups.forEach(g => {
  console.log(`  - ${g.id}: ${g.items.length} items`);
});

// Now extract labels from Chinese catalog
// Format: hero: { label: "止戈为武", description: "东方武道元宇宙盛典" }
const zhLabelRegex = /(\w+):\s*\{\s*label:\s*"([^"]+)"/g;
const zhDescRegex = /(\w+):\s*\{\s*[^}]*?description:\s*"([^"]+)"/g;

const getLabelsFromCatalog = (groupId, itemKey) => {
  // Build pattern for this specific group and item
  const sectionStart = `nav:\n    groups:\n      ${groupId}:\n`;
  const sectionEnd = `      },\n    },\n  `;
  
  const startIndex = zhCatalogContent.indexOf(sectionStart);
  if (startIndex === -1) {
    return { label: '', description: '' };
  }
  
  const sectionEndIndex = zhCatalogContent.indexOf(sectionEnd, startIndex);
  if (sectionEndIndex === -1) {
    return { label: '', description: '' };
  }
  
  const section = zhCatalogContent.substring(startIndex, sectionEndIndex);
  
  // Try to find exact match with description first
  const descMatch = new RegExp(`${itemKey}:\\s*\\{[^}]*?description:\\s*"([^"]+)"`, 'g').exec(section);
  if (descMatch) {
    return { label: itemKey, description: descMatch[1] };
  }
  
  // Fallback to simple label
  const labelMatch = new RegExp(`${itemKey}:\\s*\\{\\s*label:\\s*"([^"]+)"`, 'g').exec(section);
  if (labelMatch) {
    return { label: labelMatch[1], description: '' };
  }
  
  return { label: itemKey, description: '' };
};

// Get English catalog content
const enCatalogPath = path.join(__dirname, '../src/i18n/catalog/en.ts');
let enCatalogContent = '';
try {
  enCatalogContent = fs.readFileSync(enCatalogPath, 'utf-8');
  console.log('✅ English catalog loaded');
} catch (err) {
  console.warn('⚠️  Could not read English catalog, will skip English fields');
}

// First, create the correct table structure if needed
console.log('🔧 Ensuring navigation table has correct structure...');
const columnInfo = db.prepare("PRAGMA table_info(navigation)").all();
const hasGroupId = columnInfo.some(col => col.name === 'group_id');

if (!hasGroupId) {
  console.log('   Creating new table structure...\n');
  
  // Drop and recreate with correct structure
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
  
  // Copy old data if exists
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
}

// Now check current count in database
const existingCount = db.prepare('SELECT COUNT(*) as count FROM navigation').get().count;
console.log(`📊 Current database status: ${existingCount} navigation records`);

if (existingCount > 0) {
  console.log('⚠️  Database already has data. Skipping sync to prevent duplication.');
  console.log('💡 Tip: To re-sync, you can clear the navigation table first.\n');
  process.exit(0);
}

// Insert navigation data
console.log('\n💾 Syncing navigation data to database...\n');

const insertStmt = db.prepare(`
  INSERT INTO navigation (
    group_id, 
    group_label_zh, 
    group_label_en, 
    name_zh, 
    name_en, 
    href, 
    description_zh, 
    description_en, 
    display_order, 
    parent_id
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

let insertedCount = 0;

db.transaction(() => {
  navGroups.forEach((group, groupIdx) => {
    // Extract group label from Chinese catalog
    const groupLabelMatch = zhCatalogContent.match(new RegExp(`${group.id}:\\s*\\{\\s*label:\\s*"([^"]+)"`));
    const groupLabelZh = groupLabelMatch ? groupLabelMatch[1] : group.id;
    const groupLabelEn = group.id.charAt(0).toUpperCase() + group.id.slice(1); // Simple capitalization
    
    group.items.forEach((item, idx) => {
      // Extract label and description from catalogs
      const zhData = getLabelsFromCatalog(group.id, item);
      
      // For now, use the item key as placeholder
      // In a real scenario, you'd parse both catalogs more thoroughly
      const labelZh = zhData.label || item;
      const descriptionZh = zhData.description || '';
      
      // Try to get English version
      const enLabelMatch = enCatalogContent.match(new RegExp(`${group.id}.items.${item}.label:\\s*"([^"]+)"`));
      const labelEn = enLabelMatch ? enLabelMatch[1] : '';
      
      const enDescMatch = enCatalogContent.match(new RegExp(`${group.id}.items.${item}.description:\\s*"([^"]+)"`));
      const descriptionEn = enDescMatch ? enDescMatch[1] : '';
      
      // Get href from config/navigation.ts
      const hrefPattern = new RegExp(`items:\\s*\\[(.*?)\\]`, 's');
      const hrefMatch = navConfigContent.match(hrefPattern);
      let href = '#';
      
      if (hrefMatch) {
        const fullPattern = new RegExp(`${item}:\\s*href:\\s*"([^"]+)"`);
        const hrefDetail = hrefMatch[1].match(fullPattern);
        if (hrefDetail) {
          href = hrefDetail[1];
        }
      }
      
      try {
        insertStmt.run(
          group.id,
          groupLabelZh,
          groupLabelEn,
          labelZh,
          labelEn,
          href,
          descriptionZh,
          descriptionEn,
          idx + 1, // display_order
          0 // parent_id
        );
        insertedCount++;
        
        // Show progress every 5 items
        if (insertedCount % 5 === 0) {
          console.log(`   Progress: ${insertedCount}/${navGroups.reduce((sum, g) => sum + g.items.length, 0)} records inserted...`);
        }
      } catch (err) {
        console.error(`   ❌ Error inserting group=${group.id}, item=${item}:`, err.message);
      }
    });
    
    console.log(`   ✓ Group "${groupLabelZh}" (${group.items.length} items)`);
  });
})();

console.log(`\n✨ Synchronization complete!`);
console.log(`📈 Total records inserted: ${insertedCount}`);

// Verify final count
const finalCount = db.prepare('SELECT COUNT(*) as count FROM navigation').get().count;
console.log(`📝 Final database count: ${finalCount} records`);

// Display sample data
console.log('\n📄 Sample navigation data:');
const sampleNavs = db.prepare('SELECT * FROM navigation LIMIT 5').all();
sampleNavs.forEach(nav => {
  console.log(`  ID: ${nav.id}`);
  console.log(`    Group: ${nav.group_label_zh} → ${nav.name_zh}${nav.href ? ' (' + nav.href + ')' : ''}`);
  console.log(`    Description: ${nav.description_zh || '-'}`);
});

console.log('\n🎉 Ready to manage navigation in Admin backend!');
console.log('   Access: http://localhost:[admin-port]/login → "导航管理"\n');

db.close();
process.exit(0);
