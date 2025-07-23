"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export const ThemeSwitchButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const [showLabel, setShowLabel] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.transition = "0.2s background";
    return () => {
      document.body.style.transition = "";
    };
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeChange = () =>
    setTheme(theme === "light" ? "dark" : "light");

  return (
    <button
      onMouseEnter={() => setShowLabel(true)}
      onMouseLeave={() => setShowLabel(false)}
      onPointerLeave={() => setShowLabel(false)}
      onFocus={() => setShowLabel(true)}
      onBlur={() => setShowLabel(false)}
      className="hover:bg-foreground/10 focus-visible:bg-foreground/10 relative rounded-full p-2 outline-0 transition-all duration-100"
      onClick={handleThemeChange}
    >
      {theme === "light" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      )}
      <AnimatePresence>
        {showLabel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-foreground text-background absolute top-[115%] left-1/2 w-max -translate-x-1/2 rounded-lg p-1 text-sm font-medium"
          >
            {theme === "light" ? "dark" : "light"} mode
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};
