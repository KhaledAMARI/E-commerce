import React from "react";
import profileIcon from "../assets/profile_close_2.svg";
import cartIcon from "../assets/cart_icon.svg";
import searchIcon from "../assets/search_icon.svg";

const Layout = () => {
  return (
    <main className="min-w-full min-h-full grid grid-rows-3 grid-flow-col">
      <nav className="grid grid-cols-2 grid-flow-col h-[42px] place-content-center">
        <div className="grid grid-cols-2 w-28">
          <select className=" w-[38.26px] h-6 bg-transparent">
            <option value="ar">AR</option>
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
          <select className=" w-[38.26px] h-6 bg-transparent">
            <option value="ar">TND</option>
            <option value="en">USD</option>
            <option value="fr">EURO</option>
          </select>
        </div>
        <div className="grid grid-cols-4 gap-1">
          <div className="grid place-items-center grid-flow-col place-content-center w-[113.53px] h-6 gap-1">
            <img src={profileIcon} alt="profile icon" />
            <button
              type="button"
              className="h-full w-[87px] font-normal text-xl text-nowrap"
            >
              My profile
            </button>
          </div>
          <button
            type="button"
            className="relative grid place-items-center w-[75px]"
          >
            <img src={cartIcon} alt="cart icon" />
            <span className="bg-[#FB7181] text-white w-5 h-5 border-2 px-2 py-1 rounded-full absolute bottom-3 right-4 grid place-content-center">
              2
            </span>
          </button>
          <button type="button">Items</button>
          <div className="grid grid-flow-col-dense gap-1 w-[76px]">
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
          </div>
        </div>
      </nav>
      <section>
        <div className="grid grid-cols-3">
          <div className="bg-red-300">1</div>
          <div className="bg-blue-300">2</div>
          <div className="bg-green-300">3</div>
          <div className="bg-red-300">1</div>
          <div className="bg-blue-300">2</div>
          <div className="bg-green-300">3</div>{" "}
          <div className="bg-red-300">1</div>
          <div className="bg-blue-300">2</div>
          <div className="bg-green-300">3</div>
        </div>
      </section>
      <footer>Footer</footer>
    </main>
  );
};

export default Layout;
