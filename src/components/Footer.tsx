// @ts-nocheck
import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { sideBarLeftSocials } from "../assets/lib/data";

const LazyServiceStatus = lazy(() => import("../components/ServiceStatus"));

interface SocialLink {
  link: string;
  icon: string | React.FC<{ className: string }>;
  altimgname: string;
  iconcolor?: string;
}

const Footer: React.FC = () => {
  return (
    <footer className="relative z-[1] bg-[--darkblue] max-lg:pb-36">
      {/* Gradient top accent */}
      <div
        className="w-full h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--lightblue), var(--orange), var(--lightblue), transparent)",
        }}
      />

      {/* Main footer body */}
      <div className="px-32 pt-20 pb-10 max-lg:px-10 max-lg:pt-14">
        <div className="flex flex-row justify-between items-start gap-16 max-lg:flex-col max-lg:items-center max-lg:text-center">

          {/* Branding */}
          <div className="flex flex-col gap-5 max-w-[40rem]">
            <p className="font-mono text-[2rem] font-bold tracking-tight">
              <span className="text-[--orange]">&lt;</span>
              <span className="text-white">Suhail</span>
              <span className="text-[--lightblue]">.dev</span>
              <span className="text-[--orange]"> /&gt;</span>
            </p>
            <p className="text-[--lightblue] text-[1.6rem] font-semibold">
              Fullstack Developer
            </p>
            <p className="text-white/50 text-[1.5rem] leading-relaxed">
              Building the web, one component at a time.
              <br />
              Let's create something remarkable together.
            </p>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-6 items-end max-lg:items-center">
            <p className="text-white/30 font-mono text-[1.3rem] uppercase tracking-widest">
              // connect
            </p>
            <div className="flex gap-8">
              {sideBarLeftSocials.map((social: SocialLink, index: number) => (
                <Link
                  key={index}
                  to={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-[5rem] h-[5rem] rounded-2xl border border-white/10 bg-white/5 hover:border-[--orange] hover:bg-[--orange]/10 transition-all duration-300"
                  style={{ fontSize: "2.2rem" }}
                >
                  {typeof social.icon === "function" ? (
                    <social.icon className="text-white/60 group-hover:text-[--orange] transition-colors duration-300" />
                  ) : (
                    <img
                      src={social.icon}
                      alt={social.altimgname}
                      className="w-[2.4rem] h-[2.4rem] opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  )}
                  {/* Glow on hover */}
                  <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: "0 0 18px rgba(255,138,61,0.35)" }} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10 my-10" />

        {/* Bottom bar */}
        <div className="flex flex-row justify-between items-center gap-8 max-lg:flex-col max-lg:items-center">

          <p className="text-white/30 text-[1.5rem]">
            © {new Date().getFullYear()} Suhail Subair
          </p>

          {/* Service status */}
          <Suspense fallback={
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10">
              <span className="w-[1rem] h-[1rem] rounded-full bg-white/20 animate-pulse" />
              <span className="text-white/30 text-[1.4rem] font-mono">checking...</span>
            </div>
          }>
            <LazyServiceStatus />
          </Suspense>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
