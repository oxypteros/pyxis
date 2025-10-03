// src/components/sections/homepage/CopyCard.tsx

import type React from "react";
import { Link } from "@/components/ui/link";

export const CopyCard = (): React.JSX.Element => (
  <div className="mt-42 flex min-h-screen w-full flex-col items-center">
    <div className="flex flex-col gap-8 md:flex-row">
      <div className="flex flex-col border border-gray-100 px-4 py-8 text-balance sm:p-8 md:w-1/2">
        <h3 className="inter-heading text-lg text-gray-900 sm:text-xl">
          Documentation
        </h3>
        <blockquote className="inter-heading my-2 text-sm italic">
          &ldquo;Writing code without documentation
          <br /> is like showering with an umbrella.&rdquo;
        </blockquote>

        <p className="py-4">
          Code explains <em>how</em>. Documentation must explain <em>why</em>.
          It&apos;s a different skillset, requiring a shift from communicating
          with machines to communicating with people.
        </p>
        <p>
          It anticipates questions, clarifies intent, and respects the time of
          the next developer. It is the act of transforming a functional piece
          of code into a truly usable, maintainable tool.
        </p>
        <div className="mt-auto flex w-full items-center justify-center pt-12">
          <Link
            href="https://alpha.oxypteros.com/docs/"
            variant="subtitled"
            isExternal
            hideIndicator
            aria-label="Opens in a new tab:"
          >
            <span>The Architect</span>
            <span className="text-xs font-light group-hover:text-gray-900">
              See a sample documentation
            </span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col border border-gray-100 p-4 sm:p-8 md:w-1/2">
        <h3 className="inter-heading text-lg text-gray-900 sm:text-xl">
          Tutorials
        </h3>
        <blockquote className="inter-heading my-2 text-sm text-balance italic">
          &ldquo;Documentation without tutorials
          <br /> is like swimming with a raincoat&rdquo;
        </blockquote>

        <p className="py-4">
          Where documentation speaks to peers, tutorials must speak to everyone.
          They are an act of empathy, and the ultimate proof of a project&apos;s
          usability.
        </p>
        <p>
          A great tutorial translates expert knowledge into a clear, linear
          narrative. It patiently transforms complex procedures into simple,
          actionable steps, empowering newcomers to succeed on their own.
        </p>

        <div className="mt-auto flex w-full items-center justify-center pt-12">
          <Link
            href="https://alpha.oxypteros.com/get-started/"
            variant="subtitled"
            isExternal
            hideIndicator
            aria-label="Opens in a new tab:"
          >
            <span>The Guide</span>
            <span className="text-xs font-light group-hover:text-gray-900">
              Follow a step-by-step tutorial
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
