export type EngagementSlug =
  | "ameer-developers"
  | "zuri-nzilani-foundation"
  | "alliance-hospital"
  | "rochman-properties"
  | "herencia"
  | "paediatric-allergy-center"
  | "fmcg-distribution-study";

export interface Engagement {
  slug: EngagementSlug;
  title: string;
  category: string;
  client: string;
  description: string;
  overview: string;
  challenge: string;
  challengePoints: string[];
  approach: string;
  approachPoints: string[];
  results: string;
  metrics: { label: string; value: string }[];
  pullQuote?: string;
}

export const engagements: Engagement[] = [
  {
    slug: "ameer-developers",
    title: "Marketing Gated Communities in Kenya",
    category: "Real Estate",
    client: "Ameer Developers",
    description:
      "Repositioning a portfolio of gated developments around end-user buyer behaviour.",
    overview:
      "Swiftora partnered with Ameer Developers to reposition a multi-phase portfolio of gated communities for the Kenyan buyer. The work translated buyer insight into a sharper proposition, a coherent sales story, and a marketing engine that consistently delivered qualified leads.",
    challenge:
      "Ameer Developers had a strong product but were competing on features in a market where buyers increasingly bought on lifestyle, security, and resale assurance. Lead volumes were inconsistent and conversion through to site visit was below industry benchmarks.",
    challengePoints: [
      "Undifferentiated brand in a crowded gated-community market",
      "Marketing spend was not translating into qualified site visits",
      "Sales team lacked a unified narrative across phases of the development",
    ],
    approach:
      "We rebuilt the proposition around end-user buyer behaviour, then realigned every customer touchpoint behind it. From the show-house experience to digital lead capture, every interaction reinforced the same promise.",
    approachPoints: [
      "Buyer segmentation and value-proposition workshops",
      "Brand narrative and visual identity refresh",
      "Integrated digital lead-generation engine (Meta, Google, Email)",
      "Sales playbook and on-site experience redesign",
    ],
    results:
      "Within six months the engagement delivered a measurable lift in qualified enquiries, shorter sales cycles, and higher conversion at site visit.",
    metrics: [
      { label: "Qualified enquiries", value: "3.6×" },
      { label: "Site-visit conversion", value: "+42%" },
      { label: "Cost per lead", value: "−38%" },
    ],
    pullQuote:
      "Swiftora moved us from selling square metres to selling a way of living — and the numbers followed.",
  },
  {
    slug: "zuri-nzilani-foundation",
    title:
      "Transforming Maternal Health Outcomes through Strategic Messaging",
    category: "Not for Profit",
    client: "Zuri Nzilani Foundation",
    description:
      "A community messaging strategy that lifted antenatal attendance and changed care-seeking decisions.",
    overview:
      "We helped the Zuri Nzilani Foundation design a messaging strategy that turned health information into community action across three counties — shifting how mothers, partners, and elders made decisions about antenatal care.",
    challenge:
      "Antenatal attendance was low despite available services. Generic public-health messaging was not resonating with the actual decision-makers in the household.",
    challengePoints: [
      "Low first-trimester antenatal attendance",
      "Care-seeking decisions made by partners and elders, not pregnant women alone",
      "Messaging fatigue around generic maternal-health campaigns",
    ],
    approach:
      "We led formative research with mothers, partners, community health volunteers and elders, then built a messaging architecture rooted in their language, beliefs and trusted channels.",
    approachPoints: [
      "Formative behavioural research across three counties",
      "Audience-specific messaging frameworks (mother, partner, elder)",
      "Community health volunteer training and dialogue tools",
      "Radio, SMS and church-network amplification",
    ],
    results:
      "The campaign measurably increased early antenatal visits and shifted reported attitudes toward facility-based care among partners and elders.",
    metrics: [
      { label: "Early ANC visits", value: "+58%" },
      { label: "Counties activated", value: "3" },
      { label: "CHVs trained", value: "240+" },
    ],
    pullQuote:
      "When we spoke to the people who actually make the decisions, behaviour changed.",
  },
  {
    slug: "alliance-hospital",
    title:
      "Alliance Hospital — Strengthening Brand Through Strategic Content Marketing",
    category: "Healthcare",
    client: "Alliance Hospital",
    description:
      "Strategic content marketing to refine brand voice and position for sustained growth.",
    overview:
      "We worked with Alliance Hospital to develop a strategic content marketing programme that clarified its clinical voice, built trust with patients, and positioned the hospital for a new growth phase.",
    challenge:
      "Clinical excellence was not translating into a recognisable brand. Communication was inconsistent across channels and missed opportunities to educate the patient community.",
    challengePoints: [
      "Inconsistent brand voice across digital channels",
      "Limited patient education content",
      "Underleveraged clinical expertise as a marketing asset",
    ],
    approach:
      "A content-led strategy anchored on the hospital's clinical strengths, supported by a structured editorial calendar and clinician-friendly production workflow.",
    approachPoints: [
      "Brand voice and tone framework",
      "Content pillars tied to clinical specialties",
      "Editorial calendar and clinician interview programme",
      "SEO and social distribution plan",
    ],
    results:
      "The programme delivered higher organic visibility, stronger patient engagement, and a content asset library the hospital continues to build on.",
    metrics: [
      { label: "Organic traffic", value: "+120%" },
      { label: "Avg. engagement time", value: "+85%" },
      { label: "Specialty articles", value: "60+" },
    ],
  },
  {
    slug: "rochman-properties",
    title:
      "Rochman Properties — Modern Marketing & Sales Ops in Real Estate",
    category: "Real Estate",
    client: "Rochman Properties",
    description:
      "Modernizing marketing strategies and optimizing sales effectiveness for a real estate firm.",
    overview:
      "Swiftora helped Rochman Properties move from ad-hoc marketing and reactive sales to a disciplined, data-driven commercial engine.",
    challenge:
      "The team was generating activity, but not the right activity. There was no clear view of pipeline health, lead quality or sales-team productivity.",
    challengePoints: [
      "No unified pipeline view",
      "Marketing spend not tied to sales outcomes",
      "Inconsistent lead qualification across agents",
    ],
    approach:
      "A combined marketing and sales-ops intervention: clean data, modern tooling, and the operating rhythm to use them well.",
    approachPoints: [
      "CRM implementation and pipeline definition",
      "Lead-qualification framework (BANT-style, real-estate adapted)",
      "Marketing channel mix optimisation",
      "Weekly sales operating rhythm and dashboards",
    ],
    results:
      "Sales leadership now operates from a single source of truth, with measurably better conversion and predictable pipeline coverage.",
    metrics: [
      { label: "Lead-to-viewing rate", value: "+47%" },
      { label: "Pipeline visibility", value: "100%" },
      { label: "Forecast accuracy", value: "+30%" },
    ],
  },
  {
    slug: "herencia",
    title:
      "Herencia — Steering Brand Growth Through Integrated Digital Marketing",
    category: "Real Estate",
    client: "Herencia",
    description:
      "Comprehensive digital strategy including SEO, Google Ads and email marketing for a gated community.",
    overview:
      "We led an integrated digital growth programme for Herencia, blending paid, organic and lifecycle marketing to drive qualified buyer enquiries to the development.",
    challenge:
      "The brand had momentum but lacked a coordinated digital engine to capture and nurture demand at scale.",
    challengePoints: [
      "Fragmented digital channel strategy",
      "Limited remarketing and lifecycle nurture",
      "Low organic visibility for high-intent search terms",
    ],
    approach:
      "An integrated playbook covering search, paid social, SEO and email — built around a clear measurement framework.",
    approachPoints: [
      "Keyword and intent mapping",
      "Google Ads and Meta campaign architecture",
      "Email nurture sequences for buyer cohorts",
      "Analytics, attribution and weekly optimisation",
    ],
    results:
      "Stronger qualified-lead flow, lower blended CPL, and a clearer link between digital spend and revenue outcomes.",
    metrics: [
      { label: "Qualified leads", value: "+210%" },
      { label: "Blended CPL", value: "−45%" },
      { label: "Email-driven viewings", value: "32%" },
    ],
  },
  {
    slug: "paediatric-allergy-center",
    title:
      "Paediatric Allergy Center — Driving Healthcare Marketing Impact",
    category: "Healthcare",
    client: "Paediatric Allergy Center",
    description:
      "Comprehensive marketing strategy to enhance visibility and patient engagement for a paediatric clinic.",
    overview:
      "Swiftora supported the Paediatric Allergy Center in defining a marketing strategy that respected clinical sensitivities while building a strong, parent-friendly brand presence.",
    challenge:
      "Parents searching for paediatric allergy care struggled to find authoritative, accessible information — and the clinic was underrepresented in those moments of search.",
    challengePoints: [
      "Low awareness in target parent communities",
      "Clinical content was hard to access for non-specialists",
      "No structured patient acquisition funnel",
    ],
    approach:
      "A brand-and-content programme built around parent journeys, search behaviour and clinical authority.",
    approachPoints: [
      "Parent-journey mapping",
      "Educational content programme",
      "Local SEO and Google Business optimisation",
      "Referral and partner-clinic outreach",
    ],
    results:
      "The clinic now ranks for high-intent search terms, has measurably higher new-patient enquiries, and a content engine that compounds.",
    metrics: [
      { label: "New-patient enquiries", value: "+95%" },
      { label: "Local search rank", value: "Top 3" },
      { label: "Educational articles", value: "40+" },
    ],
  },
  {
    slug: "fmcg-distribution-study",
    title: "FMCG Distribution — Feasibility Study & Business Planning",
    category: "Market Research",
    client: "Confidential FMCG Client",
    description:
      "Data-driven feasibility study and business plan for retail distribution opportunities.",
    overview:
      "We delivered a rigorous feasibility study and accompanying business plan for an FMCG distribution opportunity, equipping the client to make a confident, financed go/no-go decision.",
    challenge:
      "The client had a credible distribution thesis but needed independent validation of market size, channel economics and operational feasibility before committing capital.",
    challengePoints: [
      "Unclear addressable market by channel",
      "Capital intensity of distribution model unknown",
      "Need for an investor-ready business case",
    ],
    approach:
      "A blended quantitative and qualitative study, paired with a fully built financial model and a board-ready business plan.",
    approachPoints: [
      "Trade-channel sizing and segmentation",
      "Field interviews with retailers, wholesalers and end consumers",
      "Operations and logistics cost modelling",
      "Five-year integrated financial model and business plan",
    ],
    results:
      "The client moved forward with a clear-eyed view of the opportunity, a defensible business case, and the financial architecture to manage it.",
    metrics: [
      { label: "Channels analysed", value: "5" },
      { label: "Field interviews", value: "180+" },
      { label: "Forecast horizon", value: "5 yrs" },
    ],
  },
];

export const getEngagement = (slug: string) =>
  engagements.find((e) => e.slug === slug);
