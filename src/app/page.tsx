import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, PhoneCall, ShieldCheck, Clock, MapPin } from "lucide-react";
import { SERVICES, STATS, TESTIMONIALS, FAQS, COMPANY } from "@/lib/site-data";
import { FadeUp, Stagger, StaggerItem, SectionHeading } from "@/components/motion";
import { EmblaCarousel } from "@/components/embla-carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Tire Shop & 24/7 Roadside Assistance in Memphis, TN",
  description:
    "Riverdale Tires and Auto — Memphis tire shop for tire repair, new & used tires, and 24/7 roadside assistance: jump start, lockout, fuel delivery & towing. 4.5★ rated. Call +1 901-751-2744.",
  alternates: { canonical: "/" },
};

const FEATURES = [
  {
    title: "24/7 roadside response",
    text: "Nights, weekends, holidays — if you're stuck, we're awake. Average arrival in 30–45 minutes.",
    image: "/images/hero.jpg",
  },
  {
    title: "Mobile tire & battery service",
    text: "Flat tire or dead battery? We bring the tools and parts to you — home, office or highway.",
    image: "/images/service-tire.jpg",
  },
  {
    title: "One call, total help",
    text: "Tires, jump starts, lockouts, fuel and towing — a single number covers every emergency.",
    image: "/images/service-towing.jpg",
  },
];

