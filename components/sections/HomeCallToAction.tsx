'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, PenTool, Mail } from 'lucide-react'
import Link from 'next/link'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { TiltCard } from '@/components/ui/TiltCard'

const pages = [
  {
    icon: Briefcase,
    title: 'Work',
    description: '8 years at Apple, Bank of America, and Macy\'s. Plus side projects and research.',
    href: '/work',
    color: 'primary',
  },
  {
    icon: PenTool,
    title: 'Writing',
    description: 'Blog posts, research papers, and thoughts on building AI systems.',
    href: '/blog',
    color: 'secondary',
  },
  {
    icon: Mail,
    title: 'Contact',
    description: 'Open to AI/ML leadership roles and interesting collaborations.',
    href: '/contact',
    color: 'accent',
  },
]

const colorMap: Record<string, string> = {
  primary: 'hsl(210 100% 50%)',
  secondary: 'hsl(24 100% 55%)',
  accent: 'hsl(160 50% 45%)',
}

export function HomeCallToAction() {
  return (
    <section className="section">
      <div className="container-custom mx-auto">
        <RevealOnScroll>
          <div className="section-header">
            <span className="badge mb-6">Explore</span>
            <h2>
              See My <span className="gradient-text">Work</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pages.map((page, index) => (
            <RevealOnScroll key={page.title} delay={index * 0.1}>
              <Link href={page.href}>
                <TiltCard>
                  <motion.div
                    className="group p-6 h-full rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-500 cursor-pointer"
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  >
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{
                        background: `${colorMap[page.color]}15`,
                        border: `1px solid ${colorMap[page.color]}30`,
                      }}
                    >
                      <page.icon size={22} style={{ color: colorMap[page.color] }} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-5">
                      {page.description}
                    </p>

                    {/* Arrow */}
                    <div className="flex items-center gap-2 text-sm font-medium" style={{ color: colorMap[page.color] }}>
                      <span>Explore</span>
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </motion.div>
                </TiltCard>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
