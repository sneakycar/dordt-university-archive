import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission & Vision",
};

export default function MissionPage() {
  return (
    <>
      <h1 className="dordt-archive__brand-title" style={{ marginBottom: 8 }}>
        Mission &amp; vision
      </h1>
      <div className="dordt-archive__prose">
        <h2>Mission</h2>
        <p>
          As an institution of higher education committed to the Reformed Christian perspective,
          Dordt equips students, alumni, and the broader community to work effectively toward
          Christ-centered renewal in all aspects of contemporary life.
        </p>
        <h2>Vision</h2>
        <p>
          An education that is Christian not merely in the sense that devotional exercises are
          appended to the ordinary work of the college, but in the larger and deeper sense that all
          the class work, all of the students&apos; intellectual, emotional, and imaginative
          activities shall be permeated with the spirit and teaching of Christianity.
        </p>
        <h2>Educational foundations</h2>
        <p>
          Rev. B.J. Haan articulated &ldquo;Scripturally Oriented Higher Education,&rdquo; grounding
          a core curriculum in the conviction that God is sovereign over every discipline. Under Dr.
          John B. Hulst, the college adopted{" "}
          <em>The Educational Task of Dordt</em> as its confessional foundation for the academic
          enterprise.
        </p>
        <h2>University initiative (2019)</h2>
        <p>
          The transition to Dordt University reflected expanded graduate programs, online study,
          professional-technical degrees, and a global student body—while remaining committed to the
          Reformed Christian perspective and mission of Christ-centered renewal.
        </p>
        <p style={{ fontSize: 14, color: "var(--dordt-muted)" }}>
          Source:{" "}
          <a href="https://www.dordt.edu/about-dordt/college-history" target="_blank" rel="noopener noreferrer">
            Dordt University — Mission, Vision, &amp; History
          </a>
        </p>
      </div>
    </>
  );
}
