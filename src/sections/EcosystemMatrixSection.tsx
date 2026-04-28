import ScrollReveal from "@/components/motion/ScrollReveal"
import SectionTitle from "@/components/ui/SectionTitle"
import { useLocale } from "@/i18n/LocaleProvider"
import { useModuleResources } from "@/hooks/useModuleResources"
import { useMemo, useRef, useState } from "react"

// Fallbacks
import ArrowRight from "@/images/arrow-right.png"
import imgMatrixBgFallback from "@/images/index6.png"
import imgMatrixBgAltFallback from "@/images/index7.png"
import logoGongfu from "@/images/logo1000X400透明底/武印阁.png"
import logoMeng from "@/images/logo1000X400透明底/武印盟.png"
import logoGongfu1 from "@/images/logo1000X400透明底/功夫印.png"
import logoMeng7 from "@/images/logo1000X400透明底/印承天下.png"
import logoMeng3 from "@/images/logo1000X400透明底/武印传媒.png"
import logoMeng2 from "@/images/logo1000X400透明底/武印标准.png"

const tileKeys = ["arena", "artifacts", "spirits", "academy", "spells", "treasury"] as const;

type TileKey = (typeof tileKeys)[number];



/** 第 2、4、6 行：artifacts / academy / treasury — hover 时矩阵区底图换 index7 */
const hoverAltBgKeys = new Set<TileKey>(["artifacts", "academy", "treasury"]);

export default function EcosystemMatrixSection() {
  const { t } = useLocale();
  const { resources, loading } = useModuleResources(['', 'ecosystem']);
  const [useAltMatrixBg, setUseAltMatrixBg] = useState(false);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isBrokenPath = (url: string | undefined) => !url || url.includes('/fhzb/');

  const imgMatrixBg = isBrokenPath(resources['home_matrix_bg']) ? imgMatrixBgFallback : resources['home_matrix_bg'];
  const imgMatrixBgAlt = isBrokenPath(resources['home_matrix_bg_alt']) ? imgMatrixBgAltFallback : resources['home_matrix_bg_alt'];
  const arrowRight = isBrokenPath(resources['home_arrow_right']) ? ArrowRight : resources['home_arrow_right'];

  const logoKindByKey: Record<TileKey, string> = {
    arena: isBrokenPath(resources['home_matrix_logo1']) ? logoGongfu : resources['home_matrix_logo1']!,
    artifacts: isBrokenPath(resources['home_matrix_logo2']) ? logoMeng : resources['home_matrix_logo2']!,
    spirits: isBrokenPath(resources['home_matrix_logo3']) ? logoGongfu1 : resources['home_matrix_logo3']!,
    academy: isBrokenPath(resources['home_matrix_logo4']) ? logoMeng2 : resources['home_matrix_logo4']!,
    spells: isBrokenPath(resources['home_matrix_logo5']) ? logoMeng3 : resources['home_matrix_logo5']!,
    treasury: isBrokenPath(resources['home_matrix_logo6']) ? logoMeng7 : resources['home_matrix_logo6']!,
  };

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
    [resources],
  );

  if (loading) return null;

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
          {(useAltMatrixBg ? imgMatrixBgAlt : imgMatrixBg) && (
            <img
              src={useAltMatrixBg ? imgMatrixBgAlt : imgMatrixBg}
              alt=""
              className="h-full w-full object-cover transition-[opacity] duration-300"
              loading="lazy"
              decoding="async"
            />
          )}
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
                  {row.logoSrc && (
                    <img
                      src={row.logoSrc}
                      alt={row.logoAlt}
                      className="h-32 w-[500px] object-contain object-left transition-[filter] duration-200 group-hover:brightness-110 sm:h-48 sm:w-[600px] md:h-30 md:w-[300px]"
                      style={{ filter: "brightness(0) invert()" }}
                    />
                  )}
                </div>
                <p
                  className="shrink-0 font-mono text-xs tracking-wider text-white/90 transition-colors duration-200 group-hover:text-wuyin-accent sm:text-sm"
                  aria-hidden
                >
                  {arrowRight && (
                    <img
                      src={arrowRight}
                      alt=""
                      className="h-10"
                    />
                  )}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
