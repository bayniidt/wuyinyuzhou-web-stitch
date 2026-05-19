import { heroStageContent } from "./homeTopContent";

export default function HomeHeroStage() {
  return (
    <section
      id="home-hero"
      className="home-stage-shell relative isolate overflow-hidden border-b border-white/5"
    >
      <img
        src={heroStageContent.background}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.72),rgba(0,0,0,0.35)_38%,rgba(0,0,0,0.85))]" />
      <img
        src={heroStageContent.glowRing}
        alt=""
        className="home-stage-ring pointer-events-none absolute left-1/2 top-1/2 hidden w-[min(72vw,980px)] -translate-x-1/2 -translate-y-1/2 opacity-80 lg:block"
      />

      <div className="container-wuyin relative z-10 flex min-h-[calc(100dvh-4rem)] flex-col items-center justify-center py-28 text-center lg:min-h-[calc(100dvh-4.25rem)]">
        <p className="text-xs font-semibold uppercase tracking-[0.38em] text-wuyin-gold-bright/85 sm:text-sm">
          {heroStageContent.eyebrow}
        </p>
        <img
          src={heroStageContent.titleImage}
          alt="武印视界，止戈之道"
          className="mt-8 w-[min(82vw,520px)] object-contain"
        />
        <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-200/92 sm:text-base">
          {heroStageContent.lead}
        </p>
        <a
          href="#home-feature-carousel"
          className="mt-8 inline-flex items-center justify-center rounded-full border border-[rgb(var(--wuyin-gold-rgb)/0.32)] bg-black/35 px-2 py-2 backdrop-blur-sm transition hover:border-[rgb(var(--wuyin-gold-rgb)/0.55)]"
        >
          <img
            src={heroStageContent.detailButtonImage}
            alt="了解详情"
            className="h-10 w-auto object-contain"
          />
        </a>
      </div>
    </section>
  );
}
