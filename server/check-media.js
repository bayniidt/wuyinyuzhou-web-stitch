const Database = require('better-sqlite3');
const db = new Database('database.sqlite');
const media = db.prepare("SELECT key, value_zh, module FROM site_content WHERE type = 'media'").all();
console.log(JSON.stringify(media, null, 2));
