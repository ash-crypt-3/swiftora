import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { engagements, getEngagement, type EngagementSlug, type ContentSection } from "@/lib/engagements";
import { useRef } from "react";

const CLAN: React.CSSProperties = { fontFamily: '"Clan Pro", sans-serif' };
const NAV_MAX = 1240;

export function CaseStudy({ slug }: { slug: EngagementSlug }) {
  const eng = getEngagement(slug)!;
  const related = engagements.filter((e) => e.slug !== eng.slug).slice(0, 6);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── 1. HERO ── */}
      <section style={{ position: "relative", minHeight: "70vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src={eng.singleImage} alt={eng.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,11,20,0.15) 0%, rgba(10,11,20,0.70) 100%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, padding: "0 0 60px" }}>
          <div className="cs-container">
            <h1 style={{ ...CLAN, fontWeight: 800, lineHeight: 1.15, margin: 0 }}>
              <span style={{ fontSize: "clamp(24px, 3.2vw, 44px)", color: "#ffffff", display: "block" }}>Featured Engagement</span>
              <span style={{ fontSize: "clamp(18px, 2.6vw, 36px)", color: "#D5AF34", display: "block", marginTop: 4 }}>Case Study {eng.caseStudyNumber}</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ── 2. GOLD INTRO BOX — overlaps hero ── */}
      <section style={{ background: "transparent", padding: "0 0 48px", position: "relative", zIndex: 2, marginTop: "-60px" }}>
        <div className="cs-container">
          <div className="cs-gold-box">
            {eng.heroIntro.split("\n\n").map((para, i, arr) => (
              <p key={i} style={{ ...CLAN, fontWeight: 600, fontStyle: "italic", color: "#ffffff", lineHeight: 1.85, margin: i < arr.length - 1 ? "0 0 20px" : "0" }}
                className="cs-gold-para"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. MAIN CONTENT ── */}
      <article className="cs-article">
        <div className="cs-container">
          <h2 style={{ ...CLAN, fontSize: "clamp(22px, 3.2vw, 44px)", fontWeight: 900, color: "#D5AF34", textTransform: "uppercase", letterSpacing: "0.03em", margin: "0 0 8px", lineHeight: 1.1 }}>
            {eng.client}
          </h2>
          <h3 style={{ ...CLAN, fontSize: "clamp(15px, 1.8vw, 22px)", fontWeight: 800, color: "#2D2973", margin: "0 0 40px", lineHeight: 1.3 }}>
            {eng.title}
          </h3>

          <div>
            {eng.sections.map((section: ContentSection, si) => (
              <div key={si} style={{ marginBottom: 8 }}>
                {section.heading && (
                  <p style={{ ...CLAN, fontSize: 16, fontWeight: 800, color: "#000000", lineHeight: 1.5, margin: "32px 0 16px" }}>
                    {section.heading}
                  </p>
                )}
                {section.paragraphs.map((para, pi) => (
                  <p key={pi} style={{ ...CLAN, fontSize: 15, fontWeight: 500, color: "#000000", lineHeight: 1.95, margin: "0 0 18px", textAlign: "justify" }}>
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {eng.pullQuote && (
            <blockquote className="cs-pullquote">
              <p style={{ ...CLAN, fontWeight: 700, fontStyle: "italic", color: "#2D2973", lineHeight: 1.55, margin: 0 }}
                className="cs-pullquote-text"
              >
                "{eng.pullQuote}"
              </p>
            </blockquote>
          )}
        </div>
      </article>

      {/* ── 4. RELATED ENGAGEMENTS ── */}
      <section style={{ background: "#ffffff", borderTop: "1px solid #ececec" }} className="cs-related">
        <div className="cs-container cs-related-heading">
          <h2 style={{ ...CLAN, fontSize: "clamp(18px, 3vw, 40px)", fontWeight: 900, color: "#D5AF34", textTransform: "uppercase", letterSpacing: "0.04em", margin: 0 }}>
            Read Other Featured Engagements
          </h2>
        </div>

        <div style={{ display: "flex", alignItems: "center" }} className="cs-scroll-row">
          <div className="cs-arrow-left">
            <button
              onClick={() => scroll("left")}
              style={{ width: 44, height: 44, border: "2px solid #2D2973", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#2D2973", transition: "background 0.2s, color 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#2D2973"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#2D2973"; }}
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          <div
            ref={scrollRef}
            style={{ display: "flex", gap: 20, overflowX: "auto", flex: 1, paddingBottom: 4, scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {related.map((r) => (
              <RelatedCard key={r.slug} engagement={r} />
            ))}
          </div>

          <div className="cs-arrow-right">
            <button
              onClick={() => scroll("right")}
              style={{ width: 44, height: 44, border: "2px solid #2D2973", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#2D2973", transition: "background 0.2s, color 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#2D2973"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#2D2973"; }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="cs-container cs-view-all">
          <Link
            to="/portfolio"
            style={{ ...CLAN, display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 40px", background: "#2D2973", color: "#ffffff", fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.14em", textDecoration: "none", transition: "opacity 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
          >
            VIEW ALL ENGAGEMENTS <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <style>{`
        .cs-container {
          max-width: ${NAV_MAX}px;
          margin: 0 auto;
          padding: 0 60px;
          box-sizing: border-box;
        }
        .cs-gold-box {
          background: #D5AF34;
          padding: 60px 44px 48px;
        }
        .cs-gold-para {
          font-size: 17px;
        }
        .cs-article {
          background: #ffffff;
          padding: 72px 0;
        }
        .cs-pullquote {
          background: #f7f6f2;
          border-left: 4px solid #D5AF34;
          padding: 28px 32px;
          margin: 48px 0 0;
        }
        .cs-pullquote-text {
          font-size: 19px;
        }
        .cs-related {
          padding: 64px 0 80px;
        }
        .cs-related-heading {
          margin-bottom: 36px;
        }
        .cs-arrow-left {
          flex-shrink: 0;
          padding: 0 16px 0 60px;
        }
        .cs-arrow-right {
          flex-shrink: 0;
          padding: 0 60px 0 16px;
        }
        .cs-view-all {
          margin-top: 40px;
          display: flex;
          justify-content: flex-end;
        }

        @media (max-width: 768px) {
          .cs-container {
            padding: 0 24px;
          }
          .cs-gold-box {
            padding: 40px 24px 36px;
          }
          .cs-gold-para {
            font-size: 15px !important;
          }
          .cs-article {
            padding: 48px 0;
          }
          .cs-pullquote {
            padding: 20px 20px;
            margin: 32px 0 0;
          }
          .cs-pullquote-text {
            font-size: 16px !important;
          }
          .cs-related {
            padding: 40px 0 56px;
          }
          .cs-arrow-left {
            padding: 0 8px 0 16px;
          }
          .cs-arrow-right {
            padding: 0 16px 0 8px;
          }
          .cs-view-all {
            margin-top: 28px;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .cs-container {
            padding: 0 16px;
          }
          .cs-gold-box {
            padding: 32px 16px 28px;
          }
          .cs-article {
            padding: 36px 0;
          }
          .cs-related {
            padding: 32px 0 48px;
          }
        }
      `}</style>
    </>
  );
}

const slugRouteMap: Record<EngagementSlug, string> = {
  "ameer-developers": "/ameer-developers",
  "zuri-nzilani-foundation": "/zuri-nzilani-foundation",
  "alliance-hospital": "/alliance-hospital",
  "rochman-properties": "/rochman-properties",
  herencia: "/herencia",
  "paediatric-allergy-center": "/paediatric-allergy-center",
  "fmcg-distribution-study": "/fmcg-distribution-study",
};

function RelatedCard({
  engagement: r,
}: {
  engagement: ReturnType<typeof getEngagement> extends infer T ? NonNullable<T> : never;
}) {
  return (
    <Link to={slugRouteMap[r.slug as EngagementSlug]} style={{ textDecoration: "none", flexShrink: 0, width: 280 }}>
      <div
        style={{ position: "relative", height: 200, overflow: "hidden", borderRadius: 2, transition: "transform 0.2s" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "scale(1.02)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "scale(1)"; }}
      >
        <img src={r.cardImage} alt={r.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,11,20,0.85) 0%, rgba(10,11,20,0.12) 55%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px" }}>
          <p style={{ fontFamily: '"Clan Pro", sans-serif', fontSize: 14, fontWeight: 800, color: "#ffffff", margin: "0 0 12px", lineHeight: 1.35 }}>
            {r.title}
          </p>
          <span style={{ fontFamily: '"Clan Pro", sans-serif', display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", border: "2px solid #D5AF34", color: "#D5AF34", fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.14em" }}>
            READ MORE <ArrowRight size={10} />
          </span>
        </div>
      </div>
    </Link>
  );
}