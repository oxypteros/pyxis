// src/lib/fonts/wopr.ts
import localFont from "next/font/local";

export const warText = localFont({
  src: [
    {
      path: "../../../public/fonts/wartext/wartext.otf.woff2",
      style: "normal",
    },
  ],
  variable: "--font-wopr",
  display: "swap",
  preload: true,
  declarations: [
    { prop: "font-family", value: "WarText Regular" },
  ],
});
