import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import hero1 from "@/assets/heroes/Talk_To_Us_Header.jpg";
import whyChooseUsBg from "@/assets/heroes/AboutUs_Why_Choose_Us-01.svg";

export const Route = createFileRoute("/talk-to-us")({
  head: () => ({
    meta: [
      { title: "Talk to Us: Let's Collaborate for Your Business Success" },
      { name: "description", content: "Connect with Swiftora Consulting to discuss how we can support your business objectives and growth." },
    ],
  }),
  component: TalkPage,
});

const onboardingSteps = [
  { n: "Step 1", t: "Initial Consultation", d: "After you reach out, we'll schedule a free consultation to understand your business, goals, and challenges. This is your opportunity to share your vision with us." },
  { n: "Step 2", t: "Needs Assessment", d: "We'll dive deeper into your specific needs and pain points, ensuring we fully grasp the scope of your requirements." },
  { n: "Step 3", t: "Tailored Proposal", d: "Based on our consultation, we'll craft a customised proposal outlining our recommended solutions, timelines, and costs." },
  { n: "Step 4", t: "Onboarding Kickoff", d: "Once you approve the proposal, we'll formalise the engagement and initiate the onboarding process with a detailed project plan and clear milestones." },
  { n: "Step 5", t: "Collaborative Execution", d: "Our team will work closely with you to implement the agreed-upon strategies, keeping you informed every step of the way." },
  { n: "Step 6", t: "Ongoing Support", d: "Our commitment doesn't end with project delivery. We provide ongoing support to help you sustain and build on the results achieved." },
];

const CLAN: React.CSSProperties = { fontFamily: '"Clan Pro", sans-serif' };

const RESPONSIVE_CSS = `
  .ttu-hero-text {
    padding: 110px 40px 56px;
    max-width: 1240px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
  }
  .ttu-twotone { padding: 0; }
  .ttu-twotone-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1240px;
    margin: 0 auto;
  }
  .ttu-gold-panel { padding: 48px 44px; }
  .ttu-navy-panel { padding: 48px 44px; }
  .ttu-contact-inner { padding: 48px 80px; }
  .ttu-onboarding-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (max-width: 900px) {
    .ttu-hero-text { padding: 100px 32px 48px; }
    .ttu-gold-panel { padding: 36px 28px; }
    .ttu-navy-panel { padding: 36px 28px; }
    .ttu-contact-inner { padding: 36px 40px; }
    .ttu-onboarding-grid { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 600px) {
    .ttu-hero-text { padding: 100px 20px 40px; }
    .ttu-twotone-inner { grid-template-columns: 1fr; }
    .ttu-gold-panel { padding: 32px 20px; }
    .ttu-navy-panel { padding: 32px 20px; gap: 18px; }
    .ttu-contact-inner { padding: 28px 20px; }
    .ttu-onboarding-grid { grid-template-columns: 1fr; }
    .ttu-map iframe { height: 240px !important; }
  }
`;

