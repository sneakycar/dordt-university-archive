import type {
  Artifact,
  AthleticHighlight,
  CampusPlace,
  Collection,
  President,
  TimelineEvent,
} from "./types";

export const SITE = {
  title: "Dordt University Digital Archive",
  subtitle:
    "Historical archives and studio works — a curatorial reading room for university history and the arts",
  motto: "Soli Deo Gloria",
  mottoEn: "Glory to God alone",
  location: "Sioux Center, Iowa",
  established: 1955,
  colors: {
    gold: "#FDB71A",
    goldDark: "#E5A008",
    black: "#000000",
    ink: "#1a1a1a",
    cream: "#FAFAF8",
  },
} as const;

export const NAV = [
  { href: "/", label: "Exhibit Hall" },
  { href: "/studio", label: "Studio & Arts" },
  { href: "/timeline", label: "Timeline" },
  { href: "/presidents", label: "Presidents" },
  { href: "/campus", label: "Campus" },
  { href: "/people", label: "People" },
  { href: "/athletics", label: "Athletics" },
  { href: "/mission", label: "Mission" },
  { href: "/synod", label: "Synod of Dordt" },
  { href: "/collections", label: "Collections" },
  { href: "/archives", label: "Archives Today" },
] as const;

export const STATS = [
  { label: "Founded", value: "1955" },
  { label: "Campus", value: "115 acres" },
  { label: "Programs", value: "90+" },
  { label: "Students", value: "~2,000" },
  { label: "Countries represented", value: "26+" },
  { label: "Motto", value: "Soli Deo Gloria" },
] as const;

