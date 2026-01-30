'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Zap, TrendingUp, Clock, Building2, Bot, Award } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

// Company Logo Components
const MacysLogo = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 md:w-14 md:h-14">
    <defs>
      <linearGradient id="macys-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e21836" />
        <stop offset="100%" stopColor="#cc1430" />
      </linearGradient>
    </defs>
    <path
      d="M24 4l5.5 11.5L42 17l-9 8.5 2 12.5-11-6-11 6 2-12.5-9-8.5 12.5-1.5z"
      fill="url(#macys-gradient)"
    />
  </svg>
)

const BankOfAmericaLogo = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 md:w-14 md:h-14">
    <defs>
      <linearGradient id="boa-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#012169" />
        <stop offset="100%" stopColor="#0033a0" />
      </linearGradient>
    </defs>
    <rect x="6" y="8" width="36" height="32" rx="4" fill="url(#boa-gradient)" />
    <path d="M12 20h8v4h-8zM12 28h8v4h-8zM24 20h12v4h-12zM24 28h12v4h-12z" fill="#e31837" opacity="0.9" />
    <path d="M12 14h24v2h-24z" fill="#ffffff" opacity="0.8" />
  </svg>
)

const AppleLogo = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 md:w-14 md:h-14">
    <defs>
      <linearGradient id="apple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
    </defs>
    <path
      d="M32.5 8c-2.1 0-4.3 1.4-5.7 3.2-1.2 1.6-2.2 4-1.9 6.4 2.3.2 4.6-1.2 6-3.1 1.3-1.7 2.1-4.1 1.6-6.5zm5.5 14.5c-.1 0-4.4-1.8-4.5 5.2 0 8.3 7.3 11.1 7.4 11.2-.1.2-1.2 4-3.9 7.9-2.4 3.4-4.9 6.8-8.8 6.9-1.9 0-3.2-.6-4.6-.6-1.4 0-2.9.6-4.6.6-3.8-.1-6.7-3.6-9.1-7-4.9-7-8.6-19.7-3.6-28.3 2.5-4.2 6.9-6.9 11.7-7 1.9 0 3.8.7 5.4.7 1.5 0 3.9-.8 6.2-.7 1.1 0 4 .4 5.9 3.1-.1.1-3.5 2.1-3.5 6z"
      fill="url(#apple-gradient)"
      transform="scale(0.85) translate(4, 2)"
    />
  </svg>
)

const RSILogo = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 md:w-14 md:h-14">
    <defs>
      <linearGradient id="rsi-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#4f46e5" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="20" fill="url(#rsi-gradient)" />
    <path
      d="M16 18h5v12h-5zM23 18h5v12h-5zM30 18h2l-4 12h-2z"
      fill="#ffffff"
      opacity="0.9"
    />
    <circle cx="24" cy="24" r="6" fill="none" stroke="#22d3ee" strokeWidth="2" strokeDasharray="4 2" />
  </svg>
)

const companyLogos: Record<string, React.FC> = {
  "Macy's Inc.": MacysLogo,
  'Bank of America': BankOfAmericaLogo,
  'Apple Inc.': AppleLogo,
  'RSI Softech': RSILogo,
}

