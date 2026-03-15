'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight, MapPin, Calendar, Building2, Code2 } from 'lucide-react'
import Link from 'next/link'
import { TiltCard } from '@/components/ui/TiltCard'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const experiences = [
  {
    company: "Macy's",
    role: 'Lead AI Engineer',
    period: '2025 - Present',
    location: 'United States',
    description: 'Building the GenAI platform from scratch. Architecting RAG systems with sub-2s latency, reducing operational time by 60% across 500+ stores. Leading compliance-first AI implementations.',
    achievements: ['Sub-2s RAG latency', '60% time reduction', '99.9% compliance'],
    stack: ['LangChain', 'LangGraph', 'Bedrock', 'Databricks', 'FastAPI'],
    current: true,
  },
  {
    company: 'Bank of America',
    role: 'Senior AI Engineer',
    period: '2022 - 2024',
    location: 'United States',
    description: 'Built fraud detection systems protecting billions in daily transactions. Reduced false positives by 35% through ensemble ML models. Served 200+ analysts with real-time risk scoring.',
    achievements: ['35% fewer false positives', '200+ analysts served', '10x faster deploys'],
    stack: ['PyTorch', 'XGBoost', 'PySpark', 'Azure OpenAI', 'Snowflake'],
    current: false,
  },
  {
    company: 'Apple',
    role: 'AI Engineer',
    period: '2019 - 2022',
    location: 'United States',
    description: 'Developed demand forecasting models processing 50M+ daily transactions. Improved forecast accuracy by 25%, directly impacting global inventory decisions. Mentored 19 engineers.',
    achievements: ['50M+ daily transactions', '25% better forecasts', '19 engineers mentored'],
    stack: ['Python', 'Azure ML', 'SageMaker', 'Prophet', 'Kubernetes'],
    current: false,
  },
  {
    company: 'RSI Softech',
    role: 'Data Engineer',
    period: '2017 - 2019',
    location: 'India',
    description: 'Processed satellite imagery for Smart Cities initiative. Built TB-scale geodatabases, automated 70% of manual workflows, and maintained 95% data quality standards.',
    achievements: ['TB-scale data', '70% automation', '95% data quality'],
    stack: ['Python', 'PostgreSQL', 'ArcGIS', 'QGIS'],
    current: false,
  },
]

const projects = [
  {
    title: 'MyFoodTracker',
    tagline: 'AI-powered nutrition companion',
    description: 'Full-stack platform with a custom vision model trained on 100K+ food images. Users snap a photo and get instant nutritional breakdown with personalized recommendations.',
    technologies: ['TypeScript', 'React', 'TensorFlow', 'Node.js', 'D3.js'],
    github: 'https://github.com/yenugah80/mftweb',
    live: 'https://my-food-tracker.com',
    metrics: ['100K+ images', '94% accuracy'],
  },
  {
    title: 'Bias-Aware Hiring ML',
    tagline: 'Research publication',
    description: 'Predictive hiring models that achieve 97% accuracy while reducing demographic bias by 40%. Published at IBAC 2025.',
    technologies: ['Python', 'CatBoost', 'XGBoost', 'SHAP', 'Fairlearn'],
    github: 'https://github.com/yenugah80/Revolutionizing-Recruitment-Enhanced-Machine-Learning-Models-for-Bias-Mitigation-and-Efficiency',
    metrics: ['97% accuracy', '40% bias reduction'],
  },
  {
    title: 'Mermaid Maker',
    tagline: 'LLM-powered diagramming',
    description: 'Describe any diagram in plain English and get beautiful Mermaid syntax instantly. Over 500 diagrams generated.',
    technologies: ['TypeScript', 'GPT-4', 'Mermaid.js', 'React'],
    github: 'https://github.com/yenugah80/Mermaid-Maker',
    metrics: ['500+ diagrams', '8 types'],
  },
  {
    title: 'Multi-Agent AI System',
    tagline: 'Autonomous problem solving',
    description: 'Production-ready LangGraph architecture with autonomous agents that decompose problems, select tools, and self-correct.',
    technologies: ['LangGraph', 'LangChain', 'FastAPI', 'Bedrock'],
    github: 'https://github.com/yenugah80',
    metrics: ['5 agents', 'Self-correcting'],
  },
]

const easeOut = [0.16, 1, 0.3, 1]

export function WorkPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const headerY = useSpring(useTransform(scrollYProgress, [0, 0.2], [0, -50]), {
    stiffness: 100,
    damping: 30,
  })

  return (
    <main ref={containerRef} className="min-h-screen">
      {/* Hero Header */}
      <section className="min-h-[60vh] flex items-center px-6 md:px-12 lg:px-24 pt-32 pb-20 relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(210 100% 50% / 0.3) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />

        <motion.div className="max-w-4xl relative z-10" style={{ y: headerY }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-primary transition-colors mb-8 group"
            >
              <motion.span
                className="group-hover:-translate-x-1 transition-transform"
              >
                ←
              </motion.span>
              Back home
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.1, ease: easeOut }}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] mb-6"
          >
            My <span className="gradient-text">Work</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
            className="text-xl text-white/50 max-w-2xl"
          >
            8 years of building AI systems at scale, from satellite imagery to
            fraud detection to retail GenAI.
          </motion.p>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-12">
              <Building2 size={20} className="text-primary" />
              <h2 className="text-2xl font-semibold">Professional Experience</h2>
            </div>
          </RevealOnScroll>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <RevealOnScroll key={exp.company} delay={index * 0.1}>
                <TiltCard>
                  <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-500">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold">{exp.company}</h3>
                          {exp.current && (
                            <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-primary font-medium">{exp.role}</p>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-white/40">
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

                    {/* Description */}
                    <p className="text-white/50 leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {exp.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-sm font-medium rounded-full bg-primary/5 text-primary/80 border border-primary/10"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((tech, i) => (
                        <span key={i} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-12">
              <Code2 size={20} className="text-secondary" />
              <h2 className="text-2xl font-semibold">Side Projects & Research</h2>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <RevealOnScroll key={project.title} delay={index * 0.1}>
                <TiltCard>
                  <div className="h-full p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-500 flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <p className="text-xs text-primary uppercase tracking-wider mb-1">
                          {project.tagline}
                        </p>
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View live"
                            className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                          >
                            <ExternalLink size={18} className="text-white/40" />
                          </a>
                        )}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View code"
                          className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                        >
                          <Github size={18} className="text-white/40" />
                        </a>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    {project.metrics && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.metrics.map((metric, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 text-white/60"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>

          {/* GitHub CTA */}
          <RevealOnScroll>
            <div className="text-center mt-16">
              <a
                href="https://github.com/yenugah80"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white/40 hover:text-primary transition-colors group"
              >
                <Github size={20} />
                <span>More on GitHub</span>
                <ArrowUpRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  )
}
