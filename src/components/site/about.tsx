import Image from "next/image";
import {
  ABOUT_TAGLINE,
  ABOUT_BUBBLES,
  ABOUT_FEATURE_CARDS,
  QUALIFY_STEPS,
} from "@/lib/content";
import { asset } from "@/lib/asset";

function Hex({ size = 18, className = "", style }: { size?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <span
      aria-hidden="true"
      className={className}
      style={{
        display: "inline-block",
        width: size,
        height: size,
        background: "linear-gradient(180deg, #FF7AE2 0%, #C1B3F7 100%)",
        clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
        ...style,
      }}
    />
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-[100px] lg:py-[140px]"
      style={{
        background:
          "linear-gradient(180deg, #0D1117 0%, #0D1117 100%)",
      }}
    >
      <div className="mx-auto max-w-[1180px] px-[22px] lg:px-7">
        {/* ABOUT heading */}
        <h2
          className="font-serif mb-12 text-center text-[28px] font-bold uppercase tracking-[0.28em] lg:text-[32px]"
          style={{ color: "#B9FFFF" }}
        >
          About
        </h2>

        {/* Big tagline with highlight swatches */}
        <p
          className="font-serif mx-auto mb-20 text-center font-bold leading-[1.18] lg:mb-24"
          style={{
            fontSize: "clamp(28px, 4.4vw, 56px)",
            color: "#fff",
            letterSpacing: "-0.015em",
            maxWidth: "20ch",
          }}
        >
          {ABOUT_TAGLINE.map((seg, i) => {
            if (seg.highlight) {
              return (
                <span
                  key={i}
                  className="bg-highlight"
                  style={{
                    background: "linear-gradient(180deg, transparent 55%, rgba(255,122,226,0.35) 55%)",
                    padding: "0 6px",
                    borderRadius: 4,
                  }}
                >
                  {seg.text}
                </span>
              );
            }
            if (seg.italic) {
              return (
                <em key={i} style={{ fontStyle: "italic", color: "#FF7AE2" }}>
                  {seg.text}
                </em>
              );
            }
            return <span key={i}>{seg.text}</span>;
          })}
        </p>

        {/* Why Join — bubbles + hex cluster */}
        <div className="relative mx-auto mb-20 max-w-[820px] lg:mb-24">
          <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-5">
            {ABOUT_BUBBLES.map((b, i) => (
              <span
                key={i}
                className={`inline-flex items-center justify-center font-semibold ${b.primary ? "px-7 py-3 text-[18px] lg:text-[22px]" : "px-5 py-2 text-[14px] lg:text-[16px]"}`}
                style={{
                  borderRadius: 999,
                  background: b.primary ? "rgba(185,255,255,0.14)" : "rgba(193,178,247,0.12)",
                  border: `1px solid ${b.primary ? "rgba(185,255,255,0.45)" : "rgba(193,178,247,0.35)"}`,
                  color: b.primary ? "#B9FFFF" : "#fff",
                  transform: `rotate(${b.rotate}deg)`,
                  fontFamily: "var(--font-serif)",
                  letterSpacing: "-0.005em",
                }}
              >
                {b.label}
              </span>
            ))}
          </div>

          {/* Decorative hexagons */}
          <Hex size={22} style={{ position: "absolute", top: -8, left: "8%", transform: "rotate(15deg)", opacity: 0.7 }} />
          <Hex size={14} style={{ position: "absolute", top: 30, right: "12%", transform: "rotate(-10deg)", opacity: 0.55 }} />
          <Hex size={18} style={{ position: "absolute", bottom: -6, left: "30%", transform: "rotate(8deg)", opacity: 0.6 }} />
          <Hex size={12} style={{ position: "absolute", bottom: 20, right: "30%", transform: "rotate(-18deg)", opacity: 0.5 }} />
        </div>

        {/* Three feature cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {ABOUT_FEATURE_CARDS.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-[20px]"
              style={{
                background: "#1c1a28",
                border: "1px solid rgba(193,178,247,0.18)",
                boxShadow: "0 8px 30px -12px rgba(13,17,23,0.6)",
              }}
            >
              <div className="px-6 pt-6 pb-3">
                <p
                  className="font-serif text-[18px] font-bold leading-[1.25] lg:text-[20px]"
                  style={{ color: "#fff", letterSpacing: "-0.01em" }}
                >
                  {card.title}
                </p>
              </div>
              <div
                className="relative h-[180px] w-full overflow-hidden lg:h-[200px]"
                style={{ background: "#0D1117" }}
              >
                <Image
                  src={asset(card.image)}
                  alt={card.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Qualify steps strip */}
        <div
          id="qualify"
          className="mt-20 rounded-[24px] px-6 py-10 lg:mt-24 lg:px-12 lg:py-14"
          style={{
            background:
              "radial-gradient(ellipse at 80% 0%, rgba(82,88,228,0.18) 0%, transparent 50%), rgba(28,26,40,0.6)",
            border: "1px solid rgba(193,178,247,0.18)",
          }}
        >
          <p
            className="mb-3 text-center text-[12px] uppercase tracking-[0.22em]"
            style={{ color: "#B9FFFF", fontWeight: 500 }}
          >
            How to qualify
          </p>
          <h3
            className="font-serif mx-auto mb-10 text-center text-[28px] font-bold leading-[1.1] lg:text-[40px]"
            style={{ color: "#fff", letterSpacing: "-0.015em", maxWidth: "20ch" }}
          >
            Three steps to the Cross.
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {QUALIFY_STEPS.map((step) => (
              <div key={step.number} className="flex flex-col items-start">
                <span
                  className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full font-mono text-[14px] font-bold"
                  style={{
                    background: "#FF7AE2",
                    color: "#0D1117",
                  }}
                >
                  {step.number}
                </span>
                <h4
                  className="font-serif mb-2 text-[20px] font-bold"
                  style={{ color: "#fff", letterSpacing: "-0.01em" }}
                >
                  {step.title}
                </h4>
                <p className="m-0 text-[14px] leading-[1.6]" style={{ color: "#C1B3F7" }}>
                  <Markdown text={step.description} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Markdown({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <a
        key={m.index}
        href={m[2]}
        target="_blank"
        rel="noreferrer"
        style={{ color: "#FF7AE2", borderBottom: "1px dashed rgba(255,122,226,0.4)" }}
      >
        {m[1]}
      </a>
    );
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
