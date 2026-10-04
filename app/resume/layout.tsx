import type { Metadata } from "next";
import type { ReactNode } from "react";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${profile.fullName}, ${profile.role} in ${profile.location}.`,
  alternates: { canonical: "/resume" },
};

export default function ResumeLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
