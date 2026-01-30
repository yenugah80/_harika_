import { NextResponse } from 'next/server'
import { getMediumArticles } from '@/lib/medium'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const limit = parseInt(searchParams.get('limit') || '6', 10)

  try {
    const articles = await getMediumArticles(limit)
    return NextResponse.json(articles)
  } catch (error) {
    console.error('Medium API route error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    )
  }
}

// Enable edge runtime for better performance
export const runtime = 'edge'