export const TIMELINE: TimelineEvent[] = [
  {
    year: 1618,
    title: "Synod of Dordrecht",
    summary:
      "Reformed churches meet in the Netherlands. The name “Dordt” later honors this heritage of confessional faithfulness.",
    era: "vision",
    category: "faith",
    artifactId: "synod-of-dordt",
  },
  {
    year: 1947,
    title: "Vision for a Christian college",
    summary:
      "Rev. B.J. Haan begins working with others to explore founding a Reformed Christian college in northwest Iowa.",
    era: "vision",
    category: "founding",
    artifactId: "haan-vision-1947",
  },
  {
    year: 1951,
    title: "Steering committee forms",
    summary:
      "Leaders from Christian Reformed churches in Iowa, South Dakota, and Minnesota organize to establish a college.",
    era: "vision",
    category: "founding",
  },
  {
    year: 1953,
    title: "Midwest Christian Junior College chartered",
    summary:
      "The institution is founded to address a shortage of qualified Christian school teachers in the region.",
    era: "founding",
    category: "founding",
    artifactId: "founding-charter",
  },
  {
    year: 1954,
    month: "March",
    title: "Sioux Center site selected",
    summary:
      "The Sioux Center News reports the final selection of the college site in Sioux Center, Iowa.",
    era: "founding",
    category: "community",
    artifactId: "sioux-center-site",
  },
  {
    year: 1955,
    month: "September",
    title: "Doors open on a former mink farm",
    summary:
      "First classes begin with about 35–40 students, five faculty, and a new four-classroom building amid crop fields.",
    era: "founding",
    category: "founding",
    artifactId: "opening-day-1955",
  },
  {
    year: 1956,
    month: "April",
    title: "Renamed Dordt College",
    summary:
      "Trustees adopt the name Dordt to honor the Synod of Dordt and express the school’s Reformed identity.",
    era: "founding",
    category: "faith",
    artifactId: "name-change-1956",
  },
  {
    year: 1957,
    title: "First graduating class",
    summary: "Eighteen students complete the college’s first commencement exercises.",
    era: "founding",
    category: "academics",
    artifactId: "first-graduates-1957",
  },
  {
    year: 1957,
    title: "B.J. Haan appointed acting president",
    summary:
      "Rev. Haan leads the young institution while also serving as pastor in Sioux Center until 1963.",
    era: "founding",
    category: "leadership",
    artifactId: "haan-presidency",
  },
  {
    year: 1963,
    title: "Haan becomes full-time president",
    summary: "Enrollment and programs expand as Dordt moves toward comprehensive Christian higher education.",
    era: "growth",
    category: "leadership",
  },
  {
    year: 1965,
    title: "First Bachelor of Arts degrees",
    summary: "Fifty-eight students receive the institution’s first four-year B.A. diplomas.",
    era: "growth",
    category: "academics",
    artifactId: "first-ba-1965",
  },
  {
    year: 1968,
    title: "DeWitt Gymnasium opens",
    summary:
      "Athletics gains a dedicated home; the gym later becomes known as a challenging venue for visiting teams.",
    era: "growth",
    category: "athletics",
    artifactId: "dewitt-gym",
  },
  {
    year: 1968,
    title: "John B. Hulst joins as dean of students",
    summary:
      "A founder-adjacent leader who will later guide the college as president begins decades of service.",
    era: "growth",
    category: "leadership",
    artifactId: "hulst-dean",
  },
  {
    year: 1979,
    title: "B.J. Haan Auditorium dedicated",
    summary:
      "The 1,500-seat auditorium and its Casavant pipe organ become the campus center for worship and the arts.",
    era: "growth",
    category: "campus",
    artifactId: "bj-haan-auditorium",
  },
  {
    year: 1982,
    title: "Haan retires; Hulst inaugurated",
    summary:
      "After 26 years, Haan steps down. Dr. John B. Hulst becomes president and deepens curricular integration.",
    era: "growth",
    category: "leadership",
  },
  {
    year: 1996,
    title: "Zylstra becomes third president",
    summary:
      "Dr. Carl E. Zylstra leads campus expansion, new programs, and the Campus Center era.",
    era: "expansion",
    category: "leadership",
    artifactId: "zylstra-era",
  },
  {
    year: 1997,
    title: "Campus Recreation Center opens",
    summary: "HPER and athletics offices consolidate in a major recreation facility.",
    era: "expansion",
    category: "campus",
  },
  {
    year: 2000,
    title: "Joins Great Plains Athletic Conference",
    summary: "Dordt competes in the NAIA’s GPAC, anchoring its athletic identity as the Defenders.",
    era: "expansion",
    category: "athletics",
  },
  {
    year: 2002,
    title: "Campus Center completed",
    summary:
      "A $12.5 million, 70,000-square-foot hub opens—dining, bookstore, classrooms, and student life under one roof.",
    era: "expansion",
    category: "campus",
    artifactId: "campus-center",
  },
  {
    year: 2004,
    title: "All Seasons Center partnership",
    summary:
      "Dordt and the city of Sioux Center share a $9 million aquatic and hockey complex.",
    era: "expansion",
    category: "community",
    artifactId: "all-seasons-center",
  },
  {
    year: 1998,
    title: "Covenant Hall opens",
    summary: "East-campus women’s residence hall adds capacity for roughly 240 students.",
    era: "expansion",
    category: "campus",
    artifactId: "covenant-hall-1998",
  },
  {
    year: 2000,
    title: "North & East Hall remodeled",
    summary: "Traditional residence halls receive extensive updates documented in housing materials.",
    era: "expansion",
    category: "campus",
  },
  {
    year: 2010,
    title: "Kuyper Apartments dedicated",
    summary:
      "$12 million geothermal upperclass housing—34 six-person apartments on the expanding south campus.",
    era: "university",
    category: "campus",
    artifactId: "kuyper-2010",
  },
  {
    year: 2011,
    title: "East Campus renovated",
    summary:
      "1960s-era East Campus apartments receive renovation; student press still describes them as long-term “temporary” housing.",
    era: "university",
    category: "campus",
    artifactId: "east-campus-apartments",
  },
  {
    year: 2012,
    title: "Erik Hoekstra inaugurated",
    summary:
      "Fourth president champions mission clarity, graduate programs, and the university transition.",
    era: "university",
    category: "leadership",
    artifactId: "hoekstra-presidency",
  },
  {
    year: 2017,
    title: "Science Center skywalk",
    summary: "The Science and Technology Center connects to the Campus Center for integrated learning.",
    era: "university",
    category: "campus",
  },
  {
    year: 2018,
    title: "Board approves university status",
    summary:
      "Trustees announce Dordt will become Dordt University to reflect academic breadth and global reach.",
    era: "university",
    category: "academics",
    artifactId: "university-announcement",
  },
  {
    year: 2019,
    month: "May 13",
    title: "Dordt University",
    summary:
      "Dordt College officially becomes Dordt University—signaling graduate study, online programs, and international students.",
    era: "university",
    category: "academics",
    artifactId: "university-2019",
  },
  {
    year: 2022,
    title: "First NAIA national championship",
    summary:
      "Men’s cross country wins Dordt’s first Red Banner—first national title in any sport.",
    era: "university",
    category: "athletics",
    artifactId: "cross-country-2022",
  },
  {
    year: 2024,
    title: "Women’s basketball national champions",
    summary: "Defenders claim the NAIA title; Macy Sievers named Player of the Tournament.",
    era: "university",
    category: "athletics",
    artifactId: "womens-basketball-2024",
  },
  {
    year: 2025,
    title: "Back-to-back basketball titles",
    summary: "Women’s basketball repeats as NAIA national champions.",
    era: "university",
    category: "athletics",
    artifactId: "womens-basketball-2025",
  },
  {
    year: 2023,
    title: "The Squares open south of Southview",
    summary:
      "Every Square Inch Apartments add 96 beds in four buildings, extending the south-campus housing corridor.",
    era: "university",
    category: "campus",
    artifactId: "squares-2023",
  },
];

