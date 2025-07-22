"use client";

import { useInView } from "react-intersection-observer";
import { useNavigation } from "@/components/navigation/NavigationContext";
import { useEffect } from "react";

export const ContactInViewObserver = () => {
  const { ref, inView } = useInView({
    threshold: 0.8,
    rootMargin: "-20% 0px -20% 0px",
  });
  const { setActiveSection } = useNavigation();

  useEffect(() => {
    if (inView) setActiveSection("contact");
  }, [inView, setActiveSection]);

  return <div ref={ref} className="absolute top-0 h-1 w-full" />;
};
