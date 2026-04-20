import type { NewsItem } from "@/content/newsItems";
import { useLocale } from "@/i18n/LocaleProvider";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import type { CSSProperties } from "react";
import { useId, useState } from "react";
import { Link } from "react-router-dom";

/** 走一圈（半幅宽度）的时长，数值越小越快 */
const MARQUEE_DURATION_S = 28;

type HomeNewsCarouselProps = {
  items: NewsItem[];
};

export default function HomeNewsCarousel({ items }: HomeNewsCarouselProps) {
  const { t, locale } = useLocale();
  const reducedMotion = usePrefersReducedMotion();
  const descId = useId();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  /** 鼠标在走马灯可视区域内（含某张卡片）时为 true，用于可靠暂停动画 */
  const [marqueePaused, setMarqueePaused] = useState(false);

  if (items.length === 0) return null;

  const marqueeStyle = {
    ["--wuyin-news-marquee-duration" as string]: `${MARQUEE_DURATION_S}s`,
    animationPlayState: marqueePaused ? "paused" : "running",
  } as CSSProperties;

  const cardClass = (item: NewsItem) => {
    const dimmed = hoveredId !== null && hoveredId !== item.id;
    return [
      "group flex min-h-[min(420px,calc(100vw-2rem))] shrink-0 flex-col overflow-hidden rounded-3xl border bg-[#141414] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 ease-[var(--ease-wuyin)]",
      "w-[min(24rem,calc(100vw-2rem))] sm:w-[320px] md:w-[360px] lg:w-[380px] xl:w-[400px]",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuyin-gold-bright",
      dimmed ? "border-white/10 opacity-[0.52]" : "border-white/10 opacity-100",
      hoveredId === item.id
        ? "z-[1] scale-[1.02] border-wuyin-accent/55 shadow-[0_0_36px_rgba(228,184,74,0.14)]"
        : "hover:border-wuyin-accent/35",
    ].join(" ");
  };

  const renderCard = (item: NewsItem, suffix: string, duplicate: boolean) => {
    const title = locale === "en" ? item.titleEn : item.titleZh;
    const excerpt = locale === "en" ? item.excerptEn : item.excerptZh;
    return (
      <Link
        key={`${item.id}-${suffix}`}
        data-news-card
        to={`/news/${item.slug}`}
        tabIndex={duplicate ? -1 : undefined}
        className={cardClass(item)}
        onMouseEnter={() => setHoveredId(item.id)}
      >
        <div className="flex flex-1 flex-col p-5 pb-4 sm:p-6 sm:pb-4">
          <time dateTime={item.date} className="text-sm font-semibold tabular-nums text-red-500/95">
            {item.date}
          </time>
          <h3 className="mt-3 line-clamp-2 font-serif text-base font-semibold leading-snug text-white group-hover:text-wuyin-gold-bright/95 sm:text-lg md:text-xl">
            {title}
          </h3>
          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-neutral-400 sm:text-base">{excerpt}</p>
        </div>
        <div className="relative mt-auto aspect-[16/9] min-h-[10.5rem] w-full overflow-hidden rounded-b-[1.35rem] border-t border-white/5 bg-neutral-900 sm:min-h-[12rem]">
          {item.coverImage ? (
            <img
              src={item.coverImage}
              alt=""
              className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]"
              decoding="async"
            />
          ) : (
            <div
              className="h-full w-full bg-[linear-gradient(135deg,rgb(20_20_20)_0%,rgb(40_36_28)_100%)]"
              aria-hidden
            />
          )}
        </div>
      </Link>
    );
  };

  if (reducedMotion) {
    return (
      <div role="region" aria-label={t("home.newsTeaser.carouselRegionLabel")} aria-describedby={descId}>
        <p id={descId} className="sr-only">
          {t("home.newsTeaser.carouselInstructions")}
        </p>
        <div className="flex flex-wrap justify-center gap-6 pb-2">
          {items.map((item) => renderCard(item, "static", false))}
        </div>
      </div>
    );
  }

  return (
    <div role="region" aria-label={t("home.newsTeaser.carouselRegionLabel")} aria-describedby={descId}>
      <p id={descId} className="sr-only">
        {t("home.newsTeaser.carouselInstructions")}
      </p>
      <div
        className="overflow-hidden pb-2"
        onMouseEnter={() => setMarqueePaused(true)}
        onMouseLeave={() => {
          setMarqueePaused(false);
          setHoveredId(null);
        }}
      >
        <div className="wuyin-news-marquee-track" style={marqueeStyle}>
          <div className="flex w-max gap-6">
            {items.map((item) => renderCard(item, "a", false))}
            {items.map((item) => renderCard(item, "b", true))}
          </div>
        </div>
      </div>
    </div>
  );
}
