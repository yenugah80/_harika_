export interface MediumArticle {
  title: string
  link: string
  pubDate: string
  content: string
  thumbnail: string | null
  categories: string[]
}

const MEDIUM_RSS_URL = 'https://medium.com/feed/@harikayenuga'

// Note: Medium RSS fetching typically needs to be done server-side
// due to CORS restrictions. This function is designed for API routes.

export async function getMediumArticles(limit = 6): Promise<MediumArticle[]> {
  try {
    // Using a public RSS-to-JSON service as a fallback
    // In production, you'd want to parse this server-side
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(MEDIUM_RSS_URL)}`,
      {
        next: { revalidate: 21600 }, // Cache for 6 hours
      }
    )

    if (!response.ok) {
      throw new Error(`Medium RSS error: ${response.status}`)
    }

    const data = await response.json()

    if (data.status !== 'ok' || !data.items) {
      return []
    }

    const articles: MediumArticle[] = data.items.slice(0, limit).map((item: any) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      content: extractExcerpt(item.description || item.content),
      thumbnail: extractThumbnail(item.description || item.content) || item.thumbnail,
      categories: item.categories || [],
    }))

    return articles
  } catch (error) {
    console.error('Error fetching Medium articles:', error)
    return []
  }
}

function extractExcerpt(html: string, maxLength = 150): string {
  // Remove HTML tags
  const text = html.replace(/<[^>]*>/g, '').trim()
  // Truncate and add ellipsis
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).trim() + '...'
}

function extractThumbnail(html: string): string | null {
  // Try to extract image from content
  const imgMatch = html.match(/<img[^>]+src="([^">]+)"/)
  return imgMatch ? imgMatch[1] : null
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}
