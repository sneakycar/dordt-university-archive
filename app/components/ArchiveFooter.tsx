import Link from "next/link";

export default function ArchiveFooter() {
  return (
    <footer className="dordt-archive__footer">
      <p>
        Independent portfolio exhibit · Sources cited throughout · Not affiliated with Dordt
        University
      </p>
      <p className="dordt-archive__disclaimer">
        Built for archival storytelling and interview demonstration. For official records, contact
        the{" "}
        <a href="https://www.dordt.edu/academics/library" target="_blank" rel="noopener noreferrer">
          John &amp; Louise Hulst Library
        </a>{" "}
        and{" "}
        <a href="https://digitalcollections.dordt.edu/" target="_blank" rel="noopener noreferrer">
          Digital Collections
        </a>
        . <Link href="/explore/archives-today">About this exhibit →</Link>
      </p>
    </footer>
  );
}
