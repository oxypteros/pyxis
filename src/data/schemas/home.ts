// src/data/schemas/home.ts

import type { ProfilePage, WithContext } from "schema-dts";
import { homeAlphaSchema } from "./homeAlpha";
export const homePageJsonLd: WithContext<ProfilePage> = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Oxypteros — The Portfolio of Stratis Oxypteros",
  url: "https://oxypteros.com/",
  inLanguage: "en",
  copyrightYear: new Date().getFullYear(),
  copyrightHolder: {
    "@type": "Person",
    name: "Stratis Oxypteros",
    url: "https://oxypteros.com/",
  },
  publisher: {
    "@type": "Organization",
    name: "oxypteros",
    url: "https://oxypteros.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://oxypteros.com/logo-oxypteros.svg",
    },
  },
  mainEntity: {
    "@type": "Person",
    name: "Stratis Oxypteros",
    alternateName: "oxypteros",
    url: "https://oxypteros.com/",
    jobTitle: "Web Developer & Narrative Designer",
    email: "hello@oxypteros.com",
    image: {
      "@type": "ImageObject",
      url: "https://oxypteros.com/og/home.png",
      width: {
        "@type": "QuantitativeValue",
        value: 1200,
        unitText: "px",
      },
      height: {
        "@type": "QuantitativeValue",
        value: 630,
        unitText: "px",
      },
    },
    knowsAbout: [
      "Web Development",
      "React",
      "Next.js",
      "Hugo",
      "Copywriting",
      "Narrative Design",
      "UI/UX",
    ],

    sameAs: [
      "https://x.com/oxypteros",
      "https://github.com/oxypteros",
      "https://bsky.app/profile/oxypteros.com",
    ],
  },
  description:
    "A creative web developer and writer. I build thoughtful digital experiences by fusing clean code with compelling copy and narrative design. Explore my portfolio.",
  image: {
    "@type": "ImageObject",
    url: "https://oxypteros.com/og/home.png",
    width: {
      "@type": "QuantitativeValue",
      value: 1200,
      unitText: "px",
    },
    height: {
      "@type": "QuantitativeValue",
      value: 630,
      unitText: "px",
    },
    workExample: [homeAlphaSchema],
  },
};
