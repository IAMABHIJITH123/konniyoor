import { createFileRoute } from "@tanstack/react-router";
import { PracticeAreas } from "@/components/site";

export const Route = createFileRoute("/practice-areas")({
  head: () => ({
    meta: [
      { title: "Practice Areas | Konniyoor Chambers" },
      { name: "description", content: "Criminal, civil, family, bail, MACT, consumer, cyber, insurance, ADR and labour law services." },
      { property: "og:title", content: "Practice Areas | Konniyoor Chambers" },
      { property: "og:description", content: "Criminal, civil, family, bail, MACT, consumer, cyber, insurance, ADR and labour law services." },
    ],
  }),
  component: () => <PracticeAreas />,
});
