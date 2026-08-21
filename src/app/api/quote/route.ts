import { NextResponse } from "next/server";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1),
  message: z.string().min(10),
  website: z.string().optional(), // honeypot
});

// Maps our field names to the Google Form entry IDs (same form as the contact page)
const FORM_BASE =
  "https://docs.google.com/forms/d/e/1FAIpQLScxTNw31tZ6b5-Ysrkl_tzZ1TrbcCVhh_hopIUxeNIP1kkwsQ/formResponse";
const FORM_ENTRIES: Record<string, string> = {
  name: "entry.450474980",
  email: "entry.529463571",
  phone: "entry.2056576431",
  company: "entry.1765325367",
  service: "entry.648184500",
  message: "entry.477995597",
};

async function deliverToGoogleForm(data: z.infer<typeof quoteSchema>) {
  const params = new URLSearchParams();
  params.set(FORM_ENTRIES.name, data.name);
  params.set(FORM_ENTRIES.email, data.email);
  params.set(FORM_ENTRIES.phone, data.phone || "");
  params.set(FORM_ENTRIES.company, data.company || "");
  params.set(FORM_ENTRIES.service, data.service);
  params.set(FORM_ENTRIES.message, data.message);

  const res = await fetch(FORM_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });
  // Google Forms returns 200/302 even on success; any non-error response is delivered.
  return res.ok || res.status === 302 || res.status === 200;
}

async function deliverToEmail(data: z.infer<typeof quoteSchema>) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_NOTIFY_EMAIL;
  if (!apiKey || !to) return false;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Riverdale Tire & Auto <quotes@riverdaletireandauto.com>",
      to: [to],
      subject: `New quote request: ${data.service}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "—"}`,
        `Company: ${data.company || "—"}`,
        `Service: ${data.service}`,
        "",
        data.message,
      ].join("\n"),
    }),
  });
  return res.ok;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = quoteSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Validation failed", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Honeypot: if a bot filled the hidden field, pretend success but drop it.
    if (data.website && data.website.length > 0) {
      return NextResponse.json(
        { ok: true, message: "Message sent." },
        { status: 201 }
      );
    }

    // Deliver to the Google Form (always) and email (when configured).
    const [formDelivered, emailDelivered] = await Promise.all([
      deliverToGoogleForm(data),
      deliverToEmail(data),
    ]);

    console.log("[quote-request]", JSON.stringify({
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      service: data.service,
      message: data.message,
      formDelivered,
      emailDelivered,
      receivedAt: new Date().toISOString(),
    }));

    if (!formDelivered && !emailDelivered) {
      return NextResponse.json(
        { ok: false, error: "Delivery failed — please call us instead." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message: "Message received. We'll respond within 24 hours.",
        reference: `Q-${Date.now().toString(36).toUpperCase()}`,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body" },
      { status: 400 }
    );
  }
}
