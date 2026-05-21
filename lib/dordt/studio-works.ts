/** Student & faculty works in the arts — portfolio exhibit entries (representative samples). */
export type StudioWork = {
  id: string;
  title: string;
  artist: string;
  role: "Student" | "Faculty" | "Alumni";
  year: number;
  medium: string;
  department: string;
  excerpt: string;
  /** Placeholder palette for work without licensed reproduction */
  accent: string;
};

export const STUDIO_WORKS: StudioWork[] = [
  {
    id: "prairie-nocturne",
    title: "Prairie Nocturne",
    artist: "M. Van Beek",
    role: "Student",
    year: 2024,
    medium: "Oil on linen",
    department: "Art & Design",
    excerpt:
      "Horizon line and farm light read as liturgy—northwest Iowa sky as the dominant formal element.",
    accent: "#3d4a5c",
  },
  {
    id: "covenant-forms",
    title: "Covenant Forms (study)",
    artist: "Prof. J. De Groot",
    role: "Faculty",
    year: 2019,
    medium: "Charcoal, 22 × 30 in.",
    department: "Art & Design",
    excerpt:
      "Figure studies from a sabbatical series on embodiment and Reformed anthropology in studio practice.",
    accent: "#5c4a42",
  },
  {
    id: "defenders-motion",
    title: "Defenders / Motion Suite",
    artist: "Digital Media Capstone",
    role: "Student",
    year: 2025,
    medium: "Short film stills",
    department: "Digital Media",
    excerpt:
      "Documentary fragments from athletics and campus life—edited for rhythm rather than highlight reel.",
    accent: "#2a2a2a",
  },
  {
    id: "hymn-settings",
    title: "Four Hymn Settings",
    artist: "Dordt Music Faculty",
    role: "Faculty",
    year: 2022,
    medium: "Recorded performance",
    department: "Music",
    excerpt:
      "Choral and organ arrangements of Genevan psalm tunes, recorded in the B.J. Haan Auditorium.",
    accent: "#6b5b4f",
  },
  {
    id: "southview-sketchbook",
    title: "Southview Sketchbook",
    artist: "Architecture Studio III",
    role: "Student",
    year: 2023,
    medium: "Ink and wash",
    department: "Engineering",
    excerpt:
      "Measured drawings of the south-campus housing corridor before The Squares construction.",
    accent: "#4a5568",
  },
  {
    id: "dutch-memorial-folio",
    title: "Dutch Memorial Folio",
    artist: "Hulst Library Collaboration",
    role: "Faculty",
    year: 2021,
    medium: "Letterpress portfolio",
    department: "Library / Art",
    excerpt:
      "Typographic response to materials in the Dutch Memorial Collection—student plates paired with archivist notes.",
    accent: "#8a7340",
  },
];
