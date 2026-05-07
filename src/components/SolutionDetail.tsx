import { Link } from "@tanstack/react-router";
import { type SolutionContent } from "@/lib/content";
import { ArrowRight } from "lucide-react";
import { PageHero } from "./PageBits";
import type { HeroLines } from "./Hero";

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

      {/* CTA */}
      <section
        className="tex-noise text-center section-pad-sm"
        style={{ background: "#0A0B14", borderTop: "1px solid rgba(213,175,52,0.2)" }}
      >
        <h2 className="font-display text-white" style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>
          {solution.ctaHeadline}
        </h2>
        <Link to="/talk-to-us" className="btn-gold mt-7">
          {solution.ctaButton} <ArrowRight size={14} />
        </Link>
      </section>

      {/* Explore others */}
      <section className="section-pad-sm" style={{ background: "#f7f6f2" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="eyebrow mb-5">
            Explore Other {baseHref === "/flagship-solutions" ? "Flagship Solutions" : "Advisory Services"}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((o) => (
              <a
                key={o.href}
                href={o.href}
                className="block bg-white rounded-lg p-6 border border-[#e5e7eb] hover-lift card-gold-top"
              >
                <h4 className="font-display text-[15px] text-[#0A0B14] leading-[1.4]">{o.name}</h4>
                <span className="inline-flex items-center gap-1.5 mt-3 text-[12px] text-gold font-medium">
                  Learn more <ArrowRight size={12} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
