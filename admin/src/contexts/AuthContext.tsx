// admin/src/contexts/AuthContext.tsx

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import apiClient from '@/api/client';
import { AuthState } from '@/types';

interface AuthContextType extends AuthState {
  login: (phone: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    member: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    // Check for existing session
    const savedAuth = localStorage.getItem('auth');
    if (savedAuth) {
      try {
        const parsed = JSON.parse(savedAuth);
        setAuthState(parsed);
      } catch (e) {
        console.error('Failed to parse saved auth:', e);
        localStorage.removeItem('auth');
      }
    }
  }, []);

  const login = async (phone: string) => {
    try {
      const response = await apiClient.post('/login', { phone });
      const { success, member } = response.data;
      
      if (success && member) {
        const newState = {
          member,
          isAuthenticated: true,
        };
        setAuthState(newState);
        localStorage.setItem('auth', JSON.stringify(newState));
      } else {
        throw new Error(response.data.error || 'Login failed');
      }
    } catch (error: any) {
      if (error.response?.status !== 401) {
        throw error;
      }
      throw new Error(error.response?.data?.error || '登录失败，请检查手机号是否正确');
    }
  };

  const logout = () => {
    setAuthState({
      member: null,
      isAuthenticated: false,
    });
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
