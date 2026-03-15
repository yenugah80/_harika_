'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, FileText, PenTool, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { NewsletterSignup } from '@/components/NewsletterSignup'
import { TiltCard } from '@/components/ui/TiltCard'

interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  image?: string
  readingTime: string
}

interface Props {
  initialPosts: BlogPostMeta[]
}

const research = [
  {
    title: 'Revolutionizing Recruitment: ML Models for Bias Mitigation',
    venue: 'IBAC 2025',
    description: 'Predictive hiring models achieving 97% accuracy while reducing demographic bias by 40%. A step toward fairer AI in HR.',
    link: 'https://github.com/yenugah80/Revolutionizing-Recruitment-Enhanced-Machine-Learning-Models-for-Bias-Mitigation-and-Efficiency',
    tags: ['Machine Learning', 'Fairness', 'HR Tech'],
  },
]

const externalArticles = [
  {
    title: 'Building Production-Ready RAG Systems',
    description: 'The architecture patterns, pitfalls, and optimizations that make RAG work at enterprise scale.',
    link: 'https://harikayenuga.medium.com',
    tags: ['RAG', 'LLMs', 'Architecture'],
  },
  {
    title: 'Multi-Agent AI: From Concept to Production',
    description: 'How I built reliable multi-agent systems using LangGraph, and what I learned along the way.',
    link: 'https://harikayenuga.medium.com',
    tags: ['LangGraph', 'Agents', 'Production'],
  },
  {
    title: 'The Future of AI in Retail',
    description: 'Where GenAI and LLMs are transforming customer experience and operational efficiency.',
    link: 'https://harikayenuga.medium.com',
    tags: ['Retail', 'GenAI', 'Strategy'],
  },
]

const categories = ['All', 'Blog', 'Research', 'External']

const easeOut = [0.16, 1, 0.3, 1]

export function BlogList({ initialPosts }: Props) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-primary transition-colors mb-8 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back home
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] mb-4">
            Writing & <span className="gradient-text">Research</span>
          </h1>
          <p className="text-lg text-white/50 max-w-xl">
            Thoughts on AI, machine learning, and building systems that work in production.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'text-white/40 hover:text-white/70 border border-transparent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Research Section */}
        <AnimatePresence mode="wait">
          {(activeCategory === 'All' || activeCategory === 'Research') && (
            <motion.div
              key="research"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mb-12"
            >
              <div className="flex items-center gap-2 mb-6">
                <FileText size={18} className="text-secondary" />
                <h2 className="text-lg font-medium text-white/70">Research</h2>
              </div>

              {research.map((paper) => (
                <TiltCard key={paper.title}>
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 md:p-8 rounded-2xl bg-gradient-to-br from-secondary/5 to-transparent border border-secondary/20 hover:border-secondary/40 transition-all duration-500 group"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary">
                        {paper.venue}
                      </span>
                      <ExternalLink size={18} className="text-white/30 group-hover:text-secondary transition-colors" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-secondary transition-colors">
                      {paper.title}
                    </h3>
                    <p className="text-white/50 mb-4">{paper.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {paper.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </a>
                </TiltCard>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Blog Posts */}
        <AnimatePresence mode="wait">
          {(activeCategory === 'All' || activeCategory === 'Blog') && initialPosts.length > 0 && (
            <motion.div
              key="blog"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mb-12"
            >
              <div className="flex items-center gap-2 mb-6">
                <PenTool size={18} className="text-primary" />
                <h2 className="text-lg font-medium text-white/70">Blog Posts</h2>
              </div>

              <div className="space-y-0">
                {initialPosts.map((post, index) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Link href={`/blog/${post.slug}/`}>
                      <div className="group py-6 border-t border-white/[0.06] hover:border-white/[0.12] transition-colors">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-white/40 line-clamp-2 mb-3 text-sm">
                              {post.description}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-white/30">
                              <span>{formatDate(post.date)}</span>
                              <span className="w-1 h-1 rounded-full bg-white/20" />
                              <span>{post.readingTime}</span>
                            </div>
                          </div>
                          <ArrowUpRight
                            className={`w-5 h-5 text-white/20 group-hover:text-primary transition-all duration-300 shrink-0 ${
                              hoveredIndex === index ? 'translate-x-0.5 -translate-y-0.5' : ''
                            }`}
                          />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* External Articles */}
        <AnimatePresence mode="wait">
          {(activeCategory === 'All' || activeCategory === 'External') && (
            <motion.div
              key="external"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mb-12"
            >
              <div className="flex items-center gap-2 mb-6">
                <ExternalLink size={18} className="text-accent" />
                <h2 className="text-lg font-medium text-white/70">External Articles</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {externalArticles.map((article, index) => (
                  <motion.a
                    key={article.title}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
                  >
                    <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-white/40 mb-3">{article.description}</p>
                    <div className="flex items-center gap-2 text-xs text-accent">
                      <span>Read on Medium</span>
                      <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty state */}
        {activeCategory === 'Blog' && initialPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-20 text-center"
          >
            <p className="text-white/40">No blog posts yet. Check back soon.</p>
          </motion.div>
        )}

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-16 border-t border-white/[0.06]"
        >
          <NewsletterSignup variant="card" />
        </motion.div>
      </div>
    </div>
  )
}
