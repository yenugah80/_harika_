'use client'

import { motion } from 'framer-motion'
import {
  ExternalLink,
  Github,
  Utensils,
  FileText,
  Bot,
  Sparkles,
  TrendingUp,
  BarChart3,
} from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const featuredProject = {
  title: 'MyFoodTracker',
  tagline: 'Personal Health Intelligence, Not Just a Tracker',
  description:
    'A comprehensive web application for all your nutritional needs. Built with TypeScript and modern web technologies, featuring AI-powered food logging, personalized nutrition recommendations, and health analytics.',
  icon: Utensils,
  highlights: [
    'AI-powered food recognition and logging',
    'Personalized nutrition recommendations',
    'Comprehensive health analytics dashboard',
    'Modern TypeScript/React architecture',
  ],
  technologies: [
    'TypeScript',
    'React',
    'Node.js',
    'AI/ML',
    'REST APIs',
  ],
  links: {
    live: 'https://my-food-tracker.com',
    github: 'https://github.com/yenugah80/mftweb',
  },
  color: 'primary',
}

const projects = [
  {
    title: 'Predictive Hiring ML Research',
    description:
      'Research paper for IBAC 2025: Enhanced ML models for bias mitigation and efficiency in recruitment using CatBoost, XGBoost, and ensemble methods achieving 97% accuracy.',
    icon: TrendingUp,
    technologies: ['Python', 'Jupyter', 'CatBoost', 'XGBoost', 'SHAP'],
    link: 'https://github.com/yenugah80/Revolutionizing-Recruitment-Enhanced-Machine-Learning-Models-for-Bias-Mitigation-and-Efficiency',
    color: 'secondary',
  },
  {
    title: 'Mermaid Maker',
    description:
      'Create beautiful diagrams with AI: natural-language to Mermaid code with real-time preview and SVG export. Simplifying diagram creation through conversational AI.',
    icon: Sparkles,
    technologies: ['TypeScript', 'AI', 'Mermaid.js', 'React'],
    link: 'https://github.com/yenugah80/Mermaid-Maker',
    color: 'accent',
  },
  {
    title: 'Multi-Agent AI Workflows',
    description:
      'LangGraph-based agent systems for task planning, tool invocation, SQL execution, and reasoning across enterprise systems at Macy\'s.',
    icon: Bot,
    technologies: ['LangGraph', 'LangChain', 'FastAPI', 'Python'],
    link: 'https://github.com/yenugah80',
    color: 'primary',
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Interactive dashboards and worksheets for data visualization, business intelligence insights, and performance tracking.',
    icon: BarChart3,
    technologies: ['Tableau', 'Power BI', 'Data Viz', 'SQL'],
    link: 'https://github.com/yenugah80/AnalyticsDashboardData',
    color: 'secondary',
  },
]

export function Projects() {
  return (
    <section id="projects" className="section relative overflow-hidden">
      <div className="container-custom mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="badge-accent mb-4 inline-block">Projects</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in AI/ML systems
            </p>
          </div>
        </RevealOnScroll>

        {/* Featured Project */}
        <RevealOnScroll>
          <motion.div
            className="glass rounded-3xl p-8 md:p-12 mb-12 gradient-border group"
            whileHover={{ y: -5 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:glow transition-all duration-300">
                    <featuredProject.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <span className="badge mb-1">Featured Project</span>
                    <h3 className="text-2xl font-bold">{featuredProject.title}</h3>
                  </div>
                </div>
                <p className="text-lg text-primary font-medium mb-4">
                  {featuredProject.tagline}
                </p>
                <p className="text-muted-foreground mb-6">
                  {featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {featuredProject.technologies.map((tech, i) => (
                    <span key={i} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={featuredProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={featuredProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                    GitHub
                  </motion.a>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold mb-4">Key Achievements</h4>
                {featuredProject.highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10"
                  >
                    <span className="text-primary text-lg">✓</span>
                    <span className="text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </RevealOnScroll>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-6 h-full hover-card group block"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:glow transition-all duration-300"
                    style={{
                      background: `hsl(var(--${project.color}) / 0.1)`,
                      borderWidth: '1px',
                      borderColor: `hsl(var(--${project.color}) / 0.3)`,
                    }}
                  >
                    <project.icon
                      className="w-6 h-6"
                      style={{ color: `hsl(var(--${project.color}))` }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="badge text-xs"
                      style={{
                        background: `hsl(var(--${project.color}) / 0.1)`,
                        color: `hsl(var(--${project.color}))`,
                        borderColor: `hsl(var(--${project.color}) / 0.3)`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  <Github size={16} />
                  <span>View on GitHub</span>
                  <ExternalLink size={14} className="ml-auto" />
                </div>
              </motion.a>
            </RevealOnScroll>
          ))}
        </div>

        {/* View All */}
        <RevealOnScroll>
          <div className="text-center mt-12">
            <motion.a
              href="https://github.com/yenugah80"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
              View All Projects on GitHub
            </motion.a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
