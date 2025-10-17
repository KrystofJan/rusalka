Awesome scope. Since you’ve already dabbled in the frontend, the fastest path is to stand up a clean, testable Go backend with clear contracts and let your Next.js app consume it. Below is a pragmatic architecture + step-by-step plan that gets you from zero → shipping, with choices that won’t paint you into a corner.

---

# High-level architecture

**Monorepo** (Turborepo)

* `apps/web` → Next.js 14 (App Router), RSC where it helps, edge-friendly routes for static pages
* `apps/api` → Go HTTP service (REST + Webhooks)
* `packages/contracts` → OpenAPI spec + generated TS client (for the web) and Go server stubs
* `packages/ui` → shared React components, design system (e.g., Radix UI + Tailwind)
* `packages/config` → eslint, tsconfig, go linters, etc.

**Core tech picks**

* **Go HTTP**: `chi` or `echo` (lightweight, fast).
* **DB**: Postgres (+ `sqlc` or `ent` for type-safe queries; I suggest `sqlc` for simple, explicit SQL).
* **Migrations**: `golang-migrate`.
* **Auth**: Use a managed IdP (Clerk/Auth0/Ory) *or* self-host Ory Kratos. For speed, choose **Clerk** or **Auth0**. Frontend uses Auth.js if you prefer, but mixing NextAuth + Go complicates sessions—managed IdP keeps Go stateless with JWTs.
* **Payments**: **Stripe** (Checkout + Billing + Webhooks).
* **Queues/Async**: Start with in-process workers; upgrade to `pgmq` or Redis later if needed.
* **File storage** (for templates/assets): S3-compatible (e.g., Cloudflare R2).
* **i18n**: `next-intl` (Next.js) with locale segments (`/cs`, `/en`).
* **Blog SSG**: MDX + Contentlayer (fast local dev, easy RSS).
* **GitHub integration**: server-to-server GitHub App or PAT scoped to public data at first.

**Deployment**

* Next.js on **Vercel** (fast SSG/ISR, good i18n).
* Go API on **Fly.io**, **Railway**, or **Render** (global Postgres available).
* DB: Managed Postgres (Neon/Supabase/Fly Postgres).
* Secrets: Vercel project env + backend platform secrets.
* CI: GitHub Actions (lint, test, build, tag, migrate).

---

# Data model (first pass)

* `users` (id, email, role, created\_at) — source of truth is IdP; mirror minimal fields.
* `profiles` (user\_id FK, display\_name, locale\_pref)
* `services` (id, slug, title, description, price\_cents, currency)
* `subscriptions` (id, user\_id, stripe\_customer\_id, stripe\_sub\_id, status, current\_period\_end)
* `orders` (id, user\_id, product\_id, stripe\_payment\_intent\_id, amount\_cents, status)
* `products` (id, slug, name, tier, metadata jsonb)
* `templates` (id, product\_id, name, s3\_url, config jsonb)
* `projects` (id, user\_id, title, description, github\_repo, public boolean)
* `blog_posts` (id, slug, title, excerpt, locale, published\_at) — **note**: for SSG you’ll store MDX files in the repo; this table is optional if you want search/stats later.
* `audit_logs` (id, user\_id, action, payload jsonb, created\_at)
* `webhooks` (id, provider, event\_type, payload jsonb, processed\_at)

Use UUIDs, `created_at/updated_at` everywhere. Add indexes on `slug`, `user_id`, and Stripe IDs.

---

# API design (REST, versioned)

Base: `/v1`

* **Auth & identity** (stateless):

  * Middleware verifies IdP JWT (RS256).
  * `/me` → returns profile, roles, active subscription.
* **Services & products**:

  * `GET /services`, `GET /products`
  * `GET /templates?product_id=...`
* **Checkout & billing** (Stripe):

  * `POST /billing/checkout-session` → returns URL
  * `POST /billing/customer-portal` → returns URL
  * `POST /webhooks/stripe` → handle `checkout.session.completed`, `invoice.paid`, `customer.subscription.updated`
