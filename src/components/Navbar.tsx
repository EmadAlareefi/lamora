"use client";

import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`transition-all duration-300 ease-in-out h-[78px] max-h-[78px] min-h-[78px] font-gotham-bold uppercase flex justify-between items-center px-5 py-0 ${
        isScrolled ? "text-wine bg-cotton" : "text-cotton bg-transparent"
      } tracking-[0.4px] leading-[11.05px] text-[10px] w-full top-0 py-[30px] sticky left-0 z-20 pointer-events-auto -mb-[78px] hover:bg-cotton hover:text-wine `}
    >
      {/* Logo - Always Centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-lg font-semibold">
        <a href="/">
          <img src="/logo.svg" alt="Logo" className="w-28 h-auto" />{" "}
          {/* Adjust size as needed */}
        </a>
      </div>
      {/* Mobile Menu Button */}
      <HamburgerMenu />

      {/* Icons (Mobile - Below 1080px) */}
      <div className="lg:hidden flex justify-between items-start gap-[0px] h-[24px]">
        <a
          href=""
          className="flex h-[24px] w-[24px] justify-end items-center cursor-pointer relative"
        >
          <svg
            className="min-w-[19px] min-h-[19px]"
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
        </a>
        <a
          href=""
          className="flex h-[24px] w-[24px] justify-end items-center cursor-pointer relative"
        >
          <svg
            className="min-w-[15px] min-h-[15px]"
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.49588 7.03863C8.1634 7.03863 9.51519 5.68683 9.51519 4.01931C9.51519 2.35179 8.1634 1 6.49588 1C4.82836 1 3.47656 2.35179 3.47656 4.01931C3.47656 5.68683 4.82836 7.03863 6.49588 7.03863Z"
              stroke="#DCAE97"
              strokeWidth="1"
              strokeMiterlimit="10"
            ></path>
            <path
              d="M0.890625 13.5624C0.890625 10.4653 3.40088 7.95508 6.49792 7.95508C9.59497 7.95508 12.1052 10.4653 12.1052 13.5624"
              stroke="#DCAE97"
              strokeWidth="1"
              strokeMiterlimit="10"
            ></path>
          </svg>
        </a>
        <a
          href=""
          className="flex h-[24px] w-[24px] justify-end items-center cursor-pointer relative"
        >
          <svg
            className="min-w-[19px] min-h-[19px]"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.42772 14.0674L8.50152 14.1483L8.57543 14.0675L13.1287 9.08618C14.4237 7.66945 14.4238 5.38722 13.129 3.97033C12.5118 3.28102 11.6621 2.9 10.7845 2.9C9.93461 2.9 9.1234 3.25779 8.50216 3.90408C7.89144 3.2568 7.07961 2.9 6.21859 2.9C5.34038 2.9 4.5035 3.28201 3.87483 3.96957C3.245 4.64456 2.9 5.56962 2.9 6.5211C2.9 7.47338 3.246 8.3847 3.87448 9.07226L8.42772 14.0674ZM4.45872 4.58249L4.45873 4.5825L4.45956 4.58156C4.939 4.04374 5.58495 3.78231 6.21859 3.78231C6.85222 3.78231 7.49832 4.04375 7.97776 4.58107L7.97775 4.58107L7.97856 4.58196L8.42786 5.07348L8.50163 5.15419L8.57544 5.07352L9.02474 4.58253L9.02481 4.58245C9.49341 4.06924 10.1158 3.78231 10.7846 3.78231C11.441 3.78231 12.076 4.06996 12.5445 4.58249L12.5445 4.58251C13.5202 5.64932 13.5203 7.39214 12.5445 8.45961L8.50162 12.8825L4.45872 8.45961L4.45868 8.45957C3.98949 7.94686 3.72374 7.24779 3.72374 6.52105C3.72374 5.79436 3.98996 5.0953 4.45872 4.58249Z"
              fill="#DCAE97"
              stroke="#DCAE97"
              strokeWidth="0.2"
            ></path>
          </svg>
        </a>
        <a
          href=""
          className="flex h-[24px] w-[24px] justify-end items-center cursor-pointer relative"
        >
          <svg
            className="min-w-[19px] min-h-[19px]"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 13.9999H3L4.50857 6.38452H12.2593L14 13.9999Z"
              stroke="#DCAE97"
            ></path>
            <path
              d="M6.45703 6.52563V5.46794C6.45703 4.05769 6.83417 3 8.34275 3C9.85132 3 10.2285 4.05769 10.2285 5.11538V6.52563"
              stroke="#DCAE97"
            ></path>
          </svg>
          <span className="absolute -left-2 underline-offset-0 text-[8px] -mt-3 min-h-4 min-w-4 rounded-full border-cotton bg-cotton text-wine border-[1px] flex items-center justify-center font-bold">
            1
          </span>
        </a>
      </div>

      {/* Menu Links (Desktop - Right Side) */}
      <div className="hidden lg:flex space-x-6 mr-auto text-[#DCAE97]">
        <a href="/new-in">جديد السهرة</a>
        <a href="/dresses">Dresses</a>
        <a href="/clothing">Clothing</a>
        <a href="/accessories">Accessories</a>
        <a href="/sale">Sale</a>
      </div>
    </nav>
  );
}
