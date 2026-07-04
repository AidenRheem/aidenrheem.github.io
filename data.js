/* ============================================================
   CONTENT — edit this file to update the site.
   Everything on the page is rendered from the CV object below.
   To add/remove items: edit, duplicate, or delete entries in
   the arrays. Save and refresh the browser.

   Inline formatting (works in bio, news text, publication
   title/authors/venue, and any entry title/sub/detail — i.e.
   the prose fields, not short labels like name/year/links):
     **bold**           → bold
     *italic*           → italic
     __underline__      → underline
     [label](https://…) → inline link

   Literal asterisks/underscores won't trigger formatting unless
   they wrap text. Use "\n" inside a detail string for a line break.
   ============================================================ */

window.CV = {
  /* ---- Header ---- */
  name: "Aiden Rheem",
  role: "BS in Environmental Science",
  affiliation: "University of California, Berkeley",
  // Character(s) between role and affiliation in the hero. Common choices:
  //   "·"  middle dot       "•"  bullet          "—"  em dash
  //   "–"  en dash          "|"  pipe            ","  comma
  //   "at" word (will be padded with spaces automatically)
  roleSeparator: "@",
  // Browser tab title (shown next to the favicon).
  tabTitle: "Aiden Rheem",
  // Headshot. "auto" looks for assets/photo.{jpg,jpeg,png,webp}.
  // Set to "" to force the stripe placeholder, or to an explicit path
  // (e.g. "assets/my-headshot.png") to override the auto-detect.
  photo: "auto",

  /* ---- About paragraphs ----
     Add as many paragraphs as you want — they'll render in order. */
  bio: [
    "I'm a BS student in Environmental Science at UC Berkeley, interested in connecting sustainability with technology.",
    "During high school, I developed 3D printable patient-specific aortic models for robotic catheders in the [RaMS Lab](https://rams.engr.ucr.edu), and worked on real-time laminar jamming structures for hand tremor stabilization with Dr. Jonathan Realmuto in the [Bionic Systems Lab](https://bsl.engr.ucr.edu).",
  ],

  /* ---- Link row under the name ----
     Order here is the order they appear. Remove or add freely. */
  links: [
    { label: "email", href: "mailto:aidenrheem@berkeley.edu" },
    { label: "linkedin", href: "https://linkedin.com/in/aidenrheem" },
    { label: "scholar", href: "https://scholar.google.com/" },
    { label: "github", href: "https://github.com/aidenrheem" },
    { label: "writing", href: "#writing" },
    { label: "cv", href: "assets/cv.pdf" },
  ],

  /* ---- Writing posts (list view) ----
     Each entry shows up in the "writing" view's post list. The slug must
     match a key in window.POSTS (see posts.js) for the inline view to render.
     Most recent first. Leave as [] to show "Nothing here yet." */
  posts: [
    { slug: "the-pot-of-the-2020s", date: "19 Aug 2025", title: "The “pot” of the (20)20s" },
  ],

  /* ---- News ----
     Most recent first. Leave as [] to hide the whole section. */
  news: [
    { date: "Aug 2026", text: "Started my PhD in CS at Cornell. Many thanks to Jenn and Peter."},
    { date: "Aug 2025", text: "Started my MS in CS at Cornell." },
  ],

  /* ---- Education ---- */
  education: [
    {
      school: "University of California, Berkeley",
      degree: "BS in Environmental Science",
      years: "2026 — Expected 2030",
      detail: "*XXX*\nGPA: X.X",
    },
  ],

  /* ---- Publications ----
     `link` is optional — include it to make the title clickable. */
  publications: [
    {
      title: "XXX",
      authors: "Ziang Liu\\*, __**James J. Kim**__\\*, Yijia Dai, Jennifer J. Sun",
      venue: "*XXX*",
      year: "XXXX"
    },
  ],

  /* ---- Research experience ---- */
  research: [
    {
      role: "Graduate Research Assistant",
      org: "[Sun Lab](https://lab.jenjsun.com/) • Cornell University",
      years: "Jun 2025 — Present",
      detail: "AI agents for scientific discovery",
    },
    {
      role: "Research Assistant",
      org: "[CoCo Lab](https://www.cocolaboratory.com/) • Weill Cornell Medicine",
      years: "Jan 2024 — Present",
      detail: "Researching future heavy alcohol-use prediction via fMRI/dMRI connectome-behavior mapping with Dr. Amy Kuceyeski. \n*Supported by the Bowers CIS Undergraduate Research Experience (BURE) program (Summer 2024)*",
    },
    {
      role: "Research Assistant",
      org: "[SciFi Lab](https://scifilab.org/) • Cornell University",
      years: "Aug 2023 — May 2024",
      detail: "Advised by Cheng Zhang in the SciFi Lab. Contributed to EchoWrist *(published in CHI'24)*.",
    },
  ],

  /* ---- Work experience ---- */
  work: [
    {
      role: "AI/ML Engineer Intern",
      org: "[Millennium Management](https://www.mlp.com/)",
      years: "Jun 2026 — Aug 2026",
      detail: "Core Infra",
    },
    {
      role: "LLM Research Software Engineer Intern",
      org: "Naval Sea Systems Command (NAVSEA)",
      years: "Jul 2025 — Aug 2025",
      detail: "Fine-tuned lightweight LLMs for military NLP applications on edge devices. Advised by Dr. Jeonghun Noh.",
    },
    {
      role: "Software Engineer Intern",
      org: "Southern California Edison (SCE)",
      years: "May 2023 — Aug 2023",
      detail: "Contributed to internal GPT and NEM Billing for 15M+ users across 430 cities, reducing call volume by 22K+/month. Won the intern expo (1st out of 95 projects).",
    },
  ],

  /* ---- Footer ---- */
  footer: {
    copyrightYear: 2026,
    lastUpdated: "July 2026",
  },
};
