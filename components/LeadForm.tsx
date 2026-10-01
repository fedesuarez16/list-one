"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const inputClassName = "mt-2 w-full rounded-xl border border-stone-200 bg-[#fcfbf9] px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-[#c71e2c] focus:ring-2 focus:ring-[#c71e2c]/10";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = await response.json();
        throw new Error(body.error ?? "No pudimos enviar tu consulta.");
      }

      setStatus("success");
    } catch (submissionError) {
      setStatus("error");
      setError(submissionError instanceof Error ? submissionError.message : "Ocurrió un error inesperado.");
    }
  }

  if (status === "success") {
    return (
      <div className="py-10 text-center" role="status">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fbe8e9] text-2xl text-[#c71e2c]" aria-hidden="true">✓</span>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-stone-900">¡Gracias por escribirnos!</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-stone-600">Recibimos tu consulta sobre Listone.</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-6 text-sm font-semibold text-[#b71d29] underline decoration-[#b71d29]/30 underline-offset-4 hover:decoration-[#b71d29]">
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
      <div>
        <label htmlFor="nombre" className="text-sm font-semibold text-stone-800">Nombre y apellido</label>
        <input id="nombre" name="nombre" autoComplete="name" required className={inputClassName} placeholder="Tu nombre" />
      </div>
      <div>
        <label htmlFor="empresa" className="text-sm font-semibold text-stone-800">Empresa o proyecto</label>
        <input id="empresa" name="empresa" autoComplete="organization" required className={inputClassName} placeholder="Nombre del proyecto" />
      </div>
      <div>
        <label htmlFor="rubro" className="text-sm font-semibold text-stone-800">¿Qué describe mejor tu consulta?</label>
        <select id="rubro" name="rubro" required defaultValue="" className={inputClassName}>
          <option value="" disabled>Elegí una opción</option>
          <option value="vivienda">Vivienda particular</option>
          <option value="arquitectura">Arquitectura / interiorismo</option>
          <option value="construccion">Construcción / desarrollo</option>
          <option value="comercio">Comercio / distribución</option>
          <option value="otro">Otra consulta</option>
        </select>
      </div>
      <div>
        <label htmlFor="provincia" className="text-sm font-semibold text-stone-800">Localidad</label>
        <input id="provincia" name="provincia" autoComplete="address-level2" className={inputClassName} placeholder="Ciudad o zona" />
      </div>
      <div>
        <label htmlFor="telefono" className="text-sm font-semibold text-stone-800">Teléfono</label>
        <input id="telefono" name="telefono" type="tel" autoComplete="tel" required className={inputClassName} placeholder="Tu número de contacto" />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-semibold text-stone-800">Correo electrónico</label>
        <input id="email" name="email" type="email" autoComplete="email" required className={inputClassName} placeholder="nombre@correo.com" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="mensaje" className="text-sm font-semibold text-stone-800">¿Qué ambiente querés revestir?</label>
        <textarea id="mensaje" name="mensaje" rows={3} className={`${inputClassName} resize-y`} placeholder="Si ya tenés las medidas o una idea, contanos acá." />
      </div>

      {error && <p role="alert" className="text-sm font-medium text-red-700 sm:col-span-2">{error}</p>}

      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "loading"} className="flex w-full items-center justify-center gap-3 rounded-full bg-[#c71e2c] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#a91622] disabled:cursor-wait disabled:opacity-60">
          {status === "loading" ? "Enviando consulta…" : "Enviar consulta"}
          {status !== "loading" && <span aria-hidden="true">↗</span>}
        </button>
        <p className="mt-3 text-center text-xs leading-5 text-stone-500">Usaremos tus datos únicamente para responder esta consulta.</p>
      </div>
    </form>
  );
}
