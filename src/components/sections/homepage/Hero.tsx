// src/components/sections/homepage/Hero.tsx

import type React from "react";

export const Hero = (): React.JSX.Element => (
  <div className="relative flex h-screen flex-col items-center justify-center px-4">
    <h1 className="mono-tagline text-center font-mono text-xl font-extralight tracking-wide text-gray-700 sm:tracking-wider md:text-2xl lg:text-3xl xl:text-4xl">
      Writer of code
      <span className="text-brand selection:text-white">,</span> copy and
      narratives
      <span className="text-brand selection:text-white">.</span>
    </h1>
  </div>
);
