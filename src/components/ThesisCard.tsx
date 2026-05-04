import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, UsersIcon, FolderIcon, TagIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Thesis } from '../data/mockTheses';
interface ThesisCardProps {
  thesis: Thesis;
  index?: number;
  showRelevance?: boolean;
}
export function ThesisCard({
  thesis,
  index = 0,
  showRelevance = false
}: ThesisCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1]
      }}>
      
      <Link to={`/thesis/${thesis.id}`} className="block group">
        <motion.article
          whileHover={{
            y: -4
          }}
          transition={{
            duration: 0.2
          }}
          className="bg-white rounded-xl border border-gray-100 p-6 h-full shadow-sm hover:shadow-lg transition-shadow duration-300">
          
          {showRelevance &&
          <div className="mb-3 flex items-center gap-3">
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                initial={{
                  width: 0
                }}
                animate={{
                  width: `${thesis.relevanceScore}%`
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08 + 0.3
                }}
                className="h-full rounded-full"
                style={{
                  background:
                  thesis.relevanceScore >= 90 ?
                  '#16a34a' :
                  thesis.relevanceScore >= 75 ?
                  '#D4A843' :
                  '#7B1113'
                }} />
              
              </div>
              <span className="text-sm font-semibold text-psu-maroon font-sans tabular-nums">
                {thesis.relevanceScore}%
              </span>
            </div>
          }

          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block px-2.5 py-1 bg-psu-maroon/8 text-psu-maroon text-xs font-semibold rounded-md font-sans">
              {thesis.department}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-500 font-sans">
              <CalendarIcon className="w-3 h-3" />
              {thesis.year}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-psu-charcoal leading-snug mb-3 group-hover:text-psu-maroon transition-colors line-clamp-2 font-display">
            {thesis.title}
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3 font-sans">
            {thesis.abstract.split('\n')[0]}
          </p>

          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3 font-sans">
            <UsersIcon className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">{thesis.authors.join(', ')}</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {thesis.keywords.slice(0, 3).map((keyword) =>
            <span
              key={keyword}
              className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-50 text-gray-600 text-xs rounded font-sans">
              
                <TagIcon className="w-2.5 h-2.5" />
                {keyword}
              </span>
            )}
            {thesis.keywords.length > 3 &&
            <span className="text-xs text-gray-400 font-sans">
                +{thesis.keywords.length - 3}
              </span>
            }
          </div>
        </motion.article>
      </Link>
    </motion.div>);

}