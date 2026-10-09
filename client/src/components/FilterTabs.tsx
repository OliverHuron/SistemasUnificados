import type { TagFilter } from "../types";

interface FilterTabsProps {
  active: TagFilter;
  onChange: (value: TagFilter) => void;
}

const tabs: { key: TagFilter; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "administracion", label: "Administración" },
  { key: "finanzas", label: "Finanzas" },
  { key: "servicios", label: "Servicios" },
];

export default function FilterTabs({ active, onChange }: FilterTabsProps) {
  return (
    <div role="tablist" aria-label="Filtrar sistemas" className="flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const selected = active === tab.key;
        return (
          <button
            key={tab.key}
            role="tab"
            type="button"
            aria-selected={selected}
            onClick={() => onChange(tab.key)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-institutional-sapphire ${
              selected
                ? "bg-institutional-navy text-white"
                : "bg-white text-slate-600 ring-1 ring-inset ring-slate-200 hover:bg-slate-100"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
