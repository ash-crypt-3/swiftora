import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, ExternalLink } from "lucide-react";
import { PageHero, SectionHeader } from "@/components/PageBits";
import { ClientMarquee } from "@/components/ClientMarquee";
import { engagements, type EngagementSlug } from "@/lib/engagements";

// Image Imports: Portfolio Gallery
import p1 from "@/assets/portfolio/Portfolio-01.png";
import p2 from "@/assets/portfolio/Portfolio-02.png";
import p3 from "@/assets/portfolio/Portfolio-03.png";
import p4 from "@/assets/portfolio/Portfolio-04.png";
import p5 from "@/assets/portfolio/Portfolio-05.png";
import p6 from "@/assets/portfolio/Portfolio-06.png";

// Image Imports: Featured Engagements (01-07)
import f1 from "@/assets/featured-engagements/Featured-Engagement-01-Title.jpg";
import f2 from "@/assets/featured-engagements/Featured-Engagement-02-Title.jpg";
import f3 from "@/assets/featured-engagements/Featured-Engagement-03-Title.jpg";
import f4 from "@/assets/featured-engagements/Featured-Engagement-04-Title.jpg";
import f5 from "@/assets/featured-engagements/Featured-Engagement-05-Title.jpg";
import f6 from "@/assets/featured-engagements/Featured-Engagement-06-Title.jpg";
import f7 from "@/assets/featured-engagements/Featured-Engagement-07-Title.jpg";

const galleryImages = [p1, p2, p3, p4, p5, p6];

// Mapping correctly to the engagement slugs
const engagementImages: Record<EngagementSlug, string> = {
  "ameer-developers": f1,
  "zuri-nzilani-foundation": f2,
  "alliance-hospital": f3,
  "rochman-properties": f4,
  herencia: f5,
  "paediatric-allergy-center": f6,
  "fmcg-distribution-study": f7,
};

const slugRoute: Record<EngagementSlug, string> = {
  "ameer-developers": "/ameer-developers",
  "zuri-nzilani-foundation": "/zuri-nzilani-foundation",
  "alliance-hospital": "/alliance-hospital",
  "rochman-properties": "/rochman-properties",
  herencia: "/herencia",
  "paediatric-allergy-center": "/paediatric-allergy-center",
  "fmcg-distribution-study": "/fmcg-distribution-study",
};

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Swiftora+Consulting+Limited+Reviews";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Swiftora Consulting" },
      {
        name: "description",
        content:
          "Selected engagements across real estate, healthcare, FMCG and the social sector. Strategy that delivered measurable outcomes.",
      },
      { property: "og:title", content: "Portfolio — Swiftora Consulting" },
      {
        property: "og:description",
        content: "Work that delivered measurable results across sectors.",
      },
    ],
  }),
  component: PortfolioPage,
});

const reviews = [
  {
    name: "Wanjiru K.",
    rating: 5,
    date: "March 2026",
    text: "Swiftora's team delivered an exceptional growth strategy. Their insight into the Kenyan market is unmatched, and they backed every recommendation with data we could act on.",
  },
  {
    name: "David O.",
    rating: 5,
    date: "February 2026",
    text: "Professional, rigorous, and genuinely invested in our outcomes. The clarity they brought to our go-to-market plan transformed how the leadership team thinks about growth.",
  },
  {
    name: "Amina H.",
    rating: 5,
    date: "January 2026",
    text: "We engaged Swiftora for a feasibility study and ended up with a roadmap we are still executing. Sharp, candid, and commercially minded.",
  },
  {
    name: "Brian M.",
    rating: 5,
    date: "December 2025",
    text: "What stood out was the discipline. Every workshop had a clear output, every recommendation a clear owner. Worth every shilling.",
  },
  {
    name: "Lydia N.",
    rating: 5,
    date: "November 2025",
    text: "A consulting partner that respects your context. They listened first, then challenged us where it counted.",
  },
  {
    name: "Tom A.",
    rating: 4,
    date: "October 2025",
    text: "Strong strategy work and a refreshing willingness to roll up sleeves on execution. Recommended.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "text-gold" : "text-[#e5e7eb]"}
          fill={i < count ? "#D5AF34" : "transparent"}
        />
      ))}
    </div>
  );
}

