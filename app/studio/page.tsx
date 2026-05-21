import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { STUDIO_WORKS } from "@/lib/dordt/studio-works";
import { href } from "@/lib/dordt/paths";

export const metadata: Metadata = {
  title: "Studio & scholarly works",
};

export default function StudioPage() {
  return (
    <>
      <PageHeader
        kicker="Arts & creative archive"
        title="Studio & scholarly works"
        lede="A curatorial wall for student and faculty work in the arts—studio, music, digital media, and design—alongside the university’s historical record."
      />

      <section className="dordt-section">
        <p className="dordt-page-lead">
          Works shown here are representative portfolio entries for interview demonstration. In
          production, this gallery would ingest submissions from departments, juried shows, and
          Digital Collections with rights metadata.
        </p>
        <div className="dordt-studio-grid">
          {STUDIO_WORKS.map((work) => (
            <article key={work.id} className="dordt-studio-card">
              <div
                className="dordt-studio-card__plate"
                style={{ background: `linear-gradient(145deg, ${work.accent} 0%, #1a1a1a 100%)` }}
                aria-hidden
              />
              <div className="dordt-studio-card__body">
                <p className="dordt-studio-card__meta">
                  {work.year} · {work.role} · {work.department}
                </p>
                <h2>{work.title}</h2>
                <p className="dordt-studio-card__artist">{work.artist}</p>
                <p className="dordt-studio-card__medium">{work.medium}</p>
                <p>{work.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="dordt-section">
        <p className="dordt-label">University history</p>
        <p className="dordt-page-lead" style={{ marginBottom: 24 }}>
          Official timelines, campus expansion, and presidential eras live in the historical wing of
          this archive.
        </p>
        <Link className="dordt-btn" href={href("/timeline")}>
          Enter historical collections
        </Link>
      </section>
    </>
  );
}
