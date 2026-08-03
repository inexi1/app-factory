"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need any technical knowledge to use HelpIQ?",
    a: "None at all. Just describe your problem the way you'd explain it to a friend. HelpIQ handles the technical interpretation.",
  },
  {
    q: "What kinds of problems can HelpIQ solve?",
    a: "Printer issues, Wi-Fi and network problems, software errors, email setup, file recovery, slow computer. If it's something you'd normally call a tech guy for, HelpIQ can handle it.",
  },
  {
    q: "What happens if HelpIQ can't solve my problem?",
    a: "It gives you a clear summary of what's been tried so far, so you can hand it off to a technician without wasting time re-explaining.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Your queries are used only to generate your answer and are never sold or shared. We're SOC 2 compliant (in progress).",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {faqs.map((item, i) => (
        <div
          key={i}
          style={{
            background: "var(--color-background)",
            border: "1px solid #E5E7EB",
            borderRadius: "14px",
            overflow: "hidden",
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "22px 28px",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              gap: "16px",
            }}
          >
            <span style={{ fontWeight: 700, fontSize: "16px", color: "#0F172A", letterSpacing: "-0.2px" }}>
              {item.q}
            </span>
            <span style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              background: open === i ? "var(--color-primary)" : "#F1F5F9",
              color: open === i ? "#fff" : "var(--color-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              fontWeight: 400,
              flexShrink: 0,
              transition: "background 0.2s, color 0.2s",
              lineHeight: 1,
            }}>
              {open === i ? "−" : "+"}
            </span>
          </button>

          {open === i && (
            <div style={{
              padding: "0 28px 22px",
              fontSize: "15px",
              color: "var(--color-text-muted)",
              lineHeight: 1.65,
            }}>
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
