import type { PageContent, UniversitySystem } from "./types";

async function handle<T>(res: Response): Promise<T> {
  if (!res.ok) {
    throw new Error(`Error de red: ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export function fetchSystems(): Promise<UniversitySystem[]> {
  return fetch("/api/systems").then((res) => handle<UniversitySystem[]>(res));
}

export function fetchContent(): Promise<PageContent> {
  return fetch("/api/content").then((res) => handle<PageContent>(res));
}

export interface AccessResponse {
  redirectUrl: string;
  token: string;
  expiresInSeconds: number;
}

export function requestAccess(id: string): Promise<AccessResponse> {
  return fetch(`/api/systems/${id}/access`, { method: "POST" }).then((res) =>
    handle<AccessResponse>(res)
  );
}
