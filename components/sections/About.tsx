'use client'

import { motion } from 'framer-motion'
import { Brain, Users, Rocket, GraduationCap, Award } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const values = [
  {
    icon: Brain,
    title: 'AI Systems Architect',
    description:
      'Designing end-to-end AI platforms that balance model capability, latency, cost efficiency, and operational stability.',
  },
  {
    icon: Users,
    title: 'Bridge Builder',
    description:
      'Translating ambiguous business needs into scalable AI architectures, working at the intersection of engineering, product, and platform teams.',
  },
  {
    icon: Rocket,
    title: 'Production-First Mindset',
    description:
      'Building AI systems that teams can trust — with emphasis on operational reliability, explainability, and responsible AI adoption.',
  },
]

export function About() {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container-custom mx-auto relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="badge mb-4 inline-block">About Me</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Transforming <span className="gradient-text">Data</span> into{' '}
              <span className="gradient-text">Intelligence</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              After years in the IT world, from Apple to Bank of America and Macy&apos;s Inc,
              every project brought its own challenges and the opportunity to grow.
              What I value most is how consulting teaches you to stay agile,
              solution-oriented, and client-focused no matter how complex the problem.
            </p>
          </div>
        </RevealOnScroll>

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {values.map((value, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <motion.div
                className="glass rounded-2xl p-8 h-full hover-card group"
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:glow transition-all duration-300">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Education & Recognition */}
        <RevealOnScroll>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Education</h3>
                  <p className="text-sm text-muted-foreground">Academic Background</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-secondary/50 pl-4">
                  <h4 className="font-semibold">MS Business Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    Northwood University • GPA: 3.87/4.00 • 2024
                  </p>
                </div>
                <div className="border-l-2 border-secondary/50 pl-4">
                  <h4 className="font-semibold">B.Tech Electronics & Communications</h4>
                  <p className="text-sm text-muted-foreground">
                    JNTU • 2015-2019
                  </p>
                </div>
              </div>
            </div>

            {/* Recognition */}
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Recognition</h3>
                  <p className="text-sm text-muted-foreground">Achievements & Publications</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-accent/50 pl-4">
                  <h4 className="font-semibold">Research Publication</h4>
                  <p className="text-sm text-muted-foreground">
                    Predictive Hiring with ML • IBAC May 2025
                  </p>
                </div>
                <div className="border-l-2 border-accent/50 pl-4">
                  <h4 className="font-semibold">Spot Awards (x2)</h4>
                  <p className="text-sm text-muted-foreground">
                    Apple Inc. • Exemplary Performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
