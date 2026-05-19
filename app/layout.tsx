import type { Metadata } from "next";
import ArchiveNav from "./components/ArchiveNav";
import ArchiveFooter from "./components/ArchiveFooter";
import { SITE } from "@/lib/dordt/data";
import "./archive.css";

export const metadata: Metadata = {
  title: {
    default: SITE.title,
    template: `%s · ${SITE.title}`,
  },
  description: SITE.subtitle,
  openGraph: {
    title: SITE.title,
    description: SITE.subtitle,
    type: "website",
  },
};

export default function DordtArchiveLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dordt-archive">
      <div className="dordt-archive__grain" aria-hidden />
      <div className="dordt-archive__frame">
        <ArchiveNav />
        <main>{children}</main>
        <ArchiveFooter />
      </div>
    </div>
  );
}
