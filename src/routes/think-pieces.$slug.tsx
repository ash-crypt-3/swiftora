import { createFileRoute } from "@tanstack/react-router";
import ArticlePage from "@/pages/ArticlePage";

export const Route = createFileRoute("/think-pieces/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug.replace(/-/g, " ")} — Swiftora Consulting` },
      { name: "description", content: "Perspectives on business, strategy, and growth." },
    ],
  }),
  component: ArticleRoute,
});

function ArticleRoute() {
  const { slug } = Route.useParams();
  return <ArticlePage slug={slug} />;
}