export const PRESIDENTS: President[] = [
  {
    id: "haan",
    name: "Rev. B.J. Haan",
    title: "First President",
    years: "1957–1982",
    tenureStart: 1957,
    tenureEnd: 1982,
    summary:
      "Founding-era leader who grew enrollment from under 100 to 1,200 and articulated Scripturally Oriented Higher Education.",
    highlights: [
      "Explored founding a Christian college as early as 1947",
      "Served simultaneously as Sioux Center CRC pastor and acting president, 1957–1963",
      "Introduced programs in business, agriculture, engineering, and computer science",
      "Retired in 1982 after shaping Dordt’s Reformed educational vision",
    ],
  },
  {
    id: "hulst",
    name: "Dr. John B. Hulst",
    title: "Second President",
    years: "1982–1996",
    tenureStart: 1982,
    tenureEnd: 1996,
    summary:
      "Dean-turned-president who adopted The Educational Task and expanded Christian scholarship across the curriculum.",
    highlights: [
      "Present at groundbreaking; later dean of students (1968)",
      "Led strategic plan Renewing the Vision",
      "Master of Education program launched; six new buildings added",
      "Promoted Christian higher education through IAPCHE and CCCU",
    ],
  },
  {
    id: "zylstra",
    name: "Dr. Carl E. Zylstra",
    title: "Third President",
    years: "1996–2012",
    tenureStart: 1996,
    tenureEnd: 2012,
    summary:
      "First non-founder president who matured facilities, faculty, and programs including nursing and the Campus Center.",
    highlights: [
      "Added football, Kuyper Honors Program, and multiple new majors",
      "Built Campus Center and new residence halls",
      "Described Dordt education as holistic “24/7” formation",
      "Advocated for Christian higher education nationally",
    ],
  },
  {
    id: "hoekstra",
    name: "Dr. Erik Hoekstra",
    title: "Fourth President",
    years: "2012–present",
    tenureStart: 2012,
    summary:
      "Guides Dordt through university transition, graduate expansion, and continued mission-centered renewal.",
    highlights: [
      "Championed 2019 transition to Dordt University",
      "Expanded online, graduate, and professional-technical offerings",
      "Faculty secured $6.5M+ in NSF and external research grants (per university initiative)",
      "Continues commitment to Reformed Christian perspective in all programs",
    ],
  },
];

