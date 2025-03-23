import React, { useEffect, useRef } from "react";
import Image from "next/image";
interface MenuProps {
  onClose: () => void; // Type for the onClose function
  isOpen: boolean; // Type for the isOpen prop
}

const Menu: React.FC<MenuProps> = ({ onClose, isOpen }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);
  return (
    <>
      <section
        ref={menuRef}
        className={`pointer-events-auto duration-500 z-[200] fixed top-0 left-0 h-full w-full bg-pinkPale overflow-scroll no-scrollbar flex lg:hidden flex-col transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="pt-[20px] w-full flex flex-col pb-[0px] bg-pinkPale text-wine">
          <div className="w-full flex justify-between px-[20px] pb-[25px] border-wine">
            <p
              className="color font-gotham-medium leading-[9.57px] uppercase hover:underline underline-offset-4 cursor-pointer custom-underline"
              onClick={onClose} // Close the menu when clicked
            >
              إغلاق
            </p>
            <div className="flex gap-[0px] items-center">
              {/* Icons and links */}
            </div>
          </div>
          <div className="flex flex-col gap-5 pt-[25px] px-[20px] pb-[40px]">
            <a
              className="cursor-pointer font-chemre text-[20px] leading-[25.48px] uppercase hover:underline underline-offset-4 custom-underline flex gap-4 items-center"
              href="/category?category_id=1"
            >
              جديد السهرة
            </a>
            {/* Other menu items */}
          </div>
        </div>
        <div className="relative h-full w-full">
          <div>
            <div className="flex flex-col text-right gap-3 border-t-[1px] pr-[20px] pt-[25px] text-wine border-wine bg-pinkPale">
              <a
                className="font-gotham-medium text-[10px] leading-[9.57px] uppercase hover:underline underline-offset-4 custom-underline"
                href="/about-us"
              >
                BRAND
              </a>
              {/* Other links */}
            </div>
            <div className="flex flex-col text-right gap-3 pr-[20px] pt-[35px] pb-[25px] text-wine">
              <a
                target="_blank"
                className="font-gotham-medium text-[10px] leading-[9.57px] uppercase hover:underline underline-offset-4 custom-underline"
                href="https://www.fb.com/msg/celebboutique"
              >
                messenger
              </a>
              {/* Other links */}
            </div>
            <a
              className="py-[30px] flex justify-center items-center border-y-[0.5px] border-wine"
              href="/mistressrocks"
            >
              {/* SVG icon */}
            </a>
            <div className="w-full text-white relative">
              <Image
                alt="img-0"
                loading="lazy"
                width="604"
                height="880"
                decoding="async"
                data-nimg="1"
                className="h-full w-full object-cover"
                style={{ color: "transparent" }}
                src="https://dsh6y5eym1jrl.cloudfront.net/_next/image?url=https%3A%2F%2Fd166chel5lrjm5.cloudfront.net%2Fimages%2Fdetailed%2Fburgermenu%2F20250305_burgermenu_gen_11.jpg&w=3840&q=100"
              />
              <a
                className="absolute top-0 left-0 h-full w-full flex items-end justify-center pb-8"
                href="/category?category_id=1"
              >
                <div className="flex flex-col gap-[15px] items-center">
                  <p className="max-w-[285px] font-jjannon-italic italic text-[18px] leading-[27px]  text-center">
                    With beautiful blooms and timeless silhouettes, spring has
                    landed.
                  </p>
                  <p className="font-gotham-medium text-[10px] leading-[9px] uppercase">
                    Shop now
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div
        className={`z-30 w-full h-full fixed top-0 left-0 hidden lg:flex justify-start duration-500 transition-all bg-black/50
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        <section className="h-full flex flex-row overflow-hidden relative bg-pinkPale">
          {/* Left Side Menu */}
          <div className="min-w-[303px] h-full flex flex-col justify-between border-r-[1px] text-wine border-wine">
            <div className="pt-[92px] pb-[30px] pr-[30px] overflow-y-scroll no-scrollbar h-full relative scroll">
              {/* Close Button */}
              <div className="bg-pinkPale border-wine z-10 fixed top-0 right-0 pt-[30px] pb-[20px] w-[303px] max-w-[303px] pr-[30px] border-r-[1px]">
                <p
                  onClick={onClose}
                  className="font-gotham-medium leading-[9.57px] uppercase hover:underline underline-offset-4 custom-underline cursor-pointer"
                >
                  إغلاق
                </p>
              </div>

              {/* Menu Links */}
              <div className="flex flex-col justify-start gap-5 pL-[15px]">
                <a
                  className="cursor-pointer font-chemre text-[20px] leading-[25.48px] items-center uppercase hover:underline underline-offset-4 custom-underline flex gap-2"
                  href="/category?category_id=1"
                >
                  جديد السهرة
                </a>
                <p className="cursor-pointer font-chemre text-[20px] leading-[25.48px] uppercase hover:underline underline-offset-4 custom-underline">
                  CLOTHING
                </p>
                <p className="cursor-pointer font-chemre text-[20px] leading-[25.48px] uppercase hover:underline underline-offset-4 custom-underline">
                  WEDDINGS
                </p>
                <a
                  className="cursor-pointer font-chemre text-[20px] leading-[25.48px] items-center uppercase hover:underline underline-offset-4 custom-underline flex gap-2"
                  href="/category?category_id=6"
                >
                  SHOES
                </a>
                <a
                  className="cursor-pointer font-chemre text-[20px] leading-[25.48px] items-center uppercase hover:underline underline-offset-4 custom-underline flex gap-2"
                  href="/category?category_id=69"
                >
                  SWIMWEAR
                </a>
                <a
                  className="cursor-pointer font-chemre text-[20px] leading-[25.48px] items-center uppercase hover:underline underline-offset-4 custom-underline flex gap-2"
                  href="/category?category_id=454"
                >
                  SHAPEWEAR
                </a>
                <a
                  className="cursor-pointer font-chemre text-[20px] leading-[25.48px] items-center uppercase hover:underline underline-offset-4 custom-underline flex gap-2"
                  href="/category?category_id=11"
                >
                  ACCESSORIES
                </a>
                <p className="cursor-pointer font-chemre text-[20px] leading-[25.48px] uppercase hover:underline underline-offset-4 custom-underline">
                  BY CAMPAIGN
                </p>
              </div>
            </div>

            {/* Bottom Links */}
            <div>
              <div className="flex flex-col pr-[30px] py-[35px] text-right gap-3 border-t-[1px] border-wine">
                <a
                  className="font-gotham-medium text-[10px] leading-[9.57px] uppercase hover:underline underline-offset-4 custom-underline"
                  href="/about-us"
                >
                  BRAND
                </a>
                <a
                  className="font-gotham-medium text-[10px] leading-[9.57px] uppercase hover:underline underline-offset-4 custom-underline"
                  href="/sustainability"
                >
                  SUSTAINABILITY
                </a>
                <a
                  className="font-gotham-medium text-[10px] leading-[9.57px] uppercase hover:underline underline-offset-4 custom-underline"
                  href="/careers"
                >
                  CAREER
                </a>
                <a
                  className="font-gotham-medium text-[10px] leading-[9.57px] uppercase hover:underline underline-offset-4 custom-underline"
                  href="/help"
                >
                  CUSTOMER SERVICES
                </a>
                <a
                  className="font-gotham-medium text-[10px] leading-[9.57px] uppercase hover:underline underline-offset-4 custom-underline"
                  href="/cbw4w"
                >
                  CBWOMEN4WOMEN
                </a>
              </div>

              {/* Mistress Rocks Link */}
              <a
                className="py-[30px] flex justify-center items-center border-t-[1px] border-wine"
                href="/mistressrocks"
              >
                <svg
                  width="99"
                  height="13"
                  viewBox="0 0 99 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[16px] w-auto"
                >
                  {/* SVG Paths */}
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative h-full text-white w-full min-w-[604px] max-w-[604px]">
            <div className="h-full relative w-full transition-all duration-300 opacity-100">
              <Image
                alt="img-0"
                loading="lazy"
                width="604"
                height="880"
                decoding="async"
                data-nimg="1"
                className="h-full w-full object-cover"
                style={{ color: "transparent" }}
                src="https://dsh6y5eym1jrl.cloudfront.net/_next/image?url=https%3A%2F%2Fd166chel5lrjm5.cloudfront.net%2Fimages%2Fdetailed%2Fburgermenu%2F20250305_burgermenu_gen_11.jpg&amp;w=3840&amp;q=100"
              />
              <a
                className="absolute top-0 left-0 h-full w-full flex items-end justify-center pb-[60px]"
                href="/category?category_id=1"
              >
                <div className="flex flex-col gap-[15px] items-center">
                  <p className="max-w-[285px] font-jjannon-italic italic text-[18px] leading-[27px]  text-center">
                    With beautiful blooms and timeless silhouettes, spring has
                    landed.
                  </p>
                  <p className="font-gotham-medium text-[10px] leading-[9px] uppercase">
                    Shop now
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Menu;
