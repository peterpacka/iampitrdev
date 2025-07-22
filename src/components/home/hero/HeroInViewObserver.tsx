"use client";

import { useInView } from "react-intersection-observer";
import { useNavigation } from "@/components/navigation/NavigationContext";
import { useEffect } from "react";

export const HeroInViewObserver = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection } = useNavigation();

  useEffect(() => {
    if (inView) setActiveSection("");
  }, [inView, setActiveSection]);

  return <div ref={ref} className="absolute top-0 h-1 w-full" />;
};
