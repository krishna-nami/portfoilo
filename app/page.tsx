import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import {
  About,
  Contact,
  Experience,
  Footer,
  Skills,
} from "@/components/Sections";
import { profile, skills } from "@/lib/data";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  url: profile.website,
  jobTitle: profile.role,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Canberra",
    addressRegion: "ACT",
    addressCountry: "AU",
  },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: skills.flatMap((g) => g.items),
};
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Nav />
      <main id="main" className="mx-auto max-w-4xl px-5 sm:px-8">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
