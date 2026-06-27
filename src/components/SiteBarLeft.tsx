import React from "react";
import { sideBarLeftSocials } from "../assets/lib/data";

interface SocialLink {
  link: string;
  icon: string | React.FC<{ className: string }>;
  iconcolor?: string;
  altimgname: string;
}

const SiteBarLeft: React.FC = () => {
  return (
    <div className="absolute flex items-center flex-col justify-center top-0 left-0 ml-8 max-lg:h-[10%] max-lg:ml-4 z-50">
      <div className="flex items-center justify-center flex-col">
        <div className="w-[0.25rem] h-[40vh] bg-[--lightblue]"></div>
      </div>
      <div className="flex flex-col gap-5 mt-4">
        {sideBarLeftSocials.map((social: SocialLink, index: number) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.altimgname}
            className="block hover:scale-110 transition-transform duration-200"
          >
            {typeof social.icon === "function" ? (
              <social.icon className="text-[--orange] text-[2.2rem] hover:text-[--lightblue] transition-colors duration-200" />
            ) : (
              <img
                src={social.icon}
                alt={social.altimgname}
                className="w-8 h-8"
              />
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SiteBarLeft;
