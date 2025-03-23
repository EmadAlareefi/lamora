import React, { useEffect, useRef } from "react";
import CloseIcon from "./icons/CloseIcon"; // Import your SVG icons as components
import ProductItem from "./ProductItem";
import ShippingCost from "./ShippingCost";
import CheckoutButton from "./CheckoutButton";
interface ShoppingBagProps {
  onClose: () => void; // Type for the onClose function
  isOpen: boolean; // Type for the isOpen prop
}
const ShoppingBag: React.FC<ShoppingBagProps> = ({ onClose, isOpen }) => {
  const cartRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
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
    <div
      className={`z-[400] bg-black/50 w-full h-full fixed top-0 right-0 duration-500 transition-all lg:grid lg:grid-cols-3
      ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
    `}
    >
      <section
        ref={cartRef}
        className="border-l-[1px] lg:border-wine bg-cotton lg:border-solid w-full max-w-full lg:col-start-3 relative h-full"
      >
        <div className="flex flex-col h-full max-h-lvh pb-[150px]">
          <div className="flex flex-col gap-16 text-wine py-5">
            <div className="flex justify-start lg:justify-end px-5">
              <div
                onClick={onClose}
                className="h-[24px] w-[24px] ml-[-7px] flex justify-center items-center cursor-pointer"
              >
                <CloseIcon />
              </div>
            </div>
          </div>
          <div className="overflow-y-auto newScrollbar">
            <div className="flex flex-col gap-5 bg-cotton text-wine">
              <ProductItem />
            </div>
          </div>
          <div className="h-[150px] bg-cotton text-wine border-wine w-full p-5 border-t-[1px] border-solid absolute bottom-0 flex flex-col justify-between">
            <ShippingCost />
            <CheckoutButton />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoppingBag;
