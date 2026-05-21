import Link from "next/link";
import { ARTIFACTS, COLLECTIONS, SITE, TIMELINE } from "@/lib/dordt/data";
import { CONTEMPORARY_CAMPUS_PHOTOS } from "@/lib/dordt/campus-media";
import { STUDIO_WORKS } from "@/lib/dordt/studio-works";
import { href } from "@/lib/dordt/paths";

export default async function DordtHomePage() {
  const featured = ARTIFACTS.slice(0, 3);
  const studioPreview = STUDIO_WORKS.slice(0, 3);
  const campusPreview = CONTEMPORARY_CAMPUS_PHOTOS.slice(0, 3);

  return (
    <>
      <section className="dordt-hero">
        <div className="dordt-hero__intro">
          <p className="dordt-page-header__kicker">Sioux Center, Iowa · Est. 1955</p>
          <h1>{SITE.title}</h1>
          <p>{SITE.subtitle}</p>
          <div className="dordt-actions">
            <Link className="dordt-btn dordt-btn--fill" href={href("/timeline")}>
              Historical collections
            </Link>
            <Link className="dordt-btn" href={href("/studio")}>
              Studio &amp; arts
            </Link>
          </div>
        </div>
        <div className="dordt-hero__rail" aria-hidden>
          <span>University history</span>
          <span>Student &amp; faculty works</span>
          <span>Archival citation throughout</span>
        </div>
      </section>

      <section className="dordt-split">
        <div className="dordt-split__col">
          <p className="dordt-label">Studio &amp; scholarly works</p>
          <div className="dordt-studio-grid dordt-studio-grid--home">
            {studioPreview.map((work) => (
              <article key={work.id} className="dordt-studio-card dordt-studio-card--compact">
                <div
                  className="dordt-studio-card__plate"
                  style={{ background: `linear-gradient(160deg, ${work.accent}, #141414)` }}
                />
                <div className="dordt-studio-card__body">
                  <p className="dordt-studio-card__meta">
                    {work.year} · {work.medium}
                  </p>
                  <h2>{work.title}</h2>
                  <p className="dordt-studio-card__artist">{work.artist}</p>
                </div>
              </article>
            ))}
          </div>
          <Link className="dordt-btn" href={href("/studio")}>
            View arts archive
          </Link>
        </div>
        <div className="dordt-split__col">
          <p className="dordt-label">Campus — contemporary views</p>
          <div className="dordt-strip dordt-strip--3">
            {campusPreview.map((p) => (
              <a key={p.id} href={href("/campus")} className="dordt-strip__item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.src} alt={p.alt} loading="lazy" />
                <span>{p.title}</span>
              </a>
            ))}
          </div>
          <p className="dordt-page-lead" style={{ marginTop: 20, marginBottom: 16 }}>
            Historical aerial imagery and postcard sources on the campus exhibition.
          </p>
          <Link className="dordt-btn" href={href("/campus")}>
            Campus &amp; Wayback imagery
          </Link>
        </div>
      </section>

      <section className="dordt-section">
        <p className="dordt-label">Historical collections</p>
        <div className="dordt-grid dordt-grid--3">
          {COLLECTIONS.slice(0, 6).map((c) => (
            <Link key={c.id} href={href("/collections")} className="dordt-card">
              <p className="dordt-card__tag">{c.itemCount} entries</p>
              <h3>{c.title}</h3>
              <p>{c.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="dordt-section">
        <p className="dordt-label">Selected artifacts</p>
        <div className="dordt-grid dordt-grid--3">
          {featured.map((a) => (
            <Link key={a.id} href={href(`/explore/${a.id}`)} className="dordt-card">
              <p className="dordt-card__tag">{a.type.replace("-", " ")}</p>
              <h3>{a.title}</h3>
              <p>{a.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="dordt-section">
        <p className="dordt-label">Recent history</p>
        <div className="dordt-timeline">
          {TIMELINE.filter((e) => e.year >= 2012)
            .slice(-3)
            .map((e) => (
              <article key={e.title} className="dordt-timeline__item">
                <p className="dordt-timeline__year">{e.year}</p>
                <h3>{e.title}</h3>
                <p>{e.summary}</p>
              </article>
            ))}
        </div>
      </section>
    </>
  );
}
