import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { usePosts } from "@/hooks/useWordPress";
import { getFeaturedImage, getCategory } from "@/services/wordpress";
import { articles } from "@/lib/content";
import heroBg from "@/assets/heroes/Think_Pieces_Header.jpg";

const CLAN = { fontFamily: '"Clan Pro", sans-serif' };

function HeroSection() {
  const bgRef = useRef(null);

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
    <section style={{ position: "relative", overflow: "hidden", minHeight: "115vh", display: "flex", flexDirection: "column" }}>
      <div ref={bgRef} style={{ position: "absolute", inset: "-20%", zIndex: 0, willChange: "transform" }}>
        <img src={heroBg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,11,20,0.62)" }} />
      </div>

      {/* Heading */}
      <div className="tp-hero-heading">
        <p style={{ ...CLAN, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.36em", color: "#ffffff", marginBottom: 20, marginTop: 0 }}>
          THINK PIECES
        </p>
        <h1 style={{ ...CLAN, fontWeight: 800, fontSize: "clamp(30px, 5vw, 68px)", color: "#ffffff", lineHeight: 1.1, margin: 0 }}>
          Featured Think Pieces
          <br />
          <span style={{ color: "#D5AF34" }}>Archives</span>
        </h1>
      </div>

      {/* Gold box */}
      <div className="tp-gold-outer" style={{ position: "relative", zIndex: 2, width: "100%", boxSizing: "border-box", marginTop: "-120px" }}>
        <div className="tp-gold-box" style={{ background: "#D5AF34", maxWidth: 1160, margin: "0 auto" }}>
          <p className="tp-gold-text" style={{ ...CLAN, fontWeight: 700, color: "#ffffff", lineHeight: 1.85, margin: 0, textAlign: "left" }}>
            Fueling Growth Through Thought Leadership. The marketing world is evolving, and businesses need more than just specialists — they need full-stack marketers. These agile professionals blend creative strategy, data analysis, and digital execution to drive real growth across multiple channels. This article explores how full-stack marketers are reshaping business growth, what makes them so effective in today's fast-paced market, and why companies that embrace this model are outpacing the competition.
          </p>
        </div>
      </div>

      <style>{`
        .tp-hero-heading {
          position: relative;
          z-index: 1;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 140px 80px 60px;
          max-width: 1240px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
          text-align: left;
        }
        .tp-gold-outer { padding: 0 40px; }
        .tp-gold-box { padding: 52px 80px; }
        .tp-gold-text { font-size: 17px; }

        @media (max-width: 768px) {
          .tp-hero-heading { padding: 100px 24px 48px; }
          .tp-gold-outer { padding: 0 24px; margin-top: -80px !important; }
          .tp-gold-box { padding: 36px 24px; }
          .tp-gold-text { font-size: 15px !important; }
        }
        @media (max-width: 480px) {
          .tp-hero-heading { padding: 90px 16px 40px; }
          .tp-gold-outer { padding: 0 16px; margin-top: -60px !important; }
          .tp-gold-box { padding: 28px 16px; }
        }
      `}</style>
    </section>
  );
}

/* ── Single card — same layout for both WP and local ── */
function ArticleCard({ slug, img, cat, title, author, isHtmlTitle = false }) {
  return (
    <Link
      to="/think-pieces/$slug"
      params={{ slug }}
      style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}
    >
      {/* Image */}
      <div style={{ height: 240, overflow: "hidden", flexShrink: 0, background: "#1A2035" }}>
        {img ? (
          <img
            src={img}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ) : (
          <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #1a2035, #0A0B14)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ ...CLAN, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: "#D5AF34" }}>
              {cat || "Article"}
            </span>
          </div>
        )}
      </div>

      {/* Navy caption */}
      <div style={{ background: "#2D2973", padding: "24px 20px 28px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
        {isHtmlTitle ? (
          <h3
            style={{ ...CLAN, fontSize: 18, fontWeight: 800, color: "#ffffff", lineHeight: 1.35, margin: "0 0 0", flexGrow: 1 }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        ) : (
          <h3 style={{ ...CLAN, fontSize: 18, fontWeight: 800, color: "#ffffff", lineHeight: 1.35, margin: "0 0 0", flexGrow: 1 }}>
            {title}
          </h3>
        )}
        <div style={{ marginTop: 20 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={{ ...CLAN, fontSize: 13, fontWeight: 800, color: "#D5AF34" }}>
              By {author}
            </span>
            <span style={{ ...CLAN, fontSize: 12, fontWeight: 800, color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.08em", paddingBottom: 4, borderBottom: "2px solid #D5AF34", cursor: "pointer" }}>
              READ MORE
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ArticlesSection() {
  const { posts, isLoading, error } = usePosts({ perPage: 12 });

  // Build local article cards
  const localCards = articles.map((a) => ({
    id: `local-${a.slug}`,
    slug: a.slug,
    img: a.featuredImage,
    cat: a.category,
    title: a.title,
    author: a.author,
    isHtml: false,
  }));

  // Build WP article cards
  const wpCards = (!isLoading && !error && posts.length > 0)
    ? posts.map((p) => ({
        id: `wp-${p.id}`,
        slug: p.slug,
        img: getFeaturedImage(p),
        cat: getCategory(p),
        title: p.title?.rendered || "",
        author: p?._embedded?.author?.[0]?.name || "Swiftora Team",
        isHtml: true,
      }))
    : [];

  // Merge: local first, then WP
  const allCards = [...localCards, ...wpCards];

  return (
    <section style={{ background: "#ffffff" }} className="tp-articles">
      <div className="tp-articles-container">

        {/* Loading skeletons — only show if no local articles yet */}
        {isLoading && allCards.length === 0 && (
          <div className="tp-grid">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} style={{ borderRadius: 4, overflow: "hidden" }}>
                <div style={{ height: 220, background: "#e0ddd6" }} />
                <div style={{ padding: "24px 20px", background: "#2D2973" }}>
                  <div style={{ height: 16, width: "80%", background: "rgba(255,255,255,0.15)", borderRadius: 3, marginBottom: 10 }} />
                  <div style={{ height: 12, width: "50%", background: "rgba(255,255,255,0.1)", borderRadius: 3 }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {error && !isLoading && allCards.length === 0 && (
          <div style={{ padding: "24px", border: "1px solid #fca5a5", background: "#fef2f2", color: "#b91c1c", borderRadius: 8, ...CLAN, fontSize: 14, fontWeight: 700 }}>
            Could not load articles from WordPress. {error.message}
          </div>
        )}

        {allCards.length > 0 && (
          <div className="tp-grid" style={{ alignItems: "stretch" }}>
            {allCards.map((card) => (
              <ArticleCard
                key={card.id}
                slug={card.slug}
                img={card.img}
                cat={card.cat}
                title={card.title}
                author={card.author}
                isHtmlTitle={card.isHtml}
              />
            ))}
          </div>
        )}

        {!isLoading && !error && allCards.length === 0 && (
          <p style={{ textAlign: "center", ...CLAN, fontSize: 14, fontWeight: 700, color: "#6b7280" }}>
            No articles published yet.
          </p>
        )}
      </div>

      <style>{`
        .tp-articles { padding: 80px 0; }
        .tp-articles-container { max-width: 1240px; margin: 0 auto; padding: 0 40px; }
        .tp-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }

        @media (max-width: 1024px) {
          .tp-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }
        @media (max-width: 768px) {
          .tp-articles { padding: 48px 0; }
          .tp-articles-container { padding: 0 24px; }
          .tp-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
        }
        @media (max-width: 480px) {
          .tp-articles { padding: 36px 0; }
          .tp-articles-container { padding: 0 16px; }
          .tp-grid { grid-template-columns: 1fr; gap: 16px; }
        }
      `}</style>
    </section>
  );
}

export default function ThinkPieces() {
  return (
    <main>
      <HeroSection />
      <ArticlesSection />
    </main>
  );
}