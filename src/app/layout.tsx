import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AlertBanner } from "@/components/alert-banner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://riverdaletireandauto.com"),
  title: {
    default: "Riverdale Tires and Auto — 24/7 Roadside Assistance",
    template: "%s | Riverdale Tires and Auto",
  },
  description:
    "24/7 roadside assistance, mobile tire repair and replacement, jump start, lockout, fuel delivery and towing in Memphis and the tri-state area. Fast, friendly help wherever you're stranded.",
  openGraph: {
    title: "Riverdale Tires and Auto — 24/7 Roadside Assistance",
    description:
      "Tires, battery, lockout, fuel and towing — 24/7 roadside help from Memphis's most trusted auto team.",
    type: "website",
    url: "https://riverdaletireandauto.com",
    images: [{ url: "https://riverdaletireandauto.com/images/hero.jpg", width: 1200, height: 675, alt: "Riverdale Tires and Auto roadside assistance" }],
  },
  twitter: {
    card: "summary",
    title: "Riverdale Tires and Auto — 24/7 Roadside Assistance",
    description:
      "Tires, battery, lockout, fuel and towing — 24/7 roadside help from Memphis's most trusted auto team.",
    images: ["https://riverdaletireandauto.com/_next/image?url=%2Fimages%2Flogo.png&w=64&q=75"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-16">
        <AlertBanner message="24/7 roadside assistance across Memphis & the tri-state area — call our hotline anytime." />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
