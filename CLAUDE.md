# Harika's Portfolio

Personal portfolio website for Harika Yenuga - Data Science & AI professional.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with HSL CSS custom properties
- **Animations**: Framer Motion
- **Deployment**: Vercel (auto-deploys from GitHub)
- **Export**: Static export (`output: 'export'` in next.config.js)

## Design System

- **Theme**: Premium dark theme with true black background (`#000`)
- **Primary color**: Electric blue (`hsl(210, 100%, 55%)`)
- **Secondary color**: Warm orange (`hsl(24, 100%, 55%)`)
- **Easing**: Premium curves `[0.16, 1, 0.3, 1]`

## Structure

```
app/
  page.tsx          # Home - Hero, About, Skills, CTA
  work/page.tsx     # Professional experience & projects
  writing/page.tsx  # Blog posts (from data/posts.ts)
  contact/page.tsx  # 3D contact page
  newsletter/page.tsx # Links to Substack & Medium

components/
  pages/            # Full page components
  sections/         # Section components (Hero, About, Skills, etc.)
  ui/               # Reusable UI (Navigation, Footer, TiltCard)
  animations/       # Animation wrappers (RevealOnScroll, PageTransition)
```

## Key Features

- 3D tilt card effects using CSS perspective
- Parallax scroll animations with useScroll/useTransform
- Centered pill-style navigation with hover effects
- Floating gradient orbs with blur
- Mouse-following glow effects

## External Links

- **Substack**: https://substack.com/@harikayenuga
- **Medium**: https://harikayenuga.medium.com
- **LinkedIn**: https://linkedin.com/in/haaborupakarao
- **GitHub**: https://github.com/yenugah80

## SEO

Site is blocked from search engine indexing:
- `robots.txt` blocks all crawlers
- Meta `noindex, nofollow` tags on all pages
- No sitemap

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run start    # Start production server
```
