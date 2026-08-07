export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-32 px-6">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59, 130, 246, 0.15), transparent)",
        }}
      />
      <div className="relative mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-400">
          Hola, soy
        </p>
        <h1 className="mb-3 text-5xl font-bold tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl">
          Matías Echegaray
        </h1>
        <h2 className="mb-8 text-xl text-zinc-400 sm:text-2xl">
          Desarrollador Full Stack
        </h2>
        <p className="mb-12 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          Analista Programador enfocado en desarrollo full stack. Construyo
          aplicaciones web de punta a punta con{" "}
          <span className="text-zinc-300">C# (.NET)</span>,{" "}
          <span className="text-zinc-300">React</span> y{" "}
          <span className="text-zinc-300">Next.js</span> sobre SQL Server. Mi
          paso por Aseguramiento de Calidad me da un ojo especial para la
          calidad y robustez del código.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/matiasechega-sys"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500"
          >
            <GithubIcon />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/matias-echegaray-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-6 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-50"
          >
            LinkedIn
          </a>
          <a
            href="/CV-Matias-Echegaray.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-6 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-50"
          >
            <DownloadIcon />
            Descargar CV
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-6 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-50"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
}

function DownloadIcon() {
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
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
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
