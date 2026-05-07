import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { PageHero, SectionHeader } from "@/components/PageBits";
import { engagements, getEngagement, type EngagementSlug } from "@/lib/engagements";

export function CaseStudy({ slug }: { slug: EngagementSlug }) {
  const eng = getEngagement(slug)!;
  const related = engagements.filter((e) => e.slug !== eng.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={eng.category}
        title={eng.title}
        subtitle={
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span
                className="text-[11px] font-medium px-2.5 py-1 rounded"
                style={{ background: "rgba(213,175,52,0.18)", color: "#D5AF34" }}
              >
                {eng.category}
              </span>
              <span className="text-[12px] text-[#A19E9E]">Client: {eng.client}</span>
            </div>
            <p>{eng.description}</p>
          </div>
        }
      />

      <article className="section-pad" style={{ background: "#ffffff" }}>
        <div className="max-w-[920px] mx-auto px-6">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-[13px] text-[#2D2973] link-underline mb-10"
          >
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>

          <section className="mb-14">
            <h2 className="font-display text-[28px] text-[#2D2973] mb-4">Project Overview</h2>
            <p className="text-[16px] text-[#4D4D4D] leading-[1.85]">{eng.overview}</p>
            <div className="grid sm:grid-cols-3 gap-5 mt-8">
              {eng.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl p-6 text-center"
                  style={{ background: "#f7f6f2", borderLeft: "3px solid #D5AF34" }}
                >
                  <div className="font-display text-[28px]" style={{ color: "#2D2973" }}>
                    {m.value}
                  </div>
                  <div className="eyebrow mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <h2 className="font-display text-[28px] text-[#2D2973] mb-4">The Challenge</h2>
            <p className="text-[16px] text-[#4D4D4D] leading-[1.85]">{eng.challenge}</p>
            <ul className="mt-6 space-y-3">
              {eng.challengePoints.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-[15px] text-[#4D4D4D] leading-[1.7]"
                >
                  <span
                    className="w-1.5 h-1.5 mt-2.5 rounded-full flex-shrink-0"
                    style={{ background: "#D5AF34" }}
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-14">
            <h2 className="font-display text-[28px] text-[#2D2973] mb-4">The Approach</h2>
            <p className="text-[16px] text-[#4D4D4D] leading-[1.85]">{eng.approach}</p>
            <ol className="mt-6 space-y-4">
              {eng.approachPoints.map((p, i) => (
                <li
                  key={p}
                  className="flex items-start gap-4 text-[15px] text-[#4D4D4D] leading-[1.7]"
                >
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-semibold"
                    style={{ background: "rgba(213,175,52,0.12)", color: "#D5AF34" }}
                  >
                    {i + 1}
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-14">
            <h2 className="font-display text-[28px] text-[#2D2973] mb-4">
              Takeaways &amp; Results
            </h2>
            <p className="text-[16px] text-[#4D4D4D] leading-[1.85]">{eng.results}</p>
            {eng.pullQuote && (
              <blockquote
                className="mt-8 p-7 rounded-xl"
                style={{ background: "#f7f6f2", borderLeft: "3px solid #D5AF34" }}
              >
                <p className="font-display text-[20px] text-[#2D2973] leading-[1.5] italic">
                  "{eng.pullQuote}"
                </p>
              </blockquote>
            )}
          </section>

          {/* TODO: Add full content here — extended narrative, additional images, supporting data visualisations. */}

          <div className="border-t border-[#ececec] pt-10 mt-10">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-[13px] text-[#2D2973] link-underline"
            >
              <ArrowLeft size={14} /> Back to Portfolio
            </Link>
          </div>
        </div>
      </article>

      <section
        className="section-pad-sm"
        style={{ background: "#f7f6f2" }}
        aria-labelledby="related"
      >
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            eyebrow="More Engagements"
            title={<span id="related">Related projects</span>}
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {related.map((r) => (
              <CaseLink key={r.slug} slug={r.slug} title={r.title} category={r.category} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative tex-noise py-24 px-6 md:px-20 text-center clip-diag-top"
        style={{ background: "#0A0B14", marginTop: "-3vw" }}
      >
        <SectionHeader
          eyebrow="Have a similar challenge?"
          title="Discuss a similar project"
          subtitle="Let's talk about how Swiftora can help you get ahead — for good."
          light
        />
        <Link to="/talk-to-us" className="btn-gold mt-10 inline-flex">
          Talk to Us <ArrowRight size={14} />
        </Link>
      </section>
    </>
  );
}

const slugRouteMap: Record<EngagementSlug, string> = {
  "ameer-developers": "/ameer-developers",
  "zuri-nzilani-foundation": "/zuri-nzilani-foundation",
  "alliance-hospital": "/alliance-hospital",
  "rochman-properties": "/rochman-properties",
  herencia: "/herencia",
  "paediatric-allergy-center": "/paediatric-allergy-center",
  "fmcg-distribution-study": "/fmcg-distribution-study",
};

function CaseLink({
  slug,
  title,
  category,
}: {
  slug: EngagementSlug;
  title: string;
  category: string;
}) {
  return (
    <Link
      to={slugRouteMap[slug]}
      className="bg-white rounded-xl p-6 shadow-card hover-lift animate-fade-up"
      style={{ borderLeft: "3px solid #D5AF34" }}
    >
      <div className="eyebrow mb-2">{category}</div>
      <h3 className="font-display text-[17px] text-[#2D2973] leading-[1.4]">{title}</h3>
      <span className="inline-flex items-center gap-2 mt-4 text-[13px] text-gold font-medium">
        Read Case Study <ArrowRight size={14} />
      </span>
    </Link>
  );
}
