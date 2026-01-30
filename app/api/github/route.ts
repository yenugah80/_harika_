import { NextResponse } from 'next/server'
import { getRepositories } from '@/lib/github'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const limit = parseInt(searchParams.get('limit') || '10', 10)

  try {
    const repos = await getRepositories(limit)
    return NextResponse.json(repos)
  } catch (error) {
    console.error('GitHub API route error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch repositories' },
      { status: 500 }
    )
  }
}

// Enable edge runtime for better performance
export const runtime = 'edge'
