import { createFileRoute } from "@tanstack/react-router";
import { Hero, About, PracticeAreas, Team, Booking, Contact } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Konniyoor Chambers | Advocates & Legal Consultants" },
      { name: "description", content: "Serving justice with integrity & expertise — civil, criminal and family litigation." },
      { property: "og:title", content: "Konniyoor Chambers | Advocates & Legal Consultants" },
      { property: "og:description", content: "Serving justice with integrity & expertise — civil, criminal and family litigation." },
    ],
  }),
  component: () => (
    <>
      <Hero /><About /><PracticeAreas /><Team /><Booking /><Contact />
    </>
  ),
});
