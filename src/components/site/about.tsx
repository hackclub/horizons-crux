"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Position = "left" | "right" | "center" | "left-far" | "right-far";
type Size = "sm" | "md" | "lg" | "xl";

type Fragment = {
  text: ReactNode;
  pos: Position;
  size?: Size;
};

const HL = { color: "#B9FFFF", fontWeight: 600 } as const;

const STORY: Fragment[] = [
  { text: <>If you&apos;re in high school&hellip;</>, pos: "left", size: "md" },
  {
    text: (
      <>
        &hellip;and you&apos;ve logged <span style={HL}>35 hours</span> on{" "}
        <a
          href="https://horizons.hackclub.com/?utm_source=crux-site"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...HL, textDecoration: "underline" }}
        >
          Horizons
        </a>
        &hellip;
      </>
    ),
    pos: "right",
    size: "md",
  },
  { text: <>you&apos;re in.</>, pos: "center", size: "xl" },
  { text: "No experience cap.", pos: "left-far", size: "sm" },
  {
    text: <>Beginners who just shipped their first project? Welcome.</>,
    pos: "right",
    size: "md",
  },
  { text: "Seasoned coders too.", pos: "left", size: "sm" },
  {
    text: <>So&hellip; what&apos;s a hackathon?</>,
    pos: "center",
    size: "lg",
  },
  { text: "A weekend-long event.", pos: "right", size: "md" },
  { text: "You build something from scratch.", pos: "left", size: "md" },
  {
    text: "With a group of strangers who quickly become friends.",
    pos: "right-far",
    size: "md",
  },
  {
    text: (
      <>
        <span style={HL}>36 hours.</span>
      </>
    ),
    pos: "center",
    size: "xl",
  },
  { text: "Take an idea from zero to shipped.", pos: "left", size: "md" },
  { text: "Then show the room what you made.", pos: "right", size: "md" },
  { text: "No polished demos.", pos: "left-far", size: "sm" },
  { text: "No slides.", pos: "right-far", size: "sm" },
  {
    text: "Just a thing that works.",
    pos: "center",
    size: "lg",
  },
  {
    text: <>(or hilariously doesn&apos;t)</>,
    pos: "right",
    size: "sm",
  },
  { text: "And what do you actually get?", pos: "center", size: "lg" },
  {
    text: (
      <>
        Flights &amp; accommodation, <span style={HL}>fully covered.</span>
      </>
    ),
    pos: "left",
    size: "md",
  },
  {
    text: "By Hack Club, a 501(c)(3) nonprofit.",
    pos: "right",
    size: "sm",
  },
  {
    text: <>You&apos;ll leave with a project you&apos;re proud of.</>,
    pos: "left-far",
    size: "md",
  },
  {
    text: "A network of teenage builders from across the globe.",
    pos: "right",
    size: "md",
  },
  {
    text: "And the experience of shipping something real…",
    pos: "left",
    size: "md",
  },
  {
    text: <>&hellip;in one of the world&apos;s most beautiful cities.</>,
    pos: "right-far",
    size: "lg",
  },
];

const POS_CLASSES: Record<Position, string> = {
  "left-far": "self-start text-left max-w-[55%]",
  left: "self-start text-left ml-[6%] max-w-[65%]",
  center: "self-center text-center max-w-[80%]",
  right: "self-end text-right mr-[6%] max-w-[65%]",
  "right-far": "self-end text-right max-w-[55%]",
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: "text-base lg:text-lg",
  md: "text-xl lg:text-2xl",
  lg: "text-2xl lg:text-4xl font-semibold",
  xl: "text-4xl lg:text-6xl font-bold",
};

const GAPS = [
  "mt-20",
  "mt-28",
  "mt-24",
  "mt-32",
  "mt-20",
  "mt-36",
  "mt-24",
  "mt-28",
];

export default function About() {
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = storyRef.current;
    if (!root) return;

    const items = root.querySelectorAll<HTMLElement>("[data-fragment]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Big sentence */}
      <section
        id="about"
        className="relative overflow-hidden py-[100px] lg:py-[140px]"
        style={{ background: "linear-gradient(180deg, #0D1117 0%, #0D1117 100%)" }}
      >
        <div className="mx-auto max-w-[860px] px-6 text-center">
          <h2
            className="font-serif text-[2.4rem] font-bold leading-[1.2] sm:text-5xl lg:text-[3.5rem]"
            style={{ color: "#f0ede6", letterSpacing: "-0.02em" }}
          >
            Horizons Crux is Hack Club&apos;s{" "}
            <mark
              style={{
                background: "rgba(185, 255, 255, 0.15)",
                color: "#B9FFFF",
                padding: "2px 0",
                borderRadius: "3px",
              }}
            >
              free, fully-funded hackathon
            </mark>{" "}
            for high schoolers who are ready to{" "}
            <mark
              style={{
                background: "rgba(185, 255, 255, 0.15)",
                color: "#B9FFFF",
                padding: "2px 0",
                borderRadius: "3px",
              }}
            >
              ship something real.
            </mark>
          </h2>
        </div>
      </section>

      {/* Scattered story */}
      <section
        className="relative overflow-hidden py-[140px] lg:py-[200px]"
        style={{
          background: "linear-gradient(180deg, #0D1117 0%, #0a0b0f 100%)",
        }}
      >
        <style>{`
          [data-fragment] {
            opacity: 0;
            transform: translateY(28px);
            transition: opacity 900ms cubic-bezier(0.22, 1, 0.36, 1),
                        transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
            will-change: opacity, transform;
          }
          [data-fragment][data-visible="true"] {
            opacity: 1;
            transform: translateY(0);
          }
          @media (prefers-reduced-motion: reduce) {
            [data-fragment] {
              opacity: 1;
              transform: none;
              transition: none;
            }
          }
        `}</style>
        <div
          ref={storyRef}
          className="relative mx-auto flex max-w-[1100px] flex-col px-6"
          style={{ color: "#C1B3F7" }}
        >
          {STORY.map((fragment, i) => (
            <div
              key={i}
              data-fragment
              className={[
                "font-serif leading-[1.25]",
                POS_CLASSES[fragment.pos],
                SIZE_CLASSES[fragment.size ?? "md"],
                i === 0 ? "" : GAPS[i % GAPS.length],
              ].join(" ")}
              style={{ letterSpacing: "-0.01em" }}
            >
              {fragment.text}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
