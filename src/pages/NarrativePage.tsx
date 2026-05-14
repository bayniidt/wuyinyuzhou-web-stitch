import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks";
import ScrollReveal from "@/components/motion/ScrollReveal";
import CharacterCard from "@/components/universe/CharacterCard";
import SequenceMap from "@/components/universe/SequenceMap";
import { useLocale } from "@/i18n/LocaleProvider";
import { useModuleResources } from "@/hooks/useModuleResources";
import { scrollToSelector } from "@/lib/scroll";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Fallbacks
import narrativeBannerFallback from "@/images/index1.png";
import narrativeCoverFallback from "@/images/index2.png";
import char1Fallback from "@/images/page3 (1).png";
import char2Fallback from "@/images/page3 (2).png";
import char3Fallback from "@/images/page3 (3).png";
import char4Fallback from "@/images/page3 (4).png";

const CDN_BANNER_VIDEO = "https://cdn.51aes.com/video/51Aes/Banner-AES6-logo.mp4";

function NarrativeSectionFireVideo({ reducedMotion, videoSrc = CDN_BANNER_VIDEO }: { reducedMotion: boolean, videoSrc?: string }) {
  return (
    <ScrollReveal variant="upSoft" delayMs={60}>
      <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        {!reducedMotion ? (
          <video
            key={videoSrc}
            src={videoSrc}
            className="h-full w-full object-cover opacity-60 mix-blend-screen"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        ) : null}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/20" />
      </div>
    </ScrollReveal>
  );
}

