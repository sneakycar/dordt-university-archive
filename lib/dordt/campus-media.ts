import type { Biography, CampusExpansion, CampusPhoto } from "./types";

/** Campus imagery — Wikimedia Commons (CC); historical aerial via Esri Wayback on /campus. */
export const CONTEMPORARY_CAMPUS_PHOTOS: CampusPhoto[] = [
  {
    id: "campus-quadrangle-2016",
    title: "Campus quadrangle",
    year: 2016,
    kind: "contemporary",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Day_89._Dordt_College._%2825854050360%29.jpg/960px-Day_89._Dordt_College._%2825854050360%29.jpg",
    alt: "Wide view of Dordt University buildings and lawn",
    caption:
      "Documentary photograph of the present campus (2016). For mid-century postcard views, see primary sources on this page and the Wayback aerial timeline above.",
    credit: "David Mulder / Wikimedia Commons",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Day_89._Dordt_College._(25854050360).jpg",
    license: "CC BY-SA 2.0",
  },
  {
    id: "campus-center-2014",
    title: "Campus Center & Clock Tower",
    year: 2014,
    kind: "contemporary",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Dordt_University_Campus.jpg/1280px-Dordt_University_Campus.jpg",
    alt: "Dordt University Campus Center and clock tower at dusk",
    caption:
      "The 2002 Campus Center became the hub of student life; the clock tower frames the north approach described in recent construction news.",
    credit: "David Mulder",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Dordt_University_Campus.jpg",
    license: "CC BY-SA 2.0",
  },
  {
    id: "clock-tower",
    title: "Clock Tower",
    year: 2016,
    kind: "contemporary",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Day_203._Clock_tower._%2819753403620%29.jpg/960px-Day_203._Clock_tower._%2819753403620%29.jpg",
    alt: "Dordt University clock tower against sky",
    caption:
      "The clock tower appears in university news coverage of the new dining commons, which frames the tower from the north.",
    credit: "David Mulder",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Day_203._Clock_tower._(19753403620).jpg",
    license: "CC BY-SA 2.0",
  },
  {
    id: "library-stacks",
    title: "Hulst Library stacks",
    year: 2018,
    kind: "contemporary",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/250._Through_the_Stacks._%2842725114750%29.jpg/960px-250._Through_the_Stacks._%2842725114750%29.jpg",
    alt: "Interior view through library book stacks",
    caption:
      "John & Louise Hulst Library holds university archives, the Dutch Memorial Collection, and more than 300,000 volumes.",
    credit: "David Mulder",
    creditUrl: "https://commons.wikimedia.org/wiki/File:250._Through_the_Stacks._(42725114750).jpg",
    license: "CC BY-SA 2.0",
  },
  {
    id: "prairie-campus",
    title: "Prairie edge of campus",
    year: 2016,
    kind: "aerial",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Day_266._Prairie_life._%2829790769201%29.jpg/960px-Day_266._Prairie_life._%2829790769201%29.jpg",
    alt: "Prairie grass in foreground with campus buildings distant",
    caption:
      "Northwest Iowa prairie surrounds the 115-acre campus—context for Kuyper Apartments’ prairie-view apartments and the south-campus housing corridor.",
    credit: "David Mulder",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Day_266._Prairie_life._(29790769201).jpg",
    license: "CC BY-SA 2.0",
  },
];

/** @deprecated Use CONTEMPORARY_CAMPUS_PHOTOS — kept for home strip */
export const CAMPUS_PHOTOS = CONTEMPORARY_CAMPUS_PHOTOS;

