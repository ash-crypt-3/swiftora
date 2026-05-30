import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero, type HeroSlide } from "@/components/Hero";
import { articles } from "@/lib/content";
import { MessageCircle } from "lucide-react";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { ClientMarquee } from "@/components/ClientMarquee";

// Asset Imports
import hero1 from "@/assets/heroes/hero-3.jpg";
import hero2 from "@/assets/heroes/hero-1.jpg";
import hero3 from "@/assets/heroes/hero-2.jpg";
import strategyBg from "@/assets/heroes/Home_Strategy_Section.png";
import consultingImg from "@/assets/heroes/Home_Consulting_Section.png";
import featuredEng1 from "@/assets/featured-engagements/Featured-Engagement-01-Title.jpg";
import featuredEng2 from "@/assets/featured-engagements/Featured-Engagement-02-Title.jpg";
import vpIcon1 from "@/assets/icons/Home_Value-Proposition-Icons-01.png";
import vpIcon2 from "@/assets/icons/Home_Value-Proposition-Icons-02.png";
import vpIcon3 from "@/assets/icons/Home_Value-Proposition-Icons-03.png";
import vpIcon4 from "@/assets/icons/Home_Value-Proposition-Icons-04.png";
import arrowIcon from "@/assets/icons/Home_Featured_Engagement_Arrow.png";
import socialFacebook from "@/assets/icons/Footer_Socio_Icons-01A.png";
import socialInstagram from "@/assets/icons/Footer_Socio_Icons-02A.png";
import socialX from "@/assets/icons/Footer_Socio_Icons-03A.png";
import socialLinkedin from "@/assets/icons/Footer_Socio_Icons-04A.png";
import socialYoutube from "@/assets/icons/Footer_Socio_Icons-05A.png";

export const Route = createFileRoute("/")({ component: HomePage });

const CLAN = { fontFamily: '"Clan Pro", sans-serif' };

const homeSlides: HeroSlide[] = [
  { eyebrow: "WELCOME!", lines: ["Strategise |", "Optimise |", "Realise"], image: hero1 },
  { eyebrow: "CONSULTING AREAS", lines: ["Strategy | Sales |", "Marketing |", "Research"], image: hero2 },
  { eyebrow: "OUR PROMISE", lines: ["Championing", "Your", "Growth"], image: hero3 },
  { eyebrow: "CONTACT US", lines: ["Let's Make", "Great Things", "Happen!"], image: hero1 },
];

const socialLinks = [
  { icon: socialFacebook, href: "https://www.facebook.com/swiftoraconsulting", label: "Facebook" },
  { icon: socialInstagram, href: "https://www.instagram.com/swiftoraconsulting", label: "Instagram" },
  { icon: socialX, href: "https://www.x.com/swiftoraconsulting", label: "X" },
  { icon: socialLinkedin, href: "https://www.linkedin.com/company/swiftoraconsulting", label: "LinkedIn" },
  { icon: socialYoutube, href: "https://www.youtube.com/@swiftoraconsulting", label: "YouTube" },
];

function usePad() {
  const { isMobile, isTablet } = useBreakpoint();
  return isMobile ? "0 20px" : isTablet ? "0 40px" : "0 80px";
}

