"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Currency = "USD" | "EUR";

// Ecuador's official currency is the US Dollar. This EUR conversion is a
// fixed, approximate reference rate for display purposes only — it is not
// a live exchange rate and should not be used for transactions.
const EUR_RATE = 0.92;

interface CurrencyContextValue {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  format: (usdAmount: number) => string;
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("USD");

  useEffect(() => {
    const stored = window.localStorage.getItem("nc-currency");
    if (stored === "USD" || stored === "EUR") setCurrencyState(stored);
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    window.localStorage.setItem("nc-currency", c);
  };

  const format = (usdAmount: number) => {
    const value = currency === "USD" ? usdAmount : usdAmount * EUR_RATE;
    const formatted = new Intl.NumberFormat(currency === "USD" ? "en-US" : "de-DE", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(value);
    return currency === "EUR" ? `≈ ${formatted}` : formatted;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, format }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}
