import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks";
import ScrollReveal from "@/components/motion/ScrollReveal";
import GhostButton from "@/components/ui/GhostButton";
import GradientButton from "@/components/ui/GradientButton";
import CharacterCard from "@/components/universe/CharacterCard";
import SequenceMap from "@/components/universe/SequenceMap";
import { useLocale } from "@/i18n/LocaleProvider";
import imgConceptTrinity from "@/images/page2(2).png";
import imgLineageObsidian from "@/images/page2(3).png";
import imgLineageVoid from "@/images/page2(4).png";
import imgLineageIron from "@/images/page2(5).png";
import narrativeBanner from "@/images/page2(6).png";
import { scrollToSelector } from "@/lib/scroll";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import fireMp4 from "@/videos/fire.mp4";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function NarrativeSectionFireVideo({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <ScrollReveal variant="upSoft" delayMs={60}>
      <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        {!reducedMotion ? (
          <video
            className="h-full w-full object-cover opacity-60 mix-blend-screen"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={fireMp4} type="video/mp4" />
          </video>
        ) : null}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/20" />
      </div>
    </ScrollReveal>
  );
}

export default function NarrativePage() {
  const { t } = useLocale();
  const navigate = useNavigate();
  const location = useLocation();
  const reducedMotion = usePrefersReducedMotion();
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => scrollToSelector(`#${id}`), 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  const characters = useMemo(() => [
    {
      name: t("narrative.characters.c1.name"),
      role: t("narrative.characters.c1.role"),
      blurb: t("narrative.characters.c1.blurb"),
      portrait: imgLineageObsidian,
      portraitAlt: t("narrative.characters.c1.alt")
    },
    {
      name: t("narrative.characters.c2.name"),
      role: t("narrative.characters.c2.role"),
      blurb: t("narrative.characters.c2.blurb"),
      portrait: imgLineageVoid,
      portraitAlt: t("narrative.characters.c2.alt")
    },
    {
      name: t("narrative.characters.c3.name"),
      role: t("narrative.characters.c3.role"),
      blurb: t("narrative.characters.c3.blurb"),
      portrait: imgLineageIron,
      portraitAlt: t("narrative.characters.c3.alt")
    }
  ], [t]);

  return (
    <div className="bg-black">
      {/* 沉浸式首屏 */}
      <section id="narrative-hero" className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black" />
        <img
          src={narrativeBanner}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="container-wuyin relative z-10 text-center">
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
            <div className="flex items-center gap-4">
              <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">{t("narrative.philosophy.title")}</h2>
              {/* 音频导览按钮 */}
              <button 
                onClick={() => setIsAudioPlaying(!isAudioPlaying)}
                className={`flex h-10 w-10 items-center justify-center rounded-full border ${isAudioPlaying ? 'bg-wuyin-gold-bright border-transparent text-black' : 'border-white/10 text-wuyin-gold-bright hover:border-wuyin-gold-bright/40'} transition-all`}
                title={t("common.playAudioGuide")}
              >
                {isAudioPlaying ? (
                  <div className="flex gap-0.5 items-end h-3">
                    <motion.div animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-0.5 bg-black" />
                    <motion.div animate={{ height: [8, 4, 8] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-0.5 bg-black" />
                    <motion.div animate={{ height: [4, 10, 4] }} transition={{ repeat: Infinity, duration: 0.4 }} className="w-0.5 bg-black" />
                  </div>
                ) : (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}
              </button>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-neutral-300">
              <p>{t("narrative.philosophy.p1")}</p>
              <p>{t("narrative.philosophy.p2")}</p>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8">
              {['zhi', 'ge', 'yin'].map((key) => (
                <div key={key} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-wuyin-gold-bright/20 bg-black/40 font-serif text-2xl text-wuyin-gold-bright">
                    {t(`narrative.philosophy.concepts.${key}.char`)}
                  </div>
                  <p className="text-xs font-bold tracking-widest text-neutral-500">{t(`narrative.philosophy.concepts.${key}.label`)}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <NarrativeSectionFireVideo reducedMotion={reducedMotion} />
        </div>
      </section>

      {/* 人物谱系 */}
      <section id="narrative-lineage" className="relative overflow-hidden border-b border-white/5 py-24 sm:py-32">
        <SectionGoldenBlocks variant={0} />
        <div className="container-wuyin relative z-10">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">{t("narrative.lineage.title")}</h2>
            <p className="mt-4 text-wuyin-muted">{t("narrative.lineage.lead")}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {characters.map((char) => (
              <CharacterCard key={char.name} character={char} />
            ))}
          </div>
        </div>
      </section>

      {/* 非遗融合 */}
      <section id="narrative-heritage" className="relative overflow-hidden border-b border-white/5 bg-wuyin-surface py-20 sm:py-28">
        <SectionGoldenBlocks variant={2} />
        <div className="container-wuyin relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <ScrollReveal variant="leftSoft">
              <img src={imgConceptTrinity} alt="" className="rounded-2xl border border-white/10 shadow-2xl" />
            </ScrollReveal>
            <ScrollReveal variant="rightSoft" className="space-y-8">
              <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">{t("narrative.heritage.title")}</h2>
              <div className="space-y-6 text-lg leading-relaxed text-neutral-300">
                <p>{t("narrative.heritage.p1")}</p>
                <p>{t("narrative.heritage.p2")}</p>
              </div>
              <div className="flex gap-4 pt-6">
                {['sword', 'silk', 'umbrella'].map((item) => (
                  <div key={item} className="flex-1 rounded-lg border border-white/5 bg-black/40 p-4 text-center">
                    <p className="font-serif text-wuyin-gold-bright">{t(`narrative.heritage.items.${item}`)}</p>
                  </div>
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
              <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">{t("narrative.inheritance.title")}</h2>
              <p className="text-lg leading-relaxed text-neutral-300">{t("narrative.inheritance.lead")}</p>
              <div className="flex flex-col gap-4 pt-8 sm:flex-row">
                <GradientButton className="min-w-[200px]">{t("narrative.inheritance.ctaVideo")}</GradientButton>
                <GhostButton className="min-w-[200px]">{t("narrative.inheritance.ctaInterview")}</GhostButton>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="rightSoft" className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-neutral-900">
               {/* 视频占位 */}
               <div className="absolute inset-0 flex items-center justify-center">
                 <button className="h-20 w-20 rounded-full bg-wuyin-gold-bright/20 border border-wuyin-gold-bright/40 text-wuyin-gold-bright flex items-center justify-center hover:scale-110 transition-transform">
                   <svg viewBox="0 0 24 24" className="h-8 w-8 ml-1" fill="currentColor">
                     <path d="M8 5v14l11-7z" />
                   </svg>
                 </button>
               </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
