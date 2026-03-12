'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, Sparkles } from 'lucide-react'
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
    gradient: 'from-primary/20 to-secondary/20',
    borderColor: 'border-l-primary',
  },
  {
    title: 'Bias-Aware Hiring ML',
    tagline: 'Research publication',
    description: 'Developed predictive hiring models that achieve 97% accuracy while reducing demographic bias by 40%. Published at IBAC 2025.',
    technologies: ['Python', 'CatBoost', 'XGBoost', 'SHAP', 'Fairlearn'],
    github: 'https://github.com/yenugah80/Revolutionizing-Recruitment-Enhanced-Machine-Learning-Models-for-Bias-Mitigation-and-Efficiency',
    gradient: 'from-secondary/20 to-accent/20',
    borderColor: 'border-l-secondary',
  },
  {
    title: 'Mermaid Maker',
    tagline: 'LLM-powered diagramming',
    description: 'Describe any diagram in plain English and get beautiful Mermaid syntax instantly. Over 500 diagrams generated and counting.',
    technologies: ['TypeScript', 'GPT-4', 'Mermaid.js', 'React'],
    github: 'https://github.com/yenugah80/Mermaid-Maker',
    gradient: 'from-accent/20 to-primary/20',
    borderColor: 'border-l-accent',
  },
  {
    title: 'Multi-Agent AI System',
    tagline: 'Autonomous problem solving',
    description: 'Production-ready LangGraph architecture with autonomous agents that decompose problems, select tools, generate SQL, and self-correct errors.',
    technologies: ['LangGraph', 'LangChain', 'FastAPI', 'Bedrock'],
    github: 'https://github.com/yenugah80',
    gradient: 'from-primary/20 to-accent/20',
    borderColor: 'border-l-primary',
  },
]

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-custom mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-14">
            <span className="badge mb-4">Building</span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Side Projects & <span className="gradient-text">Research</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What I build when nobody is watching. These projects reflect
              my curiosity and where I think AI is heading.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <motion.div
                className={`card-3d p-6 md:p-8 h-full border-l-4 ${project.borderColor} ${project.featured ? 'md:col-span-2' : ''}`}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {project.featured && (
                        <Star size={14} className="text-primary fill-primary" />
                      )}
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">
                        {project.tagline}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View live demo"
                        className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} className="text-muted-foreground" />
                      </motion.a>
                    )}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View on GitHub"
                      className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} className="text-muted-foreground" />
                    </motion.a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded-full border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* GitHub CTA */}
        <RevealOnScroll>
          <div className="text-center mt-10">
            <motion.a
              href="https://github.com/yenugah80"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-muted/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-all"
              whileHover={{ y: -2 }}
            >
              <Github size={18} />
              <span className="font-medium">Explore more on GitHub</span>
              <Sparkles size={14} className="text-primary" />
            </motion.a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
