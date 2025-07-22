"use client";

import { useNavigation } from "@/components/navigation/NavigationContext";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const AnimatedSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { ref, inView } = useInView();
  const { setActiveSection } = useNavigation();

  useEffect(() => {
    if (inView) setActiveSection("projects");
  }, [inView, setActiveSection]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      id="projects"
      className="flex min-h-[50rem] flex-col justify-center gap-y-8 px-4 md:px-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5, margin: "-100px 0px", once: true }}
        className="text-3xl font-bold md:text-4xl lg:text-5xl"
      >
        <span className="text-muted lg:text-2xl">/*</span> projects{" "}
        <span className="text-muted text-2xl">*/</span>
      </motion.h2>
      {children}
    </motion.section>
  );
};
