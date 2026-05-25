// FILE: src/routes/services/marketing.tsx
import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import heroBg from "@/assets/heroes/Marketing_Solutions_Header.jpg";

export const Route = createFileRoute("/services/marketing")({
  head: () => ({
    meta: [
      { title: "Marketing Solutions | Swiftora Consulting" },
      { name: "description", content: "Strategic marketing to connect authentically with your audience and achieve measurable success." },
    ],
  }),
  component: MarketingPage,
});

function MarketingPage() {
  return (
    <ServicePageTemplate
      heroImage={heroBg}
      heroLine1="Amplify & Elevate Your Business"
      heroLine2="With Our Strategic Marketing Solutions"
      introP1="Imagine your brand as a powerful, resonant force—not just another voice in the crowded marketplace, but a beacon that attracts, inspires, and converts. That's the transformative journey we offer. In a digital landscape drowning in noise, true marketing isn't about visibility—it's about meaningful connection, strategic positioning, and engaging brand storytelling."
      introP2="Are you ready to stop blending in and start standing out? Let's turn your marketing from a necessary expense into your most powerful competitive advantage. We don't just optimize—we reimagine what's possible for your business."
      sectionTitle="KEY MARKETING SOLUTIONS"
      cards={[
        {
          number: 1,
          title: "Brand Workshop",
          body: "We dive deep into your organizational DNA, uncovering the authentic core of your brand's narrative. Our immersive workshops transform abstract potential into a crystalline strategic blueprint that resonates, differentiates, and compels.",
        },
        {
          number: 2,
          title: "Value Proposition Development",
          body: "Your value proposition is your strategic heartbeat. We craft laser-focused value propositions that don't just communicate what you do—they articulate why you matter. We translate your unique capabilities into a compelling narrative that cuts through market noise and captures customer imagination.",
        },
        {
          number: 3,
          title: "Marketing Review & Audit",
          body: "Our forensic marketing diagnostic goes beyond surface-level metrics. We conduct a 360-degree analysis that illuminates hidden opportunities, structural inefficiencies, and untapped strategic potential. We don't just review—we decode your marketing ecosystem's true performance potential.",
        },
        {
          number: 4,
          title: "Marketing Planning",
          body: "Our marketing plans are living, adaptive frameworks that bridge visionary thinking with pragmatic execution. We create roadmaps that are simultaneously ambitious and achievable, turning strategic vision into measurable momentum.",
        },
        {
          number: 5,
          title: "Lead Generation",
          body: "We design hyper-targeted, multi-channel lead generation ecosystems that don't just attract prospects—they pre-qualify, nurture, and seamlessly guide potential customers through sophisticated conversion journeys.",
        },
        {
          number: 6,
          title: "Personal Branding",
          body: "For leaders and professionals, personal brand is professional capital. We develop strategic personal branding approaches that amplify individual expertise, build thought leadership, and create compelling professional narratives that open doors and create opportunities.",
        },
      ]}
      otherServices={[
        { title: "Sales Solutions", href: "/services/sales" },
        { title: "Strategy Solutions", href: "/services/strategy" },
        { title: "Communication Solutions", href: "/services/communication" },
        { title: "Research Solutions", href: "/services/research" },
      ]}
    />
  );
}