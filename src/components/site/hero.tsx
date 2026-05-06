import Image from "next/image";
import { EVENT } from "@/lib/content";
import { asset } from "@/lib/asset";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ isolation: "isolate", paddingTop: "60px", paddingBottom: "120px" }}
    >
      {/* Background image */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage: `url(${asset("/art/hero-bg.png")})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(13,17,23,0.55) 0%, rgba(13,17,23,0) 55%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 -z-10"
        style={{
          height: "40%",
          background:
            "linear-gradient(180deg, rgba(13,17,23,0) 0%, rgba(13,17,23,0.5) 60%, #0D1117 100%)",
        }}
      />

      {/* Left character — possum on a "cloud" of jellyfish glow */}
      <Image
        src={asset("/art/dark-possum-decal.png")}
        alt=""
        aria-hidden="true"
        width={420}
        height={420}
        className="pointer-events-none absolute hidden select-none lg:block"
        style={{
          left: "-90px",
          bottom: "8%",
          width: "360px",
          height: "auto",
          opacity: 0.95,
          animation: "bob 8s ease-in-out infinite alternate",
          zIndex: 1,
        }}
      />

      {/* Right character — nautilus glow */}
      <Image
        src={asset("/art/nautilis-decal-glow.png")}
        alt=""
        aria-hidden="true"
        width={420}
        height={420}
        className="pointer-events-none absolute hidden select-none lg:block"
        style={{
          right: "-40px",
          bottom: "10%",
          width: "320px",
          height: "auto",
          opacity: 0.9,
          animation: "bob 9s ease-in-out infinite alternate-reverse",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        className="relative mx-auto flex flex-col items-center px-6 pt-[40px] text-center lg:px-12 lg:pt-[60px]"
        style={{ maxWidth: 1280, zIndex: 2 }}
      >
        {/* Logo wordmark */}
        <Image
          src={asset("/art/logo-crux.png")}
          alt="Horizons Crux 2026"
          width={760}
          height={240}
          priority
          className="logo-glow mb-8 h-auto w-[clamp(280px,70vw,700px)]"
        />

        {/* Subtitle line */}
        <p
          className="mb-8 text-[16px] font-medium lg:text-[20px]"
          style={{
            color: "#C1B3F7",
            fontFamily: "var(--font-sans)",
            letterSpacing: "0.01em",
          }}
        >
          July 10–12, {EVENT.year} · Sydney, {EVENT.country}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
          <a
            href={EVENT.applyUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-6 py-3 text-[15px] font-semibold transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
            style={{
              background: "#fff",
              color: "#0D1117",
              textDecoration: "none",
              borderBottom: "none",
              border: "1px solid rgba(193,178,247,0.4)",
              boxShadow: "0 6px 18px rgba(13,17,23,0.4)",
            }}
          >
            Apply to qualify
          </a>
          <a
            href={`mailto:${EVENT.email}?subject=Mentor%20at%20Horizons%20Crux`}
            className="rounded-full px-6 py-3 text-[15px] font-semibold transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
            style={{
              background: "#fff",
              color: "#0D1117",
              textDecoration: "none",
              borderBottom: "none",
              border: "1px solid rgba(193,178,247,0.4)",
              boxShadow: "0 6px 18px rgba(13,17,23,0.4)",
            }}
          >
            Apply to mentor
          </a>
        </div>

        {/* Sponsor link */}
        <a
          href={`mailto:${EVENT.email}?subject=Sponsoring%20Horizons%20Crux`}
          className="mt-6 text-[14px] font-medium"
          style={{
            color: "#B9FFFF",
            textDecoration: "underline",
            textUnderlineOffset: 4,
          }}
        >
          Interested in sponsoring?
        </a>
      </div>
    </section>
  );
}
