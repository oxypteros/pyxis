// src/lib/toast.tsx
"use client";

import type { ReactNode } from "react";
import { toast as sonnerToast, type ExternalToast } from "sonner";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

const toastVariants = cva(
  "z-90 flex w-full max-w-80 min-w-72 flex-col rounded-xs bg-background p-2 pb-4 shadow-md ring-1",
  {
    variants: {
      variant: {
        default: "ring-gray-200",
        success: "ring-green-200",
        error: "ring-red-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const titleVariants = cva("col-start-1 text-sm font-medium", {
  variants: {
    variant: {
      default: "text-gray-900",
      success: "text-gray-900",
      error: "text-gray-900",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type ToastVariant = "success" | "error" | "default";

const VARIANT_ICONS: Record<ToastVariant, React.ReactNode> = {
  success: <Icon name="check" className="size-4 stroke-green-700" />,
  error: <Icon name="alert" className="size-4 stroke-red-700" />,
  default: null,
};

interface CustomToastProps extends VariantProps<typeof toastVariants> {
  id: string | number;
  title: ReactNode;
  description: ReactNode;
  showIcon: boolean;
}

function CustomToast({
  id,
  title,
  description,
  variant,
  showIcon,
}: CustomToastProps) {
  const safeVariant: ToastVariant = variant ?? "default";
  const displayIcon = showIcon ? VARIANT_ICONS[safeVariant] : null;

  return (
    <div className={cn(toastVariants({ variant }))}>
      <div className="flex w-full flex-col items-start justify-between gap-2">
        <div className="flex w-full items-center justify-between gap-3">
          <div className="flex w-full items-center gap-2 pl-2">
            {displayIcon && <div>{displayIcon}</div>}
            <div className={cn(!displayIcon && "")}>
              <p className={cn(titleVariants({ variant }))}>{title}</p>
            </div>
          </div>
          <div className="flex shrink-0 items-center justify-end">
            <Button
              onClick={() => sonnerToast.dismiss(id)}
              variant="icon"
              size="icon"
              className="group"
              aria-label="Dismiss"
            >
              <Icon
                name="close"
                className="size-4 stroke-gray-700 group-hover:stroke-gray-900"
              />
            </Button>
          </div>
        </div>{" "}
        <div className="px-2 text-sm text-gray-700">{description}</div>
      </div>
    </div>
  );
}

export interface ToastProps extends Omit<ExternalToast, "id"> {
  title: ReactNode;
  description: ReactNode | (() => ReactNode);
  variant?: ToastVariant;
  showIcon?: boolean;
}

export const toast = (props: ToastProps): string | number => {
  const {
    title,
    description,
    variant = "default",
    showIcon = true,
    ...sonnerOptions
  } = props;

  const resolvedDescription =
    typeof description === "function" ? description() : description;

  return sonnerToast.custom(
    (id) => (
      <CustomToast
        id={id}
        title={title}
        description={resolvedDescription}
        variant={variant}
        showIcon={showIcon}
      />
    ),
    sonnerOptions,
  );
};
