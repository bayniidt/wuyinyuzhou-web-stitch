import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export type SectionGoldenBlocksProps = {
  density?: "sparse" | "normal";
  intensity?: "subtle" | "medium";
  /** 0–2：布局与相位偏移，减少各段视觉雷同 */
  variant?: number;
  className?: string;
};

type BlockSpec = {
  l: number;
  t: number;
  w: number;
  h: number;
  r: number;
  delay: number;
  dur: number;
};

/** 确定性伪随机 0–99，避免 SSR/重渲染抖动 */
function blockRand99(index: number, variant: number, density: string): number {
  const v = ((variant % 3) + 3) % 3;
  const d = density === "sparse" ? 1 : 0;
  return Math.abs(Math.floor(Math.sin(index * 12.9898 + v * 78.233 + d * 45.164) * 43758.5453)) % 100;
}

const BASE_BLOCKS: BlockSpec[] = [
  { l: 5, t: 8, w: 14, h: 7, r: -8, delay: 0, dur: 24 },
  { l: 72, t: 6, w: 11, h: 9, r: 12, delay: -2, dur: 26 },
  { l: 18, t: 62, w: 16, h: 6, r: -4, delay: -5, dur: 21 },
  { l: 82, t: 48, w: 9, h: 11, r: 7, delay: -1.5, dur: 28 },
  { l: 42, t: 18, w: 7, h: 14, r: 20, delay: -3.5, dur: 22 },
  { l: 58, t: 72, w: 12, h: 8, r: -11, delay: -7, dur: 25 },
  { l: 28, t: 38, w: 10, h: 10, r: 5, delay: -4, dur: 23 },
  { l: 88, t: 78, w: 8, h: 7, r: -16, delay: -6, dur: 27 },
  { l: 8, t: 42, w: 11, h: 9, r: 15, delay: -8, dur: 24 },
  { l: 48, t: 52, w: 13, h: 7, r: -2, delay: -2.5, dur: 26 },
];

function withVariant(spec: BlockSpec, index: number, variant: number): BlockSpec {
  const v = ((variant % 3) + 3) % 3;
  return {
    ...spec,
    l: spec.l + v * 1.1 + (index % 2) * 0.35,
    t: spec.t + v * -0.9 + (index % 3) * 0.4,
    r: spec.r + v * 3.5 + (index % 4) * 1.2,
    delay: spec.delay + v * 1.4,
    dur: spec.dur + (index % 3) * 0.8,
  };
}

/** 区块背后的金色科技风漂浮块装饰，置于 section 内最底层；父级需 `relative`（及按需 `overflow-hidden`）。 */
export default function SectionGoldenBlocks({
  density = "normal",
  intensity = "medium",
  variant = 0,
  className = "",
}: SectionGoldenBlocksProps) {
  const reducedMotion = usePrefersReducedMotion();
  const count = density === "sparse" ? 6 : 10;
  const blocks = BASE_BLOCKS.slice(0, count).map((b, i) => withVariant(b, i, variant));

  const intensityClass =
    intensity === "subtle"
      ? "border-wuyin-gold/10 bg-linear-to-br from-wuyin-gold/[0.05] via-wuyin-gold-bright/[0.04] to-transparent shadow-[0_0_18px_rgb(228_184_74/0.06)]"
      : "border-wuyin-gold/18 bg-linear-to-br from-wuyin-gold/[0.09] via-wuyin-gold-bright/[0.06] to-transparent shadow-[0_0_22px_rgb(228_184_74/0.1)]";

  return (
    <div
      className={["pointer-events-none absolute inset-0 z-0 overflow-hidden", className].filter(Boolean).join(" ")}
      aria-hidden
    >
      {blocks.map((b, i) => {
        const glintDur = Math.max(12, Math.round(b.dur * 0.58));
        const isSquare = blockRand99(i, variant, density) < 48;
        let rw = b.w;
        let rh = b.h;
        if (!isSquare) {
          if (rw === rh) {
            rh = Math.max(4, Math.round(rw * 0.62 * 10) / 10);
          } else if (blockRand99(i + 17, variant, density) < 50) {
            [rw, rh] = [rh, rw];
          }
        }
        const squareSize = Math.max(rw, rh) * 0.5;
        return (
          <div
            key={i}
            className={[
              "absolute rounded-sm border mix-blend-screen",
              intensityClass,
              reducedMotion ? "opacity-45" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            style={{
              left: `${b.l}%`,
              top: `${b.t}%`,
              width: isSquare ? `${squareSize}%` : `${rw}%`,
              height: isSquare ? "auto" : `${rh}%`,
              ...(isSquare ? { aspectRatio: "1" } : {}),
              ["--wuyin-block-rot" as string]: `${b.r}deg`,
              ...(reducedMotion
                ? { transform: `rotate(${b.r}deg)` }
                : {
                    animation: `wuyin-golden-block-float ${b.dur}s var(--ease-wuyin) infinite both, wuyin-golden-block-glint ${glintDur}s var(--ease-wuyin) infinite both`,
                    animationDelay: `${b.delay}s, ${b.delay + 0.85}s`,
                  }),
            }}
          />
        );
      })}
    </div>
  );
}
