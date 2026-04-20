import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks";
import ScrollReveal from "@/components/motion/ScrollReveal";
import PartnerLogos from "@/components/partners/PartnerLogos";
import { useLocale } from "@/i18n/LocaleProvider";
import imgPartnerHero from "@/images/模块 4/unnamed.png";
import { useMemo } from "react";

export default function PartnershipPage() {
  const { t } = useLocale();

  const domains = useMemo(() => [
    { id: 'brand', title: t("partnership.domains.items.brand.title"), code: "BRAND", body: t("partnership.domains.items.brand.body") },
    { id: 'event', title: t("partnership.domains.items.event.title"), code: "EVENT", body: t("partnership.domains.items.event.body") },
    { id: 'club', title: t("partnership.domains.items.club.title"), code: "CLUB", body: t("partnership.domains.items.club.body") },
    { id: 'gov', title: t("partnership.domains.items.gov.title"), code: "GOV", body: t("partnership.domains.items.gov.body") },
    { id: 'invest', title: t("partnership.domains.items.invest.title"), code: "INVEST", body: t("partnership.domains.items.invest.body") },
    { id: 'media', title: t("partnership.domains.items.media.title"), code: "MEDIA", body: t("partnership.domains.items.media.body") },
  ], [t]);

  return (
    <div className="bg-black">
      {/* 沉浸式首屏 */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden border-b border-white/5 bg-[#080706]">
        <SectionGoldenBlocks density="sparse" intensity="subtle" variant={1} />
        <img
          src={imgPartnerHero}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black" />
        <div className="container-wuyin relative z-10 py-20 text-center">
          <ScrollReveal variant="upGlow" className="wuyin-reveal-tech" visibleClassName="wuyin-reveal-tech-visible">
            <p className="text-xs font-bold uppercase tracking-[0.5em] text-wuyin-gold-bright">{t("partnership.hero.kicker")}</p>
            <h1 className="mt-6 font-serif text-5xl font-black text-white sm:text-7xl">{t("partnership.hero.title")}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">{t("partnership.hero.lead")}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* 合作伙伴 Logo 墙 */}
      <section className="bg-black">
        <PartnerLogos />
      </section>

      {/* 合作领域网格 */}
      <section id="partnership-brand" className="relative overflow-hidden border-b border-white/5 bg-[#0b0d11] py-20 sm:py-32">
        <SectionGoldenBlocks variant={1} />
        <div className="relative z-10 container-wuyin mx-auto">
          <div className="mb-16 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-4xl text-white sm:text-5xl">{t("partnership.domains.title")}</h2>
              <p className="mt-4 max-w-2xl text-lg text-neutral-400">{t("partnership.domains.lead")}</p>
            </div>
            <span className="hidden text-[10px] tracking-[0.3em] text-neutral-500 sm:inline">MATRIX</span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {domains.map((item, i) => (
              <ScrollReveal
                key={item.id}
                delayMs={i * 50}
                className="group relative min-h-[280px] rounded-2xl border border-white/10 bg-linear-to-br from-[#141821] via-[#14161d] to-[#12141a] p-8 transition-all hover:-translate-y-1 hover:border-wuyin-gold-bright/30"
              >
                <div className="mb-10 flex items-start justify-between">
                  <div className="h-10 w-10 rounded-lg bg-wuyin-gold-bright/10 flex items-center justify-center text-wuyin-gold-bright">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                       <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <span className="text-[10px] tracking-[0.2em] text-neutral-600 font-bold">{item.code}</span>
                </div>
                <h3 className="font-serif text-2xl leading-none text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-400">{item.body}</p>
                <p className="mt-10 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-wuyin-gold-bright uppercase cursor-pointer hover:underline">
                  {t("news.readMore")}
                  <span aria-hidden>➜</span>
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 合作流程图解 */}
      <section className="relative overflow-hidden border-b border-white/5 bg-black py-24 sm:py-32">
        <div className="container-wuyin relative z-10">
          <div className="mb-16 text-center">
             <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">{t("partnership.flow.title")}</h2>
             <p className="mt-4 text-wuyin-muted">{t("partnership.flow.lead")}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-4">
             {[
               { step: "01", label: t("partnership.flow.steps.s1.label"), desc: t("partnership.flow.steps.s1.desc") },
               { step: "02", label: t("partnership.flow.steps.s2.label"), desc: t("partnership.flow.steps.s2.desc") },
               { step: "03", label: t("partnership.flow.steps.s3.label"), desc: t("partnership.flow.steps.s3.desc") },
               { step: "04", label: t("partnership.flow.steps.s4.label"), desc: t("partnership.flow.steps.s4.desc") },
             ].map((item, i) => (
               <div key={item.step} className="relative p-6 rounded-xl border border-white/5 bg-[#0a0a0a]">
                 <span className="font-serif text-4xl font-black text-wuyin-gold-bright/20">{item.step}</span>
                 <h4 className="mt-4 font-serif text-xl font-bold text-white">{item.label}</h4>
                 <p className="mt-2 text-xs text-neutral-500">{item.desc}</p>
                 {i < 3 && (
                   <div className="hidden sm:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-wuyin-gold-bright/20">➜</div>
                 )}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 合作申请表 */}
      <section id="partnership-form" className="relative overflow-hidden py-24 sm:py-32">
        <SectionGoldenBlocks variant={0} />
        <div className="container-wuyin relative z-10 max-w-3xl mx-auto">
          <ScrollReveal className="rounded-3xl border border-white/10 bg-wuyin-elevated/40 p-8 sm:p-12 backdrop-blur-xl">
             <h2 className="font-serif text-3xl font-bold text-white text-center">{t("partnership.form.title")}</h2>
             <p className="mt-4 text-sm text-neutral-500 text-center">{t("partnership.form.lead")}</p>
             
             <form className="mt-12 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{t("partnership.form.company")}</label>
                      <input type="text" className="w-full rounded-lg border border-white/10 bg-black/40 px-5 py-3 text-white focus:border-wuyin-gold-bright/40 focus:outline-none" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{t("partnership.form.contact")}</label>
                      <input type="text" className="w-full rounded-lg border border-white/10 bg-black/40 px-5 py-3 text-white focus:border-wuyin-gold-bright/40 focus:outline-none" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{t("partnership.form.intent")}</label>
                   <select className="w-full rounded-lg border border-white/10 bg-black/40 px-5 py-3 text-white focus:border-wuyin-gold-bright/40 focus:outline-none appearance-none">
                      <option>{t("partnership.form.options.brand")}</option>
                      <option>{t("partnership.form.options.event")}</option>
                      <option>{t("partnership.form.options.invest")}</option>
                      <option>{t("partnership.form.options.media")}</option>
                      <option>{t("partnership.form.options.other")}</option>
                   </select>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{t("partnership.form.desc")}</label>
                   <textarea rows={4} className="w-full rounded-lg border border-white/10 bg-black/40 px-5 py-3 text-white focus:border-wuyin-gold-bright/40 focus:outline-none resize-none"></textarea>
                </div>
                <button type="submit" className="w-full rounded-xl bg-linear-to-r from-wuyin-gold-bright to-wuyin-accent py-4 text-xs font-black uppercase tracking-[0.2em] text-black shadow-wuyin-glow transition hover:brightness-110">
                   {t("partnership.form.submit")}
                </button>
             </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
