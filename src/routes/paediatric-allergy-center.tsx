import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";
import { getEngagement } from "@/lib/engagements";

const SLUG = "paediatric-allergy-center" as const;

export const Route = createFileRoute("/paediatric-allergy-center")({
  head: () => {
    const e = getEngagement(SLUG)!;
    return {
      meta: [
        { title: `${e.title} - Case Study | Swiftora Consulting` },
        { name: "description", content: e.description },
        { property: "og:title", content: `${e.title} - Case Study | Swiftora Consulting` },
        { property: "og:description", content: e.description },
      ],
    };
  },
  component: () => <CaseStudy slug={SLUG} />,
});
