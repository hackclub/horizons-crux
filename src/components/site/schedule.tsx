import Image from "next/image";
import { asset } from "@/lib/asset";

const DAYS = [
  {
    label: "Day one",
    date: "Friday, July 10",
    items: [
      { time: "3:00pm", event: "Doors open", desc: "Get settled, meet people, get comfortable." },
      { time: "4:00pm", event: "Opening ceremony", desc: "Meet the team, see who we're partnering with, start hacking." },
      { time: "4:30pm", event: "Hacking begins", desc: "Get into teams, pick your idea, get to work." },
      { time: "7:00pm", event: "Dinner + lightning talks", desc: "Eat, hear from others, make more friends." },
    ],
  },
  {
    label: "Day two",
    date: "Saturday, July 11",
    items: [
      { time: "8:00am", event: "Breakfast bar opens", desc: "Grab fuel and keep going." },
      { time: "10:00am", event: "Workshops", desc: "Learn to make websites, games, and more. Perfect for beginners." },
      { time: "1:00pm", event: "Lunch", desc: "Recharge with good food." },
      { time: "7:00pm", event: "Dinner", desc: "Break time with other hackers." },
    ],
  },
  {
    label: "Day three",
    date: "Sunday, July 12",
    items: [
      { time: "8:00am", event: "Breakfast bar opens", desc: "Final stretch fuel." },
      { time: "12:00pm", event: "Project submissions + Voting", desc: "Ship your project and vote for your favorites." },
      { time: "1:00pm", event: "Lunch", desc: "Enjoy another free meal!" },
      { time: "2:00pm", event: "Closing Ceremony", desc: "Winners announced, celebrate, and say goodbye." },
      { time: "3:00pm", event: "Event ends", desc: "Head home with memories and new friends." },
    ],
  },
];

export default function Schedule() {
  return (
    <section
      id="schedule"
      className="relative py-[80px] lg:py-[120px]"
      style={{ background: "#0D1117" }}
    >
      <div className="mx-auto max-w-[1180px] px-7">
        <p
          className="mb-[14px] flex items-center gap-[10px] text-[12px] uppercase tracking-[0.22em]"
          style={{ color: "#B9FFFF", fontWeight: 500 }}
        >
          Schedule
        </p>
          <div className="relative isolate mb-5">
            <Image
              src={asset("/art/nautilis-decal-glow.png")}
              alt=""
              aria-hidden="true"
              width={400}
              height={400}
              className="pointer-events-none absolute -right-2 top-2 hidden select-none lg:block"
              style={{
                zIndex: 0,
                height: "auto",
                width: "300px",
                opacity: 0.9,
                animation: "bob 6s ease-in-out infinite alternate",
              }}
            />
            <h2
              className="relative z-10 font-serif text-4xl font-bold leading-[1.05] tracking-[-0.015em] lg:text-[clamp(34px,4.4vw,56px)]"
              style={{ maxWidth: "22ch" }}
            >
            It&apos;s going to be awesome.
            </h2>
          </div>
        <p className="mb-10 text-lg leading-relaxed" style={{ color: "#C1B3F7", maxWidth: "60ch" }}>
          Outline of how the event will go! Changes might be made closer to the event.
        </p>

        <div
          className="relative mt-10 flex flex-col"
          style={{ borderTop: "1px solid rgba(193,178,247,0.18)", borderBottom: "1px solid rgba(193,178,247,0.18)" }}
        >
          <Image
            src={asset("/art/jellyfish-decal.png")}
            alt=""
            aria-hidden="true"
            width={400}
            height={400}
            className="pointer-events-none absolute -right-2 top-[26%] hidden h-auto w-[140px] -translate-y-1 select-none opacity-85 lg:block xl:-right-8 xl:w-[200px]"
            style={{width: "45%", height: "auto", animation: "bob 60s ease-in-out infinite alternate 60s"}}
          />

          {DAYS.map((day, i) => (
            <div
              key={day.label}
              className="grid grid-cols-1 gap-4 py-8 lg:grid-cols-[200px_1fr] lg:gap-10"
              style={{ background: "#0D1117", borderTop: i > 0 ? "1px solid rgba(193,178,247,0.18)" : undefined }}
            >
              {/* Day label */}
              <div>
                <span
                  className="mb-1.5 block font-mono text-[12px] uppercase tracking-[0.2em]"
                  style={{ color: "#FF7AE2" }}
                >
                  {day.date}
                </span>
                <span
                  className="font-serif text-[28px] font-bold"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {day.label}
                </span>
              </div>

              {/* Items */}
              <div className="flex flex-col gap-[14px]">
                {day.items.map((item) => (
                  <div
                    key={item.time + item.event}
                    className="grid items-baseline gap-6"
                    style={{ gridTemplateColumns: "90px 1fr" }}
                  >
                    <span
                      className="font-mono text-[13px] tracking-[0.06em]"
                      style={{ color: "#B9FFFF" }}
                    >
                      {item.time}
                    </span>
                    <div>
                      <div className="text-base" style={{ color: "#fff" }}>{item.event}</div>
                      <div className="mt-0.5 text-sm" style={{ color: "#C1B3F7" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
