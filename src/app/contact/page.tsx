import type { Metadata } from "next";
import { ContactClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact 24/7 Roadside Assistance in Memphis | Riverdale Tires and Auto",
  description:
    "Call +1 (901) 426-4572 for 24/7 roadside assistance in Memphis — tire repair, jump starts, lockouts, fuel delivery & towing. Or send us a message and we'll respond fast.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Riverdale Tires and Auto — 24/7 Roadside Help in Memphis",
    description: "24/7 roadside assistance hotline + online request. We come to you anywhere in Memphis & the tri-state area.",
    type: "website",
    url: "https://riverdaletireandauto.com/contact",
    siteName: "Riverdale Tires and Auto",
    locale: "en_US",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
