"use client";
import React, { useEffect, useState } from "react";

export const Time = () => {
  const [time, setTime] = useState<string>("");

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

  return <span>{time}</span>;
};
