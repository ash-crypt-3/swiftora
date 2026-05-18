import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ClientMarquee } from "@/components/ClientMarquee";
import hero3 from "@/assets/heroes/hero-3.jpg";

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
  `${WP}/2025/05/Portfolio-06.png`, `${WP}/2025/05/Portfolio-05.png`,
  `${WP}/2025/05/Portfolio-01.png`, `${WP}/2025/05/Portfolio-02.png`,
  `${WP}/2025/05/Portfolio-04.png`, `${WP}/2025/05/Portfolio-03.png`,
];

const engagements = [
  { image: `${WP}/2025/05/Portfolio-01.png`, title: "Marketing Gated Communities in Kenya", category: "Real Estate", to: "/ameer-developers" },
  { image: `${WP}/2025/05/Portfolio-06.png`, title: "Transforming Maternal Health Outcomes through Strategic Messaging", category: "Not for Profit", to: "/zuri-nzilani-foundation" },
];

const testimonials = [
  { name: "Paediatric Allergy Center", body: "Helps one get a better understanding of how you can market your Institution. I personally learnt a lot about what we can do to improve and connect with patients.", rating: 5 },
  { name: "Zuri Nzilani Foundation", body: "Swiftora Consulting Limited has been an invaluable partner in advancing our mission to improve maternal and newborn health. Their expertise in crafting strategic communication campaigns, developing insightful training reports, and preparing comprehensive concept notes has significantly enhanced our impact.", rating: 5 },
  { name: "Samambo Consortium Limited", body: "Very professional and dedicated team who passionate about supporting growth of SMEs. I highly recommend them.", rating: 5 },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} style={{ color: i < count ? "#D5AF34" : "#e5e7eb" }} fill={i < count ? "#D5AF34" : "transparent"} />
      ))}
    </div>
  );
}

function PortfolioPage() {
  return (
    <>
      <Hero
        variant="inner"
        eyebrow="Portfolio"
        lines={["Delivering Excellence,", "Redefining", "Possibilities"]}
        image={hero3}
        supporting={<p>At Swiftora Consulting Limited, every project tells a story of innovation, growth, and success.</p>}
      />

      {/* Intro */}
      <section className="section-pad" style={{ background: "#ffffff" }}>
        <div className="max-w-[860px] mx-auto">
          <p style={{ fontSize: 16, color: "#4D4D4D", lineHeight: 1.9, marginBottom: 16 }}>
            At Swiftora Consulting Limited, every project tells a story of innovation, growth, and success. Our portfolio showcases the diverse range of solutions we have delivered for corporates, startups, and individuals across various industries.
          </p>
          <p style={{ fontSize: 16, color: "#4D4D4D", lineHeight: 1.9 }}>
            From crafting game-changing strategies to driving impactful marketing campaigns and refining communication frameworks, each engagement reflects our commitment to excellence and measurable outcomes.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad-sm tex-dots" style={{ background: "#f7f6f2" }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 style={{ fontFamily: '"Clan Pro", sans-serif', fontWeight: 700, fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em", color: "#2D2973", textAlign: "center", marginBottom: 40 }}>
            Portfolio Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImgs.map((src, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-card hover-lift">
                <img src={src} alt={`Portfolio ${i + 1}`} className="w-full h-48 object-cover" loading="lazy"
                  onError={(e) => { e.currentTarget.parentElement!.style.display = "none"; }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Engagements — full image cards matching WP exactly */}
      <section className="section-pad" style={{ background: "#f7f6f2" }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 style={{ fontFamily: '"Clan Pro", sans-serif', fontWeight: 700, fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em", color: "#2D2973", textAlign: "center", marginBottom: 48 }}>
            FEATURED ENGAGEMENTS
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {engagements.map((e) => (
              <Link
                key={e.to}
                to={e.to as any}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  borderRadius: 8,
                  overflow: "hidden",
                  minHeight: 300,
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
                  onError={(ev) => { ev.currentTarget.style.display = "none"; }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(10,11,20,0.88) 0%, rgba(10,11,20,0.40) 55%, transparent 100%)",
                }} />
                <div style={{ position: "relative", zIndex: 2, padding: 28 }}>
                  <h3 style={{
                    fontFamily: '"Clan Pro", sans-serif',
                    fontWeight: 700,
                    fontSize: "clamp(18px,2.2vw,24px)",
                    color: "#ffffff",
                    lineHeight: 1.3,
                    margin: "0 0 16px",
                  }}>
                    {e.title}
                  </h3>
                  <span style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: '"Clan Pro", sans-serif',
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#D5AF34",
                  }}>
                    {e.category}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link to="/featured-engagements-archives" style={{ fontSize: 13, fontWeight: 600, color: "#2D2973", textDecoration: "none" }} className="link-underline">
              view all Engagements
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad tex-dots" style={{ background: "#ffffff" }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 style={{ fontFamily: '"Clan Pro", sans-serif', fontWeight: 700, fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em", color: "#2D2973", textAlign: "center", marginBottom: 48 }}>
            Client testimonials
          </h2>
          <div className="grid md:grid-cols-3 gap-6 stagger">
            {testimonials.map((t) => (
              <div key={t.name} className="animate-fade-up bg-white rounded-lg p-8 shadow-card" style={{ border: "1px solid #eeeeee" }}>
                <Stars count={t.rating} />
                <p style={{ marginTop: 16, fontSize: 14, color: "#4D4D4D", lineHeight: 1.8, fontStyle: "italic" }}>"{t.body}"</p>
                <div style={{ marginTop: 16, fontWeight: 700, color: "#2D2973", fontSize: 13 }}>— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientMarquee />
    </>
  );
}