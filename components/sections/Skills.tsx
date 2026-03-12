'use client'

import { motion } from 'framer-motion'
import { Brain, Database, Cloud, Code, Cpu, Server } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const skillCategories = [
  {
    icon: Brain,
    title: 'GenAI & LLMs',
    color: 'primary',
    skills: ['LangChain', 'LangGraph', 'RAG Systems', 'Prompt Engineering', 'Fine-tuning', 'OpenAI', 'Claude', 'Bedrock'],
  },
  {
    icon: Cpu,
    title: 'Machine Learning',
    color: 'secondary',
    skills: ['PyTorch', 'TensorFlow', 'XGBoost', 'Scikit-learn', 'Deep Learning', 'NLP', 'Time Series', 'SHAP'],
  },
  {
    icon: Database,
    title: 'Data Engineering',
    color: 'accent',
    skills: ['Spark', 'Databricks', 'Kafka', 'Delta Lake', 'Snowflake', 'BigQuery', 'ETL/ELT', 'Feature Stores'],
  },
  {
    icon: Cloud,
    title: 'Cloud & MLOps',
    color: 'primary',
    skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'MLflow', 'CI/CD', 'SageMaker'],
  },
  {
    icon: Code,
    title: 'Languages',
    color: 'secondary',
    skills: ['Python', 'SQL', 'PySpark', 'TypeScript', 'R', 'FastAPI'],
  },
  {
    icon: Server,
    title: 'Databases',
    color: 'accent',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Pinecone', 'FAISS', 'SQL Server'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-custom mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-14">
            <span className="badge mb-4">Toolkit</span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              What I <span className="gradient-text">Work With</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              8 years of hands-on experience across the full ML stack,
              from data pipelines to production AI systems.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <RevealOnScroll key={index} delay={index * 0.08}>
              <motion.div
                className="card-3d p-6 h-full"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: `hsl(var(--${category.color}) / 0.1)`,
                      borderWidth: '1px',
                      borderColor: `hsl(var(--${category.color}) / 0.2)`,
                    }}
                  >
                    <category.icon
                      className="w-5 h-5"
                      style={{ color: `hsl(var(--${category.color}))` }}
                    />
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors"
                      style={{
                        background: `hsl(var(--${category.color}) / 0.05)`,
                        borderColor: `hsl(var(--${category.color}) / 0.15)`,
                        color: `hsl(var(--${category.color}) / 0.9)`,
                      }}
                      whileHover={{
                        scale: 1.05,
                        background: `hsl(var(--${category.color}) / 0.15)`,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
