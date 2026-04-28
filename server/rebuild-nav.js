const db = require('./db');

console.log('🗑️  Clearing existing navigation data...\n');

// Delete all navigation records
const deletedCount = db.prepare('DELETE FROM navigation').run();
console.log(`✅ Deleted ${deletedCount.changes} records`);

console.log('\n💾 Running sync-navigation.js...\n');
require('./sync-navigation');