const experiences = [
  {
    company: "Macy's Inc.",
    role: 'Lead AI Engineer',
    subtitle: 'GenAI Platform & Applied ML Systems',
    period: 'Mar 2025 - Present',
    location: 'United States',
    impact: 'Spearheading enterprise GenAI transformation across 500+ retail stores',
    summary: 'Leading the design and delivery of production-grade generative AI systems that power intelligent retail operations. Architecting scalable LLM infrastructure from prototype to production, enabling store associates and business teams to leverage AI for decision-making at scale.',
    highlights: [
      { text: 'Built enterprise LLM platform from scratch, designed RAG architecture with FAISS vector stores and Bedrock Knowledge Bases, achieving sub-2s query latency across millions of product documents', metric: 'Sub-2s Latency' },
      { text: 'Architected multi-agent orchestration using LangGraph; autonomous agents handle task decomposition, SQL generation, tool selection, and self-correction, reducing manual analyst workflows by 60%', metric: '60% Time Saved' },
      { text: 'Implemented responsible AI framework with guardrails, content filtering, and output validation, achieving 99.9% safe response rate while maintaining response quality and usefulness', metric: '99.9% Safe' },
      { text: 'Established MLOps best practices: CI/CD pipelines, model versioning, A/B testing infrastructure, and real-time monitoring dashboards for continuous model improvement', metric: 'Production MLOps' },
    ],
    technologies: ['LangChain', 'LangGraph', 'Amazon Bedrock', 'FAISS', 'Spark', 'Databricks', 'FastAPI', 'Python'],
    color: 'primary',
    current: true,
  },
  {
    company: 'Bank of America',
    role: 'Senior AI Engineer',
    subtitle: 'ML Engineering & Financial Risk Systems',
    period: 'Feb 2022 - Jan 2024',
    location: 'United States',
    impact: 'Delivered ML systems processing $2B+ daily transactions with enterprise-grade reliability',
    summary: 'Owned the full ML lifecycle for mission-critical financial systems, from feature engineering to production deployment. Built fraud detection and risk scoring models that directly protected customer assets while driving GenAI adoption across the risk organization.',
    highlights: [
      { text: 'Shipped fraud detection ensemble models (XGBoost + neural networks) that reduced false positive alerts by 35%, saving investigation teams 1,000+ hours monthly while catching 12% more true fraud', metric: '35% Fewer False Positives' },
      { text: 'Engineered 200+ production features across Snowflake, BigQuery, and Databricks; built real-time and batch pipelines processing petabytes of transaction data with 99.9% uptime SLA', metric: 'PB-Scale Engineering' },
      { text: 'Built end-to-end MLOps infrastructure: automated training pipelines, model versioning with MLflow, drift detection, and Grafana monitoring that reduced model deployment time from weeks to hours', metric: 'Hours Not Weeks' },
      { text: 'Led 5-engineer team pioneering GenAI adoption for risk & compliance, built document summarization and regulatory Q&A systems using Azure OpenAI, now used by 200+ analysts daily', metric: '200+ Daily Users' },
    ],
    technologies: ['Python', 'XGBoost', 'PyTorch', 'PySpark', 'Azure OpenAI', 'Snowflake', 'BigQuery', 'Docker', 'MLflow'],
    color: 'secondary',
    current: false,
  },
  {
    company: 'Apple Inc.',
    role: 'AI Engineer',
    subtitle: 'Retail Analytics & ML Systems (via Infosys)',
    period: 'Sep 2019 - Feb 2022',
    location: 'United States',
    impact: 'Transformed retail analytics from reactive reporting to predictive ML-powered insights',
    summary: 'Drove the evolution from traditional BI dashboards to production ML systems for Apple Retail. Led cross-functional teams to deliver forecasting models and automated pipelines that directly informed executive decision-making and inventory planning.',
    highlights: [
      { text: 'Owned end-to-end analytics platform powering executive dashboards; built data pipelines processing 50M+ daily retail transactions, enabling real-time visibility into global store performance', metric: '50M+ Daily Records' },
      { text: 'Led migration from legacy BI to production ML, built demand forecasting models using Prophet and custom ensembles that improved inventory prediction accuracy by 25%, reducing stockouts', metric: '25% Better Forecasts' },
      { text: 'Served as technical lead and mentor for 19-engineer team, established coding standards, code review processes, and knowledge sharing that improved team velocity by 40%', metric: '19 Engineers Mentored' },
      { text: 'Recognized with 2x Spot Awards for exceptional delivery, shipped ahead of schedule while maintaining quality, earning trust to lead increasingly complex initiatives', metric: '2x Recognition Awards' },
    ],
    technologies: ['Python', 'SQL', 'Azure ML', 'SageMaker', 'Prophet', 'FastAPI', 'Docker', 'Kubernetes', 'Tableau'],
    color: 'accent',
    current: false,
  },
  {
    company: 'RSI Softech',
    role: 'Data Engineer',
    subtitle: 'National Remote Sensing Centre (Govt. of India)',
    period: 'Jun 2017 - Aug 2019',
    location: 'Hyderabad, India',
    impact: 'Built foundational geospatial data infrastructure for national Smart Cities initiative',
    summary: 'Started my engineering journey building data systems for India\'s national satellite imagery program. Designed geodatabases and ETL pipelines that processed terabytes of remote sensing data, laying the groundwork for my passion in scalable data engineering.',
    highlights: [
      { text: 'Architected geodatabases for Smart Cities Mission, designed data models and spatial indexing strategies that enabled efficient querying of terabyte-scale satellite imagery', metric: 'TB-Scale Design' },
      { text: 'Automated ETL pipelines for satellite data ingestion, reduced manual processing time by 70% through Python automation, enabling faster insights for urban planning teams', metric: '70% Faster Processing' },
      { text: 'Improved data quality from 60% to 95% reliability, implemented validation rules, anomaly detection, and data cleansing workflows that became standard practice across the organization', metric: '95% Data Quality' },
    ],
    technologies: ['ArcGIS', 'QGIS', 'Python', 'PostgreSQL', 'MySQL', 'SQL Server', 'ETL'],
    color: 'primary',
    current: false,
  },
]

