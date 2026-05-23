import heroImg from "@/assets/heroes/Featured_Engagements_Header.jpg";

import single01 from "@/assets/engagement/Featured-Engagement-01-Single-Page.jpg";
import single02 from "@/assets/engagement/Featured-Engagement-02-Single-Page.jpg";
import single03 from "@/assets/engagement/Featured-Engagement-03-Single-Page.jpg";
import single04 from "@/assets/engagement/Featured-Engagement-04-Single-Page.jpg";
import single05 from "@/assets/engagement/Featured-Engagement-05-Single-Page.jpg";
import single06 from "@/assets/engagement/Featured-Engagement-06-Single-Page.jpg";
import single07 from "@/assets/engagement/Featured-Engagement-07-Single-Page.jpg";

export type EngagementSlug =
  | "ameer-developers"
  | "zuri-nzilani-foundation"
  | "alliance-hospital"
  | "rochman-properties"
  | "herencia"
  | "paediatric-allergy-center"
  | "fmcg-distribution-study";

export interface ContentSection {
  heading?: string; // bold inline subheading — optional
  paragraphs: string[];
}

export interface Engagement {
  slug: EngagementSlug;
  caseStudyNumber: string; // "One", "Two", "Three", etc.
  title: string;
  category: string;
  client: string;
  heroIntro: string;       // shown in gold box — 1–2 italic paragraphs
  sections: ContentSection[]; // long-form prose sections
  metrics: { label: string; value: string }[];
  pullQuote?: string;
  heroImage: string;
  singleImage: string;
}

