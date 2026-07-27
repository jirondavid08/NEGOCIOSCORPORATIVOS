import Link from "next/link";
import { ArrowRight, Building2, TrendingUp, ShieldCheck } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { properties } from "@/lib/properties";
import PropertyCard from "@/components/PropertyCard";
import TestimonialGrid from "@/components/TestimonialGrid";
import BuildingScrollAnimation from "@/components/BuildingScrollAnimation";
import { siteConfig } from "@/lib/site";

const locale = "en" as const;

export default function HomePage() {
  const dict = getDictionary(locale);
  const featured = properties.filter((p) => p.featured).slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-nc-navy-950 text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-nc-gold-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-36">
          <p className="reveal text-xs font-bold uppercase tracking-[0.3em] text-nc-gold-300">
            {dict.home.heroEyebrow}
          </p>
          <h1
            className="reveal mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.1s" }}
          >
            {dict.home.heroTitle}
          </h1>
          <p
            className="reveal mt-6 max-w-xl text-lg leading-relaxed text-white/70"
            style={{ animationDelay: "0.2s" }}
          >
            {dict.home.heroSubtitle}
          </p>
          <div className="reveal mt-10 flex flex-wrap gap-4" style={{ animationDelay: "0.3s" }}>
            <Link
              href={`/${locale}/propiedades`}
              className="flex items-center gap-2 rounded-full bg-nc-gold-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-nc-navy-950 transition-colors hover:bg-nc-gold-300"
            >
              {dict.home.ctaPropiedades} <ArrowRight size={16} />
            </Link>
            <Link
              href={`/${locale}/contacto`}
              className="flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
            >
              {dict.home.ctaContacto}
            </Link>
          </div>
        </div>
      </section>

      {/* CONSTRUCTION — scroll animation */}
      <BuildingScrollAnimation
        copy={{
          eyebrow: "Every great company starts by building the right foundations",
          titleBefore: "We build the ideal space",
          titleAfter: "for your company",
          cta: "Let's talk about your next project",
        }}
      />

      {/* PARQUES BANNER */}
      <a
        href={siteConfig.parquesUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-3 bg-nc-gold-500 px-5 py-3 text-center text-xs font-bold uppercase tracking-wider text-nc-navy-950 transition-colors hover:bg-nc-gold-300"
      >
        {dict.home.parquesBanner} <ArrowRight size={14} />
      </a>

      {/* QUIENES SOMOS / VISION / MISION */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <Building2 className="text-nc-gold-500" size={28} />
            <h2 className="mt-4 font-display text-2xl font-semibold text-nc-navy-950">
              {dict.home.quienesTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-nc-slate-700">{dict.home.quienesText}</p>
          </div>
          <div>
            <TrendingUp className="text-nc-gold-500" size={28} />
            <h2 className="mt-4 font-display text-2xl font-semibold text-nc-navy-950">
              {dict.home.visionTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-nc-slate-700">{dict.home.visionText}</p>
          </div>
          <div>
            <ShieldCheck className="text-nc-gold-500" size={28} />
            <h2 className="mt-4 font-display text-2xl font-semibold text-nc-navy-950">
              {dict.home.misionTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-nc-slate-700">{dict.home.misionText}</p>
          </div>
        </div>
      </section>

      {/* SERVICIOS TEASER */}
      <section className="bg-nc-navy-800 py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">{dict.home.serviciosTitle}</h2>
            <p className="mt-4 text-white/70">{dict.home.serviciosText}</p>
            <Link
              href={`/${locale}/servicios`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-nc-navy-950 transition-colors hover:bg-nc-gold-300"
            >
              {dict.common.verMas} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROPIEDADES DESTACADAS */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-display text-3xl font-semibold text-nc-navy-950 sm:text-4xl">
            {dict.common.propiedadesDestacadas}
          </h2>
          <Link
            href={`/${locale}/propiedades`}
            className="hidden text-sm font-semibold text-nc-gold-500 hover:text-nc-navy-950 sm:flex items-center gap-1"
          >
            {dict.common.verTodas} <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard key={property.slug} property={property} locale={locale} dict={dict} />
          ))}
        </div>
        <Link
          href={`/${locale}/propiedades`}
          className="mt-8 flex items-center justify-center gap-1 text-sm font-semibold text-nc-gold-500 hover:text-nc-navy-950 sm:hidden"
        >
          {dict.common.verTodas} <ArrowRight size={14} />
        </Link>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-nc-navy-950/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-nc-navy-950 sm:text-4xl">
              {dict.home.testimoniosTitle}
            </h2>
            <p className="mt-4 text-nc-slate-700">{dict.home.testimoniosText}</p>
          </div>
          <TestimonialGrid />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-7xl px-5 py-24 text-center lg:px-8">
        <h2 className="font-display text-3xl font-semibold text-nc-navy-950 sm:text-4xl">
          {dict.home.ctaFinalTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-nc-slate-700">{dict.home.ctaFinalText}</p>
        <Link
          href={`/${locale}/contacto`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-nc-navy-950 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-nc-navy-800"
        >
          {dict.nav.contacto} <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
