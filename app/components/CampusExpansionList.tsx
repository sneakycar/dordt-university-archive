import type { CampusExpansion } from "@/lib/dordt/types";

const ZONE_LABELS: Record<string, string> = {
  core: "Core campus",
  south: "South campus housing",
  east: "East campus",
  north: "North campus",
  community: "Sioux Center partnership",
};

export default function CampusExpansionList({ items }: { items: CampusExpansion[] }) {
  const sorted = [...items].sort((a, b) => a.year - b.year);

  return (
    <div className="dordt-archive__expansion-list">
      {sorted.map((item) => {
        const yearLabel =
          item.yearEnd && item.yearEnd !== item.year
            ? `${item.year}–${item.yearEnd}`
            : String(item.year);
        return (
          <article key={item.id} className="dordt-archive__expansion-item">
            <div
              className="dordt-archive__expansion-year"
              data-certainty={item.certainty === "archival-gap" ? "gap" : undefined}
            >
              {yearLabel}
            </div>
            <div>
              <h3>{item.title}</h3>
              {item.zone ? (
                <span className="dordt-archive__expansion-zone">
                  {ZONE_LABELS[item.zone] ?? item.zone}
                </span>
              ) : null}
              <p>{item.summary}</p>
              {item.certainty === "archival-gap" ? (
                <p className="dordt-archive__expansion-note">
                  Archival note: exact year not published online—confirm in Hulst Library campus
                  planning records.
                </p>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}
