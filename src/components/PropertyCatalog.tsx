"use client";

import { useMemo, useState } from "react";
import {
  properties as allProperties,
  categoryFilters,
  statusFilters,
  type PropertyCategory,
  type PropertyStatus,
} from "@/lib/properties";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import PropertyCard from "./PropertyCard";

export default function PropertyCatalog({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [category, setCategory] = useState<PropertyCategory | "todos">("todos");
  const [status, setStatus] = useState<PropertyStatus | "todos">("todos");

  const filtered = useMemo(() => {
    return allProperties.filter((p) => {
      const catOk = category === "todos" || p.category === category;
      const statusOk = status === "todos" || p.status === status;
      return catOk && statusOk;
    });
  }, [category, status]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-nc-gray-500">
            {dict.common.categoria}
          </span>
          {categoryFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setCategory(f.value)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                category === f.value
                  ? "bg-nc-navy-950 text-white"
                  : "bg-nc-navy-950/5 text-nc-slate-700 hover:bg-nc-navy-950/10"
              }`}
            >
              {f[locale]}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-nc-gray-500">
            {dict.common.estado}
          </span>
          {statusFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setStatus(f.value)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                status === f.value
                  ? "bg-nc-gold-500 text-nc-navy-950"
                  : "bg-nc-navy-950/5 text-nc-slate-700 hover:bg-nc-navy-950/10"
              }`}
            >
              {f[locale]}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-black/10 p-10 text-center text-sm text-nc-gray-500">
          {locale === "es" ? "No hay propiedades para este filtro." : "No properties match this filter."}
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((property) => (
            <PropertyCard key={property.slug} property={property} locale={locale} dict={dict} />
          ))}
        </div>
      )}
    </div>
  );
}
