import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Hero, type HeroSlide } from "@/components/Hero";
import { ArrowRight } from "lucide-react";
import { usePosts } from "@/hooks/useWordPress";
import { getFeaturedImage, getCategory, formatDate } from "@/services/wordpress";
import { articles } from "@/lib/content";
import { ClientMarquee } from "@/components/ClientMarquee";
import hero1 from "@/assets/heroes/hero-1.jpg";
import hero2 from "@/assets/heroes/hero-2.jpg";
import hero3 from "@/assets/heroes/hero-3.jpg";

const WP = "https://swiftoraconsulting.co.ke/wp-content/uploads";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swiftora Consulting Limited: Championing Your Business Growth" },
      { name: "description", content: "Accelerate your business growth in Kenya with Swiftora Consulting. Expert strategy, sales, marketing & research solutions." },
    ],
  }),
  component: HomePage,
});

const homeSlides: HeroSlide[] = [
  { eyebrow: "WELCOME!", lines: ["Strategise |", "Optimise |", "Realise"], image: hero1 },
  { eyebrow: "CONSULTING AREAS", lines: ["Strategy | Sales |", "Marketing |", "Research"], image: hero2 },
  { eyebrow: "OUR PROMISE", lines: ["Championing", "Your", "Growth"], image: hero3 },
  { eyebrow: "CONTACT US", lines: ["Let's Make", "Great Things", "Happen!"], image: hero1 },
];

/* ── "Cracking the code" — white background, 2-col, brand colors, matches WP ── */
function AboutSection() {
  return (
    <section style={{ background: "#ffffff" }} className="section-pad">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* Left — large heading in navy, matching WP */}
        <div>
          <h2 style={{
            fontFamily: '"Clan Pro", sans-serif',
            fontWeight: 700,
            fontSize: "clamp(28px, 3.5vw, 46px)",
            color: "#2D2973",
            lineHeight: 1.2,
            margin: 0,
          }}>
            Cracking the code of sales, marketing, and business strategy
          </h2>
        </div>

        {/* Right — body text + gold-bordered button, matching WP */}
        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 36 }}>
            <p style={{ fontSize: 15, color: "#4D4D4D", lineHeight: 1.85, margin: 0 }}>
              You've got the vision, the passion, and the product/service.<br />
              But something is missing. That something is the secret sauce that transforms good ideas into great organisations.
            </p>
            <p style={{ fontSize: 15, color: "#4D4D4D", lineHeight: 1.85, margin: 0 }}>
              Welcome to the ultimate decoding lab for your business! At Swiftora Consulting Limited, we believe that success is no longer about working harder—it's about working smarter. We are here to hand you the cheat sheet and guide you through every twist and turn of business management.
            </p>
          </div>
          {/* Gold outlined "Discover More" button — matches WP exactly */}
          <Link
            to="/about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              border: "2px solid #D5AF34",
              color: "#D5AF34",
              background: "transparent",
              padding: "13px 32px",
              borderRadius: 4,
              fontFamily: '"Clan Pro", sans-serif',
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.05em",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#D5AF34";
              e.currentTarget.style.color = "#0A0B14";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#D5AF34";
            }}
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Value Prop — icons + navy text block ── */
const valueItems = [
  { icon: `${WP}/2025/05/Home_Value-Proposition-Icons-02.png`, title: "Precise Diagnosis" },
  { icon: `${WP}/2025/05/Home_Value-Proposition-Icons-03.png`, title: "Market Intelligence" },
  { icon: `${WP}/2025/05/Home_Value-Proposition-Icons-04.png`, title: "Adaptive Solutions" },
  { icon: `${WP}/2025/05/Home_Value-Proposition-Icons-01.png`, title: "Accelerated Growth" },
];

