# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### JesusOnline.org (`artifacts/jesusonline-org`)
- **Type**: React + Vite static site (100% static, no API calls)
- **Purpose**: High-traffic landing page site for jesusonline.org — offloads ad traffic from main app, funnels serious users to app.jesusonline.com or jesusonline.com
- **Deploy target**: Cloudflare Pages (static build via `pnpm --filter @workspace/jesusonline-org run build`)
- **Pages**: Home, Discover Evidence, Meet Jesus, Follow Jesus, Forever Loved, God Is Hope
- **Brand**: #0095FF primary blue, #063690 navy, Open Sans font
- **No backend required** — all content is hardcoded; zero runtime cost for millions of visitors

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/jesusonline-org run build` — build static files for Cloudflare Pages deployment

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
