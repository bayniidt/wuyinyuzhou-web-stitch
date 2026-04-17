import ScrollReveal from "@/components/motion/ScrollReveal";
import GhostButton from "@/components/ui/GhostButton";
import GradientButton from "@/components/ui/GradientButton";
import { useLocale } from "@/i18n/LocaleProvider";
import { scrollToSelector } from "@/lib/scroll";
import imgTimelineHero from "@/images/page3 (7).png";
import imgTimelineRoad from "@/images/page3 (1).png";
import imgTimelineManifesto from "@/images/page3 (6).png";
import imgRosterGhost from "@/images/page3 (2).png";
import imgRosterIron from "@/images/page3 (3).png";
import imgRosterNeon from "@/images/page3 (4).png";
import imgRosterVoid from "@/images/page3 (5).png";
import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type TimelineModule = {
  id: string;
  kicker: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  imageOnLeft: boolean;
  bullets?: { step: string; title: string; text: string }[];
  statLine?: string;
};

function IconLightning({ className = "h-3.5 w-3.5 shrink-0 text-[#ff4d4d]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
    </svg>
  );
}

function AccessTiersSection() {
  const { t } = useLocale();
  return (
    <section id="timeline-access-tiers" className="border-b border-white/5 bg-wuyin-bg py-16 sm:py-20 lg:py-24">
      <ScrollReveal variant="upSoft" className="container-wuyin wuyin-reveal-tech" visibleClassName="wuyin-reveal-tech-visible">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-semibold italic tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
              {t("timeline.accessTiers.title")}
            </h2>
            <p className="mt-2 max-w-xl text-sm text-neutral-400 sm:text-base">{t("timeline.accessTiers.subtitle")}</p>
          </div>
          <p className="text-xs text-neutral-600 sm:text-right">{t("timeline.accessTiers.ethNote")}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          <article className="group relative flex flex-col rounded-2xl border border-white/10 border-l-[3px] border-l-transparent bg-[#141414] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 ease-[var(--ease-wuyin)] hover:border-l-[#ff4d4d] hover:-translate-y-1 hover:shadow-[0_0_48px_rgba(255,77,77,0.12),inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-8">
            <h3 className="font-serif text-2xl font-semibold italic text-white">{t("timeline.accessTiers.standard.name")}</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">{t("timeline.accessTiers.standard.desc")}</p>
            <p className="mt-8 font-serif text-4xl font-bold tabular-nums text-white sm:text-5xl">
              0.08
              <span className="ml-1 align-top text-lg font-sans font-semibold text-neutral-500 sm:text-xl">ETH</span>
            </p>
            <ul className="mt-8 flex flex-col gap-3 text-xs font-semibold uppercase tracking-wide text-neutral-200 sm:text-sm">
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff4d4d]" aria-hidden />
                {t("timeline.accessTiers.standard.feat1")}
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff4d4d]" aria-hidden />
                {t("timeline.accessTiers.standard.feat2")}
              </li>
            </ul>
            <div className="mt-auto pt-10">
              <GhostButton type="button" className="w-full" onClick={() => window.alert(t("timeline.accessTiers.standard.alert"))}>
                {t("timeline.accessTiers.standard.cta")}
              </GhostButton>
            </div>
          </article>

          <article className="group relative flex flex-col rounded-2xl border border-white/10 border-l-[3px] border-l-transparent bg-[#141414] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 ease-[var(--ease-wuyin)] hover:border-l-[#ff4d4d] hover:-translate-y-1 hover:shadow-[0_0_56px_rgba(255,77,77,0.16),inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-8 lg:py-10">
            <span
              className="absolute right-5 top-5 rounded-sm bg-[#ff4d4d] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-neutral-950 sm:right-6 sm:top-6"
              aria-label={t("timeline.accessTiers.vip.badgeAria")}
            >
              {t("timeline.accessTiers.vip.badge")}
            </span>
            <div>
              <h3 className="font-serif text-2xl font-semibold italic text-white">{t("timeline.accessTiers.vip.name")}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">{t("timeline.accessTiers.vip.desc")}</p>
              <div className="mt-8 flex flex-wrap items-baseline gap-x-1 gap-y-0">
                <span className="bg-linear-to-r from-[#ff4d4d] to-[#ff8080] bg-clip-text font-serif text-4xl font-bold tabular-nums text-transparent sm:text-5xl">
                  0.25
                </span>
                <span className="font-sans text-lg font-semibold text-[#ff8080] sm:text-xl">ETH</span>
              </div>
              <ul className="mt-8 flex flex-col gap-3 text-xs font-semibold uppercase tracking-wide text-neutral-200 sm:text-sm">
                <li className="flex items-center gap-2.5">
                  <IconLightning />
                  {t("timeline.accessTiers.vip.feat1")}
                </li>
                <li className="flex items-center gap-2.5">
                  <IconLightning />
                  {t("timeline.accessTiers.vip.feat2")}
                </li>
                <li className="flex items-center gap-2.5">
                  <IconLightning />
                  {t("timeline.accessTiers.vip.feat3")}
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-10">
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-[1px] bg-linear-to-r from-[#ff4d4d] to-[#ff8080] px-6 py-3 text-sm font-semibold tracking-wide text-neutral-950 shadow-wuyin-glow transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8080] active:scale-[0.98] sm:py-3.5 sm:text-base"
                onClick={() => window.alert(t("timeline.accessTiers.vip.alert"))}
              >
                {t("timeline.accessTiers.vip.cta")}
              </button>
            </div>
          </article>

          <article className="group relative flex flex-col rounded-2xl border border-white/10 border-l-[3px] border-l-transparent bg-[#141414] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 ease-[var(--ease-wuyin)] hover:border-l-[#ff4d4d] hover:-translate-y-1 hover:shadow-[0_0_48px_rgba(255,77,77,0.12),inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-8">
            <h3 className="font-serif text-2xl font-semibold italic text-white">{t("timeline.accessTiers.metaverse.name")}</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">{t("timeline.accessTiers.metaverse.desc")}</p>
            <p className="mt-8 font-serif text-4xl font-bold tabular-nums text-white sm:text-5xl">
              0.05
              <span className="ml-1 align-top text-lg font-sans font-semibold text-neutral-500 sm:text-xl">ETH</span>
            </p>
            <ul className="mt-8 flex flex-col gap-3 text-xs font-semibold uppercase tracking-wide text-neutral-200 sm:text-sm">
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300/90" aria-hidden />
                {t("timeline.accessTiers.metaverse.feat1")}
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300/90" aria-hidden />
                {t("timeline.accessTiers.metaverse.feat2")}
              </li>
            </ul>
            <div className="mt-auto pt-10">
              <GhostButton type="button" className="w-full" onClick={() => window.alert(t("timeline.accessTiers.metaverse.alert"))}>
                {t("timeline.accessTiers.metaverse.cta")}
              </GhostButton>
            </div>
          </article>
        </div>
      </ScrollReveal>
    </section>
  );
}

