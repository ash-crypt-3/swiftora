import { createFileRoute, Link } from "@tanstack/react-router";
import { type EngagementSlug } from "@/lib/engagements";
import heroImg from "@/assets/heroes/Featured_Engagements_Header.jpg";

import thumb01 from "@/assets/featured-engagements/Featured-Engagement-01-Title.jpg";
import thumb02 from "@/assets/featured-engagements/Featured-Engagement-02-Title.jpg";
import thumb03 from "@/assets/featured-engagements/Featured-Engagement-03-Title.jpg";
import thumb04 from "@/assets/featured-engagements/Featured-Engagement-04-Title.jpg";
import thumb05 from "@/assets/featured-engagements/Featured-Engagement-05-Title.jpg";
import thumb06 from "@/assets/featured-engagements/Featured-Engagement-06-Title.jpg";
import thumb07 from "@/assets/featured-engagements/Featured-Engagement-07-Title.jpg";

const slugRoute: Record<EngagementSlug, string> = {
  "ameer-developers": "/ameer-developers",
  "zuri-nzilani-foundation": "/zuri-nzilani-foundation",
  "alliance-hospital": "/alliance-hospital",
  "rochman-properties": "/rochman-properties",
  herencia: "/herencia",
  "paediatric-allergy-center": "/paediatric-allergy-center",
  "fmcg-distribution-study": "/fmcg-distribution-study",
};

const CLAN: React.CSSProperties = { fontFamily: '"Clan Pro", sans-serif' };
const NAV_MAX = 1240;

const cardData: {
  slug: EngagementSlug;
  name: string;
  headline: string;
  category: string;
  thumb: string;
}[] = [
  { slug: "ameer-developers",          name: "AMEER DEVELOPERS",                      headline: "Marketing Gated Communities in Kenya",                                 category: "Real Estate",    thumb: thumb01 },
  { slug: "zuri-nzilani-foundation",   name: "ZURI NZILANI FOUNDATION",               headline: "Transforming Maternal Health Outcomes Through Strategic Messaging",     category: "Not For Profit", thumb: thumb02 },
  { slug: "paediatric-allergy-center", name: "PAEDIATRIC ALLERGY CENTER",             headline: "Driving Healthcare Marketing Impact for Paediatric Clinic",            category: "Health",         thumb: thumb03 },
  { slug: "herencia",                  name: "HERENCIA",                              headline: "Steering Brand Growth Through Integrated Digital Marketing",           category: "Real Estate",    thumb: thumb04 },
  { slug: "rochman-properties",        name: "ROCHMAN PROPERTIES LIMITED",            headline: "Modern Marketing & Sales Ops in Real Estate",                         category: "Real Estate",    thumb: thumb05 },
  { slug: "alliance-hospital",         name: "ALLIANCE HOSPITAL",                     headline: "Strengthening Brand Through Strategic Content Marketing",              category: "Health",         thumb: thumb06 },
  { slug: "fmcg-distribution-study",  name: "FEASIBILITY STUDY & BUSINESS PLANNING", headline: "A Strategic Look at FMCG Distribution Opportunities in Kenya",        category: "Retail",         thumb: thumb07 },
];

export const Route = createFileRoute("/featured-engagements-archives")({
  head: () => ({
    meta: [
      { title: "Featured Engagements — Swiftora Consulting" },
      { name: "description", content: "All featured Swiftora engagements across real estate, healthcare, not-for-profit, FMCG and market research." },
    ],
  }),
  component: ArchivePage,
});

