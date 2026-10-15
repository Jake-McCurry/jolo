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

## Staging push change log

The agent makes changes in this workspace; the user pushes to Git. Do not perform Git pushes.

After the user reports a push to `origin/staging`, verify which changes reached that branch and record the pushed changes in [JOLO Change Log](https://docs.google.com/spreadsheets/d/1UYkILSymM3dOY8M6XkX6CgFb6f8tsw8j38vUhNhlV90/edit). This is an agent-assisted workflow, not an installed automatic push monitor.

- Only update the spreadsheet after confirming the push succeeded. Do not log local edits or commits that have not been pushed.
- Record the affected page or project area, change date in Pacific time, and exactly what changed. Keep newest entries at the top.
- Check existing entries before adding records so previously logged changes are not duplicated.
- A Git push does not establish that the website is live; do not describe it as a confirmed production update.

**Why:** The user clarified that they push to Git themselves; the agent only makes changes here. They requested spreadsheet entries only for changes pushed to staging.
