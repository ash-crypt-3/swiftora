import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/PageBits";
import { engagements, type EngagementSlug } from "@/lib/engagements";

const slugRoute: Record<EngagementSlug, string> = {
  "ameer-developers": "/ameer-developers",
  "zuri-nzilani-foundation": "/zuri-nzilani-foundation",
  "alliance-hospital": "/alliance-hospital",
  "rochman-properties": "/rochman-properties",
  herencia: "/herencia",
  "paediatric-allergy-center": "/paediatric-allergy-center",
  "fmcg-distribution-study": "/fmcg-distribution-study",
};

export const Route = createFileRoute("/featured-engagements-archives")({
  head: () => ({
    meta: [
      { title: "Featured Engagements — Swiftora Consulting" },
      {
        name: "description",
        content:
          "All featured Swiftora engagements across real estate, healthcare, not-for-profit, FMCG and market research.",
      },
      {
        property: "og:title",
        content: "Featured Engagements — Swiftora Consulting",
      },
      {
        property: "og:description",
        content: "Every featured Swiftora engagement, in one place.",
      },
    ],
  }),
  component: ArchivePage,
});

function ArchivePage() {
  return (
    <>
      <PageHero
        eyebrow="Archive"
        title="Featured Engagements"
        subtitle={
          <p>
            The full catalogue of featured Swiftora engagements. Click into any
            project to read the full case study.
          </p>
        }
      />

      <section className="section-pad" style={{ background: "#f7f6f2" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-8">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-[13px] text-[#2D2973] link-underline"
            >
              <ArrowLeft size={14} /> Back to Portfolio
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 stagger">
            {engagements.map((e) => (
              <Link
                key={e.slug}
                to={slugRoute[e.slug]}
                className="bg-white rounded-xl overflow-hidden shadow-card hover-lift card-gold-top animate-fade-up flex flex-col"
                style={{ borderLeft: "3px solid #D5AF34" }}
              >
                <div
                  className="aspect-[16/10]"
                  style={{
                    background:
                      "linear-gradient(135deg, #1a2035 0%, #2D2973 100%)",
                  }}
                  aria-hidden="true"
                />
                <div className="p-7 flex-1 flex flex-col">
                  <span
                    className="inline-block self-start text-[11px] font-medium px-2.5 py-1 rounded"
                    style={{
                      background: "rgba(213,175,52,0.12)",
                      color: "#D5AF34",
                    }}
                  >
                    {e.category}
                  </span>
                  <h3 className="font-display text-[19px] text-[#2D2973] mt-3 leading-[1.4]">
                    {e.title}
                  </h3>
                  <p className="mt-3 text-[13px] text-[#606161] leading-[1.7] flex-1">
                    {e.description}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-5 text-[13px] text-gold font-medium">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
