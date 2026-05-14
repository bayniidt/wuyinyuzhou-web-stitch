// admin/src/components/Layout.tsx

import React, { ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface LayoutProps {
  children: ReactNode;
}

interface NavLink {
  path?: string;
  label: string;
  icon?: string;
  type?: 'header' | 'link';
  superAdminOnly?: boolean;
}

const navLinks: NavLink[] = [
  // { path: '/', label: '仪表盘', icon: '📊' },
  { type: 'header', label: '内容管理' },
  { path: '/content/header', label: 'Header 管理', icon: '🔝' },
  { path: '/content/nav', label: '导航文案', icon: '🧭' },
  { path: '/content/ecosystem', label: '首页管理', icon: '🏠' },
  { path: '/content/narrative', label: '叙事管理', icon: '📖' },
  { path: '/content/timeline', label: '视界管理', icon: '⏳' },
  { path: '/content/pavilion', label: '武印阁管理', icon: '🏛️' },
  { path: '/content/partnership', label: '合作管理', icon: '🤝' },
  { path: '/content/news', label: '新闻文案', icon: '📰' },
  { path: '/content/footer', label: 'Footer 管理', icon: '🔚' },
  { path: '/content/meta', label: '元数据管理', icon: '🔍' },
  { path: '/content/common', label: '公共文案', icon: '📦' },
  { type: 'header', label: '资源管理' },
  { path: '/resources/ecosystem', label: '生态体系资源管理', icon: '🖼️' },
  { path: '/resources/narrative', label: '武印宇宙资源管理', icon: '🌌' },
  { path: '/resources/timeline', label: '武印视界资源管理', icon: '📽️' },
  { path: '/resources/pavilion', label: '武印阁资源管理', icon: '💎' },
  { path: '/resources/partnership', label: '合作入口资源管理', icon: '🤝' },
  { type: 'header', label: '业务数据' },
  // { path: '/news', label: '新闻文章', icon: '📝' },
  // { path: '/questions', label: '常见问题', icon: '❓' },
  // { path: '/navigation', label: '菜单配置', icon: '🔗' },
  // { path: '/contact-submissions', label: '联系表单', icon: '✉️' },
  { path: '/partnership-submissions', label: '合作申请', icon: '🤝' },
  { type: 'header', label: '系统管理', superAdminOnly: true },
  { path: '/members', label: '员工账号', icon: '👥', superAdminOnly: true },
];

export default function Layout({ children }: LayoutProps) {
  const { isAuthenticated, logout, member } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (confirm('确定要退出登录吗？')) {
      logout();
      navigate('/login');
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  // Filter links based on role
  const filteredLinks = navLinks.filter(link => {
    if (link.superAdminOnly && !member?.is_super_admin) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col">
        <div className="p-6 border-b border-zinc-800">
          <h1 className="text-lg font-bold text-white">武印视界</h1>
          <p className="text-xs text-zinc-500 mt-1">管理后台系统</p>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {filteredLinks.map((link, idx) => {
            if (link.type === 'header') {
              return (
                <div key={`header-${idx}`} className="px-4 pt-4 pb-2 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                  {link.label}
                </div>
              );
            }
            return (
              <Link
                key={link.path}
                to={link.path!}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${location.pathname === link.path
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                  : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                  }`}
              >
                <span className="text-base">{link.icon}</span>
                <span className="font-medium text-sm">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-zinc-800">
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-zinc-800">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-semibold">
              {member?.name?.charAt(0)?.toUpperCase() || 'A'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{member?.name}</p>
              <p className="text-xs text-zinc-500 truncate">{member?.phone}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-all"
          >
            退出登录
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
