import { buildNavGroups, getNavPrimaryMeta } from "@/config/navigation";
import GradientButton from "@/components/ui/GradientButton";
import { useLocale } from "@/i18n/LocaleProvider";
import { navigateToHref } from "@/lib/navigateToHref";
import logoMark from "@/images/LOGO/武印视界/武印世界-白底LOGO.png";
import { useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Logo({ onClick }: { onClick?: () => void }) {
  const { t } = useLocale();
  return (
    <Link
      to={{ pathname: "/", hash: "hero" }}
      className="flex shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuyin-gold-bright"
      onClick={onClick}
    >
      <img
        src={logoMark}
        alt={t("header.logoAlt")}
        className="h-8 w-auto max-w-[min(100%,13rem)] object-contain object-left sm:h-9 lg:h-[2.625rem]"
        decoding="async"
      />
    </Link>
  );
}

function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();
  return (
    <div
      className={[
        "inline-flex rounded-lg border border-white/15 bg-black/20 p-0.5",
        className,
      ].join(" ")}
      role="group"
      aria-label={t("header.ariaLangGroup")}
    >
      <button
        type="button"
        aria-pressed={locale === "zh"}
        className={[
          "rounded-md px-2.5 py-1.5 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuyin-gold-bright",
          locale === "zh" ? "bg-white/15 text-white" : "text-neutral-400 hover:text-white",
        ].join(" ")}
        onClick={() => setLocale("zh")}
      >
        {t("header.langShortZh")}
      </button>
      <button
        type="button"
        aria-pressed={locale === "en"}
        className={[
          "rounded-md px-2.5 py-1.5 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuyin-gold-bright",
          locale === "en" ? "bg-white/15 text-white" : "text-neutral-400 hover:text-white",
        ].join(" ")}
        onClick={() => setLocale("en")}
      >
        {t("header.langShortEn")}
      </button>
    </div>
  );
}

