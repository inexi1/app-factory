"use client";

import React from "react";

type Variant = "primary" | "secondary";

export function Button({
  children,
  variant = "primary",
  onClick,
}: {
  children: React.ReactNode;
  variant?: Variant;
  onClick?: () => void;
}) {
  const base: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    borderRadius: "var(--radius)",
    padding: "12px 24px",
    fontWeight: 700,
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    transition: "transform 120ms ease, opacity 120ms ease",
  };

  const variants: Record<Variant, React.CSSProperties> = {
    primary: {
      background: "var(--color-primary)",
      color: "var(--color-primary-contrast)",
    },
    secondary: {
      background: "transparent",
      color: "var(--color-text)",
      border: "1.5px solid var(--color-text-muted)",
    },
  };

  return (
    <button
      style={{ ...base, ...variants[variant] }}
      onClick={onClick}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {children}
    </button>
  );
}
