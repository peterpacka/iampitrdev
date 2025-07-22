"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const Time = () => {
  const [time, setTime] = useState<string>("");
  const [showTime, setShowTime] = useState<boolean>(false);

  const [ref, inView] = useInView();

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    }
    updateTime();

    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (inView && !showTime) setShowTime(true);
  }, [inView, showTime]);

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-rows-[0fr] transition-all duration-300",
        showTime && "grid-rows-[1fr]",
      )}
    >
      <span className="overflow-hidden">{time}</span>
    </div>
  );
};
