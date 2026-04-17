import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { type CSSProperties, type HTMLAttributes, useEffect, useRef, useState } from "react";

export type ScrollRevealVariant = "up" | "left" | "right" | "upSoft" | "upGlow" | "leftSoft" | "rightSoft";

type ScrollRevealProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  /** 进入视口后追加的类名（可选） */
  visibleClassName?: string;
  variant?: ScrollRevealVariant;
  delayMs?: number;
  staggerChildren?: boolean;
  staggerStepMs?: number;
  /** 仅触发一次后停止观察 */
  once?: boolean;
  rootMargin?: string;
  threshold?: number | number[];
};

const variantHidden: Record<ScrollRevealVariant, string> = {
  up: "opacity-0 translate-y-4",
  left: "opacity-0 -translate-x-4",
  right: "opacity-0 translate-x-4",
  upSoft: "opacity-0 translate-y-5 scale-[0.985]",
  upGlow: "opacity-0 translate-y-6 scale-[0.98] blur-[1.5px]",
  leftSoft: "opacity-0 -translate-x-5 scale-[0.985]",
  rightSoft: "opacity-0 translate-x-5 scale-[0.985]",
};

const variantShown = "opacity-100 translate-x-0 translate-y-0";

export default function ScrollReveal({
  children,
  className = "",
  visibleClassName = "",
  variant = "up",
  delayMs = 0,
  staggerChildren = false,
  staggerStepMs = 70,
  once = true,
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.08,
  ...rest
}: ScrollRevealProps) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(reduced);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.some((e) => e.isIntersecting);
        if (hit) {
          setVisible(true);
          if (once) io.disconnect();
        } else if (!once) setVisible(false);
      },
      { root: null, rootMargin, threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, reduced, rootMargin, threshold]);

  const motionClass = reduced
    ? variantShown
    : visible
      ? variantShown
      : variantHidden[variant];
  const inlineStyle = {
    transitionDelay: reduced || !visible || delayMs <= 0 ? undefined : `${delayMs}ms`,
    "--wuyin-stagger-step": `${Math.max(25, staggerStepMs)}ms`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      data-visible={visible || reduced}
      style={inlineStyle}
      className={[
        "transition-[opacity,transform,filter] duration-[var(--wuyin-reveal-duration)] ease-[var(--ease-wuyin)] will-change-[opacity,transform,filter]",
        staggerChildren ? "wuyin-reveal-stagger" : "",
        motionClass,
        className,
        visible || reduced ? visibleClassName : "",
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </div>
  );
}
