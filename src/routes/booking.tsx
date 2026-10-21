import { createFileRoute } from "@tanstack/react-router";
import { Booking } from "@/components/site";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Consultation | Konniyoor Chambers" },
      { name: "description", content: "Request a legal consultation with Konniyoor Chambers." },
      { property: "og:title", content: "Book a Consultation | Konniyoor Chambers" },
      { property: "og:description", content: "Request a legal consultation with Konniyoor Chambers." },
    ],
  }),
  component: () => <Booking />,
});
