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
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection } = useNavigation();

  useEffect(() => {
    if (inView) setActiveSection("about");
  }, [inView]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.5, margin: "-100px 0px", once: true }}
      id="about"
      className="flex min-h-[30rem] max-w-[95rem] items-center gap-y-12 max-lg:flex-col md:p-6"
    >
      {children}
    </motion.section>
  );
};
