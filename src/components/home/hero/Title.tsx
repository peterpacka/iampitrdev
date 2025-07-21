"use client";

import { motion } from "motion/react";

export const Title = () => {
  return (
    <h1 className="text-8xl font-black">
      hi👋 i am{" "}
      <motion.span
        initial={{ color: "var(--foreground)" }}
        animate={{ color: "var(--accent)" }}
        transition={{ duration: 0.2, delay: 0.2 }}
      >
        pitr
      </motion.span>
    </h1>
  );
};
