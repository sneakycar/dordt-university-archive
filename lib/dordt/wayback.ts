/** Esri Living Atlas Wayback — centered on Dordt University, Sioux Center, IA */
export const WAYBACK = {
  lon: -96.1671,
  lat: 43.0833,
  zoom: 16,
} as const;

export function waybackExploreUrl(): string {
  const { lon, lat, zoom } = WAYBACK;
  return `https://livingatlas.arcgis.com/wayback/#mapCenter=${lon}%2C${lat}%2C${zoom}&mode=explore`;
}

export function waybackEmbedUrl(): string {
  return waybackExploreUrl();
}
