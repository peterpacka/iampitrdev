"use client";

import { motion } from "motion/react";
import Link from "next/link";

import { Project } from "@/data/projects";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

export const ProjectsLink = ({ project }: { project: Project }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastPositionRef = useRef<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const [label, setLabel] = useState<string>("");
  const [labelPosition, setLabelPosition] = useState<{
    top: number;
    left: number;
  }>();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const containerRect = containerRef.current?.getBoundingClientRect();
      const labelRect = labelRef.current?.getBoundingClientRect();

      if (!containerRect || !labelRect) return;

      let top = event.clientY - containerRect.top + 20;
      let left = event.clientX - containerRect.left + 10;

      if (left + labelRect.width > containerRect.width) {
        left = containerRect.width - labelRect.width;
      }

      if (top + labelRect.height > containerRect.height) {
        top = containerRect.height - labelRect.height;
      }

      if (top < 0) top = 0;

      if (left < 0) left = 0;

      const last = lastPositionRef.current;
      if (Math.abs(top - last.top) > 25 || Math.abs(left - last.left) > 25) {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setLabelPosition({ top, left });
          lastPositionRef.current = { top, left };
        }, 1);
      }
    };

    containerRef.current?.addEventListener("mousemove", handleMouseMove);

    return () => {
      containerRef.current?.removeEventListener("mousemove", handleMouseMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background/80 absolute top-0 left-0 flex h-full w-full items-center justify-center backdrop-blur-[1px]"
    >
      {project.github && (
        <Link
          onMouseEnter={() => {
            if (!isMobile) setLabel(`Open ${project.name} on github`);
          }}
          onFocus={() => {
            if (!isMobile) setLabel(`Open ${project.name} on github`);
          }}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          draggable={false}
          className="hover:bg-accent/10 focus-visible:bg-accent/10 flex h-full w-full items-center justify-center outline-0 transition-all duration-100"
        >
          <img
            draggable={false}
            className="h-9 dark:invert"
            alt="github icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
          />
        </Link>
      )}
      {project.live && (
        <Link
          onMouseEnter={() => {
            if (!isMobile) setLabel("Open live website");
          }}
          onFocus={() => {
            if (!isMobile) setLabel("Open live website");
          }}
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          draggable={false}
          className="hover:bg-accent/10 focus-visible:bg-accent/10 flex h-full w-full items-center justify-center outline-0 transition-all duration-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
            <path d="m21 3-9 9" />
            <path d="M15 3h6v6" />
          </svg>
        </Link>
      )}
      {label && (
        <div
          ref={labelRef}
          className="bg-foreground text-background pointer-events-none absolute z-50 w-max rounded-lg p-1 text-sm font-medium transition-all duration-500"
          style={{ top: labelPosition?.top, left: labelPosition?.left }}
        >
          {label}
        </div>
      )}
    </motion.div>
  );
};
