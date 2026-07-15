"use client";

import { useReveal } from "@/src/lib/reveal";
import { buildMailtoHref, buildWhatsAppHref } from "@/src/lib/contact";
import { Centerpiece } from "./Centerpiece";
import { HeroBackdrop } from "./HeroBackdrop";

// basePath does not rewrite plain <a href> strings, so prefix the CV with
// NEXT_PUBLIC_BASE_PATH for the GH_PAGES mirror (ADR 0169). Keep `CV` a plain
// string literal so cv-forge's rewiring regex still matches it.
const CV = "/Bar_Moshe_CV_OurCrowd.pdf";
const CV_HREF = (process.env.NEXT_PUBLIC_BASE_PATH ?? "") + CV;

// Four focus areas, mapped to the OurCrowd Full Stack Developer JD.
const FOCUS = [
  {
    title: "Node services, owned end to end",
    body: "I design, build, test, deploy, and monitor Node features across SQL and NoSQL stores. Owning full-stack and DevOps on a five-person team at Joomsy is my normal week, not a stretch.",
  },
  {
    title: "AI agents that ship, not demos",
    body: "MDP is an MCP server and npm package other people install. My Claude and Codex plugins are agent tooling in real use. Putting LLMs into a product is the work I already do.",
  },
  {
    title: "Low-code orchestration, wired to real services",
    body: "I connect Make and n8n to custom Node services, so the low-code layer and a typed backend meet cleanly instead of drifting apart. That seam is exactly what the role describes.",
  },
  {
    title: "Reliability where capital moves",
    body: "AWS, Docker, Kubernetes, Terraform, CI/CD. I keep reversible work automatic and gate the actions that shouldn't be, the instinct a platform moving real money needs.",
  },
];

// Experience, sourced from bar_builds/jobs/cv.md. Terse CV register.
const EXPERIENCE = [
  {
    role: "Software Developer, Joomsy",
    meta: "05/2025 - present · Israel",
    body: "Primary developer on a five-person early-stage startup. Full-stack across the product plus the DevOps around it, owning features from design through deploy.",
  },
  {
    role: "Freelance AI Builder",
    meta: "05/2026 - present · Independent",
    body: "Scope briefs and ship AI-native MVPs from intake to deploy: LLM apps, MCP tooling, web apps, and a production video-rendering pipeline.",
  },
  {
    role: "Customer Support Engineer, Wochit",
    meta: "10/2021 - present",
    body: "Technical support for a cloud video editor at scale. Troubleshoot, resolve, and feed real user friction back into product and engineering.",
  },
];

// Selected work, live links from bar_builds/site/src/portfolio/data/portfolio.ts.
const WORK = [
  {
    title: "MDP",
    desc: "An MCP server and npm package: a presentation compiler for AI-written content. One source, many design-locked artifacts.",
    tag: "MCP · Node",
    href: "https://github.com/barmoshe/mdp",
  },
  {
    title: "Cross-language data processing",
    desc: "One Temporal workflow coordinating Go, Python, and TypeScript workers, each on its own task queue. Featured on Temporal's Code Exchange.",
    tag: "Distributed",
    href: "https://temporal.io/code-exchange/cross-language-data-processing-service-with-temporal",
  },
  {
    title: "Israelify",
    desc: "Full-stack music-streaming app. React and Node.js with authentication, streaming, and personalized playlists.",
    tag: "Full-stack",
    href: "https://github.com/Gal-Or/IsraelifyApp",
  },
];

function PetalMark() {
  // OurCrowd's pinwheel mark, rebuilt from scratch (not their asset).
  return (
    <svg className="ourcrowd-mark" viewBox="0 0 32 32" aria-hidden="true">
      <g fill="#03a9d7">
        <path d="M16 3c3.3 0 6 2.7 6 6 0 2.4-2.7 4.5-6 7-3.3-2.5-6-4.6-6-7 0-3.3 2.7-6 6-6z" />
        <path d="M29 16c0 3.3-2.7 6-6 6-2.4 0-4.5-2.7-7-6 2.5-3.3 4.6-6 7-6 3.3 0 6 2.7 6 6z" opacity="0.82" />
        <path d="M16 29c-3.3 0-6-2.7-6-6 0-2.4 2.7-4.5 6-7 3.3 2.5 6 4.6 6 7 0 3.3-2.7 6-6 6z" opacity="0.66" />
        <path d="M3 16c0-3.3 2.7-6 6-6 2.4 0 4.5 2.7 7 6-2.5 3.3-4.6 6-7 6-3.3 0-6-2.7-6-6z" opacity="0.5" />
      </g>
      <circle cx="16" cy="16" r="2.4" fill="#0a2540" />
    </svg>
  );
}

