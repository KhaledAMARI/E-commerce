import React, { useState } from "react";

import productImg from "../../assets/images/product.svg";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const cartList = [
    {
      id: "1",
      image: productImg,
      label: "Nike Air Zoom Pegasus 38",
      priceAfterDiscount: 139.99,
      originalPrice: 583.29,
      discount: "24%",
      rating: 4.5,
    },
    {
      id: "2",
      image: productImg,
      label: "Nike Air Zoom Pegasus 38",
      priceAfterDiscount: 139.99,
      originalPrice: 583.29,
      discount: "24%",
      rating: 4.5,
    },
  ];
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
      <section className="grid w-full h-full">
        <div className="grid grid-flow-row grid-cols-6 gap-24">
          <span className="col-span-3 w-[101.99px] h-[30px] font-poppins font-medium text-xl text-[#22262A] text-nowrap">
            Product
          </span>
          <span className="col-span-1 w-[101.99px] h-[30px] font-poppins font-medium text-xl text-[#22262A] text-nowrap">
            PRICE
          </span>
          <span className="col-span-1 w-[101.99px] h-[30px] font-poppins font-medium text-xl text-[#22262A] text-nowrap">
            QTY
          </span>
          <span className="col-span-1 w-[101.99px] h-[30px] font-poppins font-medium text-xl text-[#22262A] text-nowrap">
            UNIT PRICE
          </span>
          {cartList.map((item) => {
            const { id, image, label, priceAfterDiscount } = item;
            return (
              <>
                <div className="col-span-1 rounded-full bg-[#fff7f8] w-[23.62px] h-[22px] grid place-content-center">
                  <span className="text-[#FF4252] w-[9.11px] h-[8.49px] flex justify-center items-center">
                    x
                  </span>
                </div>
                <div className="col-span-2 gap-5 w-[343.36px] h-full font-poppins font-medium text-xl text-[#22262A] text-nowrap grid grid-flow-col place-content-center">
                  <img
                    src={image}
                    alt="product key"
                    className="w-[137.85px] h-[94px]"
                  />
                  <span>{label}</span>
                </div>
                <span className="col-span-1 w-[101.99px] h-[30px] font-poppins font-medium text-xl text-[#22262A] text-nowrap">
                  ${priceAfterDiscount}
                </span>
                <div className=" grid grid-flow-col grid-cols-3 place-items-center bg-[#F6F7F8] col-span-1 w-[124.54px] h-[46px]">
                  <span
                    onClick={() => setQuantity((prevState) => prevState - 1)}
                    className="text-[#33A0FF] w-[8.59px] h-[2px] cursor-pointer flex justify-center items-center"
                  >
                    -
                  </span>
                  <span className="font-normal text-lg w-[11.82px] h-[22px]">
                    {quantity}
                  </span>
                  <span
                    onClick={() => setQuantity((prevState) => prevState + 1)}
                    className="text-[#33A0FF] w-[8.59px] h-[2px] cursor-pointer flex justify-center items-center"
                  >
                    +
                  </span>
                </div>
                <span className="col-span-1 w-[101.99px] h-[30px] font-poppins font-medium text-xl text-[#22262A] text-nowrap">
                  ${quantity * priceAfterDiscount}
                </span>
              </>
            );
          })}
        </div>
        <div className="grid grid-flow-col grid-cols-2 col-span-6">
          <div className="col-span-2 flex justify-start items-center w-[369px] h-[60px]">
            <input
              type="text"
              placeholder="Voucher code"
              className="text-[#F1F3F4] h-full w-[calc(100% - 118px)] border-2 border-[#F1F3F4] pl-4"
            />
            <button
              type="button"
              className="w-[118px] h-full bg-[#33A0FF] text-white font-poppins font-medium text-lg"
            >
              Redeem
            </button>
          </div>
          <div className="col-span-2 w-[377.1px] h-[310px] grid text-left grid-cols-2">
            <div className="grid grid-cols-2 w-full col-span-2">
              <span>Subtotal</span>
              <span className="flex justify-end">$998</span>
            </div>
            <div className="grid grid-cols-2 w-full col-span-2">
              <span>Shipping fee</span>
              <span className="flex justify-end">$20</span>
            </div>
            <div className="grid grid-cols-2 w-full col-span-2">
              <span>Coupon</span>
              <span className="flex justify-end">No</span>
            </div>
            <div className="grid grid-cols-2 w-full font-poppins font-medium text-3xl text-[#22262A]  col-span-2">
              <span className="w-[60px] h-[45px]">Total</span>
              <span className="flex justify-end">$1018</span>
            </div>
            <div className="grid w-full col-span-2 h-[60px]">
              <button
                type="button"
                className=" bg-[#33A0FF] text-white font-poppins font-medium text-lg rounded-md"
              >
                Check out
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
