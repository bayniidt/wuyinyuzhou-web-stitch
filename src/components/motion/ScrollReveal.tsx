import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { type HTMLAttributes, useEffect, useRef, useState } from "react";

export type ScrollRevealVariant = "up" | "left" | "right";

type ScrollRevealProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  /** 进入视口后追加的类名（可选） */
  visibleClassName?: string;
  variant?: ScrollRevealVariant;
  /** 仅触发一次后停止观察 */
  once?: boolean;
  rootMargin?: string;
  threshold?: number | number[];
};

const variantHidden: Record<ScrollRevealVariant, string> = {
  up: "opacity-0 translate-y-4",
  left: "opacity-0 -translate-x-4",
  right: "opacity-0 translate-x-4",
};

const variantShown = "opacity-100 translate-x-0 translate-y-0";

export default function ScrollReveal({
  children,
  className = "",
  visibleClassName = "",
  variant = "up",
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

  return (
    <div
      ref={ref}
      className={[
        "transition-[opacity,transform] duration-[var(--wuyin-reveal-duration)] ease-[var(--ease-wuyin)]",
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
