import { createFileRoute } from "@tanstack/react-router";
import { Booking, Contact } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Konniyoor Chambers" },
      { name: "description", content: "Email, phone and WhatsApp contact details for Konniyoor Chambers." },
      { property: "og:title", content: "Contact | Konniyoor Chambers" },
      { property: "og:description", content: "Email, phone and WhatsApp contact details for Konniyoor Chambers." },
    ],
  }),
  component: () => <><Contact /><Booking /></>,
});
