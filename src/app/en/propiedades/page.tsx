import { getDictionary } from "@/lib/dictionaries";
import PropertyCatalog from "@/components/PropertyCatalog";

const locale = "en" as const;

export default function PropiedadesPage() {
  const dict = getDictionary(locale);

  return (
    <>
      <section className="bg-nc-navy-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">Properties</h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Warehouses, industrial land, offices and commercial units curated for companies looking to
            grow in Ecuador.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <PropertyCatalog locale={locale} dict={dict} />
      </section>
    </>
  );
}
