// Shared content for solution detail pages (flagship + advisory)
// Used by the shared template renderer.

export type SolutionContent = {
  slug: string;
  category: "flagship" | "advisory";
  name: string;
  short: string;
  description: string[]; // paragraphs
  whatYouGet: string[];
  whoOrWhen: string[];
  whoLabel: "Who It Is For" | "When To Choose This";
  ctaHeadline: string;
  ctaButton: string;
};

export const flagshipContent: SolutionContent[] = [
  {
    slug: "capital-readiness",
    category: "flagship",
    name: "Capital Readiness Programme™",
    short: "Turn your venture into a structured, investor-ready opportunity.",
    description: [
      "The Swiftora Capital Readiness Programme™ is designed for businesses that need funding but are not yet investor-ready. Many promising ventures fail to secure financing not because their ideas lack merit, but because they cannot present them in a way that satisfies lenders, grant administrators, or equity investors. This programme closes that gap.",
      "We work with you to build the full suite of materials that financial institutions and investors require: a structured, bankable business plan; a 3–5 year financial model with realistic projections; a feasibility study where required; a go-to-market strategy; and a compelling investor pitch deck. Each element is built to the standards that banks, development finance institutions, and private investors expect.",
      "The programme is structured to be completed within a defined engagement period, with clear milestones and deliverables at each stage. You leave with a package that is presentation-ready and built to withstand scrutiny.",
    ],
    whatYouGet: [
      "Bankable business plan",
      "3–5 year financial model with projections",
      "Feasibility validation where required",
      "Go-to-market strategy",
      "Investor-ready pitch deck",
    ],
    whoLabel: "Who It Is For",
    whoOrWhen: [
      "Startups preparing to raise their first round",
      "SMEs applying for loans, grants, or development finance",
      "Entrepreneurs formalising a new business idea",
      "Businesses that have been declined funding and need to strengthen their application",
    ],
    ctaHeadline: "Ready to Secure Funding With Confidence?",
    ctaButton: "Contact Us To Get Started",
  },
  {
    slug: "feasibility-market-entry",
    category: "flagship",
    name: "Feasibility & Market Entry Suite™",
    short: "Validate before you invest. Make decisions with clarity and confidence.",
    description: [
      "The Swiftora Feasibility & Market Entry Suite™ helps businesses and investors evaluate new opportunities before committing capital or operational resources. In Kenya's dynamic market environment, assumptions made without rigorous analysis often prove costly. This suite is built to give you the clarity you need to make a confident go or no-go decision.",
      "Our process covers market sizing and demand analysis, competitive landscape assessment, customer and stakeholder insights, financial viability modelling, regulatory and operational risk assessment, and a final go-to-market recommendation. Every output is grounded in primary and secondary research relevant to your specific sector and geography.",
      "The suite is modular — you can commission the full package or select the components most relevant to your decision. Either way, you receive a structured, evidence-based report that supports board-level or investor-level decision making.",
    ],
    whatYouGet: [
      "Market sizing and demand analysis",
      "Competitive landscape assessment",
      "Customer and stakeholder insights",
      "Financial viability modelling",
      "Risk and regulatory assessment",
      "Clear Go / No-Go recommendation",
    ],
    whoLabel: "Who It Is For",
    whoOrWhen: [
      "Investors evaluating a new venture",
      "Businesses entering a new market or geography",
      "Corporates assessing expansion or diversification",
      "Development organisations designing market interventions",
    ],
    ctaHeadline: "Planning a New Investment or Market Entry?",
    ctaButton: "Contact Us To Get Started",
  },
  {
    slug: "sme-growth-blueprint",
    category: "flagship",
    name: "SME Growth Blueprint™",
    short: "Move from scattered effort to a clear, structured growth plan.",
    description: [
      "The Swiftora SME Growth Blueprint™ is designed for businesses that are operational but not growing as expected. Revenue may be flat, margins may be tightening, or the business may feel stuck in day-to-day operations with no clear path forward. This programme addresses those challenges with structure, clarity, and a practical execution roadmap.",
      "We begin with a business diagnostic — a structured review of where the business currently stands across sales, marketing, finance, operations, and leadership. From there, we develop a growth strategy tailored to your resources, market position, and objectives, and translate it into a 90–180 day execution roadmap with clear priorities and accountability.",
    ],
    whatYouGet: [
      "Structured business diagnostic",
      "Sales and marketing strategy",
      "Revenue model refinement",
      "90–180 day execution roadmap with clear priorities",
    ],
    whoLabel: "Who It Is For",
    whoOrWhen: [
      "Founder-led businesses that have outgrown informal ways of working",
      "SMEs experiencing flat or inconsistent growth",
      "Businesses that know they need to change but are not sure where to start",
    ],
    ctaHeadline: "Need Clarity on How to Grow Your Business?",
    ctaButton: "Contact Us To Get Started",
  },
  {
    slug: "revenue-acceleration",
    category: "flagship",
    name: "Revenue Acceleration Programme™",
    short: "Build systems that turn strategy into consistent sales performance.",
    description: [
      "The Swiftora Revenue Acceleration Programme™ focuses on improving how businesses generate, convert, and retain revenue. Many businesses invest heavily in marketing but struggle with conversion. Others have strong sales teams but weak systems, inconsistent pipelines, or poor alignment between sales and marketing. This programme addresses the underlying structural issues that prevent revenue performance from reaching its potential.",
      "We design or redesign your sales process, align your sales and marketing functions, establish a clear sales team structure with appropriate KPIs, identify conversion bottlenecks, and build a pipeline management framework that gives you visibility and control over your revenue trajectory.",
    ],
    whatYouGet: [
      "Sales process design or redesign",
      "Marketing and sales alignment framework",
      "Sales team structure and KPI framework",
      "Conversion optimisation recommendations",
      "Pipeline management system",
    ],
    whoLabel: "Who It Is For",
    whoOrWhen: [
      "SMEs scaling operations and needing more structured commercial systems",
      "Companies with capable sales teams but inconsistent results",
      "Businesses where marketing spend is not translating into revenue",
    ],
    ctaHeadline: "Ready to Improve Your Sales Performance?",
    ctaButton: "Contact Us To Get Started",
  },
  {
    slug: "programme-design",
    category: "flagship",
    name: "Programme Design & Advisory Suite™",
    short: "Design programmes that deliver impact from concept to execution.",
    description: [
      "The Swiftora Programme Design & Advisory Suite™ supports organisations in developing programmes that are strategically sound, practically viable, and built for measurable impact. This service is designed for development sector organisations, government agencies, accelerators, and corporates that need expert input on how to design, structure, or refine interventions in complex market systems.",
      "Our approach combines market systems analysis, stakeholder mapping, programme design methodology, and implementation planning to ensure that every programme we support is grounded in evidence and aligned with the realities of the operating environment.",
    ],
    whatYouGet: [
      "Stakeholder mapping and analysis",
      "Programme design framework and logic model",
      "Market systems analysis",
      "Implementation roadmap",
      "Monitoring and evaluation framework",
    ],
    whoLabel: "Who It Is For",
    whoOrWhen: [
      "Donor-funded programmes and initiatives",
      "NGOs and development organisations",
      "Government agencies designing market-facing interventions",
      "Accelerators and business support ecosystem builders",
    ],
    ctaHeadline: "Looking to Design or Refine a Programme?",
    ctaButton: "Contact Us To Get Started",
  },
];

