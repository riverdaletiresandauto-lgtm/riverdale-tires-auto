import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Quote } from "lucide-react";
import { TESTIMONIALS, STATS } from "@/lib/site-data";
import { FadeUp, Stagger, StaggerItem, SectionHeading } from "@/components/motion";
import { StarRating } from "@/components/star-rating";

export const metadata: Metadata = {
  title: "Customer Reviews — 24/7 Roadside Assistance in Memphis",
  description:
    "Read reviews of Riverdale Tires and Auto in Memphis, TN — 4.5★ rated by 239 customers for tires, auto repair and 24/7 roadside assistance.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-12">
        <div className="blob left-[-8%] top-[-10%] h-[28rem] w-[28rem] bg-accent/15" />
        <div className="container-site relative">
          <SectionHeading
            eyebrow="Testimonials"
            title="What our clients say"
            subtitle="HVAC facility managers, architects and manufacturing partners — in their own words."
          />
        </div>
      </section>

      <section className="section-pad !pt-4">
        <div className="container-site">
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <StaggerItem key={t.name}>
                <figure className="glass-card flex h-full flex-col p-7">
                  <div className="flex items-center justify-between">
                    <Quote className="h-8 w-8 text-accent/60" />
                    <StarRating rating={t.rating} />
                  </div>
                  <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-primary/10 pt-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#eab308] to-[#d99e06] font-bold text-primary-foreground">
                      {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </span>
                    <div>
                      <p className="font-semibold text-primary">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

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

      <section className="section-pad !pt-6">
        <div className="container-site">
          <FadeUp>
            <div className="glass rounded-3xl p-10 text-center">
              <h2 className="text-2xl font-bold text-primary">Ready to join our clients?</h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Experience the Riverdale Tires difference — fast, friendly roadside help across Memphis and the tri-state, 24/7.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-gradient">
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/services" className="btn-glass">
                  Our services
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
