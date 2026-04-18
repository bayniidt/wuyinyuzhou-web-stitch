import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks";
import GradientButton from "@/components/ui/GradientButton";
import { useLocale } from "@/i18n/LocaleProvider";

export default function NftsSection() {
  const { t } = useLocale();

  return (
    <section id="nfts" className="relative overflow-hidden border-b border-white/5 py-20 sm:py-24">
      <SectionGoldenBlocks variant={1} intensity="subtle" />
      <div className="relative z-10 container-wuyin flex flex-col items-center text-center">
        <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">{t("home.nftsTeaser.title")}</h2>
        <p className="mt-4 max-w-2xl text-sm text-wuyin-muted sm:text-base">{t("home.nftsTeaser.body")}</p>
        <GradientButton className="mt-8" type="button">
          {t("home.nftsTeaser.cta")}
        </GradientButton>
      </div>
    </section>
  );
}
