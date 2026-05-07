import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageBits";
import { GeoConcentric, GeoSpiral, GeoNetwork } from "@/components/Geometry";
import { advisoryContent } from "@/lib/content";
import { ArrowRight } from "lucide-react";

const geos = [<GeoConcentric />, <GeoSpiral />, <GeoNetwork />];

const slugLinkMap = {
  "business-diagnostic": "/advisory-services/business-diagnostic",
  "consulting-clinic": "/advisory-services/consulting-clinic",
  "executive-advisory": "/advisory-services/executive-advisory",
} as const;

export const Route = createFileRoute("/advisory-services/")({
  head: () => ({
    meta: [
      { title: "Advisory Services — Swiftora Consulting" },
      { name: "description", content: "Focused, high-value support for businesses seeking clarity. Diagnostics, single-issue clinics, and ongoing executive partnership." },
      { property: "og:title", content: "Advisory Services — Swiftora Consulting" },
      { property: "og:description", content: "Focused, high-value support for businesses seeking clarity." },
    ],
  }),
  component: AdvisoryListing,
});

function AdvisoryListing() {
  return (
    <>
      <PageHero
        eyebrow="Advisory Services"
        lines={["The Right", "Advice At The", "Right Time."]}
        subtitle={
          <p>Flexible, senior-level advisory built around your specific challenge, your timeline, and the level of support your business needs right now.</p>
        }
      />
      <section className="tex-dots section-pad" style={{ background: "#f7f6f2" }}>
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-7 stagger">
          {advisoryContent.map((s, i) => (
            <Link
              key={s.slug}
              to={slugLinkMap[s.slug as keyof typeof slugLinkMap]}
              className="group block bg-white rounded-xl overflow-hidden shadow-card hover-lift card-gold-top animate-fade-up"
            >
              <div className="relative h-[200px] overflow-hidden">
                {geos[i]}
                <div className="absolute bottom-3 left-5 font-display" style={{ fontSize: 64, color: "rgba(213,175,52,0.22)", lineHeight: 1 }}>
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
        </div>
      </section>
    </>
  );
}
