export type SystemTag = "administracion" | "finanzas" | "servicios";

export type SystemArea = "administracion-finanzas" | "servicios-atencion";

export type ServiceStatus = "operativo" | "mantenimiento";

export interface UniversitySystem {
  id: string;
  name: string;
  description: string;
  tag: SystemTag;
  area: SystemArea;
  status: ServiceStatus;
  url: string;
  ctaLabel: string;
  previewImage: string | null;
}

export type TagFilter = "todos" | SystemTag;

export interface SupportContent {
  title: string;
  description: string;
  email: string;
}

export interface InstitutionContent {
  name: string;
  shortName: string;
  footer: string;
}

export interface PageContent {
  support: SupportContent;
  institution: InstitutionContent;
}
