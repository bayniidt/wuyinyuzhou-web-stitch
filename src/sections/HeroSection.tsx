import { useLocale } from "@/i18n/LocaleProvider";
import heroBackgroundVideo from "../../官网首页素材/1.首屏/主屏背景.mp4";

type HeroSectionProps = {
  resources?: Record<string, string>;
};

export default function HeroSection({ resources = {} }: HeroSectionProps) {
  const { t } = useLocale();
  const heroVideo = resources["home_hero_video"] ?? heroBackgroundVideo;

  return (
    <section
      id="home-hero"
      className="relative overflow-hidden bg-black border-b isolate border-white/5"
    >
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.08)_24%,rgba(0,0,0,0.34)_68%,rgba(0,0,0,0.46))]" />

      <div className="container-wuyin relative z-10 flex min-h-[calc(100dvh-4rem)] flex-col items-center justify-center px-4 pb-24 pt-20 text-center lg:min-h-[calc(100dvh-4.25rem)] lg:pb-28 lg:pt-24">
        <p className="text-sm font-medium tracking-[0.08em] text-white/88 sm:text-[1.1rem]">
          {t("home.hero.kicker")}
        </p>
        <h1 className="mt-5 font-serif text-[clamp(3.2rem,6vw,6.3rem)] font-bold tracking-tight text-white">
          {t("home.hero.title")}
        </h1>

        <div className="mt-9 flex w-full max-w-[39rem] items-center justify-between gap-3 rounded-full border border-[rgb(var(--wuyin-gold-rgb)/0.26)] px-[1.55rem] py-[0.62rem] text-left shadow-[0_10px_30px_rgba(0,0,0,0.18)] sm:px-[1.75rem] sm:py-[0.72rem]">
          <span className="inline-flex min-w-0 items-center gap-3 text-sm text-white/72 sm:text-[0.96rem]">
            <span className="h-3 w-3 shrink-0 rounded-full border border-[rgb(var(--wuyin-gold-rgb)/0.46)] bg-[radial-gradient(circle_at_30%_30%,rgba(246,226,193,0.8),rgba(197,135,75,0.7)_45%,rgba(83,50,27,0.9)_100%)] shadow-[0_0_8px_rgba(222,181,135,0.4)]" />
            <span className="truncate">{t("home.hero.subtitle")}</span>
          </span>
          <a
            href="#home-manifesto"
            className="inline-flex h-[3.15rem] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(90deg,#5d4331_0%,#8c5b38_34%,#bf503a_70%,#e74642_100%)] px-6 text-base font-semibold text-white shadow-[0_8px_24px_rgba(223,75,63,0.26)] transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuyin-gold-bright sm:h-[3.35rem] sm:px-7"
          >
            <span className="inline-flex items-center gap-3">
              {t("home.hero.cta")}
              <span aria-hidden className="text-[1.55rem] leading-none">→</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