export default function NarrativePage() {
  const { t } = useLocale();
  const { resources, loading } = useModuleResources(['narrative', 'news']);
  const navigate = useNavigate();
  const location = useLocation();
  const reducedMotion = usePrefersReducedMotion();

  const isBrokenPath = (url: string | undefined) => !url || url.includes('/fhzb/');

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => scrollToSelector(`#${id}`), 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  const cosmosSites = useMemo(
    () =>
      ["temple", "arena", "alley", "home", "mountain", "realm"].map((key) => ({
        key,
        title: t(`narrative.map.hotspots.${key}.label`),
      })),
    [t],
  );

  const characters = useMemo(() => [
    {
      name: t("narrative.characters.c1.name"),
      role: t("narrative.characters.c1.role"),
      blurb: t("narrative.characters.c1.blurb"),
      portrait: isBrokenPath(resources['gal_hq_role1_image']) ? char1Fallback : resources['gal_hq_role1_image'],
      portraitAlt: t("narrative.characters.c1.alt")
    },
    {
      name: t("narrative.characters.c2.name"),
      role: t("narrative.characters.c2.role"),
      blurb: t("narrative.characters.c2.blurb"),
      portrait: isBrokenPath(resources['gal_hq_role2_image']) ? char2Fallback : resources['gal_hq_role2_image'],
      portraitAlt: t("narrative.characters.c2.alt")
    },
    {
      name: t("narrative.characters.c3.name"),
      role: t("narrative.characters.c3.role"),
      blurb: t("narrative.characters.c3.blurb"),
      portrait: isBrokenPath(resources['gal_hq_role3_image']) ? char3Fallback : resources['gal_hq_role3_image'],
      portraitAlt: t("narrative.characters.c3.alt")
    },
    {
      name: t("narrative.characters.c4.name"),
      role: t("narrative.characters.c4.role"),
      blurb: t("narrative.characters.c4.blurb"),
      portrait: isBrokenPath(resources['gal_hq_role4_image']) ? char4Fallback : resources['gal_hq_role4_image'],
      portraitAlt: t("narrative.characters.c4.alt")
    }
  ], [t, resources]);

  const philosophyQuestions = useMemo(
    () =>
      ["self", "people", "world"].map((key) => ({
        key,
        title: t(`narrative.philosophy.questions.${key}.title`),
        body: t(`narrative.philosophy.questions.${key}.body`),
      })),
    [t],
  );

  const philosophyPrinciples = useMemo(
    () =>
      ["restraint", "growth"].map((key) => ({
        key,
        title: t(`narrative.philosophy.principles.${key}.title`),
        body: t(`narrative.philosophy.principles.${key}.body`),
      })),
    [t],
  );

  const heritageItems = useMemo(
    () =>
      ["sword", "silk", "umbrella", "alley"].map((key) => ({
        key,
        title: t(`narrative.heritage.items.${key}.title`),
        subtitle: t(`narrative.heritage.items.${key}.subtitle`),
        body: t(`narrative.heritage.items.${key}.body`),
      })),
    [t],
  );

  const inheritanceItems = useMemo(
    () =>
      ["youth", "schools", "ceremony", "nation"].map((key) => ({
        key,
        title: t(`narrative.inheritance.items.${key}.title`),
        body: t(`narrative.inheritance.items.${key}.body`),
      })),
    [t],
  );

  if (loading) return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-8 h-8 border-4 border-wuyin-gold-bright border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  const narrativeBanner = isBrokenPath(resources['phi_hero_bg']) ? narrativeBannerFallback : resources['phi_hero_bg'];
  const narrativeVideo = isBrokenPath(resources['vis_doc_video']) ? CDN_BANNER_VIDEO : resources['vis_doc_video'];
  const narrativeCover = isBrokenPath(resources['vis_doc_cover']) ? narrativeCoverFallback : resources['vis_doc_cover'];

  return (
    <div className="bg-black">
      {/* 沉浸式首屏 */}
      <section
        id="narrative-hero"
        className="relative flex min-h-[calc(100dvh-4rem)] items-center justify-center overflow-hidden border-b border-white/5 bg-[#080706] lg:min-h-[calc(100dvh-4.25rem)]"
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/85" />
        <img
          src={narrativeBanner}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
        />
        <div className="container-wuyin relative z-10 py-28 text-center sm:py-32">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.5em] text-wuyin-gold-bright"
          >
            {t("narrative.hero.kicker")}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-serif text-5xl font-black text-white sm:text-7xl lg:text-8xl"
          >
            {t("narrative.hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-neutral-200 sm:text-base"
          >
            {t("narrative.heroLead")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {cosmosSites.map((site) => (
              <span
                key={site.key}
                className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs tracking-[0.24em] text-neutral-200"
              >
                {site.title}
              </span>
            ))}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <div className="h-12 w-px bg-linear-to-b from-wuyin-gold-bright to-transparent mx-auto" />
            <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-neutral-500 animate-pulse">
              {t("common.scrollExplore")}
            </p>
          </motion.div>
        </div>
        
        {/* 武印护照 入口 (成就系统) */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed bottom-10 right-10 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-wuyin-gold-bright/30 bg-black/60 text-wuyin-gold-bright shadow-wuyin-glow backdrop-blur-md hover:scale-110 transition-transform"
          onClick={() => navigate("/passport")}
          title={t("common.viewPassport")}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </motion.button>
      </section>

      {/* 宇宙地图 (3D序列帧交互) */}
      <section id="narrative-map">
        <SequenceMap />
      </section>

      {/* 哲学根基 */}
      <section id="narrative-philosophy" className="relative overflow-hidden border-b border-white/5 bg-wuyin-surface py-20 sm:py-28">
        <SectionGoldenBlocks variant={1} />
        <div className="container-wuyin relative z-10 grid gap-16 lg:grid-cols-2 lg:items-center">
          <ScrollReveal variant="leftSoft" className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.42em] text-wuyin-gold-bright/80">
                {t("narrative.philosophy.eyebrow")}
              </p>
              <h2 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl">{t("narrative.philosophy.title")}</h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-300">{t("narrative.philosophy.lead")}</p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-black/35 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-wuyin-gold-bright/75">
                {t("narrative.philosophy.interpretation.title")}
              </p>
              <p className="mt-4 text-base leading-8 text-neutral-300">
                {t("narrative.philosophy.interpretation.body")}
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {philosophyPrinciples.map((item) => (
                  <article key={item.key} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="font-serif text-xl text-white">{item.title}</p>
                    <p className="mt-3 text-sm leading-7 text-neutral-300">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-wuyin-gold-bright/75">
                {t("narrative.philosophy.questionsTitle")}
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {philosophyQuestions.map((item) => (
                  <article key={item.key} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="font-serif text-xl text-white">{item.title}</p>
                    <p className="mt-3 text-sm leading-7 text-neutral-300">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <NarrativeSectionFireVideo reducedMotion={reducedMotion} videoSrc={narrativeVideo} />
        </div>
      </section>

      {/* 人物谱系 */}
      <section id="narrative-lineage" className="relative overflow-hidden border-b border-white/5 py-24 sm:py-32">
        <SectionGoldenBlocks variant={0} />
        <div className="container-wuyin relative z-10">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">{t("narrative.lineage.title")}</h2>
            <p className="mx-auto mt-4 max-w-3xl text-wuyin-muted">{t("narrative.lineage.lead")}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {characters.map((char) => (
              <CharacterCard key={char.name} character={char} />
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-neutral-400">
            {t("narrative.lineage.closer")}
          </p>
        </div>
      </section>

      {/* 非遗融合 */}
      <section id="narrative-heritage" className="relative overflow-hidden border-b border-white/5 bg-wuyin-surface py-20 sm:py-28">
        <SectionGoldenBlocks variant={2} />
        <div className="container-wuyin relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <ScrollReveal variant="leftSoft">
              <img src={narrativeCover} alt="" className="rounded-2xl border border-white/10 shadow-2xl" />
            </ScrollReveal>
            <ScrollReveal variant="rightSoft" className="space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.42em] text-wuyin-gold-bright/80">
                  {t("narrative.heritage.eyebrow")}
                </p>
                <h2 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl">{t("narrative.heritage.title")}</h2>
              </div>
              <div className="space-y-6 text-lg leading-relaxed text-neutral-300">
                <p>{t("narrative.heritage.lead")}</p>
                <p>{t("narrative.heritage.closer")}</p>
              </div>
              <div className="grid gap-4 pt-2 sm:grid-cols-2">
                {heritageItems.map((item) => (
                  <article key={item.key} className="rounded-2xl border border-white/10 bg-black/35 p-5">
                    <p className="font-serif text-2xl text-wuyin-gold-bright">{item.title}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.24em] text-neutral-500">{item.subtitle}</p>
                    <p className="mt-4 text-sm leading-7 text-neutral-300">{item.body}</p>
                  </article>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 薪火相传 */}
      <section id="narrative-inheritance" className="relative overflow-hidden py-24 sm:py-32">
        <div className="container-wuyin relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <ScrollReveal className="space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.42em] text-wuyin-gold-bright/80">
                  {t("narrative.inheritance.eyebrow")}
                </p>
                <h2 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl">{t("narrative.inheritance.title")}</h2>
              </div>
              <p className="text-lg leading-relaxed text-neutral-300">{t("narrative.inheritance.lead")}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {inheritanceItems.map((item) => (
                  <article key={item.key} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="font-serif text-xl text-white">{item.title}</p>
                    <p className="mt-3 text-sm leading-7 text-neutral-300">{item.body}</p>
                  </article>
                ))}
              </div>
              <blockquote className="border-l border-wuyin-gold-bright/30 pl-5 font-serif text-xl text-neutral-100">
                {t("narrative.inheritance.quote")}
              </blockquote>
            </ScrollReveal>
            <ScrollReveal variant="rightSoft" className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-neutral-900">
               {!reducedMotion ? (
                 <video
                   key={narrativeVideo}
                   className="h-full w-full object-cover opacity-60 mix-blend-screen"
                   autoPlay
                   muted
                   loop
                   playsInline
                   preload="auto"
                 >
                   <source src={narrativeVideo} type="video/mp4" />
                 </video>
               ) : null}
               <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/20" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="rounded-2xl border border-wuyin-gold-bright/30 bg-black/55 px-6 py-5 text-center backdrop-blur-sm">
                   <p className="text-xs font-semibold uppercase tracking-[0.34em] text-wuyin-gold-bright/85">
                     {t("narrative.inheritance.videoEyebrow")}
                   </p>
                   <p className="mt-3 font-serif text-2xl text-white">
                     {t("narrative.inheritance.videoTitle")}
                   </p>
                 </div>
               </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
