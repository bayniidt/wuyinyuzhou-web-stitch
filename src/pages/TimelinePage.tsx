import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks";
import ScrollReveal from "@/components/motion/ScrollReveal";
import FighterRoster from "@/components/sight/FighterRoster";
import VenueViewer from "@/components/sight/VenueViewer";
import GhostButton from "@/components/ui/GhostButton";
import GradientButton from "@/components/ui/GradientButton";
import { useLocale } from "@/i18n/LocaleProvider";
import { useModuleResources } from "@/hooks/useModuleResources";
import { scrollToSelector } from "@/lib/scroll";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Fallbacks
import heroFallback from "@/images/page2(6).png";
import videoFallback from "@/videos/15440050_1920_1080_30fps.mp4";
import workflowFallback from "@/images/page2(2).png";

export default function TimelinePage() {
  const { t } = useLocale();
  const { resources, loading } = useModuleResources('timeline');
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

  if (loading) return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-8 h-8 border-4 border-wuyin-gold-bright border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
  const isBrokenPath = (url: string | undefined) => !url || url.includes('/fhzb/');

  const timelineHero = isBrokenPath(resources['os_hero_bg']) ? heroFallback : resources['os_hero_bg'];
  const timelineTheater = isBrokenPath(resources['os_stage1_video']) ? videoFallback : resources['os_stage1_video'];
  const historyFallback = isBrokenPath(resources['os_workflow_bg']) ? workflowFallback : resources['os_workflow_bg'];

  return (
    <div className="bg-black">
      {/* 沉浸式首屏 */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden border-b border-white/5 bg-[#080706]">
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
            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">{t("timeline.heroLead")}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <GradientButton type="button" onClick={() => scrollToSelector("#timeline-overview")}>
                {t("timeline.viewRoadmap")}
              </GradientButton>
              <GhostButton type="button" onClick={() => navigate("/")}>
                {t("timeline.backHome")}
              </GhostButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 购票入口与场馆预览 */}
      <section id="timeline-overview" className="relative overflow-hidden border-b border-white/5 bg-wuyin-surface py-20 sm:py-32">
        <SectionGoldenBlocks variant={0} />
        <div className="container-wuyin relative z-10">
          <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <ScrollReveal variant="leftSoft">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-wuyin-gold-bright">{t("timeline.venue.kicker")}</p>
              <h2 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl">{t("timeline.venue.title")}</h2>
            </ScrollReveal>
            <ScrollReveal variant="rightSoft" className="flex gap-4">
               <div className="rounded-lg border border-white/10 bg-black/40 px-6 py-4 text-center">
                 <p className="text-[10px] text-neutral-500 uppercase tracking-widest">{t("timeline.venue.timeLabel")}</p>
                 <p className="mt-1 font-serif text-white">{t("timeline.venue.timeValue")}</p>
               </div>
               <div className="rounded-lg border border-white/10 bg-black/40 px-6 py-4 text-center">
                 <p className="text-[10px] text-neutral-500 uppercase tracking-widest">{t("timeline.venue.locationLabel")}</p>
                 <p className="mt-1 font-serif text-white">{t("timeline.venue.locationValue")}</p>
               </div>
            </ScrollReveal>
          </div>
          
          <VenueViewer />
          
          <div className="mt-20 grid gap-6 sm:grid-cols-3">
            {[
              { 
                type: t("timeline.accessTiers.standard.name"), 
                price: t("timeline.accessTiers.standard.price"), 
                desc: t("timeline.accessTiers.standard.desc") 
              },
              { 
                type: t("timeline.accessTiers.vip.name"), 
                price: t("timeline.accessTiers.vip.price"), 
                desc: t("timeline.accessTiers.vip.desc"), 
                featured: true 
              },
              { 
                type: t("timeline.accessTiers.metaverse.name"), 
                price: t("timeline.accessTiers.metaverse.price"), 
                desc: t("timeline.accessTiers.metaverse.desc") 
              },
            ].map((tier) => (
              <motion.div
                key={tier.type}
                whileHover={{ y: -5 }}
                className={`flex flex-col rounded-2xl border p-8 ${
                  tier.featured 
                    ? 'border-wuyin-gold-bright/40 bg-wuyin-gold-bright/5 shadow-wuyin-glow' 
                    : 'border-white/10 bg-black/40'
                }`}
              >
                <h3 className="font-serif text-xl font-bold text-white">{tier.type}</h3>
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{tier.desc}</p>
                <div className="mt-8">
                  <p className="font-serif text-3xl font-bold text-wuyin-gold-bright">{tier.price}</p>
                </div>
                <button className={`mt-8 w-full rounded-lg py-3 text-xs font-bold tracking-widest uppercase transition-all ${
                  tier.featured 
                    ? 'bg-wuyin-gold-bright text-black hover:brightness-110' 
                    : 'border border-white/20 text-white hover:bg-white/5'
                }`}>
                  立即订票
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 仪式感剧场 */}
      <section id="timeline-theater" className="relative overflow-hidden border-b border-white/5 py-24 sm:py-32">
        <SectionGoldenBlocks variant={2} />
        <div className="container-wuyin relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <ScrollReveal variant="leftSoft" className="space-y-8">
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-wuyin-gold-bright">{t("timeline.modules.manifesto.kicker")}</p>
              <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">{t("timeline.modules.manifesto.title")}</h2>
              <p className="text-lg leading-relaxed text-neutral-300">{t("timeline.modules.manifesto.body")}</p>
              <div className="space-y-4">
                {['天罡三十六阶', '盟誓环节', '封印加冕'].map((item, i) => (
                  <div key={item} className="flex items-center gap-4">
                    <span className="font-serif text-wuyin-gold-bright">0{i+1}</span>
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
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
               <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <button className="group flex h-20 w-20 items-center justify-center rounded-full border border-wuyin-gold-bright/30 bg-black/40 backdrop-blur-sm transition-all hover:scale-110 hover:border-wuyin-gold-bright/60">
                   <svg viewBox="0 0 24 24" className="h-8 w-8 ml-1 text-wuyin-gold-bright" fill="currentColor">
                     <path d="M8 5v14l11-7z" />
                   </svg>
                 </button>
               </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 武者阵容 */}
      <section id="timeline-roster" className="relative overflow-hidden border-b border-white/5 bg-wuyin-surface py-24 sm:py-32">
        <SectionGoldenBlocks variant={1} />
        <div className="container-wuyin relative z-10">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">{t("timeline.roster.title")}</h2>
            <p className="mt-4 text-wuyin-muted">{t("timeline.roster.lead")}</p>
          </div>
          <FighterRoster />
        </div>
      </section>

      {/* 往期回顾 */}
      <section id="timeline-history" className="relative overflow-hidden py-24 sm:py-32">
        <div className="container-wuyin relative z-10">
          <div className="mb-16 flex items-end justify-between">
            <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">往期回顾</h2>
            <button className="text-xs font-bold uppercase tracking-[0.2em] text-wuyin-gold-bright hover:underline">查看全部集锦</button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <ScrollReveal key={i} delayMs={i * 80} className="group relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
                <img src={resources[`os_stage${i}_video`] || historyFallback} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60 z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg viewBox="0 0 24 24" className="h-10 w-10 text-white" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 z-20">
                  <p className="text-[10px] font-bold text-wuyin-gold-bright">{t("timeline.highlights.season")}</p>
                  <p className="text-xs text-white font-medium">{t("timeline.highlights.title")}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
