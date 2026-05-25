import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero, type HeroSlide } from "@/components/Hero";
import { usePosts } from "@/hooks/useWordPress";
import { getFeaturedImage } from "@/services/wordpress";
import { articles } from "@/lib/content";
import { MessageCircle } from "lucide-react";
import { useBreakpoint } from "@/hooks/useBreakpoint";

// Asset Imports
import hero1 from "@/assets/heroes/hero-3.jpg";
import hero2 from "@/assets/heroes/hero-1.jpg";
import hero3 from "@/assets/heroes/hero-2.jpg";
import strategyBg from "@/assets/heroes/Home_Strategy_Section.png";
import consultingImg from "@/assets/heroes/Home_Consulting_Section.png";
import featuredEng1 from "@/assets/featured-engagements/Featured-Engagement-01-Title.jpg";
import featuredEng2 from "@/assets/featured-engagements/Featured-Engagement-02-Title.jpg";

const WP = "https://swiftoraconsulting.co.ke/wp-content/uploads";
const WP_ARROW = `${WP}/2025/04/Home_Featured_Engagement_Arrow.png`;

export const Route = createFileRoute("/")({
  component: HomePage,
});

const CLAN = { fontFamily: '"Clan Pro", sans-serif' };

const homeSlides: HeroSlide[] = [
  { eyebrow: "WELCOME!", lines: ["Strategise |", "Optimise |", "Realise"], image: hero1 },
  { eyebrow: "CONSULTING AREAS", lines: ["Strategy | Sales |", "Marketing |", "Research"], image: hero2 },
  { eyebrow: "OUR PROMISE", lines: ["Championing", "Your", "Growth"], image: hero3 },
  { eyebrow: "CONTACT US", lines: ["Let's Make", "Great Things", "Happen!"], image: hero1 },
];

