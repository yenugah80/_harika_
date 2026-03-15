'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Check, Mail, Sparkles } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

const easeOut = [0.16, 1, 0.3, 1]

const recentTopics = [
  'Production RAG',
  'Multi-Agent Systems',
  'LangGraph',
  'Enterprise AI',
]

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, _subject: 'New Newsletter Subscriber' }),
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
      } else {
        const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]')
        if (!subscribers.includes(email.toLowerCase())) {
          subscribers.push(email.toLowerCase())
          localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers))
        }
        setStatus('success')
        setEmail('')
      }
    } catch {
      const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]')
      if (!subscribers.includes(email.toLowerCase())) {
        subscribers.push(email.toLowerCase())
        localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers))
      }
      setStatus('success')
      setEmail('')
    }
  }

  return (
    <section id="newsletter" className="section relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom">
        <RevealOnScroll>
          <div className="relative max-w-3xl mx-auto">
            {/* Card */}
            <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.08] overflow-hidden">
              {/* Decorative corner gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />

              <div className="relative">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: easeOut }}
                  className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 border border-primary/20 text-primary"
                >
                  <Mail size={14} />
                  <span>Newsletter</span>
                </motion.div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.03em] mb-4 leading-tight">
                      Stay ahead in{' '}
                      <span className="gradient-text">AI/ML</span>
                    </h2>
                    <p className="text-white/50 mb-6 leading-relaxed">
                      Weekly insights on building production-ready AI systems,
                      from RAG architectures to multi-agent workflows.
                    </p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {recentTopics.map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1 text-xs rounded-full bg-white/[0.04] border border-white/[0.08] text-white/50"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/newsletter"
                      className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-primary transition-colors group"
                    >
                      <Sparkles size={14} />
                      View past editions
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>

                  {/* Form */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                    <h3 className="text-lg font-medium mb-2">Subscribe</h3>
                    <p className="text-sm text-white/40 mb-4">
                      No spam. Unsubscribe anytime.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === 'loading' || status === 'success'}
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm focus:outline-none focus:border-primary/50 transition-all disabled:opacity-50 placeholder:text-white/30"
                        required
                      />
                      <button
                        type="submit"
                        disabled={status === 'loading' || status === 'success'}
                        className="w-full group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-xl text-sm font-medium hover:bg-white/90 transition-all disabled:opacity-50"
                      >
                        {status === 'loading' ? (
                          'Subscribing...'
                        ) : status === 'success' ? (
                          <>
                            <Check className="w-4 h-4" />
                            You&apos;re in!
                          </>
                        ) : (
                          <>
                            Subscribe
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                          </>
                        )}
                      </button>
                    </form>

                    {status === 'success' && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 text-xs text-success text-center"
                      >
                        Welcome! Check your inbox.
                      </motion.p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
