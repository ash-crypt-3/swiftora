// FILE: src/components/ServicePageTemplate.tsx
import { Link } from "@tanstack/react-router";
import ContactForm from "@/components/ContactForm";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

import salesImg         from "@/assets/services/sales.png";
import marketingImg     from "@/assets/services/marketing.png";
import strategyImg      from "@/assets/services/strategy.png";
import communicationImg from "@/assets/services/communication.png";
import researchImg      from "@/assets/services/research.png";

const serviceImageMap: Record<string, string> = {
  "/services/sales":         salesImg,
  "/services/marketing":     marketingImg,
  "/services/strategy":      strategyImg,
  "/services/communication": communicationImg,
  "/services/research":      researchImg,
};

const CLAN = { fontFamily: '"Clan Pro", sans-serif' };
const NAV_MAX = 1240;

const SUBMIT_CSS = `
  form button[type="submit"],
  .contact-form button[type="submit"] {
    display: block !important;
    margin-left: auto !important;
    margin-right: 0 !important;
    padding: 14px 40px !important;
    background: transparent !important;
    color: #2D2973 !important;
    border: 2px solid #2D2973 !important;
    font-family: "Clan Pro", sans-serif !important;
    font-size: 12px !important;
    font-weight: 800 !important;
    letter-spacing: 0.12em !important;
    text-transform: uppercase !important;
    cursor: pointer !important;
    border-radius: 0 !important;
    transition: background 0.2s, color 0.2s !important;
    width: auto !important;
    min-width: unset !important;
  }
  form button[type="submit"]:hover,
  .contact-form button[type="submit"]:hover {
    background: #2D2973 !important;
    color: #fff !important;
  }
`;

const RESPONSIVE_CSS = `
  /* ── Section padding ── */
  .spt-pad { padding-left: 60px; padding-right: 60px; }

  /* ── Hero ── */
  .spt-hero { min-height: 100vh; }

  /* ── Cards grid ── */
  .spt-cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3px;
  }

  /* ── Other services grid ── */
  .spt-others-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  /* ────────────────────────────────────────
     TABLET  ≤ 900px
  ──────────────────────────────────────── */
  @media (max-width: 900px) {
    .spt-pad { padding-left: 32px; padding-right: 32px; }
    .spt-hero { min-height: 65vh; }

    .spt-cards-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .spt-others-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* ────────────────────────────────────────
     MOBILE  ≤ 600px
  ──────────────────────────────────────── */
  @media (max-width: 600px) {
    .spt-pad { padding-left: 20px; padding-right: 20px; }
    .spt-hero { min-height: 42vh !important; }

    .spt-cards-grid {
      grid-template-columns: 1fr;
    }

    .spt-others-grid {
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    /* Remove the negative overlap on mobile so the gold box
       never climbs over the hero heading text */
    .spt-gold-intro {
      margin-top: 0 !important;
    }
  }
`;

export interface ServiceCard {
  number: number;
  title: string;
  body: string;
}

export interface OtherService {
  title: string;
  href: string;
}

export interface ServicePageProps {
  heroImage: string;
  heroLine1: string;
  heroLine2: string;
  introP1: string;
  introP2: string;
  sectionTitle: string;
  cards: ServiceCard[];
  otherServices: OtherService[];
}

/* ── HERO ── */
function HeroSection({ image, line1, line2 }: { image: string; line1: string; line2: string }) {
  const bgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current)
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.38}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="spt-hero"
      style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}
    >
      <div ref={bgRef} style={{ position: "absolute", inset: "-20%", zIndex: 0, willChange: "transform" }}>
        <img src={image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,11,20,0.62)" }} />
      </div>
      <div
        className="spt-pad"
        style={{
          position: "relative", zIndex: 1, flex: 1,
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          /* Increased bottom padding so the heading text never gets
             swallowed by the gold box's negative-margin overlap.
             On mobile this is overridden by .spt-gold-intro { margin-top: 0 }
             so we only need the extra room on tablet/desktop. */
          paddingBottom: "clamp(80px, 12vw, 120px)",
          width: "100%", boxSizing: "border-box",
          maxWidth: NAV_MAX, margin: "0 auto",
        }}
      >
        <h1 style={{ ...CLAN, fontWeight: 800, fontSize: "clamp(20px, 3vw, 42px)", lineHeight: 1.25, margin: 0, textAlign: "left" }}>
          <span style={{ color: "#ffffff", display: "block" }}>{line1}</span>
          <span style={{ color: "#D5AF34", display: "block" }}>{line2}</span>
        </h1>
      </div>
    </section>
  );
}