export default function HomePage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://riverdaletireandauto.com/#business",
    name: "Riverdale Tires and Auto",
    description:
      "Tire repair, new & used tires, and 24/7 roadside assistance in Memphis — jump starts, lockouts, fuel delivery and towing across the tri-state area.",
    url: "https://riverdaletireandauto.com",
    image: "https://riverdaletireandauto.com/images/hero.jpg",
    logo: "https://riverdaletireandauto.com/images/logo.png",
    email: COMPANY.email,
    telephone: "+1 901-751-2744",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5180 Riverdale Rd",
      addressLocality: "Memphis",
      addressRegion: "TN",
      postalCode: "38141",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 35.0441815, longitude: -89.8307307 },
    hasMap: "https://www.google.com/maps?cid=9132951130505582979",
    areaServed: [
      { "@type": "City", name: "Memphis" },
      { "@type": "State", name: "West Tennessee" },
      { "@type": "State", name: "North Mississippi" },
      { "@type": "State", name: "East Arkansas" },
    ],
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "16:00" },
    ],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.5", reviewCount: "239" },
    knowsAbout: ["Tire Repair", "Used Tires", "New Tires", "Roadside Assistance", "Jump Start", "Towing", "Lockout Service", "Fuel Delivery"],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-28">
        <div className="blob left-[-10%] top-[-5%] h-[32rem] w-[32rem] bg-accent/20" />
        <div className="blob right-[-8%] top-[10%] h-[28rem] w-[28rem] bg-primary/15" />
        <div className="blob bottom-[-20%] left-[30%] h-[30rem] w-[30rem] bg-[#f5c518]/15" />

        <div className="container-site relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <FadeUp>
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-md">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                24/7 Roadside Assistance
              </p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-6xl">
                Stranded? We&apos;re <br />
                <span className="bg-gradient-to-r from-[#eab308] via-[#ca8a04] to-[#8a6a00] bg-clip-text text-transparent">
                  already on the way
                </span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Flat tires, dead batteries, locked keys, empty tanks or a vehicle that won&apos;t
                start — Riverdale Tires and Auto gets you moving again, wherever you are, any hour.
              </p>
            </FadeUp>
            <FadeUp delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`} className="btn-gradient">
                  <PhoneCall className="h-4 w-4" /> Call {COMPANY.phone}
                </a>
                <Link href="/services" className="btn-glass">
                  Our Services
                </Link>
              </div>
            </FadeUp>
            <FadeUp delay={0.32}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                {STATS.slice(0, 3).map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-primary">{s.value}</p>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2} className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/70 shadow-[0_24px_80px_rgba(30,58,95,0.18)]">
              <Image
                src="/images/hero.jpg"
                alt="Riverdale Tires and Auto roadside assistance helping a stranded driver"
                width={1200}
                height={675}
                priority
                className="h-[24rem] w-full object-cover sm:h-[28rem]"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/60 bg-white/70 p-4 backdrop-blur-xl">
                <p className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <Clock className="h-4 w-4 text-accent" />
                  24/7 dispatch — average arrival 30–45 minutes
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="section-pad relative">
        <div className="container-site">
          <SectionHeading
            eyebrow="Why Riverdale Tires"
            title="Fast, friendly help — every time"
            subtitle="One call covers every roadside emergency, backed by 18 years of service."
          />
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {FEATURES.map((f) => (
              <StaggerItem key={f.title}>
                <div className="glass-card group h-full overflow-hidden">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={f.image}
                      alt={f.title}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                  </div>
                  <div className="p-7">
                    <h3 className="text-lg font-semibold text-primary">{f.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section-pad relative">
        <div className="blob right-[-10%] top-[10%] h-[26rem] w-[26rem] bg-accent/15" />
        <div className="container-site relative">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              align="left"
              eyebrow="What we do"
              title="Every roadside emergency, covered"
            />
            <FadeUp>
              <Link href="/services" className="btn-glass">
                All services <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeUp>
          </div>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <StaggerItem key={s.slug}>
                <Link href={`/services/${s.slug}`} className="glass-card group block h-full overflow-hidden">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 text-sm font-bold text-white drop-shadow">
                      {s.title}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">{s.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ================= STATS STRIP ================= */}
      <section className="section-pad !py-14">
        <div className="container-site">
          <Stagger className="glass grid gap-8 rounded-3xl px-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <StaggerItem key={s.label} className="text-center">
                <p className="bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl font-extrabold text-transparent">
                  {s.value}
                </p>
                <p className="mt-1.5 text-sm uppercase tracking-wider text-muted-foreground">{s.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="section-pad relative">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              align="left"
              eyebrow="Reviews"
              title="What stranded drivers say"
            />
            <FadeUp>
              <Link href="/testimonials" className="btn-glass">
                All reviews <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeUp>
          </div>
          <FadeUp className="mt-12">
            <EmblaCarousel items={TESTIMONIALS.map((t) => ({ quote: t.quote, name: t.name, role: t.role }))} />
          </FadeUp>
        </div>
      </section>

      {/* ================= SERVICE AREA ================= */}
      <section className="section-pad !py-14">
        <div className="container-site">
          <FadeUp>
            <div className="glass flex flex-col items-center gap-6 rounded-3xl p-10 text-center md:flex-row md:text-left">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#eab308] to-[#d99e06] text-primary-foreground">
                <MapPin className="h-7 w-7" />
              </span>
              <div>
                <h2 className="text-xl font-bold text-primary">Proudly serving Memphis &amp; the tri-state area</h2>
                <p className="mt-1 text-muted-foreground">
                  All of Memphis, West Tennessee, North Mississippi and East Arkansas — including
                  interstate corridors and long-distance towing on request.
                </p>
              </div>
              <Link href="/contact" className="btn-gradient shrink-0">
                Check coverage <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="section-pad relative">
        <div className="blob left-[-10%] top-[20%] h-[24rem] w-[24rem] bg-primary/10" />
        <div className="container-site relative max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <FadeUp className="mt-10">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="glass rounded-2xl border !border-primary/10 px-5"
                >
                  <AccordionTrigger className="text-left font-semibold text-primary">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeUp>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section-pad relative">
        <div className="container-site">
          <FadeUp>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#3d3d3d] px-8 py-14 text-center shadow-2xl shadow-black/30 sm:px-16">
              <div className="blob left-[10%] top-[-30%] h-64 w-64 bg-yellow-400/25" />
              <div className="blob bottom-[-40%] right-[10%] h-72 w-72 bg-white/10" />
              <h2 className="relative text-3xl font-bold text-white sm:text-4xl">
                Stuck right now? Don&apos;t wait.
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-white/80">
                One call and a truck is on the way — tires, battery, lockout, fuel or tow.
                We answer 24/7.
              </p>
              <div className="relative mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#eab308] to-[#d99e06] px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg transition-all hover:brightness-105 active:scale-[0.98]"
                >
                  <PhoneCall className="h-4 w-4" /> Call {COMPANY.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-yellow-400/40 bg-yellow-400/10 px-7 py-3.5 text-sm font-bold text-yellow-300 backdrop-blur-md transition-all hover:bg-yellow-400/20 active:scale-[0.98]"
                >
                  Request help online
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
