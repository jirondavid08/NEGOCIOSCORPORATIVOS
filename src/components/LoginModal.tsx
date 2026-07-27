"use client";

import { useState } from "react";
import { X } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";

export default function LoginModal({
  dict,
  onClose,
}: {
  dict: Dictionary;
  onClose: () => void;
}) {
  const [tab, setTab] = useState<"login" | "register">("login");

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-nc-navy-950/70 backdrop-blur-sm px-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
          <div className="flex gap-6">
            <button
              className={`font-display text-lg tracking-wide ${
                tab === "login" ? "text-nc-navy-950" : "text-nc-gray-500"
              }`}
              onClick={() => setTab("login")}
            >
              {dict.login.ingresarTitle}
            </button>
            <button
              className={`font-display text-lg tracking-wide ${
                tab === "register" ? "text-nc-navy-950" : "text-nc-gray-500"
              }`}
              onClick={() => setTab("register")}
            >
              {dict.login.registrarseTitle}
            </button>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="text-nc-gray-500 hover:text-nc-navy-950 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form
          className="px-6 py-6 flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="flex flex-col gap-1 text-sm text-nc-slate-700">
            {dict.login.usuario}
            <input
              type="text"
              className="rounded-lg border border-black/10 px-3 py-2 text-sm focus:border-nc-navy-800 focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm text-nc-slate-700">
            {dict.login.contrasena}
            <input
              type="password"
              className="rounded-lg border border-black/10 px-3 py-2 text-sm focus:border-nc-navy-800 focus:outline-none"
            />
          </label>

          {tab === "login" ? (
            <div className="flex items-center justify-between text-xs text-nc-gray-500">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-nc-navy-800" />
                {dict.login.recordarme}
              </label>
              <span className="cursor-not-allowed">{dict.login.olvidaste}</span>
            </div>
          ) : null}

          <button
            type="submit"
            className="mt-2 rounded-full bg-nc-navy-950 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-nc-navy-800"
          >
            {tab === "login" ? dict.login.ingresar : dict.login.registrarse}
          </button>

          <p className="rounded-lg bg-nc-gold-300/15 px-3 py-2 text-xs leading-relaxed text-nc-slate-700">
            {dict.login.nota}
          </p>
        </form>
      </div>
    </div>
  );
}
