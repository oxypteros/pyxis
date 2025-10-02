// src/components/ui/scrollDownArrow.tsx
"use client";

import type React from "react";
import { useLenis } from "lenis/react";
import { useState, useEffect, useCallback } from "react";
import { clsx } from "clsx";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

type ScrollDownArrowProps = {
  target: string;
};

export const ScrollDownArrow = ({
  target,
}: ScrollDownArrowProps): React.JSX.Element => {
  const lenis = useLenis();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const handleLenisScroll = useCallback(() => {
    if (lenis && lenis.scroll > 10) {
      setIsActive((prevIsActive) => {
        // Only update state if it's currently active.
        if (prevIsActive) {
          return false;
        }
        return prevIsActive;
      });
    }
  }, [lenis]);

  useLenis(handleLenisScroll);

  const handleScrollClick = () => {
    if (!lenis) return;
    setIsActive(false);
    lenis.scrollTo(target, {
      offset: 0,
      duration: 2,
    });
  };

  return (
    <>
      <Button
      variant="icon"
      size="icon"
        onClick={handleScrollClick}
        className={clsx(
          "absolute right-4 bottom-8 z-50 cursor-pointer",
          "transition-opacity duration-900",
          isActive
            ? "animate-bounce opacity-100"
            : "pointer-events-none opacity-0",
        )}
        disabled={!isActive}
        aria-label="Scroll to the main content"
      >
        <Icon name="chevron-down" className="size-5 stroke-slate-700" />
      </Button>
    </>
  );
};
