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
    subtitle: 'Applied ML & GenAI Systems',
    period: 'Mar 2025 - Present',
    location: 'United States',
    impact: 'Leading enterprise AI transformation',
    highlights: [
      { text: 'Architected LLM-powered platforms serving omnichannel operations', metric: 'Enterprise Scale' },
      { text: 'Built RAG pipelines with FAISS & Bedrock Knowledge Bases', metric: 'Production Ready' },
      { text: 'Designed multi-agent workflows using LangChain & LangGraph', metric: 'AI Orchestration' },
      { text: 'Implemented guardrails for safe LLM behavior in production', metric: 'Enterprise Safety' },
    ],
    technologies: ['LangChain', 'LangGraph', 'Amazon Bedrock', 'FAISS', 'Spark', 'Databricks', 'FastAPI'],
    color: 'primary',
    current: true,
  },
  {
    company: 'Bank of America',
    role: 'Senior AI Engineer',
    subtitle: 'Applied ML & GenAI',
    period: 'Feb 2022 - Jan 2024',
    location: 'United States',
    impact: '2 years driving ML innovation in banking',
    highlights: [
      { text: 'Productionized ML workflows for fraud detection & risk systems', metric: 'Risk Mitigation' },
      { text: 'Built end-to-end LLM pipelines with Azure OpenAI & Bedrock', metric: 'GenAI Pioneer' },
      { text: 'Engineered features across Snowflake, BigQuery, Databricks', metric: 'Data at Scale' },
      { text: 'Led cross-functional initiatives as senior IC and SME', metric: 'Tech Leadership' },
    ],
    technologies: ['Python', 'XGBoost', 'PySpark', 'Azure OpenAI', 'Snowflake', 'BigQuery', 'Docker'],
    color: 'secondary',
    current: false,
  },
  {
    company: 'Apple Inc.',
    role: 'AI Engineer',
    subtitle: 'Senior Data Specialist via Infosys',
    period: 'Sep 2019 - Feb 2022',
    location: 'United States',
    impact: '2.5 years transforming retail analytics',
    highlights: [
      { text: 'Owned KPI logic & analytics pipelines across business units', metric: 'Data Ownership' },
      { text: 'Transitioned analytics to production ML systems', metric: 'ML Transformation' },
      { text: 'Led & mentored 19-member engineering team as SME', metric: 'Team Leadership' },
      { text: 'Earned 2x Spot Awards for exemplary performance', metric: 'Recognition' },
    ],
    technologies: ['Python', 'SQL', 'Azure ML', 'SageMaker', 'FastAPI', 'Docker', 'Kubernetes'],
    color: 'accent',
    current: false,
  },
  {
    company: 'RSI Softech',
    role: 'GIS Data Analyst',
    subtitle: 'National Remote Sensing Center',
    period: 'Jun 2017 - Aug 2019',
    location: 'Hyderabad, India',
    impact: 'Foundation in data engineering',
    highlights: [
      { text: 'Built geodatabases for AMRUT Smart Cities project', metric: 'Smart Cities' },
      { text: 'Automated spatial ETL with Python & GIS scripts', metric: 'Automation' },
      { text: 'Improved dataset reliability by 30-40%', metric: '30-40% Better' },
    ],
    technologies: ['ArcGIS', 'QGIS', 'Python', 'MySQL', 'SQL Server'],
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
              From retail giants to banking leaders — transforming data into intelligent systems
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
                  <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20">
                    <div className="flex items-center gap-2">
                      <TrendingUp size={18} className="text-primary" />
                      <span className="font-medium">{exp.impact}</span>
                    </div>
                  </div>

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
