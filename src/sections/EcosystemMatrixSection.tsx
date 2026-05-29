import ScrollReveal from "@/components/motion/ScrollReveal";
import { useLocale } from "@/i18n/LocaleProvider";
import { useState } from "react";
import logoGongfu from "@/images/logo1000X400透明底/功夫印.png";
import logoYincheng from "@/images/logo1000X400透明底/印承天下.png";
import logoWuyinMedia from "@/images/logo1000X400透明底/武印传媒.png";
import logoWuyinStandard from "@/images/logo1000X400透明底/武印标准.png";
import logoWuyinMeng from "@/images/logo1000X400透明底/武印盟.png";
import logoWuyinGe from "@/images/logo1000X400透明底/武印阁.png";
import matrixImage01 from "../../官网首页素材/5.武印世界生态布局/01.jpg";
import matrixImage02 from "../../官网首页素材/5.武印世界生态布局/02.jpg";
import matrixImage03 from "../../官网首页素材/5.武印世界生态布局/03.jpg";
import matrixImage04 from "../../官网首页素材/5.武印世界生态布局/04.jpg";
import matrixImage05 from "../../官网首页素材/5.武印世界生态布局/05.jpg";
import matrixImage06 from "../../官网首页素材/5.武印世界生态布局/06.jpg";

const rowKeys = ["wuyinge", "gongfuyin", "wuyinmeng", "standard", "media", "yincheng"] as const;

type RowKey = (typeof rowKeys)[number];

export default function EcosystemMatrixSection() {
  const { t } = useLocale();
  const [activeKey, setActiveKey] = useState<RowKey>("wuyinge");

  const rows: Record<
    RowKey,
    {
      logo: string;
      alt: string;
      image: string;
    }
  > = {
    wuyinge: {
      logo: logoWuyinGe,
      alt: "武印阁",
      image: matrixImage01,
    },
    gongfuyin: {
      logo: logoGongfu,
      alt: "功夫印",
      image: matrixImage02,
    },
    wuyinmeng: {
      logo: logoWuyinMeng,
      alt: "武印盟",
      image: matrixImage03,
    },
    standard: {
      logo: logoWuyinStandard,
      alt: "武印标准",
      image: matrixImage04,
    },
    media: {
      logo: logoWuyinMedia,
      alt: "武印传媒",
      image: matrixImage05,
    },
    yincheng: {
      logo: logoYincheng,
      alt: "印承天下",
      image: matrixImage06,
    },
  };

  const activeImage = rows[activeKey].image;

  return (
    <section id="home-matrix" className="border-b border-white/5 bg-[#070908]">
      <ScrollReveal>
        <div className="max-w-5xl px-6 pt-16 pb-10 mx-auto text-center sm:pb-12 sm:pt-18 lg:pb-14 lg:pt-20">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-white/56 sm:text-xs">
            {t("home.ecosystem.eyebrow")}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-[3.6rem]">
            {t("home.ecosystem.title")}
          </h2>
          <p className="max-w-4xl mx-auto mt-5 text-sm leading-7 text-white/68 sm:text-base sm:leading-8">
            {t("home.ecosystem.subtitle")}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="relative overflow-hidden bg-black">
          <img
            src={activeImage}
            alt=""
            className="absolute inset-0 object-cover w-full h-full transition duration-300"
            decoding="async"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.08)_16%,rgba(0,0,0,0.12)_44%,rgba(0,0,0,0.28)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.52)_0%,rgba(0,0,0,0.2)_28%,rgba(0,0,0,0.1)_54%,rgba(0,0,0,0.18)_74%,rgba(0,0,0,0.4)_100%)]" />

          <div className="relative z-10 min-h-[36rem] px-4 py-8 sm:min-h-[44rem] sm:px-8 sm:py-10 lg:min-h-[54rem] lg:px-14 lg:py-12">

            <div className="relative flex flex-col justify-center h-full gap-6 sm:gap-7 lg:gap-9">
              {rowKeys.map((key) => {
                const row = rows[key];
                const isActive = activeKey === key;

                return (
                  <button
                    key={key}
                    type="button"
                    onMouseEnter={() => setActiveKey(key)}
                    onFocus={() => setActiveKey(key)}
                    onClick={() => setActiveKey(key)}
                    className={[
                      "group flex w-full items-center justify-between gap-6 border border-transparent pr-2 text-left transition sm:pr-4 lg:pr-8",
                      "min-h-[4.75rem] sm:min-h-[5rem] lg:min-h-[5.35rem]",
                      isActive
                        ? "bg-[linear-gradient(90deg,rgba(255,255,255,0.11)_0%,rgba(255,255,255,0.05)_44%,rgba(255,255,255,0.02)_100%)] border-white/8 shadow-[0_10px_30px_rgba(0,0,0,0.16)]"
                        : "bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_44%,rgba(255,255,255,0.015)_100%)] hover:bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.04)_44%,rgba(255,255,255,0.02)_100%)]",
                    ].join(" ")}
                  >
                    <span className="flex w-[14.5rem] items-center pl-6 sm:w-[17rem] sm:pl-8 lg:w-[18.5rem] lg:pl-9">
                      <img
                        src={row.logo}
                        alt={row.alt}
                        className={[
                          "h-auto w-full max-w-[12rem] object-contain object-left transition sm:max-w-[13rem] lg:max-w-[14.2rem]",
                          isActive
                            ? "opacity-100 drop-shadow-[0_0_18px_rgba(255,255,255,0.08)]"
                            : " group-hover:opacity-100",
                        ].join(" ")}
                        decoding="async"
                      />
                    </span>
                    <span
                      aria-hidden
                      className={[
                        "text-[2.05rem] leading-none text-white transition sm:text-[2.3rem] lg:text-[2.7rem]",
                        isActive
                          ? "opacity-100 drop-shadow-[0_0_18px_rgba(255,255,255,0.14)]"
                          : "opacity-86 group-hover:opacity-100",
                      ].join(" ")}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
