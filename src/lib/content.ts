export const EVENT = {
  name: "Horizons Crux",
  fullName: "Horizons Crux 2026",
  city: "Sydney",
  country: "Australia",
  dates: "July 10–12, 2026",
  dateShort: "JUL 10–12",
  year: "2026",
  ageMin: 13,
  ageMax: 18,
  cost: "$0",
  hoursRequired: 35,
  email: "crux@horizons.hackclub.com",
  generalEmail: "horizons@hackclub.com",
  applyUrl: "https://horizons.hackclub.com/?utm_source=crux-site",
  applyDirectUrl: "https://horizons.hackclub.com/crux",
  qualifyDeadline: "June 30, 2026",
  qualifyPeriod: "Now through June 30, 2026",
} as const;

export const QUALIFY_STEPS = [
  {
    number: "01",
    title: "Join Hack Club",
    description:
      "Visit [horizons.hackclub.com](https://horizons.hackclub.com/?utm_source=crux-site) and create an account. It's free and open to all high school students.",
    href: "https://horizons.hackclub.com/?utm_source=crux-site ",
  },
  {
    number: "02",
    title: "Start Building",
    description:
      "Create projects and upload them to Horizons. Anything counts: web apps, games, hardware.",
    href: null,
  },
  {
    number: "03",
    title: "Track Your Hours",
    description:
      "Your building time is automatically tracked with Hackatime as you ship projects on Horizons.",
    href: null,
  },
  {
    number: "04",
    title: "Hit 35 Hours",
    description:
      "Once you accumulate 35 hours of building, you're eligible to attend Horizons Crux.",
    href: null,
  },
  {
    number: "05",
    title: "Attend",
    description:
      "Spend your hours for a ticket at [horizons.hackclub.com](https://horizons.hackclub.com/?utm_source=crux-site) before July 10, 2026. After that you are all set to attend!",
    href: "https://horizons.hackclub.com/crux",
  },
] as const;

export const PAST_EVENTS = [
  {
    name: "Campfire",
    tagline: "Sydney · February 2026",
    blurb:
      "Sydney's largest high school hackathon yet. 200+ students from across Sydney came together for 20 hours of building, workshops, and fun.",
    href: "https://campfire.hackclub.com/sydney",
  },
  {
    name: "Daydream",
    tagline: "Sydney · September 2025",
    blurb:
      "Daydream brought together the next generation of game devs for a weekend of wild ideas, late nights, and projects nobody expected to ship.",
    href: "https://daydream.hackclub.com/sydney",
  },
  {
    name: "Midnight",
    tagline: "Vienna · January 2026",
    blurb:
      "A murder-mystery hackathon in Vienna, Austria. Spend 50 hours building personal projects, then fly out to solve the mystery and ship something unforgettable.",
    href: "https://midnight.hackclub.com",
  },
  {
    name: "Undercity",
    tagline: "San Fransisco · July 2025",
    blurb:
      "A hardware hackathon for high school builders. Solder, prototype, and ship real physical projects alongside 150 other hardware hackers.",
    href: "https://undercity.hackclub.com",
  },
  {
    name: "KiwiHacks",
    tagline: "Auckland · May 2026",
    blurb:
      "KiwiHacks '26 is New Zealand's biggest hackathon run by high schoolers, for high schoolers, where 100+ students enjoyed a weekend of building, workshops, and mentorship.",
    href: "https://kiwihacks.org",
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "How much does it cost?",
    a: "Nothing! We'll cover everything: food, local transport, accommodation, and flights!",
  },
  {
    q: "Who can attend?",
    a: "Anyone aged 13–18. You don't need to be Australian - we've got flight stipends for international hackers.",
  },
  {
    q: "How do I qualify?",
    a: "Build stuff on [horizons.hackclub.com](https://horizons.hackclub.com/?utm_source=crux-site) for 35 hours before June 30, 2026. [Hackatime](https://hackatime.hackclub.com) tracks your time automatically.",
  },
  {
    q: "Where do I sleep?",
    a: "At the venue. Bring a sleeping bag and anything else to make you comfortable!",
  },
  {
    q: "What should I pack?",
    a: "Laptop, charger, sleeping bag, toiletries, reusable water bottle, passport, and layers (Sydney's cold in July!)",
  },
  {
    q: "How do flight stipends work?",
    a: "Earn $8.50USD per hour coding after you hit the 35-hour minimum. The more you build, the more you earn toward travel.",
  },
  {
    q: "Do I need a visa to travel to Australia?",
    a: "Depends on where you're from. Check the [Australian Department of Home Affairs](https://immi.homeaffairs.gov.au) site and apply early. We can help if you get stuck.",
  },
  {
    q: "Can my parents come?",
    a: "Parents won't be able to stay at the venue and won't have travel costs reimbursed. They're welcome to check the venue under staff supervision if they'd like peace of mind.",
  },
  {
    q: "Do I need a team?",
    a: "Nope! Come solo or find your team on day 1. We'll have time for team formation.",
  },
  {
    q: "How do I contact you?",
    a: "Reach out to us at [crux@horizons.hackclub.com](mailto:crux@horizons.hackclub.com). Visa questions, team advice, whatever! We're here :)",
  },
] as const;

export const HACKCLUB = {
  name: "Hack Club",
  url: "https://hackclub.com",
  nonprofit: "501(c)(3) nonprofit",
  ein: "81-2908499",
  students: "50,000+",
} as const;

export const SPONSORS = [
  {
    name: "GitHub",
    url: "https://github.com",
    logo: "/github-logo.png",
  },
] as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Qualify", href: "#qualify" },
  { label: "Schedule", href: "#schedule" },
  { label: "FAQ", href: "#faq" },
  { label: "Sponsors", href: "#sponsors" },
] as const;
