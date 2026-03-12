'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, ArrowUpRight } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const projects = [
  {
    title: 'MyFoodTracker',
    tagline: 'AI-powered nutrition companion',
    description: 'Built a full-stack platform with a custom vision model trained on 100K+ food images. Users snap a photo, get instant nutritional breakdown, and personalized recommendations.',
    technologies: ['TypeScript', 'React', 'TensorFlow', 'Node.js', 'D3.js'],
    github: 'https://github.com/yenugah80/mftweb',
    live: 'https://my-food-tracker.com',
    featured: true,
    accent: 'primary',
  },
  {
    title: 'Bias-Aware Hiring ML',
    tagline: 'Research publication',
    description: 'Developed predictive hiring models that achieve 97% accuracy while reducing demographic bias by 40%. Published at IBAC 2025.',
    technologies: ['Python', 'CatBoost', 'XGBoost', 'SHAP', 'Fairlearn'],
    github: 'https://github.com/yenugah80/Revolutionizing-Recruitment-Enhanced-Machine-Learning-Models-for-Bias-Mitigation-and-Efficiency',
    accent: 'secondary',
  },
  {
    title: 'Mermaid Maker',
    tagline: 'LLM-powered diagramming',
    description: 'Describe any diagram in plain English and get beautiful Mermaid syntax instantly. Over 500 diagrams generated and counting.',
    technologies: ['TypeScript', 'GPT-4', 'Mermaid.js', 'React'],
    github: 'https://github.com/yenugah80/Mermaid-Maker',
    accent: 'accent',
  },
  {
    title: 'Multi-Agent AI System',
    tagline: 'Autonomous problem solving',
    description: 'Production-ready LangGraph architecture with autonomous agents that decompose problems, select tools, generate SQL, and self-correct errors.',
    technologies: ['LangGraph', 'LangChain', 'FastAPI', 'Bedrock'],
    github: 'https://github.com/yenugah80',
    accent: 'warm',
  },
]

const accentMap: Record<string, { border: string; text: string }> = {
  primary: {
    border: 'hsl(var(--primary) / 0.4)',
    text: 'hsl(var(--primary))',
  },
  secondary: {
    border: 'hsl(var(--secondary) / 0.4)',
    text: 'hsl(var(--secondary))',
  },
  accent: {
    border: 'hsl(var(--accent) / 0.4)',
    text: 'hsl(var(--accent))',
  },
  warm: {
    border: 'hsl(var(--warm-light) / 0.4)',
    text: 'hsl(var(--warm-light))',
  },
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-custom mx-auto">
        <RevealOnScroll>
          <div className="section-header">
            <span className="badge mb-6">Building</span>
            <h2>
              Side Projects & <span className="gradient-text">Research</span>
            </h2>
            <p>
              What I build when nobody is watching. These projects reflect
              my curiosity and where I think AI is heading.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, index) => {
            const colors = accentMap[project.accent]
            return (
              <RevealOnScroll key={index} delay={index * 0.08}>
                <motion.div
                  className={`card-interactive p-6 md:p-8 h-full ${project.featured ? 'md:col-span-2' : ''}`}
                  style={{ borderLeftWidth: '3px', borderLeftColor: colors.border }}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {project.featured && (
                          <Star size={14} style={{ color: colors.text, fill: colors.text }} />
                        )}
                        <span
                          className="text-xs font-medium uppercase tracking-wide"
                          style={{ color: 'hsl(var(--muted-foreground))' }}
                        >
                          {project.tagline}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View live demo"
                          className="p-2.5 rounded-lg transition-colors"
                          style={{ background: 'hsl(var(--muted))' }}
                          whileHover={{ scale: 1.08, background: 'hsl(var(--card-hover))' }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={16} style={{ color: 'hsl(var(--foreground-muted))' }} />
                        </motion.a>
                      )}
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View on GitHub"
                        className="p-2.5 rounded-lg transition-colors"
                        style={{ background: 'hsl(var(--muted))' }}
                        whileHover={{ scale: 1.08, background: 'hsl(var(--card-hover))' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} style={{ color: 'hsl(var(--foreground-muted))' }} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="leading-relaxed mb-6" style={{ color: 'hsl(var(--foreground-muted))' }}>
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </RevealOnScroll>
            )
          })}
        </div>

        {/* GitHub CTA */}
        <RevealOnScroll>
          <div className="text-center mt-12">
            <motion.a
              href="https://github.com/yenugah80"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl transition-all group"
              style={{
                background: 'hsl(var(--muted))',
                border: '1px solid hsl(var(--border-muted))',
              }}
              whileHover={{
                y: -2,
                borderColor: 'hsl(var(--border))',
              }}
            >
              <Github size={18} style={{ color: 'hsl(var(--foreground-muted))' }} />
              <span className="font-medium" style={{ color: 'hsl(var(--foreground-muted))' }}>
                Explore more on GitHub
              </span>
              <ArrowUpRight
                size={14}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: 'hsl(var(--primary))' }}
              />
            </motion.a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
