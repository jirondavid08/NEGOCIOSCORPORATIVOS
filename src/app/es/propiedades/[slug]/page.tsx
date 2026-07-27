import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Ruler, CheckCircle2 } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { getPropertyBySlug, properties } from "@/lib/properties";
import { whatsappLink, siteConfig } from "@/lib/site";
import PropertyPriceTag from "@/components/PropertyPriceTag";

const locale = "es" as const;

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  const dict = getDictionary(locale);

  if (!property) notFound();

  const message = `Hola Paulina, quisiera más información sobre "${property.title}" (${property.city}).`;

  return (
    <>
      <div className="relative flex h-64 items-center overflow-hidden bg-gradient-to-br from-nc-navy-950 via-nc-navy-800 to-nc-slate-700 text-white sm:h-80">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
          <Link
            href={`/${locale}/propiedades`}
            className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/70 hover:text-white"
          >
            <ArrowLeft size={14} /> {dict.common.volver}
          </Link>
          <span className="rounded-full bg-nc-gold-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-nc-navy-950">
            {property.status === "venta" ? "Venta" : "Renta"}
          </span>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl">
            {property.title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-5 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <MapPin size={15} /> {property.city}
            </span>
            <span className="flex items-center gap-1.5">
              <Ruler size={15} /> {property.area.toLocaleString()} {dict.common.m2}
            </span>
            <span>{property.categoryLabel[locale]}</span>
          </div>
        </div>
      </div>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-3 lg:px-8">
        <div className="lg:col-span-2">
          <p className="text-lg leading-relaxed text-nc-slate-700">{property.summary[locale]}</p>

          <div className="mt-6 flex flex-col gap-3">
            {property.description[locale].map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed text-nc-slate-700">
                {paragraph}
              </p>
            ))}
          </div>

          <h2 className="mt-10 font-display text-xl font-semibold text-nc-navy-950">
            {dict.common.caracteristicas}
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {property.highlights[locale].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-nc-slate-700">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-nc-gold-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <aside className="h-fit rounded-2xl border border-black/5 bg-white p-6 shadow-sm lg:sticky lg:top-24">
          <p className="text-xs font-semibold uppercase tracking-wide text-nc-gray-500">
            {property.status === "venta" ? "Precio de venta" : "Renta mensual"}
          </p>
          <PropertyPriceTag price={property.price} priceUnit={property.priceUnit?.[locale]} />

          <div className="mt-6 flex flex-col gap-3">
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
            >
              {dict.common.whatsapp}
            </a>
            <Link
              href={`/${locale}/contacto`}
              className="flex items-center justify-center rounded-full bg-nc-navy-950 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-nc-navy-800"
            >
              {dict.common.solicitarInfo}
            </Link>
            <a
              href={`tel:${siteConfig.phoneQuito}`}
              className="flex items-center justify-center rounded-full border border-black/10 px-5 py-3 text-sm font-bold uppercase tracking-wide text-nc-navy-950 transition-colors hover:bg-black/5"
            >
              {dict.common.llamar}: {siteConfig.phoneQuito}
            </a>
          </div>
        </aside>
      </section>
    </>
  );
}
