// src/components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-visible:border-focus-ring focus-visible:ring-focus-ring aria-invalid:ring-destructive/20 aria-invalid:border-destructive flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap transition-all duration-300 outline-none focus-visible:ring-[2px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "rounded-sm border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium whitespace-nowrap text-gray-800 hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900 hover:shadow-sm has-[>svg]:px-3",
        icon: "rounded-full border border-transparent p-2 hover:border-gray-200 hover:bg-gray-50 disabled:opacity-0",
        pi: "rounded-full border border-transparent p-2 hover:border-gray-200 hover:bg-gray-50",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-11 px-6 has-[>svg]:px-4",
        icon: "min-w-8 min-h-8",
        pi: "size-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
