import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import foundingHero from "@/assets/founding-story-hero.jpg";
import aboutUsHero from "@/assets/heroes/AboutUs_Header_Image.jpg";
import whyChooseUsBg from "@/assets/heroes/AboutUs_Why_Choose_Us-01.svg";
import profileHeaderBg from "@/assets/heroes/AboutUs_Profile_Headers.png";
import stephenImg from "@/assets/team/stephen-osumba.jpg";
import nicodemusImg from "@/assets/team/nicodemus-nyambok.jpg";
import geoffreyImg from "@/assets/team/geoffrey-korio.jpg";
import lilianImg from "@/assets/team/lilian-mukami.jpg";

const WP = "https://swiftoraconsulting.co.ke/wp-content/uploads";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us: Integrated Business Strategy & Research Solutions Company | Swiftora Consulting" },
      { name: "description", content: "Learn about Swiftora Consulting's mission to champion business growth in Kenya. Our expert team drives success through smart strategies." },
      { property: "og:title", content: "About Us: Integrated Business Strategy & Research Solutions Company" },
      { property: "og:description", content: "Learn about Swiftora Consulting's mission to champion business growth in Kenya. Our expert team drives success through smart strategies." },
    ],
  }),
  component: AboutPage,
});

type TeamMember = {
  id: number;
  name: string;
  title: string;
  image: string;
  bioParagraphs: string[];
  quote: string;
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Stephen Osomba",
    title: "Sales & Business Strategy",
    image: stephenImg,
    bioParagraphs: [
      "Stephen is a seasoned and diligent consultant specialising in strategy, sales, research, and marketing based in Nairobi, Kenya. With over ten years of experience, he has built a solid reputation as a trusted expert with exceptional analytical prowess, organisational acumen, and a knack for crafting transformative business strategies.",
      "His career spans roles in both commercial and non-profit organisations, where he has excelled as a resident specialist and contracted consultant. His expertise goes beyond marketing, encompassing strategic planning, sales optimisation, and data-driven research.",
      "Stephen holds a Bachelor of Science in Communication & Public Relations from Moi University, a Postgraduate Diploma in Marketing Management from the Kenya Institute of Management, and a Master of Science in Marketing from the University of Nairobi.",
      "Currently, Stephen leads the Business Strategy & Research portfolio at Swiftora Consulting Limited, where he provides tailored solutions designed to align with SMEs' mission, goals, and industry landscapes.",
      "Outside of work, Stephen is an avid learner and is passionate about sustainability issues. He enjoys embarking on expeditions, embracing the unknown, and finding inspiration in the world around him.",
    ],
    quote: "Strategic, analytical, and results-oriented, Stephen Osomba excels in transforming complex challenges into actionable strategies that drive business growth and long-term impact.",
  },
  {
    id: 2,
    name: "Nicodemus Nyambok",
    title: "Data Analysis & Reporting",
    image: nicodemusImg,
    bioParagraphs: [
      "Nicodemus Nyambok is a skilled data analyst and business intelligence expert at Swiftora Consulting. He specialises in transforming raw data into clear, actionable insights that enable organisations to make smarter, evidence-based decisions and drive measurable business outcomes.",
      "With a solid background in economics and statistics, Nicodemus brings both quantitative rigour and practical business acumen to every engagement. His work spans market research, financial modelling, competitive intelligence, and the development of interactive dashboards.",
      "Nicodemus holds a degree in Economics & Statistics and is certified in Business Analytics. He brings over eight years of experience working across sectors including financial services, FMCG, and development organisations.",
      "At Swiftora Consulting, Nicodemus ensures that every strategic recommendation is grounded in credible data and robust analysis.",
      "Beyond his professional work, Nicodemus is passionate about leveraging technology and data to address socioeconomic challenges in Africa.",
    ],
    quote: "Data-driven and detail-oriented, Nicodemus Nyambok transforms complex datasets into clear insights that power confident, strategic business decisions.",
  },
  {
    id: 3,
    name: "Geoffrey Korio",
    title: "Communication & Research",
    image: geoffreyImg,
    bioParagraphs: [
      "Geoffrey Korio is a communications strategist and research lead at Swiftora Consulting. He specialises in helping organisations develop clear, compelling messaging frameworks and execute communication strategies that resonate with their target audiences.",
      "With a background in communication and media studies, Geoffrey brings a sharp editorial instinct and a researcher's discipline to every engagement. His work spans corporate communications, content strategy, stakeholder messaging, and both qualitative and quantitative research.",
      "Geoffrey holds a degree in Communication & Media Studies and is certified in Strategic Communications. He has over seven years of experience working with organisations across the private sector, civil society, and development space.",
      "At Swiftora Consulting, Geoffrey bridges the gap between research and communication — ensuring that insights are translated into narratives that are credible, relevant, and impactful.",
      "Outside of work, Geoffrey is passionate about storytelling and the power of language to shape perspectives and drive change.",
    ],
    quote: "Thoughtful, precise, and audience-focused, Geoffrey Korio crafts communication strategies that turn complex ideas into compelling narratives that move people to action.",
  },
  {
    id: 4,
    name: "Lilian Mukami",
    title: "Marketing & Finance",
    image: lilianImg,
    bioParagraphs: [
      "Lilian Mukami is a dual-discipline specialist in marketing strategy and financial analysis at Swiftora Consulting. Her unique skill set allows her to bridge the gap between marketing ambitions and financial reality.",
      "With a background in finance and digital marketing, Lilian brings both commercial discipline and creative thinking to her work. She helps organisations design go-to-market strategies, build customer acquisition and retention frameworks, and evaluate the financial return on their marketing activities.",
      "Lilian holds a degree in Finance and is a Certified Digital Marketing Specialist. She has over six years of experience working across sectors including retail, financial services, and professional services.",
      "At Swiftora Consulting, Lilian ensures that marketing strategies are not only creative and customer-centred but also financially sound and aligned with the organisation's growth objectives.",
      "Beyond her professional work, Lilian is passionate about empowering women in business and finance.",
    ],
    quote: "Analytical yet creative, Lilian Mukami develops marketing strategies that are as financially sound as they are customer-centred — delivering growth that is both ambitious and achievable.",
  },
];

