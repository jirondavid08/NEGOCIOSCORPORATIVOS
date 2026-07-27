import { getDictionary } from "@/lib/dictionaries";
import { properties } from "@/lib/properties";

const locale = "es" as const;

export default function GaleriaPage() {
  const dict = getDictionary(locale);

  return (
    <>
      <section className="bg-nc-navy-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">{dict.galeria.title}</h1>
          <p className="mt-4 max-w-2xl text-white/70">{dict.galeria.subtitle}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {properties.map((p, i) => (
            <div
              key={p.slug}
              className="group relative flex aspect-square items-end overflow-hidden rounded-xl bg-gradient-to-br from-nc-navy-950 via-nc-navy-800 to-nc-slate-700 p-4"
              style={{ opacity: 1 - (i % 3) * 0.08 }}
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-30 transition-opacity group-hover:opacity-50" />
              <p className="relative font-display text-sm leading-snug text-white/90">{p.title}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-nc-gray-500">
          Fotografías reales de proyectos próximamente — súbelas cuando estén listas y las incorporamos.
        </p>
      </section>
    </>
  );
}
