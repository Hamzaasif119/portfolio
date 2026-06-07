"use client";
import { useEffect, useRef, useState } from "react";
import { competencies, tools } from "@/data/data";

const iconPaths: Record<string, string> = {
  layers:
    "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  "git-branch":
    "M6 3v12M18 9a3 3 0 100-6 3 3 0 000 6zM6 21a3 3 0 100-6 3 3 0 000 6zM18 9c0 6-6 9-12 9",
  users:
    "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
  cpu: "M9 2H6a2 2 0 00-2 2v3M9 22H6a2 2 0 01-2-2v-3M15 2h3a2 2 0 012 2v3M15 22h3a2 2 0 002-2v-3M2 9h20M2 15h20",
};

function SVGIcon({ name }: { name: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={iconPaths[name] || ""} />
    </svg>
  );
}

function ProgressBar({ proficiency }: { proficiency: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(proficiency), 200);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [proficiency]);

  return (
    <div ref={ref} className="progress-bar">
      <div className="progress-fill" style={{ width: `${width}%` }} />
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "100px 24px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "60px" }}>
        <p className="section-label" style={{ marginBottom: "12px" }}>
          Capabilities
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: "700",
            letterSpacing: "-1px",
            color: "var(--text-primary)",
          }}
        >
          Skills & Competencies
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
        }}
      >
        {/* Left: Core Competencies */}
        <div>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              letterSpacing: "2px",
              color: "var(--text-muted)",
              marginBottom: "24px",
            }}
          >
            CORE COMPETENCIES
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {competencies.map((c) => (
              <div
                key={c.category}
                className="card"
                style={{ padding: "24px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: "rgba(99,179,237,0.1)",
                      border: "1px solid rgba(99,179,237,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-blue)",
                      flexShrink: 0,
                    }}
                  >
                    <SVGIcon name={c.icon} />
                  </div>
                  <h4
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "var(--text-primary)",
                    }}
                  >
                    {c.category}
                  </h4>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {c.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Tools */}
        <div>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              letterSpacing: "2px",
              color: "var(--text-muted)",
              marginBottom: "24px",
            }}
          >
            TOOLS & PROFICIENCY
          </p>
          <div className="card" style={{ padding: "32px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {tools.map((tool) => (
                <div key={tool.name}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "var(--text-primary)",
                        }}
                      >
                        {tool.name}
                      </span>
                      <span
                        style={{
                          fontSize: "10px",
                          fontFamily: "'DM Mono', monospace",
                          color: "var(--text-muted)",
                          background: "rgba(255,255,255,0.04)",
                          padding: "2px 8px",
                          borderRadius: "4px",
                        }}
                      >
                        {tool.category}
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "12px",
                        color: "var(--accent-blue)",
                      }}
                    >
                      {tool.proficiency}%
                    </span>
                  </div>
                  <ProgressBar proficiency={tool.proficiency} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
