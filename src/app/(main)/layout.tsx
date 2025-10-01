// src/app/(main)/layout.tsx
import type React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ReactLenis } from "lenis/react";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-screen grid-cols-[48px_1fr] grid-rows-[48px_1fr_auto]">
      <Header className="col-span-full row-span-1 sm:col-span-1 sm:row-span-full" />
      <div className="col-span-full row-start-2 row-end-3 sm:col-span-1 sm:row-span-2">
        <ReactLenis root>
          <main className="flex min-h-screen flex-col">
            {children}
            <Footer className="col-span-full row-start-3 sm:col-start-2" />
          </main>
        </ReactLenis>
      </div>
      <Toaster position="bottom-center" richColors />
    </div>
  );
}
