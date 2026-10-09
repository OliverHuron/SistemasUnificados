import { ImageOff } from "lucide-react";
import type { UniversitySystem } from "../types";

interface SystemCardProps {
  system: UniversitySystem;
  onAccess: (system: UniversitySystem) => void;
  accessing: boolean;
}

export default function SystemCard({ system, onAccess, accessing }: SystemCardProps) {
  const isOperational = system.status === "operativo";
  const isPlaceholderUrl = system.url.startsWith("[");

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative w-full">
        {system.previewImage ? (
          <img
            src={system.previewImage}
            alt={`Vista previa de ${system.name}`}
            className="block w-full"
          />
        ) : (
          <div className="flex h-32 w-full flex-col items-center justify-center gap-1 bg-slate-100 text-slate-400">
            <ImageOff className="h-5 w-5" aria-hidden="true" />
            <span className="text-xs">Vista previa pendiente</span>
          </div>
        )}

        <span
          className={`absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
            isOperational ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${isOperational ? "bg-emerald-500" : "bg-amber-500"}`}
          />
          {isOperational ? "En línea" : "Mantenimiento"}
        </span>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-8">
          <h3 className="text-sm font-semibold text-white">{system.name}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center p-4">
        <div className="flex items-center justify-between gap-3">
          <span
            className={`truncate text-xs ${isPlaceholderUrl ? "italic text-slate-400" : "text-slate-500"}`}
          >
            {system.url}
          </span>
          <button
            type="button"
            onClick={() => onAccess(system)}
            disabled={!isOperational || accessing}
            className="flex shrink-0 items-center gap-1 text-sm font-semibold text-institutional-navy hover:text-institutional-sapphire disabled:cursor-not-allowed disabled:text-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-institutional-sapphire"
          >
            {accessing ? "..." : system.ctaLabel}
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>
  );
}
