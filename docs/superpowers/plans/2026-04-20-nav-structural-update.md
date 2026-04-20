# 导航与模块结构更新实施计划 (方案 B)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 根据用户需求，全面更新网站的导航结构、子模块名称以及路由路径。将 `/nfts` 路由重命名为 `/pavilion`（武印阁），并更新所有相关的内部键值（keys）和语义化锚点（anchors）。

**Architecture:** 采用“方案 B”：同步更新 `navigation.ts` 配置、i18n 翻译文件以及 React 路由系统。通过语义化的 ID 和路径提升代码的可维护性。

**Tech Stack:** React 19, React Router 7, i18next (custom provider).

---

### Task 1: 更新导航配置文件

**Files:**
- Modify: [navigation.ts](file:///Users/cc/Repository/wuyinyuzhou-web-stitch/src/config/navigation.ts)

- [ ] **Step 1: 修改 `navGroupOrder` 的结构和路径**
将 `nfts` 组重命名为 `pavilion`，并将 `primaryRoute` 修改为 `/pavilion`。同时更新各组下的 `items` 的 `key` 和 `href` 以匹配语义化锚点。

```typescript
export const navGroupOrder = [
  {
    id: "ecosystem",
    primaryRoute: "/" as const,
    end: true as boolean,
    items: [
      { key: "hero", href: "/#home-hero" },
      { key: "manifesto", href: "/#home-manifesto" },
      { key: "values", href: "/#home-values" },
      { key: "matrix", href: "/#home-matrix" },
      { key: "news", href: "/#home-news" },
      { key: "questions", href: "/#home-questions" },
    ],
  },
  {
    id: "narrative",
    primaryRoute: "/narrative" as const,
    end: false as boolean,
    items: [
      { key: "map", href: "/narrative#narrative-map" },
      { key: "philosophy", href: "/narrative#narrative-philosophy" },
      { key: "lineage", href: "/narrative#narrative-lineage" },
      { key: "heritage", href: "/narrative#narrative-heritage" },
      { key: "inheritance", href: "/narrative#narrative-inheritance" },
    ],
  },
  {
    id: "timeline",
    primaryRoute: "/timeline" as const,
    end: false as boolean,
    items: [
      { key: "overview", href: "/timeline#timeline-overview" },
      { key: "theater", href: "/timeline#timeline-theater" },
      { key: "roster", href: "/timeline#timeline-roster" },
      { key: "mecha", href: "/timeline#timeline-mecha" },
      { key: "fashion", href: "/timeline#timeline-fashion" },
      { key: "history", href: "/timeline#timeline-history" },
    ],
  },
  {
    id: "pavilion",
    primaryRoute: "/pavilion" as const,
    end: false as boolean,
    items: [
      { key: "synergy", href: "/pavilion#pavilion-synergy" },
      { key: "ip", href: "/pavilion#pavilion-ip" },
      { key: "alliance", href: "/pavilion#pavilion-alliance" },
      { key: "digital", href: "/pavilion#pavilion-digital" },
      { key: "standard", href: "/pavilion#pavilion-standard" },
      { key: "media", href: "/pavilion#pavilion-media" },
      { key: "tourism", href: "/pavilion#pavilion-tourism" },
    ],
  },
  {
    id: "partnership",
    primaryRoute: "/partnership" as const,
    end: false as boolean,
    items: [
      { key: "brand", href: "/partnership#partnership-brand" },
      { key: "event", href: "/partnership#partnership-event" },
      { key: "club", href: "/partnership#partnership-club" },
      { key: "gov", href: "/partnership#partnership-gov" },
      { key: "invest", href: "/partnership#partnership-invest" },
      { key: "media", href: "/partnership#partnership-media" },
      { key: "form", href: "/partnership#partnership-form" },
    ],
  },
] as const;
```

- [ ] **Step 2: 提交更改**
```bash
git add src/config/navigation.ts
git commit -m "refactor: update navigation structure and rename nfts to pavilion"
```

---

### Task 2: 更新中文翻译文件

**Files:**
- Modify: [zh.ts](file:///Users/cc/Repository/wuyinyuzhou-web-stitch/src/i18n/catalog/zh.ts)

- [ ] **Step 1: 重构 `nav.groups` 对象**
根据用户提供的内容更新标签和描述。

```typescript
// src/i18n/catalog/zh.ts 中的 nav.groups 部分
groups: {
  ecosystem: {
    label: "首页",
    items: {
      hero: { label: "Hero区", description: "主标题与预约入口" },
      manifesto: { label: "武印宣言", description: "品牌核心主张" },
      values: { label: "三大价值入口", description: "文化、科技与金融" },
      matrix: { label: "六大生态矩阵", description: "武印阁、武印盟、功夫印等" },
      news: { label: "最新动态", description: "赛事预告与媒体报道" },
      questions: { label: "武印之问", description: "见自己、见众生、见天地" },
    },
  },
  narrative: {
    label: "武印宇宙",
    items: {
      map: { label: "宇宙地图", description: "3D交互世界地图" },
      philosophy: { label: "哲学根基", description: "止、戈、印哲学阐释" },
      lineage: { label: "人物谱系", description: "历代宗师与虚拟守护灵" },
      heritage: { label: "非遗融合", description: "龙泉剑、丝绸与武印表达" },
      inheritance: { label: "薪火相传", description: "少年武者与现代格斗" },
    },
  },
  timeline: {
    label: "武印视界",
    items: {
      overview: { label: "赛事总览", description: "购票与2026杭州首秀" },
      theater: { label: "仪式感剧场", description: "天罡三十六阶与盟誓环节" },
      roster: { label: "武者阵容", description: "参赛选手档案与战绩" },
      mecha: { label: "机甲拳王", description: "机器人参赛与人机对抗" },
      fashion: { label: "非遗走秀", description: "国潮战袍与设计师访谈" },
      history: { label: "往期回顾", description: "过往赛事高光时刻" },
    },
  },
  pavilion: {
    label: "武印阁",
    items: {
      synergy: { label: "六位一体导图", description: "六大公司联动交互图示" },
      ip: { label: "武印阁IP运营", description: "品牌中枢与全球资产管理" },
      alliance: { label: "武印盟赛事管理", description: "职业赛事矩阵与联盟规则" },
      digital: { label: "功夫印数字科技", description: "NFT、RWA与元宇宙引擎" },
      standard: { label: "武印标准认证", description: "武者、裁判与俱乐部认证" },
      media: { label: "武印传媒", description: "内容生态与全媒体矩阵" },
      tourism: { label: "印承天下文旅", description: "线下旗舰与文旅综合体" },
    },
  },
  partnership: {
    label: "合作入口",
    items: {
      brand: { label: "品牌合作", description: "赞助商与联名品牌" },
      event: { label: "赛事合作", description: "赛事承办与赋能方案" },
      club: { label: "俱乐部加盟", description: "城市分盟政策与加盟流程" },
      gov: { label: "政府/文旅", description: "城市名片打造与文旅联动" },
      invest: { label: "投资机构", description: "商业计划书与融资对接" },
      media: { label: "媒体合作", description: "KOL与内容共创" },
      form: { label: "合作申请表", description: "全类型表单提交" },
    },
  },
},
```

- [ ] **Step 2: 提交更改**
```bash
git add src/i18n/catalog/zh.ts
git commit -m "i18n: update chinese navigation labels and descriptions"
```

---

### Task 3: 更新英文翻译文件

**Files:**
- Modify: [en.ts](file:///Users/cc/Repository/wuyinyuzhou-web-stitch/src/i18n/catalog/en.ts)

- [ ] **Step 1: 重构 `nav.groups` 对象以匹配 `zh.ts`**
(使用对应的英文术语)

```typescript
// src/i18n/catalog/en.ts
groups: {
  ecosystem: {
    label: "Home",
    items: {
      hero: { label: "Hero Zone", description: "Main titles and bookings" },
      manifesto: { label: "Wuyin Manifesto", description: "Core brand values" },
      values: { label: "Value Pillars", description: "Culture, Tech, Finance" },
      matrix: { label: "Ecosystem Matrix", description: "Wuyin Pavilion, Alliance, etc." },
      news: { label: "Latest Updates", description: "Announcements and reports" },
      questions: { label: "Wuyin Inquiry", description: "Self, World, Universe" },
    },
  },
  // ... 其他组以此类推，确保键名与 zh.ts 一致
  pavilion: {
    label: "Wuyin Pavilion",
    items: {
      synergy: { label: "Synergy Map", description: "Interactive ecosystem diagram" },
      ip: { label: "IP Operations", description: "Global asset management" },
      alliance: { label: "Alliance Management", description: "League rules and calendar" },
      digital: { label: "Digital Tech", description: "NFT, RWA and Metaverse" },
      standard: { label: "Standardization", description: "Certification system" },
      media: { label: "Media Ecosystem", description: "Content and distribution" },
      tourism: { label: "Tourism & Travel", description: "Offline flagships" },
    },
  },
}
```

- [ ] **Step 2: 提交更改**
```bash
git add src/i18n/catalog/en.ts
git commit -m "i18n: update english navigation labels and descriptions"
```

---

### Task 4: 路由重命名与组件迁移

**Files:**
- Rename: `src/pages/NftsPage.tsx` -> [PavilionPage.tsx](file:///Users/cc/Repository/wuyinyuzhou-web-stitch/src/pages/PavilionPage.tsx)
- Modify: [App.tsx](file:///Users/cc/Repository/wuyinyuzhou-web-stitch/src/App.tsx)

- [ ] **Step 1: 重命名页面文件**
将 `src/pages/NftsPage.tsx` 重命名为 `src/pages/PavilionPage.tsx`，并更新其内部组件名称。

- [ ] **Step 2: 更新 `App.tsx` 中的路由**
修改路径为 `/pavilion` 并引入新组件。

```typescript
// src/App.tsx
import PavilionPage from "@/pages/PavilionPage";
// ...
<Route path="pavilion" element={<PavilionPage />} />
```

- [ ] **Step 3: 提交更改**
```bash
git add src/pages/PavilionPage.tsx src/App.tsx
git commit -m "feat: rename nfts route to pavilion and update component"
```

---

### Task 5: 更新组件内部锚点 ID

**Files:**
- Modify: [HeroSection.tsx](file:///Users/cc/Repository/wuyinyuzhou-web-stitch/src/sections/HeroSection.tsx)
- Modify: [ManifestoSection.tsx](file:///Users/cc/Repository/wuyinyuzhou-web-stitch/src/sections/ManifestoSection.tsx)
- Modify: [DomainCardsSection.tsx](file:///Users/cc/Repository/wuyinyuzhou-web-stitch/src/sections/DomainCardsSection.tsx)
- Modify: [EcosystemMatrixSection.tsx](file:///Users/cc/Repository/wuyinyuzhou-web-stitch/src/sections/EcosystemMatrixSection.tsx)
- Modify: [NewsTeaserSection.tsx](file:///Users/cc/Repository/wuyinyuzhou-web-stitch/src/sections/NewsTeaserSection.tsx)

- [ ] **Step 1: 更新首页各区块的 `id`**
例如将 `id="hero"` 改为 `id="home-hero"`，以匹配 `navigation.ts` 中的 `href`。

- [ ] **Step 2: 提交更改**
```bash
git add src/sections/*.tsx
git commit -m "style: update section IDs to match new navigation anchors"
```

---

### Task 6: 验证

- [ ] **Step 1: 检查控制台是否有 Link 报错**
- [ ] **Step 2: 手动测试各导航菜单点击后的锚点跳转和路由切换**
