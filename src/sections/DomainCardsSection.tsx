import FeatureCard from "@/components/ui/FeatureCard";

function SealArt() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_40%_35%,#ff4d4d_0%,#3a0505_55%,#050505_100%)]">
      <div className="h-24 w-24 rotate-3 rounded-lg border-4 border-red-400/80 bg-black/40 shadow-[0_0_40px_rgba(255,77,77,0.35)] sm:h-28 sm:w-28" />
    </div>
  );
}

function TechArt() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#0a1628,#050505_50%,#1a0a12)]">
      <svg viewBox="0 0 120 120" className="h-28 w-28 text-red-500/90" aria-hidden>
        <rect x="10" y="10" width="100" height="100" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M35 60h50M60 35v50" stroke="currentColor" strokeWidth="2" />
        <circle cx="60" cy="60" r="8" fill="currentColor" />
      </svg>
    </div>
  );
}

function FinanceArt() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_50%_100%,#b8860b_0%,#1a1206_45%,#050505_100%)]">
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-14 w-14 rounded-full border border-amber-400/50 bg-linear-to-b from-amber-300/30 to-amber-900/20 shadow-inner sm:h-16 sm:w-16"
          />
        ))}
      </div>
    </div>
  );
}

export default function DomainCardsSection() {
  return (
    <section id="domains" className="border-b border-white/5 py-20 sm:py-28">
      <div className="container-wuyin grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        <FeatureCard
          domainLabel="Domain 01"
          title="Culture"
          description="承袭印章、笔墨与身体技法，将东方武道精神转译为可感知的数字仪式与社群语言。"
          image={<SealArt />}
        />
        <FeatureCard
          domainLabel="Domain 02"
          title="Technology"
          description="以高性能渲染、链上凭证与开放工具链，支撑赛事、训练与数字资产的协同演化。"
          image={<TechArt />}
        />
        <FeatureCard
          domainLabel="Domain 03"
          title="Finance"
          description="在合规与风险框架下探索价值流转：激励、治理与生态增长共享同一套可信底座。"
          image={<FinanceArt />}
        />
      </div>
    </section>
  );
}
