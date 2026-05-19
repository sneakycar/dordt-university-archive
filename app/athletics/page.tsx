import type { Metadata } from "next";
import Link from "next/link";
import { ATHLETICS } from "@/lib/dordt/data";
import { href } from "@/lib/dordt/paths";

export const metadata: Metadata = {
  title: "Athletics",
};

export default async function AthleticsPage() {
  return (
    <>
      <h1 className="dordt-archive__brand-title" style={{ marginBottom: 8 }}>
        Defenders athletics
      </h1>
      <p className="dordt-archive__page-lead">
        The Defenders compete in the NAIA Great Plains Athletic Conference (GPAC). Black and gold.
        Eighteen varsity sports. National titles in cross country (2022) and women&apos;s basketball
        (2024, 2025).
      </p>
      <div className="dordt-archive__timeline">
        {ATHLETICS.map((h) => (
          <article key={h.title} className="dordt-archive__timeline-item">
            <div className="dordt-archive__timeline-year">
              {h.year} · {h.sport}
            </div>
            <h3>{h.title}</h3>
            <p>{h.detail}</p>
          </article>
        ))}
      </div>
      <div className="dordt-archive__prose" style={{ marginTop: 32 }}>
        <h2>Facilities</h2>
        <p>
          DeWitt Gymnasium (1968) anchors basketball and volleyball. The Campus Recreation Center
          (1997, renovated 2022) and the All Seasons Center—a partnership with the city of Sioux
          Center—support hockey, aquatics, and year-round training.
        </p>
        <p>
          <Link href={href("/explore/cross-country-2022")}>2022 cross country championship →</Link>
          {" · "}
          <Link href={href("/explore/womens-basketball-2024")}>2024 basketball title →</Link>
        </p>
      </div>
    </>
  );
}

