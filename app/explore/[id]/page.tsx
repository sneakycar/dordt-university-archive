import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArtifact } from "@/lib/dordt/data";
import { href } from "@/lib/dordt/paths";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const artifact = getArtifact(id);
  if (!artifact) return { title: "Not found" };
  return { title: artifact.title };
}

export async function generateStaticParams() {
  const { ARTIFACTS } = await import("@/lib/dordt/data");
  return ARTIFACTS.map((a) => ({ id: a.id }));
}

export default async function ExploreArtifactPage({ params }: Props) {
  const { id } = await params;
  const artifact = getArtifact(id);
  if (!artifact) notFound();
  return (
    <article>
      <div className="dordt-archive__artifact-header">
        <div className="dordt-archive__card-tag">
          {artifact.type.replace("-", " ")}
          {artifact.year ? ` · ${artifact.year}` : ""}
        </div>
        <h1>{artifact.title}</h1>
        <p className="dordt-archive__page-lead" style={{ margin: 0 }}>
          {artifact.excerpt}
        </p>
      </div>
      <div className="dordt-archive__prose">
        {artifact.body.map((para) => (
          <p key={para.slice(0, 40)}>{para}</p>
        ))}
      </div>
      <aside className="dordt-archive__sources">
        <h3>Sources &amp; further reading</h3>
        <ul>
          {artifact.sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
      <p style={{ marginTop: 24 }}>
        <Link className="dordt-archive__btn dordt-archive__btn--outline" href={href("/collections")}>
          ← All collections
        </Link>
      </p>
    </article>
  );
}
