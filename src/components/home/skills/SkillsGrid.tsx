"use client";

import { motion } from "motion/react";

import { skills } from "@/data/skills";
import { SkillsGridItem } from "./SkillsGridItem";

export const SkillsGrid = () => {
  return (
    <div className="bg-navigation-border rounded-4xl">
      <ul className="flex flex-wrap justify-evenly gap-x-4 gap-y-2 p-6">
        {skills.map((skill, index) => (
          <li key={skill.name}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SkillsGridItem skill={skill} />
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
};
