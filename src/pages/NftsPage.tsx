import imgCoverShadowGale from "@/images/page4 (2).png";
import imgCoverIronFist from "@/images/page4 (1).png";
import imgCoverVoidStep from "@/images/page4 (3).png";
import imgCoverDragonBreath from "@/images/page4 (4).png";
import ScrollReveal from "@/components/motion/ScrollReveal";
import imgForgeStill from "@/images/page4 (5).png";
import forgeAmbienceMp4 from "@/videos/15236622_1920_1080_30fps.mp4";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { useState } from "react";

type Artifact = {
  id: string;
  title: string;
  rarityBadge: string;
  status: string;
  /** 红点强调 vs 白/灰点 */
  statusAccent: boolean;
  coverSrc: string;
  coverAlt: string;
};

const artifactFilters = [
  { id: "all", label: "ALL DISCIPLINES" },
  { id: "legendary", label: "LEGENDARY" },
  { id: "rare", label: "RARE" },
  { id: "common", label: "COMMON" },
] as const;

const artifacts: Artifact[] = [
  {
    id: "#402",
    title: "Shadow Gale",
    rarityBadge: "LEGENDARY",
    status: "ACTIVE MASTERY",
    statusAccent: true,
    coverSrc: imgCoverShadowGale,
    coverAlt: "Shadow Gale 藏品封面氛围",
  },
  {
    id: "#192",
    title: "Iron Fist",
    rarityBadge: "RARE",
    status: "STORED IN DOJO",
    statusAccent: false,
    coverSrc: imgCoverIronFist,
    coverAlt: "Iron Fist 藏品封面氛围",
  },
  {
    id: "#831",
    title: "Void Step",
    rarityBadge: "COMMON",
    status: "AVAILABLE",
    statusAccent: false,
    coverSrc: imgCoverVoidStep,
    coverAlt: "Void Step 藏品封面氛围",
  },
  {
    id: "#03",
    title: "Dragon Breath",
    rarityBadge: "LEGENDARY",
    status: "LOCKED FOR VOTING",
    statusAccent: true,
    coverSrc: imgCoverDragonBreath,
    coverAlt: "Dragon Breath 藏品封面氛围",
  },
];

const grades = [
  { tier: "Common (0-20)", nft: "1.0x Base", strength: "Standard", price: "None" },
  { tier: "Rare (21-40)", nft: "1.6x Relic", strength: "1.2x Value", price: "20% Discount" },
  { tier: "Epic (41-80)", nft: "2.3x Invicta", strength: "2.0x Value", price: "Early Access" },
  { tier: "Legendary (81+)", nft: "3.0x Ethereal", strength: "Infinite Value", price: "Zero-Fee + Airdrops" },
];

function IconSearch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4.2-4.2" strokeLinecap="round" />
    </svg>
  );
}

