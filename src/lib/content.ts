export const EVENT = {
  name: "Horizons Crux",
  fullName: "Horizons Oceania 2026",
  city: "Sydney",
  country: "Australia",
  dates: "July 10 to 12, 2026",
  dateShort: "JUL 10-12",
  year: "2026",
  ageMin: 13,
  ageMax: 18,
  cost: "$0",
  hoursRequired: 35,
  email: "crux@horizons.hackclub.com",
  generalEmail: "horizons@hackclub.com",
  applyUrl: "https://horizons.hackclub.com",
  applyDirectUrl: "https://horizons.hackclub.com/crux",
  qualifyDeadline: "June 30, 2026",
  qualifyPeriod: "Now through June 30, 2026",
} as const;

export const QUALIFY_STEPS = [
  {
    number: "01",
    title: "Join Horizons.",
    description:
      "Free. [horizons.hackclub.com](https://horizons.hackclub.com). Open to all high school students.",
    href: "https://horizons.hackclub.com",
  },
  {
    number: "02",
    title: "Log 35 hours.",
    description:
      "Build anything. Web, hardware, art, games. We track your time automatically as you ship.",
    href: null,
  },
  {
    number: "03",
    title: "Spend hours, get a ticket.",
    description:
      "Before June 30, 2026, spend your hours at [horizons.hackclub.com/crux](https://horizons.hackclub.com/crux). Then pack a bag.",
    href: "https://horizons.hackclub.com/crux",
  },
] as const;

// About tagline — segmented to render highlight swatches behind specific phrases.
// `highlight: true` = warm cream/cyan swatch behind the text. `italic: true` = italic.
export const ABOUT_TAGLINE: ReadonlyArray<{
  text: string;
  italic?: boolean;
  highlight?: boolean;
}> = [
  { text: "Horizons Crux is a " },
  { text: "35-hour", italic: true },
  { text: " hackathon focused on " },
  { text: "shipping real projects", highlight: true },
  { text: " and " },
  { text: "launching student careers.", highlight: true },
];

export const ABOUT_BUBBLES = [
  { label: "Why Join Crux", primary: true, rotate: -4 },
  { label: "Build", rotate: 3 },
  { label: "Ship", rotate: -2 },
  { label: "Connect", rotate: 4 },
];

export const ABOUT_FEATURE_CARDS = [
  {
    title: "Free flights, food, and a bed.",
    image: "/art/cfsyd.png",
    alt: "Free travel and stay",
  },
  {
    title: "$5,000+ in prizes!",
    image: "/art/art-1.png",
    alt: "Prize pool",
  },
  {
    title: "200+ builders under the Southern Cross.",
    image: "/art/art-2.png",
    alt: "Community of builders",
  },
] as const;

export const BUILDING_COUNTS = [
  "Coding projects (web, mobile, games, and more)",
  "Design and creative work",
  "Hardware and physical computing",
  "Learning while building something real",
];

export const COVERED_ITEMS = [
  { icon: "Plane", label: "Flight Stipends" },
  { icon: "Bed", label: "Accommodation" },
  { icon: "UtensilsCrossed", label: "All Meals" },
  { icon: "Bus", label: "Local Transport" },
  { icon: "Package", label: "Event Swag" },
  { icon: "Trophy", label: "Awards" },
] as const;

export const SCHEDULE_DAYS = [
  {
    day: "Day 1",
    date: "Friday, Jul 10",
    events: [
      "Opening ceremony",
      "Workshops",
      "Hacking starts",
    ],
  },
  {
    day: "Day 2",
    date: "Saturday, Jul 11",
    events: [
      "Keep building",
      "Workshops & events",
      "Talk to mentors",
    ],
  },
  {
    day: "Day 3",
    date: "Sunday, Jul 12",
    events: [
      "Judging",
      "Closing ceremony",
    ],
  },
] as const;

export const LAST_YEAR_STATS = [
  { value: "50,000+", label: "Hack Club students" },
  { value: "5+", label: "International hackathons" },
  { value: "1 weekend", label: "Under the Southern Cross" },
] as const;

export const PAST_EVENTS = [
  {
    name: "Campfire",
    tagline: "Sydney · February 2026",
    blurb:
      "200+ students. 20 hours of building. Sydney's biggest high school hackathon yet.",
    href: "https://campfire.hackclub.com/sydney",
  },
  {
    name: "Daydream",
    tagline: "Sydney · September 2025",
    blurb:
      "A weekend of wild ideas and late nights. Projects nobody expected to ship. Most of them shipped.",
    href: "https://daydream.hackclub.com/sydney",
  },
  {
    name: "Kiwihacks",
    tagline: "Auckland · May 2026",
    blurb:
      "New Zealand's biggest high school hackathon. 100+ builders, one weekend, zero excuses.",
    href: "https://kiwihacks.org",
  },
  {
    name: "Undercity",
    tagline: "San Francisco · July 2025",
    blurb:
      "Hardware hackathon. Solder, prototype, ship real physical things. 150 builders under one roof.",
    href: "https://undercity.hackclub.com",
  },
  {
    name: "Midnight",
    tagline: "Vienna · January 2026",
    blurb:
      "A murder-mystery hackathon in Vienna. 50 hours of building, then fly out to solve the mystery.",
    href: "https://midnight.hackclub.com",
  },
] as const;

