// src/components/sections/homepage/Intro.tsx
import type React from "react";
import { SignatureIcon } from "@/components/ui/icons/content/SignatureIcon";


export const Intro = (): React.JSX.Element => (
  <section className="px-4" aria-labelledby="intro-homepage-section">
    <h2 id="intro-homepage-section" className="sr-only">
      Introduction
    </h2>
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="max-w-3xl font-light text-gray-900">
        <p className="inter-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:font-extralight">
          Hello! I am Oxypteros.
        </p>
        <p className="inter-heading mt-2 text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl xl:font-extralight text-gray-700">
          I wrote these words; I wrote the code that renders them.
        </p>
        <div className="mt-8 space-y-4 text-base font-normal text-foreground xl:text-lg">
          <p>
            Every element on this page, visible or hidden, from copy to
            TypeScript, typography to accessibility, is an act of writing.
            That’s what I do. I write for browsers, for devices, and for the
            people they connect.
          </p>
          <p>
            I form narratives through clean code and clear copy, drawing a
            straight line from idea to finished product.
          </p>
        </div>
        <div className="mt-4 mr-2 flex justify-end sm:mt-6 sm:mr-4">
          <SignatureIcon className="w-16 -rotate-6 text-[#48486f] sm:w-20 md:w-24" />
        </div>
      </div>
    </div>
  </section>
);
