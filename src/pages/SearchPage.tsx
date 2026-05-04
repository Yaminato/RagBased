import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FilterIcon,
  XIcon,
  SlidersHorizontalIcon,
  SearchIcon,
  FileXIcon } from
'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { SearchBar } from '../components/SearchBar';
import { ThesisCard } from '../components/ThesisCard';
import { searchTheses, departments } from '../data/mockTheses';
const ITEMS_PER_PAGE = 6;
export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [department, setDepartment] = useState(
    searchParams.get('department') || ''
  );
  const [yearFrom, setYearFrom] = useState(searchParams.get('yearFrom') || '');
  const [yearTo, setYearTo] = useState(searchParams.get('yearTo') || '');
  const [sortBy, setSortBy] = useState(
    searchParams.get('sortBy') || 'relevance'
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const results = useMemo(() => {
    return searchTheses(query, {
      department: department || undefined,
      yearFrom: yearFrom ? parseInt(yearFrom) : undefined,
      yearTo: yearTo ? parseInt(yearTo) : undefined,
      sortBy
    });
  }, [query, department, yearFrom, yearTo, sortBy]);
  const totalPages = Math.ceil(results.length / ITEMS_PER_PAGE);
  const paginatedResults = results.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [query, department, yearFrom, yearTo, sortBy]);
  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    const params = new URLSearchParams();
    if (newQuery) params.set('q', newQuery);
    if (department) params.set('department', department);
    setSearchParams(params);
  };
  const clearFilters = () => {
    setDepartment('');
    setYearFrom('');
    setYearTo('');
    setSortBy('relevance');
  };
  const hasActiveFilters =
  department || yearFrom || yearTo || sortBy !== 'relevance';
  const FilterPanel = () =>
  <div className="space-y-6">
      {/* Department */}
      <div>
        <label className="block text-sm font-sans font-semibold text-psu-charcoal mb-2">
          Department
        </label>
        <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm font-sans bg-white focus:outline-none focus:border-psu-gold transition-colors">
        
          <option value="">All Departments</option>
          {departments.map((d) =>
        <option key={d} value={d}>
              {d}
            </option>
        )}
        </select>
      </div>

      {/* Year Range */}
      <div>
        <label className="block text-sm font-sans font-semibold text-psu-charcoal mb-2">
          Year Range
        </label>
        <div className="flex items-center gap-2">
          <input
          type="number"
          value={yearFrom}
          onChange={(e) => setYearFrom(e.target.value)}
          placeholder="From"
          min="2010"
          max="2025"
          className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm font-sans bg-white focus:outline-none focus:border-psu-gold transition-colors" />
        
          <span className="text-gray-400 text-sm">—</span>
          <input
          type="number"
          value={yearTo}
          onChange={(e) => setYearTo(e.target.value)}
          placeholder="To"
          min="2010"
          max="2025"
          className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm font-sans bg-white focus:outline-none focus:border-psu-gold transition-colors" />
        
        </div>
      </div>

      {/* Sort By */}
      <div>
        <label className="block text-sm font-sans font-semibold text-psu-charcoal mb-2">
          Sort By
        </label>
        <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm font-sans bg-white focus:outline-none focus:border-psu-gold transition-colors">
        
          <option value="relevance">Relevance</option>
          <option value="date">Year (Newest)</option>
          <option value="title">Title (A-Z)</option>
        </select>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters &&
    <button
      onClick={clearFilters}
      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-sans font-medium text-psu-maroon bg-psu-maroon/5 hover:bg-psu-maroon/10 rounded-lg transition-colors">
      
          <XIcon className="w-4 h-4" />
          Clear Filters
        </button>
    }
    </div>;

  return (
    <PageTransition>
      <main className="min-h-screen bg-gray-50">
        {/* Search Header */}
        <div className="bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <SearchBar initialQuery={query} onSearch={handleSearch} />
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-gray-500 font-sans">
                {results.length > 0 ?
                <>
                    Found{' '}
                    <span className="font-semibold text-psu-charcoal">
                      {results.length}
                    </span>{' '}
                    {results.length === 1 ? 'thesis' : 'theses'}
                    {query &&
                  <>
                        {' '}
                        for "
                        <span className="font-semibold text-psu-maroon">
                          {query}
                        </span>
                        "
                      </>
                  }
                  </> :

                'No results found'
                }
              </p>
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="lg:hidden flex items-center gap-2 px-3 py-1.5 text-sm font-sans font-medium text-psu-charcoal bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                
                <SlidersHorizontalIcon className="w-4 h-4" />
                Filters
                {hasActiveFilters &&
                <span className="w-2 h-2 rounded-full bg-psu-maroon" />
                }
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-32 bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-5">
                  <FilterIcon className="w-4 h-4 text-psu-maroon" />
                  <h3 className="text-sm font-sans font-bold text-psu-charcoal uppercase tracking-wider">
                    Filters
                  </h3>
                </div>
                <FilterPanel />
              </div>
            </aside>

            {/* Mobile Filters */}
            <AnimatePresence>
              {showMobileFilters &&
              <motion.div
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                exit={{
                  opacity: 0
                }}
                className="fixed inset-0 z-50 lg:hidden">
                
                  <div
                  className="absolute inset-0 bg-black/40"
                  onClick={() => setShowMobileFilters(false)} />
                
                  <motion.div
                  initial={{
                    x: '100%'
                  }}
                  animate={{
                    x: 0
                  }}
                  exit={{
                    x: '100%'
                  }}
                  transition={{
                    type: 'spring',
                    damping: 25,
                    stiffness: 300
                  }}
                  className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl p-6 overflow-y-auto">
                  
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-sans font-bold text-psu-charcoal">
                        Filters
                      </h3>
                      <button
                      onClick={() => setShowMobileFilters(false)}
                      className="p-1 text-gray-400 hover:text-gray-600">
                      
                        <XIcon className="w-5 h-5" />
                      </button>
                    </div>
                    <FilterPanel />
                  </motion.div>
                </motion.div>
              }
            </AnimatePresence>

            {/* Results */}
            <div className="flex-1 min-w-0">
              {paginatedResults.length > 0 ?
              <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {paginatedResults.map((thesis, i) =>
                  <ThesisCard
                    key={thesis.id}
                    thesis={thesis}
                    index={i}
                    showRelevance />

                  )}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 &&
                <div className="flex items-center justify-center gap-2 mt-10">
                      <button
                    onClick={() =>
                    setCurrentPage((p) => Math.max(1, p - 1))
                    }
                    disabled={currentPage === 1}
                    className="px-4 py-2 text-sm font-sans font-medium rounded-lg border border-gray-200 text-psu-charcoal hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                    
                        Previous
                      </button>
                      {Array.from(
                    {
                      length: totalPages
                    },
                    (_, i) => i + 1
                  ).map((page) =>
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 text-sm font-sans font-medium rounded-lg transition-colors ${page === currentPage ? 'bg-psu-maroon text-white' : 'border border-gray-200 text-psu-charcoal hover:bg-gray-50'}`}>
                    
                          {page}
                        </button>
                  )}
                      <button
                    onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 text-sm font-sans font-medium rounded-lg border border-gray-200 text-psu-charcoal hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                    
                        Next
                      </button>
                    </div>
                }
                </> :

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                className="text-center py-20">
                
                  <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-5">
                    <FileXIcon className="w-7 h-7 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-psu-charcoal mb-2">
                    No theses found
                  </h3>
                  <p className="text-sm text-gray-500 font-sans max-w-md mx-auto mb-6">
                    Try adjusting your search query or filters. Our semantic
                    search works best with descriptive phrases about your
                    research topic.
                  </p>
                  <button
                  onClick={() => {
                    setQuery('');
                    clearFilters();
                    setSearchParams({});
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-psu-maroon text-white rounded-lg text-sm font-sans font-semibold hover:bg-psu-maroon-dark transition-colors">
                  
                    <SearchIcon className="w-4 h-4" />
                    Clear Search
                  </button>
                </motion.div>
              }
            </div>
          </div>
        </div>
      </main>
    </PageTransition>);

}