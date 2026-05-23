import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { engagements, getEngagement, type EngagementSlug, type ContentSection } from "@/lib/engagements";
import { useRef } from "react";

const CLAN: React.CSSProperties = { fontFamily: '"Clan Pro", sans-serif' };

const NAV_MAX = 1240;
const NAV_PAD = "0 60px";

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
          <div style={{ maxWidth: NAV_MAX, margin: "0 auto", padding: NAV_PAD, boxSizing: "border-box" }}>
            <h1 style={{ ...CLAN, fontWeight: 800, lineHeight: 1.15, margin: 0 }}>
              <span style={{ fontSize: "clamp(28px, 3.2vw, 44px)", color: "#ffffff", display: "block" }}>Featured Engagement</span>
              <span style={{ fontSize: "clamp(22px, 2.6vw, 36px)", color: "#D5AF34", display: "block", marginTop: 4 }}>Case Study {eng.caseStudyNumber}</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ── 2. GOLD INTRO BOX — overlaps hero, first line at hero bottom ── */}
      <section style={{ background: "transparent", padding: "0 0 48px", position: "relative", zIndex: 2, marginTop: "-60px" }}>
        <div style={{ maxWidth: NAV_MAX, margin: "0 auto", padding: NAV_PAD, boxSizing: "border-box" }}>
          <div style={{ background: "#D5AF34", padding: "60px 44px 48px" }}>
            {eng.heroIntro.split("\n\n").map((para, i, arr) => (
              <p key={i} style={{ ...CLAN, fontSize: 17, fontWeight: 600, fontStyle: "italic", color: "#ffffff", lineHeight: 1.85, margin: i < arr.length - 1 ? "0 0 20px" : "0" }}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. MAIN CONTENT ── */}
      <article style={{ background: "#ffffff", padding: "72px 0" }}>
        <div style={{ maxWidth: NAV_MAX, margin: "0 auto", padding: NAV_PAD, boxSizing: "border-box" }}>

          <h2 style={{ ...CLAN, fontSize: "clamp(26px, 3.2vw, 44px)", fontWeight: 900, color: "#D5AF34", textTransform: "uppercase", letterSpacing: "0.03em", margin: "0 0 8px", lineHeight: 1.1 }}>
            {eng.client}
          </h2>
          <h3 style={{ ...CLAN, fontSize: "clamp(16px, 1.8vw, 22px)", fontWeight: 800, color: "#2D2973", margin: "0 0 40px", lineHeight: 1.3 }}>
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
            <blockquote style={{ background: "#f7f6f2", borderLeft: "4px solid #D5AF34", padding: "28px 32px", margin: "48px 0 0" }}>
              <p style={{ ...CLAN, fontSize: 19, fontWeight: 700, fontStyle: "italic", color: "#2D2973", lineHeight: 1.55, margin: 0 }}>
                "{eng.pullQuote}"
              </p>
            </blockquote>
          )}

        </div>
      </article>

      {/* ── 4. RELATED ENGAGEMENTS ── */}
      <section style={{ background: "#ffffff", padding: "64px 0 80px", borderTop: "1px solid #ececec" }}>

        <div style={{ maxWidth: NAV_MAX, margin: "0 auto", padding: NAV_PAD, boxSizing: "border-box", marginBottom: 36 }}>
          <h2 style={{ ...CLAN, fontSize: "clamp(22px, 3vw, 40px)", fontWeight: 900, color: "#D5AF34", textTransform: "uppercase", letterSpacing: "0.04em", margin: 0 }}>
            Read Other Featured Engagements
          </h2>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flexShrink: 0, padding: "0 16px 0 60px" }}>
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

          <div style={{ flexShrink: 0, padding: "0 60px 0 16px" }}>
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

        <div style={{ maxWidth: NAV_MAX, margin: "40px auto 0", padding: NAV_PAD, boxSizing: "border-box", display: "flex", justifyContent: "flex-end" }}>
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
    <Link to={slugRouteMap[r.slug as EngagementSlug]} style={{ textDecoration: "none", flexShrink: 0, width: 320 }}>
      <div
        style={{ position: "relative", height: 220, overflow: "hidden", borderRadius: 2, transition: "transform 0.2s" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "scale(1.02)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "scale(1)"; }}
      >
        <img src={r.singleImage} alt={r.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,11,20,0.85) 0%, rgba(10,11,20,0.12) 55%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px" }}>
          <p style={{ ...CLAN, fontSize: 15, fontWeight: 800, color: "#ffffff", margin: "0 0 14px", lineHeight: 1.35 }}>
            {r.title}
          </p>
          <span style={{ ...CLAN, display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 18px", border: "2px solid #D5AF34", color: "#D5AF34", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.14em" }}>
            READ MORE <ArrowRight size={11} />
          </span>
        </div>
      </div>
    </Link>
  );
}