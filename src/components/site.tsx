import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { z } from "zod";
import {
  Scale, Gavel, Landmark, ShieldCheck, Users, Car, ShoppingBag, ShieldAlert, Umbrella,
  Handshake, Briefcase, FileText, Mail, Phone, MessageCircle, MapPin, Menu, X,
  Facebook, Instagram, Linkedin, Twitter,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import { CONTACT, PRACTICE_AREAS } from "@/lib/site-data";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/practice-areas", label: "Practice Areas" },
  { to: "/team", label: "Our Team" },
  { to: "/booking", label: "Booking" },
  { to: "/contact", label: "Contact" },
] as const;

const btnGold = "inline-flex items-center justify-center rounded-md bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition hover:opacity-90";
const btnOutline = "inline-flex items-center justify-center rounded-md border border-gold/50 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-gold-soft";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2">
          <Scale className="h-7 w-7 text-gold" />
          <span className="text-lg font-bold tracking-tight">Konniyoor <span className="text-gold">Chambers</span></span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm text-muted-foreground transition hover:text-gold" activeProps={{ className: "text-gold" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/booking" className={`${btnGold} hidden px-5 py-2.5 lg:inline-flex`}>Consult with Us</Link>
        <button className="lg:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-5 py-4 lg:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-muted-foreground hover:text-gold">{n.label}</Link>
          ))}
          <Link to="/booking" onClick={() => setOpen(false)} className={`${btnGold} mt-2`}>Consult with Us</Link>
        </nav>
      )}
    </header>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: ReactNode; sub?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      <div className="mx-auto mt-5 h-px w-16 bg-gradient-gold" />
      {sub && <p className="mt-5 text-muted-foreground">{sub}</p>}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img src={hero} alt="Scales of justice and law books" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto max-w-7xl px-5 py-28 md:py-40">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold">
            <Gavel className="h-3.5 w-3.5" /> Advocates & Legal Consultants
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Serving Justice with <span className="text-gradient-gold">Integrity & Expertise</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Expert legal solutions for civil, criminal and family litigation — delivered with diligence, discretion and a steadfast commitment to your rights.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/booking" className={btnGold}>Book Consultation</Link>
            <Link to="/practice-areas" className={btnOutline}>Our Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  const stats = [["20+", "Years of combined practice"], ["1,500+", "Matters handled"], ["11", "Practice areas"]];
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <SectionHead eyebrow="About Us" title={<>Defending Rights. Resolving Disputes. <span className="text-gold">Pursuing Justice.</span></>} />
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="space-y-5 text-muted-foreground">
          <p>Konniyoor Chambers is a team of dedicated advocates practising before the trial courts, tribunals and the High Court. We combine deep courtroom experience with a practical, client-first approach.</p>
          <p>Every matter receives personal attention from senior counsel — from first consultation to final hearing — with clear advice, honest assessment and relentless preparation.</p>
          <div className="flex gap-6 pt-2">
            {[[ShieldCheck, "Integrity"], [Landmark, "Experience"], [Users, "Client focus"]].map(([I, l]) => {
              const Icon = I as typeof ShieldCheck;
              return <div key={l as string} className="flex items-center gap-2 text-sm text-foreground"><Icon className="h-5 w-5 text-gold" />{l as string}</div>;
            })}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {stats.map(([n, l]) => (
            <div key={l} className="rounded-lg border border-border bg-card p-6 text-center">
              <div className="text-3xl font-bold text-gradient-gold">{n}</div>
              <div className="mt-2 text-xs text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ICONS = [Gavel, Scale, ShieldCheck, Users, Car, ShoppingBag, ShieldAlert, Umbrella, Handshake, Briefcase, FileText];
const DESCS = [
  "Defence and prosecution in sessions and magistrate courts.",
  "Property, contract, recovery and injunction suits.",
  "Swift bail and anticipatory bail applications before all forums.",
  "Divorce, custody, maintenance and matrimonial disputes.",
  "Compensation claims for accident victims and families.",
  "Remedies against deficient services and unfair trade practices.",
  "Online fraud, data misuse and IT Act offences.",
  "Recovery of rightful claims from insurers.",
  "Amicable, cost-effective settlement outside court.",
  "Wages, termination, gratuity and workplace disputes.",
  "Drafting, notices, documentation and legal opinions.",
];

export function PracticeAreas() {
  return (
    <section className="bg-navy py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHead eyebrow="Practice Areas" title="Our Specializations" sub="Comprehensive representation across the matters that matter most to you." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRACTICE_AREAS.map((a, i) => {
            const Icon = ICONS[i] ?? FileText;
            return (
              <div key={a} className="group rounded-lg border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-gold">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-gold-soft text-gold transition group-hover:bg-gradient-gold group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold">{a}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{DESCS[i]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const TEAM = [
  { name: "Adv. Konniyoor S Harichandran", role: "SENIOR ADVOCATE", bio: "MA LLB with 35+  years in criminal and civil litigation before the Sessions Courts and High Court of Kerala." },
  { name: "Adv. Ravishankar Thampi H A", role: "LEADING ADVOCATE", bio: "B.A., LL.B. Over 15 years handling matrimonial, custody and maintenance matters with sensitivity." },
  { name: "Adv. Sandra S A", role: "COUNSEL", bio: "LL.M. (International Law ) 2+ years experience." },
  { name: "Adv. Lakshmi Nair", role: "Panel Member – Cyber & Consumer", bio: "LL.M. (Cyber Law). Advises on IT Act offences, online fraud and consumer protection disputes." },
];

export function Team() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <SectionHead eyebrow="Our Team" title="Senior Advocates & Panel" sub="Experienced counsel committed to your cause." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((m) => (
          <div key={m.name} className="overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-accent to-navy">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold/60 text-2xl font-bold text-gold">
                {m.name.replace("Adv. ", "").split(" ").map((w) => w[0]).join("")}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold">{m.name}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gold">{m.role}</p>
              <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const schema = z.object({
  firstName: z.string().trim().min(1, "Required").max(50),
  lastName: z.string().trim().min(1, "Required").max(50),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().regex(/^[+\d\s-]{7,20}$/, "Invalid phone"),
  area: z.string().min(1, "Please select an area"),
});

const field = "w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-1 focus:ring-ring";

export function Booking() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      setErrors(Object.fromEntries(r.error.issues.map((i) => [i.path[0], i.message])));
      return;
    }
    setErrors({});
    const v = r.data;
    const msg = `Consultation request\nName: ${v.firstName} ${v.lastName}\nEmail: ${v.email}\nPhone: ${v.phone}\nRequire legal consultation for: ${v.area}`;
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    setDone(true);
  }
  const err = (k: string) => errors[k] && <p className="mt-1 text-xs text-destructive">{errors[k]}</p>;
  return (
    <section className="bg-navy py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHead eyebrow="Booking" title="Book a Consultation" sub="Share your details and we'll get back to you promptly." />
        <form onSubmit={submit} noValidate className="grid gap-5 rounded-lg border border-border bg-card p-8 sm:grid-cols-2">
          <div><input name="firstName" placeholder="First Name" className={field} />{err("firstName")}</div>
          <div><input name="lastName" placeholder="Last Name" className={field} />{err("lastName")}</div>
          <div><input name="email" type="email" placeholder="Email" className={field} />{err("email")}</div>
          <div><input name="phone" type="tel" placeholder="Phone" className={field} />{err("phone")}</div>
          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm text-muted-foreground">Require legal consultation for:</label>
            <select name="area" defaultValue="" className={field}>
              <option value="" disabled>Select a practice area</option>
              {PRACTICE_AREAS.map((a) => <option key={a}>{a}</option>)}
            </select>
            {err("area")}
          </div>
          <button type="submit" className={`${btnGold} sm:col-span-2`}>Request Consultation</button>
          {done && <p className="text-center text-sm text-gold sm:col-span-2">Thank you — your request has been prepared in WhatsApp. We'll respond shortly.</p>}
        </form>
      </div>
    </section>
  );
}

export function Contact() {
  const items = [
    { Icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    ...CONTACT.phones.map((p) => ({ Icon: Phone, label: "Phone", value: p, href: `tel:${p.replace(/\s/g, "")}` })),
    { Icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: `https://wa.me/${CONTACT.whatsapp}` },
    { Icon: MapPin, label: "Office", value: CONTACT.address, href: undefined },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <SectionHead eyebrow="Contact" title="Get in Touch" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {items.map(({ Icon, label, value, href }, i) => (
          <a key={i} href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noopener" className="rounded-lg border border-border bg-card p-6 text-center transition hover:border-gold/50">
            <Icon className="mx-auto h-6 w-6 text-gold" />
            <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
            <p className="mt-1 break-words text-sm font-medium">{value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy">
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2"><Scale className="h-6 w-6 text-gold" /><span className="font-bold">Konniyoor <span className="text-gold">Chambers</span></span></div>
          <div className="flex gap-4">
            {[Facebook, Instagram, Linkedin, Twitter].map((I, i) => (
              <a key={i} href="#" aria-label="Social link" className="rounded-full border border-border p-2 text-muted-foreground transition hover:border-gold hover:text-gold"><I className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
        <div className="mt-8 rounded-md border border-border p-5 text-xs leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Disclaimer:</strong> As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. This website is meant solely for informational purposes and does not constitute solicitation, advertisement or legal advice. By accessing this website, you acknowledge that you are seeking information about Konniyoor Chambers of your own accord. No attorney–client relationship is created through use of this website.
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Konniyoor Chambers. All rights reserved.</p>
      </div>
    </footer>
  );
}
