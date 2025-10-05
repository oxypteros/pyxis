// src/components/ui/link.tsx
import React from "react";
import NextLink from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon"

const linkVariants = cva(
  // Base styles
  "focus-visible:border-focus-ring focus-visible:ring-focus-ring transition-all duration-300 outline-none focus-visible:ring-[2px]",
  {
    variants: {
      variant: {
        button:
          "inline-flex items-center justify-center gap-2 rounded-sm border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium whitespace-nowrap text-gray-800 hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900 hover:shadow-sm has-[>svg]:px-3",
        underline:
          "rounded-xs text-gray-800 underline underline-offset-3 hover:text-gray-900 hover:decoration-2",
        plain:
          "rounded-xs text-gray-700 hover:text-gray-900 hover:underline hover:decoration-2 hover:underline-offset-3",
        icon: "min-h-8 min-w-8 rounded-full p-2",
        subtitled: "group flex h-auto w-full max-w-80 flex-col items-center justify-center rounded-sm border border-gray-200 bg-gray-50 px-4 py-2 text-center text-sm font-medium whitespace-nowrap text-gray-800 hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900 hover:shadow-sm",
        projectCard:
          "bg-background z-10 col-span-full row-start-5 ml-2 flex size-72 flex-col justify-between overflow-hidden rounded-xs border border-gray-200 px-4 py-8 shadow-sm ease-in-out group-hover:-translate-x-4 hover:shadow-md sm:col-start-4 sm:col-end-13 sm:row-start-5 sm:row-end-13 sm:ml-0 md:col-start-3 lg:col-start-5",
      },
    },
    defaultVariants: {
      variant: "underline",
    },
  },
);

export interface LinkProps
  extends React.ComponentProps<typeof NextLink>,
    VariantProps<typeof linkVariants> {
  /**
   * If true, adds target="_blank" and rel= "noopener noreferrer" attributes
   * for security and privacy.
   * @default false
   */
  isExternal?: boolean;
  /**
   * If false, hides the external link icon.
   * @default true
   */
   showExternalIcon?: boolean;
}

export const Link = ({
  className,
  variant,
  isExternal = false,
  showExternalIcon = true,
  children,
  ...props
}: LinkProps): React.JSX.Element => {
  const externalProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

      const accessibilityText = "(opens in a new tab)";
  const a11yProps: { "aria-label"?: string } = {};
  let renderA11ySpan = false;

  if (isExternal) {
    if (props["aria-label"]) {
      // Augment aria-label
      a11yProps["aria-label"] = `${props["aria-label"]} ${accessibilityText}`;
    } else {
      //  No aria-label. Add span
      renderA11ySpan = true;
    }
  }
  return (
    <NextLink
      className={cn(linkVariants({ variant, className }))}
      {...externalProps}
      {...props}
      {...a11yProps} 
    >
      {children}
      {renderA11ySpan && <span className="sr-only">&nbsp;{accessibilityText}&nbsp;</span>}
      {isExternal && showExternalIcon && (
        <Icon
          name="external-link"
          className="ml-0.5 inline-block size-3 stroke-gray-700"
        />
      )}
    </NextLink>
  );
};
