import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { useLocale } from "@/i18n/LocaleProvider";
import lotusDetailButton from "../../官网首页素材/3.杭州小莲花/了解详情.png";
import lotusVisual from "../../官网首页素材/3.杭州小莲花/图层-0.png";

const lotusVideoUrl =
  "https://homevideo-1319530839.cos.ap-guangzhou.myqcloud.com/homevideo.mp4";

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
        <div className="relative mx-auto max-w-[63rem] overflow-hidden rounded-[1.9rem] border border-[rgb(var(--wuyin-gold-rgb)/0.18)] bg-[radial-gradient(circle_at_50%_102%,rgba(247,215,156,0.96),rgba(217,160,83,0.4)_16%,rgba(82,51,26,0.24)_34%,rgba(16,11,9,0)_54%),linear-gradient(90deg,#120d0b_0%,#1d140f_24%,#3b2515_56%,#2e1e11_76%,#16100d_100%)] shadow-[0_34px_90px_rgba(0,0,0,0.34)]">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0)_30%,rgba(0,0,0,0.08)_100%)]" />
          <div className="relative z-10 flex min-h-[19rem] flex-col justify-center gap-8 px-7 py-8 sm:px-10 sm:py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:px-14 lg:py-11">
            <div className="mx-auto w-full max-w-[18.5rem] lg:mx-0">
              <p className="text-[0.72rem] font-medium tracking-[0.02em] text-white/88 sm:text-xs">
                {copy.eyebrow}
              </p>
              <h2 className="mt-4 font-serif text-[2.05rem] font-bold leading-[1.18] text-white sm:text-[2.4rem] lg:text-[2.9rem]">
                {copy.title}
                <span className="block">{copy.subtitle}</span>
              </h2>

              <div className="mt-6 flex items-start gap-8 sm:gap-10">
                <div>
                  <p className="text-[2.15rem] font-bold leading-none text-white sm:text-[2.65rem]">
                    {copy.stat1Value}
                  </p>
                  <p className="mt-1.5 text-[0.72rem] leading-5 text-white/84 sm:text-xs">
                    {copy.stat1Label}
                  </p>
                </div>
                <div>
                  <p className="text-[2.15rem] font-bold leading-none text-white sm:text-[2.65rem]">
                    {copy.stat2Value}
                  </p>
                  <p className="mt-1.5 text-[0.72rem] leading-5 text-white/84 sm:text-xs">
                    {copy.stat2Label}
                  </p>
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

            <div className="mx-auto flex w-full max-w-[29rem] items-center justify-center lg:mx-0 lg:max-w-[31rem]">
              <div className="w-full overflow-hidden rounded-[1.35rem] bg-black shadow-[0_18px_54px_rgba(0,0,0,0.34)]">
                <div className="aspect-[1.84/1] w-full">
                  <video
                    src={lotusVideoUrl}
                    poster={lotusVisual}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
