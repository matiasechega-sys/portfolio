import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 px-6 border-t border-zinc-800/60">
      <Reveal className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <h2 className="text-2xl font-bold text-zinc-50 sm:text-3xl">
            Sobre mí
          </h2>
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            En búsqueda activa de nuevas oportunidades
          </span>
        </div>
        <div className="max-w-2xl space-y-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
          <p>
            Soy <span className="text-zinc-300">desarrollador full stack</span>.
            Este portfolio reúne los proyectos que construí de punta a punta:
            desde el modelo de datos hasta la interfaz final. Abajo podés
            explorarlos y ver el código de cada uno.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
