import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { Stagger, StaggerItem, SectionHeading } from "@/components/motion";

export const metadata: Metadata = {
  title: "Roadside Tips & Auto Care Blog — Memphis, TN",
  description:
    "Practical roadside safety tips, tire care guides and towing advice from the team at Riverdale Tire & Auto in Memphis, TN.",
  alternates: { canonical: "/blog" },
};

const CATEGORY_COLORS: Record<string, string> = {
  "Roadside Safety": "bg-red-100 text-red-700",
  "Tire Care": "bg-blue-100 text-blue-700",
  "Battery & Electrical": "bg-purple-100 text-purple-700",
  Lockout: "bg-orange-100 text-orange-700",
  Towing: "bg-teal-100 text-teal-700",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-12">
        <div className="blob left-[-8%] top-[-10%] h-[28rem] w-[28rem] bg-accent/15" />
        <div className="container-site relative text-center">
          <SectionHeading
            eyebrow="Blog & tips"
            title="Roadside wisdom from the drivers who rescue you"
            subtitle="Practical advice to keep you safe on Memphis roads — and what to do when things go wrong."
          />
        </div>
      </section>

      <section className="section-pad !pt-4">
        <div className="container-site">
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="glass-card group flex h-full flex-col p-7 transition-all hover:border-primary/25"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        CATEGORY_COLORS[post.category] ?? "bg-primary/10 text-primary"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="mt-4 text-lg font-bold leading-snug text-primary transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Read <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
