import Image from "next/image";
import { HACKCLUB, SPONSORS } from "@/lib/content";
import { asset } from "@/lib/asset";

const PLACEHOLDER_COUNT = 8;

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative overflow-hidden py-[80px] lg:py-[120px]"
      style={{ background: "#0D1117" }}
    >
      {/* Shark deco */}
      <Image
        src={asset("/art/shark.png")}
        alt=""
        width={280}
        height={200}
        className="pointer-events-none absolute bottom-10 right-[-40px] hidden lg:block"
        style={{
          opacity: 0.95,
          animation: "swim 14s ease-in-out infinite alternate",
          zIndex: 1,
        }}
      />

      <div className="relative mx-auto max-w-[1180px] px-7" style={{ zIndex: 2 }}>

        {/* Header — 2-col on desktop */}
        <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <p
              className="mb-[14px] flex items-center gap-[10px] text-[12px] uppercase tracking-[0.22em]"
              style={{ color: "#B9FFFF", fontWeight: 500 }}
            >
              Sponsors
            </p>
            <h2
              className="font-serif m-0 text-4xl font-bold leading-[1.05] tracking-[-0.015em] lg:text-[clamp(34px,4.4vw,56px)]"
              style={{ maxWidth: "22ch" }}
            >
              The folks who make it free.
            </h2>
          </div>
          <p className="pb-2 text-[17px] leading-[1.65]" style={{ color: "#C1B3F7" }}>
            {HACKCLUB.name} is a{" "}
            <b style={{ color: "#fff" }}>{HACKCLUB.nonprofit}</b>. Every dollar raised goes
            directly into stipends, accommodation, food, and swag for the hackers in the room.
          </p>
        </div>

        {/* Sponsor CTA */}
        <div
          className="rounded-[20px] px-[48px] py-[44px]"
          style={{
            border: "1px solid rgba(193,178,247,0.18)",
            background:
              "rgba(30,30,92,0.4)",
          }}
        >
          <div className="grid items-center gap-8 mb-12 lg:grid-cols-[1.4fr_auto]">
            <div>
              <h3
                className="font-serif mb-2 font-bold leading-[1.1]"
                style={{
                  fontSize: "clamp(24px,3vw,36px)",
                  letterSpacing: "-0.01em",
                  color: "#fff",
                }}
              >
                Put your name on the weekend.
              </h3>
              <p className="m-0 text-base" style={{ color: "#C1B3F7" }}>
                Title sponsorship, hardware partnerships, travel underwriting — let&apos;s talk. Every
                contribution is tax-deductible in the US and helps support the next generation of builders.
              </p>
            </div>
            <a
              href="mailto:crux@horizons.hackclub.com"
              className="self-start whitespace-nowrap rounded-full px-6 py-3 text-[15px] font-semibold transition-transform hover:-translate-y-0.5"
              style={{
                background: "#FF7AE2",
                color: "#0D1117",
                textDecoration: "none",
                borderBottom: "none",
                boxShadow: "none",
              }}
            >
              Become a sponsor →
            </a>
          </div>

          {/* Sponsors Grid */}
          <div>
            <p
              className="mb-8 flex items-center gap-[10px] text-[12px] uppercase tracking-[0.22em]"
              style={{ color: "#B9FFFF", fontWeight: 500 }}
            >
              Our Sponsors
            </p>
            <div className="flex flex-wrap gap-6">
              {SPONSORS.map((sponsor) => (
                <a
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 rounded-[12px] px-8 py-8 transition-transform hover:scale-105"
                  style={{
                    border: "1px solid rgba(193,178,247,0.2)",
                    background: "rgba(30,30,92,0.25)",
                  }}
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={120}
                    height={120}
                    className="h-24 w-auto"
                  />
                  <span
                    className="font-semibold text-lg"
                    style={{ color: "#fff" }}
                  >
                    {sponsor.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
