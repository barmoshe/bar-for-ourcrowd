// Centerpiece, the hero's signature graphic.
//
// OurCrowd's own motif is the investment-lifecycle funnel: they screen 150-200
// startups a month and pick 2-3, then track the portfolio. This reframes that
// funnel as an agentic evaluation pipeline the way I'd build it into their
// product: reversible steps (intake, enrichment, due-diligence tool calls) run
// on their own; the one step that moves capital waits for a human. That is the
// honest "real capital flows, reliability matters" story from the JD.
//
// Built as a branded product panel (OurCrowd's hero leans on platform-UI
// mockups), not a flat diagram. Meaningful text stays readable; only the grid is
// decorative. No fractional geometry, so nothing to mismatch on hydration.

type Step = {
  n: string;
  title: string;
  sub: string;
  tag: string;
  kind: "auto" | "running" | "gated";
};

const STEPS: Step[] = [
  { n: "01", title: "Deal intake", sub: "184 opportunities screened", tag: "auto", kind: "auto" },
  { n: "02", title: "LLM enrichment", sub: "summary + risk notes drafted", tag: "auto", kind: "auto" },
  { n: "03", title: "Due-diligence checks", sub: "tool / MCP calls running", tag: "running", kind: "running" },
  { n: "04", title: "Capital decision", sub: "partner sign-off required", tag: "human-gated", kind: "gated" },
  { n: "05", title: "Portfolio monitor", sub: "post-invest signals tracked", tag: "auto", kind: "auto" },
];

export function Centerpiece() {
  return (
    <div
      className="ourcrowd-panel"
      role="img"
      aria-label="A deal-evaluation agent pipeline: intake, LLM enrichment, and due-diligence tool calls run automatically; the capital decision is gated on a human sign-off before the portfolio is monitored."
    >
      <div className="ourcrowd-panel-head">
        <span className="ourcrowd-panel-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="ourcrowd-panel-title">Deal Evaluation Agent</span>
        <span className="ourcrowd-panel-live" aria-hidden="true">
          <em className="ourcrowd-anim-pulse" />
          live
        </span>
      </div>

      <ol className="ourcrowd-panel-steps">
        {STEPS.map((s) => (
          <li key={s.n} className={`ourcrowd-step ourcrowd-step-${s.kind}`}>
            <span className="ourcrowd-step-n" aria-hidden="true">
              {s.n}
            </span>
            <span className="ourcrowd-step-body">
              <span className="ourcrowd-step-title">{s.title}</span>
              <span className="ourcrowd-step-sub">{s.sub}</span>
            </span>
            <span className="ourcrowd-step-tag">{s.tag}</span>
          </li>
        ))}
      </ol>

      <p className="ourcrowd-panel-foot">
        Reversible steps run on their own. The capital decision waits for a human.
      </p>
    </div>
  );
}
