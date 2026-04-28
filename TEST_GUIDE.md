# 导航管理系统 - 快速测试指南

## 🚀 启动服务

### 1. 启动后端服务器
```bash
cd server
node index.js
```
等待看到："Server running on port 3001" 和 "Database initialized successfully."

### 2. 启动 Admin 后台（如果有）
```bash
cd admin
npm run dev
```

### 3. 启动主站前端
```bash
npm run dev
```

## 📋 测试步骤

### 第一步：验证数据库初始化
打开浏览器访问：http://localhost:3001/api/navigation

**预期结果**：应该返回 JSON 数组，包含 31 条导航数据，分为 5 个分组

**示例输出**：
```json
[
  {
    "id": 1,
    "group_id": "ecosystem",
    "group_label_zh": "生态体系",
    "group_label_en": "Ecosystem",
    "name_zh": "止戈为武",
    "name_en": "The Art of Peace",
    "href": "/#home-hero",
    "display_order": 1
  },
  ...
]
```

### 第二步：测试 Admin 管理界面
1. 访问 Admin 后台登录页：`http://localhost:5173/login`（或你的端口）
2. 使用管理员手机号登录
3. 点击左侧菜单「🧭 导航管理」
4. 应该看到 5 个分组列表，每个分组下有对应的导航项

### 第三步：在 Admin 中编辑导航
1. 点击任意导航项的「编辑」按钮
2. 修改中英文名称或描述
3. 调整「排序顺序」（数字越小越靠前）
4. 点击「保存」

### 第四步：验证前端显示
1. 刷新主站首页
2. 观察顶部导航是否已更新
3. 切换中英文语言，检查对应语言的导航内容

### 第五步：新增导航测试
1. 在 Admin 导航管理页面，点击「+ 新增导航」
2. 选择分组（如：生态体系）
3. 填写：
   - 名称 (中文): 测试导航
   - Name (English): Test Navigation
   - 链接：/#test
   - 描述：这是一个测试导航项
4. 保存后查看是否出现在列表中

### 第六步：删除导航测试
1. 找到刚才创建的测试导航
2. 点击「删除」按钮
3. 确认删除
4. 验证导航已从列表中消失

## 🔍 常见问题排查

### Q: API 返回空数组
**A**: 
```bash
# 检查数据库是否初始化
cd server
sqlite3 database.sqlite
SELECT COUNT(*) FROM navigation;
```
如果返回 0，需要重新启动服务重新初始化

### Q: Admin 无法加载导航
**A**: 
- 检查后端服务是否运行
- 检查浏览器 Console 是否有 CORS 错误
- 确保 `/api/navigation` 路由存在

### Q: 前端显示旧数据
**A**: 
- 硬刷新浏览器（Ctrl+Shift+R 或 Cmd+Shift+R）
- 清除浏览器缓存
- 检查 Network 标签看 API 是否成功

### Q: 双语切换不生效
**A**: 
- 检查 locale provider 是否正确工作
- 在 useNavigation hook 中打印 locale 值
- 确认数据库中同时有 zh/en 字段

## 🎯 验收标准

- [ ] 数据库中有完整的 31 条导航数据
- [ ] API `/api/navigation` 返回正确格式的 JSON
- [ ] Admin 后台可以查看、编辑、新增、删除导航
- [ ] 前端 SiteHeader 正确显示动态导航
- [ ] 中英文切换时导航内容同步变化
- [ ] 修改后立即在前端生效
- [ ] API 故障时有备用静态数据展示

## 📊 性能指标

理想情况下：
- 首次加载：< 500ms
- 语言切换：< 100ms  
- Admin 操作响应：< 200ms

## 🛠️ 调试工具

### 查看实时数据流
```javascript
// 在浏览器 Console 运行
fetch('/api/navigation').then(r => r.json()).then(console.log)
```

### 监控 React Component
```javascript
// 在 SiteHeader 中添加
console.log('Navigation groups:', dynamicNavGroups);
```

---

完成以上测试后，导航管理系统即可正常投入使用！
