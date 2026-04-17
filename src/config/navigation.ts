export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  id: string;
  label: string;
  children: NavChild[];
};

/** 顶栏与页脚「站点地图」共用的一级分组（51Aes 式：一级 + 下拉子锚点） */
export const navGroups: NavGroup[] = [
  {
    id: "ecosystem",
    label: "Ecosystem",
    children: [
      {
        label: "Ecosystem Matrix",
        href: "#ecosystem-matrix",
        description: "数字疆域六大支柱",
      },
      {
        label: "Domains",
        href: "#domains",
        description: "文化 · 技术 · 金融",
      },
      { label: "Join Ecosystem", href: "#final-cta", description: "底部召集" },
    ],
  },
  {
    id: "narrative",
    label: "Narrative",
    children: [
      { label: "卷轴首屏", href: "/narrative#narrative-hero", description: "The Scroll of Wuyin" },
      { label: "虚空制图", href: "/narrative#narrative-map", description: "Cartography of the Void" },
      { label: "武道三念", href: "/narrative#narrative-concepts", description: "Zhi · Ge · Yin" },
      { label: "刃之谱系", href: "/narrative#narrative-lineage", description: "Lineage of the Blade" },
    ],
  },
  {
    id: "timeline",
    label: "Timeline",
    children: [
      { label: "Road Ahead", href: "/timeline#timeline-road", description: "里程碑与路线" },
      { label: "Manifesto", href: "/timeline#timeline-manifesto", description: "叙事延展" },
    ],
  },
  {
    id: "nfts",
    label: "NFTs",
    children: [
      { label: "Artifacts", href: "/nfts#nfts-artifacts", description: "数字藏品入口" },
      { label: "Minting", href: "/nfts#nfts-minting", description: "进入锻造工坊" },
    ],
  },
];

export type FooterLegalLink = {
  label: string;
  href: string;
};

export const footerLegalLinks: FooterLegalLink[] = [
  { label: "Terms of Service", href: "#site-footer" },
  { label: "Privacy Protocol", href: "#site-footer" },
  { label: "Whitepaper", href: "#site-footer" },
  { label: "Support", href: "#support" },
];
