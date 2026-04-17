import { footerLegalLinks, navGroups } from "@/config/navigation";
import { navigateToHref } from "@/lib/navigateToHref";
import { Link, useNavigate } from "react-router-dom";

export default function SiteFooter() {
  const navigate = useNavigate();

  return (
    <footer id="site-footer" className="border-t border-white/10 bg-wuyin-surface py-14">
      <div className="container-wuyin grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link
            to={{ pathname: "/", hash: "hero" }}
            className="inline-flex items-center gap-2 font-serif text-lg font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8080]"
          >
            <span className="bg-linear-to-r from-[#ff4d4d] to-[#ff8080] bg-clip-text text-transparent">
              武印视界
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-wuyin-muted">
            The digital born real.
          </p>
        </div>

        {navGroups.map((group) => (
          <div key={group.id}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wuyin-muted">
              {group.label}
            </p>
            <ul className="mt-4 space-y-2">
              {group.children.map((child) => (
                <li key={child.href + child.label}>
                  <a
                    href={child.href}
                    className="text-sm text-neutral-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8080]"
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wuyin-muted">
            Legal &amp; Support
          </p>
          <ul className="mt-4 space-y-2">
            {footerLegalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-neutral-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8080]"
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

      <div className="container-wuyin mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-wuyin-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} WUYINWORLD. THE DIGITAL BORN REAL.</p>
        <p className="text-neutral-500">静态演示站 · 内容可随时替换</p>
      </div>
    </footer>
  );
}
