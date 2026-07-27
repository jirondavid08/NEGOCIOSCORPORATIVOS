"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm text-nc-slate-700">
          {dict.contacto.nombre}
          <input
            name="nombre"
            required
            className="rounded-lg border border-black/10 px-3 py-2.5 text-sm focus:border-nc-navy-800 focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm text-nc-slate-700">
          {dict.contacto.telefono}
          <input
            name="telefono"
            className="rounded-lg border border-black/10 px-3 py-2.5 text-sm focus:border-nc-navy-800 focus:outline-none"
          />
        </label>
      </div>
      <label className="flex flex-col gap-1 text-sm text-nc-slate-700">
        {dict.contacto.correo}
        <input
          type="email"
          name="correo"
          required
          className="rounded-lg border border-black/10 px-3 py-2.5 text-sm focus:border-nc-navy-800 focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm text-nc-slate-700">
        {dict.contacto.mensaje}
        <textarea
          name="mensaje"
          rows={4}
          required
          className="rounded-lg border border-black/10 px-3 py-2.5 text-sm focus:border-nc-navy-800 focus:outline-none"
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-1 rounded-full bg-nc-navy-950 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-nc-navy-800 disabled:opacity-60"
      >
        {status === "sending" ? dict.contacto.enviando : dict.contacto.enviar}
      </button>

      {status === "success" && (
        <p className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">{dict.contacto.exito}</p>
      )}
      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{dict.contacto.error}</p>
      )}
    </form>
  );
}
