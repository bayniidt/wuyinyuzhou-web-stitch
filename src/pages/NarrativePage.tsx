import ScrollReveal from "@/components/motion/ScrollReveal";
import GhostButton from "@/components/ui/GhostButton";
import GradientButton from "@/components/ui/GradientButton";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import imgConceptTrinity from "@/images/page2(2).png";
import imgLineageIron from "@/images/page2(5).png";
import imgLineageObsidian from "@/images/page2(3).png";
import imgLineageVoid from "@/images/page2(4).png";
import narrativeBanner from "@/images/page2(6).png";
import narrativeMapBg from "@/images/page2(7).png";
import { scrollToSelector } from "@/lib/scroll";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const lineage = [
  {
    name: "Master Kenshin-X",
    role: "Obsidian Path",
    blurb: "以算法为刃，在数据湍流中刻下不可篡改的步法。他的每一次出招，都是链上共识的回声。",
    portrait: imgLineageObsidian,
    portraitAlt: "黑曜路径：低光中刃影与霓虹的氛围画面",
  },
  {
    name: "Ren · The Mist",
    role: "Void Walker",
    blurb: "游走于显影与隐匿之间，把身份拆成雾——只留下可被验证的「印」，而非可被追踪的「名」。",
    portrait: imgLineageVoid,
    portraitAlt: "虚空行者：雾感纵深与冷色光晕的氛围画面",
  },
  {
    name: "Iron Monk Goro",
    role: "Ledger Keeper",
    blurb: "守口如钟，守账如铁。他把「信任」从人情里剥离，交给数学与节律。",
    portrait: imgLineageIron,
    portraitAlt: "账册守护者：金属质感与克制光影的氛围画面",
  },
];

const fusionTiles = [
  { title: "Divergent Nodes", text: "多源叙事并行生长，冲突即张力，分叉即生态。" },
  { title: "Ink-Wash UI", text: "墨色渐变与留白节奏，让界面像卷轴一样呼吸。" },
  { title: "Verifiable Forms", text: "形体可被记录、被见证、被继承——武道亦是数据伦理。" },
  { title: "Living Lore", text: "故事不是静态文案，而是可被社区续写的开放协议。" },
];

