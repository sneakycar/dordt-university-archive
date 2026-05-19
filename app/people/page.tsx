import type { Metadata } from "next";
import Link from "next/link";
import { BIOGRAPHIES } from "@/lib/dordt/campus-media";
import { href } from "@/lib/dordt/paths";

export const metadata: Metadata = {
  title: "People",
};

export default async function PeoplePage() {
  return (
    <>
      <h1 className="dordt-archive__brand-title" style={{ marginBottom: 8 }}>
        Biographical register
      </h1>
      <p className="dordt-archive__page-lead">
        Snippets from presidential histories, founding leaders, and figures referenced in campus
        naming—linked to artifact records where available.
      </p>
      <div className="dordt-archive__bio-grid">
        {BIOGRAPHIES.map((bio) => (
          <article key={bio.id} className="dordt-archive__bio-card">
            {bio.portraitUrl ? (
              <div className="dordt-archive__bio-portrait">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={bio.portraitUrl} alt="" loading="lazy" />
              </div>
            ) : null}
            <div className="dordt-archive__bio-body">
              <h2>{bio.name}</h2>
              {bio.dates ? <p className="dordt-archive__bio-dates">{bio.dates}</p> : null}
              <p className="dordt-archive__bio-roles">{bio.roles.join(" · ")}</p>
              <p className="dordt-archive__bio-snippet">{bio.snippet}</p>
              <ul className="dordt-archive__list">
                {bio.detail.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              {bio.relatedArtifactId ? (
                <Link
                  className="dordt-archive__timeline-link"
                  href={href(`/explore/${bio.relatedArtifactId}`)}
                >
                  Related artifact →
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
