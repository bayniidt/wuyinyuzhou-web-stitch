import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { useLocale } from "@/i18n/LocaleProvider";
import { useState } from "react";
import valueCultureImage from "../../官网首页素材/4.武印视界战略价值/01.jpg";
import valueSocialImage from "../../官网首页素材/4.武印视界战略价值/02.jpg";
import valueBusinessImage from "../../官网首页素材/4.武印视界战略价值/03.jpg";
import valueInvestmentImage from "../../官网首页素材/4.武印视界战略价值/04.jpg";
import valueEcosystemImage from "../../官网首页素材/4.武印视界战略价值/05.jpg";

const valueKeys = ["culture", "social", "business", "investment", "ecosystem"] as const;

type ValueKey = (typeof valueKeys)[number];

export default function DomainCardsSection() {
  const { t } = useLocale();
  const [activeKey, setActiveKey] = useState<ValueKey>("culture");

  const valueCards: Record<
    ValueKey,
    {
      image: string;
      title: string;
      body: string;
    }
  > = {
    culture: {
      image: valueCultureImage,
      title: t("home.values.cards.culture.title"),
      body: t("home.values.cards.culture.body"),
    },
    social: {
      image: valueSocialImage,
      title: t("home.values.cards.social.title"),
      body: t("home.values.cards.social.body"),
    },
    business: {
      image: valueBusinessImage,
      title: t("home.values.cards.business.title"),
      body: t("home.values.cards.business.body"),
    },
    investment: {
      image: valueInvestmentImage,
      title: t("home.values.cards.investment.title"),
      body: t("home.values.cards.investment.body"),
    },
    ecosystem: {
      image: valueEcosystemImage,
      title: t("home.values.cards.ecosystem.title"),
      body: t("home.values.cards.ecosystem.body"),
    },
  };

  const activeCard = valueCards[activeKey];

  return (
    <section
      id="home-values"
      className="relative overflow-hidden border-b border-white/5 bg-[#0b0b0b] py-20 sm:py-24 lg:py-28"
    >
      <SectionGoldenBlocks variant={1} intensity="subtle" />
      <ScrollReveal className="relative z-10 container-wuyin">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-wuyin-gold-bright/82">
            {t("home.values.eyebrow")}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl">
            {t("home.values.title")}
          </h2>
          <p className="mt-4 text-sm leading-7 text-neutral-300 sm:text-base">
            {t("home.values.subtitle")}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5 text-sm text-white/72 sm:text-base">
          {valueKeys.map((key) => {
            const card = valueCards[key];
            const isActive = activeKey === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveKey(key)}
                className={[
                  "border-b pb-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuyin-gold-bright",
                  isActive
                    ? "border-wuyin-gold-bright text-white"
                    : "border-transparent text-white/72 hover:border-white/28 hover:text-white",
                ].join(" ")}
              >
                {card.title}
              </button>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-[63rem] overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 shadow-[0_32px_80px_rgba(0,0,0,0.28)]">
          <div className="grid min-h-[36rem] h-full lg:h-[32rem] lg:min-h-[32rem] lg:grid-cols-[minmax(0,0.54fr)_minmax(0,1.46fr)] lg:items-stretch">
            <div className="flex min-h-[16rem] h-full flex-col justify-center bg-[linear-gradient(180deg,rgba(0,0,0,0.9),rgba(15,15,15,0.82))] p-8 sm:p-10 lg:p-12">
              <h3 className="font-serif text-3xl text-white sm:text-4xl">{activeCard.title}</h3>
              <p className="mt-6 text-sm leading-8 text-neutral-300 sm:text-base">
                {activeCard.body}
              </p>
            </div>
            <div className="h-[20rem] min-h-[20rem] sm:h-[24rem] sm:min-h-[24rem] lg:h-full lg:min-h-[32rem]">
              <img
                src={activeCard.image}
                alt={activeCard.title}
                className="h-full w-full object-cover"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
