'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Check, Sparkles, Zap, Brain, Send } from 'lucide-react'

const easeOut = [0.16, 1, 0.3, 1]

const words = ['RAG systems', 'Multi-agents', 'Production ML', 'LangGraph']

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

function RotatingWords() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  return (
    <span className="relative inline-block w-40 h-8 overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 30, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -30, opacity: 0, rotateX: 90 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="absolute left-0 gradient-text font-semibold"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [isHovered, setIsHovered] = useState(false)
  const subscriberCount = useAnimatedCounter(12847)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    await new Promise(resolve => setTimeout(resolve, 1200))

    const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]')
    if (!subscribers.includes(email.toLowerCase())) {
      subscribers.push(email.toLowerCase())
      localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers))
    }

    setStatus('success')
    setEmail('')
  }

  return (
    <section id="newsletter" className="section relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 rounded-full blur-3xl" />
        </motion.div>
      </div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
          onViewportEnter={() => subscriberCount.startAnimation()}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main card */}
          <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative"
          >
            {/* Glow effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-3xl blur-2xl"
              animate={{
                opacity: isHovered ? 0.6 : 0.3,
              }}
              transition={{ duration: 0.3 }}
            />

            <div className="relative p-8 md:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden">
              {/* Floating icons */}
              <motion.div
                className="absolute top-8 right-8 text-primary/20"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Brain size={40} />
              </motion.div>
              <motion.div
                className="absolute bottom-8 left-8 text-secondary/20"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <Zap size={32} />
              </motion.div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />

              <div className="relative grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Content */}
                <div>
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                    <span className="text-sm font-medium">New issue every Tuesday</span>
                  </motion.div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] mb-4 leading-tight">
                    Level up on
                    <br />
                    <RotatingWords />
                  </h2>

                  <p className="text-white/40 mb-8 text-lg leading-relaxed max-w-md">
                    Weekly deep-dives from the trenches of production AI.
                    No fluff, just battle-tested insights.
                  </p>

                  {/* Social proof */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="w-8 h-8 rounded-full border-2 border-black bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center text-xs font-bold"
                        >
                          {String.fromCharCode(64 + i)}
                        </motion.div>
                      ))}
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold tabular-nums">{subscriberCount.count.toLocaleString()}+</span>
                      <span className="text-white/40 ml-1">engineers</span>
                    </div>
                  </div>

                  <Link
                    href="/newsletter"
                    className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-primary transition-colors group"
                  >
                    <Sparkles size={14} />
                    See what you&apos;ll get
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Right: Form */}
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className="p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08]"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                      >
                        <Send size={20} className="text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold">Subscribe</h3>
                        <p className="text-xs text-white/40">Free forever</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="relative group">
                        <input
                          type="email"
                          placeholder="you@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={status === 'loading' || status === 'success'}
                          className="w-full px-5 py-4 bg-white/[0.04] border border-white/[0.08] rounded-xl text-base focus:outline-none focus:border-primary/50 focus:bg-white/[0.06] transition-all disabled:opacity-50 placeholder:text-white/20 group-hover:border-white/20"
                          required
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={status === 'loading' || status === 'success'}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl text-base font-semibold transition-all disabled:opacity-50 hover:shadow-lg hover:shadow-primary/25"
                      >
                        {status === 'loading' ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          >
                            <Sparkles size={20} />
                          </motion.div>
                        ) : status === 'success' ? (
                          <>
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: 'spring', stiffness: 500 }}
                            >
                              <Check size={20} />
                            </motion.div>
                            <span>You&apos;re in!</span>
                          </>
                        ) : (
                          <>
                            <span>Join the community</span>
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </motion.button>

                      {status === 'success' && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-center text-sm text-success"
                        >
                          Welcome! Check your inbox.
                        </motion.p>
                      )}

                      <p className="text-center text-xs text-white/30">
                        No spam. Unsubscribe in one click.
                      </p>
                    </form>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
