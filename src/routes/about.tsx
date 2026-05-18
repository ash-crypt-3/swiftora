import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, SectionHeader } from "@/components/PageBits";
import { ArrowRight } from "lucide-react";
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
      { title: "About Us: Integrated Business Strategy & Research Solutions Company | Swiftora Consulting" },
      {
        name: "description",
        content:
          "Learn about Swiftora Consulting's mission to champion business growth in Kenya. Our expert team drives success through smart strategies.",
      },
      { property: "og:title", content: "About Us: Integrated Business Strategy & Research Solutions Company" },
      {
        property: "og:description",
        content: "Learn about Swiftora Consulting's mission to champion business growth in Kenya. Our expert team drives success through smart strategies.",
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
    fullBio: `Marcel Oketch leads business technology and systems at Swiftora Consulting. His work focuses on designing technology-enabled solutions and monitoring frameworks that drive measurable impact and operational effectiveness for organisations.

Marcel has worked with NGOs, development agencies, government institutions, and private sector organisations to design programmes, develop theories of change, build logical frameworks, and establish monitoring systems. His approach ensures that programmes are not only well-designed but also trackable, adaptable, and accountable.

Before joining Swiftora, Marcel held roles in programme management and business technology across the development and public sectors. He has expertise in stakeholder mapping, programme logic, indicator development, data collection systems, and impact evaluation methodologies. His work bridges the gap between strategic intent and on-the-ground implementation.

Marcel holds a degree in Development Studies and has completed specialized training in programme design, M&E, and results-based management. He is passionate about designing programmes that work — and building the systems to prove it.`,
    expertise: [
      "Business Technology & Systems",
      "Programme Design & Logic Models",
      "Monitoring & Evaluation (M&E)",
      "Theory of Change Development",
      "Results-Based Management",
    ],
    credentials: [
      "Degree in Development Studies",
      "Certified in M&E and Results-Based Management",
      "8+ years in programme design and evaluation",
    ],
  },
];

// ─── Corporate Overview ───────────────────────────────────────────────────────

const corporatePillars = [
  {
    title: "Our Mission",
    body: "To deliver customised, practical strategies that drive growth, optimise performance, and create lasting value for our clients.",
    imgSrc: "https://swiftoraconsulting.co.ke/wp-content/uploads/2025/04/AboutUs_Corporate_Overview_Icons-04A.png",
  },
  {
    title: "Our Vision",
    body: "To be the trusted partner organisations turn to for unlocking their full potential, crafting pathways to sustainable success.",
    imgSrc: "https://swiftoraconsulting.co.ke/wp-content/uploads/2025/04/AboutUs_Corporate_Overview_Icons-03A.png",
  },
  {
    title: "Philosophy & Culture",
    body: "We believe in diligence, reliability, and collaboration cultivating a culture that values diverse perspectives and inspires creativity.",
    imgSrc: "https://swiftoraconsulting.co.ke/wp-content/uploads/2025/04/AboutUs_Corporate_Overview_Icons-01A.png",
  },
  {
    title: "Our Promise",
    body: "When the going gets tough, we step in with solutions to keep you ahead for the long haul—and we'll be with you every step of the way.",
    imgSrc: "https://swiftoraconsulting.co.ke/wp-content/uploads/2025/04/AboutUs_Corporate_Overview_Icons-02A.png",
  },
];

