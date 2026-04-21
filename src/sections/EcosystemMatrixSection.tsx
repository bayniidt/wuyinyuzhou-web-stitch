import ScrollReveal from "@/components/motion/ScrollReveal"
import SectionTitle from "@/components/ui/SectionTitle"
import { useLocale } from "@/i18n/LocaleProvider"
import ArrowRight from "@/images/arrow-right.png"
import imgMatrixBg from "@/images/index6.png"
import imgMatrixBgAlt from "@/images/index7.png"

// import logoGongfu from "@/images/index8.png"
import logoGongfu from "@/images/logo1000X400透明底/武印阁.png"
// import logoMeng from "@/images/index9.png"
import logoMeng from "@/images/logo1000X400透明底/武印盟.png"
// import logoGongfu1 from "@/images/印承天下.png"
import logoGongfu1 from "@/images/logo1000X400透明底/功夫印.png"
// import logoMeng2 from "@/images/武印传媒.png"
import logoMeng7 from "@/images/logo1000X400透明底/印承天下.png"
import logoMeng3 from "@/images/logo1000X400透明底/武印传媒.png"
import logoMeng2 from "@/images/logo1000X400透明底/武印标准.png"
import { useMemo, useRef, useState } from "react"

const tileKeys = ["arena", "artifacts", "spirits", "academy", "spells", "treasury"] as const;

type TileKey = (typeof tileKeys)[number];

const logoKindByKey: Record<TileKey, string> = {
  arena: logoGongfu,
  artifacts: logoMeng,
  spirits: logoGongfu1,
  academy: logoMeng2,
  spells: logoMeng3,
  treasury: logoMeng7,
};

/** 第 2、4、6 行：artifacts / academy / treasury — hover 时矩阵区底图换 index7 */
const hoverAltBgKeys = new Set<TileKey>(["artifacts", "academy", "treasury"]);

export default function EcosystemMatrixSection() {
  const { t } = useLocale();
  const [useAltMatrixBg, setUseAltMatrixBg] = useState(false);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearLeaveTimer = () => {
    if (leaveTimerRef.current !== null) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
  };

  const handleRowPointerEnter = (key: TileKey) => {
    clearLeaveTimer();
    setUseAltMatrixBg(hoverAltBgKeys.has(key));
  };

  const handleRowPointerLeave = (key: TileKey) => {
    if (!hoverAltBgKeys.has(key)) return;
    leaveTimerRef.current = setTimeout(() => setUseAltMatrixBg(false), 45);
  };

  const rows = useMemo(
    () =>
      tileKeys.map((key) => ({
        key,
        logoSrc: logoKindByKey[key],
        logoAlt: logoKindByKey[key],
      })),
    [],
  );

  return (
    <section id="ecosystem-matrix" className="border-b border-white/5 bg-wuyin-surface/40">
      <ScrollReveal className="container-wuyin pt-20 sm:pt-28">
        <SectionTitle
          eyebrow={t("home.ecosystem.eyebrow")}
          title={t("home.ecosystem.title")}
          subtitle={t("home.ecosystem.subtitle")}
        />
      </ScrollReveal>
      <div className="relative mt-10 overflow-hidden py-20 sm:mt-14 sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <img
            src={useAltMatrixBg ? imgMatrixBgAlt : imgMatrixBg}
            alt=""
            className="h-full w-full object-cover transition-[opacity] duration-300"
            loading="lazy"
            decoding="async"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80"
            aria-hidden
          />
        </div>
        <ScrollReveal className="relative z-10 container-wuyin">
          <div className="border border-white/10">
            {rows.map((row) => (
              <div
                key={row.key}
                role="presentation"
                onPointerEnter={() => handleRowPointerEnter(row.key)}
                onPointerLeave={() => handleRowPointerLeave(row.key)}
                className="group flex cursor-pointer items-center justify-between gap-3 border-b border-white/10 bg-black/40 px-10 py-5 transition-[background-color,box-shadow] duration-200 ease-out last:border-b-0 hover:bg-white/[0.14] hover:shadow-[inset_0_0_0_1px_rgba(228,184,74,0.35),inset_0_0_24px_rgba(228,184,74,0.06)] sm:gap-6 sm:px-5"
              >
                <div className="flex min-w-0 flex-1 items-center">
                  <img
                    src={row.logoSrc}
                    alt={row.logoAlt}
                    className="h-32 w-[500px] object-contain object-left transition-[filter] duration-200 group-hover:brightness-110 sm:h-48 sm:w-[600px] md:h-30 md:w-[300px]"
                    style={{ filter: "brightness(0) invert()" }}
                  />
                </div>
                <p
                  className="shrink-0 font-mono text-xs tracking-wider text-white/90 transition-colors duration-200 group-hover:text-wuyin-accent sm:text-sm"
                  aria-hidden
                >
                  <img
                    src={ArrowRight}
                    alt=""
                    className="h-10"
                  />
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
