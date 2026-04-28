const Database = require('better-sqlite3');
const path = require('path');

// Use test database
const dbPath = process.env.NAV_DB_PATH || path.join(__dirname, 'database_test.sqlite');
const db = new Database(dbPath);

console.log('📁 Using database:', dbPath);
console.log('🔄 Seeding navigation data from static configuration...\n');

// Navigation data extracted from src/i18n/catalog/zh.ts and en.ts
const navigationData = [
  // Ecosystem (生态体系)
  { group_id: 'ecosystem', group_label_zh: '生态体系', group_label_en: 'Ecosystem', name_zh: '止戈为武', name_en: 'Zhi Ge as Martial', href: '/#home-hero', description_zh: '东方武道元宇宙盛典', description_en: 'Oriental Metaverse Ceremony' },
  { group_id: 'ecosystem', group_label_zh: '生态体系', group_label_en: 'Ecosystem', name_zh: '武印宣言', name_en: 'Manifesto', href: '/#home-manifesto', description_zh: '传递武道核心精神', description_en: 'Core Spirit of Martial Arts' },
  { group_id: 'ecosystem', group_label_zh: '生态体系', group_label_en: 'Ecosystem', name_zh: '战略价值', name_en: 'Strategic Value', href: '/#home-values', description_zh: '文化、技术与金融的融合', description_en: 'Culture, Tech & Finance' },
  { group_id: 'ecosystem', group_label_zh: '生态体系', group_label_en: 'Ecosystem', name_zh: '生态矩阵', name_en: 'Matrix', href: '/#home-matrix', description_zh: '六大业务板块深度联动', description_en: 'Deep Ecosystem Linkage' },
  { group_id: 'ecosystem', group_label_zh: '生态体系', group_label_en: 'Ecosystem', name_zh: '最新动态', name_en: 'Updates', href: '/#home-news', description_zh: '实时掌握项目进展', description_en: 'Real-time Project Progress' },
  { group_id: 'ecosystem', group_label_zh: '生态体系', group_label_en: 'Ecosystem', name_zh: '常见问题', name_en: 'FAQ', href: '/#home-questions', description_zh: '为您答疑解惑', description_en: 'Help & Support' },
  
  // Universe (武印宇宙)
  { group_id: 'narrative', group_label_zh: '武印宇宙', group_label_en: 'Universe', name_zh: '宇宙地图', name_en: 'Universe Map', href: '/narrative#narrative-map', description_zh: '探索 3D 互动秘境', description_en: 'Explore 3D Interactive Realms' },
  { group_id: 'narrative', group_label_zh: '武印宇宙', group_label_en: 'Universe', name_zh: '哲学根基', name_en: 'Philosophy', href: '/narrative#narrative-philosophy', description_zh: '武圣山文脉与止戈哲学', description_en: 'Wusheng Lineage & Zhi Ge' },
  { group_id: 'narrative', group_label_zh: '武印宇宙', group_label_en: 'Universe', name_zh: '人物谱系', name_en: 'Lineage', href: '/narrative#narrative-lineage', description_zh: '一脉相承，万印归宗', description_en: 'Three Millennia of Tradition' },
  { group_id: 'narrative', group_label_zh: '武印宇宙', group_label_en: 'Universe', name_zh: '寻源非遗', name_en: 'Heritage', href: '/narrative#narrative-heritage', description_zh: '溯源武道与文化融合', description_en: 'Tracing & Cultural Fusion' },
  { group_id: 'narrative', group_label_zh: '武印宇宙', group_label_en: 'Universe', name_zh: '薪火相传', name_en: 'Inheritance', href: '/narrative#narrative-inheritance', description_zh: '让武德成为向上的力量', description_en: 'Martial Virtue as Power' },
  
  // Sight (武印视界)
  { group_id: 'timeline', group_label_zh: '武印视界', group_label_en: 'Sight', name_zh: '场馆预览', name_en: 'Venue Preview', href: '/timeline#timeline-overview', description_zh: '2026 杭州首秀剧场', description_en: '2026 Hangzhou Debut Theater' },
  { group_id: 'timeline', group_label_zh: '武印视界', group_label_en: 'Sight', name_zh: '数字剧场', name_en: 'Digital Theater', href: '/timeline#timeline-theater', description_zh: '全息影像与视觉盛典', description_en: 'Holographic Visual Spectacle' },
  { group_id: 'timeline', group_label_zh: '武印视界', group_label_en: 'Sight', name_zh: '对话矩阵', name_en: 'Dialogue Matrix', href: '/timeline#timeline-roster', description_zh: '跨界名师深度访谈', description_en: 'Master Interviews' },
  { group_id: 'timeline', group_label_zh: '武印视界', group_label_en: 'Sight', name_zh: '机甲武道', name_en: 'Mecha Martial', href: '/timeline#timeline-mecha', description_zh: '传统与未来的视觉碰撞', description_en: 'Tradition Meets Future' },
  { group_id: 'timeline', group_label_zh: '武印视界', group_label_en: 'Sight', name_zh: '东方美学', name_en: 'Aesthetics', href: '/timeline#timeline-fashion', description_zh: '武道时尚与非遗穿搭', description_en: 'Martial Fashion & Heritage' },
  { group_id: 'timeline', group_label_zh: '武印视界', group_label_en: 'Sight', name_zh: '往期回顾', name_en: 'Highlights', href: '/timeline#timeline-history', description_zh: '历届赛季高光瞬间', description_en: 'Past Season Moments' },
  
  // Pavilion (武印阁)
  { group_id: 'pavilion', group_label_zh: '武印阁', group_label_en: 'Pavilion', name_zh: '生态导图', name_en: 'Synergy Map', href: '/pavilion#pavilion-synergy', description_zh: '六位一体产业闭环', description_en: 'Industrial Loop' },
  { group_id: 'pavilion', group_label_zh: '武印阁', group_label_en: 'Pavilion', name_zh: '品牌 IP', name_en: 'Brand IP', href: '/pavilion#pavilion-ip', description_zh: '全球资产授权管理', description_en: 'Global Asset Licensing' },
  { group_id: 'pavilion', group_label_zh: '武印阁', group_label_en: 'Pavilion', name_zh: '武印盟', name_en: 'Alliance', href: '/pavilion#pavilion-alliance', description_zh: '俱乐部加盟与选手通道', description_en: 'Clubs & Athletes' },
  { group_id: 'pavilion', group_label_zh: '武印阁', group_label_en: 'Pavilion', name_zh: '功夫印', name_en: 'Kung Fu Yin', href: '/pavilion#pavilion-digital', description_zh: '链上数据与 RWA 估值', description_en: 'On-chain Data & RWA' },
  { group_id: 'pavilion', group_label_zh: '武印阁', group_label_en: 'Pavilion', name_zh: '武印标准', name_en: 'Standard', href: '/pavilion#pavilion-standard', description_zh: '证书验真与权威认证', description_en: 'Cert & Authority' },
  { group_id: 'pavilion', group_label_zh: '武印阁', group_label_en: 'Pavilion', name_zh: '武印传媒', name_en: 'Media', href: '/pavilion#pavilion-media', description_zh: '沉浸式内容生态运营', description_en: 'Immersive Content Ops' },
  { group_id: 'pavilion', group_label_zh: '武印阁', group_label_en: 'Pavilion', name_zh: '印承天下', name_en: 'Tourism', href: '/pavilion#pavilion-tourism', description_zh: '文旅联动与线下开发', description_en: 'Offline Development' },
  
  // Partnership (合作入口)
  { group_id: 'partnership', group_label_zh: '合作入口', group_label_en: 'Partnership', name_zh: '品牌合作', name_en: 'Brand', href: '/partnership#partnership-brand', description_zh: '联名与赞助商权益', description_en: 'Co-branding & Sponsors' },
  { group_id: 'partnership', group_label_zh: '合作入口', group_label_en: 'Partnership', name_zh: '赛事合作', name_en: 'Event', href: '/partnership#partnership-event', description_zh: '承办赋能与标准输出', description_en: 'Hosting & Standards' },
  { group_id: 'partnership', group_label_zh: '合作入口', group_label_en: 'Partnership', name_zh: '俱乐部加盟', name_en: 'Club', href: '/partnership#partnership-club', description_zh: '城市分盟政策支持', description_en: 'Franchise Policies' },
  { group_id: 'partnership', group_label_zh: '合作入口', group_label_en: 'Partnership', name_zh: '政企文旅', name_en: 'Gov & Tourism', href: '/partnership#partnership-gov', description_zh: '城市名片与综合体开发', description_en: 'City Branding' },
  { group_id: 'partnership', group_label_zh: '合作入口', group_label_en: 'Partnership', name_zh: '投资机构', name_en: 'Investment', href: '/partnership#partnership-invest', description_zh: 'BP 下载与融资对接', description_en: 'BP & Financing' },
  { group_id: 'partnership', group_label_zh: '合作入口', group_label_en: 'Partnership', name_zh: '媒体矩阵', name_en: 'Media Matrix', href: '/partnership#partnership-media', description_zh: '内容共创与 KOL 对接', description_en: 'Content Co-creation' },
  { group_id: 'partnership', group_label_zh: '合作入口', group_label_en: 'Partnership', name_zh: '申请入口', name_en: 'Application', href: '/partnership#partnership-form', description_zh: '在线提交合作意向', description_en: 'Submit Online' },
];