function PortfolioPage() {
  const featured = engagements.slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        lines={["Delivering", "Excellence,", "Redefining Possibilities."]}
        supportingMaxWidth={500}
        subtitle={
          <p>
            At Swiftora Consulting Limited, every project tells a story of innovation, growth, and success — across corporates, startups, and individuals.
          </p>
        }
      />

      {/* Portfolio Gallery */}
      <section
        className="tex-dots section-pad"
        style={{ background: "#f7f6f2" }}
        aria-labelledby="portfolio-gallery"
      >
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            eyebrow="Visual Highlights"
            title={<span id="portfolio-gallery">Portfolio Gallery</span>}
            subtitle="A glimpse of the work we've delivered. Detailed case studies are below."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-xl shadow-card hover-lift animate-fade-up overflow-hidden relative group"
                style={{
                  background: "#1a2035",
                  border: "1px solid rgba(213,175,52,0.18)",
                }}
              >
                <img 
                  src={img} 
                  alt={`Portfolio showcase ${i + 1}`} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0A0B14]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white">
                  <div className="eyebrow text-gold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Project</div>
                  <div className="text-[14px] tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    #{String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 70% 30%, rgba(213,175,52,0.1) 0%, transparent 60%)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Engagements */}
      <section
        className="relative tex-noise section-pad clip-diag-top"
        style={{ background: "#2D2973", marginTop: "-3vw" }}
        aria-labelledby="featured-engagements"
      >
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            eyebrow="Selected Work"
            title={<span id="featured-engagements">Featured Engagements</span>}
            light
          />
          <div className="mt-14 grid md:grid-cols-2 gap-8 stagger">
            {featured.map((e) => (
              <Link
                key={e.slug}
                to={slugRoute[e.slug]}
                className="block rounded-lg overflow-hidden hover-lift animate-fade-up group"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderLeft: "3px solid #D5AF34",
                }}
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img 
                    src={engagementImages[e.slug]} 
                    alt={e.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2973]/95 via-[#2D2973]/40 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="eyebrow mb-3">{e.category}</div>
                  <h3 className="font-display text-[24px] text-white leading-[1.35]">
                    {e.title}
                  </h3>
                  <p className="mt-4 text-[14px] text-[#A19E9E] leading-[1.7]">
                    {e.description}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-6 text-[13px] text-gold font-medium">
                    Read More{" "}
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1.5 transition-transform"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/featured-engagements-archives"
              className="btn-outline-gold"
            >
              View All Engagements <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section
        className="section-pad"
        style={{ background: "#ffffff" }}
        aria-labelledby="testimonials"
      >
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            eyebrow="Client Voices"
            title={<span id="testimonials">Client testimonials</span>}
            subtitle="Real reviews from clients we've partnered with — published on Google."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {reviews.map((r, i) => (
              <article
                key={i}
                className="bg-white rounded-xl p-7 shadow-card hover-lift animate-fade-up flex flex-col"
                style={{ border: "1px solid #ececec" }}
              >
                <Stars count={r.rating} />
                <p className="mt-4 text-[14px] text-[#4D4D4D] leading-[1.7] flex-1 line-clamp-5">
                  "{r.text}"
                </p>
                <div className="mt-5 pt-4 border-t border-[#f1f0ec]">
                  <div className="text-[13px] font-medium text-[#0A0B14]">
                    {r.name}
                  </div>
                  <div className="text-[12px] text-[#9ca3af] mt-0.5">
                    {r.date}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
            >
              Read All Reviews on Google{" "}
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      <ClientMarquee />

      {/* CTA */}
      <section
        className="relative tex-noise py-24 px-6 md:px-20 text-center clip-diag-top"
        style={{ background: "#0A0B14", marginTop: "-3vw" }}
      >
        <SectionHeader
          eyebrow="Let's work together"
          title="Let's do great things"
          subtitle="Partner with Swiftora to translate insight into outcomes."
          light
        />
        <Link to="/talk-to-us" className="btn-gold mt-10 inline-flex">
          Talk to Us <ArrowRight size={14} />
        </Link>
      </section>
    </>
  );
}

export default PortfolioPage;