function IntroSection() {
  const { isMobile } = useBreakpoint();
  const pad = usePad();
  return (
    <section style={{ background: "#2D2973", padding: isMobile ? "56px 0" : "96px 0" }}>
      <div style={{ padding: pad, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.25fr", gap: isMobile ? 32 : 80, alignItems: "center" }}>
        <h2 style={{ ...CLAN, fontStyle: "italic", fontWeight: "bold", fontSize: isMobile ? "clamp(26px, 7vw, 36px)" : "clamp(32px, 3.8vw, 52px)", color: "#ffffff", lineHeight: 1.1, margin: 0 }}>
          Cracking the code of<br />sales, marketing, and<br />business strategy
        </h2>
        <div>
          <p style={{ ...CLAN, fontSize: isMobile ? 15 : 17, fontWeight: "bold", color: "rgba(255,255,255,0.88)", lineHeight: 1.85, marginBottom: 20, textAlign: "justify" }}>
            You have the vision, the ambition, and the product or service. Still, great ideas do not automatically become great businesses. Somewhere between potential and performance, many organisations discover that passion alone does not balance spreadsheets, attract customers, or create sustainable growth. That missing ingredient is often strategy, clarity, and the ability to move intelligently in changing markets.
          </p>
          <p style={{ ...CLAN, fontSize: isMobile ? 15 : 17, fontWeight: "bold", color: "rgba(255,255,255,0.88)", lineHeight: 1.85, marginBottom: 40, textAlign: "justify" }}>
            At Swiftora Consulting Limited, we help businesses connect the dots between ambition and execution. Through strategy, market intelligence, branding, and operational insight, we turn complexity into clear direction. Because in today's business environment, working harder is admirable, but working smarter usually gets the invoice paid faster.
          </p>
          <Link to="/about" style={{ display: "inline-block", padding: "12px 36px", border: "2px solid #ffffff", color: "#ffffff", ...CLAN, fontWeight: "bold", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.12em", textDecoration: "none" }}>
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}

function ValuePropositionSection() {
  const { isMobile } = useBreakpoint();
  const pad = usePad();

  const valueItems = [
    { img: vpIcon2, label: "Precise Diagnosis" },
    { img: vpIcon3, label: "Market Intelligence" },
    { img: vpIcon4, label: "Adaptive Solutions" },
    { img: vpIcon1, label: "Accelerated Growth" },
  ];

  return (
    <section style={{ background: "#F2F5F9", padding: isMobile ? "56px 0" : "100px 0" }}>
      {isMobile ? (
        <div style={{ padding: pad, display: "flex", flexDirection: "column", gap: 40 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px 24px" }}>
            {valueItems.map(({ img, label }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 14 }}>
                <img src={img} alt={label} style={{ width: 64, height: 64, objectFit: "contain" }} />
                <h4 style={{ ...CLAN, fontWeight: "bold", fontSize: 11, color: "#2D2973", textTransform: "uppercase", letterSpacing: "0.06em", margin: 0 }}>{label}</h4>
              </div>
            ))}
          </div>
          <div>
            <h2 style={{ ...CLAN, fontWeight: "bold", fontSize: 24, color: "#2D2973", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 32, marginTop: 0 }}>VALUE PROPOSITION</h2>
            <p style={{ ...CLAN, fontSize: 15, fontWeight: "bold", color: "#4D4D4D", lineHeight: 1.75, marginBottom: 24, textAlign: "justify" }}>
              With custom solutions tailored to your unique needs, we use a blend of sharp insights, proven methods, and innovative thinking to solve even the toughest business problems.
            </p>
            <p style={{ ...CLAN, fontSize: 15, fontWeight: "bold", color: "#4D4D4D", lineHeight: 1.75, textAlign: "justify" }}>
              From increasing sales to refining your marketing and sharpening your strategic approach, we make the complex simple and the impossible possible.
            </p>
          </div>
          <div>
            <h2 style={{ ...CLAN, fontWeight: "bold", fontSize: 24, color: "#2D2973", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 28, marginTop: 0 }}>CONSULTING SERVICES</h2>
            <p style={{ ...CLAN, fontSize: 15, fontWeight: "bold", color: "#4D4D4D", lineHeight: 1.75, marginBottom: 40, textAlign: "justify" }}>
              Whether you are a startup seeking market entry, a mid-sized company looking to scale, or an established enterprise needing reinvention, we translate data into strategy, strategy into action, and action into tangible results.
            </p>
            <Link to="/our-services" style={{ display: "inline-block", padding: "12px 48px", border: "2px solid #D5AF34", color: "#D5AF34", ...CLAN, fontWeight: "bold", fontSize: 14, textTransform: "uppercase", letterSpacing: "0.12em", textDecoration: "none" }}>Explore</Link>
          </div>
          <div style={{ overflow: "hidden", borderRadius: 4 }}>
            <img src={consultingImg} alt="Consulting Team" style={{ width: "100%", height: "260px", objectFit: "cover", objectPosition: "center top", display: "block" }} />
          </div>
        </div>
      ) : (
        <div style={{ padding: pad, display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: "0 80px", alignItems: "start" }}>
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "52px 40px", marginBottom: 80 }}>
              {valueItems.map(({ img, label }) => (
                <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 14 }}>
                  <img src={img} alt={label} style={{ width: 90, height: 90, objectFit: "contain" }} />
                  <h4 style={{ ...CLAN, fontWeight: "bold", fontSize: 13, color: "#2D2973", textTransform: "uppercase", letterSpacing: "0.06em", margin: 0 }}>{label}</h4>
                </div>
              ))}
            </div>
            <h2 style={{ ...CLAN, fontWeight: "bold", fontSize: 36, color: "#2D2973", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 28, marginTop: 0 }}>CONSULTING SERVICES</h2>
            <p style={{ ...CLAN, fontSize: 18, fontWeight: "bold", color: "#4D4D4D", lineHeight: 1.75, marginBottom: 40, textAlign: "justify" }}>
              Whether you are a startup seeking market entry, a mid-sized company looking to scale, or an established enterprise needing reinvention, we translate data into strategy, strategy into action, and action into tangible results.
            </p>
            <Link to="/our-services" style={{ display: "inline-block", padding: "12px 48px", border: "2px solid #D5AF34", color: "#D5AF34", ...CLAN, fontWeight: "bold", fontSize: 14, textTransform: "uppercase", letterSpacing: "0.12em", textDecoration: "none" }}>Explore</Link>
          </div>
          <div>
            <h2 style={{ ...CLAN, fontWeight: "bold", fontSize: 36, color: "#2D2973", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 32, marginTop: 0 }}>VALUE PROPOSITION</h2>
            <p style={{ ...CLAN, fontSize: 18, fontWeight: "bold", color: "#4D4D4D", lineHeight: 1.75, marginBottom: 24, textAlign: "justify" }}>
              With custom solutions tailored to your unique needs, we use a blend of sharp insights, proven methods, and innovative thinking to solve even the toughest business problems.
            </p>
            <p style={{ ...CLAN, fontSize: 18, fontWeight: "bold", color: "#4D4D4D", lineHeight: 1.75, textAlign: "justify", marginBottom: 80 }}>
              From increasing sales to refining your marketing and sharpening your strategic approach, we make the complex simple and the impossible possible.
            </p>
            <div style={{ overflow: "hidden", borderRadius: 4 }}>
              <img src={consultingImg} alt="Consulting Team" style={{ width: "100%", height: "420px", objectFit: "cover", objectPosition: "center top", display: "block" }} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ConsultingServicesSection() { return null; }

function StrategySection() {
  const { isMobile, isTablet } = useBreakpoint();

  const strategyPoints = [
    { left: "Business Review & Audit", right: "Organizational Design & Development" },
    { left: "Business Model Innovation", right: "Strategy Implementation Management" },
    { left: "Strategic Planning & Review", right: "Market Entry, Expansion & Diversification" },
    { left: "Business Recovery Planning", right: "Revenue Growth & Commercial Effectiveness" },
  ];

  const serviceColumns = [
    { title: "Sales", items: ["Sales Training", "Pitching Outsourcing", "Pitch Deck Development", "Sales Auditing & Planning", "Key Account Management", "Customer Experience & Retention", "Channel & Distribution Optimization"] },
    { title: "Communication", items: ["Content Writing", "Communication Planning", "Business Writing Workshops", "Public Speaking & Presentation", "Communication Skills training", "Corporate Communications Audits", "Communication Strategy Development"] },
    { title: "Research", items: ["Market Research", "Feasibility Studies", "Business Analysis", "Market & Industry Insights", "Data Collection & Analysis", "Business Plan Development", "Business Ideation and Validation"] },
    { title: "Marketing", items: ["Brand Workshop", "Lead Generation", "Personal Branding", "Marketing Planning", "Go-To-Market Strategy", "Marketing Review & Audit", "Value Proposition Development"] },
  ];

  const bgAttachment = isMobile || isTablet ? "scroll" : "fixed";

  return (
    <section style={{ backgroundImage: `url(${strategyBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundAttachment: bgAttachment }}>
      {isMobile ? (
        <div style={{ padding: "56px 20px 48px" }}>
          <h2 style={{ ...CLAN, fontSize: 22, fontWeight: "bold", color: "#D5AF34", textTransform: "uppercase", margin: "0 0 28px", letterSpacing: "0.02em" }}>STRATEGY</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[...strategyPoints.map(p => p.left), ...strategyPoints.map(p => p.right)].map((item, i) => (
              <li key={i} style={{ color: "#fff", fontSize: 15, ...CLAN, fontWeight: "bold", marginBottom: 16, display: "flex", alignItems: "flex-start", lineHeight: 1.4 }}>
                <span style={{ color: "#D5AF34", marginRight: 10, fontSize: 18, flexShrink: 0, fontWeight: "bold" }}>•</span>{item}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: `80px ${isTablet ? "40px" : "80px"} 72px`, display: "grid", gridTemplateColumns: isTablet ? "120px 1fr 1fr" : "160px 1fr 1fr", gap: "0 40px", alignItems: "center" }}>
          <h2 style={{ ...CLAN, fontSize: "26px", fontWeight: "bold", color: "#D5AF34", textTransform: "uppercase", margin: 0, lineHeight: 1.15, letterSpacing: "0.02em", wordBreak: "break-word" }}>STRATEGY</h2>
          {[strategyPoints.map(p => p.left), strategyPoints.map(p => p.right)].map((col, ci) => (
            <ul key={ci} style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {col.map((item, i) => (
                <li key={i} style={{ color: "#fff", fontSize: 18, ...CLAN, fontWeight: "bold", marginBottom: 20, display: "flex", alignItems: "flex-start", lineHeight: 1.3 }}>
                  <span style={{ color: "#D5AF34", marginRight: 10, fontSize: 20, flexShrink: 0, marginTop: 1, fontWeight: "bold" }}>•</span>{item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      )}
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "1fr 1fr" : "repeat(4, 1fr)", gap: 4 }}>
        {serviceColumns.map((col) => (
          <div key={col.title}>
            <div style={{ background: "#D5AF34", padding: "18px 16px", textAlign: "center" }}>
              <h3 style={{ ...CLAN, fontSize: isMobile ? 20 : 32, fontWeight: "bold", color: "#ffffff", margin: 0, letterSpacing: "0.01em" }}>{col.title}</h3>
            </div>
            <div style={{ background: "#E8EDF3", padding: isMobile ? "16px 12px 20px" : "24px 16px 28px", textAlign: "center" }}>
              {col.items.map((item) => (
                <p key={item} style={{ ...CLAN, fontSize: isMobile ? 12 : 14, fontWeight: "bold", color: "#2D2973", lineHeight: 1.5, margin: "0 0 14px" }}>{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ThinkPiecesSection() {
  const { isMobile } = useBreakpoint();
  const pad = usePad();

  const items = articles.slice(0, 2).map((a) => ({
    id: a.slug,
    slug: a.slug,
    title: a.title,
    author: a.author ?? "Swiftora Team",
    photo: a.featuredImage || (a as any).image || (a as any).thumbnail || (a as any).coverImage || null,
  }));

  return (
    <section style={{ background: "#ffffff", padding: isMobile ? "56px 0" : "80px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: pad }}>
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 20 : 0, marginBottom: 48 }}>
          <h2 style={{ ...CLAN, fontWeight: "bold", fontSize: isMobile ? 22 : 32, color: "#2D2973", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>
            THINK PIECES & INSIGHTS
          </h2>
          <Link to="/think-pieces" style={{ padding: "10px 24px", border: "2px solid #D5AF34", color: "#D5AF34", textDecoration: "none", fontWeight: "bold", fontSize: 13, whiteSpace: "nowrap", ...CLAN }}>
            VIEW ALL POSTS
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: isMobile ? 36 : 48 }}>
          {items.map((a) => (
            <Link key={a.id} to="/think-pieces/$slug" params={{ slug: a.slug }} style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}>
              <div style={{ aspectRatio: "16/10", overflow: "hidden", marginBottom: 20, background: "#E8EDF3", flexShrink: 0 }}>
                {a.photo ? (
                  <img
                    src={a.photo}
                    alt={a.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.style.display = "flex";
                        parent.style.alignItems = "center";
                        parent.style.justifyContent = "center";
                        parent.innerHTML = '<span style="font-family:Clan Pro,sans-serif;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.2em;color:#2D2973;opacity:0.4">Think Piece</span>';
                      }
                    }}
                  />
                ) : (
                  <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #E8EDF3, #d0d8e8)" }}>
                    <span style={{ ...CLAN, fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: "#2D2973", opacity: 0.4 }}>Think Piece</span>
                  </div>
                )}
              </div>
              <h3 style={{ ...CLAN, fontWeight: "bold", fontSize: isMobile ? 18 : 22, color: "#2D2973", lineHeight: 1.35, marginBottom: 10, marginTop: 0 }} dangerouslySetInnerHTML={{ __html: a.title }} />
              <p style={{ ...CLAN, fontSize: 13, fontWeight: 700, color: "#888", marginBottom: 12, marginTop: 0 }}>By {a.author}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ ...CLAN, fontWeight: "bold", fontSize: 14, color: "#D5AF34", letterSpacing: "0.06em", textTransform: "uppercase" }}>Read More</span>
                <img src={arrowIcon} alt="" style={{ width: 22, height: 22, objectFit: "contain" }} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientSection() {
  const { isMobile } = useBreakpoint();
  const pad = usePad();
  return (
    <section style={{ background: "#ffffff", padding: isMobile ? "48px 0" : "64px 0", borderTop: "1px solid #f0f0f0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: pad, marginBottom: 24 }}>
        <h2 style={{ ...CLAN, fontWeight: "bold", fontSize: isMobile ? 22 : 32, color: "#2D2973", textTransform: "uppercase", letterSpacing: "0.05em", margin: 0 }}>OUR CLIENTS</h2>
      </div>
      <ClientMarquee />
    </section>
  );
}

function FeaturedEngagements() {
  const { isMobile } = useBreakpoint();
  const pad = usePad();

  const engagements = [
    { img: featuredEng1, title: "Marketing Gated Communities in Kenya", tag: "Real Estate", to: "/ameer-developers" },
    { img: featuredEng2, title: "Transforming Maternal Health Outcomes", tag: "Not for Profit", to: "/zuri-nzilani-foundation" },
  ];

  const arrowImgStyle: React.CSSProperties = { width: 20, height: 20, objectFit: "contain" };

  return (
    <section style={{ background: "#F2F5F9", padding: isMobile ? "56px 0" : "80px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: pad }}>
        <h2 style={{ ...CLAN, fontWeight: "bold", fontSize: isMobile ? 22 : 32, color: "#2D2973", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 32 }}>FEATURED ENGAGEMENTS</h2>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 20 : 24 }}>
          {engagements.map((e) => (
            <Link key={e.to} to={e.to as any} style={{ position: "relative", display: "block", aspectRatio: "16/9", overflow: "hidden" }}>
              <img src={e.img} alt={e.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, padding: isMobile ? 18 : 32 }}>
                <h3 style={{ color: "#fff", fontWeight: "bold", fontSize: isMobile ? 15 : 22, textTransform: "uppercase", marginBottom: 8, lineHeight: 1.3 }}>{e.title}</h3>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "#D5AF34", fontWeight: "bold", fontSize: 12, textTransform: "uppercase" }}>{e.tag}</span>
                  <img src={arrowIcon} alt="" style={arrowImgStyle} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const { isMobile } = useBreakpoint();

  const waStyle: React.CSSProperties = {
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
    textDecoration: "none",
  };

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
      <a href="https://wa.me/254729698380" style={waStyle}>
        <MessageCircle size={isMobile ? 24 : 32} fill="currentColor" />
      </a>
    </main>
  );
}