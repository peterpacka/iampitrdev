"use client";

import { useEffect, useState } from "react";
import { Pitr } from "./Pitr";
import { cn } from "@/utils/cn";
import { MobileButton } from "./MobileButton";
import { useIsMobile } from "@/hooks/useIsMobile";

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

  const isMobile = useIsMobile();
  const visibleMenu = showMobileMenu || !isMobile;

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
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
        "bg-background/50 fixed top-0 left-0 min-h-[4rem] w-full backdrop-blur-lg before:w-0 before:transition-all before:duration-500",
        showBorder &&
          "before:bg-navigation-border before:absolute before:bottom-0 before:h-[0.15rem] before:w-full",
      )}
    >
      <nav className="mx-auto flex max-w-[87.5rem] items-center justify-between px-6 py-4 max-sm:flex-col md:px-10 lg:px-12">
        <div className="flex w-full items-center justify-between">
          <button className="relative flex items-center text-[2.2rem] font-black sm:text-[2.5rem]">
            iam
            <Pitr />
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
          <ul className="flex items-center gap-x-8 gap-y-2 text-2xl max-sm:mt-5 max-sm:flex-col max-sm:text-center">
            {navItems.map((item) => (
              <li className="transition-all duration-150" key={item.scrollToId}>
                <button
                  className="hover:text-muted hover:before:bg-accent relative before:absolute before:bottom-0 before:h-[0.15rem] before:w-full before:transition-all before:duration-150"
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
