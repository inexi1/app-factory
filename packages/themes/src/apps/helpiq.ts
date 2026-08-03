import type { AppConfig } from "../types";

export const helpiq: AppConfig = {
  id: "helpiq",
  name: "HelpIQ",
  tagline: "Your AI IT support, 24/7. No ticket required.",

  audience: {
    label: "Small business owners without in-house IT",
    tone: "friendly",
  },

  domain: "helpiq.dev",
  store: {
    ios: undefined,
    android: undefined,
  },

  theme: {
    colors: {
      background: "#F7F9FC",
      surface: "#FFFFFF",
      text: "#1A2233",
      textMuted: "#5A6478",
      primary: "#2563EB",
      primaryContrast: "#FFFFFF",
      accent: "#10B981",
      success: "#10B981",
      danger: "#EF4444",
    },
    fonts: {
      display: "Inter",
      body: "Inter",
    },
    radius: "md",
    logo: "/brands/helpiq/logo.svg",
  },

  copy: {
    heroHeadline: "Stop Googling your tech problems. Just ask.",
    heroSubhead:
      "HelpIQ gives you instant answers to your business IT problems - printer jams, Wi-Fi drops, software errors, and more. No ticket, no wait, no bill.",
    ctaPrimary: "Get instant IT help",
    ctaSecondary: "See how it works",
  },

  features: {
    aiChat: true,
    ticketHistory: true,
    escalationToHuman: false,
    multiUser: false,
  },

  integrations: {
    analyticsId: "HIQ-XXXX",
  },
};
