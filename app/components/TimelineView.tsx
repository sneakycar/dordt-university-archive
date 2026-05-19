"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ERA_LABELS, TIMELINE } from "@/lib/dordt/data";
import { href } from "@/lib/dordt/paths";

const ERAS = ["all", "vision", "founding", "growth", "expansion", "university"] as const;

export default function TimelineView() {
  const [era, setEra] = useState<(typeof ERAS)[number]>("all");

  const events = useMemo(() => {
    if (era === "all") return TIMELINE;
    return TIMELINE.filter((e) => e.era === era);
  }, [era]);

  return (
    <>
      <div className="dordt-archive__filter" role="group" aria-label="Filter by era">
        {ERAS.map((key) => (
          <button
            key={key}
            type="button"
            aria-pressed={era === key}
            onClick={() => setEra(key)}
          >
            {key === "all" ? "All eras" : ERA_LABELS[key]?.split(" (")[0] ?? key}
          </button>
        ))}
      </div>
      <div className="dordt-archive__timeline">
        {events.map((event) => (
          <article key={`${event.year}-${event.title}`} className="dordt-archive__timeline-item">
            <div className="dordt-archive__timeline-year">
              {event.year}
              {event.month ? ` · ${event.month}` : ""}
            </div>
            <h3>{event.title}</h3>
            <p>{event.summary}</p>
            {event.artifactId ? (
              <Link
                className="dordt-archive__timeline-link"
                href={href(`/explore/${event.artifactId}`)}
              >
                View artifact →
              </Link>
            ) : null}
          </article>
        ))}
      </div>
    </>
  );
}
