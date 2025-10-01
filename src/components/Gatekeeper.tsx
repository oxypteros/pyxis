// src/components/Gatekeeper.tsx
"use client";
import React from "react";
import { useState, useRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { toast } from "@/lib/toast";

type GatekeeperProps = {
  /**
   * If true, requires a special key combo to activate.
   * @default false
   */
  isGated?: boolean;
  asChild?: boolean;
  children?: React.ReactNode;
};

const johnSnowToastProps = {
  title: "You know nothing John Snow",
  description: "Try again with a keyboard!",
};

const insanityToastProps = {
  title: "Insanity",
  description: (
    <>
      <p>
        ...is doing the same thing over and over again and expecting different
        results.
      </p>
      <p className="mt-2 text-right text-slate-900 italic">
        — Albert Einstein <span className="text-xs not-italic">(probably)</span>
      </p>
    </>
  ),
};

export const Gatekeeper = ({
  isGated = false,
  asChild = false,
  children,
}: GatekeeperProps) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const clickCount = useRef(0);

  const grantAccess = () => {
    localStorage.setItem("wopr-access", "true");
    window.location.href = "/wopr";
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isDisabled) return;

    // Direct path
    if (!isGated) {
      grantAccess();
      return;
    }

    // Hardcore version; Runs if isGated={true}
    const isSpecialClick =
      (e.ctrlKey && e.shiftKey) || (e.metaKey && e.shiftKey);

    if (isSpecialClick) {
      grantAccess();
    } else {
      clickCount.current += 1;
      setIsDisabled(true);

      const onDismissOrClose = () => {
        setIsDisabled(false);
        if (clickCount.current >= 2) {
          clickCount.current = 0;
        }
      };

      const toastProps =
        clickCount.current >= 2 ? insanityToastProps : johnSnowToastProps;
      const duration = clickCount.current >= 3 ? 10000 : 5000;

      toast(toastProps, {
        duration,
        onDismiss: onDismissOrClose,
        onAutoClose: onDismissOrClose,
      });
    }
  };
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: handleClick,
    } as React.HTMLAttributes<HTMLElement>);
  }
  return (
    <>
      <TooltipProvider>
        <Tooltip delayDuration={700}>
          <TooltipTrigger asChild>
            <Button
              onClick={handleClick}
              variant="pi"
              size="pi"
              aria-label="Shhh... A Hollywoodian secret"
            >
              <svg
                className="size-2 fill-gray-800 transition-colors duration-300 group-hover:fill-gray-950"
                aria-hidden="true"
              >
                <use href="#icon-pi"></use>
              </svg>
            </Button>
          </TooltipTrigger>
          <TooltipContent className="mr-2" aria-label="Try to Google">
            <p>
              The <strong className="font-medium">Praetorians</strong> hacked{" "}
              <em>&ldquo;The Net&rdquo;</em>
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};