export const CAMPUS_EXPANSIONS: CampusExpansion[] = [
  {
    id: "founding-site",
    year: 1954,
    title: "Sioux Center site secured",
    summary:
      "Trustees select Sioux Center; early campus described as a four-classroom building on a former mink farm amid crop fields (~40 acres in period postcards).",
    zone: "core",
    certainty: "confirmed",
  },
  {
    id: "dewitt",
    year: 1968,
    title: "DeWitt Gymnasium",
    summary: "Athletics gains a permanent home; additions follow in 1979 and 2005.",
    zone: "core",
    certainty: "confirmed",
  },
  {
    id: "east-campus",
    year: 1960,
    yearEnd: 1969,
    title: "East Campus apartments (temporary housing)",
    summary:
      "Apartment-style units north of core campus; The Diamond notes they have been called “temporary” for decades, with a major renovation in 2011.",
    zone: "east",
    certainty: "approximate",
  },
  {
    id: "haan-auditorium",
    year: 1979,
    title: "B.J. Haan Auditorium",
    summary: "1,500-seat worship and arts venue; Casavant organ installed.",
    zone: "core",
    certainty: "confirmed",
  },
  {
    id: "rec-center",
    year: 1997,
    title: "Campus Recreation Center",
    summary: "HPER and athletics offices; renovated 2022.",
    zone: "core",
    certainty: "confirmed",
  },
  {
    id: "covenant",
    year: 1998,
    title: "Covenant Hall",
    summary: "Women’s residence hall on east campus (~240 residents); basement wing expanded 2022.",
    zone: "east",
    certainty: "confirmed",
  },
  {
    id: "hall-remodels",
    year: 2000,
    title: "North & East Hall remodels",
    summary: "Major updates to traditional residence halls documented in housing materials.",
    zone: "core",
    certainty: "confirmed",
  },
  {
    id: "campus-center",
    year: 2002,
    title: "Campus Center",
    summary: "$12.5M, 70,000 sq. ft. student-life hub opens.",
    zone: "core",
    certainty: "confirmed",
  },
  {
    id: "all-seasons",
    year: 2004,
    title: "All Seasons Center (city partnership)",
    summary: "$9M shared aquatic and hockey complex with Sioux Center.",
    zone: "community",
    certainty: "confirmed",
  },
  {
    id: "southview",
    year: 1990,
    yearEnd: 2009,
    title: "Southview Apartments",
    summary:
      "Three-story brick upperclass apartments (28 six-person units) on the south campus corridor. Dordt’s public web pages do not list an opening year—verify in Hulst Library archives; housing pages document Southview as established before Kuyper (2010) and The Squares (2023).",
    zone: "south",
    certainty: "archival-gap",
  },
  {
    id: "kuyper",
    year: 2010,
    title: "Kuyper Apartments",
    summary:
      "$12M, 64,000 sq. ft., geothermal upperclass housing—34 six-person apartments; expands south-campus capacity.",
    zone: "south",
    certainty: "confirmed",
  },
  {
    id: "science-skywalk",
    year: 2017,
    title: "Science Center skywalk",
    summary: "Links Science & Technology Center to Campus Center.",
    zone: "core",
    certainty: "confirmed",
  },
  {
    id: "nursing-zylstra",
    year: 2019,
    title: "Zylstra Nursing Education Center",
    summary: "Simulation labs and nursing expansion within Ribbens Academic Complex.",
    zone: "core",
    certainty: "confirmed",
  },
  {
    id: "squares",
    year: 2023,
    title: "The Squares (Every Square Inch Apartments)",
    summary:
      "Four buildings south of Southview add 96 beds; name honors Kuyper’s “every square inch” Christ-centered vision.",
    zone: "south",
    certainty: "confirmed",
  },
  {
    id: "dining-recital",
    year: 2025,
    title: "Dining commons & recital hall",
    summary:
      "Major Planting for the Future projects: new dining commons with prairie views, hybrid recital hall, athletic center upgrades.",
    zone: "core",
    certainty: "confirmed",
  },
];

