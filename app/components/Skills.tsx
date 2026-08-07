const groups = [
  {
    label: "Lenguajes",
    items: ["C# (.NET)", "JavaScript", "Java", "PHP"],
  },
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend & Arquitectura",
    items: ["MVC", "SOLID", "APIs REST", "SQL Server"],
  },
  {
    label: "Testing",
    items: ["Selenium WebDriver", "XUnit"],
  },
  {
    label: "Herramientas",
    items: ["Git", "GitHub", "Visual Studio", "VS Code"],
  },
];

import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 px-6 border-t border-zinc-800/60">
      <Reveal className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-2xl font-bold text-zinc-50 sm:text-3xl">
          Habilidades
        </h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.label}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-blue-400">
                {g.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