const corporatePillars = [
  { title: "Our Mission",          body: "To deliver customised, practical strategies that drive growth, optimise performance, and create lasting value for our clients.",                            imgSrc: `${WP}/2025/04/AboutUs_Corporate_Overview_Icons-04A.png` },
  { title: "Our Vision",           body: "To be the trusted partner organisations turn to for unlocking their full potential, crafting pathways to sustainable success.",                           imgSrc: `${WP}/2025/04/AboutUs_Corporate_Overview_Icons-03A.png` },
  { title: "Philosophy & Culture", body: "We believe in diligence, reliability, and collaboration cultivating a culture that values diverse perspectives and inspires creativity.",                  imgSrc: `${WP}/2025/04/AboutUs_Corporate_Overview_Icons-01A.png` },
  { title: "Our Promise",          body: "When the going gets tough, we step in with solutions to keep you ahead for the long haul — and we'll be with you every step of the way.",               imgSrc: `${WP}/2025/04/AboutUs_Corporate_Overview_Icons-02A.png` },
];

const bodyText: React.CSSProperties = {
  fontFamily: '"Clan Pro", sans-serif',
  fontWeight: 700,
  fontSize: "clamp(14px, 2vw, 16px)",
  color: "#4D4D4D",
  lineHeight: 1.85,
  marginBottom: 20,
  textAlign: "justify",
};

