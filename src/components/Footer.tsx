'use client';

import React from "react";
import dynamic from "next/dynamic";
import { sideBarLeftSocials, navLinks } from "../assets/lib/data";
import { useTheme } from "../context/theme-context";

const LazyServiceStatus = dynamic(() => import("../components/ServiceStatus"), { ssr: false });

interface SocialLink {
  link: string;
  icon: string | React.FC<{ className: string }>;
  altimgname: string;
}

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      className="relative z-[1] max-lg:pb-36 overflow-hidden transition-colors duration-300"
      style={{ background: isDark ? "var(--darkblue)" : "var(--icewhite)" }}
    >

      {/* Glow blobs — only in dark mode */}
      {isDark && (
        <>
          <div className="absolute -top-24 left-1/4 w-[30rem] h-[30rem] rounded-full opacity-[0.07] blur-[80px] pointer-events-none"
            style={{ background: "var(--orange)" }} />
          <div className="absolute -top-16 right-1/4 w-[24rem] h-[24rem] rounded-full opacity-[0.06] blur-[70px] pointer-events-none"
            style={{ background: "var(--lightblue)" }} />
        </>
      )}

      {/* Gradient top accent */}
      <div className="w-full h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent, var(--lightblue), var(--orange), var(--lightblue), transparent)" }} />

      {/* Main body */}
      <div className="relative px-32 pt-20 pb-12 max-lg:px-10 max-lg:pt-14">

        {/* Top section */}
        <div className="flex flex-row justify-between items-start gap-16 max-lg:flex-col max-lg:items-center max-lg:text-center">

          {/* Branding + tagline */}
          <div className="flex flex-col gap-6 max-w-[42rem]">
            <div>
              <p className="text-[--lightblue] text-[1.5rem] font-mono opacity-70">
                Lead Software Engineer
              </p>
            </div>
            <p
              className="text-[1.5rem] leading-[1.8]"
              style={{ color: isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.45)" }}
            >
              Crafting scalable systems and seamless experiences —
              <br />
              from backend APIs to mobile-first UIs.
            </p>

            {/* Quick nav links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 max-lg:justify-center">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.hash}
                  className="font-mono text-[1.35rem] hover:text-[--orange] transition-colors duration-200"
                  style={{ color: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.35)" }}
                >
                  {link.en}
                </a>
              ))}
            </div>
          </div>

          {/* Right — contact + socials */}
          <div className="flex flex-col gap-8 items-end max-lg:items-center">

            {/* Email CTA */}
            <div className="flex flex-col gap-3 items-end max-lg:items-center">
              <p
                className="font-mono text-[1.25rem] uppercase tracking-widest"
                style={{ color: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.35)" }}
              >
                // say hello
              </p>
              <a
                href="mailto:suhailsubair04@gmail.com"
                className="group flex items-center gap-3 px-6 py-3 rounded-xl border border-[--orange]/30 bg-[--orange]/5 hover:bg-[--orange]/15 hover:border-[--orange]/60 transition-all duration-300 text-[1.5rem] font-mono text-[--orange]"
              >
                suhailsubair04@gmail.com
                <span className="text-[1.2rem] opacity-60 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-3 items-end max-lg:items-center">
              <p
                className="font-mono text-[1.25rem] uppercase tracking-widest"
                style={{ color: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.35)" }}
              >
                // connect
              </p>
              <div className="flex gap-4">
                {sideBarLeftSocials.map((social: SocialLink, index: number) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-[5rem] h-[5rem] rounded-2xl transition-all duration-300 hover:border-[--orange] hover:bg-[--orange]/10"
                    style={{
                      fontSize: "2.2rem",
                      border: isDark ? "1px solid rgba(255,255,255,0.10)" : "1px solid rgba(0,0,0,0.10)",
                      background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                    }}
                  >
                    {typeof social.icon === "function" ? (
                      <social.icon
                        className="group-hover:text-[--orange] transition-colors duration-300"
                        style={{ color: isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.45)" } as React.CSSProperties}
                      />
                    ) : (
                      <img src={social.icon} alt={social.altimgname}
                        className="w-[2.4rem] h-[2.4rem] opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                    <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ boxShadow: "0 0 20px color-mix(in srgb, var(--orange) 40%, transparent)" }} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-[1px] my-10"
          style={{ background: isDark ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" : "linear-gradient(90deg, transparent, rgba(0,0,0,0.10), transparent)" }}
        />

        {/* Bottom bar */}
        <div className="flex flex-row justify-between items-center gap-6 max-lg:flex-col max-lg:items-center">

          <div className="flex items-center gap-3">
            <span className="w-[0.6rem] h-[0.6rem] rounded-full bg-[--orange] opacity-60" />
            <p
              className="text-[1.4rem] font-mono"
              style={{ color: isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.35)" }}
            >
              © {new Date().getFullYear()} Suhail Subair
            </p>
          </div>

          <LazyServiceStatus />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
