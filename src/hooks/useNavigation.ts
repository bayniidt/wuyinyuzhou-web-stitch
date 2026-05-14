import { useEffect, useState } from 'react';
import { useLocale } from '@/i18n/LocaleProvider';
import type { NavGroup } from '@/config/navigation';

interface ApiNavigationItem {
  id: number;
  group_id: string;
  group_label_zh: string;
  group_label_en: string;
  name_zh: string;
  name_en: string;
  href: string;
  description_zh?: string;
  description_en?: string;
  display_order: number;
}

export function useNavigation() {
  const { locale } = useLocale();
  const [navGroups, setNavGroups] = useState<NavGroup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNavigation() {
      try {
        const response = await fetch('/api/navigation');
        if (!response.ok) {
          throw new Error('Failed to fetch navigation');
        }
        
        const data: ApiNavigationItem[] = await response.json();
        
        // Group by group_id and build localized groups
        const grouped = new Map<string, NavGroup>();
        
        data.forEach((item) => {
          const isZh = locale === 'zh';
          
          if (!grouped.has(item.group_id)) {
            grouped.set(item.group_id, {
              id: item.group_id,
              label: isZh ? item.group_label_zh : (item.group_label_en || item.group_label_zh),
              children: [],
            });
          }
          
          const group = grouped.get(item.group_id)!;
          group.children.push({
            label: isZh ? item.name_zh : (item.name_en || item.name_zh),
            href: item.href,
            description: isZh 
              ? (item.description_zh || undefined) 
              : (item.description_en || item.description_zh || undefined),
          });
        });
        
        // Sort each group's children by display_order
        const sortedGroups: NavGroup[] = Array.from(grouped.values()).map((group) => {
          const groupItems = data.filter(item => item.group_id === group.id);
          
          const sortedChildren = group.children
            .map(child => {
              const matchingItem = groupItems.find(item => 
                item.name_zh === child.label && item.href === child.href
              );
              return { ...child, _order: matchingItem?.display_order || 0 };
            })
            .sort((a, b) => a._order - b._order)
            .map(({ _order, ...child }) => child);
          
          return { ...group, children: sortedChildren };
        });
        
        // Sort groups alphabetically (or by custom order if needed)
        sortedGroups.sort((a, b) => a.label.localeCompare(b.label));
        
        setNavGroups(sortedGroups);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch navigation:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLoading(false);
      }
    }
    
    fetchNavigation();
  }, [locale]);

  return { navGroups, loading, error };
}
