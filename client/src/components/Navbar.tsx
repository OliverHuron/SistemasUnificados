import type { InstitutionContent } from "../types";

interface NavbarProps {
  institution: InstitutionContent | null;
}

const navLinks = ["Inicio", "Sistemas", "Avisos", "Soporte"];

export default function Navbar({ institution }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <img src="/fcca-logo.png" alt="" aria-hidden="true" className="h-10 w-10 shrink-0 object-contain" />
          <p className="text-sm font-semibold leading-tight text-institutional-navy">
            {institution?.name ?? "Facultad de Contaduría y Ciencias Administrativas"}
          </p>
        </div>

        <nav aria-label="Navegación principal" className="ml-auto hidden items-center gap-6 sm:flex">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-institutional-sapphire ${
                i === 0 ? "text-institutional-sapphire" : "text-slate-600 hover:text-institutional-navy"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="ml-auto rounded-lg bg-institutional-navy px-4 py-2 text-sm font-semibold text-white hover:bg-institutional-navyLight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-institutional-sapphire sm:ml-0"
        >
          Contacto
        </a>
      </div>
    </header>
  );
}