* **Projects**:

  * `GET /projects?user=me`
  * `POST /projects` (title, repo link)
* **GitHub**:

  * `GET /github/profile/:username` (cached)
  * `GET /github/repos/:username` (cached/paginated)
* **Templates / site creation**:

  * `POST /site-instances` (template\_id, config) → kick off creation job (for your “lower-tier WordPress”)
  * `GET /site-instances/:id` (status)
* **Admin/Dashboard**:

  * `GET /admin/metrics`, `GET /admin/orders`, `GET /admin/subscriptions`

Document with **OpenAPI** and generate a typed TS client for your Next.js app.

---

# Frontend mapping (Next.js)

* Routes:

  * `/[locale]/services` (SSR/ISR)
  * `/[locale]/products` + `/[locale]/products/[slug]` (ISR)
  * `/[locale]/projects` (client page with user’s GitHub data)
  * `/[locale]/dashboard` (protected, fetches `/me`, subscriptions, templates, site instances)
  * `/[locale]/blog` & `/[locale]/blog/[slug]` (SSG via MDX/Contentlayer)
* **i18n**: locale segment middleware, `next-intl` dictionaries per `cs` and `en`.
* **Auth**: IdP’s React SDK (Clerk/Auth0) for client session; server actions verify JWT with your Go public keys or JWKS URL if you need server-side checks.
* **Payments**: Stripe Checkout client action calls your Go API to create a session; redirect to Stripe.

---

# Minimal Go skeleton

```
apps/api/
  cmd/server/main.go
  internal/http/middleware/auth.go
  internal/http/handlers/*.go
  internal/billing/stripe.go
  internal/github/client.go
  internal/db/ (sqlc generated)
  migrations/
```

* `chi` router, CORS configured only for your web origin.
* `auth` middleware:

  1. Read `Authorization: Bearer <jwt>` from the browser (obtained from IdP).
  2. Validate via JWKS (cache keys).
  3. Put `user_id`, `email`, `roles` into `context`.

---

# Stripe integration (must-haves)

* Create **Products/Prices** in Stripe dashboard (mirrors `services`/`products`).
* Backend endpoint `POST /billing/checkout-session`:

  * Validates user → creates/uses `stripe_customer_id`
  * Creates Checkout Session (mode: subscription or payment) with `success_url` and `cancel_url`
* Webhook `/webhooks/stripe`:

  * Verify signature
  * Upsert `subscriptions`/`orders` accordingly (idempotency using `event.id`)
  * Record to `audit_logs`

---

# GitHub integration

* Start simple with public REST calls (no user scopes).
* Cache responses in Postgres with `fetched_at` and an `ETag` header to avoid rate limits.
* For user-specific private repos later, create a GitHub App and store installation tokens per user.

---

# “Website creation system” (lower-tier WordPress)

Start lean:

1. **Templates** are zipped Next.js/Eleventy/Tailwind projects with config (`template.json`), stored on R2.
2. `POST /site-instances` takes `template_id` + config (title, colors, nav, language).
3. Worker unpacks template into a new Git repo (on GitHub or your own Gitea), applies config (replace tokens), pushes, and optionally deploys (Vercel API).
4. Return deploy URL + status.
5. Later: add a simple “content blocks” schema (JSON) and a tiny admin UI to edit + redeploy.

---

# Blog (file-based SSG)

* `content/` with `/blog/cs/*.mdx` and `/blog/en/*.mdx`
* Contentlayer to parse frontmatter: `title`, `date`, `excerpt`, `tags`, `locale`.
* Generate: static pages, index pages per locale, RSS per locale, sitemap.

---

# Localization (Czech/English)

