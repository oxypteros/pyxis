// src/lib/fonts/latin.ts
import localFont from "next/font/local";

export const inter = localFont({
  src: [
    {
      path: "../../assets/fonts/inter-4.1/inter-EN-subset.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0020-007F, U+00A0-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E, U+2022, U+20AC, U+2122",
    },
  ],
});

export const jetBrains = localFont({
  src: [
    {
      path: "../../assets/fonts/jetBrainsMono-2.304/jetBrainsMono-EN-subset.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-jetbrains",
  display: "swap",
  preload: true,
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0020-007F, U+00A0-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E, U+2022, U+20AC, U+2122",
    },
  ],
});

export const interItalic = localFont({
  src: [
    {
      path: "../../assets/fonts/inter-4.1/inter-EN_italic-subset.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-inter-italic",
  display: "swap",
  preload: false,
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0020-007F, U+00A0-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E, U+2022, U+20AC, U+2122",
    },
  ],
});

export const jetBrainsItalic = localFont({
  src: [
    {
      path: "../../assets/fonts/jetBrainsMono-2.304/jetBrainsMono-EN_italic-subset.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-jetbrains-italic",
  display: "swap",
  preload: false,
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+0020-007F, U+00A0-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E, U+2022, U+20AC, U+2122",
    },
  ],
});