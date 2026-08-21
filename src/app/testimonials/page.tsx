import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Quote, Star, ExternalLink } from "lucide-react";
import { TESTIMONIALS, STATS, COMPANY } from "@/lib/site-data";
import { FadeUp, Stagger, StaggerItem, SectionHeading } from "@/components/motion";
import { StarRating } from "@/components/star-rating";

const GOOGLE_REVIEW_URL = "https://www.google.com/maps?cid=9132951130505582979";
const GOOGLE_WRITE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJuQmKv0eQf4gRg5nJLKrCvn4";

export const metadata: Metadata = {
  title: "Customer Reviews — 24/7 Roadside Assistance in Memphis",
  description:
    "Read reviews of Riverdale Tire & Auto in Memphis, TN — 4.5★ rated by 239 customers for tires and 24/7 roadside assistance.",
  alternates: { canonical: "/testimonials" },
};

const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Riverdale Tire & Auto",
  image: "https://riverdaletireandauto.com/images/logo.png",
  telephone: "+1 (901) 426-4572",
  url: "https://riverdaletireandauto.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5180 Riverdale Rd",
    addressLocality: "Memphis",
    addressRegion: "TN",
    postalCode: "38141",
    addressCountry: "US",
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.5", reviewCount: "239", bestRating: "5" },
  review: TESTIMONIALS.slice(0, 3).map((t) => ({
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: "5" },
    author: { "@type": "Person", name: t.name },
    reviewBody: t.quote,
  })),
};

export default function TestimonialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />
      <section className="relative overflow-hidden pt-28 pb-12">
        <div className="blob left-[-8%] top-[-10%] h-[28rem] w-[28rem] bg-accent/15" />
        <div className="container-site relative">
          <SectionHeading
            eyebrow="Testimonials"
            title="What stranded drivers say"
            subtitle="Real words from drivers we've helped — in their own reviews."
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

      <section className="section-pad !py-14">
        <div className="container-site">
          <FadeUp>
            <div className="glass rounded-3xl p-10 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-7 w-7 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                  Rated 4.5 out of 5 on Google
                </h2>
                <p className="mx-auto max-w-xl text-muted-foreground">
                  Real reviews from real stranded drivers in Memphis and the tri-state area. We
                  publish every review we get — good or bad.
                </p>
                <div className="mt-2 flex flex-wrap justify-center gap-4">
                  <a
                    href={GOOGLE_REVIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gradient"
                  >
                    Read all reviews on Google <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={GOOGLE_WRITE_REVIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass"
                  >
                    Leave a review <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Had a great experience with us? A 30-second review helps the next stranded driver
                  find us faster.
                </p>
              </div>
            </div>
          </FadeUp>
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
