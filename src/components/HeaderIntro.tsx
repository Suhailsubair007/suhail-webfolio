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
      className="hero flex flex-col justify-center gap-10 items-center h-full max-lg:h-full max-lg:gap-6"
      ref={ref}
      id="home"
    >
      <RadialGradient scale="scale-y-125" opacity="opacity-30" />

      <img
        src={headerIntroData.profilepicture}
        alt="Suhail Subair"
        className="w-1/6 drop-shadow-2xl rounded-full shadow-2xl avatar-img max-lg:w-3/4"
      />

      <h1>
        {headerIntroData.title}
        <span className="wave text-7xl">&#128075;&#127997;</span>
      </h1>

      {/* Typewriter role */}
      <h2 className="font-mono flex items-center gap-2">
        <span className="text-[--orange]">&lt;</span>
        <span>
          {displayed}
          <span
            className="inline-block w-[2px] h-[1em] bg-[--orange] align-middle ml-[3px]"
            style={{ animation: "terminal-blink 1s step-end infinite" }}
          />
        </span>
        <span className="text-[--orange]">/&gt;</span>
      </h2>

      <p className="w-1/2 text-center max-lg:hidden">
        {headerIntroData.description.en}
      </p>

      <div className="button-container flex items-center justify-center mr-8 gap-10 mb-12 max-lg:flex-col max-lg:items-center">
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

      <div className="scroll-down-container animate-bounce flex gap-6">
        <BsMouse className="text-[2.6rem]" />
      </div>
    </section>
  );
};

export default HeaderIntro;
