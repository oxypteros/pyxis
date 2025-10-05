// src/components/sections/homepage/HomeSection.tsx

import type React from "react";

type HomeSectionProps = {
  title: string;
  children: React.ReactNode;
};

export const HomeSection = ({
  title,
  children,
}: HomeSectionProps): React.JSX.Element => {
  const headingId = `${title.toLowerCase().replace(/\s+/g, "-")}-heading`;

  return (
    <section
      aria-labelledby={headingId}
      className="mx-auto mt-48 w-full max-w-6xl px-4 sm:pl-5"
    >
      {/* Add vertical rhythm */}
      <h2
        id={headingId}
        className="mono-tagline font-mono text-base font-light tracking-wide text-gray-700 uppercase sm:tracking-wider"
      >
        {title}
      </h2>
      {children}
    </section>
  );
};
