// ─────────────────────────────────────────────────────────────
// FILE: src/routes/services/sales.tsx
// ─────────────────────────────────────────────────────────────
import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import heroBg from "@/assets/heroes/hero-2.jpg";
// ↑ If you don't have a sales-specific hero, reuse hero-2.jpg temporarily:
// import heroBg from "@/assets/heroes/hero-2.jpg";

export const Route = createFileRoute("/services/sales")({
  head: () => ({
    meta: [
      { title: "Sales Solutions | Swiftora Consulting" },
      { name: "description", content: "Data-driven sales strategies to maximise conversions and exceed revenue targets." },
    ],
  }),
  component: SalesPage,
});

function SalesPage() {
  return (
    <ServicePageTemplate
      heroImage={heroBg}
      // ── REPLACE the strings below with your live site copy ──
      heroLine1="Elevate, Accelerate, Dominate"
      heroLine2="Your Sales Transformation Partner"
      introP1="Sales is the lifeblood of business where finding the way through complexities of customer relationships, market trends, and strategic execution can mean the difference between growth and stagnation. We don’t just improve your numbers—we redesign your entire revenue generation philosophy./"
      introP2="Our solutions are meticulously designed, data-powered, and focused on turning sales from a department into a strategic advantage. Are you prepared to transcend traditional sales limitations and enter a new era of strategic revenue generation?"
      sectionTitle="KEY SALES SOLUTIONS"
      cards={[
        {
          number: 1,
          title: "Sales Training",
          body: "Beyond traditional skill development, we create sales DNA. Our training methodology doesn’t just teach techniques—it rewires your team’s approach, embedding a culture of strategic selling, psychological insight, and consistent high performance.",
        },
        {
          number: 2,
          title: " Sales Auditing & Planning",
          body: "We conduct a forensic exploration of your sales infrastructure. Our diagnostic approach dissects every layer of your sales ecosystem, identifying hidden bottlenecks, untapped potential, and strategic opportunities that traditional audits miss.",
        },
        {
          number: 3,
          title: "Customer Experience & Retention",
          body: "In an era of endless choices, loyalty is your most valuable currency. We design holistic customer experience strategies that transform transactions into lasting relationships, turning satisfied customers into passionate brand advocates.",
        },
        {
          number: 4,
          title: "Key Account Management",
          body: "Strategic account management isn’t about management—it’s about enduring partnership. We help you develop sophisticated, data-driven approaches that elevate key account relationships from transactional interactions to strategic collaborations.",
        },
        {
          number: 5,
          title: "Pitch Deck Development",
          body: "Increase your chances of winning that bid. We design compelling, visually stunning pitch decks that don’t just present information—they tell a story that captures imagination, builds trust, and drives decision-making.",
        },
        {
          number: 6,
          title: "Audits Pitching Outsourcing",
          body: "For organizations seeking elite-level pitch capabilities without building internal infrastructure, our outsourced pitching solution provides world-class presentation expertise, ensuring your most critical conversations always land with precision and impact.",
        },
      ]}
      otherServices={[
        { title: "Marketing Solutions", href: "/services/marketing" },
        { title: "Strategy Solutions", href: "/services/strategy" },
        { title: "Communication Solutions", href: "/services/communication" },
        { title: "Research Solutions", href: "/services/research" },
      ]}
    />
  );
}