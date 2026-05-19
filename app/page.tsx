import Link from "next/link";
import { ARTIFACTS, COLLECTIONS, SITE, STATS, TIMELINE } from "@/lib/dordt/data";
import { CAMPUS_PHOTOS } from "@/lib/dordt/campus-media";
import { href } from "@/lib/dordt/paths";

export default async function DordtHomePage() {  const featured = ARTIFACTS.slice(0, 6);
  const recentEras = TIMELINE.filter((e) => e.year >= 2012).slice(-4);

  return (
    <>
      <section className="dordt-archive__hero">
        <div className="dordt-archive__hero-panel">
          <h1>Welcome to the exhibit</h1>
          <p>
            From a four-classroom building on a former mink farm to a university serving students
            from more than twenty-six countries—this digital reading room traces seven decades of
            Reformed Christian higher education in northwest Iowa.
          </p>
          <p>
            Curated for clarity and citation: timelines, presidential eras, campus landmarks,
            athletics milestones, and connections to the Synod of Dordt that gave the institution
            its name.
          </p>
          <div className="dordt-archive__cta-row">
            <Link className="dordt-archive__btn" href={href("/timeline")}>
              Explore timeline
            </Link>
            <Link
              className="dordt-archive__btn dordt-archive__btn--outline"
              href={href("/archives")}
            >
              Official archives
            </Link>
          </div>
        </div>
        <div className="dordt-archive__stats" aria-label="At a glance">
          {STATS.map((s) => (
            <div key={s.label} className="dordt-archive__stat">
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <h2 className="dordt-archive__section-title">Campus in photographs</h2>
      <div className="dordt-archive__photo-strip">
        {CAMPUS_PHOTOS.filter((p) => p.kind !== "satellite" && p.src).slice(0, 4).map((p) => (
          <a
            key={p.id}
            href={href("/campus")}
            className="dordt-archive__photo-strip-item"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt={p.alt} loading="lazy" />
            <span>{p.title}</span>
          </a>
        ))}
      </div>
      <p style={{ marginTop: 12 }}>
        <Link className="dordt-archive__timeline-link" href={href("/campus")}>
          Historic views, satellite map &amp; expansion timeline →
        </Link>
        {" · "}
        <Link className="dordt-archive__timeline-link" href={href("/people")}>
          Biographical register →
        </Link>
      </p>

      <h2 className="dordt-archive__section-title" style={{ marginTop: 40 }}>
        Featured collections
      </h2>
      <div className="dordt-archive__grid dordt-archive__grid--2">
        {COLLECTIONS.map((c) => (
          <Link key={c.id} href={href("/collections")} className="dordt-archive__card">
            <div className="dordt-archive__card-tag">{c.itemCount} items</div>
            <h3>{c.title}</h3>
            <p>{c.subtitle}</p>
          </Link>
        ))}
      </div>

      <h2 className="dordt-archive__section-title" style={{ marginTop: 40 }}>
        Recent history
      </h2>
      <div className="dordt-archive__grid dordt-archive__grid--2">
        {recentEras.map((e) => (
          <div key={e.title} className="dordt-archive__card" style={{ cursor: "default" }}>
            <div className="dordt-archive__card-tag">{e.year}</div>
            <h3>{e.title}</h3>
            <p>{e.summary}</p>
          </div>
        ))}
      </div>

      <h2 className="dordt-archive__section-title" style={{ marginTop: 40 }}>
        Selected artifacts
      </h2>
      <div className="dordt-archive__grid dordt-archive__grid--3">
        {featured.map((a) => (
          <Link
            key={a.id}
            href={href(`/explore/${a.id}`)}
            className="dordt-archive__card"
          >
            <div className="dordt-archive__card-tag">{a.type.replace("-", " ")}</div>
            <h3>{a.title}</h3>
            <p>{a.excerpt}</p>
          </Link>
        ))}
      </div>

      <p className="dordt-archive__page-lead" style={{ marginTop: 48 }}>
        {SITE.location} · Black &amp; Gold · Defenders · Affiliated with the Christian Reformed
        Church in North America
      </p>
    </>
  );
}
