import { getDictionary } from "@/lib/dictionaries";
import { CurrencyProvider } from "@/context/CurrencyContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function EsLayout({ children }: { children: React.ReactNode }) {
  const dict = getDictionary("es");

  return (
    <CurrencyProvider>
      <Header locale="es" dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer locale="es" dict={dict} />
      <WhatsAppButton locale="es" />
    </CurrencyProvider>
  );
}
