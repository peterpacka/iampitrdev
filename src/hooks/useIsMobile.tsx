"use client";

import { useEffect, useState } from "react";

const SM_BREAKPOINT = 767;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < SM_BREAKPOINT);
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
}
