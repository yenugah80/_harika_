'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Check, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

const ease = [0.25, 0.4, 0.25, 1]

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]')
    if (!subscribers.includes(email.toLowerCase())) {
      subscribers.push(email.toLowerCase())
      localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers))
    }

    setStatus('success')
    setEmail('')
  }

  return (
    <section className="py-32 md:py-40 relative">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="max-w-2xl mx-auto"
        >
          <div
            className={cn(
              'p-8 md:p-12 rounded-2xl',
              'bg-white/[0.02] border border-white/[0.06]'
            )}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] mb-5">
                <Mail size={20} className="text-white/50" />
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold tracking-normal text-white mb-3">
                Stay updated
              </h2>

              <p className="text-sm md:text-base text-white/40 max-w-md mx-auto">
                Weekly insights on production AI, RAG systems, and ML engineering. No spam.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading' || status === 'success'}
                  className={cn(
                    'flex-1 px-4 py-3 rounded-xl text-sm',
                    'bg-white/[0.03] border border-white/[0.08]',
                    'placeholder:text-white/25 text-white',
                    'focus:outline-none focus:border-white/[0.15]',
                    'transition-colors duration-200',
                    'disabled:opacity-50'
                  )}
                  required
                />
                <motion.button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl',
                    'bg-white text-black font-medium text-sm',
                    'transition-all duration-200',
                    'hover:bg-white/90',
                    'disabled:opacity-50 disabled:cursor-not-allowed'
                  )}
                >
                  {status === 'loading' ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full"
                    />
                  ) : status === 'success' ? (
                    <>
                      <Check size={16} />
                      <span>Subscribed</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </motion.button>
              </div>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-emerald-400 mt-4"
                >
                  Welcome! Check your inbox.
                </motion.p>
              )}
            </form>

            {/* Footer */}
            <div className="text-center mt-6">
              <Link
                href="/subscribe"
                className="inline-flex items-center gap-2 text-xs text-white/30 hover:text-white/50 transition-colors"
              >
                Learn more about the newsletter
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
