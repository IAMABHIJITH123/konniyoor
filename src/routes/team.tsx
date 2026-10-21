import { createFileRoute } from "@tanstack/react-router";
import { Team } from "@/components/site";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team | Konniyoor Chambers" },
      { name: "description", content: "Senior advocates and panel members of Konniyoor Chambers." },
      { property: "og:title", content: "Our Team | Konniyoor Chambers" },
      { property: "og:description", content: "Senior advocates and panel members of Konniyoor Chambers." },
    ],
  }),
  component: () => <Team />,
});
