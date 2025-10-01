// src/components/ui/icons/HelloIcon.tsx
import type React from "react";

export const HelloIcon = (): React.JSX.Element => (
  <svg
    className="hidden size-6 fill-slate-700 transition-colors duration-300 group-hover:fill-slate-800 sm:block sm:size-5"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 256 256"
    role="img"
    aria-hidden="true"
  >
    <path
      className="opacity-20 transition-opacity duration-300 group-hover:opacity-40"
      d="M224,56l-96,88L32,56Z"
    ></path>
    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
  </svg>
);
