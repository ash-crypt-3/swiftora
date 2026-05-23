import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { usePostBySlug, usePosts } from "@/hooks/useWordPress";
import { getFeaturedImage, getAuthorName, getCategory, formatDate } from "@/services/wordpress";
import "@/styles/wordpress-content.css";
import heroBg from "@/assets/heroes/hero-2.jpg";

const CLAN = { fontFamily: '"Clan Pro", sans-serif' };

/* ─────────────────────────────────────────────────────────────
   ArticleBody
   Renders the full WP HTML untouched, then after mount walks
   the real DOM to find and remove ONLY elements whose text
   content matches the injected WP phrases. Paragraphs and all
   real article content are never touched.
   ───────────────────────────────────────────────────────────── */
function ArticleBody({ html }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !html) return;

    const PHRASES = [
      "read other think pieces",
      "view all articles",
    ];

    // Collect every element inside the article container
    const all = Array.from(ref.current.querySelectorAll("*"));

    all.forEach((el) => {
      const text = (el.textContent || "").trim().toLowerCase();
      // Only act on elements whose ENTIRE text content is one of our phrases
      // (or very close to it). This avoids removing paragraphs that merely
      // contain those words inside a longer sentence.
      const isPhrase = PHRASES.some(
        (phrase) => text === phrase || text === phrase + " →" || text === "→ " + phrase
      );
      if (isPhrase && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });
  }, [html]);

  return (
    <div
      ref={ref}
      className="wp-content"
      style={{
        ...CLAN,
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 1.9,
        color: "#1a1a2e",
        textAlign: "justify",
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

/* ══════════════════════════════════════════════════════════════
   PARALLAX HERO
   ══════════════════════════════════════════════════════════════ */
function ArticleHero({ post, img, cat }) {
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

  const excerpt = (post.excerpt?.rendered || "").replace(/<[^>]+>/g, "").trim();

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Parallax BG */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          inset: "-20%",
          zIndex: 0,
          willChange: "transform",
        }}
      >
        <img
          src={img || heroBg}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10,11,20,0.62)",
          }}
        />
      </div>

      {/* Heading */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "140px 80px 60px",
          maxWidth: 1240,
          margin: "0 auto",
          width: "100%",
          boxSizing: "border-box",
          textAlign: "left",
        }}
      >
        <p
          style={{
            ...CLAN,
            fontSize: 11,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.36em",
            color: "#D5AF34",
            marginBottom: 20,
            marginTop: 0,
          }}
        >
          {cat || "THINK PIECES"}
        </p>
        <h1
          style={{
            ...CLAN,
            fontWeight: 800,
            fontSize: "clamp(32px, 4.5vw, 62px)",
            color: "#ffffff",
            lineHeight: 1.1,
            margin: 0,
            maxWidth: 900,
          }}
          dangerouslySetInnerHTML={{ __html: post.title?.rendered || "" }}
        />
      </div>

      {/* Gold excerpt strip */}
      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{ background: "#D5AF34", padding: "52px 80px" }}>
          <p
            style={{
              ...CLAN,
              fontSize: 17,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.85,
              margin: 0,
              maxWidth: 1080,
              textAlign: "left",
            }}
          >
            {excerpt || "Read on for insights from Swiftora Consulting."}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   RELATED POSTS CAROUSEL
   ══════════════════════════════════════════════════════════════ */
function RelatedCarousel({ currentSlug }) {
  const { posts, isLoading } = usePosts({ perPage: 12 });
  const [index, setIndex] = useState(0);

  const others = (posts || []).filter((p) => p.slug !== currentSlug);
  const visible = 3;
  const max = Math.max(0, others.length - visible);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(max, i + 1));

  if (isLoading || others.length === 0) return null;

  const shown = others.slice(index, index + visible);

  const goldBtn = {
    ...CLAN,
    display: "inline-block",
    padding: "10px 24px",
    border: "2px solid #D5AF34",
    color: "#D5AF34",
    fontWeight: 800,
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    textDecoration: "none",
    background: "transparent",
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s",
  };

  const navyBtn = {
    ...CLAN,
    display: "inline-block",
    padding: "14px 52px",
    border: "2px solid #2D2973",
    color: "#2D2973",
    fontWeight: 800,
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    textDecoration: "none",
    background: "transparent",
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s",
  };

  return (
    <section style={{ background: "#ffffff", padding: "72px 0 88px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 56px" }}>

        {/* Heading */}
        <h2
          style={{
            ...CLAN,
            fontSize: "clamp(22px, 2.8vw, 34px)",
            fontWeight: 800,
            color: "#D5AF34",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            margin: "0 0 40px",
          }}
        >
          READ OTHER THINK PIECES
        </h2>

        {/* Carousel row */}
        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>

          {/* Left arrow */}
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous"
            style={{
              position: "absolute",
              left: -40,
              zIndex: 2,
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: index === 0 ? "rgba(0,0,0,0.18)" : "#D5AF34",
              border: "none",
              cursor: index === 0 ? "default" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 22,
              fontWeight: 800,
              transition: "background 0.2s",
              flexShrink: 0,
            }}
          >
            ‹
          </button>

          {/* Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
              width: "100%",
            }}
          >
            {shown.map((p) => {
              const cardImg = getFeaturedImage(p);
              const rawTitle = (p.title?.rendered || "").replace(/<[^>]+>/g, "");
              const shortTitle =
                rawTitle.length > 28 ? rawTitle.slice(0, 28) + "…" : rawTitle;

              return (
                <div
                  key={p.id}
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    overflow: "hidden",
                    borderRadius: 2,
                  }}
                >
                  {/* BG image */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: cardImg
                        ? `url(${cardImg})`
                        : "linear-gradient(135deg,#1a2035,#0A0B14)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  {/* Gradient */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.76) 40%, rgba(0,0,0,0.10) 100%)",
                    }}
                  />
                  {/* Title + button */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      padding: "24px 20px",
                      zIndex: 1,
                    }}
                  >
                    <h3
                      style={{
                        ...CLAN,
                        fontSize: 18,
                        fontWeight: 800,
                        color: "#ffffff",
                        lineHeight: 1.25,
                        margin: "0 0 14px",
                      }}
                    >
                      {shortTitle}
                    </h3>
                    <Link
                      to="/think-pieces/$slug"
                      params={{ slug: p.slug }}
                      style={goldBtn}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#D5AF34";
                        e.currentTarget.style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "#D5AF34";
                      }}
                    >
                      READ MORE
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            disabled={index >= max}
            aria-label="Next"
            style={{
              position: "absolute",
              right: -40,
              zIndex: 2,
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: index >= max ? "rgba(0,0,0,0.18)" : "#D5AF34",
              border: "none",
              cursor: index >= max ? "default" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 22,
              fontWeight: 800,
              transition: "background 0.2s",
              flexShrink: 0,
            }}
          >
            ›
          </button>
        </div>

        {/* VIEW ALL ARTICLES — navy box centered */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 48 }}>
          <Link
            to="/think-pieces"
            style={navyBtn}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#2D2973";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#2D2973";
            }}
          >
            VIEW ALL ARTICLES
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   STATE COMPONENTS
   ══════════════════════════════════════════════════════════════ */
