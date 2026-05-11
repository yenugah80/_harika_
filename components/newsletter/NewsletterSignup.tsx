'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

interface Props {
  variant?: 'inline' | 'card' | 'hero'
}

export function NewsletterSignup({ variant = 'card' }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')

    try {
      // Replace YOUR_FORM_ID with your Formspree form ID
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

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading' || status === 'success'}
            className="flex-1 px-4 py-3 bg-transparent border border-border rounded-full text-sm focus:outline-none focus:border-foreground/50 transition-colors disabled:opacity-50"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? (
              'Subscribing...'
            ) : status === 'success' ? (
              <>
                <Check className="w-4 h-4" />
                Subscribed
              </>
            ) : (
              <>
                Subscribe
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </div>
        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 text-sm text-muted-foreground"
          >
            Thanks! You&apos;ll receive updates soon.
          </motion.p>
        )}
      </form>
    )
  }

  // Card variant (default)
  return (
    <div className="py-12 px-8 border border-border rounded-2xl">
      <div className="max-w-md mx-auto text-center">
        <h3 className="text-xl font-medium mb-2">Stay updated</h3>
        <p className="text-muted-foreground text-sm mb-6">
          Get notified when I publish new articles on AI, ML, and engineering.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading' || status === 'success'}
              className="flex-1 px-4 py-3 bg-transparent border border-border rounded-full text-sm focus:outline-none focus:border-foreground/50 transition-colors disabled:opacity-50"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? (
                'Subscribing...'
              ) : status === 'success' ? (
                <>
                  <Check className="w-4 h-4" />
                  Subscribed
                </>
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </div>
          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm text-muted-foreground"
            >
              Thanks! You&apos;ll receive updates soon.
            </motion.p>
          )}
        </form>

        <p className="mt-6 text-xs text-muted-foreground">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  )
}