function ValueProp() {
  return (
    <>
      <section style={{ background: "#ffffff", borderTop: "1px solid #f0eff9" }}>
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center stagger">
            {valueItems.map(({ icon, title }) => (
              <div key={title} className="animate-fade-up flex flex-col items-center gap-4">
                <img src={icon} alt={title} style={{ width: 72, height: 72, objectFit: "contain" }} loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = "none"; }} />
                <h6 style={{ fontFamily: '"Clan Pro", sans-serif', fontWeight: 700, fontSize: 13, color: "#2D2973", margin: 0 }}>{title}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#2D2973" }} className="section-pad">
        <div className="max-w-[860px] mx-auto text-center">
          <h2 style={{ fontFamily: '"Clan Pro", sans-serif', fontWeight: 700, fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em", color: "#ffffff", marginBottom: 24 }}>
            VALUE PROPOSITION
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.80)", lineHeight: 1.9, marginBottom: 20 }}>
            With custom solutions tailored to your unique needs, we use a blend of sharp insights, proven methods, and innovative thinking to solve even the toughest business problems.
          </p>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.80)", lineHeight: 1.9 }}>
            From increasing sales to refining your marketing and sharpening your strategic approach, we make the complex simple and the impossible possible.
          </p>
        </div>
      </section>
    </>
  );
}

/* ── Consulting Services tabs ── */
const services = [
  { id: "strategy", label: "STRATEGY", items: ["Business Review & Audit", "Business Model Innovation", "Strategic Planning & Review", "Business Recovery Planning", "Organizational Design & Development", "Strategy Implementation Management", "Market Entry, Expansion & Diversification", "Revenue Growth & Commercial Effectiveness"] },
  { id: "sales", label: "Sales", items: ["Sales Training", "Pitching Outsourcing", "Pitch Deck Development", "Sales Auditing & Planning", "Key Account Management", "Customer Experience & Retention", "Channel & Distribution Optimization"] },
  { id: "communication", label: "Communication", items: ["Content Writing", "Communication Planning", "Business Writing Workshops", "Public Speaking & Presentation", "Communication Skills training", "Corporate Communications Audits", "Communication Strategy Development"] },
  { id: "research", label: "Research", items: ["Market Research", "Feasibility Studies", "Business Analysis", "Market & Industry Insights", "Data Collection & Analysis", "Business Plan Development", "Business Ideation and Validation"] },
  { id: "marketing", label: "Marketing", items: ["Brand Workshop", "Lead Generation", "Personal Branding", "Marketing Planning", "Go-To-Market Strategy", "Marketing Review & Audit", "Value Proposition Development"] },
];

function ServicesSection() {
  const [active, setActive] = useState("strategy");
  const tab = services.find((s) => s.id === active)!;
  return (
    <section className="section-pad tex-dots" style={{ background: "#f7f6f2" }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 style={{ fontFamily: '"Clan Pro", sans-serif', fontWeight: 700, fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em", color: "#2D2973", marginBottom: 16 }}>
            CONSULTING SERVICES
          </h2>
          <p style={{ fontSize: 16, color: "#4D4D4D", lineHeight: 1.8, maxWidth: 780, margin: "0 auto 32px" }}>
            Whether you are a startup seeking market entry, a mid-sized company looking to scale, or an established enterprise needing reinvention, we translate data into strategy, strategy into action, and action into tangible results.
          </p>
          <Link to="/our-services" className="btn-gold">Explore</Link>
        </div>

        <div className="flex flex-wrap" style={{ borderBottom: "2px solid #2D2973" }}>
          {services.map((s) => (
            <button key={s.id} onClick={() => setActive(s.id)}
              style={{
                padding: "12px 20px",
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                fontWeight: 600,
                fontFamily: '"Clan Pro", sans-serif',
                background: active === s.id ? "#2D2973" : "transparent",
                color: active === s.id ? "#ffffff" : "#2D2973",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div key={active} className="mt-8 grid md:grid-cols-2 gap-x-12 gap-y-2 animate-fade-in">
          {tab.items.map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 14, color: "#4D4D4D", padding: "8px 0", borderBottom: "1px solid #e8e8e8" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#D5AF34", flexShrink: 0, marginTop: 6 }} />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Think Pieces ── */
function ThinkPiecesSection() {
  const { posts, isLoading } = usePosts({ perPage: 2 });
  const fallback = articles.slice(0, 2).map((a) => ({
    id: a.slug, slug: a.slug, _wp: false as const,
    title: a.title, excerpt: a.excerpt, image: null as string | null,
  }));
  const items = !isLoading && posts.length
    ? posts.slice(0, 2).map((p: any) => ({
        id: p.id, slug: p.slug, _wp: true as const,
        title: p.title?.rendered || "",
        excerpt: p.excerpt?.rendered || "",
        image: getFeaturedImage(p),
      }))
    : fallback;

  return (
    <section className="section-pad" style={{ background: "#ffffff" }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 style={{ fontFamily: '"Clan Pro", sans-serif', fontWeight: 700, fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em", color: "#2D2973" }}>
            THINK PIECES & INSIGHTS
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 stagger">
          {items.map((a) => (
            <Link key={a.id} to="/think-pieces/$slug" params={{ slug: a.slug }}
              style={{ display: "block", background: "#ffffff", overflow: "hidden", borderRadius: 6, border: "1px solid #ececec", textDecoration: "none" }}
              className="shadow-card hover-lift animate-fade-up"
            >
              <div style={{
                width: "100%", paddingTop: "56.25%",
                background: a.image ? `url(${a.image}) center/cover no-repeat` : "linear-gradient(135deg,#1a2035,#2D2973)",
              }} />
              <div style={{ padding: 24 }}>
                {a._wp
                  ? <h5 style={{ fontFamily: '"Clan Pro", sans-serif', fontWeight: 700, color: "#0A0B14", lineHeight: 1.4, fontSize: 18, margin: 0 }} dangerouslySetInnerHTML={{ __html: a.title }} />
                  : <h5 style={{ fontFamily: '"Clan Pro", sans-serif', fontWeight: 700, color: "#0A0B14", lineHeight: 1.4, fontSize: 18, margin: 0 }}>{a.title}</h5>}
                {a._wp
                  ? <div style={{ marginTop: 12, fontSize: 14, color: "#606161", lineHeight: 1.75 }} className="line-clamp-3" dangerouslySetInnerHTML={{ __html: a.excerpt }} />
                  : <p style={{ marginTop: 12, fontSize: 14, color: "#606161", lineHeight: 1.75 }} className="line-clamp-3">{(a as any).excerpt || ""}</p>}
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 20, fontSize: 13, fontWeight: 600, color: "#2D2973" }}>
                  Read More <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/think-pieces" style={{ fontSize: 13, fontWeight: 600, color: "#2D2973", textDecoration: "none" }} className="link-underline">
            view all posts
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Featured Engagements — full image cards with gradient overlay, matching WP ── */
const engagements = [
  {
    image: `${WP}/2025/05/Portfolio-01.png`,
    title: "Marketing Gated Communities in Kenya",
    category: "Real Estate",
    to: "/ameer-developers",
  },
  {
    image: `${WP}/2025/05/Portfolio-06.png`,
    title: "Transforming Maternal Health Outcomes through Strategic Messaging",
    category: "Not for Profit",
    to: "/zuri-nzilani-foundation",
  },
];

function FeaturedEngagements() {
  return (
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
              {/* Background image */}
              <img
                src={e.image}
                alt={e.title}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                onError={(ev) => { ev.currentTarget.style.display = "none"; }}
              />
              {/* Gradient overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(10,11,20,0.88) 0%, rgba(10,11,20,0.40) 55%, transparent 100%)",
              }} />
              {/* Content */}
              <div style={{ position: "relative", zIndex: 2, padding: "28px 28px 28px 28px" }}>
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
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero variant="home" slides={homeSlides} cta={{ label: "Learn More", to: "/about" }} />
      <AboutSection />
      <ValueProp />
      <ServicesSection />
      <ThinkPiecesSection />
      <ClientMarquee />
      <FeaturedEngagements />
    </>
  );
}