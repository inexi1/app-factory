import React from "react";
import type { AppConfig } from "@factory/themes";

const radiusMap: Record<AppConfig["theme"]["radius"], string> = {
  none: "0px",
  sm: "6px",
  md: "10px",
  lg: "16px",
  full: "999px",
};

/**
 * Wrap the app root with this. It writes every theme value onto CSS
 * custom properties, so components below (Button, Card, etc.) reference
 * var(--color-primary) etc. and never import a config directly. Swapping
 * apps becomes purely a matter of which config gets passed in at build
 * time — components don't change.
 */
export function ThemeProvider({
  config,
  children,
}: {
  config: AppConfig;
  children: React.ReactNode;
}) {
  const { colors, fonts, radius } = config.theme;

  const style: React.CSSProperties & Record<string, string> = {
    "--color-background": colors.background,
    "--color-surface": colors.surface,
    "--color-text": colors.text,
    "--color-text-muted": colors.textMuted,
    "--color-primary": colors.primary,
    "--color-primary-contrast": colors.primaryContrast,
    "--color-accent": colors.accent,
    "--color-success": colors.success,
    "--color-danger": colors.danger,
    "--font-display": fonts.display,
    "--font-body": fonts.body,
    "--radius": radiusMap[radius],
    background: "var(--color-background)",
    color: "var(--color-text)",
    fontFamily: "var(--font-body)",
    minHeight: "100%",
  };

  return <div style={style}>{children}</div>;
}
