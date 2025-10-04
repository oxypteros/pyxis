// src/components/ui/icon.tsx
import type React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconVariants = cva(
  // Base styles applied to ALL icons
  "shrink-0",
  {
    variants: {
      variant: {
        default: "size-6",
        stack: "size-4 sm:size-5 fill-gray-700",
        "project-stack": "size-4 fill-gray-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

// Import library icons
import {
  ChevronDown,
  X,
  ArrowUpRight,
  LoaderCircle,
  Mail,
  CircleAlert,
  CircleCheck,
} from "lucide-react";

const iconMap = {
  // Sprite Icons
  logo: { type: "sprite" as const, id: "oxy-logo" },
  github: { type: "sprite" as const, id: "icon-github" },
  bluesky: { type: "sprite" as const, id: "icon-bluesky" },
  hugo: { type: "sprite" as const, id: "icon-hugo" },
  javascript: { type: "sprite" as const, id: "icon-javascript" },
  tailwindcss: { type: "sprite" as const, id: "icon-tailwindcss" },
  typescript: { type: "sprite" as const, id: "icon-typescript" },
  nextjs: { type: "sprite" as const, id: "icon-nextjs" },
  pi: { type: "sprite" as const, id: "icon-pi" },

  // Library Icons
  "chevron-down": { type: "library" as const, Component: ChevronDown },
  "external-link": { type: "library" as const, Component: ArrowUpRight },
  close: { type: "library" as const, Component: X },
  loader: { type: "library" as const, Component: LoaderCircle },
  mail: { type: "library" as const, Component: Mail },
  alert: { type: "library" as const, Component: CircleAlert },
  check: { type: "library" as const, Component: CircleCheck },
};

export type IconName = keyof typeof iconMap;

type IconProps = React.SVGProps<SVGSVGElement> &
  VariantProps<typeof iconVariants> & {
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
  variant,
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

  const accessibilityProps = isSemantic
    ? { role: "img" }
    : { "aria-hidden": true };
  const finalClassName = cn(iconVariants({ variant, className }));
  switch (iconData.type) {
    case "sprite":
      return (
        <svg className={finalClassName} {...accessibilityProps} {...props}>
          <use href={`#${iconData.id}`} />
        </svg>
      );
    case "library":
      return (
        <iconData.Component
          className={finalClassName}
          {...accessibilityProps}
          {...props}
        />
      );
  }
};
