import ScrollReveal from "@/components/motion/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import logoGongfu from "@/images/index8.png";
import logoMeng from "@/images/index9.png";
import imgMatrixBg from "@/images/index6.png";
import imgMatrixBgAlt from "@/images/index7.png";
import { useLocale } from "@/i18n/LocaleProvider";
import { useMemo, useRef, useState } from "react";
import ArrowRight from "@/images/arrow-right.png";

const ROW_ARROW = "------->";

const tileKeys = ["arena", "artifacts", "spirits", "academy", "spells", "treasury"] as const;

type TileKey = (typeof tileKeys)[number];

const logoKindByKey: Record<TileKey, "gongfu" | "meng"> = {
  arena: "gongfu",
  artifacts: "meng",
  spirits: "gongfu",
  academy: "meng",
  spells: "gongfu",
  treasury: "gongfu",
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
        logoSrc: logoKindByKey[key] === "gongfu" ? logoGongfu : logoMeng,
        logoAlt: logoKindByKey[key] === "gongfu" ? "功夫印" : "武印盟",
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
                className="group flex cursor-pointer items-center justify-between gap-3 border-b border-white/10 bg-black/40 px-5 py-5 transition-[background-color,box-shadow] duration-200 ease-out last:border-b-0 hover:bg-white/[0.14] hover:shadow-[inset_0_0_0_1px_rgba(228,184,74,0.35),inset_0_0_24px_rgba(228,184,74,0.06)] sm:gap-6 sm:px-5"
              >
                <div className="flex min-w-0 flex-1 items-center">
                  <img
                    src={row.logoSrc}
                    alt={row.logoAlt}
                    className="h-14 w-auto max-w-full object-contain object-left transition-[filter] duration-200 group-hover:brightness-110 sm:h-[4.5rem] md:h-20"
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