/** 成就列表左侧小图标：粉勋章 */
function IconMedalPink({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <circle cx="12" cy="9" r="5" fill="#f0a0a8" />
      <path
        d="M8 14l4 8 4-8M10 14h4"
        stroke="#f0a0a8"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** 成就列表左侧小图标：白菱形轮廓 */
function IconDiamondOutline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M12 5l7 7-7 7-7-7z" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

/** 右侧 featured 盾牌（纯色占位，贴近设计稿） */
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

/** 底部信息条：盾牌 + 对勾 */
function IconShieldCheck({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M12 3L5 6v6c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6l-7-3z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

export default function NftsPage() {
  const reducedMotion = usePrefersReducedMotion();
  const [artifactFilter, setArtifactFilter] =
    useState<(typeof artifactFilters)[number]["id"]>("all");

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
              DIGITAL ASSETS PORTFOLIO
            </p>
            <h1 className="font-serif text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl">
              Kung Fu <span className="font-semibold italic text-[#ff9a9a]">Yin</span>
            </h1>
            <p className="max-w-2xl text-xl leading-10 text-neutral-200 sm:text-[1.7rem] sm:leading-[3.2rem]">
              Your collection of encrypted martial disciplines. Each Yin is a
              cryptographic vessel of ancient kinetic wisdom, anchored on the
              immutable scroll.
            </p>
          </div>

          <aside className="w-full max-w-[260px] border border-white/10 bg-[#202020] p-5 shadow-[0_18px_32px_rgba(0,0,0,0.45)]">
            <div className="border-l-2 border-[#ff8d8d] pl-4">
              <p className="text-[10px] font-semibold tracking-[0.2em] text-neutral-300">
                TOTAL VALUE LOCKED
              </p>
              <p className="mt-1 font-serif text-5xl leading-none text-white">12.84 ETH</p>
              <p className="mt-3 text-xs tracking-[0.16em] text-neutral-500">∞x 0x88...F2A1</p>
            </div>
          </aside>
        </ScrollReveal>
      </section>

      <section id="nfts-artifacts" className="space-y-5">
        <ScrollReveal
          variant="upSoft"
          delayMs={60}
          className="wuyin-reveal-tech"
          visibleClassName="wuyin-reveal-tech-visible"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch sm:justify-between sm:gap-6">
          <div
            className="flex flex-wrap gap-1 border-b border-white/10 pb-px sm:flex-nowrap sm:gap-0"
            role="tablist"
            aria-label="藏品筛选"
          >
            {artifactFilters.map((tab) => {
              const active = artifactFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setArtifactFilter(tab.id)}
                  className={[
                    "rounded-t px-3 py-2.5 text-[11px] font-semibold tracking-[0.14em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8080] sm:px-4",
                    active
                      ? "relative text-white after:absolute after:inset-x-2 after:bottom-0 after:h-0.5 after:bg-[#ff4d4d] sm:after:inset-x-3"
                      : "bg-[#1a1a1a] text-neutral-500 hover:text-neutral-300",
                  ].join(" ")}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <label className="relative shrink-0 sm:w-[min(100%,280px)]">
            <span className="sr-only">搜索资产</span>
            <IconSearch className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
            <input
              type="search"
              placeholder="Search Assets.."
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
            className={[
              "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
              reducedMotion ? "" : "wuyin-animate-grid-reflow",
            ].join(" ")}
          >
          {artifacts.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-lg border border-white/10 bg-[#141414] shadow-sm"
            >
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
                <div
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-black/20"
                  aria-hidden
                />
                <span
                  className={[
                    "absolute right-2 top-2 bg-black/55 px-2 py-0.5 text-[9px] font-semibold tracking-[0.12em] text-white backdrop-blur-sm",
                    item.rarityBadge === "LEGENDARY"
                      ? [
                          "border border-[#ff4d4d]/50",
                          reducedMotion ? "" : "wuyin-animate-glow-pulse rounded-sm",
                        ].join(" ")
                      : "border border-white/15",
                  ].join(" ")}
                >
                  {item.rarityBadge}
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
                  VIEW DETAILS
                </button>
              </div>
            </article>
          ))}
          </div>
        </ScrollReveal>
      </section>

      <section
        id="nfts-achievements"
        className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-stretch"
      >
        <ScrollReveal
          variant="leftSoft"
          delayMs={80}
          className="wuyin-reveal-tech"
          visibleClassName="wuyin-reveal-tech-visible"
          staggerChildren
          staggerStepMs={80}
        >
        <article className="rounded-lg border border-white/10 bg-[#161616] p-6 sm:p-8">
          <p className="text-[10px] font-semibold tracking-[0.32em] text-[#e8a8b0]">ACHIEVEMENTS</p>
          <h3 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-[2rem]">
            Digital Medals of Honor
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-400">
            Non-transferable soulbound tokens awarded for combat excellence and system contribution.
          </p>
          <ul className="mt-8 space-y-2">
            <li className="flex items-center gap-3 rounded border border-white/10 bg-[#111] px-3 py-3">
              <IconMedalPink className="h-8 w-8 shrink-0" />
              <span className="flex-1 text-xs font-semibold tracking-[0.2em] text-white">
                SYSTEM PIONEER
              </span>
              <span className="text-[10px] tracking-[0.14em] text-neutral-500">RANK 1</span>
            </li>
            <li className="flex items-center gap-3 rounded border border-white/10 bg-[#111] px-3 py-3">
              <IconDiamondOutline className="h-7 w-7 shrink-0 text-neutral-300" />
              <span className="flex-1 text-xs font-semibold tracking-[0.2em] text-white">
                GRAND MASTER
              </span>
              <span className="text-[10px] tracking-[0.14em] text-neutral-500">RANK 12</span>
            </li>
          </ul>
        </article>
        </ScrollReveal>

        <ScrollReveal
          variant="rightSoft"
          delayMs={120}
          className="wuyin-reveal-tech"
          visibleClassName="wuyin-reveal-tech-visible"
          staggerChildren
          staggerStepMs={80}
        >
        <article className="flex min-h-[320px] flex-col items-center justify-center rounded-lg border border-white/10 bg-[#0c0c0c] px-6 py-10 sm:py-14">
          <div className="relative flex h-52 w-52 items-center justify-center sm:h-60 sm:w-60">
            <div
              className="absolute inset-0 m-auto h-[11.5rem] w-[11.5rem] border border-[#f0a8b0]/75 sm:h-[13rem] sm:w-[13rem]"
              style={{ transform: "rotate(45deg)" }}
              aria-hidden
            />
            <div className="relative flex h-28 w-28 items-center justify-center border border-[#f0a8b0]/90 bg-[#0c0c0c] sm:h-32 sm:w-32">
              <IconShieldFeatured className="h-16 w-14 sm:h-[4.25rem] sm:w-[3.75rem]" />
            </div>
          </div>
          <p className="mt-8 text-center text-[10px] font-semibold tracking-[0.35em] text-[#e8a8b0]">
            RONIN&apos;S VALOR
          </p>
          <p className="mt-3 max-w-md text-center font-serif text-lg italic leading-snug text-white sm:text-xl">
            Awarded for 365 Days of Continuous Training
          </p>
        </article>
        </ScrollReveal>
      </section>

      <section id="nfts-grade" className="space-y-3">
        <ScrollReveal
          variant="upSoft"
          delayMs={90}
          className="wuyin-reveal-tech"
          visibleClassName="wuyin-reveal-tech-visible"
        >
          <h2 className="font-serif text-3xl text-white">Grade System Protocol</h2>
          <div className="overflow-x-auto rounded-lg border border-white/10 bg-[#111] wuyin-reveal-tech-panel">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead className="border-b border-white/10 bg-[#0c0c0c] text-[11px] tracking-[0.16em] text-neutral-400">
              <tr>
                <th className="px-4 py-3">CORE LEVEL</th>
                <th className="px-4 py-3">NFT POWER</th>
                <th className="px-4 py-3">DYNAMIC BOOST</th>
                <th className="px-4 py-3">MARKET PRIVILEGE</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((row) => (
                <tr key={row.tier} className="border-b border-white/5 text-neutral-200 last:border-none">
                  <td className="px-4 py-3">{row.tier}</td>
                  <td className="px-4 py-3">{row.nft}</td>
                  <td className="px-4 py-3">{row.strength}</td>
                  <td className="px-4 py-3 text-neutral-400">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </ScrollReveal>
      </section>

      <section id="nfts-minting" className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a]">
        <ScrollReveal
          variant="upGlow"
          delayMs={120}
          className="wuyin-reveal-tech"
          visibleClassName="wuyin-reveal-tech-visible"
          staggerChildren
          staggerStepMs={90}
        >
        {/* Hero：工业锻造氛围占位 + 居中文案 */}
        <div className="relative min-h-[min(52vh,28rem)] sm:min-h-[32rem]">
          <div className="absolute inset-0 bg-[#060606]" aria-hidden />
          <div
            className="absolute inset-0 bg-linear-to-t from-orange-950/45 via-neutral-950/40 to-neutral-900/90"
            aria-hidden
          />
          <div
            className="absolute bottom-0 left-1/2 h-48 w-[120%] -translate-x-1/2 bg-linear-to-t from-orange-600/25 to-transparent blur-3xl"
            aria-hidden
          />
          <MintingForgeBackdrop />

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-14 text-center sm:py-20">
            <p className="text-[10px] font-semibold tracking-[0.38em] text-white">
              FORGE YOUR LEGACY
            </p>
            <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl md:text-[3.25rem] md:leading-tight">
              Minting Workshop
            </h2>
            <button
              type="button"
              className="mt-8 rounded-sm bg-linear-to-r from-[#ffd6de] via-[#ff9aaa] to-[#d94d4d] px-10 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-black shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition hover:brightness-105"
            >
              ENTER THE FORGE
            </button>
            <div className="mt-10 flex items-stretch justify-center gap-0">
              <div className="px-6 text-center sm:px-10">
                <span className="block font-serif text-3xl font-semibold text-white sm:text-4xl">4,209</span>
                <span className="mt-1.5 block text-[10px] font-medium tracking-[0.22em] text-white">
                  ITEMS FORGED
                </span>
              </div>
              <div className="w-px shrink-0 bg-white/35" aria-hidden />
              <div className="px-6 text-center sm:px-10">
                <span className="block font-serif text-3xl font-semibold text-white sm:text-4xl">12h 45m</span>
                <span className="mt-1.5 block text-[10px] font-medium tracking-[0.22em] text-white">
                  NEXT BATCH
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Proof of Origin 信息条 */}
        <div className="border-t border-white/10 bg-[#151515]">
          <div className="flex flex-col gap-6 border-l-4 border-[#ff7b8b] py-6 pl-5 pr-5 sm:flex-row sm:items-center sm:gap-6 sm:py-8 sm:pl-6 sm:pr-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-black ring-1 ring-white/15">
              <IconShieldCheck className="h-6 w-6 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-serif text-lg font-semibold text-white sm:text-xl">Immutable Proof of Origin</p>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                All Kung Fu Yin assets are cryptographically secured on the Wuyin Mainnet. Verify ownership and
                transaction history on the public ledger.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 border border-white/10 bg-black/70 px-4 py-3 sm:min-w-[220px]">
              <p className="text-[9px] font-semibold tracking-[0.2em] text-white">CONTRACT ADDRESS</p>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-sm text-white">0x7fC7...d581</span>
                <a
                  href="#nfts-minting"
                  className="shrink-0 rounded p-1 text-[#ff8a8a] transition hover:bg-white/10"
                  aria-label="在区块浏览器中查看合约（占位链接）"
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
