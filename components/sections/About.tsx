'use client'

import { motion } from 'framer-motion'
import { Brain, Users, Rocket, GraduationCap, Award } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const values = [
  {
    icon: Brain,
    title: 'End-to-End Ownership',
    description:
      'From data pipelines to model deployment and monitoring. I own the full stack and take responsibility for what ships to production.',
  },
  {
    icon: Users,
    title: 'Business First',
    description:
      'I start with the problem, not the tech. Translating ML capabilities into measurable business outcomes is what matters.',
  },
  {
    icon: Rocket,
    title: 'Production Ready',
    description:
      'Success is measured by what runs in production, handles real traffic, and drives real revenue. MLOps is core to the job.',
  },
]

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-custom mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-10">
            <span className="badge mb-4 inline-block">About</span>
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              8 Years of Building ML Systems
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Data Science and ML engineering across retail analytics, financial services, and enterprise AI.
              Built forecasting systems at Apple, fraud detection at Bank of America,
              and now leading GenAI infrastructure at Macy&apos;s.
            </p>
          </div>
        </RevealOnScroll>

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {values.map((value, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className="glass rounded-xl p-6 h-full">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Education & Recognition */}
        <RevealOnScroll>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Education */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-medium">Education</h3>
              </div>
              <div className="space-y-3">
                <div className="border-l-2 border-border pl-4">
                  <h4 className="font-medium text-sm">MS Business Analytics</h4>
                  <p className="text-xs text-muted-foreground">
                    Northwood University | GPA: 3.87 | 2024
                  </p>
                </div>
                <div className="border-l-2 border-border pl-4">
                  <h4 className="font-medium text-sm">B.Tech Electronics & Communications</h4>
                  <p className="text-xs text-muted-foreground">
                    JNTU | 2015-2019
                  </p>
                </div>
              </div>
            </div>

            {/* Recognition */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <Award className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-medium">Recognition</h3>
              </div>
              <div className="space-y-3">
                <div className="border-l-2 border-border pl-4">
                  <h4 className="font-medium text-sm">Research Publication</h4>
                  <p className="text-xs text-muted-foreground">
                    Predictive Hiring with ML | IBAC 2025
                  </p>
                </div>
                <div className="border-l-2 border-border pl-4">
                  <h4 className="font-medium text-sm">Spot Awards (x2)</h4>
                  <p className="text-xs text-muted-foreground">
                    Apple Inc. | Exemplary Performance
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
