import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { usePostBySlug, usePosts } from "@/hooks/useWordPress";
import { getFeaturedImage, getAuthorName, getCategory, formatDate } from "@/services/wordpress";
import { articles } from "@/lib/content";
import "@/styles/wordpress-content.css";
import heroBg from "@/assets/heroes/hero-2.jpg";

const CLAN = { fontFamily: '"Clan Pro", sans-serif' };

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
}

/* ─────────────────────────────────────────────────────────────
   Clean WP excerpt — strip tags and the trailing […]
   ───────────────────────────────────────────────────────────── */
function cleanExcerpt(raw) {
  return (raw || "")
    .replace(/<[^>]+>/g, "")
    .replace(/\[&hellip;\]|\[…\]|\[\.\.\.\]/g, "")
    .replace(/&hellip;/g, "")
    .trim();
}

/* ─────────────────────────────────────────────────────────────
   Parse Elementor WP HTML into { heading, paragraphs[] } sections
   Only text-editor widgets AFTER the image widget are used —
   everything before (duplicate title, intro, image, author) is skipped.
   ───────────────────────────────────────────────────────────── */
function parseWpContent(html) {
  if (!html) return [];

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const SKIP_PHRASES = ["read other think pieces", "view all articles"];
  const shouldSkip = (text) => {
    const t = text.trim().toLowerCase();
    return SKIP_PHRASES.some((p) => t === p || t === p + " →" || t === "→ " + p);
  };

  const sections = [];
  let current = { heading: "", paragraphs: [] };

  const flush = () => {
    if (current.heading || current.paragraphs.length > 0) {
      sections.push(current);
      current = { heading: "", paragraphs: [] };
    }
  };

  const processNode = (el) => {
    const tag = el.tagName.toLowerCase();
    const text = (el.textContent || "").trim();
    if (!text || shouldSkip(text)) return;

    if (tag === "h2" || tag === "h3" || tag === "h4") {
      flush();
      current.heading = text;
    } else if (tag === "p") {
      current.paragraphs.push(text);
    } else if (tag === "ul" || tag === "ol") {
      const items = Array.from(el.querySelectorAll("li"))
        .map((li) => "• " + (li.textContent || "").trim())
        .filter(Boolean);
      current.paragraphs.push(...items);
    } else if (tag === "blockquote") {
      current.paragraphs.push(`"${text}"`);
    }
  };

  const isElementor = !!doc.querySelector("[data-elementor-type]");

  if (isElementor) {
    const imageWidget = doc.querySelector('[data-widget_type="image.default"]');
    const allTextEditors = Array.from(
      doc.querySelectorAll('[data-widget_type="text-editor.default"]')
    );
    const bodyEditors = imageWidget
      ? allTextEditors.filter(
          (w) => imageWidget.compareDocumentPosition(w) & Node.DOCUMENT_POSITION_FOLLOWING
        )
      : allTextEditors.slice(1);

    bodyEditors.forEach((widget) => {
      const container = widget.querySelector(".elementor-widget-container");
      if (container) Array.from(container.children).forEach(processNode);
    });
  } else {
    Array.from(doc.body.children).forEach(processNode);
  }

  flush();
  return sections;
}

/* ─────────────────────────────────────────────────────────────
   Article body — shared by local and WP articles
   ───────────────────────────────────────────────────────────── */
