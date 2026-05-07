import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, SectionHeader } from "@/components/PageBits";
import { OrbitDiagram } from "@/components/OrbitDiagram";
import { ArrowRight, Target, Eye, Compass, Users } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import foundingHero from "@/assets/founding-story-hero.jpg";
import stephenImg from "@/assets/team/stephen-osumba.jpg";
import nicodemusImg from "@/assets/team/nicodemus-nyambok.jpg";
import geoffreyImg from "@/assets/team/geoffrey-korio.jpg";
import lilianImg from "@/assets/team/lilian-mukami.jpg";
import marcelImg from "@/assets/team/marcel-oketch.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Meet the Swiftora Team | Swiftora Consulting" },
      {
        name: "description",
        content:
          "Meet the strategic minds behind Swiftora Consulting. Our team of business strategists, analysts, and consultants help East African businesses achieve sustainable growth.",
      },
      { property: "og:title", content: "About Us — Meet the Swiftora Team | Swiftora Consulting" },
      {
        property: "og:description",
        content: "Who we are, how we started, and the people behind the strategy.",
      },
    ],
  }),
  component: AboutPage,
});

type TeamMember = {
  id: number;
  name: string;
  title: string;
  image: string;
  shortBio: string;
  fullBio: string;
  expertise: string[];
  credentials: string[];
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Stephen Osomba",
    title: "Sales & Business Strategy",
    image: stephenImg,
    shortBio: "Founder & Lead Strategist",
    fullBio: `Stephen Osomba is the founder and lead strategist at Swiftora Consulting. With over a decade of experience in business strategy, sales acceleration, and commercial effectiveness, Stephen has worked with startups, SMEs, and established enterprises across East Africa to clarify their market positioning, build scalable revenue systems, and execute growth strategies that deliver measurable results.

Before founding Swiftora, Stephen held strategy and business development roles in the financial services and technology sectors, where he developed expertise in market entry, go-to-market strategy, and organizational design. His approach combines analytical rigor with practical implementation focus — he believes that strategy only matters if it can be executed.

Stephen holds a Bachelor's degree in Business Administration from Moi University and has completed executive education programmes in strategic management and entrepreneurship. He is a frequent speaker on business strategy, sales effectiveness, and entrepreneurship in East Africa.

When he's not working with clients, Stephen writes about business strategy, market dynamics, and growth challenges facing African businesses. His writing has been featured in industry publications and business forums across the region.`,
    expertise: [
      "Business Strategy & Planning",
      "Revenue Growth Strategy",
      "Market Entry & Expansion",
      "Sales Process Design",
      "Commercial Effectiveness",
    ],
    credentials: [
      "Bachelor of Business Administration, Moi University",
      "Executive Education in Strategic Management",
      "10+ years in strategy consulting and business development",
    ],
  },
  {
    id: 2,
    name: "Nicodemus Nyambok",
    title: "Data Analysis & Reporting",
    image: nicodemusImg,
    shortBio: "Data Analyst & Business Intelligence Lead",
    fullBio: `Nicodemus Nyambok leads data analysis and business intelligence at Swiftora Consulting. His work focuses on turning raw data into actionable insights that inform strategic decisions and drive measurable business outcomes. Nicodemus has expertise in market research, competitive analysis, financial modeling, and performance analytics.

Nicodemus has worked across sectors including real estate, agriculture, technology, and financial services, conducting feasibility studies, market assessments, and business performance diagnostics. His analytical approach combines quantitative rigor with qualitative market understanding, ensuring that data-driven recommendations are grounded in real-world business context.

Before joining Swiftora, Nicodemus worked as a business analyst and research consultant, where he developed expertise in data collection methodologies, statistical analysis, and business intelligence systems. He is proficient in advanced Excel, data visualization tools, and statistical software.

Nicodemus holds a degree in Economics and Statistics and has completed specialized training in business analytics and market research methodologies. He is passionate about making data accessible and actionable for business leaders who need clarity, not complexity.`,
    expertise: [
      "Business Analytics & Reporting",
      "Market Research & Feasibility Studies",
      "Financial Modeling & Analysis",
      "Competitive Intelligence",
      "Data Visualization & Dashboards",
    ],
    credentials: [
      "Degree in Economics & Statistics",
      "Certified in Business Analytics",
      "8+ years in data analysis and research",
    ],
  },
  {
    id: 3,
    name: "Geoffrey Korio",
    title: "Communication & Research",
    image: geoffreyImg,
    shortBio: "Communications Strategist & Research Lead",
    fullBio: `Geoffrey Korio leads communications strategy and research at Swiftora Consulting. His work focuses on helping organizations articulate their value propositions clearly, communicate with precision, and build messaging frameworks that resonate with their target audiences.

Geoffrey has expertise in corporate communications, content strategy, stakeholder messaging, and research methodology. He has worked with businesses, NGOs, and government agencies to develop communication strategies, create compelling content, and conduct qualitative and quantitative research that informs strategic decision-making.

Before joining Swiftora, Geoffrey worked in corporate communications and public relations, where he managed brand messaging, stakeholder engagement, and thought leadership initiatives for clients across multiple sectors. His approach combines strategic thinking with practical execution — he understands that effective communication is not just about what you say, but how, when, and where you say it.

Geoffrey holds a degree in Communication and Media Studies and has completed training in strategic communications, public relations, and research methodologies. He is a skilled writer, researcher, and communication strategist with a deep understanding of East African business contexts.`,
    expertise: [
      "Corporate Communications Strategy",
      "Content Development & Planning",
      "Stakeholder Messaging",
      "Qualitative & Quantitative Research",
      "Brand Voice & Positioning",
    ],
    credentials: [
      "Degree in Communication & Media Studies",
      "Certified in Strategic Communications",
      "7+ years in communications and research",
    ],
  },
  {
    id: 4,
    name: "Lilian Mukami",
    title: "Marketing & Finance",
    image: lilianImg,
    shortBio: "Marketing Strategist & Financial Analyst",
    fullBio: `Lilian Mukami brings dual expertise in marketing strategy and financial analysis to Swiftora Consulting. Her unique skill set allows her to bridge the gap between marketing investments and financial outcomes, ensuring that marketing strategies are not just creative but commercially viable and financially sound.

Lilian has worked with startups and SMEs to develop go-to-market strategies, build customer acquisition frameworks, and design marketing budgets that maximize ROI. Her financial background enables her to model the commercial impact of marketing initiatives and help businesses allocate resources strategically.

Before joining Swiftora, Lilian held roles in marketing and finance across the technology and consumer goods sectors. She has experience in digital marketing, brand development, customer segmentation, financial planning, and budget management. Her analytical approach to marketing ensures that every campaign, channel, and tactic is evaluated against clear financial metrics.

Lilian holds a degree in Finance and has completed professional training in digital marketing, brand strategy, and financial modeling. She is passionate about helping businesses grow sustainably by aligning marketing ambitions with financial realities.`,
    expertise: [
      "Marketing Strategy & Planning",
      "Go-to-Market Strategy",
      "Customer Acquisition & Retention",
      "Marketing Budget & ROI Analysis",
      "Financial Modeling for Marketing",
    ],
    credentials: [
      "Degree in Finance",
      "Certified Digital Marketing Specialist",
      "6+ years in marketing and finance",
    ],
  },
  {
    id: 5,
    name: "Marcel Oketch",
    title: "Business Technology",
    image: marcelImg,
    shortBio: "Business Technology & Systems Lead",
    fullBio: `Marcel Oketch leads business technology and systems implementation at Swiftora Consulting. His work focuses on helping businesses leverage technology to improve operational efficiency, enhance customer experience, and scale more effectively. Marcel brings expertise in business systems, CRM implementation, process automation, and technology strategy.

Marcel has worked with SMEs and growing businesses to select, implement, and optimize technology solutions that support their strategic objectives. His approach is pragmatic — he understands that technology is a tool, not a solution, and focuses on ensuring that technology investments align with business needs and deliver measurable value.

Before joining Swiftora, Marcel worked in technology consulting and business process optimization, where he helped organizations implement ERP systems, CRM platforms, and workflow automation tools. He has experience across multiple sectors including retail, logistics, professional services, and technology.

Marcel holds a degree in Information Technology and Business Systems and has completed certifications in project management, CRM implementation, and business process management. He is passionate about making technology accessible and useful for businesses that need operational leverage, not complexity.`,
    expertise: [
      "Business Technology Strategy",
      "CRM & ERP Implementation",
      "Process Automation",
      "Business Systems Optimization",
      "Technology Vendor Selection",
    ],
    credentials: [
      "Degree in IT & Business Systems",
      "Certified Project Manager (PMP)",
      "5+ years in business technology consulting",
    ],
  },
];

