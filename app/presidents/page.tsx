import type { Metadata } from "next";
import Link from "next/link";
import { PRESIDENTS } from "@/lib/dordt/data";
import { href } from "@/lib/dordt/paths";

export const metadata: Metadata = {
  title: "Presidents",
};

export default async function PresidentsPage() {
  return (
    <>
      <h1 className="dordt-archive__brand-title" style={{ marginBottom: 8 }}>
        Presidential leadership
      </h1>
      <p className="dordt-archive__page-lead">
        Four presidents have guided Dordt from a junior college of thirty-five students to a
        university of roughly two thousand—with a consistent Reformed Christian mission. See also
        the{" "}
        <Link className="dordt-archive__timeline-link" href={href("/people")}>
          biographical register
        </Link>{" "}
        for founding-era context.
      </p>
      {PRESIDENTS.map((p) => (
        <article key={p.id} className="dordt-archive__president">
          <div className="dordt-archive__president-years">{p.years}</div>
          <div>
            <h2>{p.name}</h2>
            <p className="dordt-archive__president-role">{p.title}</p>
            <p>{p.summary}</p>
            <ul className="dordt-archive__list">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            {p.id === "haan" ? (
              <p style={{ marginTop: 16 }}>
                <Link className="dordt-archive__timeline-link" href={href("/explore/haan-presidency")}>
                  Oral history &amp; artifact →
                </Link>
              </p>
            ) : null}
          </div>
        </article>
      ))}
    </>
  );
}
