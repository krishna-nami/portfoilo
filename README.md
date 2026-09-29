# Krishna Banstola — Portfolio

My personal portfolio and printable resume, built with Next.js 16, TypeScript and Tailwind CSS v4.

**Live:** [krishna-banstola.vercel.app] (https://krishna-banstola.vercel.app)

![Portfolio screenshot](docs/screenshot.png)

## Features

- **Light and dark theme** with a toggle that remembers your choice and doesn't flash the wrong theme on load
- **Printable resume at [`/resume`](https://krishna-banstola.vercel.app/resume)**, laid out for A4 and generated from the same data as the site, so the two never drift apart
- **Single source of content**: all text lives in `lib/data.ts`; components only handle layout
- **Accessible**: semantic HTML, skip-to-content link, visible focus states, keyboard-friendly navigation, respects `prefers-reduced-motion`
- **Fully static**: every page is prerendered at build time, with almost no client-side JavaScript
- **Responsive** from 320px phones up to desktop

## Tech stack

| Area      | Tools                                   |
| --------- | --------------------------------------- |
| Framework | Next.js 16 (App Router), React 19       |
| Language  | TypeScript                              |
| Styling   | Tailwind CSS v4, CSS custom properties  |
| Fonts     | Geist Sans / Geist Mono (self-hosted)   |
| Hosting   | Vercel (auto-deploys on push to `main`) |

## How it works

**Theming.** Colours are defined once as CSS variables in `app/globals.css`, with light values on `:root` and dark values on `.dark`. Tailwind reads those variables, so components use classes like `bg-bg` and `text-muted` and never need `dark:` variants. A small inline script in `<head>` applies the saved theme before the page paints, which prevents a flash of the wrong theme. The toggle icon switches with CSS rather than React state, so the server and client always render the same markup.

**Resume.** `/resume` reads the same `profile`, `projects`, `experience` and `skills` as the homepage and lays them out for A4 with print-only CSS. Browser "Save as PDF" produces a one-page resume with selectable text and working links.

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata, theme script
  page.tsx          Homepage
  resume/page.tsx   Printable A4 resume
  globals.css       Theme tokens and print styles
  icon.svg          Favicon
components/
  Nav.tsx, Hero.tsx, Projects.tsx, Sections.tsx
  ThemeToggle.tsx   Light/dark switch
  ui.tsx            Shared Section, Tag and ButtonLink components
lib/
  data.ts           All site and resume content
```

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Featured project

**[TradieHub](https://github.com/krishna-nami/tradieWebApp)** is a full-stack marketplace for booking and paying Australian tradies, built with Express 5, Prisma, PostgreSQL, Stripe Connect, Docker and AWS.

## Contact

- LinkedIn: [linkedin.com/in/krishna-banstola](https://www.linkedin.com/in/krishna-banstola-867310100/)
- GitHub: [github.com/krishna-banstola](https://github.com/krishna-nami)
