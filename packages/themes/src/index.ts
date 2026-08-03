import type { AppConfig } from "./types";
import { mathAdventure } from "./apps/math-adventure";
import { focusFlow } from "./apps/focus-flow";
import { helpiq } from "./apps/helpiq";

export type { AppConfig } from "./types";

/**
 * Every launched app gets one line here. This registry is the only
 * place that needs to know every app exists.
 */
const registry: Record<string, AppConfig> = {
  [mathAdventure.id]: mathAdventure,
  [focusFlow.id]: focusFlow,
  [helpiq.id]: helpiq,
};

/**
 * Resolves the active app config from APP_ID (web: process.env.APP_ID,
 * mobile: EXPO_PUBLIC_APP_ID via app.config.js). Throws loudly on typos
 * instead of silently falling back — a wrong APP_ID at build time should
 * never ship as the wrong brand.
 */
export function getAppConfig(appId: string | undefined): AppConfig {
  if (!appId) {
    throw new Error(
      "APP_ID is not set. Every build must specify which app config to use — " +
        `see packages/themes/src/apps/ for available ids: ${Object.keys(registry).join(", ")}`
    );
  }
  const config = registry[appId];
  if (!config) {
    throw new Error(
      `Unknown APP_ID "${appId}". Available: ${Object.keys(registry).join(", ")}`
    );
  }
  return config;
}

export function listApps(): AppConfig[] {
  return Object.values(registry);
}
