'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const experiences = [
  {
    company: "Macy's",
    role: 'Lead AI Engineer',
    period: '2025 - Present',
    location: 'United States',
    gradient: 'from-red-500/20 to-orange-500/20',
    borderColor: 'border-l-red-500',
    story: "This is where it all comes together. I'm building the GenAI platform from scratch, architecting systems that help 500+ stores work smarter. The challenge isn't just technical; it's about building AI that people actually trust and use every day.",
    achievements: [
      'Designed RAG architecture serving millions of queries with sub-2s latency',
      'Built AI agents that handle complex reasoning and save analysts 60% of their time',
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
    gradient: 'from-blue-500/20 to-indigo-500/20',
    borderColor: 'border-l-blue-500',
    story: "Financial services taught me what high-stakes AI really means. When your model flags a transaction, you're either protecting someone's savings or blocking their groceries. That pressure shaped how I approach every system I build.",
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
    gradient: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-l-purple-500',
    story: "Apple raised my bar for everything. Working on retail analytics meant my dashboards reached executives, and my forecasts directly impacted inventory decisions. I learned that at scale, small improvements create massive impact.",
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
    gradient: 'from-teal-500/20 to-cyan-500/20',
    borderColor: 'border-l-teal-500',
    story: "Where it all started. Processing satellite imagery for Smart Cities taught me to love working with messy, large-scale data. Building something that urban planners actually used to improve cities? That hooked me on data for good.",
    achievements: [
      'Designed TB-scale geodatabase architecture',
      'Automated workflows, cutting manual processing by 70%',
      'Improved data quality from 60% to 95%',
    ],
    stack: ['Python', 'PostgreSQL', 'ArcGIS', 'QGIS'],
    current: false,
  },
]

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-custom mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-14">
            <span className="badge mb-4">Journey</span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Where I&apos;ve <span className="gradient-text">Made Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each role taught me something different about building AI that matters.
              Here&apos;s the story of how I got here.
            </p>
          </div>
        </RevealOnScroll>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50 hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <motion.div
                  className={`relative md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute top-8 hidden md:block ${
                    index % 2 === 0 ? 'right-0 translate-x-1/2 md:-right-4' : 'left-0 -translate-x-1/2 md:-left-4'
                  }`}>
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${exp.gradient} border-2 border-background`} />
                  </div>

                  {/* Card */}
                  <div className={`card-3d p-6 md:p-8 border-l-4 ${exp.borderColor}`}>
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-xl font-semibold">{exp.company}</h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-emerald-500/20 text-emerald-400 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-primary font-medium">{exp.role}</p>
                      </div>
                      <div className="flex flex-col items-end text-sm text-muted-foreground">
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

                    {/* Story */}
                    <p className="text-muted-foreground leading-relaxed mb-5 italic">
                      &ldquo;{exp.story}&rdquo;
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2 mb-5">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <ArrowUpRight size={16} className="text-primary mt-0.5 shrink-0" />
                          <span className="text-sm text-foreground/80">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded-full border border-border/50"
                        >
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
