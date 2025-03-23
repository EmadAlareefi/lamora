import React from 'react';

const ProductItem: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 px-5 pb-5 border-b-[1px] border-wine border-solid transition-opacity duration-300 ease-in-out opacity-100">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex gap-5">
          <div className="bg-pinkPale h-[165px] shoppingbag-webkit align-top">
            <a className="w-28 max-w-28 block" href="https://app.houseofcb.com/samaria-black-corset-midi-dress">
              <img
                alt="Image"
                loading="lazy"
                width={150}
                height={220}
                decoding="async"
                srcSet="https://dsh6y5eym1jrl.cloudfront.net/_next/image?url=https%3A%2F%2Fd166chel5lrjm5.cloudfront.net%2Fimages%2Fdetailed%2F111%2Fsamaria-9109e-1.jpg&amp;w=256&amp;q=100 1x, https://dsh6y5eym1jrl.cloudfront.net/_next/image?url=https%3A%2F%2Fd166chel5lrjm5.cloudfront.net%2Fimages%2Fdetailed%2F111%2Fsamaria-9109e-1.jpg&amp;w=384&amp;q=100 2x"
                src="https://dsh6y5eym1jrl.cloudfront.net/_next/image?url=https%3A%2F%2Fd166chel5lrjm5.cloudfront.net%2Fimages%2Fdetailed%2F111%2Fsamaria-9109e-1.jpg&amp;w=384&amp;q=100"
                style={{ color: 'transparent' }}
              />
            </a>
          </div>
          <div className="flex flex-col justify-between">
            <div className="text-sm font-jjannon-italic italic leading-[18px] text-[14px] tracking-[0.56px]">
              <div>Samaria</div>
              <p>Black Corset Midi Dress</p>
            </div>
            <p className="font-gotham-bold text-[10px] tracking-[0.4px] leading-[9px]">GBP £179.00</p>
            <div className="font-gotham-book font-normal text-[13px] leading-[20px]">
              <p>Size: S (Regular cup)</p>
              <div className="flex gap-2">
                Quantity:
                <div className="flex">
                  <div className="w-[24px] flex justify-center items-center cursor-pointer"> - </div>
                  <div className="w-[24px] min-w-[24px] max-w-[24px] flex justify-center items-center"> 1 </div>
                  <div className="w-[24px] flex justify-center items-center cursor-pointer"> + </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col relative h-[13px]">
      <div className="flex justify-between items-center font-gotham-bold text-[10px] leading-[9px] tracking-[0.4px] w-full">
        <p className="cursor-pointer hover:underline hover:underline-offset-4 uppercase">Add to Wishlist</p>
        <p className="cursor-pointer hover:underline hover:underline-offset-4 uppercase">Remove</p>
      </div>
    </div>
    </div>
  );
};

export default ProductItem;