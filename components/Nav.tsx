import { profile } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "/resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-bg/80 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <a href="#top" className="font-mono text-sm font-semibold">
          {profile.name.toLowerCase()}
          <span className="text-accent">.dev</span>
        </a>
        <ul className="flex gap-4 text-sm text-muted sm:gap-7">
          {links.map((l) => (
            <li
              key={l.href}
              className={l.href === "#about" ? "hidden sm:block" : ""}
            >
              <a href={l.href} className="transition-colors hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}