export const advisoryContent: SolutionContent[] = [
  {
    slug: "business-diagnostic",
    category: "advisory",
    name: "Business Diagnostic™",
    short: "Understand precisely what is holding your business back.",
    description: [
      "If your business is not growing as expected, the temptation is to focus on the most visible problem — whether that is sales, cash flow, staffing, or marketing. But visible problems are often symptoms of deeper structural issues. The Swiftora Business Diagnostic™ is designed to identify what is actually driving underperformance, so that the solutions you implement address root causes rather than surface effects.",
      "The diagnostic is a structured, facilitated process that examines your business across all key functions: strategy and direction, commercial performance, operational efficiency, financial health, and leadership capacity. At the end, you receive a clear picture of where the business stands, what the priority issues are, and what actions will have the greatest impact.",
    ],
    whatYouGet: [
      "Structured diagnostic session across all key business functions",
      "Clear identification of the priority challenges",
      "Ranking of issues by urgency and impact",
      "Practical, actionable recommendations",
      "A clear set of next steps",
    ],
    whoLabel: "When To Choose This",
    whoOrWhen: [
      "Growth is inconsistent or has stalled",
      "You know something is wrong but cannot identify the root cause",
      "The business feels stuck despite effort",
      "You want a clear roadmap before committing to a larger engagement",
    ],
    ctaHeadline: "Ready to Understand What Is Holding Your Business Back?",
    ctaButton: "Book a Business Diagnostic™",
  },
  {
    slug: "consulting-clinic",
    category: "advisory",
    name: "Consulting Clinic™",
    short: "Get focused expert advice on a specific business challenge.",
    description: [
      "If you already know the issue you want to address, the Swiftora Consulting Clinic™ gives you direct access to expert advice without the structure of a full engagement. It is designed for business owners and leaders who need focused, practical input on a specific challenge, decision, or question — and who want that input quickly.",
      "A Consulting Clinic™ session runs for 60 to 120 minutes and is structured around your agenda. You come with the problem; we come prepared to engage with it seriously, ask the right questions, and give you clear, actionable guidance. There is no fluff and no generic advice — only thinking that is specific to your situation.",
    ],
    whatYouGet: [
      "Focused advisory session of 60 to 120 minutes",
      "Problem-specific discussion with structured guidance",
      "Clear recommendations and immediate action points",
      "Access to senior-level thinking without a full engagement commitment",
    ],
    whoLabel: "When To Choose This",
    whoOrWhen: [
      "You need quick expert input on a specific decision",
      "You want to test a strategy or idea before committing to it",
      "You have a defined problem and need a clear perspective",
      "You are not ready for a full engagement but need more than general advice",
    ],
    ctaHeadline: "Need Expert Input on a Specific Business Challenge?",
    ctaButton: "Book a Consulting Clinic™",
  },
  {
    slug: "executive-advisory",
    category: "advisory",
    name: "Executive Advisory™",
    short: "A strategic thinking partner for your most important decisions.",
    description: [
      "The Swiftora Executive Advisory™ service provides ongoing, high-level strategic support to business owners and senior leaders. It is designed for executives who are navigating complex decisions, driving significant growth, or managing a business through a period of change — and who need a trusted, experienced thinking partner at their side.",
      "Unlike consulting engagements that are project-specific and time-bound, Executive Advisory™ is an ongoing relationship. It provides continuity, context, and the kind of frank, independent perspective that is rarely available from within an organisation.",
      "This is how it works: we meet regularly — weekly, bi-weekly, monthly, or quarterly depending on what you need — and the conversation is structured around what matters most to you at that moment. That might mean reviewing a strategic decision, pressure-testing a plan, working through a leadership challenge, or simply thinking through the direction of the business with someone who understands it deeply.",
      "The value of Executive Advisory™ compounds over time. The more context we build together, the more useful each conversation becomes — and the more confident you become in the decisions you are making.",
    ],
    whatYouGet: [
      "Regular advisory sessions at a cadence that works for you",
      "Strategic input on key decisions as they arise",
      "Review of plans, proposals, and business initiatives",
      "Progress and performance check-ins",
      "Access to an experienced, independent perspective at the leadership level",
    ],
    whoLabel: "When To Choose This",
    whoOrWhen: [
      "You are making high-stakes or complex business decisions",
      "You are growing but strategic clarity is inconsistent",
      "You need an objective, senior-level perspective that your team cannot provide",
      "You want ongoing support rather than one-off advice",
      "You need accountability at the strategic level",
    ],
    ctaHeadline: "Looking for Ongoing Strategic Support for Your Business?",
    ctaButton: "Explore Executive Advisory™",
  },
];