/* ── Card ── */
function CaseStudyCard({ card }: { card: (typeof cardData)[0] }) {
  return (
    <Link to={slugRoute[card.slug]} style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}>
      <div style={{ height: 240, overflow: "hidden", flexShrink: 0, background: "#1A2035" }}>
        <img
          src={card.thumb}
          alt={card.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>
      <div style={{ background: "#2D2973", padding: "24px 20px 28px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <span style={{ ...CLAN, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.22em", color: "rgba(213,175,52,0.7)", marginBottom: 10 }}>
          {card.category}
        </span>
        <h3 style={{ ...CLAN, fontSize: 16, fontWeight: 800, color: "#ffffff", lineHeight: 1.35, margin: "0 0 0", flexGrow: 1 }}>
          {card.headline}
        </h3>
        <div style={{ marginTop: 20 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ ...CLAN, fontSize: 13, fontWeight: 800, color: "#D5AF34" }}>{card.name}</span>
            <span style={{ ...CLAN, fontSize: 12, fontWeight: 800, color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.08em", paddingBottom: 4, borderBottom: "2px solid #D5AF34", cursor: "pointer" }}>
              READ MORE
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ── Page ── */
function ArchivePage() {
  return (
    <main>

      {/* ── 1. HERO ── */}
      <section style={{ position: "relative", minHeight: "70vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src={heroImg} alt="Featured Engagements" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,11,20,0.15) 0%, rgba(10,11,20,0.70) 100%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, padding: "0 0 60px" }}>
          <div className="fe-container">
            <h1 style={{ ...CLAN, fontWeight: 800, lineHeight: 1.15, margin: 0 }}>
              <span style={{ fontSize: "clamp(26px, 3.2vw, 44px)", color: "#ffffff", display: "block" }}>Featured Engagements</span>
              <span style={{ fontSize: "clamp(18px, 2.6vw, 36px)", color: "#D5AF34", display: "block", marginTop: 4 }}>Discover Our Impact Through Case Studies</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ── 2. GOLD INTRO BOX — overlaps hero bottom ── */}
      <section style={{ background: "transparent", padding: "0 0 48px", position: "relative", zIndex: 2, marginTop: "-60px" }}>
        <div className="fe-container">
          <div className="fe-gold-box">
            <p style={{ ...CLAN, fontSize: 17, fontWeight: 600, fontStyle: "italic", color: "#ffffff", lineHeight: 1.85, margin: "0 0 20px" }}>
              At Swiftora Consulting Limited, our success is defined by the measurable results we achieve for our clients.
              We invite you to explore our Archive of Case Studies — a curated collection of our most impactful engagements.
              These case studies showcase how we've helped organizations tackle their toughest challenges, transform their
              operations, and unlock new opportunities for growth.
            </p>
            <p style={{ ...CLAN, fontSize: 17, fontWeight: 600, fontStyle: "italic", color: "#ffffff", lineHeight: 1.85, margin: "0 0 20px" }}>
              Each featured engagement highlights our commitment to delivering tailored, data-driven solutions that drive
              real, lasting change. From innovative strategies to execution excellence, our Archive reflects the breadth
              and depth of our expertise across industries and sectors.
            </p>
            <p style={{ ...CLAN, fontSize: 17, fontWeight: 600, fontStyle: "italic", color: "#ffffff", lineHeight: 1.85, margin: 0 }}>
              Whether you are seeking inspiration for your own business or looking to understand how our approach could
              support your goals, our Featured Engagement Archive provides an insightful look into how we make a
              difference. Start your journey with us — explore the success stories that define who we are and how we
              can help your organization thrive.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. CARDS GRID ── */}
      <section style={{ background: "#ffffff", padding: "0 0 80px" }}>
        <div className="fe-container">
          <div className="fe-grid">
            {cardData.map((card) => (
              <CaseStudyCard key={card.slug} card={card} />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .fe-container {
          max-width: ${NAV_MAX}px;
          margin: 0 auto;
          padding: 0 60px;
          box-sizing: border-box;
        }
        .fe-gold-box {
          background: #D5AF34;
          padding: 60px 44px 48px;
        }
        .fe-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: stretch;
        }

        @media (max-width: 1024px) {
          .fe-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .fe-container {
            padding: 0 24px;
          }
          .fe-gold-box {
            padding: 40px 24px 36px;
          }
          .fe-gold-box p {
            font-size: 15px !important;
          }
          .fe-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          section[style*="padding: 0 0 80px"] {
            padding-bottom: 48px !important;
          }
        }

        @media (max-width: 480px) {
          .fe-container {
            padding: 0 16px;
          }
          .fe-gold-box {
            padding: 32px 20px 28px;
          }
        }
      `}</style>

    </main>
  );
}

export default ArchivePage;