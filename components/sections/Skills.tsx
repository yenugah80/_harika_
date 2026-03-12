'use client'

import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const skillCategories = [
  {
    title: 'GenAI & LLMs',
    skills: ['LangChain', 'LangGraph', 'RAG Systems', 'Prompt Engineering', 'Fine-tuning', 'OpenAI', 'Claude', 'Bedrock'],
  },
  {
    title: 'Machine Learning',
    skills: ['PyTorch', 'TensorFlow', 'XGBoost', 'Scikit-learn', 'Deep Learning', 'NLP', 'Time Series', 'SHAP'],
  },
  {
    title: 'Data Engineering',
    skills: ['Spark', 'Databricks', 'Kafka', 'Delta Lake', 'Snowflake', 'BigQuery', 'ETL/ELT', 'Feature Stores'],
  },
  {
    title: 'Cloud & MLOps',
    skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'MLflow', 'CI/CD', 'SageMaker'],
  },
  {
    title: 'Languages',
    skills: ['Python', 'SQL', 'PySpark', 'TypeScript', 'R', 'FastAPI'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Pinecone', 'FAISS', 'SQL Server'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-custom mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-10">
            <span className="badge mb-4 inline-block">Skills</span>
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              Technical Expertise
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <RevealOnScroll key={index} delay={index * 0.05}>
              <div className="glass rounded-xl p-5">
                <h3 className="text-sm font-medium mb-3 text-muted-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs bg-muted rounded-md"
                    >
                      {skill}
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
