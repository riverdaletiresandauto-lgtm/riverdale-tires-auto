import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, MapPin } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/service-areas";
import { FadeUp, Stagger, StaggerItem, SectionHeading } from "@/components/motion";

export const metadata: Metadata = {
  title: "Service Areas — 24/7 Roadside Assistance in Memphis & the Tri-State",
  description:
    "Riverdale Tire & Auto provides 24/7 roadside assistance across Memphis, West Tennessee, North Mississippi and East Arkansas. Check your city's response time.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-12">
        <div className="blob left-[-8%] top-[-10%] h-[28rem] w-[28rem] bg-accent/15" />
        <div className="container-site relative text-center">
          <SectionHeading
            eyebrow="Service areas"
            title="One call covers the whole tri-state"
            subtitle="24/7 roadside assistance across Memphis, North Mississippi, East Arkansas and West Tennessee — with response times per city."
          />
        </div>
      </section>

      <section className="section-pad !pt-4">
        <div className="container-site">
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICE_AREAS.map((a) => (
              <StaggerItem key={a.slug}>
                <Link
                  href={`/service-areas/${a.slug}`}
                  className="glass-card group flex h-full flex-col p-7 transition-all hover:border-primary/25"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#eab308] to-[#d99e06] text-primary-foreground shadow-md shadow-primary/25">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 text-xl font-bold text-primary">
                    {a.city}, {a.state}
                  </h2>
                  <p className="mt-1 text-xs uppercase tracking-wider text-accent">{a.region}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {a.description.split(" — ")[0]} Average response: {a.responseTime}.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    View coverage <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeUp className="mt-12">
            <div className="glass rounded-3xl p-10 text-center">
              <h2 className="text-2xl font-bold text-primary">Don&apos;t see your city?</h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                We cover all of Memphis and the tri-state area — including interstate corridors.
                Long-distance towing available on request. Call and ask.
              </p>
              <Link href="/contact" className="btn-gradient mt-6">
                Check your coverage <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
