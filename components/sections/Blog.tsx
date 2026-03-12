'use client'

import { motion } from 'framer-motion'
import { ExternalLink, FileText, PenLine, ArrowRight } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const articles = [
  {
    title: 'Building Production-Ready RAG Systems',
    description: 'The architecture patterns, pitfalls, and optimizations that make RAG work at enterprise scale.',
    link: 'https://harikayenuga.medium.com',
    color: 'primary',
  },
  {
    title: 'Multi-Agent AI: From Concept to Production',
    description: 'How I built reliable multi-agent systems using LangGraph, and what I learned along the way.',
    link: 'https://harikayenuga.medium.com',
    color: 'secondary',
  },
  {
    title: 'The Future of AI in Retail',
    description: 'Where GenAI and LLMs are transforming customer experience and operational efficiency.',
    link: 'https://harikayenuga.medium.com',
    color: 'accent',
  },
]

const research = {
  title: 'Revolutionizing Recruitment: ML Models for Bias Mitigation',
  venue: 'IBAC 2025',
  description: 'Predictive hiring models achieving 97% accuracy while reducing demographic bias by 40%. A step toward fairer AI in HR.',
  link: 'https://github.com/yenugah80',
}

export function Blog() {
  return (
    <section id="blog" className="section">
      <div className="container-custom mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-14">
            <span className="badge mb-4">Writing</span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Blog & <span className="gradient-text">Research</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sharing what I learn about building AI systems that work in the real world.
            </p>
          </div>
        </RevealOnScroll>

        {/* Research highlight */}
        <RevealOnScroll>
          <motion.div
            className="card-3d p-6 md:p-8 mb-8 border-l-4 border-l-secondary relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-full" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                <FileText size={24} className="text-secondary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full">
                    {research.venue}
                  </span>
                  <span className="text-xs text-muted-foreground">Published Research</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{research.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{research.description}</p>
                <motion.a
                  href={research.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  View paper
                  <ArrowRight size={14} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </RevealOnScroll>

        {/* Articles */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <motion.a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-3d p-6 block h-full group"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: `hsl(var(--${article.color}) / 0.1)`,
                    borderWidth: '1px',
                    borderColor: `hsl(var(--${article.color}) / 0.2)`,
                  }}
                >
                  <PenLine
                    size={18}
                    style={{ color: `hsl(var(--${article.color}))` }}
                  />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {article.description}
                </p>
                <span
                  className="text-xs font-medium inline-flex items-center gap-1.5 transition-colors"
                  style={{ color: `hsl(var(--${article.color}))` }}
                >
                  Read on Medium
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </motion.a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
