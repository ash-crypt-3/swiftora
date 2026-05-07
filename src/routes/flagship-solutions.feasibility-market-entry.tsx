import { createFileRoute } from "@tanstack/react-router";
import { SolutionDetail } from "@/components/SolutionDetail";
import { flagshipContent } from "@/lib/content";

const solution = flagshipContent.find((s) => s.slug === "feasibility-market-entry")!;
const others = flagshipContent.filter((s) => s.slug !== solution.slug).map((s) => ({ name: s.name, href: `/flagship-solutions/${s.slug}` }));

export const Route = createFileRoute("/flagship-solutions/feasibility-market-entry")({
  head: () => ({ meta: [{ title: `${solution.name} — Swiftora Consulting` }, { name: "description", content: solution.short }, { property: "og:title", content: `${solution.name} — Swiftora Consulting` }, { property: "og:description", content: solution.short }] }),
  component: () => <SolutionDetail solution={solution} others={others} baseHref="/flagship-solutions" />,
});
