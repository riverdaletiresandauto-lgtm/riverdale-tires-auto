import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/site-data";
import { SERVICE_AREAS } from "@/lib/service-areas";

const BASE = "https://riverdaletireandauto.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/about", "/pricing", "/testimonials", "/contact", "/privacy", "/terms", "/service-areas", "/blog"].map((r) => ({
    url: `${BASE}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: r === "" ? 1 : 0.8,
  }));

  const serviceRoutes = SERVICES.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const areaRoutes = SERVICE_AREAS.map((a) => ({
    url: `${BASE}/service-areas/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes];
}
