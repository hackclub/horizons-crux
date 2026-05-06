"use client";

import { useState } from "react";
import Image from "next/image";
import { EVENT, NAV_LINKS } from "@/lib/content";
import { asset } from "@/lib/asset";

export default function Nav() {
  const [open, setOpen] = useState(false);

  function scrollTo(id: string) {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header className="sticky top-0 z-50 w-full px-3 pt-3 lg:px-6 lg:pt-5">
      <div
        className="mx-auto flex max-w-[1100px] items-center gap-3 rounded-full px-4 py-[10px] lg:gap-6 lg:px-6 lg:py-[11px]"
        style={{
          background: "rgba(28,26,40,0.85)",
          backdropFilter: "blur(18px) saturate(140%)",
          WebkitBackdropFilter: "blur(18px) saturate(140%)",
          border: "1px solid rgba(193,178,247,0.22)",
          boxShadow: "0 10px 40px -12px rgba(13,17,23,0.6)",
        }}
      >
        {/* Brand */}
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); scrollTo("top"); }}
          className="flex shrink-0 items-center gap-2 text-white"
          style={{ textDecoration: "none", borderBottom: "none" }}
        >
          <Image
            src={asset("/art/icon.png")}
            alt=""
            width={34}
            height={26}
            className="object-contain"
            style={{ height: 26, width: "auto" }}
          />
          <span className="font-serif text-[15px] font-semibold tracking-[-0.01em] lg:text-base">
            Horizons <b style={{ color: "#FF7AE2" }}>Crux</b>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="m-0 hidden flex-1 list-none justify-center gap-1 p-0 md:flex">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            return (
              <li key={href}>
                <button
                  onClick={() => scrollTo(id)}
                  className="cursor-pointer rounded-full border-none bg-transparent px-[14px] py-[7px] text-[14px] transition-colors"
                  style={{ color: "#C1B3F7", fontFamily: "var(--font-sans)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(193,178,247,0.10)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#C1B3F7"; e.currentTarget.style.background = "transparent"; }}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <a
          href={EVENT.applyUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden shrink-0 items-center justify-center rounded-full px-[16px] py-[8px] text-[13px] font-semibold transition-transform hover:-translate-y-0.5 md:inline-flex"
          style={{
            background: "#FF7AE2",
            color: "#0D1117",
            textDecoration: "none",
            borderBottom: "none",
            boxShadow: "0 6px 20px rgba(255,122,226,0.3)",
          }}
        >
          Apply
        </a>

        {/* Mobile toggle */}
        <button
          className="ml-auto flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-transparent text-white md:hidden"
          style={{ border: "1px solid rgba(193,178,247,0.35)" }}
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="h-[16px] w-[16px]">
              <path d="M5 5l14 14" /><path d="M19 5L5 19" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="h-[16px] w-[16px]">
              <path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="mx-auto mt-2 max-w-[1100px] rounded-2xl px-3 py-3 md:hidden"
          style={{
            background: "rgba(28,26,40,0.96)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(193,178,247,0.22)",
          }}
        >
          <ul className="m-0 flex list-none flex-col gap-1 p-0">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace("#", "");
              return (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="w-full cursor-pointer rounded-lg border-none bg-transparent px-4 py-3 text-left text-base transition-colors"
                    style={{ color: "#C1B3F7", fontFamily: "var(--font-sans)" }}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
            <li className="mt-1 px-1">
              <a
                href={EVENT.applyUrl}
                target="_blank"
                rel="noreferrer"
                className="block w-full rounded-full px-4 py-3 text-center text-[15px] font-semibold"
                style={{
                  background: "#FF7AE2",
                  color: "#0D1117",
                  textDecoration: "none",
                  borderBottom: "none",
                }}
              >
                Apply
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