export const BIOGRAPHIES: Biography[] = [
  {
    id: "haan",
    name: "Rev. B.J. Haan",
    dates: "1917–2000 (president 1957–1982)",
    roles: ["First president", "Founding promoter", "Pastor, Sioux Center CRC"],
    snippet:
      "From 1947 he championed a Reformed college in northwest Iowa; enrollment grew from under 100 to 1,200 under his leadership.",
    detail: [
      "Served as acting president while pastoring First CRC in Sioux Center (1957–1963), then full-time president.",
      "Authored “Scripturally Oriented Higher Education,” shaping Dordt’s core curriculum and professional programs.",
      "Oral histories recorded by KDCR in the 1980s are preserved in the university archives.",
    ],
    relatedArtifactId: "haan-presidency",
    portraitUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Day_89._Dordt_College._%2825854050360%29.jpg/320px-Day_89._Dordt_College._%2825854050360%29.jpg",
  },
  {
    id: "hulst",
    name: "Dr. John B. Hulst",
    dates: "1924–2014 (president 1982–1996)",
    roles: ["Second president", "Dean of students", "Founding-era leader"],
    snippet:
      "Present at the 1955 groundbreaking; later dean (1968) and president who adopted The Educational Task.",
    detail: [
      "Led strategic plan Renewing the Vision and six major building projects.",
      "Launched the Master of Education program and promoted Christian higher education through IAPCHE and CCCU.",
      "Hulst Library bears his name; memoirs published as A Doorkeeper in God’s Household.",
    ],
    relatedArtifactId: "hulst-dean",
  },
  {
    id: "zylstra",
    name: "Dr. Carl E. Zylstra",
    dates: "b. 1944 (president 1996–2012)",
    roles: ["Third president", "CRC pastor", "Trustee before presidency"],
    snippet:
      "First non-founder president; built Campus Center, new residence halls, and programs from nursing to construction management.",
    detail: [
      "Described Dordt education as holistic “24/7” formation in class and community life.",
      "Added football, Kuyper Honors Program, and multiple professional majors.",
      "Zylstra Nursing Education Center (2019) carries the family name.",
    ],
    relatedArtifactId: "zylstra-era",
  },
  {
    id: "hoekstra",
    name: "Dr. Erik Hoekstra",
    dates: "president since 2012",
    roles: ["Fourth president", "University transition leader"],
    snippet:
      "Guided Dordt College to Dordt University (2019) and expanded graduate, online, and global enrollment.",
    detail: [
      "Championed mission clarity and external research funding cited in the university initiative.",
      "Oversaw south-campus housing expansion (Squares, dining commons) and athletics growth.",
    ],
    relatedArtifactId: "hoekstra-presidency",
  },
  {
    id: "founding-steering",
    name: "Founding steering committee",
    dates: "1951–1955",
    roles: ["Christian Reformed leaders", "Iowa · South Dakota · Minnesota"],
    snippet:
      "Church leaders from three states established Midwest Christian Junior College to train Christian school teachers.",
    detail: [
      "Sioux Center selected as permanent site in March 1954 (Sioux Center News).",
      "First classes September 1955 with five faculty and roughly 35–40 students.",
    ],
    relatedArtifactId: "founding-charter",
  },
  {
    id: "kuyper-theologian",
    name: "Abraham Kuyper (referenced)",
    dates: "1837–1920",
    roles: ["Dutch Reformed theologian", "Namesake of Kuyper Apartments & honors program"],
    snippet:
      "The 2023 “Every Square Inch Apartments” name echoes Kuyper’s 1880 claim that Christ claims sovereignty over every sphere of life.",
    detail: [
      "Dordt’s Reformed vision applies Kuyperian “sphere sovereignty” to engineering, agriculture, nursing, and the arts.",
      "Kuyper Scholars / Kuyper Honors Program formalize academic excellence in this tradition.",
    ],
  },
];

export const OSM_EMBED = {
  lat: 43.0833,
  lon: -96.1671,
  bbox: "-96.180,43.075,-96.154,43.091",
  markerLabel: "Dordt University",
} as const;
