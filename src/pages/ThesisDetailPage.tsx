import React, { Component } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronRightIcon,
  CalendarIcon,
  UsersIcon,
  FolderIcon,
  UserIcon,
  TagIcon,
  DownloadIcon,
  ExternalLinkIcon,
  ArrowLeftIcon,
  FileXIcon } from
'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { ThesisCard } from '../components/ThesisCard';
import { getThesisById, getRelatedTheses } from '../data/mockTheses';
export function ThesisDetailPage() {
  const { id } = useParams<{
    id: string;
  }>();
  const thesis = getThesisById(id || '');
  if (!thesis) {
    return (
      <PageTransition>
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-5">
              <FileXIcon className="w-7 h-7 text-gray-400" />
            </div>
            <h2 className="text-2xl font-display font-bold text-psu-charcoal mb-3">
              Thesis Not Found
            </h2>
            <p className="text-gray-500 font-sans mb-6">
              The thesis you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/search"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-psu-maroon text-white rounded-lg text-sm font-sans font-semibold hover:bg-psu-maroon-dark transition-colors">
              
              <ArrowLeftIcon className="w-4 h-4" />
              Back to Search
            </Link>
          </div>
        </main>
      </PageTransition>);

  }
  const relatedTheses = getRelatedTheses(thesis);
  return (
    <PageTransition>
      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav
              className="flex items-center gap-1.5 text-sm font-sans text-gray-500"
              aria-label="Breadcrumb">
              
              <Link to="/" className="hover:text-psu-maroon transition-colors">
                Home
              </Link>
              <ChevronRightIcon className="w-3.5 h-3.5" />
              <Link
                to="/search"
                className="hover:text-psu-maroon transition-colors">
                
                Search
              </Link>
              <ChevronRightIcon className="w-3.5 h-3.5" />
              <span className="text-psu-charcoal font-medium truncate max-w-[200px] sm:max-w-xs">
                {thesis.title}
              </span>
            </nav>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.article
                initial={{
                  opacity: 0,
                  y: 16
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.4
                }}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                
                {/* Header bar */}
                <div className="bg-psu-maroon px-6 py-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 bg-white/20 text-white text-xs font-sans font-semibold rounded">
                      {thesis.department}
                    </span>
                    <span className="flex items-center gap-1 text-white/70 text-xs font-sans">
                      <CalendarIcon className="w-3 h-3" />
                      {thesis.year}
                    </span>
                  </div>
                  <h1 className="text-xl sm:text-2xl font-display font-bold text-white leading-snug">
                    {thesis.title}
                  </h1>
                </div>

                <div className="p-6 md:p-8">
                  {/* Meta info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pb-8 border-b border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-psu-maroon/8 flex items-center justify-center flex-shrink-0">
                        <UsersIcon className="w-4 h-4 text-psu-maroon" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-sans uppercase tracking-wider mb-0.5">
                          Authors
                        </p>
                        <p className="text-sm font-sans font-medium text-psu-charcoal">
                          {thesis.authors.join(', ')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-psu-maroon/8 flex items-center justify-center flex-shrink-0">
                        <UserIcon className="w-4 h-4 text-psu-maroon" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-sans uppercase tracking-wider mb-0.5">
                          Adviser
                        </p>
                        <p className="text-sm font-sans font-medium text-psu-charcoal">
                          {thesis.adviser}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-psu-maroon/8 flex items-center justify-center flex-shrink-0">
                        <FolderIcon className="w-4 h-4 text-psu-maroon" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-sans uppercase tracking-wider mb-0.5">
                          Department
                        </p>
                        <p className="text-sm font-sans font-medium text-psu-charcoal">
                          {thesis.department}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-psu-maroon/8 flex items-center justify-center flex-shrink-0">
                        <CalendarIcon className="w-4 h-4 text-psu-maroon" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-sans uppercase tracking-wider mb-0.5">
                          Year
                        </p>
                        <p className="text-sm font-sans font-medium text-psu-charcoal">
                          {thesis.year}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Abstract */}
                  <div className="mb-8">
                    <h2 className="text-lg font-display font-semibold text-psu-charcoal mb-4">
                      Abstract
                    </h2>
                    <div className="space-y-4">
                      {thesis.abstract.
                      split('\n').
                      filter(Boolean).
                      map((paragraph, i) =>
                      <p
                        key={i}
                        className="text-sm text-gray-600 font-sans leading-relaxed">
                        
                            {paragraph}
                          </p>
                      )}
                    </div>
                  </div>

                  {/* Keywords */}
                  <div>
                    <h2 className="text-lg font-display font-semibold text-psu-charcoal mb-3">
                      Keywords
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {thesis.keywords.map((keyword) =>
                      <Link
                        key={keyword}
                        to={`/search?q=${encodeURIComponent(keyword)}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-psu-maroon/6 text-psu-maroon text-xs font-sans font-medium rounded-lg hover:bg-psu-maroon/12 transition-colors">
                        
                          <TagIcon className="w-3 h-3" />
                          {keyword}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 16
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.15
                }}
                className="sticky top-32 space-y-5">
                
                {/* Relevance Score */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                  <h3 className="text-sm font-sans font-bold text-psu-charcoal uppercase tracking-wider mb-4">
                    Relevance Score
                  </h3>
                  <div className="relative w-28 h-28 mx-auto mb-3">
                    <svg
                      className="w-full h-full -rotate-90"
                      viewBox="0 0 100 100">
                      
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="#f3f4f6"
                        strokeWidth="8" />
                      
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="#7B1113"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 42}`}
                        initial={{
                          strokeDashoffset: 2 * Math.PI * 42
                        }}
                        animate={{
                          strokeDashoffset:
                          2 *
                          Math.PI *
                          42 * (
                          1 - thesis.relevanceScore / 100)
                        }}
                        transition={{
                          duration: 1,
                          delay: 0.3,
                          ease: 'easeOut'
                        }} />
                      
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold font-sans text-psu-charcoal">
                        {thesis.relevanceScore}%
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 font-sans text-center">
                    Based on semantic similarity analysis
                  </p>
                </div>

                {/* Actions */}
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 space-y-3">
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-psu-maroon hover:bg-psu-maroon-dark text-white rounded-lg text-sm font-sans font-semibold transition-colors">
                    <DownloadIcon className="w-4 h-4" />
                    Download PDF
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 text-psu-charcoal hover:bg-gray-50 rounded-lg text-sm font-sans font-medium transition-colors">
                    <ExternalLinkIcon className="w-4 h-4" />
                    View Full Document
                  </button>
                </div>

                {/* Back */}
                <Link
                  to="/search"
                  className="flex items-center gap-2 text-sm font-sans font-medium text-gray-500 hover:text-psu-maroon transition-colors">
                  
                  <ArrowLeftIcon className="w-4 h-4" />
                  Back to Search Results
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Related Theses */}
          {relatedTheses.length > 0 &&
          <section className="mt-16">
              <h2 className="text-2xl font-display font-bold text-psu-charcoal mb-6">
                Related Theses
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedTheses.map((t, i) =>
              <ThesisCard key={t.id} thesis={t} index={i} />
              )}
              </div>
            </section>
          }
        </div>
      </main>
    </PageTransition>);

}