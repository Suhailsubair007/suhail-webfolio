import { sideBarRightMail } from "../assets/lib/data";
import React from "react";

const SiteBarLeft: React.FC = () => {
  return (
    <div className="absolute flex items-center flex-col  bottom-0 right-0 mr-8  h-[70vh] max-lg:hidden ">
      <div className="h-[65%] w-[4rem] flex items-center justify-center">
        <a
          href={sideBarRightMail.link}
          className="[writing-mode:vertical-lr] absolute top-0 right-0 h-[50%] text-[--orange] hover:text-[--lightblue] transition-all duration-200 tracking-widest font-semibold text-[1.4rem] opacity-90 hover:opacity-100"
        >
          {sideBarRightMail.text}
        </a>
      </div>
      <div className="flex items-center justify-center flex-col h-[35%]">
        <div className="w-[0.2rem] h-[100%] bg-[--lightblue] opacity-80"></div>
      </div>
    </div>
  );
};

export default SiteBarLeft;