export default function NarrativePage() {
  const reducedMotion = usePrefersReducedMotion();
  const location = useLocation();
  const navigate = useNavigate();

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
        id="narrative-hero"
        className="relative flex min-h-[78vh] items-center justify-center overflow-hidden border-b border-white/5"
      >
        <div
          className={[
            "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(255,77,77,0.18),transparent_50%),linear-gradient(180deg,#030303_0%,#0a0a0a_55%,#050505_100%)]",
            reducedMotion ? "" : "wuyin-animate-gradient-drift",
          ].join(" ")}
          aria-hidden
        />
        <img
          src={narrativeBanner}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.22]"
          decoding="async"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen"
          style={{
            backgroundImage:
              "linear-gradient(115deg,transparent 40%,rgba(34,211,238,0.08) 50%,transparent 60%)",
          }}
          aria-hidden
        />
        <ScrollReveal
          variant="upGlow"
          className="container-wuyin relative z-10 flex flex-col items-center py-24 text-center sm:py-28 wuyin-reveal-tech"
          visibleClassName="wuyin-reveal-tech-visible"
          staggerChildren
          staggerStepMs={90}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-wuyin-muted sm:text-sm">
            The Scroll of Wuyin
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            武印卷轴
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base">
            这是一条在虚空里展开的叙事：古武的节律、赛博的霓虹与链上的印记彼此缠绕。你读到的不是设定集，而是一张正在生成的地图。
          </p>
          <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <GradientButton
              className="w-full min-w-[220px] sm:w-auto"
              onClick={() => scrollToSelector("#narrative-map")}
            >
              展开卷轴
            </GradientButton>
            <GhostButton
              className="w-full min-w-[220px] sm:w-auto"
              onClick={() => navigate("/")}
            >
              返回主站
            </GhostButton>
          </div>
        </ScrollReveal>
      </section>

      <section
        id="narrative-map"
        className="border-b border-white/5 bg-wuyin-bg py-20 sm:py-28"
      >
        <div className="container-wuyin">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            虚空制图
            <span className="mt-2 block text-sm font-normal tracking-wide text-wuyin-muted sm:text-base">
              Cartography of the Void
            </span>
          </h2>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <ScrollReveal variant="leftSoft" className="wuyin-reveal-tech" visibleClassName="wuyin-reveal-tech-visible">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-cyan-500/20 bg-neutral-950 shadow-[0_0_80px_rgba(34,211,238,0.08)]">
                <img
                  src={narrativeMapBg}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-[0.22]"
                  decoding="async"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 opacity-90"
                  style={{
                    backgroundImage: `linear-gradient(rgba(34,211,238,0.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(34,211,238,0.15) 1px, transparent 1px)`,
                    backgroundSize: "28px 28px",
                  }}
                  aria-hidden
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_45%,transparent_0%,#000_70%)]" aria-hidden />
                <div className="absolute left-[18%] top-[58%] flex items-center gap-2 rounded-full border border-cyan-400/40 bg-black/60 px-3 py-1.5 text-xs text-cyan-100 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
                  黑曜裂谷
                </div>
                <div className="absolute right-[22%] top-[32%] flex items-center gap-2 rounded-full border border-[#ff8080]/40 bg-black/60 px-3 py-1.5 text-xs text-[#ffc9c9] backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-[#ff4d4d] shadow-[0_0_12px_#ff4d4d]" />
                  数字灵脉
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal
              variant="rightSoft"
              delayMs={90}
              className="space-y-5 text-sm leading-relaxed text-neutral-300 sm:text-base"
            >
              <p>
                卷轴上的「地形」并非装饰：它标记风险、机遇与社群节点。每一处高光，都是可被进入的故事入口；每一条等高线，都是规则与激励的边界。
              </p>
              <p className="text-wuyin-muted">
                当你在此落印，地图会记住你——不是记住你的面孔，而是记住你的选择与轨迹。
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section
        id="narrative-concepts"
        className="border-b border-white/5 bg-wuyin-surface py-20 sm:py-28"
      >
        <div className="container-wuyin grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal variant="leftSoft">
            <div className="space-y-8">
              <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">武道三念</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff8080]">Zhi · 止</p>
                  <p className="mt-2 text-sm text-neutral-300 sm:text-base">
                    在噪声里学会停：止不是退缩，而是把力量收束到唯一正确的落点。
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff8080]">Ge · 格</p>
                  <p className="mt-2 text-sm text-neutral-300 sm:text-base">
                    格挡与对话同源：与系统博弈，与自我对齐，在边界上雕刻出风格。
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ff8080]">Yin · 印</p>
                  <p className="mt-2 text-sm text-neutral-300 sm:text-base">
                    印是证据，也是誓言：一次吐纳、一场对决、一枚藏品，皆可成为可被继承的记忆。
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal
            variant="rightSoft"
            delayMs={90}
            className="wuyin-reveal-tech"
            visibleClassName="wuyin-reveal-tech-visible"
          >
            <div
              className="relative aspect-square max-h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-950"
              aria-hidden
            >
              <img
                src={imgConceptTrinity}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                decoding="async"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="narrative-lineage" className="border-b border-white/5 py-20 sm:py-28">
        <ScrollReveal
          variant="leftSoft"
          delayMs={100}
          className="container-wuyin wuyin-reveal-tech"
          visibleClassName="wuyin-reveal-tech-visible"
        >
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">刃之谱系</h2>
          <p className="mt-3 max-w-2xl text-sm text-neutral-400 sm:text-base">
            Lineage of the Blade — 他们不是「角色卡」，而是叙事引擎的人格化切片。
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {lineage.map((c) => (
              <article
                key={c.name}
                className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-wuyin-elevated/80 shadow-wuyin-glow"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-neutral-950">
                  <img
                    src={c.portrait}
                    alt={c.portraitAlt}
                    className="h-full w-full object-cover"
                    decoding="async"
                    loading="lazy"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-white/[0.03]"
                    aria-hidden
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-wuyin-muted">{c.role}</p>
                  <h3 className="font-serif text-xl font-semibold text-white">{c.name}</h3>
                  <p className="text-sm leading-relaxed text-neutral-400">{c.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section id="narrative-fusion" className="py-20 sm:py-28">
        <ScrollReveal
          variant="upGlow"
          delayMs={120}
          className="container-wuyin wuyin-reveal-tech"
          visibleClassName="wuyin-reveal-tech-visible"
        >
          <h2 className="text-center font-serif text-3xl font-bold text-white sm:text-4xl">
            熔铸不可抹除之物
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-neutral-400 sm:text-base">
            Fusing the Un-erasable — 把东方武道的「气口」与链上协议的「硬约束」焊在同一套美学里。
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {fusionTiles.map((t) => (
              <div
                key={t.title}
                className="rounded-xl border border-white/10 bg-wuyin-surface/80 p-5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 ease-[var(--ease-wuyin)] hover:border-white/20 hover:bg-wuyin-elevated/60"
              >
                <p className="text-sm font-semibold text-white">{t.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-wuyin-muted sm:text-sm">{t.text}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
