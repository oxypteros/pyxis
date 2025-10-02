// src/components/ui/link.tsx
import React from "react";
import NextLink from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon"

const linkVariants = cva(
  // Base styles
  "transition-all duration-300 outline-none focus-visible:border-focus-ring focus-visible:ring-focus-ring focus-visible:ring-[2px]",
  {
    variants: {
      variant: {
        button:
          "inline-flex items-center justify-center gap-2 rounded-sm border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium whitespace-nowrap text-gray-800 hover:border-slate-300 hover:bg-gray-100 hover:text-gray-900 hover:shadow-sm has-[>svg]:px-3",
        underline:
          "text-gray-800 underline underline-offset-3 hover:text-gray-900 hover:decoration-2",
        plain:
          "text-gray-700 hover:text-gray-900 hover:underline hover:decoration-2 hover:underline-offset-3",
        icon: "min-h-8 min-w-8 p-2 rounded-full",
        projectCard:
          "bg-background z-10 col-span-full row-start-5 ml-3 flex size-72 flex-col justify-between overflow-hidden rounded-xs border border-gray-200 px-4 py-8 shadow-sm ease-in-out group-hover:-translate-x-4 hover:shadow-md sm:col-start-4 sm:col-end-13 sm:row-start-5 sm:row-end-13 md:col-start-3 lg:col-start-5",
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
   * If true, hides the "(opens in new tab)" text and external link icon.
   * @default false
   */
  hideIndicator?: boolean;
}

export const Link = ({
  className,
  variant,
  isExternal = false,
  hideIndicator = false,
  children,
  ...props
}: LinkProps): React.JSX.Element => {
  const externalProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <NextLink
      className={cn(linkVariants({ variant, className }))}
      {...externalProps}
      {...props}
    >
      {children}
      {isExternal && !hideIndicator && (
        <>
          <span className="sr-only">(opens in a new tab)</span>
          
          <Icon name="external-link" className="ml-0.5 inline-block size-3 stroke-gray-700" />
        </>
      )}
    </NextLink>
  );
};
