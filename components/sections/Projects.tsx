'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { TiltCard } from '@/components/ui/TiltCard'

const featuredProjects = [
  {
    title: 'MyFoodTracker',
    tagline: 'AI nutrition companion',
    description: 'Custom vision model trained on 100K+ food images for instant nutritional breakdown.',
    technologies: ['TensorFlow', 'React', 'Node.js'],
  },
  {
    title: 'Bias-Aware Hiring ML',
    tagline: 'IBAC 2025 publication',
    description: '97% accuracy while reducing demographic bias by 40% in predictive hiring.',
    technologies: ['CatBoost', 'SHAP', 'Fairlearn'],
  },
]

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-custom mx-auto">
        <RevealOnScroll>
          <div className="section-header">
            <span className="badge mb-6">Projects</span>
            <h2>
              Featured <span className="gradient-text">Work</span>
            </h2>
            <p>
              Side projects that reflect my curiosity about AI/ML.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {featuredProjects.map((project, index) => (
            <RevealOnScroll key={project.title} delay={index * 0.15}>
              <TiltCard>
                <div className="card-interactive p-6 h-full">
                  <p className="text-xs text-primary uppercase tracking-wider mb-2">
                    {project.tagline}
                  </p>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </RevealOnScroll>
          ))}
        </div>

        {/* View all work CTA */}
        <RevealOnScroll>
          <div className="text-center">
            <Link href="/work">
              <motion.button
                type="button"
                className="inline-flex items-center gap-3 px-6 py-3 text-sm font-medium rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View all projects
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
