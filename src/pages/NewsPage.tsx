import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks";
import ScrollReveal from "@/components/motion/ScrollReveal";
import GhostButton from "@/components/ui/GhostButton";
import GradientButton from "@/components/ui/GradientButton";
import { formatNewsDate, getFeaturedNews, getNewsSorted, type NewsItem } from "@/content/newsItems";
import { useLocale } from "@/i18n/LocaleProvider";
import { scrollToSelector } from "@/lib/scroll";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function NewsCardBody({
  item,
  featured,
}: {
  item: NewsItem;
  featured?: boolean;
}) {
  const { t, locale } = useLocale();
  const title = locale === "en" ? item.titleEn : item.titleZh;
  const excerpt = locale === "en" ? item.excerptEn : item.excerptZh;
  const tagLabel = t(`news.tags.${item.tag}`);

  return (
    <Link
      to={`/news/${item.slug}`}
      className={[
        "group flex flex-col rounded-2xl border border-white/10 bg-[#141414] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 ease-[var(--ease-wuyin)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuyin-gold-bright sm:p-8",
        "hover:border-wuyin-accent/40 hover:shadow-[0_0_32px_rgba(228,184,74,0.08)]",
        featured ? "border-l-[3px] border-l-wuyin-accent lg:flex-row lg:items-stretch lg:gap-10" : "",
      ].join(" ")}
    >
      <div className={featured ? "lg:max-w-md lg:shrink-0" : ""}>
        <div className="flex flex-wrap items-center gap-2 text-xs text-wuyin-muted">
          <time dateTime={item.date} className="tabular-nums">
            {formatNewsDate(item.date, locale)}
          </time>
          <span className="rounded-sm bg-white/10 px-2 py-0.5 font-semibold uppercase tracking-wide text-neutral-300">
            {tagLabel}
          </span>
        </div>
        <h2
          className={[
            "mt-3 font-serif font-semibold tracking-tight text-white group-hover:text-wuyin-gold-bright/95",
            featured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl",
          ].join(" ")}
        >
          {title}
        </h2>
      </div>
      <div className={featured ? "mt-4 flex flex-1 flex-col lg:mt-0" : "mt-3"}>
        <p className={["leading-relaxed text-neutral-400", featured ? "text-sm sm:text-base" : "text-sm"].join(" ")}>
          {excerpt}
        </p>
        <span
          className={[
            "mt-4 inline-flex text-sm font-semibold text-wuyin-gold-bright/90 transition group-hover:text-wuyin-gold-bright",
            featured ? "lg:mt-auto" : "",
          ].join(" ")}
        >
          {t("news.readMore")}
          <span className="ml-1 transition group-hover:translate-x-0.5" aria-hidden>
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

export default function NewsPage() {
  const { t } = useLocale();
  const location = useLocation();
  const navigate = useNavigate();
  const sorted = getNewsSorted();
  const featured = getFeaturedNews();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const timer = window.setTimeout(() => scrollToSelector(hash), 0);
      return () => window.clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(228,184,74,0.14),transparent_55%),linear-gradient(180deg,#080706_0%,#0f0d0b_45%,#080706_100%)]"
          aria-hidden
        />
        <SectionGoldenBlocks density="sparse" intensity="subtle" variant={1} />
        <ScrollReveal
          variant="upGlow"
          className="container-wuyin relative z-10 py-20 sm:py-24 lg:py-28 wuyin-reveal-tech"
          visibleClassName="wuyin-reveal-tech-visible"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-wuyin-muted sm:text-sm">{t("news.heroKicker")}</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            {t("news.heroTitle")}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base">{t("news.heroLead")}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <GradientButton type="button" onClick={() => scrollToSelector("#news-list")}>
              {t("news.listTitle")}
            </GradientButton>
            <GhostButton type="button" onClick={() => navigate("/")}>
              {t("news.backHome")}
            </GhostButton>
          </div>
        </ScrollReveal>
      </section>

      {featured ? (
        <section id="news-featured" className="relative border-b border-white/5 bg-wuyin-bg py-16 sm:py-20">
          <SectionGoldenBlocks variant={0} />
          <ScrollReveal
            variant="upSoft"
            className="relative z-10 container-wuyin wuyin-reveal-tech"
            visibleClassName="wuyin-reveal-tech-visible"
          >
            <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl">{t("news.featuredTitle")}</h2>
            <div className="mt-8">
              <NewsCardBody item={featured} featured />
            </div>
          </ScrollReveal>
        </section>
      ) : null}

      <section id="news-list" className="relative border-b border-white/5 bg-wuyin-surface py-16 sm:py-20 lg:py-24">
        <ScrollReveal
          variant="upSoft"
          className="container-wuyin wuyin-reveal-tech"
          visibleClassName="wuyin-reveal-tech-visible"
          staggerChildren
          staggerStepMs={70}
        >
          <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl">{t("news.listTitle")}</h2>
          <ul className="mt-10 flex flex-col gap-6">
            {sorted.map((item) => (
              <li key={item.id}>
                <NewsCardBody item={item} />
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </section>
    </>
  );
}