export const CAMPUS_PLACES: CampusPlace[] = [
  {
    id: "campus-center",
    name: "Campus Center",
    year: "2002",
    type: "recreation",
    description:
      "70,000 sq. ft. hub with dining, bookstore, gallery, classrooms, bowling alley, and Campus Health—open continuously during the academic year.",
  },
  {
    id: "hulst-library",
    name: "John & Louise Hulst Library",
    type: "library",
    description:
      "300,000+ volumes, periodicals, media checkout, Learning Resource Center, the Dordt University Archives, and the Dutch Memorial Collection.",
  },
  {
    id: "science-center",
    name: "Science & Technology Center",
    type: "academic",
    description:
      "Labs for chemistry, physics, engineering, agriculture, and computer-aided design; connected to Campus Center via 2017 skywalk.",
  },
  {
    id: "bj-haan",
    name: "B.J. Haan Auditorium (“the Beej”)",
    year: "1979",
    type: "worship",
    description:
      "1,500-seat venue for chapel, concerts, and commencement; houses a 3-manual Casavant organ with 2,833 pipes.",
  },
  {
    id: "dewitt",
    name: "DeWitt Gymnasium",
    year: "1968",
    type: "recreation",
    description:
      "Home of Defenders basketball and volleyball; known for close fans and a low wood ceiling that favors the home team.",
  },
  {
    id: "rec-center",
    name: "Campus Recreation Center",
    year: "1997",
    type: "recreation",
    description:
      "Indoor track, courts, weight room, and athletics offices; renovated 2022; connected to DeWitt Gym.",
  },
  {
    id: "all-seasons",
    name: "All Seasons Center",
    year: "2004",
    type: "recreation",
    description:
      "Shared with the city of Sioux Center: NHL-sized hockey rink, pools, and waterslides—home to Defender ice hockey.",
  },
  {
    id: "original-classrooms",
    name: "Original Classroom Building",
    year: "1955",
    type: "academic",
    description:
      "Four-classroom structure on a former mink farm—first permanent academic space when Midwest Christian Junior College opened.",
  },
  {
    id: "covenant-hall",
    name: "Covenant Hall",
    year: "1998",
    type: "residential",
    description:
      "East-campus women’s hall (~240 residents); 2022 basement wing added 16 bedrooms and renovated common spaces.",
  },
  {
    id: "southview",
    name: "Southview Apartments",
    yearNote: "Opening year: see archives",
    type: "residential",
    description:
      "28 six-person upperclass apartments on the south corridor; air-conditioned with elevator, lounges, and computer lab.",
  },
  {
    id: "kuyper",
    name: "Kuyper Apartments",
    year: "2010",
    type: "residential",
    description:
      "$12M geothermal upperclass housing—34 apartments, fireplace commons, and 55th Avenue coffee shop.",
  },
  {
    id: "squares",
    name: "The Squares (Every Square Inch Apartments)",
    year: "2023",
    type: "residential",
    description:
      "Four buildings immediately south of Southview; 96 additional beds in two-story six-person suites.",
  },
  {
    id: "east-campus",
    name: "East Campus Apartments",
    yearNote: "c. 1960s · renovated 2011",
    type: "residential",
    description:
      "North-of-campus apartments long described as “temporary”; renovated 2011 but lacking amenities of Southview/Kuyper.",
  },
];

export const COLLECTIONS: Collection[] = [
  {
    id: "founding-era",
    title: "Founding Era, 1947–1965",
    subtitle: "From vision to four-year college",
    description:
      "Steering committees, Sioux Center headlines, opening day on the mink farm, and the first B.A. graduates.",
    itemCount: 8,
    categories: ["founding", "community"],
  },
  {
    id: "presidential-oral-histories",
    title: "Presidential Leadership",
    subtitle: "Four presidents, one mission",
    description:
      "Biographical exhibits on Haan, Hulst, Zylstra, and Hoekstra—with ties to oral histories in the official archives.",
    itemCount: 4,
    categories: ["leadership"],
  },
  {
    id: "built-environment",
    title: "Campus & Architecture",
    subtitle: "115 acres in northwest Iowa",
    description:
      "From a four-room building to the Campus Center, library archives, auditorium organ, and community partnerships.",
    itemCount: 14,
    categories: ["campus"],
  },
  {
    id: "campus-photographs",
    title: "Campus Photographs & Maps",
    subtitle: "Historic views, prairie context, satellite",
    description:
      "Wikimedia Commons imagery, vintage postcard references, and OpenStreetMap context for Sioux Center.",
    itemCount: 6,
    categories: ["campus"],
  },
  {
    id: "defenders-athletics",
    title: "Defenders Athletics",
    subtitle: "NAIA, GPAC, and national titles",
    description:
      "Cross country’s first Red Banner, basketball records, and the All Seasons Center hockey partnership.",
    itemCount: 6,
    categories: ["athletics"],
  },
  {
    id: "reformed-identity",
    title: "Reformed Identity & Mission",
    subtitle: "Synod, scripture, and renewal",
    description:
      "The Synod of Dordt, Scripturally Oriented Higher Education, The Educational Task, and Christ-centered renewal.",
    itemCount: 5,
    categories: ["faith", "academics"],
  },
];

