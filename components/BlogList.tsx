'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { NewsletterSignup } from '@/components/NewsletterSignup'

interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  image?: string
  readingTime: string
}

interface Props {
  initialPosts: BlogPostMeta[]
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

export function BlogList({ initialPosts }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
            Writing
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Thoughts on AI, machine learning, and building systems that work in production.
          </p>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-20"
        >
          <NewsletterSignup variant="inline" />
        </motion.div>

        {/* Posts */}
        {initialPosts.length > 0 ? (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-0"
          >
            {initialPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                variants={item}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link href={`/blog/${post.slug}/`}>
                  <div className="group py-8 border-t border-border/50 hover:border-border transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-medium tracking-tight mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground line-clamp-2 mb-3">
                          {post.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{formatDate(post.date)}</span>
                          <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                          <span>{post.readingTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        <span className="hidden md:inline">Read</span>
                        <ArrowUpRight
                          className={`w-4 h-4 transition-all duration-300 ${
                            hoveredIndex === index
                              ? 'translate-x-0.5 -translate-y-0.5'
                              : ''
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-20 text-center"
          >
            <p className="text-muted-foreground">No posts yet. Check back soon.</p>
          </motion.div>
        )}

        {/* Bottom newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 pt-16 border-t border-border/50"
        >
          <NewsletterSignup variant="card" />
        </motion.div>
      </div>
    </div>
  )
}
