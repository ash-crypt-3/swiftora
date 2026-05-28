// FILE: src/routes/our-services.tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import ContactForm from "@/components/ContactForm";
import { useEffect, useRef } from "react";
import heroBg from "@/assets/heroes/Our_Services_Header.jpg";
import whyChooseUsBg from "@/assets/heroes/AboutUs_Why_Choose_Us-01.svg";
import salesImg from "@/assets/services/sales.png";
import marketingImg from "@/assets/services/marketing.png";
import strategyImg from "@/assets/services/strategy.png";
import communicationImg from "@/assets/services/communication.png";
import researchImg from "@/assets/services/research.png";
import consultingImg from "@/assets/services/Services_Flip_Images_00_Main.png";

const WP = "https://swiftoraconsulting.co.ke/wp-content/uploads";

export const Route = createFileRoute("/our-services")({
  head: () => ({
    meta: [
      { title: "Our Services: Comprehensive Business Solutions for Growth" },
      { name: "description", content: "Explore Swiftora Consulting's comprehensive services: Strategy, Sales, Marketing, Communication, and Research." },
    ],
  }),
  component: ServicesPage,
});

const CLAN = { fontFamily: '"Clan Pro", sans-serif' };

const approachSteps = [
  { icon: `${WP}/2025/05/Our-Approach-Icons-04-1.png`, step: "STEP 1", title: "Diagnostic & Discovery",        body: "Understand the client's current situation, challenges, goals, and objectives." },
  { icon: `${WP}/2025/05/Our-Approach-Icons-03-1.png`, step: "STEP 2", title: "Solution Formulation",          body: "Develop custom solutions aligned with client objectives and market opportunities." },
  { icon: `${WP}/2025/05/Our-Approach-Icons-01.png`,   step: "STEP 3", title: "Implementation Support",        body: "Ensure the chosen solution is executed effectively and on schedule." },
  { icon: `${WP}/2025/05/Our-Approach-Icons-02.png`,   step: "STEP 4", title: "Client Partnership & Advisory", body: "Build long-term relationships through consistent support and expertise." },
];

const servicesList = [
  { title: "Sales",         body: "Our data-driven insights and custom-made strategies empower your team to maximise conversions, build lasting customer relationships, and exceed revenue targets.", image: salesImg,         href: "/services/sales" },
  { title: "Marketing",    body: "We ensure your business connects authentically with your audience, optimises its market positioning, and achieves measurable success.",                           image: marketingImg,     href: "/services/marketing" },
  { title: "Strategy",     body: "We craft actionable roadmaps that align your goals with market opportunities, ensuring sustainable growth and competitive advantage.",                            image: strategyImg,      href: "/services/strategy" },
  { title: "Communication",body: "We empower individuals and organisations to communicate effectively, build stronger connections, and achieve their goals with clarity and confidence.",            image: communicationImg, href: "/services/communication" },
  { title: "Research",     body: "We deliver comprehensive research solutions designed to drive informed decision-making and strategic growth, helping businesses uncover opportunities.",           image: researchImg,      href: "/services/research" },
];

const targetClients = [
  { title: "For Corporates", body: "In today's competitive market, staying ahead requires agility, innovation, and effective strategy. We help corporates overcome challenges such as stagnating growth, fragmented communication, and evolving customer demands. From refining your sales and marketing strategies to strengthening internal communication and decision-making, we'll empower your organisation to thrive in a rapidly changing world." },
  { title: "For Startups",   body: "The startup journey is exciting but often fraught with uncertainty—limited resources, market penetration hurdles, and scaling challenges. Swiftora Consulting Limited partners with startups to build solid foundations, refine go-to-market strategies, and ignite growth. With our expertise, you will have the tools to turn your vision into a sustainable and impactful business." },
  { title: "For Individuals",body: "Whether you are planning a career pivot, building your personal brand, or seeking expert insights to maximise your professional potential, we are here for you. We help individuals identify their strengths, overcome barriers and craft a clear path toward their personal and professional goals." },
];

