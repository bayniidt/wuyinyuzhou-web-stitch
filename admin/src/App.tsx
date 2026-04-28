// admin/src/App.tsx

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import AuthForm from '@/components/AuthForm';
import Layout from '@/components/Layout';
import Dashboard from '@/pages/Dashboard';
import ContentManagement from '@/pages/ContentManagement';
import ResourceManagement from '@/pages/ResourceManagement';
import NewsManagement from '@/pages/NewsManagement';
import QuestionManagement from '@/pages/QuestionManagement';
import ContactSubmissionManagement from '@/pages/ContactSubmissionManagement';
import NavigationManagement from '@/pages/NavigationManagement';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <Layout>{children}</Layout>;
}

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" replace /> : <AuthForm />}
      />
      
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      
      {/* Content Management */}
      <Route
        path="/content/:module"
        element={
          <ProtectedRoute>
            <ContentManagement />
          </ProtectedRoute>
        }
      />
      
      {/* Resource Management */}
      <Route
        path="/resources/:module"
        element={
          <ProtectedRoute>
            <ResourceManagement />
          </ProtectedRoute>
        }
      />
      
      {/* News Management */}
      <Route
        path="/news"
        element={
          <ProtectedRoute>
            <NewsManagement />
          </ProtectedRoute>
        }
      />
      
      {/* Questions (FAQ) Management */}
      <Route
        path="/questions"
        element={
          <ProtectedRoute>
            <QuestionManagement />
          </ProtectedRoute>
        }
      />
      
      {/* Navigation Management */}
      <Route
        path="/navigation"
        element={
          <ProtectedRoute>
            <NavigationManagement />
          </ProtectedRoute>
        }
      />
      
      {/* Contact Submissions Management */}
      <Route
        path="/contact-submissions"
        element={
          <ProtectedRoute>
            <ContactSubmissionManagement />
          </ProtectedRoute>
        }
      />
      {/* Redirect root to dashboard */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
