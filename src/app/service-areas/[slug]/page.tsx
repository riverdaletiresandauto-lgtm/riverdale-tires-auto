import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check, PhoneCall, MapPin, Clock, Navigation } from "lucide-react";
import { COMPANY } from "@/lib/site-data";
import { SERVICE_AREAS } from "@/lib/service-areas";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICE_AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === slug);
  if (!area) return { title: "Service area not found" };
  return {
    title: `24/7 Roadside Assistance in ${area.city}, ${area.state} | Riverdale Tire & Auto`,
    description: `${area.description} Average response ${area.responseTime}. Call ${COMPANY.phone} — open 24/7.`,
    alternates: { canonical: `/service-areas/${area.slug}` },
  };
}

const SERVICES_OFFERED = [
  "Flat tire repair & replacement",
  "Jump start & battery service",
  "Lockout assistance",
  "Towing & recovery",
  "Fuel delivery",
  "24/7 priority dispatch",
];

export default async function ServiceAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === slug);
  if (!area) notFound();

  const others = SERVICE_AREAS.filter((a) => a.slug !== slug);

  const areaJsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Riverdale Tire & Auto",
    url: `https://riverdaletireandauto.com/service-areas/${area.slug}`,
    telephone: "+1 (901) 426-4572",
    image: "https://riverdaletireandauto.com/images/hero.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5180 Riverdale Rd",
      addressLocality: "Memphis",
      addressRegion: "TN",
      postalCode: "38141",
      addressCountry: "US",
    },
    areaServed: { "@type": "City", name: `${area.city}, ${area.state}` },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
    ],
    makesOffer: SERVICES_OFFERED.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaJsonLd) }}
      />
      <section className="relative overflow-hidden pt-28 pb-12">
        <div className="blob right-[-10%] top-[-8%] h-[30rem] w-[30rem] bg-accent/15" />
        <div className="container-site relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <FadeUp>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Service area
              </p>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                24/7 Roadside Assistance in {area.city}, {area.state}
              </h1>
            </FadeUp>
            <FadeUp delay={0.16}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {area.description}
              </p>
            </FadeUp>
            <FadeUp delay={0.24}>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="glass-card flex items-center gap-3 p-4">
                  <Clock className="h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Avg response</p>
                    <p className="text-sm font-bold text-primary">{area.responseTime}</p>
                  </div>
                </div>
                <div className="glass-card flex items-center gap-3 p-4">
                  <MapPin className="h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Distance</p>
                    <p className="text-sm font-bold text-primary">{area.distance}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.32}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`}
                  className="btn-gradient"
                >
                  <PhoneCall className="h-4 w-4" /> Call {COMPANY.phone}
                </a>
                <Link href="/contact" className="btn-glass">
                  Request help <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <div className="overflow-hidden rounded-3xl border border-white/60 shadow-[0_24px_80px_rgba(30,58,95,0.18)]">
              <iframe
                title={`Riverdale Tire & Auto service area — ${area.city}, ${area.state}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(`${area.city}, ${area.state}`)}&z=11&output=embed`}
                className="h-[24rem] w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section-pad !pt-6">
        <div className="container-site grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <FadeUp>
              <h2 className="text-2xl font-bold text-primary">
                What we cover in {area.city}
              </h2>
            </FadeUp>
            <Stagger className="mt-6 grid gap-4 sm:grid-cols-2">
              {SERVICES_OFFERED.map((s) => (
                <StaggerItem key={s}>
                  <div className="glass-card flex items-start gap-3 p-5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-foreground">{s}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <FadeUp className="mt-10">
              <h2 className="text-2xl font-bold text-primary">Key routes & neighborhoods</h2>
            </FadeUp>
            <Stagger className="mt-6 grid gap-4 sm:grid-cols-2">
              {area.highways.map((h) => (
                <StaggerItem key={h}>
                  <div className="glass-card flex items-center gap-3 p-5">
                    <Navigation className="h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm font-semibold text-foreground">{h}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <div className="mt-6 flex flex-wrap gap-2">
              {area.neighborhoods.map((n) => (
                <span key={n} className="rounded-full border border-primary/15 bg-white/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
                  {n}
                </span>
              ))}
            </div>

            <FadeUp className="mt-10">
              <div className="glass rounded-3xl p-7">
                <h2 className="text-lg font-bold text-primary">
                  How fast can you get to me in {area.city}?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Average response time in {area.city} is {area.responseTime} — faster in the city
                  core and along the main corridors. When you call, dispatch gives you a live ETA and
                  sends the nearest available truck. We keep response vehicles positioned across the
                  tri-state area so someone is always close.
                </p>
              </div>
            </FadeUp>
          </div>

          <aside className="lg:col-span-2">
            <FadeUp>
              <div className="glass rounded-3xl p-7">
                <h3 className="text-lg font-bold text-primary">Nearby service areas</h3>
                <ul className="mt-4 space-y-2">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link
                        href={`/service-areas/${o.slug}`}
                        className="group flex items-center justify-between rounded-xl border border-primary/10 bg-white/40 px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/25 hover:bg-white/70"
                      >
                        {o.city}, {o.state}
                        <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#3d3d3d] p-5 text-white">
                  <p className="font-semibold">Stuck in {area.city} right now?</p>
                  <p className="mt-1.5 text-sm text-white/80">
                    Don&apos;t wait in a queue — call dispatch and the nearest truck is on the way.
                  </p>
                  <a
                    href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`}
                    className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-primary transition-all hover:bg-amber-50"
                  >
                    <PhoneCall className="h-4 w-4" /> Call now
                  </a>
                </div>
              </div>
            </FadeUp>
          </aside>
        </div>
      </section>
    </>
  );
}
