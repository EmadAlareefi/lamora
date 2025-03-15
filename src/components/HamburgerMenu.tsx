import React, { useState } from "react";
import Menu from "./Menu";

const HamburgerMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // Type for state

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the state
  };

  return (
    <div className="flex gap-5 items-center">
      {/* Hamburger icon */}
      <div
        onClick={toggleMenu}
        className="flex h-[24px] w-[31px] lg:w-auto justify-center items-center cursor-pointer hover:underline hover:underline-offset-4 text-[#DCAE97]"
      >
        <svg
          className="transition-[stroke] duration-300"
          width="31"
          height="11"
          viewBox="0 0 31 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="0.5" x2="31" y2="0.5" stroke="#DCAE97"></line>
          <line y1="5.5" x2="31" y2="5.5" stroke="#DCAE97"></line>
          <line y1="10.5" x2="31" y2="10.5" stroke="#DCAE97"></line>
        </svg>
        <p className="lg:block hidden lg:pr-5 3xl:text-[11px] font-bold text-[#DCAE97]">
          القائمة
        </p>
      </div>
      <p className=" lg:flex hidden h-[24px] w-[24px] justify-start items-center cursor-pointer">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="7.61768"
            cy="7.61765"
            r="4.8033"
            transform="rotate(-45 7.61768 7.61765)"
            stroke="#DCAE97"
          ></circle>
          <line
            x1="11.0596"
            y1="11.2347"
            x2="14.3645"
            y2="14.5392"
            stroke="#DCAE97"
          ></line>
        </svg>
      </p>
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} />{" "}
      {/* Pass isOpen and onClose */}
    </div>
  );
};

export default HamburgerMenu;
