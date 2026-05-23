import { createFileRoute } from "@tanstack/react-router";
import ThinkPieces from "@/pages/ThinkPieces";

export const Route = createFileRoute("/think-pieces/")({
  head: () => ({
    meta: [
      { title: "Think Pieces — Swiftora Consulting" },
      { name: "description", content: "Perspectives on business, strategy, and growth in Kenya." },
      { property: "og:title", content: "Think Pieces — Swiftora Consulting" },
      { property: "og:description", content: "Perspectives on business, strategy, and growth in Kenya." },
    ],
  }),
  component: ThinkPieces,
});