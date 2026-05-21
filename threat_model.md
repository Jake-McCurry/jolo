# Threat Model

## Project Overview

This repository is a pnpm TypeScript monorepo with a small Express 5 API (`artifacts/api-server`), shared PostgreSQL/Drizzle database code (`lib/db`), generated API schema/client libraries (`lib/api-spec`, `lib/api-zod`, `lib/api-client-react`), and a static React/Preact marketing site (`artifacts/jesusonline-org`).

The current production-relevant application surface is minimal: the API exposes a health endpoint and the JesusOnline.org artifact is a static site with hardcoded content and no backend API calls. `artifacts/mockup-sandbox` is a development-only prototype area and is out of scope unless a production path to it is later introduced.

Assumptions carried into this model:
- Production deployments run with `NODE_ENV=production`.
- Replit deployment TLS is handled by the platform.
- Mockup sandbox is never deployed to production.
- This repo is currently not deployed (`isDeployed: false` from deployment metadata), so the model focuses on production code paths rather than live exposure.

## Assets

- **Service availability** — the API and static site must remain reachable because the current production feature set is almost entirely public-facing content.
- **Application secrets and infrastructure configuration** — environment variables such as `DATABASE_URL`, `PORT`, and deployment configuration must not be exposed or misused.
- **Future user/session data** — shared client and server libraries already include auth-related hooks and database plumbing; if the API grows, authenticated user data will become a primary asset.
- **Operational logs** — request metadata and any future error records must not leak credentials, cookies, or other secrets.

## Trust Boundaries

- **Public internet to Express API** — requests cross from untrusted clients into `artifacts/api-server/src/app.ts` and its route handlers. Every future non-public route will need server-side authn/authz.
- **API server to PostgreSQL** — `lib/db/src/index.ts` creates a trusted DB connection from server-side secrets. Any future query-building bug here would directly affect data integrity and confidentiality.
- **Browser to static site assets** — `artifacts/jesusonline-org` is delivered to untrusted browsers. Any client-side injection bug would execute in the visitor's browser.
- **Build-time/dev-only tools to production code** — Vite dev settings, mockup sandbox code, scripts, and local artifacts are lower-trust development surfaces and should not be treated as production exposure without evidence of deployment reachability.
- **Application to logs** — request data flows into Pino logging; sensitive headers must stay redacted when present.

## Scan Anchors

- Production API entry point: `artifacts/api-server/src/index.ts` -> `src/app.ts` -> `src/routes/`.
- Production static site entry point: `artifacts/jesusonline-org/src/main.tsx` and route composition in `src/App.tsx`.
- Shared server-side data boundary: `lib/db/src/index.ts` and `lib/db/src/schema/`.
- Shared client auth/request boundary: `lib/api-client-react/src/custom-fetch.ts`.
- Usually ignore as dev-only: `artifacts/mockup-sandbox/`, `scripts/`, Vite dev server settings, and generated/dist output unless production reachability is shown.

## Threat Categories

### Tampering

The highest-value tampering risk in this repo would come from future API endpoints accepting client-controlled input and passing it into database queries, filesystem operations, redirects, or other trusted sinks. The current API surface is only `/api/healthz`, but the project already has database and generated API plumbing, so the key guarantee is that any future state-changing route must validate input at the server boundary and avoid trusting client-supplied business logic.

Required guarantees:
- All future API request bodies, query parameters, and path parameters must be validated server-side before use.
- Database access must remain parameterized and must not introduce string-built SQL.
- Static-site redirects and outbound links must not become user-controlled without validation.

### Information Disclosure

The main disclosure risks are leakage of secrets from environment variables, overexposed logs, and future expansion of API responses beyond intended data. The current logger already redacts `Authorization`, `Cookie`, and `Set-Cookie`, which is the right baseline.

Required guarantees:
- Secrets such as `DATABASE_URL` must remain server-only and never appear in frontend bundles, responses, or logs.
- Logs must continue redacting authentication material and session cookies.
- Future API responses must return only the fields required by the caller and must not expose stack traces or internal errors in production.

### Denial of Service

Because the current application is largely public and unauthenticated, availability is the main security property today. Unbounded parsing, expensive unauthenticated operations, or future external-service calls without timeouts would be the likely DoS paths.

Required guarantees:
- Public endpoints must stay lightweight unless protected by rate limits or equivalent abuse controls.
- Future endpoints that trigger database-heavy or third-party calls must have bounded work and timeouts.
- Request parsing limits should remain appropriate for the actual API payload sizes.

### Elevation of Privilege

There is no current admin or authenticated API surface in production, but the shared client library already supports bearer tokens and the repo structure suggests the API may expand. The main future privilege-escalation risks are missing server-side authorization checks and IDOR-style access control gaps once user data is introduced.

Required guarantees:
- Any future authenticated or role-gated endpoint must enforce authorization on the server, not only in client code.
- Bearer-token support in shared client code must only be used with correctly validated server-side auth.
- Dev-only code paths such as `artifacts/mockup-sandbox` must not be exposed through production routing or deployment configuration.
