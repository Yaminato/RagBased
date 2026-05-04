import React, { useState, Component } from 'react';
import { SearchIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
interface SearchBarProps {
  initialQuery?: string;
  size?: 'large' | 'default' | 'compact';
  onSearch?: (query: string) => void;
  className?: string;
}
export function SearchBar({
  initialQuery = '',
  size = 'default',
  onSearch,
  className = ''
}: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      if (onSearch) {
        onSearch(query.trim());
      } else {
        navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      }
    }
  };
  const sizeClasses = {
    large: 'py-4 px-6 text-lg',
    default: 'py-3 px-5 text-base',
    compact: 'py-2 px-4 text-sm'
  };
  const iconSizes = {
    large: 'w-6 h-6',
    default: 'w-5 h-5',
    compact: 'w-4 h-4'
  };
  return (
    <form onSubmit={handleSubmit} className={`relative w-full ${className}`}>
      <motion.div
        animate={{
          boxShadow: isFocused ?
          '0 0 0 3px rgba(212, 168, 67, 0.3), 0 8px 32px rgba(0,0,0,0.12)' :
          '0 2px 12px rgba(0,0,0,0.08)'
        }}
        transition={{
          duration: 0.2
        }}
        className="relative rounded-xl overflow-hidden bg-white">
        
        <SearchIcon
          className={`absolute left-4 top-1/2 -translate-y-1/2 text-psu-maroon/60 ${iconSizes[size]}`} />
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search theses by topic, keyword, or natural language query..."
          className={`w-full ${sizeClasses[size]} pl-12 pr-32 bg-transparent border border-gray-200 rounded-xl font-sans text-psu-charcoal placeholder:text-gray-400 focus:outline-none focus:border-psu-gold transition-colors`}
          aria-label="Search theses" />
        
        <button
          type="submit"
          className={`absolute right-2 top-1/2 -translate-y-1/2 bg-psu-maroon hover:bg-psu-maroon-dark text-white font-semibold rounded-lg transition-colors ${size === 'large' ? 'px-6 py-2.5 text-base' : size === 'compact' ? 'px-4 py-1.5 text-sm' : 'px-5 py-2 text-sm'}`}>
          
          Search
        </button>
      </motion.div>
    </form>);

}