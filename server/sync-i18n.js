const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new Database(dbPath);

function flattenObject(obj, prefix = '') {
  let entries = [];
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      entries = entries.concat(flattenObject(obj[key], fullKey));
    } else {
      let value = obj[key];
      if (Array.isArray(value)) {
        value = JSON.stringify(value);
      }
      entries.push({ key: fullKey, value });
    }
  }
  return entries;
}

// Simple parser for the TS files (strips 'const zh = ', 'export default zh;', and types)
function parseTs(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/import type.*;/g, '');
  content = content.replace(/export type.*;/g, '');
  content = content.replace(/const \w+ = /, 'module.exports = ');
  content = content.replace(/export default \w+;/, '');
  
  const tempFile = path.resolve(__dirname, 'temp_i18n.js');
  fs.writeFileSync(tempFile, content);
  const data = require(tempFile);
  fs.unlinkSync(tempFile);
  // Clear cache for next require
  delete require.cache[require.resolve(tempFile)];
  return data;
}

const zhPath = path.resolve(__dirname, '../src/i18n/catalog/zh.ts');
const enPath = path.resolve(__dirname, '../src/i18n/catalog/en.ts');

const zhData = parseTs(zhPath);
const enData = parseTs(enPath);

const zhFlat = flattenObject(zhData);
const enFlat = flattenObject(enData);

const allKeys = new Set([...zhFlat.map(e => e.key), ...enFlat.map(e => e.key)]);

db.transaction(() => {
  const insert = db.prepare(`
    INSERT INTO site_content (key, value_zh, value_en, type, module)
    VALUES (?, ?, ?, ?, ?)
    ON CONFLICT(key) DO UPDATE SET
      value_zh = excluded.value_zh,
      value_en = excluded.value_en
  `);

  for (const key of allKeys) {
    const zhEntry = zhFlat.find(e => e.key === key);
    const enEntry = enFlat.find(e => e.key === key);
    
    const valZh = zhEntry ? (typeof zhEntry.value === 'string' ? zhEntry.value : JSON.stringify(zhEntry.value)) : '';
    const valEn = enEntry ? (typeof enEntry.value === 'string' ? enEntry.value : JSON.stringify(enEntry.value)) : '';
    
    // Determine type (media if it looks like a path or URL, but for now mostly text)
    const type = (valZh.includes('/') || valZh.includes('http')) ? 'media' : 'text';
    const module = key.split('.')[0];
    
    insert.run(key, valZh, valEn, type, module);
  }
})();

console.log(`Successfully synced ${allKeys.size} i18n keys to database.`);
