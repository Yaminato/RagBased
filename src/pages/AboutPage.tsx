import React from 'react';
import { motion } from 'framer-motion';
import {
  BrainCircuitIcon,
  DatabaseIcon,
  SearchIcon,
  CpuIcon,
  LayersIcon,
  MapPinIcon,
  UsersIcon,
  CodeIcon,
  ServerIcon,
  LayoutIcon,
  GitBranchIcon } from
'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { PSULogo } from '../components/PSULogo';
const howItWorks = [
{
  step: 1,
  icon: SearchIcon,
  title: 'Query Input',
  description:
  'The user enters a natural language query describing their research interest or topic.',
  color: 'bg-psu-maroon'
},
{
  step: 2,
  icon: CpuIcon,
  title: 'Embedding Generation',
  description:
  'The query is converted into a high-dimensional vector using a pre-trained language model (sentence transformer).',
  color: 'bg-psu-charcoal'
},
{
  step: 3,
  icon: DatabaseIcon,
  title: 'Vector Search',
  description:
  'The query embedding is compared against stored thesis embeddings using cosine similarity to find the most relevant matches.',
  color: 'bg-psu-maroon'
},
{
  step: 4,
  icon: BrainCircuitIcon,
  title: 'Context Retrieval (RAG)',
  description:
  'Retrieved thesis abstracts and metadata are used as context for the language model to generate enriched, contextual results.',
  color: 'bg-psu-charcoal'
},
{
  step: 5,
  icon: LayersIcon,
  title: 'Ranked Results',
  description:
  'Results are ranked by semantic relevance and presented with scores, abstracts, and related research suggestions.',
  color: 'bg-psu-maroon'
}];

const techStack = [
{
  icon: CodeIcon,
  name: 'Python / FastAPI',
  category: 'Backend'
},
{
  icon: LayoutIcon,
  name: 'React + TypeScript',
  category: 'Frontend'
},
{
  icon: DatabaseIcon,
  name: 'ChromaDB / FAISS',
  category: 'Vector Store'
},
{
  icon: CpuIcon,
  name: 'Sentence Transformers',
  category: 'Embeddings'
},
{
  icon: BrainCircuitIcon,
  name: 'LangChain',
  category: 'RAG Framework'
},
{
  icon: ServerIcon,
  name: 'Hugging Face Models',
  category: 'LLM'
}];

const team = [
{
  name: 'Research Team',
  role: 'Academia Sync — Research & Instruction'
},
{
  name: 'Faculty Adviser',
  role: 'Pampanga State University'
},
{
  name: 'Development Team',
  role: 'Student Development Team'
}];

