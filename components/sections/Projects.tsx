'use client'

import { ExternalLink, Github } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const projects = [
  {
    title: 'MyFoodTracker',
    description: 'Full-stack AI nutrition platform with custom vision model trained on 100K+ food images. Includes recommendation engine and analytics dashboard.',
    technologies: ['TypeScript', 'React', 'TensorFlow', 'Node.js', 'D3.js'],
    github: 'https://github.com/yenugah80/mftweb',
    live: 'https://my-food-tracker.com',
    featured: true,
  },
  {
    title: 'Bias-Aware Hiring ML',
    description: 'Research paper on predictive hiring models achieving 97% accuracy with 40% less demographic bias. Published at IBAC 2025.',
    technologies: ['Python', 'CatBoost', 'XGBoost', 'SHAP', 'Fairlearn'],
    github: 'https://github.com/yenugah80/Revolutionizing-Recruitment-Enhanced-Machine-Learning-Models-for-Bias-Mitigation-and-Efficiency',
  },
  {
    title: 'Mermaid Maker',
    description: 'LLM-powered diagram generator. Describe diagrams in plain English, get Mermaid syntax. 500+ diagrams generated.',
    technologies: ['TypeScript', 'GPT-4', 'Mermaid.js', 'React'],
    github: 'https://github.com/yenugah80/Mermaid-Maker',
  },
  {
    title: 'Multi-Agent AI System',
    description: 'Production LangGraph architecture for autonomous AI agents. Problem decomposition, tool selection, SQL generation, and self-correction.',
    technologies: ['LangGraph', 'LangChain', 'FastAPI', 'Bedrock'],
    github: 'https://github.com/yenugah80',
  },
]

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-custom mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-10">
            <span className="badge mb-4 inline-block">Projects</span>
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              Side Projects & Research
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className={`glass rounded-xl p-6 h-full ${project.featured ? 'md:col-span-2' : ''}`}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  <div className="flex items-center gap-2">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View live demo"
                        className="p-1.5 hover:bg-muted rounded-md transition-colors"
                      >
                        <ExternalLink size={16} className="text-muted-foreground" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View on GitHub"
                      className="p-1.5 hover:bg-muted rounded-md transition-colors"
                    >
                      <Github size={16} className="text-muted-foreground" />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs bg-muted rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <div className="text-center mt-8">
            <a
              href="https://github.com/yenugah80"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={16} />
              View all on GitHub
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
