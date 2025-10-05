// src/components/ui/projectCard.tsx
import type React from "react";
import Image, { StaticImageData } from "next/image";
import { Link } from "@/components/ui/link";
import { Icon, type IconName } from "@/components/ui/icon";

export interface ProjectCardProps {
  href: string;
  imageSrc: StaticImageData | string;
  imageAlt: string;
  title: string;
  description: React.ReactNode; // Allow JSX in the description
  stack: IconName[];
}

export const ProjectCard = ({
  href,
  imageSrc,
  imageAlt,
  title,
  description,
  stack,
}: ProjectCardProps): React.JSX.Element => (
  <div className="group grid max-h-72 max-w-72 grid-cols-12 grid-rows-12">
    <div className="col-span-full row-span-full">
      <Image
        src={imageSrc}
        alt={imageAlt}
        priority={false}
        loading="lazy"
        width={288}
        height={288}
        className="aspect-square rounded-xs border border-gray-100 shadow-xs transition-transform duration-300 ease-in-out group-hover:scale-95"
      />
    </div>
    <Link href={href} variant="projectCard">
      <div>
        <h3 className="inter-heading truncate text-lg text-gray-900 sm:text-xl">
          {title}
        </h3>
        <div className="font-base mt-4 space-y-4 text-base text-gray-800">
          <div className="line-clamp-6">{description}</div>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-4 overflow-hidden">
        {stack.map((iconName) => (
          <Icon key={iconName} name={iconName} variant="project-stack" />
        ))}
      </div>
    </Link>
  </div>
);
