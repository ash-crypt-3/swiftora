// FILE: src/routes/services/strategy.tsx
import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import heroBg from "@/assets/heroes/hero-2.jpg";

export const Route = createFileRoute("/services/strategy")({
  head: () => ({
    meta: [
      { title: "Strategy Solutions | Swiftora Consulting" },
      { name: "description", content: "Strategic solutions that navigate complexity and deliver transformation for your business." },
    ],
  }),
  component: StrategyPage,
});

function StrategyPage() {
  return (
    <ServicePageTemplate
      heroImage={heroBg}
      heroLine1="Strategic Solutions That Stick"
      heroLine2="Navigating Complexity, Delivering Transformation"
      introP1="In today's volatile business landscape, survival isn't about maintaining the status quo—it's about strategic reinvention. Our holistic strategic solutions are not just a service; they are a transformative journey that turns organizational challenges into breakthrough opportunities."
      introP2="Imagine having a strategic partner who sees beyond spreadsheets and traditional consulting models. We don't just audit your business; we decode its potential. Our approach is surgical yet visionary, combining forensic business review with innovative design thinking to reconstruct your organizational DNA."
      sectionTitle="KEY STRATEGY SOLUTIONS"
      cards={[
        {
          number: 1,
          title: "Business Review & Audit",
          body: "Beyond traditional skill development, we create sales DNA. Our training methodology doesn't just teach techniques—it rewires your team's approach, embedding a culture of strategic selling, psychological insight, and consistent high performance.",
        },
        {
          number: 2,
          title: "Business Model Innovation",
          body: "We are architects of reinvention. By deconstructing your current model and reimagining its possibilities, we help you create adaptive, resilient business frameworks that can pivot with market dynamics.",
        },
        {
          number: 3,
          title: "Strategic Planning & Recovery",
          body: "When disruption strikes, we transform crisis into opportunity. Our strategic recovery planning doesn't just restore—it reimagines, positioning your organization to emerge stronger and more agile.",
        },
        {
          number: 4,
          title: "Organizational Design",
          body: "We view your organization as a living ecosystem. Our developmental strategies align structure, culture, and strategy, creating high-performance environments that naturally accelerate innovation and execution.",
        },
        {
          number: 5,
          title: "Strategy Implementation Management",
          body: "Increase your chances of winning that bid. We design compelling, visually stunning pitch decks that don't just present information—they tell a story that captures imagination, builds trust, and drives decision-making.",
        },
        {
          number: 6,
          title: "Market Entry & Expansion Strategies",
          body: "We don't just help you enter markets—we help you dominate them. Our expansion strategies are precision-engineered, combining deep market insights with strategic foresight.",
        },
      ]}
      otherServices={[
        { title: "Sales Solutions", href: "/services/sales" },
        { title: "Marketing Solutions", href: "/services/marketing" },
        { title: "Communication Solutions", href: "/services/communication" },
        { title: "Research Solutions", href: "/services/research" },
      ]}
    />
  );
}