import type { AppConfig } from "../types";

export const mathAdventure: AppConfig = {
  id: "math-adventure",
  name: "Math Adventure",
  tagline: "Math that feels like play",

  audience: {
    label: "Parents of kids 4-8",
    tone: "playful",
  },

  domain: "mathadventure.app",
  store: {
    ios: "https://apps.apple.com/app/math-adventure",
    android: "https://play.google.com/store/apps/details?id=app.mathadventure",
  },

  theme: {
    colors: {
      background: "#FFF9EE",
      surface: "#FFFFFF",
      text: "#2B2140",
      textMuted: "#6B6280",
      primary: "#6C4CE0",
      primaryContrast: "#FFFFFF",
      accent: "#FFB84C",
      success: "#4CAF7D",
      danger: "#E0574C",
    },
    fonts: {
      display: "Baloo 2",
      body: "Nunito",
    },
    radius: "lg",
    logo: "/brands/math-adventure/logo.svg",
  },

  copy: {
    heroHeadline: "Turn homework battles into 'one more level?'",
    heroSubhead:
      "A math app kids actually ask to play — built around adventure, not worksheets.",
    ctaPrimary: "Start the free adventure",
    ctaSecondary: "See how it works",
  },

  features: {
    dailyStreaks: true,
    parentDashboard: true,
    offlineMode: true,
    multiplayer: false,
  },

  integrations: {
    analyticsId: "MA-XXXX",
  },
};
