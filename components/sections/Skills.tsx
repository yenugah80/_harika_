'use client'

import { motion } from 'framer-motion'
import { Brain, Database, Cloud, Code, Cpu, Server } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const skillCategories = [
  {
    icon: Brain,
    title: 'GenAI & LLMs',
    accent: 'primary',
    skills: ['LangChain', 'LangGraph', 'RAG Systems', 'Prompt Engineering', 'Fine-tuning', 'OpenAI', 'Claude', 'Bedrock'],
  },
  {
    icon: Cpu,
    title: 'Machine Learning',
    accent: 'secondary',
    skills: ['PyTorch', 'TensorFlow', 'XGBoost', 'Scikit-learn', 'Deep Learning', 'NLP', 'Time Series', 'SHAP'],
  },
  {
    icon: Database,
    title: 'Data Engineering',
    accent: 'accent',
    skills: ['Spark', 'Databricks', 'Kafka', 'Delta Lake', 'Snowflake', 'BigQuery', 'ETL/ELT', 'Feature Stores'],
  },
  {
    icon: Cloud,
    title: 'Cloud & MLOps',
    accent: 'warm',
    skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'MLflow', 'CI/CD', 'SageMaker'],
  },
  {
    icon: Code,
    title: 'Languages',
    accent: 'primary',
    skills: ['Python', 'SQL', 'PySpark', 'TypeScript', 'R', 'FastAPI'],
  },
  {
    icon: Server,
    title: 'Databases',
    accent: 'secondary',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Pinecone', 'FAISS', 'SQL Server'],
  },
]

const accentMap: Record<string, { bg: string; border: string; text: string; tagBg: string; tagBorder: string }> = {
  primary: {
    bg: 'hsl(var(--primary) / 0.1)',
    border: 'hsl(var(--primary) / 0.25)',
    text: 'hsl(var(--primary))',
    tagBg: 'hsl(var(--primary) / 0.06)',
    tagBorder: 'hsl(var(--primary) / 0.18)',
  },
  secondary: {
    bg: 'hsl(var(--secondary) / 0.1)',
    border: 'hsl(var(--secondary) / 0.25)',
    text: 'hsl(var(--secondary))',
    tagBg: 'hsl(var(--secondary) / 0.06)',
    tagBorder: 'hsl(var(--secondary) / 0.18)',
  },
  accent: {
    bg: 'hsl(var(--accent) / 0.1)',
    border: 'hsl(var(--accent) / 0.25)',
    text: 'hsl(var(--accent))',
    tagBg: 'hsl(var(--accent) / 0.06)',
    tagBorder: 'hsl(var(--accent) / 0.18)',
  },
  warm: {
    bg: 'hsl(var(--warm-light) / 0.1)',
    border: 'hsl(var(--warm-light) / 0.25)',
    text: 'hsl(var(--warm-light))',
    tagBg: 'hsl(var(--warm-light) / 0.06)',
    tagBorder: 'hsl(var(--warm-light) / 0.18)',
  },
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-custom mx-auto">
        <RevealOnScroll>
          <div className="section-header">
            <span className="badge mb-6">Toolkit</span>
            <h2>
              What I <span className="gradient-text">Work With</span>
            </h2>
            <p>
              8 years of hands-on experience across the full ML stack,
              from data pipelines to production AI systems.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => {
            const colors = accentMap[category.accent]
            return (
              <RevealOnScroll key={index} delay={index * 0.06}>
                <motion.div
                  className="card-interactive p-6 h-full"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{
                        background: colors.bg,
                        border: `1px solid ${colors.border}`,
                      }}
                    >
                      <category.icon
                        className="w-5 h-5"
                        style={{ color: colors.text }}
                      />
                    </div>
                    <h3 className="font-semibold tracking-tight">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg cursor-default"
                        style={{
                          background: colors.tagBg,
                          border: `1px solid ${colors.tagBorder}`,
                          color: colors.text,
                        }}
                        whileHover={{
                          scale: 1.05,
                          y: -1,
                        }}
                        transition={{ duration: 0.15 }}
                      >
                        {skill}
                      </motion.span>
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
