---
name: JesusOnline scaling roadmap
description: Agreed-but-deferred plan for scaling the LP funnel site professionally (as of July 2026)
---

User plans to scale jesusonline-org to many landing pages. Roadmap was presented and approved as advice-only (July 13, 2026) — not yet implemented. Priority order:

1. **Typed page registry** — single config source of truth per LP (slug, title, video ID, thumbnail, survey options, tracking label). Routes, prerender list, SEO meta, JSON-LD, and sitemap should all derive from it. Kills the current 4-place manual sync (page .tsx, App.tsx route, prerender.mjs ROUTES, dual meta in SEO.tsx + prerender.mjs).
2. **Build safety rails** — prerender must FAIL the build on SSR errors (currently warns and ships empty pages); assert the `<div id="root">` replacement matched; post-build smoke check that every page has real content and LPs contain `gtm-conversion-received-christ`; auto-generate sitemap.xml.
3. **Typed tracking labels** — conversion labels as a typed union in track.ts, naming convention `{lp-slug}_{action}`.
4. **Wrangler environments** — consolidate wrangler.jsonc/wrangler.staging.jsonc, but ONLY coordinated with the user's Cloudflare dashboard build commands. Never change unilaterally.
5. **Brand tokens** — move hardcoded hex (#0095FF in .btn-primary, header gradient) into Tailwind theme.

**Why:** user explicitly wants zero tech debt and professional scaling; deferred implementation to decide later.
**How to apply:** when the user asks to add more landing pages or revisits scaling, propose starting with items 1–2 before adding pages. Explicitly ruled out for now: CMS, component library, any backend — keep the site 100% static.
