# Repo structure

This project follows a small set of folders:

```text
app/
```

Route files, metadata, RSS, manifest, and robots output. App routes should stay thin and import page-level compositions from `components/pages` when the UI is more than a small wrapper.

```text
components/
```

Reusable React code, grouped by purpose:

```text
components/analytics/    Analytics wiring
components/animations/   Visual effects and motion wrappers
components/blog/         Blog list and post display
components/newsletter/   Newsletter signup and feed UI
components/pages/        Full-page compositions
components/sections/     Homepage or landing-page sections
components/ui/           Shared UI primitives
```

```text
content/blog/
```

MDX posts with frontmatter. Keep long-form writing here instead of hardcoding it into React components.

```text
lib/
```

Data loading and external integrations. Keep component files focused on rendering and put fetch/parsing helpers here.

## Conventions

Use the `@/` path alias for imports that cross folders. Relative imports are fine for files that sit next to each other.

Keep route files in `app/` small. If a route grows, move the UI into `components/pages` and leave the route as the wiring layer.

Keep generated folders out of git. `.next/`, `out/`, `node_modules/`, and deployment caches are ignored.
