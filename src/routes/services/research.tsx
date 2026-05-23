// FILE: src/routes/services/research.tsx
import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import heroBg from "@/assets/heroes/hero-2.jpg";

export const Route = createFileRoute("/services/research")({
  head: () => ({
    meta: [
      { title: "Research Solutions | Swiftora Consulting" },
      { name: "description", content: "Comprehensive research solutions to drive informed decision-making and strategic growth." },
    ],
  }),
  component: ResearchPage,
});

function ResearchPage() {
  return (
    <ServicePageTemplate
      heroImage={heroBg}
      heroLine1="Decode, Discover, Disrupt"
      heroLine2="Your Strategic Intelligence Partner"
      introP1="Swiftora Consulting Limited specialises in delivering comprehensive research services designed to support businesses, organisations, and entrepreneurs in making informed decisions. We are committed to providing actionable insights and strategic guidance through rigorous research methodologies and industry expertise."
      introP2="Whether you are looking to explore market opportunities, validate a business idea, or develop a detailed business plan, our services are designed to equip you with tools for success and we've got the expertise to make it happen—with a dash of wit and a whole lot of smarts."
      sectionTitle="KEY RESEARCH SOLUTIONS"
      cards={[
        {
          number: 1,
          title: "Market Research",
          body: "Think of us as your market detectives, sniffing out consumer behaviours, untapped trends, and competitive secrets. Armed with cutting-edge tools and a curious mindset, we'll hand you the golden nuggets of insight you need to conquer your target market.",
        },
        {
          number: 2,
          title: "Feasibility Studies",
          body: "Got a brilliant idea but not sure if it will float? Our feasibility studies dive into the nitty-gritty, analysing market demand, financial dynamics, and operational hurdles. Think of us as your idea's hype squad—if it's worth pursuing, we'll prove it.",
        },
        {
          number: 3,
          title: "Business Analysis",
          body: "We are efficient whisperers for your business. Our business analysis services identify bottlenecks, streamline operations, and uncover hidden growth opportunities. Whether you are stuck or just looking to level up, we'll help you hit the sweet spot.",
        },
        {
          number: 4,
          title: "Market & Industry Insights",
          body: "Want the inside scoop on your industry? We dish out trend-savvy, no-fluff analyses that keep you ahead of the curve. Regulatory changes, market shifts, industry gossip—we've got it covered, so you are always in the know.",
        },
        {
          number: 5,
          title: "Data Collection & Analysis",
          body: "Data isn't just numbers; it's a story waiting to be told. We'll gather the details and connect the dots, turning raw data into insights that matter. Surveys, interviews, stats—we'll wrangle it all for you.",
        },
        {
          number: 6,
          title: "Business Plan Development",
          body: "Forget cookie-cutter templates. We formulate business plans that wow investors and guide growth like a pro. Market analysis, killer strategies, sharp financials—it's all in the mix, tailored to your vision.",
        },
      ]}
      otherServices={[
        { title: "Sales Solutions", href: "/services/sales" },
        { title: "Marketing Solutions", href: "/services/marketing" },
        { title: "Strategy Solutions", href: "/services/strategy" },
        { title: "Communication Solutions", href: "/services/communication" },
      ]}
    />
  );
}