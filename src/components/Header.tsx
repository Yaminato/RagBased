import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  SearchIcon,
  MenuIcon,
  XIcon,
  LogInIcon,
  LogOutIcon,
  LayoutDashboardIcon,
  ChevronDownIcon,
  UserIcon,
  ShieldIcon,
  BookOpenIcon } from
'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../data/authContext';
import { PSULogo } from './PSULogo';
const baseNavLinks = [
{
  label: 'Home',
  path: '/'
},
{
  label: 'Search',
  path: '/search'
},
{
  label: 'About',
  path: '/about'
}];

const utilityLinks = [
'Data Privacy Notice',
'Transparency Seal'];

const roleBadgeStyles: Record<string, string> = {
  student: 'bg-blue-500',
  librarian: 'bg-emerald-500',
  admin: 'bg-psu-maroon'
};
const roleBadgeText: Record<string, string> = {
  student: 'bg-blue-100 text-blue-700',
  librarian: 'bg-emerald-100 text-emerald-700',
  admin: 'bg-psu-maroon/10 text-psu-maroon'
};
const roleIcons: Record<string, React.ElementType> = {
  student: UserIcon,
  librarian: BookOpenIcon,
  admin: ShieldIcon
};
function getDashboardPath(role: string) {
  if (role === 'admin') return '/dashboard/admin';
  if (role === 'librarian') return '/dashboard/librarian';
  return '/dashboard/student';
}
export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node))
      {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);
  const navLinks = isAuthenticated ?
  [
  ...baseNavLinks,
  {
    label: 'Dashboard',
    path: getDashboardPath(user!.role)
  }] :

  baseNavLinks;
  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate('/');
  };
  return (
    <header className="sticky top-0 z-50">
      {/* Utility Bar */}
      <div className="bg-psu-charcoal text-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8">
          <div className="hidden md:flex items-center gap-4 text-xs font-sans">
            {utilityLinks.map((link) =>
            <button key={link} className="hover:text-white transition-colors">
                {link}
              </button>
            )}
          </div>
          <div className="flex items-center gap-3 text-xs font-sans ml-auto">
            <span className="hidden sm:inline text-white/60">
              Pampanga State University
            </span>
            <span className="font-semibold text-psu-gold-light tracking-wide">
              EDUCATION BEYOND BORDERS
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className="bg-psu-maroon shadow-lg"
        role="navigation"
        aria-label="Main navigation">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <PSULogo size="md" />
              <div className="hidden sm:block">
                <div className="text-white font-display text-lg font-bold leading-tight">
                  Academia Sync
                </div>
                <div className="text-white/60 text-[10px] font-sans tracking-widest uppercase">
                  Thesis Repository
                </div>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                location.pathname === link.path ||
                link.path === '/search' &&
                location.pathname.startsWith('/search') ||
                link.path.startsWith('/dashboard') &&
                location.pathname.startsWith('/dashboard');
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative px-4 py-2 text-sm font-sans font-medium text-white/90 hover:text-white transition-colors">
                    
                    {link.label}
                    {isActive &&
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-psu-gold rounded-full"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30
                      }} />

                    }
                  </Link>);

              })}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <Link
                to="/search"
                className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white text-sm font-sans transition-colors">
                
                <SearchIcon className="w-4 h-4" />
                <span>Search</span>
              </Link>

              {/* Auth Section - Desktop */}
              <div className="hidden md:block">
                {isAuthenticated && user ?
                <div className="relative" ref={dropdownRef}>
                    <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-white/10 transition-colors">
                    
                      <div
                      className={`w-8 h-8 rounded-full ${roleBadgeStyles[user.role]} flex items-center justify-center text-white text-xs font-bold font-sans`}>
                      
                        {user.name.charAt(0)}
                      </div>
                      <div className="text-left hidden lg:block">
                        <p className="text-xs font-sans font-medium text-white leading-tight">
                          {user.name}
                        </p>
                        <p className="text-[10px] font-sans text-white/50 capitalize">
                          {user.role}
                        </p>
                      </div>
                      <ChevronDownIcon
                      className={`w-3.5 h-3.5 text-white/50 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                    
                    </button>

                    <AnimatePresence>
                      {dropdownOpen &&
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 4,
                        scale: 0.97
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1
                      }}
                      exit={{
                        opacity: 0,
                        y: 4,
                        scale: 0.97
                      }}
                      transition={{
                        duration: 0.15
                      }}
                      className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                      
                          <div className="px-4 py-3 border-b border-gray-100">
                            <p className="text-sm font-sans font-semibold text-psu-charcoal">
                              {user.name}
                            </p>
                            <p className="text-xs text-gray-400 font-sans">
                              {user.email}
                            </p>
                            <span
                          className={`inline-block mt-1.5 text-[10px] font-sans font-medium px-2 py-0.5 rounded-full ${roleBadgeText[user.role]}`}>
                          
                              {user.role.charAt(0).toUpperCase() +
                          user.role.slice(1)}
                            </span>
                          </div>
                          <div className="py-1">
                            <Link
                          to={getDashboardPath(user.role)}
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-sans text-psu-charcoal hover:bg-gray-50 transition-colors">
                          
                              <LayoutDashboardIcon className="w-4 h-4 text-gray-400" />
                              Dashboard
                            </Link>
                            <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-sans text-red-600 hover:bg-red-50 transition-colors">
                          
                              <LogOutIcon className="w-4 h-4" />
                              Sign Out
                            </button>
                          </div>
                        </motion.div>
                    }
                    </AnimatePresence>
                  </div> :

                <Link
                  to="/login"
                  className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-psu-gold hover:bg-psu-gold-light text-psu-charcoal text-sm font-sans font-semibold transition-colors">
                  
                    <LogInIcon className="w-4 h-4" />
                    Login
                  </Link>
                }
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}>
                
                {mobileMenuOpen ?
                <XIcon className="w-6 h-6" /> :

                <MenuIcon className="w-6 h-6" />
                }
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen &&
          <motion.div
            initial={{
              height: 0,
              opacity: 0
            }}
            animate={{
              height: 'auto',
              opacity: 1
            }}
            exit={{
              height: 0,
              opacity: 0
            }}
            transition={{
              duration: 0.25
            }}
            className="md:hidden overflow-hidden border-t border-white/10">
            
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => {
                const isActive =
                location.pathname === link.path ||
                link.path.startsWith('/dashboard') &&
                location.pathname.startsWith('/dashboard');
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-sans font-medium transition-colors ${isActive ? 'bg-white/15 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
                    
                      {link.label}
                    </Link>);

              })}

                {/* Mobile Auth */}
                <div className="pt-3 mt-3 border-t border-white/10">
                  {isAuthenticated && user ?
                <>
                      <div className="flex items-center gap-3 px-4 py-2 mb-2">
                        <div
                      className={`w-9 h-9 rounded-full ${roleBadgeStyles[user.role]} flex items-center justify-center text-white text-sm font-bold font-sans`}>
                      
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-sans font-medium text-white">
                            {user.name}
                          </p>
                          <p className="text-xs text-white/50 font-sans capitalize">
                            {user.role}
                          </p>
                        </div>
                      </div>
                      <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-sans font-medium text-red-300 hover:bg-white/10 transition-colors">
                    
                        <LogOutIcon className="w-4 h-4" />
                        Sign Out
                      </button>
                    </> :

                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg bg-psu-gold text-psu-charcoal text-sm font-sans font-semibold">
                  
                      <LogInIcon className="w-4 h-4" />
                      Login
                    </Link>
                }
                </div>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </nav>
    </header>);

}