"use client";

import Link from "next/link";
import { PhoneCall, MessageSquare } from "lucide-react";
import { COMPANY } from "@/lib/site-data";

/**
 * Fixed bottom action bar for mobile — the "stranded driver" moment.
 * One tap to call dispatch, one tap to request help online.
 */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-primary/10 bg-white/90 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#eab308] to-[#d99e06] px-4 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
        >
          <PhoneCall className="h-4.5 w-4.5" /> Call now
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/15 bg-white px-4 py-3 text-sm font-bold text-primary transition-all active:scale-[0.98]"
        >
          <MessageSquare className="h-4.5 w-4.5 text-accent" /> Request help
        </Link>
      </div>
    </div>
  );
}