console.log(`📊 Total records to insert: ${navigationData.length}\n`);

// Check and create table structure
console.log('🔧 Checking/updating navigation table structure...');
const columnInfo = db.prepare("PRAGMA table_info(navigation)").all();
const hasGroupId = columnInfo.some(col => col.name === 'group_id');

if (!hasGroupId) {
  console.log('   Creating new table with correct structure...\n');
  
  // Create new table directly
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
  console.log('   ✅ Table structure created\n');
} else {
  console.log('   ✅ Table already has correct structure\n');
  // Clear existing data
  db.prepare('DELETE FROM navigation').run();
  console.log('   🗑️ Cleared existing navigation data\n');
}

// Insert data
console.log('💾 Inserting navigation data...\n');

const insertStmt = db.prepare(`
  INSERT INTO navigation (
    group_id, group_label_zh, group_label_en,
    name_zh, name_en, href,
    description_zh, description_en,
    display_order, parent_id
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

let totalInserted = 0;

db.transaction(() => {
  // Group items by group_id for ordering
  const grouped = {};
  navigationData.forEach(item => {
    if (!grouped[item.group_id]) {
      grouped[item.group_id] = [];
    }
    grouped[item.group_id].push(item);
  });
  
  let itemCounter = 0;
  Object.keys(grouped).forEach(groupId => {
    grouped[groupId].forEach((item, idx) => {
      try {
        insertStmt.run(
          item.group_id,
          item.group_label_zh,
          item.group_label_en,
          item.name_zh,
          item.name_en,
          item.href,
          item.description_zh,
          item.description_en,
          ++itemCounter,
          0
        );
        totalInserted++;
      } catch (err) {
        console.error(`   ❌ Error inserting:`, err.message);
      }
    });
  });
})();

console.log(`\n✨ Synchronization complete!`);
console.log(`📈 Total records inserted: ${totalInserted}`);

// Verify
const finalCount = db.prepare('SELECT COUNT(*) as count FROM navigation').get().count;
console.log(`📝 Final count: ${finalCount} records`);

// Show sample
console.log('\n📄 Sample data:');
const sampleNavs = db.prepare(`
  SELECT n.*, 
         GROUP_CONCAT(DISTINCT g.group_label_zh) as group_name
  FROM navigation n
  LEFT JOIN (
    SELECT DISTINCT group_id, group_label_zh, group_label_en
    FROM navigation
  ) g ON n.group_id = g.group_id
  ORDER BY n.display_order LIMIT 5
`).all();

sampleNavs.forEach(nav => {
  console.log(`  ID: ${nav.id}, Group: ${nav.group_label_zh}`);
  console.log(`    → ${nav.name_zh}${nav.href ? ' (' + nav.href + ')' : ''}`);
  console.log(`    CN: ${nav.description_zh || '-'}`);
  console.log(`    EN: ${nav.description_en || '-'}`);
  console.log();
});

console.log('🎉 Ready to use!\n');
db.close();
process.exit(0);
