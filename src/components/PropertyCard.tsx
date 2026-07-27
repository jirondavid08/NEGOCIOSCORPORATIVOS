"use client";

import Link from "next/link";
import { MapPin, Ruler } from "lucide-react";
import type { Property } from "@/lib/properties";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import { useCurrency } from "@/context/CurrencyContext";

export default function PropertyCard({
  property,
  locale,
  dict,
}: {
  property: Property;
  locale: Locale;
  dict: Dictionary;
}) {
  const { format } = useCurrency();

  return (
    <Link
      href={`/${locale}/propiedades/${property.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-nc-navy-950 via-nc-navy-800 to-nc-slate-700">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <span className="relative font-display text-sm tracking-wide text-white/70">
          {property.categoryLabel[locale]}
        </span>
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
            property.status === "venta" ? "bg-nc-gold-500 text-nc-navy-950" : "bg-white text-nc-navy-950"
          }`}
        >
          {property.status === "venta"
            ? locale === "es"
              ? "Venta"
              : "For Sale"
            : locale === "es"
              ? "Renta"
              : "For Rent"}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-lg leading-snug text-nc-navy-950">{property.title}</h3>
        <p className="line-clamp-2 text-sm text-nc-slate-700">{property.summary[locale]}</p>

        <div className="mt-1 flex items-center gap-4 text-xs text-nc-gray-500">
          <span className="flex items-center gap-1">
            <MapPin size={13} /> {property.city}
          </span>
          <span className="flex items-center gap-1">
            <Ruler size={13} /> {property.area.toLocaleString()} {dict.common.m2}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-black/5 pt-3">
          <span className="font-display text-lg font-semibold text-nc-navy-950">
            {format(property.price)}
            {property.priceUnit ? (
              <span className="ml-1 text-xs font-normal text-nc-gray-500">
                {property.priceUnit[locale]}
              </span>
            ) : null}
          </span>
          <span className="text-xs font-semibold uppercase tracking-wide text-nc-gold-500 group-hover:text-nc-navy-950">
            {dict.common.verPropiedad} →
          </span>
        </div>
      </div>
    </Link>
  );
}
