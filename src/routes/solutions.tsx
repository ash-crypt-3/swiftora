import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import heroBg from "@/assets/solutions/Header_Solutions.jpg";
import flagshipIcon from "@/assets/solutions/Flagship-02.png";
import advisoryIcon from "@/assets/solutions/Advisory-02.png";

const F: React.CSSProperties = { fontFamily: '"Clan Pro", sans-serif' };

/** Returns true when viewport width is ≤ 767 px */
function useIsMobile(breakpoint = 767): boolean {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth <= breakpoint
  );
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);
  return isMobile;
}

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Our Solutions — Swiftora Consulting" },
      {
        name: "description",
        content:
          "Flagship Solutions and Advisory Services designed to help organisations solve complex challenges and unlock sustainable growth.",
      },
    ],
  }),
  component: OurSolutionsPage,
});

/* ── HERO ── */
function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return; // skip parallax on mobile (perf + layout quirks)
    const onScroll = () => {
      if (bgRef.current)
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.38}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: isMobile ? "60vh" : "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          inset: isMobile ? 0 : "-20%",
          zIndex: 0,
          willChange: isMobile ? "auto" : "transform",
        }}
      >
        <img
          src={heroBg}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10,11,20,0.65)",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: isMobile ? "0 24px 56px" : "0 80px 100px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            ...F,
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.36em",
            color: "#D5AF34",
            marginBottom: 20,
            marginTop: 0,
          }}
        >
          Our Solutions
        </p>
        <h1
          style={{
            ...F,
            fontWeight: 800,
            fontSize: isMobile ? "clamp(26px, 7vw, 36px)" : "clamp(28px, 4vw, 56px)",
            lineHeight: 1.15,
            margin: 0,
          }}
        >
          <span style={{ color: "#ffffff", display: "block" }}>
            Strategic Solutions Designed for
          </span>
          <span style={{ color: "#D5AF34", display: "block" }}>
            Growth and Transformation
          </span>
        </h1>
      </div>
    </section>
  );
}

