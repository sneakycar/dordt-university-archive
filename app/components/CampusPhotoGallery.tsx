import type { CampusPhoto } from "@/lib/dordt/types";
import CampusSatelliteEmbed from "./CampusSatelliteEmbed";

export default function CampusPhotoGallery({ photos }: { photos: CampusPhoto[] }) {
  const raster = photos.filter((p) => p.kind !== "satellite");
  const satellite = photos.find((p) => p.kind === "satellite");

  return (
    <div className="dordt-archive__photo-gallery">
      {raster.map((photo) => (
        <figure key={photo.id} className="dordt-archive__photo-frame">
          <div className="dordt-archive__photo-img-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </div>
          <figcaption>
            <div className="dordt-archive__photo-meta">
              {photo.year ?? photo.yearLabel}
              <span className="dordt-archive__photo-kind">{photo.kind}</span>
            </div>
            <strong>{photo.title}</strong>
            <p>{photo.caption}</p>
            <p className="dordt-archive__photo-credit">
              {photo.creditUrl ? (
                <a href={photo.creditUrl} target="_blank" rel="noopener noreferrer">
                  {photo.credit}
                </a>
              ) : (
                photo.credit
              )}
              {photo.license ? ` · ${photo.license}` : ""}
            </p>
          </figcaption>
        </figure>
      ))}
      {satellite ? (
        <figure
          key={satellite.id}
          className="dordt-archive__photo-frame dordt-archive__photo-frame--wide"
        >
          <CampusSatelliteEmbed />
          <figcaption>
            <div className="dordt-archive__photo-meta">
              {satellite.yearLabel}
              <span className="dordt-archive__photo-kind">satellite / map</span>
            </div>
            <strong>{satellite.title}</strong>
            <p>{satellite.caption}</p>
            <p className="dordt-archive__photo-credit">
              <a href={satellite.creditUrl} target="_blank" rel="noopener noreferrer">
                {satellite.credit}
              </a>
              {satellite.license ? ` · ${satellite.license}` : ""}
            </p>
          </figcaption>
        </figure>
      ) : null}
    </div>
  );
}
