import type { TranslateFn } from "@/i18n/types";

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

/** 路由与 href 结构；文案由 i18n `nav.groups.*` 提供 */
export const navGroupOrder = [
  {
    id: "ecosystem",
    primaryRoute: "/" as const,
    end: true as boolean,
    items: [
      { key: "matrix", href: "#ecosystem-matrix" },
      { key: "domains", href: "#domains" },
      { key: "join", href: "#final-cta" },
    ],
  },
  {
    id: "narrative",
    primaryRoute: "/narrative" as const,
    end: false as boolean,
    items: [
      { key: "scrollHero", href: "/narrative#narrative-hero" },
      { key: "voidMap", href: "/narrative#narrative-map" },
      { key: "threeConcepts", href: "/narrative#narrative-concepts" },
      { key: "lineage", href: "/narrative#narrative-lineage" },
    ],
  },
  {
    id: "timeline",
    primaryRoute: "/timeline" as const,
    end: false as boolean,
    items: [
      { key: "roadAhead", href: "/timeline#timeline-road" },
      { key: "manifesto", href: "/timeline#timeline-manifesto" },
    ],
  },
  {
    id: "nfts",
    primaryRoute: "/nfts" as const,
    end: false as boolean,
    items: [
      { key: "artifacts", href: "/nfts#nfts-artifacts" },
      { key: "minting", href: "/nfts#nfts-minting" },
    ],
  },
  {
    id: "partnership",
    primaryRoute: "/partnership" as const,
    end: false as boolean,
    items: [
      { key: "entry", href: "/partnership#partnership-hero" },
      { key: "modules", href: "/partnership#partnership-modules" },
      { key: "imperative", href: "/partnership#partnership-imperative" },
      { key: "form", href: "/partnership#partnership-form" },
    ],
  },
] as const;

export function buildNavGroups(t: TranslateFn): NavGroup[] {
  return navGroupOrder.map((g) => ({
    id: g.id,
    label: t(`nav.groups.${g.id}.label`),
    children: g.items.map((item) => ({
      label: t(`nav.groups.${g.id}.items.${item.key}.label`),
      href: item.href,
      description: t(`nav.groups.${g.id}.items.${item.key}.description`),
    })),
  }));
}

export type FooterLegalLink = {
  label: string;
  href: string;
};

export const footerLegalDefs: { key: string; href: string }[] = [
  { key: "terms", href: "#site-footer" },
  { key: "privacy", href: "#site-footer" },
  { key: "whitepaper", href: "#site-footer" },
  { key: "support", href: "#support" },
];

export function buildFooterLegalLinks(t: TranslateFn): FooterLegalLink[] {
  return footerLegalDefs.map((d) => ({
    label: t(`footer.legal.${d.key}`),
    href: d.href,
  }));
}

export function getNavPrimaryMeta(id: string): { to: "/" | "/narrative" | "/timeline" | "/nfts" | "/partnership"; end: boolean } | null {
  const g = navGroupOrder.find((x) => x.id === id);
  if (!g) return null;
  return { to: g.primaryRoute, end: g.end };
}
