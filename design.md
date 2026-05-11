---
version: beta
name: Harika Yenuga Portfolio
source: Revive-style AI SaaS motion system
description: Lavender/plum AI SaaS interface with glossy windows, GSAP section motion, playful product visuals, and readable portfolio content.
colors:
  plum: "#230A2F"
  violet: "#602BA8"
  electric-violet: "#9E4AD9"
  soft-lavender: "#F7EEFC"
  lavender-line: "#BDA9D9"
  mauve: "#A75C93"
  cyan: "#7CF4DC"
  acid-lime: "#C8FF5A"
  signal-pink: "#FF83D8"
  warm-yellow: "#FFD15A"
  surface: "#FFF8FD"
  muted-copy: "#6C5775"
typography:
  display:
    fontFamily: Fraunces
    usage: Hero and memorable section titles
    weight: 600
    lineHeight: 1.04
  body:
    fontFamily: Mona Sans
    usage: Interface, labels, cards, body copy
    weight: 450-800
    lineHeight: 1.6
  mono:
    fontFamily: JetBrains Mono
    usage: Technical labels only
layout:
  hero:
    structure: Split SaaS product window with copy on the left and an animated architecture map on the right.
    mobile: Stack hero card, architecture map, and support cards with no horizontal overflow.
  sections:
    structure: Sliding window panels, not static content blocks.
    behavior: GSAP ScrollTrigger reveals each panel with horizontal movement, depth, and easing.
  tabs:
    structure: Rounded product control dock.
    behavior: Tab content animates with staggered card motion.
motion:
  primary: GSAP scroll-triggered window reveals and subtle 3D tilt.
  secondary: Framer Motion tab/card microinteractions.
  visual: Signal lines, bursts, and labeled architecture nodes.
  rule: Motion should guide attention and clarify systems thinking; avoid decorative noise.
---

# Design System

The portfolio should feel like a polished AI SaaS product narrative: refined, smooth, slightly playful, and easy to scan. It should not feel like a poster, a generic template, or a pile of decorative effects.

## Positioning

Harika is positioned as an AI systems builder who turns ambiguous ideas into usable, trustworthy production systems. The homepage should communicate product judgment, research depth, and delivery discipline.

## Palette

Use a lavender/plum foundation with bright signal accents.

- Plum `#230A2F`: primary text, dark panels, active controls.
- Violet `#602BA8` and electric violet `#9E4AD9`: interaction states and product-system emphasis.
- Soft lavender `#F7EEFC`: page background and gentle section fields.
- Surface `#FFF8FD`: cards, map nodes, and readable panels.
- Cyan, acid lime, signal pink, and warm yellow: architecture nodes, bursts, and compact visual cues.
- Muted copy `#6C5775`: body text.

## Motion Rules

- Use GSAP for scroll-level section choreography.
- Use Framer Motion for local component state and hover behavior.
- Section transitions should feel like sliding product windows, not page decorations.
- Keep motion fast, smooth, and readable. Do not let animation cover text.

## Content Rules

- GitHub is proof inside work and research cards, not the main brand message.
- Keep the contact email hidden in visible UI.
- Prefer specific language: production AI, RAG workflows, evaluation, trust layer, observability, MLOps.
