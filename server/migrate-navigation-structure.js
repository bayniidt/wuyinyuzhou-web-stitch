const db = require('./db');
const fs = require('fs-extra');

console.log('🔄 Database migration for navigation table structure update...\n');

try {
  // Check if navigation table exists and has old structure
  const columnInfo = db.prepare("PRAGMA table_info(navigation)").all();
  const hasGroupId = columnInfo.some(col => col.name === 'group_id');
  
  console.log(`Current navigation table columns:`, columnInfo.map(c => c.name).join(', '));
  
  if (!hasGroupId) {
    console.log('\n✏️  Updating navigation table structure...\n');
    
    // Backup current data (if any)
    const existingData = db.prepare('SELECT * FROM navigation').all();
    
    // Create new table with correct structure
    db.exec(`
      CREATE TABLE IF NOT EXISTS navigation_new (
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
    
    // Copy data from old table to new table
    if (existingData.length > 0) {
      db.exec(`
        INSERT INTO navigation_new 
        (id, name_zh, name_en, href, display_order, parent_id, created_at, updated_at)
        SELECT id, name_zh, name_en, href, display_order, parent_id, created_at, updated_at
        FROM navigation
      `);
      console.log(`   Copied ${existingData.length} records to new structure`);
      
      // Drop old table and rename new one
      db.exec('DROP TABLE navigation');
      db.exec('ALTER TABLE navigation_new RENAME TO navigation');
      console.log('   ✅ Table structure updated successfully');
    } else {
      // Just drop and recreate if empty
      db.exec('DROP TABLE IF EXISTS navigation');
      db.exec(`
        CREATE TABLE navigation (
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
      console.log('   ✅ New table created with correct structure');
    }
    
  } else {
    console.log('\n✅ Navigation table already has correct structure');
  }
  
  console.log('\n🎉 Migration complete!\n');
  
} catch (err) {
  console.error('❌ Migration failed:', err.message);
  process.exit(1);
}

// Now run the sync script
require('./sync-navigation.js');
