const faqs = [
  {
    question: "¿Cómo se ve el revestimiento con la luz encendida?",
    answer:
      "En la sección de comparación podés ver el mismo ambiente con la iluminación apagada y encendida. Las imágenes alternan automáticamente y también podés elegir cada opción.",
  },
  {
    question: "¿Puedo consultar por mi espacio o proyecto?",
    answer:
      "Sí. Dejanos tus datos y contanos qué ambiente querés revestir para que podamos orientarte sobre el producto.",
  },
  {
    question: "¿Qué información conviene enviar?",
    answer:
      "Si ya las tenés, compartí las medidas aproximadas de la pared y alguna referencia del ambiente. Si todavía estás definiendo la idea, también podemos empezar por ahí.",
  },
];

export default function Faq() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow">Para empezar</p>
          <h2 className="section-title mt-4">Preguntas frecuentes</h2>
        </div>

        <div className="divide-y divide-stone-200 border-y border-stone-200">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-semibold text-stone-900 marker:hidden sm:text-lg">
                {faq.question}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-lg font-normal text-stone-600 transition group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="max-w-2xl pt-3 pr-10 text-sm leading-6 text-stone-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
