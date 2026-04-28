import { catalogs } from "@/i18n/catalog";
import { LOCALE_STORAGE_KEY, type Locale, type TranslateFn } from "@/i18n/types";
import { lookupString } from "@/i18n/translate";
import * as React from "react";
import { useEffect } from "react";

function readStoredLocale(): Locale | null {
  try {
    const s = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (s === "zh" || s === "en") return s;
  } catch {
    /* ignore */
  }
  return null;
}

function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return "zh";
  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslateFn;
};

const LocaleContext = React.createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(() => readStoredLocale() ?? detectBrowserLocale());
  const [dynamicCatalog, setDynamicCatalog] = React.useState<any>(null);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const res = await fetch(`http://localhost:3001/api/translations/${locale}`);
        if (res.ok) {
          const data = await res.json();
          setDynamicCatalog(data);
        }
      } catch (err) {
        console.error('[i18n] Failed to fetch dynamic translations:', err);
      }
    };
    fetchTranslations();
  }, [locale]);

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = React.useMemo(() => {
    const tree = dynamicCatalog || catalogs[locale];
    const t: TranslateFn = (path: string) => {
      const s = lookupString(tree, path);
      if (s === undefined && import.meta.env.DEV) {
        console.warn(`[i18n] missing key: ${path} (locale=${locale})`);
      }
      return s ?? path;
    };
    return { locale, setLocale, t };
  }, [locale, setLocale, dynamicCatalog]);

  React.useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    const { t } = value;
    // meta.title might not be available immediately if dynamicCatalog is null
    const title = t("meta.title");
    if (title !== "meta.title") {
      document.title = title;
    }
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      const desc = t("meta.description");
      if (desc !== "meta.description") {
        meta.setAttribute("content", desc);
      }
    }
  }, [value, locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = React.useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
