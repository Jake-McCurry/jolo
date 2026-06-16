---
name: Cloudflare Workers build command for this pnpm monorepo
description: Why the CF build command must be artifact-specific (build:cf), not the root `pnpm run build`
---

# Cloudflare Workers Builds command for static artifacts

Cloudflare Workers Builds (auto-build on GitHub push) runs the root **`pnpm run build`** and you usually cannot rely on the user changing the dashboard build command. So every artifact's `build` script must succeed standalone under root `pnpm run build` with NO env vars provided.

**The trap:** the Vite configs for `jesusonline-org` and `mockup-sandbox` **throw** at config-load if `PORT` / `BASE_PATH` are unset (they are unset in CI/Cloudflare). Root `build` = `pnpm run typecheck && pnpm -r --if-present run build`, which (a) gates on typecheck — any type error anywhere aborts the deploy and CF keeps serving the stale version with no visible error — and (b) builds *every* artifact, so any one vite app crashing fails the whole deploy.

**The fix that works without any dashboard change:** make each `build` script set its own env inline, e.g.
- `jesusonline-org` build: `BASE_PATH=/ PORT=3000 NODE_ENV=production vite build ... && vite build --config vite.ssr.config.ts && node prerender.mjs` (full SSR prerender chain; `build:cf` is just an alias to `build`).
- `mockup-sandbox` build: `BASE_PATH=/__mockup PORT=8081 vite build` (dev-only tool, never deployed, but still runs under `pnpm -r run build`).

**How to apply:** If a CF deploy "shows the old design / no changes," check the CF build log. A typecheck failure or a "PORT/BASE_PATH required" throw means root `pnpm run build` is failing. Fix the offending artifact's `build` script to be self-contained rather than asking the user to change Cloudflare settings. Keep types clean so the typecheck gate passes.
