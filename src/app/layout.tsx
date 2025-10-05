// app/layout.tsx
import type { Viewport } from "next";
import type { Metadata } from "next";
import "@/styles/globals.css";
import {
  inter,
  interItalic,
  jetBrains,
  jetBrainsItalic,
} from "@/lib/fonts/latin";
import { Sprite } from "@/components/ui/sprite";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport: Viewport = {
  themeColor: "light",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://oxypteros.com"),
  applicationName: "oxypteros",
  authors: [{ name: "oxypteros", url: "https://oxypteros.com" }],
  publisher: "Stratis Oxypteros",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link type="text/plain" rel="author" href="/humans.txt" />
      </head>
      <body
        className={`${inter.variable} ${interItalic.variable} ${jetBrains.variable} ${jetBrainsItalic.variable} antialiased`}
      >
        {children}
        <Sprite />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}