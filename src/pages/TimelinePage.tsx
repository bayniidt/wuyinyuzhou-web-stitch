import GhostButton from "@/components/ui/GhostButton";
import GradientButton from "@/components/ui/GradientButton";
import { scrollToSelector } from "@/lib/scroll";
import imgTimelineRoad from "@/images/pexels-adrien-olichon-1257089-2387532.jpg";
import imgTimelineManifesto from "@/images/pexels-simonptr-33607952.jpg";
import imgTimelineKinetic from "@/images/pexels-cottonbro-6153741.jpg";
import imgTimelineRoster from "@/images/pexels-francesco-ungaro-9973336.jpg";
import imgRosterGhost from "@/images/pexels-jonathanborba-14268859.jpg";
import imgRosterIron from "@/images/pexels-jonathanborba-14358449.jpg";
import imgRosterNeon from "@/images/pexels-leonbastian-35010154.jpg";
import imgRosterVoid from "@/images/pexels-rudonni-7174683.jpg";
import kineticPreviewMp4 from "@/videos/15402275_1920_1080_30fps.mp4";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type TimelineModule = {
  id: string;
  kicker: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  /** 首屏为左图右文，其后交替 */
  imageOnLeft: boolean;
  bullets?: { step: string; title: string; text: string }[];
  statLine?: string;
};

const modules: TimelineModule[] = [
  {
    id: "timeline-road",
    kicker: "Road Ahead",
    title: "从概念到现场的节律",
    body:
      "赛事筹备、内容发布与链上权益将逐步对齐。以下模块采用「图 / 文」一比一排布，配以本地摄影素材强化现场感与节律。",
    imageSrc: imgTimelineRoad,
    imageAlt: "赛事与城市现场氛围",
    imageOnLeft: true,
    bullets: [
      { step: "01", title: "定标", text: "锁定城市、场馆与主视觉方向，建立可复用的组件与文案基线。" },
      { step: "02", title: "共振", text: "开放社群共创节点，把里程碑拆成可被参与、被见证的小步。" },
      { step: "03", title: "落印", text: "把关键动作写入链上或票务系统，形成可回溯的「时间证据」。" },
    ],
  },
  {
    id: "timeline-manifesto",
    kicker: "Manifesto",
    title: "叙事不是装饰，是约束",
    body:
      "当武道的「止」与赛博的「硬分叉」并置，时间线就不再是列表，而是一条可被行走的路径。我们用留白压住噪点，用红色提示真正的决策点。",
    imageSrc: imgTimelineManifesto,
    imageAlt: "叙事与空间光影",
    imageOnLeft: false,
    statLine: "2.4m · 站立高度（示意数据）",
  },
  {
    id: "timeline-kinetic",
    kicker: "Kinetic Era",
    title: "机甲拳击：动能时代",
    body:
      "动能模块用于承载预告片、幕后纪录片或实机演示。下图块为本地素材；点击下方按钮可跳转至本页内嵌的预发布影像。",
    imageSrc: imgTimelineKinetic,
    imageAlt: "动能训练与竞技氛围",
    imageOnLeft: true,
  },
  {
    id: "timeline-roster",
    kicker: "Warrior Roster",
    title: "战士名册与身份延展",
    body:
      "名册区块可与检索、筛选及链上身份展示对接；此处延续一比一版式，用影像先建立名册气质与对比度。",
    imageSrc: imgTimelineRoster,
    imageAlt: "团队与名册视觉",
    imageOnLeft: false,
  },
];

function IconLightning({ className = "h-3.5 w-3.5 shrink-0 text-[#ff4d4d]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
    </svg>
  );
}

