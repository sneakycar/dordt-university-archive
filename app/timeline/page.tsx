import type { Metadata } from "next";
import TimelineView from "../components/TimelineView";

export const metadata: Metadata = {
  title: "Timeline",
};

export default function TimelinePage() {
  return (
    <>
      <h1 className="dordt-archive__brand-title" style={{ marginBottom: 8 }}>
        Historical timeline
      </h1>
      <p className="dordt-archive__page-lead">
        From the Synod of Dordrecht (1618) through national championships in 2025—filter by era
        or browse the full chronology.
      </p>
      <TimelineView />
    </>
  );
}
