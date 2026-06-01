# LAMID Learning Platform

Multi-tenant AI-powered Learning Experience Platform (LXP).

## Stack
- **Framework**: Next.js 15, App Router, TypeScript
- **Styling**: Tailwind CSS v3 with custom LAMID theme
- **Icons**: Lucide React
- **Variants**: class-variance-authority + tailwind-merge + clsx

## Brand Theme
| Token | Value |
|---|---|
| `primary` | `#C12129` (LAMID Red) |
| `background` | `#0A0A0A` |
| `surface` | `#1A1A1A` |
| `border` | `#262626` |
| `text-primary` | `#FFFFFF` |
| `text-secondary` | `#A3A3A3` |

Use Tailwind tokens (`bg-primary`, `text-text-secondary`, etc.) — never raw hex in components.

## Project Structure
```
src/
  app/
    (dashboard)/      # authenticated shell with Sidebar
    globals.css
    layout.tsx        # root layout
    page.tsx          # landing page
  components/
    ui/               # primitives: button, card, badge, progress, avatar
    layout/           # sidebar, header
    dashboard/        # stats-card, course-card, activity-feed
  lib/
    utils.ts          # cn(), formatMinutes(), formatNumber(), relativeTime()
  mock/               # ALL mock data — one file per domain
    tenants.ts
    users.ts          # currentUser exported here
    courses.ts        # mockCourses, mockPrograms
    modules.ts        # mockModules, mockLessons, mockQuizzes
    events.ts
    certifications.ts
    analytics.ts      # mockLearnerProgress, mockWeeklyActivity
  types/
    index.ts          # all TypeScript interfaces
```

## Mock Data Pattern
Every section that needs data imports from `src/mock/<domain>.ts`.
No fetch calls or DB queries exist yet — swap mocks for real API calls later.

## Service Categories (LAMID tenant)
- `HCD` — Human-Centered Design (`cat-hcd`)
- `BIZ` — Business Strategy (`cat-biz`)
- `SD` — Software Development (`cat-sd`)

## Component Conventions
- UI primitives use `forwardRef` + CVA variants
- Tailwind class merging via `cn()` from `@/lib/utils`
- No inline styles — use Tailwind tokens only
- `"use client"` only on components that use hooks or browser APIs
