'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/harika-ye' },
  { label: 'GitHub', href: 'https://github.com/yenugah80' },
  { label: 'Medium', href: 'https://harikayenuga.medium.com' },
]

export function Hero() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl">
        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
        >
          <span className="block text-foreground">Harika Yenuga</span>
          <span className="block text-muted-foreground">Data Science & AI/ML</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-10"
        >
          8+ years building enterprise-grade ML systems across retail, banking, and technology.
          From fraud detection to GenAI platforms, I ship production AI that drives real business outcomes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          <Link href="/blog">
            <button type="button" className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
              Read my writing
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-lg font-medium text-sm hover:bg-card transition-colors"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-6"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {social.label}
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
