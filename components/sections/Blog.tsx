'use client'

import { ExternalLink, FileText } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const articles = [
  {
    title: 'Building Production-Ready RAG Systems',
    description: 'Guide to designing and deploying RAG pipelines that scale in enterprise environments.',
    link: 'https://harikayenuga.medium.com',
  },
  {
    title: 'Multi-Agent AI: From Concept to Production',
    description: 'Architecture and implementation patterns for reliable multi-agent systems using LangGraph.',
    link: 'https://harikayenuga.medium.com',
  },
  {
    title: 'The Future of AI in Retail',
    description: 'How GenAI and LLMs are transforming customer experience and operational efficiency.',
    link: 'https://harikayenuga.medium.com',
  },
]

const research = {
  title: 'Revolutionizing Recruitment: ML Models for Bias Mitigation',
  venue: 'IBAC 2025',
  description: 'Predictive hiring models achieving 97% accuracy while reducing demographic bias by 40%.',
  link: 'https://github.com/yenugah80',
}

export function Blog() {
  return (
    <section id="blog" className="section">
      <div className="container-custom mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-10">
            <span className="badge mb-4 inline-block">Writing</span>
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              Blog & Research
            </h2>
          </div>
        </RevealOnScroll>

        {/* Research */}
        <RevealOnScroll>
          <div className="glass rounded-xl p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <FileText size={18} className="text-muted-foreground" />
              </div>
              <div className="flex-1">
                <span className="text-xs text-muted-foreground">{research.venue}</span>
                <h3 className="text-lg font-medium mb-1">{research.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{research.description}</p>
                <a
                  href={research.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  View paper <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Articles */}
        <div className="grid md:grid-cols-3 gap-4">
          {articles.map((article, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-5 block hover:bg-card transition-colors group"
              >
                <h3 className="font-medium mb-2 group-hover:text-foreground transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {article.description}
                </p>
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors inline-flex items-center gap-1">
                  Read on Medium <ExternalLink size={12} />
                </span>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
