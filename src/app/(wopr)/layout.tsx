// src/app/(wopr)/layout.tsx
import type { Metadata } from "next";
import { warText } from "@/lib/fonts/wopr";

export const metadata: Metadata = {
  title: "WOPR — System Access",
  description: "Connection established. Awaiting user input.",
    robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "--CONNECTION TERMINATED--",
    description: "IDENTIFICATION NOT RECOGNIZED BY SYSTEM",
    url: "https://oxypteros.com/wopr",
    siteName: "oxypteros",
    images: [
      {
        url: "https://oxypteros.com/og/home.png",
        width: 1200,
        height: 630,
        alt: "Oxypteros logo and tagline.",
      },
    ],
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "--CONNECTION TERMINATED--",
    description: "IDENTIFICATION NOT RECOGNIZED BY SYSTEM",
    siteId: "1315691149579948041",
    creator: "@oxypteros",
    creatorId: "1315691149579948041",
    images: [
      {
        url: "https://oxypteros.com/og/home.png",
        alt: "Oxypteros logo and tagline.",
      },
    ],
  },
};


export default function WoprLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${warText.variable}`}>
      {children}
    </div>
  );
}
