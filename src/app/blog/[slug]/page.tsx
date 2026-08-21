import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, PhoneCall } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { COMPANY } from "@/lib/site-data";
import { FadeUp } from "@/components/motion";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} | Riverdale Tire & Auto`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Riverdale Tire & Auto" },
    publisher: { "@type": "Organization", name: "Riverdale Tire & Auto", logo: { "@type": "ImageObject", url: "https://riverdaletireandauto.com/images/logo.png" } },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="relative overflow-hidden pt-28 pb-16">
        <div className="blob right-[-10%] top-[-8%] h-[28rem] w-[28rem] bg-accent/15" />
        <div className="container-site relative max-w-3xl">
          <FadeUp>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              <ArrowLeft className="h-4 w-4" /> All articles
            </Link>
          </FadeUp>
          <FadeUp delay={0.06}>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {post.readTime}
              </span>
              <span>
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={0.12}>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl">
              {post.title}
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-8 space-y-5">
              {post.body.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-foreground/90 sm:text-lg sm:leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </FadeUp>

          <FadeUp className="mt-12">
            <div className="rounded-3xl bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#3d3d3d] p-8 text-center shadow-2xl shadow-black/30">
              <h2 className="text-xl font-bold text-white sm:text-2xl">Need help right now?</h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-white/80">
                A real dispatcher answers 24/7 — tires, battery, lockout, fuel or tow.
              </p>
              <a
                href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#eab308] to-[#d99e06] px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg transition-all hover:brightness-105"
              >
                <PhoneCall className="h-4 w-4" /> Call {COMPANY.phone}
              </a>
            </div>
          </FadeUp>

          <FadeUp className="mt-12">
            <h2 className="text-xl font-bold text-primary">Keep reading</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="glass-card flex h-full flex-col p-5 transition-all hover:border-primary/25"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">{p.category}</p>
                  <p className="mt-2 text-sm font-semibold leading-snug text-primary">{p.title}</p>
                </Link>
              ))}
            </div>
          </FadeUp>
        </div>
      </article>
    </>
  );
}
