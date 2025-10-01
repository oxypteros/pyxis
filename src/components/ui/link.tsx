// src/components/ui/link.tsx
import React from "react";
import NextLink from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

const linkVariants = cva(
  // Base styles
  "transition-all duration-300",
  {
    variants: {
      variant: {
        button:
          "inline-flex items-center justify-center gap-2 rounded-sm border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium whitespace-nowrap text-slate-700 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 hover:shadow-sm has-[>svg]:px-3",
        underline:
          "text-slate-700 underline underline-offset-3 hover:text-slate-900 hover:decoration-2",
        plain:
          "text-slate-700 hover:text-slate-900 hover:underline hover:decoration-2 hover:underline-offset-3",
        icon: "min-h-8 min-w-8 p-2",
        projectCard:
          "bg-background z-10 col-span-full row-start-5 ml-3 flex size-72 flex-col justify-between overflow-hidden rounded-xs border border-slate-200 px-4 py-8 shadow-sm ease-in-out group-hover:-translate-x-4 hover:shadow-md sm:col-start-4 sm:col-end-13 sm:row-start-5 sm:row-end-13 md:col-start-3 lg:col-start-5",
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
          <ExternalLink className="ml-0.5 inline-block size-3 opacity-80" />
        </>
      )}
    </NextLink>
  );
};
