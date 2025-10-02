// src/app/(main)/page.tsx

import type { Metadata } from "next";
import { homePageJsonLd } from "@/data/schemas/home";
import { Hero } from "@/components/sections/homepage/Hero";
import { ScrollDownArrow } from "@/components/ui/scrollDownArrow";
import { Intro } from "@/components/sections/homepage/Intro";
import { HomeSection } from "@/components/sections/homepage/HomeSection";
import { AlphaDevCard } from "@/components/sections/homepage/AlphaDevCard";
import { ProjectsGrid } from "@/components/sections/homepage/ProjectsGrid";


const META_TITLE = "Oxypteros — Web Developer & Narrative Designer";
const META_DESCRIPTION =
  "A creative web developer and writer. I build thoughtful digital experiences by fusing clean code with compelling copy and narrative design. Explore my portfolio.";
const META_OG_IMAGE = "https://oxypteros.com/og/home.png";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "https://oxypteros.com",
    siteName: "oxypteros",
    images: [
      {
        url: META_OG_IMAGE,
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
    title: META_TITLE,
    description: META_DESCRIPTION,
    siteId: "1315691149579948041",
    creator: "@oxypteros",
    creatorId: "1315691149579948041",
    images: [{ url: META_OG_IMAGE, alt: "Oxypteros logo and tagline." }],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <ScrollDownArrow target="#intro-homepage-section" />
      <Intro />
      <HomeSection title="The Code">
        <AlphaDevCard />
        <ProjectsGrid />
      </HomeSection>
    </>
  );
}
