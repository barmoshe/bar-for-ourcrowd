// HeroBackdrop, OurCrowd's signature hero motif rebuilt from scratch: a faint
// blue grid with a rising line-chart + candlesticks (their homepage backdrop is
// the same "investment lifecycle" chart). Decorative, aria-hidden. Coordinates
// rounded to 2dp so server/client render identical strings (no hydration mismatch).
export function HeroBackdrop() {
  // Rising candlesticks along the baseline.
  const candles = [
    { x: 120, y: 300, h: 46, up: true },
    { x: 200, y: 280, h: 60, up: true },
    { x: 280, y: 300, h: 40, up: false },
    { x: 360, y: 250, h: 74, up: true },
    { x: 440, y: 262, h: 58, up: false },
    { x: 520, y: 214, h: 86, up: true },
    { x: 600, y: 196, h: 72, up: true },
    { x: 680, y: 226, h: 52, up: false },
    { x: 760, y: 168, h: 96, up: true },
    { x: 840, y: 140, h: 84, up: true },
  ];
  return (
    <svg
      className="ourcrowd-hero-bg"
      viewBox="0 0 960 440"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="oc-grid"
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M48 0H0V48"
            fill="none"
            stroke="#0074a8"
            strokeOpacity="0.08"
            strokeWidth="1"
          />
        </pattern>
        <linearGradient id="oc-line" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#03a9d7" />
          <stop offset="1" stopColor="#0186c2" />
        </linearGradient>
      </defs>

      <rect width="960" height="440" fill="url(#oc-grid)" />

      {/* candlesticks */}
      {candles.map((c, i) => (
        <g
          key={i}
          className="ourcrowd-anim-rise"
          style={{ animationDelay: `${(i * 0.08).toFixed(2)}s` }}
        >
          <line
            x1={c.x}
            y1={c.y - 12}
            x2={c.x}
            y2={c.y + c.h + 12}
            stroke={c.up ? "#6ecc36" : "#0074a8"}
            strokeOpacity="0.35"
            strokeWidth="2"
          />
          <rect
            x={c.x - 7}
            y={c.y}
            width="14"
            height={c.h}
            rx="1.5"
            fill={c.up ? "#6ecc36" : "#0074a8"}
            fillOpacity="0.18"
            stroke={c.up ? "#6ecc36" : "#0074a8"}
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />
        </g>
      ))}

      {/* rising trend line through the closes */}
      <polyline
        className="ourcrowd-anim-draw"
        style={{ ["--len" as string]: "1000" }}
        points="120,300 200,280 280,300 360,250 440,262 520,214 600,196 680,226 760,168 840,140"
        fill="none"
        stroke="url(#oc-line)"
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}
