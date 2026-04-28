// admin/src/pages/MemberManagement.tsx

import React, { useState, useEffect } from 'react';
import apiClient from '@/api/client';

interface Member {
  id: number;
  name: string;
  phone: string;
  is_super_admin: number;
  created_at: string;
}

export default function MemberManagement() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<Partial<Member> | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    setLoading(true);
    try {
      const res = await apiClient.get('/members');
      setMembers(res.data);
    } catch (err) {
      console.error('Failed to fetch members:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!editingItem?.name || !editingItem?.phone) {
      alert('请填写完整信息');
      return;
    }
    setSaving(true);
    try {
      if (editingItem.id) {
        await apiClient.put(`/members/${editingItem.id}`, editingItem);
      } else {
        await apiClient.post('/members', editingItem);
      }
      fetchMembers();
      setEditingItem(null);
    } catch (err: any) {
      console.error('Failed to save member:', err);
      alert(err.response?.data?.error || '保存失败');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('确定要删除该员工账号吗？')) return;
    try {
      await apiClient.delete(`/members/${id}`);
      setMembers(members.filter(m => m.id !== id));
    } catch (err) {
      console.error('Failed to delete member:', err);
      alert('删除失败');
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">员工管理</h1>
          <p className="text-zinc-500">管理后台登录账号及权限（仅超级管理员可见）</p>
        </div>
        <button 
          onClick={() => setEditingItem({ name: '', phone: '', is_super_admin: 0 })}
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-blue-900/20"
        >
          添加新员工
        </button>
      </div>

      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
        {loading ? (
          <div className="py-20 text-center">
            <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-zinc-500">加载中...</p>
          </div>
        ) : members.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-zinc-500">暂无员工记录</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/50">
                  <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase">姓名</th>
                  <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase">手机号</th>
                  <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase">角色</th>
                  <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase">创建时间</th>
                  <th className="px-6 py-4 text-xs font-semibold text-zinc-400 uppercase text-right">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {members.map((item) => (
                  <tr key={item.id} className="hover:bg-zinc-800/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="text-sm font-bold text-white">{item.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-zinc-300 font-mono">{item.phone}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                        item.is_super_admin ? 'bg-purple-900/30 text-purple-400' : 'bg-zinc-800 text-zinc-400'
                      }`}>
                        {item.is_super_admin ? '超级管理员' : '普通员工'}
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
                          编辑
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
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-md shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="p-8 border-b border-zinc-800 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">{editingItem.id ? '编辑员工' : '添加员工'}</h2>
              <button
                onClick={() => setEditingItem(null)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-8 space-y-6">
              <div>
                <label className="text-sm font-medium text-zinc-400 block mb-2">姓名</label>
                <input
                  type="text"
                  value={editingItem.name}
                  onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  placeholder="请输入姓名"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-zinc-400 block mb-2">手机号 (登录凭据)</label>
                <input
                  type="text"
                  value={editingItem.phone}
                  onChange={(e) => setEditingItem({ ...editingItem, phone: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  placeholder="请输入手机号"
                />
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="is_super_admin"
                  checked={editingItem.is_super_admin === 1}
                  onChange={(e) => setEditingItem({ ...editingItem, is_super_admin: e.target.checked ? 1 : 0 })}
                  className="w-4 h-4 rounded border-zinc-800 bg-zinc-950 text-blue-600 focus:ring-blue-600"
                />
                <label htmlFor="is_super_admin" className="text-sm font-medium text-zinc-400 cursor-pointer">
                  设为超级管理员
                </label>
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
                onClick={handleSave}
                disabled={saving}
                className="bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-700 text-white px-8 py-2.5 rounded-xl text-sm font-bold transition-all shadow-xl shadow-blue-900/20"
              >
                {saving ? '保存中...' : '确认保存'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
