import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks";
import ScrollReveal from "@/components/motion/ScrollReveal";
import PartnerLogos from "@/components/partners/PartnerLogos";
import { useLocale } from "@/i18n/LocaleProvider";
import { useModuleResources } from "@/hooks/useModuleResources";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import heroFallback from "@/images/page4 (5).png";
import partnershipFallback from "@/images/page4 (1).png";

const domainKeys = ["brand", "event", "club", "gov", "invest", "media"] as const;
type DomainKey = (typeof domainKeys)[number];

export default function PartnershipPage() {
  const { t } = useLocale();
  const { resources, loading } = useModuleResources("partnership");
  const partnerHero = resources["all_hero_bg"] || heroFallback;

  const domains = useMemo(
    () =>
      domainKeys.map((id) => ({
        id,
        title: t(`partnership.domains.items.${id}.title`),
        tag: t(`partnership.domains.items.${id}.tag`),
        summary: t(`partnership.domains.items.${id}.summary`),
        pain: t(`partnership.domains.items.${id}.pain`),
        value1: t(`partnership.domains.items.${id}.value1`),
        value2: t(`partnership.domains.items.${id}.value2`),
        value3: t(`partnership.domains.items.${id}.value3`),
        value4: t(`partnership.domains.items.${id}.value4`),
        fit: t(`partnership.domains.items.${id}.fit`),
      })),
    [t],
  );

  const [activeDomain, setActiveDomain] = useState<DomainKey>("brand");
  const activeItem = domains.find((item) => item.id === activeDomain) ?? domains[0];
  const activeVisual = resources[`partnership_${activeDomain}_image`] || partnershipFallback;

  const valueItems = useMemo(
    () =>
      ["culture", "exposure", "conversion", "asset"].map((key) => ({
        key,
        title: t(`partnership.value.items.${key}.title`),
        body: t(`partnership.value.items.${key}.body`),
      })),
    [t],
  );

  const safeguardItems = useMemo(
    () =>
      ["team", "contract", "risk", "exclusive"].map((key) => ({
        key,
        title: t(`partnership.safeguards.items.${key}.title`),
        body: t(`partnership.safeguards.items.${key}.body`),
      })),
    [t],
  );

  const [formData, setFormData] = useState({
    company: "",
    contact: "",
    intent: t("partnership.form.options.brand"),
    description: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/partnership/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({
          company: "",
          contact: "",
          intent: t("partnership.form.options.brand"),
          description: "",
        });
        alert(t("partnership.form.success"));
      } else {
        alert(t("partnership.form.error"));
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert(t("partnership.form.networkError"));
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="h-8 w-8 rounded-full border-4 border-wuyin-gold-bright border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-black">
      <section className="relative flex min-h-[56vh] items-center justify-center overflow-hidden border-b border-white/5 bg-[#080706]">
        <SectionGoldenBlocks density="sparse" intensity="subtle" variant={1} />
        <img src={partnerHero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black" />
        <div className="container-wuyin relative z-10 py-20 text-center">
          <ScrollReveal variant="upGlow" className="wuyin-reveal-tech" visibleClassName="wuyin-reveal-tech-visible">
            <p className="text-xs font-bold uppercase tracking-[0.5em] text-wuyin-gold-bright">{t("partnership.hero.kicker")}</p>
            <h1 className="mt-6 font-serif text-5xl font-black text-white sm:text-7xl">{t("partnership.hero.title")}</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-300">{t("partnership.hero.lead")}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {domainKeys.map((key) => (
                <span
                  key={key}
                  className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs tracking-[0.24em] text-neutral-200"
                >
                  {t(`partnership.hero.tags.${key}`)}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-black">
        <PartnerLogos />
      </section>

      <section id="partnership-value" className="relative overflow-hidden border-b border-white/5 bg-[#0b0d11] py-20 sm:py-32">
        <SectionGoldenBlocks variant={1} />
        <div className="relative z-10 container-wuyin">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-wuyin-gold-bright">{t("partnership.value.kicker")}</p>
            <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl">{t("partnership.value.title")}</h2>
            <p className="mt-6 text-lg leading-8 text-neutral-300">{t("partnership.value.lead")}</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {valueItems.map((item, index) => (
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
        </div>
      </section>

      <section id="partnership-domains" className="relative overflow-hidden border-b border-white/5 bg-black py-24 sm:py-32">
        <div className="container-wuyin relative z-10">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">{t("partnership.domains.title")}</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-neutral-300">{t("partnership.domains.lead")}</p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 xl:grid-cols-6">
            {domains.map((item) => {
              const isActive = item.id === activeDomain;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveDomain(item.id)}
                  className={[
                    "rounded-2xl border px-4 py-5 text-left transition-all",
                    isActive
                      ? "border-wuyin-gold-bright/40 bg-wuyin-gold-bright/10 shadow-wuyin-glow"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]",
                  ].join(" ")}
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-wuyin-gold-bright/75">
                    {item.tag}
                  </p>
                  <p className="mt-3 font-serif text-xl text-white">{item.title}</p>
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid gap-8 rounded-[32px] border border-white/10 bg-[#0a0a0a] p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <article className="mb-6 overflow-hidden rounded-[28px] border border-white/10 bg-black/30">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    key={activeDomain}
                    src={activeVisual}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-wuyin-gold-bright/80">
                      {activeItem.tag}
                    </p>
                    <p className="mt-2 font-serif text-2xl text-white">{activeItem.title}</p>
                  </div>
                </div>
              </article>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-wuyin-gold-bright/80">
                {activeItem.tag}
              </p>
              <h3 className="mt-4 font-serif text-3xl text-white sm:text-4xl">{activeItem.title}</h3>
              <p className="mt-5 text-base leading-8 text-neutral-300">{activeItem.summary}</p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-500">
                  {t("partnership.domains.painLabel")}
                </p>
                <p className="mt-3 text-sm leading-7 text-neutral-300">{activeItem.pain}</p>
              </div>
              <div className="mt-6 rounded-2xl border border-wuyin-gold-bright/15 bg-wuyin-gold-bright/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-wuyin-gold-bright/85">
                  {t("partnership.domains.fitLabel")}
                </p>
                <p className="mt-3 text-sm leading-7 text-neutral-200">{activeItem.fit}</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[activeItem.value1, activeItem.value2, activeItem.value3, activeItem.value4].map((value, index) => (
                <article key={`${activeItem.id}-${index}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-wuyin-gold-bright/70">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-neutral-300">{value}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/5 bg-[#0b0d11] py-24 sm:py-32">
        <SectionGoldenBlocks variant={0} />
        <div className="container-wuyin relative z-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">{t("partnership.flow.title")}</h2>
              <p className="mt-4 text-lg leading-8 text-neutral-300">{t("partnership.flow.lead")}</p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  { step: "01", label: t("partnership.flow.steps.s1.label"), desc: t("partnership.flow.steps.s1.desc") },
                  { step: "02", label: t("partnership.flow.steps.s2.label"), desc: t("partnership.flow.steps.s2.desc") },
                  { step: "03", label: t("partnership.flow.steps.s3.label"), desc: t("partnership.flow.steps.s3.desc") },
                  { step: "04", label: t("partnership.flow.steps.s4.label"), desc: t("partnership.flow.steps.s4.desc") },
                ].map((item) => (
                  <div key={item.step} className="rounded-2xl border border-white/10 bg-black/35 p-5">
                    <span className="font-serif text-4xl font-black text-wuyin-gold-bright/25">{item.step}</span>
                    <h4 className="mt-4 font-serif text-2xl text-white">{item.label}</h4>
                    <p className="mt-3 text-sm leading-7 text-neutral-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl">{t("partnership.safeguards.title")}</h2>
              <p className="mt-4 text-lg leading-8 text-neutral-300">{t("partnership.safeguards.lead")}</p>
              <div className="mt-10 space-y-4">
                {safeguardItems.map((item) => (
                  <article key={item.key} className="rounded-2xl border border-white/10 bg-black/35 p-5">
                    <p className="font-serif text-2xl text-white">{item.title}</p>
                    <p className="mt-3 text-sm leading-7 text-neutral-300">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="partnership-form" className="relative overflow-hidden py-24 sm:py-32">
        <SectionGoldenBlocks variant={0} />
        <div className="container-wuyin relative z-10 mx-auto max-w-3xl">
          <ScrollReveal className="rounded-3xl border border-white/10 bg-wuyin-elevated/40 p-8 backdrop-blur-xl sm:p-12">
            <h2 className="text-center font-serif text-3xl font-bold text-white">{t("partnership.form.title")}</h2>
            <p className="mt-4 text-center text-sm text-neutral-500">{t("partnership.form.lead")}</p>

            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">{t("partnership.form.company")}</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-5 py-3 text-white focus:border-wuyin-gold-bright/40 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">{t("partnership.form.contact")}</label>
                  <input
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-5 py-3 text-white focus:border-wuyin-gold-bright/40 focus:outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">{t("partnership.form.intent")}</label>
                <select
                  value={formData.intent}
                  onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                  className="w-full appearance-none rounded-lg border border-white/10 bg-black/40 px-5 py-3 text-white focus:border-wuyin-gold-bright/40 focus:outline-none"
                >
                  <option>{t("partnership.form.options.brand")}</option>
                  <option>{t("partnership.form.options.event")}</option>
                  <option>{t("partnership.form.options.club")}</option>
                  <option>{t("partnership.form.options.gov")}</option>
                  <option>{t("partnership.form.options.invest")}</option>
                  <option>{t("partnership.form.options.media")}</option>
                  <option>{t("partnership.form.options.other")}</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">{t("partnership.form.desc")}</label>
                <textarea
                  rows={5}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full resize-none rounded-lg border border-white/10 bg-black/40 px-5 py-3 text-white focus:border-wuyin-gold-bright/40 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-xl bg-linear-to-r from-wuyin-gold-bright to-wuyin-accent py-4 text-xs font-black uppercase tracking-[0.2em] text-black shadow-wuyin-glow transition hover:brightness-110 disabled:opacity-50"
              >
                {submitting ? t("partnership.form.submitting") : t("partnership.form.submit")}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
