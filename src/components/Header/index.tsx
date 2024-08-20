import React from "react";
import { NavLink } from "react-router-dom";

import profileIcon from "../../assets/images/profile_close_2.svg";
import cartIcon from "../../assets/images/cart_icon.svg";
import searchIcon from "../../assets/images/search_icon.svg";
import logo from "../../assets/images/logo.svg";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <nav className="w-full h-fit">
      <div className="grid grid-cols-2 place-content-center h-[42px] px-10 border-b-2 pb-3 border-b-2-[#FAFAFB]">
        <div className="grid grid-cols-2 w-28">
          <select
            defaultValue={"en"}
            className=" w-[38.26px] h-6 bg-transparent"
          >
            <option value="ar">AR</option>
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
          <select
            defaultValue={"usd"}
            className=" w-[50.85px] h-6 bg-transparent"
          >
            <option value="tnd">TND</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
          </select>
        </div>
        <ul className="grid grid-cols-4 gap-1">
          <li
            className="grid place-items-center grid-flow-col place-content-center
            w-[113.53px] h-6 gap-1 cursor-pointer"
          >
            <img src={profileIcon} alt="profile icon" />
            <span className="h-full w-[87px] font-normal text-xl text-nowrap">
              My profile
            </span>
          </li>
          <li className="relative grid place-items-center w-[75px]">
            <NavLink to="/cart">
              <img
                data-testid="header-cart-icon"
                src={cartIcon}
                alt="cart icon"
              />
              {cart.length > 0 && (
                <span
                  data-testid="header-cart-icon-badge"
                  className="bg-[#FB7181] text-white w-5 h-5 border-2 px-2 py-1 rounded-full absolute bottom-3 right-4 grid place-content-center"
                >
                  {cart.length}
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="">Items</NavLink>
          </li>
          <li className="grid grid-flow-col-dense gap-1 w-[76px]">
            <input
              type="text"
              className="w-[52px] h-6"
              placeholder="$0.00"
            ></input>
            <img
              src={searchIcon}
              alt="search icon"
              className="w-[20.95px] h-[20.94px]"
            />
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-2 grid-flow-col place-content-center h-11 p-11">
        <NavLink
          to="/home"
          className="grid grid-flow-col place-items-center w-[134.32px] h-11"
        >
          <img src={logo} alt="logo" className="w-11 h-11" />
          <span className="w-[84px] h-[27px] font-bold text-lg]">E-Comm</span>
        </NavLink>
        <ul className="h-9 grid grid-flow-col gap-2 grid-cols-5">
          <li className="text-[#33A0FF] w-[70px] h-9 font-medium text-2xl font-poppins col-span-1">
            <NavLink to="/home">HOME</NavLink>
          </li>
          <li className="w-fit h-9 font-medium text-2xl font-poppins cursor-pointer col-span-1">
            BAGS
          </li>
          <li className="w-fit h-9 font-medium text-2xl font-poppins cursor-pointer col-span-1">
            SNEAKERS
          </li>
          <li className="w-fit h-9 font-medium text-2xl font-poppins cursor-pointer col-span-1 flex justify-center">
            BELT
          </li>
          <li className="w-fit h-9 font-medium text-2xl font-poppins cursor-pointer col-span-1">
            CONTACT
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
