# InfoTech - Project Mandates & Guidelines

This file serves as the foundational mandate for all development work on the InfoTech project. Adhere strictly to these guidelines to maintain consistency and quality.

## 1. Project Overview
- **Name:** InfoTech
- **Organization:** OSUT Cluj (Organizația Studenților din Universitatea Tehnică)
- **Goal:** High-performance, engaging website for students, event showcases, and sponsor connections.
- **Target Audience:** UTCN Students, Tech Companies/Sponsors, University Community.
- **Key Values:** Innovation, Career Development, Community, Hands-on Learning.

## 2. Tech Stack
- **Framework:** Next.js 16+ (App Router, Turbopack)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS v4 (Use `bg-linear-to-r` instead of `bg-gradient-to-r`)
- **UI Library:** shadcn/ui (Radix UI primitives)
- **Animations:** Framer Motion
- **Carousel:** Embla Carousel (via shadcn/ui)
- **i18n:** Route-based (`/en`, `/ro`), server-side dictionary loading
- **Deployment:** Cloudflare Pages

## 3. Design & UX Guidelines
- **Theme:** Modern, Tech-focused, Dark theme (#0c091e) with purple/blue accents.
- **Styling:** Glassmorphism (`backdrop-blur`, semi-transparent backgrounds), purple glow effects.
- **Color Palette:**
  - **Primary:** Purple (#9333ea, purple-400/500/600)
  - **Secondary:** Blue accents (blue-300/400)
  - **Accents:** white/10, white/20, purple-500/20, purple-500/30

## 4. Coding Principles (CRITICAL)

### A. Internationalization (i18n) - ZERO RAW STRINGS
- **Strict Rule:** Never hardcode text inside components.
- **Implementation:**
  - Use `src/data/translations.json`.
  - Load dictionary server-side via `getDictionary(locale)`.
  - Pass `dictionary` prop typed to `Dictionary` from `@/i18n/getDictionary`.
  - Even `'use client'` components receive `dictionary` as props.

### B. TypeScript Standards
- **No `any` types** (except for JSON mapping where necessary).
- Use `interface` for object definitions.
- Destructure props in function signatures.
- Type all translation props with `Dictionary`.

### C. Next.js App Router & Components
- **Server Components:** Use by default for static content.
- **Client Components:** Use `'use client'` only for interactivity (state, effects, Framer Motion).
- **Assets:** Always use `next/image` with proper props. Use `quality={100}` and `unoptimized` for logos.

## 5. Component Architecture
- Pass `dictionary` prop: Page → Layout → Components.
- Use shadcn/ui components with glassmorphism styling: `bg-gray-900/40 backdrop-blur-xl border-0 rounded-xl`.
- Gradient text: `bg-linear-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent`.

## 6. Project Structure
- `src/app/[locale]/`: Main application routes.
- `src/components/`: Modular components (navigation, events, ui).
- `src/data/`: JSON data for translations, events, and team.
- `src/i18n/`: i18n configuration and providers.
- `src/types/`: Centralized TypeScript definitions.
