"use client";
import { siteConfig, education } from "@/data/data";

export default function Contact() {
  return (
    <>
      {/* Education strip */}
      <div
        style={{
          padding: "40px 24px",
          background: "rgba(99,179,237,0.04)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "rgba(212,168,83,0.1)",
                border: "1px solid rgba(212,168,83,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              🎓
            </div>
            <div>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "var(--text-primary)",
                  marginBottom: "2px",
                }}
              >
                {education.degree}
              </p>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                {education.institution} · {education.location} ·{" "}
                <span style={{ color: "var(--accent-gold)" }}>
                  {education.specialization}
                </span>
              </p>
            </div>
          </div>
          <span className="tag">Academic Background</span>
        </div>
      </div>

      {/* Contact */}
      <section
        id="contact"
        style={{
          padding: "100px 24px",
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p className="section-label" style={{ marginBottom: "16px" }}>
          Let's Connect
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: "700",
            letterSpacing: "-1.5px",
            marginBottom: "20px",
            lineHeight: "1.1",
          }}
        >
          Ready to Build
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #63B3ED, #9B7FE8, #D4A853)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Something Great?
          </span>
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "var(--text-secondary)",
            maxWidth: "480px",
            margin: "0 auto 48px",
            lineHeight: "1.7",
          }}
        >
          I'm open to new opportunities in product management and agile leadership.
          Let's discuss how I can drive value for your team.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "60px",
          }}
        >
          <a
            href={`mailto:${siteConfig.email}`}
            style={{
              padding: "16px 36px",
              borderRadius: "12px",
              fontSize: "15px",
              fontWeight: "600",
              color: "#fff",
              background: "linear-gradient(135deg, #63B3ED, #9B7FE8)",
              textDecoration: "none",
              boxShadow: "0 8px 32px rgba(99,179,237,0.3)",
              transition: "transform 0.2s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")
            }
          >
            Send an Email
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "16px 36px",
              borderRadius: "12px",
              fontSize: "15px",
              fontWeight: "600",
              color: "var(--text-primary)",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.1)",
              textDecoration: "none",
              transition: "all 0.2s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(99,179,237,0.4)";
              (e.currentTarget as HTMLElement).style.color = "var(--accent-blue)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
            }}
          >
            LinkedIn Profile
          </a>
        </div>

        {/* Contact cards */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
            { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
            { label: "Location", value: siteConfig.location, href: "#" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                padding: "16px 24px",
                borderRadius: "12px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                textDecoration: "none",
                textAlign: "center",
                minWidth: "200px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(99,179,237,0.3)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <p
                style={{
                  fontSize: "10px",
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "2px",
                  color: "var(--text-muted)",
                  marginBottom: "6px",
                }}
              >
                {item.label.toUpperCase()}
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--accent-blue)",
                  fontWeight: "500",
                }}
              >
                {item.value}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "12px",
            color: "var(--text-muted)",
            letterSpacing: "0.5px",
          }}
        >
          © {new Date().getFullYear()} {siteConfig.name} · Built with Next.js
        </p>
      </footer>
    </>
  );
}
