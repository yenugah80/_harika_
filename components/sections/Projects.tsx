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
  Search,
} from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const featuredProject = {
  title: 'MyFoodTracker',
  tagline: 'A Personal Problem That Became a Platform',
  description:
    'It started with frustration. Existing nutrition apps felt slow and inaccurate. So one weekend, I decided to build something better. Six weeks later, I had a full AI platform: snap a photo, get instant nutrition data. The journey from "I can do this better" to "people are actually using this" was the most satisfying thing I have built.',
  icon: Utensils,
  highlights: [
    'Trained my own vision model on 100K+ food images. Watching it correctly identify a complex salad for the first time felt like magic',
    'Built a recommendation engine that learns what you like. Users tell me it feels like the app "gets" them',
    'Created dashboards that make data feel personal. Seeing your progress visualized keeps people coming back',
    'Made it production-ready because half-finished projects teach you nothing. CI/CD, Docker, auto-scaling, all of it',
  ],
  technologies: [
    'TypeScript',
    'React',
    'Node.js',
    'TensorFlow',
    'D3.js',
    'Docker',
  ],
  links: {
    live: 'https://my-food-tracker.com',
    github: 'https://github.com/yenugah80/mftweb',
  },
  color: 'primary',
}

const projects = [
  {
    title: 'Bias-Aware Hiring ML',
    subtitle: 'Published Research | IBAC 2025',
    description:
      'This one kept me up at night. Hiring algorithms can perpetuate the very biases we are trying to eliminate. I wanted to prove we could have both: high accuracy AND fairness. The result? A paper accepted at IBAC 2025 showing 97% accuracy with 40% less demographic bias. Sometimes the most important problems are also the hardest.',
    icon: TrendingUp,
    technologies: ['Python', 'CatBoost', 'XGBoost', 'SHAP', 'Fairlearn'],
    link: 'https://github.com/yenugah80/Revolutionizing-Recruitment-Enhanced-Machine-Learning-Models-for-Bias-Mitigation-and-Efficiency',
    color: 'secondary',
  },
  {
    title: 'Mermaid Maker',
    subtitle: 'LLM-Powered Diagram Generator',
    description:
      'Born from the frustration of writing diagram syntax for the hundredth time. Now you just describe what you want in plain English. Over 500 diagrams generated so far. My favorite part? Watching people go from "that is cool" to "I use this every day."',
    icon: Sparkles,
    technologies: ['TypeScript', 'GPT-4', 'Mermaid.js', 'React'],
    link: 'https://github.com/yenugah80/Mermaid-Maker',
    color: 'accent',
  },
  {
    title: 'Enterprise Multi-Agent System',
    subtitle: 'Production LangGraph Architecture',
    description:
      'I kept wishing for AI that could actually do my tedious tasks, not just chat about them. So I built it. These agents decompose problems, pick tools, write SQL, and fix their own mistakes. Watching them solve real business problems feels like glimpsing the future.',
    icon: Bot,
    technologies: ['LangGraph', 'LangChain', 'FastAPI', 'Bedrock', 'Python'],
    link: 'https://github.com/yenugah80',
    color: 'primary',
  },
  {
    title: 'Neural Search Engine',
    subtitle: 'Semantic Retrieval at Scale',
    description:
      'Google search is great, but what if you could search by meaning instead of keywords? Built a semantic search system that understands context, handles synonyms, and returns relevant results even when exact terms are missing. 10M+ documents indexed, sub-100ms latency.',
    icon: Search,
    technologies: ['FAISS', 'Sentence Transformers', 'FastAPI', 'Redis', 'Docker'],
    link: 'https://github.com/yenugah80',
    color: 'secondary',
  },
]

export function Projects() {
  return (
    <section id="projects" className="section relative overflow-hidden">
      <div className="container-custom mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="badge-accent mb-4 inline-block">Side Projects & Research</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Curiosity</span> Projects
              <br className="hidden md:block" />
              <span className="text-foreground">That Became Real</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These started as &quot;what if&quot; questions on quiet evenings. Some became research papers.
              Some became tools people use daily. All of them taught me something I could not learn at work.
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
                <h4 className="text-lg font-semibold mb-4">What I Learned Building This</h4>
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
                className="glass rounded-2xl p-6 h-full hover-card group block card-shine inner-light"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:glow transition-all duration-500"
                    style={{
                      background: `hsl(var(--${project.color}) / 0.1)`,
                      borderWidth: '1px',
                      borderColor: `hsl(var(--${project.color}) / 0.3)`,
                    }}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <project.icon
                      className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: `hsl(var(--${project.color}))` }}
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {'subtitle' in project && (
                      <p className="text-xs text-muted-foreground mt-0.5">{project.subtitle}</p>
                    )}
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
