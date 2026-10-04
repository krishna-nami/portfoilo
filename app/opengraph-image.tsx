import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const alt = `${profile.fullName} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "#0c0d0f",
        color: "#e8e6e3",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 96,
          height: 96,
          borderRadius: 22,
          background: "#f5a524",
          color: "#18181b",
          fontSize: 48,
        }}
      >
        KB
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 76, letterSpacing: -2 }}>
          {profile.fullName}
        </div>
        <div style={{ fontSize: 40, color: "#9a9ca3", marginTop: 8 }}>
          {`${profile.role} · ${profile.location}`}
        </div>
        <div style={{ fontSize: 28, color: "#f5a524", marginTop: 36 }}>
          TypeScript · React · Next.js · Node.js · PostgreSQL
        </div>
      </div>
    </div>,
    size,
  );
}
