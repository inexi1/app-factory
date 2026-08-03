import type { AppConfig } from "../types";

export const focusFlow: AppConfig = {
  id: "focus-flow",
  name: "Focus Flow",
  tagline: "Deep work, on a timer",

  audience: {
    label: "Remote knowledge workers, 25-40",
    tone: "minimal",
  },

  domain: "focusflow.app",
  store: {
    ios: "https://apps.apple.com/app/focus-flow",
    android: "https://play.google.com/store/apps/details?id=app.focusflow",
  },

  theme: {
    colors: {
      background: "#0E0E10",
      surface: "#18181B",
      text: "#F4F4F5",
      textMuted: "#A1A1AA",
      primary: "#E4E4E7",
      primaryContrast: "#0E0E10",
      accent: "#7DD3FC",
      success: "#4CAF7D",
      danger: "#E0574C",
    },
    fonts: {
      display: "Instrument Serif",
      body: "Inter",
    },
    radius: "sm",
    logo: "/brands/focus-flow/logo.svg",
  },

  copy: {
    heroHeadline: "Fewer tabs. More done.",
    heroSubhead:
      "A focus timer with just enough structure to keep you honest — no gamification, no noise.",
    ctaPrimary: "Try it free",
  },

  features: {
    dailyStreaks: false,
    parentDashboard: false,
    offlineMode: true,
    multiplayer: false,
  },

  integrations: {
    analyticsId: "FF-XXXX",
  },
};
