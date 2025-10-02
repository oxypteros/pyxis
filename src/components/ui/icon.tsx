// src/components/ui/icon.tsx
import type React from "react";
import { cn } from "@/lib/utils";

// Import library icons
import { ChevronDown, ExternalLink, Menu, X } from "lucide-react";

const iconMap = {
  // Sprite Icons
  logo: { type: "sprite" as const, id: "oxy-logo" },
  github: { type: "sprite" as const, id: "icon-github" },
  bluesky: { type: "sprite" as const, id: "icon-bluesky" },

  // Library Icons
  "chevron-down": { type: "library" as const, Component: ChevronDown },
  "external-link": { type: "library" as const, Component: ExternalLink },
  menu: { type: "library" as const, Component: Menu },
  close: { type: "library" as const, Component: X },
};

export type IconName = keyof typeof iconMap;

type IconProps = React.SVGProps<SVGSVGElement> & {
  name: IconName;
  /**
   * If true, the icon is treated as semantic and will not be hidden from
   * screen readers.
   * @default false
   */
  isSemantic?: boolean;
};

export const Icon = ({
  name,
  className,
  isSemantic = false,
  ...props
}: IconProps): React.JSX.Element | null => {
  // If the name is not a valid key in the map.
  if (!Object.prototype.hasOwnProperty.call(iconMap, name)) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[Icon Component] Icon not found: "${name}"`);
    }
    return null; // Prevent the crash.
  }

  const iconData = iconMap[name];
  // Default classes
  const baseClass = "size-6";
  
  const accessibilityProps = isSemantic
    ? { role: "img" }
    : { "aria-hidden": true };

  switch (iconData.type) {
    case "sprite":
      return (
        <svg
          className={cn(baseClass, className)}
          {...accessibilityProps}
          {...props}
        >
          <use href={`#${iconData.id}`} />
        </svg>
      );
    case "library":
      return (
        <iconData.Component
          className={cn(baseClass, className)}
          {...accessibilityProps}
          {...props}
        />
      );
  }
};
