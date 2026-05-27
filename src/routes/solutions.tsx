import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import heroBg from "@/assets/solutions/Header_Solutions.jpg";
import flagshipIcon from "@/assets/solutions/Flagship-02.png";
import advisoryIcon from "@/assets/solutions/Advisory-02.png";

const F: React.CSSProperties = { fontFamily: '"Clan Pro", sans-serif' };

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Our Solutions — Swiftora Consulting" },
      { name: "description", content: "Flagship Solutions and Advisory Services designed to help organisations solve complex challenges and unlock sustainable growth." },
    ],
  }),
  component: OurSolutionsPage,
});

/* ── HERO ── */
function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) bgRef.current.style.transform = `translateY(${window.scrollY * 0.38}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section style={{ position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div ref={bgRef} style={{ position: "absolute", inset: "-20%", zIndex: 0, willChange: "transform" }}>
        <img src={heroBg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,11,20,0.65)" }} />
      </div>
      <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 80px 100px", width: "100%", boxSizing: "border-box" }}>
        <p style={{ ...F, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.36em", color: "#D5AF34", marginBottom: 20, marginTop: 0 }}>
          Our Solutions
        </p>
        <h1 style={{ ...F, fontWeight: 800, fontSize: "clamp(28px, 4vw, 56px)", lineHeight: 1.15, margin: 0 }}>
          <span style={{ color: "#ffffff", display: "block" }}>Strategic Solutions Designed for</span>
          <span style={{ color: "#D5AF34", display: "block" }}>Growth and Transformation</span>
        </h1>
      </div>
    </section>
  );
}

function OurSolutionsPage() {
  return (
    <>
      <HeroSection />

      {/* ── INTRO ── */}
      <section style={{ background: "#2D2973", padding: "80px" }}>
        <p style={{ ...F, fontSize: 17, fontWeight: 600, color: "rgba(255,255,255,0.92)", lineHeight: 1.95, marginBottom: 24, marginTop: 0, textAlign: "justify" }}>
          At Swiftora Consulting Limited, we help organisations solve complex business challenges, strengthen market positioning, and unlock sustainable growth through practical, insight-driven solutions. Our work combines strategy, research, commercial intelligence, and execution support to help businesses make informed decisions and improve performance in dynamic market environments.
        </p>
        <p style={{ ...F, fontSize: 17, fontWeight: 600, color: "rgba(255,255,255,0.92)", lineHeight: 1.95, margin: 0, textAlign: "justify" }}>
          Our solutions are structured into two distinct areas: Flagship Solutions and Advisory Services. While our Flagship Solutions provide specialised, high-impact frameworks designed to address critical business priorities, our Advisory Services offer flexible consulting support across strategy, marketing, operations, communication, and organisational growth. Together, they provide organisations with the strategic direction, market insight, and execution support needed to compete effectively and grow sustainably.
        </p>
      </section>

      {/* ── EXPLORE OUR SOLUTIONS ── */}
      <section style={{ background: "#f7f6f2", padding: "80px" }}>
        <h2 style={{ ...F, fontSize: "clamp(24px, 2.8vw, 36px)", fontWeight: 900, color: "#2D2973", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 56px" }}>
          Explore Our Solutions
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>

          {/* Flagship Solutions */}
          <div style={{ background: "#ffffff", borderTop: "4px solid #D5AF34", padding: "48px 40px", display: "flex", flexDirection: "column" }}>
            <div style={{ marginBottom: 24 }}>
              <img
                src={flagshipIcon}
                alt="Flagship Solutions"
                style={{ width: 64, height: 64, objectFit: "contain", display: "block" }}
              />
            </div>
            <h3 style={{ ...F, fontSize: 24, fontWeight: 800, color: "#2D2973", margin: "0 0 16px", lineHeight: 1.25 }}>
              Flagship Solutions
            </h3>
            <p style={{ ...F, fontSize: 15, fontWeight: 500, color: "#4D4D4D", lineHeight: 1.85, margin: "0 0 36px", flex: 1 }}>
              Specialised, high-impact strategic solutions developed to address critical business and growth challenges through structured frameworks, research, and execution-focused advisory.
            </p>
            <Link
              to="/flagship-solutions"
              style={{ ...F, display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: "#D5AF34", textDecoration: "none", transition: "opacity 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
            >
              LEARN MORE <ArrowRight size={14} />
            </Link>
          </div>

          {/* Advisory Services */}
          <div style={{ background: "#ffffff", borderTop: "4px solid #2D2973", padding: "48px 40px", display: "flex", flexDirection: "column" }}>
            <div style={{ marginBottom: 24 }}>
              <img
                src={advisoryIcon}
                alt="Advisory Services"
                style={{ width: 64, height: 64, objectFit: "contain", display: "block" }}
              />
            </div>
            <h3 style={{ ...F, fontSize: 24, fontWeight: 800, color: "#2D2973", margin: "0 0 16px", lineHeight: 1.25 }}>
              Advisory Services
            </h3>
            <p style={{ ...F, fontSize: 15, fontWeight: 500, color: "#4D4D4D", lineHeight: 1.85, margin: "0 0 36px", flex: 1 }}>
              Flexible consulting and advisory support tailored to help organisations improve performance, strengthen operations, enhance competitiveness, and drive sustainable growth.
            </p>
            <Link
              to="/advisory-services"
              style={{ ...F, display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: "#2D2973", textDecoration: "none", transition: "opacity 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
            >
              LEARN MORE <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM — plain white background, no SVG ── */}
      <section style={{ background: "#E8EDF3", padding: "80px" }}>
        <h2 style={{ ...F, fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 900, color: "#2D2973", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 12px" }}>
          CONTACT FORM
        </h2>
        <p style={{ ...F, fontSize: 15, fontWeight: 500, color: "#606161", marginBottom: 40, marginTop: 0, lineHeight: 1.7 }}>
          Ready to get started? Send us a message and we'll be in touch within one business day.
        </p>
        <div style={{ background: "#ffffff", padding: "48px", border: "1px solid #e4e8ef" }}>
          <ContactForm submitLabel="SUBMIT" submitAlign="right" />
        </div>
      </section>
    </>
  );
}