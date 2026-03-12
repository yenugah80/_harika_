'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, BookOpen, ArrowUpRight } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const links = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:yenugaharika555@gmail.com',
    text: 'yenugaharika555@gmail.com',
    accent: 'primary',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/harika-ye',
    text: 'linkedin.com/in/harika-ye',
    accent: 'secondary',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/yenugah80',
    text: 'github.com/yenugah80',
    accent: 'accent',
  },
  {
    icon: BookOpen,
    label: 'Medium',
    href: 'https://harikayenuga.medium.com',
    text: 'harikayenuga.medium.com',
    accent: 'warm',
  },
]

const accentMap: Record<string, { bg: string; border: string; text: string }> = {
  primary: {
    bg: 'hsl(var(--primary) / 0.1)',
    border: 'hsl(var(--primary) / 0.25)',
    text: 'hsl(var(--primary))',
  },
  secondary: {
    bg: 'hsl(var(--secondary) / 0.1)',
    border: 'hsl(var(--secondary) / 0.25)',
    text: 'hsl(var(--secondary))',
  },
  accent: {
    bg: 'hsl(var(--accent) / 0.1)',
    border: 'hsl(var(--accent) / 0.25)',
    text: 'hsl(var(--accent))',
  },
  warm: {
    bg: 'hsl(var(--warm-light) / 0.1)',
    border: 'hsl(var(--warm-light) / 0.25)',
    text: 'hsl(var(--warm-light))',
  },
}

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-custom mx-auto">
        <RevealOnScroll>
          <div className="section-header">
            <span className="badge mb-6">Connect</span>
            <h2>
              Let&apos;s <span className="gradient-text">Work Together</span>
            </h2>
            <p>
              Open to opportunities in Data Science, ML Engineering, and AI leadership roles.
              Always happy to chat about interesting problems.
            </p>
          </div>
        </RevealOnScroll>

        <div className="max-w-lg mx-auto">
          {/* Contact links */}
          <RevealOnScroll>
            <div className="space-y-3">
              {links.map((link, index) => {
                const colors = accentMap[link.accent]
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="card-interactive flex items-center gap-4 p-5 group"
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                      style={{
                        background: colors.bg,
                        border: `1px solid ${colors.border}`,
                      }}
                    >
                      <link.icon size={20} style={{ color: colors.text }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium mb-0.5">{link.label}</p>
                      <p className="text-sm truncate" style={{ color: 'hsl(var(--muted-foreground))' }}>
                        {link.text}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="opacity-0 group-hover:opacity-100 transition-all shrink-0"
                      style={{ color: colors.text }}
                    />
                  </motion.a>
                )
              })}
            </div>
          </RevealOnScroll>

          {/* Availability status */}
          <RevealOnScroll delay={0.15}>
            <div className="text-center mt-10">
              <div className="status-indicator inline-flex">
                <span className="status-dot" />
                <span>Available for new opportunities</span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Response note */}
          <RevealOnScroll delay={0.2}>
            <p
              className="text-center mt-6 text-sm"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              Response time: Usually within 24 hours
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
