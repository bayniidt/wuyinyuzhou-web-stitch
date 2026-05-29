import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { useLocale } from "@/i18n/LocaleProvider";
import lotusHeadline from "../../官网首页素材/3.杭州小莲花/+.png";
import lotusDetailButton from "../../官网首页素材/3.杭州小莲花/了解详情.png";
import lotusVisual from "../../官网首页素材/3.杭州小莲花/图层-0.png";

export default function LotusShowcaseSection() {
  const { locale } = useLocale();
  const copy =
    locale === "zh"
      ? {
          eyebrow: "武印视界·全球首发",
          title: "杭州 · 小莲花",
          subtitle: "万人共赴心灵之约",
          stat1Value: "18000+",
          stat1Label: "现场观众共赴盛会",
          stat2Value: "50+",
          stat2Label: "格斗名家深度共创",
          buttonAlt: "了解详情",
        }
      : {
          eyebrow: "Wuyin Vision Global Premiere",
          title: "Hangzhou Lotus",
          subtitle: "A shared appointment of 10,000 hearts",
          stat1Value: "18000+",
          stat1Label: "On-site audience",
          stat2Value: "50+",
          stat2Label: "Co-creating martial voices",
          buttonAlt: "Learn More",
        };

  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#090908] py-16 sm:py-20 lg:py-24">
      <SectionGoldenBlocks variant={0} intensity="subtle" />
      <ScrollReveal className="relative z-10 container-wuyin">
        <div className="relative overflow-hidden rounded-[2rem] border border-[rgb(var(--wuyin-gold-rgb)/0.12)] shadow-[0_32px_80px_rgba(0,0,0,0.24)]">
          <img
            src={lotusVisual}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            decoding="async"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.82),rgba(8,8,8,0.58)_38%,rgba(8,8,8,0.18)_100%)]" />
          <div className="relative z-10 grid min-h-[22rem] gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:p-10">
            <div className="max-w-md self-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-wuyin-gold-bright/80">
                {copy.eyebrow}
              </p>
              {locale === "zh" ? (
                <img
                  src={lotusHeadline}
                  alt={`${copy.title} ${copy.subtitle}`}
                  className="mt-5 w-full max-w-[25rem] object-contain"
                  decoding="async"
                />
              ) : (
                <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
                  {copy.title}
                  <span className="block">{copy.subtitle}</span>
                </h2>
              )}

              <div className="mt-8 flex gap-10">
                <div>
                  <p className="text-3xl font-bold text-white sm:text-4xl">{copy.stat1Value}</p>
                  <p className="mt-2 text-sm text-neutral-300">{copy.stat1Label}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white sm:text-4xl">{copy.stat2Value}</p>
                  <p className="mt-2 text-sm text-neutral-300">{copy.stat2Label}</p>
                </div>
              </div>

              <a
                href="#home-values"
                className="mt-8 inline-flex items-center justify-center rounded-full transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuyin-gold-bright"
              >
                <img
                  src={lotusDetailButton}
                  alt={copy.buttonAlt}
                  className="h-11 w-auto object-contain"
                  decoding="async"
                />
              </a>
            </div>

            <div aria-hidden />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
