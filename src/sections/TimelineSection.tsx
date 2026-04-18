import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks";
import { useLocale } from "@/i18n/LocaleProvider";

export default function TimelineSection() {
  const { t } = useLocale();

  return (
    <section id="timeline" className="relative overflow-hidden border-b border-white/5 py-16 sm:py-20">
      <SectionGoldenBlocks variant={2} intensity="subtle" />
      <div className="relative z-10 container-wuyin">
        <div className="rounded-2xl border border-dashed border-white/15 bg-wuyin-surface/50 p-8 text-center sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-wuyin-muted">{t("home.timelineTeaser.kicker")}</p>
          <h2 className="mt-4 font-serif text-2xl font-bold text-white sm:text-3xl">{t("home.timelineTeaser.title")}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-wuyin-muted sm:text-base">{t("home.timelineTeaser.body")}</p>
        </div>
      </div>
    </section>
  );
}
