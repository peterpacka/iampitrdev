"use client";

import { motion } from "motion/react";

export const Pitr = () => {
  return (
    <div className="inline-flex items-center">
      {["p", "i", "t", "r"].map((letter, index) => (
        <motion.span
          key={index}
          className="block"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.15, delay: index * 0.2 }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};
