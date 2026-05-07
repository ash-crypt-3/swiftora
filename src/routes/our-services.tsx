import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/PageBits";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/our-services")({
  head: () => ({
    meta: [
      { title: "Our Services — Swiftora Consulting" },
      { name: "description", content: "Five practice areas: Strategy, Sales, Marketing, Communication, Research — delivered through structured flagship programmes and flexible advisory engagements." },
      { property: "og:title", content: "Our Services — Swiftora Consulting" },
      { property: "og:description", content: "Five practice areas. Two delivery models. One standard of rigour." },
    ],
  }),
  component: ServicesPage,
});

const tabs = [
  { id: "strategy", label: "Strategy", items: ["Business Review & Audit","Business Model Innovation","Strategic Planning & Review","Business Recovery Planning","Organizational Design & Development","Strategy Implementation Management","Market Entry, Expansion & Diversification","Revenue Growth & Commercial Effectiveness"] },
  { id: "sales", label: "Sales", items: ["Sales Training & Pitching","Pitch Deck Development","Sales Auditing & Planning","Key Account Management","Customer Experience & Retention","Channel & Distribution Optimization","Sales Pipeline Management"] },
  { id: "communication", label: "Communication", items: ["Content Writing & Planning","Business Writing Workshops","Public Speaking & Presentation Coaching","Communication Skills Training","Corporate Communications Audits","Communication Strategy Development","Executive Communication Support"] },
  { id: "research", label: "Research", items: ["Market Research & Feasibility Studies","Business Analysis","Market & Industry Insights","Data Collection & Analysis","Business Plan Development","Business Ideation and Validation","Competitive Intelligence"] },
  { id: "marketing", label: "Marketing", items: ["Brand Workshop & Lead Generation","Personal Branding","Marketing Planning & Review","Go-To-Market Strategy","Marketing Audit","Value Proposition Development","Digital Marketing Strategy"] },
];

function ServicesPage() {
  const [active, setActive] = useState(tabs[0].id);
  const activeTab = tabs.find((t) => t.id === active)!;
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        lines={["Good Ideas", "Brought You", "Here."]}
        subtitle={
          <p>Great solutions keep you here — five disciplines, one firm, one unwavering commitment to your growth.</p>
        }
      />

      <section className="tex-dots section-pad" style={{ background: "#ffffff" }}>
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader eyebrow="Practice Areas" title="What we work on." />
          <div className="mt-14">
            <div className="flex flex-wrap gap-x-8 gap-y-2 border-b border-[#e5e7eb] justify-center">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className="relative py-4 text-[12px] uppercase tracking-[0.1em] font-medium"
                  style={{ color: active === t.id ? "#0A0B14" : "#6b7280" }}
                >
                  {t.label}
                  {active === t.id && <span className="absolute left-0 right-0 -bottom-px h-[2px] bg-gold" />}
                </button>
              ))}
            </div>
            <div key={active} className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-3 max-w-3xl mx-auto animate-fade-in">
              {activeTab.items.map((item) => (
                <div key={item} className="flex items-center gap-3 text-[14px] text-[#374151] py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative tex-noise section-pad clip-diag-top" style={{ background: "#0A0B14", marginTop: "-3vw" }}>
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader eyebrow="Delivery" title="Two ways to engage with us." light />
          <div className="mt-14 grid md:grid-cols-2 gap-8 stagger">
            <Link to="/flagship-solutions" className="block glass-dark rounded-xl p-10 hover-lift animate-fade-up">
              <div className="eyebrow mb-4">Programmes</div>
              <h3 className="font-display text-[26px] text-white">Flagship Solutions</h3>
              <p className="mt-4 text-[14px] text-[#9ca3af] leading-[1.8]">Structured, multi-deliverable engagements built around critical moments — funding readiness, market entry, growth strategy, revenue acceleration, programme design.</p>
              <span className="inline-flex items-center gap-2 mt-6 text-[13px] text-gold font-medium">Explore <ArrowRight size={14} /></span>
            </Link>
            <Link to="/advisory-services" className="block glass-dark rounded-xl p-10 hover-lift animate-fade-up">
              <div className="eyebrow mb-4">Advisory</div>
              <h3 className="font-display text-[26px] text-white">Advisory Services</h3>
              <p className="mt-4 text-[14px] text-[#9ca3af] leading-[1.8]">Flexible, focused support for business owners and senior leaders — diagnostics, single-issue clinics, and ongoing executive partnership.</p>
              <span className="inline-flex items-center gap-2 mt-6 text-[13px] text-gold font-medium">Explore <ArrowRight size={14} /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
