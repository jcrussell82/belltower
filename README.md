# BellTower Strategy Group

A premium marketing homepage for BellTower Strategy Group — an independent
advisory firm that helps employers select, evaluate, and optimize their
insurance broker relationship.

Built as a production-ready React app with a small, cohesive design system
on top of [shadcn/ui](https://ui.shadcn.com).

## Stack

- **React 19 + TypeScript** via Vite
- **Tailwind CSS v4** (CSS-first config, no `tailwind.config.js`)
- **shadcn/ui** (`Button`, `Badge`, `Card`, `Avatar`, `Separator`, `Sheet`)
- **Inter** (UI/body) + **Fraunces** (display headlines) via Fontsource
- **lucide-react** for iconography

## Design system

- **Type:** Inter carries the interface; Fraunces is reserved for headline
  moments only, so hierarchy comes from font choice, not just size.
- **Color:** near-black ink on white/`zinc-50`, a single brand-blue accent
  (`--brand`, defined in `src/index.css`), and two dark "authority" sections
  (`zinc-950`) that bookend the page — Independence and the final CTA.
- **Spacing:** sections use `py-24 lg:py-32`; content sits in a
  `max-w-6xl` container (`src/components/site/container.tsx`).
- **Motion:** a single restrained scroll-reveal primitive
  (`src/components/site/reveal.tsx`) — fade + 8px rise, once per element,
  respects `prefers-reduced-motion`.

Section components live in `src/components/site/`; copy/content lives in
`src/lib/content.ts` so content and layout stay decoupled.

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check and produce a production build in dist/
npm run preview   # preview the production build locally
npm run lint       # oxlint
```

## Adding shadcn/ui components

```bash
npx shadcn@latest add <component>
```

Components are written to `src/components/ui/`.