const responsiveStyles = `
  @media (max-width: 768px) {
    .hero-content-padding { padding: 0 20px !important; }
    .hero-heading { font-size: clamp(28px, 6vw, 42px) !important; }
    .two-tone-grid { grid-template-columns: 1fr !important; }
    .two-tone-padding { padding: 32px 24px !important; }
    .two-tone-text { font-size: 16px !important; }
    .section-padding { padding: 50px 20px !important; }
    .corporate-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
    .corporate-icon { width: 100px !important; height: 100px !important; }
    .team-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; }
    .founding-hero { height: 300px !important; }
    .founding-heading { font-size: 24px !important; left: 24px !important; bottom: 24px !important; }
    .founding-content { padding: 40px 20px !important; }
    .modal-padding { padding: 64px 24px 32px !important; }
  }
  @media (max-width: 480px) {
    .hero-label { font-size: 9px !important; letter-spacing: 0.2em !important; }
    .team-grid { grid-template-columns: 1fr !important; }
    .corporate-heading { font-size: 20px !important; letter-spacing: 0.15em !important; }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    .corporate-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
  }
`;

/* ── HERO — parallax with full image visible ── */
function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        // Gentle parallax — image moves slower than scroll so it stays visible
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      {/*
        Container is taller than the visible area so parallax movement
        doesn't expose blank space at edges. Image starts slightly above
        viewport and moves down slowly on scroll.
      */}
      <div style={{ position: "relative", height: "clamp(420px, 65vh, 640px)", overflow: "hidden" }}>
        {/* Parallax wrapper — larger than container so movement stays within bounds */}
        <div
          ref={bgRef}
          style={{
            position: "absolute",
            top: "-10%",
            left: 0,
            width: "100%",
            height: "120%",
            willChange: "transform",
          }}
        >
          <img
            src={aboutUsHero}
            alt="About Us"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
              display: "block",
            }}
          />
        </div>

        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.42)", zIndex: 1 }} />

        {/* Text overlay */}
        <div
          className="hero-content-padding"
          style={{
            position: "absolute", inset: 0, zIndex: 2,
            display: "flex", flexDirection: "column", justifyContent: "center",
            padding: "0 40px", maxWidth: 1240, margin: "0 auto", left: 0, right: 0,
          }}
        >
          <p className="hero-label" style={{ fontFamily: '"Clan Pro", sans-serif', fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.3em", color: "#ffffff", marginBottom: 20, marginTop: 0 }}>
            ABOUT US
          </p>
          <h1 className="hero-heading" style={{ fontFamily: '"Clan Pro", sans-serif', fontWeight: 700, fontSize: "clamp(32px, 5vw, 64px)", color: "#D5AF34", lineHeight: 1.15, margin: 0 }}>
            Your Goals Inspire Us.<br />
            Your Success Defines Us.
          </h1>
        </div>
      </div>

      {/* Two-tone strip */}
      <div style={{ background: "#E8EEF7", padding: "0 clamp(20px, 5vw, 40px)" }}>
        <div className="two-tone-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", maxWidth: 1160, margin: "0 auto" }}>
          <div className="two-tone-padding" style={{ background: "#D5AF34", padding: "48px 44px" }}>
            <p className="two-tone-text" style={{ fontFamily: '"Clan Pro", sans-serif', fontSize: 18, fontWeight: 700, fontStyle: "italic", color: "#ffffff", lineHeight: 1.75, margin: 0 }}>
              What started as a small group of passionate problem-solvers has grown into a trusted consultancy with a reputation for delivering customized solutions and measurable success for over 10 years.
            </p>
          </div>
          <div className="two-tone-padding" style={{ background: "#2D2973", padding: "48px 44px" }}>
            <p className="two-tone-text" style={{ fontFamily: '"Clan Pro", sans-serif', fontSize: 18, fontWeight: 700, fontStyle: "italic", color: "#ffffff", lineHeight: 1.75, margin: 0 }}>
              From our very first project to today, we've remained committed to one core belief: no challenge is too big, no detail too small, and no goal out of reach. This is Swiftora Way. Get Ahead, For Good.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CORPORATE OVERVIEW ── */
