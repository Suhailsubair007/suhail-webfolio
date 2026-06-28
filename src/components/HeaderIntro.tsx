'use client';

import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import RadialGradient from "./RadialGradient";
import { headerIntroData } from "../assets/lib/data";
import { useSectionInView } from "../assets/lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";
import { BsMouse } from "react-icons/bs";

const ROLES = [
  "Full Stack Developer",
  "Backend Developer",
  "React Native Developer",
  "Product Developer",
];

const HeaderIntro: React.FC = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

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
          timerRef.current = setTimeout(() => tick(next), rand(90, 160));
        } else {
          timerRef.current = setTimeout(() => {
            deletingRef.current = true;
            tick(current);
          }, 2600);
        }
      } else {
        if (current.length > 0) {
          const next = current.slice(0, -1);
          setDisplayed(next);
          timerRef.current = setTimeout(() => tick(next), rand(55, 90));
        } else {
          deletingRef.current = false;
          roleIdxRef.current  = (roleIdxRef.current + 1) % ROLES.length;
          timerRef.current = setTimeout(() => tick(""), rand(300, 500));
        }
      }
    };

    timerRef.current = setTimeout(() => tick(""), 700);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  return (
    <section
      className="hero flex flex-col justify-center items-center h-full gap-8 px-6 text-center sm:gap-10 lg:gap-10"
      ref={ref}
      id="home"
    >
      <RadialGradient scale="scale-y-125" opacity="opacity-30" />

      {/* Profile image */}
      <img
        src={headerIntroData.profilepicture}
        alt="Suhail Subair"
        className="w-[14rem] h-[14rem] sm:w-[16rem] sm:h-[16rem] lg:w-[18rem] lg:h-[18rem] rounded-full object-cover drop-shadow-2xl shadow-2xl avatar-img"
        style={{ objectPosition: "center 15%" }}
      />

      {/* Name */}
      <h1 className="text-[3rem] sm:text-[3.6rem] lg:text-[4.2rem] leading-tight">
        {headerIntroData.title}
        <span className="wave ml-2">&#128075;&#127997;</span>
      </h1>

      {/* Typewriter */}
      <h2 className="font-mono flex items-center gap-2 text-[2rem] sm:text-[2.4rem] lg:text-[3rem]">
        <span className="text-[--orange]">&lt;</span>
        <span className="min-w-[18rem] sm:min-w-[22rem] lg:min-w-[28rem] text-left">
          {displayed}
          <span
            className="inline-block w-[2px] h-[1em] bg-[--orange] align-middle ml-[3px]"
            style={{ animation: "terminal-blink 1s step-end infinite" }}
          />
        </span>
        <span className="text-[--orange]">/&gt;</span>
      </h2>

      {/* Description */}
      <p className="text-[1.5rem] sm:text-[1.6rem] leading-relaxed max-w-[90%] sm:max-w-[60rem] lg:max-w-[55rem] text-center opacity-70">
        {headerIntroData.description.en}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto [&>*]:w-full [&>*>button]:w-full sm:[&>*]:w-auto sm:[&>*>button]:w-auto">
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
      </div>

      {/* Scroll hint — hidden on mobile */}
      <div className="hidden sm:flex animate-bounce">
        <BsMouse className="text-[2.6rem] opacity-40" />
      </div>
    </section>
  );
};

export default HeaderIntro;
