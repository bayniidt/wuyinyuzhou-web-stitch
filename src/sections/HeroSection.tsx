import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks";
import GhostButton from "@/components/ui/GhostButton";
import GradientButton from "@/components/ui/GradientButton";
import { useLocale } from "@/i18n/LocaleProvider";
import heroVideo1 from "@/videos/index1.mp4";
import heroVideo2 from "@/videos/index2.mp4";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { useEffect, useRef, useState } from "react";

const HERO_VIDEO_SOURCES = [heroVideo1, heroVideo2] as const;

function HeroVideoBackground({ active }: { active: 0 | 1 }) {
  const ref0 = useRef<HTMLVideoElement>(null);
  const ref1 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const a = ref0.current;
    const b = ref1.current;
    if (!a || !b) return;
    const activeEl = active === 0 ? a : b;
    const inactiveEl = active === 0 ? b : a;
    inactiveEl.pause();
    try {
      activeEl.currentTime = 0;
    } catch {
      /* seek may fail before metadata */
    }
    void activeEl.play().catch(() => {});
  }, [active]);

  const baseVideo =
    "pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms] ease-out";

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <video
        ref={ref0}
        className={`${baseVideo} ${active === 0 ? "z-[1] opacity-[0.72]" : "z-0 opacity-0"}`}
        muted
        playsInline
        loop
        preload="auto"
      >
        <source src={HERO_VIDEO_SOURCES[0]} type="video/mp4" />
      </video>
      <video
        ref={ref1}
        className={`${baseVideo} ${active === 1 ? "z-[1] opacity-[0.72]" : "z-0 opacity-0"}`}
        muted
        playsInline
        loop
        preload="auto"
      >
        <source src={HERO_VIDEO_SOURCES[1]} type="video/mp4" />
      </video>
    </div>
  );
}

export default function HeroSection() {
  const reducedMotion = usePrefersReducedMotion();
  const { t } = useLocale();
  const [heroClip, setHeroClip] = useState<0 | 1>(0);

  return (
    <section
      id="home-hero"
      className="relative flex min-h-[calc(100dvh-4rem)] items-center justify-center overflow-hidden border-b border-white/5 lg:min-h-[calc(100dvh-4.25rem)]"
    >
      <div
        className={[
          "pointer-events-none absolute inset-0 bg-[linear-gradient(126deg,#080706_0%,rgba(8,7,6,0.97)_22%,rgba(222,181,135,0.05)_52%,rgba(246,226,193,0.08)_72%,rgba(222,181,135,0.06)_88%,rgba(8,7,6,0.85)_100%),linear-gradient(180deg,#080706_0%,#12100e_48%,#080706_100%)]",
          reducedMotion ? "" : "wuyin-animate-gradient-drift",
        ].join(" ")}
        aria-hidden
      />
      <SectionGoldenBlocks density="sparse" intensity="subtle" variant={0} />
      {!reducedMotion ? <HeroVideoBackground active={heroClip} /> : null}
      <div className="pointer-events-none absolute inset-0 opacity-[0.58]" aria-hidden>
        <div
          className={[
            "absolute inset-0 bg-[url('/images/hero-kernel.svg')] bg-cover bg-center mix-blend-screen",
            reducedMotion ? "opacity-90" : "wuyin-animate-hero-kernel",
          ].join(" ")}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />
      <div
        className={[
          "container-wuyin relative z-10 flex flex-col items-center py-28 text-center sm:py-32",
          reducedMotion ? "" : "pb-16 sm:pb-20",
          reducedMotion ? "" : "wuyin-cinematic-enter",
        ].join(" ")}
      >
        <p className="wuyin-hero-entrance text-xs font-semibold uppercase tracking-[0.45em] text-wuyin-muted sm:text-sm">
          {t("home.hero.kicker")}
        </p>
        <h1 className="wuyin-hero-entrance wuyin-hero-entrance-delay-1 mt-6 font-serif text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
          {t("home.hero.title")}
        </h1>
        <p className="wuyin-hero-entrance wuyin-hero-entrance-delay-2 mt-4 font-serif text-lg text-neutral-300 sm:text-xl md:text-2xl">
          {t("home.hero.subtitle")}
        </p>
        <div className="wuyin-hero-entrance wuyin-hero-entrance-delay-3 mt-10 flex flex-col items-stretch gap-4 sm:mt-12 sm:flex-row sm:items-center sm:justify-center">
          <GradientButton className="w-full min-w-[220px] sm:w-auto">{t("home.hero.ctaCompetition")}</GradientButton>
          <GhostButton className="w-full min-w-[220px] sm:w-auto">{t("home.hero.ctaPartner")}</GhostButton>
        </div>
      </div>
      {!reducedMotion ? (
        <div
          className="pointer-events-auto absolute inset-x-0 bottom-0 z-20 flex justify-center px-4 pb-6 sm:pb-8"
          role="group"
          aria-label={t("home.hero.videoSwitcherLabel")}
        >
          <div className="flex items-center justify-center gap-[30px]">
            <button
              type="button"
              aria-pressed={heroClip === 0}
              aria-label={t("home.hero.videoSegment1")}
              onClick={() => setHeroClip(0)}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--wuyin-gold-rgb)/0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080706]"
            >
              <span
                className={[
                  "block h-[3px] w-[50px] max-w-[50px] shrink-0 rounded-full transition-[background-color,box-shadow]",
                  heroClip === 0
                    ? "bg-[rgb(var(--wuyin-gold-rgb)/0.95)] shadow-[0_0_14px_rgb(var(--wuyin-gold-rgb)/0.5)]"
                    : "bg-white/35 hover:bg-white/50",
                ].join(" ")}
                aria-hidden
              />
            </button>
            <button
              type="button"
              aria-pressed={heroClip === 1}
              aria-label={t("home.hero.videoSegment2")}
              onClick={() => setHeroClip(1)}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--wuyin-gold-rgb)/0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080706]"
            >
              <span
                className={[
                  "block h-[3px] w-[50px] max-w-[50px] shrink-0 rounded-full transition-[background-color,box-shadow]",
                  heroClip === 1
                    ? "bg-[rgb(var(--wuyin-gold-rgb)/0.95)] shadow-[0_0_14px_rgb(var(--wuyin-gold-rgb)/0.5)]"
                    : "bg-white/35 hover:bg-white/50",
                ].join(" ")}
                aria-hidden
              />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
