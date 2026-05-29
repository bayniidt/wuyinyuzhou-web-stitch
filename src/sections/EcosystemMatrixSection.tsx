import ScrollReveal from "@/components/motion/ScrollReveal";
import { useLocale } from "@/i18n/LocaleProvider";
import { useState } from "react";
import logoGongfu from "@/images/logo1000X400透明底/功夫印.png";
import logoYincheng from "@/images/logo1000X400透明底/印承天下.png";
import logoWuyinMedia from "@/images/logo1000X400透明底/武印传媒.png";
import logoWuyinStandard from "@/images/logo1000X400透明底/武印标准.png";
import logoWuyinMeng from "@/images/logo1000X400透明底/武印盟.png";
import logoWuyinGe from "@/images/LOGO/武印阁logo/武印阁-透明.png";
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

  const rows: Record<RowKey, { logo: string; alt: string; image: string }> = {
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

  const activeRow = rows[activeKey];

  return (
    <section id="home-matrix" className="border-b border-white/5 bg-[#080908] py-20 sm:py-24 lg:py-28">
      <ScrollReveal className="container-wuyin">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-wuyin-gold-bright/82">
            {t("home.ecosystem.eyebrow")}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl">
            {t("home.ecosystem.title")}
          </h2>
          <p className="mt-4 text-sm leading-7 text-neutral-300 sm:text-base">
            {t("home.ecosystem.subtitle")}
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal className="container-wuyin mt-12">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-black/35 shadow-[0_32px_90px_rgba(0,0,0,0.32)]">
          <img
            src={activeRow.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition duration-300"
            decoding="async"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.55)_32%,rgba(0,0,0,0.18)_62%,rgba(0,0,0,0.42)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(246,226,193,0.14),transparent_24%)]" />

          <div className="relative z-10 flex min-h-[34rem] items-stretch">
            <div className="w-full max-w-[21rem] border-r border-white/10 bg-black/28 px-6 py-6 backdrop-blur-[2px] sm:px-8 sm:py-8">
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
                      "group flex w-full items-center justify-between gap-4 border-b border-white/10 py-5 text-left transition last:border-b-0",
                      isActive ? "bg-white/[0.02]" : "hover:bg-white/[0.03]",
                    ].join(" ")}
                  >
                    <img
                      src={row.logo}
                      alt={row.alt}
                      className={[
                        "h-12 w-auto max-w-[11rem] object-contain object-left transition sm:h-14",
                        isActive ? "brightness-110" : "brightness-90 group-hover:brightness-100",
                      ].join(" ")}
                      decoding="async"
                    />
                    <span
                      className={[
                        "text-xl transition",
                        isActive ? "text-wuyin-gold-bright" : "text-white/48 group-hover:text-white/76",
                      ].join(" ")}
                      aria-hidden
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
