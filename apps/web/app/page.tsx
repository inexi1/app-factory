import { WaitlistForm } from "./components/WaitlistForm";
import { FaqAccordion } from "./components/FaqAccordion";

const problems = [
  {
    icon: "🖨️",
    title: "Printer jams at the worst moment",
    desc: "You're about to close a deal and the printer dies. Googling wastes 40 minutes of your day.",
  },
  {
    icon: "📶",
    title: "Wi-Fi drops during a Zoom call",
    desc: "Your router reboots and takes your credibility with it. No IT person to call.",
  },
  {
    icon: "💻",
    title: "Software errors you can't decode",
    desc: "Error 0x80070005 means nothing to you, and paying $120/hr for a tech visit feels ridiculous.",
  },
];

const steps = [
  {
    n: "01",
    title: "Describe the problem",
    desc: "Type it in plain English. No jargon, no forms, no ticket number.",
    color: "#EFF6FF",
    accent: "#2563EB",
  },
  {
    n: "02",
    title: "Get a clear fix",
    desc: "HelpIQ diagnoses and walks you through the solution step by step in under 10 seconds.",
    color: "#F0FDF4",
    accent: "#10B981",
  },
  {
    n: "03",
    title: "Back to business",
    desc: "Fixed in minutes, not hours. No bill, no waiting on hold, no technician visit.",
    color: "#FFF7ED",
    accent: "#F59E0B",
  },
];

const stats = [
  { value: "< 10s", label: "Average response time" },
  { value: "500+", label: "Businesses on waitlist" },
  { value: "24/7", label: "Always available" },
  { value: "$0", label: "During early access" },
];

const plans = [
  {
    name: "Starter",
    price: "$19",
    period: "/mo",
    desc: "Perfect for solopreneurs",
    features: ["50 AI support queries/mo", "Instant step-by-step answers", "Email support"],
    cta: "Join waitlist",
    highlight: false,
  },
  {
    name: "Business",
    price: "$49",
    period: "/mo",
    desc: "For small teams up to 10",
    features: [
      "Unlimited queries",
      "Priority answers",
      "Full query history",
      "Up to 5 users",
      "Slack integration (coming soon)",
    ],
    cta: "Join waitlist",
    highlight: true,
  },
];


