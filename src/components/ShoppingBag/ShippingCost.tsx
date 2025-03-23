import React from 'react';

const ShippingCost: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <p className="font-gotham-book text-[13px] leading-[20px]">Estimated Shipping Cost</p>
        <p className="font-gotham-bold text-[10px] leading-[9px] tracking-[0.4px]">GBP £0.00</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-gotham-book text-[13px] leading-[20px]">Estimated Total</p>
        <p className="font-gotham-bold text-[10px] leading-[9px]">GBP £179.00</p>
      </div>
    </div>
  );
};

export default ShippingCost;