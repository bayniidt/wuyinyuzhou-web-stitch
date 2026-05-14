import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks";
import Countdown from "@/components/home/Countdown";
import GhostButton from "@/components/ui/GhostButton";
import GradientButton from "@/components/ui/GradientButton";
import { useLocale } from "@/i18n/LocaleProvider";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { useModuleResources } from "@/hooks/useModuleResources";
import { motion } from "framer-motion";
import { useState } from "react";

// Fallbacks
import videoBannerFallback from "@/videos/index1.mp4";
import videoAscentFallback from "@/videos/16548256-hd_1080_1920_30fps.mp4";

function HeroVideoBackground({ src }: { src: string }) {
  const baseVideo =
    "pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms] ease-out";

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <video
        key={src}
        src={src}
        className={`${baseVideo} z-[1] opacity-[0.72]`}
        muted
        playsInline
        loop
        preload="auto"
        autoPlay
      />
    </div>
  );
}

export default function HeroSection() {
  const reducedMotion = usePrefersReducedMotion();
  const { t } = useLocale();
  const { resources, loading } = useModuleResources(['', 'ecosystem']);
  const [heroClip, setHeroClip] = useState<0 | 1>(0);
  const philosophyItems = [
    {
      key: "interpretation",
      title: t("home.hero.cards.interpretation.title"),
      body: t("home.hero.cards.interpretation.body"),
    },
    {
      key: "practice",
      title: t("home.hero.cards.practice.title"),
      body: t("home.hero.cards.practice.body"),
    },
    {
      key: "discipline",
      title: t("home.hero.cards.discipline.title"),
      body: t("home.hero.cards.discipline.body"),
    },
  ];

  if (loading) return (
    <div className="relative flex min-h-[calc(100dvh-4rem)] items-center justify-center bg-black">
      <div className="w-8 h-8 border-4 border-wuyin-gold-bright border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  const isBrokenPath = (url: string | undefined) => !url || url.includes('/fhzb/');

  const videoSrc = heroClip === 0 
    ? (isBrokenPath(resources['home_banner_video']) ? videoBannerFallback : resources['home_banner_video']) 
    : (isBrokenPath(resources['home_ascent_video']) ? videoAscentFallback : resources['home_ascent_video']);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.45, 0.32, 0.9] as any,
      },
    },
  };

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
      {!reducedMotion ? <HeroVideoBackground src={videoSrc} /> : null}
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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={[
          "container-wuyin relative z-10 flex flex-col items-center py-28 text-center sm:py-32",
          reducedMotion ? "" : "pb-16 sm:pb-20",
        ].join(" ")}
      >
        <motion.p variants={itemVariants} className="text-xs font-semibold uppercase tracking-[0.45em] text-wuyin-muted sm:text-sm">
          {t("home.hero.kicker")}
        </motion.p>
        <motion.h1 variants={itemVariants} className="mt-6 font-serif text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
          {t("home.hero.title")}
        </motion.h1>
        <motion.p variants={itemVariants} className="mt-4 font-serif text-lg text-neutral-300 sm:text-xl md:text-2xl">
          {t("home.hero.subtitle")}
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-3xl text-sm leading-7 text-neutral-300/90 sm:text-base"
        >
          {t("home.hero.lead")}
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10">
          <Countdown targetDate="2026-05-20T00:00:00" />
        </motion.div>

        <motion.div variants={itemVariants} className="mt-10 flex flex-col items-stretch gap-4 sm:mt-12 sm:flex-row sm:items-center sm:justify-center">
          <GradientButton className="w-full min-w-[220px] sm:w-auto">{t("home.hero.ctaCompetition")}</GradientButton>
          <GhostButton className="w-full min-w-[220px] sm:w-auto">{t("home.hero.ctaPartner")}</GhostButton>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="mt-12 grid w-full max-w-6xl gap-4 text-left sm:mt-14 md:grid-cols-3"
        >
          {philosophyItems.map((item) => (
            <article
              key={item.key}
              className="rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-sm sm:p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-wuyin-gold-bright/90">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-neutral-200/92">
                {item.body}
              </p>
            </article>
          ))}
        </motion.div>
      </motion.div>
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
