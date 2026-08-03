"use client";

import { useState } from "react";

export function WaitlistForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to backend / email service
    setStatus("success");
    setEmail("");
  }

  if (status === "success") {
    return (
      <p style={{
        marginTop: "32px",
        color: dark ? "#6EE7B7" : "var(--color-success)",
        fontWeight: 700,
        fontSize: "16px",
      }}>
        ✓ You're on the list — we'll email you when we launch!
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "32px",
      }}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        style={{
          padding: "14px 20px",
          fontSize: "15px",
          borderRadius: "10px",
          border: dark ? "1.5px solid rgba(255,255,255,0.25)" : "1.5px solid #D1D5DB",
          outline: "none",
          width: "272px",
          fontFamily: "inherit",
          color: dark ? "#fff" : "var(--color-text)",
          background: dark ? "rgba(255,255,255,0.1)" : "var(--color-surface)",
          backdropFilter: dark ? "blur(8px)" : "none",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "14px 28px",
          fontSize: "15px",
          fontWeight: 700,
          borderRadius: "10px",
          border: "none",
          background: dark ? "#fff" : "var(--color-primary)",
          color: dark ? "var(--color-primary)" : "var(--color-primary-contrast)",
          cursor: "pointer",
          fontFamily: "inherit",
          boxShadow: dark ? "0 4px 16px rgba(0,0,0,0.2)" : "0 4px 16px rgba(37,99,235,0.35)",
          transition: "transform 0.15s ease",
        }}
      >
        Get early access
      </button>
    </form>
  );
}
