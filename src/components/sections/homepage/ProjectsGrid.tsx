// src/components/sections/homepage/ProjectsGrid.tsx

import type React from "react";
import { ProjectCard } from "@/components/ui/projectCard";
import { projects } from "@/data/projects";

export const ProjectsGrid = (): React.JSX.Element => (
  <div className="mt-48 flex w-full flex-col items-center py-48">
    <div className="flex w-full flex-wrap items-center justify-center gap-48 md:gap-32 lg:gap-48">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </div>
);
