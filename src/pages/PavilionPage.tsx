import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks"
import ScrollReveal from "@/components/motion/ScrollReveal"
import LiveBoard from "@/components/pavilion/LiveBoard"
import SynergyMap from "@/components/pavilion/SynergyMap"
import { useLocale } from "@/i18n/LocaleProvider"
import imgCase1 from "@/images/武印阁/unnamed (1).png"
import imgCase2 from "@/images/武印阁/unnamed (2).png"
import imgCase3 from "@/images/武印阁/unnamed (3).png"
import imgCase4 from "@/images/武印阁/unnamed.png"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

function CertificateVerification() {
  const { t } = useLocale();
  const [isVerifying, setIsVerifying] = useState(false);
  const [showCert, setShowShowCert] = useState(false);

  const handleVerify = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setShowShowCert(true);
    }, 2000);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-8 sm:p-12">
      <div className="max-w-md mx-auto text-center">
        <h3 className="font-serif text-2xl font-bold text-white">{t("pavilion.standard.certSystem")}</h3>
        <p className="mt-2 text-sm text-neutral-500">{t("pavilion.standard.certInputHint")}</p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <input 
            type="text" 
            placeholder="WY-2026-XXXX"
            className="flex-1 rounded-lg border border-white/20 bg-black/40 px-5 py-3 text-white placeholder:text-neutral-700 focus:border-wuyin-gold-bright/40 focus:outline-none"
          />
          <button 
            onClick={handleVerify}
            disabled={isVerifying}
            className="rounded-lg bg-wuyin-gold-bright px-8 py-3 text-sm font-bold text-black transition hover:brightness-110 disabled:opacity-50"
          >
            {isVerifying ? t("pavilion.standard.verifying") : t("pavilion.standard.verifyCta")}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showCert && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="mt-16 mx-auto max-w-2xl overflow-hidden rounded-xl border border-wuyin-gold-bright/30 bg-[#111] p-8 shadow-wuyin-glow"
          >
            <div className="relative border-2 border-wuyin-gold-bright/20 p-10">
              <div className="absolute top-4 right-4 h-20 w-20 opacity-20">
                <svg viewBox="0 0 100 100" className="fill-wuyin-gold-bright">
                  <path d="M50 0L61.8 38.2H100L70.9 61.8L82.7 100L50 76.4L17.3 100L29.1 61.8L0 38.2H38.2L50 0Z" />
                </svg>
              </div>
              <p className="font-serif text-[10px] tracking-[0.4em] text-wuyin-gold-bright uppercase">Official Certification</p>
              <h4 className="mt-6 font-serif text-4xl font-bold text-white">{t("pavilion.standard.certTitle")}</h4>
              <div className="mt-10 grid grid-cols-2 gap-8 text-left">
                <div>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest">{t("pavilion.standard.certHolder")}</p>
                  <p className="mt-1 font-serif text-xl text-white">{t("pavilion.standard.certHolderName")}</p>
                </div>
                <div>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest">{t("pavilion.standard.certType")}</p>
                  <p className="mt-1 font-serif text-xl text-white">{t("pavilion.standard.certTypeName")}</p>
                </div>
              </div>
              <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-8">
                <div className="h-16 w-16 bg-white p-1">
                   <div className="h-full w-full bg-black flex items-center justify-center text-[6px] text-white">{t("pavilion.standard.qrPlaceholder")}</div>
                </div>
                <button 
                  onClick={() => setShowShowCert(false)}
                  className="text-xs text-neutral-500 hover:text-white"
                >
                  {t("pavilion.standard.closePreview")}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PavilionPage() {
  const { t } = useLocale();

  return (
    <div className="bg-black">
      {/* 沉浸式首屏 */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden border-b border-white/5 bg-[#080706]">
        <SectionGoldenBlocks density="sparse" intensity="subtle" variant={1} />
        <div className="container-wuyin relative z-10 py-20 text-center">
          <ScrollReveal variant="upGlow" className="wuyin-reveal-tech" visibleClassName="wuyin-reveal-tech-visible">
            <p className="text-xs font-bold uppercase tracking-[0.5em] text-wuyin-gold-bright">{t("pavilion.hero.kicker")}</p>
            <h1 className="mt-6 font-serif text-5xl font-black text-white sm:text-7xl">{t("pavilion.hero.title")}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">{t("pavilion.hero.lead")}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* 六位一体导图 */}
      <section id="pavilion-synergy" className="relative overflow-hidden border-b border-white/5 bg-wuyin-surface py-20 sm:py-32">
        <SectionGoldenBlocks variant={0} />
        <div className="container-wuyin relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <ScrollReveal variant="leftSoft" className="space-y-8">
              <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">{t("pavilion.synergy.title")}</h2>
              <p className="text-lg leading-relaxed text-neutral-300">
                {t("pavilion.synergy.body")}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-white/5 bg-black/40 p-5">
                   <p className="text-xs font-bold text-wuyin-gold-bright">100%</p>
                   <p className="text-[10px] text-neutral-500 uppercase mt-1">{t("pavilion.synergy.stats.linkage")}</p>
                </div>
                <div className="rounded-lg border border-white/5 bg-black/40 p-5">
                   <p className="text-xs font-bold text-wuyin-gold-bright">24/7</p>
                   <p className="text-[10px] text-neutral-500 uppercase mt-1">{t("pavilion.synergy.stats.protection")}</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="rightSoft">
              <SynergyMap />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 数字科技看板 */}
      <section id="pavilion-digital" className="relative overflow-hidden border-b border-white/5 py-24 sm:py-32">
        <SectionGoldenBlocks variant={2} />
        <div className="container-wuyin relative z-10">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">{t("pavilion.digital.title")}</h2>
            <p className="mt-4 text-wuyin-muted">{t("pavilion.digital.lead")}</p>
          </div>
          <LiveBoard />
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
             <div className="aspect-video rounded-xl border border-white/10 bg-neutral-950 flex items-center justify-center">
               <p className="text-neutral-600 font-serif">{t("pavilion.digital.browserPreview")}</p>
             </div>
             <div className="aspect-video rounded-xl border border-white/10 bg-neutral-950 flex items-center justify-center">
               <p className="text-neutral-600 font-serif">{t("pavilion.digital.valuationCurve")}</p>
             </div>
          </div>
        </div>
      </section>

      {/* 标准认证验真 */}
      <section id="pavilion-standard" className="relative overflow-hidden border-b border-white/5 bg-wuyin-surface py-24 sm:py-32">
        <SectionGoldenBlocks variant={1} />
        <div className="container-wuyin relative z-10">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">{t("pavilion.standard.title")}</h2>
            <p className="mt-4 text-wuyin-muted">{t("pavilion.standard.lead")}</p>
          </div>
          <CertificateVerification />
        </div>
      </section>

      {/* 资源中心与传媒 */}
      <section id="pavilion-media" className="relative overflow-hidden py-24 sm:py-32">
        <div className="container-wuyin relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
             <ScrollReveal variant="leftSoft" className="space-y-8">
               <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">{t("pavilion.media.title")}</h2>
               <p className="text-lg leading-relaxed text-neutral-300">
                 {t("pavilion.media.lead")}
               </p>
               <div className="flex gap-4">
                 <button className="rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold text-white hover:bg-white/10">{t("pavilion.media.downloadWhitepaper")}</button>
                 <button className="rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold text-white hover:bg-white/10">{t("pavilion.media.visitMediaLibrary")}</button>
               </div>
             </ScrollReveal>
             <ScrollReveal variant="rightSoft" className="grid grid-cols-2 gap-4">
               {[imgCase1, imgCase2, imgCase3, imgCase4].map((img, i) => (
                 <div key={i} className="aspect-square rounded-lg border border-white/5 bg-neutral-900 flex items-center justify-center group cursor-pointer hover:border-wuyin-gold-bright/30 transition-colors relative overflow-hidden">
                   <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 transition-all duration-500 group-hover:scale-110 group-hover:opacity-60" />
                   <p className="relative z-10 text-[10px] font-bold text-white group-hover:text-wuyin-gold-bright transition-colors">{t("pavilion.media.caseLabel")} 0{i+1}</p>
                 </div>
               ))}
             </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
