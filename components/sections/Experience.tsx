'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, ChevronRight } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const experiences = [
  {
    company: "Macy's",
    role: 'Lead AI Engineer',
    period: '2025 - Present',
    location: 'United States',
    accentColor: 'primary',
    story: "Building the GenAI platform from scratch, architecting systems that help 500+ stores work smarter. The challenge isn't just technical; it's about building AI that people actually trust and use every day.",
    achievements: [
      'Designed RAG architecture serving millions of queries with sub-2s latency',
      'Built AI agents that handle complex reasoning, saving analysts 60% of their time',
      'Created safety guardrails achieving 99.9% response compliance',
    ],
    stack: ['LangChain', 'LangGraph', 'Bedrock', 'Databricks', 'FastAPI'],
    current: true,
  },
  {
    company: 'Bank of America',
    role: 'Senior AI Engineer',
    period: '2022 - 2024',
    location: 'United States',
    accentColor: 'accent',
    story: "Financial services taught me what high-stakes AI really means. When your model flags a transaction, you're either protecting someone's savings or blocking their groceries.",
    achievements: [
      'Built fraud detection models reducing false positives by 35%',
      'Led document AI initiative serving 200+ analysts daily',
      'Reduced model deployment cycles from weeks to hours',
    ],
    stack: ['PyTorch', 'XGBoost', 'PySpark', 'Azure OpenAI', 'Snowflake'],
    current: false,
  },
  {
    company: 'Apple',
    role: 'AI Engineer',
    period: '2019 - 2022',
    location: 'United States',
    accentColor: 'secondary',
    story: "Apple raised my bar for everything. Working on retail analytics meant my dashboards reached executives, and my forecasts directly impacted inventory decisions.",
    achievements: [
      'Built pipelines processing 50M+ daily transactions globally',
      'Improved demand forecasting accuracy by 25%',
      'Mentored 19 engineers across multiple teams',
    ],
    stack: ['Python', 'Azure ML', 'SageMaker', 'Prophet', 'Kubernetes'],
    current: false,
  },
  {
    company: 'RSI Softech',
    role: 'Data Engineer',
    period: '2017 - 2019',
    location: 'India',
    accentColor: 'warm',
    story: "Where it all started. Processing satellite imagery for Smart Cities taught me to love working with messy, large-scale data.",
    achievements: [
      'Designed TB-scale geodatabase architecture',
      'Automated workflows, cutting manual processing by 70%',
      'Improved data quality from 60% to 95%',
    ],
    stack: ['Python', 'PostgreSQL', 'ArcGIS', 'QGIS'],
    current: false,
  },
]

const accentStyles: Record<string, { border: string; bg: string; text: string }> = {
  primary: {
    border: 'hsl(var(--primary) / 0.4)',
    bg: 'hsl(var(--primary) / 0.08)',
    text: 'hsl(var(--primary))',
  },
  secondary: {
    border: 'hsl(var(--secondary) / 0.4)',
    bg: 'hsl(var(--secondary) / 0.08)',
    text: 'hsl(var(--secondary))',
  },
  accent: {
    border: 'hsl(var(--accent) / 0.4)',
    bg: 'hsl(var(--accent) / 0.08)',
    text: 'hsl(var(--accent))',
  },
  warm: {
    border: 'hsl(var(--warm-light) / 0.4)',
    bg: 'hsl(var(--warm-light) / 0.08)',
    text: 'hsl(var(--warm-light))',
  },
}

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-custom mx-auto">
        <RevealOnScroll>
          <div className="section-header">
            <span className="badge mb-6">Journey</span>
            <h2>
              Where I&apos;ve <span className="gradient-text">Made Impact</span>
            </h2>
            <p>
              Each role taught me something different about building AI that matters.
            </p>
          </div>
        </RevealOnScroll>

        {/* Experience cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const accent = accentStyles[exp.accentColor]
            return (
              <RevealOnScroll key={index} delay={index * 0.08}>
                <motion.div
                  className="card-interactive p-6 md:p-8"
                  style={{ borderLeftWidth: '3px', borderLeftColor: accent.border }}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold tracking-tight">{exp.company}</h3>
                        {exp.current && (
                          <span
                            className="px-2.5 py-1 text-xs font-medium rounded-full"
                            style={{ background: 'hsl(var(--success) / 0.12)', color: 'hsl(var(--success))' }}
                          >
                            Current
                          </span>
                        )}
                      </div>
                      <p className="font-medium" style={{ color: accent.text }}>{exp.role}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1 text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
                      <span className="flex items-center gap-2">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Story */}
                  <p className="leading-relaxed mb-6" style={{ color: 'hsl(var(--foreground-muted))' }}>
                    {exp.story}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2.5 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3 group"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1, x: 2 }}
                        transition={{ duration: 0.15 }}
                      >
                        <ChevronRight
                          size={16}
                          className="mt-0.5 shrink-0 transition-transform group-hover:translate-x-0.5"
                          style={{ color: accent.text }}
                        />
                        <span className="text-sm" style={{ color: 'hsl(var(--foreground) / 0.85)' }}>
                          {achievement}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech, i) => (
                      <span key={i} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
