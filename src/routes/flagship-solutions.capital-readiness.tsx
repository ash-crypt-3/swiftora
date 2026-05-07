import { createFileRoute } from "@tanstack/react-router";
import { SolutionDetail } from "@/components/SolutionDetail";
import { flagshipContent } from "@/lib/content";

const solution = flagshipContent.find((s) => s.slug === "capital-readiness")!;
const others = flagshipContent.filter((s) => s.slug !== solution.slug).map((s) => ({ name: s.name, href: `/flagship-solutions/${s.slug}` }));

export const Route = createFileRoute("/flagship-solutions/capital-readiness")({
  head: () => ({ meta: [{ title: `${solution.name} — Swiftora Consulting` }, { name: "description", content: solution.short }, { property: "og:title", content: `${solution.name} — Swiftora Consulting` }, { property: "og:description", content: solution.short }] }),
  component: () => <SolutionDetail solution={solution} others={others} baseHref="/flagship-solutions" />,
});
