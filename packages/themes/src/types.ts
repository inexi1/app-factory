/**
 * Every app in the factory — web or mobile — is 100% described by one
 * of these objects. Nothing app-specific should ever live outside this
 * shape. If you find yourself writing `if (appId === 'math-adventure')`
 * anywhere in shared code, that branch belongs in a config file instead.
 */
export interface AppConfig {
  /** Unique slug. Used for env vars, build profiles, analytics keys. */
  id: string;

  /** Human-facing name shown in stores, headers, emails. */
  name: string;
  tagline: string;

  /** Who this variant is for — drives copy tone and content, not just color. */
  audience: {
    label: string; // e.g. "Parents of kids 4-8"
    tone: "playful" | "minimal" | "premium" | "bold" | "friendly";
  };

  domain: string; // e.g. "mathadventure.app"
  store: {
    ios?: string;
    android?: string;
  };

  theme: {
    colors: {
      background: string;
      surface: string;
      text: string;
      textMuted: string;
      primary: string;
      primaryContrast: string;
      accent: string;
      success: string;
      danger: string;
    };
    fonts: {
      display: string; // headline face
      body: string; // body/UI face
    };
    radius: "none" | "sm" | "md" | "lg" | "full";
    logo: string; // path/URL to logo asset
  };

  copy: {
    heroHeadline: string;
    heroSubhead: string;
    ctaPrimary: string;
    ctaSecondary?: string;
  };

  /** Toggle features per-app without branching shared code. */
  features: Record<string, boolean>;

  /** Per-app analytics / ad / IAP identifiers, all optional. */
  integrations?: {
    analyticsId?: string;
    metaPixelId?: string;
    revenueCatKey?: string;
  };
}
