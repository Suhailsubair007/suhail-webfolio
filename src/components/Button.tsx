'use client';

import React from "react";

interface ButtonProps {
  onClick?: () => void;
  label?: string;
  value?: string;
  className?: string;
  link?: string;
  iconcolor?: string;
  iconSVG?: React.FC<{ className: string }>;
  buttoncolor?: string;
  buttonhovercolor?: string;
  type?: "button" | "submit" | "reset";
  elementType?: "input" | "button";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  link,
  value,
  iconSVG: IconSVGComponent,
  buttoncolor,
  buttonhovercolor,
  type,
  elementType,
}) => {
  const commonProps = {
    onClick,
    type,
    className: `drop-shadow-2xl py-4 px-8 rounded-2xl text-[1.6rem] transition-all duration-200 flex flex-row gap-4 justify-center items-center cursor-pointer ${buttoncolor} ${buttonhovercolor} max-lg:text-3xl max-lg:py-8 max-lg:px-16 max-lg:rounded-2xl shadow-xl hover:scale-100 hover:-translate-y-2 hover:drop-shadow-xl transition-all duration-200 w-max`,
  };

  const inner = (
    <button {...commonProps}>
      {IconSVGComponent ? (
        <IconSVGComponent className={"w-max h-10"} />
      ) : (
        <img
          src={buttoncolor || ""}
          alt={`${label}-icon`}
          className={`bg-[${buttoncolor || ""}] w-16 `}
        />
      )}
      {label}
    </button>
  );

  if (elementType === "input") {
    return <input {...commonProps} value={value}></input>;
  } else if (link?.startsWith("http") || link?.endsWith(".pdf")) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="no-underline">
        {inner}
      </a>
    );
  } else {
    return (
      <a href={link || ""} className="no-underline">
        {inner}
      </a>
    );
  }
};

export default Button;
