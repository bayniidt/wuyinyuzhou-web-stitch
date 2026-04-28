// admin/src/types/index.ts

export interface SiteContent {
  id: number;
  key: string;
  value_zh: string;
  value_en: string;
  type: 'text' | 'media';
  module: string;
}

export interface NewsItem {
  id: number;
  date: string;
  title_zh: string;
  title_en: string;
  desc_zh: string;
  desc_en: string;
  image_url: string;
  created_at: string;
}

export interface NavigationItem {
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
  created_at?: string;
  updated_at?: string;
}

export interface ContactSubmission {
  id: number;
  role: string;
  role_label_zh: string;
  role_label_en: string;
  submitter_name: string;
  phone: string;
  email?: string;
  company_or_org?: string;
  region?: string;
  summary: string;
  details: any[];
  status: 'pending' | 'contacted' | 'closed';
  admin_note?: string;
  created_at: string;
  updated_at: string;
}

export interface Member {
  id: number;
  name: string;
  phone: string;
  is_super_admin: number;
  created_at: string;
}

export interface LoginRequest {
  phone: string;
}

export interface AuthState {
  member: {
    id: number;
    name: string;
    phone: string;
    is_super_admin: number;
  } | null;
  isAuthenticated: boolean;
}

export interface Question {
  id: number;
  text_zh: string;
  text_en: string;
  display_order: number;
}

export interface ContactInfo {
  id: number;
  type: string;
  value: string;
  label_zh: string;
  label_en: string;
}
