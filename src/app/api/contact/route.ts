import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

// Contact form endpoint.
//
// To make this send real emails, set a RESEND_API_KEY env var in Vercel
// (https://resend.com — free tier available) and this route will send the
// lead notification automatically. Without it, submissions are accepted and
// logged so the form never breaks, but no email goes out — use the WhatsApp
// button as the primary lead channel until this is configured.
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, correo, telefono, mensaje } = body as Record<string, string>;

    if (!nombre || !correo || !mensaje) {
      return NextResponse.json({ error: "missing fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Negocios Corporativos <onboarding@resend.dev>",
          to: [siteConfig.emailQuito],
          reply_to: correo,
          subject: `Nuevo contacto web — ${nombre}`,
          text: `Nombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono ?? "-"}\n\nMensaje:\n${mensaje}`,
        }),
      });

      if (!emailRes.ok) {
        console.error("Resend error", await emailRes.text());
        return NextResponse.json({ error: "email failed" }, { status: 502 });
      }
    } else {
      console.log("[contact form submission - no RESEND_API_KEY set]", body);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "unexpected" }, { status: 500 });
  }
}
