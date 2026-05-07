import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, SectionHeader } from "@/components/PageBits";
import { Hero, type HeroSlide } from "@/components/Hero";
import { OrbitDiagram } from "@/components/OrbitDiagram";
import { ArrowRight, Search, BarChart3, RefreshCw, Zap } from "lucide-react";
import { articles } from "@/lib/content";
import { usePosts } from "@/hooks/useWordPress";
import { getFeaturedImage, getCategory, formatDate } from "@/services/wordpress";
import hero1 from "@/assets/heroes/hero-1.jpg";
import hero2 from "@/assets/heroes/hero-2.jpg";
import hero3 from "@/assets/heroes/hero-3.jpg";
import strategyImg from "@/assets/services/strategy.png";
import salesImg from "@/assets/services/sales.png";
import marketingImg from "@/assets/services/marketing.png";
import communicationImg from "@/assets/services/communication.png";
import researchImg from "@/assets/services/research.png";
import { ClientMarquee } from "@/components/ClientMarquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swiftora Consulting — Get Ahead For Good" },
      { name: "description", content: "Strategy, sales, marketing, communication and research consulting for ambitious Kenyan businesses. Built for outcomes, not outputs." },
      { property: "og:title", content: "Swiftora Consulting — Get Ahead For Good" },
      { property: "og:description", content: "Strategy, sales, marketing, communication and research consulting for ambitious Kenyan businesses." },
    ],
  }),
  component: HomePage,
});

const homeSlides: HeroSlide[] = [
  {
    eyebrow: "Welcome",
    lines: ["Strategise ·", "Optimise ·", "Realise."],
    image: hero1,
  },
  {
    eyebrow: "Our Expertise",
    lines: ["Strategy ·", "Sales · Marketing ·", "Research."],
    image: hero2,
  },
  {
    eyebrow: "Our Promise",
    lines: ["Championing", "Your", "Growth."],
    image: hero3,
  },
  {
    eyebrow: "Contact Us",
    lines: ["Let's Make", "Great Things", "Happen."],
    image: hero1,
  },
];

function HeroSlider() {
  return (
    <Hero
      variant="home"
      slides={homeSlides}
      supporting={<p>Strategy, sales, marketing, communication and research consulting for ambitious Kenyan businesses.</p>}
      cta={{ label: "Discover More", to: "/about" }}
    />
  );
}

function AboutSection() {
  return (
    <section className="tex-dots section-pad" style={{ background: "#f7f6f2" }}>
      <div className="max-w-[1300px] mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <div className="animate-fade-up">
          <div className="w-10 h-[3px] bg-gold mb-4" />
          <div className="eyebrow mb-3">Who We Are</div>
          <h2 className="font-display font-bold text-[#2D2973] leading-[1.25]" style={{ fontSize: "clamp(28px, 3.4vw, 40px)" }}>
            Cracking the code of sales, marketing, and business strategy.
          </h2>
          <div className="mt-6 space-y-4 text-[16px] text-[#4D4D4D] leading-[1.8] max-w-[560px]">
            <p>
              Swiftora Consulting Limited is a Kenyan business strategy firm built to help founders, executives, and institutions get ahead — and stay ahead. We work with organisations at every stage of growth, translating data into strategy and strategy into action.
            </p>
            <p>
              We believe the best work happens when sharp insight meets disciplined execution. That's the standard we hold ourselves to on every engagement.
            </p>
          </div>
          <Link to="/about" className="btn-outline-gold mt-8">
            Discover More <ArrowRight size={14} />
          </Link>
        </div>
        <div className="flex justify-center pb-16">
          <OrbitDiagram size={320} />
        </div>
      </div>
    </section>
  );
}

const valueCards = [
  { icon: Search, title: "Precise Diagnosis", desc: "Root causes, not surface symptoms" },
  { icon: BarChart3, title: "Market Intelligence", desc: "Data-led clarity for confident decisions" },
  { icon: RefreshCw, title: "Adaptive Solutions", desc: "Frameworks that flex with your context" },
  { icon: Zap, title: "Accelerated Growth", desc: "Insight turned into measurable momentum" },
];

