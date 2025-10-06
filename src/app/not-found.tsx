// src/app/not-found.tsx

import type { Metadata } from "next";
import { Link } from "@/components/ui/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Page Not Found | oxypteros",
  description: "Even great stories have missing pages.",

  robots: {
    index: false,
    follow: true,
  },

  openGraph: {
    title: "404 — Code Compiled But Page Not Found",
    description: "Even great stories have missing pages.",

    images: [
      {
        url: "https://oxypteros.com/og/home.png",
        width: 1200,
        height: 630,
        alt: "Oxypteros logo and tagline.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "404 — Code Compiled But Page Not Found",
    description: "Even great stories have missing pages.",
    images: [
      {
        url: "https://oxypteros.com/og/home.png",
        alt: "Oxypteros logo and tagline.",
      },
    ],
  },
};

export default function NotFound() {
  return (
    <div className="grid min-h-screen grid-cols-[48px_1fr] grid-rows-[48px_1fr_auto]">
      <Header className="col-span-full row-span-1 sm:col-span-1 sm:row-span-full" />
      <div className="col-span-full row-start-2 row-end-3 sm:col-span-1 sm:row-span-2">
        <main className="flex min-h-screen flex-col">
          <div className="flex w-full grow flex-col items-center justify-center">
            <h1 className="mono-tagline text-center font-mono text-xl leading-relaxed font-extralight tracking-wide text-gray-700 sm:tracking-wider md:text-2xl lg:text-3xl">
              404 <span className="border-r-2 border-brand"></span>
              &nbsp;Code Compiled But Page Not Found
            </h1>
            <p className="inter-menu font-sans-italic mt-8 text-center text-base tracking-wide sm:text-lg md:font-light lg:text-xl">
              &ldquo;Even great stories have missing pages.&rdquo;
            </p>
            <Link variant="underline" href="/" className="mt-2">
              Return to the <em>&ldquo;first chapter&rdquo;</em>
            </Link>
          </div>
          <Footer className="col-span-full row-start-3 sm:col-start-2" />
        </main>
      </div>
      <Toaster position="bottom-center" richColors />
    </div>
  );
}
