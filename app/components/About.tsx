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
            Soy <span className="text-zinc-300">Analista Programador</span>{" "}
            enfocado en desarrollo full stack. Construyo aplicaciones web de
            punta a punta con{" "}
            <span className="text-zinc-300">C# (.NET)</span>,{" "}
            <span className="text-zinc-300">React</span> y{" "}
            <span className="text-zinc-300">Next.js</span> sobre{" "}
            <span className="text-zinc-300">SQL Server</span>, entendiendo
            cada proyecto de punta a punta: desde el modelo de datos hasta la
            interfaz que usa la gente.
          </p>
          <p>
            Antes de programar a tiempo completo pasé por{" "}
            <span className="text-zinc-300">
              Aseguramiento de Calidad
            </span>
            , probando sistemas críticos y buscando fallas antes de que
            llegaran a producción. Esa etapa me dejó un ojo entrenado para la
            calidad: pienso en casos borde, en robustez y en cómo se puede
            romper algo antes de escribir la primera línea de código.
          </p>
          <p>
            Lo que más me moviliza es aprender: cada proyecto nuevo es una
            excusa para profundizar una tecnología o pulir una buena
            práctica. Hoy estoy abierto a nuevas oportunidades como
            desarrollador full stack, con ganas de sumarme a un equipo donde
            seguir creciendo y aportar esa mirada de calidad desde el primer
            commit.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
