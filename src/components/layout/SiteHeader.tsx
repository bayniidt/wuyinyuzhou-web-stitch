import { navGroups } from "@/config/navigation";
import GradientButton from "@/components/ui/GradientButton";
import { navigateToHref } from "@/lib/navigateToHref";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function primaryRouteForNavGroup(id: string): "/" | "/narrative" | "/timeline" | "/nfts" | null {
  if (id === "ecosystem") return "/";
  if (id === "narrative") return "/narrative";
  if (id === "timeline") return "/timeline";
  if (id === "nfts") return "/nfts";
  return null;
}

function Logo() {
  const reduced = usePrefersReducedMotion();
  return (
    <Link
      to={{ pathname: "/", hash: "hero" }}
      className="flex items-center gap-2 font-serif text-lg font-bold tracking-tight text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuyin-accent-soft sm:text-xl"
    >
      <span
        className={[
          "bg-linear-to-r from-wuyin-accent via-wuyin-accent-soft to-wuyin-accent bg-clip-text text-transparent",
          reduced ? "" : "wuyin-animate-logo-shimmer",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        武印
      </span>
      <span className="hidden text-neutral-200 sm:inline">视界</span>
    </Link>
  );
}

function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
    </svg>
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [drawerMounted, setDrawerMounted] = useState(false);
  const [drawerEntered, setDrawerEntered] = useState(false);
  const mobilePanelId = useId();
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const onNavigate = useCallback(
    (href: string) => {
      setMobileOpen(false);
      navigateToHref(href, navigate);
    },
    [navigate],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
      const t = window.setTimeout(() => setDrawerMounted(false), 300);
      return () => clearTimeout(t);
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
    window.alert("钱包连接为占位演示，正式版本将接入链上连接器。");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-wuyin-bg/85 backdrop-blur-md">
      <div className="container-wuyin flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
        <Logo />

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="主导航"
        >
          {navGroups.map((group) => {
            const primaryTo = primaryRouteForNavGroup(group.id);
            return (
            <div key={group.id} className="group relative">
              {primaryTo ? (
                <NavLink
                  to={primaryTo}
                  end={primaryTo === "/"}
                  className={({ isActive }) =>
                    [
                      "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuyin-accent-soft",
                      isActive
                        ? "text-white [box-shadow:inset_0_-2px_0_0_var(--color-wuyin-accent)]"
                        : "text-neutral-200 hover:text-white",
                    ].join(" ")
                  }
                  aria-haspopup="true"
                >
                  {group.label}
                  <span className="text-[10px] text-wuyin-muted transition group-hover:translate-y-px">
                    ▾
                  </span>
                </NavLink>
              ) : (
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-neutral-200 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuyin-accent-soft"
                  aria-haspopup="true"
                >
                  {group.label}
                  <span className="text-[10px] text-wuyin-muted transition group-hover:translate-y-px">
                    ▾
                  </span>
                </button>
              )}
              <div
                role="menu"
                className="invisible absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 translate-y-1 rounded-xl border border-white/10 bg-wuyin-elevated/95 p-2 opacity-0 shadow-wuyin-glow backdrop-blur-md transition duration-200 ease-[var(--ease-wuyin)] group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
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
                          <span className="mt-0.5 block text-xs text-wuyin-muted">
                            {child.description}
                          </span>
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
          <button
            type="button"
            className="hidden rounded-lg p-2 text-neutral-300 transition hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuyin-accent-soft sm:inline-flex"
            aria-label="语言（占位）"
          >
            <IconGlobe />
          </button>
          <button
            type="button"
            className="hidden rounded-lg p-2 text-neutral-300 transition hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuyin-accent-soft sm:inline-flex"
            aria-label="用户（占位）"
          >
            <IconUser />
          </button>
          <GradientButton
            type="button"
            className="hidden px-4 py-2 text-xs sm:inline-flex sm:px-5 sm:text-sm"
            aria-label="连接钱包（占位）"
            onClick={connectWallet}
          >
            Connect Wallet
          </GradientButton>

          <GradientButton
            type="button"
            className="inline-flex px-3 py-2 text-xs sm:hidden"
            aria-label="连接钱包（占位）"
            onClick={connectWallet}
          >
            Wallet
          </GradientButton>

          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-neutral-200 transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wuyin-accent-soft lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls={mobilePanelId}
            aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {drawerMounted ? (
        <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className={[
              "absolute inset-0 bg-black/70 transition-opacity duration-300 ease-[var(--ease-wuyin)]",
              drawerEntered ? "opacity-100" : "opacity-0",
            ].join(" ")}
            aria-label="关闭菜单背景"
            onClick={() => setMobileOpen(false)}
          />
          <div
            id={mobilePanelId}
            className={[
              "absolute right-0 top-0 flex h-full w-[min(100%,22rem)] flex-col border-l border-white/10 bg-wuyin-bg shadow-2xl transition-transform duration-300 ease-[var(--ease-wuyin)]",
              drawerEntered ? "translate-x-0" : "translate-x-full",
            ].join(" ")}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
              <span className="font-serif text-lg font-semibold text-white">菜单</span>
              <button
                ref={closeBtnRef}
                type="button"
                className="rounded-lg p-2 text-neutral-300 hover:bg-white/5"
                aria-label="关闭"
                onClick={() => setMobileOpen(false)}
              >
                <IconClose />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="移动端主导航">
              {navGroups.map((group) => {
                const primaryTo = primaryRouteForNavGroup(group.id);
                return primaryTo ? (
                  <div key={group.id} className="border-b border-white/5 py-1">
                    <NavLink
                      to={primaryTo}
                      end={primaryTo === "/"}
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
            <div className="border-t border-white/10 p-4">
              <GradientButton
                type="button"
                className="w-full"
                aria-label="连接钱包（占位）"
                onClick={() => {
                  setMobileOpen(false);
                  connectWallet();
                }}
              >
                Connect Wallet
              </GradientButton>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
