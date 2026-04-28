const Database = require('better-sqlite3');
const path = require('path');

// Use a separate test database file
const dbPath = process.env.DATABASE_PATH || path.resolve(__dirname, 'database_test.sqlite');
const db = new Database(dbPath);

console.log('🔧 Creating navigation table with correct structure...\n');

db.exec(`
  CREATE TABLE IF NOT EXISTS navigation (
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

console.log('✅ Table created successfully!\n');
console.log('Columns:', db.prepare("PRAGMA table_info(navigation)").all().map(c => c.name).join(', '), '\n');

// Test insert
const insertStmt = db.prepare(`
  INSERT INTO navigation (group_id, group_label_zh, group_label_en, name_zh, name_en, href, description_zh, description_en, display_order, parent_id) 
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

insertStmt.run('ecosystem', '生态体系', 'Ecosystem', '止戈为武', 'The Art of Peace', '/#home-hero', '东方武道元宇宙盛典', '', 1, 0);

console.log('Test record inserted!');

const count = db.prepare('SELECT COUNT(*) as count FROM navigation').get();
console.log(`Total records: ${count.count}\n`);

console.log('Sample data:');
const sample = db.prepare('SELECT * FROM navigation LIMIT 1').get();
console.log(JSON.stringify(sample, null, 2));

console.log('\n✨ Ready to use!\n');
db.close();