export function AboutPage() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-psu-charcoal relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
            }} />
          
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-psu-maroon" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.5
              }}>
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-psu-maroon/20 border border-psu-maroon/30 mb-6">
                <BrainCircuitIcon className="w-4 h-4 text-psu-gold" />
                <span className="text-sm font-sans font-medium text-psu-gold">
                  About the System
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-5">
                RAG-Based Semantic{' '}
                <span className="text-psu-gold">Thesis Retrieval</span>
              </h1>
              <p className="text-lg text-white/50 font-sans max-w-2xl mx-auto leading-relaxed">
                An intelligent thesis search system that leverages
                Retrieval-Augmented Generation to understand research queries
                and deliver semantically relevant results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What is RAG */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -20
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.5
                }}>
                
                <h2 className="text-3xl font-display font-bold text-psu-charcoal mb-5">
                  What is RAG-Based Semantic Search?
                </h2>
                <div className="space-y-4 text-sm text-gray-600 font-sans leading-relaxed">
                  <p>
                    <strong className="text-psu-charcoal">
                      Retrieval-Augmented Generation (RAG)
                    </strong>{' '}
                    is an AI architecture that combines the power of information
                    retrieval with large language models. Unlike traditional
                    keyword-based search, RAG understands the <em>meaning</em>{' '}
                    behind your query.
                  </p>
                  <p>
                    When you search for "machine learning applications in
                    farming," a traditional system only finds documents
                    containing those exact words. Our RAG system understands
                    you're looking for AI-powered agricultural technology and
                    can find relevant theses even if they use different
                    terminology like "crop disease detection using neural
                    networks."
                  </p>
                  <p>
                    The system converts both queries and thesis documents into
                    mathematical representations (embeddings) that capture
                    semantic meaning, then finds the closest matches in this
                    high-dimensional space.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: 20
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.15
                }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                
                <h3 className="text-sm font-sans font-bold text-psu-charcoal uppercase tracking-wider mb-5">
                  Traditional vs. Semantic Search
                </h3>
                <div className="space-y-5">
                  <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-gray-400" />
                      <span className="text-xs font-sans font-semibold text-gray-500 uppercase tracking-wider">
                        Keyword Search
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 font-sans">
                      Matches exact words only. "AI farming" won't find "neural
                      network agriculture."
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border-2 border-psu-gold/40">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-psu-gold" />
                      <span className="text-xs font-sans font-semibold text-psu-maroon uppercase tracking-wider">
                        Semantic Search (RAG)
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 font-sans">
                      Understands meaning and context. Finds conceptually
                      related research regardless of exact wording.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works - Pipeline */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-psu-charcoal mb-4">
                How the System Works
              </h2>
              <p className="text-gray-500 font-sans max-w-xl mx-auto">
                The complete pipeline from query to results.
              </p>
            </div>

            <div className="space-y-0">
              {howItWorks.map((item, i) =>
              <motion.div
                key={item.step}
                initial={{
                  opacity: 0,
                  x: i % 2 === 0 ? -20 : 20
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true,
                  margin: '-30px'
                }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.1
                }}
                className="relative flex items-start gap-5 pb-10 last:pb-0">
                
                  {/* Connector line */}
                  {i < howItWorks.length - 1 &&
                <div className="absolute left-[23px] top-12 bottom-0 w-0.5 bg-gray-200" />
                }
                  {/* Step circle */}
                  <div
                  className={`relative z-10 w-12 h-12 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                  
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-sans font-bold text-psu-gold uppercase tracking-wider">
                        Step {item.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-display font-semibold text-psu-charcoal mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-sans leading-relaxed max-w-lg">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* About Academia Sync */}
        <section className="bg-psu-maroon py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.5
                }}>
                
                <div className="flex items-center gap-3 mb-5">
                  <PSULogo size="lg" className="border-2 border-psu-gold/50" />
                  <div>
                    <h2 className="text-2xl font-display font-bold text-white">
                      Academia Sync
                    </h2>
                    <p className="text-white/50 text-sm font-sans">
                      Pampanga State University
                    </p>
                  </div>
                </div>
                <div className="space-y-4 text-sm text-white/70 font-sans leading-relaxed">
                  <p>
                    Pampanga State University — Lubao Campus is committed to
                    providing quality education and fostering research
                    excellence across multiple disciplines. The campus serves as
                    a hub for academic innovation in the municipality of Lubao,
                    Pampanga.
                  </p>
                  <p>
                    This thesis retrieval system was developed to support the
                    university's research mission by making academic work more
                    discoverable and accessible to students, faculty, and
                    researchers.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.15
                }}
                className="grid grid-cols-2 gap-4">
                
                {[
                {
                  icon: BrainCircuitIcon,
                  label: '2 Departments',
                  sub: 'Across disciplines'
                },
                {
                  icon: UsersIcon,
                  label: '1,250+ Theses',
                  sub: 'In the repository'
                },
                {
                  icon: MapPinIcon,
                  label: 'Lubao, Pampanga',
                  sub: 'Philippines'
                },
                {
                  icon: GitBranchIcon,
                  label: 'Open Source',
                  sub: 'Community driven'
                }].
                map((item, i) =>
                <div
                  key={item.label}
                  className="bg-white/8 rounded-xl p-4 border border-white/10">
                  
                    <item.icon className="w-5 h-5 text-psu-gold mb-2" />
                    <p className="text-sm font-sans font-semibold text-white">
                      {item.label}
                    </p>
                    <p className="text-xs text-white/50 font-sans">
                      {item.sub}
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-psu-charcoal mb-4">
                Technology Stack
              </h2>
              <p className="text-gray-500 font-sans max-w-lg mx-auto">
                Built with modern tools and frameworks for reliable, scalable
                performance.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {techStack.map((tech, i) =>
              <motion.div
                key={tech.name}
                initial={{
                  opacity: 0,
                  y: 16
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.08
                }}
                className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-psu-gold/30 transition-colors">
                
                  <tech.icon className="w-6 h-6 text-psu-maroon mb-3" />
                  <p className="text-sm font-sans font-semibold text-psu-charcoal">
                    {tech.name}
                  </p>
                  <p className="text-xs text-gray-400 font-sans mt-0.5">
                    {tech.category}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-psu-charcoal mb-4">
                Team & Credits
              </h2>
              <p className="text-gray-500 font-sans">
                The people behind this project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {team.map((member, i) =>
              <motion.div
                key={member.name}
                initial={{
                  opacity: 0,
                  y: 16
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.1
                }}
                className="bg-white rounded-xl p-6 border border-gray-100 text-center shadow-sm">
                
                  <div className="w-14 h-14 rounded-full bg-psu-maroon/8 flex items-center justify-center mx-auto mb-4">
                    <UsersIcon className="w-6 h-6 text-psu-maroon" />
                  </div>
                  <p className="text-sm font-sans font-semibold text-psu-charcoal">
                    {member.name}
                  </p>
                  <p className="text-xs text-gray-500 font-sans mt-1">
                    {member.role}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>);

}