function AccessTiersSection() {
  return (
    <section
      id="timeline-access-tiers"
      className="border-b border-white/5 bg-wuyin-bg py-16 sm:py-20 lg:py-24"
    >
      <div className="container-wuyin">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-semibold italic tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
              Access Tiers
            </h2>
            <p className="mt-2 max-w-xl text-sm text-neutral-400 sm:text-base">
              Secure your position in the digital colosseum.
            </p>
          </div>
          <p className="text-xs text-neutral-600 sm:text-right">ETH · 占位计价</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {/* Standard */}
          <article className="flex flex-col rounded-2xl border border-white/10 bg-[#141414] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-8">
            <h3 className="font-serif text-2xl font-semibold italic text-white">Standard</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              Main arena seating &amp; event digital memento.
            </p>
            <p className="mt-8 font-serif text-4xl font-bold tabular-nums text-white sm:text-5xl">
              0.08
              <span className="ml-1 align-top text-lg font-sans font-semibold text-neutral-500 sm:text-xl">ETH</span>
            </p>
            <ul className="mt-8 flex flex-col gap-3 text-xs font-semibold uppercase tracking-wide text-neutral-200 sm:text-sm">
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff4d4d]" aria-hidden />
                Arena Level 2
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff4d4d]" aria-hidden />
                POAP Badge
              </li>
            </ul>
            <div className="mt-auto pt-10">
              <GhostButton type="button" className="w-full" onClick={() => window.alert("Standard 档位为占位。")}>
                Select Tier
              </GhostButton>
            </div>
          </article>

          {/* V.I.P. */}
          <article className="relative flex flex-col rounded-2xl border border-white/10 border-l-[3px] border-l-[#ff4d4d] bg-[#141414] p-6 shadow-[0_0_48px_rgba(255,77,77,0.12),inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-8 lg:-my-2 lg:py-10">
            <span
              className="absolute right-5 top-5 rounded-sm bg-[#ff4d4d] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-neutral-950 sm:right-6 sm:top-6"
              aria-label="推荐档位"
            >
              Recommended
            </span>
            <div>
              <h3 className="font-serif text-2xl font-semibold italic text-white">V.I.P.</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                Front row interaction &amp; limited edition physical gear.
              </p>
              <div className="mt-8 flex flex-wrap items-baseline gap-x-1 gap-y-0">
                <span className="bg-linear-to-r from-[#ff4d4d] to-[#ff8080] bg-clip-text font-serif text-4xl font-bold tabular-nums text-transparent sm:text-5xl">
                  0.25
                </span>
                <span className="font-sans text-lg font-semibold text-[#ff8080] sm:text-xl">ETH</span>
              </div>
              <ul className="mt-8 flex flex-col gap-3 text-xs font-semibold uppercase tracking-wide text-neutral-200 sm:text-sm">
                <li className="flex items-center gap-2.5">
                  <IconLightning />
                  Exclusive Access
                </li>
                <li className="flex items-center gap-2.5">
                  <IconLightning />
                  Signed Roster Print
                </li>
                <li className="flex items-center gap-2.5">
                  <IconLightning />
                  After-party Entry
                </li>
              </ul>
            </div>
            <div className="mt-auto pt-10">
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-[1px] bg-linear-to-r from-[#ff4d4d] to-[#ff8080] px-6 py-3 text-sm font-semibold tracking-wide text-neutral-950 shadow-wuyin-glow transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8080] active:scale-[0.98] sm:py-3.5 sm:text-base"
                onClick={() => window.alert("V.I.P. 档位为占位。")}
              >
                Reserve Spot
              </button>
            </div>
          </article>

          {/* Metaverse */}
          <article className="flex flex-col rounded-2xl border border-white/10 bg-[#141414] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-8">
            <h3 className="font-serif text-2xl font-semibold italic text-white">Metaverse</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              Virtual 8K 360° streaming &amp; 3D avatar skin.
            </p>
            <p className="mt-8 font-serif text-4xl font-bold tabular-nums text-white sm:text-5xl">
              0.05
              <span className="ml-1 align-top text-lg font-sans font-semibold text-neutral-500 sm:text-xl">ETH</span>
            </p>
            <ul className="mt-8 flex flex-col gap-3 text-xs font-semibold uppercase tracking-wide text-neutral-200 sm:text-sm">
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300/90" aria-hidden />
                Unlimited Replay
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300/90" aria-hidden />
                Exclusive Avatar Scan
              </li>
            </ul>
            <div className="mt-auto pt-10">
              <GhostButton type="button" className="w-full" onClick={() => window.alert("Metaverse 档位为占位。")}>
                Digital Access
              </GhostButton>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

const rosterCards = [
  {
    name: "Ghost Orchid",
    role: "Phantom Ops",
    imageSrc: imgRosterGhost,
  },
  {
    name: "Iron Will",
    role: "Armored Core",
    imageSrc: imgRosterIron,
  },
  {
    name: "Neon Fade",
    role: "Pulse Mind",
    imageSrc: imgRosterNeon,
  },
  {
    name: "Void Breaker",
    role: "Rogue Grip",
    imageSrc: imgRosterVoid,
  },
];

function WarriorRosterSection() {
  return (
    <section id="timeline-warrior-roster" className="border-b border-white/5 bg-wuyin-bg py-16 sm:py-20 lg:py-24">
      <div className="container-wuyin">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-serif text-3xl font-semibold italic tracking-tight text-white sm:text-4xl">
            Warrior Roster
            <span className="ml-1 text-[#ff8080]">.</span>
          </h2>
          <button
            type="button"
            aria-label="筛选（占位）"
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/20 text-neutral-300 transition hover:border-white/40 hover:text-white"
            onClick={() => window.alert("筛选功能为占位。")}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M4 7h16M7 12h10M10 17h4" />
            </svg>
          </button>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rosterCards.map((card) => (
            <article
              key={card.name}
              className="group relative overflow-hidden border border-white/10 bg-neutral-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
            >
              <img
                src={card.imageSrc}
                alt={card.name}
                width={760}
                height={1080}
                className="aspect-[3/4] w-full object-cover grayscale transition duration-300 group-hover:scale-[1.02]"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#ff8080]">{card.role}</p>
                <h3 className="mt-2 font-serif text-3xl font-bold uppercase leading-[0.9] text-white">
                  {card.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSplitModule({ m, surface }: { m: TimelineModule; surface: string }) {
  return (
    <section id={m.id} className={`border-b border-white/5 py-16 sm:py-20 lg:py-24 ${surface}`}>
      <div className="container-wuyin">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div
            className={[
              "overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-wuyin-glow",
              m.imageOnLeft ? "lg:order-1" : "lg:order-2",
            ].join(" ")}
          >
            <img
              src={m.imageSrc}
              alt={m.imageAlt}
              width={900}
              height={1120}
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className={m.imageOnLeft ? "lg:order-2" : "lg:order-1"}>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ff8080]">{m.kicker}</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">{m.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-300 sm:text-base">{m.body}</p>

            {m.statLine ? <p className="mt-6 text-sm font-medium text-neutral-200">{m.statLine}</p> : null}

            {m.bullets ? (
              <ol className="mt-8 space-y-6">
                {m.bullets.map((b) => (
                  <li key={b.step + b.title} className="flex gap-4">
                    <span className="mt-0.5 inline-flex min-w-[2.75rem] font-mono text-xs font-semibold tabular-nums text-wuyin-muted">
                      {b.step}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white sm:text-base">{b.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-400">{b.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            ) : null}

            {m.id === "timeline-kinetic" ? (
              <div className="mt-8">
                <GradientButton
                  type="button"
                  className="inline-flex items-center gap-2"
                  onClick={() => scrollToSelector("#timeline-kinetic-preview")}
                >
                  <span aria-hidden>▶</span>
                  观看预发布预告
                </GradientButton>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function KineticPreviewSection() {
  return (
    <section
      id="timeline-kinetic-preview"
      className="border-b border-white/5 bg-wuyin-surface py-14 sm:py-20"
      aria-labelledby="timeline-kinetic-preview-heading"
    >
      <div className="container-wuyin max-w-4xl">
        <h2
          id="timeline-kinetic-preview-heading"
          className="font-serif text-2xl font-bold text-white sm:text-3xl"
        >
          预发布影像
        </h2>
        <p className="mt-2 text-sm text-neutral-400 sm:text-base">
          本地 1080p 素材预览，可在此核对节奏与调色；正式版本可替换为外链或流媒体。
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black shadow-wuyin-glow">
          <video
            className="aspect-video w-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster={imgTimelineKinetic}
          >
            <source src={kineticPreviewMp4} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default function TimelinePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const firstModule = modules[0]!;
  const secondModule = modules[1]!;
  const thirdModule = modules[2]!;
  const fourthModule = modules[3]!;

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const t = window.setTimeout(() => scrollToSelector(hash), 0);
      return () => window.clearTimeout(t);
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <section
        id="timeline-hero"
        className="relative overflow-hidden border-b border-white/5"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,77,77,0.16),transparent_55%),linear-gradient(180deg,#030303_0%,#080808_45%,#050505_100%)]"
          aria-hidden
        />
        <div className="container-wuyin relative z-10 py-20 sm:py-24 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-wuyin-muted sm:text-sm">
            2026 Hangzhou Show
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="text-white">时间线</span>
            <span className="bg-linear-to-r from-[#ff4d4d] to-[#ff8080] bg-clip-text text-transparent"> · Timeline</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base">
            本页采用「左图右文 / 左文右图」交替的一比一排布，配图与预发布影像均来自项目内本地素材。
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <GradientButton type="button" onClick={() => scrollToSelector("#timeline-road")}>
              查看路线
            </GradientButton>
            <GhostButton type="button" onClick={() => navigate("/")}>
              返回主站
            </GhostButton>
          </div>
        </div>
      </section>

      <AccessTiersSection />
      <TimelineSplitModule m={firstModule} surface="bg-wuyin-bg" />
      <WarriorRosterSection />
      <TimelineSplitModule m={secondModule} surface="bg-wuyin-surface" />
      <TimelineSplitModule m={thirdModule} surface="bg-wuyin-bg" />
      <KineticPreviewSection />
      <TimelineSplitModule m={fourthModule} surface="bg-wuyin-surface" />
    </>
  );
}
