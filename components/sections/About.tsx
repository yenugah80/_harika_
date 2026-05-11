'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const ease = [0.25, 0.4, 0.25, 1]

const stats = [
  { value: '8+', label: 'Years Experience' },
  { value: '4', label: 'Companies' },
  { value: '50+', label: 'AI Systems Shipped' },
]

export function About() {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 relative">
        <div className="max-w-4xl mx-auto">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-12"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              <span className="w-8 h-px bg-white/20" />
              About
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-normal leading-tight mb-10"
          >
            <span className="text-white">Building AI systems that </span>
            <span className="bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              ship
            </span>
          </motion.h2>

          {/* Description paragraphs */}
          <div className="space-y-6 mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="text-lg md:text-xl leading-relaxed text-white/50"
            >
              The hard part of AI isn&apos;t building the model. It&apos;s everything else:
              data quality, stakeholder alignment, production reliability, and building
              systems people actually trust.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="text-base md:text-lg text-white/35 leading-relaxed"
            >
              8 years learning this at{' '}
              <span className="text-white/60 font-medium">Apple</span>,{' '}
              <span className="text-white/60 font-medium">Bank of America</span>, and now leading GenAI at{' '}
              <span className="text-white/60 font-medium">Macy&apos;s</span>.
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="grid grid-cols-3 gap-8 pt-10 border-t border-white/[0.06]"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease }}
                className="text-center md:text-left"
              >
                <div className="text-2xl md:text-3xl font-semibold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/30 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
