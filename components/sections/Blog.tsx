'use client'

import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, Calendar, Clock, FileText } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

// Static articles as fallback (Medium RSS can be flaky)
const articles = [
  {
    title: 'Building Production-Ready RAG Systems',
    excerpt:
      'A comprehensive guide to designing and deploying Retrieval-Augmented Generation pipelines that scale in enterprise environments.',
    date: '2024',
    readTime: '8 min read',
    link: 'https://harikayenuga.medium.com',
  },
  {
    title: 'Multi-Agent AI: From Concept to Production',
    excerpt:
      'Exploring the architecture and implementation patterns for building reliable multi-agent systems using LangGraph.',
    date: '2024',
    readTime: '10 min read',
    link: 'https://harikayenuga.medium.com',
  },
  {
    title: 'The Future of AI in Retail',
    excerpt:
      'How GenAI and LLMs are transforming customer experience and operational efficiency in the retail industry.',
    date: '2024',
    readTime: '6 min read',
    link: 'https://harikayenuga.medium.com',
  },
]

const research = {
  title: 'Revolutionizing Recruitment: Enhanced Machine Learning Models for Bias Mitigation and Efficiency',
  venue: 'International Business Analytics Conference (IBAC) 2025',
  status: 'Submitted to Empirical Economics Letters (EEL)',
  description:
    'Engineered end-to-end predictive hiring models achieving 97% accuracy while reducing bias in candidate selection.',
  link: 'https://github.com/yenugah80',
}

export function Blog() {
  return (
    <section id="blog" className="section relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="container-custom mx-auto relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="badge-accent mb-4 inline-block">Blog & Research</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Thoughts & <span className="gradient-text">Publications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sharing knowledge and insights on AI, ML, and data science
            </p>
          </div>
        </RevealOnScroll>

        {/* Research Publication */}
        <RevealOnScroll>
          <motion.div
            className="glass rounded-3xl p-8 md:p-10 mb-12 gradient-border"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                <FileText className="w-7 h-7 text-accent" />
              </div>
              <div>
                <span className="badge-accent text-xs mb-2 inline-block">
                  Research Publication
                </span>
                <h3 className="text-xl md:text-2xl font-bold">{research.title}</h3>
              </div>
            </div>
            <div className="ml-0 md:ml-[4.5rem]">
              <p className="text-primary font-medium mb-2">{research.venue}</p>
              <p className="text-sm text-muted-foreground mb-4">{research.status}</p>
              <p className="text-muted-foreground mb-6">{research.description}</p>
              <motion.a
                href={research.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View on GitHub
                <ExternalLink size={16} />
              </motion.a>
            </div>
          </motion.div>
        </RevealOnScroll>

        {/* Blog Articles */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {articles.map((article, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <motion.a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-6 h-full hover-card group block"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:glow transition-all duration-300">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Read on Medium
                  <ExternalLink size={14} />
                </div>
              </motion.a>
            </RevealOnScroll>
          ))}
        </div>

        {/* View All */}
        <RevealOnScroll>
          <div className="text-center">
            <motion.a
              href="https://harikayenuga.medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen size={18} />
              Read More on Medium
              <ExternalLink size={16} />
            </motion.a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
