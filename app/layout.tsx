import type { Metadata, Viewport } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import "@/src/marketing/ourcrowd/marketing-base.css";
import "@/src/marketing/ourcrowd/ourcrowd.css";

// OurCrowd's live brand: Merriweather (serif) for display + lead copy, Open Sans
// for UI/body. Read off ourcrowd.com 2026-07-15 via getComputedStyle. Both are
// the real faces (Google-hosted), so no analog swap needed.
const brandSerif = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--ourcrowd-serif",
  display: "swap",
});
const brandSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--ourcrowd-font",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bar-for-ourcrowd.vercel.app"),
  title: "Bar Moshe, for OurCrowd",
  description:
    "You back Anthropic. I ship production tooling on that stack. A full-stack builder for OurCrowd's AI-native product team, built in OurCrowd's own brand.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#333333",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${brandSerif.variable} ${brandSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
