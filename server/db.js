const Database = require('better-sqlite3');
const path = require('path');

const dbPath = process.env.DATABASE_PATH || path.resolve(__dirname, 'database.sqlite');
const db = new Database(dbPath);

// Initialize tables
db.exec(`
  CREATE TABLE IF NOT EXISTS site_content (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    key TEXT UNIQUE,
    value_zh TEXT,
    value_en TEXT,
    type TEXT DEFAULT 'text',
    module TEXT
  );

  CREATE TABLE IF NOT EXISTS news (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    title_zh TEXT,
    title_en TEXT,
    desc_zh TEXT,
    desc_en TEXT,
    image_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text_zh TEXT,
    text_en TEXT,
    display_order INTEGER DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS gateways (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title_zh TEXT,
    title_en TEXT,
    sub_zh TEXT,
    sub_en TEXT,
    image_url TEXT,
    href TEXT,
    display_order INTEGER DEFAULT 0
  );

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
  );

  CREATE TABLE IF NOT EXISTS contact_info (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT, -- 'phone', 'email', 'address'
    value TEXT,
    label_zh TEXT,
    label_en TEXT
  );

  CREATE TABLE IF NOT EXISTS members (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT UNIQUE NOT NULL,
    is_super_admin INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS contact_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    role TEXT NOT NULL,
    role_label_zh TEXT NOT NULL,
    role_label_en TEXT NOT NULL,
    submitter_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    company_or_org TEXT,
    region TEXT,
    summary TEXT,
    details_json TEXT NOT NULL,
    status TEXT DEFAULT 'pending',
    admin_note TEXT DEFAULT '',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS partnership_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    company TEXT NOT NULL,
    contact TEXT NOT NULL,
    intent TEXT NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'pending',
    admin_note TEXT DEFAULT '',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

const insertContact = db.prepare('INSERT INTO contact_info (type, value, label_zh, label_en) VALUES (?, ?, ?, ?)');
const contactExists = db.prepare('SELECT COUNT(*) as count FROM contact_info').get();
if (contactExists.count === 0) {
  insertContact.run('phone', '17858452245', '联系电话', 'Phone');
  insertContact.run('email', 'contact@wuyinworld.com', '电子邮箱', 'Email');
}

// Seed super admin if not exists
const adminCount = db.prepare("SELECT COUNT(*) as count FROM members WHERE phone = '17858452245'").get();
if (adminCount.count === 0) {
  db.prepare("INSERT INTO members (name, phone, is_super_admin) VALUES (?, ?, ?)").run('超级管理员', '17858452245', 1);
}

console.log('Database initialized successfully.');

module.exports = db;
