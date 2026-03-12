'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { NewsletterSignup } from './NewsletterSignup'

interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  image?: string
  readingTime: string
  content: string
}

interface Props {
  post: BlogPost
}

export function BlogPostContent({ post }: Props) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <article className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to writing
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <time>{formatDate(post.date)}</time>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span>{post.readingTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {post.description}
          </p>
        </motion.header>

        {/* Featured image */}
        {post.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative aspect-[2/1] rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose-custom"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-medium mt-12 mb-4 tracking-tight">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-medium mt-10 mb-4 tracking-tight">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-medium mt-8 mb-3">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-muted-foreground leading-relaxed mb-6">{children}</p>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-foreground underline underline-offset-4 decoration-muted-foreground/50 hover:decoration-foreground transition-colors"
                  target={href?.startsWith('http') ? '_blank' : undefined}
                  rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {children}
                </a>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-6 mb-6 space-y-2 text-muted-foreground">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="leading-relaxed">{children}</li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-2 border-border pl-6 italic my-8 text-muted-foreground">
                  {children}
                </blockquote>
              ),
              code: ({ className, children }) => {
                const isInline = !className
                if (isInline) {
                  return (
                    <code className="px-1.5 py-0.5 bg-muted rounded text-sm font-mono">
                      {children}
                    </code>
                  )
                }
                return <code className="font-mono text-sm">{children}</code>
              },
              pre: ({ children }) => (
                <pre className="bg-muted/50 border border-border rounded-lg p-4 overflow-x-auto mb-6 font-mono text-sm">
                  {children}
                </pre>
              ),
              hr: () => <hr className="my-12 border-border" />,
              table: ({ children }) => (
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full text-sm">{children}</table>
                </div>
              ),
              th: ({ children }) => (
                <th className="px-4 py-2 text-left font-medium border-b border-border">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-4 py-2 border-b border-border text-muted-foreground">
                  {children}
                </td>
              ),
              strong: ({ children }) => (
                <strong className="font-medium text-foreground">{children}</strong>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </motion.div>

        {/* Author */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-border"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
              HY
            </div>
            <div>
              <p className="font-medium mb-1">Written by {post.author}</p>
              <p className="text-sm text-muted-foreground mb-3">
                Senior AI/ML Engineer building production systems.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/harika-ye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href="https://twitter.com/harikayenuga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Twitter
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <NewsletterSignup variant="card" />
        </motion.div>

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all posts
          </Link>
        </motion.div>
      </div>
    </article>
  )
}
