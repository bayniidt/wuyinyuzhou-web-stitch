// admin/src/pages/PartnershipSubmissionManagement.tsx

import React, { useState, useEffect } from 'react';
import apiClient from '@/api/client';

interface PartnershipSubmission {
  id: number;
  company: string;
  contact: string;
  intent: string;
  description: string;
  status: string;
  admin_note: string;
  created_at: string;
  updated_at: string;
}

export default function PartnershipSubmissionManagement() {
  const [submissions, setSubmissions] = useState<PartnershipSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<PartnershipSubmission | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const res = await apiClient.get('/partnership/submissions');
      setSubmissions(res.data);
    } catch (err) {
      console.error('Failed to fetch submissions:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (item: PartnershipSubmission) => {
    setSaving(true);
    try {
      await apiClient.put(`/partnership/submissions/${item.id}`, {
        status: item.status,
        admin_note: item.admin_note
      });
      setSubmissions(submissions.map(s => s.id === item.id ? item : s));
      setEditingItem(null);
    } catch (err) {
      console.error('Failed to update submission:', err);
      alert('更新失败');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('确定要删除这条申请记录吗？')) return;
    try {
      await apiClient.delete(`/partnership/submissions/${id}`);
      setSubmissions(submissions.filter(s => s.id !== id));
    } catch (err) {
      console.error('Failed to delete submission:', err);
      alert('删除失败');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-zinc-800 text-zinc-400';
      case 'contacted': return 'bg-blue-900/30 text-blue-400';
      case 'completed': return 'bg-green-900/30 text-green-400';
      case 'rejected': return 'bg-red-900/30 text-red-400';
      default: return 'bg-zinc-800 text-zinc-400';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">合作申请管理</h1>
          <p className="text-zinc-500">查看并处理来自门户网站的合作申请</p>
        </div>
        <button 
          onClick={fetchSubmissions}
          className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg text-sm transition-all border border-zinc-700"
        >
          刷新数据
        </button>
      </div>

      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
        {loading ? (
          <div className="py-20 text-center">
            <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-zinc-500">加载记录中...</p>
          </div>
        ) : submissions.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-zinc-500">暂无申请记录</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/50">
                  <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase">申请信息</th>
                  <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase">意向</th>
                  <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase">状态</th>
                  <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase">提交时间</th>
                  <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase text-right">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {submissions.map((item) => (
                  <tr key={item.id} className="hover:bg-zinc-800/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="text-sm font-bold text-white">{item.company}</div>
                      <div className="text-xs text-zinc-500 mt-1">{item.contact}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs text-zinc-300">{item.intent}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs text-zinc-500">
                      {new Date(item.created_at).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => setEditingItem(item)}
                          className="bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-all border border-zinc-700"
                        >
                          处理
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="bg-red-900/10 hover:bg-red-900/20 text-red-500 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border border-red-900/20"
                        >
                          删除
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {editingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-2xl shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="p-8 border-b border-zinc-800 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">处理申请</h2>
                <p className="text-sm text-zinc-500 mt-1">{editingItem.company} - {editingItem.contact}</p>
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
                <label className="text-sm font-medium text-zinc-400 block mb-2">申请内容</label>
                <div className="bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 text-zinc-300 text-sm min-h-[100px]">
                  {editingItem.description || '无详细描述'}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">状态</label>
                  <select
                    value={editingItem.status}
                    onChange={(e) => setEditingItem({ ...editingItem, status: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-white"
                  >
                    <option value="pending">待处理 (Pending)</option>
                    <option value="contacted">已联系 (Contacted)</option>
                    <option value="completed">已合作 (Completed)</option>
                    <option value="rejected">已拒绝 (Rejected)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-zinc-400 block mb-2">管理员备注</label>
                <textarea
                  value={editingItem.admin_note}
                  onChange={(e) => setEditingItem({ ...editingItem, admin_note: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all min-h-[100px]"
                  placeholder="仅内部可见..."
                />
              </div>
            </div>
            <div className="p-8 border-t border-zinc-800 flex justify-end gap-4 bg-zinc-900/50">
              <button
                onClick={() => setEditingItem(null)}
                className="px-6 py-2.5 text-sm text-zinc-400 hover:text-white"
              >
                取消
              </button>
              <button
                onClick={() => handleUpdate(editingItem)}
                disabled={saving}
                className="bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-700 text-white px-8 py-2.5 rounded-xl text-sm font-bold transition-all shadow-xl shadow-blue-900/20"
              >
                {saving ? '保存中...' : '提交更新'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
