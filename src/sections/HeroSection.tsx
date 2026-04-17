import GhostButton from "@/components/ui/GhostButton";
import GradientButton from "@/components/ui/GradientButton";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden border-b border-white/5"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,77,77,0.15),_transparent_55%),linear-gradient(180deg,#050505_0%,#0a0a0a_45%,#050505_100%)]"
        aria-hidden
      />
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
      <div className="container-wuyin relative z-10 flex flex-col items-center py-28 text-center sm:py-32">
        <p className="text-xs font-semibold uppercase tracking-[0.45em] text-wuyin-muted sm:text-sm">
          Ancient Soul • Future Core
        </p>
        <h1 className="mt-6 font-serif text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
          武印视界
        </h1>
        <p className="mt-4 font-serif text-lg text-neutral-300 sm:text-xl md:text-2xl">
          — 东方武道元宇宙盛典
        </p>
        <div className="mt-10 flex flex-col items-stretch gap-4 sm:mt-12 sm:flex-row sm:items-center sm:justify-center">
          <GradientButton className="w-full min-w-[220px] sm:w-auto">
            Appointment for Competition
          </GradientButton>
          <GhostButton className="w-full min-w-[220px] sm:w-auto">Become a Partner</GhostButton>
        </div>
      </div>
    </section>
  );
}
