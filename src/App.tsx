import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { AuthProvider, useAuth } from './data/authContext'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ChatBot } from './components/ChatBot'
import { HomePage } from './pages/HomePage'
import { SearchPage } from './pages/SearchPage'
import { ThesisDetailPage } from './pages/ThesisDetailPage'
import { AboutPage } from './pages/AboutPage'
import { LoginPage } from './pages/LoginPage'
import { StudentDashboardPage } from './pages/StudentDashboardPage'
import { StudentProfilePage } from './pages/StudentProfile'
import { LibrarianDashboardPage } from './pages/LibrarianDashboardPage'
import { AdminDashboardPage } from './pages/AdminDashboardPage'
function ProtectedRoute({
  children,
  allowedRoles,
}: {
  children: React.ReactNode
  allowedRoles?: string[]
}) {
  const { isAuthenticated, user } = useAuth()
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }
  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    // Redirect to their own dashboard
    if (user.role === 'admin') return <Navigate to="/dashboard/admin" replace />
    if (user.role === 'librarian')
      return <Navigate to="/dashboard/librarian" replace />
    return <Navigate to="/dashboard/student" replace />
  }
  return <>{children}</>
}
function RedirectIfAuth({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, user } = useAuth()
  if (isAuthenticated && user) {
    if (user.role === 'admin') return <Navigate to="/dashboard/admin" replace />
    if (user.role === 'librarian')
      return <Navigate to="/dashboard/librarian" replace />
    return <Navigate to="/dashboard/student" replace />
  }
  return <>{children}</>
}
function AppRoutes() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/thesis/:id" element={<ThesisDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/login"
          element={
            <RedirectIfAuth>
              <LoginPage />
            </RedirectIfAuth>
          }
        />
        <Route
          path="/dashboard/student"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <StudentDashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/student/profile"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <StudentProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/librarian"
          element={
            <ProtectedRoute allowedRoles={['librarian']}>
              <LibrarianDashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/admin"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  )
}
export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="flex flex-col min-h-screen w-full bg-white">
          <Header />
          <div className="flex-1">
            <AppRoutes />
          </div>
          <Footer />
        </div>
        <ChatBot />
      </AuthProvider>
    </BrowserRouter>
  )
}