export const engagements: Engagement[] = [
  {
    slug: "ameer-developers",
    caseStudyNumber: "One",
    title: "Marketing Gated Communities in Kenya",
    category: "Real Estate",
    client: "Ameer Developers Limited",
    heroIntro: "Breaking into Kenya's competitive real estate market takes more than a good idea – it demands strategy, trust, and smart execution. When Ameer Developers launched Muringa View Gardens, they teamed up with Swiftora Consulting Limited to build a brand story that resonated, campaigns that converted, and a sales system that delivered.\n\nIndeed, launching a flagship project in a crowded real estate market is no small task. In just months, they turned cautious prospects into proud plot owners and positioned themselves as a trusted name in gated communities in Nairobi Metropolitan Area. Here's how bold marketing moves led to remarkable success.",
    sections: [
      {
        paragraphs: [
          "In Kenya's dynamic real estate market, gated communities have become the gold standard for modern living. Security, convenience, and community are increasingly sought after by the rising middle class. Ameer Developers, a premier real estate company specialising in master-planned gated communities and serviced plots, recognised this opportunity and moved decisively.",
          "Their flagship project, Muringa View Gardens, was designed to meet this demand – offering serviced 1/8-acre plots in a secure, well-planned environment. Yet, despite being a compelling product, Ameer Developers faced a reality familiar to many ambitious brands: a saturated market, cautious buyers, and the need to build strong brand trust quickly.",
        ],
      },
      {
        heading: "The Challenge: Standing Out in a Crowded Market",
        paragraphs: [
          "Kenya's real estate sector, particularly Nairobi Metropolitan Area, is vibrant but fiercely competitive. Numerous gated community projects, each vying for buyer attention, created a crowded marketplace. Buyers, increasingly savvy and risk-aware, demanded proof of value and credibility before making purchasing decisions.",
          "Ameer Developers needed more than just traditional advertising; they required a strategic, nuanced approach to marketing – one that would position them as a credible, trustworthy brand, reach the right audiences, and convert interest into sales.",
          "It was at this crucial moment that Swiftora Consulting Limited came on board. Our brief was clear: position Ameer Developers in the market, create targeted campaigns that cut through the noise, and design a lead generation system that would turn interest into investment. Our strategy was built on three interlocking pillars: brand positioning, targeted marketing campaigns, and lead generation and nurturing.",
        ],
      },
      {
        heading: "Marketing Activities: Building Trust, Driving Growth",
        paragraphs: [
          "The first step was to help Ameer Developers articulate a brand story that spoke directly to buyers' aspirations and concerns. Working closely with their team, Swiftora Consulting developed a clear, emotive messaging framework that highlighted what made Muringa View Gardens special: its strategic location, professional servicing, community planning, and future investment value.",
          "We modernised visual identity, incorporating professional imagery, and aerial videos to allow potential buyers to experience the project remotely. Trust had to be earned – and we made it a central part of every communication. With the brand story in place, we launched targeted marketing campaigns designed to reach the right people at the right time. We segmented potential buyers based on their income levels, geographic location, and lifestyle preferences, ensuring that each message was relevant and resonant.",
          "When it comes to online, we deployed a mix of digital advertising across Facebook, Instagram, and the Google Display Network, creating visually appealing, informative ads that drove traffic to customised landing pages. At the same time, a parallel content marketing effort unfolded, providing potential buyers with value-rich resources – such as property investment guides, gated community living benefits, and success stories from existing homeowners.",
          "Recognising the power of personal experience, Swiftora also supported Ameer Developers in hosting exclusive site visits and open days at Muringa View Gardens, giving prospects a tangible connection to the development.",
          "Generating interest was only half the battle; converting that interest into actual plot sales required a systematic approach to lead nurturing. Swiftora Consulting built high-conversion landing pages and implemented a CRM system that allowed Ameer Developers to track, manage, and communicate with prospects efficiently.",
          "We designed automated email drip campaigns that kept leads engaged – delivering timely content, addressing common objections, and reminding prospects of the value of investing in Muringa View Gardens. We also trained the Ameer Developers sales team on consultative selling techniques, equipping them to handle enquiries with confidence, empathy, and professionalism.",
        ],
      },
      {
        heading: "Results: Turning Strategy into Sales",
        paragraphs: [
          "The results of this collaborative effort were remarkable. Within a relatively short period, Ameer Developers experienced a significant increase in qualified leads, higher engagement across digital platforms, and, most importantly, a strong uptick in plot sales at Muringa View Gardens.",
          "The brand gained recognition and credibility in the market, with buyers citing trust, professionalism, and the quality of information provided as key reasons for choosing to invest. The sales team reported greater confidence and effectiveness in their interactions with prospects, contributing to improved conversion rates.",
        ],
      },
      {
        heading: "A Lasting Partnership: Beyond the Project",
        paragraphs: [
          "The success of Muringa View Gardens demonstrated not just the importance of a great product, but the critical role that strategic marketing plays in unlocking a brand's potential. By focusing on authenticity, targeted outreach, and consistent engagement, Ameer Developers were able to secure their place as a trusted brand in a competitive space. At Swiftora Consulting Limited, we are proud to have been part of their journey – a journey that proves strategic marketing is not just about visibility but about building lasting trust and delivering measurable business growth.",
        ],
      },
    ],
    metrics: [
      { label: "Qualified enquiries", value: "3.6×" },
      { label: "Site-visit conversion", value: "+42%" },
      { label: "Cost per lead", value: "−38%" },
    ],
    pullQuote: "Swiftora moved us from selling square metres to selling a way of living — and the numbers followed.",
    heroImage: heroImg,
    singleImage: single01,
  },
  {
    slug: "zuri-nzilani-foundation",
    caseStudyNumber: "Two",
    title: "Transforming Maternal Health Outcomes through Strategic Messaging",
    category: "Not for Profit",
    client: "Zuri Nzilani Foundation",
    heroIntro: "Changing health behaviour in communities requires more than information – it demands trust, cultural fluency, and messages that move people to act. Swiftora Consulting partnered with the Zuri Nzilani Foundation to design a messaging strategy that turned health information into community action across three counties.\n\nThe result was a measurable shift in how mothers, partners, and elders made decisions about antenatal care – and a model for community-led health communication that continues to deliver.",
    sections: [
      {
        paragraphs: [
          "Maternal and newborn health remains one of the most pressing public health challenges in Kenya. Despite the availability of antenatal care services, attendance – particularly in the first trimester – remained stubbornly low in the target counties. The Zuri Nzilani Foundation had been working on the ground for years, but recognised that their messaging was not cutting through.",
          "Generic public health campaigns were failing to resonate. The real decision-makers – partners, mothers-in-law, and community elders – were not being reached. And the women themselves were not hearing messages that felt relevant to their lives, their fears, or their hopes.",
        ],
      },
      {
        heading: "The Challenge: Reaching the Real Decision-Makers",
        paragraphs: [
          "The Foundation approached Swiftora Consulting with a clear brief: understand why women were not attending antenatal care early enough, identify who was influencing those decisions, and build a communication strategy that would actually change behaviour.",
          "The challenge was not simply one of awareness. Many women knew about antenatal services. The barriers were social, cultural, and logistical – and they were different for different audiences. A one-size-fits-all campaign would not work. What was needed was a segmented, deeply human approach to messaging.",
        ],
      },
      {
        heading: "Our Approach: Research First, Then Strategy",
        paragraphs: [
          "Swiftora led a formative research phase across three counties, conducting focus group discussions and in-depth interviews with pregnant women, new mothers, male partners, community health volunteers (CHVs), and community elders. The research surfaced the real reasons behind low antenatal attendance: fear of bad news, cost concerns, spousal disapproval, and a belief among some community members that early clinic attendance was unnecessary.",
          "Armed with these insights, we built a messaging architecture with distinct frameworks for each audience segment. Messages for mothers addressed fear and normalised early care-seeking. Messages for partners reframed antenatal attendance as a shared responsibility and a mark of good fatherhood. Messages for elders drew on cultural values of protecting the family lineage.",
          "We worked with the Foundation's CHV network to develop dialogue tools and community conversation guides – enabling trained volunteers to have meaningful, two-way conversations rather than simply delivering information. Amplification channels included community radio, SMS, and partnerships with local churches and mosques.",
        ],
      },
      {
        heading: "Results: Behaviour Change at Scale",
        paragraphs: [
          "The campaign delivered measurable results. First-trimester antenatal visits increased significantly across the three counties. Reported attitudes among male partners toward facility-based care shifted positively. CHVs reported higher community receptiveness to health conversations and greater ease in facilitating dialogue.",
          "The messaging framework developed through this engagement has since been adapted for use in other health communication initiatives by the Foundation, demonstrating the durability and flexibility of a strategy grounded in genuine audience insight.",
        ],
      },
    ],
    metrics: [
      { label: "Early ANC visits", value: "+58%" },
      { label: "Counties activated", value: "3" },
      { label: "CHVs trained", value: "240+" },
    ],
    pullQuote: "When we spoke to the people who actually make the decisions, behaviour changed.",
    heroImage: heroImg,
    singleImage: single02,
  },
  {
    slug: "alliance-hospital",
    caseStudyNumber: "Three",
    title: "Strengthening Brand Through Strategic Content Marketing",
    category: "Healthcare",
    client: "Alliance Hospital",
    heroIntro: "Clinical excellence is only valuable if patients know about it, trust it, and can find it. Alliance Hospital had the expertise – what they needed was a communication strategy that would make that expertise visible, credible, and accessible.\n\nSwiftora Consulting developed a strategic content marketing programme that clarified the hospital's clinical voice, built patient trust, and positioned Alliance Hospital for sustained growth.",
    sections: [
      {
        paragraphs: [
          "Alliance Hospital had built a strong clinical reputation over many years of operation. Their specialists were respected, their outcomes were strong, and their patient care was genuinely excellent. Yet this reputation was largely word-of-mouth. Online, the hospital was underrepresented, and its communication was inconsistent and largely reactive.",
          "Patients searching for specialist care were not finding Alliance Hospital in the moments that mattered most. And those who did find them online encountered a fragmented digital presence that did not reflect the quality of care inside the building.",
        ],
      },
      {
        heading: "The Challenge: Making Clinical Excellence Visible",
        paragraphs: [
          "The brief from Alliance Hospital was clear: build a communication strategy that turns clinical expertise into a credible, accessible public presence. The hospital wanted to educate patients, build trust with referring clinicians, and grow organic visibility without compromising the professional standards their brand demanded.",
          "Content would be the vehicle – but it had to be done right. Medical content that is inaccurate, sensationalised, or poorly produced can damage clinical credibility. The strategy had to be rigorous, sustainable, and genuinely useful to patients.",
        ],
      },
      {
        heading: "Our Approach: Content as a Clinical Asset",
        paragraphs: [
          "Swiftora developed a brand voice and tone framework that balanced clinical authority with patient accessibility. The framework gave Alliance Hospital's communication team a clear guide for every piece of content they produced – from social media posts to long-form patient education articles.",
          "We identified six content pillars tied to the hospital's core clinical specialties. For each pillar, we developed an editorial calendar and a production workflow that involved direct collaboration with consultants and specialists. Rather than writing about clinical topics from the outside, we built a process for capturing clinician knowledge and translating it into content that patients could understand and act on.",
          "On the distribution side, we developed an SEO strategy focused on high-intent patient search terms, a social media plan aligned to each specialty, and a framework for repurposing long-form articles into shorter, shareable formats.",
        ],
      },
      {
        heading: "Results: Authority, Visibility, and Patient Trust",
        paragraphs: [
          "The programme delivered meaningful results across multiple dimensions. Organic search traffic grew significantly, driven by content that ranked for the terms patients were actually searching. Average engagement time increased, indicating that patients were reading and returning to the content. The hospital built a library of clinical content that continues to generate traffic and enquiries long after publication.",
          "More qualitatively, referring clinicians and patients began citing the hospital's online content as a reason for choosing Alliance – a direct demonstration that strategic content was driving real business outcomes.",
        ],
      },
    ],
    metrics: [
      { label: "Organic traffic", value: "+120%" },
      { label: "Avg. engagement time", value: "+85%" },
      { label: "Specialty articles", value: "60+" },
    ],
    heroImage: heroImg,
    singleImage: single06,
  },
  {
    slug: "rochman-properties",
    caseStudyNumber: "Four",
    title: "Modern Marketing & Sales Ops in Real Estate",
    category: "Real Estate",
    client: "Rochman Properties Limited",
    heroIntro: "To catalyze a transformational shift in their sales and marketing performance, Rochman Properties Limited collaborated with Swiftora Consulting Limited. Through expertly executed strategic repositioning, cutting-edge digital innovation, and the implementation of robust sales systems, Swiftora successfully propelled Rochman Properties to achieve remarkable growth across visibility, client engagement, and revenue generation.\n\nHere is a detailed account of how this partnership drove measurable success.",
    sections: [
      {
        paragraphs: [
          "Rochman Properties Limited is a prominent real estate firm offering a range of services, including sales agency, letting agency, property management, and real estate consultancy. With a reputation for professionalism and expertise, the company has built a solid portfolio over the years. However, changing market dynamics and heightened competition highlighted the need for a more robust, modern, and results-driven approach to sales and marketing. Recognising the need for expert intervention, Rochman Properties engaged Swiftora Consulting Limited – a consultancy renowned for innovative and practical marketing and sales solutions across diverse industries.",
        ],
      },
      {
        heading: "The Challenge",
        paragraphs: [
          "Despite its established presence, Rochman Properties recognized the need to address several areas to further enhance its growth. Traditional marketing approaches had room for expanded reach, and there was an opportunity to enhance digital interaction to foster more new growth. The company saw potential in formalizing its sales processes to enhance efficiency in managing leads and client connections.",
          "Furthermore, Rochman Properties aimed to harness data more effectively to better understand their market positioning and fine-tune strategies. With these goals in mind, they sought a partner capable of providing comprehensive, results-driven solutions.",
        ],
      },
      {
        heading: "Our Approach: A Holistic Strategy for Growth",
        paragraphs: [
          "Swiftora Consulting Limited began with an in-depth analysis of Rochman Properties' current marketing efforts, sales processes, and market positioning. This diagnostic phase allowed us to develop a bespoke strategy designed to amplify strengths and address gaps effectively.",
          "On the marketing front, we crafted a compelling brand narrative that highlighted Rochman Properties' unique value proposition. We revamped the company's digital presence through the redesign of their website and the development of a robust SEO strategy. Our team created highly targeted digital advertising campaigns across Google, Facebook, and Instagram, significantly expanding their reach to potential clients. We also introduced a content marketing program, generating informative blog posts, property guides, and market reports that positioned Rochman Properties as a thought leader in the industry.",
          "To enhance sales efficiency, Swiftora introduced a structured CRM system to manage leads and client interactions more effectively. We developed a comprehensive sales playbook, providing the team with strategies, scripts, and tools to engage with prospects confidently and professionally. Regular training sessions were conducted to ensure the sales team was well-equipped to deliver exceptional client experiences.",
        ],
      },
      {
        heading: "Results: Measurable Growth Across the Board",
        paragraphs: [
          "The collaboration between Rochman Properties and Swiftora Consulting Limited yielded impressive results. Digital campaigns generated a consistent stream of high-quality leads, contributing to a significant increase in property inquiries and viewings. The CRM system enhanced team productivity, enabling better tracking and follow-up of potential clients. Sales conversions improved, driven by a more structured and professional approach to client management.",
          "The content marketing initiatives bolstered Rochman Properties' reputation as an industry authority, increasing their visibility and credibility in a competitive market. Data-driven insights enabled more strategic decision-making, further optimising both marketing spend and sales efforts.",
        ],
      },
      {
        heading: "A Partnership Built on Results",
        paragraphs: [
          "Swiftora Consulting Limited's partnership with Rochman Properties exemplifies the power of a comprehensive, integrated approach to sales and marketing. By combining strategic thinking, digital innovation, and hands-on implementation, Swiftora helped Rochman Properties not only address their immediate challenges but also build the foundation for sustained growth. This engagement reinforces Swiftora's commitment to delivering transformative solutions that drive real, measurable business outcomes.",
        ],
      },
    ],
    metrics: [
      { label: "Lead-to-viewing rate", value: "+47%" },
      { label: "Pipeline visibility", value: "100%" },
      { label: "Forecast accuracy", value: "+30%" },
    ],
    heroImage: heroImg,
    singleImage: single05,
  },
  {
    slug: "herencia",
    caseStudyNumber: "Five",
    title: "Steering Brand Growth Through Integrated Digital Marketing",
    category: "Real Estate",
    client: "Herencia",
    heroIntro: "In a competitive real estate landscape, standing out requires more than a great product – it demands a coherent, integrated digital presence that reaches the right buyers at the right moment. Herencia engaged Swiftora Consulting to build exactly that.\n\nThrough a coordinated programme of paid search, paid social, SEO, and email marketing, we delivered stronger qualified-lead flow and a measurably lower cost per acquisition.",
    sections: [
      {
        paragraphs: [
          "Herencia had a compelling product and a growing brand. What they lacked was a coordinated digital engine to capture and nurture demand at scale. Spend was fragmented across channels, remarketing was minimal, and organic visibility for high-intent search terms was limited. The result was inconsistent lead volumes and a blended cost per lead that left little room for growth.",
        ],
      },
      {
        heading: "The Challenge: Coordinating a Fragmented Digital Presence",
        paragraphs: [
          "The core challenge was not a lack of digital activity – it was a lack of coordination. Different channels were operating independently, without a shared measurement framework or a unified buyer journey. The opportunity was to bring everything together under a single, accountable strategy.",
        ],
      },
      {
        heading: "Our Approach: Integration and Measurement",
        paragraphs: [
          "Swiftora began with keyword and intent mapping to understand exactly how potential buyers were searching for properties like Herencia. From this foundation, we built a Google Ads campaign architecture designed to capture demand at every stage of the buyer journey – from early research through to high-intent comparison searches.",
          "In parallel, we restructured the Meta advertising presence, creating distinct campaign streams for awareness, consideration, and conversion. Retargeting sequences were built to re-engage website visitors and video viewers, keeping Herencia front of mind throughout the decision process.",
          "On the organic side, we implemented targeted SEO improvements focused on the highest-value search terms. Email nurture sequences were built for different buyer cohorts, delivering relevant content at each stage of the journey. Underpinning everything was a robust analytics and attribution framework that gave the Herencia team real visibility into what was working and why.",
        ],
      },
      {
        heading: "Results: More Leads, Lower Cost, Better Visibility",
        paragraphs: [
          "The integrated programme delivered significant improvements across all key metrics. Qualified lead volumes grew substantially, driven by better targeting and more effective nurture. The blended cost per lead fell meaningfully as waste was eliminated and budgets were reallocated to the highest-performing channels. Email-driven viewings became a significant contributor to the sales pipeline, demonstrating the value of systematic lead nurturing over time.",
        ],
      },
    ],
    metrics: [
      { label: "Qualified leads", value: "+210%" },
      { label: "Blended CPL", value: "−45%" },
      { label: "Email-driven viewings", value: "32%" },
    ],
    heroImage: heroImg,
    singleImage: single04,
  },
  {
    slug: "paediatric-allergy-center",
    caseStudyNumber: "Six",
    title: "Driving Healthcare Marketing Impact",
    category: "Healthcare",
    client: "Paediatric Allergy Center",
    heroIntro: "Parents searching for specialist paediatric allergy care face a difficult journey – complex medical information, scarce accessible resources, and limited guidance on where to turn. The Paediatric Allergy Center had the clinical expertise to help. What they needed was a marketing strategy to make that expertise findable, trustworthy, and actionable.\n\nSwiftora Consulting built a brand and content programme that put the clinic at the centre of the parent journey.",
    sections: [
      {
        paragraphs: [
          "The Paediatric Allergy Center had built genuine clinical expertise in a specialised and underserved area of paediatric medicine. Their consultants were highly qualified, their outcomes were strong, and their patient care was exceptional. But awareness among the parent communities they served was limited, and the clinic was largely absent from the digital channels where parents were searching for answers.",
        ],
      },
      {
        heading: "The Challenge: Reaching Parents in the Moments That Matter",
        paragraphs: [
          "Parents of children with allergies are highly engaged information-seekers. They search extensively online, join parent communities, and rely heavily on trusted sources when making decisions about their children's care. The clinic was underrepresented in all of these channels.",
          "The challenge was compounded by the clinical sensitivity of the subject matter. Content about paediatric allergies needs to be accurate, accessible, and genuinely useful – not sensationalised or anxiety-inducing. Getting the tone right was as important as getting the strategy right.",
        ],
      },
      {
        heading: "Our Approach: The Parent Journey at the Centre",
        paragraphs: [
          "Swiftora began with parent-journey mapping, tracing the typical path from first symptom to specialist consultation. This revealed the key moments of search and decision-making, and identified the information gaps that the clinic's content could fill.",
          "We developed an educational content programme built around the questions parents were actually asking: how to identify allergy symptoms in young children, when to seek specialist care, what to expect at an allergy consultation, and how to manage common conditions at home. Each piece of content was developed in close collaboration with the clinic's consultants, ensuring clinical accuracy while remaining genuinely accessible to non-specialist readers.",
          "On the visibility side, we implemented local SEO improvements and optimised the clinic's Google Business profile, targeting the specific search terms that parents in their catchment area were using. A referral and partner-clinic outreach programme was developed to build relationships with GPs, paediatricians, and school health services.",
        ],
      },
      {
        heading: "Results: Visibility, Trust, and a Growing Patient Base",
        paragraphs: [
          "The programme delivered strong results across all channels. The clinic now ranks in the top three for the most valuable local search terms relevant to paediatric allergy care. New patient enquiries increased significantly, and the content library continues to generate traffic and referrals long after publication.",
          "Qualitatively, parents and referring clinicians consistently cite the quality and accessibility of the clinic's online content as a key factor in their decision to engage. The clinic's brand has shifted from well-kept secret to recognised authority – and the patient pipeline reflects that shift.",
        ],
      },
    ],
    metrics: [
      { label: "New-patient enquiries", value: "+95%" },
      { label: "Local search rank", value: "Top 3" },
      { label: "Educational articles", value: "40+" },
    ],
    heroImage: heroImg,
    singleImage: single03,
  },
  {
    slug: "fmcg-distribution-study",
    caseStudyNumber: "Seven",
    title: "Feasibility Study & Business Planning",
    category: "Market Research",
    client: "Confidential FMCG Client",
    heroIntro: "Every major investment decision deserves a rigorous, independent foundation. When an FMCG client identified a distribution opportunity they believed in, they needed more than conviction – they needed evidence.\n\nSwiftora Consulting delivered a comprehensive feasibility study and investor-ready business plan that gave the client the clarity and confidence to move forward.",
    sections: [
      {
        paragraphs: [
          "The client had identified a compelling opportunity in FMCG distribution. The thesis was credible, the market context was favourable, and the team had relevant operational experience. But before committing significant capital, they needed an independent validation of the opportunity – one that would stand up to scrutiny from investors, lenders, and the board.",
        ],
      },
      {
        heading: "The Challenge: From Thesis to Evidence",
        paragraphs: [
          "The core challenge was translating a well-formed business hypothesis into a defensible, data-backed case. The client needed clarity on the true addressable market by channel, the capital intensity of the distribution model they were considering, and the operational and financial assumptions that would underpin a viable business plan.",
          "They also needed the output to be investor-ready – structured and presented in a way that would give funders confidence in both the opportunity and the team's ability to execute.",
        ],
      },
      {
        heading: "Our Approach: Rigorous Research, Practical Modelling",
        paragraphs: [
          "Swiftora deployed a blended methodology combining quantitative market analysis with qualitative field research. Our team conducted trade-channel sizing across five distinct distribution channels, developing detailed estimates of addressable market by volume, value, and competitive intensity.",
          "Field research involved over 180 structured interviews with retailers, wholesalers, distributors, and end consumers across multiple geographies. These interviews surfaced the ground-level realities of the distribution landscape – pricing dynamics, credit terms, logistics constraints, and the competitive behaviours of incumbent players.",
          "The financial modelling work produced a fully integrated five-year model with three scenarios – base, upside, and downside – allowing the client to stress-test assumptions and understand the key value drivers and risks. The business plan was structured to meet the requirements of institutional investors and development finance institutions, with clear sections on market opportunity, competitive positioning, operational model, team, and financial projections.",
        ],
      },
      {
        heading: "Results: Confidence to Commit",
        paragraphs: [
          "The client moved forward with a clear-eyed view of the opportunity, a defensible business case, and the financial architecture to manage it. The feasibility study identified both the significant upside of the opportunity and the specific conditions under which it would be most successfully realised – giving the client a realistic and actionable foundation for execution.",
          "The business plan has since been used successfully in conversations with potential investors and lenders, demonstrating that rigorous, independent analysis is one of the most valuable investments an ambitious business can make.",
        ],
      },
    ],
    metrics: [
      { label: "Channels analysed", value: "5" },
      { label: "Field interviews", value: "180+" },
      { label: "Forecast horizon", value: "5 yrs" },
    ],
    heroImage: heroImg,
    singleImage: single07,
  },
];

export const getEngagement = (slug: string) =>
  engagements.find((e) => e.slug === slug);