import type { Metadata } from "next";
import Link from "next/link";
import { CAMPUS_PLACES } from "@/lib/dordt/data";
import { CAMPUS_EXPANSIONS, CONTEMPORARY_CAMPUS_PHOTOS } from "@/lib/dordt/campus-media";
import { href } from "@/lib/dordt/paths";
import PageHeader from "../components/PageHeader";
import CampusPhotoGallery from "../components/CampusPhotoGallery";
import CampusExpansionList from "../components/CampusExpansionList";
import CampusWaybackEmbed from "../components/CampusWaybackEmbed";

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
      <PageHeader
        kicker="Built environment"
        title="Campus & expansion"
        lede="From a four-classroom building on a mink farm to a 115-acre university—read the land through historical aerial imagery, primary-source postcards, and contemporary documentary photographs."
      />

      <section className="dordt-section">
        <p className="dordt-label">Historical aerial imagery</p>
        <CampusWaybackEmbed />
      </section>

      <section className="dordt-section">
        <p className="dordt-label">Primary sources — postcards</p>
        <div className="dordt-ref-block">
          <p>
            Mid-century postcard views of Dort / Dordt College are held in regional and denominational
            collections. They are not reproduced here; consult the originals.
          </p>
          <ul>
            <li>
              <a
                href="https://iagenweb.org/sioux/photos/pic_DordtCollege.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Iowa GenWeb — Dordt College postcard
              </a>
            </li>
            <li>
              <a
                href="https://digitalcommons.calvin.edu/hh_bult_postcards/1394/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Calvin University — 1961 Dort College postcard (Bult Collection)
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="dordt-section">
        <p className="dordt-label">Contemporary documentation</p>
        <p className="dordt-page-lead" style={{ marginTop: 0 }}>
          Wikimedia Commons photographs by David Mulder (2014–2018)—present-day campus, not
          vintage material.
        </p>
        <CampusPhotoGallery photos={CONTEMPORARY_CAMPUS_PHOTOS} />
      </section>

      <section className="dordt-section">
        <p className="dordt-label">Expansion chronology</p>
        <CampusExpansionList items={CAMPUS_EXPANSIONS} />
      </section>

      <section className="dordt-section">
        <p className="dordt-label">Building guide</p>
        <div className="dordt-grid dordt-grid--2">
          {CAMPUS_PLACES.map((place) => {
            const yearDisplay = place.year ?? place.yearNote;
            const artifactId = PLACE_ARTIFACTS[place.id];
            return (
              <div key={place.id} className="dordt-card dordt-card--static">
                <p className="dordt-card__tag">
                  {place.type}
                  {yearDisplay ? ` · ${yearDisplay}` : ""}
                </p>
                <h3>{place.name}</h3>
                <p>{place.description}</p>
                {place.id === "hulst-library" ? (
                  <Link className="dordt-link" href={href("/archives")}>
                    University archives
                  </Link>
                ) : null}
                {artifactId ? (
                  <Link className="dordt-link" href={href(`/explore/${artifactId}`)}>
                    Artifact record
                  </Link>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