function ValueProp() {
  return (
    <section className="relative tex-noise section-pad clip-diag-top" style={{ background: "#2D2973", marginTop: "-3vw" }}>
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader
          eyebrow="Value Proposition"
          title={<>Built to deliver outcomes, not outputs.</>}
          subtitle="With custom solutions tailored to your unique needs, we use a blend of sharp insights, proven methods, and innovative thinking to solve even the toughest business problems."
          light
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger">
          {valueCards.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass-dark rounded-xl p-8 text-center hover-lift animate-fade-up"
            >
              <div
                className="w-12 h-12 rounded-full mx-auto mb-5 flex items-center justify-center"
                style={{ background: "rgba(213,175,52,0.12)" }}
              >
                <Icon size={22} className="text-gold" />
              </div>
              <h3 className="font-display text-[18px] text-white mb-2">{title}</h3>
              <p className="text-[13px] text-[#A19E9E]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const tabs = [
  {
    id: "strategy",
    label: "Strategy",
    items: [
      "Business Review & Audit",
      "Business Model Innovation",
      "Strategic Planning & Review",
      "Business Recovery Planning",
      "Organizational Design & Development",
      "Strategy Implementation Management",
      "Market Entry, Expansion & Diversification",
      "Revenue Growth & Commercial Effectiveness",
    ],
  },
  {
    id: "sales",
    label: "Sales",
    items: [
      "Sales Training & Pitching",
      "Pitch Deck Development",
      "Sales Auditing & Planning",
      "Key Account Management",
      "Customer Experience & Retention",
      "Channel & Distribution Optimization",
      "Sales Pipeline Management",
    ],
  },
  {
    id: "communication",
    label: "Communication",
    items: [
      "Content Writing & Planning",
      "Business Writing Workshops",
      "Public Speaking & Presentation Coaching",
      "Communication Skills Training",
      "Corporate Communications Audits",
      "Communication Strategy Development",
      "Executive Communication Support",
    ],
  },
  {
    id: "research",
    label: "Research",
    items: [
      "Market Research & Feasibility Studies",
      "Business Analysis",
      "Market & Industry Insights",
      "Data Collection & Analysis",
      "Business Plan Development",
      "Business Ideation and Validation",
      "Competitive Intelligence",
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    items: [
      "Brand Workshop & Lead Generation",
      "Personal Branding",
      "Marketing Planning & Review",
      "Go-To-Market Strategy",
      "Marketing Audit",
      "Value Proposition Development",
      "Digital Marketing Strategy",
    ],
  },
];

function ServicesSection() {
  const [active, setActive] = useState(tabs[0].id);
  const activeTab = tabs.find((t) => t.id === active)!;

  return (
    <section className="tex-dots section-pad clip-diag-top" style={{ background: "#ffffff", marginTop: "-3vw" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center animate-fade-up">
          <div className="w-10 h-[3px] bg-gold mx-auto mb-4" />
          <div className="eyebrow mb-3">What We Do</div>
          <Link to="/our-services">
            <h2
              className="font-display font-bold text-[#2D2973] leading-[1.2] link-underline inline-block"
              style={{ fontSize: "clamp(28px, 3.2vw, 38px)" }}
            >
              Consulting Services
            </h2>
          </Link>
          <p className="mt-5 text-[15px] text-[#606161] leading-[1.75] max-w-[560px] mx-auto">
            Whether you are a startup seeking market entry, a mid-sized company looking to scale, or an established enterprise needing reinvention, we translate data into strategy and strategy into action.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/our-services" className="btn-gold">Explore</Link>
            <Link to="/flagship-solutions" className="btn-dark">Flagship Solutions</Link>
            <Link to="/advisory-services" className="btn-gold">Advisory Services</Link>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap gap-x-8 gap-y-2 border-b border-[#e5e7eb]">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className="relative py-4 text-[12px] uppercase tracking-[0.1em] font-medium transition-colors"
                style={{ color: active === t.id ? "#2D2973" : "#606161" }}
              >
                {t.label}
                {active === t.id && (
                  <span className="absolute left-0 right-0 -bottom-px h-[2px] bg-gold" />
                )}
              </button>
            ))}
          </div>
          <div key={active} className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-3 animate-fade-in">
            {activeTab.items.map((item) => (
              <div key={item} className="flex items-center gap-3 text-[14px] text-[#4D4D4D] py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ThinkPiecesSection() {
  const { posts, isLoading } = usePosts({ perPage: 2 });
  const fallback = articles.slice(0, 2).map((a) => ({
    id: a.slug,
    slug: a.slug,
    _wp: false as const,
    title: a.title,
    excerpt: a.excerpt,
    category: a.category,
    image: null as string | null,
    date: "",
  }));
  const items = !isLoading && posts.length
    ? posts.slice(0, 2).map((p: any) => ({
        id: p.id,
        slug: p.slug,
        _wp: true as const,
        title: p.title?.rendered || "",
        excerpt: p.excerpt?.rendered || "",
        category: getCategory(p) || "Insight",
        image: getFeaturedImage(p),
        date: formatDate(p.date),
      }))
    : fallback;

  return (
    <section className="section-pad-sm" style={{ background: "#f7f6f2" }}>
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          eyebrow="Insights"
          title="Think Pieces"
          subtitle="Perspectives on business, strategy, and growth in Kenya."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-8 stagger">
          {items.map((a) => (
            <Link
              key={a.id}
              to="/think-pieces/$slug"
              params={{ slug: a.slug }}
              className="block bg-white rounded-xl overflow-hidden shadow-card hover-lift card-gold-top animate-fade-up"
            >
              <div
                className="h-44 flex items-center justify-center relative bg-cover bg-center"
                style={{
                  background: a.image
                    ? `linear-gradient(135deg, rgba(26,32,53,0.35), rgba(10,11,20,0.45)), url(${a.image}) center/cover`
                    : "linear-gradient(135deg, #1a2035, #2D2973)",
                }}
              >
                {!a.image && <div className="eyebrow">{a.category}</div>}
              </div>
              <div className="p-7">
                <span
                  className="inline-block text-[11px] font-medium px-2.5 py-1 rounded"
                  style={{ background: "rgba(213,175,52,0.12)", color: "#D5AF34" }}
                >
                  {a.category}
                </span>
                {a._wp ? (
                  <h3
                    className="font-display text-[20px] text-[#2D2973] mt-3 leading-[1.4]"
                    dangerouslySetInnerHTML={{ __html: a.title }}
                  />
                ) : (
                  <h3 className="font-display text-[20px] text-[#2D2973] mt-3 leading-[1.4]">{a.title}</h3>
                )}
                {a._wp ? (
                  <div
                    className="mt-3 text-[14px] text-[#606161] leading-[1.7] line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: a.excerpt }}
                  />
                ) : (
                  <p className="mt-3 text-[14px] text-[#606161] leading-[1.7] line-clamp-3">{a.excerpt}</p>
                )}
                {a.date && <div className="mt-3 text-[12px] text-[#9ca3af]">{a.date}</div>}
                <span className="inline-flex items-center gap-2 mt-5 text-[13px] text-gold font-medium">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/think-pieces" className="text-[14px] text-gold link-underline font-medium">
            View All Posts →
          </Link>
        </div>
      </div>
    </section>
  );
}


function FeaturedEngagements() {
  const engagements = [
    { category: "Real Estate", title: "Marketing Gated Communities in Kenya" },
    { category: "Not for Profit", title: "Transforming Maternal Health Outcomes through Strategic Messaging" },
  ];
  return (
    <section className="relative tex-noise section-pad clip-diag-top" style={{ background: "#2D2973", marginTop: "-3vw" }}>
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader eyebrow="Selected Work" title="Work that delivered results." light />
        <div className="mt-14 grid md:grid-cols-2 gap-8 stagger">
          {engagements.map((e) => (
            <Link
              key={e.title}
              to="/portfolio"
              className="block rounded-lg p-10 hover-lift animate-fade-up group"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderLeft: "3px solid #D5AF34",
              }}
            >
              <div className="eyebrow mb-4">{e.category}</div>
              <h3 className="font-display text-[26px] text-white leading-[1.35]">{e.title}</h3>
              <span className="inline-flex items-center gap-2 mt-6 text-[13px] text-gold font-medium">
                View Case Study <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const flipCards = [
  {
    title: "Strategy",
    blurb: "Strategic planning and business model innovation.",
    image: strategyImg,
    bullets: ["Business Review & Audit", "Strategic Planning & Review", "Market Entry & Expansion"],
  },
  {
    title: "Sales",
    blurb: "Pipeline discipline and commercial effectiveness.",
    image: salesImg,
    bullets: ["Sales Auditing & Planning", "Key Account Management", "Pitch Deck Development"],
  },
  {
    title: "Marketing",
    blurb: "Go-to-market strategy that compounds.",
    image: marketingImg,
    bullets: ["Go-To-Market Strategy", "Brand & Lead Generation", "Marketing Audit"],
  },
  {
    title: "Communication",
    blurb: "Sharper messaging, stronger presence.",
    image: communicationImg,
    bullets: ["Communication Strategy", "Executive Coaching", "Corporate Communications Audits"],
  },
  {
    title: "Research",
    blurb: "Evidence-led clarity for decisions that stick.",
    image: researchImg,
    bullets: ["Market Research & Feasibility", "Business Plan Development", "Competitive Intelligence"],
  },
];

function ServiceFlipCards() {
  return (
    <section className="section-pad-sm" style={{ background: "#FFFFFF" }}>
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          eyebrow="Practice Areas"
          title="Where rigour meets results."
          subtitle="Hover any card to reveal the work we do across the disciplines that move businesses forward."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {flipCards.map((c) => (
            <div key={c.title} className="flip-card animate-fade-up" tabIndex={0}>
              <div className="flip-inner shadow-card">
                <div
                  className="flip-face flex flex-col items-center justify-center p-8 text-center"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(204,204,204,0.6)" }}
                >
                  <div
                    className="w-20 h-20 rounded-full mb-5 bg-cover bg-center"
                    style={{ backgroundImage: `url(${c.image})`, border: "2px solid #D5AF34" }}
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-[24px] text-[#2D2973] mb-2">{c.title}</h3>
                  <p className="text-[13px] text-[#4D4D4D] leading-[1.7]">{c.blurb}</p>
                  <span className="mt-5 text-[11px] uppercase tracking-[0.2em] text-[#D5AF34] font-semibold">
                    Hover to explore
                  </span>
                </div>
                <div
                  className="flip-face flip-face--back bg-cover bg-center"
                  style={{ backgroundImage: `url(${c.image})` }}
                >
                  <div className="flip-overlay" />
                  <div className="relative z-[2] h-full flex flex-col justify-center p-8 text-white">
                    <h3 className="font-display text-[24px] mb-4">{c.title}</h3>
                    <ul className="space-y-2.5">
                      {c.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-[13px] text-white/90 leading-[1.6]">
                          <span className="w-1.5 h-1.5 mt-1.5 rounded-full flex-shrink-0" style={{ background: "#D5AF34" }} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/our-services"
                      className="mt-6 text-[12px] uppercase tracking-[0.2em] font-semibold inline-flex items-center gap-2"
                      style={{ color: "#D5AF34" }}
                    >
                      Learn More <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ValueProp />
      <ServiceFlipCards />
      <ServicesSection />
      <ThinkPiecesSection />
      <ClientMarquee />
      <FeaturedEngagements />
    </>
  );
}