function WarriorRosterSection() {
  const { t } = useLocale();
  const rosterCards = useMemo(
    () => [
      { name: t("timeline.roster.ghost.name"), role: t("timeline.roster.ghost.role"), imageSrc: imgRosterGhost },
      { name: t("timeline.roster.iron.name"), role: t("timeline.roster.iron.role"), imageSrc: imgRosterIron },
      { name: t("timeline.roster.neon.name"), role: t("timeline.roster.neon.role"), imageSrc: imgRosterNeon },
      { name: t("timeline.roster.void.name"), role: t("timeline.roster.void.role"), imageSrc: imgRosterVoid },
    ],
    [t],
  );

  return (
    <section id="timeline-warrior-roster" className="border-b border-white/5 bg-wuyin-bg py-16 sm:py-20 lg:py-24">
      <ScrollReveal variant="leftSoft" delayMs={70} className="container-wuyin wuyin-reveal-tech" visibleClassName="wuyin-reveal-tech-visible">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-serif text-3xl font-semibold italic tracking-tight text-white sm:text-4xl">
            {t("timeline.roster.title")}
            <span className="ml-1 text-[#ff8080]">.</span>
          </h2>
          <button
            type="button"
            aria-label={t("timeline.roster.filterAria")}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/20 text-neutral-300 transition hover:border-white/40 hover:text-white"
            onClick={() => window.alert(t("timeline.roster.filterAlert"))}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M4 7h16M7 12h10M10 17h4" />
            </svg>
          </button>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rosterCards.map((card) => (
            <article key={card.name} className="group relative overflow-hidden border border-white/10 bg-neutral-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <img
                src={card.imageSrc}
                alt={card.name}
                width={760}
                height={1080}
                className="aspect-[3/4] w-full object-cover grayscale transition duration-300 group-hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#ff8080]">{card.role}</p>
                <h3 className="mt-2 font-serif text-3xl font-bold uppercase leading-[0.9] text-white">{card.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

function TimelineSplitModule({ m, surface }: { m: TimelineModule; surface: string }) {
  return (
    <section id={m.id} className={`border-b border-white/5 py-16 sm:py-20 lg:py-24 ${surface}`}>
      <div className="container-wuyin wuyin-reveal-tech">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <ScrollReveal variant="leftSoft" className={m.imageOnLeft ? "lg:order-1" : "lg:order-2"} visibleClassName="wuyin-reveal-tech-visible">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-wuyin-glow">
              <div className="relative aspect-[5/4] w-full max-h-[min(54dvh,28rem)] sm:max-h-[min(58dvh,33rem)] lg:max-h-[min(64dvh,38rem)]">
                <img
                  src={m.imageSrc}
                  alt={m.imageAlt}
                  width={1200}
                  height={1200}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="rightSoft" delayMs={85} className={m.imageOnLeft ? "lg:order-2" : "lg:order-1"}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ff8080]">{m.kicker}</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">{m.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300 sm:text-base">{m.body}</p>

              {m.statLine ? <p className="mt-6 text-sm font-medium text-neutral-200">{m.statLine}</p> : null}

              {m.bullets ? (
                <ol className="mt-8 space-y-6">
                  {m.bullets.map((b) => (
                    <li key={b.step + b.title} className="flex gap-4">
                      <span className="mt-0.5 inline-flex min-w-[2.75rem] font-mono text-xs font-semibold tabular-nums text-wuyin-muted">
                        {b.step}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white sm:text-base">{b.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-neutral-400">{b.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              ) : null}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default function TimelinePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLocale();

  const modules = useMemo((): TimelineModule[] => {
    const roadStat = t("timeline.modules.road.statLine");
    return [
      {
        id: "timeline-road",
        kicker: t("timeline.modules.road.kicker"),
        title: t("timeline.modules.road.title"),
        body: t("timeline.modules.road.body"),
        imageSrc: imgTimelineRoad,
        imageAlt: t("timeline.modules.road.imageAlt"),
        imageOnLeft: true,
        bullets: [
          { step: "01", title: t("timeline.modules.road.bullets.b1.title"), text: t("timeline.modules.road.bullets.b1.text") },
          { step: "02", title: t("timeline.modules.road.bullets.b2.title"), text: t("timeline.modules.road.bullets.b2.text") },
          { step: "03", title: t("timeline.modules.road.bullets.b3.title"), text: t("timeline.modules.road.bullets.b3.text") },
        ],
        statLine: roadStat || undefined,
      },
      {
        id: "timeline-manifesto",
        kicker: t("timeline.modules.manifesto.kicker"),
        title: t("timeline.modules.manifesto.title"),
        body: t("timeline.modules.manifesto.body"),
        imageSrc: imgTimelineManifesto,
        imageAlt: t("timeline.modules.manifesto.imageAlt"),
        imageOnLeft: false,
        statLine: t("timeline.modules.manifesto.statLine"),
      },
    ];
  }, [t]);

  const firstModule = modules[0]!;
  const secondModule = modules[1]!;

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const timer = window.setTimeout(() => scrollToSelector(hash), 0);
      return () => window.clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <section id="timeline-hero" className="relative overflow-hidden border-b border-white/5">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,77,77,0.16),transparent_55%),linear-gradient(180deg,#030303_0%,#080808_45%,#050505_100%)]"
          aria-hidden
        />
        <img
          src={imgTimelineHero}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.24]"
          decoding="async"
          aria-hidden
        />
        <ScrollReveal
          variant="upGlow"
          className="container-wuyin relative z-10 py-20 sm:py-24 lg:py-28 wuyin-reveal-tech"
          visibleClassName="wuyin-reveal-tech-visible"
          staggerChildren
          staggerStepMs={90}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-wuyin-muted sm:text-sm">{t("timeline.heroKicker")}</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="text-white">{t("timeline.heroTitle")}</span>
            <span className="bg-linear-to-r from-[#ff4d4d] to-[#ff8080] bg-clip-text text-transparent">{t("timeline.heroTitleAccent")}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base">{t("timeline.heroLead")}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <GradientButton type="button" onClick={() => scrollToSelector("#timeline-road")}>
              {t("timeline.viewRoadmap")}
            </GradientButton>
            <GhostButton type="button" onClick={() => navigate("/")}>
              {t("timeline.backHome")}
            </GhostButton>
          </div>
        </ScrollReveal>
      </section>

      <AccessTiersSection />
      <TimelineSplitModule m={firstModule} surface="bg-wuyin-bg" />
      <WarriorRosterSection />
      <TimelineSplitModule m={secondModule} surface="bg-wuyin-surface" />
    </>
  );
}
