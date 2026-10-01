import LeadForm from "./LeadForm";

export default function ContactSection() {
  return (
    <section id="contacto" className="scroll-mt-24 bg-[#f3f0eb] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">Hablemos</p>
          <h2 className="section-title mt-4">
            ¿Lo estás imaginando en tu espacio?
          </h2>
          <p className="section-copy mt-5 max-w-lg">
            Contanos un poco sobre tu proyecto y qué te gustaría revestir. Nos pondremos en contacto para conversar sobre el producto.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-stone-600">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#c71e2c]" aria-hidden="true">↗</span>
            <span>Una consulta, sin compromiso.</span>
          </div>
        </div>

        <div className="rounded-[1.5rem] bg-white p-5 shadow-[0_20px_70px_-45px_rgba(42,31,23,0.35)] sm:p-8 lg:p-10">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
