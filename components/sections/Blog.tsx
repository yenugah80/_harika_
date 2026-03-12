'use client'

import { motion } from 'framer-motion'
import { ExternalLink, FileText, ArrowRight } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const articles = [
  {
    title: 'Building Production-Ready RAG Systems',
    description: 'The architecture patterns, pitfalls, and optimizations that make RAG work at enterprise scale.',
    link: 'https://harikayenuga.medium.com',
    accent: 'primary',
  },
  {
    title: 'Multi-Agent AI: From Concept to Production',
    description: 'How I built reliable multi-agent systems using LangGraph, and what I learned along the way.',
    link: 'https://harikayenuga.medium.com',
    accent: 'secondary',
  },
  {
    title: 'The Future of AI in Retail',
    description: 'Where GenAI and LLMs are transforming customer experience and operational efficiency.',
    link: 'https://harikayenuga.medium.com',
    accent: 'accent',
  },
]

const research = {
  title: 'Revolutionizing Recruitment: ML Models for Bias Mitigation',
  venue: 'IBAC 2025',
  description: 'Predictive hiring models achieving 97% accuracy while reducing demographic bias by 40%. A step toward fairer AI in HR.',
  link: 'https://github.com/yenugah80',
}

const accentMap: Record<string, { bg: string; border: string; text: string }> = {
  primary: {
    bg: 'hsl(var(--primary) / 0.1)',
    border: 'hsl(var(--primary) / 0.25)',
    text: 'hsl(var(--primary))',
  },
  secondary: {
    bg: 'hsl(var(--secondary) / 0.1)',
    border: 'hsl(var(--secondary) / 0.25)',
    text: 'hsl(var(--secondary))',
  },
  accent: {
    bg: 'hsl(var(--accent) / 0.1)',
    border: 'hsl(var(--accent) / 0.25)',
    text: 'hsl(var(--accent))',
  },
}

export function Blog() {
  return (
    <section id="blog" className="section">
      <div className="container-custom mx-auto">
        <RevealOnScroll>
          <div className="section-header">
            <span className="badge mb-6">Writing</span>
            <h2>
              Blog & <span className="gradient-text">Research</span>
            </h2>
            <p>
              Sharing what I learn about building AI systems that work in the real world.
            </p>
          </div>
        </RevealOnScroll>

        {/* Research highlight */}
        <RevealOnScroll>
          <motion.div
            className="card-interactive p-6 md:p-8 mb-8 relative"
            style={{ borderLeftWidth: '3px', borderLeftColor: 'hsl(var(--secondary) / 0.4)' }}
            whileHover={{ x: 3 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            {/* Decorative gradient */}
            <div
              className="absolute top-0 right-0 w-48 h-48 rounded-bl-full opacity-50"
              style={{ background: 'radial-gradient(circle at top right, hsl(var(--secondary) / 0.08), transparent 70%)' }}
            />

            <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: 'hsl(var(--secondary) / 0.1)',
                  border: '1px solid hsl(var(--secondary) / 0.25)',
                }}
              >
                <FileText size={24} className="text-secondary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span
                    className="px-3 py-1 text-xs font-medium rounded-full"
                    style={{
                      background: 'hsl(var(--secondary) / 0.1)',
                      color: 'hsl(var(--secondary))',
                    }}
                  >
                    {research.venue}
                  </span>
                  <span className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    Published Research
                  </span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight mb-3">{research.title}</h3>
                <p className="leading-relaxed mb-5" style={{ color: 'hsl(var(--foreground-muted))' }}>
                  {research.description}
                </p>
                <motion.a
                  href={research.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-secondary link-underline"
                  whileHover={{ x: 3 }}
                >
                  View paper
                  <ArrowRight size={14} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </RevealOnScroll>

        {/* Articles */}
        <div className="grid md:grid-cols-3 gap-5">
          {articles.map((article, index) => {
            const colors = accentMap[article.accent]
            return (
              <RevealOnScroll key={index} delay={index * 0.08}>
                <motion.a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-interactive p-6 block h-full group"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                    style={{
                      background: colors.bg,
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    <FileText size={18} style={{ color: colors.text }} />
                  </div>

                  <h3 className="font-semibold tracking-tight mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'hsl(var(--foreground-muted))' }}>
                    {article.description}
                  </p>

                  <span
                    className="text-xs font-medium inline-flex items-center gap-2"
                    style={{ color: colors.text }}
                  >
                    Read on Medium
                    <ExternalLink
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </span>
                </motion.a>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
