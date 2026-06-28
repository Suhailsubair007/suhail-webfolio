'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../assets/lib/data";
import ScrollToAnchor from "./Listener";
import { useActiveSectionContext } from "../context/active-section-context";
import { useTheme } from "../context/theme-context";

interface CustomNavLinkProps {
  link: string;
  children: React.ReactNode;
  linkEn?: string;
}

const NavBar: React.FC = () => {
  const { theme } = useTheme();

  const [isSticky, setIsSticky] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.outerHeight * 0.1;
      setIsSticky(scrollY >= threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobileMenuActive(true);
        setIsSticky(false);
      } else {
        setIsMobileMenuActive(false);
        setIsSticky(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const CustomNavLink: React.FC<CustomNavLinkProps> = ({ link, children, linkEn }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isLinkActive = isHovered || linkEn === activeSection;

    const linkClasses = isLinkActive
      ? "transition-all duration-200 relative"
      : "opacity-20 transition-all duration-700";

    const leftArrow = isLinkActive && (
      <span className="text-[--orange] absolute -left-5 top-0 max-lg:hidden">&lt;</span>
    );

    const rightArrow = isLinkActive && (
      <span className="text-[--orange] absolute top-0 -right-10 max-lg:hidden">/&gt;</span>
    );

    return (
      <a
        href={link}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative ${linkClasses}`}
      >
        <span>
          {leftArrow}
          {children}
          {rightArrow}
        </span>
      </a>
    );
  };

  return (
    <React.Fragment>
      <ScrollToAnchor />

      {/* ── Desktop nav (unchanged) ── */}
      {!isMobileMenuActive && (
        <nav
          className={`max-lg:hidden flex-row flex justify-center items-center gap-24 font-semibold p-5 top-0 ${
            isSticky && !isMobileMenuActive
              ? `sticky top-10 z-50 ml-auto mr-auto w-max px-16 py-5 transition-all ease-in-out duration-100 rounded-full border border-white border-opacity-40 bg-opacity-70 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] ${
                  theme === "dark" ? "bg-darkblue" : "bg-white"
                }`
              : ""
          }`}
        >
          {navLinks.map((link, index) => (
            <CustomNavLink key={index} link={link.hash} linkEn={link.en}>
              {link.en === activeSection ? (
                <div>
                  <span className="text-[--orange] absolute -left-5 top-0">&lt;</span>
                  {link.en}
                </div>
              ) : (
                <div onClick={() => { setActiveSection(link.en); setTimeOfLastClick(Date.now()); }}>
                  {link.en}
                </div>
              )}
            </CustomNavLink>
          ))}
        </nav>
      )}

      {/* ── Mobile bottom nav (animated) ── */}
      {isMobileMenuActive && (
        <nav
          className="fixed bottom-0 left-0 right-0 z-50"
          style={{
            background: theme === "dark"
              ? "rgba(15, 31, 18, 0.92)"
              : "rgba(255, 255, 255, 0.92)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 -8px 32px rgba(0,0,0,0.3)",
          }}
        >
          {/* Gradient top line */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, var(--lightblue) 30%, var(--orange) 50%, var(--lightblue) 70%, transparent 100%)",
            }}
          />

          <div className="flex justify-around items-end px-2 pt-8 pb-6">
            {navLinks.map((link, i) => {
              const isActive = link.en === activeSection;

              return (
                <a
                  key={i}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.en);
                    setTimeOfLastClick(Date.now());
                    if (link.en === "Home") {
                      document.body.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="flex flex-col items-center relative"
                  style={{ minWidth: "5.5rem" }}
                >

                  {/* Icon */}
                  <motion.div
                    animate={
                      isActive
                        ? { y: -4, scale: 1.25 }
                        : { y: 0, scale: 1 }
                    }
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    className="relative z-10 flex items-center justify-center"
                    style={{
                      fontSize: isActive ? "2.6rem" : "2.2rem",
                      color: isActive ? "var(--orange)" : theme === "dark" ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)",
                      filter: isActive ? "drop-shadow(0 0 8px var(--orange))" : "none",
                      transition: "color 0.2s, filter 0.2s",
                    }}
                  >
                    <link.icon />
                  </motion.div>

                  {/* Label — always visible, highlights when active */}
                  <motion.span
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 2 }}
                    transition={{ duration: 0.2 }}
                    className="font-mono text-[1.1rem] mt-[0.5rem] relative z-10"
                    style={{
                      color: isActive ? "var(--orange)" : theme === "dark" ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {link.en}
                  </motion.span>
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </React.Fragment>
  );
};

export default NavBar;