export const allSolutions = [...flagshipContent, ...advisoryContent];

// ---------------------------------------------------------------------------
// Think Pieces
// ---------------------------------------------------------------------------

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  body: { heading: string; paragraphs: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "property-buyer-behaviour-kenya",
    title: "How Property Buyer Behaviour Is Changing",
    category: "Real Estate",
    date: "March 2026",
    excerpt:
      "Kenya's property market is undergoing a quiet but decisive transformation driven by end-users replacing speculators as the dominant buyer type.",
    body: [
      {
        heading: "The End of Passive Speculation",
        paragraphs: [
          "Kenya's property market is undergoing a quiet but decisive transformation. The buyer profile that defined the market for much of the past two decades — the passive speculator purchasing off-plan and waiting for capital appreciation — is giving way to a more demanding, more analytical, and more utility-driven buyer. This shift has significant implications for how developers, marketers, and agents approach the market.",
        ],
      },
      {
        heading: "Utility Has Replaced Promise",
        paragraphs: [
          "For much of the early 2000s through the mid-2010s, Kenyan real estate was driven by the promise of appreciation. Buyers purchased with the expectation that values would rise, and many did. That era has not ended entirely, but it has become more complicated. Rising construction costs, tighter credit conditions, and a more competitive supply environment have made price appreciation less predictable. Today's buyer wants to understand what they are getting, not just what the property might be worth in five years.",
        ],
      },
      {
        heading: "The Rise of Structured Developments",
        paragraphs: [
          "One of the clearest signals of changing buyer behaviour is the growing preference for structured, managed developments over standalone units. Buyers are increasingly asking about estate management, security infrastructure, utility reliability, and shared amenity quality — questions that were rarely a priority a decade ago. Gated communities and apartment complexes with professional management are performing better in the market than comparable unmanaged units, even when they carry a price premium.",
        ],
      },
      {
        heading: "End-Users Are Setting the Pace",
        paragraphs: [
          "The balance of power in the buyer pool has shifted toward end-users. Owner-occupiers, both individual and corporate, are now setting the standards that the market must meet. This matters because end-users make decisions on different criteria than investors. They care about liveability, proximity to employment nodes and schools, commute times, and neighbourhood trajectory. Their scrutiny is higher, their due diligence more thorough, and their tolerance for uncertainty lower.",
        ],
      },
      {
        heading: "Cash Flow as a Core Metric",
        paragraphs: [
          "For the investor segment that remains active in the market, the evaluation framework has changed. Rental yield has replaced capital appreciation as the primary metric. Investors are asking what a property will generate monthly from day one, not what it might sell for in a decade. This has redirected demand toward certain asset classes — well-located apartments in high-rental-demand corridors — and away from others.",
        ],
      },
      {
        heading: "Implications for the Industry",
        paragraphs: [
          "These shifts have direct implications for developers and marketers. Messaging built around vague aspirational language — \"invest in your future,\" \"prime location,\" \"luxury living\" — is losing its effectiveness with buyers who are doing their own research and arriving with specific questions. The market is demanding more transparency, more specificity, and more evidence. Developers who can provide it are gaining a credibility advantage.",
        ],
      },
      {
        heading: "A More Disciplined Market",
        paragraphs: [
          "What is emerging is a more disciplined market. This is not a negative development — it is a maturing one. Buyers who understand what they are purchasing, developers who build to genuine demand, and agents who advise rather than simply sell are all contributing to a more stable and sustainable property sector. The transition is not always comfortable for participants who built their models on a less scrutinising buyer, but the direction of travel is clear.",
        ],
      },
    ],
  },
  {
    slug: "growth-vs-profitability-kenya",
    title: "Why Growth Isn't Translating to Profitability in Kenya",
    category: "Business Strategy",
    date: "February 2026",
    excerpt:
      "Despite steady GDP growth, many Kenyan businesses face tightening margins, rising costs, and structural inefficiencies that erode bottom-line performance.",
    body: [
      {
        heading: "Growth Without Structural Transformation",
        paragraphs: [
          "Kenya's economy has maintained headline growth for many years, but for businesses on the ground the experience is increasingly one of expansion without enrichment. Top-line growth is not flowing through to the bottom line, and a generation of operators is learning that revenue growth and profitability growth are two very different things.",
        ],
      },
      {
        heading: "Demand Is Growing More Slowly Than Cost Pressures",
        paragraphs: [
          "One of the structural challenges facing Kenyan businesses is that input costs — energy, labour, imported materials, logistics, and finance — have been rising faster than the ability of most businesses to pass those costs on to customers. In competitive markets with price-sensitive buyers, the room to reprice is limited. The result is margin compression that affects even businesses with growing top lines.",
        ],
      },
      {
        heading: "Structural Inefficiencies Are Eroding Margins",
        paragraphs: [
          "Many Kenyan businesses have grown faster than their internal systems. Procurement is informal, inventory management is reactive, and financial controls are stretched thin. These inefficiencies look small individually, but in aggregate they leak meaningful percentage points of margin out of the business every year — points that compound as the business grows.",
        ],
      },
      {
        heading: "The Financing Constraint and Cost of Capital",
        paragraphs: [
          "Access to affordable working capital remains one of the binding constraints on Kenyan businesses. When a business is growing, it almost always needs more cash than it generates internally. If that cash has to be sourced at the prevailing cost of credit, a meaningful portion of operating profit is lost to interest expense before it ever reaches the owner.",
        ],
      },
      {
        heading: "Cash Flow Pressure and SME Fragility",
        paragraphs: [
          "Even businesses with healthy profit-and-loss statements can face existential cash flow pressure. Long receivables cycles — common in B2B and public sector contracting — create timing mismatches between revenue recognition and cash receipt. Small and medium businesses with limited working capital reserves are particularly exposed. A delayed payment from a large client can cascade into an inability to pay suppliers, meet payroll, or service debt.",
        ],
      },
      {
        heading: "Human Capital and Productivity Gaps",
        paragraphs: [
          "Productivity per employee remains a structural drag for many Kenyan businesses. Skill gaps, weak performance management, and under-investment in tools and systems all combine to depress output. As businesses grow, these gaps compound — more revenue, but disproportionately more cost to deliver it.",
        ],
      },
      {
        heading: "The Cumulative Effect on Business Performance",
        paragraphs: [
          "These pressures do not operate in isolation. A business facing margin compression, high financing costs, cash flow volatility, and productivity gaps simultaneously is operating under significant strain — even if its revenue line is growing. The cumulative effect is a business that looks successful from the outside but is fragile from the inside.",
        ],
      },
      {
        heading: "Rethinking the Path to Profitability",
        paragraphs: [
          "The answer is not simply to grow faster. For many Kenyan businesses, the priority is to build the structural foundations that allow growth to translate into durable profitability: cleaner financial management, stronger operational systems, more disciplined cost control, and smarter use of capital. Growth that is built on these foundations compounds. Growth that is not tends to plateau or reverse.",
        ],
      },
    ],
  },
  {
    slug: "compliance-as-business-advantage",
    title: "Why Compliance Is Becoming a Core Business Advantage in Kenya",
    category: "Business Strategy",
    date: "January 2026",
    excerpt:
      "Compliance has shifted from a back-office cost centre to a strategic capability that is shaping market access, capital, and competitive positioning.",
    body: [
      {
        heading: "The Expansion of the Compliance Landscape",
        paragraphs: [
          "Kenya's regulatory landscape has expanded steadily across tax, employment, data protection, sector-specific licensing, and consumer protection. What was once a manageable list of obligations is now a complex, overlapping environment that demands continuous attention. Businesses that under-resource compliance are increasingly exposed.",
        ],
      },
      {
        heading: "Compliance Gaps Are Still Wide, but Closing",
        paragraphs: [
          "Despite the expansion, compliance gaps remain significant across the SME segment, where informal practice is still the norm. The direction of travel, however, is unmistakable. Enforcement is becoming more digital, more cross-referenced, and harder to avoid. The window in which informal businesses can operate at scale is narrowing.",
        ],
      },
      {
        heading: "Compliance as a Gateway to Markets and Finance",
        paragraphs: [
          "The most strategically important shift is that compliance is no longer just about avoiding penalties — it is increasingly the price of entry to better customers, larger contracts, and institutional finance. Procurement processes, lender due diligence, and partner onboarding now routinely require evidence of tax compliance, statutory filings, and regulatory licensing. Businesses that cannot produce that evidence quickly are screened out before the conversation begins.",
        ],
      },
      {
        heading: "The SME Paradox and Structural Exposure",
        paragraphs: [
          "Smaller businesses face a paradox: they are the segment most strained by compliance costs and the segment most penalised when they cannot demonstrate compliance. Closing that gap requires investment in basic systems — bookkeeping, payroll, statutory filings — that is often deferred in favour of more visible commercial priorities. The deferral builds structural exposure.",
        ],
      },
      {
        heading: "Data Protection and the New Compliance Frontier",
        paragraphs: [
          "The Data Protection Act has introduced a compliance domain that few Kenyan businesses are fully equipped for. Customer data, employee data, marketing databases, and digital tools all create obligations that require deliberate management. Enforcement is still maturing, but the trajectory is one of greater scrutiny — particularly for businesses operating across borders or working with international partners.",
        ],
      },
      {
        heading: "A New Source of Competitive Advantage",
        paragraphs: [
          "Businesses that treat compliance as a strategic capability rather than a cost — investing in clean records, strong processes, and verifiable controls — are increasingly able to win the contracts and capital that competitors cannot. The advantage is not flashy, but it is durable. In a market that is steadily formalising, the businesses that formalise first will compound their lead.",
        ],
      },
    ],
  },
  {
    slug: "climate-proofing-business-kenya",
    title: "Climate-Proofing Your Business Model in Kenya",
    category: "Strategy & Sustainability",
    date: "December 2025",
    excerpt:
      "Climate volatility has become a present operational reality for Kenyan businesses — not a distant scenario. The strategic response is overdue.",
    body: [
      {
        heading: "Climate Risk Is Now a Business Risk",
        paragraphs: [
          "The framing of climate as a long-term, environmental concern is rapidly being replaced by the reality of climate as a present, operational concern. For Kenyan businesses — across agriculture, manufacturing, retail, logistics, real estate, and tourism — climate-related disruption is now a recurring feature of the operating environment, and it will intensify. Businesses that continue to treat climate as an external concern rather than a strategic variable are building fragility into their operating models.",
        ],
      },
      {
        heading: "The Operational Impact Is Already Material",
        paragraphs: [
          "Across Kenya's productive sectors, the operational consequences of climate volatility are already visible: erratic rainfall affecting crop yields and supply contracts, energy and water disruptions affecting manufacturing output, flash flooding disrupting logistics and retail, and shifting growing seasons affecting tourism cycles. These are not hypothetical future risks — they are present operational realities.",
        ],
      },
      {
        heading: "Supply Chains Are Becoming More Fragile",
        paragraphs: [
          "Kenyan businesses operate within regional supply chains that are themselves climate-exposed. A drought in a neighbouring country, a port disruption from extreme weather, or a logistics bottleneck triggered by infrastructure damage can ripple through procurement, pricing, and delivery commitments in ways that traditional supply chain management approaches were not designed to handle.",
        ],
      },
      {
        heading: "The Hidden Cost of Climate Volatility",
        paragraphs: [
          "Much of the financial impact of climate on business is not captured in headline cost figures. The management time spent responding to supply disruptions, the opportunity cost of unplanned downtime, the premium paid for emergency sourcing, and the reputational impact of supply failures all carry costs that are real but diffuse. Businesses that quantify these costs often find the total exposure is larger than they anticipated.",
        ],
      },
      {
        heading: "Climate Resilience as a Strategic Capability",
        paragraphs: [
          "The businesses that will navigate the next decade well are those that build climate resilience into their operating model deliberately: diversified sourcing, redundancy in critical infrastructure, flexible production planning, and decision frameworks that incorporate climate scenarios. This is a strategic capability, not a sustainability initiative — and it pays for itself through reduced volatility.",
        ],
      },
      {
        heading: "The Financing and Investment Dimension",
        paragraphs: [
          "Climate risk is increasingly being incorporated into investment and lending decisions. Development finance institutions, impact investors, and a growing number of commercial lenders are asking about environmental risk exposure as part of their due diligence. Businesses that can demonstrate they have assessed and are managing climate risk are better positioned to access this capital. Those that cannot are increasingly viewed as higher-risk propositions.",
        ],
      },
      {
        heading: "From Reactive to Proactive Business Models",
        paragraphs: [
          "The shift from reactive to proactive climate strategy is not optional for businesses that intend to operate at scale over the next decade. It begins with assessment, moves through scenario planning, and ends in concrete operational decisions: where to source, how to design products, where to invest, and how to price risk.",
        ],
      },
      {
        heading: "A More Resilient Competitive Landscape",
        paragraphs: [
          "Over time, the businesses that adapt fastest become the most resilient — and resilience compounds. Customers, lenders, and partners gravitate toward operators they can rely on. In a more volatile environment, dependability becomes a genuine competitive advantage.",
        ],
      },
      {
        heading: "A New Imperative for Kenyan Businesses",
        paragraphs: [
          "Climate-proofing is no longer a future-facing strategic exercise. It is a present-tense imperative for Kenyan businesses that intend to grow durably. The cost of acting is meaningful. The cost of not acting is larger.",
        ],
      },
    ],
  },
];
