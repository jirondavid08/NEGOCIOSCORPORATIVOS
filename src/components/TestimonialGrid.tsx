import { Quote } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

export default function TestimonialGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t) => (
        <figure
          key={t.name}
          className="flex flex-col gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
        >
          <Quote className="text-nc-gold-500" size={22} />
          <blockquote className="flex-1 text-sm leading-relaxed text-nc-slate-700">
            “{t.quote}”
          </blockquote>
          <figcaption>
            <p className="font-display text-sm font-semibold text-nc-navy-950">{t.name}</p>
            <p className="text-xs text-nc-gray-500">{t.role}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
