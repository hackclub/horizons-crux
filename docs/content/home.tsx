import "../App.css";

export default function Home() {
  const eventCity = "Sydney";

  return (
    <div id="hero">
      <div id="hero-content">
        <div id="hero-logo-wrapper">
          <img src="/logo.png" alt="Horizons Crux" id="hero-logo" />
        </div>
        <p id="subtitle">Start now to join us in {eventCity}, July 10-12</p>
        <h1 id="hero-title">
          Build bold projects for free,
          <br />
          at Horizons Oceania 2026
        </h1>
        <p id="caption">Solo or in teams, for high school students ages 13-18.</p>
        <div
          id="hero-signup-strip"
          role="group"
          aria-label="Sign up for Horizons"
        >
          <span id="hero-signup-text">horizons@hackclub.com</span>
          <a
            id="hero-signup-button"
            href="https://horizons.hackclub.com"
            target="_blank"
            rel="noreferrer"
          >
            Start Now
          </a>
        </div>
      </div>
    </div>
  );
}
