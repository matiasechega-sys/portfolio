import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://portfolio-green-beta-15.vercel.app";
const title = "Matías Echegaray — Desarrollador Full Stack";
const description =
  "Desarrollador Full Stack especializado en C# (.NET), React y Next.js, con experiencia en Aseguramiento de Calidad (QA). Construyo aplicaciones web robustas de punta a punta.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Matías Echegaray",
    "desarrollador full stack",
    "full stack developer",
    "C#",
    ".NET",
    "ASP.NET",
    "React",
    "Next.js",
    "SQL Server",
    "QA",
    "Aseguramiento de Calidad",
    "portfolio desarrollador",
  ],
  authors: [{ name: "Matías Echegaray" }],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Matías Echegaray — Portfolio",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={geist.variable}>
      <body className="bg-zinc-950 text-zinc-50 antialiased font-sans">
        {/* Sin JS no hay IntersectionObserver que revele las secciones: mostrarlas directamente. */}
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
