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
              The folks who made it free.
            </h2>
          </div>
          <p className="pb-2 text-[17px] leading-[1.65]" style={{ color: "#C1B3F7" }}>
            {HACKCLUB.name} is a{" "}
            <b style={{ color: "#fff" }}>{HACKCLUB.nonprofit}</b>. Every dollar raised went
            directly into stipends, accommodation, food, and swag for the hackers in the room.
          </p>
        </div>

        {/* Sponsors Container */}
        <div
          className="rounded-[20px] px-[48px] py-[44px]"
          style={{
            border: "1px solid rgba(193,178,247,0.18)",
            background:
              "rgba(30,30,92,0.4)",
          }}
        >
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
                    width={160}
                    height={80}
                    className="h-12 w-32 object-contain"
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
