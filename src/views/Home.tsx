'use client';

import React from "react";
import dynamic from "next/dynamic";
import Layout from "../layout/layout";
import Footer from "../components/Footer";
import ThemeSwitch from "../components/theme-switch";
import { useTheme } from "../context/theme-context";
import { ScrollProgress } from "../components/ScrollProgress";
import Divider from "../components/Divider";
const BannerQuote    = dynamic(() => import("../components/BannerQuote"),    { ssr: false });
const SiteBarRight   = dynamic(() => import("../components/SideBarRight"));
const SiteBarLeft    = dynamic(() => import("../components/SiteBarLeft"));
const TechStack      = dynamic(() => import("../components/TechStack"));
const AboutMe        = dynamic(() => import("../components/AboutMe"),        { ssr: false });
const Contact        = dynamic(() => import("../components/Contact"));
const HeaderIntro    = dynamic(() => import("../components/HeaderIntro"));
const RadialGradient = dynamic(() => import("../components/RadialGradient"), { ssr: false });
const ProjectSlider  = dynamic(() => import("../components/ProjectSlider"),  { ssr: false });

const Home: React.FC = () => {
  const { theme } = useTheme();

  return (
    <>
      <Layout>
        <ThemeSwitch />
        <header className="h-screen">
          <ScrollProgress
            position={"left"}
            color={"orange"}
            height={10}
            smoothness={true}
          />
          <SiteBarLeft />
          <HeaderIntro />
          <SiteBarRight />
        </header>
        <main className="relative overflow-clip">
          <BannerQuote
            style={"withBG"}
            quoteIndex={0}
            containerType="quote"
          />
          <Divider
            thickness="0.25rem"
            direction="outer-right-to-inner-left"
            color="lightblue"
            height="small"
            dividerStyle="solid"
          />

          <TechStack />
          <Divider
            thickness="0.25rem"
            direction="inner-right-to-middle"
            color="lightblue"
            height="middle"
            dividerStyle="solid"
          />

          <BannerQuote
            style={"noBG"}
            quoteIndex={1}
            containerType="statement"
          />
          <Divider
            thickness="0.25rem"
            direction="middle"
            color="lightblue"
            height="extraLarge"
            dividerStyle="solid"
          />
          <ProjectSlider />
          <div className="relative -mb-24 pb-32 -mt-10">
            <RadialGradient
              opacity={theme === "light" ? "opacity-30" : "opacity-30"}
              scale="scale-y-100"
              position="-top-24"
            />
            <Divider
              thickness="0.25rem"
              direction="middle-to-inner-left"
              color="lightblue"
              height="middle"
              dividerStyle="solid"
            />

            <AboutMe />
            <Divider
              thickness="0.25rem"
              direction="inner-left-to-middle"
              color="lightblue"
              height="middle"
              dividerStyle="solid"
            />

            <Contact />
          </div>
        </main>
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
