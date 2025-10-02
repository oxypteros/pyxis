// src/components/sections/homepage/HomeSection.tsx

import type React from 'react';

type HomeSectionProps = {
  title: string;
  children: React.ReactNode;
};

export const HomeSection = ({ title, children }: HomeSectionProps): React.JSX.Element => {

  const headingId = `${title.toLowerCase().replace(/\s+/g, '-')}-heading`;

  return (
    <section aria-labelledby={headingId} className="pl-5 pr-4 max-w-6xl mx-auto"> 
    {/* Add vertical rhythm */}
      <h2 
        id={headingId} 
        className="mono-tagline uppercase font-mono text-base font-light tracking-wide sm:tracking-wider text-gray-700 "
      >
        {title}
      </h2>
        {children}
    </section>
  );
};