import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { useLocale } from "@/i18n/LocaleProvider";

export default function DomainCardsSection() {
  const { t } = useLocale();
  const valueCards = [
    {
      key: "culture",
      title: t("home.values.cards.culture.title"),
      body: t("home.values.cards.culture.body"),
    },
    {
      key: "social",
      title: t("home.values.cards.social.title"),
      body: t("home.values.cards.social.body"),
    },
    {
      key: "business",
      title: t("home.values.cards.business.title"),
      body: t("home.values.cards.business.body"),
    },
    {
      key: "investment",
      title: t("home.values.cards.investment.title"),
      body: t("home.values.cards.investment.body"),
    },
    {
      key: "ecosystem",
      title: t("home.values.cards.ecosystem.title"),
      body: t("home.values.cards.ecosystem.body"),
    },
  ];

  return (
    <section id="home-values" className="relative overflow-hidden border-b border-white/5 py-20 sm:py-28">
      <SectionGoldenBlocks variant={1} />
      <ScrollReveal className="relative z-10 container-wuyin">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-wuyin-gold-bright/85">
            {t("home.values.eyebrow")}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl">
            {t("home.values.title")}
          </h2>
          <p className="mt-5 text-sm leading-7 text-neutral-300 sm:text-base">
            {t("home.values.subtitle")}
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {valueCards.map((card, index) => (
            <article
              key={card.key}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-wuyin-gold-bright/30"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -right-10 -top-12 h-32 w-32 rounded-full bg-wuyin-gold-bright/10 blur-3xl" />
              </div>
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-wuyin-gold-bright/70">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-serif text-2xl text-white">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-300">{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
