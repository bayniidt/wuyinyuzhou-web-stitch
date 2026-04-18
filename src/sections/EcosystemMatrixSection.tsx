import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks";
import ScrollReveal from "@/components/motion/ScrollReveal";
import HexagonTile from "@/components/ui/HexagonTile";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLocale } from "@/i18n/LocaleProvider";
import { useMemo } from "react";

function IconArena() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M4 10 12 4l8 6v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

function IconBox() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M12 3 3 8v8l9 5 9-5V8l-9-5Z" />
      <path d="M3 8 12 13l9-5M12 13v8" />
    </svg>
  );
}

function IconSpark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2 9 9 2 12l7 3 3 7 3-7 7-3-7-3-3-7Z" opacity=".9" />
    </svg>
  );
}

function IconBook() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2V5Z" />
      <path d="M6 21h12v-2H6a2 2 0 1 1 0-4" />
    </svg>
  );
}

function IconWand() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="m15 4 5 5-8 8H7v-5l8-8Z" />
      <path d="m11 11 3 3M5 19l2-2" />
    </svg>
  );
}

function IconVault() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="3" y="7" width="18" height="14" rx="2" />
      <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 14h.01M12 14h.01M17 14h.01" />
    </svg>
  );
}

const tileKeys = ["arena", "artifacts", "spirits", "academy", "spells", "treasury"] as const;

export default function EcosystemMatrixSection() {
  const { t } = useLocale();
  const tiles = useMemo(
    () =>
      tileKeys.map((key) => ({
        key,
        label: t(`home.ecosystem.tiles.${key}`),
        icon:
          key === "arena" ? (
            <IconArena />
          ) : key === "artifacts" ? (
            <IconBox />
          ) : key === "spirits" ? (
            <IconSpark />
          ) : key === "academy" ? (
            <IconBook />
          ) : key === "spells" ? (
            <IconWand />
          ) : (
            <IconVault />
          ),
      })),
    [t],
  );

  return (
    <section id="ecosystem-matrix" className="relative overflow-hidden border-b border-white/5 bg-wuyin-surface/40 py-20 sm:py-28">
      <SectionGoldenBlocks variant={2} />
      <ScrollReveal className="relative z-10 container-wuyin">
        <SectionTitle
          eyebrow={t("home.ecosystem.eyebrow")}
          title={t("home.ecosystem.title")}
          subtitle={t("home.ecosystem.subtitle")}
        />
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-10 sm:mt-16 sm:grid-cols-3 sm:gap-x-10 md:gap-y-14">
          {tiles.map((tile) => (
            <HexagonTile key={tile.key} label={tile.label} icon={tile.icon} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
