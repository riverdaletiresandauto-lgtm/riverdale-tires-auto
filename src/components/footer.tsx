import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative mt-8 px-4 pb-6">
      <div className="glass mx-auto max-w-7xl rounded-3xl p-8 sm:p-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="relative h-10 w-10 overflow-hidden rounded-xl shadow-md shadow-primary/20">
                <Image src="/images/logo.png" alt="Riverdale Tires and Auto logo" fill className="object-cover" sizes="40px" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-base font-extrabold tracking-tight text-primary">{COMPANY.name}</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">{COMPANY.tagline}</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{COMPANY.description}</p>
            <form className="mt-5" aria-label="Newsletter signup">
              <label htmlFor="newsletter-email" className="text-xs font-semibold uppercase tracking-wider text-primary">
                Newsletter
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email"
                  className="h-10 w-full rounded-xl border border-primary/15 bg-white/60 px-3 text-sm outline-none backdrop-blur-md transition-colors placeholder:text-muted-foreground focus:border-accent/60"
                />
                <button
                  type="submit"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#eab308] to-[#d99e06] text-primary-foreground transition-all hover:brightness-110"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { href: "/about", label: "About us" },
                { href: "/services", label: "Services" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {COMPANY.address}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`} className="hover:text-primary">{COMPANY.phone}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-primary">{COMPANY.email}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-accent" />
                {COMPANY.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-primary/10 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.{" "}
            <Link href="/privacy" className="underline-offset-2 hover:underline">Privacy Policy</Link> ·{" "}
            <Link href="/terms" className="underline-offset-2 hover:underline">Terms of Service</Link>
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/Riverdaletireautotn/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 bg-white/40 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
              aria-label="Follow Riverdale Tires and Auto on Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/explore/locations/163643453825918/riverdale-tire-and-auto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 bg-white/40 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
              aria-label="Visit Riverdale Tires and Auto on Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
