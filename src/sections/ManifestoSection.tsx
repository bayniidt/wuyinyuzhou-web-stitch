import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { useLocale } from "@/i18n/LocaleProvider";
import manifestoVisual from "@/images/index2.png";

export default function ManifestoSection() {
  const { t } = useLocale();

  return (
    <section id="manifesto" className="relative overflow-hidden border-b border-white/5 bg-wuyin-bg py-20 sm:py-28">
      <SectionGoldenBlocks variant={0} />
      <ScrollReveal className="relative z-10 container-wuyin grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div
          className="relative aspect-square max-h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-wuyin-glow"
          aria-hidden
        >
          <img
            src={manifestoVisual}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            decoding="async"
          />
          <div className="absolute inset-0 bg-linear-to-br from-black/70 via-neutral-900/20 to-black/80" />
          <div className="absolute inset-0 mix-blend-soft-light bg-[radial-gradient(circle_at_30%_25%,rgba(228,184,74,0.24),transparent_55%)]" />
        </div>
        <div>
          <h2 className="flex items-center gap-3 font-serif text-3xl font-bold text-white sm:text-4xl">
            <span className="inline-block h-8 w-1 rounded-full bg-linear-to-b from-wuyin-accent to-wuyin-seal" />
            {t("home.manifesto.title")}
          </h2>
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-neutral-300 sm:text-base">
            <p>{t("home.manifesto.p1")}</p>
            <p>{t("home.manifesto.p2")}</p>
          </div>
          <blockquote className="mt-10 border-l border-white/15 pl-6 font-serif text-lg italic text-neutral-200 sm:text-xl">
            “{t("home.manifesto.quote")}”
          </blockquote>
        </div>
      </ScrollReveal>
    </section>
  );
}
