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
    <section className="min-h-[92vh] flex items-center px-6 md:px-12 lg:px-20 py-24">
      <div className="max-w-3xl">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="mb-10"
        >
          <div className="status-indicator">
            <span className="status-dot" />
            <span>Open to opportunities</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
          className="mb-8"
        >
          <h1 className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.035em] leading-[1.08]">
            <span className="block mb-2">Hi, I&apos;m Harika</span>
            <span className="block gradient-text">Data Science & AI</span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
          className="text-lg md:text-xl leading-[1.7] max-w-xl mb-12"
          style={{ color: 'hsl(var(--foreground-muted))' }}
        >
          I help companies turn complex data into intelligent systems.
          Over 8 years, I&apos;ve built ML platforms at{' '}
          <span className="text-primary font-medium">Apple</span>,
          fraud detection at{' '}
          <span className="text-secondary font-medium">Bank of America</span>,
          and now leading GenAI at{' '}
          <span className="text-accent font-medium">Macy&apos;s</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: easeOut }}
          className="flex flex-wrap gap-4 mb-16"
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
            Let&apos;s connect
          </motion.a>
        </motion.div>

        {/* Social links with animated underline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45, ease: easeOut }}
          className="flex items-center gap-8"
        >
          <span className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
            Find me on
          </span>
          <div className="flex gap-8">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-1.5 text-sm link-underline"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                {social.label}
                <ArrowUpRight
                  className="w-3.5 h-3.5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0"
                  style={{ transition: 'all 0.2s cubic-bezier(0.44, 0, 0.56, 1)' }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
