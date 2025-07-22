"use client";

import { useInView } from "react-intersection-observer";
import { useNavigation } from "@/components/navigation/NavigationContext";
import { useEffect } from "react";

export const SkillsInViewObserver = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const { setActiveSection } = useNavigation();

  useEffect(() => {
    if (inView) setActiveSection("skills");
  }, [inView, setActiveSection]);

  return <div ref={ref} className="absolute top-0 h-1 w-full" />;
};
