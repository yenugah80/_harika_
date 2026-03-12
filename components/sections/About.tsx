'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Target, Rocket, GraduationCap, Award } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const principles = [
  {
    icon: Lightbulb,
    title: 'Problem First, Tech Second',
    description: 'I start every project by deeply understanding the business problem. The best solution is often simpler than you think.',
    accent: 'primary',
  },
  {
    icon: Target,
    title: 'Own It End-to-End',
    description: 'From data pipelines to production monitoring, I take full responsibility. When something breaks, I fix it.',
    accent: 'secondary',
  },
  {
    icon: Rocket,
    title: 'Ship, Learn, Iterate',
    description: 'Perfection is the enemy of progress. I believe in shipping fast, measuring impact, and continuously improving.',
    accent: 'accent',
  },
]

const accentMap: Record<string, { bg: string; border: string; text: string }> = {
  primary: {
    bg: 'hsl(var(--primary) / 0.1)',
    border: 'hsl(var(--primary) / 0.25)',
    text: 'hsl(var(--primary))',
  },
  secondary: {
    bg: 'hsl(var(--secondary) / 0.1)',
    border: 'hsl(var(--secondary) / 0.25)',
    text: 'hsl(var(--secondary))',
  },
  accent: {
    bg: 'hsl(var(--accent) / 0.1)',
    border: 'hsl(var(--accent) / 0.25)',
    text: 'hsl(var(--accent))',
  },
}

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-custom mx-auto">
        {/* Header */}
        <RevealOnScroll>
          <div className="section-header">
            <span className="badge mb-6">About Me</span>
            <h2>
              Building AI That <span className="gradient-text">Actually Works</span>
            </h2>
          </div>
        </RevealOnScroll>

        {/* Quote block */}
        <RevealOnScroll>
          <motion.div
            className="card-interactive p-8 md:p-10 mb-12 relative"
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative quote mark */}
            <div
              className="absolute top-6 left-6 text-6xl font-serif leading-none select-none"
              style={{ color: 'hsl(var(--primary) / 0.15)' }}
            >
              &ldquo;
            </div>

            <div className="relative z-10 pl-4 md:pl-8">
              <p
                className="text-xl md:text-2xl leading-[1.7] mb-6 max-w-3xl"
                style={{ color: 'hsl(var(--foreground) / 0.9)' }}
              >
                Over 8 years, I&apos;ve learned that the hard part of AI isn&apos;t building the model.
                It&apos;s everything else: data quality, stakeholder alignment, production reliability,
                and building systems people actually trust.
              </p>
              <p style={{ color: 'hsl(var(--foreground-muted))' }}>
                I&apos;ve built forecasting systems at Apple, protected billions in transactions at Bank of America,
                and now I&apos;m leading GenAI transformation at Macy&apos;s. Each role taught me that
                <span className="text-primary font-medium"> shipping beats perfecting</span>.
              </p>
            </div>
          </motion.div>
        </RevealOnScroll>

        {/* Principles */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {principles.map((principle, index) => {
            const colors = accentMap[principle.accent]
            return (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <motion.div
                  className="card-interactive p-6 h-full"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: colors.bg,
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    <principle.icon
                      className="w-5 h-5"
                      style={{ color: colors.text }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight mb-3">{principle.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--foreground-muted))' }}>
                    {principle.description}
                  </p>
                </motion.div>
              </RevealOnScroll>
            )
          })}
        </div>

        {/* Education & Recognition */}
        <div className="grid md:grid-cols-2 gap-5">
          <RevealOnScroll>
            <motion.div
              className="card-interactive p-6"
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: 'hsl(var(--secondary) / 0.1)',
                    border: '1px solid hsl(var(--secondary) / 0.25)',
                  }}
                >
                  <GraduationCap className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-semibold">Education</h3>
              </div>
              <div className="space-y-5">
                <div
                  className="pl-4"
                  style={{ borderLeft: '2px solid hsl(var(--secondary) / 0.3)' }}
                >
                  <p className="font-medium mb-1">MS Business Analytics</p>
                  <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    Northwood University | GPA 3.87 | 2024
                  </p>
                </div>
                <div
                  className="pl-4"
                  style={{ borderLeft: '2px solid hsl(var(--secondary) / 0.3)' }}
                >
                  <p className="font-medium mb-1">B.Tech Electronics & Communications</p>
                  <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    JNTU | 2015-2019
                  </p>
                </div>
              </div>
            </motion.div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <motion.div
              className="card-interactive p-6"
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: 'hsl(var(--accent) / 0.1)',
                    border: '1px solid hsl(var(--accent) / 0.25)',
                  }}
                >
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold">Recognition</h3>
              </div>
              <div className="space-y-5">
                <div
                  className="pl-4"
                  style={{ borderLeft: '2px solid hsl(var(--accent) / 0.3)' }}
                >
                  <p className="font-medium mb-1">Research Publication</p>
                  <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    Predictive Hiring with ML | IBAC 2025
                  </p>
                </div>
                <div
                  className="pl-4"
                  style={{ borderLeft: '2px solid hsl(var(--accent) / 0.3)' }}
                >
                  <p className="font-medium mb-1">Spot Awards (x2)</p>
                  <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    Apple Inc. | Exemplary Performance
                  </p>
                </div>
              </div>
            </motion.div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
