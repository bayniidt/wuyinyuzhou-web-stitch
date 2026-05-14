import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLocale } from "@/i18n/LocaleProvider";
import { useState } from "react";

const itemKeys = ["event", "digital", "tourism", "business", "partnership"] as const;

type ItemKey = (typeof itemKeys)[number];

export default function EcosystemMatrixSection() {
  const { t } = useLocale();
  const [activeKey, setActiveKey] = useState<ItemKey>("event");
  const items = itemKeys.map((key) => ({
    key,
    title: t(`home.ecosystem.items.${key}.title`),
    body: t(`home.ecosystem.items.${key}.body`),
  }));
  const activeItem = items.find((item) => item.key === activeKey) ?? items[0];

  return (
    <section id="home-matrix" className="border-b border-white/5 bg-wuyin-surface/40">
      <ScrollReveal className="container-wuyin pt-20 sm:pt-28">
        <SectionTitle
          eyebrow={t("home.ecosystem.eyebrow")}
          title={t("home.ecosystem.title")}
          subtitle={t("home.ecosystem.subtitle")}
        />
      </ScrollReveal>
      <div className="relative mt-10 overflow-hidden py-20 sm:mt-14 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(228,184,74,0.12),transparent_38%),linear-gradient(180deg,rgba(0,0,0,0.8),rgba(10,10,10,0.95))]" />
        <ScrollReveal className="relative z-10 container-wuyin grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="overflow-hidden rounded-[30px] border border-white/10 bg-black/35">
            {items.map((item, index) => {
              const isActive = item.key === activeKey;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActiveKey(item.key)}
                  className={[
                    "flex w-full items-start justify-between gap-4 border-b border-white/10 px-5 py-5 text-left transition-colors last:border-b-0 sm:px-6",
                    isActive ? "bg-white/[0.08]" : "hover:bg-white/[0.04]",
                  ].join(" ")}
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-wuyin-gold-bright/65">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-3 font-serif text-xl text-white">{item.title}</p>
                  </div>
                  <span className="pt-1 text-2xl leading-none text-wuyin-gold-bright/90">
                    {isActive ? "−" : "+"}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="space-y-6">
            <article className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-wuyin-gold-bright/80">
                {t("home.ecosystem.detailEyebrow")}
              </p>
              <h3 className="mt-4 font-serif text-3xl text-white">
                {activeItem.title}
              </h3>
              <p className="mt-5 text-sm leading-8 text-neutral-300 sm:text-base">
                {activeItem.body}
              </p>
            </article>

            <article className="rounded-[28px] border border-wuyin-gold-bright/20 bg-black/35 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-wuyin-gold-bright/80">
                {t("home.ecosystem.triad.eyebrow")}
              </p>
              <h3 className="mt-4 font-serif text-2xl text-white sm:text-3xl">
                {t("home.ecosystem.triad.title")}
              </h3>
              <p className="mt-4 text-sm leading-8 text-neutral-300 sm:text-base">
                {t("home.ecosystem.triad.body")}
              </p>
            </article>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
