"use client";

import { motion } from "motion/react";

interface Props {
  onClick: () => void;
  opened: boolean;
}

export const MobileButton = ({ onClick, opened }: Props) => {
  return (
    <button onClick={onClick} aria-label={opened ? "Close menu" : "Open menu"}>
      <svg width="48" height="48" viewBox="0 0 48 48">
        <motion.line
          x1="12"
          y1="18"
          x2="36"
          y2="18"
          stroke="var(--foreground)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={false}
          animate={opened ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          transform="rotate(0 24 24)"
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
        <motion.line
          x1="12"
          y1="30"
          x2="36"
          y2="30"
          stroke="var(--foreground)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={false}
          animate={opened ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          transform="rotate(0 24 24)"
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
      </svg>
    </button>
  );
};