function LoadingState() {
  return (
    <div style={{ padding: "128px 0", textAlign: "center" }}>
      <div
        style={{
          display: "inline-block",
          width: 32,
          height: 32,
          border: "2px solid #D5AF34",
          borderTopColor: "transparent",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
        }}
      />
      <p style={{ ...CLAN, marginTop: 16, fontSize: 14, color: "#6b7280" }}>
        Loading article…
      </p>
    </div>
  );
}

function ErrorState({ message }) {
  return (
    <div style={{ padding: "128px 0", textAlign: "center" }}>
      <h1 style={{ ...CLAN, fontSize: 28, fontWeight: 800, color: "#2D2973" }}>
        Something went wrong
      </h1>
      <p style={{ ...CLAN, fontSize: 14, color: "#6b7280", marginTop: 8 }}>
        {message}
      </p>
      <Link
        to="/think-pieces"
        style={{
          ...CLAN,
          display: "inline-block",
          marginTop: 24,
          padding: "12px 32px",
          background: "#D5AF34",
          color: "#fff",
          fontWeight: 800,
          fontSize: 13,
          textDecoration: "none",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        Back to Think Pieces
      </Link>
    </div>
  );
}

function NotFoundState() {
  return (
    <div style={{ padding: "128px 0", textAlign: "center" }}>
      <h1 style={{ ...CLAN, fontSize: 28, fontWeight: 800, color: "#2D2973" }}>
        Article not found
      </h1>
      <Link
        to="/think-pieces"
        style={{
          ...CLAN,
          display: "inline-block",
          marginTop: 24,
          padding: "12px 32px",
          background: "#D5AF34",
          color: "#fff",
          fontWeight: 800,
          fontSize: 13,
          textDecoration: "none",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        Back to Think Pieces
      </Link>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════════════════ */
export default function ArticlePage({ slug }) {
  const { post, isLoading, error, notFound } = usePostBySlug(slug);

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState message={error.message} />;
  if (notFound || !post) return <NotFoundState />;

  const img = getFeaturedImage(post);
  const cat = getCategory(post);
  const author = getAuthorName(post);

  return (
    <>
      <ArticleHero post={post} img={img} cat={cat} />

      <article style={{ background: "#ffffff", padding: "80px 0" }}>
        <div style={{ maxWidth: "100%", margin: "0 auto", padding: "0 80px" }}>

          {/* Gold category */}
          {cat && (
            <p
              style={{
                ...CLAN,
                fontSize: 11,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                color: "#D5AF34",
                marginBottom: 12,
                marginTop: 0,
              }}
            >
              {cat}
            </p>
          )}

          {/* Title */}
          <h2
            style={{
              ...CLAN,
              fontSize: "clamp(24px, 3vw, 38px)",
              fontWeight: 800,
              color: "#2D2973",
              lineHeight: 1.2,
              margin: "0 0 16px",
            }}
            dangerouslySetInnerHTML={{ __html: post.title?.rendered || "" }}
          />

          {/* Author + date */}
          <p
            style={{
              ...CLAN,
              fontSize: 15,
              fontWeight: 800,
              color: "#D5AF34",
              margin: "0 0 40px",
            }}
          >
            By {author}
            {post.date && (
              <span style={{ color: "#9ca3af", fontWeight: 700, marginLeft: 12 }}>
                · {formatDate(post.date)}
              </span>
            )}
          </p>

          {/* Full article body — DOM trimmer removes only the WP injected block */}
          <ArticleBody html={post.content?.rendered || ""} />
        </div>
      </article>

      <RelatedCarousel currentSlug={slug} />
    </>
  );
}