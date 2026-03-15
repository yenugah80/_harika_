'use client'

import { motion } from 'framer-motion'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const milestones = [
  {
    year: '2025',
    title: 'Leading GenAI at Macy\'s',
    description: 'Building the AI platform from scratch, architecting RAG systems for 500+ stores.',
  },
  {
    year: '2022',
    title: 'Senior AI at Bank of America',
    description: 'Fraud detection systems protecting billions in daily transactions.',
  },
  {
    year: '2019',
    title: 'AI Engineer at Apple',
    description: 'Demand forecasting models processing 50M+ daily transactions.',
  },
  {
    year: '2017',
    title: 'Where it began',
    description: 'Data engineering for Smart Cities, processing satellite imagery.',
  },
]

const easeOut = [0.16, 1, 0.3, 1]

export function Story() {
  return (
    <section id="story" className="section relative overflow-hidden">
      <div className="container-custom mx-auto">
        <RevealOnScroll>
          <div className="section-header">
            <span className="badge mb-6">My Story</span>
            <h2>
              8 Years of <span className="gradient-text">Building</span>
            </h2>
          </div>
        </RevealOnScroll>

        {/* Story content */}
        <div className="max-w-3xl mx-auto">
          <RevealOnScroll>
            <p className="text-xl md:text-2xl leading-relaxed text-white/80 mb-12">
              I fell in love with data when I saw satellite imagery transform into
              actionable insights for smart cities. That spark led me through
              <span className="text-primary"> Apple</span>,
              <span className="text-primary"> Bank of America</span>, and now
              <span className="text-primary"> Macy&apos;s</span>. Each role teaching me
              that the real challenge isn&apos;t building models, it&apos;s building trust.
            </p>
          </RevealOnScroll>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <RevealOnScroll
                  key={milestone.year}
                  delay={index * 0.15}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                >
                  <motion.div
                    className={`relative flex items-start gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    whileHover={{ x: index % 2 === 0 ? 5 : -5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_hsl(210_100%_50%/0.5)]" />

                    {/* Content */}
                    <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <span className="text-sm text-primary font-medium">{milestone.year}</span>
                      <h3 className="text-xl font-semibold mt-1 mb-2">{milestone.title}</h3>
                      <p className="text-white/50">{milestone.description}</p>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
