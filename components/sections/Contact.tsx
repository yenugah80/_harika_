'use client'

import { motion } from 'framer-motion'
import {
  Mail,
  Linkedin,
  Github,
  BookOpen,
  MessageSquare,
  ArrowRight,
} from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/harika-ye',
    description: "Let's connect professionally",
    color: 'primary',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/yenugah80',
    description: 'Check out my code',
    color: 'secondary',
  },
  {
    icon: BookOpen,
    label: 'Medium',
    href: 'https://harikayenuga.medium.com',
    description: 'Read my articles',
    color: 'accent',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:yenugaharika555@gmail.com',
    description: 'Drop me a message',
    color: 'primary',
  },
]

export function Contact() {
  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="container-custom mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="badge mb-4 inline-block">Let&apos;s Talk</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Looking for an{' '}
              <span className="gradient-text">AI Engineer</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I&apos;m actively exploring senior AI/ML roles where I can drive impact at scale.
              If you&apos;re building something ambitious with LLMs, MLOps, or data platforms, let&apos;s connect.
            </p>
          </div>
        </RevealOnScroll>

        {/* Main CTA */}
        <RevealOnScroll>
          <div className="glass rounded-3xl p-8 md:p-12 text-center mb-12 gradient-border">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-8">
              <MessageSquare className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Let&apos;s Ship Something Together
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Whether it&apos;s a full-time role, consulting engagement, or just a conversation
              about AI, I respond to every message. Let&apos;s see what we can build.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="mailto:yenugaharika555@gmail.com"
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} />
                Send an Email
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/harika-ye"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={18} />
                Connect on LinkedIn
              </motion.a>
            </div>
          </div>
        </RevealOnScroll>

        {/* Social Links Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((link, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <motion.a
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="glass rounded-2xl p-6 text-center hover-card group block card-shine depth-shadow"
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-500"
                  style={{
                    background: `hsl(var(--${link.color}) / 0.1)`,
                    borderWidth: '1px',
                    borderColor: `hsl(var(--${link.color}) / 0.3)`,
                  }}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <link.icon
                    className="w-7 h-7 group-hover:animate-pulse"
                    style={{ color: `hsl(var(--${link.color}))` }}
                  />
                </motion.div>
                <h4 className="font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                  {link.label}
                </h4>
                <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">{link.description}</p>
                <motion.div
                  className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 5 }}
                  whileHover={{ y: 0 }}
                >
                  <span className="text-xs font-medium" style={{ color: `hsl(var(--${link.color}))` }}>
                    Click to connect →
                  </span>
                </motion.div>
              </motion.a>
            </RevealOnScroll>
          ))}
        </div>

        {/* Availability Status */}
        <RevealOnScroll>
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="text-green-500 font-medium">
                Currently open to new opportunities
              </span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
