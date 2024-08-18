import React from "react";

const Cart = () => {
  return (
    <>
      <div className="w-full h-[51px] bg-[#fafafb] grid place-content-center">
        <div className="w-[335.69px] h-[]22px flex items-center justify-center gap-2">
          <span className="text-[#33A0FF] font-normal text-lg">Home</span>
          <span className="text-[#C1C8CE] w-[5px] h-[17px] font-normal text-sm">
            /
          </span>
          <span className="text[#262626] font-normal text-lg text-nowrap text-[#33A0FF]">
            Hot Deal
          </span>
          <span className="text-[#C1C8CE] w-[5px] h-[17px] font-normal text-sm">
            /
          </span>
          <span className="text[#262626] font-normal text-lg text-nowrap">
            Nike Airmax 270 React
          </span>
        </div>
      </div>
      <div>Cart</div>
    </>
  );
};

export default Cart;
