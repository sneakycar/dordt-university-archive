import type { Metadata } from "next";
import Link from "next/link";
import { CAMPUS_PLACES } from "@/lib/dordt/data";
import { CAMPUS_EXPANSIONS, CAMPUS_PHOTOS } from "@/lib/dordt/campus-media";
import { href } from "@/lib/dordt/paths";
import CampusPhotoGallery from "../components/CampusPhotoGallery";
import CampusExpansionList from "../components/CampusExpansionList";

const PLACE_ARTIFACTS: Record<string, string> = {
  southview: "southview-apartments",
  kuyper: "kuyper-2010",
  squares: "squares-2023",
  "covenant-hall": "covenant-hall-1998",
  "east-campus": "east-campus-apartments",
};

export const metadata: Metadata = {
  title: "Campus",
};

export default async function CampusPage() {
  return (
    <>
      <h1 className="dordt-archive__brand-title" style={{ marginBottom: 8 }}>
        Campus &amp; built environment
      </h1>
      <p className="dordt-archive__page-lead">
        From a four-classroom building on a mink farm to a 115-acre university: residence halls,
        south-campus apartments (Southview, Kuyper, The Squares), and partnerships with Sioux
        Center. Historic photographs and present-day satellite context below.
      </p>

      <h2 className="dordt-archive__section-title">Photographs &amp; satellite</h2>
      <CampusPhotoGallery photos={CAMPUS_PHOTOS} />
      <p className="dordt-archive__page-lead" style={{ fontSize: 14, marginTop: 16 }}>
        Vintage postcard reference:{" "}
        <a
          href="https://iagenweb.org/sioux/photos/pic_DordtCollege.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Iowa GenWeb — Dordt College postcard
        </a>
        {" · "}
        <a
          href="https://digitalcommons.calvin.edu/hh_bult_postcards/1394/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Calvin University — 1961 Dort College postcard
        </a>
      </p>

      <h2 className="dordt-archive__section-title" style={{ marginTop: 48 }}>
        Campus expansion chronology
      </h2>
      <CampusExpansionList items={CAMPUS_EXPANSIONS} />

      <h2 className="dordt-archive__section-title" style={{ marginTop: 48 }}>
        Building guide
      </h2>
      <div className="dordt-archive__grid dordt-archive__grid--2">
        {CAMPUS_PLACES.map((place) => {
          const yearDisplay = place.year ?? place.yearNote;
          const artifactId = PLACE_ARTIFACTS[place.id];
          return (
            <div key={place.id} className="dordt-archive__card" style={{ cursor: "default" }}>
              <div className="dordt-archive__card-tag">
                {place.type}
                {yearDisplay ? ` · ${yearDisplay}` : ""}
              </div>
              <h3>{place.name}</h3>
              <p>{place.description}</p>
              {place.id === "hulst-library" ? (
                <Link className="dordt-archive__timeline-link" href={href("/archives")}>
                  University archives →
                </Link>
              ) : null}
              {artifactId ? (
                <Link
                  className="dordt-archive__timeline-link"
                  href={href(`/explore/${artifactId}`)}
                  style={{ display: "block", marginTop: 8 }}
                >
                  Artifact record →
                </Link>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
}
