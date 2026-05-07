import { motion } from 'framer-motion'
import {
  SearchIcon,
  BrainCircuitIcon,
  FileSearchIcon,
  BookOpenIcon,
  ArrowRightIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageTransition } from '../components/PageTransition'
import { SearchBar } from '../components/SearchBar'
import { StatsCounter } from '../components/StatsCounter'
import { ThesisCard } from '../components/ThesisCard'
import { mockTheses, departments } from '../data/mockTheses'
const filterChips = ['All', ...departments]
const steps = [
  {
    icon: SearchIcon,
    title: 'Enter Your Query',
    description:
      "Type your research topic, keywords, or even a natural language question about what you're looking for.",
  },
  {
    icon: BrainCircuitIcon,
    title: 'AI Semantic Analysis',
    description:
      'Our RAG-powered system understands the meaning behind your query, not just matching keywords.',
  },
  {
    icon: FileSearchIcon,
    title: 'Relevant Results',
    description:
      'Get precisely ranked thesis results with relevance scores, abstracts, and related research.',
  },
]
export function HomePage() {
  const featuredTheses = mockTheses.slice(0, 6)
  return (
    <PageTransition>
      <main>
        {/* Hero Section */}
        <section className="relative bg-psu-charcoal overflow-hidden">
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          {/* Maroon accent overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-psu-maroon" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-psu-maroon/20 border border-psu-maroon/30 mb-6">
                  <BrainCircuitIcon className="w-4 h-4 text-psu-gold" />
                  <span className="text-sm font-sans font-medium text-psu-gold">
                    AI-Powered Semantic Search
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6"
              >
                Academia Sync <span className="text-psu-gold">Thesis</span>{' '}
                Repository
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-lg md:text-xl text-white/60 font-sans leading-relaxed mb-10 max-w-2xl mx-auto"
              >
                Discover academic research with intelligent semantic search. Our
                RAG-based system understands your queries and finds the most
                relevant theses across all departments.
              </motion.p>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-2xl mx-auto"
              >
                <SearchBar size="large" />
              </motion.div>

              {/* Filter Chips */}
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                }}
                className="flex flex-wrap justify-center gap-2 mt-6"
              >
                {filterChips.map((chip) => (
                  <Link
                    key={chip}
                    to={
                      chip === 'All'
                        ? '/search'
                        : `/search?department=${encodeURIComponent(chip)}`
                    }
                    className="px-3.5 py-1.5 rounded-full text-xs font-sans font-medium bg-white/8 text-white/50 hover:bg-white/15 hover:text-white/80 border border-white/10 transition-all"
                  >
                    {chip}
                  </Link>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative overflow-hidden bg-[#111] py-12 md:py-16">
          {/* Animated background stripes */}
          <div className="bg-stripe" />
          <div className="bg-stripe bg-stripe-2" />
          <div className="bg-stripe bg-stripe-3" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatsCounter value={5} suffix="+" label="Total Theses" />
              <StatsCounter value={2} label="Departments" />
              <StatsCounter value={15} suffix="+" label="Years Covered" />
              <StatsCounter value={95} suffix="%" label="Search Accuracy" />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-psu-charcoal mb-4">
                How It Works
              </h2>
              <p className="text-gray-500 font-sans max-w-xl mx-auto">
                Our RAG-based semantic search goes beyond simple keyword
                matching to understand the true intent of your research query.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{
                    opacity: 0,
                    y: 24,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: '-50px',
                  }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.15,
                  }}
                  className="text-center"
                >
                  <div className="relative mx-auto mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-psu-maroon/8 flex items-center justify-center mx-auto">
                      <step.icon className="w-7 h-7 text-psu-maroon" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-psu-gold text-white text-xs font-bold font-sans flex items-center justify-center">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-psu-charcoal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-sans leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Theses */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-psu-charcoal mb-3">
                  Featured Theses
                </h2>
                <p className="text-gray-500 font-sans">
                  Browse recent and highly-rated research from our collection.
                </p>
              </div>
              <Link
                to="/search"
                className="hidden md:inline-flex items-center gap-2 text-sm font-sans font-semibold text-psu-maroon hover:text-psu-maroon-dark transition-colors"
              >
                View all
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTheses.map((thesis, i) => (
                <ThesisCard
                  key={thesis.id}
                  thesis={thesis}
                  index={i}
                  showRelevance
                />
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link
                to="/search"
                className="inline-flex items-center gap-2 px-6 py-3 bg-psu-maroon text-white rounded-lg font-sans font-semibold text-sm hover:bg-psu-maroon-dark transition-colors"
              >
                View All Theses
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-psu-charcoal py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <BookOpenIcon className="w-10 h-10 text-psu-gold mx-auto mb-5" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Start Your Research Journey
              </h2>
              <p className="text-white/50 font-sans max-w-lg mx-auto mb-8">
                Access hundreds of theses across multiple disciplines. Let our
                AI help you find exactly what you need.
              </p>
              <Link
                to="/search"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-psu-maroon hover:bg-psu-maroon-light text-white rounded-lg font-sans font-semibold transition-colors"
              >
                <SearchIcon className="w-4 h-4" />
                Explore Theses
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
