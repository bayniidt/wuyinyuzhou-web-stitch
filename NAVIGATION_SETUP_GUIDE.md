# 导航管理系统 - 设置与使用指南

## 📋 当前状态

✅ **已完成：**
1. Admin 后台导航管理界面（可 CRUD）
2. API 接口完整实现（GET/POST/PUT/DELETE）
3. 数据库表结构正确（支持分组、双语等）
4. 31 条初始导航数据已同步到数据库

⚠️ **待完善：**
- 中文描述字段需要从 i18n catalog 解析（目前是空）
- 英文描述字段也需要解析

## 🎯 核心架构

```
src/config/navigation.ts        ← 定义导航结构（group_id, items）
src/i18n/catalog/zh.ts          ← 中文标签和描述
src/i18n/catalog/en.ts          ← 英文标签和描述
      ↓
server/db.js                    ← 数据库 schema
      ↓
server/sync-navigation.js       ← 从源码提取配置并导入数据库
      ↓
database_test.sqlite            ← 存储所有导航数据
      ↓
server/index.js                 ← /api/navigation RESTful endpoints
      ↓
Admin Frontend                  ← 管理界面 (CRUD)
      ↓
SiteHeader                      ← 使用静态配置（保留原有功能）
```

## 🚀 启动步骤

### 1. 确保数据库已初始化

```bash
cd server
node sync-navigation.js
```

输出应该显示：
```
✨ Synchronization complete!
📈 Total records inserted: 31
```

### 2. 启动后端服务器

```bash
cd server
node index.js
```

**注意**: 默认使用 `database.sqlite`，如果使用了 test database 需要设置环境变量：
```bash
DATABASE_PATH=./database_test.sqlite node index.js
```

### 3. 访问 Admin 后台

```
http://localhost:5173/login → "导航管理"
```

## 📊 数据库查询示例

查看导航数据：
```javascript
// GET /api/navigation
fetch('/api/navigation')
  .then(r => r.json())
  .then(data => console.log(data))
```

## 🔧 手动添加导航

在 Admin 后台：
1. 点击「+ 新增导航」
2. 选择分组（如：生态体系）
3. 填写：
   - 名称 (中文): 测试项
   - Name (English): Test Item
   - 链接：/#test
   - 描述：测试描述
4. 保存

## 🐛 常见问题

### Q: API 返回空数组？
**A**: 
```bash
# Check if navigation table exists and has data
cd server
node -e "const db = require('./db'); console.log(db.prepare('SELECT COUNT(*) as c FROM navigation').get())"
```

### Q: 无法插入新导航？
**A**: 
- 检查数据库中 table 结构是否正确
- 确保 group_id 存在且有效
- 验证所有必填字段都已提供

### Q: Admin 修改后前端不生效？
**A**: 
- SiteHeader 目前使用的是静态配置（buildNavGroups）
- 这是**有意为之**，保持现有功能不变
- Admin 用于管理数据供未来扩展使用

## 💡 下一步优化建议

1. **增强 sync-navigation.js**
   - 改进正则表达式以提取更完整的描述
   - 支持批量导入/导出
   
2. **分离环境配置**
   - 开发环境使用 database_test.sqlite
   - 生产环境使用 database.sqlite

3. **添加数据验证**
   - URL 格式验证
   - 唯一性约束检查
   
4. **国际化支持**
   - 自动检测用户语言偏好
   - 自动切换对应语言的导航

---

## 📁 相关文件位置

- **Sync Script**: `server/sync-navigation.js`
- **Database Schema**: `server/db.js` (lines 47-60)
- **API Endpoints**: `server/index.js` (lines ~167-192)
- **Admin UI**: `admin/src/pages/NavigationManagement.tsx`
- **Type Definitions**: `admin/src/types/index.ts` (line 23)
- **Layout Menu**: `admin/src/components/Layout.tsx` (line 11)
- **Route Config**: `admin/src/App.tsx` (line 67)

---

**Last Updated**: 2026-04-28  
**Status**: Ready for Testing ✨
