import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "./SocialIcons";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import { siteConfig } from "@/lib/site";
import Logo from "./Logo";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-nc-navy-950 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Logo className="text-white" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">{dict.footer.tagline}</p>
          <div className="mt-6 flex gap-4">
            <a href={siteConfig.facebook} target="_blank" rel="noreferrer" className="text-white/60 hover:text-nc-gold-300">
              <FacebookIcon size={18} />
            </a>
            <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="text-white/60 hover:text-nc-gold-300">
              <InstagramIcon size={18} />
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="text-white/60 hover:text-nc-gold-300">
              <LinkedinIcon size={18} />
            </a>
            <a href={siteConfig.youtube} target="_blank" rel="noreferrer" className="text-white/60 hover:text-nc-gold-300">
              <YoutubeIcon size={18} />
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-nc-gold-300">
            {dict.footer.mapaSitio}
          </p>
          <nav className="flex flex-col gap-2 text-sm text-white/70">
            <Link href={`/${locale}`} className="hover:text-white">{dict.nav.inicio}</Link>
            <Link href={`/${locale}/servicios`} className="hover:text-white">{dict.nav.servicios}</Link>
            <Link href={`/${locale}/propiedades`} className="hover:text-white">{dict.nav.propiedades}</Link>
            <Link href={`/${locale}/nosotros`} className="hover:text-white">{dict.nav.nosotros}</Link>
            <Link href={`/${locale}/contacto`} className="hover:text-white">{dict.nav.contacto}</Link>
          </nav>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-nc-gold-300">
            {dict.footer.contactanos}
          </p>
          <ul className="flex flex-col gap-2 text-sm text-white/70">
            <li><a href={`mailto:${siteConfig.emailQuito}`} className="hover:text-white">{siteConfig.emailQuito}</a></li>
            <li><a href={`mailto:${siteConfig.emailComercial}`} className="hover:text-white">{siteConfig.emailComercial}</a></li>
            <li><a href={`tel:${siteConfig.phoneQuito}`} className="hover:text-white">Quito {siteConfig.phoneQuito}</a></li>
            <li><a href={`tel:${siteConfig.phoneGuayaquil}`} className="hover:text-white">Guayaquil {siteConfig.phoneGuayaquil}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-white/40 lg:px-8">
        {siteConfig.name} © {year}. {dict.footer.derechos}
      </div>
    </footer>
  );
}
