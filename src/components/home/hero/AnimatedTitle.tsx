"use client";

import { motion } from "motion/react";
import { Pitr } from "./Pitr";

export const AnimatedTitle = () => {
  return (
    <div className="space-y-2 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-black md:text-7xl lg:text-8xl"
      >
        hi👋 i am{" "}
        <motion.span
          initial={{ color: "var(--foreground)" }}
          animate={{ color: "var(--accent)" }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <Pitr />
        </motion.span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="text-muted text-lg md:text-2xl lg:text-3xl"
      >
        16-Year-Old Frontend Developer from Slovakia
      </motion.p>
    </div>
  );
};
