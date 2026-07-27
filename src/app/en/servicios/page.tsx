import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";

const locale = "en" as const;

export default function ServiciosPage() {
  const dict = getDictionary(locale);

  return (
    <>
      <section className="bg-nc-navy-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">{dict.servicios.title}</h1>
          <p className="mt-4 max-w-2xl text-white/70">{dict.servicios.subtitle}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {dict.servicios.items.map((service) => (
            <div
              key={service.title}
              className="flex flex-col gap-4 rounded-2xl border border-black/5 bg-white p-8 shadow-sm"
            >
              <h2 className="font-display text-2xl font-semibold text-nc-navy-950">{service.title}</h2>
              <p className="text-sm leading-relaxed text-nc-slate-700">{service.text}</p>
              <ul className="mt-2 flex flex-col gap-2">
                {service.list.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-nc-slate-700">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-nc-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl bg-nc-navy-800 px-8 py-14 text-center text-white">
          <h2 className="font-display text-3xl font-semibold">Maximize the Potential of Your Assets</h2>
          <p className="max-w-xl text-white/70">
            Discover how to optimize your assets&apos; performance through tailored strategies and
            innovative solutions.
          </p>
          <Link
            href={`/${locale}/contacto`}
            className="mt-2 flex items-center gap-2 rounded-full bg-nc-gold-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-nc-navy-950 transition-colors hover:bg-nc-gold-300"
          >
            {dict.common.contactanos} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