/* ── FULL TEMPLATE ── */
export function ServicePageTemplate({
  heroImage, heroLine1, heroLine2,
  introP1, introP2,
  sectionTitle, cards,
  otherServices,
}: ServicePageProps) {
  return (
    <>
      <style>{SUBMIT_CSS}</style>
      <style>{RESPONSIVE_CSS}</style>

      <HeroSection image={heroImage} line1={heroLine1} line2={heroLine2} />

      {/* ── GOLD INTRO BOX ── */}
      {/* spt-gold-intro: on mobile margin-top resets to 0 via CSS above */}
      <section
        className="spt-gold-intro"
        style={{ background: "transparent", padding: "0 0 48px", position: "relative", zIndex: 2, marginTop: "-40px" }}
      >
        <div
          className="spt-pad"
          style={{ maxWidth: NAV_MAX, margin: "0 auto", boxSizing: "border-box" }}
        >
          <div style={{ background: "#D5AF34", padding: "clamp(32px, 5vw, 60px) clamp(20px, 4vw, 44px) clamp(28px, 4vw, 48px)" }}>
            <p style={{ ...CLAN, fontSize: "clamp(15px, 1.5vw, 18px)", fontWeight: 600, fontStyle: "italic", color: "#ffffff", lineHeight: 1.85, margin: "0 0 20px", textAlign: "justify" }}>
              {introP1}
            </p>
            <p style={{ ...CLAN, fontSize: "clamp(15px, 1.5vw, 18px)", fontWeight: 600, fontStyle: "italic", color: "#ffffff", lineHeight: 1.85, margin: 0, textAlign: "justify" }}>
              {introP2}
            </p>
          </div>
        </div>
      </section>

      {/* ── KEY SOLUTIONS ── */}
      <section style={{ background: "#ffffff", padding: "clamp(40px, 6vw, 80px) 0" }}>
        <div
          className="spt-pad"
          style={{ maxWidth: NAV_MAX, margin: "0 auto", boxSizing: "border-box" }}
        >
          <h2 style={{ ...CLAN, fontSize: "clamp(20px, 2.8vw, 36px)", fontWeight: 900, color: "#D5AF34", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 48px" }}>
            {sectionTitle}
          </h2>
          <div className="spt-cards-grid">
            {cards.map(({ number, title, body }) => (
              <div key={number} style={{ background: "#2D2973", padding: "48px 36px 44px", display: "flex", flexDirection: "column" }}>
                <span style={{ ...CLAN, fontSize: 11, fontWeight: 800, color: "rgba(213,175,52,0.6)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>
                  {String(number).padStart(2, "0")}
                </span>
                <h4 style={{ ...CLAN, fontSize: "clamp(18px, 1.8vw, 22px)", fontWeight: 800, fontStyle: "normal", color: "#D5AF34", margin: "0 0 20px", lineHeight: 1.3 }}>
                  {title}
                </h4>
                <p style={{ ...CLAN, fontSize: "clamp(13px, 1.2vw, 14px)", fontWeight: 700, color: "rgba(255,255,255,0.88)", lineHeight: 1.85, margin: 0, textAlign: "justify" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section style={{ background: "#E8EDF3", padding: "clamp(40px, 6vw, 80px) 0" }}>
        <div
          className="spt-pad"
          style={{ maxWidth: NAV_MAX, margin: "0 auto", boxSizing: "border-box" }}
        >
          <h2 style={{ ...CLAN, fontSize: "clamp(20px, 2.8vw, 36px)", fontWeight: 900, color: "#D5AF34", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 12px" }}>
            CONTACT FORM
          </h2>
          <p style={{ ...CLAN, fontSize: 15, fontWeight: 700, color: "#606161", marginBottom: 40, marginTop: 0, lineHeight: 1.7 }}>
            Ready to get started? Send us a message and we'll be in touch within one business day.
          </p>
          <div style={{ background: "#ffffff", padding: "clamp(20px, 4vw, 48px)", border: "1px solid #e4e8ef" }}>
            <ContactForm submitLabel="SUBMIT" submitAlign="right" />
          </div>
        </div>
      </section>

      {/* ── EXPLORE OTHER SERVICES ── */}
      <section style={{ background: "#f7f6f2", padding: "clamp(40px, 6vw, 72px) 0 clamp(48px, 7vw, 80px)" }}>
        <div
          className="spt-pad"
          style={{ maxWidth: NAV_MAX, margin: "0 auto", boxSizing: "border-box" }}
        >
          <h2 style={{ ...CLAN, fontSize: "clamp(20px, 2.8vw, 36px)", fontWeight: 900, color: "#2D2973", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 40, marginTop: 0 }}>
            EXPLORE OTHER SERVICES
          </h2>
          <div className="spt-others-grid">
            {otherServices.map(({ title, href }) => {
              const img = serviceImageMap[href];
              return (
                <Link key={href} to={href} style={{ textDecoration: "none" }}>
                  <div
                    style={{ background: "#ffffff", borderTop: "3px solid #D5AF34", borderRadius: 4, overflow: "hidden", display: "flex", flexDirection: "column", transition: "box-shadow 0.2s, transform 0.2s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(45,41,115,0.13)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
                  >
                    <div style={{ height: 160, overflow: "hidden", flexShrink: 0, background: "#1A2035" }}>
                      {img && (
                        <img
                          src={img}
                          alt={title}
                          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                        />
                      )}
                    </div>
                    <div style={{ padding: "20px 20px 24px" }}>
                      <h4 style={{ ...CLAN, fontSize: 15, fontWeight: 700, color: "#2D2973", lineHeight: 1.4, marginBottom: 14, marginTop: 0 }}>
                        {title}
                      </h4>
                      <span style={{ ...CLAN, display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: "#D5AF34", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                        Learn More <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}