* Folder dictionaries: `messages/cs.json`, `messages/en.json`.
* Locale detection middleware: Accept-Language → default to `/en`.
* Keep slugs localized (`/cs/blog/...`, `/en/blog/...`) and map canonical/alternate links for SEO.

---

# Security & fundamentals

* Enforce HTTPS, HSTS on the web tier.
* CSRF not needed for pure JSON + Bearer; still use `SameSite=Lax` for any cookies you add.
* Rate limit auth-sensitive endpoints (IP+user).
* Validate all input (Go: `go-playground/validator`).
* Structured logging (zerolog or slog), correlation IDs.
* Observability: Prometheus metrics, pprof in non-prod, OpenTelemetry later.

---

# Testing & CI

* **Go**: table-driven tests for handlers/services; integration tests with `testcontainers-go` (Postgres + Stripe mock if desired).
* **Web**: Playwright for critical flows (auth, checkout).
* **CI (GitHub Actions)**:

  * Lint/format (go vet, staticcheck, eslint)
  * Unit tests
  * Build Docker image for API, push to registry
  * Run migrations on deploy
  * Vercel deploy preview for PRs

---

# Step-by-step roadmap (8–10 weeks)

**Week 1–2: Foundations**

* Monorepo + Turborepo, Vercel app, Go API skeleton on Fly/Railway.
* Postgres + migrations wired; OpenAPI stub + TS client generation.
* IdP integration (Clerk/Auth0); `/me` endpoint working end-to-end.

**Week 3: Products/Services**

* `services`, `products`, `templates` tables + endpoints.
* Next.js services/products pages (ISR).
* Admin seed script for initial products.

**Week 4: Payments**

* Stripe Checkout endpoint + webhooks; subscription status reflected in `/me`.
* Dashboard shows active plan; “Manage billing” (Stripe portal) button.

**Week 5: Blog & i18n**

* MDX + Contentlayer; `/cs` + `/en` routing, SEO tags, RSS.

**Week 6: Projects & GitHub**

* Public GitHub profile/repo listing; cache layer; projects page tied to DB.

**Week 7–8: “Website creation system” v1**

* Template upload + storage; `POST /site-instances`; worker creates repo & Vercel deploy; status page in dashboard.

**Week 9–10: Polish & ops**

* Metrics, rate limits, error pages, emails (transactional via Resend/Postmark), backups, docs.

---

# Sample commands & snippets

**OpenAPI → TS client (packages/contracts)**

```bash
# author your openapi.yaml, then
npx openapi-typescript openapi.yaml -o index.d.ts
# or use openapi-generator for a full client
```

**Go deps**

```bash
go get github.com/go-chi/chi/v5 github.com/jackc/pgx/v5 github.com/kyleconroy/sqlc
go get github.com/golang-jwt/jwt/v5 github.com/lestrrat-go/jwx/jwk
go get github.com/stripe/stripe-go/v79
```

**JWT middleware (sketch)**

```go
func Auth(next http.Handler) http.Handler {
  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
    // parse Bearer, fetch JWKS (cache), verify, set user in context
    next.ServeHTTP(w, r)
  })
}
```

**Stripe webhook handler outline**

```go
func StripeWebhook(w http.ResponseWriter, r *http.Request) {
  // verify signature, switch on event.Type, upsert subscription/order, log
}
```

---

# What to do first (today)

1. Create the **monorepo** with Turborepo; set up `apps/web` (Next.js) + `apps/api` (Go).
2. Provision **Postgres** and add **migrations** for `users`, `services`, `products`, `subscriptions`.
3. Integrate **IdP** in the web; add a Go **JWT auth middleware** that validates IdP tokens.
4. Implement `/v1/me`, `/v1/services`, `/v1/products`. Wire the web to consume them via a generated client.
5. Stand up **Stripe** keys and implement the Checkout + webhook loop with a single paid plan.

Once those are solid, the rest is just layering on features.

If you want, I can sketch a concrete folder structure or an initial `docker-compose` for local Postgres + the API next.
