// src/components/sections/homepage/AlphaDevCard.tsx

import type React from "react";
import Image from "next/image";
import { Link } from "@/components/ui/link";
import { Icon } from "@/components/ui/icon";
import alphaPreviewDesktop from "@/assets/img/alpha-preview-desktop.png";

export const AlphaDevCard = (): React.JSX.Element => (
  <div className="mt-8 flex min-h-screen w-full flex-col items-center justify-center">
    <div className="grid grid-cols-12 grid-rows-12">
      <div className="z-10 col-span-full row-start-1 row-end-5 mx-2 flex flex-col shadow-xs sm:row-start-1 sm:row-end-7 md:col-start-1 md:col-end-7 md:row-start-2 md:row-end-12 md:mx-0 md:items-center md:justify-center">
        <Image
          src={alphaPreviewDesktop}
          alt="A preview of the Alpha project."
          priority={false}
          loading="lazy"
          width={1920}
          height={1080}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="bg-background z-20 col-span-full row-start-3 row-end-13 flex flex-col rounded-xs border border-gray-200 px-4 py-8 shadow sm:row-start-5 md:col-start-5 md:col-end-13 md:row-span-full md:items-start md:px-8">
        <h3 className="inter-heading text-lg text-gray-900 sm:text-xl md:text-xl lg:text-2xl xl:text-3xl xl:font-extralight">
          Alpha: The Worry-Free Hugo Theme
        </h3>
        <div className="text-foreground mt-8 space-y-4 text-base font-light md:text-lg">
          <p>
            While it presents a minimal, content-focused interface, Alpha&apos;s
            true complexity lies in its architecture. I designed it to help
            beginners navigate their first Jamstack project by preventing common
            mistakes and reducing technical overhead.
          </p>
          <p>
            My custom-built validator, <strong>LiVa</strong>, catches errors by
            delivering real-time feedback. The theme&apos;s shortcode-based
            system reduces technical overhead, allowing users to build layouts
            without writing code.
          </p>
          <p>
            I built the theme with a strict commitment to privacy-by-default,
            high performance, and automated, extensible SEO.
          </p>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex shrink-0 gap-4">
            <Icon name="hugo" variant="stack" />
            <Icon name="javascript" variant="stack" />
            <Icon name="tailwindcss" variant="stack" />
          </div>
          <div className="flex grow flex-col items-center justify-end gap-6 sm:flex-row">
            <Link
              variant="button"
              href="https://alpha.oxypteros.com"
              isExternal
              hideIndicator
            >
              Preview the theme
            </Link>
            <Link
              variant="plain"
              className="text-sm font-medium"
              href="https://github.com/oxypteros/alpha"
              isExternal
              hideIndicator
            >
              Explore on GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
