'use client'

import { motion } from 'framer-motion'
import { Building2, Calendar, MapPin, ExternalLink } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const experiences = [
  {
    company: "Macy's Inc.",
    role: 'Lead AI Engineer (Applied ML & GenAI Systems)',
    period: 'Mar 2025 - Present',
    location: 'United States',
    description:
      'Leading design and delivery of production-grade GenAI and AI platform systems supporting omnichannel operations.',
    highlights: [
      'Own end-to-end AI workflows including LLM-powered applications, RAG pipelines, and agent-style orchestration',
      'Designed agent-based and multi-agent workflows using LangChain and LangGraph',
      'Built FastAPI-based orchestration and inference services for real-time decisioning',
      'Implemented guardrails and control mechanisms for safe LLM behavior in production',
    ],
    technologies: [
      'LangChain',
      'LangGraph',
      'Amazon Bedrock',
      'FAISS',
      'Spark',
      'Databricks',
      'FastAPI',
    ],
    color: 'primary',
    current: true,
  },
  {
    company: 'Bank of America',
    role: 'Senior AI Engineer (Applied ML & GenAI)',
    period: 'Feb 2022 - Jan 2024',
    location: 'United States',
    description:
      'Worked as Senior Data Scientist embedded with RBWM teams, contributing across applied ML, data platforms, and enterprise analytics.',
    highlights: [
      'Designed and productionized ML workflows for fraud, customer intelligence, and risk decision systems',
      'Implemented end-to-end LLM pipelines using OpenAI, Azure OpenAI, and Amazon Bedrock',
      'Built feature engineering pipelines and model integration into enterprise systems',
      'Supported data management across Snowflake, BigQuery, and Databricks environments',
    ],
    technologies: [
      'Python',
      'XGBoost',
      'PySpark',
      'Azure OpenAI',
      'Snowflake',
      'BigQuery',
      'Docker',
    ],
    color: 'secondary',
    current: false,
  },
  {
    company: 'Apple Inc.',
    role: 'AI Engineer / Senior Data Specialist',
    period: 'Sep 2019 - Feb 2022',
    location: 'United States',
    description:
      'Full-time Infosys Data Engineer embedded with Apple\'s Retail Operations and Supply Chain Analytics teams.',
    highlights: [
      'Owned data correctness, KPI logic, and reliability of large-scale analytics pipelines',
      'Transitioned high-impact analytics workflows into production-grade ML systems',
      'Led and mentored a team of engineers as Subject Matter Expert (SME)',
      'Recognized with two Spot Awards for exemplary performance',
    ],
    technologies: [
      'Python',
      'SQL',
      'Azure ML',
      'SageMaker',
      'FastAPI',
      'Docker',
      'Kubernetes',
    ],
    color: 'accent',
    current: false,
  },
  {
    company: 'RSI Softech',
    role: 'GIS Data Analyst',
    period: 'Jun 2017 - Aug 2019',
    location: 'Hyderabad, India',
    description:
      'GIS Data Analyst for National Remote Sensing Center on AMRUT cities project.',
    highlights: [
      'Created city-level geodatabases using GIS tools and MySQL/SQL Server',
      'Performed spatial ETL workflows using Python, SQL, and GIS automation scripts',
      'Implemented data quality improvement processes improving dataset reliability by 30-40%',
    ],
    technologies: ['ArcGIS', 'QGIS', 'Python', 'MySQL', 'SQL Server'],
    color: 'primary',
    current: false,
  },
]

export function Experience() {
  return (
    <section id="experience" className="section relative overflow-hidden">
      <div className="container-custom mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="badge mb-4 inline-block">Experience</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              My Professional <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              8+ years of experience building AI systems across retail, banking, and technology
            </p>
          </div>
        </RevealOnScroll>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <RevealOnScroll
              key={index}
              delay={index * 0.1}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0
                    ? 'md:pr-[50%] md:text-right'
                    : 'md:pl-[50%] md:ml-auto'
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full -translate-x-1/2 border-4 border-background ${
                    exp.current ? 'bg-green-500 animate-pulse' : `bg-${exp.color}`
                  }`}
                  style={{
                    background: exp.current
                      ? '#22c55e'
                      : `hsl(var(--${exp.color}))`,
                    boxShadow: `0 0 20px hsl(var(--${exp.color}) / 0.5)`,
                  }}
                />

                {/* Content Card */}
                <motion.div
                  className={`glass rounded-2xl p-6 md:p-8 ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                  whileHover={{ y: -5 }}
                >
                  {/* Header */}
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : ''}`}>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                      {exp.current && (
                        <span className="px-2 py-0.5 bg-green-500/20 text-green-500 text-xs rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{exp.company}</h3>
                    <p className="text-primary font-medium mb-2">{exp.role}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className={`text-sm text-muted-foreground flex items-start gap-2 ${
                          index % 2 === 0 ? 'md:flex-row-reverse' : ''
                        }`}
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
