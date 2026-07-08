'use client';

import React, { useRef } from "react";
import Button from "./Button";
import LiveTicker from "./ParallaxText";
import { experienceData } from "../assets/lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import { useSectionInView } from "../assets/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

const bannerBg = "/img/bannerbg.webp";

type Experience = (typeof experienceData)[number];

/** Reusable meta line: role · period · location */
const MetaLine: React.FC<{ experience: Experience }> = ({ experience }) => (
  <p className="text-[1.6rem] text-white/60 flex flex-wrap items-center gap-x-4 gap-y-1">
    <span className="font-semibold" style={{ color: experience.colors.accent }}>
      {experience.role}
    </span>
    <span className="text-white/30">/</span>
    <span>{experience.period}</span>
    <span className="text-white/30">/</span>
    <span>{experience.location}</span>
  </p>
);

/** Reusable "kind" chip (Full-time / Personal Product) */
const KindChip: React.FC<{ experience: Experience }> = ({ experience }) => (
  <span
    className="text-[1.3rem] font-semibold rounded-full px-4 py-1 border whitespace-nowrap"
    style={{
      color: experience.colors.accent,
      borderColor: experience.colors.accent,
      backgroundColor: `${experience.colors.accent}1a`,
    }}
  >
    {experience.kind}
  </span>
);

/** Reusable tech-tag pill row */
const TechTags: React.FC<{ experience: Experience }> = ({ experience }) => (
  <div className="flex flex-wrap gap-4">
    {experience.technologies.map((tech, i) => (
      <span
        key={i}
        className="text-[1.4rem] text-white/85 rounded-full px-5 py-2 border border-white/15 bg-white/[0.04] whitespace-nowrap"
      >
        {tech}
      </span>
    ))}
  </div>
);

/** Reusable highlights panel */
const Highlights: React.FC<{ experience: Experience; compact?: boolean }> = ({
  experience,
  compact,
}) => (
  <div
    className={`rounded-2xl border border-white/10 bg-[--blackblue]/60 ${
      compact ? "p-8" : "p-10"
    }`}
  >
    <h3 className="text-white mb-6">
      <span className="text-[--orange]">&lt;</span>
      {"Highlights"}
      <span className="text-[--orange]">/&gt;</span>
    </h3>
    <ul className="flex flex-col gap-5 m-0">
      {experience.highlights.map((highlight, i) => (
        <li
          key={i}
          className="flex items-start gap-4 m-0 list-none text-[1.5rem] leading-relaxed text-white/80"
        >
          <span
            className="mt-[0.9rem] h-[0.7rem] w-[0.7rem] rounded-full shrink-0"
            style={{ backgroundColor: experience.colors.accent }}
          />
          <span>{highlight}</span>
        </li>
      ))}
    </ul>
  </div>
);

/** Website / GitHub buttons, rendered only when a link exists */
const ExperienceLinks: React.FC<{ experience: Experience }> = ({ experience }) => {
  if (!experience.websiteurl && !experience.githuburl) return null;
  return (
    <div className="buttons flex gap-8 flex-wrap">
      {experience.websiteurl && (
        <Button
          label="Visit Website"
          link={experience.websiteurl}
          iconSVG={experience.websiteicon}
          buttoncolor={experience.colors.main}
          iconcolor={experience.colors.icon}
        />
      )}
      {experience.githuburl && (
        <Button
          label="View on GitHub"
          link={experience.githuburl}
          iconSVG={experience.githubicon}
          buttoncolor={experience.colors.second}
          iconcolor={experience.colors.icon}
        />
      )}
    </div>
  );
};

const ExperienceSlider: React.FC = () => {
  const { ref } = useSectionInView("Experience");
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["1 1", "1.3 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <React.Fragment>
      <section
        className=" skill-banner relative overflow-x-clip h-100% w-full flex flex-col gap-2 "
        id="experience"
        ref={ref}
      >
        <div
          className="quote-outer-container bg-[--darkblue] -rotate-3 flex justify-center items-center scale-110 pt-32 pb-32 max-lg:pt-16 max-lg:pb-16 max-lg:-ml-44 max-lg:-mr-44 max-lg:scale-100 "
          style={{
            backgroundImage: `url(${bannerBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="title-container flex flex-col gap-6 mb-24 rotate-3 justify-between items-center max-lg:w-[100vw]">
            <motion.div
              ref={animationReference}
              style={{
                scale: scaleProgess,
                opacity: opacityProgess,
                textAlign: "center",
              }}
            >
              <p className="text-[--white] mt-16 mb-6">
                <span className="text-[--orange]">&lt;</span>
                {"Experience"}
                <span className="text-[--orange]">/&gt;</span>
              </p>
              <h2 className="text-[--white] mb-16">
                {"Where I've Worked"}
              </h2>
            </motion.div>

            {/* ── Desktop: swiper card stack ── */}
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay, Pagination]}
              className=" w-[60vw] max-lg:!hidden min-[1921px]:px-96"
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
            >
              {experienceData.map((experience, index: number) => (
                <SwiperSlide
                  key={index}
                  className="quote-outer-container bg-[--darkblue] rounded-2xl text-left max-lg:!hidden"
                >
                  <div className="flex flex-row justify-between items-stretch w-full h-full p-20 gap-16 text-[--white] min-h-[46rem]">
                    {/* LEFT — identity, summary, stack, links */}
                    <div className="w-[52%] flex flex-col gap-10 justify-between">
                      <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-5 flex-wrap">
                            <h2 className="text-white">{experience.company}</h2>
                            <KindChip experience={experience} />
                          </div>
                          <MetaLine experience={experience} />
                        </div>
                        <p className="text-white/90 text-[1.7rem] leading-relaxed">
                          {experience.description_EN}
                        </p>
                        <TechTags experience={experience} />
                      </div>
                      <ExperienceLinks experience={experience} />
                    </div>

                    {/* RIGHT — highlights panel */}
                    <div className="w-[44%] flex items-center">
                      <Highlights experience={experience} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* ── Mobile: stacked cards ── */}
            {experienceData.map((experience, index: number) => (
              <article
                key={index}
                className="bg-darkblue flex flex-col gap-10 w-[80%] h-full border-lightblue border-[0.4rem] p-8 rounded-xl mb-10 min-[1024px]:hidden max-lg:w-[90%]"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-6 flex-wrap">
                    <h2 className="text-white">{experience.company}</h2>
                    <KindChip experience={experience} />
                  </div>
                  <MetaLine experience={experience} />
                </div>

                <p className="text-white/90 max-lg:text-4xl leading-relaxed">
                  {experience.description_EN}
                </p>

                <Highlights experience={experience} compact />

                <TechTags experience={experience} />

                <ExperienceLinks experience={experience} />
              </article>
            ))}
          </div>
        </div>
        <LiveTicker />
      </section>
    </React.Fragment>
  );
};

export default ExperienceSlider;
