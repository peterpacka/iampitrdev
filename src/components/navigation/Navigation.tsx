"use client";

import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { MobileButton } from "./MobileButton";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useNavigation } from "./NavigationContext";

interface NavItem {
  name: string;
  scrollToId: string;
}

const navItems: NavItem[] = [
  {
    name: "about",
    scrollToId: "about",
  },
  {
    name: "skills",
    scrollToId: "skills",
  },
  {
    name: "projects",
    scrollToId: "projects",
  },
  {
    name: "contact",
    scrollToId: "contact",
  },
];

export default function Navigation() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [showBorder, setShowBorder] = useState<boolean>(false);
  const { activeSection, setActiveSection } = useNavigation();

  const isMobile = useIsMobile();
  const visibleMenu = showMobileMenu || !isMobile;

  const scrollToId = (id: string) => {
    if (id === activeSection) return;
    const el = document.getElementById(id);
    if (el) {
      setActiveSection(id);
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      if (showMobileMenu) setShowMobileMenu(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (showMobileMenu) return;

      if (window.scrollY > 25) {
        setShowBorder(true);
      } else {
        setShowBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showMobileMenu]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 min-h-[4rem] w-full before:w-0 before:transition-all before:duration-500",
        showBorder &&
          "before:bg-navigation-border bg-background/50 backdrop-blur-lg before:absolute before:bottom-0 before:h-[0.15rem] before:w-full",
      )}
    >
      <nav className="mx-auto flex max-w-[110rem] items-center justify-between px-6 py-4 max-md:flex-col md:px-10 lg:px-12">
        <div className="flex w-full items-center justify-between">
          <button
            onClick={() => scrollToId("hero")}
            className="group relative flex items-center text-[2.2rem] font-black outline-0 focus-visible:-translate-y-0.5 focus-visible:scale-[1.02] sm:text-[2.5rem]"
          >
            iam
            <span className="text-accent">pitr</span>
          </button>
          <MobileButton
            onClick={() => {
              setShowMobileMenu((prev) => !prev);
              setShowBorder(!showMobileMenu);
            }}
            opened={showMobileMenu}
          />
        </div>
        {visibleMenu && (
          <ul className="flex items-center gap-x-8 gap-y-4 text-2xl max-md:mt-5 max-md:flex-col max-md:text-center">
            {navItems.map((item) => (
              <li key={item.scrollToId}>
                <button
                  className={cn(
                    "hover:text-muted focus-visible:text-muted relative outline-0 before:transition-all before:duration-150 focus-visible:-translate-y-0.5",
                    activeSection === item.scrollToId &&
                      "text-muted before:bg-accent cursor-default before:absolute before:bottom-0 before:h-[0.15rem] before:w-full",
                  )}
                  tabIndex={activeSection === item.scrollToId ? -1 : 0}
                  onClick={() => scrollToId(item.scrollToId)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
