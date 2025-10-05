// src/components/ui/icons/StackIcon.tsx
import type React from 'react';
import { cn } from '@/lib/utils';

// Props: 'name' of the icon
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

export const StackIcon = ({
  name,
  className,
  ...props
}: IconProps): React.JSX.Element => (
  <svg
    className={cn('size-4 sm:size-5 fill-slate-800 shrink-0', className)} 
    aria-hidden="true"
    {...props}
  >
    <use href={`#icon-${name}`} />
  </svg>
);