// src/app/components/Header.tsx
"use client";

import type React from "react";
import { cn } from "@/lib/utils";
import { Link } from "@/components/ui/link";
import { Icon } from "@/components/ui/icon";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import type { ComponentType, SVGProps } from "react";

type HeaderProps = {
  className?: string;
};
type NavLinkProps = {
  href: string;
  label: string;
  ariaLabel: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  currentPath: string;
};

const NavLink = ({
  href,
  label,
  ariaLabel,
  Icon,
  currentPath,
}: NavLinkProps) => {
  const isActive = currentPath === href;
  return (
    <Link
      className="group flex h-10 w-12 flex-col items-center justify-center gap-1.5 sm:h-14 sm:w-full"
      href={href}
      aria-label={ariaLabel}
      aria-current={isActive ? "page" : undefined}
    >
      <Icon aria-hidden="true" className="size-5" />
      <div
        className={clsx(
          "w-full text-center font-mono text-xs uppercase",
          isActive ? "text-brand" : "group-hover:text-brand text-gray-700",
        )}
      >
        {label}
      </div>
    </Link>
  );
};

// Import icons
import { CodeIcon } from "./ui/icons/menu/CodeIcon";
import { WordsIcon } from "./ui/icons/menu/WordsIcon";
import { BuildIcon } from "./ui/icons/menu/BuildIcon";
import { HelloIcon } from "./ui/icons/menu/HelloIcon";

const navItems = [
  {
    href: "/dev",
    label: "Dev",
    aria: "Navigate to the Code portfolio page",
    Icon: CodeIcon,
  },
  {
    href: "/words",
    label: "Words",
    aria: "Navigate to the Writing portfolio page",
    Icon: WordsIcon,
  },
  {
    href: "/build",
    label: "Build",
    aria: "Navigate to the Case Study page",
    Icon: BuildIcon,
  },
  {
    href: "#say-hello-heading",
    label: "Hello",
    aria: "Navigate to the Contact page",
    Icon: HelloIcon,
  },
];

export const Header = ({ className }: HeaderProps): React.JSX.Element => {
   const pathname = usePathname(); // The hook that necessitates "use client".
  return (
    <header
      className={cn(
        "inset-shadow-header sm:shadow-header fixed top-0 z-90 w-full bg-gray-50 sm:sticky sm:w-auto sm:inset-shadow-none",
        className,
      )}
    >
      <div className="sticky top-0 flex h-full w-full items-center justify-between gap-2 pt-2 pr-2 pb-3 pl-4 sm:h-screen sm:flex-col sm:px-0 sm:py-4">
        {/* Logo */}
        <Link variant="icon" href="/" aria-label="Navigate to home">
          <Icon name="logo" className="size-5 shrink-0 fill-gray-800" />
        </Link>

        {/* Navigation */}
        <nav className="flex grow items-center justify-end text-sm font-medium sm:mt-4 sm:flex-col sm:justify-center sm:gap-3 sm:font-bold md:gap-4">
          {navItems.map(({ href, label, aria, Icon }) => (
            <NavLink
              key={href}
              href={href}
              label={label}
              ariaLabel={aria}
              Icon={Icon}
              currentPath={pathname}
            />
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex items-center gap-2 sm:w-full sm:flex-col">
          <Link
            variant="icon"
            href="https://bsky.app/profile/oxypteros.com"
            isExternal
            showExternalIcon={false}
            className="group shrink-0"
            aria-label="Visit my BlueSky Profile"
          >
            <Icon
              name="bluesky"
              className="group-hover:fill-bluesky size-4 shrink-0 fill-gray-700 transition-colors duration-300"
            />
          </Link>
          <Link
            variant="icon"
            href="https://github.com/oxypteros"
            isExternal
            showExternalIcon={false}
            className="group shrink-0"
            aria-label="Visit my GitHub Profile"
          >
            <Icon
              name="github"
              className="group-hover:fill-github size-4 shrink-0 fill-gray-700 transition-colors duration-300"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};