function FoundingStorySection() {
  return (
    <section className="founding-story-section">
      {/* Hero banner */}
      <div
        className="relative flex items-center overflow-hidden"
        style={{
          height: 400,
          backgroundImage: `url(${foundingHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(135deg, rgba(45, 41, 115, 0.75) 0%, rgba(10, 11, 20, 0.65) 100%)",
          }}
        />
        <div className="relative z-[2] w-full max-w-[1280px] mx-auto px-6 md:px-20">
          <div className="w-12 h-[3px] bg-gold mb-5" />
          <div className="eyebrow mb-3 text-white/80">Our Founding Story</div>
          <h2
            className="font-display font-bold text-white uppercase leading-[1.15]"
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              letterSpacing: "0.02em",
              textShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            Our Founding Story
          </h2>
        </div>
      </div>

      {/* Story content */}
      <div className="bg-white px-6 md:px-20 py-20">
        <div className="max-w-[960px] mx-auto">
          <div
            className="relative rounded-lg p-8 md:p-14 animate-fade-up"
            style={{
              background: "#F7F6F2",
              borderLeft: "4px solid #D5AF34",
            }}
          >
            {/* Decorative quote mark */}
            <span
              aria-hidden="true"
              className="font-display absolute pointer-events-none select-none"
              style={{
                fontSize: 120,
                fontWeight: 700,
                color: "rgba(213,175,52,0.10)",
                top: -20,
                left: 20,
                lineHeight: 1,
              }}
            >
              &ldquo;
            </span>

            <p
              className="text-[15px] md:text-[16px] text-[#4D4D4D] leading-[1.9] mb-6 text-justify story-dropcap"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Our journey began in 2013, with the idea of establishing a consultancy first mooted in
              a student hostel during our college days at Moi University, Eldoret. However, the
              dream was deferred until 21 October 2015, when the first consultancy was formed,
              focusing solely on marketing. This continued for nine years, and before the 10th
              anniversary we decided to change our business model, strategic approach and brand.
            </p>
            <p
              className="text-[15px] md:text-[16px] text-[#4D4D4D] leading-[1.9] mb-6 text-justify"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Throughout our years of experience, we observed countless organizations, particularly
              SMEs, struggling to align their marketing efforts, sales strategies, and long-term
              goals. The gap was clear: they needed a partner who could not only navigate these
              complexities but also transform them into opportunities.
            </p>
            <p
              className="text-[15px] md:text-[16px] text-[#4D4D4D] leading-[1.9] text-justify"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              This realization became the foundation of Swiftora Consulting. We wanted to create
              more than just a consultancy — we wanted to build a trusted partner for businesses
              ready to take bold steps forward. Our mission is simple but profound: to help you
              solve your most pressing challenges, and where necessary, be the guiding force behind
              your business&apos;s success. Let&apos;s continue this journey together. The best is
              yet to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamCard({
  member,
  index,
  onOpen,
}: {
  member: TeamMember;
  index: number;
  onOpen: (m: TeamMember) => void;
}) {
  return (
    <article
      className="team-card group animate-fade-up"
      style={{
        animationDelay: `${index * 90}ms`,
        background: "#FFFFFF",
        borderRadius: 16,
        padding: "32px 20px 28px",
        boxShadow:
          "0 1px 2px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.08)",
        textAlign: "center",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease",
      }}
      tabIndex={0}
      role="button"
      aria-label={`Read biography of ${member.name}, ${member.title}`}
      onClick={() => onOpen(member)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(member);
        }
      }}
    >
      {/* Top gold accent on hover */}
      <span
        aria-hidden="true"
        className="team-card-top-accent"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 3,
          background: "#D5AF34",
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />

      {/* Photo with rotating gold border */}
      <div className="relative w-[120px] h-[120px] mx-auto mb-5">
        <div className="team-photo-border" aria-hidden="true" />
        <img
          src={member.image}
          alt={`${member.name}, ${member.title} at Swiftora Consulting`}
          loading="lazy"
          width={400}
          height={400}
          className="team-photo relative z-[2]"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #F7F6F2",
            transition: "border-color 0.3s ease",
          }}
        />
      </div>

      <h3
        className="font-display font-semibold text-[18px] mb-2 leading-[1.3]"
        style={{ color: "#2D2973" }}
      >
        {member.name}
      </h3>
      <p className="text-[13px] mb-5 leading-[1.5]" style={{ color: "#D5AF34" }}>
        {member.title}
      </p>

      <span
        className="inline-flex items-center justify-center text-[12px] font-semibold rounded-[4px] transition-all"
        style={{
          color: "#2D2973",
          background: "transparent",
          border: "1.5px solid #2D2973",
          padding: "8px 20px",
        }}
      >
        Read Bio
      </span>
    </article>
  );
}

function TeamSection() {
  const [active, setActive] = useState<TeamMember | null>(null);

  return (
    <section
      className="tex-dots section-pad"
      style={{ background: "#F7F6F2" }}
      aria-labelledby="team-heading"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-[640px] mx-auto animate-fade-up">
          <div className="w-10 h-[3px] bg-gold mx-auto mb-4" />
          <div className="eyebrow mb-3">Our Team</div>
          <h2
            id="team-heading"
            className="font-display font-bold leading-[1.2]"
            style={{ color: "#2D2973", fontSize: "clamp(28px, 3.4vw, 40px)" }}
          >
            The People Behind The Strategy
          </h2>
          <p
            className="mt-5 text-[15px] leading-[1.75]"
            style={{ color: "#606161" }}
          >
            Our strength lies in the expertise and experience of our people. Each team member brings
            deep domain knowledge, practical business acumen, and a commitment to delivering
            outcomes that matter.
          </p>
        </div>

        <div
          className="team-grid mt-16 grid gap-8"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          {teamMembers.map((m, i) => (
            <TeamCard key={m.id} member={m} index={i} onOpen={setActive} />
          ))}
        </div>
      </div>

      {/* Bio Modal */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent
          className="p-0 gap-0 overflow-hidden border-0 sm:max-w-[1100px] w-[calc(100vw-32px)] max-h-[90vh] rounded-2xl [&>button]:top-5 [&>button]:right-5 [&>button]:z-10 [&>button]:w-10 [&>button]:h-10 [&>button]:rounded-full [&>button]:bg-[rgba(45,41,115,0.1)] [&>button]:text-[#2D2973] [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:opacity-100 [&>button]:transition-all hover:[&>button]:bg-[#2D2973] hover:[&>button]:text-white"
          style={{ boxShadow: "0 20px 80px rgba(0,0,0,0.3)" }}
        >
          {active && (
            <div className="grid md:grid-cols-[320px_1fr] max-h-[90vh] overflow-hidden">
              {/* Sidebar */}
              <aside
                className="text-center text-white p-10 md:p-12 overflow-y-auto"
                style={{
                  background:
                    "linear-gradient(135deg, #2D2973 0%, #5C5790 100%)",
                }}
              >
                <div
                  className="mx-auto mb-6 overflow-hidden rounded-full"
                  style={{
                    width: 160,
                    height: 160,
                    border: "4px solid rgba(213,175,52,0.3)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                  }}
                >
                  <img
                    src={active.image}
                    alt={`${active.name}, ${active.title}`}
                    width={400}
                    height={400}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <DialogTitle
                  className="font-display font-bold text-white mb-2 leading-[1.3]"
                  style={{ fontSize: 26 }}
                >
                  {active.name}
                </DialogTitle>
                <div
                  className="text-[14px] font-medium mb-1"
                  style={{ color: "#D5AF34" }}
                >
                  {active.title}
                </div>
                <DialogDescription
                  className="text-[13px] italic mb-2"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {active.shortBio}
                </DialogDescription>

                <div
                  className="mt-8 pt-8 text-left"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <h4
                    className="text-[11px] font-semibold uppercase mb-4"
                    style={{ color: "#D5AF34", letterSpacing: "0.15em" }}
                  >
                    Areas of Expertise
                  </h4>
                  <ul className="list-none p-0 m-0 space-y-2">
                    {active.expertise.map((e) => (
                      <li
                        key={e}
                        className="text-[13px] leading-[1.7] pl-5 relative"
                        style={{ color: "rgba(255,255,255,0.85)" }}
                      >
                        <span
                          aria-hidden="true"
                          className="absolute left-0 font-semibold"
                          style={{ color: "#D5AF34" }}
                        >
                          →
                        </span>
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="mt-8 pt-8 text-left"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <h4
                    className="text-[11px] font-semibold uppercase mb-4"
                    style={{ color: "#D5AF34", letterSpacing: "0.15em" }}
                  >
                    Credentials
                  </h4>
                  <ul className="list-none p-0 m-0 space-y-2">
                    {active.credentials.map((c) => (
                      <li
                        key={c}
                        className="text-[13px] leading-[1.7] pl-5 relative"
                        style={{ color: "rgba(255,255,255,0.85)" }}
                      >
                        <span
                          aria-hidden="true"
                          className="absolute left-0 font-semibold"
                          style={{ color: "#D5AF34" }}
                        >
                          →
                        </span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>

              {/* Main content */}
              <div className="relative overflow-y-auto p-8 md:p-12 bio-modal-main">

                <div className="bio-text-content">
                  {active.fullBio.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="text-[15px] leading-[1.9] mb-5"
                      style={{ color: "#4D4D4D", fontFamily: "Poppins, sans-serif" }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function AboutPage() {
  // Structured data — Person schema for each team member
  const personSchema = teamMembers.map((m) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: m.name,
    jobTitle: m.shortBio,
    worksFor: {
      "@type": "Organization",
      name: "Swiftora Consulting Limited",
    },
    description: m.fullBio.split("\n\n")[0],
    knowsAbout: m.expertise,
  }));

  return (
    <>
      <PageHero
        eyebrow="About Us"
        lines={["Your Goals Inspire Us.", "Your Success", "Defines Us."]}
        supportingMaxWidth={480}
        subtitle={
          <p>
            What started as a small group of passionate problem-solvers has grown into a trusted consultancy delivering customised solutions and measurable success for over 10 years.
          </p>
        }
      />

      {/* Story */}
      <section className="tex-dots section-pad" style={{ background: "#f7f6f2" }}>
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <div className="animate-fade-up">
            <div className="w-10 h-[3px] bg-gold mb-4" />
            <div className="eyebrow mb-3">Our Story</div>
            <h2 className="font-display font-bold text-[#0A0B14] leading-[1.25]" style={{ fontSize: "clamp(28px, 3.2vw, 38px)" }}>
              We exist to make great strategy accessible.
            </h2>
            <div className="mt-6 space-y-4 text-[16px] text-[#374151] leading-[1.8]">
              <p>
                Too many Kenyan businesses operate without the strategic discipline they need to grow durably. Too many strong ideas fail because they cannot be presented well to investors, lenders, or customers. Swiftora was founded to close those gaps.
              </p>
              <p>
                We bring institutional-grade rigour to engagements of every size — from a single advisory session to a multi-month transformation. Our approach blends sharp diagnosis, evidence-based research, and disciplined execution.
              </p>
              <p>
                The result is consulting that earns the trust of the founders, executives, and institutions we serve — and that delivers the outcomes they hire us for.
              </p>
            </div>
          </div>
          <div className="flex justify-center pb-16">
            <OrbitDiagram size={340} />
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="relative tex-noise section-pad clip-diag-top" style={{ background: "#0A0B14", marginTop: "-3vw" }}>
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader eyebrow="What Drives Us" title="Mission, Vision, Values" light />
          <div className="mt-16 grid md:grid-cols-3 gap-6 stagger">
            {[
              { icon: Target, title: "Mission", body: "To help businesses and institutions in Africa achieve strategic clarity and sustained growth through consulting that is rigorous, practical, and outcome-driven." },
              { icon: Eye, title: "Vision", body: "To be the most trusted strategy partner for ambitious organisations across the continent — known for the quality of our thinking and the durability of our results." },
              { icon: Compass, title: "Values", body: "Rigour over fluff. Evidence over opinion. Outcomes over outputs. Partnership over distance. Integrity, always." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="glass-dark rounded-xl p-8 hover-lift animate-fade-up">
                <div className="w-12 h-12 rounded-full mb-5 flex items-center justify-center" style={{ background: "rgba(213,175,52,0.12)" }}>
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="font-display text-[22px] text-white mb-3">{title}</h3>
                <p className="text-[14px] text-[#9ca3af] leading-[1.8]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-pad" style={{ background: "#ffffff" }}>
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader eyebrow="How We Work" title="A grounded, structured approach." />
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {[
              { n: "01", t: "Diagnose deeply", d: "We invest the time to understand the real problem before proposing solutions. Most engagements begin with a structured diagnostic." },
              { n: "02", t: "Evidence-led design", d: "Recommendations are grounded in primary research, financial modelling, and direct stakeholder insight — not assumptions." },
              { n: "03", t: "Practical execution", d: "We translate strategy into 90-, 180-, or 360-day plans with clear ownership, milestones, and KPIs." },
              { n: "04", t: "Stay close", d: "We remain engaged through implementation. The work isn't done at the deck hand-off — it's done when the outcome is real." },
            ].map((s) => (
              <div key={s.n} className="bg-white rounded-xl p-8 shadow-card hover-lift card-gold-top">
                <div className="font-display text-[48px] leading-none mb-3" style={{ color: "rgba(213,175,52,0.25)" }}>{s.n}</div>
                <h3 className="font-display text-[22px] text-[#0A0B14] mb-3">{s.t}</h3>
                <p className="text-[14px] text-[#6b7280] leading-[1.8]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <FoundingStorySection />

      {/* Team */}
      <TeamSection />

      {/* CTA */}
      <section className="tex-noise py-20 px-6 md:px-20 text-center" style={{ background: "#0A0B14" }}>
        <Users size={28} className="text-gold mx-auto mb-5" />
        <h2 className="font-display text-white" style={{ fontSize: "clamp(24px, 3vw, 34px)" }}>
          Ready to work with us?
        </h2>
        <Link to="/talk-to-us" className="btn-gold mt-7">
          Talk to Us <ArrowRight size={14} />
        </Link>
      </section>

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
