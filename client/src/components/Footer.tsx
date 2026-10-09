import type { InstitutionContent } from "../types";

interface FooterProps {
  institution: InstitutionContent | null;
}

export default function Footer({ institution }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          {institution?.footer ??
            "Facultad de Contaduría y Ciencias Administrativas · UMSNH · Morelia, Michoacán"}
        </p>
        <p className="font-semibold text-slate-400">{institution?.shortName ?? "SIAF"}</p>
      </div>
    </footer>
  );
}
