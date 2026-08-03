import type { AppConfig } from "@factory/themes";

/**
 * Platform-agnostic logic goes here — plain functions and hooks with no
 * DOM or React Native imports, so both apps/web and apps/mobile can use
 * them unmodified. Anything that touches CSS or native views belongs in
 * packages/ui (web) or apps/mobile/components instead.
 */

export function isFeatureEnabled(
  config: AppConfig,
  feature: string
): boolean {
  return Boolean(config.features[feature]);
}

/** Simple in-memory A/B assignment stub — swap for a real experiment
 * service (Statsig, PostHog, GrowthBook) once you're testing variants
 * within a single app, not just across apps. */
export function assignVariant<T extends string>(
  userId: string,
  variants: T[]
): T {
  let hash = 0;
  for (let i = 0; i < userId.length; i++) {
    hash = (hash << 5) - hash + userId.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash) % variants.length;
  return variants[index];
}

export function trackEvent(
  config: AppConfig,
  event: string,
  props?: Record<string, unknown>
) {
  // Route to whichever analytics tool you standardize on. Kept as a
  // single choke point so every app config's analyticsId is used the
  // same way, no per-app branching required.
  if (typeof window !== "undefined" && (window as any).analytics) {
    (window as any).analytics.track(event, { app: config.id, ...props });
  }
}
