import type { NavGroup } from '@/config/navigation';

export interface ApiNavigationItem {
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
  parent_id: number;
}

export async function fetchNavigation(): Promise<NavGroup[]> {
  try {
    const response = await fetch('/api/navigation');
    if (!response.ok) {
      throw new Error('Failed to fetch navigation');
    }
    
    const data: ApiNavigationItem[] = await response.json();
    
    // Group by group_id
    const grouped = new Map<string, NavGroup>();
    
    data.forEach((item) => {
      // Get locale-specific labels
      // For now, we'll return empty arrays and build them dynamically
      if (!grouped.has(item.group_id)) {
        grouped.set(item.group_id, {
          id: item.group_id,
          label: '', // Will be set later based on locale
          children: [],
        });
      }
      
      const group = grouped.get(item.group_id)!;
      group.children.push({
        label: '', // Will be set later based on locale
        href: item.href,
        description: item.description_zh || item.description_en,
      });
    });
    
    return Array.from(grouped.values());
  } catch (error) {
    console.error('Failed to fetch navigation:', error);
    return [];
  }
}
