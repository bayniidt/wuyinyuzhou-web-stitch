// admin/src/components/AuthForm.tsx

import { useAuth } from '@/contexts/AuthContext';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthForm() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(phone);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || '登录失败，请检查手机号是否正确');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-zinc-900 to-black flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg shadow-xl p-8 border border-zinc-700">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">武印视界</h1>
            <h2 className="text-xl text-zinc-400">管理后台</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-2">
                手机号
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                pattern="[0-9]{11}"
                placeholder="请输入 11 位手机号"
                className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <p className="mt-1 text-xs text-zinc-500">仅支持 11 位数字手机号</p>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200"
            >
              {loading ? '登录中...' : '登录'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
