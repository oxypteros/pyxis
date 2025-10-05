// src/components/Footer.tsx
import type React from "react";
import { cn } from "@/lib/utils";
import { Gatekeeper } from "@/components/Gatekeeper";

type FooterProps = {
  className?: string;
};

export const Footer = ({ className }: FooterProps): React.JSX.Element => {
  const establishedYear = 2025;
  const currentYear = new Date().getFullYear();

  // Logic for the "Elegant" Style (2025-26)
  const shortYear = currentYear.toString().slice(-2);
  const elegantDate =
    establishedYear === currentYear
      ? establishedYear
      : `${establishedYear}-${shortYear}`;

  return (
    <footer
      className={cn(
        "bg-background mt-42 mb-2 flex w-full flex-col justify-center text-center font-sans text-xs text-gray-700 sm:flex-row sm:justify-between",
        className,
      )}
    >
      <p className="px-4">
        &copy; {elegantDate}, oxypteros — All Rights Reserved.
      </p>
      <div className="flex justify-end px-1 sm:px-4">
        <Gatekeeper isGated={false} />
      </div>
    </footer>
  );
};
