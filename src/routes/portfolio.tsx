import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { ClientMarquee } from "@/components/ClientMarquee";
import hero3 from "@/assets/heroes/Portfolio_Header.jpg";
import single01 from "@/assets/engagement/Featured-Engagement-01-Single-Page.jpg";
import single02 from "@/assets/engagement/Featured-Engagement-02-Single-Page.jpg";

const WP = "https://swiftoraconsulting.co.ke/wp-content/uploads";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Our Portfolio: Driving Tangible Results in Diverse Industries" },
      { name: "description", content: "See Swiftora Consulting's proven track record across diverse industries in Kenya." },
    ],
  }),
  component: PortfolioPage,
});

const galleryImgs = [
  `${WP}/2025/05/Portfolio-06.png`,
  `${WP}/2025/05/Portfolio-05.png`,
  `${WP}/2025/05/Portfolio-01.png`,
  `${WP}/2025/05/Portfolio-02.png`,
  `${WP}/2025/05/Portfolio-04.png`,
  `${WP}/2025/05/Portfolio-03.png`,
];

const engagements = [
  {
    image: single01,
    title: "Marketing Gated Communities in Kenya",
    category: "Real Estate",
    to: "/ameer-developers",
  },
  {
    image: single02,
    title: "Transforming Maternal Health Outcomes through Strategic Messaging",
    category: "Not For Profit",
    to: "/zuri-nzilani-foundation",
  },
];

const testimonials = [
  {
    name: "Zuri Nzilani Foundation",
    body: "Swiftora Consulting Limited has been an invaluable partner in advancing our mission to improve maternal and newborn health. Their expertise in crafting strategic communication campaigns, developing insightful training reports, and preparing comprehensive concept notes has significantly enhanced our impact. Their professionalism and dedication have been instrumental in driving our initiatives forward.",
    rating: 5,
  },
  {
    name: "Paediatric Allergy Center",
    body: "Helps one get a better understanding of how you can market your Institution. I personally learnt a lot about what we can do to improve and connect with patients.",
    rating: 5,
  },
  {
    name: "Samambo Consortium Limited",
    body: "Very professional and dedicated team who are passionate about supporting growth of SMEs. I highly recommend them.",
    rating: 5,
  },
];

const sectionHeading: React.CSSProperties = {
  fontFamily: '"Clan Pro", sans-serif',
  fontWeight: 700,
  fontSize: "clamp(22px, 2.4vw, 28px)",
  letterSpacing: "0.1em",
  color: "#2D2973",
  textTransform: "uppercase" as const,
  marginBottom: 36,
  marginTop: 0,
};

const galleryHeading: React.CSSProperties = {
  ...sectionHeading,
  color: "#D5AF34",
};

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          style={{ color: i < count ? "#D5AF34" : "#e5e7eb" }}
          fill={i < count ? "#D5AF34" : "transparent"}
        />
      ))}
    </div>
  );
}

function ParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imgRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrolled = -rect.top;
      imgRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", overflow: "hidden", height: "clamp(320px, 50vh, 520px)" }}
    >
      <img
        ref={imgRef}
        src={hero3}
        alt="Portfolio hero"
        style={{
          position: "absolute",
          top: "-15%",
          left: 0,
          width: "100%",
          height: "130%",
          objectFit: "cover",
          willChange: "transform",
          transition: "transform 0.05s linear",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 60px",
          maxWidth: 1240,
          margin: "0 auto",
          left: 0,
          right: 0,
        }}
      >
        <p
          style={{
            fontFamily: '"Clan Pro", sans-serif',
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            color: "#ffffff",
            marginBottom: 14,
          }}
        >
          Portfolio
        </p>
        <h1
          style={{
            fontFamily: '"Clan Pro", sans-serif',
            fontWeight: 700,
            fontSize: "clamp(30px, 4.5vw, 58px)",
            lineHeight: 1.15,
            margin: 0,
          }}
        >
          <span style={{ color: "#ffffff" }}>Delivering Excellence,</span>
          <br />
          <span style={{ color: "#D5AF34" }}>Redefining Possibilities</span>
        </h1>
      </div>
    </div>
  );
}

function GalleryCarousel() {
  const [start, setStart] = useState(0);
  const visible = 3;
  const total = galleryImgs.length;

  const prev = () => setStart((s) => (s - 1 + total) % total);
  const next = () => setStart((s) => (s + 1) % total);

  const displayed = Array.from({ length: visible }, (_, i) => galleryImgs[(start + i) % total]);

  const arrowBtn: React.CSSProperties = {
    width: 36,
    height: 36,
    background: "#D5AF34",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    color: "#ffffff",
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <button style={arrowBtn} onClick={prev} aria-label="Previous">
        <ChevronLeft size={20} strokeWidth={2.5} />
      </button>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, flex: 1 }}>
        {displayed.map((src, i) => (
          <div key={`${start}-${i}`} style={{ overflow: "hidden", background: "#e5e7eb" }}>
            <img
              src={src}
              alt={`Portfolio ${i + 1}`}
              style={{ width: "100%", height: 160, objectFit: "cover", display: "block", transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              onError={(e) => { e.currentTarget.parentElement!.style.display = "none"; }}
            />
          </div>
        ))}
      </div>
      <button style={arrowBtn} onClick={next} aria-label="Next">
        <ChevronRight size={20} strokeWidth={2.5} />
      </button>
    </div>
  );
}

