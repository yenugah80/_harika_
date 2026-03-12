'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const experiences = [
  {
    company: "Macy's Inc.",
    role: 'Lead AI Engineer',
    period: 'Mar 2025 - Present',
    location: 'United States',
    description: 'Building enterprise GenAI platform from ground up. Architecting RAG systems, autonomous AI agents, and LLM infrastructure serving 500+ retail stores.',
    highlights: [
      'Built RAG architecture with sub-2s latency across millions of documents',
      'Created AI agents that reduced analyst workload by 60%',
      'Achieved 99.9% response safety through custom guardrails',
    ],
    technologies: ['LangChain', 'LangGraph', 'Bedrock', 'FAISS', 'Databricks', 'FastAPI'],
    current: true,
  },
  {
    company: 'Bank of America',
    role: 'Senior AI Engineer',
    period: 'Feb 2022 - Jan 2024',
    location: 'United States',
    description: 'Led ML engineering for financial risk systems. Built fraud detection models and document AI systems processing petabytes of transaction data.',
    highlights: [
      'Reduced false positive alerts by 35% while improving fraud catch rate',
      'Built document AI serving 200+ daily users',
      'Cut model deployment time from weeks to hours',
    ],
    technologies: ['PyTorch', 'XGBoost', 'PySpark', 'Azure OpenAI', 'Snowflake', 'MLflow'],
    current: false,
  },
  {
    company: 'Apple Inc.',
    role: 'AI Engineer',
    period: 'Sep 2019 - Feb 2022',
    location: 'United States',
    description: 'Built retail analytics and forecasting systems for global store operations. Led data engineering initiatives processing 50M+ daily transactions.',
    highlights: [
      'Improved demand forecasting accuracy by 25%',
      'Built real-time analytics for global retail operations',
      'Mentored 19 engineers across multiple teams',
    ],
    technologies: ['Python', 'Azure ML', 'SageMaker', 'Prophet', 'Kubernetes', 'Tableau'],
    current: false,
  },
  {
    company: 'RSI Softech',
    role: 'Data Engineer',
    period: 'Jun 2017 - Aug 2019',
    location: 'India',
    description: 'Developed geospatial data systems for Smart Cities initiative. Built TB-scale geodatabases and automated satellite imagery processing.',
    highlights: [
      'Designed TB-scale geodatabase architecture',
      'Automated processing, cutting manual work by 70%',
      'Improved data quality from 60% to 95%',
    ],
    technologies: ['Python', 'PostgreSQL', 'ArcGIS', 'QGIS', 'ETL'],
    current: false,
  },
]

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-custom mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-10">
            <span className="badge mb-4 inline-block">Experience</span>
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              Professional Journey
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              From geospatial data engineering to leading GenAI platforms across retail, banking, and technology.
            </p>
          </div>
        </RevealOnScroll>

        {/* Timeline */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className={`glass rounded-xl p-6 ${exp.current ? 'border-l-2 border-emerald-500' : ''}`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-medium">{exp.company}</h3>
                      {exp.current && (
                        <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-500 text-xs font-medium rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.role}</p>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{exp.period}</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-3">
                  {exp.description}
                </p>

                <ul className="space-y-1 mb-4">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-foreground mt-1">-</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs bg-muted rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
