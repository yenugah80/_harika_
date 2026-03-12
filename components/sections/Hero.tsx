'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/harika-ye' },
  { label: 'GitHub', href: 'https://github.com/yenugah80' },
  { label: 'Medium', href: 'https://harikayenuga.medium.com' },
]

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl">
        {/* Greeting badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground/80">Open to new opportunities</span>
          </div>
        </motion.div>

        {/* Name and title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-4">
            <span className="block text-foreground">Hi, I&apos;m Harika</span>
            <span className="block gradient-text">Data Science & AI</span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
        >
          I help companies turn complex data into intelligent systems.
          Over 8 years, I&apos;ve built ML platforms at <span className="text-primary font-medium">Apple</span>,
          fraud detection at <span className="text-secondary font-medium">Bank of America</span>,
          and now leading GenAI at <span className="text-accent font-medium">Macy&apos;s</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-14"
        >
          <Link href="/blog">
            <button type="button" className="btn-primary">
              Read my writing
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          <a href="#contact" className="btn-outline">
            Let&apos;s connect
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-8"
        >
          <span className="text-sm text-muted-foreground">Find me on</span>
          <div className="flex gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {social.label}
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
