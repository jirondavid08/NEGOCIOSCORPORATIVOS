import { MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site";
import type { Locale } from "@/lib/dictionaries";

export default function WhatsAppButton({ locale }: { locale: Locale }) {
  const message =
    locale === "es"
      ? "Hola Paulina, quisiera conocer más sobre los servicios/propiedades que ofrecen en Negocios Corporativos. Mi nombre es..."
      : "Hi Paulina, I'd like to learn more about Negocios Corporativos' services/properties. My name is...";

  return (
    <a
      href={whatsappLink(message, siteConfig.whatsappNumber)}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105"
    >
      <MessageCircle size={26} fill="white" />
    </a>
  );
}
