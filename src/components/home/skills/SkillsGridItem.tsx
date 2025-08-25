"use client";

import { AnimatePresence, motion } from "motion/react";
import { Skill } from "@/data/skills";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/utils/cn";

export const SkillsGridItem = ({ skill }: { skill: Skill }) => {
  const [showName, setShowName] = useState<boolean>(false);

  return (
    <Link
      draggable={false}
      onMouseEnter={() => setShowName(true)}
      onMouseLeave={() => setShowName(false)}
      onFocus={() => setShowName(true)}
      onBlur={() => setShowName(false)}
      href={skill.link}
      target="_blank"
      className="relative inline-block cursor-pointer outline-0 transition-all duration-200 hover:scale-[1.06] focus-visible:scale-[1.06]"
    >
      <img
        draggable={false}
        className={cn(
          "h-16 md:h-18 lg:h-20",
          skill.invertColors && "dark:invert",
        )}
        src={skill.img}
        alt={skill.name}
      />
      <AnimatePresence>
        {showName && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-accent/95 text-background absolute bottom-[110%] left-1/2 w-max -translate-x-1/2 rounded-xl p-1 font-medium backdrop-blur-lg"
          >
            {skill.name}
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
};