function IconUser() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M20 21a8 8 0 1 0-16 0" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export default function SiteHeader() {
  const { t } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [drawerMounted, setDrawerMounted] = useState(false);
  const [drawerEntered, setDrawerEntered] = useState(false);
  const [openGroupId, setOpenGroupId] = useState<string | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const mobilePanelId = useId();
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const navGroups = useMemo(() => buildNavGroups(t), [t]);

  const closeAll = useCallback(() => {
    setMobileOpen(false);
    setOpenGroupId(null);
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const onNavigate = useCallback(
    (href: string) => {
      closeAll();
      navigateToHref(href, navigate);
    },
    [navigate, closeAll],
  );

  const handleMouseEnter = (id: string) => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenGroupId(id);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = window.setTimeout(() => {
      setOpenGroupId(null);
    }, 160); // Hover bridge: allow mouse to cross gap
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeAll]);

  useLayoutEffect(() => {
    if (mobileOpen) {
      setDrawerMounted(true);
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => setDrawerEntered(true));
      });
      return () => cancelAnimationFrame(id);
    }
    setDrawerEntered(false);
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen && !drawerEntered && drawerMounted) {
      const timer = window.setTimeout(() => setDrawerMounted(false), 300);
      return () => window.clearTimeout(timer);
    }
  }, [mobileOpen, drawerEntered, drawerMounted]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || drawerMounted ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, drawerMounted]);

  useEffect(() => {
    if (mobileOpen && drawerEntered) closeBtnRef.current?.focus();
  }, [mobileOpen, drawerEntered]);

  const connectWallet = () => {
    window.alert(t("header.walletAlert"));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-wuyin-bg/85 backdrop-blur-md">
      <div className="container-wuyin flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
        <Logo onClick={closeAll} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label={t("header.ariaMainNav")}>
          {navGroups.map((group) => {
            const meta = getNavPrimaryMeta(group.id);
            const primaryTo = meta?.to;
            const isOpen = openGroupId === group.id;
            return (
              <div
                key={group.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(group.id)}
                onMouseLeave={handleMouseLeave}
              >
                {primaryTo ? (
                  <NavLink
                    to={primaryTo}
                    end={meta?.end ?? false}
                    className={({ isActive }) =>
                      [
                        "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuyin-gold-bright",
                        isActive
                          ? "text-white [box-shadow:inset_0_-2px_0_0_var(--color-wuyin-accent)]"
                          : "text-neutral-200 hover:text-white",
                      ].join(" ")
                    }
                    aria-haspopup="true"
                    onClick={closeAll}
                  >
                    {group.label}
                    <span
                      className={[
                        "text-[10px] text-wuyin-muted transition",
                        isOpen ? "translate-y-px rotate-180" : "",
                      ].join(" ")}
                    >
                      ▾
                    </span>
                  </NavLink>
                ) : (
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-neutral-200 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuyin-gold-bright"
                    aria-haspopup="true"
                  >
                    {group.label}
                    <span
                      className={[
                        "text-[10px] text-wuyin-muted transition",
                        isOpen ? "translate-y-px rotate-180" : "",
                      ].join(" ")}
                    >
                      ▾
                    </span>
                  </button>
                )}
                <div
                  role="menu"
                  className={[
                    "absolute left-1/2 top-full z-50 mt-1 w-72 -translate-x-1/2 rounded-xl border border-white/10 bg-wuyin-elevated/95 p-2 shadow-wuyin-glow backdrop-blur-md transition-all duration-200 ease-[var(--ease-wuyin)]",
                    isOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-1 opacity-0",
                  ].join(" ")}
                >
                  <ul className="py-1">
                    {group.children.map((child) => (
                      <li key={child.href + child.label}>
                        <a
                          href={child.href}
                          role="menuitem"
                          className="block rounded-lg px-3 py-2.5 text-left text-sm text-neutral-200 transition hover:bg-white/5 hover:text-white focus-visible:bg-white/5 focus-visible:outline-none"
                          onClick={(e) => {
                            e.preventDefault();
                            onNavigate(child.href);
                          }}
                        >
                          <span className="font-semibold">{child.label}</span>
                          {child.description ? (
                            <span className="mt-0.5 block text-xs text-wuyin-muted">{child.description}</span>
                          ) : null}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <button
            type="button"
            className="hidden rounded-lg p-2 text-neutral-300 transition hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuyin-gold-bright sm:inline-flex"
            aria-label={t("header.ariaUser")}
          >
            <IconUser />
          </button>
          <GradientButton
            type="button"
            className="px-3 py-2 text-xs sm:px-5 sm:py-2 sm:text-sm"
            aria-label={t("header.connectWalletAria")}
            onClick={connectWallet}
          >
            <span className="sm:hidden">{t("header.walletShort")}</span>
            <span className="hidden sm:inline">{t("header.wallet")}</span>
          </GradientButton>

          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-neutral-200 transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuyin-gold-bright lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls={mobilePanelId}
            aria-label={mobileOpen ? t("header.menuClose") : t("header.menuOpen")}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {drawerMounted
        ? createPortal(
            <div className="fixed inset-0 z-[100] lg:hidden" role="dialog" aria-modal="true">
              <button
                type="button"
                className={[
                  "absolute inset-0 bg-black/70 transition-opacity duration-300 ease-[var(--ease-wuyin)]",
                  drawerEntered ? "opacity-100" : "opacity-0",
                ].join(" ")}
                aria-label={t("header.menuCloseBackdrop")}
                onClick={() => setMobileOpen(false)}
              />
              <div
                id={mobilePanelId}
                className={[
                  "absolute right-0 top-0 flex h-full w-[min(100%,22rem)] flex-col border-l border-white/10 bg-wuyin-bg shadow-2xl transition-transform duration-300 ease-[var(--ease-wuyin)]",
                  drawerEntered ? "translate-x-0" : "translate-x-full",
                ].join(" ")}
              >
                <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-4">
                  <span className="font-serif text-lg font-semibold text-white">{t("header.menu")}</span>
                  <button
                    ref={closeBtnRef}
                    type="button"
                    className="rounded-lg p-2 text-neutral-300 hover:bg-white/5"
                    aria-label={t("header.menuClose")}
                    onClick={() => setMobileOpen(false)}
                  >
                    <IconClose />
                  </button>
                </div>
                <nav
                  className="min-h-0 flex-1 overflow-y-auto px-3 py-4"
                  aria-label={t("header.ariaMobileNav")}
                >
                  {navGroups.map((group) => {
                    const meta = getNavPrimaryMeta(group.id);
                    const primaryTo = meta?.to;
                    return primaryTo ? (
                      <div key={group.id} className="border-b border-white/5 py-1">
                        <NavLink
                          to={primaryTo}
                          end={meta?.end ?? false}
                          className={({ isActive }) =>
                            [
                              "block rounded-lg px-3 py-3 text-sm font-medium transition",
                              isActive
                                ? "text-white [box-shadow:inset_3px_0_0_0_var(--color-wuyin-accent)]"
                                : "text-white hover:bg-white/5",
                            ].join(" ")
                          }
                          onClick={() => setMobileOpen(false)}
                        >
                          {group.label}
                        </NavLink>
                        <ul className="pb-2 pl-1">
                          {group.children.map((child) => (
                            <li key={child.href + child.label}>
                              <a
                                href={child.href}
                                className="block rounded-lg px-3 py-2 text-sm text-neutral-300 hover:bg-white/5 hover:text-white"
                                onClick={(e) => {
                                  e.preventDefault();
                                  onNavigate(child.href);
                                }}
                              >
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <details key={group.id} className="group border-b border-white/5 py-1">
                        <summary className="cursor-pointer list-none py-3 font-medium text-white marker:hidden [&::-webkit-details-marker]:hidden">
                          <span className="flex items-center justify-between">
                            {group.label}
                            <span className="text-wuyin-muted">▾</span>
                          </span>
                        </summary>
                        <ul className="pb-2 pl-1">
                          {group.children.map((child) => (
                            <li key={child.href + child.label}>
                              <a
                                href={child.href}
                                className="block rounded-lg px-3 py-2 text-sm text-neutral-300 hover:bg-white/5 hover:text-white"
                                onClick={(e) => {
                                  e.preventDefault();
                                  onNavigate(child.href);
                                }}
                              >
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </details>
                    );
                  })}
                </nav>
                <div className="shrink-0 border-t border-white/10 p-4">
                  <LanguageSwitcher className="flex w-full justify-center" />
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </header>
  );
}
