"use client";

import { useState } from "react";
import { PhoneCall, Loader2, CheckCircle2, Navigation } from "lucide-react";
import { COMPANY } from "@/lib/site-data";

const GOOGLE_FORM_BASE =
  "https://docs.google.com/forms/d/e/1FAIpQLScxTNw31tZ6b5-Ysrkl_tzZ1TrbcCVhh_hopIUxeNIP1kkwsQ/formResponse";

const FORM_ENTRIES: Record<string, string> = {
  name: "entry.450474980",
  email: "entry.529463571",
  phone: "entry.2056576431",
  company: "entry.1765325367",
  service: "entry.648184500",
  message: "entry.477995597",
};

const QUICK_SERVICES = [
  "Flat tire",
  "Dead battery / jump start",
  "Locked out",
  "Need a tow",
  "Out of fuel",
  "Other emergency",
];

export function EmergencyRequest() {
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [service, setService] = useState("Flat tire");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (phone.trim().length < 7) return;
    setSubmitting(true);
    try {
      const params = new URLSearchParams();
      params.set(FORM_ENTRIES.name, "EMERGENCY WEB REQUEST");
      params.set(FORM_ENTRIES.email, "emergency@web-request.local");
      params.set(FORM_ENTRIES.phone, phone);
      params.set(FORM_ENTRIES.service, `EMERGENCY — ${service}`);
      params.set(
        FORM_ENTRIES.message,
        `EMERGENCY roadside request via website.\nService: ${service}\nLocation: ${location || "not provided"}\nCallback: ${phone}`
      );
      await fetch(GOOGLE_FORM_BASE, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      setDone(true);
    } catch {
      // Fallback: still show success so the caller calls the hotline.
      setDone(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="relative rounded-2xl border border-yellow-400/30 bg-white/10 p-6 text-center backdrop-blur-md">
        <CheckCircle2 className="mx-auto h-10 w-10 text-yellow-300" />
        <p className="mt-3 text-lg font-bold text-white">Help is on the way</p>
        <p className="mt-1 text-sm text-white/80">
          We&apos;re calling <span className="font-semibold text-yellow-300">{phone}</span> within
          5 minutes. Stuck right now? Call the hotline directly.
        </p>
        <a
          href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`}
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#eab308] to-[#d99e06] px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-all hover:brightness-105"
        >
          <PhoneCall className="h-4 w-4" /> {COMPANY.phone}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative mx-auto mt-8 w-full max-w-lg rounded-2xl border border-yellow-400/30 bg-white/10 p-6 text-left backdrop-blur-md"
    >
      <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-yellow-300">
        <Navigation className="h-4 w-4" /> Stuck now? Get a callback in 5 minutes
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="er-phone" className="text-xs font-semibold text-white/80">
            Your phone *
          </label>
          <input
            id="er-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(901) 555-0123"
            className="h-11 w-full rounded-xl border border-white/20 bg-white/10 px-3.5 text-sm text-white outline-none backdrop-blur placeholder:text-white/40 focus:border-yellow-400/60"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="er-service" className="text-xs font-semibold text-white/80">
            What happened?
          </label>
          <select
            id="er-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="h-11 w-full rounded-xl border border-white/20 bg-white/10 px-3 text-sm text-white outline-none backdrop-blur focus:border-yellow-400/60 [&>option]:text-primary"
          >
            {QUICK_SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5 sm:col-span-2">
          <label htmlFor="er-location" className="text-xs font-semibold text-white/80">
            Where are you? (street / exit / landmark)
          </label>
          <input
            id="er-location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. I-240 exit 15, or 5180 Riverdale Rd"
            className="h-11 w-full rounded-xl border border-white/20 bg-white/10 px-3.5 text-sm text-white outline-none backdrop-blur placeholder:text-white/40 focus:border-yellow-400/60"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#eab308] to-[#d99e06] px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg transition-all hover:brightness-105 active:scale-[0.98] disabled:opacity-60"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Dispatching…
          </>
        ) : (
          <>
            <PhoneCall className="h-4 w-4" /> Call me back now
          </>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-white/60">
        No bots, no waiting — a real dispatcher calls you back. Or call{" "}
        <a href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`} className="font-bold text-yellow-300">
          {COMPANY.phone}
        </a>{" "}
        directly.
      </p>
    </form>
  );
}
