import Image from "next/image";

const STEPS = [
  {
    num: "01",
    title: "Build amazing projects.",
    body: (
      <>
        Spend <b style={{ color: "#B9FFFF", fontWeight: 600 }}>30 hours</b> on Hack Club building
        whatever sets your brain on fire — a game, a website, a synth, a robot. The work is yours,
        the choice is yours, and every hour you log is one step closer to Sydney.
      </>
    ),
  },
  {
    num: "02",
    title: "Find your people.",
    body: (
      <>
        Along the way you can join our community, befriend other teenagers obsessed with what
        they&apos;re making, learn from workshops, and take part in AMAs with published game
        developers and engineers shipping at real studios.
      </>
    ),
  },
  {
    num: "03",
    title: "Fly out to Sydney.",
    body: (
      <>
        Once you&apos;ve cleared <b style={{ color: "#B9FFFF", fontWeight: 600 }}>30 hours</b>,
        you&apos;re in. We fly you out to Sydney, Australia for a fully-funded weekend under the
        Southern Cross — meals, beds, transport, swag, all of it on us. Bring a laptop.
      </>
    ),
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-[80px] lg:py-[120px]"
      style={{ background: "linear-gradient(180deg, #0A0A53 0%, #07073A 100%)" }}
    >
      {/* Anchor chain — full-height, left side, desktop only */}
      <div
        className="pointer-events-none absolute bottom-0 top-0 hidden items-stretch justify-center lg:flex"
        style={{ left: 24, width: 140, zIndex: 1 }}
      >
        <Image
          src="/art/anchor-chain.png"
          alt=""
          width={140}
          height={900}
          className="h-full w-full object-contain object-top"
          style={{
            transformOrigin: "top center",
            filter: "drop-shadow(0 12px 40px rgba(255,122,226,0.25))",
            animation: "anchorSway 7s ease-in-out infinite alternate",
          }}
        />
      </div>

      {/* Container — offset left on desktop to clear the anchor */}
      <div
        className="relative mx-auto max-w-[1180px] px-[22px] lg:pl-[200px] lg:pr-7"
        style={{ zIndex: 2 }}
      >
        {/* Head */}
        <div className="mb-8 max-w-[60ch] lg:mb-14">
          <p
            className="mb-[14px] flex items-center gap-[10px] text-[12px] uppercase tracking-[0.22em]"
            style={{ color: "#B9FFFF", fontWeight: 500 }}
          >
            <span className="inline-block shrink-0" style={{ width: 24, height: 1, background: "#B9FFFF" }} />
            About the event
          </p>
          <h2
            className="font-serif mb-5 text-4xl font-bold leading-[1.05] tracking-[-0.015em] lg:text-5xl"
            style={{ letterSpacing: "-0.015em" }}
          >
            A weekend in the deep end.
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#C1B3F7" }}>
            Three steps from your bedroom to the Southern Cross — Horizons Crux is a 3-day
            hackathon in Sydney, fully funded by Hack Club, a 501(c)(3) nonprofit.
          </p>
        </div>

        {/* Steps */}
        <ol className="m-0 list-none p-0">
          {STEPS.map((step, i) => (
            <li
              key={step.num}
              className="grid items-start gap-2 py-7 lg:grid-cols-[120px_1fr] lg:gap-10 lg:py-10"
              style={{
                borderTop: "1px solid rgba(193,178,247,0.18)",
                borderBottom: i === STEPS.length - 1 ? "1px solid rgba(193,178,247,0.18)" : undefined,
              }}
            >
              <span
                className="font-serif text-4xl font-bold italic leading-none lg:text-[56px]"
                style={{ color: "#FF7AE2", letterSpacing: "-0.02em" }}
              >
                {step.num}
              </span>
              <div>
                <h3
                  className="font-serif mt-1 mb-3 text-2xl font-bold leading-[1.1] lg:text-3xl"
                  style={{ letterSpacing: "-0.01em", color: "#fff" }}
                >
                  {step.title}
                </h3>
                <p className="m-0 text-[18px] leading-[1.65]" style={{ color: "#C1B3F7", maxWidth: "60ch" }}>
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
