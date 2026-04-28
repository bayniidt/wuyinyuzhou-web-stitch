const fs = require('fs');
const path = require('path');

function unflatten(data, lang) {
  const result = {};
  data.forEach(item => {
    const value = lang === 'zh' ? item.value_zh : item.value_en;
    const keys = item.key.split('.');
    let current = result;
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      if (i === keys.length - 1) {
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
  return result;
}

function writeTsFile(filePath, data, varName) {
  const json = JSON.stringify(data, null, 2);
  // Simple conversion to TS: add const and export
  // Also handle the backticks or quotes if needed, but stringify handles most
  const content = `const ${varName} = ${json};

export type MessageTree = typeof ${varName};
export default ${varName};
`;
  fs.writeFileSync(filePath, content, 'utf-8');
}

function syncDbToTs(db) {
  const content = db.prepare('SELECT * FROM site_content').all();
  
  const zhData = unflatten(content, 'zh');
  const enData = unflatten(content, 'en');
  
  const zhPath = path.resolve(__dirname, '../../src/i18n/catalog/zh.ts');
  const enPath = path.resolve(__dirname, '../../src/i18n/catalog/en.ts');
  
  writeTsFile(zhPath, zhData, 'zh');
  writeTsFile(enPath, enData, 'en');
  
  console.log('Successfully synced DB back to TS files.');
}

module.exports = { syncDbToTs };
