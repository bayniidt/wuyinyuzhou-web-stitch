import imgCoverShadowGale from "@/images/page4 (2).png";
import imgCoverIronFist from "@/images/page4 (1).png";
import imgCoverVoidStep from "@/images/page4 (3).png";
import imgCoverDragonBreath from "@/images/page4 (4).png";
import ScrollReveal from "@/components/motion/ScrollReveal";
import imgForgeStill from "@/images/page4 (5).png";
import forgeAmbienceMp4 from "@/videos/15236622_1920_1080_30fps.mp4";
import { useLocale } from "@/i18n/LocaleProvider";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { useMemo, useState } from "react";

type RarityEnum = "LEGENDARY" | "RARE" | "COMMON";
type FilterId = "all" | "legendary" | "rare" | "common";

type Artifact = {
  id: string;
  title: string;
  rarityEnum: RarityEnum;
  rarityLabel: string;
  status: string;
  statusAccent: boolean;
  coverSrc: string;
  coverAlt: string;
};

const filterIds: FilterId[] = ["all", "legendary", "rare", "common"];

const artifactDefs = [
  {
    id: "#402",
    rarityEnum: "LEGENDARY" as const,
    statusKey: "mastery" as const,
    artifactKey: "shadow" as const,
    statusAccent: true,
    coverSrc: imgCoverShadowGale,
  },
  {
    id: "#192",
    rarityEnum: "RARE" as const,
    statusKey: "stored" as const,
    artifactKey: "iron" as const,
    statusAccent: false,
    coverSrc: imgCoverIronFist,
  },
  {
    id: "#831",
    rarityEnum: "COMMON" as const,
    statusKey: "available" as const,
    artifactKey: "void" as const,
    statusAccent: false,
    coverSrc: imgCoverVoidStep,
  },
  {
    id: "#03",
    rarityEnum: "LEGENDARY" as const,
    statusKey: "locked" as const,
    artifactKey: "dragon" as const,
    statusAccent: true,
    coverSrc: imgCoverDragonBreath,
  },
];

function IconSearch({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4.2-4.2" strokeLinecap="round" />
    </svg>
  );
}