export default function Home() {
  return (
    <div style={{ fontFamily: "'Inter', var(--font-body), sans-serif", color: "var(--color-text)" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #E5E7EB",
        padding: "0 40px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{
            width: "32px", height: "32px",
            background: "var(--color-primary)",
            borderRadius: "8px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "16px",
          }}>⚡</div>
          <span style={{ fontWeight: 800, fontSize: "20px", color: "var(--color-primary)", letterSpacing: "-0.5px" }}>
            HelpIQ
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <a href="#how-it-works" style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-text-muted)" }}>How it works</a>
          <a href="#pricing" style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-text-muted)" }}>Pricing</a>
          <a href="#faq" style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-text-muted)" }}>FAQ</a>
          <a href="#waitlist" style={{
            fontSize: "14px", fontWeight: 700,
            background: "var(--color-primary)",
            color: "var(--color-primary-contrast)",
            padding: "9px 20px",
            borderRadius: "8px",
          }}>
            Get early access
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="waitlist" style={{
        position: "relative",
        overflow: "hidden",
        padding: "100px 24px 96px",
        textAlign: "center",
        background: "linear-gradient(160deg, #F0F5FF 0%, #FAFBFF 50%, #F0FFF8 100%)",
      }}>
        {/* Decorative circles */}
        <div style={{
          position: "absolute", top: "-80px", right: "-80px",
          width: "400px", height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-60px", left: "-60px",
          width: "320px", height: "320px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", maxWidth: "760px", margin: "0 auto" }}>
          <div className="fade-up" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "#EFF6FF",
            border: "1px solid #BFDBFE",
            color: "var(--color-primary)",
            borderRadius: "999px",
            padding: "6px 16px",
            fontSize: "13px",
            fontWeight: 600,
            marginBottom: "28px",
          }}>
            <span style={{ background: "var(--color-primary)", color: "#fff", borderRadius: "999px", padding: "2px 8px", fontSize: "11px" }}>NEW</span>
            AI IT support for small business - Early access open
          </div>

          <h1 className="fade-up-2" style={{
            fontSize: "clamp(40px, 6vw, 64px)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-1.5px",
            marginBottom: "24px",
            color: "#0F172A",
          }}>
            Stop Googling your<br />
            <span style={{
              background: "linear-gradient(135deg, #2563EB, #10B981)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              tech problems.
            </span>
          </h1>

          <p className="fade-up-3" style={{
            fontSize: "19px",
            lineHeight: 1.65,
            color: "var(--color-text-muted)",
            maxWidth: "520px",
            margin: "0 auto 8px",
          }}>
            HelpIQ gives you instant answers to your business IT problems - printer jams, Wi-Fi drops, software errors, and more.
            <strong style={{ color: "var(--color-text)" }}> No ticket. No wait. No bill.</strong>
          </p>

          <div className="fade-up-4">
            <WaitlistForm />
            <p style={{ marginTop: "12px", fontSize: "13px", color: "#94A3B8", display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
              <span>✓ Free during early access</span>
              <span>✓ No credit card</span>
              <span>✓ Cancel anytime</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{
        background: "var(--color-text)",
        padding: "28px 40px",
      }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
          textAlign: "center",
        }}>
          {stats.map((s) => (
            <div key={s.value}>
              <div style={{ fontSize: "28px", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px" }}>{s.value}</div>
              <div style={{ fontSize: "13px", color: "#94A3B8", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section style={{ padding: "96px 24px", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "1.5px", color: "var(--color-primary)", textTransform: "uppercase", marginBottom: "12px" }}>
              The problem
            </p>
            <h2 style={{ fontSize: "36px", fontWeight: 800, letterSpacing: "-0.8px", lineHeight: 1.2, color: "#0F172A" }}>
              Running a small business<br />without IT is brutal
            </h2>
            <p style={{ marginTop: "16px", fontSize: "17px", color: "var(--color-text-muted)", maxWidth: "480px", margin: "16px auto 0" }}>
              Tech problems eat up hours you don't have. And without someone to call, you're left Googling and guessing.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {problems.map((p, i) => (
              <div key={p.title} style={{
                background: "var(--color-background)",
                border: "1px solid #E5E7EB",
                borderRadius: "16px",
                padding: "32px 28px",
                transition: "box-shadow 0.2s",
              }}>
                <div style={{
                  width: "52px", height: "52px",
                  background: i === 0 ? "#FEF2F2" : i === 1 ? "#FFF7ED" : "#F0FDF4",
                  borderRadius: "12px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "26px",
                  marginBottom: "20px",
                }}>
                  {p.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "17px", marginBottom: "10px", letterSpacing: "-0.3px" }}>{p.title}</h3>
                <p style={{ fontSize: "15px", color: "var(--color-text-muted)", lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" style={{ padding: "96px 24px", background: "var(--color-background)" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "1.5px", color: "var(--color-primary)", textTransform: "uppercase", marginBottom: "12px" }}>
              How it works
            </p>
            <h2 style={{ fontSize: "36px", fontWeight: 800, letterSpacing: "-0.8px", color: "#0F172A" }}>
              Fixed in 3 steps
            </h2>
            <p style={{ marginTop: "16px", fontSize: "17px", color: "var(--color-text-muted)" }}>
              No learning curve. No tech degree required.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "28px" }}>
            {steps.map((s) => (
              <div key={s.n} style={{
                background: s.color,
                borderRadius: "16px",
                padding: "36px 28px",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: "20px", right: "20px",
                  fontSize: "56px", fontWeight: 900,
                  color: s.accent,
                  opacity: 0.12,
                  lineHeight: 1,
                  letterSpacing: "-2px",
                }}>
                  {s.n}
                </div>
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px", height: "40px",
                  borderRadius: "10px",
                  background: s.accent,
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "15px",
                  marginBottom: "20px",
                }}>
                  {s.n.replace("0", "")}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "18px", marginBottom: "10px", color: "#0F172A", letterSpacing: "-0.3px" }}>{s.title}</h3>
                <p style={{ fontSize: "15px", color: "#475569", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOCK CHAT ── */}
      <section style={{ padding: "96px 24px", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "1.5px", color: "var(--color-primary)", textTransform: "uppercase", marginBottom: "12px" }}>
              See it in action
            </p>
            <h2 style={{ fontSize: "36px", fontWeight: 800, letterSpacing: "-0.8px", color: "#0F172A" }}>
              Real answers in seconds
            </h2>
          </div>

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
                {["#FF5F57","#FFBD2E","#28CA41"].map((c) => (
                  <div key={c} style={{ width: "12px", height: "12px", borderRadius: "50%", background: c }} />
                ))}
              </div>
              <div style={{
                flex: 1,
                textAlign: "center",
                fontSize: "13px",
                fontWeight: 600,
                color: "#64748B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
              }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981", display: "inline-block" }} />
                HelpIQ · AI Support
              </div>
            </div>

            {/* Chat messages */}
            <div style={{ padding: "28px 24px", background: "#FAFBFF", display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* User message */}
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", alignItems: "flex-end" }}>
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
                  width: "34px", height: "34px",
                  borderRadius: "50%",
                  background: "#E2E8F0",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "14px",
                  flexShrink: 0,
                }}>👤</div>
              </div>

              {/* Typing indicator */}
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-end" }}>
                <div style={{
                  width: "34px", height: "34px",
                  borderRadius: "50%",
                  background: "var(--color-primary)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "16px",
                  flexShrink: 0,
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
                    <li>In the top menu: <strong>Printer → uncheck "Use Printer Offline"</strong></li>
                    <li>If it grays out, restart the <strong>Print Spooler</strong> service (search "Services" in Start)</li>
                  </ol>
                  <p style={{ marginTop: "10px", color: "#64748B" }}>This fixes it in 90% of cases. Still showing offline? Reply and I'll walk you through the next step.</p>
                </div>
              </div>

              {/* User follow-up */}
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", alignItems: "flex-end" }}>
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
                  width: "34px", height: "34px",
                  borderRadius: "50%",
                  background: "#E2E8F0",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "14px",
                  flexShrink: 0,
                }}>👤</div>
              </div>
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
                flex: 1,
                background: "#F1F5F9",
                borderRadius: "999px",
                padding: "10px 18px",
                fontSize: "14px",
                color: "#94A3B8",
              }}>
                Ask your next question…
              </div>
              <div style={{
                width: "38px", height: "38px",
                borderRadius: "50%",
                background: "var(--color-primary)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "16px",
                color: "#fff",
              }}>→</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: "96px 24px", background: "var(--color-background)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "1.5px", color: "var(--color-primary)", textTransform: "uppercase", marginBottom: "12px" }}>
              Pricing
            </p>
            <h2 style={{ fontSize: "36px", fontWeight: 800, letterSpacing: "-0.8px", color: "#0F172A" }}>
              Simple, honest pricing
            </h2>
            <p style={{ marginTop: "16px", fontSize: "17px", color: "var(--color-text-muted)" }}>
              Free while we're in early access. Sign up now to lock in the launch price.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", alignItems: "start" }}>
            {plans.map((plan) => (
              <div key={plan.name} style={{
                border: plan.highlight ? "2px solid var(--color-primary)" : "1px solid #E5E7EB",
                borderRadius: "20px",
                padding: "36px 32px",
                background: plan.highlight ? "var(--color-surface)" : "var(--color-background)",
                position: "relative",
                boxShadow: plan.highlight ? "0 12px 40px rgba(37,99,235,0.12)" : "none",
              }}>
                {plan.highlight && (
                  <div style={{
                    position: "absolute", top: "-14px", left: "50%",
                    transform: "translateX(-50%)",
                    background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                    color: "#fff",
                    fontSize: "12px", fontWeight: 700,
                    padding: "5px 16px",
                    borderRadius: "999px",
                    letterSpacing: "0.3px",
                    whiteSpace: "nowrap",
                  }}>
                    ⭐ Most popular
                  </div>
                )}
                <div style={{ fontWeight: 700, fontSize: "20px", marginBottom: "4px" }}>{plan.name}</div>
                <div style={{ fontSize: "13px", color: "var(--color-text-muted)", marginBottom: "24px" }}>{plan.desc}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "28px" }}>
                  <span style={{ fontSize: "44px", fontWeight: 800, letterSpacing: "-1px", color: "#0F172A" }}>{plan.price}</span>
                  <span style={{ fontSize: "15px", color: "var(--color-text-muted)" }}>{plan.period}</span>
                </div>
                <ul style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px" }}>
                      <span style={{
                        width: "20px", height: "20px",
                        borderRadius: "50%",
                        background: "#F0FDF4",
                        color: "#10B981",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "12px", fontWeight: 700,
                        flexShrink: 0,
                      }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#waitlist" style={{
                  display: "block",
                  width: "100%",
                  padding: "15px",
                  borderRadius: "12px",
                  border: plan.highlight ? "none" : "2px solid var(--color-primary)",
                  background: plan.highlight
                    ? "linear-gradient(135deg, #2563EB, #1D4ED8)"
                    : "transparent",
                  color: plan.highlight ? "#fff" : "var(--color-primary)",
                  fontWeight: 700,
                  fontSize: "15px",
                  letterSpacing: "0.1px",
                  boxShadow: plan.highlight ? "0 4px 16px rgba(37,99,235,0.35)" : "none",
                  textAlign: "center",
                  textDecoration: "none",
                  boxSizing: "border-box",
                }}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: "96px 24px", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "1.5px", color: "var(--color-primary)", textTransform: "uppercase", marginBottom: "12px" }}>
              FAQ
            </p>
            <h2 style={{ fontSize: "36px", fontWeight: 800, letterSpacing: "-0.8px", color: "#0F172A" }}>
              Common questions
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{
        padding: "100px 24px",
        textAlign: "center",
        background: "linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 50%, #2563EB 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "-100px", right: "-100px",
          width: "400px", height: "400px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
        }} />
        <div style={{
          position: "absolute", bottom: "-80px", left: "-80px",
          width: "300px", height: "300px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
        }} />
        <div style={{ position: "relative", maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "40px", fontWeight: 800, letterSpacing: "-1px",
            color: "#fff", marginBottom: "16px",
          }}>
            Stop letting tech problems slow you down.
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.75)", marginBottom: "0" }}>
            500+ business owners are already signed up. Grab your spot.
          </p>
          <div style={{ marginTop: "8px" }}>
            <WaitlistForm dark />
          </div>
          <p style={{ marginTop: "12px", fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
            Free during early access · No credit card required
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        background: "#0F172A",
        padding: "48px 40px 32px",
        color: "#94A3B8",
      }}>
        <div style={{
          maxWidth: "960px",
          margin: "0 auto",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "32px", marginBottom: "40px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <div style={{
                  width: "28px", height: "28px",
                  background: "var(--color-primary)",
                  borderRadius: "6px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "14px",
                }}>⚡</div>
                <span style={{ fontWeight: 800, fontSize: "18px", color: "#fff" }}>HelpIQ</span>
              </div>
              <p style={{ fontSize: "14px", lineHeight: 1.6, maxWidth: "240px" }}>
                AI IT support for small businesses. Fast answers, no tech degree needed.
              </p>
            </div>
            <div style={{ display: "flex", gap: "48px" }}>
              <div>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "#fff", marginBottom: "12px" }}>Product</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {["How it works", "Pricing", "FAQ"].map((l) => (
                    <a key={l} href="#" style={{ fontSize: "14px", color: "#94A3B8" }}>{l}</a>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "#fff", marginBottom: "12px" }}>Contact</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <a href="mailto:hello@helpiq.dev" style={{ fontSize: "14px", color: "#94A3B8" }}>hello@helpiq.dev</a>
                </div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #1E293B", paddingTop: "24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
            <p style={{ fontSize: "13px" }}>© 2026 HelpIQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
