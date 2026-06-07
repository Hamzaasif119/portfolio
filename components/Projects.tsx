"use client";
import { projects } from "@/data/data";

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "100px 24px",
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "60px" }}>
          <p className="section-label" style={{ marginBottom: "12px" }}>
            Product Ownership Showcase
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
            Selected Projects
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
            gap: "24px",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.name}
              className="card"
              style={{
                padding: "40px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Background accent */}
              <div
                style={{
                  position: "absolute",
                  top: "-60px",
                  right: "-60px",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${project.color}15 0%, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Role badge */}
              <span
                style={{
                  display: "inline-flex",
                  padding: "4px 12px",
                  borderRadius: "100px",
                  fontSize: "11px",
                  fontFamily: "'DM Mono', monospace",
                  fontWeight: "500",
                  background: `${project.color}15`,
                  border: `1px solid ${project.color}30`,
                  color: project.color,
                  marginBottom: "20px",
                  letterSpacing: "1px",
                }}
              >
                {project.role.toUpperCase()}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "var(--text-primary)",
                  marginBottom: "6px",
                  letterSpacing: "-0.5px",
                }}
              >
                {project.name}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: project.color,
                  marginBottom: "16px",
                  letterSpacing: "0.5px",
                }}
              >
                {project.tagline}
              </p>

              {/* Description */}
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.75",
                  color: "var(--text-secondary)",
                  marginBottom: "28px",
                }}
              >
                {project.description}
              </p>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: `linear-gradient(90deg, ${project.color}30, transparent)`,
                  marginBottom: "24px",
                }}
              />

              {/* Outcomes */}
              <div style={{ marginBottom: "28px" }}>
                <p
                  style={{
                    fontSize: "11px",
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: "2px",
                    color: "var(--text-muted)",
                    marginBottom: "14px",
                  }}
                >
                  KEY OUTCOMES
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {project.outcomes.map((o) => (
                    <li
                      key={o}
                      style={{
                        display: "flex",
                        gap: "10px",
                        fontSize: "13px",
                        lineHeight: "1.6",
                        color: "var(--text-secondary)",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          marginTop: "7px",
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          background: project.color,
                          flexShrink: 0,
                        }}
                      />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "11px",
                      fontFamily: "'DM Mono', monospace",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