function IconMedalPink({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <circle cx="12" cy="9" r="5" fill="#f0a0a8" />
      <path d="M8 14l4 8 4-8M10 14h4" stroke="#f0a0a8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconDiamondOutline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M12 5l7 7-7 7-7-7z" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function IconShieldFeatured({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 56" className={className} aria-hidden>
      <path
        d="M24 4L6 12v14c0 12 8 20 18 24 10-4 18-12 18-24V12L24 4z"
        fill="#f0a0a8"
        stroke="#f8b8c0"
        strokeWidth="0.5"
      />
    </svg>
  );
}

function IconShieldCheck({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M12 3L5 6v6c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6l-7-3z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconExternalLink({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M14 4h6v6M10 14L20 4M8 6H5v14h14v-3"
        stroke="#ff8a8a"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MintingForgeBackdrop() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <>
      <img
        src={imgForgeStill}
        alt=""
        className={[
          "absolute inset-0 h-full w-full object-cover",
          reducedMotion ? "opacity-35" : "opacity-[0.22]",
        ].join(" ")}
        decoding="async"
        aria-hidden
      />
      {!reducedMotion ? (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-[0.32]"
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          poster={imgForgeStill}
          aria-hidden
        >
          <source src={forgeAmbienceMp4} type="video/mp4" />
        </video>
      ) : null}
    </>
  );
}

function rarityMatchesFilter(r: RarityEnum, f: FilterId): boolean {
  if (f === "all") return true;
  if (f === "legendary") return r === "LEGENDARY";
  if (f === "rare") return r === "RARE";
  if (f === "common") return r === "COMMON";
  return true;
}

export default function NftsPage() {
  const reducedMotion = usePrefersReducedMotion();
  const { t } = useLocale();
  const [artifactFilter, setArtifactFilter] = useState<FilterId>("all");

  const artifacts = useMemo(
    (): Artifact[] =>
      artifactDefs.map((d) => ({
        id: d.id,
        title: t(`nfts.artifacts.${d.artifactKey}.title`),
        rarityEnum: d.rarityEnum,
        rarityLabel: t(`nfts.rarity.${d.rarityEnum}`),
        status: t(`nfts.status.${d.statusKey}`),
        statusAccent: d.statusAccent,
        coverSrc: d.coverSrc,
        coverAlt: t(`nfts.artifacts.${d.artifactKey}.alt`),
      })),
    [t],
  );

  const grades = useMemo(
    () =>
      [
        { id: "g1", tier: t("nfts.grades.g1.tier"), nft: t("nfts.grades.g1.nft"), strength: t("nfts.grades.g1.strength"), price: t("nfts.grades.g1.price"), variant: "default" as const },
        { id: "g2", tier: t("nfts.grades.g2.tier"), nft: t("nfts.grades.g2.nft"), strength: t("nfts.grades.g2.strength"), price: t("nfts.grades.g2.price"), variant: "default" as const },
        { id: "g3", tier: t("nfts.grades.g3.tier"), nft: t("nfts.grades.g3.nft"), strength: t("nfts.grades.g3.strength"), price: t("nfts.grades.g3.price"), variant: "accentTier" as const },
        { id: "g4", tier: t("nfts.grades.g4.tier"), nft: t("nfts.grades.g4.nft"), strength: t("nfts.grades.g4.strength"), price: t("nfts.grades.g4.price"), variant: "legendary" as const },
      ] as const,
    [t],
  );

  const visibleArtifacts = useMemo(
    () => artifacts.filter((item) => rarityMatchesFilter(item.rarityEnum, artifactFilter)),
    [artifacts, artifactFilter],
  );

  return (
    <div id="nfts" className="container-wuyin space-y-8 py-8 sm:space-y-10 sm:py-10">
      <section className="bg-[#070707] px-2 py-6 sm:px-3 sm:py-8">
        <ScrollReveal
          variant="upGlow"
          className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end wuyin-reveal-tech"
          visibleClassName="wuyin-reveal-tech-visible"
          staggerChildren
          staggerStepMs={90}
        >
          <div className="space-y-5">
            <p className="inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.34em] text-[#e5b3b3]">
              <span className="inline-block h-px w-10 bg-[#ff8e8e]" />
              {t("nfts.portfolioKicker")}
            </p>
            <h1 className="font-serif text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl">
              {t("nfts.titleBefore")} <span className="font-semibold italic text-[#ff9a9a]">{t("nfts.titleAccent")}</span>
            </h1>
            <p className="max-w-2xl text-xl leading-10 text-neutral-200 sm:text-[1.7rem] sm:leading-[3.2rem]">{t("nfts.lead")}</p>
          </div>

          <aside className="w-full max-w-[260px] border border-white/10 bg-[#202020] p-5 shadow-[0_18px_32px_rgba(0,0,0,0.45)]">
            <div className="border-l-2 border-[#ff8d8d] pl-4">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-neutral-300">{t("nfts.tvlLabel")}</p>
              <p className="mt-1 font-serif text-5xl leading-none text-white">12.84 ETH</p>
              <p className="mt-3 text-xs tracking-[0.16em] text-neutral-500">{t("nfts.tvlSub")}</p>
            </div>
          </aside>
        </ScrollReveal>
      </section>

      <section id="nfts-artifacts" className="space-y-5">
        <ScrollReveal variant="upSoft" delayMs={60} className="wuyin-reveal-tech" visibleClassName="wuyin-reveal-tech-visible">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch sm:justify-between sm:gap-6">
            <div
              className="flex flex-wrap gap-1 border-b border-white/10 pb-px sm:flex-nowrap sm:gap-0"
              role="tablist"
              aria-label={t("nfts.filtersAria")}
            >
              {filterIds.map((fid) => {
                const active = artifactFilter === fid;
                const labelKey = fid === "all" ? "all" : fid;
                return (
                  <button
                    key={fid}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setArtifactFilter(fid)}
                    className={[
                      "rounded-t px-3 py-2.5 text-[11px] font-semibold tracking-[0.14em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8080] sm:px-4",
                      active
                        ? "relative text-white after:absolute after:inset-x-2 after:bottom-0 after:h-0.5 after:bg-[#ff4d4d] sm:after:inset-x-3"
                        : "bg-[#1a1a1a] text-neutral-500 hover:text-neutral-300",
                    ].join(" ")}
                  >
                    {t(`nfts.filters.${labelKey}`)}
                  </button>
                );
              })}
            </div>
            <label className="relative shrink-0 sm:w-[min(100%,280px)]">
              <span className="sr-only">{t("nfts.searchAria")}</span>
              <IconSearch className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
              <input
                type="search"
                placeholder={t("nfts.searchPlaceholder")}
                className="w-full rounded border border-white/20 bg-[#0c0c0c] py-2.5 pl-10 pr-3 text-sm text-neutral-200 placeholder:text-neutral-500 focus:border-white/35 focus:outline-none"
              />
            </label>
          </div>
        </ScrollReveal>

        <ScrollReveal
          variant="upSoft"
          delayMs={120}
          className="wuyin-reveal-tech"
          visibleClassName="wuyin-reveal-tech-visible"
          staggerChildren
          staggerStepMs={65}
        >
          <div
            key={artifactFilter}
            className={["grid gap-4 sm:grid-cols-2 lg:grid-cols-4", reducedMotion ? "" : "wuyin-animate-grid-reflow"].join(" ")}
          >
            {visibleArtifacts.map((item) => (
              <article key={item.id} className="group overflow-hidden rounded-lg border border-white/10 bg-[#141414] shadow-sm">
                <div className="relative aspect-square overflow-hidden bg-[#0a0a0a]">
                  <img
                    src={item.coverSrc}
                    alt={item.coverAlt}
                    width={800}
                    height={800}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-black/20" aria-hidden />
                  <span
                    className={[
                      "absolute right-2 top-2 bg-black/55 px-2 py-0.5 text-[9px] font-semibold tracking-[0.12em] text-white backdrop-blur-sm",
                      item.rarityEnum === "LEGENDARY"
                        ? ["border border-[#ff4d4d]/50", reducedMotion ? "" : "wuyin-animate-glow-pulse rounded-sm"].join(" ")
                        : "border border-white/15",
                    ].join(" ")}
                  >
                    {item.rarityLabel}
                  </span>
                </div>
                <div className="border-t border-white/5 bg-[#1a1a1a] px-3 pb-3 pt-3">
                  <h2 className="font-serif text-base font-bold text-white">
                    {item.title} {item.id}
                  </h2>
                  <p className="mt-2 flex items-center gap-2 text-[10px] font-medium tracking-[0.18em] text-neutral-500">
                    <span
                      className={[
                        "inline-block size-1.5 shrink-0 rounded-full",
                        item.statusAccent ? "bg-[#ff4d4d]" : "bg-neutral-400",
                      ].join(" ")}
                      aria-hidden
                    />
                    {item.status}
                  </p>
                  <button
                    type="button"
                    className="mt-4 w-full rounded border border-white/25 bg-transparent py-2.5 text-[11px] font-semibold tracking-[0.16em] text-white transition hover:border-white/40 hover:bg-white/[0.03]"
                  >
                    {t("nfts.viewDetails")}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section
        id="nfts-achievements"
        className="grid gap-4 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:items-stretch lg:gap-5"
      >
        <ScrollReveal variant="leftSoft" delayMs={80} className="wuyin-reveal-tech" visibleClassName="wuyin-reveal-tech-visible" staggerChildren staggerStepMs={80}>
          <article className="flex h-full flex-col rounded-lg border border-white/[0.08] bg-[#1a1a1a] p-6 sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#e8a8b0]">{t("nfts.achievementsKicker")}</p>
            <h3 className="mt-3 font-serif text-3xl leading-[1.15] text-white sm:text-[2rem]">{t("nfts.achievementsTitle")}</h3>
            <p className="mt-4 max-w-md text-sm font-sans leading-[1.7] text-white/90">{t("nfts.achievementsBody")}</p>
            <ul className="mt-8 flex flex-col gap-2.5">
              <li className="flex items-center gap-3 rounded-lg bg-[#252525] px-4 py-3.5">
                <IconMedalPink className="h-8 w-8 shrink-0" />
                <span className="min-w-0 flex-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">{t("nfts.achPioneer")}</span>
                <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-500">
                  {t("nfts.rank")} 1
                </span>
              </li>
              <li className="flex items-center gap-3 rounded-lg bg-[#252525] px-4 py-3.5">
                <IconDiamondOutline className="h-7 w-7 shrink-0 text-[#e8e8e8]" />
                <span className="min-w-0 flex-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">{t("nfts.achMaster")}</span>
                <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-500">
                  {t("nfts.rank")} 12
                </span>
              </li>
            </ul>
          </article>
        </ScrollReveal>

        <ScrollReveal variant="rightSoft" delayMs={120} className="wuyin-reveal-tech" visibleClassName="wuyin-reveal-tech-visible" staggerChildren staggerStepMs={80}>
          <article
            className="relative flex min-h-[340px] flex-col items-center justify-center overflow-hidden rounded-lg border border-white/[0.08] px-6 py-12 sm:min-h-[380px] sm:py-16"
            style={{
              background:
                "radial-gradient(ellipse 75% 55% at 50% 42%, rgba(240, 160, 168, 0.14) 0%, rgba(240, 160, 168, 0.04) 38%, transparent 62%), #161616",
            }}
          >
            <div className="relative flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">
              <div
                className="absolute inset-0 m-auto h-[12.5rem] w-[12.5rem] border border-[#f0a8b0]/80 sm:h-[14rem] sm:w-[14rem]"
                style={{ transform: "rotate(45deg)" }}
                aria-hidden
              />
              <div className="relative flex h-[7.25rem] w-[7.25rem] items-center justify-center border border-[#f0a8b0] bg-[#161616] sm:h-32 sm:w-32">
                <IconShieldFeatured className="h-[4.25rem] w-[3.75rem] sm:h-[4.5rem] sm:w-16" />
              </div>
            </div>
            <p className="mt-10 text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-[#e8a8b0]">{t("nfts.featuredKicker")}</p>
            <p className="mt-3 max-w-lg px-2 text-center font-serif text-lg italic leading-snug text-white sm:text-xl">{t("nfts.featuredLine")}</p>
          </article>
        </ScrollReveal>
      </section>

      <section id="nfts-grade" className="space-y-5">
        <ScrollReveal variant="upSoft" delayMs={90} className="wuyin-reveal-tech" visibleClassName="wuyin-reveal-tech-visible">
          <h2 className="font-serif text-3xl text-white md:text-[2rem] pb-[40px]" aria-label={t("nfts.gradeTitle")}>
            <span className="border-b-2 border-[#f0a0a8] pb-0.5">{t("nfts.gradeTitleAccent")}</span>
            <span>{t("nfts.gradeTitleRest")}</span>
          </h2>
          <div className="overflow-x-auto rounded-lg border border-white/10 bg-[#0a0a0a] wuyin-reveal-tech-panel">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-[#060606]">
                  <th className="px-5 py-4 text-[10px] font-semibold tracking-[0.2em] text-[#e8a8b0]">{t("nfts.thLevel")}</th>
                  <th className="px-5 py-4 text-[10px] font-semibold tracking-[0.2em] text-[#e8a8b0]">{t("nfts.thPower")}</th>
                  <th className="px-5 py-4 text-[10px] font-semibold tracking-[0.2em] text-[#e8a8b0]">{t("nfts.thBoost")}</th>
                  <th className="px-5 py-4 text-[10px] font-semibold tracking-[0.2em] text-[#e8a8b0]">{t("nfts.thPrivilege")}</th>
                </tr>
              </thead>
              <tbody className="font-sans text-white">
                {grades.map((row) => (
                  <tr
                    key={row.id}
                    className={[
                      "border-b border-white/10 last:border-b-0",
                      row.variant === "legendary" ? "bg-[#241216]" : "",
                    ].join(" ")}
                  >
                    <td
                      className={[
                        "px-5 py-4 font-serif text-base",
                        row.variant === "accentTier" || row.variant === "legendary" ? "text-[#f0a0a8]" : "text-white",
                      ].join(" ")}
                    >
                      {row.tier}
                    </td>
                    <td className="px-5 py-4">{row.nft}</td>
                    <td className="px-5 py-4">{row.strength}</td>
                    <td className="px-5 py-4">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </section>

      <section id="nfts-minting" className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a]">
        <ScrollReveal variant="upGlow" delayMs={120} className="wuyin-reveal-tech" visibleClassName="wuyin-reveal-tech-visible" staggerChildren staggerStepMs={90}>
          <div className="relative min-h-[min(52vh,28rem)] sm:min-h-[32rem]">
            <div className="absolute inset-0 bg-[#060606]" aria-hidden />
            <div className="absolute inset-0 bg-linear-to-t from-orange-950/45 via-neutral-950/40 to-neutral-900/90" aria-hidden />
            <div className="absolute bottom-0 left-1/2 h-48 w-[120%] -translate-x-1/2 bg-linear-to-t from-orange-600/25 to-transparent blur-3xl" aria-hidden />
            <MintingForgeBackdrop />

            <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-14 text-center sm:py-20">
              <p className="text-[10px] font-semibold tracking-[0.38em] text-white">{t("nfts.minting.kicker")}</p>
              <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl md:text-[3.25rem] md:leading-tight">{t("nfts.minting.title")}</h2>
              <button
                type="button"
                className="mt-8 rounded-sm bg-linear-to-r from-[#ffd6de] via-[#ff9aaa] to-[#d94d4d] px-10 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-black shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition hover:brightness-105"
              >
                {t("nfts.minting.cta")}
              </button>
              <div className="mt-10 flex items-stretch justify-center gap-0">
                <div className="px-6 text-center sm:px-10">
                  <span className="block font-serif text-3xl font-semibold text-white sm:text-4xl">4,209</span>
                  <span className="mt-1.5 block text-[10px] font-medium tracking-[0.22em] text-white">{t("nfts.minting.forged")}</span>
                </div>
                <div className="w-px shrink-0 bg-white/35" aria-hidden />
                <div className="px-6 text-center sm:px-10">
                  <span className="block font-serif text-3xl font-semibold text-white sm:text-4xl">12h 45m</span>
                  <span className="mt-1.5 block text-[10px] font-medium tracking-[0.22em] text-white">{t("nfts.minting.nextBatch")}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 bg-[#151515]">
            <div className="flex flex-col gap-6 border-l-4 border-[#ff7b8b] py-6 pl-5 pr-5 sm:flex-row sm:items-center sm:gap-6 sm:py-8 sm:pl-6 sm:pr-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-black ring-1 ring-white/15">
                <IconShieldCheck className="h-6 w-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-serif text-lg font-semibold text-white sm:text-xl">{t("nfts.minting.proofTitle")}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/90">{t("nfts.minting.proofBody")}</p>
              </div>
              <div className="flex shrink-0 flex-col gap-2 border border-white/10 bg-black/70 px-4 py-3 sm:min-w-[220px]">
                <p className="text-[9px] font-semibold tracking-[0.2em] text-white">{t("nfts.minting.contractLabel")}</p>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-sm text-white">0x7fC7...d581</span>
                  <a
                    href="#nfts-minting"
                    className="shrink-0 rounded p-1 text-[#ff8a8a] transition hover:bg-white/10"
                    aria-label={t("nfts.minting.explorerAria")}
                  >
                    <IconExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
