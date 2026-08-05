import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "HelpIQ - AI IT Support for Small Business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "40px" }}>
          <div style={{
            width: "64px",
            height: "64px",
            background: "#2563EB",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "34px",
            marginRight: "16px",
          }}>
            ⚡
          </div>
          <span style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "-2px",
          }}>
            HelpIQ
          </span>
        </div>

        {/* Headline */}
        <div style={{
          fontSize: "52px",
          fontWeight: 700,
          color: "#fff",
          textAlign: "center",
          lineHeight: 1.15,
          marginBottom: "24px",
          letterSpacing: "-1.5px",
          maxWidth: "900px",
        }}>
          AI IT Support for Small Business
        </div>

        {/* Subtext */}
        <div style={{
          fontSize: "28px",
          color: "rgba(255,255,255,0.55)",
          textAlign: "center",
          marginBottom: "56px",
          letterSpacing: "-0.3px",
        }}>
          No ticket. No wait. No bill.
        </div>

        {/* Pills */}
        <div style={{ display: "flex" }}>
          {["24/7 Available", "Under 10 seconds", "Free early access"].map((label, i) => (
            <div key={label} style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "rgba(255,255,255,0.85)",
              padding: "10px 24px",
              borderRadius: "999px",
              fontSize: "20px",
              fontWeight: 500,
              marginRight: i < 2 ? "14px" : "0",
            }}>
              {label}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div style={{
          position: "absolute",
          bottom: "40px",
          fontSize: "22px",
          color: "rgba(255,255,255,0.3)",
          letterSpacing: "0.5px",
        }}>
          helpiq.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
