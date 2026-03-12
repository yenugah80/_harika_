'use client'

import { Mail, Linkedin, Github, BookOpen } from 'lucide-react'
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
          <div className="text-center mb-10">
            <span className="badge mb-4 inline-block">Contact</span>
            <h2 className="text-2xl md:text-3xl font-medium mb-4">
              Get in Touch
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Open to opportunities in Data Science, ML Engineering, and AI leadership roles.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="max-w-md mx-auto">
            <div className="glass rounded-xl p-6 space-y-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <link.icon size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{link.label}</p>
                    <p className="text-xs text-muted-foreground">{link.text}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center mt-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-sm text-emerald-500">Available for opportunities</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
