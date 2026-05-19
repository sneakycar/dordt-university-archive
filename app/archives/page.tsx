import type { Metadata } from "next";
import Link from "next/link";
import { href } from "@/lib/dordt/paths";

export const metadata: Metadata = {
  title: "Archives Today",
};

const OFFICIAL_RESOURCES = [
  {
    title: "Dordt University Digital Collections",
    url: "https://digitalcollections.dordt.edu/",
    detail: "Digitized oral histories, publications, and archival materials.",
  },
  {
    title: "Oral History of President B.J. Haan",
    url: "https://digitalcollections.dordt.edu/oral_history_haan/",
    detail: "KDCR recordings from the 1980s, preserved in the university archives.",
  },
  {
    title: "John & Louise Hulst Library",
    url: "https://www.dordt.edu/academics/library",
    detail: "300,000+ volumes, curriculum center, Dutch Memorial Collection, and official archives.",
  },
  {
    title: "Mission, Vision, & History",
    url: "https://www.dordt.edu/about-dordt/college-history",
    detail: "Authoritative narrative from the university.",
  },
  {
    title: "Former Presidents",
    url: "https://www.dordt.edu/about-dordt/offices-and-services/presidents-office/former-presidents",
    detail: "Biographies of Haan, Hulst, Zylstra, and context for current leadership.",
  },
];

export default async function ArchivesPage() {
  return (
    <>
      <h1 className="dordt-archive__brand-title" style={{ marginBottom: 8 }}>
        The university archives today
      </h1>
      <div className="dordt-archive__prose">
        <p>
          This exhibit is a <strong>portfolio demonstration</strong>—not an official Dordt University
          publication. Professional archivists steward the real collections in the Hulst Library,
          where college records, Dutch heritage materials, and oral histories are preserved for
          researchers.
        </p>
        <p>
          For your interview and future work, these official resources are the primary destinations:
        </p>
      </div>
      <ul className="dordt-archive__list" style={{ maxWidth: "72ch" }}>
        {OFFICIAL_RESOURCES.map((r) => (
          <li key={r.url}>
            <a href={r.url} target="_blank" rel="noopener noreferrer">
              {r.title}
            </a>
            — {r.detail}
          </li>
        ))}
      </ul>
      <p style={{ marginTop: 24 }}>
        <Link className="dordt-archive__btn" href={href("/explore/archives-today")}>
          Exhibit note on this archive
        </Link>
      </p>
    </>
  );
}
