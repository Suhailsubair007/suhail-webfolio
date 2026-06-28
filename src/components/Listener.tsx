'use client';

import React, { useEffect, useRef } from "react";

const ScrollToAnchor: React.FC = () => {
  const lastHash = useRef<string>("");

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      lastHash.current = hash.slice(1);
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        const element = document.getElementById(lastHash.current);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          lastHash.current = "";
        }
      }, 100);
    }
  }, []);

  return null;
};

export default ScrollToAnchor;
