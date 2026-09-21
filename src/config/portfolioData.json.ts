import { type PortfolioDataProps } from "./types/configDataTypes";

// Buyer-facing portfolio copy + values — the facts you're expected to make your own: identity,
// biography, the experience/stat numbers, the home intro, and the contact prompt. Presentational
// labels (SYS_SPECS captions, "Role:" / "Yrs:", scoreboard colours) stay in their components; this
// file holds only what a buyer edits. The voice is first-person singular throughout (one developer's
// portfolio) — keep it consistent if you rewrite.
const portfolioData = {
  profile: {
    heading: "Biography",
    tagline: "Dev 01",
    role: "Designer & Web Developer",
    years: "10+",
    bio: [
      "Ever since I was a small kid, I’ve always been a creative, loving to draw, create and try new things.",
      "In 2012 I slowly started my career as a freelance as graphic designer, after finishing my year at Arbeiderbevegelsen Folkehøgskole, mostly working on projects for local newspapers, creating ads and building and maintaining webpages for small businesses and organizations. I especially worked a lot with design and communication towards event promotion and social media, developing brand narratives, managing media relations, and creating content that engages with different audiences.", 
      "In 2016, after finishing my degree in ‘Informatics: Design, use & interactions’, I continued my career as a UX designer. I was driven by wanting to help people by making products easier and more accessible. I wanted to transforming their needs into services, products, and experiences, that worked for them.", 
      "Since then, I’ve worked with in numerous different fields, such as gaming, tv & streaming, the travel industry, online marketplaces, internal tools, and design systems", 
      "Besides UX design, I’ve also worked on several side projects, such as creating and hosting design conferences, focusing on building a community and sharing knowledge among fellow designers, I’ve also built a few web apps such as the translator app Trønderomat. You can read more about my other projects here.",
      " ",
    ],
    shortBio:
      "I‘m driven by creating things that makes life easier and more accessible for people. From solving problems, building communities to just creating something that just “feels right”.",
    meta: {
      location: "Berlin/Oslo",
      role: "Designer & Web Developer",
      favorite: "Ramen",
    },
    skills: [
      { label: "UX-design", pct: 95 },
      { label: "Graphic Design", pct: 90 },
      { label: "Web Development", pct: 60 },
    ],
  },

  stats: {
    home: ["Posts: 42", "Years: 03", "Coffee: 9000+"],
    profile: ["Class: Full-Stack Dev", "Lvl: 8+", "XP: 8.5K", "Stars: 2.1K"],
  },

  home: {
    tagline: " ",
    heading: "Hello there, Welcome!",
    intro:
      "I’m a multidisciplinary creative, designer and developer. I‘m driven by creating things that makes life easier and more accessible for people. From solving problems, building communities to just creating something that just “feels right",
  },

  contact: {
    prompt: "Want to chat about a project, a retro build, or just share a favorite game?",
  },
} satisfies PortfolioDataProps;

export default portfolioData;
