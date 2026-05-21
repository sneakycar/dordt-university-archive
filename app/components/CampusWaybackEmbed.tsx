import { waybackEmbedUrl, waybackExploreUrl } from "@/lib/dordt/wayback";

export default function CampusWaybackEmbed() {
  return (
    <div className="dordt-map-panel">
      <div className="dordt-map-panel__frame">
        <iframe
          title="Esri Wayback — historical satellite imagery near Dordt University"
          src={waybackEmbedUrl()}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allow="fullscreen"
        />
      </div>
      <p className="dordt-map-panel__note">
        Scrub the time slider to compare decades of aerial photography over the campus and south
        housing corridor (Southview, Kuyper, The Squares).
      </p>
      <a
        className="dordt-map-panel__link"
        href={waybackExploreUrl()}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open full-screen Wayback explorer →
      </a>
    </div>
  );
}