export function OurcrowdApp() {
  useReveal();

  const waHref = buildWhatsAppHref(
    "Hi Bar, saw your page built for OurCrowd, let's talk.",
  );
  const mailHref = buildMailtoHref("Bar Moshe, for the OurCrowd Full Stack role");

  return (
    <div className="ourcrowd-root">
      <a className="ourcrowd-skip" href="#main">
        Skip to content
      </a>

      <header className="ourcrowd-topbar">
        <div className="ourcrowd-wrap">
          <nav className="ourcrowd-nav" aria-label="Primary">
            <span className="ourcrowd-wordmark">
              <PetalMark />
              <b>Bar Moshe</b>
              <span className="ourcrowd-for">for OurCrowd</span>
            </span>
            <a className="ourcrowd-nav-cta" href={waHref}>
              Let&apos;s talk
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        {/* --- hero --- */}
        <div className="ourcrowd-hero-band">
          <HeroBackdrop />
          <section className="ourcrowd-wrap ourcrowd-hero" data-reveal>
            <div>
              <span className="ourcrowd-hero-eyebrow">
                <i />
                Full Stack Developer · AI-native product
              </span>
              <h1>
                OurCrowd backed Anthropic.
                <br />I build on that{" "}
                <span className="ourcrowd-blue-word">stack</span> for a living.
              </h1>
              <p className="ourcrowd-lede">
                I&apos;m a full-stack engineer who ships AI agents and the Node
                services around them, from idea to production. You put LLMs at
                the core of the platform. That is the work I already do.
              </p>
              <div className="ourcrowd-cta-row">
                <a className="ourcrowd-btn" href={waHref}>
                  WhatsApp me
                </a>
                <a className="ourcrowd-btn-ghost" href={mailHref}>
                  Email
                </a>
                <a className="ourcrowd-btn-ghost" href={CV_HREF}>
                  Download CV
                </a>
              </div>
            </div>
            <div className="ourcrowd-centerpiece">
              <Centerpiece />
            </div>
          </section>
        </div>

        {/* --- focus areas --- */}
        <section
          className="ourcrowd-wrap ourcrowd-section"
          data-reveal
          aria-labelledby="focus-h"
        >
          <p className="ourcrowd-eyebrow">Where I&apos;d plug in</p>
          <h2 className="ourcrowd-h2" id="focus-h">
            Built for the role you posted
          </h2>
          <p className="ourcrowd-section-intro">
            The job asks for a Node builder who has already put AI agents into
            production and can wire low-code orchestration to real services.
            Here is how that maps to what I ship.
          </p>
          <div className="ourcrowd-grid">
            {FOCUS.map((f, i) => (
              <article className="ourcrowd-card" key={i}>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* --- experience + education --- */}
        <section
          className="ourcrowd-wrap ourcrowd-section"
          data-reveal
          aria-labelledby="exp-h"
        >
          <p className="ourcrowd-eyebrow">Track record</p>
          <h2 className="ourcrowd-h2" id="exp-h">
            Experience &amp; education
          </h2>
          <div className="ourcrowd-timeline">
            {EXPERIENCE.map((e, i) => (
              <div className="ourcrowd-tl-item" key={i}>
                <span className="ourcrowd-tl-role">{e.role}</span>
                <span className="ourcrowd-tl-meta">{e.meta}</span>
                <p>{e.body}</p>
              </div>
            ))}
          </div>
          <p className="ourcrowd-edu">
            <b>B.Sc. Computer Science</b>, Afeka College of Engineering. Plus a
            Wix DevOps workshop (EKS, Kubernetes, Terraform, microservices) and
            the Coding Academy full-stack bootcamp (Node.js, React, MongoDB).
          </p>
        </section>

        {/* --- selected work --- */}
        <section
          className="ourcrowd-wrap ourcrowd-section"
          data-reveal
          aria-labelledby="work-h"
        >
          <p className="ourcrowd-eyebrow">Shipped, public</p>
          <h2 className="ourcrowd-h2" id="work-h">
            Selected work
          </h2>
          <p className="ourcrowd-section-intro">
            Installable, externally validated, and online. Proof the agent and
            backend work is real, not a slide.
          </p>
          <div className="ourcrowd-work">
            {WORK.map((w, i) => (
              <a key={i} href={w.href} target="_blank" rel="noopener noreferrer">
                <span className="ourcrowd-work-title">{w.title}</span>
                <span className="ourcrowd-work-tag">{w.tag}</span>
                <span className="ourcrowd-work-desc">{w.desc}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* --- contact close --- */}
      <section
        className="ourcrowd-close-band"
        data-reveal
        aria-labelledby="contact-h"
      >
        <div className="ourcrowd-wrap ourcrowd-section">
          <p className="ourcrowd-eyebrow" style={{ color: "#b7e59a" }}>
            Next step
          </p>
          <h2 className="ourcrowd-h2" id="contact-h">
            Let&apos;s build the AI layer of OurCrowd&apos;s platform.
          </h2>
          <p className="ourcrowd-section-intro">
            I&apos;m in Israel and reachable for the Tel Aviv team. Happy to walk
            through the pipeline above, or grab a coffee.
          </p>
          <div className="ourcrowd-cta-row">
            <a className="ourcrowd-btn" href={waHref}>
              WhatsApp me
            </a>
            <a className="ourcrowd-btn-ghost" href={mailHref}>
              Email
            </a>
          </div>
        </div>
      </section>

      <footer className="ourcrowd-foot">
        <div className="ourcrowd-wrap">
          Built by Bar Moshe as a job application. Not affiliated with or
          endorsed by OurCrowd; their brand is shown to demonstrate fit.
        </div>
      </footer>
    </div>
  );
}
