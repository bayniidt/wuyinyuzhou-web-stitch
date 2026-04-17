import HexagonTile from "@/components/ui/HexagonTile";
import SectionTitle from "@/components/ui/SectionTitle";

function IconArena() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M4 10 12 4l8 6v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

function IconBox() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M12 3 3 8v8l9 5 9-5V8l-9-5Z" />
      <path d="M3 8 12 13l9-5M12 13v8" />
    </svg>
  );
}

function IconSpark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2 9 9 2 12l7 3 3 7 3-7 7-3-7-3-3-7Z" opacity=".9" />
    </svg>
  );
}

function IconBook() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2V5Z" />
      <path d="M6 21h12v-2H6a2 2 0 1 1 0-4" />
    </svg>
  );
}

function IconWand() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="m15 4 5 5-8 8H7v-5l8-8Z" />
      <path d="m11 11 3 3M5 19l2-2" />
    </svg>
  );
}

function IconVault() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="3" y="7" width="18" height="14" rx="2" />
      <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 14h.01M12 14h.01M17 14h.01" />
    </svg>
  );
}

const tiles = [
  { label: "Arena", icon: <IconArena /> },
  { label: "Artifacts", icon: <IconBox /> },
  { label: "Spirits", icon: <IconSpark /> },
  { label: "Academy", icon: <IconBook /> },
  { label: "Spells", icon: <IconWand /> },
  { label: "Treasury", icon: <IconVault /> },
];

export default function EcosystemMatrixSection() {
  return (
    <section
      id="ecosystem-matrix"
      className="border-b border-white/5 bg-wuyin-surface/40 py-20 sm:py-28"
    >
      <div className="container-wuyin">
        <SectionTitle
          eyebrow="The six pillars of the digital realm"
          title="Ecosystem Matrix"
          subtitle="六大模块构成武印视界的数字疆域：从竞技到场外增长，每一环都指向同一套叙事与经济闭环。"
        />
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-10 sm:mt-16 sm:grid-cols-3 sm:gap-x-10 md:gap-y-14">
          {tiles.map((t) => (
            <HexagonTile key={t.label} label={t.label} icon={t.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