function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <div>
      <div key={current} style={{ maxWidth: 860, animation: "fadeIn 0.4s ease" }}>
        <p
          style={{
            fontFamily: '"Clan Pro", sans-serif',
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "clamp(14px, 1.5vw, 16px)",
            color: "#4D4D4D",
            lineHeight: 1.9,
            marginBottom: 16,
            marginTop: 0,
          }}
        >
          &ldquo;{t.body}&rdquo;
        </p>
        <p
          style={{
            fontFamily: '"Clan Pro", sans-serif',
            fontWeight: 700,
            fontSize: 14,
            color: "#2D2973",
            margin: 0,
          }}
        >
          – {t.name}
        </p>
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 28 }}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Testimonial ${i + 1}`}
            style={{
              width: i === current ? 24 : 10,
              height: 10,
              borderRadius: 5,
              background: i === current ? "#2D2973" : "#c8c8c8",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}

function PortfolioPage() {
  return (
    <>
      <ParallaxHero />

      <section style={{ background: "#2D2973", padding: "52px 60px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <p style={{ fontFamily: '"Clan Pro", sans-serif', fontWeight: 700, fontSize: "clamp(14px, 1.4vw, 16px)", color: "#ffffff", lineHeight: 1.9, marginBottom: 16, marginTop: 0, textAlign: "justify" }}>
            At Swiftora Consulting Limited, every project tells a story of innovation, growth, and success. Our portfolio showcases the diverse range of solutions we have delivered for corporates, startups, and individuals across various industries.
          </p>
          <p style={{ fontFamily: '"Clan Pro", sans-serif', fontWeight: 700, fontSize: "clamp(14px, 1.4vw, 16px)", color: "#ffffff", lineHeight: 1.9, marginBottom: 16, marginTop: 0, textAlign: "justify" }}>
            From crafting game-changing strategies to driving impactful marketing campaigns and refining communication frameworks, each engagement reflects our commitment to excellence and measurable outcomes.
          </p>
          <p style={{ fontFamily: '"Clan Pro", sans-serif', fontWeight: 700, fontSize: "clamp(14px, 1.4vw, 16px)", color: "#ffffff", lineHeight: 1.9, marginBottom: 0, marginTop: 0, textAlign: "justify" }}>
            Explore our portfolio to see how we've transformed challenges into opportunities and ideas into realities. Let our success stories inspire the future we can create together.
          </p>
        </div>
      </section>

      <section style={{ background: "#f7f6f2", padding: "56px 60px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <h2 style={galleryHeading}>Portfolio Gallery</h2>
          <GalleryCarousel />
        </div>
      </section>

      {/* ── Featured Engagements ── */}
      <section style={{ background: "#E8EEF7", padding: "56px 60px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: '"Clan Pro", sans-serif',
              fontWeight: 700,
              fontSize: "clamp(22px, 2.4vw, 28px)",
              letterSpacing: "0.1em",
              color: "#2D2973",
              textTransform: "uppercase" as const,
              marginBottom: 36,
              marginTop: 0,
              textAlign: "left",
            }}
          >
            Featured Engagements
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 20,
              marginBottom: 28,
            }}
          >
            {engagements.map((e) => (
              <Link
                key={e.to}
                to={e.to as any}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  overflow: "hidden",
                  minHeight: 280,
                  textDecoration: "none",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(el) => { el.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={(el) => { el.currentTarget.style.transform = "translateY(0)"; }}
              >
                <img
                  src={e.image}
                  alt={e.title}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(10,11,20,0.88) 0%, rgba(10,11,20,0.40) 55%, transparent 100%)",
                  }}
                />
                <div style={{ position: "relative", zIndex: 2, padding: "24px 28px" }}>
                  <h3
                    style={{
                      fontFamily: '"Clan Pro", sans-serif',
                      fontWeight: 700,
                      fontSize: "clamp(16px, 1.8vw, 20px)",
                      color: "#ffffff",
                      lineHeight: 1.3,
                      margin: "0 0 12px",
                    }}
                  >
                    {e.title}
                  </h3>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontFamily: '"Clan Pro", sans-serif',
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "#D5AF34",
                    }}
                  >
                    {e.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link
              to="/featured-engagements-archives"
              style={{
                display: "inline-block",
                padding: "10px 28px",
                border: "2px solid #2D2973",
                color: "#2D2973",
                fontFamily: '"Clan Pro", sans-serif',
                fontWeight: 700,
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#2D2973"; e.currentTarget.style.color = "#ffffff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#2D2973"; }}
            >
              View All Engagements
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: "#f7f6f2", padding: "56px 60px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: '"Clan Pro", sans-serif',
              fontWeight: 700,
              fontSize: "clamp(22px, 2.4vw, 28px)",
              letterSpacing: "0.1em",
              color: "#2D2973",
              textTransform: "uppercase" as const,
              marginBottom: 36,
              marginTop: 0,
              textAlign: "left",
            }}
          >
            Client Testimonials
          </h2>
          <TestimonialSlider />
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "56px 0 40px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 60px" }}>
          <h2
            style={{
              fontFamily: '"Clan Pro", sans-serif',
              fontWeight: 700,
              fontSize: "clamp(22px, 2.4vw, 28px)",
              letterSpacing: "0.1em",
              color: "#2D2973",
              textTransform: "uppercase" as const,
              marginBottom: 32,
              marginTop: 0,
              textAlign: "left",
            }}
          >
            Our Clients
          </h2>
        </div>
        <style>{`
          .clients-marquee-wrapper h2,
          .clients-marquee-wrapper h3,
          .clients-marquee-wrapper p[class*="title"],
          .clients-marquee-wrapper [class*="heading"] { display: none !important; }
        `}</style>
        <div className="clients-marquee-wrapper">
          <ClientMarquee />
        </div>
      </section>
    </>
  );
}