import React from 'react';

const CheckoutButton: React.FC = () => {
  return (
    <div className="flex gap-5">
      <a
        className="cursor-pointer w-full h-[50px] flex justify-center items-center !rounded-none border-[1px] border-solid font-gotham-bold text-[10px] leading-[11.05px] tracking-[0.4px] border-wine bg-wine hover:bg-wineHover hover:border-wineHover text-cotton uppercase"
        href="https://app.houseofcb.com/shoppingbag"
      >
        CHECKOUT (1)
      </a>
    </div>
  );
};

export default CheckoutButton;