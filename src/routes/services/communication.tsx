// FILE: src/routes/services/communication.tsx
import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import heroBg from "@/assets/heroes/Communications_Solutions_Header.jpg";

export const Route = createFileRoute("/services/communication")({
  head: () => ({
    meta: [
      { title: "Communication Solutions | Swiftora Consulting" },
      { name: "description", content: "Empowering organisations to communicate with clarity, purpose, and impact." },
    ],
  }),
  component: CommunicationPage,
});

function CommunicationPage() {
  return (
    <ServicePageTemplate
      heroImage={heroBg}
      heroLine1="Amplify, Connect, Transform"
      heroLine2="Your Strategic Communication Catalyst"
      introP1="In a world overwhelmed by noise, meaningful communication is your most powerful strategic asset. We don't just help you communicate—we help you create connection, clarity, and compelling narratives that drive organizational success."
      introP2="Our approach is deeply collaborative, combining a tailored strategy with industry insights to ensure your organisation communicates with purpose and precision. Together, we can make every word count, every message matter, and every interaction meaningful. Let's redefine how your organisation communicates—because every voice deserves to be heard."
      sectionTitle="KEY COMMUNICATION SOLUTIONS"
      cards={[
        {
          number: 1,
          title: "Corporate Communication Audits",
          body: "We uncover hidden communication barriers, misalignments, and untapped potential that traditional reviews miss, providing a 360-degree view of your organizational communication health.",
        },
        {
          number: 2,
          title: "Communication Planning",
          body: "We craft holistic communication plans that are living, breathing frameworks—adaptive, precise, and aligned with your organizational vision. Our plans transform communication from a reactive function into a proactive strategic lever.",
        },
        {
          number: 3,
          title: "Communication Strategy Development",
          body: "We are efficient whisperers for your business. Our business analysis services identify bottlenecks, streamline operations, and uncover hidden growth opportunities. Whether you are stuck or just looking to level up, we'll help you hit the sweet spot.",
        },
        {
          number: 4,
          title: "Content Writing",
          body: "Words are weapons of influence. We craft narratives that cut through information overload, capturing attention, building trust, and driving engagement across multiple platforms and audiences.",
        },
        {
          number: 5,
          title: "Public Speaking & Presentation Training",
          body: "We help you become a communication master. Our training goes beyond techniques, developing confident, authentic communication that transforms audiences from listeners to believers.",
        },
        {
          number: 6,
          title: "Business Writing Workshops",
          body: "In the digital age, writing is a critical leadership skill. Our workshops transform technical, often dry business communication into powerful, clear, and compelling narratives. We help professionals write with precision, impact, and strategic intentionality.",
        },
      ]}
      otherServices={[
        { title: "Sales Solutions", href: "/services/sales" },
        { title: "Marketing Solutions", href: "/services/marketing" },
        { title: "Strategy Solutions", href: "/services/strategy" },
        { title: "Research Solutions", href: "/services/research" },
      ]}
    />
  );
}