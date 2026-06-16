---
name: Cloudflare Workers build command for this pnpm monorepo
description: Why the CF build command must be artifact-specific (build:cf), not the root `pnpm run build`
---

# Cloudflare Workers Builds command for static artifacts

When a static artifact (e.g. `@workspace/jesusonline-org`) is deployed via Cloudflare Workers Builds (auto-build on GitHub push), the Cloudflare **build command must target only that artifact**, e.g.:

```
pnpm --filter @workspace/jesusonline-org run build:cf
```

Do NOT use the root `pnpm run build` as the Cloudflare build command.

**Why:**
- Root `build` = `pnpm run typecheck && pnpm -r --if-present run build`. The typecheck step gates the whole build; any type error anywhere fails the deploy and CF keeps serving the previous (stale) version with no visible error.
- `pnpm -r run build` builds *every* artifact, including `mockup-sandbox`. Both `jesusonline-org` and `mockup-sandbox` vite.config.ts **throw** if `PORT` / `BASE_PATH` env vars are missing, which they are in Cloudflare's build environment. So even with typecheck passing, the root build fails.
- The per-artifact `build:cf` sets `BASE_PATH=/ PORT=3000 NODE_ENV=production`, runs the client build + SSR build + `node prerender.mjs`, and outputs to `dist/public` (the dir the worker serves). It does NOT run tsc, so esbuild/vite build even if types are imperfect — but keep types clean anyway.

**How to apply:** If a CF deploy "shows the old design / no changes," first check the CF build log. A typecheck failure or a "PORT/BASE_PATH required" throw means the build command is the root `build` instead of the artifact `build:cf`. Fix it in the Cloudflare dashboard build settings, not in code.
