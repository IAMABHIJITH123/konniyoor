import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Konniyoor Chambers" },
      { name: "description", content: "Defending rights, resolving disputes and pursuing justice — meet Konniyoor Chambers." },
      { property: "og:title", content: "About Us | Konniyoor Chambers" },
      { property: "og:description", content: "Defending rights, resolving disputes and pursuing justice — meet Konniyoor Chambers." },
    ],
  }),
  component: () => <About />,
});
