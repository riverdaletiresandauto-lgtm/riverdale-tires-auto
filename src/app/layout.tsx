import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AlertBanner } from "@/components/alert-banner";
import { MobileCallBar } from "@/components/mobile-call-bar";
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
    default: "Riverdale Tire & Auto | 24/7 Roadside Assistance in Memphis, TN",
    template: "%s | Riverdale Tire & Auto — Memphis, TN",
  },
  description:
    "Tire repair, replacement & 24/7 roadside assistance in Memphis, TN. Jump starts, lockouts, fuel delivery & towing across the tri-state area. Call +1 (901) 426-4572.",
  other: {
    "google-site-verification": "scDVorhj86d1nN7cJv51xAAlS2RdzHUkk50QOIDvLLM",
  },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Riverdale Tire & Auto | 24/7 Roadside Assistance in Memphis, TN",
    description:
      "Tires, battery, lockout, fuel and towing — 24/7 roadside help from Memphis's most trusted auto team. Call +1 (901) 426-4572.",
    type: "website",
    url: "https://riverdaletireandauto.com",
    siteName: "Riverdale Tire & Auto",
    locale: "en_US",
    images: [{ url: "https://riverdaletireandauto.com/images/hero.jpg", width: 1200, height: 675, alt: "Riverdale Tire & Auto roadside assistance in Memphis" }],
  },
  twitter: {
    card: "summary",
    title: "Riverdale Tire & Auto | 24/7 Roadside Assistance in Memphis, TN",
    description:
      "Tires, battery, lockout, fuel and towing — 24/7 roadside help from Memphis's most trusted auto team.",
    images: ["https://riverdaletireandauto.com/_next/image?url=%2Fimages%2Flogo.png&w=64&q=75"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "64x64" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
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
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileCallBar />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
