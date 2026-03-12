'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Sparkles, TrendingUp } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const experiences = [
  {
    company: "Macy's",
    logo: 'M',
    role: 'Lead AI Engineer',
    period: '2025 - Present',
    location: 'United States',
    gradient: 'linear-gradient(135deg, hsl(20 100% 70%), hsl(340 85% 70%))',
    glowColor: 'hsl(20 100% 60% / 0.15)',
    shadowColor: 'hsl(20 100% 50% / 0.2)',
    story: "Building the GenAI platform from scratch, architecting systems that help 500+ stores work smarter.",
    highlights: [
      { metric: 'Sub-2s', label: 'RAG Latency' },
      { metric: '60%', label: 'Time Saved' },
      { metric: '99.9%', label: 'Compliance' },
    ],
    stack: ['LangChain', 'LangGraph', 'Bedrock', 'Databricks', 'FastAPI'],
    current: true,
  },
  {
    company: 'Bank of America',
    logo: 'BA',
    role: 'Senior AI Engineer',
    period: '2022 - 2024',
    location: 'United States',
    gradient: 'linear-gradient(135deg, hsl(235 55% 63%), hsl(280 85% 75%))',
    glowColor: 'hsl(235 55% 63% / 0.15)',
    shadowColor: 'hsl(235 55% 50% / 0.2)',
    story: "Financial services taught me what high-stakes AI really means. Protecting billions in transactions daily.",
    highlights: [
      { metric: '35%', label: 'Less False Positives' },
      { metric: '200+', label: 'Analysts Served' },
      { metric: '10x', label: 'Faster Deploys' },
    ],
    stack: ['PyTorch', 'XGBoost', 'PySpark', 'Azure OpenAI', 'Snowflake'],
    current: false,
  },
  {
    company: 'Apple',
    logo: '',
    role: 'AI Engineer',
    period: '2019 - 2022',
    location: 'United States',
    gradient: 'linear-gradient(135deg, hsl(280 85% 75%), hsl(185 85% 55%))',
    glowColor: 'hsl(280 85% 65% / 0.15)',
    shadowColor: 'hsl(280 85% 55% / 0.2)',
    story: "Apple raised my bar for everything. My forecasts directly impacted inventory decisions globally.",
    highlights: [
      { metric: '50M+', label: 'Daily Transactions' },
      { metric: '25%', label: 'Better Forecasts' },
      { metric: '19', label: 'Engineers Mentored' },
    ],
    stack: ['Python', 'Azure ML', 'SageMaker', 'Prophet', 'Kubernetes'],
    current: false,
  },
  {
    company: 'RSI Softech',
    logo: 'RS',
    role: 'Data Engineer',
    period: '2017 - 2019',
    location: 'India',
    gradient: 'linear-gradient(135deg, hsl(185 85% 55%), hsl(155 75% 50%))',
    glowColor: 'hsl(185 85% 50% / 0.15)',
    shadowColor: 'hsl(185 85% 45% / 0.2)',
    story: "Where it all started. Processing satellite imagery for Smart Cities ignited my passion for data.",
    highlights: [
      { metric: 'TB-scale', label: 'Geodatabase' },
      { metric: '70%', label: 'Less Manual Work' },
      { metric: '95%', label: 'Data Quality' },
    ],
    stack: ['Python', 'PostgreSQL', 'ArcGIS', 'QGIS'],
    current: false,
  },
]

export function Experience() {
  return (
    <section id="experience" className="section relative overflow-hidden">
      {/* Background decorative elements */}
      <div
        className="float-shape"
        style={{
          width: '400px',
          height: '400px',
          background: 'hsl(var(--primary-glow) / 0.1)',
          top: '10%',
          right: '-10%',
        }}
      />
      <div
        className="float-shape"
        style={{
          width: '300px',
          height: '300px',
          background: 'hsl(var(--secondary-glow) / 0.08)',
          bottom: '20%',
          left: '-5%',
        }}
      />

      <div className="container-custom mx-auto relative z-10">
        <RevealOnScroll>
          <div className="section-header">
            <span className="badge mb-6">
              <Sparkles size={12} />
              Career Journey
            </span>
            <h2>
              Where I&apos;ve <span className="gradient-text">Made Impact</span>
            </h2>
            <p>
              8 years of building AI systems that matter, from startups to Fortune 500.
            </p>
          </div>
        </RevealOnScroll>

        {/* Timeline with cards */}
        <div className="relative">
          {/* Vertical gradient line */}
          <div className="timeline-line hidden md:block" />

          <div className="space-y-8 md:space-y-10 md:pl-16">
            {experiences.map((exp, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <motion.div
                  className="exp-card relative"
                  style={{
                    '--card-gradient': exp.gradient,
                    '--card-glow': `radial-gradient(ellipse at top left, ${exp.glowColor}, transparent 50%)`,
                    '--card-shadow': exp.shadowColor,
                  } as React.CSSProperties}
                  whileHover={{ x: 8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  {/* Timeline dot */}
                  <div
                    className="timeline-dot hidden md:block"
                    style={{
                      background: exp.gradient,
                      top: '2.5rem',
                    }}
                  />

                  <div className="p-6 md:p-8 relative z-10">
                    {/* Header row */}
                    <div className="flex flex-col md:flex-row md:items-start gap-5 mb-6">
                      {/* Company logo */}
                      <motion.div
                        className="company-logo shrink-0"
                        style={{ background: exp.gradient }}
                        whileHover={{ rotate: 5, scale: 1.08 }}
                      >
                        {exp.logo || ''}
                      </motion.div>

                      {/* Company info */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold tracking-tight">{exp.company}</h3>
                          {exp.current && (
                            <span
                              className="px-3 py-1 text-xs font-semibold rounded-full flex items-center gap-1.5"
                              style={{
                                background: 'hsl(var(--success) / 0.15)',
                                color: 'hsl(var(--success))',
                                border: '1px solid hsl(var(--success) / 0.3)',
                              }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                        <p
                          className="text-lg font-medium mb-3"
                          style={{ background: exp.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                        >
                          {exp.role}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
                          <span className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Story */}
                    <p className="text-base leading-relaxed mb-6" style={{ color: 'hsl(var(--foreground) / 0.8)' }}>
                      {exp.story}
                    </p>

                    {/* Metrics grid */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {exp.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          className="text-center p-4 rounded-xl"
                          style={{
                            background: 'hsl(var(--muted) / 0.5)',
                            border: '1px solid hsl(var(--border-muted))',
                          }}
                          whileHover={{
                            scale: 1.03,
                            background: 'hsl(var(--muted) / 0.8)',
                          }}
                        >
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <TrendingUp size={12} style={{ color: 'hsl(var(--success))' }} />
                            <span
                              className="text-xl font-bold"
                              style={{ background: exp.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                            >
                              {highlight.metric}
                            </span>
                          </div>
                          <span className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                            {highlight.label}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="tag"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
