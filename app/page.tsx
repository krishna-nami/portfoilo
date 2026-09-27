import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { About, Contact, Experience, Footer, Skills } from "@/components/Sections";

export default function Home() {
  return (
    <>
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
