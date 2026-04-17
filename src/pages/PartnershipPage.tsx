import { scrollToSelector } from "@/lib/scroll";
import imgImperativePath from "@/images/page5 (1).png";
import imgPartnershipBanner from "@/images/page5 (2).png";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type DomainItem = {
  code: string;
  title: string;
  body: string;
  icon: ReactNode;
};

const domainIconClass = "h-7 w-7 shrink-0 text-[#ff8d8d] sm:h-8 sm:w-8";

/** Badge / seal with checkmark */
function IconDomainBrand() {
  return (
    <svg viewBox="0 0 24 24" className={domainIconClass} fill="none" stroke="currentColor" strokeWidth="1.65" aria-hidden>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M8 12l2.4 2.4L16 9.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Calendar */
function IconDomainEvent() {
  return (
    <svg viewBox="0 0 24 24" className={domainIconClass} fill="none" stroke="currentColor" strokeWidth="1.65" aria-hidden>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M3.5 10h17M8 3.5v4M16 3.5v4" strokeLinecap="round" />
      <path d="M8 14h2M12 14h2M16 14h2M8 17.5h2M12 17.5h2" strokeLinecap="round" />
    </svg>
  );
}

/** Three people */
function IconDomainClub() {
  return (
    <svg viewBox="0 0 24 24" className={domainIconClass} fill="none" stroke="currentColor" strokeWidth="1.65" aria-hidden>
      <circle cx="12" cy="6.5" r="2.2" />
      <path d="M12 9.5v2.5M9 20v-4.5a3 3 0 0 1 6 0V20" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="5.5" cy="8" r="1.6" />
      <path d="M5.5 10v1.8M3 20v-3.5a2.2 2.2 0 0 1 4.2-.8" strokeLinecap="round" />
      <circle cx="18.5" cy="8" r="1.6" />
      <path d="M18.5 10v1.8M21 20v-3.5a2.2 2.2 0 0 0-4.2-.8" strokeLinecap="round" />
    </svg>
  );
}

/** Temple / pagoda silhouette */
function IconDomainCultural() {
  return (
    <svg viewBox="0 0 24 24" className={domainIconClass} fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinejoin="round" aria-hidden>
      <path d="M12 3l6 4H6l6-4z" />
      <path d="M8 7h8l-1.5 2h-5L8 7zM9 9l-1.5 2h9L15 9" />
      <path d="M10 11h4l-1 2h-2l-1-2z" />
      <path d="M11 13v3M13 13v3" />
      <path d="M8 16h8v5H8v-5z" />
    </svg>
  );
}

/** Wallet */
function IconDomainInvestment() {
  return (
    <svg viewBox="0 0 24 24" className={domainIconClass} fill="none" stroke="currentColor" strokeWidth="1.65" aria-hidden>
      <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7z" strokeLinejoin="round" />
      <path d="M4 9h16v4H4" />
      <circle cx="16" cy="11" r="1.1" fill="currentColor" />
    </svg>
  );
}

/** Broadcast / signal */
function IconDomainMedia() {
  return (
    <svg viewBox="0 0 24 24" className={domainIconClass} fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" aria-hidden>
      <path d="M12 20V10" />
      <path d="M8 14a4 4 0 0 1 8 0" />
      <path d="M5 11a8 8 0 0 1 14 0" />
      <path d="M2 8a11 11 0 0 1 20 0" />
    </svg>
  );
}

const domains: DomainItem[] = [
  { code: "01", title: "Brand", body: "Co-branding opportunities for luxury and lifestyle brands looking to leverage Zen Cyber aesthetics.", icon: <IconDomainBrand /> },
  { code: "02", title: "Event", body: "Join our global circuit of offline experiences, from negotiation summits to tech expos.", icon: <IconDomainEvent /> },
  { code: "03", title: "Club", body: "Establish local chapters or exclusive member circles powered by our decentralized stack.", icon: <IconDomainClub /> },
  { code: "04", title: "Cultural Tourism", body: "Integrate destination management with AR workflows and city-word tech narratives.", icon: <IconDomainCultural /> },
  { code: "05", title: "Investment", body: "Venture capital and strategic financing for the expansion of the Wuyin digital infrastructure.", icon: <IconDomainInvestment /> },
  { code: "06", title: "Media", body: "Content distribution and strategic narrative development across multi-channel platforms.", icon: <IconDomainMedia /> },
];

const imperativeItems = [
  {
    title: "Global Reach",
    body: "Connect with high-net-worth audiences across three continents via our unified digital passport system.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
      </svg>
    ),
  },
  {
    title: "Cultural IP",
    body: "Leverage exclusive heritage-backed assets digitized for the modern cyberpunk era.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 3L4 7v6c0 5 4 8 8 8s8-3 8-8V7l-8-4z" />
        <path d="M9 12h6M12 9v6" />
      </svg>
    ),
  },
  {
    title: "Tech Empowerment",
    body: "Advanced blockchain and AI integration for transparent tracking and automated settlement.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="currentColor" aria-hidden>
        <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
      </svg>
    ),
  },
] as const;

