// admin/src/pages/Dashboard.tsx

import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const stats = [
    { label: '内容条目', value: '309', icon: '📝', color: 'bg-blue-600' },
    { label: '新闻文章', value: '12', icon: '📰', color: 'bg-purple-600' },
    { label: '常见问题', value: '8', icon: '❓', color: 'bg-emerald-600' },
    { label: '未读留言', value: '3', icon: '✉️', color: 'bg-rose-600' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">仪表盘</h1>
        <p className="text-zinc-500">欢迎回来，管理员。这是网站目前的运行概况。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-zinc-700 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                {stat.icon}
              </div>
              <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">实时</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-zinc-500">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">快速操作</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/content/home" className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-all">
              <div className="text-xl mb-2">🏠</div>
              <div className="text-sm font-medium text-white">编辑首页</div>
            </Link>
            <Link to="/news" className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-all">
              <div className="text-xl mb-2">📝</div>
              <div className="text-sm font-medium text-white">发布新闻</div>
            </Link>
          </div>
        </div>
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center text-2xl mb-4">✨</div>
          <h3 className="text-white font-bold mb-2">系统状态良好</h3>
          <p className="text-sm text-zinc-500 max-w-xs">所有服务运行正常。数据库已同步 309 条 i18n 配置项。</p>
        </div>
      </div>
    </div>
  );
}
