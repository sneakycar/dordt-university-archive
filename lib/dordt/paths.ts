/** Normalize legacy /dordt/* paths to site root paths. */
export function href(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (p === "/dordt") return "/";
  return p.replace(/^\/dordt/, "") || "/";
}