function OurSolutionsPage() {
  const isMobile = useIsMobile();
  const px = isMobile ? "24px" : "80px";
  const py = isMobile ? "56px" : "80px";
  const sectionPadding = `${py} ${px}`;

  return (
    <>
      <HeroSection />

      {/* ── INTRO ── */}
      <section style={{ background: "#2D2973", padding: sectionPadding }}>
        <p
          style={{
            ...F,
            fontSize: isMobile ? 15 : 17,
            fontWeight: 600,
            color: "rgba(255,255,255,0.92)",
            lineHeight: 1.95,
            marginBottom: 24,
            marginTop: 0,
            textAlign: isMobile ? "left" : "justify",
          }}
        >
          At Swiftora Consulting Limited, we help organisations solve complex
          business challenges, strengthen market positioning, and unlock
          sustainable growth through practical, insight-driven solutions. Our
          work combines strategy, research, commercial intelligence, and
          execution support to help businesses make informed decisions and
          improve performance in dynamic market environments.
        </p>
        <p
          style={{
            ...F,
            fontSize: isMobile ? 15 : 17,
            fontWeight: 600,
            color: "rgba(255,255,255,0.92)",
            lineHeight: 1.95,
            margin: 0,
            textAlign: isMobile ? "left" : "justify",
          }}
        >
          Our solutions are structured into two distinct areas: Flagship
          Solutions and Advisory Services. While our Flagship Solutions provide
          specialised, high-impact frameworks designed to address critical
          business priorities, our Advisory Services offer flexible consulting
          support across strategy, marketing, operations, communication, and
          organisational growth. Together, they provide organisations with the
          strategic direction, market insight, and execution support needed to
          compete effectively and grow sustainably.
        </p>
      </section>

      {/* ── EXPLORE OUR SOLUTIONS ── */}
      <section style={{ background: "#f7f6f2", padding: sectionPadding }}>
        <h2
          style={{
            ...F,
            fontSize: isMobile ? "clamp(20px, 5vw, 28px)" : "clamp(24px, 2.8vw, 36px)",
            fontWeight: 900,
            color: "#2D2973",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            margin: `0 0 ${isMobile ? "32px" : "56px"}`,
          }}
        >
          Explore Our Solutions
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 16 : 24,
          }}
        >
          {/* Flagship Solutions */}
          <div
            style={{
              background: "#ffffff",
              borderTop: "4px solid #D5AF34",
              padding: isMobile ? "32px 24px" : "48px 40px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ marginBottom: 24 }}>
              <img
                src={flagshipIcon}
                alt="Flagship Solutions"
                style={{
                  width: isMobile ? 48 : 64,
                  height: isMobile ? 48 : 64,
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
            <h3
              style={{
                ...F,
                fontSize: isMobile ? 20 : 24,
                fontWeight: 800,
                color: "#2D2973",
                margin: "0 0 16px",
                lineHeight: 1.25,
              }}
            >
              Flagship Solutions
            </h3>
            <p
              style={{
                ...F,
                fontSize: isMobile ? 14 : 15,
                fontWeight: 500,
                color: "#4D4D4D",
                lineHeight: 1.85,
                margin: "0 0 36px",
                flex: 1,
              }}
            >
              Specialised, high-impact strategic solutions developed to address
              critical business and growth challenges through structured
              frameworks, research, and execution-focused advisory.
            </p>
            <Link
              to="/flagship-solutions"
              style={{
                ...F,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#D5AF34",
                textDecoration: "none",
                transition: "opacity 0.2s",
                // Easier tap target on mobile
                padding: isMobile ? "8px 0" : undefined,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              LEARN MORE <ArrowRight size={14} />
            </Link>
          </div>

          {/* Advisory Services */}
          <div
            style={{
              background: "#ffffff",
              borderTop: "4px solid #2D2973",
              padding: isMobile ? "32px 24px" : "48px 40px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ marginBottom: 24 }}>
              <img
                src={advisoryIcon}
                alt="Advisory Services"
                style={{
                  width: isMobile ? 48 : 64,
                  height: isMobile ? 48 : 64,
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
            <h3
              style={{
                ...F,
                fontSize: isMobile ? 20 : 24,
                fontWeight: 800,
                color: "#2D2973",
                margin: "0 0 16px",
                lineHeight: 1.25,
              }}
            >
              Advisory Services
            </h3>
            <p
              style={{
                ...F,
                fontSize: isMobile ? 14 : 15,
                fontWeight: 500,
                color: "#4D4D4D",
                lineHeight: 1.85,
                margin: "0 0 36px",
                flex: 1,
              }}
            >
              Flexible consulting and advisory support tailored to help
              organisations improve performance, strengthen operations, enhance
              competitiveness, and drive sustainable growth.
            </p>
            <Link
              to="/advisory-services"
              style={{
                ...F,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#2D2973",
                textDecoration: "none",
                transition: "opacity 0.2s",
                padding: isMobile ? "8px 0" : undefined,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              LEARN MORE <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section style={{ background: "#E8EDF3", padding: sectionPadding }}>
        <h2
          style={{
            ...F,
            fontSize: isMobile ? "clamp(18px, 5vw, 24px)" : "clamp(22px, 2.5vw, 32px)",
            fontWeight: 900,
            color: "#2D2973",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            margin: "0 0 12px",
          }}
        >
          CONTACT FORM
        </h2>
        <p
          style={{
            ...F,
            fontSize: isMobile ? 14 : 15,
            fontWeight: 500,
            color: "#606161",
            marginBottom: 40,
            marginTop: 0,
            lineHeight: 1.7,
          }}
        >
          Ready to get started? Send us a message and we'll be in touch within
          one business day.
        </p>
        <div
          style={{
            background: "#ffffff",
            padding: isMobile ? "28px 20px" : "48px",
            border: "1px solid #e4e8ef",
          }}
        >
          <ContactForm submitLabel="SUBMIT" submitAlign="right" />
        </div>
      </section>
    </>
  );
}