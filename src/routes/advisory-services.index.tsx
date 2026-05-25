import { createFileRoute, Link } from "@tanstack/react-router";
import { advisoryContent } from "@/lib/content";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";

import heroBg              from "@/assets/heroes/Advisory.jpg.jpeg";
import diagnosticsImg      from "@/assets/heroes/Advisory_BusinessDiagnostics.jpg.jpeg";
import clinicImg           from "@/assets/heroes/Advisory_ConsultingClinics.jpg.jpeg";
import executiveImg        from "@/assets/heroes/Advisory_ExecutiveAdvisory.jpg.jpeg";

const CLAN: React.CSSProperties = { fontFamily: '"Clan Pro", sans-serif' };

const cardImages: Record<string, string> = {
  "business-diagnostic": diagnosticsImg,
  "consulting-clinic":   clinicImg,
  "executive-advisory":  executiveImg,
};

const slugLinkMap = {
  "business-diagnostic": "/advisory-services/business-diagnostic",
  "consulting-clinic":   "/advisory-services/consulting-clinic",
  "executive-advisory":  "/advisory-services/executive-advisory",
} as const;

export const Route = createFileRoute("/advisory-services/")({
  head: () => ({
    meta: [
      { title: "Advisory Services — Swiftora Consulting" },
      { name: "description", content: "Focused, high-value support for businesses seeking clarity. Diagnostics, single-issue clinics, and ongoing executive partnership." },
      { property: "og:title", content: "Advisory Services — Swiftora Consulting" },
      { property: "og:description", content: "Focused, high-value support for businesses seeking clarity." },
    ],
  }),
  component: AdvisoryListing,
});

function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.38}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section style={{ position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div ref={bgRef} style={{ position: "absolute", inset: "-20%", zIndex: 0, willChange: "transform" }}>
        <img src={heroBg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,11,20,0.58)" }} />
      </div>

      {/* Title block */}
      <div
        className="advisory-hero-title"
        style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 1240, margin: "0 auto", width: "100%", boxSizing: "border-box" }}
      >
        <p style={{ ...CLAN, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.36em", color: "#D5AF34", marginBottom: 20, marginTop: 0 }}>
          Advisory Services
        </p>
        <h1 style={{ ...CLAN, fontWeight: 700, fontSize: "clamp(32px, 5vw, 64px)", color: "#ffffff", lineHeight: 1.1, margin: 0 }}>
          The Right<br />Advice At The<br />Right Time.
        </h1>
      </div>

      {/* Two-tone strip */}
      <div className="advisory-hero-strip" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div className="advisory-strip-left" style={{ background: "#D5AF34" }}>
          <p style={{ ...CLAN, fontSize: 17, fontWeight: 700, fontStyle: "italic", color: "#ffffff", lineHeight: 1.8, margin: 0 }}>
            Flexible, senior-level advisory built around your specific challenge, your timeline, and the level of support your business needs right now.
          </p>
        </div>
        <div className="advisory-strip-right" style={{ background: "#2D2973", display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
          <p style={{ ...CLAN, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.3em", color: "#D5AF34", margin: 0 }}>
            Get Ahead, For Good
          </p>
          <p style={{ ...CLAN, fontSize: 17, fontWeight: 700, color: "#ffffff", lineHeight: 1.75, margin: 0 }}>
            Explore our advisory services below and find the right level of support for where you are now.
          </p>
        </div>
      </div>

      <style>{`
        .advisory-hero-title {
          padding: 110px 60px 56px;
        }
        .advisory-hero-strip {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 1240px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
          padding: 0 60px;
        }
        .advisory-strip-left { padding: 48px 44px; }
        .advisory-strip-right { padding: 48px 44px; }

        @media (max-width: 900px) {
          .advisory-hero-title { padding: 100px 32px 40px; }
          .advisory-hero-strip { grid-template-columns: 1fr; padding: 0 32px; }
          .advisory-strip-left { padding: 36px 28px; }
          .advisory-strip-right { padding: 36px 28px; }
        }

        @media (max-width: 600px) {
          .advisory-hero-title { padding: 90px 20px 36px; }
          .advisory-hero-strip { padding: 0 20px; }
          .advisory-strip-left { padding: 28px 20px; }
          .advisory-strip-right { padding: 28px 20px; }
        }
      `}</style>
    </section>
  );
}

function AdvisoryListing() {
  return (
    <>
      <Hero />

      <section style={{ background: "#f7f6f2", padding: "80px 0" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 60px", boxSizing: "border-box" }}>
          <div className="advisory-grid">
            {advisoryContent.map((s, i) => {
              const img = cardImages[s.slug];
              return (
                <Link key={s.slug} to={slugLinkMap[s.slug as keyof typeof slugLinkMap]} style={{ textDecoration: "none" }}>
                  <div
                    style={{ background: "#ffffff", borderTop: "3px solid #D5AF34", borderRadius: 4, overflow: "hidden", transition: "box-shadow 0.2s, transform 0.2s", height: "100%", display: "flex", flexDirection: "column" }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(45,41,115,0.13)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    {/* Card image */}
                    <div style={{ height: 220, overflow: "hidden", flexShrink: 0, background: "#1A2035", position: "relative" }}>
                      {img ? (
                        <img
                          src={img}
                          alt={s.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                        />
                      ) : null}
                      {/* Number overlay */}
                      <div style={{ position: "absolute", bottom: 12, left: 20, fontFamily: '"Clan Pro", sans-serif', fontSize: 64, color: "rgba(255,255,255,0.15)", lineHeight: 1, fontWeight: 700 }}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Card content */}
                    <div style={{ padding: "32px", display: "flex", flexDirection: "column", flex: 1 }}>
                      <h3 style={{ ...CLAN, fontSize: 20, fontWeight: 700, color: "#2D2973", lineHeight: 1.3, marginBottom: 12, marginTop: 0 }}>
                        {s.name}
                      </h3>
                      <p style={{ ...CLAN, fontSize: 14, fontWeight: 700, color: "#6b7280", lineHeight: 1.7, marginBottom: 20, marginTop: 0, flex: 1 }}>
                        {s.short}
                      </p>
                      <span style={{ ...CLAN, display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#D5AF34" }}>
                        Learn More <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <style>{`
          .advisory-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
          }

          @media (max-width: 900px) {
            .advisory-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 20px;
            }
          }

          @media (max-width: 600px) {
            .advisory-grid {
              grid-template-columns: 1fr;
              gap: 16px;
            }
          }

          @media (max-width: 900px) {
            section { padding: 48px 0 !important; }
            section > div { padding: 0 32px !important; }
          }

          @media (max-width: 600px) {
            section > div { padding: 0 20px !important; }
          }
        `}</style>
      </section>
    </>
  );
}