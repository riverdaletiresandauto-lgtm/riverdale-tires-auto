import type { Metadata } from "next";
import { COMPANY } from "@/lib/site-data";
import { FadeUp } from "@/components/motion";

export const metadata: Metadata = {
  title: "Terms of Service | Riverdale Tire & Auto — Memphis",
  description:
    "Terms of service for Riverdale Tire & Auto's 24/7 roadside assistance, mobile tire service and towing across Memphis and the tri-state area.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20">
      <div className="blob right-[-8%] top-[-5%] h-[26rem] w-[26rem] bg-accent/10" />
      <div className="container-site relative max-w-3xl">
        <FadeUp>
          <h1 className="text-4xl font-extrabold tracking-tight text-primary">Terms of Service</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="glass mt-8 space-y-6 rounded-3xl p-8 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="text-lg font-bold text-primary">Agreement</h2>
              <p className="mt-2">
                By engaging {COMPANY.name} for roadside assistance, towing, mobile tire or vehicle
                service work, you agree to the terms outlined here.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary">Service quotes</h2>
              <p className="mt-2">
                Quotes are provided before service begins — no surprises, no hidden fees. Final
                charges are confirmed by phone before a truck is dispatched.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary">Payment</h2>
              <p className="mt-2">
                We accept card, cash and invoice for fleet accounts. Receipts are provided for
                insurance or roadside membership reimbursement.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary">Liability</h2>
              <p className="mt-2">
                Our work is performed by trained technicians with professional equipment. Liability
                is limited to the fees paid for the specific service provided.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary">Contact</h2>
              <p className="mt-2">
                Questions about these terms? Email{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-primary underline-offset-2 hover:underline">{COMPANY.email}</a>.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
