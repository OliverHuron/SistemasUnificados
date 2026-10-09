import type { SupportContent } from "../types";
import FoxPhone from "./FoxPhone";

interface RightRailProps {
  support: SupportContent | null;
}

export default function RightRail({ support }: RightRailProps) {
  return (
    <aside className="space-y-4" aria-label="Mascota y soporte">
      <FoxPhone />

      <div className="rounded-xl bg-slate-50 p-5">
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-institutional-navy">
            {support?.title ?? "Soporte técnico"}
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            {support?.description ?? "Alta de usuarios, contraseñas y fallas en los sistemas."}
          </p>
          <a
            href={`mailto:${support?.email ?? ""}`}
            className="mt-2 inline-block text-sm font-medium text-institutional-sapphire underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-institutional-sapphire"
          >
            {support?.email ?? "[correo de soporte]"}
          </a>
        </div>
      </div>
    </aside>
  );
}
