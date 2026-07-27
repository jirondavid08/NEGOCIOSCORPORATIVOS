import { Building2, TrendingUp, ShieldCheck } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import TestimonialGrid from "@/components/TestimonialGrid";

const locale = "es" as const;

export default function NosotrosPage() {
  const dict = getDictionary(locale);

  return (
    <>
      <section className="bg-nc-navy-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">{dict.nosotros.title}</h1>
          <p className="mt-4 max-w-2xl text-white/70">{dict.nosotros.subtitle}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:items-center">
          <div className="flex aspect-[4/5] items-center justify-center rounded-2xl bg-gradient-to-br from-nc-navy-950 via-nc-navy-800 to-nc-slate-700">
            <span className="font-script text-5xl text-white/90">Paulina Salazar</span>
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold text-nc-navy-950">
              {dict.nosotros.liderazgoTitle}
            </h2>
            <p className="mt-4 text-nc-slate-700 leading-relaxed">{dict.nosotros.liderazgoText}</p>
          </div>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-3">
          <div>
            <Building2 className="text-nc-gold-500" size={28} />
            <h3 className="mt-4 font-display text-xl font-semibold text-nc-navy-950">
              {dict.home.quienesTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-nc-slate-700">{dict.home.quienesText}</p>
          </div>
          <div>
            <TrendingUp className="text-nc-gold-500" size={28} />
            <h3 className="mt-4 font-display text-xl font-semibold text-nc-navy-950">
              {dict.home.visionTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-nc-slate-700">{dict.home.visionText}</p>
          </div>
          <div>
            <ShieldCheck className="text-nc-gold-500" size={28} />
            <h3 className="mt-4 font-display text-xl font-semibold text-nc-navy-950">
              {dict.home.misionTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-nc-slate-700">{dict.home.misionText}</p>
          </div>
        </div>
      </section>

      <section className="bg-nc-navy-950/[0.03] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="mb-10 font-display text-3xl font-semibold text-nc-navy-950 sm:text-4xl">
            {dict.home.testimoniosTitle}
          </h2>
          <TestimonialGrid />
        </div>
      </section>
    </>
  );
}