/*
  ICON SIZE token — one place to change it.
  The CSS line is positioned at exactly (ICON_PX / 2) from the top of .approach-row,
  so it always bisects the icon centre regardless of screen size.
  On smaller screens the icon shrinks via min() but the CSS var keeps the line centred.
*/
const ICON_PX = 200;

const CSS = `
  /* ─── flip card ─── */
  .fc { height: 300px; cursor: pointer; perspective: 1000px; }
  .fc-inner { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; transition: transform 0.65s cubic-bezier(0.4,0,0.2,1); }
  .fc:hover .fc-inner, .fc.flipped .fc-inner { transform: rotateY(180deg); }
  .fc-front, .fc-back { position: absolute; inset: 0; backface-visibility: hidden; -webkit-backface-visibility: hidden; }
  .fc-back { transform: rotateY(180deg); overflow: hidden; }
  .fc-back-img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .fc-overlay { position: absolute; inset: 0; background: rgba(10,11,20,0.42); display: flex; align-items: center; justify-content: center; }
  .fc-btn { padding: 11px 30px; background: #fff; color: #2D2973; border: 2px solid #fff; font-family: "Clan Pro",sans-serif; font-size: 15px; font-weight: 800; letter-spacing: .06em; cursor: pointer; text-decoration: none; display: inline-block; transition: background .2s,color .2s,border-color .2s; }
  .fc-btn:hover { background: #2D2973; color: #fff; border-color: #2D2973; }

  /* ─── approach ─── */
  /*
    Pure-CSS dotted line:
    .approach-row is the 4-column grid container.
    Its ::before pseudo-element draws the dashed line using a repeating
    background-image of a 2px-wide navy circle (dot) every 11px.
    top is set to exactly half the icon height in px so it always sits
    at the vertical centre of the icons — no JS, no timing, no bleed ever.
    The line starts at 12.5% (centre of col 1) and ends at 87.5% (centre of col 4).
  */
  .approach-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    position: relative;
  }
  .approach-row::before {
    content: "";
    position: absolute;
    /* sits at exact vertical centre of icons */
    top: ${ICON_PX / 2}px;
    /* starts at centre of first column, ends at centre of last */
    left: 12.5%;
    right: 12.5%;
    height: 0;
    /* repeating-radial-gradient draws perfect round dots */
    border-top: none;
    background-image: radial-gradient(circle, #2D2973 1.2px, transparent 1.2px);
    background-size: 11px 1px;
    background-repeat: repeat-x;
    background-position: 0 0;
    opacity: 0.45;
    z-index: 0;
    pointer-events: none;
  }
  .approach-col {
    display: flex; flex-direction: column; align-items: center;
    text-align: center; padding: 0 4px; min-width: 0; position: relative; z-index: 1;
  }
  .approach-icon {
    width: ${ICON_PX}px; height: ${ICON_PX}px;
    border-radius: 50%;
    background: #ffffff;   /* white circle masks line behind icon */
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; margin-bottom: 6px; position: relative; z-index: 2;
  }
  .approach-icon img { width: 82%; height: 82%; object-fit: contain; display: block; }

  /* ─── other grids ─── */
  .services-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 300px 300px; gap: 4px; }
  .clients-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 4px; }
  .section-pad { padding-left: 80px; padding-right: 80px; }
  .hero-section { min-height: 70vh; }

  @media (max-width: 1100px) {
    .approach-row { grid-template-columns: repeat(2,1fr); gap: 14px 10px; }
    .approach-row::before { display: none; }
    .approach-icon { width: 160px; height: 160px; }
  }
  @media (max-width: 900px) {
    .services-grid { grid-template-columns: 1fr 1fr; grid-template-rows: auto; }
    .clients-grid { grid-template-columns: 1fr 1fr; }
    .section-pad { padding-left: 32px; padding-right: 32px; }
    .hero-section { min-height: 55vh; }
  }
  @media (max-width: 600px) {
    .approach-row { grid-template-columns: repeat(2,1fr); gap: 12px 6px; }
    .approach-icon { width: 110px; height: 110px; }
    .services-grid { grid-template-columns: 1fr; grid-template-rows: auto; }
    .clients-grid { grid-template-columns: 1fr; }
    .section-pad { padding-left: 20px; padding-right: 20px; }
    .fc { height: 280px; }
    .hero-section { min-height: 38vh !important; }
  }
`;

