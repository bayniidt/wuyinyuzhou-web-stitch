// admin/src/pages/ResourceManagement.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  getResourceView,
  resolvePreviewType,
  resolvePreviewUrl,
  resolveSourceLabel,
} from '@/lib/resourceCatalog';

interface ContentItem {
  id: number;
  key: string;
  value_zh: string;
  value_en: string;
  type: string;
  module: string;
}

export default function ResourceManagement() {
  const { module = 'ecosystem' } = useParams<{ module: string }>();
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<ContentItem | null>(null);
  const [uploading, setUploading] = useState<'zh' | 'en' | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchContent();
  }, [module]);

  const fetchContent = async () => {
    setLoading(true);
    try {
      const view = getResourceView(module);
      const responses = await Promise.all(
        view.modules.map(async (moduleId) => {
          const res = await fetch(`/api/content?module=${moduleId}`);
          return res.json();
        }),
      );

      const mediaByKey = new Map<string, ContentItem>();
      responses
        .flat()
        .filter((item: ContentItem) => item.type === 'media')
        .forEach((item: ContentItem) => {
          if (!mediaByKey.has(item.key)) {
            mediaByKey.set(item.key, item);
          }
        });

      const ordered = view.resources
        .map((resource) => mediaByKey.get(resource.key))
        .filter((item): item is ContentItem => Boolean(item));

      setContent(ordered);
    } catch (err) {
      console.error('Failed to fetch resources:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, lang: 'zh' | 'en') => {
    const file = e.target.files?.[0];
    if (!file || !editingItem) return;

    setUploading(lang);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.url) {
        setEditingItem({
          ...editingItem,
          [lang === 'zh' ? 'value_zh' : 'value_en']: data.url,
        });
      }
    } catch (err) {
      console.error('Upload failed:', err);
      alert('上传失败，请重试');
    } finally {
      setUploading(null);
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
      console.error('Failed to update resource:', err);
    } finally {
      setSaving(false);
    }
  };

  const view = getResourceView(module);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">{view.title}</h1>
        <p className="text-zinc-500">{view.description}</p>
      </div>

      {loading ? (
        <div className="py-20 text-center">
          <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : content.length === 0 ? (
        <div className="py-20 text-center bg-zinc-900 rounded-2xl border border-zinc-800 border-dashed">
          <p className="text-zinc-500">该模块下暂无媒体资源</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.map((item) => {
            const previewUrl = resolvePreviewUrl(item.key, item.value_zh);
            const previewType = resolvePreviewType(item.key, item.value_zh);
            const sourceLabel = resolveSourceLabel(item.key, item.value_zh);
            const resourceLabel = view.resources.find((resource) => resource.key === item.key)?.label ?? item.key;

            return (
            <div key={item.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden group hover:border-zinc-700 transition-all">
              <div className="aspect-video bg-zinc-950 relative overflow-hidden flex items-center justify-center">
                {previewType === 'video' ? (
                  <video
                    src={previewUrl}
                    className="w-full h-full object-cover"
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <img src={previewUrl} alt="" className="w-full h-full object-cover" />
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => setEditingItem(item)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-xl"
                  >
                    更换资源
                  </button>
                </div>
                <div className="absolute top-2 left-2 px-2 py-1 bg-black/50 backdrop-blur-md rounded text-[10px] text-white font-bold tracking-wider">
                  {resourceLabel}
                </div>
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/55 backdrop-blur-md rounded text-[10px] text-zinc-200 font-medium">
                  {sourceLabel}
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs font-mono text-zinc-500 truncate mb-1">{item.key}</div>
                <div className="text-sm text-zinc-300 truncate">{item.value_zh}</div>
              </div>
            </div>
          )})}
        </div>
      )}

      {/* Resource Edit Modal */}
      {editingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          {(() => {
            const previewZhUrl = resolvePreviewUrl(editingItem.key, editingItem.value_zh);
            const previewZhType = resolvePreviewType(editingItem.key, editingItem.value_zh);
            const previewEnUrl = resolvePreviewUrl(editingItem.key, editingItem.value_en);
            const previewEnType = resolvePreviewType(editingItem.key, editingItem.value_en);
            const resourceLabel = view.resources.find((resource) => resource.key === editingItem.key)?.label ?? editingItem.key;

            return (
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-4xl shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="p-8 border-b border-zinc-800 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">管理媒体资源</h2>
                <p className="text-sm text-zinc-300 mt-1">{resourceLabel}</p>
                <p className="text-sm text-zinc-500 font-mono mt-1">{editingItem.key}</p>
              </div>
              <button onClick={() => setEditingItem(null)} className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800 text-zinc-400 hover:text-white transition-colors">✕</button>
            </div>
            
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* ZH Version */}
              <div className="space-y-4">
                <label className="text-sm font-bold text-zinc-400 uppercase tracking-widest">中文版资源 (ZH)</label>
                <div className="aspect-video bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 flex items-center justify-center relative">
                  {previewZhType === 'video' ? (
                    <video src={previewZhUrl} controls className="w-full h-full object-contain" />
                  ) : (
                    <img src={previewZhUrl} alt="" className="w-full h-full object-contain" />
                  )}
                  {uploading === 'zh' && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={editingItem.value_zh}
                    onChange={(e) => setEditingItem({ ...editingItem, value_zh: e.target.value })}
                    className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2 text-xs text-white"
                    placeholder="或直接输入 URL..."
                  />
                  <label className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition-colors">
                    上传
                    <input type="file" className="hidden" accept="image/*,video/*" onChange={(e) => handleFileUpload(e, 'zh')} />
                  </label>
                </div>
              </div>

              {/* EN Version */}
              <div className="space-y-4">
                <label className="text-sm font-bold text-zinc-400 uppercase tracking-widest">英文版资源 (EN)</label>
                <div className="aspect-video bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 flex items-center justify-center relative">
                  {previewEnType === 'video' ? (
                    <video src={previewEnUrl} controls className="w-full h-full object-contain" />
                  ) : (
                    <img src={previewEnUrl} alt="" className="w-full h-full object-contain" />
                  )}
                  {uploading === 'en' && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={editingItem.value_en}
                    onChange={(e) => setEditingItem({ ...editingItem, value_en: e.target.value })}
                    className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2 text-xs text-white"
                    placeholder="或直接输入 URL..."
                  />
                  <label className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition-colors">
                    上传
                    <input type="file" className="hidden" accept="image/*,video/*" onChange={(e) => handleFileUpload(e, 'en')} />
                  </label>
                </div>
              </div>
            </div>

            <div className="p-8 border-t border-zinc-800 flex justify-end gap-4 bg-zinc-900/50 rounded-b-3xl">
              <button onClick={() => setEditingItem(null)} className="px-6 py-2.5 text-sm text-zinc-400 hover:text-white transition-colors">取消</button>
              <button
                onClick={() => handleUpdate(editingItem)}
                disabled={saving || !!uploading}
                className="bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-700 text-white px-8 py-2.5 rounded-xl text-sm font-bold transition-all shadow-xl shadow-blue-900/20"
              >
                {saving ? '保存中...' : '确认保存'}
              </button>
            </div>
          </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
