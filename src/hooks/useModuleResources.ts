import { useState, useEffect } from 'react';
import { useLocale } from '@/i18n/LocaleProvider';

export interface Resource {
  key: string;
  url: string;
}

export function useModuleResources(moduleIds: string | string[]) {
  const { locale } = useLocale();
  const [resources, setResources] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  const ids = Array.isArray(moduleIds) ? moduleIds : [moduleIds];

  useEffect(() => {
    const fetchResources = async () => {
      setLoading(true);
      try {
        const allMapped: Record<string, string> = {};
        
        await Promise.all(ids.map(async (id) => {
          const res = await fetch(`/api/content?module=${id}`);
          if (res.ok) {
            const data = await res.json();
            data.forEach((item: any) => {
              if (item.type === 'media') {
                let url = locale === 'zh' ? item.value_zh : item.value_en;
                // Keep relative paths as-is so the current host serves uploads through reverse proxy.
                if (url && url.startsWith('/') && !url.startsWith('//')) {
                  // If it starts with /fhzb, it's currently a broken legacy path, discard it to allow fallback
                  if (url.startsWith('/fhzb')) {
                    url = undefined;
                  }
                }
                if (url) {
                  allMapped[item.key] = url;
                }
              }
            });
          }
        }));
        
        setResources(allMapped);
      } catch (err) {
        console.error(`[Resources] Failed to fetch for modules ${ids.join(',')}:`, err);
        setResources({});
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, [JSON.stringify(ids), locale]);

  return { resources, loading };
}
