'use client';

import React, { useRef } from "react";
import { useSectionInView } from "../assets/lib/hooks";
import {
  skillsDataCMS,
  skillsDataDesign,
  skillsDataWeb,
} from "../assets/lib/data";
import { useTheme } from "../context/theme-context";
import SkillSection from "./SkillSection";
import RadialGradient from "./RadialGradient";
import { motion, useScroll, useTransform } from "framer-motion";

const TechStack: React.FC = () => {
  const { ref } = useSectionInView("Skills");
  const { theme } = useTheme();
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress   = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section className="relative tech-stack px-16 py-32 max-lg:p-16 max-lg:py-24" id="skills" ref={ref}>
      <RadialGradient
        scale="scale-y-[3]"
        opacity="opacity-30"
        position="top-[55rem]"
      />

      <div className="max-w-[136rem] mx-auto">
        <motion.div
          ref={animationReference}
          style={{ scale: scaleProgress, opacity: opacityProgress }}
          className="title-container flex flex-col items-start text-left gap-6 max-w-[60rem] mb-20 lg:pl-[28rem] max-lg:mb-16"
        >
          <p className="font-black">
            <span className="text-[--orange]">&lt;</span>Skills
            <span className="text-[--orange]">/&gt;</span>
          </p>
          <h2>My TechStack and Skills</h2>
          <p className="text-[1.6rem] leading-relaxed opacity-70">
            The languages, frameworks and infrastructure I reach for to take a
            product from idea to production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-2">
            <SkillSection
              skillsData={skillsDataDesign}
              theme={theme}
              accent="var(--lightblue)"
              size="lg"
            />
          </div>
          <div className="lg:col-start-8 lg:col-span-5 lg:row-start-1">
            <SkillSection skillsData={skillsDataWeb} theme={theme} accent="var(--orange)" />
          </div>
          <div className="lg:col-start-8 lg:col-span-5 lg:row-start-2">
            <SkillSection skillsData={skillsDataCMS} theme={theme} accent="#38bdf8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
