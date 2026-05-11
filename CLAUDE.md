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
  page.tsx            # Home route
  work/page.tsx       # Professional experience and projects
  blog/               # Blog index and post routes
  contact/page.tsx    # Contact route
  newsletter/page.tsx # Newsletter route
  subscribe/page.tsx  # Newsletter signup route

components/
  analytics/          # Analytics wiring
  animations/         # Animation wrappers and visual effects
  blog/               # Blog list and post rendering
  newsletter/         # Newsletter signup and feed UI
  pages/              # Full page compositions
  sections/           # Section components (Hero, About, Skills, etc.)
  ui/                 # Reusable UI (Navigation, Footer, TiltCard)

content/blog/         # MDX blog posts
lib/                  # Data loading and integration helpers
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
