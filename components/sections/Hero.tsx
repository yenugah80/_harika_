'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/harika-ye' },
  { label: 'GitHub', href: 'https://github.com/yenugah80' },
  { label: 'Medium', href: 'https://harikayenuga.medium.com' },
]

// Elegant ease curve
const ease = [0.25, 0.4, 0.25, 1]

// Subtle floating shape component
function FloatingShape({
  className,
  delay = 0,
  size = 400,
  gradient = 'from-primary/10',
}: {
  className?: string
  delay?: number
  size?: number
  gradient?: string
}) {
  return (
    <motion.div
      className={cn('absolute pointer-events-none', className)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay, ease }}
    >
      <motion.div
        className={cn(
          'rounded-full bg-gradient-to-br to-transparent blur-3xl',
          gradient
        )}
        style={{ width: size, height: size }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  )
}

// Animated line decoration
function DecorativeLine({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 1, delay, ease }}
    />
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      {/* Floating shapes - warm gold tones */}
      <FloatingShape
        className="-top-20 -left-20"
        size={600}
        gradient="from-amber-500/8"
        delay={0}
      />
      <FloatingShape
        className="top-1/3 -right-32"
        size={400}
        gradient="from-orange-400/5"
        delay={0.3}
      />
      <FloatingShape
        className="-bottom-32 left-1/4"
        size={500}
        gradient="from-yellow-600/5"
        delay={0.6}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
              </span>
              <span className="text-sm font-medium text-white/70">
                Open to opportunities
              </span>
            </div>
          </motion.div>

          {/* Name with elegant typography */}
          <div className="mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-normal leading-tight"
            >
              <span className="block bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
                Hi, I'm Harika
              </span>
            </motion.h1>
          </div>

          {/* Role with gradient */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mb-8"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-normal text-white/40">
              Lead AI Engineer
            </p>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mb-12"
          >
            <p className="text-lg md:text-xl leading-relaxed text-white/50 max-w-2xl">
              8 years building AI systems that matter. Currently leading GenAI at{' '}
              <span className="text-primary font-medium">Macy&apos;s</span>. Previously{' '}
              <span className="text-white/80 font-medium">Apple</span> &{' '}
              <span className="text-white/80 font-medium">Bank of America</span>.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <Link href="/work">
              <motion.button
                type="button"
                className={cn(
                  'group inline-flex items-center gap-2 px-6 py-3 rounded-full',
                  'bg-white text-black font-medium text-sm',
                  'transition-all duration-300',
                  'hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]'
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View my work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                type="button"
                className={cn(
                  'inline-flex items-center gap-2 px-6 py-3 rounded-full',
                  'bg-transparent text-white font-medium text-sm',
                  'border border-white/[0.12] backdrop-blur-sm',
                  'transition-all duration-300',
                  'hover:bg-white/[0.05] hover:border-white/[0.2]'
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in touch
              </motion.button>
            </Link>
          </motion.div>

          {/* Socials with elegant styling */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease }}
            className="flex items-center gap-8"
          >
            <DecorativeLine delay={0.7} />
            <div className="flex items-center gap-6">
              {socials.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-sm text-white/40 hover:text-white transition-colors duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1, ease }}
                >
                  {social.label}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-2"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            className="w-1 h-1.5 rounded-full bg-white/40"
            animate={{ opacity: [0.4, 1, 0.4], y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