/* ── SECTION 1: INTRO (NAVY) ── */
function IntroSection() {
  const { isMobile, isTablet } = useBreakpoint();
  const pad = isMobile ? "0 20px" : isTablet ? "0 32px" : "0 40px";
  const vPad = isMobile ? "56px 0" : "96px 0";

  return (
    <section style={{ background: "#2D2973", padding: vPad }}>
      <div style={{
        maxWidth: 1240,
        margin: "0 auto",
        padding: pad,
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
        gap: isMobile ? 32 : 64,
        alignItems: "center",
      }}>
        <h2 style={{
          ...CLAN,
          fontStyle: "italic",
          fontWeight: "bold",
          fontSize: isMobile ? "clamp(26px, 7vw, 36px)" : "clamp(32px, 3.8vw, 52px)",
          color: "#ffffff",
          lineHeight: 1.1,
          margin: 0,
        }}>
          Cracking the code of<br />sales, marketing, and<br />business strategy
        </h2>
        <div>
          <p style={{ ...CLAN, fontSize: isMobile ? 15 : 17, fontWeight: "bold", color: "rgba(255,255,255,0.88)", lineHeight: 1.85, marginBottom: 20 }}>
            You've got the vision, the passion, and the product/service.<br />But something is missing. That something is the secret sauce that transforms good ideas into great organisations.
          </p>
          <p style={{ ...CLAN, fontSize: isMobile ? 15 : 17, fontWeight: "bold", color: "rgba(255,255,255,0.88)", lineHeight: 1.85, marginBottom: 40 }}>
            Welcome to the ultimate decoding lab for your business! At Swiftora Consulting Limited, we believe that success is no longer about working harder—it's about working smarter.
          </p>
          <Link to="/about" style={{
            display: "inline-block",
            padding: "12px 36px",
            border: "2px solid #ffffff",
            color: "#ffffff",
            ...CLAN,
            fontWeight: "bold",
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            textDecoration: "none",
          }}>
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── SECTIONS 2 + 3: VALUE PROPOSITION & CONSULTING SERVICES ── */
function ValuePropositionSection() {
  const { isMobile, isTablet } = useBreakpoint();
  const pad = isMobile ? "0 20px" : isTablet ? "0 32px" : "0 40px";
  const vPad = isMobile ? "56px 0" : "100px 0";

  const valueItems = [
    { img: `${WP}/2025/05/Home_Value-Proposition-Icons-02.png`, label: "Precise Diagnosis" },
    { img: `${WP}/2025/05/Home_Value-Proposition-Icons-03.png`, label: "Market Intelligence" },
    { img: `${WP}/2025/05/Home_Value-Proposition-Icons-04.png`, label: "Adaptive Solutions" },
    { img: `${WP}/2025/05/Home_Value-Proposition-Icons-01.png`, label: "Accelerated Growth" },
  ];

  return (
    <section style={{ background: "#F2F5F9", padding: vPad }}>

      {/* Row 1: icons + VALUE PROPOSITION */}
      <div style={{
        maxWidth: 1240,
        margin: "0 auto",
        padding: pad,
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1.25fr",
        gap: isMobile ? 40 : 80,
        alignItems: "start",
        marginBottom: isMobile ? 48 : 80,
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: isMobile ? "32px 24px" : "52px 40px" }}>
          {valueItems.map(({ img, label }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 14 }}>
              <img src={img} alt={label} style={{ width: isMobile ? 64 : 90, height: isMobile ? 64 : 90, objectFit: "contain" }} />
              <h4 style={{
                ...CLAN,
                fontWeight: "bold",
                fontSize: isMobile ? 11 : 13,
                color: "#2D2973",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                margin: 0,
              }}>{label}</h4>
            </div>
          ))}
        </div>

        <div>
          <h2 style={{
            ...CLAN,
            fontWeight: "bold",
            fontSize: isMobile ? 24 : 36,
            color: "#2D2973",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: 32,
            marginTop: 0,
          }}>
            VALUE PROPOSITION
          </h2>
          <p style={{ ...CLAN, fontSize: isMobile ? 15 : 18, fontWeight: "bold", color: "#4D4D4D", lineHeight: 1.75, marginBottom: 24, textAlign: "justify" }}>
            With custom solutions tailored to your unique needs, we use a blend of sharp insights, proven methods, and innovative thinking to solve even the toughest business problems.
          </p>
          <p style={{ ...CLAN, fontSize: isMobile ? 15 : 18, fontWeight: "bold", color: "#4D4D4D", lineHeight: 1.75, textAlign: "justify" }}>
            From increasing sales to refining your marketing and sharpening your strategic approach, we make the complex simple and the impossible possible.
          </p>
        </div>
      </div>

      {/* Row 2: CONSULTING SERVICES + image */}
      <div style={{
        maxWidth: 1240,
        margin: "0 auto",
        padding: pad,
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? 36 : 80,
        alignItems: "center",
      }}>
        <div>
          <h2 style={{
            ...CLAN,
            fontWeight: "bold",
            fontSize: isMobile ? 24 : 36,
            color: "#2D2973",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: 28,
            marginTop: 0,
          }}>
            CONSULTING SERVICES
          </h2>
          <p style={{ ...CLAN, fontSize: isMobile ? 15 : 18, fontWeight: "bold", color: "#4D4D4D", lineHeight: 1.75, marginBottom: 40, textAlign: "justify" }}>
            Whether you are a startup seeking market entry, a mid-sized company looking to scale, or an established enterprise needing reinvention, we translate data into strategy, strategy into action, and action into tangible results.
          </p>
          <Link to="/our-services" style={{
            display: "inline-block",
            padding: "12px 48px",
            border: "2px solid #D5AF34",
            color: "#D5AF34",
            ...CLAN,
            fontWeight: "bold",
            fontSize: 14,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            textDecoration: "none",
          }}>
            Explore
          </Link>
        </div>

        <div style={{ overflow: "hidden", borderRadius: 4 }}>
          <img
            src={consultingImg}
            alt="Consulting Team"
            style={{ width: "100%", height: isMobile ? "260px" : "420px", objectFit: "cover", objectPosition: "center top", display: "block" }}
          />
        </div>
      </div>

    </section>
  );
}

