import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  UserIcon,
  LockIcon,
  AlertCircleIcon } from
'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { PSULogo } from '../components/PSULogo';
import { useAuth } from '../data/authContext';
export function LoginPage() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 400));
    const result = login(identifier, password);
    setIsLoading(false);
    if (result.success && result.role) {
      if (result.role === 'admin') navigate('/dashboard/admin');else
      if (result.role === 'librarian') navigate('/dashboard/librarian');else
      navigate('/dashboard/student');
    } else {
      setError(result.error || 'Login failed');
    }
  };
  return (
    <PageTransition>
      <main className="min-h-screen bg-psu-charcoal relative flex items-center justify-center py-12 px-4">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] bg-[#F5F5F5]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        

        {/* Maroon accent at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-psu-maroon" />

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
            scale: 0.98
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="relative w-full max-w-md">
          
          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Card Header */}
            <div className="bg-psu-maroon px-8 py-8 text-center">
              <div className="flex justify-center mb-4">
                <PSULogo size="lg" />
              </div>
              <h1 className="text-2xl font-display font-bold text-white">
                Academia Sync
              </h1>
              <p className="text-white/60 text-sm font-sans mt-1">
                Thesis Repository — Sign In
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-8 py-8 space-y-5">
              {error &&
              <motion.div
                initial={{
                  opacity: 0,
                  y: -8
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                className="flex items-center gap-2.5 px-4 py-3 bg-red-50 border border-red-100 rounded-lg">
                
                  <AlertCircleIcon className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <p className="text-sm text-red-600 font-sans">{error}</p>
                </motion.div>
              }

              <div>
                <label
                  htmlFor="identifier"
                  className="block text-sm font-sans font-semibold text-psu-charcoal mb-1.5">
                  
                  Email or Student ID
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="identifier"
                    type="text"
                    value={identifier}
                    onChange={(e) => {
                      setIdentifier(e.target.value);
                      setError('');
                    }}
                    placeholder="Enter your email or student ID"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm font-sans bg-white focus:outline-none focus:border-psu-gold focus:ring-2 focus:ring-psu-gold/20 transition-all" />
                  
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-sans font-semibold text-psu-charcoal mb-1.5">
                  
                  Password
                </label>
                <div className="relative">
                  <LockIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError('');
                    }}
                    placeholder="Enter your password"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm font-sans bg-white focus:outline-none focus:border-psu-gold focus:ring-2 focus:ring-psu-gold/20 transition-all" />
                  
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-psu-maroon hover:bg-psu-maroon-dark text-white font-sans font-semibold rounded-xl transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                
                {isLoading ?
                <motion.div
                  animate={{
                    rotate: 360
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" /> :


                'Sign In'
                }
              </button>
            </form>

            {/* Help text */}
            <div className="px-8 pb-8">
              <div className="border-t border-gray-100 pt-5">
                <p className="text-xs text-gray-400 font-sans text-center leading-relaxed">
                  Students: Sign in with your{' '}
                  <span className="font-semibold text-gray-500">
                    Student ID
                  </span>{' '}
                  (e.g. 2024-00112).
                  <br />
                  Staff: Sign in with your{' '}
                  <span className="font-semibold text-gray-500">
                    PSU email address
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </PageTransition>);

}