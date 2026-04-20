import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { formatNewsDate, getNewsBySlug } from "@/content/newsItems";
import { useLocale } from "@/i18n/LocaleProvider";
import { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

export default function NewsDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, locale } = useLocale();
  const item = getNewsBySlug(slug);

  const paragraphs = useMemo(() => {
    if (!item) return [];
    const raw = locale === "en" ? item.bodyEn : item.bodyZh;
    return raw.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  }, [item, locale]);

  if (!item) {
    return <Navigate to="/news" replace />;
  }

  const title = locale === "en" ? item.titleEn : item.titleZh;
  const tagLabel = t(`news.tags.${item.tag}`);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(228,184,74,0.12),transparent_50%),linear-gradient(180deg,#080706_0%,#0f0d0b_50%,#080706_100%)]"
          aria-hidden
        />
        <SectionGoldenBlocks density="sparse" intensity="subtle" variant={2} />
        <ScrollReveal
          variant="upGlow"
          className="container-wuyin relative z-10 max-w-3xl py-16 sm:py-20 lg:py-24 wuyin-reveal-tech"
          visibleClassName="wuyin-reveal-tech-visible"
        >
          <div className="flex flex-wrap items-center gap-2 text-xs text-wuyin-muted">
            <time dateTime={item.date} className="tabular-nums">
              {formatNewsDate(item.date, locale)}
            </time>
            <span className="rounded-sm bg-white/10 px-2 py-0.5 font-semibold uppercase tracking-wide text-neutral-300">
              {tagLabel}
            </span>
          </div>
          <h1 className="mt-6 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.35rem]">{title}</h1>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400 sm:text-base">
            {locale === "en" ? item.excerptEn : item.excerptZh}
          </p>
        </ScrollReveal>
      </section>

      <article className="border-b border-white/5 bg-wuyin-surface py-12 sm:py-16 lg:py-20">
        <div className="container-wuyin max-w-3xl">
          <div className="text-neutral-300">
            {paragraphs.map((p, i) => (
              <p key={i} className="mb-6 last:mb-0 text-sm leading-relaxed sm:text-base">
                {p}
              </p>
            ))}
          </div>

          {item.href ? (
            <div className="mt-10 rounded-xl border border-white/10 bg-wuyin-elevated/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-wuyin-muted">{t("news.relatedLink")}</p>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-2 inline-block break-all text-sm font-semibold text-wuyin-gold-bright underline-offset-4 hover:underline"
              >
                {item.href}
              </a>
            </div>
          ) : null}

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/news"
              className="inline-flex items-center justify-center rounded-[1px] border border-white/70 bg-transparent px-6 py-2.5 text-sm font-semibold tracking-wide text-white transition hover:border-wuyin-gold-bright/55 hover:bg-wuyin-gold/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuyin-gold-bright active:scale-[0.98] sm:px-8 sm:py-3 sm:text-base"
            >
              {t("news.backToList")}
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-[1px] border border-white/70 bg-transparent px-6 py-2.5 text-sm font-semibold tracking-wide text-white transition hover:border-wuyin-gold-bright/55 hover:bg-wuyin-gold/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuyin-gold-bright active:scale-[0.98] sm:px-8 sm:py-3 sm:text-base"
            >
              {t("news.backHome")}
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
