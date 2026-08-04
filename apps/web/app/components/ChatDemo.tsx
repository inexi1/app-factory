"use client";

import { useEffect, useState } from "react";

export function ChatDemo() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    function run() {
      setPhase(0);
      timers.push(setTimeout(() => setPhase(1), 700));   // user message appears
      timers.push(setTimeout(() => setPhase(2), 2000));  // typing dots
      timers.push(setTimeout(() => setPhase(3), 4300));  // AI response
      timers.push(setTimeout(() => setPhase(4), 7000));  // user follow-up
      timers.push(setTimeout(run, 11500));                // loop
    }

    run();
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      <style>{`
        @keyframes chat-appear {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .chat-msg { animation: chat-appear 0.45s ease forwards; }
        @keyframes bdot {
          0%, 60%, 100% { transform: translateY(0); }
          30%            { transform: translateY(-5px); }
        }
        .d1 { animation: bdot 1.1s ease infinite; }
        .d2 { animation: bdot 1.1s 0.18s ease infinite; }
        .d3 { animation: bdot 1.1s 0.36s ease infinite; }
      `}</style>

      <div style={{
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)",
        border: "1px solid #E5E7EB",
      }}>

        {/* Window chrome */}
        <div style={{
          background: "#F8FAFC",
          borderBottom: "1px solid #E5E7EB",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}>
          <div style={{ display: "flex", gap: "6px" }}>
            {["#FF5F57", "#FFBD2E", "#28CA41"].map((c) => (
              <div key={c} style={{ width: "12px", height: "12px", borderRadius: "50%", background: c }} />
            ))}
          </div>
          <div style={{
            flex: 1, textAlign: "center", fontSize: "13px", fontWeight: 600, color: "#64748B",
            display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
          }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981", display: "inline-block" }} />
            HelpIQ · AI Support
          </div>
        </div>

        {/* Messages area */}
        <div style={{
          padding: "28px 24px",
          background: "#FAFBFF",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          minHeight: "340px",
        }}>

          {/* User message */}
          {phase >= 1 && (
            <div className="chat-msg" style={{ display: "flex", justifyContent: "flex-end", gap: "10px", alignItems: "flex-end" }}>
              <div style={{
                background: "var(--color-primary)",
                color: "#fff",
                padding: "13px 18px",
                borderRadius: "18px 18px 4px 18px",
                fontSize: "14px",
                lineHeight: 1.55,
                maxWidth: "75%",
                fontWeight: 500,
              }}>
                My printer says "offline" but it's plugged in and turned on. I need to print a quote in 10 minutes.
              </div>
              <div style={{
                width: "34px", height: "34px", borderRadius: "50%",
                background: "#E2E8F0", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "14px", flexShrink: 0,
              }}>👤</div>
            </div>
          )}

          {/* Typing dots */}
          {phase === 2 && (
            <div className="chat-msg" style={{ display: "flex", gap: "10px", alignItems: "flex-end" }}>
              <div style={{
                width: "34px", height: "34px", borderRadius: "50%",
                background: "var(--color-primary)", display: "flex",
                alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0,
              }}>⚡</div>
              <div style={{
                background: "#fff",
                border: "1px solid #E5E7EB",
                padding: "14px 18px",
                borderRadius: "18px 18px 18px 4px",
                display: "flex", gap: "5px", alignItems: "center",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}>
                {["d1", "d2", "d3"].map((d) => (
                  <div key={d} className={d} style={{
                    width: "7px", height: "7px", borderRadius: "50%", background: "#94A3B8",
                  }} />
                ))}
              </div>
            </div>
          )}

          {/* AI response */}
          {phase >= 3 && (
            <div className="chat-msg" style={{ display: "flex", gap: "10px", alignItems: "flex-end" }}>
              <div style={{
                width: "34px", height: "34px", borderRadius: "50%",
                background: "var(--color-primary)", display: "flex",
                alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0,
              }}>⚡</div>
              <div style={{
                background: "#fff",
                border: "1px solid #E5E7EB",
                padding: "13px 18px",
                borderRadius: "18px 18px 18px 4px",
                fontSize: "14px",
                lineHeight: 1.65,
                maxWidth: "82%",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}>
                <strong style={{ color: "var(--color-primary)" }}>On it!</strong> Here's the fastest fix:
                <ol style={{ paddingLeft: "18px", marginTop: "10px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <li>Open <strong>Settings → Bluetooth & devices → Printers</strong></li>
                  <li>Click your printer → <strong>"Open print queue"</strong></li>
                  <li>Top menu: <strong>Printer → uncheck "Use Printer Offline"</strong></li>
                  <li>Still stuck? Restart the <strong>Print Spooler</strong> service in Windows</li>
                </ol>
                <p style={{ marginTop: "10px", color: "#64748B" }}>
                  This fixes it 90% of the time. Reply if it's still showing offline and I'll walk you through the next step.
                </p>
              </div>
            </div>
          )}

          {/* User follow-up */}
          {phase >= 4 && (
            <div className="chat-msg" style={{ display: "flex", justifyContent: "flex-end", gap: "10px", alignItems: "flex-end" }}>
              <div style={{
                background: "var(--color-primary)",
                color: "#fff",
                padding: "13px 18px",
                borderRadius: "18px 18px 4px 18px",
                fontSize: "14px",
                lineHeight: 1.55,
                fontWeight: 500,
              }}>
                That worked! Thank you 🙌
              </div>
              <div style={{
                width: "34px", height: "34px", borderRadius: "50%",
                background: "#E2E8F0", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "14px", flexShrink: 0,
              }}>👤</div>
            </div>
          )}
        </div>

        {/* Input bar */}
        <div style={{
          background: "#fff",
          borderTop: "1px solid #E5E7EB",
          padding: "14px 20px",
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}>
          <div style={{
            flex: 1, background: "#F1F5F9", borderRadius: "999px",
            padding: "10px 18px", fontSize: "14px", color: "#94A3B8",
          }}>
            Ask your next question...
          </div>
          <div style={{
            width: "38px", height: "38px", borderRadius: "50%",
            background: "var(--color-primary)", display: "flex",
            alignItems: "center", justifyContent: "center",
            fontSize: "16px", color: "#fff",
          }}>→</div>
        </div>
      </div>
    </>
  );
}
