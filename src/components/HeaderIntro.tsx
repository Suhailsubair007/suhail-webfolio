import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { headerIntroData } from "../assets/lib/data";
import { useSectionInView } from "../assets/lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";
import { useTheme } from "../context/theme-context";
import { BsMouse } from "react-icons/bs";
import { motion } from "framer-motion";
import nextjsicon from "../assets/icons/nextjs.svg";
import typescripticon from "../assets/icons/typescripticon.svg";
import nodejsicon from "../assets/icons/nodejsicon.svg";
import mongodbicon from "../assets/icons/mongoicon.svg";
import awsicon from "../assets/icons/aws.svg";
import { SiGraphql } from "react-icons/si";

const ROLES = [
  "Software Engineer",
  "Backend Developer",
  "Fullstack Developer",
  "React Native Developer",
  "Lead Engineer",
  "Product Developer",
];

const TECH = [
  { icon: nextjsicon,    label: "Next.js",    gql: false },
  { icon: typescripticon,label: "TypeScript", gql: false },
  { icon: null,          label: "GraphQL",    gql: true  },
  { icon: nodejsicon,    label: "Node.js",    gql: false },
  { icon: mongodbicon,   label: "MongoDB",    gql: false },
  { icon: awsicon,       label: "AWS",        gql: false },
];

const fadeUp = (delay: number) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.55, delay, ease: "easeOut" },
});

