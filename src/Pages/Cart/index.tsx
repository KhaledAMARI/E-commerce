import React, { useEffect, useState } from "react";

// import productImg from "../../assets/images/product.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, updateProduct } from "../../Features/Cart/CartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [Subtotal, setSubtotal] = useState(() =>
    cart.reduce((total, product) => total + product.totalPrice, 0)
  );
  const dispatch = useDispatch();

  const deleteItem = (itemId) => {
    console.log("🚀 ~ deleteItem ~ itemId:", itemId);
    dispatch(removeProduct(itemId));
  };

  const incrementQuantity = (itemId) => {
    const item = cart.find((item) => item.id === itemId);
    if (item) {
      const updatedItem = {
        ...item,
        quantity: item.quantity + 1,
        totalPrice: (item.quantity + 1) * item.priceAfterDiscount,
      };
      dispatch(updateProduct(updatedItem));
    }
  };

  const decrementQuantity = (itemId) => {
    const item = cart.find((item) => item.id === itemId);
    if (item) {
      const updatedItem = {
        ...item,
        quantity: item.quantity - 1,
        totalPrice: ((item.quantity - 1) * item.priceAfterDiscount).toFixed(2),
      };
      dispatch(updateProduct(updatedItem));
    }
  };
  useEffect(() => {
    setSubtotal(cart.reduce((total, product) => total + product.totalPrice, 0));
  }, [cart]);
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
          {cart.map((item) => {
            console.log("🚀 ~ {cart.map ~ item:", item);
            const {
              id,
              image,
              label,
              priceAfterDiscount,
              quantity,
              totalPrice,
            } = item;
            return (
              <React.Fragment key={id}>
                <div className="grid grid-flow-col place-content-center col-span-3 grid-cols-3">
                  <div className="grid col-span-1 place-content-center">
                    <div className="col-span-1 rounded-full bg-[#fff7f8] w-[23.62px] h-[22px] grid place-content-center">
                      <button
                        type="button"
                        onClick={() => deleteItem(id)}
                        className="text-[#FF4252] w-[9.11px] h-[8.49px] flex justify-center items-center"
                      >
                        x
                      </button>
                    </div>
                  </div>
                  <div className="col-span-1 w-fit h-full grid grid-flow-col place-content-center">
                    <img
                      src={image}
                      alt="product key"
                      className="w-[137.85px] h-[94px]"
                    />
                  </div>
                  <div className="font-poppins font-medium text-xl text-[#22262A] text-nowrap grid col-span-1 place-content-center">
                    <span>{label}</span>
                  </div>
                </div>
                <div className="grid place-content-center">
                  <span className="col-span-1 w-[101.99px] h-[30px] font-poppins font-medium text-xl text-[#22262A] text-nowrap">
                    ${totalPrice}
                  </span>
                </div>
                <div className="grid place-content-center">
                  <div className=" grid grid-flow-col grid-cols-3 place-items-center bg-[#F6F7F8] col-span-1 w-[124.54px] h-[46px]">
                    <span
                      onClick={() => decrementQuantity(id)}
                      data-testid={`decrement-product-${id}-quantity`}
                      className="text-[#33A0FF] w-[8.59px] h-[2px] cursor-pointer flex justify-center items-center"
                    >
                      -
                    </span>
                    <span className="font-normal text-lg w-[11.82px] h-[22px]">
                      {quantity}
                    </span>
                    <span
                      onClick={() => incrementQuantity(id)}
                      data-testid={`increment-product-${id}-quantity`}
                      className="text-[#33A0FF] w-[8.59px] h-[2px] cursor-pointer flex justify-center items-center"
                    >
                      +
                    </span>
                  </div>
                </div>
                <div className="grid place-content-center">
                  <span className="col-span-1 w-[101.99px] h-[30px] font-poppins font-medium text-xl text-[#22262A] text-nowrap">
                    ${priceAfterDiscount}
                  </span>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <div className="grid grid-flow-col grid-cols-2 col-span-6 mt-5">
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
              <span className="flex justify-end">${Subtotal.toFixed(2)}</span>
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
              <span className="flex justify-end">
                ${+Subtotal.toFixed(2) + 20}
              </span>
            </div>
            <div className="grid w-full col-span-2 h-[60px]">
              <button
                type="button"
                data-testid="checkout-btn"
                onClick={() => alert("Proceed to checkout")}
                disabled={!(cart.length > 0)}
                className={`${
                  cart.length > 0
                    ? "bg-[#33A0FF] text-white"
                    : "bg-gray-400 text-gray-300"
                }  font-poppins font-medium text-lg rounded-md`}
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
