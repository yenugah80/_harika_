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
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/harika-ye',
    text: 'linkedin.com/in/harika-ye',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/yenugah80',
    text: 'github.com/yenugah80',
  },
  {
    icon: BookOpen,
    label: 'Medium',
    href: 'https://harikayenuga.medium.com',
    text: 'harikayenuga.medium.com',
  },
]

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-custom mx-auto">
        <RevealOnScroll>
          <div className="section-header">
            <span className="badge mb-6">Contact</span>
            <h2>
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p>
              Open to AI/ML leadership roles. Always happy to chat about interesting problems.
            </p>
          </div>
        </RevealOnScroll>

        <div className="max-w-md mx-auto">
          <RevealOnScroll>
            <div className="space-y-3">
              {links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="card-interactive flex items-center gap-4 p-5 group"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: 'hsl(var(--primary) / 0.1)',
                      border: '1px solid hsl(var(--primary) / 0.15)',
                    }}
                  >
                    <link.icon size={18} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium mb-0.5">{link.label}</p>
                    <p className="text-sm text-muted truncate">{link.text}</p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-muted opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                  />
                </motion.a>
              ))}
            </div>
          </RevealOnScroll>

          {/* Status */}
          <RevealOnScroll delay={0.15}>
            <div className="text-center mt-10">
              <div className="status-indicator inline-flex">
                <span className="status-dot" />
                <span>Available for new opportunities</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
