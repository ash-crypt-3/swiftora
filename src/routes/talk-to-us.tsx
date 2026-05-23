import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import hero1 from "@/assets/heroes/Talk_To_Us_Header.jpg";

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
      <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "110px 80px 56px", maxWidth: 1240, margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
        <p style={{ ...CLAN, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.36em", color: "#fff", marginBottom: 18, marginTop: 0 }}>
          TALK TO US
        </p>
        <h1 style={{ ...CLAN, fontWeight: 700, fontSize: "clamp(32px, 4.2vw, 56px)", color: "#D5AF34", lineHeight: 1.15, margin: 0 }}>
          Reach Out Today,<br />Achieve More<br />Tomorrow.
        </h1>
      </div>

      {/* Gold + Navy two-tone — inset to navbar width */}
      <div style={{ position: "relative", zIndex: 1, width: "100%", background: "#f0f0f0", padding: "0 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ background: "#D5AF34", padding: "48px 44px" }}>
            <p style={{ ...CLAN, fontSize: 16, fontWeight: 700, fontStyle: "italic", color: "#fff", lineHeight: 1.8, margin: 0 }}>
              Ready for transformation? At Swiftora Consulting Limited, we are here to listen, collaborate, and deliver solutions that drive results. Whether you are looking to refine your strategy, enhance your marketing, or tackle unique business challenges, our team is just a conversation away. Let's shape your success story together—reach out today!
            </p>
          </div>
          <div style={{ background: "#2D2973", padding: "48px 44px", display: "flex", flexDirection: "column", gap: 22 }}>
            {[
              { icon: <Phone size={17} color="#D5AF34" />, label: "Mobile:", value: "+254 729 698 380", href: "tel:+254729698380" },
              { icon: <Mail size={17} color="#D5AF34" />, label: "Email", value: "hello@swiftoraconsulting.co.ke", href: "mailto:hello@swiftoraconsulting.co.ke" },
              { icon: <MapPin size={17} color="#D5AF34" />, label: "Address:", value: "Applewood Adams, Odyssey Workspace, 10th Flr, Suite 1011, Ngong Road, Kilimani, Nairobi, Kenya", href: undefined },
              { icon: <Clock size={17} color="#D5AF34" />, label: "Business Hours:", value: "Monday–Friday  9 am to 5 pm\nWeekends  Closed.", href: undefined },
            ].map((row, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
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
    <section id="contact-form" style={{ background: "#f7f6f2", padding: "80px 0", scrollMarginTop: 80 }}>
      <div style={{ background: "#fff", padding: "48px 80px", border: "1px solid #eeeeee", boxShadow: "0 4px 32px rgba(0,0,0,0.07)" }}>
        <h2 style={{ ...CLAN, fontSize: 20, fontWeight: 700, color: "#2D2973", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6, marginTop: 0 }}>
          CONTACT FORM
        </h2>
        <p style={{ ...CLAN, fontSize: 13, fontWeight: 700, color: "#6b7280", marginBottom: 28, marginTop: 0 }}>
          We typically respond within one business day.
        </p>
        <div className="sc-form">
          <ContactForm />
        </div>
      </div>
      <style>{`
        .sc-form form, .sc-form > div { display: flex; flex-direction: column; }
        .sc-form button[type="submit"], .sc-form input[type="submit"], .sc-form button:last-of-type {
          align-self: flex-end !important; width: auto !important; margin-top: 10px !important;
          padding: 8px 24px !important; font-family: "Clan Pro", sans-serif !important;
          font-size: 11px !important; font-weight: 700 !important; text-transform: uppercase !important;
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
    <section style={{ background: "#f7f6f2", padding: "80px 0 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px 64px" }}>
        <h2 style={{ ...CLAN, fontSize: "clamp(20px, 2.2vw, 26px)", fontWeight: 700, color: "#2D2973", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16, marginTop: 0 }}>
          CLIENT ONBOARDING PROCESS
        </h2>
        <p style={{ ...CLAN, fontSize: 15, fontWeight: 700, color: "#4D4D4D", lineHeight: 1.8, maxWidth: 700, marginBottom: 48, marginTop: 0 }}>
          We are excited to partner with you on your journey to growth and success. Our streamlined onboarding process ensures we understand your needs from the very start. Whether you are seeking strategic guidance or hands-on support, we are here to help. Get in touch today, and let's begin crafting solutions tailored to your goals.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {onboardingSteps.map((s, i) => (
            <div key={i} style={{ background: "#2D2973", borderRadius: 4, padding: "44px 32px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <p style={{ ...CLAN, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.22em", color: "#D5AF34", marginBottom: 6, marginTop: 0 }}>{s.n}</p>
              <h3 style={{ ...CLAN, fontSize: 18, fontWeight: 700, color: "#D5AF34", marginBottom: 20, marginTop: 0, lineHeight: 1.25 }}>{s.t}</h3>
              <p style={{ ...CLAN, fontSize: 14, fontWeight: 700, color: "#ffffff", lineHeight: 1.75, margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <iframe
          title="Swiftora Consulting — Kilimani, Nairobi"
          src="https://maps.google.com/maps?q=Apple%20wood%20Adams&t=m&z=10&output=embed&iwloc=near"
          width="100%" height="400"
          style={{ border: 0, display: "block" }}
          loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen
        />
      </div>
    </section>
  );
}

export default function TalkPage() {
  return (
    <main>
      <HeroSection />
      <ContactSection />
      <OnboardingSection />
    </main>
  );
}