function ConsultingServicesSection() { return null; }

/* ── SECTION 4: STRATEGY ── */
function StrategySection() {
  const { isMobile, isTablet } = useBreakpoint();
  const pad = isMobile ? "0 20px" : isTablet ? "0 32px" : "0 40px";

  const strategyPoints = [
    { left: "Business Review & Audit",      right: "Organizational Design & Development" },
    { left: "Business Model Innovation",     right: "Strategy Implementation Management" },
    { left: "Strategic Planning & Review",   right: "Market Entry, Expansion & Diversification" },
    { left: "Business Recovery Planning",    right: "Revenue Growth & Commercial Effectiveness" },
  ];

  const serviceColumns = [
    { title: "Sales",         items: ["Sales Training", "Pitching Outsourcing", "Pitch Deck Development", "Sales Auditing & Planning", "Key Account Management", "Customer Experience & Retention", "Channel & Distribution Optimization"] },
    { title: "Communication", items: ["Content Writing", "Communication Planning", "Business Writing Workshops", "Public Speaking & Presentation", "Communication Skills training", "Corporate Communications Audits", "Communication Strategy Development"] },
    { title: "Research",      items: ["Market Research", "Feasibility Studies", "Business Analysis", "Market & Industry Insights", "Data Collection & Analysis", "Business Plan Development", "Business Ideation and Validation"] },
    { title: "Marketing",     items: ["Brand Workshop", "Lead Generation", "Personal Branding", "Marketing Planning", "Go-To-Market Strategy", "Marketing Review & Audit", "Value Proposition Development"] },
  ];

  // backgroundAttachment: fixed causes iOS Safari bugs — disable on mobile/tablet
  const bgAttachment = isMobile || isTablet ? "scroll" : "fixed";

  return (
    <section style={{
      backgroundImage: `url(${strategyBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: bgAttachment,
    }}>

      {/* STRATEGY heading + bullet columns */}
      {isMobile ? (
        // Mobile: stack heading then all points in one column
        <div style={{ padding: "56px 20px 48px" }}>
          <h2 style={{ ...CLAN, fontSize: 22, fontWeight: "bold", color: "#D5AF34", textTransform: "uppercase", margin: "0 0 28px", letterSpacing: "0.02em" }}>
            STRATEGY
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[...strategyPoints.map(p => p.left), ...strategyPoints.map(p => p.right)].map((item, i) => (
              <li key={i} style={{ color: "#fff", fontSize: 15, ...CLAN, fontWeight: "bold", marginBottom: 16, display: "flex", alignItems: "flex-start", lineHeight: 1.4 }}>
                <span style={{ color: "#D5AF34", marginRight: 10, fontSize: 18, flexShrink: 0, fontWeight: "bold" }}>•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        // Tablet / Desktop: 3-col grid
        <div style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: `80px ${isTablet ? "32px" : "40px"} 72px`,
          display: "grid",
          gridTemplateColumns: isTablet ? "120px 1fr 1fr" : "160px 1fr 1fr",
          gap: "0 40px",
          alignItems: "center",
        }}>
          <h2 style={{ ...CLAN, fontSize: "26px", fontWeight: "bold", color: "#D5AF34", textTransform: "uppercase", margin: 0, lineHeight: 1.15, letterSpacing: "0.02em", wordBreak: "break-word" }}>
            STRATEGY
          </h2>
          {[strategyPoints.map(p => p.left), strategyPoints.map(p => p.right)].map((col, ci) => (
            <ul key={ci} style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {col.map((item, i) => (
                <li key={i} style={{ color: "#fff", fontSize: 18, ...CLAN, fontWeight: "bold", marginBottom: 20, display: "flex", alignItems: "flex-start", lineHeight: 1.3 }}>
                  <span style={{ color: "#D5AF34", marginRight: 10, fontSize: 20, flexShrink: 0, marginTop: 1, fontWeight: "bold" }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      )}

      {/* 4 service columns */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "1fr 1fr" : "repeat(4, 1fr)",
        gap: 4,
      }}>
        {serviceColumns.map((col) => (
          <div key={col.title}>
            <div style={{ background: "#D5AF34", padding: "18px 16px", textAlign: "center" }}>
              <h3 style={{ ...CLAN, fontSize: isMobile ? 20 : 32, fontWeight: "bold", color: "#ffffff", margin: 0, letterSpacing: "0.01em" }}>
                {col.title}
              </h3>
            </div>
            <div style={{ background: "#E8EDF3", padding: isMobile ? "16px 12px 20px" : "24px 16px 28px", textAlign: "center" }}>
              {col.items.map((item) => (
                <p key={item} style={{ ...CLAN, fontSize: isMobile ? 12 : 14, fontWeight: "bold", color: "#2D2973", lineHeight: 1.5, margin: "0 0 14px" }}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

/* ── SECTION 5: THINK PIECES ── */
function ThinkPiecesSection() {
  const { isMobile, isTablet } = useBreakpoint();
  const pad = isMobile ? "0 20px" : isTablet ? "0 32px" : "0 40px";
  const { posts, isLoading } = usePosts({ perPage: 2 });
  const items = !isLoading && posts.length
    ? posts.slice(0, 2).map((p: any) => ({ id: p.id, slug: p.slug, title: p.title?.rendered || "", image: getFeaturedImage(p) }))
    : articles.slice(0, 2).map((a) => ({ id: a.slug, slug: a.slug, title: a.title, image: null }));

  return (
    <section style={{ background: "#ffffff", padding: isMobile ? "56px 0" : "80px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: pad }}>
        {/* Header row — stacks on mobile */}
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? 20 : 0,
          marginBottom: 48,
        }}>
          <h2 style={{ ...CLAN, fontWeight: "bold", fontSize: isMobile ? 22 : 32, color: "#2D2973", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
            THINK PIECES & INSIGHTS
          </h2>
          <Link to="/think-pieces" style={{ padding: "10px 24px", border: "2px solid #D5AF34", color: "#D5AF34", textDecoration: "none", fontWeight: "bold", fontSize: 13, whiteSpace: "nowrap" }}>
            VIEW ALL POSTS
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))", gap: isMobile ? 36 : 48 }}>
          {items.map((a) => (
            <Link key={a.id} to="/think-pieces/$slug" params={{ slug: a.slug }} style={{ textDecoration: "none" }}>
              <div style={{ aspectRatio: "16/10", overflow: "hidden", marginBottom: 24, background: "#f0f0f0" }}>
                {a.image && <img src={a.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
              </div>
              <h3 style={{ ...CLAN, fontWeight: "bold", fontSize: isMobile ? 18 : 22, color: "#2D2973", lineHeight: 1.3, marginBottom: 12 }} dangerouslySetInnerHTML={{ __html: a.title }} />
              <span style={{ ...CLAN, fontWeight: "bold", fontSize: 15, color: "#D5AF34" }}>Read More</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SECTION 6: CLIENTS ── */
const CLIENT_CDN = "https://swiftoraconsulting.co.ke/wp-content/uploads/2025/05";
const clientLogos = [
  `${CLIENT_CDN}/Home_Clientelle-01.png`,
  `${CLIENT_CDN}/Home_Clientelle-02.png`,
  `${CLIENT_CDN}/Home_Clientelle-03.png`,
  `${CLIENT_CDN}/Home_Clientelle-04.png`,
  `${CLIENT_CDN}/Home_Clientelle-05.png`,
  `${CLIENT_CDN}/Home_Clientelle-06.png`,
  `${CLIENT_CDN}/Home_Clientelle-07.png`,
  `${CLIENT_CDN}/Home_Clientelle-08.png`,
  `${CLIENT_CDN}/Home_Clientelle-09.png`,
  `${CLIENT_CDN}/Home_Clientelle-10.png`,
];

const MARQUEE_STYLE = `
@keyframes swiftora-marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.swiftora-marquee-track {
  display: flex;
  width: max-content;
  animation: swiftora-marquee 28s linear infinite;
}
.swiftora-marquee-track:hover {
  animation-play-state: paused;
}
`;

function ClientSection() {
  const { isMobile, isTablet } = useBreakpoint();
  const pad = isMobile ? "0 20px" : isTablet ? "0 32px" : "0 40px";
  const doubled = [...clientLogos, ...clientLogos];

  return (
    <section style={{ background: "#ffffff", padding: isMobile ? "48px 0" : "64px 0", borderTop: "1px solid #f0f0f0", overflow: "hidden" }}>
      <style>{MARQUEE_STYLE}</style>

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: pad, marginBottom: 40 }}>
        <h2 style={{ ...CLAN, fontWeight: "bold", fontSize: isMobile ? 22 : 32, color: "#2D2973", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
          OUR CLIENTS
        </h2>
      </div>

      <div style={{ overflow: "hidden", width: "100%" }}>
        <div className="swiftora-marquee-track">
          {doubled.map((src, i) => (
            <div key={i} style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "0 28px" : "0 48px" }}>
              <img
                src={src}
                alt="Client logo"
                style={{ height: isMobile ? 36 : 52, width: "auto", objectFit: "contain", opacity: 0.85, filter: "grayscale(20%)", transition: "opacity 0.2s, filter 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "1"; (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0.85"; (e.currentTarget as HTMLImageElement).style.filter = "grayscale(20%)"; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SECTION 7: FEATURED ENGAGEMENTS ── */
function FeaturedEngagements() {
  const { isMobile, isTablet } = useBreakpoint();
  const pad = isMobile ? "0 20px" : isTablet ? "0 32px" : "0 40px";

  const engagements = [
    { img: featuredEng1, title: "Marketing Gated Communities in Kenya", tag: "Real Estate", to: "/ameer-developers" },
    { img: featuredEng2, title: "Transforming Maternal Health Outcomes", tag: "Not for Profit", to: "/zuri-nzilani-foundation" },
  ];

  return (
    <section style={{ background: "#F2F5F9", padding: isMobile ? "56px 0" : "80px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: pad }}>
        <h2 style={{ ...CLAN, fontWeight: "bold", fontSize: isMobile ? 22 : 32, color: "#2D2973", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 32 }}>
          FEATURED ENGAGEMENTS
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 20 : 24 }}>
          {engagements.map((e) => (
            <Link key={e.to} to={e.to as any} style={{ position: "relative", display: "block", aspectRatio: "16/9", overflow: "hidden" }}>
              <img src={e.img} alt={e.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, padding: isMobile ? 18 : 32 }}>
                <h3 style={{ color: "#fff", fontWeight: "bold", fontSize: isMobile ? 15 : 22, textTransform: "uppercase", marginBottom: 8, lineHeight: 1.3 }}>{e.title}</h3>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "#D5AF34", fontWeight: "bold", fontSize: 12, textTransform: "uppercase" }}>{e.tag}</span>
                  <img src={WP_ARROW} alt="" style={{ width: 20, height: 20 }} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#2D2973", padding: "40px 0", color: "#fff" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 20px", display: "flex", flexDirection: "column", gap: 40 }} />
    </footer>
  );
}

export default function HomePage() {
  const { isMobile } = useBreakpoint();

  return (
    <main style={{ fontWeight: "bold" }}>
      <Hero variant="home" slides={homeSlides} cta={{ label: "Learn More", to: "/about" }} />
      <IntroSection />
      <ValuePropositionSection />
      <ConsultingServicesSection />
      <StrategySection />
      <ThinkPiecesSection />
      <ClientSection />
      <FeaturedEngagements />
      <Footer />
      <a
        href="https://wa.me/254729698380"
        style={{
          position: "fixed",
          bottom: isMobile ? 20 : 32,
          right: isMobile ? 16 : 32,
          background: "#25D366",
          color: "#fff",
          padding: isMobile ? 12 : 16,
          borderRadius: "50%",
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MessageCircle size={isMobile ? 24 : 32} fill="currentColor" />
      </a>
    </main>
  );
}