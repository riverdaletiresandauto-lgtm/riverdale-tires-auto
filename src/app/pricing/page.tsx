import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check, PhoneCall, Truck, Wrench } from "lucide-react";
import { COMPANY } from "@/lib/site-data";
import { FadeUp, Stagger, StaggerItem, SectionHeading } from "@/components/motion";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent roadside assistance pricing — flat tire, jump start, lockout, fuel delivery and towing rates from Riverdale Tires and Auto.",
};

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
      "Mobile service anywhere in Riverdale",
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
                      ? "bg-gradient-to-br from-primary via-[#244b7a] to-[#2a5a92] text-white shadow-2xl shadow-primary/30 lg:-translate-y-3"
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
                        : "bg-gradient-to-br from-primary to-[#2a5a92] text-white shadow-md shadow-primary/25"
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
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#2a5a92] text-white">
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
    </>
  );
}
