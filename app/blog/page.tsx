import { getAllPosts } from '@/lib/blog'
import { BlogList } from '@/components/BlogList'

export const metadata = {
  title: 'Blog',
  description: 'Thoughts on AI, machine learning, engineering, and building products that matter.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  return <BlogList initialPosts={posts} />
}
