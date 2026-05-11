'use client'

import { motion } from 'framer-motion'
import { Brain, Database, Cloud, Code, Cpu, Server } from 'lucide-react'
import { cn } from '@/lib/utils'

const ease = [0.25, 0.4, 0.25, 1]

const skillCategories = [
  {
    icon: Brain,
    title: 'GenAI & LLMs',
    description: 'Building production RAG systems and LLM applications',
    skills: ['LangChain', 'LangGraph', 'RAG', 'OpenAI', 'Claude', 'Bedrock'],
    gradient: 'from-violet-500/20 via-purple-500/10',
    span: 'md:col-span-2',
  },
  {
    icon: Cpu,
    title: 'Machine Learning',
    description: 'Deep learning and classical ML at scale',
    skills: ['PyTorch', 'TensorFlow', 'XGBoost', 'Scikit-learn'],
    gradient: 'from-blue-500/20 via-cyan-500/10',
    span: '',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Distributed data pipelines and feature stores',
    skills: ['Spark', 'Databricks', 'Kafka', 'Snowflake'],
    gradient: 'from-emerald-500/20 via-teal-500/10',
    span: '',
  },
  {
    icon: Cloud,
    title: 'Cloud & MLOps',
    description: 'End-to-end ML infrastructure',
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'MLflow'],
    gradient: 'from-orange-500/20 via-amber-500/10',
    span: 'md:col-span-2',
  },
]

function SkillCard({
  icon: Icon,
  title,
  description,
  skills,
  gradient,
  span,
  index,
}: {
  icon: typeof Brain
  title: string
  description: string
  skills: string[]
  gradient: string
  span: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      className={cn(
        'group relative overflow-hidden rounded-2xl p-6 md:p-8',
        'bg-white/[0.02] border border-white/[0.06]',
        'transition-all duration-500',
        'hover:bg-white/[0.04] hover:border-white/[0.1]',
        span
      )}
    >
      {/* Gradient background on hover */}
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-br to-transparent opacity-0',
          'transition-opacity duration-500 group-hover:opacity-100',
          gradient
        )}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-5">
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.05] border border-white/[0.08]">
            <Icon className="w-5 h-5 text-white/60 group-hover:text-white/80 transition-colors duration-300" />
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-white/40 mb-5 leading-relaxed">{description}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className={cn(
                'px-3 py-1.5 text-xs font-medium rounded-full',
                'bg-white/[0.04] border border-white/[0.06]',
                'text-white/50 group-hover:text-white/70',
                'transition-colors duration-300'
              )}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section className="py-32 md:py-40 relative">
      <div className="container mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              <span className="w-8 h-px bg-white/20" />
              Expertise
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-3xl md:text-4xl font-semibold tracking-normal text-white mb-4"
          >
            Full-stack ML toolkit
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="text-lg text-white/40"
          >
            From data pipelines to production AI systems
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} {...category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
