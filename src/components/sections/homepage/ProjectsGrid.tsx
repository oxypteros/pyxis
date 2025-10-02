// src/components/sections/homepage/ProjectsGrid.tsx

import type React from "react";
import { ProjectCard } from "@/components/ui/projectCard";
import { projects } from "@/data/projects";

export const ProjectsGrid = (): React.JSX.Element => (
  <div className="my-32 flex min-h-screen w-full flex-col items-center justify-center py-32">
    <div className="flex w-full flex-wrap items-center justify-center gap-48 md:gap-32 lg:gap-48">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </div>
);
