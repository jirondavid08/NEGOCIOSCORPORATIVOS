import { getDictionary } from "@/lib/dictionaries";
import { CurrencyProvider } from "@/context/CurrencyContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  const dict = getDictionary("en");

  return (
    <CurrencyProvider>
      <Header locale="en" dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer locale="en" dict={dict} />
      <WhatsAppButton locale="en" />
    </CurrencyProvider>
  );
}
