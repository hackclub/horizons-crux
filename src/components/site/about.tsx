import Image from "next/image";
import { asset } from "@/lib/asset";

const SECTIONS = [
  {
    title: "What is a hackathon.",
    body: (
      <>
        <p className="m-0 mb-3">
          A hackathon is a weekend-long event where you build something from
          scratch with a group of strangers who quickly become friends.
        </p>
        <p className="m-0">
          At Horizons Crux, you&apos;ll have around 48 hours to make a project,
          then show everyone what you made. You&apos;ll leave with a project
          anyone can demo, and you get to tell people that you built it
          yourself.
        </p>
      </>
    ),
  },
  {
    title: "Who can attend.",
    body: (
      <>
        <p className="m-0 mb-3">
          Any high school student (aged 13-18) who&apos;s logged{" "}
          <b style={{ color: "#B9FFFF", fontWeight: 600 }}>35 hours</b> building
          projects on{" "}
          <a
            href="https://horizons.hackclub.com/?utm_source=crux-site"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#B9FFFF", fontWeight: 600 }}
          >
            Horizons
          </a>
          .
        </p>
        <p className="m-0">
          Crux is open to students of all experience levels! We&apos;ll have
          workshops to teach beginners how to make games, websites, and more!
        </p>
      </>
    ),
  },
  {
    title: "What you can get.",
    body: (
      <>
        <p className="m-0 mb-3">
          Your food and accommodation are{" "}
          <b style={{ color: "#B9FFFF", fontWeight: 600 }}>fully covered</b> by
          Hack Club, a 501(c)(3) nonprofit.
        </p>
        <p className="m-0">
          You&apos;ll leave with a project you&apos;re proud of, a network of
          teenage builders from across the globe, and the experience of shipping
          something real under the pressure of the clock.
        </p>
      </>
    ),
  },
];

export default function About() {
  return (
    <>
      {/* Big sentence */}
      <section
        id="about"
        className="relative overflow-hidden py-[100px] lg:py-[140px]"
        style={{
          background: "linear-gradient(180deg, #0D1117 0%, #0D1117 100%)",
        }}
      >
        <div className="mx-auto max-w-[860px] px-6 text-center">
          <h2
            className="font-serif text-[2rem] font-bold leading-[1.2] sm:text-4xl lg:text-[3rem]"
            style={{ color: "#f0ede6", letterSpacing: "-0.02em" }}
          >
            A Hack Club flagship hackathon, in Sydney,{" "}
            <mark
              style={{
                background: "rgba(185, 255, 255, 0.15)",
                color: "#B9FFFF",
                padding: "2px 0",
                borderRadius: "3px",
              }}
            >
              Australia
            </mark>
            . Code for{" "}
            <mark
              style={{
                background: "rgba(185, 255, 255, 0.15)",
                color: "#B9FFFF",
                padding: "2px 0",
                borderRadius: "3px",
              }}
            >
              35 hours
            </mark>
            {" "}and come to Australia for 48 hours of learning, teamwork, and fun!
          </h2>
        </div>
      </section>

      {/* About section */}
      <section
        className="relative py-[80px] lg:py-[120px]"
        style={{
          background: "linear-gradient(180deg, #0D1117 0%, #0a0b0f 100%)",
        }}
      >
        <div className="relative mx-auto flex max-w-[1180px] gap-0 px-[22px] lg:items-start lg:px-7">
          {/* Anchor chain — full-viewport sticky rail on desktop */}
          <div className="pointer-events-none hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[170px] lg:shrink-0 lg:items-center lg:justify-center">
            <Image
              src={asset("/art/anchor-chain.png")}
              alt=""
              width={549}
              height={1537}
              className="h-screen w-auto max-w-none object-contain object-top"
              style={{
                transformOrigin: "top center",
                animation: "anchorSway 7s ease-in-out infinite alternate",
              }}
            />
          </div>

          {/* Right column — shifted toward the centerline */}
          <div
            className="relative flex-1 lg:pl-32 lg:pr-7"
            style={{ zIndex: 2 }}
          >
            {/* Intro: About the event */}
            <div className="mb-12 lg:mb-16">
              <p
                className="mb-[14px] text-[12px] uppercase tracking-[0.22em]"
                style={{ color: "#B9FFFF", fontWeight: 500 }}
              >
                About the event
              </p>
              <h2
                className="font-serif mb-4 text-4xl font-bold leading-[1.05] tracking-[-0.015em] lg:text-[clamp(30px,3.8vw,48px)]"
                style={{ color: "#fff" }}
              >
                A weekend in the deep end.
              </h2>
              <p
                className="m-0 text-[17px] leading-[1.7]"
                style={{ color: "#C1B3F7", maxWidth: "58ch" }}
              >
                Build for 35 hours, get a free trip to Sydney. Horizons Crux is
                a fully-funded 3-day hackathon run by Hack Club, a 501(c)(3)
                nonprofit.
              </p>
            </div>

            <ol className="m-0 list-none p-0">
              {SECTIONS.map((section, i) => (
                <li
                  key={section.title}
                  className="py-7 lg:py-10"
                  style={{
                    borderTop: "1px solid rgba(193,178,247,0.18)",
                    borderBottom:
                      i === SECTIONS.length - 1
                        ? "1px solid rgba(193,178,247,0.18)"
                        : undefined,
                  }}
                >
                  <h3
                    className="font-serif mt-1 mb-3 text-2xl font-bold leading-[1.1] lg:text-3xl"
                    style={{ letterSpacing: "-0.01em", color: "#fff" }}
                  >
                    {section.title}
                  </h3>
                  <div
                    className="m-0 text-[18px] leading-[1.65]"
                    style={{ color: "#C1B3F7", maxWidth: "60ch" }}
                  >
                    {section.body}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
