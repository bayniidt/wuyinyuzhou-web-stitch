# 武印视界 (Wuyin World) 全模块实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 基于全模块设计文档，完成武印视界 5 个模块的代码开发、样式美化及交互增强，打造极致的东方武道沉浸式体验。

**Architecture:** 采用模块化 React 开发。首页负责引流，宇宙模块侧重叙事，视界模块负责转化，武印阁展示生态，合作入口对接 B 端。通过 `i18n` 统一管理文案，`Framer Motion` 处理动效。

**Tech Stack:** React 19, Tailwind CSS v4, Framer Motion, React Router 7.

---

### Task 1: 首页 (引力核) 增强实现

**Files:**
- Modify: `src/sections/HeroSection.tsx`
- Modify: `src/sections/ManifestoSection.tsx`
- Create: `src/components/home/Countdown.tsx`

- [ ] **Step 1: 实现 Hero 区视频背景与标题动效**
确保视频在全屏下自动播放，标题采用 Framer Motion 实现由下而上的渐现效果。

- [ ] **Step 2: 添加 2026 杭州首秀倒计时组件**
在 Hero 区 CTA 按钮上方集成倒计时组件。

- [ ] **Step 3: 实现武印宣言的水墨渐现动效**
利用 Framer Motion 的 `mask-image` 或 `opacity` 动画配合水墨背景纹理。

- [ ] **Step 4: 提交 Task 1**
```bash
git add src/sections/HeroSection.tsx src/sections/ManifestoSection.tsx src/components/home/Countdown.tsx
git commit -m "feat: home hero and manifesto enhancements with countdown"
```

---

### Task 2: 武印宇宙 (文化叙事) 核心交互

**Files:**
- Modify: `src/pages/NarrativePage.tsx`
- Create: `src/components/universe/SequenceMap.tsx`
- Create: `src/components/universe/CharacterCard.tsx`

- [ ] **Step 1: 实现 3D 序列帧地图组件**
编写 `SequenceMap` 组件，处理图片的预加载与基于滚动手势或进度的帧切换。

- [ ] **Step 2: 集成 SVG 交互热点**
在地图上叠加 SVG 层，定义各区域（如山河印）的热点，点击触发弹窗或故事线展开。

- [ ] **Step 3: 开发人物谱系卡牌组件**
实现极具质感的卡牌展示效果，支持翻转或悬停预览详情。

- [ ] **Step 4: 提交 Task 2**
```bash
git add src/pages/NarrativePage.tsx src/components/universe/SequenceMap.tsx src/components/universe/CharacterCard.tsx
git commit -m "feat: narrative page with 3D sequence map and character cards"
```

---

### Task 3: 武印视界 (赛事盛典) 转化逻辑

**Files:**
- Modify: `src/pages/TimelinePage.tsx`
- Create: `src/components/sight/VenueViewer.tsx`
- Create: `src/components/sight/FighterRoster.tsx`

- [ ] **Step 1: 实现 3D 场馆视角预览**
在“赛事总览”区块加入一个简易的场馆视角切换器。

- [ ] **Step 2: 开发武者阵容网格**
展示选手档案，集成 NFT 勋章的悬浮发光动效。

- [ ] **Step 3: 优化购票入口 UI**
为普通票/VIP 票/元宇宙席位设计差异化的视觉引导。

- [ ] **Step 4: 提交 Task 3**
```bash
git add src/pages/TimelinePage.tsx src/components/sight/VenueViewer.tsx src/components/sight/FighterRoster.tsx
git commit -m "feat: sight module with venue viewer and fighter roster"
```

---

### Task 4: 武印阁 (生态体系) 导图与业务

**Files:**
- Modify: `src/pages/PavilionPage.tsx`
- Create: `src/components/pavilion/SynergyMap.tsx`
- Create: `src/components/pavilion/LiveBoard.tsx`

- [ ] **Step 1: 实现六位一体导图 (SVG)**
使用 SVG 绘制六大公司联动图，通过 `hover` 状态改变路径颜色并显示职能描述。

- [ ] **Step 2: 开发数字科技实时看板**
模拟链上数据流动，使用 Framer Motion 实现数值滚动增长效果。

- [ ] **Step 3: 实现证书验真动画**
在“标准认证”部分添加极具仪式感的电子证书展开动效。

- [ ] **Step 4: 提交 Task 4**
```bash
git add src/pages/PavilionPage.tsx src/components/pavilion/SynergyMap.tsx src/components/pavilion/LiveBoard.tsx
git commit -m "feat: pavilion module with synergy map and live board"
```

---

### Task 5: 合作入口 (B端通道) 与全局优化

**Files:**
- Modify: `src/pages/PartnershipPage.tsx`
- Modify: `src/components/layout/SiteHeader.tsx`
- Create: `src/components/partners/PartnerLogos.tsx`

- [ ] **Step 1: 丰富各合作类型入口内容**
补充权益包、加盟政策等详情文案。

- [ ] **Step 2: 实现合作伙伴 Logo 墙**
横向无缝滚动展示合作伙伴 Logo。

- [ ] **Step 3: 优化全局导航 (SiteHeader)**
实现磨砂玻璃背景与动态显隐逻辑。

- [ ] **Step 4: 提交 Task 5**
```bash
git add src/pages/PartnershipPage.tsx src/components/layout/SiteHeader.tsx src/components/partners/PartnerLogos.tsx
git commit -m "feat: partnership portal and global navigation polish"
```

---

### Task 6: 验证与调优

- [ ] **Step 1: 检查各模块响应式表现**
- [ ] **Step 2: 优化序列帧加载性能**
- [ ] **Step 3: 全站链接与表单跳转测试**
