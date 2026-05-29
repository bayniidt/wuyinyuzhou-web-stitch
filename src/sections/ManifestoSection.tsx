import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { useLocale } from "@/i18n/LocaleProvider";
import { useEffect, useState } from "react";
import manifestoOverviewImage from "../../官网首页素材/2.武印宣言/1-以武印心.jpg";
import manifestoYouthImage from "../../官网首页素材/2.武印宣言/2-少年之印.jpg";
import manifestoAdultImage from "../../官网首页素材/2.武印宣言/3-成年之印.jpg";
import manifestoWomenImage from "../../官网首页素材/2.武印宣言/4-女性之印.jpg";
import manifestoMarginImage from "../../官网首页素材/2.武印宣言/5-边缘之印.jpg";
import manifestoEraImage from "../../官网首页素材/2.武印宣言/6-时代之印.jpg";

export default function ManifestoSection() {
  const { t } = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);
  const voiceCards = [
    {
      key: "overview",
      image: manifestoOverviewImage,
      title: t("home.manifesto.title"),
      body: `${t("home.manifesto.p1")}${t("home.manifesto.p2")}`,
      quote: "以武印心：见自己・见众生・见天地",
    },
    {
      key: "women",
      image: manifestoWomenImage,
      title: t("home.manifesto.voices.women.title"),
      body: t("home.manifesto.voices.women.body"),
      quote: "一挺直腰杆，以内心力量，驱散所有胆怯。",
    },
    {
      key: "youth",
      image: manifestoYouthImage,
      title: t("home.manifesto.voices.youth.title"),
      body: t("home.manifesto.voices.youth.body"),
      quote: "止戈为武，方为少年武道初心。",
    },
    {
      key: "margin",
      image: manifestoMarginImage,
      title: t("home.manifesto.voices.margin.title"),
      body: t("home.manifesto.voices.margin.body"),
      quote: "一汗水为重，执着坚守，打破一切偏见标签。",
    },
    {
      key: "adult",
      image: manifestoAdultImage,
      title: t("home.manifesto.voices.adult.title"),
      body: t("home.manifesto.voices.adult.body"),
      quote: "一直面自我，与内心和解，勇敢突围。",
    },
    {
      key: "era",
      image: manifestoEraImage,
      title: t("home.manifesto.voices.era.title"),
      body: t("home.manifesto.voices.era.body"),
      quote: "一向内修行，降服己心，突破自我，震烁闪耀。",
    },
  ];
  const activeCard = voiceCards[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % voiceCards.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [voiceCards.length]);

  return (
    <section
      id="home-manifesto"
      className="relative overflow-hidden border-b border-white/5 bg-[#080909] py-15 sm:py-24 lg:py-28"
    >
      <SectionGoldenBlocks variant={0} intensity="subtle" />
      <ScrollReveal className="relative z-10 container-wuyin">
        <div className="overflow-hidden ">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.03fr)_minmax(0,0.97fr)] lg:items-center lg:gap-10 ">
            <div className="relative overflow-hidden rounded-[1.6rem] shadow-[0_22px_60px_rgba(0,0,0,0.3),0_0_28px_rgba(222,181,135,0.08)]">
              <img
                src={activeCard.image}
                alt="武印宣言"
                className="object-cover w-full h-full"
                decoding="async"
              />
            </div>

            <div className="flex flex-col justify-center px-1 lg:px-4">
              <h3 className="relative pl-6 font-serif text-3xl font-bold text-white sm:text-4xl">
                <span className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-full bg-[linear-gradient(180deg,#f3c58a,#b24c45)]" />
                {activeCard.title}
              </h3>
              <p className="mt-7 text-base leading-[2.1] text-white/92 sm:text-[1.05rem]">
                {activeCard.body}
              </p>
              <p className="mt-10 border-l border-white/18 pl-5 font-serif text-xl font-semibold text-white sm:text-[2rem]">
                {activeCard.quote}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-8">
          {voiceCards.map((card, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={card.key}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`切换到${card.title}`}
                className={[
                  "h-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuyin-gold-bright",
                  isActive
                    ? "w-10 bg-[linear-gradient(90deg,#f0c892,#d24a44)]"
                    : "w-2.5 bg-white/28 hover:bg-white/45",
                ].join(" ")}
              />
            );
          })}
        </div>
      </ScrollReveal>
    </section>
  );
}
