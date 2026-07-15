import { ImageResponse } from "next/og";

// `force-static` is required for the GH_PAGES export build to collect this route.
export const dynamic = "force-static";

export const alt = "Bar Moshe, for OurCrowd";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// OurCrowd brand: charcoal ink, blue gradient accent, Latin text (Satori default).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #ffffff 0%, #eaf2fa 55%, #dcebf8 100%)",
          color: "#333333",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "linear-gradient(135deg, #03a9d7, #0186c2)",
            }}
          />
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>
            Bar Moshe
            <span style={{ color: "#5a6572", marginLeft: 10 }}>
              for OurCrowd
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 62, fontWeight: 700, lineHeight: 1.1 }}>
            You backed Anthropic.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#0074a8",
            }}
          >
            I build on that stack.
          </div>
          <div style={{ display: "flex", marginTop: 22, fontSize: 26, color: "#5a6572" }}>
            Full-stack engineer shipping AI agents and the Node services around them.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 22, color: "#0074a8", fontWeight: 700 }}>
          bar-for-ourcrowd.vercel.app
        </div>
      </div>
    ),
    { ...size },
  );
}
