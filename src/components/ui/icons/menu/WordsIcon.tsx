// src/components/ui/icons/WordsIcon.tsx
import type React from "react";

export const WordsIcon = (): React.JSX.Element => (
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
      className="opacity-20 transition-opacity duration-300 group-hover:opacity-50"
      d="M80,40V216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8Z"
    ></path>
    <path d="M184,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h64A8,8,0,0,1,184,112Zm-8,24H112a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm48-88V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H72V48H48Zm160,0V48H88V208H208Z"></path>
  </svg>
);
