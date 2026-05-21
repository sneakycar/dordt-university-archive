import type { CampusPhoto } from "@/lib/dordt/types";

export default function CampusPhotoGallery({ photos }: { photos: CampusPhoto[] }) {
  return (
    <div className="dordt-gallery">
      {photos.map((photo) => (
        <figure key={photo.id} className="dordt-gallery__item">
          <div className="dordt-gallery__img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </div>
          <figcaption>
            <p className="dordt-gallery__meta">
              <span>{photo.year ?? photo.yearLabel}</span>
              <span>{photo.kind}</span>
            </p>
            <h3>{photo.title}</h3>
            <p>{photo.caption}</p>
            <p className="dordt-gallery__credit">
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
    </div>
  );
}