function FlipCard({ title, body, image, href }: { title: string; body: string; image: string; href: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="fc" ref={ref} onTouchStart={() => ref.current?.classList.toggle("flipped")}>
      <div className="fc-inner">
        <div className="fc-front" style={{ background: "#E8EDF3", padding: "36px 32px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
          <h4 style={{ ...CLAN, fontSize: 32, fontWeight: 800, color: "#2D2973", margin: "0 0 16px", letterSpacing: "0.04em" }}>{title}</h4>
          <p style={{ ...CLAN, fontSize: 17, fontWeight: 600, color: "#111111", lineHeight: 1.9, margin: 0 }}>{body}</p>
        </div>
        <div className="fc-back">
          <img className="fc-back-img" src={image} alt={title} />
          <div className="fc-overlay"><Link to={href} className="fc-btn">Learn More</Link></div>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => { if (bgRef.current) bgRef.current.style.transform = `translateY(${window.scrollY * 0.38}px)`; };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section className="hero-section" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div ref={bgRef} style={{ position: "absolute", inset: "-20%", zIndex: 0, willChange: "transform" }}>
        <img src={heroBg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,11,20,0.62)" }} />
      </div>
      <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 clamp(20px,6vw,80px) clamp(40px,8vw,100px)", width: "100%", boxSizing: "border-box" }}>
        <h1 style={{ ...CLAN, fontWeight: 800, fontSize: "clamp(26px,4vw,52px)", lineHeight: 1.2, margin: 0, textAlign: "left" }}>
          <span style={{ color: "#ffffff", display: "block" }}>Good Ideas Brought You Here</span>
          <span style={{ color: "#D5AF34", display: "block" }}>Great Solutions Keep You Here</span>
        </h1>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <>
      <style>{CSS}</style>
      <HeroSection />

      {/* INTRO */}
      <section style={{ background: "#E8EDF3", padding: "30px 0" }}>
        <div style={{ width: "100%", padding: "0 clamp(20px,6vw,80px)", boxSizing: "border-box" }}>
          <p style={{ ...CLAN, fontSize: "clamp(14px,1.5vw,17px)", fontWeight: 600, color: "#111111", lineHeight: 2, marginBottom: 5, marginTop: 0, textAlign: "justify" }}>
            At Swiftora Consulting Limited, our practice areas are structured to help organisations solve business challenges, strengthen competitiveness, and achieve sustainable growth. We combine strategic thinking, market intelligence, and execution-focused advisory to support informed decision-making, operational improvement, and commercial performance across diverse sectors and evolving market environments within East Africa and beyond.
          </p>
          <p style={{ ...CLAN, fontSize: "clamp(14px,1.5vw,17px)", fontWeight: 600, color: "#111111", lineHeight: 2, margin: 0, textAlign: "justify" }}>
            Our multidisciplinary approach enables us to deliver practical, data-driven, and context-specific solutions tailored to each client's objectives. From business strategy and market research to sales, marketing, organisational development, and corporate communication, we work closely with clients to identify opportunities, improve performance, manage change, and build resilient organisations positioned for long-term growth and measurable impact.
          </p>
        </div>
      </section>

      {/* OUR APPROACH — pure CSS line, zero JS timing issues */}
      <section style={{ background: "#ffffff", padding: "0" }}>
        <div className="section-pad" style={{ width: "100%", boxSizing: "border-box" }}>
          <h2 style={{ ...CLAN, fontSize: "clamp(22px,3vw,36px)", fontWeight: 800, color: "#2D2973", textTransform: "uppercase", letterSpacing: "0.01em", margin: "-40px 0 0" }}>
            OUR APPROACH
          </h2>
          <div className="approach-row">
            {approachSteps.map(({ icon, step, title, body }) => (
              <div key={step} className="approach-col">
                <div className="approach-icon">
                  <img src={icon} alt={title} loading="lazy" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
                </div>
                <p style={{ ...CLAN, fontSize: 18, fontWeight: 800, color: "#2D2973", textTransform: "uppercase", letterSpacing: "0.10em", margin: "0 0 4px" }}>{step}</p>
                <h4 style={{ ...CLAN, fontSize: 22, fontWeight: 800, fontStyle: "italic", color: "#D5AF34", margin: "0 0 5px", lineHeight: 1.3 }}>{title}</h4>
                <p style={{ ...CLAN, fontSize: 17, fontWeight: 600, color: "#111111", lineHeight: 1.75, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section style={{ background: "#ffffff", padding: "0" }}>
        <div className="section-pad" style={{ width: "100%", boxSizing: "border-box" }}>
          <h2 style={{ ...CLAN, fontSize: "clamp(22px,3vw,36px)", fontWeight: 900, color: "#2D2973", textTransform: "uppercase", letterSpacing: "0.01em", margin: "-100px 0 4px" }}>
            OUR SERVICES
          </h2>
          <div className="services-grid">
            <div style={{ overflow: "hidden", minHeight: 200 }}>
              <img src={consultingImg} alt="Consulting team" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <FlipCard {...servicesList[0]} />
            <FlipCard {...servicesList[1]} />
            <FlipCard {...servicesList[2]} />
            <FlipCard {...servicesList[3]} />
            <FlipCard {...servicesList[4]} />
          </div>
        </div>
      </section>

      {/* TARGET CLIENTS */}
      <section style={{ background: "#ffffff", padding: "0" }}>
        <div className="section-pad" style={{ width: "100%", boxSizing: "border-box" }}>
          <h2 style={{ ...CLAN, fontSize: "clamp(22px,3vw,36px)", fontWeight: 800, color: "#D5AF34", textTransform: "uppercase", letterSpacing: "0.01em", margin: "-90px 0 3px" }}>
            TARGET CLIENTS
          </h2>
          <div className="clients-grid">
            {targetClients.map(({ title, body }) => (
              <div key={title} style={{ background: "#2D2973", padding: "16px 14px", textAlign: "center" }}>
                <h4 style={{ ...CLAN, fontSize: "clamp(18px,2vw,26px)", fontWeight: 800, fontStyle: "italic", color: "#D5AF34", margin: "0 0 20px", lineHeight: 1.3 }}>{title}</h4>
                <p style={{ ...CLAN, fontSize: "clamp(13px,1.2vw,15px)", fontWeight: 600, color: "#ffffff", lineHeight: 1.8, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section style={{ position: "relative", padding: "8px 0", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src={whyChooseUsBg} alt="" aria-hidden="true" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(232,238,247,0.82)" }} />
        </div>
        <div className="section-pad" style={{ position: "relative", zIndex: 1, width: "100%", boxSizing: "border-box" }}>
          <h2 style={{ ...CLAN, fontSize: "clamp(20px,2.5vw,32px)", fontWeight: 800, color: "#2D2973", textTransform: "uppercase", letterSpacing: "0.08em", textAlign: "left", margin: "0 0 4px" }}>
            CONTACT FORM
          </h2>
          <p style={{ ...CLAN, textAlign: "left", fontSize: 15, fontWeight: 700, color: "#606161", marginBottom: 7, marginTop: 0 }}>
            Ready to get started? Send us a message and we'll be in touch within one business day.
          </p>
          <div style={{ background: "#ffffff", padding: "clamp(20px,4vw,40px)", border: "1px solid #eeeeee" }}>
            <style>{`
              form button[type="submit"],.contact-form button[type="submit"]{display:block !important;margin-left:auto !important;margin-right:0 !important;padding:14px 36px !important;background:transparent !important;color:#2D2973 !important;border:2px solid #2D2973 !important;font-family:"Clan Pro",sans-serif !important;font-size:14px !important;font-weight:800 !important;letter-spacing:0.14em !important;text-transform:uppercase !important;cursor:pointer !important;border-radius:0 !important;transition:background .2s,color .2s !important;width:auto !important;min-width:unset !important;}
              form button[type="submit"]:hover,.contact-form button[type="submit"]:hover{background:#2D2973 !important;color:#fff !important;}
            `}</style>
            <ContactForm submitLabel="SEND YOUR MESSAGE →" submitAlign="right" />
          </div>
        </div>
      </section>
    </>
  );
}