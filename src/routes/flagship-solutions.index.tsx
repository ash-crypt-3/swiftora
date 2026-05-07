import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageBits";
import { GeoDiamondGrid, GeoSpiral, GeoTriangles, GeoBars, GeoNetwork } from "@/components/Geometry";
import { flagshipContent } from "@/lib/content";
import { ArrowRight } from "lucide-react";
import { type ReactNode } from "react";

export const Route = createFileRoute("/flagship-solutions/")({
  head: () => ({
    meta: [
      { title: "Flagship Solutions — Swiftora Consulting" },
      { name: "description", content: "Structured, high-impact consulting engagements designed to address complex business challenges and deliver measurable results." },
      { property: "og:title", content: "Flagship Solutions — Swiftora Consulting" },
      { property: "og:description", content: "Structured, high-impact consulting engagements built for outcomes." },
    ],
  }),
  component: FlagshipListing,
});

const geos: ReactNode[] = [<GeoDiamondGrid />, <GeoSpiral />, <GeoTriangles />, <GeoBars />, <GeoNetwork />];

const slugLinkMap = {
  "capital-readiness": "/flagship-solutions/capital-readiness",
  "feasibility-market-entry": "/flagship-solutions/feasibility-market-entry",
  "sme-growth-blueprint": "/flagship-solutions/sme-growth-blueprint",
  "revenue-acceleration": "/flagship-solutions/revenue-acceleration",
  "programme-design": "/flagship-solutions/programme-design",
} as const;

function FlagshipListing() {
  return (
    <>
      <PageHero
        eyebrow="Flagship Solutions"
        lines={["Built For", "Your Most", "Critical Moments."]}
        subtitle={
          <p>Structured, high-impact consulting programmes for organisations at every stage of growth, investment, and transformation.</p>
        }
      />
      <section className="tex-dots section-pad" style={{ background: "#f7f6f2" }}>
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-7 stagger">
          {flagshipContent.map((s, i) => (
            <Link
              key={s.slug}
              to={slugLinkMap[s.slug as keyof typeof slugLinkMap]}
              className="group block bg-white rounded-xl overflow-hidden shadow-card hover-lift card-gold-top animate-fade-up"
            >
              <div className="relative h-[200px] overflow-hidden">
                {geos[i]}
                <div
                  className="absolute bottom-3 left-5 font-display"
                  style={{ fontSize: 64, color: "rgba(213,175,52,0.22)", lineHeight: 1 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-[22px] text-[#0A0B14] leading-[1.3]">{s.name}</h3>
                <p className="mt-3 mb-5 text-[14px] text-[#6b7280] leading-[1.7]">{s.short}</p>
                <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.15em] text-gold font-semibold">
                  Learn More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
          {/* CTA card */}
          <div className="relative tex-noise rounded-xl p-10 flex flex-col justify-center items-center text-center" style={{ background: "#0A0B14" }}>
            <p className="font-display italic text-white text-[22px] leading-[1.4]">Strategy. Clarity. Growth.™</p>
            <p className="mt-4 text-[14px] text-[#9ca3af] leading-[1.7]">Tell us where you're headed. We'll help you build the path that gets you there.</p>
            <Link to="/talk-to-us" className="btn-gold mt-8">Contact Us <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
