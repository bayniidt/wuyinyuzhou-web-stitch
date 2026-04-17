import type { ReactNode } from "react";

type Props = {
  domainLabel: string;
  title: string;
  description: string;
  image: ReactNode;
};

export default function FeatureCard({
  domainLabel,
  title,
  description,
  image,
}: Props) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-wuyin-surface/80 shadow-wuyin-glow backdrop-blur-sm transition hover:border-red-500/30">
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">{image}</div>
      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-wuyin-muted">
          {domainLabel}
        </p>
        <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">{title}</h3>
        <p className="text-sm leading-relaxed text-wuyin-muted sm:text-base">{description}</p>
        <span
          aria-hidden
          className="mt-2 h-0.5 w-12 rounded-full bg-linear-to-r from-[#ff4d4d] to-[#ff8080] transition group-hover:w-20"
        />
      </div>
    </article>
  );
}
