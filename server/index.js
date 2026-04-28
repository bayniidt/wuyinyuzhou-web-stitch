const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const db = require('./db');
const { syncDbToTs } = require('./utils/i18n-writer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Multer Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'public/uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Upload Endpoint
app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  const url = `http://localhost:3001/uploads/${req.file.filename}`;
  res.json({ url });
});

// Site Content Endpoints
app.get('/api/content', (req, res) => {
  const { module } = req.query;
  console.log('[API] GET /api/content, module:', module === undefined ? 'ALL' : `"${module}"`);
  
  if (module !== undefined) {
    const content = db.prepare('SELECT * FROM site_content WHERE module = ? ORDER BY key ASC').all(module);
    return res.json(content);
  }
  const content = db.prepare('SELECT * FROM site_content ORDER BY module ASC, key ASC').all();
  res.json(content);
});

app.put('/api/content/:id', (req, res) => {
  const { id } = req.params;
  const { value_zh, value_en, type, module } = req.body;

  // Check if we need to delete an old file
  if (type === 'media') {
    const oldItem = db.prepare('SELECT value_zh, value_en FROM site_content WHERE id = ?').get(id);
    const deleteOldFile = (url) => {
      if (url && url.includes('http://localhost:3001/uploads/')) {
        const filename = url.split('/').pop();
        const filePath = path.join(__dirname, 'public/uploads', filename);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
    };
    
    // If the value changed, delete the old one
    if (oldItem.value_zh !== value_zh) deleteOldFile(oldItem.value_zh);
    if (oldItem.value_en !== value_en) deleteOldFile(oldItem.value_en);
  }

  const update = db.prepare(`
    UPDATE site_content 
    SET value_zh = ?, value_en = ?, type = ?, module = ?
    WHERE id = ?
  `);
  update.run(value_zh, value_en, type, module, id);
  
  // Sync back to TS files
  syncDbToTs(db);
  
  res.json({ success: true });
});

app.get('/api/translations/:lang', (req, res) => {
  const { lang } = req.params;
  const content = db.prepare('SELECT key, value_zh, value_en FROM site_content').all();
  
  const translations = {};
  content.forEach(item => {
    const value = lang === 'zh' ? item.value_zh : item.value_en;
    // Build nested object from dot notation
    const keys = item.key.split('.');
    let current = translations;
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      if (i === keys.length - 1) {
        // Handle JSON strings (arrays)
        try {
          if (value.startsWith('[') || value.startsWith('{')) {
            current[k] = JSON.parse(value);
          } else {
            current[k] = value;
          }
        } catch (e) {
          current[k] = value;
        }
      } else {
        current[k] = current[k] || {};
        current = current[k];
      }
    }
  });
  res.json(translations);
});

// Navigation Endpoints
app.get('/api/navigation', (req, res) => {
  const navs = db.prepare('SELECT * FROM navigation ORDER BY group_id ASC, display_order ASC').all();
  res.json(navs);
});

app.post('/api/navigation', (req, res) => {
  const { 
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
  } = req.body;
  
  const insert = db.prepare(`
    INSERT INTO navigation (
      group_id, group_label_zh, group_label_en, name_zh, name_en, href,
      description_zh, description_en, display_order, parent_id
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  const result = insert.run(
    group_id, group_label_zh, group_label_en, name_zh, name_en, href,
    description_zh, description_en, display_order || 0, parent_id || 0
  );
  res.json({ id: result.lastInsertRowid });
});

app.put('/api/navigation/:id', (req, res) => {
  const { id } = req.params;
  const { 
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
  } = req.body;
  
  const update = db.prepare(`
    UPDATE navigation SET 
      group_id = ?, group_label_zh = ?, group_label_en = ?, 
      name_zh = ?, name_en = ?, href = ?, description_zh = ?, 
      description_en = ?, display_order = ?, parent_id = ?,
      updated_at = CURRENT_TIMESTAMP 
    WHERE id = ?
  `);
  update.run(
    group_id, group_label_zh, group_label_en, name_zh, name_en, href,
    description_zh, description_en, display_order || 0, parent_id || 0, id
  );
  res.json({ success: true });
});

app.delete('/api/navigation/:id', (req, res) => {
  const { id } = req.params;
  db.prepare('DELETE FROM navigation WHERE id = ?').run(id);
  res.json({ success: true });
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const { phone } = req.body;
  if (!phone) {
    return res.status(400).json({ error: '手机号不能为空' });
  }
  const member = db.prepare('SELECT id, name, phone, is_super_admin FROM members WHERE phone = ?').get(phone);
  if (!member) {
    return res.status(401).json({ error: '手机号未注册' });
  }
  res.json({ success: true, member: { id: member.id, name: member.name, phone: member.phone, is_super_admin: member.is_super_admin } });
});

// Auto-sync from TS to DB on startup if empty
const contentCount = db.prepare('SELECT COUNT(*) as count FROM site_content').get();
if (contentCount.count === 0) {
  console.log('Database empty, performing initial sync from TS files...');
  try {
    const { execSync } = require('child_process');
    execSync('node sync-i18n.js', { cwd: __dirname });
    console.log('Initial sync complete.');
  } catch (err) {
    console.error('Initial sync failed:', err);
  }
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
