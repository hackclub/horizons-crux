import Image from "next/image";
import { EVENT, HACKCLUB } from "@/lib/content";
import { asset } from "@/lib/asset";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-20"
      style={{
        background: "#0D1117",
        borderTop: "1px solid rgba(193,178,247,0.18)",
      }}
    >
      {/* Sky-like backdrop, lightly tinted */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(82,88,228,0.25) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(255,122,226,0.10) 0%, transparent 50%)",
        }}
      />

      {/* Center character */}
      <div className="relative mx-auto flex justify-center px-6 pb-10">
        <Image
          src={asset("/art/nautilis-decal-glow.png")}
          alt=""
          aria-hidden="true"
          width={520}
          height={520}
          className="h-auto w-[260px] lg:w-[440px]"
          style={{
            animation: "bob 9s ease-in-out infinite alternate",
            filter: "drop-shadow(0 30px 60px rgba(82,88,228,0.35))",
          }}
        />
      </div>

      {/* Bottom bar */}
      <div
        className="relative mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-5 px-6 py-6 lg:px-7"
        style={{ borderTop: "1px solid rgba(193,178,247,0.18)" }}
      >
        <a
          href="#top"
          className="flex items-center gap-2"
          style={{ textDecoration: "none", borderBottom: "none" }}
        >
          <Image
            src={asset("/art/icon.png")}
            alt=""
            width={28}
            height={22}
            style={{ height: 22, width: "auto" }}
          />
          <span
            className="font-serif text-[14px] font-semibold"
            style={{ color: "#fff" }}
          >
            Horizons Crux 2026
          </span>
        </a>

        <div className="flex flex-wrap items-center gap-5 text-[13px]">
          <a
            href={HACKCLUB.conduct}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[#FF7AE2]"
            style={{ color: "#C1B3F7", textDecoration: "none", borderBottom: "none" }}
          >
            Hack Club Code of Conduct
          </a>
          <a
            href={`mailto:${EVENT.email}`}
            className="transition-colors hover:text-[#FF7AE2]"
            style={{ color: "#C1B3F7", textDecoration: "none", borderBottom: "none" }}
          >
            {EVENT.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
