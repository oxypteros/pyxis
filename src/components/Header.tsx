// src/app/components/Header.tsx
import type React from "react";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

type HeaderProps = {
  className?: string;
};

export const Header = ({ className }: HeaderProps): React.JSX.Element => {
  return (
    <header
      className={cn(
        "inset-shadow-header sm:shadow-header fixed top-0 z-90 w-full bg-slate-50 duration-300 sm:sticky sm:w-auto sm:inset-shadow-none",
        className,
      )}
    >
      <div className="sticky top-0 flex h-full w-full items-center justify-between gap-2 pt-2 pr-2 pb-3 pl-4 sm:h-screen sm:flex-col sm:px-0 sm:py-4">
        {/* Logo */}
        <Link variant="icon" href="/" aria-label="Navigate to home">
          <svg className="size-5 shrink-0 fill-slate-800" aria-hidden="true">
            <use href="#oxy-logo"></use>
          </svg>
        </Link>

        {/* Social Links */}
        <div className="flex items-center gap-2 sm:w-full sm:flex-col">
          <Link
            variant="icon"
            href="https://bsky.app/profile/oxypteros.com"
            isExternal
            hideIndicator
            className="group shrink-0"
            aria-label="Visit my BlueSky Profile (opens in a new tab)"
          >
            <svg
              aria-hidden="true"
              className="group-hover:fill-bluesky size-4 shrink-0 fill-slate-800 transition-colors duration-300"
            >
              <use href="#icon-bluesky"></use>
            </svg>
          </Link>
          <Link
            variant="icon"
            href="https://github.com/oxypteros"
            isExternal
            hideIndicator
            className="group shrink-0"
            aria-label="Visit my GitHub Profile (opens in a new tab)"
          >
            <svg
              aria-hidden="true"
              className="group-hover:fill-github size-4 shrink-0 fill-slate-800 transition-colors duration-300"
            >
              <use href="#icon-github"></use>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};