function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) bgRef.current.style.transform = `translateY(${window.scrollY * 0.38}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section style={{ position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div ref={bgRef} style={{ position: "absolute", inset: "-20%", zIndex: 0, willChange: "transform" }}>
        <img src={hero1} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.50)" }} />
      </div>

      {/* Hero title */}
      <div
        className="ttu-hero-text"
        style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}
      >
        <p style={{ ...CLAN, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.36em", color: "#fff", marginBottom: 18, marginTop: 0 }}>
          TALK TO US
        </p>
        <h1 style={{ ...CLAN, fontWeight: 700, fontSize: "clamp(28px, 4.2vw, 56px)", color: "#D5AF34", lineHeight: 1.15, margin: 0 }}>
          Reach Out Today,<br />Achieve More<br />Tomorrow.
        </h1>
      </div>

      {/* Gold + Navy two-tone */}
      <div className="ttu-twotone" style={{ position: "relative", zIndex: 1, width: "100%", background: "#f0f0f0" }}>
        <div className="ttu-twotone-inner">
          <div className="ttu-gold-panel" style={{ background: "#D5AF34", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <p style={{ ...CLAN, fontSize: 16, fontWeight: 700, fontStyle: "italic", color: "#fff", lineHeight: 1.8, margin: 0, textAlign: "center" }}>
              Ready for transformation? At Swiftora Consulting Limited, we are here to listen, collaborate, and deliver solutions that drive results. Whether you are looking to refine your strategy, enhance your marketing, or tackle unique business challenges, our team is just a conversation away. Let's shape your success story together — reach out today!
            </p>
          </div>
          <div className="ttu-navy-panel" style={{ background: "#2D2973", display: "flex", flexDirection: "column" }}>
            {[
              { icon: <Phone size={17} color="#D5AF34" />, label: "Mobile:", value: "+254 729 698 380", href: "tel:+254729698380" },
              { icon: <Mail size={17} color="#D5AF34" />, label: "Email", value: "hello@swiftoraconsulting.co.ke", href: "mailto:hello@swiftoraconsulting.co.ke" },
              { icon: <MapPin size={17} color="#D5AF34" />, label: "Address:", value: "Applewood Adams, Odyssey Workspace, 10th Flr, Suite 1011, Ngong Road, Kilimani, Nairobi, Kenya", href: undefined },
              { icon: <Clock size={17} color="#D5AF34" />, label: "Business Hours:", value: "Monday–Friday  9 am to 5 pm\nWeekends  Closed.", href: undefined },
            ].map((row, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: i < 3 ? 22 : 0 }}>
                <span style={{ flexShrink: 0, marginTop: 2 }}>{row.icon}</span>
                <div>
                  <div style={{ ...CLAN, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.22em", color: "#D5AF34", marginBottom: 3 }}>{row.label}</div>
                  {row.href ? (
                    <a href={row.href} style={{ ...CLAN, fontSize: 14, fontWeight: 700, color: "#fff", textDecoration: "none", wordBreak: "break-all" }}>{row.value}</a>
                  ) : (
                    <p style={{ ...CLAN, fontSize: 14, fontWeight: 700, color: "#fff", lineHeight: 1.65, margin: 0, whiteSpace: "pre-line" }}>{row.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact-form" style={{ background: "#f7f6f2", padding: "80px 40px", scrollMarginTop: 80, boxSizing: "border-box" }}>
      <div
        className="ttu-contact-inner"
        style={{ background: "#fff", border: "1px solid #eeeeee", boxShadow: "0 4px 32px rgba(0,0,0,0.07)", maxWidth: 1240, margin: "0 auto", boxSizing: "border-box" }}
      >
        <h2 style={{ ...CLAN, fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 700, color: "#2D2973", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6, marginTop: 0 }}>
          CONTACT FORM
        </h2>
        <p style={{ ...CLAN, fontSize: 13, fontWeight: 700, color: "#6b7280", marginBottom: 28, marginTop: 0 }}>
          We typically respond within one business day.
        </p>
        <div className="sc-form">
          <ContactForm submitLabel="SUBMIT" submitAlign="right" />
        </div>
      </div>
      <style>{`
        .sc-form form, .sc-form > div { display: flex; flex-direction: column; }
        .sc-form button[type="submit"], .sc-form input[type="submit"], .sc-form button:last-of-type {
          align-self: flex-end !important; width: auto !important; margin-top: 10px !important;
          padding: 10px 28px !important; font-family: "Clan Pro", sans-serif !important;
          font-size: 12px !important; font-weight: 700 !important; text-transform: uppercase !important;
          letter-spacing: 0.16em !important; color: #2D2973 !important; background: transparent !important;
          border: 2px solid #2D2973 !important; border-radius: 0 !important; cursor: pointer !important;
          transition: background 0.2s, color 0.2s !important;
        }
        .sc-form button[type="submit"]:hover, .sc-form input[type="submit"]:hover, .sc-form button:last-of-type:hover {
          background: #2D2973 !important; color: #fff !important;
        }
      `}</style>
    </section>
  );
}

function OnboardingSection() {
  return (
    <section style={{ position: "relative", padding: "80px 0 0", overflow: "hidden" }}>
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img src={whyChooseUsBg} alt="" aria-hidden="true"
          style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(232,237,243,0.82)" }} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1240, margin: "0 auto", padding: "0 40px 64px", boxSizing: "border-box" }}>
        <h2 style={{ ...CLAN, fontSize: "clamp(18px, 2.2vw, 26px)", fontWeight: 700, color: "#2D2973", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16, marginTop: 0 }}>
          CLIENT ONBOARDING PROCESS
        </h2>

        {/* Updated intro — two justified paragraphs, edge to edge */}
        <p style={{ ...CLAN, fontSize: "clamp(14px, 1.5vw, 16px)", fontWeight: 700, color: "#4D4D4D", lineHeight: 1.85, marginBottom: 20, marginTop: 0, textAlign: "justify" }}>
          We are excited to partner with you on your journey towards growth, transformation, and long-term success. Our onboarding process is designed to create clarity from the very beginning, helping us understand your business, priorities, challenges, and ambitions. Every engagement starts with meaningful conversations that allow us to align strategy, expectations, and measurable business outcomes effectively.
        </p>
        <p style={{ ...CLAN, fontSize: "clamp(14px, 1.5vw, 16px)", fontWeight: 700, color: "#4D4D4D", lineHeight: 1.85, marginBottom: 48, marginTop: 0, textAlign: "justify" }}>
          Whether you require strategic advisory, market intelligence, branding support, or hands-on implementation, our team works closely with you at every stage. We believe strong partnerships begin with listening carefully before proposing solutions. Reach out to Swiftora Consulting Limited today, and let us begin building practical solutions tailored to your vision, goals, and growth aspirations.
        </p>

        <div className="ttu-onboarding-grid">
          {onboardingSteps.map((s, i) => (
            <div key={i} style={{ background: "#2D2973", borderRadius: 4, padding: "clamp(24px, 3vw, 44px) clamp(16px, 2.5vw, 32px)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <p style={{ ...CLAN, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.22em", color: "#D5AF34", marginBottom: 6, marginTop: 0 }}>{s.n}</p>
              <h3 style={{ ...CLAN, fontSize: "clamp(15px, 1.8vw, 18px)", fontWeight: 700, color: "#D5AF34", marginBottom: 16, marginTop: 0, lineHeight: 1.25 }}>{s.t}</h3>
              <p style={{ ...CLAN, fontSize: "clamp(13px, 1.4vw, 14px)", fontWeight: 700, color: "#ffffff", lineHeight: 1.75, margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="ttu-map" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <iframe
          title="Swiftora Consulting — Kilimani, Nairobi"
          src="https://maps.google.com/maps?q=Apple%20wood%20Adams&t=m&z=10&output=embed&iwloc=near"
          width="100%"
          height="400"
          style={{ border: 0, display: "block" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default function TalkPage() {
  return (
    <main>
      <style>{RESPONSIVE_CSS}</style>
      <HeroSection />
      <ContactSection />
      <OnboardingSection />
    </main>
  );
}