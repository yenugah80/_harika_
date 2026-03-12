'use client'

import { motion } from 'framer-motion'
import { Mail, CheckCircle, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { NewsletterSignup } from '@/components/NewsletterSignup'

export default function SubscribePage() {
  const benefits = [
    'Weekly insights on AI/ML engineering',
    'Early access to my research and projects',
    'Practical tips from production systems',
    'No spam, unsubscribe anytime',
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Join 1,000+ engineers
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Subscribe to my newsletter</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Get weekly insights on AI, machine learning, and building great products delivered to your inbox.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-lg font-semibold mb-6">What you'll get:</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Signup Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <NewsletterSignup variant="card" />
          </motion.div>

          {/* Recent Posts Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Not ready to subscribe? Check out some recent posts:
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Browse the blog
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
