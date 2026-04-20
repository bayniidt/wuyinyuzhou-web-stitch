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

export function getNavPrimaryMeta(
  id: string,
): { to: "/" | "/narrative" | "/timeline" | "/pavilion" | "/partnership"; end: boolean } | null {
  const g = navGroupOrder.find((x) => x.id === id);
  if (!g) return null;
  return { to: g.primaryRoute, end: g.end };
}
