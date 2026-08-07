import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-zinc-800/60 py-8 px-6">
        <p className="mx-auto max-w-5xl text-center text-sm text-zinc-600">
          © 2026 Matías Echegaray
        </p>
      </footer>
    </>
  );
}
