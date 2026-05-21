"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/lib/dordt/data";

export default function ArchiveNav() {
  const pathname = usePathname() || "";

  return (
    <aside className="dordt-side" aria-label="Site navigation">
      <Link href="/" className="dordt-side__brand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/dordt-logo.png" alt="" className="dordt-side__logo" width={44} height={44} />
        <span className="dordt-side__title">Dordt University</span>
        <span className="dordt-side__sub">Digital Archive</span>
      </Link>
      <nav className="dordt-side__nav" aria-label="Archive sections">
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
      <p className="dordt-side__motto">
        <em>{SITE.motto}</em>
        <span>{SITE.mottoEn}</span>
      </p>
    </aside>
  );
}
