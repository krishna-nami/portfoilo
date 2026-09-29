import { about, experience, profile, skills } from "@/lib/data";
import { ButtonLink, Section, Tag } from "./ui";

export function About() {
  return (
    <Section id="about" label="01 / About" title="A bit about me">
      <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
        {about.map((para) => (
          <p key={para}>{para}</p>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" label="03 / Experience" title="Where I've worked">
      <ol className="space-y-12">
        {experience.map((job) => (
          <li
            key={job.company}
            className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-8"
          >
            <p className="font-mono text-sm text-muted">{job.period}</p>
            <div>
              <h3 className="text-lg font-semibold">
                {job.role} <span className="text-muted">· {job.company}</span>
              </h3>
              <ul className="mt-3 space-y-2 leading-relaxed text-muted">
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              {job.stack.length > 0 && (
                <ul
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label="Technologies used"
                >
                  {job.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" label="04 / Skills" title="Tools I work with">
      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.group}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
              {g.group}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" label="05 / Contact" title="Let's talk">
      <p className="max-w-xl text-lg leading-relaxed text-muted">
        I&apos;m looking for my first developer role in Australia. If
        you&apos;re hiring — or just want to chat about the stack — my inbox is
        open.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href={`mailto:${profile.email}`}>
          {profile.email}
        </ButtonLink>
        <ButtonLink href={profile.linkedin} variant="ghost" external>
          LinkedIn
        </ButtonLink>
        <ButtonLink href={profile.github} variant="ghost" external>
          GitHub
        </ButtonLink>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-10 text-sm text-muted">
      <p>
        © {new Date().getFullYear()} {profile.fullName}. Built with Next.js and
        Tailwind CSS.
      </p>
    </footer>
  );
}
