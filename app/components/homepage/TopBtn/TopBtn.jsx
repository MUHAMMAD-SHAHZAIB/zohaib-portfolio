"use client";

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const TopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 ${
        isVisible ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <div className="bg-gradient-to-r from-pink-500 to-violet-600 w-10 rounded-full h-10 p-2 flex items-center justify-center cursor-pointer">
        <FaArrowUp color="white" size={20} />
      </div>
    </div>
  );
};

export default TopBtn;
