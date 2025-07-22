"use client";

import { motion } from "motion/react";

export const AnimatedTitle = () => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.5, margin: "-100px 0px", once: true }}
      className="text-3xl font-bold md:text-4xl lg:text-5xl"
    >
      <span className="text-muted lg:text-2xl">{"/*"}</span> contact{" "}
      <span className="text-muted text-2xl">{"*/"}</span>
    </motion.h2>
  );
};
