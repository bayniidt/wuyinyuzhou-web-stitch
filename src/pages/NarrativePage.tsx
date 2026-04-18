import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks";
import ScrollReveal from "@/components/motion/ScrollReveal";
import GhostButton from "@/components/ui/GhostButton";
import GradientButton from "@/components/ui/GradientButton";
import { useLocale } from "@/i18n/LocaleProvider";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import imgConceptTrinity from "@/images/page2(2).png";
import imgLineageIron from "@/images/page2(5).png";
import imgLineageObsidian from "@/images/page2(3).png";
import imgLineageVoid from "@/images/page2(4).png";
import narrativeBanner from "@/images/page2(6).png";
import narrativeMapBg from "@/images/page2(7).png";
import { scrollToSelector } from "@/lib/scroll";
import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function NarrativePage() {
  const reducedMotion = usePrefersReducedMotion();
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLocale();

  const lineage = useMemo(
    () => [
      {
        name: t("narrative.lineage.kenshin.name"),
        role: t("narrative.lineage.kenshin.role"),
        blurb: t("narrative.lineage.kenshin.blurb"),
        portrait: imgLineageObsidian,
        portraitAlt: t("narrative.lineage.kenshin.portraitAlt"),
      },
      {
        name: t("narrative.lineage.ren.name"),
        role: t("narrative.lineage.ren.role"),
        blurb: t("narrative.lineage.ren.blurb"),
        portrait: imgLineageVoid,
        portraitAlt: t("narrative.lineage.ren.portraitAlt"),
      },
      {
        name: t("narrative.lineage.goro.name"),
        role: t("narrative.lineage.goro.role"),
        blurb: t("narrative.lineage.goro.blurb"),
        portrait: imgLineageIron,
        portraitAlt: t("narrative.lineage.goro.portraitAlt"),
      },
    ],
    [t],
  );

  const fusionTiles = useMemo(
    () => [
      { title: t("narrative.fusionTiles.divergent.title"), text: t("narrative.fusionTiles.divergent.text") },
      { title: t("narrative.fusionTiles.inkWash.title"), text: t("narrative.fusionTiles.inkWash.text") },
      { title: t("narrative.fusionTiles.verifiable.title"), text: t("narrative.fusionTiles.verifiable.text") },
      { title: t("narrative.fusionTiles.livingLore.title"), text: t("narrative.fusionTiles.livingLore.text") },
    ],
    [t],
  );

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const timer = window.setTimeout(() => scrollToSelector(hash), 0);
      return () => window.clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <section
        id="narrative-hero"
        className="relative flex min-h-[78vh] items-center justify-center overflow-hidden border-b border-white/5"
      >
        <div
          className={[
            "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(228,184,74,0.2),transparent_50%),linear-gradient(180deg,#080706_0%,#12100e_55%,#080706_100%)]",
            reducedMotion ? "" : "wuyin-animate-gradient-drift",
          ].join(" ")}
          aria-hidden
        />
        <SectionGoldenBlocks density="sparse" intensity="subtle" variant={1} />
        <img
          src={narrativeBanner}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.22]"
          decoding="async"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen"
          style={{
            backgroundImage:
              "linear-gradient(115deg,transparent 40%,rgba(228,184,74,0.12) 50%,transparent 60%)",
          }}
          aria-hidden
        />
        <ScrollReveal
          variant="upGlow"
          className="container-wuyin relative z-10 flex flex-col items-center py-24 text-center sm:py-28 wuyin-reveal-tech"
          visibleClassName="wuyin-reveal-tech-visible"
          staggerChildren
          staggerStepMs={90}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-wuyin-muted sm:text-sm">
            {t("narrative.heroKicker")}
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            {t("narrative.heroTitle")}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base">{t("narrative.heroLead")}</p>
          <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <GradientButton className="w-full min-w-[220px] sm:w-auto" onClick={() => scrollToSelector("#narrative-map")}>
              {t("narrative.openScroll")}
            </GradientButton>
            <GhostButton className="w-full min-w-[220px] sm:w-auto" onClick={() => navigate("/")}>
              {t("narrative.backHome")}
            </GhostButton>
          </div>
        </ScrollReveal>
      </section>

      <section id="narrative-map" className="relative overflow-hidden border-b border-white/5 bg-wuyin-bg py-20 sm:py-28">
        <SectionGoldenBlocks variant={0} />
        <div className="relative z-10 container-wuyin">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            {t("narrative.mapTitle")}
            <span className="mt-2 block text-sm font-normal tracking-wide text-wuyin-muted sm:text-base">
              {t("narrative.mapSubtitle")}
            </span>
          </h2>
          <div className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-10">
            <ScrollReveal
              variant="leftSoft"
              className="wuyin-reveal-tech w-full shrink-0 lg:w-[62%] lg:max-w-[62%]"
              visibleClassName="wuyin-reveal-tech-visible"
            >
              <div className="relative aspect-video w-full max-h-[min(52vw,400px)] overflow-hidden rounded-2xl border border-wuyin-gold/20 bg-[#0a0908] shadow-[0_0_60px_rgba(228,184,74,0.12)] lg:max-h-none">
                <img
                  src={narrativeMapBg}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.58]"
                  decoding="async"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 opacity-[0.65]"
                  style={{
                    backgroundImage: `linear-gradient(rgba(228,184,74,0.12) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(228,184,74,0.12) 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                    maskImage: "radial-gradient(ellipse 72% 68% at 50% 50%, black 0%, transparent 74%)",
                    WebkitMaskImage: "radial-gradient(ellipse 72% 68% at 50% 50%, black 0%, transparent 74%)",
                  }}
                  aria-hidden
                />
                <div
                  className="absolute inset-0 bg-[radial-gradient(ellipse_58%_52%_at_50%_48%,transparent_0%,rgba(0,0,0,0.48)_88%)]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-x-[12%] bottom-0 h-12 bg-[radial-gradient(ellipse_at_center,rgba(228,184,74,0.16),transparent_72%)] blur-lg"
                  aria-hidden
                />
                <div className="pointer-events-none absolute inset-0 z-10">
                  <div className="absolute left-[calc(8%+250px)] top-[20%] flex max-w-[min(100%,14rem)] items-center gap-2 rounded-lg border border-white/10 bg-black/65 px-3 py-2 text-left text-xs font-medium text-white shadow-md backdrop-blur-md sm:text-sm">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-wuyin-gold shadow-[0_0_10px_rgba(228,184,74,0.9)]" />
                    <span className="leading-snug">{t("narrative.mapPinObsidian")}</span>
                  </div>
                  <div className="absolute bottom-[14%] right-[calc(10%+150px)] flex max-w-[min(100%,14rem)] items-center gap-2 rounded-lg border border-white/10 bg-black/65 px-3 py-2 text-left text-xs font-medium text-white shadow-md backdrop-blur-md sm:text-sm">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-wuyin-seal shadow-[0_0_10px_rgba(201,48,48,0.75)]" />
                    <span className="leading-snug">{t("narrative.mapPinLeyline")}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal
              variant="rightSoft"
              delayMs={90}
              className="flex min-h-0 flex-1 flex-col gap-4 lg:min-h-0"
            >
              <article className="flex min-h-0 flex-1 flex-col rounded-xl border border-white/10 bg-wuyin-elevated/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-6">
                <h3 className="shrink-0 font-serif text-lg font-semibold text-wuyin-gold-bright sm:text-xl">{t("narrative.mapPinObsidian")}</h3>
                <p className="mt-3 min-h-0 flex-1 overflow-y-auto text-[15px] leading-[1.75] text-neutral-300 sm:text-sm">
                  {t("narrative.mapP1")}
                </p>
                <div className="mt-4 h-1 w-full shrink-0 overflow-hidden rounded-full bg-white/[0.06]" aria-hidden>
                  <div className="h-full w-[68%] rounded-full bg-linear-to-r from-wuyin-accent/80 via-wuyin-gold-bright/90 to-wuyin-accent-soft/80" />
                </div>
              </article>
              <article className="flex min-h-0 flex-1 flex-col rounded-xl border border-white/10 bg-wuyin-elevated/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-wuyin-gold/30 bg-wuyin-gold/10">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-wuyin-gold-bright" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
                    <path d="M4 14h3l2-4 3 8 3-10 2 6h3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mt-4 shrink-0 font-serif text-lg font-semibold text-white sm:text-xl">{t("narrative.mapPinLeyline")}</h3>
                <p className="mt-3 min-h-0 flex-1 overflow-y-auto text-[15px] leading-[1.75] text-neutral-300 sm:text-sm">{t("narrative.mapP2")}</p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="narrative-concepts" className="relative overflow-hidden border-b border-white/5 bg-wuyin-surface py-20 sm:py-28">
        <SectionGoldenBlocks variant={2} />
        <div className="relative z-10 container-wuyin grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal variant="leftSoft">
            <div className="space-y-8">
              <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">{t("narrative.conceptsTitle")}</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-wuyin-gold-bright">{t("narrative.zhiLabel")}</p>
                  <p className="mt-2 text-sm text-neutral-300 sm:text-base">{t("narrative.zhiBody")}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-wuyin-gold-bright">{t("narrative.geLabel")}</p>
                  <p className="mt-2 text-sm text-neutral-300 sm:text-base">{t("narrative.geBody")}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-wuyin-gold-bright">{t("narrative.yinLabel")}</p>
                  <p className="mt-2 text-sm text-neutral-300 sm:text-base">{t("narrative.yinBody")}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="rightSoft" delayMs={90} className="wuyin-reveal-tech" visibleClassName="wuyin-reveal-tech-visible">
            <div className="relative aspect-square max-h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-950" aria-hidden>
              <img src={imgConceptTrinity} alt="" className="absolute inset-0 h-full w-full object-cover" decoding="async" />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="narrative-lineage" className="relative overflow-hidden border-b border-white/5 py-20 sm:py-28">
        <SectionGoldenBlocks variant={1} />
        <ScrollReveal
          variant="leftSoft"
          delayMs={100}
          className="relative z-10 container-wuyin wuyin-reveal-tech"
          visibleClassName="wuyin-reveal-tech-visible"
        >
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">{t("narrative.lineageTitle")}</h2>
          <p className="mt-3 max-w-2xl text-sm text-neutral-400 sm:text-base">{t("narrative.lineageLead")}</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {lineage.map((c) => (
              <article
                key={c.name}
                className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-wuyin-elevated/80 shadow-wuyin-glow"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-neutral-950">
                  <img
                    src={c.portrait}
                    alt={c.portraitAlt}
                    className="h-full w-full object-cover"
                    decoding="async"
                    loading="lazy"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-white/[0.03]"
                    aria-hidden
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-wuyin-muted">{c.role}</p>
                  <h3 className="font-serif text-xl font-semibold text-white">{c.name}</h3>
                  <p className="text-sm leading-relaxed text-neutral-400">{c.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section id="narrative-fusion" className="relative overflow-hidden py-20 sm:py-28">
        <SectionGoldenBlocks variant={0} />
        <ScrollReveal
          variant="upGlow"
          delayMs={120}
          className="relative z-10 container-wuyin wuyin-reveal-tech"
          visibleClassName="wuyin-reveal-tech-visible"
        >
          <h2 className="text-center font-serif text-3xl font-bold text-white sm:text-4xl">{t("narrative.fusionTitle")}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-neutral-400 sm:text-base">{t("narrative.fusionLead")}</p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {fusionTiles.map((row) => (
              <div
                key={row.title}
                className="rounded-xl border border-white/10 bg-wuyin-surface/80 p-5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 ease-[var(--ease-wuyin)] hover:border-white/20 hover:bg-wuyin-elevated/60"
              >
                <p className="text-sm font-semibold text-white">{row.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-wuyin-muted sm:text-sm">{row.text}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
