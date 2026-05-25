import { Link } from "@tanstack/react-router";
import { type SolutionContent } from "@/lib/content";
import { ArrowRight, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import capitalImg     from "@/assets/flagship/Flagships_CapitalReadinessProgram.jpg.jpeg";
import feasibilityImg from "@/assets/flagship/Flagships_FeasibilityandMarketEntry.jpg.jpeg";
import smeImg         from "@/assets/flagship/Flagships_SMEGrowthBlueprint.jpg.jpeg";
import revenueImg     from "@/assets/flagship/Flagships_RevenueAcceleration.jpg.jpeg";
import programmeImg   from "@/assets/flagship/Flagships_ProgramDesignandAdvisory.jpg.jpeg";
import diagnosticsImg from "@/assets/heroes/Advisory_BusinessDiagnostics.jpg.jpeg";
import clinicImg      from "@/assets/heroes/Advisory_ConsultingClinics.jpg.jpeg";
import executiveImg   from "@/assets/heroes/Advisory_ExecutiveAdvisory.jpg.jpeg";
import fallbackHero   from "@/assets/heroes/hero-2.jpg";

const slugHeroMap: Record<string, string> = {
  // Flagship solutions
  "capital-readiness":        capitalImg,
  "feasibility-market-entry": feasibilityImg,
  "sme-growth-blueprint":     smeImg,
  "revenue-acceleration":     revenueImg,
  "programme-design":         programmeImg,
  // Advisory services
  "business-diagnostic":      diagnosticsImg,
  "consulting-clinic":        clinicImg,
  "executive-advisory":       executiveImg,
};

const CLAN: React.CSSProperties = { fontFamily: '"Clan Pro", sans-serif' };
const NAV_MAX = 1240;

const heroOverrides: Record<string, { eyebrow: string; lines: string[]; supporting: string }> = {
  "capital-readiness": {
    eyebrow: "Capital Readiness Programme™",
    lines: ["Your Idea", "Deserves To Be", "Funded."],
    supporting: "We build the investor-ready package that gets you through the door — business plan, financial model, pitch deck, and more.",
  },
  "feasibility-market-entry": {
    eyebrow: "Feasibility & Market Entry Suite™",
    lines: ["Know Before", "You", "Commit."],
    supporting: "Evidence-based market validation and entry strategy — so every investment decision is made with confidence, not assumption.",
  },
  "sme-growth-blueprint": {
    eyebrow: "SME Growth Blueprint™",
    lines: ["Stop Surviving.", "Start", "Growing."],
    supporting: "A structured diagnostic and 90-to-180-day execution roadmap that turns scattered effort into a clear, measurable growth plan.",
  },
  "revenue-acceleration": {
    eyebrow: "Revenue Acceleration Programme™",
    lines: ["Your Pipeline", "Should Work", "Harder."],
    supporting: "We design the sales systems, structures, and KPI frameworks that turn your commercial potential into consistent revenue performance.",
  },
  "programme-design": {
    eyebrow: "Programme Design & Advisory Suite™",
    lines: ["Programmes That", "Actually", "Deliver."],
    supporting: "From stakeholder mapping and logic models to implementation roadmaps — we design interventions built for measurable real-world impact.",
  },
  "business-diagnostic": {
    eyebrow: "Business Diagnostic™",
    lines: ["Your Business", "Deserves A Clear", "Diagnosis."],
    supporting: "A structured review that finds the real reason your business is not performing — so you fix the root cause, not just the symptoms.",
  },
  "consulting-clinic": {
    eyebrow: "Consulting Clinic™",
    lines: ["One Problem.", "One Session.", "Real Clarity."],
    supporting: "A focused 60-to-120-minute advisory session built around your specific challenge — practical, direct, and immediately actionable.",
  },
  "executive-advisory": {
    eyebrow: "Executive Advisory™",
    lines: ["Strategy Is", "Better With A", "Thinking Partner."],
    supporting: "Ongoing, senior-level strategic support for business owners and leaders navigating complex decisions and high-stakes growth.",
  },
};

const RESPONSIVE_CSS = `
  .sd-hero { min-height: 120vh; }
  .sd-pad { padding-left: 60px; padding-right: 60px; }
  .sd-two-tone { display: grid; grid-template-columns: 1fr 1fr; }
  .sd-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; }
  .sd-form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
  .sd-others-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }

  @media (max-width: 900px) {
    .sd-hero { min-height: 80vh; }
    .sd-pad { padding-left: 32px; padding-right: 32px; }
    .sd-two-tone { grid-template-columns: 1fr; }
    .sd-cols { grid-template-columns: 1fr; gap: 40px; }
    .sd-others-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 600px) {
    .sd-hero { min-height: 55vh !important; }
    .sd-pad { padding-left: 20px; padding-right: 20px; }
    .sd-two-tone { grid-template-columns: 1fr; }
    .sd-cols { grid-template-columns: 1fr; gap: 32px; }
    .sd-form-grid-2 { grid-template-columns: 1fr; }
    .sd-others-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
  }
`;

const SUBMIT_CSS = `
  form button[type="submit"],
  .contact-form button[type="submit"] {
    display: block !important;
    margin-left: auto !important;
    margin-right: 0 !important;
    padding: 14px 40px !important;
    background: transparent !important;
    color: #2D2973 !important;
    border: 2px solid #2D2973 !important;
    font-family: "Clan Pro", sans-serif !important;
    font-size: 12px !important;
    font-weight: 800 !important;
    letter-spacing: 0.12em !important;
    text-transform: uppercase !important;
    cursor: pointer !important;
    border-radius: 0 !important;
    transition: background 0.2s, color 0.2s !important;
    width: auto !important;
    min-width: unset !important;
  }
  form button[type="submit"]:hover,
  .contact-form button[type="submit"]:hover {
    background: #2D2973 !important;
    color: #fff !important;
  }
`;

type FormState = "idle" | "submitting" | "success" | "error";

function InlineContactForm({ solutionName, ctaHeadline }: { solutionName: string; ctaHeadline: string }) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({ name: "", email: "", phone: "", organisation: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit() {
    if (!fields.name || !fields.email || !fields.message) return;
    setFormState("submitting");
    try {
      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, service: solutionName }),
      });
      setFormState("success");
    } catch {
      setFormState("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    ...CLAN, width: "100%", background: "#f8f8fb",
    border: "1.5px solid #e5e7eb", borderRadius: 4,
    padding: "10px 14px", fontSize: 14, fontWeight: 700,
    color: "#1a1a2e", outline: "none", boxSizing: "border-box",
    transition: "border-color 0.18s", display: "block",
  };

  const labelStyle: React.CSSProperties = {
    ...CLAN, fontSize: 10, fontWeight: 700, textTransform: "uppercase",
    letterSpacing: "0.2em", color: "#6b7280", display: "block", marginBottom: 5,
  };

  if (formState === "success") {
    return (
      <div style={{ textAlign: "center", padding: "56px 0" }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(213,175,52,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
          <Send size={22} color="#D5AF34" />
        </div>
        <h3 style={{ ...CLAN, fontSize: 24, fontWeight: 700, color: "#2D2973", marginBottom: 12, marginTop: 0 }}>Message received.</h3>
        <p style={{ ...CLAN, fontSize: 15, color: "#6b7280", lineHeight: 1.7, maxWidth: 400, margin: "0 auto" }}>
          Thank you for reaching out. One of our consultants will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="sd-form-grid-2">
        <div>
          <label style={labelStyle} htmlFor="sd-name">Full Name <span style={{ color: "#D5AF34" }}>*</span></label>
          <input id="sd-name" name="name" type="text" value={fields.name} onChange={handleChange} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="sd-email">Email Address <span style={{ color: "#D5AF34" }}>*</span></label>
          <input id="sd-email" name="email" type="email" value={fields.email} onChange={handleChange} style={inputStyle} />
        </div>
      </div>
      <div className="sd-form-grid-2">
        <div>
          <label style={labelStyle} htmlFor="sd-phone">Phone Number</label>
          <input id="sd-phone" name="phone" type="tel" value={fields.phone} onChange={handleChange} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="sd-org">Organisation</label>
          <input id="sd-org" name="organisation" type="text" value={fields.organisation} onChange={handleChange} style={inputStyle} />
        </div>
      </div>
      <div style={{ marginBottom: 24 }}>
        <label style={labelStyle} htmlFor="sd-message">How can we help? <span style={{ color: "#D5AF34" }}>*</span></label>
        <textarea id="sd-message" name="message" rows={5} value={fields.message} onChange={handleChange}
          style={{ ...inputStyle, resize: "vertical", lineHeight: 1.65 }} />
      </div>
      {formState === "error" && (
        <p style={{ ...CLAN, fontSize: 13, color: "#ef4444", marginBottom: 16, marginTop: 0 }}>
          Something went wrong. Please try again or email us at hello@swiftoraconsulting.co.ke.
        </p>
      )}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={handleSubmit}
          disabled={formState === "submitting" || !fields.name || !fields.email || !fields.message}
          style={{
            ...CLAN, display: "inline-flex", alignItems: "center", gap: 8,
            padding: "11px 30px", fontSize: 13, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.16em",
            color: "#2D2973", background: "transparent",
            border: "2px solid #2D2973", borderRadius: 0,
            cursor: formState === "submitting" || !fields.name || !fields.email || !fields.message ? "not-allowed" : "pointer",
            opacity: formState === "submitting" || !fields.name || !fields.email || !fields.message ? 0.55 : 1,
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => { if (formState !== "submitting") { e.currentTarget.style.background = "#2D2973"; e.currentTarget.style.color = "#ffffff"; } }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#2D2973"; }}
        >
          {formState === "submitting" ? "Submitting…" : "SUBMIT"}
          <Send size={13} />
        </button>
      </div>
      <p style={{ ...CLAN, marginTop: 16, fontSize: 12, color: "#9ca3af", marginBottom: 0 }}>
        Or reach us directly:{" "}
        <a href="mailto:hello@swiftoraconsulting.co.ke" style={{ color: "#D5AF34", textDecoration: "none" }}>
          hello@swiftoraconsulting.co.ke
        </a>{" "}
        · 0729 698 380
      </p>
    </div>
  );
}

/* ── PARALLAX HERO ── */
function SolutionHero({ solution }: { solution: SolutionContent }) {
  const bgRef = useRef<HTMLDivElement>(null);
  const override   = heroOverrides[solution.slug];
  const eyebrow    = override?.eyebrow    || solution.name;
  const lines      = override?.lines      || [solution.name];
  const supporting = override?.supporting || solution.short;
  const heroImg    = slugHeroMap[solution.slug] ?? fallbackHero;

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current)
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.38}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="sd-hero" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div ref={bgRef} style={{ position: "absolute", inset: "-20%", zIndex: 0, willChange: "transform" }}>
        <img src={heroImg} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,11,20,0.58)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(80px, 12vw, 110px) 0 56px" }}>
        <div className="sd-pad" style={{ maxWidth: NAV_MAX, margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
          <p style={{ ...CLAN, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.36em", color: "#D5AF34", marginBottom: 20, marginTop: 0 }}>
            {eyebrow}
          </p>
          <h1 style={{ ...CLAN, fontWeight: 700, fontSize: "clamp(28px, 5vw, 64px)", color: "#ffffff", lineHeight: 1.1, margin: 0 }}>
            {lines.map((line, i) => (
              <span key={i}>{line}{i < lines.length - 1 && <br />}</span>
            ))}
          </h1>
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div className="sd-pad" style={{ maxWidth: NAV_MAX, margin: "0 auto", boxSizing: "border-box" }}>
          <div className="sd-two-tone">
            <div style={{ background: "#D5AF34", padding: "clamp(28px, 4vw, 48px) clamp(20px, 3vw, 44px)" }}>
              <p style={{ ...CLAN, fontSize: "clamp(14px, 1.5vw, 17px)", fontWeight: 700, fontStyle: "italic", color: "#ffffff", lineHeight: 1.8, margin: 0 }}>
                {supporting}
              </p>
            </div>
            <div style={{ background: "#2D2973", padding: "clamp(28px, 4vw, 48px) clamp(20px, 3vw, 44px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
              <p style={{ ...CLAN, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.3em", color: "#D5AF34", margin: 0 }}>
                Get Ahead, For Good
              </p>
              <p style={{ ...CLAN, fontSize: "clamp(14px, 1.5vw, 17px)", fontWeight: 700, color: "#ffffff", lineHeight: 1.75, margin: 0 }}>
                Scroll down to explore what's included, who this is for, and how to get started with Swiftora Consulting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── SOLUTION DETAIL PAGE ── */
export function SolutionDetail({
  solution,
  others,
  baseHref,
}: {
  solution: SolutionContent;
  others: { name: string; href: string }[];
  baseHref: "/flagship-solutions" | "/advisory-services";
}) {
  return (
    <>
      <style>{RESPONSIVE_CSS}</style>
      <style>{SUBMIT_CSS}</style>

      <SolutionHero solution={solution} />

      {/* What You Get / Who It's For */}
      <section style={{ background: "#ffffff", padding: "clamp(40px, 6vw, 80px) 0" }}>
        <div className="sd-pad" style={{ maxWidth: NAV_MAX, margin: "0 auto", boxSizing: "border-box" }}>
          <div className="sd-cols">
            {[
              { title: "What You Get", items: solution.whatYouGet },
              { title: solution.whoLabel, items: solution.whoOrWhen },
            ].map((col) => (
              <div key={col.title}>
                <h3 style={{ ...CLAN, fontSize: 20, fontWeight: 700, color: "#2D2973", paddingLeft: 18, borderLeft: "3px solid #D5AF34", marginBottom: 28, marginTop: 0, lineHeight: 1.25 }}>
                  {col.title}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                  {col.items.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2D2973", flexShrink: 0, marginTop: 7 }} />
                      <span style={{ ...CLAN, fontSize: 15, fontWeight: 700, color: "#4D4D4D", lineHeight: 1.75 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section style={{ background: "#E8EDF3", padding: "clamp(40px, 6vw, 80px) 0" }}>
        <div className="sd-pad" style={{ maxWidth: NAV_MAX, margin: "0 auto", boxSizing: "border-box" }}>
          <h2 style={{ ...CLAN, fontSize: "clamp(20px, 2.8vw, 36px)", fontWeight: 900, color: "#D5AF34", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 12px" }}>
            CONTACT FORM
          </h2>
          <p style={{ ...CLAN, fontSize: 15, fontWeight: 500, color: "#606161", marginBottom: 40, marginTop: 0, lineHeight: 1.7 }}>
            Ready to get started? Send us a message and we'll be in touch within one business day.
          </p>
          <div style={{ background: "#ffffff", padding: "clamp(20px, 4vw, 48px)", border: "1px solid #e4e8ef" }}>
            <InlineContactForm solutionName={solution.name} ctaHeadline={solution.ctaHeadline} />
          </div>
        </div>
      </section>

      {/* Explore others */}
      <section style={{ background: "#f7f6f2", padding: "clamp(40px, 6vw, 72px) 0 clamp(48px, 7vw, 80px)" }}>
        <div className="sd-pad" style={{ maxWidth: NAV_MAX, margin: "0 auto", boxSizing: "border-box" }}>
          <h2 style={{ ...CLAN, fontSize: "clamp(20px, 2.8vw, 36px)", fontWeight: 900, color: "#2D2973", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 40, marginTop: 0 }}>
            Explore Other{" "}
            {baseHref === "/flagship-solutions" ? "Flagship Solutions" : "Advisory Services"}
          </h2>
          <div className="sd-others-grid">
            {others.map((o) => {
              const slug = o.href.split("/").pop() ?? "";
              const img = slugHeroMap[slug] ?? fallbackHero;
              return (
                <Link key={o.href} to={o.href} style={{ textDecoration: "none" }}>
                  <div
                    style={{ background: "#ffffff", borderTop: "3px solid #D5AF34", borderRadius: 4, overflow: "hidden", display: "flex", flexDirection: "column", transition: "box-shadow 0.2s, transform 0.2s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(45,41,115,0.13)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    <div style={{ height: 150, overflow: "hidden", flexShrink: 0 }}>
                      <img
                        src={img}
                        alt={o.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s" }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                      />
                    </div>
                    <div style={{ padding: "20px 20px 24px" }}>
                      <h4 style={{ ...CLAN, fontSize: 15, fontWeight: 700, color: "#2D2973", lineHeight: 1.4, marginBottom: 14, marginTop: 0 }}>{o.name}</h4>
                      <span style={{ ...CLAN, display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: "#D5AF34", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                        Learn More <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}