import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 px-6 border-t border-zinc-800/60">
      <Reveal className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-2xl font-bold text-zinc-50 sm:text-3xl">
          Experiencia
        </h2>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
          <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-semibold text-zinc-50">QA Tester</h3>
              <p className="text-sm text-blue-400">
                MSA — Magic Software Argentina
              </p>
            </div>
            <span className="shrink-0 text-sm text-zinc-500 sm:mt-0.5">
              Ene 2026 – Jun 2026
            </span>
          </div>
          <ul className="space-y-3">
            <li className="flex gap-3 text-sm leading-relaxed text-zinc-400">
              <span className="mt-0.5 shrink-0 text-blue-500">▸</span>
              Aseguré la calidad y confiabilidad de sistemas críticos mediante
              pruebas funcionales y de regresión.
            </li>
            <li className="flex gap-3 text-sm leading-relaxed text-zinc-400">
              <span className="mt-0.5 shrink-0 text-blue-500">▸</span>
              Validé componentes individuales y la integración de programas
              complejos, garantizando estándares de seguridad y funcionalidad.
            </li>
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
