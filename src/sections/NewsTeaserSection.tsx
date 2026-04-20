import HomeNewsCarousel from "@/components/news/HomeNewsCarousel";
import SectionGoldenBlocks from "@/components/decor/SectionGoldenBlocks";
import { getLatestNews } from "@/content/newsItems";
import { useLocale } from "@/i18n/LocaleProvider";
import { Link } from "react-router-dom";

export default function NewsTeaserSection() {
  const { t } = useLocale();
  const items = getLatestNews(8);

  return (
    <section id="home-news" className="relative overflow-hidden border-b border-white/5 py-20 sm:py-24 lg:py-28">
      <SectionGoldenBlocks variant={1} intensity="subtle" />
      <div className="relative z-10 container-wuyin">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-wuyin-muted sm:text-[0.8rem]">
              {t("home.newsTeaser.kicker")}
            </p>
            <h2 className="mt-5 font-serif text-3xl font-bold tracking-tight text-white sm:mt-6 sm:text-4xl lg:text-5xl">
              {t("home.newsTeaser.title")}
            </h2>
          </div>
          <Link
            to="/news"
            className="inline-flex h-12 min-w-[7.5rem] shrink-0 items-center justify-center rounded-lg border border-[rgb(var(--wuyin-gold-rgb)/0.55)] px-7 text-base font-semibold text-wuyin-gold-bright transition hover:border-wuyin-accent hover:bg-white/[0.04]"
          >
            {t("home.newsTeaser.viewAll")}
          </Link>
        </div>

        <div className="mt-12 sm:mt-14">
          <HomeNewsCarousel items={items} />
        </div>
      </div>
    </section>
  );
}
