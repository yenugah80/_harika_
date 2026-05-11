'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, PenTool, Mail } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const ease = [0.25, 0.4, 0.25, 1]

const pages = [
  {
    icon: Briefcase,
    title: 'Work',
    description: 'Professional experience and side projects',
    href: '/work',
  },
  {
    icon: PenTool,
    title: 'Writing',
    description: 'Blog posts and research papers',
    href: '/blog',
  },
  {
    icon: Mail,
    title: 'Contact',
    description: 'Let\'s connect and collaborate',
    href: '/contact',
  },
]

export function HomeCallToAction() {
  return (
    <section className="py-32 md:py-40">
      <div className="container mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              <span className="w-8 h-px bg-white/20" />
              Explore
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-3xl md:text-4xl font-semibold tracking-normal text-white"
          >
            Learn more
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4">
          {pages.map((page, index) => (
            <motion.div
              key={page.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease }}
            >
              <Link href={page.href} className="block group">
                <div
                  className={cn(
                    'p-6 rounded-2xl h-full',
                    'bg-white/[0.02] border border-white/[0.06]',
                    'transition-all duration-300',
                    'hover:bg-white/[0.04] hover:border-white/[0.1]'
                  )}
                >
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5 group-hover:border-white/[0.1] transition-colors">
                    <page.icon
                      size={20}
                      className="text-white/50 group-hover:text-white/70 transition-colors"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed mb-5">
                    {page.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-sm font-medium text-white/30 group-hover:text-white/60 transition-colors">
                    <span>View</span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
