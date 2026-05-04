import { Link } from 'react-router-dom';
import {
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  FacebookIcon,
  GlobeIcon } from
'lucide-react';
import { PSULogo } from './PSULogo';
const quickLinks = [
{
  label: 'Home',
  path: '/'
},
{
  label: 'Search Theses',
  path: '/search'
},
{
  label: 'About',
  path: '/about'
}];

const departments = [
'Information Technology',
'Education'];

export function Footer() {
  return (
    <footer className="bg-psu-maroon-dark text-white" role="contentinfo">
      {/* Gold accent line */}
      <div className="h-1 bg-gradient-to-r from-psu-gold via-psu-gold-light to-psu-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <PSULogo size="md" />
              <div>
                <div className="font-display text-lg font-bold">
                  Academia Sync
                </div>
                <div className="text-white/50 text-[10px] font-sans tracking-widest uppercase">
                  Thesis Repository
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm font-sans leading-relaxed">
              RAG-based Semantic Thesis Retrieval System for Pampanga State
              University — Lubao Campus. Powered by AI for intelligent academic
              research discovery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4 text-psu-gold">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) =>
              <li key={link.path}>
                  <Link
                  to={link.path}
                  className="text-sm text-white/60 hover:text-white font-sans transition-colors">
                  
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4 text-psu-gold">
              Departments
            </h4>
            <ul className="space-y-2.5">
              {departments.map((dept) =>
              <li key={dept}>
                  <Link
                  to={`/search?department=${encodeURIComponent(dept)}`}
                  className="text-sm text-white/60 hover:text-white font-sans transition-colors">
                  
                    {dept}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-semibold mb-4 text-psu-gold">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/60 font-sans">
                <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0 text-psu-gold/60" />
                <span>Lubao, Pampanga, Philippines</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/60 font-sans">
                <PhoneIcon className="w-4 h-4 flex-shrink-0 text-psu-gold/60" />
                <span>(045) 123-4567</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/60 font-sans">
                <MailIcon className="w-4 h-4 flex-shrink-0 text-psu-gold/60" />
                <span>thesis@psu.edu.ph</span>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook">
                
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Website">
                
                <GlobeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40 font-sans">
            © {new Date().getFullYear()} Pampanga State University — Lubao
            Campus. All rights reserved.
          </p>
          <p className="text-xs text-white/40 font-sans">
            RAG-based Semantic Thesis Retrieval System
          </p>
        </div>
      </div>
    </footer>);

}