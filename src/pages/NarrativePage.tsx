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
            "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(255,77,77,0.18),transparent_50%),linear-gradient(180deg,#030303_0%,#0a0a0a_55%,#050505_100%)]",
            reducedMotion ? "" : "wuyin-animate-gradient-drift",
          ].join(" ")}
          aria-hidden
        />
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
              "linear-gradient(115deg,transparent 40%,rgba(34,211,238,0.08) 50%,transparent 60%)",
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

      <section id="narrative-map" className="border-b border-white/5 bg-wuyin-bg py-20 sm:py-28">
        <div className="container-wuyin">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            {t("narrative.mapTitle")}
            <span className="mt-2 block text-sm font-normal tracking-wide text-wuyin-muted sm:text-base">
              {t("narrative.mapSubtitle")}
            </span>
          </h2>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <ScrollReveal variant="leftSoft" className="wuyin-reveal-tech" visibleClassName="wuyin-reveal-tech-visible">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-cyan-500/20 bg-neutral-950 shadow-[0_0_80px_rgba(34,211,238,0.08)]">
                <img
                  src={narrativeMapBg}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-[0.22]"
                  decoding="async"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 opacity-90"
                  style={{
                    backgroundImage: `linear-gradient(rgba(34,211,238,0.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(34,211,238,0.15) 1px, transparent 1px)`,
                    backgroundSize: "28px 28px",
                  }}
                  aria-hidden
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_45%,transparent_0%,#000_70%)]" aria-hidden />
                <div className="absolute left-[18%] top-[58%] flex items-center gap-2 rounded-full border border-cyan-400/40 bg-black/60 px-3 py-1.5 text-xs text-cyan-100 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
                  {t("narrative.mapPinObsidian")}
                </div>
                <div className="absolute right-[22%] top-[32%] flex items-center gap-2 rounded-full border border-[#ff8080]/40 bg-black/60 px-3 py-1.5 text-xs text-[#ffc9c9] backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-[#ff4d4d] shadow-[0_0_12px_#ff4d4d]" />
                  {t("narrative.mapPinLeyline")}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="rightSoft" delayMs={90} className="space-y-5 text-sm leading-relaxed text-neutral-300 sm:text-base">
              <p>{t("narrative.mapP1")}</p>
              <p className="text-wuyin-muted">{t("narrative.mapP2")}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="narrative-concepts" className="border-b border-white/5 bg-wuyin-surface py-20 sm:py-28">
        <div className="container-wuyin grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal variant="leftSoft">
            <div className="space-y-8">
              <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">{t("narrative.conceptsTitle")}</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff8080]">{t("narrative.zhiLabel")}</p>
                  <p className="mt-2 text-sm text-neutral-300 sm:text-base">{t("narrative.zhiBody")}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff8080]">{t("narrative.geLabel")}</p>
                  <p className="mt-2 text-sm text-neutral-300 sm:text-base">{t("narrative.geBody")}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff8080]">{t("narrative.yinLabel")}</p>
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

      <section id="narrative-lineage" className="border-b border-white/5 py-20 sm:py-28">
        <ScrollReveal
          variant="leftSoft"
          delayMs={100}
          className="container-wuyin wuyin-reveal-tech"
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

      <section id="narrative-fusion" className="py-20 sm:py-28">
        <ScrollReveal
          variant="upGlow"
          delayMs={120}
          className="container-wuyin wuyin-reveal-tech"
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
