import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import heroBg from "@/assets/heroes/Flagships_Hero.jpg.jpeg";

import capitalImg    from "@/assets/flagship/Flagships_CapitalReadinessProgram.jpg.jpeg";
import feasibilityImg from "@/assets/flagship/Flagships_FeasibilityandMarketEntry.jpg.jpeg";
import smeImg        from "@/assets/flagship/Flagships_SMEGrowthBlueprint.jpg.jpeg";
import revenueImg    from "@/assets/flagship/Flagships_RevenueAcceleration.jpg.jpeg";
import programmeImg  from "@/assets/flagship/Flagships_ProgramDesignandAdvisory.jpg.jpeg";
import strategyImg   from "@/assets/flagship/Flagships_Strategy_Growth.jpg.jpeg";

const CLAN: React.CSSProperties = { fontFamily: '"Clan Pro", sans-serif' };

const solutions = [
  { slug: "capital-readiness",        name: "Capital Readiness Programme™",          href: "/flagship-solutions/capital-readiness",        short: "We build the investor-ready package that gets you through the door — business plan, financial model, pitch deck, and more.",                                   image: capitalImg     },
  { slug: "feasibility-market-entry", name: "Feasibility & Market Entry Suite™",      href: "/flagship-solutions/feasibility-market-entry",  short: "Evidence-based market validation and entry strategy — so every investment decision is made with confidence, not assumption.",                              image: feasibilityImg },
  { slug: "sme-growth-blueprint",     name: "SME Growth Blueprint™",                  href: "/flagship-solutions/sme-growth-blueprint",      short: "A structured diagnostic and 90-to-180-day execution roadmap that turns scattered effort into a clear, measurable growth plan.",                             image: smeImg         },
  { slug: "revenue-acceleration",     name: "Revenue Acceleration Programme™",        href: "/flagship-solutions/revenue-acceleration",      short: "We design the sales systems, structures, and KPI frameworks that turn your commercial potential into consistent revenue performance.",                      image: revenueImg     },
  { slug: "programme-design",         name: "Programme Design & Advisory Suite™",     href: "/flagship-solutions/programme-design",          short: "From stakeholder mapping and logic models to implementation roadmaps — we design interventions built for measurable real-world impact.",                   image: programmeImg   },
];

