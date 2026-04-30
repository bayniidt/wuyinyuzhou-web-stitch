// admin/src/pages/ContentManagement.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface ContentItem {
  id: number;
  key: string;
  value_zh: string;
  value_en: string;
  type: string;
  module: string;
}

const moduleNames: Record<string, string> = {
  header: 'Header 管理',
  nav: '导航管理',
  ecosystem: '首页管理',
  narrative: '叙事管理',
  timeline: '视界管理',
  pavilion: '武印阁管理',
  partnership: '合作管理',
  news: '新闻文案',
  footer: 'Footer 管理',
  meta: '元数据管理',
  common: '公共文案',
};

export default function ContentManagement() {
  const { module = 'ecosystem' } = useParams<{ module: string }>();
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<string>('all');
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchContent();
  }, [module]);

  const fetchContent = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/content?module=${module}`);
      const data = await res.json();
      // Filter by module on client side if API doesn't support query param yet
      // (My API implementation currently returns all, so I'll filter here)
      const moduleContent = data.filter((c: ContentItem) => c.module === module);
      setContent(moduleContent);
      
      // Reset active tab when module changes
      setActiveTab('all');
    } catch (err) {
      console.error('Failed to fetch content:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (item: ContentItem) => {
    setSaving(true);
    try {
      const res = await fetch(`/api/content/${item.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      });
      if (res.ok) {
        setContent(content.map(c => c.id === item.id ? item : c));
        setEditingItem(null);
      }
    } catch (err) {
      console.error('Failed to update content:', err);
    } finally {
      setSaving(false);
    }
  };

  // Extract sub-modules from keys
  // Key format: module.submodule.field or module.field
  const subModules = Array.from(new Set(content.map(item => {
    const parts = item.key.split('.');
    if (parts.length > 2) {
      // Skip generic containers like 'groups' or 'items' to get more meaningful tabs
      if ((parts[1] === 'groups' || parts[1] === 'items' || parts[1] === 'domains') && parts.length > 3) {
        return parts[2];
      }
      return parts[1];
    }
    return 'general';
  }))).sort();

  const filteredContent = content.filter(item => {
    const parts = item.key.split('.');
    let itemSubModule = parts.length > 2 ? parts[1] : 'general';
    if ((parts[1] === 'groups' || parts[1] === 'items' || parts[1] === 'domains') && parts.length > 3) {
      itemSubModule = parts[2];
    }
    
    const matchesTab = activeTab === 'all' || itemSubModule === activeTab;
    const matchesSearch = item.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.value_zh.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.value_en.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">{moduleNames[module] || module}</h1>
          <p className="text-zinc-500">管理 {module} 模块的所有文案和配置内容</p>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="搜索当前模块..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-64 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
          />
        </div>
      </div>

      {/* Tabs */}
      {subModules.length > 1 && (
        <div className="flex items-center gap-2 p-1 bg-zinc-900 rounded-xl border border-zinc-800 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            全部
          </button>
          {subModules.map(sub => (
            <button
              key={sub}
              onClick={() => setActiveTab(sub)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === sub
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {sub.charAt(0).toUpperCase() + sub.slice(1)}
            </button>
          ))}
        </div>
      )}

      {/* Content List */}
      <div className="grid grid-cols-1 gap-4">
        {loading ? (
          <div className="py-20 text-center">
            <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-zinc-500">加载内容中...</p>
          </div>
        ) : filteredContent.length === 0 ? (
          <div className="py-20 text-center bg-zinc-900 rounded-2xl border border-zinc-800 border-dashed">
            <p className="text-zinc-500">未找到匹配的内容</p>
          </div>
        ) : (
          <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-zinc-800 bg-zinc-900/50">
                    <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">键名 / 类型</th>
                    <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">中文内容 (ZH)</th>
                    <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">英文内容 (EN)</th>
                    <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider text-right">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {filteredContent.map((item) => (
                    <tr key={item.id} className="hover:bg-zinc-800/30 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="text-sm font-mono text-blue-400 truncate max-w-[200px]" title={item.key}>
                          {item.key.replace(`${module}.`, '')}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                            item.type === 'media' ? 'bg-purple-900/30 text-purple-400' : 'bg-zinc-800 text-zinc-500'
                          } uppercase font-bold`}>
                            {item.type}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-white line-clamp-2 max-w-md">{item.value_zh}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-zinc-400 line-clamp-2 max-w-md">{item.value_en}</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => setEditingItem(item)}
                          className="bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-all border border-zinc-700 group-hover:border-blue-500/50"
                        >
                          编辑
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Edit Modal (Same as before but polished) */}
      {editingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-2xl shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="p-8 border-b border-zinc-800 flex items-center justify-between bg-gradient-to-r from-blue-900/10 to-transparent">
              <div>
                <h2 className="text-2xl font-bold text-white">编辑内容</h2>
                <p className="text-sm text-zinc-500 font-mono mt-1">{editingItem.key}</p>
              </div>
              <button
                onClick={() => setEditingItem(null)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-zinc-400">中文内容 (ZH)</label>
                  <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Chinese</span>
                </div>
                <textarea
                  value={editingItem.value_zh}
                  onChange={(e) => setEditingItem({ ...editingItem, value_zh: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all min-h-[120px] shadow-inner"
                  placeholder="请输入中文内容..."
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-zinc-400">英文内容 (EN)</label>
                  <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">English</span>
                </div>
                <textarea
                  value={editingItem.value_en}
                  onChange={(e) => setEditingItem({ ...editingItem, value_en: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all min-h-[120px] shadow-inner"
                  placeholder="Enter English content..."
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">类型</label>
                  <select
                    value={editingItem.type}
                    onChange={(e) => setEditingItem({ ...editingItem, type: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-white"
                  >
                    <option value="text">文本 (Text)</option>
                    <option value="media">媒体 (Media/URL)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">归属模块</label>
                  <div className="w-full bg-zinc-800/50 border border-zinc-800 rounded-xl px-4 py-2.5 text-zinc-500 cursor-not-allowed">
                    {editingItem.module}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 border-t border-zinc-800 flex justify-end gap-4 bg-zinc-900/50">
              <button
                onClick={() => setEditingItem(null)}
                className="px-6 py-2.5 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                取消
              </button>
              <button
                onClick={() => handleUpdate(editingItem)}
                disabled={saving}
                className="relative overflow-hidden group bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-700 text-white px-8 py-2.5 rounded-xl text-sm font-bold transition-all shadow-xl shadow-blue-900/20"
              >
                {saving ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    保存中
                  </span>
                ) : '保存修改'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
