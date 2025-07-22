"use client";

import { createContext, useContext, useState } from "react";

interface NavigationContextProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(
  undefined,
);

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<string>("hero");
  return (
    <NavigationContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const ctx = useContext(NavigationContext);
  if (!ctx)
    throw new Error("useNavigation must be used within NavigationProvider");
  return ctx;
}
