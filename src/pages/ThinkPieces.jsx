import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { usePosts } from "@/hooks/useWordPress";
import { getFeaturedImage, getCategory } from "@/services/wordpress";
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
      <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "140px 80px 60px", maxWidth: 1240, margin: "0 auto", width: "100%", boxSizing: "border-box", textAlign: "left" }}>
        <p style={{ ...CLAN, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.36em", color: "#ffffff", marginBottom: 20, marginTop: 0 }}>
          THINK PIECES
        </p>
        <h1 style={{ ...CLAN, fontWeight: 800, fontSize: "clamp(36px, 5vw, 68px)", color: "#ffffff", lineHeight: 1.1, margin: 0 }}>
          Featured Think Pieces
          <br />
          <span style={{ color: "#D5AF34" }}>Archives</span>
        </h1>
      </div>

      {/* Gold box — inside hero, over parallax image */}
      <div style={{ position: "relative", zIndex: 1, width: "100%", padding: "0 40px", boxSizing: "border-box" }}>
        <div style={{ background: "#D5AF34", padding: "52px 80px", maxWidth: 1160, margin: "0 auto" }}>
          <p style={{ ...CLAN, fontSize: 17, fontWeight: 700, color: "#ffffff", lineHeight: 1.85, margin: 0, textAlign: "left" }}>
            Fueling Growth Through Thought Leadership. The marketing world is evolving, and businesses need more than just specialists — they need full-stack marketers. These agile professionals blend creative strategy, data analysis, and digital execution to drive real growth across multiple channels. This article explores how full-stack marketers are reshaping business growth, what makes them so effective in today's fast-paced market, and why companies that embrace this model are outpacing the competition.
          </p>
        </div>
      </div>
    </section>
  );
}

function ArticlesSection() {
  const { posts, isLoading, error } = usePosts({ perPage: 12 });

  return (
    <section style={{ background: "#ffffff", padding: "80px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px" }}>

        {isLoading && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
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

        {error && !isLoading && (
          <div style={{ padding: "24px", border: "1px solid #fca5a5", background: "#fef2f2", color: "#b91c1c", borderRadius: 8, ...CLAN, fontSize: 14, fontWeight: 700 }}>
            Could not load articles from WordPress. {error.message}
          </div>
        )}

        {!isLoading && !error && posts.length === 0 && (
          <p style={{ textAlign: "center", ...CLAN, fontSize: 14, fontWeight: 700, color: "#6b7280" }}>
            No articles published yet.
          </p>
        )}

        {!isLoading && posts.length > 0 && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignItems: "stretch" }}>
            {posts.map((p) => {
              const img = getFeaturedImage(p);
              const cat = getCategory(p);
              const author = p?._embedded?.author?.[0]?.name || "Swiftora Team";
              return (
                <Link key={p.id} to="/think-pieces/$slug" params={{ slug: p.slug }}
                  style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}>
                  <div style={{ height: 240, overflow: "hidden", flexShrink: 0, background: "#1A2035" }}>
                    {img ? (
                      <img src={img} alt={p.title?.rendered || ""}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} />
                    ) : (
                      <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #1a2035, #0A0B14)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ ...CLAN, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: "#D5AF34" }}>{cat || "Article"}</span>
                      </div>
                    )}
                  </div>
                  <div style={{ background: "#2D2973", padding: "24px 20px 28px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <h3 style={{ ...CLAN, fontSize: 18, fontWeight: 800, color: "#ffffff", lineHeight: 1.35, margin: "0 0 0", flexGrow: 1 }}
                      dangerouslySetInnerHTML={{ __html: p.title?.rendered || "" }} />
                    <div style={{ marginTop: 20 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                        <span style={{ ...CLAN, fontSize: 13, fontWeight: 800, color: "#D5AF34" }}>By {author}</span>
                        <span style={{ ...CLAN, fontSize: 12, fontWeight: 800, color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.08em", paddingBottom: 4, borderBottom: "2px solid #D5AF34", cursor: "pointer" }}>READ MORE</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
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