const HeaderIntro: React.FC = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { theme } = useTheme();

  /* typewriter — natural human-feel timing */
  const [displayed, setDisplayed] = useState("");
  const roleIdxRef  = useRef(0);
  const deletingRef = useRef(false);
  const timerRef    = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const rand = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const tick = (current: string) => {
      const target = ROLES[roleIdxRef.current];

      if (!deletingRef.current) {
        if (current.length < target.length) {
          const next = target.slice(0, current.length + 1);
          setDisplayed(next);
          // slight random delay — feels like real typing
          timerRef.current = setTimeout(() => tick(next), rand(90, 160));
        } else {
          // fully typed — hold, then start backspacing
          timerRef.current = setTimeout(() => {
            deletingRef.current = true;
            tick(current);
          }, 2600);
        }
      } else {
        if (current.length > 0) {
          const next = current.slice(0, -1);
          setDisplayed(next);
          // backspace is a bit faster than typing
          timerRef.current = setTimeout(() => tick(next), rand(55, 90));
        } else {
          // cleared — short breath, then next role
          deletingRef.current  = false;
          roleIdxRef.current   = (roleIdxRef.current + 1) % ROLES.length;
          timerRef.current = setTimeout(() => tick(""), rand(300, 500));
        }
      }
    };

    timerRef.current = setTimeout(() => tick(""), 700);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  return (
    <section
      className="hero relative flex items-center justify-center h-full overflow-hidden max-lg:pt-28 max-lg:pb-12"
      ref={ref}
      id="home"
    >
      {/* Subtle dot grid */}
      <div className="hero-grid-bg absolute inset-0 pointer-events-none" />

      {/* Mouse-tracking radial glow */}
      <RadialGlow theme={theme} />

      {/* ── Split layout ── */}
      <div className="relative z-10 flex flex-row items-center justify-between gap-16 w-full px-48 max-lg:flex-col-reverse max-lg:px-8 max-lg:gap-14 min-[1921px]:px-[28rem]">

        {/* LEFT — text content */}
        <div className="flex flex-col gap-7 flex-1 max-lg:items-center max-lg:text-center -mt-36 max-lg:mt-0">

          {/* Available badge */}
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-3 w-fit max-lg:mx-auto px-5 py-2 rounded-full border border-green-500/30 bg-green-500/8">
            <span className="relative flex h-[0.9rem] w-[0.9rem]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50" />
              <span className="relative inline-flex rounded-full h-[0.9rem] w-[0.9rem] bg-green-400" />
            </span>
            <span className={`text-[1.4rem] font-medium tracking-wide ${theme === "dark" ? "text-green-400" : "text-green-600"}`}>
              Open to opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 {...fadeUp(0.2)} className="leading-[1.15] text-[4.8rem] max-lg:text-[3.6rem]">
            Hi, I'm{" "}
            <span className="gradient-name">Suhail</span>
            <span className="wave ml-3 text-[4.2rem]">&#128075;&#127997;</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div {...fadeUp(0.3)} className="flex items-center gap-2">
            <span className="text-[--orange] font-mono text-[2.2rem]">&lt;</span>
            <h2 className="font-mono text-[2.2rem] text-[--darkblue] dark:text-white min-w-[28rem] max-lg:min-w-0">
              {displayed}
              <span
                className="inline-block w-[2px] h-[2.6rem] bg-[--orange] align-middle ml-[3px]"
                style={{ animation: "terminal-blink 1s step-end infinite" }}
              />
            </h2>
            <span className="text-[--orange] font-mono text-[2.2rem]">/&gt;</span>
          </motion.div>

          {/* Description */}
          <motion.p {...fadeUp(0.4)} className="text-[1.75rem] leading-[1.7] max-w-[50rem] max-lg:max-w-full">
            {headerIntroData.description.en}
          </motion.p>

          {/* Tech stack chips */}
          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 max-lg:justify-center">
            {TECH.map((t, i) => (
              <div
                key={i}
                className={`flex items-center gap-[0.7rem] px-4 py-[0.6rem] rounded-xl border text-[1.35rem] font-mono transition-all duration-200 hover:border-[--orange] hover:scale-[1.04] cursor-default ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 text-white/70"
                    : "bg-[--darkblue]/5 border-[--darkblue]/15 text-[--darkblue]"
                }`}
              >
                {t.gql ? (
                  <SiGraphql style={{ color: "#E10098", fontSize: "2.1rem" }} />
                ) : (
                  <img
                    src={t.icon!}
                    alt={t.label}
                    className="w-[2.1rem] h-[2.1rem]"
                    style={theme === "dark" && t.label === "Next.js" ? { filter: "invert(1)" } : undefined}
                  />
                )}
                {t.label}
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.6)} className="flex items-center gap-6 mt-2 max-lg:flex-col max-lg:w-full">
            {headerIntroData.buttons.map((button, index) => (
              <Button
                key={index}
                label={button.label.en}
                iconSVG={button.icon}
                link={
                  button.name === "Projects"
                    ? "https://github.com/Suhailsubair007"
                    : `#${button.name.toLocaleLowerCase()}`
                }
                buttoncolor={button.color}
                onClick={
                  button.name === "Projects"
                    ? undefined
                    : () => {
                        setActiveSection(button.name);
                        setTimeOfLastClick(Date.now());
                      }
                }
              />
            ))}
          </motion.div>
        </div>

        {/* RIGHT — profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="relative flex-shrink-0 max-lg:order-first"
        >
          {/* Gradient border + image — border-radius on img directly avoids overflow-hidden bleed */}
          <div
            className="p-[3px] rounded-full"
            style={{
              background: "linear-gradient(135deg, var(--lightblue) 0%, var(--orange) 100%)",
              boxShadow: "0 0 50px rgba(139,156,255,0.18), 0 0 100px rgba(255,138,61,0.08)",
            }}
          >
            <img
              src={headerIntroData.profilepicture}
              alt="Suhail Subair"
              className="block rounded-full object-cover w-[28rem] h-[28rem] max-lg:w-[20rem] max-lg:h-[20rem]"
              style={{ objectPosition: "center 15%" }}
            />
          </div>

          {/* Floating name card below image */}
          <div
            className={`absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-3 px-6 py-3 rounded-full shadow-xl border text-[1.4rem] font-mono ${
              theme === "dark"
                ? "bg-[--blackblue] border-white/10 text-white/80"
                : "bg-white border-[--darkblue]/10 text-[--darkblue]"
            }`}
          >
            <span className="text-[--orange]">@</span>
            suhailsubair
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 animate-bounce max-lg:hidden"
      >
        <BsMouse className="text-[2.6rem] opacity-40" />
      </motion.div>
    </section>
  );
};

/* Mouse-tracking radial glow — isolated to prevent hero re-renders */
const RadialGlow: React.FC<{ theme: string }> = ({ theme }) => {
  const [mx, setMx] = useState(50);
  const [my, setMy] = useState(50);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMx(Math.round((e.clientX / window.innerWidth) * 100));
      setMy(Math.round((e.clientY / window.innerHeight) * 100));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="absolute inset-0 -z-[1] opacity-20 pointer-events-none"
      style={{
        background: `radial-gradient(ellipse at ${mx}% ${my}%, var(--orange), ${
          theme === "light" ? "var(--lightblue)" : "var(--blackblue)"
        })`,
        transition: "background 0.12s ease",
      }}
    />
  );
};

export default HeaderIntro;
