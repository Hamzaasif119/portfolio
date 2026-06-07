"use client";
import { useEffect, useRef } from "react";
import { siteConfig, stats, summary } from "@/data/data";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    setTimeout(() => {
      el.style.transition = "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
  }, []);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px 24px 80px",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Top badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "6px 16px",
          borderRadius: "100px",
          background: "rgba(99,179,237,0.08)",
          border: "1px solid rgba(99,179,237,0.2)",
          marginBottom: "32px",
          width: "fit-content",
          animation: "fadeIn 0.6s ease forwards",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#4FD1C5",
            boxShadow: "0 0 8px #4FD1C5",
            display: "inline-block",
          }}
        />
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            letterSpacing: "2px",
            color: "var(--accent-teal)",
          }}
        >
          {siteConfig.availabilityText.toUpperCase()}
        </span>
      </div>

      {/* Main headline */}
      <h1
        ref={titleRef}
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(48px, 7vw, 88px)",
          fontWeight: "700",
          lineHeight: "1.05",
          letterSpacing: "-2px",
          marginBottom: "24px",
        }}
      >
        <span style={{ color: "var(--text-primary)" }}>Hamza</span>
        <br />
        <span
          style={{
            background: "linear-gradient(135deg, #63B3ED 0%, #9B7FE8 50%, #D4A853 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Asif
        </span>
      </h1>

      {/* Subtitle */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "28px",
          flexWrap: "wrap",
        }}
      >
        {["Product Owner", "Agile PM", "Backlog Strategist"].map((t, i) => (
          <span key={t}>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "16px",
                fontWeight: "500",
                color: "var(--text-secondary)",
                letterSpacing: "0.5px",
              }}
            >
              {t}
            </span>
            {i < 2 && (
              <span
                style={{
                  marginLeft: "16px",
                  color: "var(--text-muted)",
                }}
              >
                ·
              </span>
            )}
          </span>
        ))}
      </div>

      {/* Summary */}
      <p
        style={{
          maxWidth: "640px",
          fontSize: "16px",
          lineHeight: "1.8",
          color: "var(--text-secondary)",
          marginBottom: "52px",
          fontWeight: "300",
        }}
      >
        {summary}
      </p>

      {/* CTA Buttons */}
      <div style={{ display: "flex", gap: "16px", marginBottom: "80px", flexWrap: "wrap" }}>
        <a
          href="#experience"
          style={{
            padding: "14px 32px",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: "600",
            color: "#fff",
            background: "linear-gradient(135deg, #63B3ED, #9B7FE8)",
            textDecoration: "none",
            letterSpacing: "0.3px",
            display: "inline-block",
            boxShadow: "0 8px 32px rgba(99,179,237,0.25)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(99,179,237,0.35)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(99,179,237,0.25)";
          }}
        >
          View Experience
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          style={{
            padding: "14px 32px",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: "600",
            color: "var(--text-primary)",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.1)",
            textDecoration: "none",
            letterSpacing: "0.3px",
            display: "inline-block",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,179,237,0.4)";
            (e.currentTarget as HTMLElement).style.color = "var(--accent-blue)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
            (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
          }}
        >
          Get In Touch
        </a>
      </div>

      {/* Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "1px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              padding: "28px 24px",
              background: "var(--bg-card)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "36px",
                fontWeight: "700",
                background: "linear-gradient(135deg, #63B3ED, #9B7FE8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "6px",
                lineHeight: "1",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "var(--text-secondary)",
                fontWeight: "500",
                letterSpacing: "0.5px",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
