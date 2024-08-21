import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import profileIcon from "../../assets/images/profile_close_2.svg";
import cartIcon from "../../assets/images/cart_icon.svg";
import searchIcon from "../../assets/images/search_icon.svg";
import logo from "../../assets/images/logo.svg";
import { useSelector } from "react-redux";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const cart = useSelector((state) => state.cart);

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };
  return (
    <nav className="w-full h-fit">
      <div className=" [@media(max-width:936px)]:hidden grid grid-cols-2 place-content-center h-[42px] px-10 border-b-2 pb-3 border-b-2-[#FAFAFB]">
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
        <div>
          <ul className="flex justify-end gap-6">
            <li className="flex h-6 gap-1 cursor-pointer">
              <img src={profileIcon} alt="profile icon" />
              <span className="h-full w-[87px] font-normal text-base md:text-lg text-nowrap">
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
            <li className=" text-base md:text-lg">
              <NavLink to="">Items</NavLink>
            </li>
            <li className="grid grid-flow-col-dense gap-1 w-[76px]">
              <input
                id="global-search"
                type="text"
                className="w-[52px] h-6"
                placeholder="$0.00"
              ></input>
              <label htmlFor="global-search">
                <img
                  src={searchIcon}
                  alt="search icon"
                  className="w-[20.95px] h-[20.94px]"
                />
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-11 p-11 flex justify-between items-center w-full">
        <div className="w-fit h-11">
          <NavLink
            to="/home"
            className="flex justify-center items-center gap-2 "
          >
            <img src={logo} alt="logo" className="w-11 h-11" />
            <span className="w-[84px] h-[27px] font-bold text-base md:text-lg lg:text-xl xl:text-2xl text-nowrap">
              E-Comm
            </span>
          </NavLink>
        </div>
        <div className="w-fit h-fit ml-auto">
          <ul className="h-9 flex justify-end items-center [@media(max-width:936px)]:hidden">
            <li className="text-[#33A0FF] w-[70px] h-9 font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-poppins">
              <NavLink to="/home">HOME</NavLink>
            </li>
            <li className="w-[115px] h-9 font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-poppins cursor-pointer flex justify-center">
              BAGS
            </li>
            <li className="w-[115px] h-9 font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-poppins cursor-pointer">
              SNEAKERS
            </li>
            <li className="w-[115px] h-9 font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-poppins cursor-pointer flex justify-center">
              BELT
            </li>
            <li className="w-[115px] h-9 font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-poppins cursor-pointer">
              CONTACT
            </li>
          </ul>
        </div>
        <div className="relative h-auto w-60 justify-end items-center [@media(max-width:936px)]:flex hidden">
          <div className="px-3 w-1/4 h-full font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-poppins cursor-pointer">
            <NavLink to="/cart">
              <img
                data-testid="header-cart-icon"
                src={cartIcon}
                alt="cart icon"
              />
              {cart.length > 0 && (
                <span
                  data-testid="header-cart-icon-badge"
                  className="bg-[#FB7181] text-white w-5 h-5 border-2 px-2 py-1 rounded-full absolute bottom-7 right-16 grid place-content-center"
                >
                  {cart.length}
                </span>
              )}
            </NavLink>
          </div>
          <div
            className={`${isNavOpen ? "border border-[#33A0FF]" : "border-2 border-gray-400"} w-12 rounded-md p-1 h-12 [@media(max-width:936px)]:grid grid-rows-3 place-items-center gap-1 hidden cursor-pointer`}
            onClick={toggleNav}
          >
            <span
              className={`w-full h-2 rounded-lg ${isNavOpen ? "bg-[#33A0FF]" : "bg-gray-500"}`}
            ></span>
            <span
              className={`w-full h-2 rounded-lg ${isNavOpen ? "bg-[#33A0FF]" : "bg-gray-500"}`}
            ></span>
            <span
              className={`w-full h-2 rounded-lg ${isNavOpen ? "bg-[#33A0FF]" : "bg-gray-500"}`}
            ></span>
          </div>
          {isNavOpen && (
            <div className="absolute border bg-[#fafafb] rounded-md top-20 right-7 w-32 h-56">
              <ul className="w-full h-full grid place-content-between overflow-auto py-2">
                <li className="px-3 text-[#33A0FF] w-full h-9 font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-poppins hover:bg-[#fcfcfb] cursor-pointer">
                  <NavLink to="/home">HOME</NavLink>
                </li>
                <li className="px-3 w-full h-1/6 font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-poppins cursor-pointer">
                  BAGS
                </li>
                <li className="px-3 w-full h-1/6 font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-poppins cursor-pointer">
                  SNEAKERS
                </li>
                <li className="px-3 w-full h-1/6 font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-poppins cursor-pointer">
                  BELT
                </li>
                <li className="px-3 w-full h-1/6 font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-poppins cursor-pointer">
                  CONTACT
                </li>
                <li className="px-3 flex h-6 gap-1 cursor-pointer">
                  <span className="h-full w-[87px] font-normal text-base md:text-lg text-nowrap">
                    My profile
                  </span>
                </li>
                <li className="px-3 w-full h-1/6 font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-poppins cursor-pointer">
                  <NavLink to="">Items</NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* <ul className="h-9 grid-flow-col gap-2 grid-cols-5 [@media(min-width:936px)]:grid">
          <li className="text-[#33A0FF] w-[70px] h-9 font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-poppins col-span-1">
            <NavLink to="/home">HOME</NavLink>
          </li>
          <li className="w-[115px] h-9 font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-poppins cursor-pointer col-span-1">
            BAGS
          </li>
          <li className="w-[115px] h-9 font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-poppins cursor-pointer col-span-1">
            SNEAKERS
          </li>
          <li className="w-[115px] h-9 font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-poppins cursor-pointer col-span-1 flex justify-center">
            BELT
          </li>
          <li className="w-[115px] h-9 font-medium text-base md:text-lg lg:text-xl xl:text-2xl font-poppins cursor-pointer col-span-1">
            CONTACT
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Header;
