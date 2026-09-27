"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { experience, profile, projects, skills } from "@/lib/data";

// ---- Resume-only details (edit these) -------------------------------------
const SUMMARY =
  "Full-stack developer working in TypeScript across React/Next.js and Node/Express, with PostgreSQL and Prisma on the data side. Built TradieHub, a marketplace with Stripe Connect payments, a booking state machine and a Docker + GitHub Actions + AWS pipeline. Commercial experience building accessible UI to WCAG 2.1.";

const PHONE = ""; // optional — shown only if filled in
const WEBSITE = ""; // your portfolio URL once deployed

// The section only appears once this has entries.
const EDUCATION: {
  qualification: string;
  institution: string;
  period: string;
}[] = [
  // { qualification: "Bachelor of ...", institution: "University of ...", period: "20XX – 20XX" },
];
// ---------------------------------------------------------------------------

const pretty = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const printCss = `
  body { background: #e7e7e7; }
  @page { size: A4; margin: 14mm 16mm; }
  @media print {
    body { background: #fff; }
    .no-print { display: none !important; }
    .resume-page { box-shadow: none !important; margin: 0 !important; padding: 0 !important; max-width: none !important; }
    .resume-page a { color: inherit; text-decoration: none; }
    .avoid-break { break-inside: avoid; }
  }
`;

function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-2 mt-5 border-b border-neutral-300 pb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-900">
      {children}
    </h2>
  );
}

export default function ResumePage() {
  const contact: (string | { href: string; label: string })[] = [
    profile.location,
  ];
  if (PHONE) contact.push(PHONE);
  if (profile.email)
    contact.push({ href: `mailto:${profile.email}`, label: profile.email });
  if (WEBSITE) contact.push({ href: WEBSITE, label: pretty(WEBSITE) });
  if (profile.github)
    contact.push({ href: profile.github, label: pretty(profile.github) });
  if (profile.linkedin)
    contact.push({ href: profile.linkedin, label: pretty(profile.linkedin) });

  return (
    <>
      <style>{printCss}</style>

      <div className="no-print mx-auto flex max-w-[210mm] items-center justify-between px-4 pt-6 text-sm text-neutral-700">
        <Link href="/" className="hover:underline">
          ← Back to portfolio
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700"
        >
          Print / Save as PDF
        </button>
      </div>

      <main className="resume-page mx-auto my-6 max-w-[210mm] bg-white px-[16mm] py-[14mm] font-sans text-[10.5pt] leading-snug text-neutral-800 shadow-lg">
        <header>
          <h1 className="text-[22pt] font-semibold tracking-tight text-neutral-950">
            {profile.fullName}
          </h1>
          <p className="mt-0.5 text-[11.5pt] text-neutral-600">
            {profile.role}
          </p>
          <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-0.5 text-[9.5pt] text-neutral-600">
            {contact.map((c, i) => (
              <li
                key={i}
                className="after:ml-3 after:text-neutral-300 after:content-['|'] last:after:content-none"
              >
                {typeof c === "string" ? c : <a href={c.href}>{c.label}</a>}
              </li>
            ))}
          </ul>
        </header>

        <Heading>Summary</Heading>
        <p>{SUMMARY}</p>

        <Heading>Technical skills</Heading>
        <dl className="grid grid-cols-[8.5rem_1fr] gap-x-3 gap-y-0.5">
          {skills.map((g) => (
            <div key={g.group} className="contents">
              <dt className="font-medium text-neutral-900">{g.group}</dt>
              <dd>{g.items.join(", ")}</dd>
            </div>
          ))}
        </dl>

        <Heading>Projects</Heading>
        {projects.map((p) => (
          <section key={p.name} className="avoid-break mb-3">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold text-neutral-950">
                {p.name}{" "}
                <span className="font-normal text-neutral-600">
                  — {p.summary}
                </span>
              </h3>
              <p className="text-[9.5pt] text-neutral-600">
                {[p.live && pretty(p.live), p.github && pretty(p.github)]
                  .filter(Boolean)
                  .join("  ·  ")}
              </p>
            </div>
            <ul className="mt-1 list-disc space-y-0.5 pl-5 marker:text-neutral-400">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <p className="mt-1 text-[9.5pt] text-neutral-600">
              <span className="font-medium text-neutral-800">Stack:</span>{" "}
              {p.stack.join(", ")}
            </p>
          </section>
        ))}

        <Heading>Experience</Heading>
        {experience.map((job) => (
          <section key={job.company} className="avoid-break mb-3">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold text-neutral-950">
                {job.role}{" "}
                <span className="font-normal text-neutral-600">
                  — {job.company}
                </span>
              </h3>
              <p className="text-[9.5pt] text-neutral-600">{job.period}</p>
            </div>
            <ul className="mt-1 list-disc space-y-0.5 pl-5 marker:text-neutral-400">
              {job.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </section>
        ))}

        {EDUCATION.length > 0 && (
          <>
            <Heading>Education</Heading>
            {EDUCATION.map((e) => (
              <div
                key={e.qualification}
                className="flex flex-wrap items-baseline justify-between gap-x-4"
              >
                <p>
                  <span className="font-semibold text-neutral-950">
                    {e.qualification}
                  </span>
                  <span className="text-neutral-600"> — {e.institution}</span>
                </p>
                <p className="text-[9.5pt] text-neutral-600">{e.period}</p>
              </div>
            ))}
          </>
        )}
      </main>
    </>
  );
}
