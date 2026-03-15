'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'Writing', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/harika-ye' },
  { label: 'GitHub', href: 'https://github.com/yenugah80' },
  { label: 'Medium', href: 'https://harikayenuga.medium.com' },
  { label: 'RSS', href: '/rss.xml' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50">
      <div className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Brand */}
            <div>
              <Link href="/" className="text-lg font-medium tracking-tight mb-4 block">
                Harika Y.
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Senior AI/ML Engineer building production systems. Currently at Macy&apos;s.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Navigation</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-muted-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Connect</p>
              <ul className="space-y-3">
                {socials.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group inline-flex items-center gap-1 text-sm hover:text-muted-foreground transition-colors"
                    >
                      {link.label}
                      {link.href.startsWith('http') && (
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} Harika Yenuga. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
