'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar } from 'lucide-react'

interface Article {
  title: string
  link: string
  pubDate: string
  description: string
}

const easeOut = [0.16, 1, 0.3, 1]

export function SubstackFeed() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchFeed() {
      try {
        // Using a CORS proxy to fetch RSS feed
        const feedUrl = 'https://harikayenuga.substack.com/feed'
        const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`

        const response = await fetch(proxyUrl)
        const data = await response.json()

        if (data.status === 'ok' && data.items) {
          const parsedArticles = data.items.slice(0, 5).map((item: any) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            description: item.description?.replace(/<[^>]*>/g, '').slice(0, 150) + '...' || '',
          }))
          setArticles(parsedArticles)
        } else {
          setError(true)
        }
      } catch (err) {
        console.error('Failed to fetch Substack feed:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchFeed()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-white/[0.02] border border-white/5 animate-pulse"
          >
            <div className="h-5 bg-white/10 rounded w-3/4 mb-3" />
            <div className="h-4 bg-white/5 rounded w-1/4" />
          </div>
        ))}
      </div>
    )
  }

  if (error || articles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-white/40 mb-4">No articles found</p>
        <a
          href="https://substack.com/@harikayenuga"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          Visit Substack <ArrowUpRight size={16} />
        </a>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {articles.map((article, index) => (
        <motion.a
          key={article.link}
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: easeOut }}
          className="block p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 group"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white/90 group-hover:text-primary transition-colors mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-white/40 line-clamp-2 mb-3">
                {article.description}
              </p>
              <div className="flex items-center gap-2 text-xs text-white/30">
                <Calendar size={12} />
                {formatDate(article.pubDate)}
              </div>
            </div>
            <ArrowUpRight
              size={20}
              className="text-white/20 group-hover:text-primary transition-colors flex-shrink-0"
            />
          </div>
        </motion.a>
      ))}
    </div>
  )
}