export const SPONSORS = [
  {
    name: "Hack Club",
    url: "https://hackclub.com",
    brandColor: "#EC3750",
    tier: 1,
    logo: "/art/icon.png",
  },
  {
    name: "Horizons",
    url: "https://horizons.hackclub.com",
    brandColor: "#FF7AE2",
    tier: 2,
    logo: "/art/logo-crux.png",
  },
  {
    name: "Become a sponsor",
    url: "mailto:crux@horizons.hackclub.com",
    brandColor: "#B9FFFF",
    tier: 3,
    logo: null,
    placeholder: true,
  },
  {
    name: "Become a sponsor",
    url: "mailto:crux@horizons.hackclub.com",
    brandColor: "#C1B3F7",
    tier: 3,
    logo: null,
    placeholder: true,
  },
  {
    name: "Become a sponsor",
    url: "mailto:crux@horizons.hackclub.com",
    brandColor: "#64B8FE",
    tier: 4,
    logo: null,
    placeholder: true,
  },
  {
    name: "Become a sponsor",
    url: "mailto:crux@horizons.hackclub.com",
    brandColor: "#9B61E3",
    tier: 4,
    logo: null,
    placeholder: true,
  },
  {
    name: "Become a sponsor",
    url: "mailto:crux@horizons.hackclub.com",
    brandColor: "#FF7AE2",
    tier: 4,
    logo: null,
    placeholder: true,
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "What is Horizons Crux?",
    a: "Horizons Crux is a 35-hour hackathon in Sydney where high school students fly in from around the world to build, ship, and meet other people who care about making things.",
  },
  {
    q: "Who can participate?",
    a: "High school students aged 13 to 18, anywhere in the world. You don't need to be from Australia.",
  },
  {
    q: "How much does it cost?",
    a: "Nothing. Horizons Crux is completely free. We cover flights, accommodation, all meals, and local transport.",
  },
  {
    q: "What if I've never been to a hackathon?",
    a: "That's perfectly fine. We'll have workshops, mentors, and resources to help you get started and learn throughout the event.",
  },
  {
    q: "Where is it located?",
    a: "Sydney, Australia. We'll share the exact venue with qualifiers closer to the date.",
  },
  {
    q: "Do I need to know how to code?",
    a: "Not at all. Coding skills help, but you can contribute through design, hardware, music, or by learning during the event.",
  },
  {
    q: "What can I build?",
    a: "Anything. Apps, websites, hardware, games, art, music, prank devices, productivity tools, whatever you're excited about.",
  },
  {
    q: "How does judging work?",
    a: "Projects are judged on creativity, technical implementation, design, and presentation. Winners are announced at the closing ceremony.",
  },
  {
    q: "How big can my team be?",
    a: "Up to 4 people. Form one before you arrive (use the Horizons Discord) or find teammates on day one.",
  },
  {
    q: "How do I qualify?",
    a: "Log 35 hours building projects on [horizons.hackclub.com](https://horizons.hackclub.com/) before June 30, 2026, then spend your hours for a ticket. Your hours are tracked automatically.",
  },
  {
    q: "How do flight stipends work?",
    a: "You earn stipends at $8.50 USD per hour for every hour logged past the initial 35. We're literally paying you to fly here.",
  },
  {
    q: "How do I contact you?",
    a: "Email [crux@horizons.hackclub.com](mailto:crux@horizons.hackclub.com). Visa questions, team formation, existential dread about your project. We've seen it all.",
  },
] as const;

export const CLOSING_LETTER: ReadonlyArray<{ text: string; bold?: boolean }> = [
  {
    text: "Horizons Crux is built to bring high school builders together.",
    bold: true,
  },
  {
    text: "Our goal is to give students opportunities they won't get in the classroom.",
  },
  {
    text: "We've watched students ship startups, land internships, and meet co-founders at events like this one.",
  },
  {
    text: "We're aiming for even more this year.",
  },
  {
    text: "See you in Sydney. 🌊",
  },
  {
    text: "— Team Horizons",
  },
] as const;

export const HACKCLUB = {
  name: "Hack Club",
  url: "https://hackclub.com",
  conduct: "https://hackclub.com/conduct/",
  nonprofit: "501(c)(3) nonprofit",
  ein: "81-2908499",
  students: "50,000+",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
] as const;
