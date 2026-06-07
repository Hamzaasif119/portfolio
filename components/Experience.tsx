"use client";
import { experience } from "@/data/data";

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "100px 24px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "60px" }}>
        <p className="section-label" style={{ marginBottom: "12px" }}>
          Career Path
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
          Professional Experience
        </h2>
      </div>

      {/* Timeline */}
      <div style={{ position: "relative" }}>
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: "5px",
            top: "20px",
            bottom: "20px",
            width: "1px",
            background:
              "linear-gradient(to bottom, var(--accent-blue), rgba(99,179,237,0.1))",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          {experience.map((exp, idx) => (
            <div
              key={exp.company}
              style={{
                paddingLeft: "40px",
                position: "relative",
              }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: "absolute",
                  left: "0",
                  top: "6px",
                }}
              >
                <div className="timeline-dot" />
              </div>

              {/* Card */}
              <div className="card" style={{ padding: "36px" }}>
                {/* Top row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "12px",
                    marginBottom: "8px",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "22px",
                        fontWeight: "600",
                        color: "var(--text-primary)",
                        marginBottom: "4px",
                      }}
                    >
                      {exp.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "var(--accent-blue)",
                        letterSpacing: "0.3px",
                      }}
                    >
                      {exp.company}
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "12px",
                        color: "var(--text-secondary)",
                        letterSpacing: "1px",
                        display: "block",
                        marginBottom: "4px",
                      }}
                    >
                      {exp.period}
                    </span>
                    <span className="tag">{exp.type}</span>
                  </div>
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: "1px",
                    background:
                      "linear-gradient(90deg, rgba(99,179,237,0.2), transparent)",
                    margin: "20px 0",
                  }}
                />

                {/* Highlights */}
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginBottom: "28px",
                  }}
                >
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        fontSize: "14px",
                        lineHeight: "1.7",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <span
                        style={{
                          marginTop: "8px",
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          background: "var(--accent-blue)",
                          flexShrink: 0,
                        }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Metrics */}
                <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
                  {exp.metrics.map((m) => (
                    <div
                      key={m.label}
                      style={{
                        padding: "12px 20px",
                        borderRadius: "10px",
                        background: "rgba(99,179,237,0.06)",
                        border: "1px solid rgba(99,179,237,0.12)",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "20px",
                          fontWeight: "500",
                          color: "var(--accent-blue)",
                          marginBottom: "2px",
                        }}
                      >
                        {m.value}
                      </div>
                      <div
                        style={{
                          fontSize: "11px",
                          color: "var(--text-muted)",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
