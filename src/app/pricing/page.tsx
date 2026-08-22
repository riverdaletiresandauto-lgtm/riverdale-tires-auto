import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check, PhoneCall, ShieldCheck, Truck, Wrench } from "lucide-react";
import { COMPANY } from "@/lib/site-data";
import { FadeUp, Stagger, StaggerItem, SectionHeading } from "@/components/motion";

export const metadata: Metadata = {
  title: "Tire & Roadside Assistance Prices — Memphis, TN",
  description:
    "Honest, upfront pricing for tire repair, jump starts, lockouts, fuel delivery and towing in Memphis. From $45 — quoted before we roll a truck. Call +1 (901) 426-4572.",
  alternates: { canonical: "/pricing" },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false, noindex: true, nofollow: true },
  },
};

const offersJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Riverdale Tire & Auto — 24/7 Roadside Assistance Pricing",
  url: "https://riverdaletireandauto.com/pricing",
  provider: { "@type": "AutoRepair", name: "Riverdale Tire & Auto", telephone: "+1 (901) 426-4572" },
  itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flat Tire Repair" }, priceSpecification: { "@type": "PriceSpecification", price: "45", priceCurrency: "USD", minPrice: "45", description: "per call + tire" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Jump Start & Battery Service" }, priceSpecification: { "@type": "PriceSpecification", price: "45", priceCurrency: "USD", minPrice: "45", description: "per call" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lockout Assistance" }, priceSpecification: { "@type": "PriceSpecification", price: "45", priceCurrency: "USD", minPrice: "45", description: "per call" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Towing & Recovery" }, priceSpecification: { "@type": "PriceSpecification", price: "89", priceCurrency: "USD", minPrice: "89", description: "per tow within Memphis" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fuel Delivery" }, priceSpecification: { "@type": "PriceSpecification", price: "45", priceCurrency: "USD", minPrice: "45", description: "per call + fuel" } },
  ],
};

const MEMBERSHIPS = [
  {
    name: "Rescue Member",
    price: "$9.99",
    unit: "/mo",
    desc: "For individual drivers who want peace of mind.",
    features: [
      "1 roadside rescue / month",
      "Tires, battery, lockout, fuel",
      "No dispatch or service fee",
      "Priority 24/7 dispatch",
      "Cancel anytime",
    ],
    cta: "Join Rescue",
    featured: false,
  },
  {
    name: "Family Plan",
    price: "$19.99",
    unit: "/mo",
    desc: "Covers every driver & vehicle in your household.",
    features: [
      "Up to 3 vehicles / 5 drivers",
      "3 roadside rescues / month",
      "All services included",
      "Priority 24/7 dispatch",
      "Spouse & teen coverage",
      "Cancel anytime",
    ],
    cta: "Join Family Plan",
    featured: true,
  },
  {
    name: "Fleet Account",
    price: "Custom",
    unit: "volume pricing",
    desc: "For businesses, rental fleets & property managers.",
    features: [
      "Per-vehicle pricing",
      "Invoiced billing & monthly statements",
      "Dedicated dispatch line",
      "After-hours lockout priority",
      "Quarterly service reports",
    ],
    cta: "Talk to fleet sales",
    featured: false,
  },
];