export default function PartnershipPage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const t = window.setTimeout(() => scrollToSelector(location.hash), 0);
    return () => window.clearTimeout(t);
  }, [location.pathname, location.hash]);

  return (
    <div id="partnership" className="bg-[#09090b]">
      <section id="partnership-hero" className="border-b border-white/5">
        <div className="relative min-h-[420px] overflow-hidden bg-[#0d0d10] sm:min-h-[500px] lg:min-h-[560px]">
          <img
            src={imgPartnershipBanner}
            alt="Red illuminated Buddha chamber for partnership hero"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-linear-to-r from-[#060607]/95 via-[#060607]/60 to-black/35" />

          <div className="container-wuyin relative z-10 flex h-full min-h-[420px] flex-col justify-between px-6 py-8 sm:min-h-[500px] sm:px-8 sm:py-10 lg:min-h-[560px] lg:px-10 lg:py-12">
            <div className="max-w-[46rem] space-y-5">
              <p className="inline-flex items-center gap-3 text-[10px] font-semibold tracking-[0.34em] text-[#efb2b2]">
                <span className="inline-block h-px w-10 bg-[#ff8b8b]" />
                ENTERPRISE GATE
              </p>
              <h1 className="font-serif text-5xl leading-[0.92] text-white sm:text-6xl lg:text-[5.2rem]">
                Forge Your
                <span className="block italic text-[#ffb4c4]">Alliance</span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-neutral-300 sm:text-[1.65rem] sm:leading-[3rem]">
                Enter the high-performance ecosystem where traditional cultural wisdom meets mecha-precision technology. Build
                the next generation of B2B synergies.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  className="inline-flex rounded-[1px] bg-linear-to-r from-[#ff7f9d] to-[#ff535c] px-6 py-3 text-xs font-semibold tracking-[0.24em] text-neutral-950 transition hover:brightness-110"
                >
                  INITIALIZE PROTOCOL
                </button>
                <button
                  type="button"
                  className="ml-4 inline-flex border-b border-white/50 pb-1 text-xs font-semibold tracking-[0.2em] text-neutral-100 transition hover:text-white"
                >
                  Review Blueprints
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <aside className="w-[min(100%,20rem)] border border-white/15 bg-[#17181dcc] p-4 backdrop-blur-sm">
                <p className="text-[10px] font-semibold tracking-[0.22em] text-neutral-400">SYSTEM STATUS</p>
                <p className="mt-2 font-serif text-3xl leading-tight text-white">Node: Wuyin-Mainnet</p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="h-[2px] w-6 bg-[#ff8a8a]" />
                  <span className="h-[2px] w-5 bg-[#ff8a8a]/80" />
                  <span className="h-[2px] w-4 bg-white/45" />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section id="partnership-modules" className="border-b border-white/5 bg-[#0b0d11]">
        <div className="container-wuyin px-5 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-20 w-[1400px] mx-auto">
          <div className="mb-8 flex items-end justify-between gap-4 sm:mb-11">
            <div>
              <h2 className="font-serif text-4xl text-white sm:text-5xl">Strategic Domains</h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base">
                Select your sector to explore dedicated benefits and integration paths within the Ravin Portal.
              </p>
            </div>
            <span className="hidden text-[10px] tracking-[0.3em] text-neutral-500 sm:inline">R&amp;D / PARTNERSHIP MATRIX 0.3</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {domains.map((item) => (
              <article
                key={item.title}
                className="group min-h-[280px] border border-white/10 bg-linear-to-br from-[#141821] via-[#14161d] to-[#12141a] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-300 ease-[var(--ease-wuyin)] hover:-translate-y-0.5 hover:border-[#ff8b8b]/40"
              >
                <div className="mb-9 flex items-start justify-between">
                  {item.icon}
                  <span className="text-[10px] tracking-[0.2em] text-neutral-500">{item.code}</span>
                </div>
                <h3 className="font-serif text-[2rem] leading-none text-white">{item.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-8 text-neutral-300/90">{item.body}</p>
                <p className="mt-8 inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] text-[#ffb0b0]">
                  LEARN MORE
                  <span aria-hidden>➜</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="partnership-imperative" className="border-b border-white/5 bg-black">
        <div className="container-wuyin px-5 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-20 w-[1400px] mx-auto">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,1fr)] lg:items-stretch lg:gap-14">
            <div className="relative min-h-[320px] overflow-hidden sm:min-h-[400px] lg:min-h-[520px]">
              <img
                src={imgImperativePath}
                alt="Stone staircase through forest with light trail"
                className="h-full w-full object-cover grayscale contrast-[1.08]"
              />
              <div className="absolute bottom-5 right-5 border border-white/10 bg-[#1a1a1a]/95 px-5 py-4">
                <p className="font-serif text-3xl font-semibold text-white sm:text-4xl">99.9%</p>
                <p className="mt-1 text-[10px] font-medium tracking-[0.2em] text-white">UPTIME RELIABILITY</p>
              </div>
            </div>

            <div className="flex flex-col justify-center py-2 lg:py-6">
              <h2 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.25rem]">
                The Ecosystem
                <span className="mt-1 block font-serif text-4xl font-bold italic text-[#f0a8a8] sm:text-5xl lg:text-[3.25rem]">
                  Imperative
                </span>
              </h2>
              <ul className="mt-10 space-y-8">
                {imperativeItems.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#6b1c1c]">{item.icon}</div>
                    <div className="min-w-0">
                      <h3 className="font-serif text-lg font-semibold text-white sm:text-xl">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-neutral-400 sm:text-[0.95rem]">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="partnership-form">
        <div className="container-wuyin py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl border border-white/10 bg-[#121218] p-6 sm:p-8 lg:p-10">
            <div className="mb-8 text-center">
              <p className="text-[11px] tracking-[0.24em] text-neutral-500">ENTRY BRIDGE</p>
              <h2 className="mt-3 font-serif text-4xl italic text-white sm:text-5xl">Initialize Partnership</h2>
            </div>

            <form
              className="space-y-5"
              onSubmit={(event) => {
                event.preventDefault();
                window.alert("Submission is a placeholder. Production flow will connect with the real intake system.");
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-neutral-500">COMPANY NAME</span>
                  <input
                    type="text"
                    placeholder="Enter company name"
                    className="w-full border border-white/20 bg-transparent px-3 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-600 focus:border-white/40 focus:outline-none"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-neutral-500">ENTRY CATEGORY</span>
                  <select className="w-full border border-white/20 bg-transparent px-3 py-2.5 text-sm text-neutral-100 focus:border-white/40 focus:outline-none">
                    <option className="bg-[#111]" value="brand">
                      Brand
                    </option>
                    <option className="bg-[#111]" value="event">
                      Event
                    </option>
                    <option className="bg-[#111]" value="club">
                      Club
                    </option>
                    <option className="bg-[#111]" value="investment">
                      Investment
                    </option>
                  </select>
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-neutral-500">CONTACT NAME</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border border-white/20 bg-transparent px-3 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-600 focus:border-white/40 focus:outline-none"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-neutral-500">CONTACT EMAIL</span>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full border border-white/20 bg-transparent px-3 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-600 focus:border-white/40 focus:outline-none"
                  />
                </label>
              </div>

              <label className="space-y-2">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-neutral-500">PARTNERSHIP BRIEF</span>
                <textarea
                  rows={5}
                  placeholder="Tell us your objective, expected scale, and preferred collaboration timeline."
                  className="w-full resize-y border border-white/20 bg-transparent px-3 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-600 focus:border-white/40 focus:outline-none"
                />
              </label>

              <label className="inline-flex items-center gap-2 text-xs text-neutral-400">
                <input type="checkbox" className="h-3.5 w-3.5 border border-white/30 bg-transparent accent-[#ff7a7a]" />
                I confirm the information is accurate and available for business routing.
              </label>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="inline-flex rounded-[1px] bg-linear-to-r from-[#ff5959] to-[#ff9494] px-8 py-2.5 text-xs font-semibold tracking-[0.18em] text-neutral-950 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff9494]"
                >
                  SUBMIT REQUEST
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
