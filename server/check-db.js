const Database = require('better-sqlite3');
const db = new Database('database.sqlite');
const modules = db.prepare('SELECT DISTINCT module FROM site_content').all();
console.log('Available Modules:');
console.log(JSON.stringify(modules, null, 2));
const mediaCount = db.prepare("SELECT module, COUNT(*) as count FROM site_content WHERE type = 'media' GROUP BY module").all();
console.log('Media count per module:');
console.log(JSON.stringify(mediaCount, null, 2));
