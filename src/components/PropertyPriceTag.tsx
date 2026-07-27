"use client";

import { useCurrency } from "@/context/CurrencyContext";

export default function PropertyPriceTag({
  price,
  priceUnit,
}: {
  price: number;
  priceUnit?: string;
}) {
  const { format } = useCurrency();

  return (
    <p className="mt-1 font-display text-3xl font-bold text-nc-navy-950">
      {format(price)}
      {priceUnit ? <span className="ml-1 text-sm font-normal text-nc-gray-500">{priceUnit}</span> : null}
    </p>
  );
}
