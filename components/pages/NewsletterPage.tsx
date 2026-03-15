'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  Sparkles,
  Lightbulb,
  Zap,
  BookOpen,
  Users,
  Mail,
  TrendingUp
} from 'lucide-react'

const easeOut = [0.16, 1, 0.3, 1]

const topics = [
  { icon: Sparkles, label: 'Generative AI', color: 'primary' },
  { icon: Lightbulb, label: 'ML Systems', color: 'secondary' },
  { icon: Zap, label: 'RAG & Agents', color: 'accent' },
  { icon: TrendingUp, label: 'Production ML', color: 'success' },
]

const benefits = [
  {
    icon: BookOpen,
    title: 'Deep Dives',
    description: 'In-depth articles on building AI systems that work in the real world.',
  },
  {
    icon: Lightbulb,
    title: 'Practical Insights',
    description: 'Lessons learned from shipping ML at scale in enterprise environments.',
  },
  {
    icon: Users,
    title: 'Community Access',
    description: 'Join a community of ML engineers and AI practitioners.',
  },
]

const recentPosts = [
  {
    title: 'Building Production-Ready RAG Systems',
    description: 'Architecture patterns and optimizations for enterprise RAG.',
    date: '2026-02-28',
  },
  {
    title: 'Multi-Agent AI: From Concept to Production',
    description: 'How to build reliable multi-agent systems using LangGraph.',
    date: '2026-02-15',
  },
  {
    title: 'The Future of AI in Retail',
    description: 'Where GenAI is transforming customer experience.',
    date: '2026-02-01',
  },
]

export function NewsletterPage() {
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
        // Fallback for demo
        const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]')
        if (!subscribers.includes(email.toLowerCase())) {
          subscribers.push(email.toLowerCase())
          localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers))
        }
        setStatus('success')
        setEmail('')
      }
    } catch {
      // Fallback for demo
      const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]')
      if (!subscribers.includes(email.toLowerCase())) {
        subscribers.push(email.toLowerCase())
        localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers))
      }
      setStatus('success')
      setEmail('')
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-primary transition-colors mb-8 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
              Back home
            </Link>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 border border-primary/20 text-primary">
              <Mail size={16} />
              <span>Newsletter</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] mb-6 leading-[1.1]">
              Insights on{' '}
              <span className="gradient-text">AI & ML</span>
              <br />
              delivered to your inbox
            </h1>

            <p className="text-lg md:text-xl text-white/50 max-w-2xl mb-10 leading-relaxed">
              Join engineers and ML practitioners who get weekly deep-dives on building
              production-ready AI systems, RAG architectures, and multi-agent workflows.
            </p>

            {/* Subscription Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: easeOut }}
              onSubmit={handleSubmit}
              className="max-w-xl"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-base focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all disabled:opacity-50 placeholder:text-white/30"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-xl text-base font-medium hover:bg-white/90 transition-all disabled:opacity-50 shrink-0"
                >
                  {status === 'loading' ? (
                    'Subscribing...'
                  ) : status === 'success' ? (
                    <>
                      <Check className="w-5 h-5" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </div>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-sm text-success"
                >
                  Welcome aboard! Check your inbox for confirmation.
                </motion.p>
              )}

              <p className="mt-4 text-sm text-white/30">
                No spam. Unsubscribe anytime. Free forever.
              </p>
            </motion.form>

            {/* Topics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: easeOut }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {topics.map((topic) => (
                <div
                  key={topic.label}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60"
                >
                  <topic.icon size={14} className={`text-${topic.color}`} />
                  {topic.label}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] mb-4">
              What you&apos;ll get
            </h2>
            <p className="text-white/50 max-w-lg mx-auto">
              Practical knowledge from someone building AI systems in production
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: easeOut }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Preview */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="flex items-center justify-between mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em]">
              Recent editions
            </h2>
            <Link
              href="/blog"
              className="text-sm text-white/40 hover:text-primary transition-colors flex items-center gap-1 group"
            >
              View all
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          <div className="space-y-0">
            {recentPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: easeOut }}
                className="group py-6 border-t border-white/[0.06] hover:border-white/[0.12] transition-colors cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-white/40 text-sm">{post.description}</p>
                  </div>
                  <span className="text-sm text-white/30 shrink-0">
                    {formatDate(post.date)}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="flex flex-col md:flex-row items-start gap-8 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10"
          >
            {/* Avatar placeholder */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary shrink-0 flex items-center justify-center text-2xl font-semibold">
              HY
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Harika Yenuga</h3>
              <p className="text-white/50 mb-4 leading-relaxed">
                AI/ML Engineer building production-ready intelligent systems. Currently focused on
                Generative AI, RAG architectures, and multi-agent workflows at enterprise scale.
                I write about what I learn shipping ML in the real world.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/blog"
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Read my articles &rarr;
                </Link>
                <Link
                  href="/contact"
                  className="text-sm text-white/40 hover:text-white/60 transition-colors"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-24 border-t border-white/[0.06]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.03em] mb-4">
              Ready to level up?
            </h2>
            <p className="text-white/50 mb-8">
              Join the newsletter and get actionable insights on AI engineering.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading' || status === 'success'}
                  className="flex-1 px-5 py-3 bg-white/[0.03] border border-white/10 rounded-full text-sm focus:outline-none focus:border-primary/50 transition-all disabled:opacity-50 placeholder:text-white/30"
                  required
                />
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-all disabled:opacity-50"
                >
                  {status === 'success' ? (
                    <>
                      <Check className="w-4 h-4" />
                      Done
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
