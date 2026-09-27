import { profile } from "@/lib/data";
import { ButtonLink } from "./ui";

export default function Hero() {
  return (
    <section id="top" className="pb-20 pt-20 sm:pb-28 sm:pt-28">
      <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
        {profile.availability}
      </p>
      <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-6xl">
        Hi, I&apos;m {profile.name}.
        <span className="mt-2 block text-muted">{profile.role} in {profile.location}.</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{profile.tagline}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="#projects">See my work</ButtonLink>
        <ButtonLink href={profile.github} variant="ghost" external>
          GitHub
        </ButtonLink>
        <ButtonLink href={profile.resume} variant="ghost" external>
          Resume
        </ButtonLink>
      </div>
    </section>
  );
}
