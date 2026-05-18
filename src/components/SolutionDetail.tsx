import { Link } from "@tanstack/react-router";
import { type SolutionContent } from "@/lib/content";
import { ArrowRight, Send } from "lucide-react";
import { PageHero } from "./PageBits";
import type { HeroLines } from "./Hero";
import { useState } from "react";

const heroOverrides: Record<string, { eyebrow: string; lines: HeroLines; supporting: string }> = {
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

type FormState = "idle" | "submitting" | "success" | "error";

function ContactForm({ solutionName }: { solutionName: string }) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit() {
    if (!fields.name || !fields.email || !fields.message) return;
    setFormState("submitting");

    // Replace this with your actual form submission endpoint (e.g. Formspree, EmailJS, API route)
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

  if (formState === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: "rgba(213,175,52,0.15)" }}>
          <Send size={24} className="text-gold" />
        </div>
        <h3 className="font-display text-[24px] text-[#0A0B14] mb-3">Message received.</h3>
        <p className="text-[15px] text-[#6b7280] leading-[1.7] max-w-[400px] mx-auto">
          Thank you for reaching out. One of our consultants will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        {/* Name */}
        <div>
          <label className="block text-[13px] font-medium text-[#374151] mb-1.5" htmlFor="name">
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={fields.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full rounded-lg border border-[#e5e7eb] px-4 py-3 text-[14px] text-[#0A0B14] placeholder:text-[#9ca3af] focus:outline-none focus:border-gold transition-colors"
            style={{ background: "#fafaf9" }}
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-[13px] font-medium text-[#374151] mb-1.5" htmlFor="email">
            Email Address <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={fields.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="w-full rounded-lg border border-[#e5e7eb] px-4 py-3 text-[14px] text-[#0A0B14] placeholder:text-[#9ca3af] focus:outline-none focus:border-gold transition-colors"
            style={{ background: "#fafaf9" }}
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-[13px] font-medium text-[#374151] mb-1.5" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={fields.phone}
            onChange={handleChange}
            placeholder="+254 7XX XXX XXX"
            className="w-full rounded-lg border border-[#e5e7eb] px-4 py-3 text-[14px] text-[#0A0B14] placeholder:text-[#9ca3af] focus:outline-none focus:border-gold transition-colors"
            style={{ background: "#fafaf9" }}
          />
        </div>

        {/* Organisation */}
        <div>
          <label className="block text-[13px] font-medium text-[#374151] mb-1.5" htmlFor="organisation">
            Organisation
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            value={fields.organisation}
            onChange={handleChange}
            placeholder="Your company or organisation"
            className="w-full rounded-lg border border-[#e5e7eb] px-4 py-3 text-[14px] text-[#0A0B14] placeholder:text-[#9ca3af] focus:outline-none focus:border-gold transition-colors"
            style={{ background: "#fafaf9" }}
          />
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label className="block text-[13px] font-medium text-[#374151] mb-1.5" htmlFor="message">
          How can we help? <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={fields.message}
          onChange={handleChange}
          placeholder={`Tell us about your challenge or what you'd like from the ${solutionName}…`}
          className="w-full rounded-lg border border-[#e5e7eb] px-4 py-3 text-[14px] text-[#0A0B14] placeholder:text-[#9ca3af] focus:outline-none focus:border-gold transition-colors resize-none"
          style={{ background: "#fafaf9" }}
        />
      </div>

      {formState === "error" && (
        <p className="text-[13px] text-red-500 mb-4">
          Something went wrong. Please try again or email us directly at hello@swiftoraconsulting.co.ke.
        </p>
      )}

      <button
        onClick={handleSubmit}
        disabled={formState === "submitting" || !fields.name || !fields.email || !fields.message}
        className="btn-gold inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {formState === "submitting" ? "Sending…" : "Send Message"}
        <Send size={14} />
      </button>

      <p className="mt-4 text-[12px] text-[#9ca3af]">
        Or reach us directly:{" "}
        <a href="mailto:hello@swiftoraconsulting.co.ke" className="text-gold hover:underline">
          hello@swiftoraconsulting.co.ke
        </a>{" "}
        · 0729 698 380
      </p>
    </div>
  );
}

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
      <PageHero
        eyebrow={heroOverrides[solution.slug]?.eyebrow || solution.name}
        lines={heroOverrides[solution.slug]?.lines || ["", "", solution.name]}
        subtitle={<p>{heroOverrides[solution.slug]?.supporting || solution.short}</p>}
      />

      {/* Description */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="max-w-[860px] mx-auto">
          <div className="w-10 h-[3px] bg-gold mb-5" />
          <div className="eyebrow mb-3">Overview</div>
          <div className="space-y-5 text-[16px] text-[#374151] leading-[1.9]">
            {solution.description.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* Two-column info cards */}
      <section className="section-pad-sm" style={{ background: "#f7f6f2" }}>
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-8">
          {[
            { title: "What You Get", items: solution.whatYouGet },
            { title: solution.whoLabel, items: solution.whoOrWhen },
          ].map((c) => (
            <div key={c.title} className="bg-white rounded-xl p-9 shadow-card">
              <h3
                className="font-display text-[20px] text-[#0A0B14] pl-5"
                style={{ borderLeft: "3px solid #D5AF34" }}
              >
                {c.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {c.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-[14px] text-[#374151] leading-[1.7]">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-gold flex-shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form — replaces the dark CTA box */}
      <section className="section-pad" style={{ background: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
        <div className="max-w-[860px] mx-auto">
          <div className="w-10 h-[3px] bg-gold mb-5" />
          <div className="eyebrow mb-3">Get in Touch</div>
          <h2 className="font-display font-bold text-[#0A0B14] mb-2 leading-[1.25]" style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>
            {solution.ctaHeadline}
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-[1.7] mb-10 max-w-[560px]">
            Fill in the form below and one of our consultants will respond within one business day. Alternatively,{" "}
            <Link to="/talk-to-us" className="text-gold hover:underline font-medium">
              visit our contact page
            </Link>{" "}
            for more options.
          </p>
          <ContactForm solutionName={solution.name} />
        </div>
      </section>

      {/* Explore others */}
      <section className="section-pad-sm" style={{ background: "#f7f6f2" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="eyebrow mb-5">
            Explore Other {baseHref === "/flagship-solutions" ? "Flagship Solutions" : "Advisory Services"}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((o) => (
              <Link
                key={o.href}
                to={o.href}
                className="block bg-white rounded-lg p-6 border border-[#e5e7eb] hover-lift card-gold-top"
              >
                <h4 className="font-display text-[15px] text-[#0A0B14] leading-[1.4]">{o.name}</h4>
                <span className="inline-flex items-center gap-1.5 mt-3 text-[12px] text-gold font-medium">
                  Learn more <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}