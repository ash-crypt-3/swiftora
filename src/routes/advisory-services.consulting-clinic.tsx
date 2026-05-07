import { createFileRoute } from "@tanstack/react-router";
import { SolutionDetail } from "@/components/SolutionDetail";
import { advisoryContent } from "@/lib/content";

const solution = advisoryContent.find((s) => s.slug === "consulting-clinic")!;
const others = advisoryContent.filter((s) => s.slug !== solution.slug).map((s) => ({ name: s.name, href: `/advisory-services/${s.slug}` }));

export const Route = createFileRoute("/advisory-services/consulting-clinic")({
  head: () => ({ meta: [{ title: `${solution.name} — Swiftora Consulting` }, { name: "description", content: solution.short }, { property: "og:title", content: `${solution.name} — Swiftora Consulting` }, { property: "og:description", content: solution.short }] }),
  component: () => <SolutionDetail solution={solution} others={others} baseHref="/advisory-services" />,
});
