'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Briefcase } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const experiences = [
  {
    company: "Macy's",
    role: 'Lead AI Engineer',
    period: '2025 - Present',
    location: 'United States',
    description: "Building the GenAI platform from scratch. Architecting RAG systems with sub-2s latency, reducing operational time by 60% across 500+ stores.",
    stack: ['LangChain', 'LangGraph', 'Bedrock', 'Databricks', 'FastAPI'],
    current: true,
  },
  {
    company: 'Bank of America',
    role: 'Senior AI Engineer',
    period: '2022 - 2024',
    location: 'United States',
    description: "Built fraud detection systems protecting billions in daily transactions. Reduced false positives by 35% through ensemble ML models.",
    stack: ['PyTorch', 'XGBoost', 'PySpark', 'Azure OpenAI', 'Snowflake'],
    current: false,
  },
  {
    company: 'Apple',
    role: 'AI Engineer',
    period: '2019 - 2022',
    location: 'United States',
    description: "Developed demand forecasting models processing 50M+ daily transactions. Improved forecast accuracy by 25%, impacting global inventory.",
    stack: ['Python', 'Azure ML', 'SageMaker', 'Prophet', 'Kubernetes'],
    current: false,
  },
  {
    company: 'RSI Softech',
    role: 'Data Engineer',
    period: '2017 - 2019',
    location: 'India',
    description: "Processed satellite imagery for Smart Cities initiative. Built TB-scale geodatabases, automated 70% of manual workflows.",
    stack: ['Python', 'PostgreSQL', 'ArcGIS', 'QGIS'],
    current: false,
  },
]

export function Experience() {
  return (
    <section id="experience" className="section relative overflow-hidden">
      <div className="container-custom mx-auto relative z-10">
        <RevealOnScroll>
          <div className="section-header">
            <span className="badge mb-6">
              <Briefcase size={12} />
              Experience
            </span>
            <h2>
              Where I&apos;ve <span className="gradient-text">Built</span>
            </h2>
          </div>
        </RevealOnScroll>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          <div className="timeline-line hidden md:block" />

          <div className="space-y-8 md:pl-16">
            {experiences.map((exp, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <motion.div
                  className="exp-card"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                  {/* Timeline dot */}
                  <div
                    className="timeline-dot hidden md:block"
                    style={{ top: '2rem' }}
                  />

                  <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-semibold">{exp.company}</h3>
                        {exp.current && (
                          <span className="company-badge">
                            <span className="w-1.5 h-1.5 rounded-full bg-current" />
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted">
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

                    <p className="text-primary font-medium mb-3">{exp.role}</p>

                    <p className="text-muted leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((tech, i) => (
                        <span key={i} className="tag">
                          {tech}
                        </span>
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
