'use client';

import React from "react";

interface Skill {
  title: string;
  hash: string;
  icon?: any;
  color?: any;
}

interface SkillCategory {
  readonly skillsTitle: string;
  readonly skills: readonly Skill[];
}

interface SkillSectionProps {
  skillsData: readonly SkillCategory[];
  theme: "dark" | "light";
  accent: string;
  size?: "md" | "lg";
}

const SkillSection: React.FC<SkillSectionProps> = ({ skillsData, theme, accent, size = "md" }) => {
  const { skillsTitle, skills } = skillsData[0];
  const isLarge = size === "lg";

  const getSkillIconSrc = (skill: Skill) => {
    if (!Array.isArray(skill.icon)) return skill.icon;
    return theme === "dark" ? skill.icon[1] : skill.icon[0];
  };

  const getSkillColor = (skill: Skill) => {
    if (!Array.isArray(skill.color)) return skill.color;
    return theme === "dark" ? skill.color[1] : skill.color[0];
  };

  return (
    <article
      className={`relative z-10 overflow-hidden rounded-2xl h-full ${
        isLarge ? "p-12 max-lg:p-8" : "p-10 max-lg:p-8"
      } ${
        theme === "dark"
          ? "bg-[--blackblue] dark-mode-shadow"
          : "bg-[--icewhite] dark-shadow"
      }`}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[0.3rem]"
        style={{ background: accent }}
      />

      <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
        <h3 className={`flex items-center gap-[0.2rem] ${isLarge ? "text-[2.8rem]" : ""}`}>
          <span style={{ color: accent }}>&lt;</span>
          {skillsTitle}
          <span style={{ color: accent }}>/&gt;</span>
        </h3>
        <span
          className="text-[1.2rem] font-mono px-3 py-1 rounded-full"
          style={{ color: accent, backgroundColor: `${accent}1a` }}
        >
          {skills.length} tools
        </span>
      </div>

      <div className={`flex flex-wrap ${isLarge ? "gap-5" : "gap-4"}`}>
        {skills.map((skill, index) => {
          const color = getSkillColor(skill);
          const isGitHubMark = skill.title === "GitHub";
          return (
            <div
              key={index}
              className={`flex items-center gap-3 rounded-xl border cursor-default transition-transform duration-300 hover:-translate-y-[0.2rem] ${
                isLarge ? "px-6 py-4" : "px-5 py-3"
              }`}
              style={{
                borderColor: `${color}40`,
                backgroundColor: theme === "dark" ? `${color}0f` : `${color}0a`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = color;
                e.currentTarget.style.boxShadow = `0 0.8rem 1.6rem -0.6rem ${color}80`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${color}40`;
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <img
                src={getSkillIconSrc(skill)}
                alt={skill.title}
                className={`object-contain shrink-0 ${
                  isLarge ? "h-[2.6rem] w-[2.6rem]" : "h-[2.2rem] w-[2.2rem]"
                } ${isGitHubMark ? "dark:invert" : ""}`}
              />
              <span
                className={`font-medium whitespace-nowrap ${
                  isLarge ? "text-[1.5rem]" : "text-[1.4rem]"
                }`}
              >
                {skill.title}
              </span>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default SkillSection;
