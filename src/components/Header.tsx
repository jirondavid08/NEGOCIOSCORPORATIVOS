"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown, User } from "lucide-react";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import { useCurrency } from "@/context/CurrencyContext";
import LoginModal from "./LoginModal";
import Logo from "./Logo";

export default function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();

  const otherLocalePath = () => {
    const rest = pathname.replace(/^\/(es|en)/, "") || "";
    const target: Locale = locale === "es" ? "en" : "es";
    return `/${target}${rest}`;
  };

  const links = [
    { href: `/${locale}`, label: dict.nav.inicio },
    { href: `/${locale}/servicios`, label: dict.nav.servicios },
    { href: `/${locale}/propiedades`, label: dict.nav.propiedades },
    { href: `/${locale}/nosotros`, label: dict.nav.nosotros },
    { href: `/${locale}/galeria`, label: dict.nav.galeria },
    { href: `/${locale}/contacto`, label: dict.nav.contacto },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-nc-navy-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Link href={`/${locale}`} className="shrink-0">
          <Logo className="h-9 w-auto text-white" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-semibold uppercase tracking-wider text-white/85 transition-colors hover:text-nc-gold-300"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://parquesindustrialesecuador.com"
            target="_blank"
            rel="noreferrer"
            className="text-[13px] font-semibold uppercase tracking-wider text-nc-gold-300 transition-colors hover:text-white"
          >
            {dict.nav.parques}
          </a>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-white/80 hover:text-white"
            >
              {locale.toUpperCase()} · {currency}
              <ChevronDown size={14} />
            </button>
            {langOpen && (
              <div
                className="absolute right-0 mt-2 w-56 rounded-xl bg-white p-3 text-sm shadow-2xl"
                onMouseLeave={() => setLangOpen(false)}
              >
                <p className="mb-1 px-2 text-[11px] font-semibold uppercase tracking-wide text-nc-gray-500">
                  {dict.common.lenguaje}
                </p>
                <Link
                  href={locale === "es" ? pathname : otherLocalePath()}
                  className={`block rounded-lg px-2 py-1.5 ${
                    locale === "es" ? "bg-nc-navy-950/5 font-semibold text-nc-navy-950" : "text-nc-slate-700"
                  }`}
                >
                  Español
                </Link>
                <Link
                  href={locale === "en" ? pathname : otherLocalePath()}
                  className={`block rounded-lg px-2 py-1.5 ${
                    locale === "en" ? "bg-nc-navy-950/5 font-semibold text-nc-navy-950" : "text-nc-slate-700"
                  }`}
                >
                  English
                </Link>
                <span className="block cursor-not-allowed rounded-lg px-2 py-1.5 text-nc-gray-500/60">
                  Français ({dict.common.proximamente})
                </span>
                <span className="block cursor-not-allowed rounded-lg px-2 py-1.5 text-nc-gray-500/60">
                  Deutsch ({dict.common.proximamente})
                </span>

                <p className="mb-1 mt-3 px-2 text-[11px] font-semibold uppercase tracking-wide text-nc-gray-500">
                  {dict.common.moneda}
                </p>
                <button
                  onClick={() => setCurrency("USD")}
                  className={`block w-full rounded-lg px-2 py-1.5 text-left ${
                    currency === "USD" ? "bg-nc-navy-950/5 font-semibold text-nc-navy-950" : "text-nc-slate-700"
                  }`}
                >
                  USD — Dólar (oficial Ecuador)
                </button>
                <button
                  onClick={() => setCurrency("EUR")}
                  className={`block w-full rounded-lg px-2 py-1.5 text-left ${
                    currency === "EUR" ? "bg-nc-navy-950/5 font-semibold text-nc-navy-950" : "text-nc-slate-700"
                  }`}
                >
                  EUR — referencial
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => setLoginOpen(true)}
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/80 hover:text-white"
          >
            <User size={14} />
            {dict.nav.ingresar}
          </button>

          <Link
            href={`/${locale}/contacto`}
            className="rounded-full bg-nc-gold-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-nc-navy-950 transition-colors hover:bg-nc-gold-300"
          >
            {dict.nav.contacto}
          </Link>
        </div>

        <button
          className="text-white lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-nc-navy-950 px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-semibold uppercase tracking-wide text-white/90 hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://parquesindustrialesecuador.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg px-2 py-3 text-sm font-semibold uppercase tracking-wide text-nc-gold-300 hover:bg-white/5"
            >
              {dict.nav.parques}
            </a>
            <button
              onClick={() => {
                setMobileOpen(false);
                setLoginOpen(true);
              }}
              className="mt-2 rounded-lg px-2 py-3 text-left text-sm font-semibold uppercase tracking-wide text-white/70 hover:bg-white/5"
            >
              {dict.nav.ingresar}
            </button>
            <Link
              href={locale === "es" ? "/en" : "/es"}
              className="rounded-lg px-2 py-3 text-sm font-semibold uppercase tracking-wide text-white/70 hover:bg-white/5"
            >
              {locale === "es" ? "English" : "Español"}
            </Link>
          </nav>
        </div>
      )}

      {loginOpen && <LoginModal dict={dict} onClose={() => setLoginOpen(false)} />}
    </header>
  );
}