function CorporateOverviewSection() {
  return (
    <section className="section-pad" style={{ background: "#ffffff" }}>
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader eyebrow="" title="CORPORATE OVERVIEW" />
        <div className="mt-8 max-w-[860px] space-y-5 text-[16px] text-[#374151] leading-[1.85]">
          <p>
            Swiftora Consulting Limited is a dynamic company providing integrated business strategy and research solutions. We understand that thriving in today's competitive landscape requires more than just effort; it demands insight, sharp thinking, and precision. That's why we specialise in sales, marketing, strategy, and research, delivering solutions tailored to your unique needs and positioning your organisation for sustained growth and prosperity.
          </p>
          <p>
            With a blend of creativity, multi-sectoral expertise, and extensive experience, we help our clients stay ahead of the curve, make smarter decisions, and achieve tangible results. Whether you are looking to optimise performance, design an impactful marketing campaign, or build a future-proof strategy, we are the partner you can rely on. At pivotal moments, we turn complexity into clarity and challenges into opportunities.
          </p>
        </div>

        <div className="mt-6 mb-12">
          <a
            href="https://swiftoraconsulting.co.ke/wp-content/uploads/2025/05/Swiftora-Consulting-Limited-Company-Profile-Digital.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-[14px] transition-all"
            style={{ background: "#D5AF34", color: "#0A0B14" }}
          >
            Download profile <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {corporatePillars.map((p) => (
            <div
              key={p.title}
              className="rounded-xl p-7 text-center animate-fade-up"
              style={{ background: "#f7f6f2", border: "1px solid #e5e7eb" }}
            >
              <img src={p.imgSrc} alt={p.title} className="w-16 h-16 mx-auto mb-4 object-contain" />
              <h3 className="font-display text-[16px] font-semibold text-[#0A0B14] mb-3">{p.title}</h3>
              <p className="text-[13px] text-[#6b7280] leading-[1.8]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Founding Story ───────────────────────────────────────────────────────────

function FoundingStorySection() {
  return (
    <section style={{ background: "#f7f6f2" }}>
      {/* Full-width hero banner — image fills the frame, title overlaid bottom-left */}
      <div className="relative w-full overflow-hidden" style={{ height: 440 }}>
        <img
          src={foundingHero}
          alt="Founding story of Swiftora Consulting"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center center" }}
        />
        {/* Gradient overlay — darker on the left so title text pops */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)",
          }}
        />
        {/* Title pinned to bottom-left, matching the screenshot */}
        <div className="absolute bottom-0 left-0 p-10 md:p-16">
          <h2
            className="font-display font-bold text-white uppercase tracking-widest"
            style={{
              fontSize: "clamp(22px, 3vw, 38px)",
              textShadow: "0 2px 16px rgba(0,0,0,0.55)",
            }}
          >
            Our Founding Story
          </h2>
        </div>
      </div>

      {/* Story text below the banner */}
      <div className="max-w-[1100px] mx-auto px-6 py-14 md:py-16">
        <div className="space-y-5 text-[16px] text-[#374151] leading-[1.85]">
          <p>
            Our journey began in 2013, with the idea of establishing a consultancy first mooted in a student hostel
            during our college days at Moi University, Eldoret. However, the dream was deferred until 21 October 2015,
            when the first consultancy was formed, focusing solely on marketing. This continued for nine years, and
            before the 10th anniversary we decided to change our business model, strategic approach and brand.
          </p>
          <p>
            Throughout our years of experience, we observed countless organizations, particularly SMEs, struggling to
            align their marketing efforts, sales strategies, and long-term goals. The gap was clear: they needed a
            partner who could not only navigate these complexities but also transform them into opportunities.
          </p>
          <p>
            Our founders, with backgrounds in strategy, sales, marketing, and research, recognised it was time to
            create a consultancy that would bring a fresh perspective to the table. Armed with years of industry
            experience, a passion for innovation, and a drive to support African enterprises, we set out to build
            something different—a firm that doesn't just offer solutions but truly partners with clients to build
            lasting success.
          </p>
          <p>
            From humble beginnings, we quickly discovered that the key to growth wasn't just about numbers—it was
            about creating authentic connections, understanding the intricacies of each business, and offering
            customized strategies that drive results.
          </p>
          <p>
            Today, we are proud to have evolved into a trusted consultancy with a reputation for helping businesses
            unlock their potential, solve their most pressing challenges, and achieve their goals. Our journey is
            ongoing, but our mission remains the same: to be the guiding force behind your business's success. Let's
            continue this journey together. The best is yet to come.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Team ─────────────────────────────────────────────────────────────────────

function TeamSection() {
  const [active, setActive] = useState<TeamMember | null>(null);

  return (
    <section className="section-pad" style={{ background: "#ffffff" }}>
      <div className="max-w-[1200px] mx-auto">
        {/* 5 cards on one row — each card is a compact portrait with name, title, Read bio */}
        <div className="grid grid-cols-5 gap-4">
          {teamMembers.map((m) => (
            <div
              key={m.id}
              className="group bg-white rounded-xl overflow-hidden shadow-card hover-lift cursor-pointer animate-fade-up"
              onClick={() => setActive(m)}
            >
              {/* Square portrait */}
              <div className="relative w-full overflow-hidden" style={{ paddingTop: "100%" }}>
                <img
                  src={m.image}
                  alt={m.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-[15px] text-[#0A0B14] mb-0.5 leading-snug">{m.name}</h3>
                <p className="text-[12px] text-gold font-medium mb-3 leading-snug">{m.title}</p>
                <button className="inline-flex items-center gap-1 text-[12px] font-medium text-[#0A0B14] group-hover:text-gold transition-colors">
                  Read bio <ArrowRight size={11} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bio Modal ── */}
      <Dialog open={!!active} onOpenChange={() => setActive(null)}>
        <DialogContent
          className="sm:max-w-[700px] p-0 gap-0 overflow-hidden bio-modal flex flex-col"
          style={{ maxHeight: "90vh" }}
        >
          <DialogTitle className="sr-only">{active?.name} - Full Profile</DialogTitle>
          <DialogDescription className="sr-only">
            Full biography and credentials for {active?.name}, {active?.shortBio} at Swiftora Consulting
          </DialogDescription>

          {active && (
            <div className="flex flex-col min-h-0 h-full">

              {/* ── Fixed header: photo + name + role ── */}
              <div
                className="flex-shrink-0"
                style={{ borderBottom: "1px solid #e5e7eb" }}
              >
                <div className="relative w-full overflow-hidden" style={{ paddingTop: "42%" }}>
                  <img
                    src={active.image}
                    alt={active.name}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                  {/* Gradient so name reads on any photo */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 p-6 md:p-8">
                    <h2
                      className="font-display text-[26px] md:text-[30px] font-bold text-white mb-1"
                      style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
                    >
                      {active.name}
                    </h2>
                    <p className="text-[14px] font-semibold" style={{ color: "#D5AF34" }}>
                      {active.title}
                    </p>
                    <p
                      className="text-[13px] italic mt-0.5"
                      style={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      {active.shortBio}
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Scrollable body ── */}
              <div
                className="flex-1 overflow-y-auto p-8 md:p-10"
                style={{ overflowY: "auto" }}
              >
                {/* Full bio paragraphs */}
                <div className="space-y-4 mb-10">
                  {active.fullBio.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="text-[15px] leading-[1.9]"
                      style={{ color: "#4D4D4D", fontFamily: "Poppins, sans-serif" }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Areas of Expertise */}
                <div className="mb-8">
                  <h3
                    className="font-display text-[17px] font-semibold text-[#0A0B14] mb-4"
                    style={{
                      borderBottom: "2px solid #D5AF34",
                      display: "inline-block",
                      paddingBottom: 4,
                    }}
                  >
                    Areas of Expertise
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {active.expertise.map((exp, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[14px] text-[#374151] leading-[1.7]"
                      >
                        <span className="w-1.5 h-1.5 mt-2 rounded-full flex-shrink-0" style={{ background: "#D5AF34" }} />
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Credentials */}
                <div className="mb-4">
                  <h3
                    className="font-display text-[17px] font-semibold text-[#0A0B14] mb-4"
                    style={{
                      borderBottom: "2px solid #D5AF34",
                      display: "inline-block",
                      paddingBottom: 4,
                    }}
                  >
                    Credentials & Background
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {active.credentials.map((cred, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[14px] text-[#374151] leading-[1.7]"
                      >
                        <span className="w-1.5 h-1.5 mt-2 rounded-full flex-shrink-0" style={{ background: "#D5AF34" }} />
                        <span>{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

// ─── Why Choose Us ────────────────────────────────────────────────────────────

function WhyChooseUsSection() {
  const reasons = [
    "Strict adherence to high professional performance standards.",
    "We prioritize timely delivery to meet your needs.",
    "We go above and beyond when circumstances demand.",
    "Every engagement is backed by a legally binding contract with clearly defined objectives.",
    "Our solutions are customized and priced to fit businesses of all sizes and stages.",
  ];

  return (
    <section className="section-pad" style={{ background: "#f7f6f2" }}>
      <div className="max-w-[860px] mx-auto">
        <SectionHeader eyebrow="" title="WHY CHOOSE US?" />
        <ul className="mt-8 space-y-3">
          {reasons.map((r, i) => (
            <li key={i} className="text-[15px] text-[#374151] leading-[1.75]">
              • {r}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

function AboutPage() {
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
        eyebrow="ABOUT US"
        lines={["Your Goals Inspire Us.", "Your Success", "Defines Us."]}
        supportingMaxWidth={560}
        subtitle={
          <>
            <p style={{ color: "#ffffff", textShadow: "0 1px 4px rgba(0,0,0,0.7)", fontWeight: 500 }}>
              What started as a small group of passionate problem-solvers has grown into a trusted consultancy with a reputation for delivering customized solutions and measurable success for over 10 years.
            </p>
            <p className="mt-3" style={{ color: "#ffffff", textShadow: "0 1px 4px rgba(0,0,0,0.7)", fontWeight: 500 }}>
              From our very first project to today, we've remained committed to one core belief: no challenge is too big, no detail too small, and no goal out of reach. This is Swiftora Way. Get Ahead, For Good.
            </p>
          </>
        }
      />

      <CorporateOverviewSection />
      <FoundingStorySection />
      <TeamSection />
      <WhyChooseUsSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}