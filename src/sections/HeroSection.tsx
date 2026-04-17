import GhostButton from "@/components/ui/GhostButton";
import GradientButton from "@/components/ui/GradientButton";
import { useLocale } from "@/i18n/LocaleProvider";
import heroPoster from "@/images/index1.png";
import heroAmbienceMp4 from "@/videos/8950635-hd_1920_1080_30fps.mp4";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export default function HeroSection() {
  const reducedMotion = usePrefersReducedMotion();
  const { t } = useLocale();

  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden border-b border-white/5"
    >
      <div
        className={[
          "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,77,77,0.15),_transparent_55%),linear-gradient(180deg,#050505_0%,#0a0a0a_45%,#050505_100%)]",
          reducedMotion ? "" : "wuyin-animate-gradient-drift",
        ].join(" ")}
        aria-hidden
      />
      <img
        src={heroPoster}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.38] lg:opacity-[0.3]"
        decoding="async"
        aria-hidden
      />
      {!reducedMotion ? (
        <video
          className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover opacity-[0.34] lg:block"
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          poster={heroPoster}
          aria-hidden
        >
          <source src={heroAmbienceMp4} type="video/mp4" />
        </video>
      ) : null}
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/images/hero-kernel.svg')] bg-cover bg-center opacity-90 mix-blend-screen"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />
      <div
        className={[
          "container-wuyin relative z-10 flex flex-col items-center py-28 text-center sm:py-32",
          reducedMotion ? "" : "wuyin-cinematic-enter",
        ].join(" ")}
      >
        <p className="wuyin-hero-entrance text-xs font-semibold uppercase tracking-[0.45em] text-wuyin-muted sm:text-sm">
          {t("home.hero.kicker")}
        </p>
        <h1 className="wuyin-hero-entrance wuyin-hero-entrance-delay-1 mt-6 font-serif text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
          {t("home.hero.title")}
        </h1>
        <p className="wuyin-hero-entrance wuyin-hero-entrance-delay-2 mt-4 font-serif text-lg text-neutral-300 sm:text-xl md:text-2xl">
          {t("home.hero.subtitle")}
        </p>
        <div className="wuyin-hero-entrance wuyin-hero-entrance-delay-3 mt-10 flex flex-col items-stretch gap-4 sm:mt-12 sm:flex-row sm:items-center sm:justify-center">
          <GradientButton className="w-full min-w-[220px] sm:w-auto">{t("home.hero.ctaCompetition")}</GradientButton>
          <GhostButton className="w-full min-w-[220px] sm:w-auto">{t("home.hero.ctaPartner")}</GhostButton>
        </div>
      </div>
    </section>
  );
}
