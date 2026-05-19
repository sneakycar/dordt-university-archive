import type { Metadata } from "next";
import Link from "next/link";
import { href } from "@/lib/dordt/paths";

export const metadata: Metadata = {
  title: "Synod of Dordt",
};

export default async function SynodPage() {
  return (
    <>
      <h1 className="dordt-archive__brand-title" style={{ marginBottom: 8 }}>
        The Synod of Dordt &amp; the college name
      </h1>
      <div className="dordt-archive__prose">
        <p>
          In April 1956, Midwest Christian Junior College became <strong>Dordt College</strong>—a
          name chosen to honor the Synod of Dordrecht (1618–1619), where Reformed churches in the
          Netherlands affirmed confessional standards including the Canons of Dort.
        </p>
        <p>
          Leaders told the <em>Sioux Center News</em> that &ldquo;the name &lsquo;Dordt&rsquo; will
          constantly remind us of the heritage in which we are rooted and the goals we should strive
          for… It will tell all people everywhere just exactly what we are and what we stand
          for.&rdquo;
        </p>
        <p>
          The institution&apos;s motto, <em>Soli Deo Gloria</em> (Glory to God alone), echoes the
          synod&apos;s emphasis on God&apos;s sovereign grace and Lordship over every area of life—including
          scholarship, agriculture, engineering, nursing, and the arts.
        </p>
        <p>
          <Link href={href("/explore/synod-of-dordt")}>Read full artifact →</Link>
          {" · "}
          <Link href={href("/explore/name-change-1956")}>1956 name change →</Link>
        </p>
      </div>
    </>
  );
}
