import { buildFooterLegalLinks, buildNavGroups } from "@/config/navigation";
import { useLocale } from "@/i18n/LocaleProvider";
import { navigateToHref } from "@/lib/navigateToHref";
import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SiteFooter() {
  const { t } = useLocale();
  const navigate = useNavigate();
  const navGroups = useMemo(() => buildNavGroups(t), [t]);
  const footerLegalLinks = useMemo(() => buildFooterLegalLinks(t), [t]);

  return (
    <footer id="site-footer" className="border-t border-white/10 bg-wuyin-surface py-14">
      <div className="container-wuyin grid gap-10 sm:grid-cols-2 lg:grid-cols-7">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link
            to={{ pathname: "/", hash: "hero" }}
            className="inline-flex items-center gap-2 font-serif text-lg font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuyin-gold-bright"
          >
            <span className="bg-linear-to-r from-wuyin-accent via-wuyin-seal to-wuyin-accent-soft bg-clip-text text-transparent">
              {t("footer.brand")}
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-wuyin-muted">{t("footer.tagline")}</p>
        </div>

        {navGroups.map((group) => (
          <div key={group.id}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wuyin-muted">{group.label}</p>
            <ul className="mt-4 space-y-2">
              {group.children.map((child) => (
                <li key={child.href + child.label}>
                  <a
                    href={child.href}
                    className="text-sm text-neutral-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuyin-gold-bright"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToHref(child.href, navigate);
                    }}
                  >
                    {child.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div id="support">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wuyin-muted">{t("footer.legalSupport")}</p>
          <ul className="mt-4 space-y-2">
            {footerLegalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-neutral-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuyin-gold-bright"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToHref(link.href, navigate);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-wuyin mt-12 flex flex-nowrap items-center justify-between gap-4 overflow-x-auto border-t border-white/10 pt-8 text-xs text-wuyin-muted">
        <p className="whitespace-nowrap">
          © {new Date().getFullYear()} {t("footer.copyrightLine")}
        </p>
        <p className="whitespace-nowrap text-neutral-500">{t("footer.demoNote")}</p>
      </div>
    </footer>
  );
}