export const ATHLETICS: AthleticHighlight[] = [
  {
    year: 2000,
    sport: "Conference",
    title: "Joins GPAC",
    detail: "Defenders compete in the Great Plains Athletic Conference (NAIA).",
  },
  {
    year: 2014,
    sport: "Men's Basketball",
    title: "NAIA tournament scoring record",
    detail: "Defenders set a record for combined points in an NAIA national tournament game.",
  },
  {
    year: 2022,
    sport: "Men's Cross Country",
    title: "First national championship",
    detail: "Dordt wins its first NAIA Red Banner in any sport (score: 97 points).",
  },
  {
    year: 2024,
    sport: "Women's Basketball",
    title: "National champions",
    detail: "Defeat University of Providence 57–53; Macy Sievers Player of the Tournament.",
  },
  {
    year: 2025,
    sport: "Women's Basketball",
    title: "Repeat champions",
    detail: "Defeat Indiana Wesleyan 82–73; Sievers again named Player of the Tournament.",
  },
];

export const ARTIFACTS: Artifact[] = [
  {
    id: "synod-of-dordt",
    title: "The Synod of Dordt (1618–1619)",
    year: 1618,
    category: "faith",
    type: "milestone",
    excerpt:
      "A historic Reformed synod in Dordrecht, Netherlands—remembered in the college name chosen in 1956.",
    body: [
      "When trustees renamed Midwest Christian Junior College in April 1956, they chose “Dordt” to honor the Synod of Dordrecht (1618–1619), a gathering that affirmed Reformed confessions and the sovereignty of God’s grace.",
      "College leaders explained that the name would remind the community of its heritage and signal what the institution stood for: faithfulness to Scripture in every discipline.",
    ],
    sources: [
      { label: "Dordt University — College History", url: "https://www.dordt.edu/about-dordt/college-history" },
      { label: "Wikipedia — Dordt University", url: "https://en.wikipedia.org/wiki/Dordt_University" },
    ],
  },
  {
    id: "founding-charter",
    title: "Midwest Christian Junior College",
    year: 1953,
    category: "founding",
    type: "document",
    excerpt: "Founded to train Christian school teachers when qualified educators were scarce in the region.",
    body: [
      "In 1953, leaders from Christian Reformed churches in Iowa, South Dakota, and Minnesota established a junior college in Sioux Center. The institution addressed a practical need: more teachers for Christian elementary and secondary schools.",
      "The college was first known as Midwest Christian Junior College before adopting the Dordt name in 1956.",
    ],
    sources: [
      { label: "Dordt University — College History", url: "https://www.dordt.edu/about-dordt/college-history" },
    ],
  },
  {
    id: "opening-day-1955",
    title: "Opening Day, Fall 1955",
    year: 1955,
    category: "founding",
    type: "milestone",
    excerpt: "Thirty-five students, five faculty, and a four-classroom building on a former mink farm.",
    body: [
      "Dordt’s official history describes opening day with 35 enrolled students and five faculty members. Contemporary accounts and Wikipedia cite roughly 40 students in the first class.",
      "The campus consisted of a new four-classroom building on property that had been a mink farm, surrounded by crop fields—a humble beginning for an institution that would grow to more than 1,200 students within two decades.",
    ],
    sources: [
      { label: "Dordt University — College History", url: "https://www.dordt.edu/about-dordt/college-history" },
      { label: "Sioux Center News, Sept. 1955 (via Wikipedia)", url: "https://en.wikipedia.org/wiki/Dordt_University" },
    ],
  },
  {
    id: "name-change-1956",
    title: "Renamed Dordt College",
    year: 1956,
    category: "faith",
    type: "document",
    excerpt:
      "“The name Dordt will constantly remind us of the heritage in which we are rooted…” — Sioux Center News, 1956",
    body: [
      "In April 1956, the institution became Dordt College. Leaders told the Sioux Center News that the name would inspire continued faithfulness and communicate the college’s identity worldwide.",
      "The Spirit of Dordt—seeking God’s glory in all thinking—became shorthand for the institution’s educational aims.",
    ],
    sources: [
      { label: "The Dordt Diamond, 2012", url: "https://dordtdiamond.com/2012/04/19/is-dordt-losing-sight-of-its-reformed-vision/" },
    ],
  },
  {
    id: "first-graduates-1957",
    title: "First Commencement Class",
    year: 1957,
    category: "academics",
    type: "milestone",
    excerpt: "Eighteen graduates in the institution’s first commencement.",
    body: [
      "The Sioux Center News documented Dordt’s first graduating class in May 1957—eighteen students who completed the junior college program.",
      "Eight years later, the first Bachelor of Arts degrees would mark the transition to a four-year college.",
    ],
    sources: [
      { label: "Wikipedia — Dordt University", url: "https://en.wikipedia.org/wiki/Dordt_University" },
    ],
  },
  {
    id: "first-ba-1965",
    title: "First Bachelor of Arts Degrees",
    year: 1965,
    category: "academics",
    type: "milestone",
    excerpt: "Fifty-eight graduates receive Dordt’s first four-year diplomas.",
    body: [
      "Dordt’s history marks 1965 as the year the first B.A. degrees were awarded—to a class of 58 graduates.",
      "Enrollment continued climbing through the 1960s and 1970s, surpassing 1,200 as programs diversified beyond teacher education.",
    ],
    sources: [
      { label: "Dordt University — College History", url: "https://www.dordt.edu/about-dordt/college-history" },
    ],
  },
  {
    id: "haan-presidency",
    title: "Rev. B.J. Haan’s Presidency",
    year: 1957,
    category: "leadership",
    type: "oral-history",
    excerpt:
      "Twenty-six years of leadership; enrollment grew from under 100 to 1,200. Oral histories preserved in the university archives.",
    body: [
      "Haan’s association with the college began before his presidency—exploring the idea in 1947 and joining the 1951 steering committee.",
      "His educational statement “Scripturally Oriented Higher Education” shaped a core curriculum and new professional programs. The Dordt University Archives holds KDCR oral history recordings from the 1980s, digitized for public access.",
    ],
    sources: [
      { label: "Former Presidents — Dordt", url: "https://www.dordt.edu/about-dordt/offices-and-services/presidents-office/former-presidents" },
      { label: "Oral History of B.J. Haan", url: "https://digitalcollections.dordt.edu/oral_history_haan/" },
    ],
  },
  {
    id: "campus-center",
    title: "Campus Center (2002)",
    year: 2002,
    category: "campus",
    type: "building",
    excerpt: "$12.5 million, 70,000 square feet—the modern heart of student life.",
    body: [
      "The Campus Center consolidated dining, retail, meeting spaces, technology classrooms, and recreation under one roof.",
      "It remains the hub Dordt students pass through daily—symbol of the institution’s growth from four classrooms on a farm.",
    ],
    sources: [
      { label: "Dordt Campus Center", url: "https://www.dordt.edu/campus/campus_center/" },
    ],
  },
  {
    id: "bj-haan-auditorium",
    title: "B.J. Haan Auditorium",
    year: 1979,
    category: "campus",
    type: "building",
    excerpt: "Chapel, concerts, and one of the Midwest’s notable Casavant pipe organs.",
    body: [
      "Students nicknamed it “the Beej.” The auditorium seats approximately 1,500 and hosts convocation, commencement, and regional events.",
      "The Casavant Frères organ (1978, Opus 3360) features 37 stops and 2,833 pipes—an instrument befitting Dordt’s strong music program.",
    ],
    sources: [
      { label: "B.J. Haan Auditorium — Dordt", url: "https://www.dordt.edu/about-dordt/campus-map/rooms/b-j-haan-auditorium" },
    ],
  },
  {
    id: "university-2019",
    title: "Dordt University (May 13, 2019)",
    year: 2019,
    category: "academics",
    type: "milestone",
    excerpt:
      "College becomes university to reflect graduate programs, online study, and students from 26+ countries.",
    body: [
      "President Erik Hoekstra and the Board of Trustees concluded that “Dordt University” best described an institution offering associate, bachelor’s, master’s, and online credentials.",
      "The change removed confusion for international students—in many countries “college” means secondary school—and aligned with how graduate students search for programs.",
    ],
    sources: [
      { label: "Mission, Vision, & History", url: "https://www.dordt.edu/about-dordt/college-history" },
      { label: "Dordt Now Officially Dordt University", url: "https://www.dordt.edu/news/45952" },
    ],
  },
  {
    id: "cross-country-2022",
    title: "2022 NAIA Cross Country Championship",
    year: 2022,
    category: "athletics",
    type: "milestone",
    excerpt: "First national championship in any sport for the Defenders.",
    body: [
      "The men’s cross country team won the 2022 NAIA national title with 97 points—the first Red Banner in Dordt athletics history.",
      "The victory marked a high point for the Defenders in the GPAC era.",
    ],
    sources: [
      { label: "NAIA — 2022 Cross Country", url: "https://www.naia.org/sports/mxc/2022-23/Releases/Championship" },
    ],
  },
  {
    id: "womens-basketball-2024",
    title: "2024 NAIA Women’s Basketball Champions",
    year: 2024,
    category: "athletics",
    type: "milestone",
    excerpt: "Defenders 57, Providence 53. Macy Sievers, Player of the Tournament.",
    body: [
      "The women’s basketball program claimed its first national title in 2024, followed by a successful defense in 2025.",
      "Sievers earned tournament MVP honors both years—cementing a dynasty in Defender athletics.",
    ],
    sources: [
      { label: "godordt.com — 2025 champions", url: "https://godordt.com/news/2025/3/26/womens-basketball-champions-defenders-repeat-as-naia-national-champs.aspx" },
    ],
  },
  {
    id: "kuyper-2010",
    title: "Kuyper Apartments (2010)",
    year: 2010,
    category: "campus",
    type: "building",
    excerpt: "Geothermal upperclass housing—$12M, 64,000 sq. ft., 34 six-person apartments.",
    body: [
      "Kuyper Apartments opened in fall 2010 with more than 190 first residents. Angelini & Associates designed the hall with geothermal heating and cooling (90 wells), prairie views, a two-story fireplace commons, performance stage, and student-run coffee shop.",
      "The project anchored south-campus growth later extended by Southview’s corridor and The Squares (2023).",
    ],
    sources: [
      { label: "PR Newswire — Kuyper opening", url: "https://www.prnewswire.com/news-releases/new-apartment-style-residence-hall-designed-by-angelini--associates-architects-opens-at-dordt-college-in-sioux-center-iowa-102384209.html" },
      { label: "Angelini Architects portfolio", url: "https://angeliniarchitects.com/portfolio-item/kuyper-residence-hall-dordt-college/" },
    ],
  },
  {
    id: "southview-apartments",
    title: "Southview Apartments",
    category: "campus",
    type: "building",
    excerpt:
      "Upperclass six-person apartments on the south campus; opening year not listed in current university web materials.",
    body: [
      "Southview is a three-story brick building with 28 six-person apartments, elevator access, air conditioning, lounges, laundry, and a computer lab—primarily upperclassmen.",
      "Dordt’s published sources do not state when Southview was built. Archival researchers should consult campus planning records in the Hulst Library. Context: housing press compares Southview favorably to 1960s-era East Campus; Kuyper (2010) and The Squares (2023) were built further south along the same corridor.",
    ],
    sources: [
      { label: "Southview Apartments — Dordt", url: "https://www.dordt.edu/about-dordt/campus-map/rooms/southview-apartments" },
      { label: "The Diamond — housing plans 2023", url: "https://dordtdiamond.com/2023/03/03/dordt-unveils-new-housing-and-dining-plans/" },
    ],
  },
  {
    id: "squares-2023",
    title: "The Squares / Every Square Inch Apartments",
    year: 2023,
    category: "campus",
    type: "building",
    excerpt: "Four buildings south of Southview add 96 beds; named via campus-wide contest.",
    body: [
      "Construction began March 2023 and finished for fall semester. Each of four buildings holds four three-bedroom, two-story suites for six students, with in-unit laundry and improved kitchens.",
      "Laura Grasman’s winning name references Abraham Kuyper’s claim that Christ sovereignly rules every square inch of creation.",
    ],
    sources: [
      { label: "Dordt — new apartments 2023", url: "https://www.dordt.edu/news/dordt-university-constructs-new-apartments-this-summer" },
      { label: "The Diamond — housing plans", url: "https://dordtdiamond.com/2023/03/03/dordt-unveils-new-housing-and-dining-plans/" },
    ],
  },
  {
    id: "covenant-hall-1998",
    title: "Covenant Hall (1998)",
    year: 1998,
    category: "campus",
    type: "building",
    excerpt: "East-campus women’s hall for ~240 residents; expanded 2022.",
    body: [
      "Covenant Hall opened in 1998 as a three-story brick residence on the east border of campus with 109 double rooms.",
      "A 2022 wing renovation added basement bedrooms and upgraded lounges and showers.",
    ],
    sources: [
      { label: "Covenant Hall — Dordt", url: "https://www.dordt.edu/about-dordt/campus-map/rooms/covenant-hall" },
      { label: "The Diamond — Covenant wing 2022", url: "https://dordtdiamond.com/2022/10/03/new-covenant-hall-wing-to-increase-housing-space/" },
    ],
  },
  {
    id: "east-campus-apartments",
    title: "East Campus Apartments",
    category: "campus",
    type: "building",
    excerpt: "1960s-era apartments long called “temporary”; renovated 2011.",
    body: [
      "The Diamond reported in 2021 that East Campus had been described as temporary housing for roughly sixty years—dating the complex to the 1960s.",
      "A 2011 renovation removed some amenities (including in-building laundry) but kept apartment-style kitchens. Students pay the same room-and-board as Southview/Kuyper residents while often lacking comparable facilities.",
    ],
    sources: [
      { label: "The Diamond — East Campus is a Scam", url: "https://dordtdiamond.com/2021/02/24/east-campus-is-a-scam/" },
    ],
  },
  {
    id: "archives-today",
    title: "Dordt University Archives",
    category: "community",
    type: "publication",
    excerpt:
      "Official collections in Hulst Library: college records, Dutch Memorial Collection, and digitized oral histories.",
    body: [
      "This digital exhibit is an independent portfolio project inspired by Dordt’s archival mission—it is not affiliated with the university.",
      "Researchers should consult the official Dordt University Archives in the John and Louise Hulst Library for primary sources, finding aids, and digitized collections including presidential oral histories.",
    ],
    sources: [
      { label: "Digital Collections — Dordt", url: "https://digitalcollections.dordt.edu/" },
      { label: "Oral History Collection News", url: "https://www.dordt.edu/news/dordt-library-releases-oral-history-collection" },
    ],
  },
];

export function getArtifact(id: string): Artifact | undefined {
  return ARTIFACTS.find((a) => a.id === id);
}

export function getArtifactsByCategory(category: string): Artifact[] {
  return ARTIFACTS.filter((a) => a.category === category);
}

export function getTimelineByEra(era: string): TimelineEvent[] {
  return TIMELINE.filter((e) => e.era === era);
}

export const ERA_LABELS: Record<string, string> = {
  vision: "Vision & Preparation (1618–1954)",
  founding: "Founding Years (1955–1965)",
  growth: "Growth & Identity (1966–1995)",
  expansion: "Expansion (1996–2011)",
  university: "University Era (2012–present)",
};
