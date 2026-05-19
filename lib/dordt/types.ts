export type ArchiveCategory =
  | "founding"
  | "leadership"
  | "campus"
  | "academics"
  | "athletics"
  | "faith"
  | "community";

export type TimelineEra =
  | "vision"
  | "founding"
  | "growth"
  | "expansion"
  | "university";

export type TimelineEvent = {
  year: number;
  month?: string;
  title: string;
  summary: string;
  era: TimelineEra;
  category: ArchiveCategory;
  artifactId?: string;
};

export type President = {
  id: string;
  name: string;
  title: string;
  years: string;
  tenureStart: number;
  tenureEnd?: number;
  summary: string;
  highlights: string[];
};

export type CampusPlace = {
  id: string;
  name: string;
  year?: string;
  yearNote?: string;
  type: "academic" | "residential" | "worship" | "recreation" | "library";
  description: string;
};

export type CampusPhotoKind = "historic" | "contemporary" | "satellite" | "aerial";

export type CampusPhoto = {
  id: string;
  title: string;
  year?: number;
  yearLabel?: string;
  kind: CampusPhotoKind;
  src: string;
  alt: string;
  caption: string;
  credit: string;
  creditUrl?: string;
  license?: string;
};

export type CampusExpansion = {
  id: string;
  year: number;
  yearEnd?: number;
  title: string;
  summary: string;
  zone?: "core" | "south" | "east" | "north" | "community";
  certainty?: "confirmed" | "approximate" | "archival-gap";
};

export type Biography = {
  id: string;
  name: string;
  dates?: string;
  roles: string[];
  snippet: string;
  detail: string[];
  relatedArtifactId?: string;
  portraitUrl?: string;
};

export type Collection = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  itemCount: number;
  categories: ArchiveCategory[];
};

export type Artifact = {
  id: string;
  title: string;
  year?: number;
  category: ArchiveCategory;
  type: "document" | "oral-history" | "building" | "milestone" | "publication";
  excerpt: string;
  body: string[];
  sources: { label: string; url: string }[];
};

export type AthleticHighlight = {
  year: number;
  sport: string;
  title: string;
  detail: string;
};
