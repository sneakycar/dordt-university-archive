"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/lib/dordt/data";

export default function ArchiveNav() {
  const pathname = usePathname() || "";

  return (
    <header className="dordt-archive__masthead">
      <div className="dordt-archive__masthead-top">
        <Link href="/" className="dordt-archive__brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/dordt-logo.png"
            alt="Dordt University"
            className="dordt-archive__brand-logo"
            width={72}
            height={72}
          />
          <div className="dordt-archive__brand-text">
            <p className="dordt-archive__brand-kicker">Sioux Center, Iowa · Est. 1955</p>
            <h1 className="dordt-archive__brand-title">{SITE.title}</h1>
            <p className="dordt-archive__brand-sub">{SITE.subtitle}</p>
          </div>
        </Link>
        <div className="dordt-archive__motto">
          <em>{SITE.motto}</em>
          <strong>{SITE.mottoEn}</strong>
        </div>
      </div>
      <nav className="dordt-archive__nav" aria-label="Archive sections">
        {NAV.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined}>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
