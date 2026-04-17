import ScrollReveal from "@/components/motion/ScrollReveal";
import FeatureCard from "@/components/ui/FeatureCard";
import imgCulture from "@/images/pexels-yelenaodintsova-10559023.jpg";
import imgFinance from "@/images/pexels-gasparzaldo-6737849.jpg";
import imgTechnology from "@/images/pexels-vinh-ch-1599393606-35464781.jpg";

function CultureVisual() {
  return (
    <div className="relative h-full w-full">
      <img src={imgCulture} alt="" className="h-full w-full object-cover" decoding="async" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_40%_35%,transparent_0%,#050505_78%)] opacity-95"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-black/75 via-red-950/25 to-transparent"
        aria-hidden
      />
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
  return (
    <section id="domains" className="border-b border-white/5 py-20 sm:py-28">
      <ScrollReveal className="container-wuyin grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        <FeatureCard
          domainLabel="Domain 01"
          title="Culture"
          description="承袭印章、笔墨与身体技法，将东方武道精神转译为可感知的数字仪式与社群语言。"
          image={<CultureVisual />}
        />
        <FeatureCard
          domainLabel="Domain 02"
          title="Technology"
          description="以高性能渲染、链上凭证与开放工具链，支撑赛事、训练与数字资产的协同演化。"
          image={<TechnologyVisual />}
        />
        <FeatureCard
          domainLabel="Domain 03"
          title="Finance"
          description="在合规与风险框架下探索价值流转：激励、治理与生态增长共享同一套可信底座。"
          image={<FinanceVisual />}
        />
      </ScrollReveal>
    </section>
  );
}
