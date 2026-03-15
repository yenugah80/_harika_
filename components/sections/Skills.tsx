'use client'

import { motion } from 'framer-motion'
import { Brain, Database, Cloud, Code, Cpu, Server } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const skillCategories = [
  {
    icon: Brain,
    title: 'GenAI & LLMs',
    skills: ['LangChain', 'LangGraph', 'RAG', 'Prompt Engineering', 'Fine-tuning', 'OpenAI', 'Claude', 'Bedrock'],
  },
  {
    icon: Cpu,
    title: 'Machine Learning',
    skills: ['PyTorch', 'TensorFlow', 'XGBoost', 'Scikit-learn', 'Deep Learning', 'NLP', 'Time Series'],
  },
  {
    icon: Database,
    title: 'Data Engineering',
    skills: ['Spark', 'Databricks', 'Kafka', 'Delta Lake', 'Snowflake', 'BigQuery', 'Feature Stores'],
  },
  {
    icon: Cloud,
    title: 'Cloud & MLOps',
    skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'MLflow', 'SageMaker'],
  },
  {
    icon: Code,
    title: 'Languages',
    skills: ['Python', 'SQL', 'PySpark', 'TypeScript', 'FastAPI'],
  },
  {
    icon: Server,
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Pinecone', 'FAISS'],
  },
]

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
              Full-stack ML expertise from data pipelines to production AI systems.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <RevealOnScroll key={index} delay={index * 0.08}>
              <motion.div
                className="card-interactive p-6 h-full"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: 'hsl(var(--primary) / 0.1)',
                      border: '1px solid hsl(var(--primary) / 0.15)',
                    }}
                  >
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-medium">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="tag">
                      {skill}
                    </span>
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