export function Experience() {
  return (
    <section id="experience" className="section relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] animate-spin-slow" />
      </div>

      <div className="container-custom mx-auto relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <motion.span
              className="badge mb-4 inline-flex items-center gap-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap size={14} className="text-yellow-400" />
              Experience
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text animate-gradient">8+ Years</span> of Building
              <br />
              <span className="text-foreground">Production AI Systems</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From retail giants to banking leaders, transforming data into intelligent systems
            </p>
          </div>
        </RevealOnScroll>

        {/* Experience Cards - Modern Layout */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <RevealOnScroll key={index} delay={index * 0.15}>
              <motion.div
                className={`relative group ${exp.current ? 'experience-card-current' : ''}`}
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Glow effect for current */}
                {exp.current && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity animate-gradient-xy" />
                )}

                <div className="glass rounded-2xl md:rounded-3xl p-6 md:p-8 relative overflow-hidden">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />

                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      {/* Company Logo */}
                      <motion.div
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {companyLogos[exp.company] && companyLogos[exp.company]({})}
                      </motion.div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-xl md:text-2xl font-bold">{exp.company}</h3>
                          {exp.current && (
                            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full animate-pulse flex items-center gap-1">
                              <span className="w-2 h-2 bg-green-400 rounded-full" />
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-lg font-semibold gradient-text">{exp.role}</p>
                        <p className="text-sm text-muted-foreground">{exp.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Calendar size={14} className="text-primary" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={14} className="text-secondary" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Impact Statement */}
                  <div className="mb-4 p-4 rounded-xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20">
                    <div className="flex items-center gap-2">
                      <TrendingUp size={18} className="text-primary" />
                      <span className="font-medium">{exp.impact}</span>
                    </div>
                  </div>

                  {/* Role Summary */}
                  {'summary' in exp && (
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.summary}
                    </p>
                  )}

                  {/* Highlights Grid */}
                  <div className="grid md:grid-cols-2 gap-3 mb-6">
                    {exp.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors group/item"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-primary text-lg group-hover/item:scale-110 transition-transform">→</span>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">{highlight.text}</p>
                          <span className="text-xs font-semibold text-primary/80">{highlight.metric}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="badge text-xs hover:scale-105 transition-transform cursor-default"
                        whileHover={{ y: -2 }}
                        style={{
                          background: `hsl(var(--${exp.color}) / 0.15)`,
                          color: `hsl(var(--${exp.color}))`,
                          borderColor: `hsl(var(--${exp.color}) / 0.3)`,
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Stats Bar */}
        <RevealOnScroll>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '8+', label: 'Years Experience', Icon: Clock },
              { value: '3', label: 'Industries', Icon: Building2 },
              { value: '50+', label: 'AI Projects', Icon: Bot },
              { value: '2', label: 'Awards', Icon: Award },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="glass rounded-xl p-4 text-center group hover:border-primary/30 transition-colors"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <stat.Icon className="w-6 h-6 mx-auto mb-2 text-primary group-hover:text-secondary transition-colors" />
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
