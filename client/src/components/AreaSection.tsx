import SystemCard from "./SystemCard";
import type { UniversitySystem } from "../types";

interface AreaSectionProps {
  title: string;
  systems: UniversitySystem[];
  onAccess: (system: UniversitySystem) => void;
  accessingId: string | null;
}

export default function AreaSection({ title, systems, onAccess, accessingId }: AreaSectionProps) {
  if (systems.length === 0) return null;

  return (
    <section>
      <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">{title}</h3>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {systems.map((system) => (
          <SystemCard
            key={system.id}
            system={system}
            onAccess={onAccess}
            accessing={accessingId === system.id}
          />
        ))}
      </div>
    </section>
  );
}
