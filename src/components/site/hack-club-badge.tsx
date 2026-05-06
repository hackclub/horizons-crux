export default function HackClubBadge() {
  return (
    <a
      href="https://hackclub.com"
      target="_blank"
      rel="noreferrer"
      aria-label="A Hack Club event"
      className="fixed right-0 top-0 z-[60]"
      style={{
        textDecoration: "none",
        borderBottom: "none",
      }}
    >
      <div
        className="flex w-[78px] flex-col items-center pb-[10px] pt-[8px] text-center transition-transform hover:-translate-y-0.5 lg:w-[92px]"
        style={{
          background: "linear-gradient(180deg, #EC3750 0%, #D62B40 100%)",
          boxShadow: "0 6px 18px rgba(236,55,80,0.35)",
          clipPath:
            "polygon(0 0, 100% 0, 100% 78%, 50% 100%, 0 78%)",
          color: "#fff",
          fontFamily: "var(--font-sans)",
        }}
      >
        <span
          className="block text-[10px] font-bold uppercase tracking-[0.18em] lg:text-[11px]"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          A
        </span>
        <span
          className="font-serif block text-[15px] font-bold leading-[1.05] lg:text-[17px]"
          style={{ letterSpacing: "-0.01em" }}
        >
          Hack Club
        </span>
        <span
          className="mt-[2px] block text-[8px] font-bold uppercase tracking-[0.2em] lg:text-[9px]"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          Event
        </span>
      </div>
    </a>
  );
}
