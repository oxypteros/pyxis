// src/data/projects.tsx
import type React from "react";
import type { StaticImageData } from "next/image";

// Import images
import woprPreview from "@/assets/img/wopr-preview.gif";
import pyxisPreview from "@/assets/img/pyxis-preview-desktop.png";
import type { IconName } from "@/components/ui/icon";

type Project = {
  href: string;
  imageSrc: StaticImageData | string;
  imageAlt: string;
  title: string;
  description: React.ReactNode;
  stack: IconName[];
};
export const projects: Project[] = [
  {
    href: "https://github.com/oxypteros/wopr-showcase",
    imageSrc: woprPreview,
    imageAlt: "A GIF showing the WOPR terminal logon prompt.",
    title: "WOPR Terminal ",
    description: (
      <p>
        A terminal application that recreates the narrative experience of
        accessing the <em>WOPR supercomputer</em>, as seen in the 1983 film{" "}
        <strong className="font-medium">WarGames</strong>.
      </p>
    ),
    stack: ["nextjs", "typescript", "tailwindcss"],
  },
  {
    href: "https://github.com/oxypteros/pyxis",
    imageSrc: pyxisPreview,
    imageAlt: "The greek word Pyxis",
    title: "Pyxis Portfolio ",
    description: (
      <p className="text-pretty">
        A portfolio built as its own case study in systemic design. A public
        showcase of pristine accessibility, performance, and pragmatic
        minimalism.
      </p>
    ),
    stack: ["nextjs", "typescript", "tailwindcss"],
  },
  // ... other projects
];
