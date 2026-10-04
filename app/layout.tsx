import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { profile } from "@/lib/data";
import "./globals.css";
const themeScript = `try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`;

const title = `${profile.fullName} — ${profile.role}`;
export const metadata: Metadata = {
  metadataBase: new URL(profile.website),
  title: { default: title, template: `%s | ${profile.fullName}` },

  description: profile.tagline,
  authors: [{ name: profile.fullName, url: profile.website }],
  creator: profile.fullName,
  alternates: { canonical: "/" },

  openGraph: {
    type: "website",
    url: "/",
    siteName: profile.fullName,
    title,
    description: profile.tagline,
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-AU"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Runs before paint so a saved dark preference doesn't flash white first */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>

      <body className="min-h-screen font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