const PLANS = [
  {
    name: "Tire Service",
    icon: Wrench,
    price: "From $45",
    unit: "per call + tire",
    desc: "Flat repair or spare installation, on-site.",
    features: [
      "Flat tire repair from $45",
      "Spare installation $25",
      "Tire replacement from $120 + tire",
      "TPMS reset included",
      "Mobile service anywhere in Memphis & the tri-state",
    ],
    cta: "Request tire help",
    featured: false,
  },
  {
    name: "Roadside Rescue",
    icon: Truck,
    price: "From $60",
    unit: "per call",
    desc: "Jump start, lockout or fuel delivery.",
    features: [
      "Jump start from $60",
      "Lockout assistance from $70",
      "Fuel delivery $55 + fuel",
      "Battery replacement from $150 + battery",
      "24/7 priority dispatch",
    ],
    cta: "Call for rescue",
    featured: true,
  },
  {
    name: "Towing",
    icon: PhoneCall,
    price: "From $95",
    unit: "per tow",
    desc: "Flatbed towing & accident recovery.",
    features: [
      "Local tow from $95",
      "Flatbed loading included",
      "Long-distance quotes on request",
      "Winch-out from $75",
      "Insurance coordination",
    ],
    cta: "Request a tow",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offersJsonLd) }}
      />
      <section className="relative overflow-hidden pt-28 pb-12">
        <div className="blob left-[-8%] top-[-10%] h-[28rem] w-[28rem] bg-accent/15" />
        <div className="container-site relative">
          <SectionHeading
            eyebrow="Pricing"
            title="Honest prices, quoted upfront"
            subtitle="You hear the price before we roll a truck. No surprise fees, ever."
          />
        </div>
      </section>

      <section className="section-pad !pt-4">
        <div className="container-site">
          <Stagger className="grid gap-6 lg:grid-cols-3">
            {PLANS.map((p) => (
              <StaggerItem key={p.name}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 ${
                    p.featured
                      ? "bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#3d3d3d] text-white shadow-2xl shadow-black/30 lg:-translate-y-3"
                      : "glass-card"
                  }`}
                >
                  {p.featured ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                      Most requested
                    </span>
                  ) : null}
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      p.featured
                        ? "bg-white/15 text-white"
                        : "bg-gradient-to-br from-[#eab308] to-[#d99e06] text-primary-foreground shadow-md shadow-primary/25"
                    }`}
                  >
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h2 className={`mt-5 text-xl font-bold ${p.featured ? "text-white" : "text-primary"}`}>
                    {p.name}
                  </h2>
                  <p className={`mt-1 text-sm ${p.featured ? "text-white/75" : "text-muted-foreground"}`}>
                    {p.desc}
                  </p>
                  <div className="mt-6">
                    <span className={`text-4xl font-extrabold ${p.featured ? "text-white" : "text-primary"}`}>
                      {p.price}
                    </span>
                    <span className={`ml-2 text-sm ${p.featured ? "text-white/70" : "text-muted-foreground"}`}>
                      {p.unit}
                    </span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            p.featured ? "bg-accent/90 text-white" : "bg-accent/15 text-accent"
                          }`}
                        >
                          <Check className="h-3 w-3" />
                        </span>
                        <span className={p.featured ? "text-white/90" : "text-foreground"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={
                      p.featured
                        ? "mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-primary shadow-lg transition-all hover:bg-amber-50 active:scale-[0.98]"
                        : "btn-glass mt-8 w-full"
                    }
                  >
                    {p.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeUp className="mt-12">
            <div className="glass flex flex-col items-center justify-between gap-6 rounded-3xl p-8 md:flex-row">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#eab308] to-[#d99e06] text-primary-foreground">
                  <PhoneCall className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-bold text-primary">Fleet or membership plans?</h3>
                  <p className="text-sm text-muted-foreground">
                    Monthly roadside memberships and fleet accounts with volume pricing available.
                  </p>
                </div>
              </div>
              <Link href="/contact" className="btn-gradient shrink-0">
                Talk to us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= MEMBERSHIPS ================= */}
      <section className="section-pad !pt-6" id="memberships">
        <div className="container-site">
          <SectionHeading
            eyebrow="Roadside Memberships"
            title="Never pay full price for a rescue again"
            subtitle="One flat monthly fee covers your household or fleet — with priority dispatch and no service fees."
          />
          <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
            {MEMBERSHIPS.map((m) => (
              <StaggerItem key={m.name}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 ${
                    m.featured
                      ? "bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#3d3d3d] text-white shadow-2xl shadow-black/30 lg:-translate-y-3"
                      : "glass-card"
                  }`}
                >
                  {m.featured ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                      Best value
                    </span>
                  ) : null}
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      m.featured
                        ? "bg-white/15 text-white"
                        : "bg-gradient-to-br from-[#eab308] to-[#d99e06] text-primary-foreground shadow-md shadow-primary/25"
                    }`}
                  >
                    <ShieldCheck className="h-6 w-6" />
                  </span>
                  <h2 className={`mt-5 text-xl font-bold ${m.featured ? "text-white" : "text-primary"}`}>
                    {m.name}
                  </h2>
                  <p className={`mt-1 text-sm ${m.featured ? "text-white/75" : "text-muted-foreground"}`}>
                    {m.desc}
                  </p>
                  <div className="mt-6">
                    <span className={`text-4xl font-extrabold ${m.featured ? "text-white" : "text-primary"}`}>
                      {m.price}
                    </span>
                    <span className={`ml-2 text-sm ${m.featured ? "text-white/70" : "text-muted-foreground"}`}>
                      {m.unit}
                    </span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {m.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            m.featured ? "bg-accent/90 text-white" : "bg-accent/15 text-accent"
                          }`}
                        >
                          <Check className="h-3 w-3" />
                        </span>
                        <span className={m.featured ? "text-white/90" : "text-foreground"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={
                      m.featured
                        ? "mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-primary shadow-lg transition-all hover:bg-amber-50 active:scale-[0.98]"
                        : "btn-glass mt-8 w-full"
                    }
                  >
                    {m.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeUp className="mt-10">
            <p className="mx-auto max-w-2xl text-center text-sm text-muted-foreground">
              Memberships are billed monthly and can be paused or cancelled anytime. Sign up over the
              phone in under two minutes —{" "}
              <a href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`} className="font-bold text-accent">
                {COMPANY.phone}
              </a>
              .
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
