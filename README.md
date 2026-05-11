# Harika Yenuga Portfolio

Personal portfolio for Harika Yenuga, built with Next.js, MDX, Tailwind CSS, Framer Motion, and GSAP.

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site.

## Scripts

```bash
npm run dev          # Start the local Next.js server
npm run build        # Build and statically export the site
npm run start        # Start the production server
npm run deploy       # Build and deploy with Wrangler
npm run deploy:prod  # Build and deploy the main branch with Wrangler
```

## Repo layout

```text
app/                    Next.js App Router pages, metadata, RSS, robots, manifest
components/
  analytics/            Analytics wiring
  animations/           Motion and visual background components
  blog/                 Blog listing and post rendering components
  newsletter/           Signup and Substack feed components
  pages/                Page-level compositions used by app routes
  sections/             Homepage and landing-page sections
  ui/                   Shared navigation, cards, typography, and small UI pieces
content/blog/           MDX blog posts
lib/                    Data loading, Medium/GitHub integrations, utilities
design.md               Design direction and visual system notes
CLAUDE.md               Agent/project notes
```

## Content

Blog posts live in `content/blog` as MDX files with frontmatter. The blog index and RSS feed read from the same content source through `lib/blog.ts`.

## Deployment

The site is configured for static export in `next.config.mjs`. Generated output goes to `out/`, which is ignored by git.
