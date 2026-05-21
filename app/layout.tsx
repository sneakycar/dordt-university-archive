import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import ArchiveNav from "./components/ArchiveNav";
import ArchiveFooter from "./components/ArchiveFooter";
import { SITE } from "@/lib/dordt/data";
import "./archive.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dordt-display",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dordt-sans",
});

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
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <div className="dordt-archive">
          <div className="dordt-shell">
            <ArchiveNav />
            <div className="dordt-main">
              <main>{children}</main>
              <ArchiveFooter />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
