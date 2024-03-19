"use client";

import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-transparent">
      <div className="md:flex md:flex-row flex-col relative items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <a className="text-[#16f2b3] text-3xl font-bold">Zohaib Ahmad</a>
        </div>

        <button
          onClick={toggleNavbar}
          className="block absolute   right-10 top-[28px] md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } mt-4 md:mt-0 md:flex md:flex-row md:space-x-1 md:border-0 md:opacity-100 transition-all duration-500 md:w-auto w-full flex flex-col items-start text-sm md:space-y-0 md:items-center`}
          id="navbar-default"
        >
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#about"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                ABOUT
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#experience"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                EXPERIENCE
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#skills"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                SKILLS
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#education"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                EDUCATION
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#blogs"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                BLOGS
              </div>
            </a>
          </li>
          <li>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="#projects"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                PROJECTS
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
