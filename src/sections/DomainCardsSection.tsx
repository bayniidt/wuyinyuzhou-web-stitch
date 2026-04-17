import ScrollReveal from "@/components/motion/ScrollReveal";
import FeatureCard from "@/components/ui/FeatureCard";
import { useLocale } from "@/i18n/LocaleProvider";
import imgCulture from "@/images/index3.png";
import imgFinance from "@/images/index5.png";
import imgTechnology from "@/images/index4.png";

function CultureVisual() {
  return (
    <div className="relative h-full w-full">
      <img src={imgCulture} alt="" className="h-full w-full object-cover" decoding="async" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_40%_35%,transparent_0%,#050505_78%)] opacity-95"
        aria-hidden
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-red-950/25 to-transparent" aria-hidden />
    </div>
  );
}

function TechnologyVisual() {
  return (
    <div className="relative h-full w-full">
      <img src={imgTechnology} alt="" className="h-full w-full object-cover" decoding="async" />
      <div className="absolute inset-0 bg-linear-to-br from-cyan-950/50 via-black/40 to-red-950/35" aria-hidden />
      <div className="absolute inset-0 bg-black/25" aria-hidden />
    </div>
  );
}

function FinanceVisual() {
  return (
    <div className="relative h-full w-full">
      <img src={imgFinance} alt="" className="h-full w-full object-cover" decoding="async" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(184,134,11,0.35),transparent_55%)]"
        aria-hidden
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-amber-950/20 to-transparent" aria-hidden />
    </div>
  );
}

export default function DomainCardsSection() {
  const { t } = useLocale();

  return (
    <section id="domains" className="border-b border-white/5 py-20 sm:py-28">
      <ScrollReveal className="container-wuyin grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        <FeatureCard
          domainLabel={t("home.domains.culture.domainLabel")}
          title={t("home.domains.culture.title")}
          description={t("home.domains.culture.description")}
          image={<CultureVisual />}
        />
        <FeatureCard
          domainLabel={t("home.domains.technology.domainLabel")}
          title={t("home.domains.technology.title")}
          description={t("home.domains.technology.description")}
          image={<TechnologyVisual />}
        />
        <FeatureCard
          domainLabel={t("home.domains.finance.domainLabel")}
          title={t("home.domains.finance.title")}
          description={t("home.domains.finance.description")}
          image={<FinanceVisual />}
        />
      </ScrollReveal>
    </section>
  );
}
