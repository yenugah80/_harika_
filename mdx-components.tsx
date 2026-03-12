import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4 gradient-text">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-6 mb-3 text-foreground">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mt-4 mb-2 text-foreground">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>
    ),
    a: ({ href, children }) => (
      <Link
        href={href || '#'}
        className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
      >
        {children}
      </Link>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-muted-foreground">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-muted-foreground">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-primary">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-card border border-border rounded-lg p-4 overflow-x-auto mb-4 font-mono text-sm">
        {children}
      </pre>
    ),
    img: ({ src, alt }) => (
      <span className="block my-6">
        <Image
          src={src || ''}
          alt={alt || ''}
          width={800}
          height={400}
          className="rounded-lg border border-border"
        />
      </span>
    ),
    hr: () => (
      <hr className="my-8 border-border" />
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-border rounded-lg">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="px-4 py-2 bg-muted text-left font-semibold border-b border-border">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-2 border-b border-border">{children}</td>
    ),
    ...components,
  }
}
