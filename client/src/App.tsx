import { useEffect, useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import FilterTabs from "./components/FilterTabs";
import AreaSection from "./components/AreaSection";
import RightRail from "./components/RightRail";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import { fetchContent, fetchSystems, requestAccess } from "./api";
import type { PageContent, TagFilter, UniversitySystem } from "./types";

export default function App() {
  const [systems, setSystems] = useState<UniversitySystem[]>([]);
  const [content, setContent] = useState<PageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [tagFilter, setTagFilter] = useState<TagFilter>("todos");
  const [accessingId, setAccessingId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    Promise.all([fetchSystems(), fetchContent()])
      .then(([systemsData, contentData]) => {
        setSystems(systemsData);
        setContent(contentData);
      })
      .catch(() =>
        setLoadError("No se pudo conectar con el servidor. Verifica que el backend esté activo.")
      )
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => setToastMessage(null), 2500);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  const filteredSystems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return systems.filter((system) => {
      const matchesQuery =
        query.length === 0 ||
        system.name.toLowerCase().includes(query) ||
        system.description.toLowerCase().includes(query);
      const matchesTag = tagFilter === "todos" || system.tag === tagFilter;
      return matchesQuery && matchesTag;
    });
  }, [systems, searchQuery, tagFilter]);

  const administracionFinanzas = filteredSystems.filter(
    (s) => s.area === "administracion-finanzas"
  );
  const serviciosAtencion = filteredSystems.filter((s) => s.area === "servicios-atencion");

  async function handleAccess(system: UniversitySystem) {
    setAccessingId(system.id);
    try {
      await requestAccess(system.id);
      setToastMessage(`Redirigiendo a ${system.name} con token SSO seguro...`);
    } catch {
      setToastMessage("No se pudo generar el acceso. Intenta de nuevo.");
    } finally {
      setAccessingId(null);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar institution={content?.institution ?? null} />
      <Banner />

      <main
        id="sistemas"
        className="mx-auto grid max-w-screen-xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_280px]"
      >
        <div className="min-w-0">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Sistemas institucionales</h2>
              <p className="mt-1 text-sm text-slate-500">Accesos organizados por área.</p>
            </div>
            <div className="relative sm:w-72">
              <label htmlFor="system-search" className="sr-only">
                Buscar sistema
              </label>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                id="system-search"
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ej. patrimonio, nómina..."
                className="w-full rounded-lg border border-slate-200 py-2 pl-9 pr-14 text-sm text-slate-700 placeholder:text-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-institutional-sapphire"
              />
              <kbd className="absolute right-2 top-1/2 -translate-y-1/2 rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-400">
                Ctrl K
              </kbd>
            </div>
          </div>

          <div className="mt-5">
            <FilterTabs active={tagFilter} onChange={setTagFilter} />
          </div>

          {loadError && (
            <p role="alert" className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
              {loadError}
            </p>
          )}

          {loading && !loadError && (
            <p className="mt-6 text-sm text-slate-500">Cargando sistemas disponibles...</p>
          )}

          {!loading && !loadError && filteredSystems.length === 0 && (
            <p className="mt-6 text-sm text-slate-500">
              No se encontraron sistemas que coincidan con tu búsqueda o filtro.
            </p>
          )}

          {!loading && !loadError && filteredSystems.length > 0 && (
            <div className="mt-6 space-y-8">
              <AreaSection
                title="Administración y Finanzas"
                systems={administracionFinanzas}
                onAccess={handleAccess}
                accessingId={accessingId}
              />
              <AreaSection
                title="Servicios y Atención"
                systems={serviciosAtencion}
                onAccess={handleAccess}
                accessingId={accessingId}
              />
            </div>
          )}
        </div>

        <RightRail support={content?.support ?? null} />
      </main>

      <Footer institution={content?.institution ?? null} />
      <Toast message={toastMessage} />
    </div>
  );
}
