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
    impact: 'Writing the next chapter: bringing GenAI to 500+ retail stores',
    summary: 'This is where everything comes together. After years of building ML systems, I finally get to lead a GenAI transformation from scratch. The challenge is not just technical but cultural: how do you help 500+ stores trust and adopt AI? Every day brings new questions, and I love that.',
    highlights: [
      { text: 'Started with a blank canvas. Built the entire LLM platform from zero, designing RAG architecture that now answers questions across millions of product documents in under 2 seconds', metric: 'Sub-2s Latency' },
      { text: 'Created autonomous AI agents that actually think. They decompose problems, pick the right tools, write SQL, and correct their own mistakes. Watching analysts save 60% of their time never gets old', metric: '60% Time Saved' },
      { text: 'Built trust through safety. Our guardrails ensure 99.9% of responses are safe, because in enterprise AI, one bad answer can undo months of adoption work', metric: '99.9% Safe' },
      { text: 'Made deployment boring (in the best way). CI/CD, versioning, monitoring all working seamlessly so the team can focus on building, not firefighting', metric: 'Production MLOps' },
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
    impact: 'The chapter where stakes got real: protecting $2B+ in daily transactions',
    summary: 'Banking taught me what it means when your code really matters. When your model flags a transaction as fraud, you are either saving someone their life savings or blocking a legitimate purchase. That pressure shaped how I think about every system I build now.',
    highlights: [
      { text: 'The fraud problem was personal. Built models that cut false alerts by 35% while catching more actual fraud. Behind those numbers are real people who kept their money or did not get wrongly blocked', metric: '35% Fewer False Positives' },
      { text: 'Learned to think in petabytes. Built pipelines processing more data in a day than most companies see in a year. The scale was humbling and addictive', metric: 'PB-Scale Engineering' },
      { text: 'Got obsessed with deployment speed. Reduced model releases from weeks to hours because in fraud detection, every day of delay means more money lost', metric: 'Hours Not Weeks' },
      { text: 'Led the GenAI charge before it was cool. Built document AI systems that 200+ analysts now rely on daily. Seeing skeptics become believers is still the best feeling', metric: '200+ Daily Users' },
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
    impact: 'Where I learned what excellence looks like: Apple Retail analytics',
    summary: 'Apple changed how I think about quality. Their bar for everything is impossibly high, and it is contagious. I came in to build dashboards and left knowing how to lead teams, ship ML systems, and demand excellence from myself.',
    highlights: [
      { text: 'My dashboards reached executives. Built pipelines processing 50M+ daily transactions so leadership could see every store on the planet in real-time. No pressure, right?', metric: '50M+ Daily Records' },
      { text: 'Convinced the team to go from reports to predictions. Those forecasting models cut stockouts by 25%. Somewhere, a customer got the iPhone they wanted because of math we wrote', metric: '25% Better Forecasts' },
      { text: 'Discovered I love teaching. Mentored 19 engineers and watched them grow. Turns out the best way to learn is to help others learn', metric: '19 Engineers Mentored' },
      { text: 'Two Spot Awards taught me something important: ship quality work ahead of schedule, and trust follows. Those awards opened doors to bigger challenges', metric: '2x Recognition Awards' },
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
    impact: 'Chapter one: where satellite images sparked a data obsession',
    summary: 'Every journey starts somewhere. Mine started with satellite imagery from space and a lot of messy data. I did not know it then, but processing images of cities from orbit would teach me to love the puzzle of making sense of massive, complex data.',
    highlights: [
      { text: 'Built my first terabyte-scale system. Designing geodatabases for Smart Cities felt like science fiction. Watching urban planners use data I processed to improve real cities? Pure magic', metric: 'TB-Scale Design' },
      { text: 'Discovered automation is my superpower. Cut manual processing by 70% and suddenly had time to learn, experiment, and dream bigger', metric: '70% Faster Processing' },
      { text: 'Learned that garbage in means garbage out. Taking data quality from 60% to 95% taught me to obsess over the fundamentals. That lesson still guides everything I build', metric: '95% Data Quality' },
    ],
    technologies: ['ArcGIS', 'QGIS', 'Python', 'PostgreSQL', 'MySQL', 'SQL Server', 'ETL'],
    color: 'primary',
    current: false,
  },
]

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-custom mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <span className="badge mb-4 inline-flex items-center gap-2">
              Experience
            </span>
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              Four Chapters, One Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every role taught me something different. Together, they shaped how I think about building AI that matters.
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
              { value: '8+', label: 'Years of Growing', Icon: Clock },
              { value: '4', label: 'Chapters Written', Icon: Building2 },
              { value: '50+', label: 'Stories Shipped', Icon: Bot },
              { value: '2', label: 'Awards Earned', Icon: Award },
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
