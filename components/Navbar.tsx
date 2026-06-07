"use client";
import { useState, useEffect } from "react";
import { navLinks, siteConfig } from "@/data/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "0 24px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(10,10,15,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #63B3ED, #9B7FE8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Playfair Display', serif",
            fontWeight: "700",
            fontSize: "14px",
            color: "#fff",
          }}
        >
          H
        </div>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "13px",
            color: "var(--text-secondary)",
            letterSpacing: "1px",
          }}
        >
          hamza.asif
        </span>
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setActive(link.href)}
            style={{
              padding: "6px 14px",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: "500",
              color: active === link.href ? "var(--accent-blue)" : "var(--text-secondary)",
              background: active === link.href ? "rgba(99,179,237,0.08)" : "transparent",
              textDecoration: "none",
              transition: "all 0.2s ease",
              letterSpacing: "0.3px",
            }}
            onMouseEnter={(e) => {
              if (active !== link.href) {
                (e.target as HTMLElement).style.color = "var(--text-primary)";
              }
            }}
            onMouseLeave={(e) => {
              if (active !== link.href) {
                (e.target as HTMLElement).style.color = "var(--text-secondary)";
              }
            }}
          >
            {link.label}
          </a>
        ))}

        <a
          href="#contact"
          style={{
            marginLeft: "8px",
            padding: "7px 18px",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: "600",
            color: "#fff",
            background: "linear-gradient(135deg, #63B3ED, #9B7FE8)",
            textDecoration: "none",
            letterSpacing: "0.3px",
          }}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
