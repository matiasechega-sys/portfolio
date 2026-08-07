// To add a project, add an entry to this array and the cards will render automatically.
const projects: {
  name: string;
  description: string;
  tech: string[];
  demoLink: string | null;
  repoLink: string | null;
}[] = [
  {
    name: "Task Manager",
    description:
      "Gestor de tareas full stack con CRUD completo, filtros y modo oscuro. Frontend y backend en Next.js, con base de datos PostgreSQL en la nube.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL (Neon)"],
    demoLink: "https://task-manager-huuy.vercel.app",
    repoLink: "https://github.com/matiasechega-sys/task-manager",
  },
];

import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6 border-t border-zinc-800/60">
      <Reveal className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-2xl font-bold text-zinc-50 sm:text-3xl">
          Proyectos
        </h2>

        {projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-800 bg-zinc-900/40 py-20 px-6 text-center">
            <span className="mb-4 text-4xl">🚧</span>
            <p className="text-lg font-medium text-zinc-300">
              Nuevos proyectos en camino
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Estoy trabajando en ello. Volvé pronto.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <div
                key={p.name}
                className="flex flex-col gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition-colors hover:border-zinc-700"
              >
                <h3 className="font-semibold text-zinc-50">{p.name}</h3>
                <p className="flex-1 text-sm leading-relaxed text-zinc-400">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-blue-900/50 bg-blue-950/50 px-2 py-0.5 text-xs font-medium text-blue-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {p.demoLink ? (
                    <a
                      href={p.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500"
                    >
                      <ExternalLinkIcon />
                      Ver demo
                    </a>
                  ) : null}
                  {p.repoLink ? (
                    <a
                      href={p.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-50"
                    >
                      <GithubIcon />
                      Código
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14L21 3" />
    </svg>
  );
}
