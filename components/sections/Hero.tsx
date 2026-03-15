'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/harika-ye' },
  { label: 'GitHub', href: 'https://github.com/yenugah80' },
  { label: 'Medium', href: 'https://harikayenuga.medium.com' },
]

const easeOut = [0.16, 1, 0.3, 1]

export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-32 relative">
      {/* Ambient glow */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(210 100% 55% / 0.4) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-4xl relative z-10">
        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-12"
        >
          <div className="status-indicator">
            <span className="status-dot" />
            <span>Open to opportunities</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.04em] leading-[0.95] mb-8"
        >
          <span className="block">Harika Yenuga</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
          className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] mb-8"
          style={{ color: 'hsl(var(--foreground-muted))' }}
        >
          Lead AI Engineer
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
          className="text-lg md:text-xl leading-relaxed max-w-2xl mb-14"
          style={{ color: 'hsl(var(--foreground-muted))' }}
        >
          8 years building AI systems that matter. Currently leading GenAI at{' '}
          <span className="text-primary">Macy&apos;s</span>. Previously{' '}
          <span style={{ color: 'hsl(var(--foreground))' }}>Apple</span> &{' '}
          <span style={{ color: 'hsl(var(--foreground))' }}>Bank of America</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: easeOut }}
          className="flex flex-wrap gap-4 mb-20"
        >
          <Link href="/blog">
            <motion.button
              type="button"
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Read my writing
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
          <motion.a
            href="#contact"
            className="btn-outline"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in touch
          </motion.a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: easeOut }}
          className="flex items-center gap-8"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-sm link-underline"
            >
              {social.label}
              <ArrowUpRight
                className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
