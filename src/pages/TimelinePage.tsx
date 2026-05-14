import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks";
import ScrollReveal from "@/components/motion/ScrollReveal";
import GhostButton from "@/components/ui/GhostButton";
import GradientButton from "@/components/ui/GradientButton";
import { useLocale } from "@/i18n/LocaleProvider";
import { useModuleResources } from "@/hooks/useModuleResources";
import { scrollToSelector } from "@/lib/scroll";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import heroFallback from "@/images/page2(6).png";
import videoFallback from "@/videos/15440050_1920_1080_30fps.mp4";
import workflowFallback from "@/images/page2(2).png";

export default function TimelinePage() {
  const { t } = useLocale();
  const { resources, loading } = useModuleResources("timeline");
  const navigate = useNavigate();
  const location = useLocation();
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => scrollToSelector(`#${id}`), 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  const isBrokenPath = (url: string | undefined) => !url || url.includes("/fhzb/");

  const timelineHero = isBrokenPath(resources["os_hero_bg"]) ? heroFallback : resources["os_hero_bg"];
  const timelineTheater = isBrokenPath(resources["os_stage1_video"]) ? videoFallback : resources["os_stage1_video"];
  const mechaVisual = isBrokenPath(resources["os_workflow_bg"]) ? workflowFallback : resources["os_workflow_bg"];

  const theaterItems = useMemo(
    () =>
      ["mr", "nfr", "mecha", "wallet"].map((key) => ({
        key,
        title: t(`timeline.digitalTheater.items.${key}.title`),
        body: t(`timeline.digitalTheater.items.${key}.body`),
      })),
    [t],
  );

  const dialogueItems = useMemo(
    () =>
      ["masters", "guardian", "youth", "echo"].map((key) => ({
        key,
        title: t(`timeline.dialogue.items.${key}.title`),
        body: t(`timeline.dialogue.items.${key}.body`),
      })),
    [t],
  );

  const mechaItems = useMemo(
    () =>
      ["combat", "training", "future"].map((key) => ({
        key,
        title: t(`timeline.mecha.items.${key}.title`),
        body: t(`timeline.mecha.items.${key}.body`),
      })),
    [t],
  );

  const aestheticItems = useMemo(
    () =>
      ["taiji", "heritage", "palette", "space"].map((key) => ({
        key,
        title: t(`timeline.aesthetics.items.${key}.title`),
        body: t(`timeline.aesthetics.items.${key}.body`),
      })),
    [t],
  );

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="h-8 w-8 rounded-full border-4 border-wuyin-gold-bright border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-black">
      <section className="relative flex min-h-[68vh] items-center justify-center overflow-hidden border-b border-white/5 bg-[#080706]">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(228,184,74,0.18),transparent_55%),linear-gradient(180deg,#080706_0%,#0f0d0b_45%,#080706_100%)]"
          aria-hidden
        />
        <SectionGoldenBlocks density="sparse" intensity="subtle" variant={1} />
        <img
          src={timelineHero}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.24]"
          decoding="async"
          aria-hidden
        />
        <div className="container-wuyin relative z-10 py-20 text-center">
          <ScrollReveal variant="upGlow" className="wuyin-reveal-tech" visibleClassName="wuyin-reveal-tech-visible" staggerChildren staggerStepMs={100}>
            <p className="text-xs font-bold uppercase tracking-[0.5em] text-wuyin-gold-bright">{t("timeline.heroKicker")}</p>
            <h1 className="mt-6 font-serif text-5xl font-black text-white sm:text-7xl">{t("timeline.heroTitle")}</h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-neutral-300">{t("timeline.heroLead")}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {["immersive", "dialogue", "mecha", "aesthetics"].map((key) => (
                <span
                  key={key}
                  className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs tracking-[0.24em] text-neutral-200"
                >
                  {t(`timeline.heroTags.${key}`)}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <GradientButton type="button" onClick={() => scrollToSelector("#timeline-digital-theater")}>
                {t("timeline.viewRoadmap")}
              </GradientButton>
              <GhostButton type="button" onClick={() => navigate("/")}>
                {t("timeline.backHome")}
              </GhostButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="timeline-digital-theater" className="relative overflow-hidden border-b border-white/5 bg-wuyin-surface py-20 sm:py-32">
        <SectionGoldenBlocks variant={0} />
        <div className="container-wuyin relative z-10 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <ScrollReveal variant="leftSoft" className="space-y-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-wuyin-gold-bright">{t("timeline.digitalTheater.kicker")}</p>
              <h2 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl">{t("timeline.digitalTheater.title")}</h2>
            </div>
            <p className="text-lg leading-relaxed text-neutral-300">{t("timeline.digitalTheater.lead")}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {theaterItems.map((item) => (
                <article key={item.key} className="rounded-2xl border border-white/10 bg-black/35 p-5">
                  <p className="font-serif text-2xl text-wuyin-gold-bright">{item.title}</p>
                  <p className="mt-4 text-sm leading-7 text-neutral-300">{item.body}</p>
                </article>
              ))}
            </div>
            <blockquote className="border-l border-wuyin-gold-bright/30 pl-5 font-serif text-xl text-neutral-100">
              {t("timeline.digitalTheater.quote")}
            </blockquote>
          </ScrollReveal>
          <ScrollReveal variant="rightSoft" className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl">
            {!reducedMotion ? (
              <video
                key={timelineTheater}
                className="h-full w-full object-cover opacity-60"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src={timelineTheater} type="video/mp4" />
              </video>
            ) : (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(228,184,74,0.1),transparent_70%)]" />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-wuyin-gold-bright/80">
                {t("timeline.digitalTheater.overlayKicker")}
              </p>
              <p className="mt-3 font-serif text-2xl text-white">{t("timeline.digitalTheater.overlayTitle")}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="timeline-dialogue" className="relative overflow-hidden border-b border-white/5 py-24 sm:py-32">
        <SectionGoldenBlocks variant={2} />
        <div className="container-wuyin relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-wuyin-gold-bright">{t("timeline.dialogue.kicker")}</p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl">{t("timeline.dialogue.title")}</h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-300">{t("timeline.dialogue.lead")}</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {dialogueItems.map((item, index) => (
              <motion.article
                key={item.key}
                whileHover={{ y: -6 }}
                className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-wuyin-gold-bright/70">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 font-serif text-2xl text-white">{item.title}</p>
                <p className="mt-4 text-sm leading-7 text-neutral-300">{item.body}</p>
              </motion.article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-neutral-400">
            {t("timeline.dialogue.closer")}
          </p>
        </div>
      </section>

      <section id="timeline-mecha" className="relative overflow-hidden border-b border-white/5 bg-wuyin-surface py-24 sm:py-32">
        <SectionGoldenBlocks variant={1} />
        <div className="container-wuyin relative z-10 grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <ScrollReveal variant="leftSoft" className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/35 shadow-2xl">
            <img src={mechaVisual} alt="" className="h-full w-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-6 bottom-6">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-wuyin-gold-bright/80">
                {t("timeline.mecha.visualKicker")}
              </p>
              <p className="mt-3 font-serif text-3xl text-white">{t("timeline.mecha.visualTitle")}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="rightSoft" className="space-y-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-wuyin-gold-bright">{t("timeline.mecha.kicker")}</p>
              <h2 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl">{t("timeline.mecha.title")}</h2>
            </div>
            <p className="text-lg leading-relaxed text-neutral-300">{t("timeline.mecha.lead")}</p>
            <div className="space-y-4">
              {mechaItems.map((item) => (
                <article key={item.key} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="font-serif text-2xl text-white">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-neutral-300">{item.body}</p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="timeline-aesthetics" className="relative overflow-hidden py-24 sm:py-32">
        <div className="container-wuyin relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-wuyin-gold-bright">{t("timeline.aesthetics.kicker")}</p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl">{t("timeline.aesthetics.title")}</h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-300">{t("timeline.aesthetics.lead")}</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {aestheticItems.map((item) => (
              <article key={item.key} className="rounded-[28px] border border-white/10 bg-black/30 p-6">
                <p className="font-serif text-3xl text-wuyin-gold-bright">{item.title}</p>
                <p className="mt-4 text-sm leading-8 text-neutral-300">{item.body}</p>
              </article>
            ))}
          </div>
          <blockquote className="mx-auto mt-12 max-w-4xl border-t border-white/10 pt-8 text-center font-serif text-2xl leading-relaxed text-neutral-100">
            {t("timeline.aesthetics.quote")}
          </blockquote>
        </div>
      </section>
    </div>
  );
}
