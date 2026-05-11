'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight, Calendar, MapPin } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const ease = [0.25, 0.4, 0.25, 1]

const experiences = [
  {
    company: "Macy's",
    role: 'Lead AI Engineer',
    period: '2025 - Present',
    location: 'United States',
    description: 'Building GenAI platforms and RAG workflows for large-scale retail operations.',
    achievements: ['Sub-2s RAG latency', '60% time reduction', '99.9% compliance'],
    stack: ['LangChain', 'LangGraph', 'Bedrock', 'Databricks'],
    current: true,
  },
  {
    company: 'Bank of America',
    role: 'Senior AI Engineer',
    period: '2022 - 2024',
    location: 'United States',
    description: 'Built fraud detection systems and analyst tools for high-stakes financial decisioning.',
    achievements: ['35% fewer false positives', '200+ analysts served'],
    stack: ['PyTorch', 'XGBoost', 'PySpark', 'Azure OpenAI'],
    current: false,
  },
  {
    company: 'Apple',
    role: 'AI Engineer',
    period: '2019 - 2022',
    location: 'United States',
    description: 'Developed demand forecasting models and ML workflows across large transaction volumes.',
    achievements: ['50M+ transactions', '25% better forecasts'],
    stack: ['Python', 'Azure ML', 'SageMaker', 'Kubernetes'],
    current: false,
  },
  {
    company: 'RSI Softech',
    role: 'Data Engineer',
    period: '2017 - 2019',
    location: 'India',
    description: 'Processed satellite imagery for Smart Cities programs and built large-scale geospatial workflows.',
    achievements: ['TB-scale data', '70% automation'],
    stack: ['Python', 'PostgreSQL', 'ArcGIS'],
    current: false,
  },
]

const projects = [
  {
    title: 'MyFoodTracker',
    tagline: 'AI-powered nutrition companion',
    description: 'Full-stack nutrition platform using computer vision to identify meals and return nutritional insights.',
    technologies: ['TypeScript', 'React', 'TensorFlow', 'Node.js'],
    github: 'https://github.com/yenugah80/mftweb',
    live: 'https://my-food-tracker.com',
    featured: true,
  },
  {
    title: 'Bias-Aware Hiring ML',
    tagline: 'Research publication',
    description: 'Predictive hiring research focused on model accuracy, fairness, and measurable bias reduction. Published at IBAC 2025.',
    technologies: ['Python', 'CatBoost', 'XGBoost', 'SHAP'],
    github: 'https://github.com/yenugah80/Revolutionizing-Recruitment-Enhanced-Machine-Learning-Models-for-Bias-Mitigation-and-Efficiency',
    featured: true,
  },
  {
    title: 'Self-Healing ML Pipeline',
    tagline: 'Research publication',
    description: 'A resilient ML pipeline pattern for drift detection, failure monitoring, and automated recovery workflows.',
    technologies: ['Python', 'MLOps', 'Monitoring', 'Automation'],
    github: 'https://github.com/yenugah80/Self-Healing-ML-Pipeline',
    featured: true,
  },
  {
    title: 'Mermaid Maker',
    tagline: 'LLM-powered diagramming',
    description: 'A diagramming tool that turns plain-language prompts into Mermaid syntax.',
    technologies: ['TypeScript', 'GPT-4', 'Mermaid.js', 'React'],
    github: 'https://github.com/yenugah80/Mermaid-Maker',
    featured: false,
  },
  {
    title: 'Multi-Agent AI System',
    tagline: 'Autonomous problem solving',
    description: 'A LangGraph architecture for multi-agent planning, decomposition, and correction workflows.',
    technologies: ['LangGraph', 'LangChain', 'FastAPI'],
    github: 'https://github.com/yenugah80',
    featured: false,
  },
]

function ExperienceCard({
  company,
  role,
  period,
  location,
  description,
  achievements,
  stack,
  current,
  index,
}: (typeof experiences)[0] & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      className={cn(
        'group relative p-6 md:p-8 rounded-2xl',
        'bg-white/[0.02] border border-white/[0.06]',
        'transition-all duration-500',
        'hover:bg-white/[0.03] hover:border-white/[0.1]'
      )}
    >
      {/* Current indicator */}
      {current && (
        <div className="absolute top-6 right-6 md:top-8 md:right-8">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Current
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-white mb-1">{company}</h3>
        <p className="text-primary font-medium text-sm">{role}</p>
      </div>

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs text-white/35 mb-4">
        <span className="flex items-center gap-1.5">
          <Calendar size={12} />
          {period}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin size={12} />
          {location}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-white/45 leading-relaxed mb-5">{description}</p>

      {/* Achievements */}
      <div className="flex flex-wrap gap-2 mb-5">
        {achievements.map((achievement) => (
          <span
            key={achievement}
            className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/5 text-primary/70 border border-primary/10"
          >
            {achievement}
          </span>
        ))}
      </div>

      {/* Stack */}
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs rounded-full bg-white/[0.04] text-white/40 border border-white/[0.06]"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function ProjectCard({
  title,
  tagline,
  description,
  technologies,
  github,
  live,
  featured,
  index,
}: (typeof projects)[0] & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      className={cn(
        'group relative h-full p-6 md:p-8 rounded-2xl',
        'bg-white/[0.02] border border-white/[0.06]',
        'transition-all duration-500',
        'hover:bg-white/[0.03] hover:border-white/[0.1]',
        'flex flex-col'
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <p className="text-xs text-white/30 uppercase tracking-wider mb-1.5">
            {tagline}
          </p>
          <h3 className="break-words text-lg font-semibold leading-tight text-white group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live"
              className="p-2 rounded-lg text-white/30 hover:text-white hover:bg-white/5 transition-all"
            >
              <ExternalLink size={16} />
            </a>
          )}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View code"
            className="p-2 rounded-lg text-white/30 hover:text-white hover:bg-white/5 transition-all"
          >
            <Github size={16} />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-white/40 leading-relaxed mb-5 flex-1">
        {description}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs rounded-full bg-white/[0.04] text-white/40 border border-white/[0.06]"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export function WorkPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-8 relative overflow-hidden">
        {/* Gradient */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none blur-[120px] bg-primary" />

        <div className="container mx-auto max-w-4xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/35 hover:text-white transition-colors group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
              Back home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              <span className="w-8 h-px bg-white/20" />
              Portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-normal mb-6"
          >
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Work
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="text-lg text-white/40 max-w-2xl"
          >
            Production AI, applied research, and ML systems across retail, finance, and forecasting.
          </motion.p>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-white">Experience</h2>
          </motion.div>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.company} {...exp} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold text-white">Projects & Research</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center mt-16"
          >
            <a
              href="https://github.com/yenugah80"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/35 hover:text-white transition-colors group"
            >
              <Github size={18} />
              <span>More on GitHub</span>
              <ArrowUpRight
                size={14}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
