// src/lib/toast.tsx
"use client";

import { toast as sonnerToast, type ExternalToast } from "sonner";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface CustomToastProps {
  id: string | number;
  title?: ReactNode;
  description?: ReactNode;
}

function CustomToast({ id, title, description }: CustomToastProps) {
  const DismissButton = () => (
    <Button
      onClick={() => sonnerToast.dismiss(id)}
      variant="icon"
      size="icon"
      className="shrink-0"
      aria-label="Dismiss"
    >
      <X className="size-4 text-slate-800" />
    </Button>
  );
  return (
    <div className="z-90 flex w-full max-w-80 flex-col rounded-sm bg-slate-50 pt-2 pb-4 shadow-sm ring-1 ring-slate-200">
      <div className="flex w-full items-center justify-between gap-4">
        {title && (
          <div className="col-start-1 pl-4 text-sm font-semibold text-slate-900">
            {title}
          </div>
        )}
        <div className="shrink-0 pr-1">
          <DismissButton />
        </div>
      </div>
      <div>
        {description && (
          <div className="mt-2 px-4 text-sm text-slate-800">{description}</div>
        )}
      </div>
    </div>
  );
}

type ToastProps = Omit<CustomToastProps, "id">;

export function toast(props: ToastProps, options?: ExternalToast) {
  return sonnerToast.custom(
    (id) => <CustomToast id={id} {...props} />,
    options,
  );
}
