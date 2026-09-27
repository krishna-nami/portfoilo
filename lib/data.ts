// All site content lives here. Edit this file to update the portfolio —
// no need to touch the components.
// Anything marked TODO needs your real details before you deploy.

export const profile = {
  name: "Krishna",

  fullName: "Krishna Banstola",
  role: "Full-Stack Developer",
  location: "Canberra, ACT",
  tagline:
    "I build full-stack web apps with TypeScript, React and Node — from the database schema to the deploy pipeline.",
  availability: "Open to junior / graduate developer roles in Australia",
  email: "krishna108is.me@gmail.com",
  github: "https://github.com/krishna-nami/tradieWebApp",
  linkedin: "https://www.linkedin.com/in/krishna-banstola-867310100/",
  resume: "/resume",
};

export const about = [
  "I'm a full-stack developer based in Canberra. I like owning a feature end to end: designing the data model, writing the API, building the UI, and getting it running in production.",
  "My main project, TradieHub, is a marketplace connecting Australian customers with tradies. Building it taught me the parts tutorials skip — payment flows with real edge cases, auth that survives a page refresh, and infrastructure that fits inside a free tier.",
  "Before that I worked on React and Node.js projects at Outback Yak, where accessibility (WCAG 2.1) was part of the definition of done, and completed an internship at Evalue8 Sustainability.",
];

export type Project = {
  name: string;
  summary: string;
  description: string;
  highlights: string[];
  decisions?: { title: string; why: string }[];
  stack: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "TradieHub",
    featured: true,
    summary: "Full-stack marketplace for booking and paying Australian tradies",
    description:
      "Customers find a tradie, book them directly, receive an itemised quote with GST, and pay through Stripe. Tradies onboard to Stripe Connect and are paid out when the job is marked complete.",
    highlights: [
      "REST API in Express 5 + TypeScript over an 18-model Prisma schema on PostgreSQL (Neon)",
      "Booking state machine with a full audit log of every status change",
      "Quote builder with line items and live GST calculation",
      "Stripe Payment Intents, Connect Express onboarding, webhooks, and payouts on job completion",
      "Three-party refund flow (requester → other party → admin) with partial refunds",
      "JWT auth: access token held in memory, refresh token in an httpOnly cookie",
      "Next.js App Router frontend with React Query for server state and Zustand for UI state",
    ],
    decisions: [
      {
        title: "Charge to the platform, pay out on completion",
        why: "Holding funds until the job is done protects customers, and keeping payout in its own service means a failed transfer is logged without blocking the job from completing.",
      },
      {
        title: "One global error handler",
        why: "Every failure throws a typed ApiError that a single middleware formats, relying on Express 5's native async error handling — no try/catch or asyncHandler wrappers in controllers.",
      },
      {
        title: "Build images in CI, pull on EC2",
        why: "Images are built in GitHub Actions and pushed to ECR, so the t2.micro only pulls and runs them — keeping RAM free on a free-tier instance.",
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Express 5",
      "Prisma",
      "PostgreSQL",
      "Stripe Connect",
      "Redis / BullMQ",
      "Docker",
      "AWS (EC2, ECR, S3)",
      "GitHub Actions",
    ],
    github: "https://github.com/krishna-nami/tradieWebApp",
    live: "https://www.gettradiehub.com/", // TODO: add the live URL once deployed — the button appears automatically
  },
  // Add more projects here, e.g.
  // {
  //   name: "Project name",
  //   summary: "One line",
  //   description: "Two or three sentences.",
  //   highlights: ["...", "..."],
  //   stack: ["React", "Node.js"],
  //   github: "https://github.com/...",
  // },
];

export type Job = {
  company: string;
  role: string;
  period: string;
  points: string[];
  stack: string[];
};

export const experience: Job[] = [
  {
    company: "Outback Yak",
    role: "Web Developer", // TODO: confirm your exact title
    period: "20XX – 20XX", // TODO
    points: [
      "Built and maintained features with React on the frontend and Node.js on the backend",
      "Implemented accessible UI to WCAG 2.1 standards — semantic markup, keyboard navigation and screen-reader support",
      // TODO: add one line with a concrete outcome (what you shipped, who used it)
    ],
    stack: ["React", "Node.js", "JavaScript", "WCAG 2.1"],
  },
  {
    company: "Evalue8 Sustainability",
    role: "Intern", // TODO: confirm title
    period: "20XX", // TODO
    points: [
      // TODO: replace with what you actually worked on
      "Describe the main thing you built or contributed to",
      "Describe a tool, process or result you're proud of",
    ],
    stack: [], // TODO
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "React Query", "Zustand"],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Redis / BullMQ",
      "Zod",
      "Stripe",
    ],
  },
  {
    group: "Tooling & DevOps",
    items: [
      "Docker",
      "Git",
      "GitHub Actions",
      "AWS",
      "Nginx",
      "Vercel",
      "Jest",
    ],
  },
];