function CorporateOverviewSection() {
  return (
    <section className="section-padding" style={{ background: "#E8EEF7", padding: "80px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
        <h2 className="corporate-heading" style={{ fontFamily: '"Clan Pro", sans-serif', fontWeight: 700, fontSize: "clamp(20px, 3.5vw, 28px)", color: "#2D2973", textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: 32, marginTop: 0 }}>
          CORPORATE OVERVIEW
        </h2>
        <div style={{ marginBottom: 40 }}>
          <p style={bodyText}>
            Swiftora Consulting Limited is a dynamic company providing integrated business strategy and research solutions. We understand that thriving in today's competitive landscape requires more than just effort; it demands insight, sharp thinking, and precision. That's why we specialise in sales, marketing, strategy, and research, delivering solutions tailored to your unique needs and positioning your organisation for sustained growth and prosperity.
          </p>
          <p style={{ ...bodyText, marginBottom: 0 }}>
            With a blend of creativity, multi-sectoral expertise, and extensive experience, we help our clients stay ahead of the curve, make smarter decisions, and achieve tangible results. Whether you are looking to optimise performance, design an impactful marketing campaign, or build a future-proof strategy, we are the partner you can rely on. At pivotal moments, we turn complexity into clarity and challenges into opportunities.
          </p>
        </div>
        <a
          href="https://swiftoraconsulting.co.ke/wp-content/uploads/2025/05/Swiftora-Consulting-Limited-Company-Profile-Digital.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block", padding: "11px 32px", border: "2px solid #D5AF34", color: "#D5AF34", fontFamily: '"Clan Pro", sans-serif', fontWeight: 700, fontSize: "clamp(11px, 2vw, 13px)", textTransform: "uppercase", letterSpacing: "0.12em", textDecoration: "none", marginBottom: 48, transition: "all 0.2s ease" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#D5AF34"; e.currentTarget.style.color = "#ffffff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#D5AF34"; }}
        >
          Download Profile
        </a>
        <div className="corporate-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
          {corporatePillars.map((p) => (
            <div key={p.title} style={{ textAlign: "center" }}>
              <img className="corporate-icon" src={p.imgSrc} alt={p.title} style={{ width: 180, height: 180, objectFit: "contain", margin: "0 auto 24px" }} />
              <h3 style={{ fontFamily: '"Clan Pro", sans-serif', fontWeight: 700, fontSize: "clamp(12px, 2vw, 14px)", color: "#2D2973", marginBottom: 16, marginTop: 0, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {p.title}
              </h3>
              <p style={{ fontFamily: '"Clan Pro", sans-serif', fontWeight: 700, fontSize: "clamp(13px, 2vw, 14px)", color: "#4D4D4D", lineHeight: 1.7, margin: 0 }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FOUNDING STORY ── */
function FoundingStorySection() {
  return (
    <section style={{ background: "#f7f6f2" }}>
      <div className="founding-hero" style={{ position: "relative", width: "100%", height: 440, overflow: "hidden" }}>
        <img src={foundingHero} alt="Founding story" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)" }} />
        <div className="founding-heading" style={{ position: "absolute", bottom: 48, left: 48 }}>
          <h2 style={{ fontFamily: '"Clan Pro", sans-serif', fontWeight: 700, fontSize: "clamp(24px, 4vw, 38px)", color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.25em", margin: 0 }}>
            OUR FOUNDING STORY
          </h2>
        </div>
      </div>
      <div className="founding-content" style={{ maxWidth: 1240, margin: "0 auto", padding: "64px 40px" }}>
        <p style={bodyText}>Our journey began in 2013, with the idea of establishing a consultancy first mooted in a student hostel during our college days at Moi University, Eldoret. However, the dream was deferred until 21 October 2015, when the first consultancy was formed, focusing solely on marketing. This continued for nine years, and before the 10th anniversary we decided to change our business model, strategic approach and brand.</p>
        <p style={bodyText}>Throughout our years of experience, we observed countless organizations, particularly SMEs, struggling to align their marketing efforts, sales strategies, and long-term goals. The gap was clear: they needed a partner who could not only navigate these complexities but also transform them into opportunities.</p>
        <p style={bodyText}>Our founders, with backgrounds in strategy, sales, marketing, and research, recognised it was time to create a consultancy that would bring a fresh perspective to the table. Armed with years of industry experience, a passion for innovation, and a drive to support African enterprises, we set out to build something different — a firm that doesn't just offer solutions but truly partners with clients to build lasting success.</p>
        <p style={bodyText}>From humble beginnings, we quickly discovered that the key to growth wasn't just about numbers — it was about creating authentic connections, understanding the intricacies of each business, and offering customized strategies that drive results.</p>
        <p style={{ ...bodyText, marginBottom: 0 }}>Today, we are proud to have evolved into a trusted consultancy with a reputation for helping businesses unlock their potential, solve their most pressing challenges, and achieve their goals. Our journey is ongoing, but our mission remains the same: to be the guiding force behind your business's success. Let's continue this journey together. The best is yet to come.</p>
      </div>
    </section>
  );
}

/* ── TEAM — perfect circles with name/title below ── */
function TeamSection() {
  const [active, setActive] = useState<TeamMember | null>(null);

  return (
    <section className="section-padding" style={{ background: "#ffffff", padding: "80px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
        <h2 style={{ fontFamily: '"Clan Pro", sans-serif', fontWeight: 700, fontSize: "clamp(20px, 3vw, 26px)", color: "#2D2973", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 48, marginTop: 0 }}>
          OUR TEAM
        </h2>

        <div className="team-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
          {teamMembers.map((m) => (
            <div
              key={m.id}
              onClick={() => setActive(m)}
              style={{ cursor: "pointer", textAlign: "center" }}
            >
              {/*
                Perfect circle:
                - Fixed explicit width and height (not percentage-based paddingTop trick)
                  so the circle is never cut at any side.
                - borderRadius: "50%" on a known square = guaranteed circle.
                - mx auto to center.
              */}
              <div
                style={{
                  width: 180,
                  height: 180,
                  borderRadius: "50%",
                  overflow: "hidden",
                  margin: "0 auto 20px",
                  border: "3px solid #D5AF34",
                  boxShadow: "0 4px 20px rgba(45,41,115,0.12)",
                  transition: "box-shadow 0.25s, transform 0.25s",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(45,41,115,0.22)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(45,41,115,0.12)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                <img
                  src={m.image}
                  alt={m.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                    display: "block",
                    transition: "transform 0.35s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.06)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                />
              </div>

              <h3 style={{ fontFamily: '"Clan Pro", sans-serif', fontWeight: 800, fontSize: 16, color: "#2D2973", marginBottom: 4, marginTop: 0, lineHeight: 1.3 }}>
                {m.name}
              </h3>
              <p style={{ fontFamily: '"Clan Pro", sans-serif', fontWeight: 600, fontSize: 12, color: "#D5AF34", marginBottom: 12, marginTop: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {m.title}
              </p>
              <button
                style={{ fontFamily: '"Clan Pro", sans-serif', fontSize: 12, fontWeight: 700, color: "#2D2973", background: "none", border: "none", cursor: "pointer", textDecoration: "underline", textTransform: "uppercase", letterSpacing: "0.05em" }}
              >
                Read Bio
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Bio modal */}
      <Dialog open={!!active} onOpenChange={() => setActive(null)}>
        <DialogContent
          className="sm:max-w-[680px] [&>button:first-child]:hidden"
          style={{ padding: 0, gap: 0, overflow: "hidden", maxWidth: 680, maxHeight: "92vh", borderRadius: 0, display: "flex", flexDirection: "column" }}
        >
          <DialogTitle className="sr-only">{active?.name} Profile</DialogTitle>
          <DialogDescription className="sr-only">Biography for {active?.name}</DialogDescription>
          {active && (
            <div style={{ display: "flex", flexDirection: "column", minHeight: 0, flex: 1 }}>
              <div style={{ position: "relative", flexShrink: 0 }}>
                <div style={{ position: "relative", height: 160, overflow: "hidden", background: "#2D2973" }}>
                  <img src={profileHeaderBg} alt="" aria-hidden="true" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }} />
                </div>
                <div style={{ position: "absolute", bottom: -56, left: "50%", transform: "translateX(-50%)", width: 112, height: 112, borderRadius: "50%", overflow: "hidden", border: "4px solid #ffffff", boxShadow: "0 4px 20px rgba(0,0,0,0.18)", background: "#e5e7eb", zIndex: 2 }}>
                  <img src={active.image} alt={active.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                </div>
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  style={{ position: "absolute", top: 12, right: 12, width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.4)", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 10, backdropFilter: "blur(4px)", transition: "background 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.35)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.2)"; }}
                >
                  <X size={16} />
                </button>
              </div>
              <div className="modal-padding" style={{ flex: 1, overflowY: "auto", background: "#ffffff", padding: "80px 48px 48px" }}>
                <h2 style={{ fontFamily: '"Clan Pro", sans-serif', fontWeight: 700, fontSize: "clamp(22px, 3vw, 26px)", color: "#0A0B14", textAlign: "center", marginBottom: 6, marginTop: 0 }}>
                  {active.name}
                </h2>
                <p style={{ fontFamily: '"Clan Pro", sans-serif', fontWeight: 700, fontSize: "clamp(12px, 2vw, 14px)", color: "#D5AF34", textAlign: "center", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 36, marginTop: 0 }}>
                  {active.title}
                </p>
                <div style={{ width: 48, height: 2, background: "#D5AF34", margin: "0 auto 36px" }} />
                {active.bioParagraphs.map((para, i) => (
                  <p key={i} style={{ fontFamily: '"Clan Pro", sans-serif', fontWeight: 700, fontSize: "clamp(13px, 2vw, 14px)", color: "#4D4D4D", lineHeight: 1.85, textAlign: "justify", marginBottom: i < active.bioParagraphs.length - 1 ? 20 : 32, marginTop: 0 }}>
                    {para}
                  </p>
                ))}
                {active.quote && (
                  <blockquote style={{ borderLeft: "none", margin: 0, padding: 0 }}>
                    <p style={{ fontFamily: '"Clan Pro", sans-serif', fontWeight: 700, fontStyle: "italic", fontSize: "clamp(12px, 2vw, 13px)", color: "#4D4D4D", textAlign: "center", lineHeight: 1.8, margin: 0 }}>
                      &ldquo;{active.quote}&rdquo;
                    </p>
                  </blockquote>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

/* ── WHY CHOOSE US ── */
function WhyChooseUsSection() {
  const reasons = [
    "Strict adherence to high professional performance standards.",
    "We prioritize timely delivery to meet your needs.",
    "We go above and beyond when circumstances demand.",
    "Every engagement is backed by a legally binding contract with clearly defined objectives.",
    "Our solutions are customized and priced to fit businesses of all sizes and stages.",
  ];

  return (
    <section className="section-padding" style={{ position: "relative", padding: "80px 0", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img src={whyChooseUsBg} alt="" aria-hidden="true" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(232,232,232,0.72)" }} />
      </div>
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
        <h3 style={{ fontFamily: '"Clan Pro", sans-serif', fontWeight: 700, fontSize: "clamp(18px, 3vw, 24px)", color: "#2D2973", textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: 32, marginTop: 0 }}>
          WHY CHOOSE US?
        </h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, maxWidth: 900 }}>
          {reasons.map((r, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 16, fontFamily: '"Clan Pro", sans-serif', fontWeight: 400, fontSize: "clamp(14px, 2vw, 16px)", color: "#4D4D4D", lineHeight: 1.75 }}>
              <span style={{ color: "#2D2973", fontSize: 20, fontWeight: 700, marginTop: -2, flexShrink: 0 }}>•</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── PAGE ── */
export default function AboutPage() {
  return (
    <>
      <style>{responsiveStyles}</style>
      <main>
        <HeroSection />
        <CorporateOverviewSection />
        <FoundingStorySection />
        <TeamSection />
        <WhyChooseUsSection />
      </main>
    </>
  );
}