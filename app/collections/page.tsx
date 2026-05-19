import type { Metadata } from "next";
import Link from "next/link";
import { ARTIFACTS, COLLECTIONS } from "@/lib/dordt/data";
import { href } from "@/lib/dordt/paths";

export const metadata: Metadata = {
  title: "Collections",
};

export default async function CollectionsPage() {
  return (
    <>
      <h1 className="dordt-archive__brand-title" style={{ marginBottom: 8 }}>
        Archival collections
      </h1>
      <p className="dordt-archive__page-lead">
        Thematic groupings for browsing—each ties to artifact records with cited sources.
      </p>
      <div className="dordt-archive__grid dordt-archive__grid--2">
        {COLLECTIONS.map((c) => (
          <div key={c.id} className="dordt-archive__card" style={{ cursor: "default" }}>
            <div className="dordt-archive__card-tag">{c.itemCount} catalog entries</div>
            <h3>{c.title}</h3>
            <p>{c.description}</p>
          </div>
        ))}
      </div>
      <h2 className="dordt-archive__section-title" style={{ marginTop: 40 }}>
        All artifacts
      </h2>
      <div className="dordt-archive__grid dordt-archive__grid--3">
        {ARTIFACTS.map((a) => (
          <Link
            key={a.id}
            href={href(`/explore/${a.id}`)}
            className="dordt-archive__card"
          >
            <div className="dordt-archive__card-tag">{a.category}</div>
            <h3>{a.title}</h3>
            <p>{a.excerpt}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
