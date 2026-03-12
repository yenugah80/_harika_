'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, BookOpen, Send, MessageCircle } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const links = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:yenugaharika555@gmail.com',
    text: 'yenugaharika555@gmail.com',
    color: 'primary',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/harika-ye',
    text: 'linkedin.com/in/harika-ye',
    color: 'secondary',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/yenugah80',
    text: 'github.com/yenugah80',
    color: 'accent',
  },
  {
    icon: BookOpen,
    label: 'Medium',
    href: 'https://harikayenuga.medium.com',
    text: 'harikayenuga.medium.com',
    color: 'primary',
  },
]

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-custom mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-14">
            <span className="badge mb-4">Connect</span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Let&apos;s <span className="gradient-text">Work Together</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Open to opportunities in Data Science, ML Engineering, and AI leadership roles.
              Always happy to chat about interesting problems.
            </p>
          </div>
        </RevealOnScroll>

        <div className="max-w-xl mx-auto">
          {/* Contact card */}
          <RevealOnScroll>
            <motion.div
              className="card-3d p-6 md:p-8 relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/5 via-secondary/5 to-transparent rounded-bl-full" />

              <div className="relative z-10 space-y-4">
                {links.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/60 border border-border/30 hover:border-border/60 transition-all group"
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: `hsl(var(--${link.color}) / 0.1)`,
                        borderWidth: '1px',
                        borderColor: `hsl(var(--${link.color}) / 0.2)`,
                      }}
                    >
                      <link.icon
                        size={20}
                        style={{ color: `hsl(var(--${link.color}))` }}
                        className="group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium">{link.label}</p>
                      <p className="text-sm text-muted-foreground truncate">{link.text}</p>
                    </div>
                    <Send size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </RevealOnScroll>

          {/* Availability status */}
          <RevealOnScroll delay={0.2}>
            <div className="text-center mt-8">
              <motion.div
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-sm font-medium text-emerald-400">Available for new opportunities</span>
              </motion.div>
            </div>
          </RevealOnScroll>

          {/* Quick message prompt */}
          <RevealOnScroll delay={0.3}>
            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <MessageCircle size={14} />
                Response time: Usually within 24 hours
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
