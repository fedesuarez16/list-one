import { faqs } from "@/lib/site";

export default function Faq() {
  return (
    <section id="preguntas" className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow">Para empezar</p>
          <h2 className="section-title mt-4">Preguntas frecuentes sobre revestimiento alistonado</h2>
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
