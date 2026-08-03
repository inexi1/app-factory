# App Factory

One codebase. Many branded apps, web and mobile, each a config file — so
you can launch a new market test in hours, not a new repo per idea.

## How it works

```
packages/themes/     <- one file per app: colors, fonts, copy, audience, feature flags
packages/ui/         <- web components, styled ONLY via CSS variables from the active theme
packages/core/       <- cross-platform logic (feature flags, A/B assignment, tracking)
apps/web/            <- one Next.js app; APP_ID env var picks which config renders
apps/mobile/         <- one Expo app; APP_ID env var picks name/icon/bundle id + config
```

Nothing in `apps/` or `packages/ui` should ever contain a brand name, a
hardcoded hex color, or an `if (appId === ...)` branch. If you catch
yourself writing one, that logic belongs in a theme config instead —
that discipline is the entire reason this scales to N apps without the
code getting harder to maintain as you add more.

## Launching a new app

```bash
pnpm new-app
```

Answers a few prompts, writes `packages/themes/src/apps/<id>.ts`, and
registers it. Then:

```bash
APP_ID=<id> pnpm dev:web       # preview the web landing page
APP_ID=<id> pnpm dev:mobile    # preview in Expo Go
```

Ship it:
- **Web**: one Vercel project per app, each with its own `APP_ID` env
  var and custom domain, all pointing at the same repo/branch.
- **Mobile**: one EAS build profile per app in `eas.json` (not included
  yet — add as you get to your first real mobile launch), each setting
  `APP_ID` and its own bundle identifier/store listing.

## Why this shape, specifically

- **Config, not forks.** A fork diverges the moment someone patches a
  bug in app #3 and forgets app #1. One codebase means one bug fix
  reaches every live app.
- **CSS variables on web, StyleSheet-from-config on mobile.** Neither
  platform lets you share literal style objects across web and native,
  so the *shape* of the config is shared but each platform renders it
  its own way. Don't fight this by pulling in a cross-platform styling
  library until you actually feel the pain of duplicating components —
  it's a real cost, not a free upgrade.
- **The registry throws on a missing/unknown APP_ID** rather than
  defaulting to some app. A silent fallback is how you ship App B's
  copy under App A's icon.

## What's deliberately not built yet

This is a skeleton, not a finished product. Before your first real
launch you'll still need:

- Auth + a backend (this scaffold is frontend-only; add
  `packages/api` and a database once an app needs accounts)
- Payments/subscriptions (Stripe for web, RevenueCat for mobile —
  `integrations` in `AppConfig` has a slot for keys)
- Real analytics wired into `packages/core`'s `trackEvent`
- `eas.json` build profiles once you're ready to submit to app stores
- A design pass per app (this scaffold proves the *system* works
  across a playful kids brand and a minimal productivity brand — the
  actual pixel-level polish per app is still separate work)

## Local setup

```bash
pnpm install
APP_ID=math-adventure pnpm dev:web
```