function ArticleBody({ body }) {
  return (
    <div
      style={{
        ...CLAN,
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 1.9,
        color: "#1a1a2e",
        textAlign: "justify",
      }}
    >
      {body.map((section, si) => (
        <div key={si} style={{ marginBottom: 8 }}>
          {section.heading && (
            <h3
              style={{
                ...CLAN,
                fontSize: 20,
                fontWeight: 800,
                color: "#2D2973",
                margin: "32px 0 16px",
                lineHeight: 1.3,
              }}
            >
              {section.heading}
            </h3>
          )}
          {section.paragraphs.map((para, pi) => (
            <p
              key={pi}
              style={{
                ...CLAN,
                fontSize: 16,
                fontWeight: 700,
                color: "#1a1a2e",
                lineHeight: 1.9,
                margin: "0 0 18px",
                textAlign: "justify",
              }}
            >
              {para}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   PARALLAX HERO — full screen image + gold excerpt strip
   ───────────────────────────────────────────────────────────── */
function ArticleHero({ title, excerpt, img, cat, isHtml = false }) {
  const bgRef = useRef(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;
    const onScroll = () => {
      if (bgRef.current)
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.38}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  const headingPadding = isMobile ? "100px 24px 40px" : "140px 80px 60px";
  const stripPadding = isMobile ? "32px 24px" : "52px 80px";
  const excerptFontSize = isMobile ? 15 : 17;

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: isMobile ? "70vh" : "100vh",
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
          src={img || heroBg}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,11,20,0.62)" }} />
      </div>

      {/* Title area */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: headingPadding,
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
        {isHtml ? (
          <h1
            style={{
              ...CLAN,
              fontWeight: 800,
              fontSize: isMobile ? "clamp(26px, 7vw, 38px)" : "clamp(32px, 4.5vw, 62px)",
              color: "#ffffff",
              lineHeight: 1.15,
              margin: 0,
              maxWidth: 900,
            }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        ) : (
          <h1
            style={{
              ...CLAN,
              fontWeight: 800,
              fontSize: isMobile ? "clamp(26px, 7vw, 38px)" : "clamp(32px, 4.5vw, 62px)",
              color: "#ffffff",
              lineHeight: 1.15,
              margin: 0,
              maxWidth: 900,
            }}
          >
            {title}
          </h1>
        )}
      </div>

      {/* Gold excerpt strip */}
      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{ background: "#D5AF34", padding: stripPadding }}>
          <p
            style={{
              ...CLAN,
              fontSize: excerptFontSize,
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

/* ─────────────────────────────────────────────────────────────
   RELATED CAROUSEL
   ───────────────────────────────────────────────────────────── */
function RelatedCarousel({ currentSlug }) {
  const { posts, isLoading } = usePosts({ perPage: 12 });
  const [index, setIndex] = useState(0);
  const isMobile = useIsMobile();

  const wpItems = (posts || [])
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({
      id: `wp-${p.id}`,
      slug: p.slug,
      title: (p.title?.rendered || "").replace(/<[^>]+>/g, ""),
      img: getFeaturedImage(p),
    }));

  const localItems = articles
    .filter((a) => a.slug !== currentSlug)
    .map((a) => ({
      id: `local-${a.slug}`,
      slug: a.slug,
      title: a.title,
      img: a.featuredImage,
    }));

  const others = [...localItems, ...wpItems];
  const visible = isMobile ? 1 : 3;
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
    padding: "14px 40px",
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
    <section style={{ background: "#ffffff", padding: isMobile ? "48px 0 64px" : "72px 0 88px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: isMobile ? "0 16px" : "0 56px" }}>
        <h2
          style={{
            ...CLAN,
            fontSize: isMobile ? "clamp(18px, 5vw, 24px)" : "clamp(22px, 2.8vw, 34px)",
            fontWeight: 800,
            color: "#D5AF34",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            margin: "0 0 28px",
          }}
        >
          READ OTHER THINK PIECES
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: isMobile ? 16 : 20,
          }}
        >
          {shown.map((item) => {
            const maxLen = isMobile ? 60 : 28;
            const shortTitle =
              item.title.length > maxLen ? item.title.slice(0, maxLen) + "…" : item.title;
            return (
              <div
                key={item.id}
                style={{
                  position: "relative",
                  aspectRatio: isMobile ? "16/9" : "4/3",
                  overflow: "hidden",
                  borderRadius: 2,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: item.img
                      ? `url(${item.img})`
                      : "linear-gradient(135deg,#1a2035,#0A0B14)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.76) 40%, rgba(0,0,0,0.10) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    padding: isMobile ? "20px 16px" : "24px 20px",
                    zIndex: 1,
                  }}
                >
                  <h3
                    style={{
                      ...CLAN,
                      fontSize: isMobile ? 16 : 18,
                      fontWeight: 800,
                      color: "#ffffff",
                      lineHeight: 1.25,
                      margin: "0 0 12px",
                    }}
                  >
                    {shortTitle}
                  </h3>
                  <Link
                    to="/think-pieces/$slug"
                    params={{ slug: item.slug }}
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

        {isMobile && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginTop: 20,
            }}
          >
            <button
              onClick={prev}
              disabled={index === 0}
              aria-label="Previous"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: index === 0 ? "rgba(0,0,0,0.12)" : "#D5AF34",
                border: "none",
                cursor: index === 0 ? "default" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 20,
                fontWeight: 800,
              }}
            >
              ‹
            </button>
            <span style={{ ...CLAN, fontSize: 13, color: "#9ca3af", fontWeight: 700 }}>
              {index + 1} / {others.length}
            </span>
            <button
              onClick={next}
              disabled={index >= max}
              aria-label="Next"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: index >= max ? "rgba(0,0,0,0.12)" : "#D5AF34",
                border: "none",
                cursor: index >= max ? "default" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 20,
                fontWeight: 800,
              }}
            >
              ›
            </button>
          </div>
        )}

        <div style={{ display: "flex", justifyContent: "center", marginTop: isMobile ? 32 : 48 }}>
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

/* ─────────────────────────────────────────────────────────────
   LOCAL ARTICLE PAGE
   ───────────────────────────────────────────────────────────── */
function LocalArticlePage({ article }) {
  const isMobile = useIsMobile();
  const articlePadding = isMobile ? "48px 0" : "80px 0";
  const bodyPadding = isMobile ? "0 24px" : "0 80px";

  return (
    <>
      <ArticleHero
        title={article.title}
        excerpt={article.excerpt}
        img={article.featuredImage}
        cat={article.category}
        isHtml={false}
      />
      <article style={{ background: "#ffffff", padding: articlePadding }}>
        <div style={{ maxWidth: "100%", margin: "0 auto", padding: bodyPadding }}>
          {article.category && (
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
              {article.category}
            </p>
          )}
          <h2
            style={{
              ...CLAN,
              fontSize: "clamp(22px, 5vw, 38px)",
              fontWeight: 800,
              color: "#2D2973",
              lineHeight: 1.2,
              margin: "0 0 16px",
            }}
          >
            {article.title}
          </h2>
          <p
            style={{
              ...CLAN,
              fontSize: 14,
              fontWeight: 800,
              color: "#D5AF34",
              margin: "0 0 36px",
              display: "flex",
              flexWrap: "wrap",
              gap: "4px 0",
            }}
          >
            By {article.author}
            <span style={{ color: "#9ca3af", fontWeight: 700, marginLeft: 10 }}>
              · {article.date}
            </span>
          </p>
          <ArticleBody body={article.body} />
        </div>
      </article>
      <RelatedCarousel currentSlug={article.slug} />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   WP ARTICLE PAGE — matches local article layout exactly
   Hero → gold box → category → title → author/date → body
   ───────────────────────────────────────────────────────────── */
function WpArticlePage({ slug }) {
  const { post, isLoading, error, notFound } = usePostBySlug(slug);
  const isMobile = useIsMobile();

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState message={error.message} />;
  if (notFound || !post) return <NotFoundState />;

  const img = getFeaturedImage(post);
  const cat = getCategory(post);
  const author = getAuthorName(post);
  const date = formatDate(post.date);
  const title = (post.title?.rendered || "").replace(/<[^>]+>/g, "");
  const excerpt = cleanExcerpt(post.excerpt?.rendered);
  const body = parseWpContent(post.content?.rendered || "");

  const articlePadding = isMobile ? "48px 0" : "80px 0";
  const bodyPadding = isMobile ? "0 24px" : "0 80px";

  return (
    <>
      <ArticleHero
        title={post.title?.rendered || ""}
        excerpt={excerpt}
        img={img}
        cat={cat}
        isHtml={true}
      />
      <article style={{ background: "#ffffff", padding: articlePadding }}>
        <div style={{ maxWidth: "100%", margin: "0 auto", padding: bodyPadding }}>
          {/* Category */}
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
              fontSize: "clamp(22px, 5vw, 38px)",
              fontWeight: 800,
              color: "#2D2973",
              lineHeight: 1.2,
              margin: "0 0 16px",
            }}
          >
            {title}
          </h2>
          {/* Author + date */}
          <p
            style={{
              ...CLAN,
              fontSize: 14,
              fontWeight: 800,
              color: "#D5AF34",
              margin: "0 0 36px",
              display: "flex",
              flexWrap: "wrap",
              gap: "4px 0",
            }}
          >
            By {author}
            {date && (
              <span style={{ color: "#9ca3af", fontWeight: 700, marginLeft: 10 }}>
                · {date}
              </span>
            )}
          </p>
          {/* Body */}
          <ArticleBody body={body} />
        </div>
      </article>
      <RelatedCarousel currentSlug={slug} />
    </>
  );
}

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
      <p style={{ ...CLAN, marginTop: 16, fontSize: 14, color: "#6b7280" }}>Loading article…</p>
    </div>
  );
}

function ErrorState({ message }) {
  return (
    <div style={{ padding: "128px 24px", textAlign: "center" }}>
      <h1 style={{ ...CLAN, fontSize: 28, fontWeight: 800, color: "#2D2973" }}>
        Something went wrong
      </h1>
      <p style={{ ...CLAN, fontSize: 14, color: "#6b7280", marginTop: 8 }}>{message}</p>
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
    <div style={{ padding: "128px 24px", textAlign: "center" }}>
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

export default function ArticlePage({ slug }) {
  const localArticle = articles.find((a) => a.slug === slug);
  if (localArticle) return <LocalArticlePage article={localArticle} />;
  return <WpArticlePage slug={slug} />;
}