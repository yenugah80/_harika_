'use client'

import { motion } from 'framer-motion'
import {
  Brain,
  Database,
  Cloud,
  Code,
  BarChart3,
  Cpu,
  Boxes,
  Workflow,
} from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const skillCategories = [
  {
    icon: Brain,
    title: 'LLM Engineering & GenAI',
    color: 'primary',
    skills: [
      'LangChain',
      'LangGraph',
      'RAG Pipelines',
      'Prompt Engineering',
      'Fine-tuning (LoRA, QLoRA)',
      'Claude (Bedrock)',
      'OpenAI APIs',
      'Gemini',
      'FAISS',
      'Pinecone',
      'Semantic Kernel',
    ],
  },
  {
    icon: Cpu,
    title: 'Machine Learning',
    color: 'secondary',
    skills: [
      'PyTorch',
      'TensorFlow',
      'XGBoost',
      'LightGBM',
      'Scikit-learn',
      'Deep Learning',
      'NLP Pipelines',
      'Time-series',
      'SHAP',
      'LIME',
    ],
  },
  {
    icon: Database,
    title: 'Data Engineering',
    color: 'accent',
    skills: [
      'Apache Spark',
      'PySpark',
      'Databricks',
      'ETL/ELT',
      'Delta Lake',
      'Kafka',
      'Feature Stores',
      'Data Modeling',
      'Snowflake',
      'BigQuery',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    color: 'primary',
    skills: [
      'AWS (SageMaker, Bedrock, EMR)',
      'Azure (Databricks, ML)',
      'GCP',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'MLflow',
      'GitHub Actions',
    ],
  },
  {
    icon: Code,
    title: 'Programming',
    color: 'secondary',
    skills: [
      'Python',
      'SQL',
      'PySpark',
      'R',
      'FastAPI',
      'REST APIs',
      'TypeScript',
      'Git',
    ],
  },
  {
    icon: BarChart3,
    title: 'Visualization & BI',
    color: 'accent',
    skills: [
      'Power BI',
      'Tableau',
      'Matplotlib',
      'Seaborn',
      'Plotly',
      'TIBCO Spotfire',
    ],
  },
  {
    icon: Boxes,
    title: 'Databases',
    color: 'primary',
    skills: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'SQL Server',
      'Oracle',
      'Redshift',
      'HBase',
    ],
  },
  {
    icon: Workflow,
    title: 'Agentic AI Systems',
    color: 'secondary',
    skills: [
      'Multi-Agent Workflows',
      'Tool Orchestration',
      'Guardrails',
      'CrewAI',
      'Evaluation Frameworks',
      'A2A Protocol',
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="container-custom mx-auto relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="badge-secondary mb-4 inline-block">Skills</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              My Technical <span className="gradient-text">Toolkit</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive set of skills honed over 8+ years across AI/ML, data engineering, and cloud platforms
            </p>
          </div>
        </RevealOnScroll>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <RevealOnScroll key={index} delay={index * 0.05}>
              <motion.div
                className="glass rounded-2xl p-6 h-full hover-card group"
                whileHover={{ y: -5 }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-${category.color}/10 border border-${category.color}/30 flex items-center justify-center mb-4 group-hover:glow transition-all duration-300`}
                  style={{
                    background: `hsl(var(--${category.color}) / 0.1)`,
                    borderColor: `hsl(var(--${category.color}) / 0.3)`,
                  }}
                >
                  <category.icon
                    className="w-6 h-6"
                    style={{ color: `hsl(var(--${category.color}))` }}
                  />
                </div>
                <h3 className="text-lg font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`badge-${category.color} text-xs`}
                      style={{
                        background: `hsl(var(--${category.color}) / 0.1)`,
                        color: `hsl(var(--${category.color}))`,
                        borderColor: `hsl(var(--${category.color}) / 0.3)`,
                      }}
                    >
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