export const Route = createFileRoute("/flagship-solutions/")({
  head: () => ({
    meta: [
      { title: "Flagship Solutions — Swiftora Consulting" },
      { name: "description", content: "Structured, outcome-focused engagements designed to address the most critical challenges facing businesses today." },
      { property: "og:title", content: "Flagship Solutions — Swiftora Consulting" },
      { property: "og:description", content: "Structured solutions built for real results." },
    ],
  }),
  component: FlagshipSolutionsIndex,
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
        className="flagship-hero-title"
        style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 1240, margin: "0 auto", width: "100%", boxSizing: "border-box" }}
      >
        <p style={{ ...CLAN, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.36em", color: "#D5AF34", marginBottom: 20, marginTop: 0 }}>
          Flagship Solutions
        </p>
        <h1 style={{ ...CLAN, fontWeight: 700, fontSize: "clamp(32px, 5vw, 64px)", color: "#ffffff", lineHeight: 1.1, margin: 0 }}>
          Structured Solutions<br />Built For<br />Real Results.
        </h1>
      </div>

      {/* Two-tone strip */}
      <div className="flagship-hero-strip" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div className="flagship-strip-left" style={{ background: "#D5AF34" }}>
          <p style={{ ...CLAN, fontSize: 17, fontWeight: 700, fontStyle: "italic", color: "#ffffff", lineHeight: 1.8, margin: 0 }}>
            Outcome-focused engagements designed to address the most critical challenges facing businesses today — from capital readiness and market entry to revenue acceleration and executive strategy.
          </p>
        </div>
        <div className="flagship-strip-right" style={{ background: "#2D2973", display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
          <p style={{ ...CLAN, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.3em", color: "#D5AF34", margin: 0 }}>
            Get Ahead, For Good
          </p>
          <p style={{ ...CLAN, fontSize: 17, fontWeight: 700, color: "#ffffff", lineHeight: 1.75, margin: 0 }}>
            Explore our flagship solutions below and find the right engagement for where your business is now.
          </p>
        </div>
      </div>

      <style>{`
        .flagship-hero-title {
          padding: 110px 80px 56px;
        }
        .flagship-hero-strip {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .flagship-strip-left {
          padding: 48px 80px;
        }
        .flagship-strip-right {
          padding: 48px 80px;
        }

        @media (max-width: 768px) {
          .flagship-hero-title {
            padding: 100px 24px 40px;
          }
          .flagship-hero-strip {
            grid-template-columns: 1fr;
          }
          .flagship-strip-left {
            padding: 36px 24px;
          }
          .flagship-strip-right {
            padding: 36px 24px;
          }
        }
      `}</style>
    </section>
  );
}

function FlagshipSolutionsIndex() {
  return (
    <>
      <Hero />

      <section style={{ background: "#f7f6f2" }} className="flagship-section">
        <div style={{ maxWidth: 1200, margin: "0 auto" }} className="flagship-container">
          <div className="flagship-grid">

            {/* Solution cards */}
            {solutions.map((s) => (
              <Link key={s.slug} to={s.href} style={{ textDecoration: "none" }}>
                <div
                  style={{ background: "#ffffff", borderTop: "3px solid #D5AF34", borderRadius: 4, overflow: "hidden", transition: "box-shadow 0.2s, transform 0.2s", height: "100%", display: "flex", flexDirection: "column" }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(45,41,115,0.13)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{ height: 200, overflow: "hidden", flexShrink: 0 }}>
                    <img
                      src={s.image}
                      alt={s.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s" }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                    />
                  </div>
                  <div style={{ padding: "32px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 style={{ ...CLAN, fontSize: 20, fontWeight: 700, color: "#2D2973", lineHeight: 1.3, marginBottom: 12, marginTop: 0 }}>
                      {s.name}
                    </h3>
                    <p style={{ ...CLAN, fontSize: 14, fontWeight: 500, color: "#6b7280", lineHeight: 1.7, marginBottom: 20, marginTop: 0, flex: 1 }}>
                      {s.short}
                    </p>
                    <span style={{ ...CLAN, display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#D5AF34" }}>
                      Learn More <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            {/* CTA card */}
            <div style={{ background: "#ffffff", borderTop: "3px solid #D5AF34", borderRadius: 4, overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
              <div style={{ height: 200, overflow: "hidden", flexShrink: 0 }}>
                <img
                  src={strategyImg}
                  alt="Strategy. Clarity. Growth."
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div style={{ padding: "32px", display: "flex", flexDirection: "column", flex: 1 }}>
                <h3 style={{ ...CLAN, fontSize: 20, fontWeight: 800, fontStyle: "italic", color: "#2D2973", lineHeight: 1.3, marginBottom: 12, marginTop: 0 }}>
                  Strategy. Clarity. Growth.™
                </h3>
                <p style={{ ...CLAN, fontSize: 14, fontWeight: 500, color: "#6b7280", lineHeight: 1.7, marginBottom: 20, marginTop: 0, flex: 1 }}>
                  We help businesses and institutions move from ideas and uncertainty to structured growth, measurable results, and sustainable impact.
                </p>
                <Link
                  to="/talk-to-us"
                  style={{ ...CLAN, display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#D5AF34", textDecoration: "none" }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.75"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                >
                  CONTACT US <ArrowRight size={12} />
                </Link>
              </div>
            </div>

          </div>
        </div>

        <style>{`
          .flagship-section {
            padding: 80px 0;
          }
          .flagship-container {
            padding: 0 40px;
          }
          .flagship-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
          }

          @media (max-width: 1024px) {
            .flagship-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 20px;
            }
          }

          @media (max-width: 640px) {
            .flagship-section {
              padding: 48px 0;
            }
            .flagship-container {
              padding: 0 20px;
            }
            .flagship-grid {
              grid-template-columns: 1fr;
              gap: 16px;
            }
          }
        `}</style>
      </section>
    </>
  );
}