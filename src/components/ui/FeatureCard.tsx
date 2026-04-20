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
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-wuyin-surface/80 shadow-wuyin-glow backdrop-blur-sm transition-all duration-500 hover:border-wuyin-accent/30 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900 transition-transform duration-700 group-hover:scale-105">{image}</div>
      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-wuyin-muted">
          {domainLabel}
        </p>
        <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl transition-colors group-hover:text-wuyin-gold-bright">{title}</h3>
        <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
          <p className="overflow-hidden text-sm leading-relaxed text-wuyin-muted sm:text-base opacity-80 group-hover:opacity-100">
            {description}
          </p>
        </div>
        <span
          aria-hidden
          className="mt-4 h-0.5 w-12 rounded-full bg-linear-to-r from-wuyin-accent/55 to-wuyin-accent-soft/45 transition-all duration-500 group-hover:w-full group-hover:from-wuyin-gold-bright group-hover:to-wuyin-accent"
        />
      </div>
    </article>
  );
}
