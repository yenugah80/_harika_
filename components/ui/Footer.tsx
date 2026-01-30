'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, BookOpen, Heart } from 'lucide-react'

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/harika-ye',
    label: 'LinkedIn',
  },
  {
    icon: Github,
    href: 'https://github.com/yenugah80',
    label: 'GitHub',
  },
  {
    icon: BookOpen,
    href: 'https://harikayenuga.medium.com',
    label: 'Medium',
  },
  {
    icon: Mail,
    href: 'mailto:yenugaharika555@gmail.com',
    label: 'Email',
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container-custom mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text mb-2">Harika Y</h3>
            <p className="text-sm text-muted-foreground">
              Building intelligent AI systems
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted/30 hover:bg-primary/10 border border-border/50 hover:border-primary/30 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <link.icon size={20} className="text-muted-foreground hover:text-primary" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Harika Y
          </p>
          <p>&copy; {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
