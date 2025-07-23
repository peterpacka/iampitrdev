"use client";

import { Project } from "@/data/projects";
import React, { useEffect, useState } from "react";
import { ProjectsLink } from "./ProjectsLinks";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useInView } from "react-intersection-observer";
import { AnimatePresence } from "motion/react";
import { cn } from "@/utils/cn";

export const ProjectsGridItem = ({ project }: { project: Project }) => {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const { ref, inView } = useInView({
    rootMargin: "-40% 0px -40% 0px",
  });
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) return;

    if (inView) {
      setShowLinks(true);
    } else {
      setShowLinks(false);
    }
  }, [inView, isMobile]);

  return (
    <div ref={ref} className="flex flex-col gap-4 p-5">
      <div className="aspect-video select-none">
        {project.github || project.live ? (
          <div
            onMouseEnter={() => setShowLinks(true)}
            onMouseLeave={() => setShowLinks(false)}
            onFocus={() => setShowLinks(true)}
            onBlur={() => setShowLinks(false)}
            tabIndex={0}
            className={cn(
              "ring-navigation-border hover:ring-accent relative h-full overflow-hidden rounded-4xl ring-3 outline-0 transition-all duration-100",
              showLinks && "ring-accent",
            )}
          >
            <img
              src={project.img}
              alt={project.name}
              className="h-full object-cover"
              draggable={false}
            />
            <AnimatePresence>
              {showLinks && <ProjectsLink project={project} />}
            </AnimatePresence>
          </div>
        ) : (
          <div className="ring-navigation-border h-full overflow-hidden rounded-4xl ring-3">
            <img
              src={project.img}
              alt={project.name}
              className="object-cover"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl font-medium">{project.name}</h3>
        <p className="text-muted mt-1 text-xl leading-tight">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {project.technologies.map((tech, index) => (
            <li
              className="bg-navigation-border rounded-lg p-1 font-bold"
              key={index}
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
