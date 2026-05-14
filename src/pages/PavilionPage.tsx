import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SynergyMap from "@/components/pavilion/SynergyMap";
import { useLocale } from "@/i18n/LocaleProvider";
import { useModuleResources } from "@/hooks/useModuleResources";
import { motion } from "framer-motion";
import { useMemo } from "react";

import heroFallback from "@/images/page3 (7).png";
import brandFallback from "@/images/page3 (1).png";

export default function PavilionPage() {
  const { t } = useLocale();
  const { resources, loading } = useModuleResources("pavilion");

  const brandItems = useMemo(
    () =>
      ["positioning", "symbols", "assets", "strategy", "mascot"].map((key) => ({
        key,
        title: t(`pavilion.brand.items.${key}.title`),
        body: t(`pavilion.brand.items.${key}.body`),
      })),
    [t],
  );

  const ecosystemItems = useMemo(
    () =>
      ["ip", "events", "digital", "media", "inheritance", "standard"].map((key) => ({
        key,
        title: t(`pavilion.ecosystem.items.${key}.title`),
        tag: t(`pavilion.ecosystem.items.${key}.tag`),
        body: t(`pavilion.ecosystem.items.${key}.body`),
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

  const heroImage = resources["gal_hq_hero_bg"] || heroFallback;
  const brandImage = resources["pavilion_brand_image"] || brandFallback;

  return (
    <div className="bg-black">
      <section className="relative flex min-h-[58vh] items-center justify-center overflow-hidden border-b border-white/5 bg-[#080706]">
        <SectionGoldenBlocks density="sparse" intensity="subtle" variant={1} />
        {heroImage ? (
          <img
            src={heroImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
        ) : null}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(228,184,74,0.16),transparent_55%),linear-gradient(180deg,#080706_0%,#0f0d0b_45%,#080706_100%)]" />
        <div className="container-wuyin relative z-10 py-20 text-center">
          <ScrollReveal variant="upGlow" className="wuyin-reveal-tech" visibleClassName="wuyin-reveal-tech-visible">
            <p className="text-xs font-bold uppercase tracking-[0.5em] text-wuyin-gold-bright">{t("pavilion.hero.kicker")}</p>
            <h1 className="mt-6 font-serif text-5xl font-black text-white sm:text-7xl">{t("pavilion.hero.title")}</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-300">{t("pavilion.hero.lead")}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {["ip", "events", "digital", "media", "inheritance", "standard"].map((key) => (
                <span
                  key={key}
                  className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs tracking-[0.24em] text-neutral-200"
                >
                  {t(`pavilion.hero.tags.${key}`)}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="pavilion-brand" className="relative overflow-hidden border-b border-white/5 bg-wuyin-surface py-20 sm:py-32">
        <SectionGoldenBlocks variant={0} />
        <div className="container-wuyin relative z-10 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <ScrollReveal variant="leftSoft" className="space-y-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-wuyin-gold-bright">{t("pavilion.brand.kicker")}</p>
              <h2 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl">{t("pavilion.brand.title")}</h2>
            </div>
            <p className="text-lg leading-relaxed text-neutral-300">{t("pavilion.brand.lead")}</p>
            <blockquote className="border-l border-wuyin-gold-bright/30 pl-5 font-serif text-2xl leading-relaxed text-neutral-100">
              {t("pavilion.brand.quote")}
            </blockquote>
            <article className="overflow-hidden rounded-[32px] border border-white/10 bg-black/30">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={brandImage} alt="" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent" />
              </div>
            </article>
          </ScrollReveal>
          <ScrollReveal variant="rightSoft" className="grid gap-4 sm:grid-cols-2">
            {brandItems.map((item, index) => (
              <motion.article
                key={item.key}
                whileHover={{ y: -5 }}
                className={[
                  "rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6",
                  index === 4 ? "sm:col-span-2" : "",
                ].join(" ")}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-wuyin-gold-bright/70">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 font-serif text-2xl text-white">{item.title}</p>
                <p className="mt-4 text-sm leading-7 text-neutral-300">{item.body}</p>
              </motion.article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section id="pavilion-ecosystem" className="relative overflow-hidden py-24 sm:py-32">
        <SectionGoldenBlocks variant={2} />
        <div className="container-wuyin relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-wuyin-gold-bright">{t("pavilion.ecosystem.kicker")}</p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl">{t("pavilion.ecosystem.title")}</h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-300">{t("pavilion.ecosystem.lead")}</p>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <ScrollReveal variant="leftSoft">
              <SynergyMap />
            </ScrollReveal>
            <ScrollReveal variant="rightSoft" className="grid gap-4 sm:grid-cols-2">
              {ecosystemItems.map((item) => (
                <article key={item.key} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-wuyin-gold-bright/75">
                    {item.tag}
                  </p>
                  <p className="mt-3 font-serif text-2xl text-white">{item.title}</p>
                  <p className="mt-4 text-sm leading-7 text-neutral-300">{item.body}</p>
                </article>
              ))}
            </ScrollReveal>
          </div>

          <blockquote className="mx-auto mt-12 max-w-4xl border-t border-white/10 pt-8 text-center font-serif text-2xl leading-relaxed text-neutral-100">
            {t("pavilion.ecosystem.quote")}
          </blockquote>
        </div>
      </section>
    </div>
  );
}
