import { OSM_EMBED } from "@/lib/dordt/campus-media";

export default function CampusSatelliteEmbed() {
  const { lat, lon, bbox } = OSM_EMBED;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${lat}%2C${lon}`;

  return (
    <div className="dordt-archive__map-embed">
      <iframe
        title="OpenStreetMap — Dordt University, Sioux Center, Iowa"
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        className="dordt-archive__map-link"
        href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=16/${lat}/${lon}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        View larger map →
      </a>
    </div>
  );
}
