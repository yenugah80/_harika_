'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Target, Rocket, GraduationCap, Award, Quote } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const principles = [
  {
    icon: Lightbulb,
    title: 'Problem First, Tech Second',
    description: 'I start every project by deeply understanding the business problem. The best solution is often simpler than you think.',
    color: 'primary',
  },
  {
    icon: Target,
    title: 'Own It End-to-End',
    description: 'From data pipelines to production monitoring, I take full responsibility. When something breaks, I fix it.',
    color: 'secondary',
  },
  {
    icon: Rocket,
    title: 'Ship, Learn, Iterate',
    description: 'Perfection is the enemy of progress. I believe in shipping fast, measuring impact, and continuously improving.',
    color: 'accent',
  },
]

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-custom mx-auto">
        {/* Intro */}
        <RevealOnScroll>
          <div className="text-center mb-14">
            <span className="badge mb-4">About Me</span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Building AI That <span className="gradient-text">Actually Works</span>
            </h2>
          </div>
        </RevealOnScroll>

        {/* Quote card */}
        <RevealOnScroll>
          <motion.div
            className="card-3d p-8 md:p-10 mb-12 relative overflow-hidden"
            whileHover={{ scale: 1.01 }}
          >
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6 max-w-3xl">
                Over 8 years, I&apos;ve learned that the hard part of AI isn&apos;t building the model.
                It&apos;s everything else: data quality, stakeholder alignment, production reliability,
                and building systems people actually trust.
              </p>
              <p className="text-muted-foreground">
                I&apos;ve built forecasting systems at Apple, protected billions in transactions at Bank of America,
                and now I&apos;m leading GenAI transformation at Macy&apos;s. Each role taught me that
                <span className="text-primary font-medium"> shipping beats perfecting</span>.
              </p>
            </div>
          </motion.div>
        </RevealOnScroll>

        {/* Principles */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {principles.map((principle, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <motion.div
                className="card-3d p-6 h-full"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-${principle.color}/10 border border-${principle.color}/20 flex items-center justify-center mb-5`}
                  style={{
                    background: `hsl(var(--${principle.color}) / 0.1)`,
                    borderColor: `hsl(var(--${principle.color}) / 0.2)`,
                  }}
                >
                  <principle.icon
                    className="w-6 h-6"
                    style={{ color: `hsl(var(--${principle.color}))` }}
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{principle.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{principle.description}</p>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Education & Recognition */}
        <div className="grid md:grid-cols-2 gap-6">
          <RevealOnScroll>
            <div className="card-3d p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-secondary/30">
                  <p className="font-medium">MS Business Analytics</p>
                  <p className="text-sm text-muted-foreground">Northwood University | GPA 3.87 | 2024</p>
                </div>
                <div className="pl-4 border-l-2 border-secondary/30">
                  <p className="font-medium">B.Tech Electronics & Communications</p>
                  <p className="text-sm text-muted-foreground">JNTU | 2015-2019</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="card-3d p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold">Recognition</h3>
              </div>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-accent/30">
                  <p className="font-medium">Research Publication</p>
                  <p className="text-sm text-muted-foreground">Predictive Hiring with ML | IBAC 2025</p>
                </div>
                <div className="pl-4 border-l-2 border-accent/30">
                  <p className="font-medium">Spot Awards (x2)</p>
                  <p className="text-sm text-muted-foreground">Apple Inc. | Exemplary Performance</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
