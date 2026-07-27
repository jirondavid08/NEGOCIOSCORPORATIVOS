import { Mail, Phone, MessageCircle } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import { siteConfig, whatsappLink } from "@/lib/site";
import ContactForm from "@/components/ContactForm";

const locale = "en" as const;

export default function ContactoPage() {
  const dict = getDictionary(locale);

  return (
    <>
      <section className="bg-nc-navy-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">{dict.contacto.title}</h1>
          <p className="mt-4 max-w-2xl text-white/70">{dict.contacto.subtitle}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-2xl font-semibold text-nc-navy-950">{dict.contacto.formTitle}</h2>
          <div className="mt-6">
            <ContactForm dict={dict} />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-nc-gray-500">
              {dict.contacto.asesorTitle}
            </p>
            <ul className="flex flex-col gap-3 text-sm text-nc-slate-700">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-nc-gold-500" />
                <a href={`mailto:${siteConfig.emailQuito}`} className="hover:text-nc-navy-950">
                  {siteConfig.emailQuito}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-nc-gold-500" />
                <a href={`mailto:${siteConfig.emailComercial}`} className="hover:text-nc-navy-950">
                  {siteConfig.emailComercial}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-nc-gold-500" />
                <a href={`tel:${siteConfig.phoneQuito}`} className="hover:text-nc-navy-950">
                  Quito {siteConfig.phoneQuito}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-nc-gold-500" />
                <a href={`tel:${siteConfig.phoneGuayaquil}`} className="hover:text-nc-navy-950">
                  Guayaquil {siteConfig.phoneGuayaquil}
                </a>
              </li>
            </ul>
          </div>

          <a
            href={whatsappLink(
              "Hi Paulina, I'd like to learn more about Negocios Corporativos' services/properties. My name is..."
            )}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
          >
            <MessageCircle size={18} /> {dict.common.agendarReunion}
          </a>

          <div className="overflow-hidden rounded-2xl border border-black/5">
            <iframe
              title="Map"
              className="h-64 w-full"
              loading="lazy"
              src="https://www.google.com/maps?q=Quito,Ecuador&output=embed"
            />
          </div>
        </div>
      </section>
    </>
  );
}
