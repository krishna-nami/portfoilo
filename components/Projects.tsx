import { projects, type Project } from "@/lib/data";
import { ButtonLink, Section, Tag } from "./ui";

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="rounded-xl border border-line bg-surface p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          {p.featured && (
            <p className="font-mono text-xs uppercase tracking-widest text-accent">Featured project</p>
          )}
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">{p.name}</h3>
          <p className="mt-1 text-muted">{p.summary}</p>
        </div>
        <div className="flex gap-2">
          {p.live && (
            <ButtonLink href={p.live} external>
              Live site
            </ButtonLink>
          )}
          {p.github && (
            <ButtonLink href={p.github} variant="ghost" external>
              Code
            </ButtonLink>
          )}
        </div>
      </div>

      <p className="mt-6 leading-relaxed">{p.description}</p>

      <h4 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted">What I built</h4>
      <ul className="mt-4 space-y-2.5">
        {p.highlights.map((h) => (
          <li key={h} className="flex gap-3 leading-relaxed">
            <span className="mt-2.5 h-1 w-3 shrink-0 bg-accent" aria-hidden="true" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {p.decisions && p.decisions.length > 0 && (
        <>
          <h4 className="mt-10 text-sm font-semibold uppercase tracking-wider text-muted">
            Engineering decisions
          </h4>
          <dl className="mt-4 grid gap-4 sm:grid-cols-3">
            {p.decisions.map((d) => (
              <div key={d.title} className="rounded-lg border border-line p-4">
                <dt className="font-medium">{d.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">{d.why}</dd>
              </div>
            ))}
          </dl>
        </>
      )}

      <ul className="mt-8 flex flex-wrap gap-2" aria-label="Tech stack">
        {p.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </ul>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" label="02 / Projects" title="Things I've built">
      <div className="space-y-8">
        {projects.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </div>
    </Section>
  );
}
