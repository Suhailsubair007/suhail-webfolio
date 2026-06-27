import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= window.outerHeight * 0.1);
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
    const isActive = isHovered || linkEn === activeSection;

    return (
      <NavLink
        to={link}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative"
      >
        <span
          className={`font-mono text-[1.45rem] font-medium px-4 py-[0.5rem] rounded-full transition-all duration-200 ${
            isActive
              ? "text-[--orange] bg-[--orange]/10 border border-[--orange]/30"
              : theme === "dark"
              ? "text-white/50 hover:text-white/80"
              : "text-[--darkblue]/50 hover:text-[--darkblue]/90"
          }`}
        >
          {children}
        </span>
      </NavLink>
    );
  };

  return (
    <React.Fragment>
      <ScrollToAnchor />

      {/* ── Desktop nav ── */}
      {!isMobileMenuActive && (
        <nav
          className={`max-lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
            isSticky
              ? "flex justify-center pt-5"
              : "flex items-center justify-between px-20 py-5"
          }`}
        >
          {isSticky ? (
            /* Floating glass pill */
            <div
              className={`flex items-center gap-3 px-7 py-[0.8rem] rounded-full border shadow-2xl backdrop-blur-xl transition-all duration-300 ${
                theme === "dark"
                  ? "bg-[--blackblue]/80 border-white/10 shadow-black/40"
                  : "bg-white/80 border-[--darkblue]/10 shadow-black/10"
              }`}
              style={{
                boxShadow: theme === "dark"
                  ? "0 0 0 1px rgba(139,156,255,0.08), 0 8px 32px rgba(0,0,0,0.5)"
                  : "0 0 0 1px rgba(45,58,140,0.07), 0 8px 32px rgba(0,0,0,0.1)",
              }}
            >
              {/* Links */}
              {navLinks.map((link, i) => (
                <CustomNavLink key={i} link={link.hash} linkEn={link.en}>
                  <span
                    onClick={() => {
                      setActiveSection(link.en);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.en}
                  </span>
                </CustomNavLink>
              ))}
            </div>
          ) : (
            /* Full-width transparent header */
            <>
              <div className="flex items-center gap-1 mx-auto">
                {navLinks.map((link, i) => (
                  <CustomNavLink key={i} link={link.hash} linkEn={link.en}>
                    <span
                      onClick={() => {
                        setActiveSection(link.en);
                        setTimeOfLastClick(Date.now());
                      }}
                    >
                      {link.en}
                    </span>
                  </CustomNavLink>
                ))}
              </div>
            </>
          )}
        </nav>
      )}

      {/* ── Mobile bottom nav ── */}
      {isMobileMenuActive && (
        <nav
          className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center px-4 py-4 ${
            theme === "dark"
              ? "bg-[--blackblue]/95 border-t border-white/10"
              : "bg-white/95 border-t border-[--darkblue]/10"
          } backdrop-blur-xl`}
          style={{
            boxShadow: "0 -4px 24px rgba(0,0,0,0.25)",
          }}
        >
          {/* Gradient top accent */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--lightblue), var(--orange), var(--lightblue), transparent)",
            }}
          />

          {navLinks.map((link, i) => {
            const isActive = link.en === activeSection;
            return (
              <NavLink
                key={i}
                to={link.hash}
                onClick={() => {
                  setActiveSection(link.en);
                  setTimeOfLastClick(Date.now());
                  if (link.en === "Home") {
                    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="flex flex-col items-center gap-[0.4rem] relative"
              >
                {/* Active dot above icon */}
                {isActive && (
                  <span
                    className="absolute -top-[0.8rem] left-1/2 -translate-x-1/2 w-[0.5rem] h-[0.5rem] rounded-full bg-[--orange]"
                    style={{ boxShadow: "0 0 6px var(--orange)" }}
                  />
                )}
                <span
                  className={`text-[2.4rem] transition-all duration-200 ${
                    isActive
                      ? "text-[--orange] scale-110"
                      : theme === "dark"
                      ? "text-white/40"
                      : "text-[--darkblue]/40"
                  }`}
                  style={isActive ? { filter: "drop-shadow(0 0 6px var(--orange))" } : undefined}
                >
                  <link.icon />
                </span>
                <span
                  className={`font-mono text-[1.1rem] transition-colors duration-200 ${
                    isActive
                      ? "text-[--orange]"
                      : theme === "dark"
                      ? "text-white/30"
                      : "text-[--darkblue]/30"
                  }`}
                >
                  {link.en}
                </span>
              </NavLink>
            );
          })}
        </nav>
      )}
    </React.Fragment>
  );
};

export default NavBar;
