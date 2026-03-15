'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  Sparkles,
  Zap,
  Brain,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Terminal,
  Send,
  Star,
  Heart,
  Coffee,
} from 'lucide-react'

const easeOut = [0.16, 1, 0.3, 1]

// Floating icons for the background
const floatingIcons = [
  { Icon: Brain, color: 'primary', delay: 0 },
  { Icon: Cpu, color: 'secondary', delay: 0.5 },
  { Icon: Database, color: 'accent', delay: 1 },
  { Icon: GitBranch, color: 'success', delay: 1.5 },
  { Icon: Layers, color: 'primary', delay: 2 },
  { Icon: Terminal, color: 'secondary', delay: 2.5 },
  { Icon: Zap, color: 'accent', delay: 3 },
  { Icon: Sparkles, color: 'success', delay: 3.5 },
]


// Animated counter hook
function useAnimatedCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  const startAnimation = useCallback(() => {
    if (hasAnimated) return
    setHasAnimated(true)

    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [end, duration, hasAnimated])

  return { count, startAnimation }
}


// Typewriter effect
function TypewriterText({ text, className }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i))
        i++
      } else {
        clearInterval(timer)
      }
    }, 50)

    const cursorTimer = setInterval(() => {
      setCursorVisible(v => !v)
    }, 530)

    return () => {
      clearInterval(timer)
      clearInterval(cursorTimer)
    }
  }, [text])

  return (
    <span className={className}>
      {displayText}
      <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
    </span>
  )
}

// Glowing orb that follows cursor
function CursorGlow() {
  const [mounted, setMounted] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 50, damping: 20 })
  const springY = useSpring(y, { stiffness: 50, damping: 20 })

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [x, y])

  if (!mounted) return null

  return (
    <motion.div
      className="fixed w-96 h-96 pointer-events-none -z-10 opacity-30"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        background: 'radial-gradient(circle, hsl(210 100% 50% / 0.3) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }}
    />
  )
}

export function NewsletterPage() {
  const connectionCount = useAnimatedCounter(2000)
  const heroRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [0, 400], [5, -5])
  const rotateY = useTransform(mouseX, [0, 600], [-5, 5])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <CursorGlow />

      {/* Animated mesh background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(210 100% 50% / 0.08) 0%, transparent 60%)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(24 100% 50% / 0.06) 0%, transparent 60%)',
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Floating icons */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {floatingIcons.map(({ Icon, color, delay }, i) => (
          <motion.div
            key={i}
            className={`absolute text-${color} opacity-20`}
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${15 + Math.floor(i / 4) * 50}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 6 + i,
              delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon size={32 + i * 4} />
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-primary transition-all duration-300 mb-12 group"
            >
              <motion.span
                className="inline-block"
                whileHover={{ x: -4 }}
              >
                &larr;
              </motion.span>
              <span className="relative">
                Back home
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              {/* Live badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: easeOut }}
                className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  New issue every Tuesday
                </span>
              </motion.div>

              {/* Headline with typewriter */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.04em] mb-6 leading-[1.1]"
              >
                <span className="text-white/90">Where </span>
                <span className="relative inline-block">
                  <span className="gradient-text">AI engineers</span>
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 8"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    <motion.path
                      d="M0 4 Q50 0 100 4 T200 4"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(210, 100%, 55%)" />
                        <stop offset="100%" stopColor="hsl(24, 100%, 55%)" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>
                <br />
                <span className="text-white/90">level up</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
                className="text-lg md:text-xl text-white/40 mb-8 leading-relaxed max-w-lg"
              >
                Deep dives into production ML, RAG systems, and multi-agent architectures.
                No fluff. Just hard-won lessons from the trenches.
              </motion.p>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
                onViewportEnter={() => connectionCount.startAnimation()}
                className="flex flex-wrap items-center gap-6 mb-8"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, x: -20 }}
                      animate={{ scale: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="w-10 h-10 rounded-full border-2 border-black bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </motion.div>
                  ))}
                </div>
                <div>
                  <div className="text-2xl font-bold tabular-nums">
                    {connectionCount.count.toLocaleString()}+
                  </div>
                  <div className="text-sm text-white/40">professionals in my network</div>
                </div>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-4 text-sm text-white/30"
              >
                {[
                  { icon: Star, text: 'Top 10% on Substack' },
                  { icon: Heart, text: 'Loved by 98%' },
                  { icon: Coffee, text: '5 min read' },
                ].map(({ icon: Icon, text }) => (
                  <span key={text} className="flex items-center gap-1.5">
                    <Icon size={14} className="text-primary/60" />
                    {text}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right: Subscription Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: easeOut }}
              onMouseMove={handleMouseMove}
              style={{
                perspective: 1000,
              }}
            >
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                className="relative"
              >
                {/* Card glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-2xl opacity-50" />

                {/* Card */}
                <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-full" />

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                      >
                        <Send size={20} className="text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold">Subscribe</h3>
                        <p className="text-sm text-white/40">Free forever</p>
                      </div>
                    </div>

                    <a
                      href="https://substack.com/@harikayenuga"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                      >
                        <span>Subscribe on Substack</span>
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                      </motion.button>
                    </a>

                    <p className="mt-4 text-center text-xs text-white/30">
                      Free newsletter on Substack
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Browse on Substack */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-4">
              Read my <span className="gradient-text">writing</span>
            </h2>
            <p className="text-white/40 max-w-md mx-auto mb-8">
              Deep dives into AI engineering, production ML, and career insights
            </p>
            <a
              href="https://substack.com/@harikayenuga"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full border border-white/10 hover:border-white/20 hover:bg-white/[0.02] transition-all duration-300 group"
            >
              Browse on Substack
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            {/* Left: Visual */}
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative aspect-square max-w-md mx-auto"
              >
                {/* Concentric rings */}
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={ring}
                    className="absolute inset-0 rounded-full border border-white/[0.05]"
                    style={{
                      transform: `scale(${1 - ring * 0.2})`,
                    }}
                    animate={{
                      rotate: ring % 2 === 0 ? 360 : -360,
                    }}
                    transition={{
                      duration: 30 + ring * 10,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <div
                      className="absolute w-3 h-3 rounded-full bg-primary"
                      style={{
                        top: '50%',
                        left: 0,
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                  </motion.div>
                ))}

                {/* Center */}
                <div className="absolute inset-1/4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Brain size={48} className="text-primary" />
                </div>
              </motion.div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-6">
                What you&apos;ll <span className="gradient-text">learn</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: 'Production Architecture',
                    description: 'How to design ML systems that scale and survive real-world traffic',
                  },
                  {
                    title: 'RAG Best Practices',
                    description: 'Advanced retrieval techniques, chunking strategies, and evaluation methods',
                  },
                  {
                    title: 'Agent Engineering',
                    description: 'Building reliable multi-agent systems with LangGraph and beyond',
                  },
                  {
                    title: 'Career Insights',
                    description: 'Navigate the AI job market and level up your engineering career',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex gap-4 group"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Check size={16} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{item.title}</h3>
                      <p className="text-sm text-white/40">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/[0.04]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block mb-6"
            >
              <Sparkles size={48} className="text-primary" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-4">
              Ready to <span className="gradient-text">level up</span>?
            </h2>
            <p className="text-white/40 mb-8 max-w-md mx-auto">
              Join thousands of engineers getting smarter about AI every week.
            </p>

            <a
              href="https://substack.com/@harikayenuga"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-black rounded-full text-sm font-semibold hover:bg-white/90 transition-all"
            >
              Subscribe on Substack
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
