'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, BookOpen, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const ease = [0.25, 0.4, 0.25, 1]

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Send a private note',
    href: 'mailto:harika20y@gmail.com',
    description: 'Best way to reach me',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/harika-ye',
    href: 'https://linkedin.com/in/harika-ye',
    description: 'Professional network',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/yenugah80',
    href: 'https://github.com/yenugah80',
    description: 'Open source work',
  },
  {
    icon: BookOpen,
    label: 'Medium',
    value: 'harikayenuga.medium.com',
    href: 'https://harikayenuga.medium.com',
    description: 'Technical writing',
  },
]

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  description,
  index,
}: (typeof links)[0] & { index: number }) {
  const isEmail = href.startsWith('mailto')

  return (
    <motion.a
      href={href}
      target={isEmail ? undefined : '_blank'}
      rel={isEmail ? undefined : 'noopener noreferrer'}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease }}
      className={cn(
        'group flex items-center gap-5 p-5 md:p-6 rounded-2xl',
        'bg-white/[0.02] border border-white/[0.06]',
        'transition-all duration-300',
        'hover:bg-white/[0.04] hover:border-white/[0.1]'
      )}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:border-white/[0.1] transition-colors">
        <Icon size={20} className="text-white/50 group-hover:text-white/70 transition-colors" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-base font-medium text-white group-hover:text-primary transition-colors">
            {label}
          </span>
        </div>
        <p className="text-sm text-white/35 truncate">{value}</p>
      </div>

      {/* Arrow */}
      <ArrowUpRight
        size={18}
        className="text-white/20 group-hover:text-white/50 transition-all shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </motion.a>
  )
}

export function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-8 relative overflow-hidden">
        {/* Subtle gradient */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none blur-[120px] bg-primary" />

        <div className="container mx-auto max-w-2xl relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/35 hover:text-white transition-colors group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
              Back home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              <span className="w-8 h-px bg-white/20" />
              Contact
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="text-4xl md:text-5xl font-semibold tracking-normal mb-6"
          >
            <span className="text-white">Let&apos;s </span>
            <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              connect
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="text-lg text-white/40 mb-4"
          >
            Open to AI/ML leadership roles, consulting opportunities, and thoughtful collaborations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
            className="flex items-center gap-2 text-sm text-white/30"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>Usually responds within 24 hours</span>
          </motion.div>
        </div>
      </section>

      {/* Contact Links */}
      <section className="py-10 px-6 md:px-8">
        <div className="container mx-auto max-w-2xl">
          <div className="space-y-3">
            {links.map((link, index) => (
              <ContactCard key={link.label} {...link} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 px-6 md:px-8">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center"
          >
            <p className="text-white/50 mb-4">
              Based in the United States, working with teams globally.
            </p>
            <p className="text-sm text-white/30">
              Available for remote and hybrid opportunities.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
