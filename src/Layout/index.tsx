import React from "react";
import profileIcon from "../assets/images/profile_close_2.svg";
import cartIcon from "../assets/images/cart_icon.svg";
import searchIcon from "../assets/images/search_icon.svg";
import logo from "../assets/images/logo.svg";
import facebookIcon from "../assets/images/facebook.svg";
import twitterIcon from "../assets/images/twitter.svg";
import westernUnionIcon from "../assets/images/western_union.svg";
import masterCardIcon from "../assets/images/master_card.svg";
import paypalIcon from "../assets/images/paypal.svg";
import visaIcon from "../assets/images/visa.svg";
import shoesIcon from "../assets/images/shoes.svg";
import productImg from "../assets/images/product.svg";
import heartIcon from "../assets/images/hearts.svg";
import blueCartIcon from "../assets/images/cart_2.png";

import "./style.css";

const Layout = () => {
  const hotDealsList = [
    {
      label: "Nike",
      quantity: 2,
    },
    {
      label: "Airmax",
      quantity: 48,
    },
    {
      label: "Nike",
      quantity: 14,
    },
    {
      label: "Adidas",
      quantity: 15,
    },
    {
      label: "Vans",
      quantity: 23,
    },
    {
      label: "All Stars",
      quantity: 1,
    },
    {
      label: "Adidas",
      quantity: 95,
    },
  ];
  const brandList = [
    {
      label: "Nike",
      quantity: 99,
    },
    {
      label: "Nike",
      quantity: 99,
    },
    {
      label: "Adidas",
      quantity: 99,
    },
    {
      label: "Siemens",
      quantity: 99,
    },
  ];

  const productList = [
    {
      image: productImg,
      label: "Nike Air Zoom Pegasus 38",
      priceAfterDiscount: 139.99,
      originalPrice: 583.29,
      discount: "24%",
      rating: 4.5,
    },
    {
      image: productImg,
      label: "Nike Air Zoom Pegasus 38",
      priceAfterDiscount: 139.99,
      originalPrice: 583.29,
      discount: "24%",
      rating: 4.5,
    },
    {
      image: productImg,
      label: "Nike Air Zoom Pegasus 38",
      priceAfterDiscount: 139.99,
      originalPrice: 583.29,
      discount: "24%",
      rating: 4.5,
    },
    {
      image: productImg,
      label: "Nike Air Zoom Pegasus 38",
      priceAfterDiscount: 139.99,
      originalPrice: 583.29,
      discount: "24%",
      rating: 4.5,
    },
  ];
  return (
    <main className="min-w-full min-h-full grid grid-rows-3 grid-flow-row bg-white">
      <nav className="grid grid-cols-2 place-content-center h-[42px] px-10 border-b-2 pb-3 border-b-2-[#FAFAFB]">
        <div className="grid grid-cols-2 w-28">
          <select className=" w-[38.26px] h-6 bg-transparent">
            <option value="ar">AR</option>
            <option value="en" selected>
              EN
            </option>
            <option value="fr">FR</option>
          </select>
          <select className=" w-[50.85px] h-6 bg-transparent">
            <option value="tnd">TND</option>
            <option value="usd" selected>
              USD
            </option>
            <option value="eur">EUR</option>
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
      <nav className="grid grid-cols-2 grid-flow-col place-content-center h-11  p-11">
        <div className="grid grid-flow-col place-items-center w-[134.32px] h-11">
          <img src={logo} alt="logo" className="w-11 h-11" />
          <span className="w-[84px] h-[27px] font-bold text-lg]">E-Comm</span>
        </div>
        <div className="w-[815.49px] h-9 grid grid-flow-col gap-2">
          <button
            type="button"
            className="text-[#33A0FF] w-[70px] h-9 font-medium text-2xl font-poppins"
          >
            HOME
          </button>
          <button
            type="button"
            className="w-[70px] h-9 font-medium text-2xl font-poppins"
          >
            BAGS
          </button>
          <button
            type="button"
            className="w-[70px] h-9 font-medium text-2xl font-poppins"
          >
            SNEAKERS
          </button>
          <button
            type="button"
            className="w-[70px] h-9 font-medium text-2xl font-poppins"
          >
            BELT
          </button>
          <button
            type="button"
            className="w-[70px] h-9 font-medium text-2xl font-poppins"
          >
            CONTACT
          </button>
        </div>
      </nav>
      <div className="w-full h-[51px] bg-[#fafafb] grid place-content-center">
        <div className="w-[170px] h-fit flex items-center justify-center gap-2">
          <span className="text-[#33A0FF] font-normal text-lg">Home</span>
          <span className="text-[#C1C8CE] w-[5px] h-[17px] font-normal text-sm">
            /
          </span>
          <span className="text[#262626] font-normal text-lg">Hot Deal</span>
        </div>
      </div>
      <div className="w-full h-full grid grid-flow-col gap-3 grid-cols-4">
        <nav className="w-[270px] h-[1059px] grid grid-flow-row gap-3">
          <div className="grid bg-[#F6F7F8] w-[270px] h-[371px] p-3 rounded-sm gap-2">
            <span className="w-[86px] h-[27px] font-poppins font-medium text-lg">
              Hot Deals
            </span>
            <ul className="grid h-[274px] gap-y-0.5 w-[235px]">
              {hotDealsList.map((hotDeal) => (
                <li className="flex justify-between">
                  <span>{hotDeal.label}</span>
                  <span>{hotDeal.quantity}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid bg-[#F6F7F8] w-[270px] h-36 rounded-sm gap-2 p-3">
            <span className="font-poppins font-medium w-[62px] h-[27px] text-lg text-[#22262A]">
              PRICES
            </span>
            <div className="w-[236px] h-[50px] flex-col justify-start">
              <label
                htmlFor="price-range"
                className="flex mb-4 text-sm font-medium text-gray-900 text-left justify-between"
              >
                <span>Ranger:</span>
                <span>$13.99 - $25.99</span>
              </label>
              <div
                id="price-range"
                className="bg-[#22262A] h-1 w-[230px] opacity-10 relative p-0 overflow-visible"
              >
                <div
                  className="bg-[#2E90E5] w-3 h-3 rounded-full border-2 absolute z-[2] bottom-[-0.2]"
                  id="knob1"
                ></div>
                <div
                  className="bg-[#2E90E5] w-3 h-3 rounded-full border-2 absolute z-[2] bottom-[-0.2]"
                  id="knob2"
                ></div>
                <div className=" w-[204px] h-1 bg-[#2E90E5] relative"></div>
              </div>
            </div>
          </div>
          <div className="bg-[#F6F7F8] w-[270px] h-[123px] p-3 rounded-sm grid">
            <span className="text-left font-poppins w-[62px] h-[27px] font-medium text-lg">
              COLOR
            </span>
            <div className="w-[227px] h-[26px] flex justify-between">
              <div className="bg-[#006CFF] rounded-full w-[20px] h-[20px]"></div>
              <div className="bg-[#FC3E39] rounded-full w-[20px] h-[20px]"></div>
              <div className="bg-[#171717] rounded-full w-[20px] h-[20px]"></div>
              <div className="bg-[#FFF600] rounded-full w-[20px] h-[20px]"></div>
              <div className="bg-[#FF00B4] rounded-full w-[20px] h-[20px]"></div>
              <div className="bg-[#EFDFDF] rounded-full w-[20px] h-[20px]"></div>
            </div>
          </div>
          <div className="grid bg-[#F6F7F8] w-[270px] h-[245px] p-3 rounded-sm gap-2">
            <span className="w-[86px] h-[27px] font-poppins font-medium text-lg">
              BRAND
            </span>
            <ul className="grid h-[148px] gap-y-0.5 w-[235.1px]">
              {brandList.map((brandDeal) => (
                <li className="flex justify-between">
                  <span>{brandDeal.label}</span>
                  <span>{brandDeal.quantity}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button
              type="button"
              className="w-[270px] h-14 bg-[#F6F7F8] font-poppins font-medium text-sm text-[#262626]"
            >
              MORE
            </button>
          </div>
        </nav>
        <section className="grid w-[calc(100% - 270px)] place-content-stretch col-span-3 gap-6">
          <div className="w-full h-[332px] text-white p-24 bg-[#40bfff] grid grid-flow-col place-content-center">
            <div className="grid place-content-center">
              <div className="grid place-content-between w-[350.92px] h-[184.5px]">
                <div>
                  <h2 className="font-poppins font-medium text-3xl text-left">
                    Adidas Men Running Sneakers
                  </h2>
                  <p className="font-poppins font-normal text-sm">
                    Performance and design. Taken right to the edge.
                  </p>
                </div>
                <span className="font-poppins font-semibold text-xs text-left">
                  SHOP NOW
                </span>
              </div>
            </div>
            <div>
              <img src={shoesIcon} alt="ads image" />
            </div>
          </div>
          <div className="bg-[#F1F3F4] w-full h-[58px] p-2 grid grid-flow-col grid-cols-4 place-content-center">
            <span className="text-left flex items-center">13 Items</span>
            <div className="w-[192.15px] h-[38px] text-[#22262A] flex justify-between items-center">
              <label htmlFor="sort-select">Sort By</label>
              <select id="sort-select" className="w-[126px] h-9 bg-transparent">
                <option value="name" selected>
                  Name
                </option>
              </select>
            </div>
            <div className="w-[171.84px] h-[38px] text-[#22262A] flex justify-between items-center">
              <label htmlFor="show-select">Show</label>
              <select id="show-select" className="w-[126px] h-9 bg-transparent">
                <option value="show-quantity" selected>
                  12
                </option>
              </select>
            </div>
            <div className="flex gap-5 justify-end items-center">
              <div className="w-[22.11px] h-5 grid grid-flow-col grid-cols-3 grid-rows-3">
                <div className="w-[4.42px] h-1 bg-[#40BFFF]"></div>
                <div className="w-[4.42px] h-1 bg-[#40BFFF]"></div>
                <div className="w-[4.42px] h-1 bg-[#40BFFF]"></div>
                <div className="w-[4.42px] h-1 bg-[#40BFFF]"></div>
                <div className="w-[4.42px] h-1 bg-[#40BFFF]"></div>
                <div className="w-[4.42px] h-1 bg-[#40BFFF]"></div>
                <div className="w-[4.42px] h-1 bg-[#40BFFF]"></div>
                <div className="w-[4.42px] h-1 bg-[#40BFFF]"></div>
                <div className="w-[4.42px] h-1 bg-[#40BFFF]"></div>
              </div>
              <div className="grid grid-cols-1 grid-rows-3 h-[65%] place-content-between">
                <span className="w-[19.89px] h-[2px] bg-[#C1C8CE]"></span>
                <span className="w-[19.89px] h-[2px] bg-[#C1C8CE]"></span>
                <span className="w-[19.89px] h-[2px] bg-[#C1C8CE]"></span>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-row grid-cols-3 grid-rows-4 gap-4">
            {productList.map((product) => {
              const {
                image,
                label,
                originalPrice,
                priceAfterDiscount,
                rating,
                discount,
              } = product;
              return (
                <div className="shopping-card w-[301px] h-[388px] border border-3 relative cursor-pointer">
                  <div className="absolute bg-[#FF4858] w-16 h-[33px] grid place-content-center">
                    <span className="w-[37px] h-[22px] font-normal text-lg text-[#FFFFFF]">
                      HOT
                    </span>
                  </div>
                  <div className="relative">
                    <img src={image} alt="product image" />
                    <div className="w-[278px] h-[219px] bg-[#FFFFFF] absolute top-2 right-2.5 opacity-95 z-10 hide">
                      <div className="w-[113px] h-[51px] flex justify-center items-center gap-2">
                        <button
                          type="button"
                          onClick={() => console.log("heart clicked!")}
                          className="border rounded-full bg-white w-[52px] h-[51px] flex justify-center items-center"
                        >
                          <img src={heartIcon} alt="heart icon" className="" />
                        </button>
                        <button
                          type="button"
                          onClick={() => console.log("cart clicked!")}
                          className="border rounded-full bg-white w-[52px] h-[51px] flex justify-center items-center"
                        >
                          <img
                            src={blueCartIcon}
                            alt="cart icon"
                            className=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[30%] grid grid-cols-1 grid-rows-3 place-content-center py-2 px-5">
                    <span className="font-poppins font-bold text-lg w-full h-[27px] text-[#223263] text-nowrap text-center">
                      {label}
                    </span>

                    <div className="grid grid-flow-col place-content-center">
                      <svg
                        className="w-4 h-4 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <div className="w-full h-8 grid grid-flow-col gap-1">
                      <span className="w-full h-8 font-poppins font-bold text-lg text-[#40BFFF]">
                        ${priceAfterDiscount}
                      </span>
                      <div className="w-[122px] h-[15px] text-nowrap grid grid-flow-col gap-1 place-content-center">
                        <span className="w-[57px] h-[21px] font-poppins font-normal text-sm text-[#9098B1] line-through">
                          ${originalPrice}
                        </span>
                        <span className="w-[57px] h-[21px] font-poppins font-bold text-sm text-[#FB7181]">{`${discount}% Off`}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full h-14 bg-[#fafafb] rounded-md">
            <ul className="w-full h-full flex justify-center">
              {Array.from({ length: 5 }, (_, i) => i + 1).map((pageNumber) => (
                <li
                  key={pageNumber}
                  className={`h-full w-[62.92px] grid place-content-center rounded-md ${
                    pageNumber === 1 ? "bg-[#40BFFF]" : ""
                  }`}
                >
                  <span className="w-[7.86px] h-[22px] font-normal text-lg text-[#22262A]">
                    {pageNumber}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <footer className="w-full h-[680.59px] bg-[#bcddfe] p-36 grid grid-cols-4 mt-40">
        <div className="w-[221.1px] h-[123px] grid gap-3 col-span-2">
          <div className="grid grid-flow-col place-items-center w-[134.32px] h-11">
            <img src={logo} alt="logo" className="w-[39px] h-[39px]" />
            <span className="w-[84px] h-[27px] font-bold text-lg font-poppins text-[#22262A]">
              E-Comm
            </span>
          </div>
          <p className="w-full h-[75px] font-normal text-xs text-[#22262A] text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            quaerat nisi quod animi quibusdam aliquid repudiandae obcaecati sunt
            doloremque, voluptatibus illum numquam, veritatis ut cum molestias
            officiis enim nobis earum.
          </p>
        </div>
        <div className="grid gap-3 w-[198px] h-[91px]">
          <span className="font-poppins font-medium text-lg w-[84px] h-[27px]">
            Follow Us
          </span>
          <p className="w-full h-[45px] font-normal text-xs text-[#22262A] text-left">
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </p>
          <ul className="flex justify-start items-center gap-4 py-5">
            <li>
              <img
                src={facebookIcon}
                alt="facebook icon"
                className="w-[7.65px] h-[15.13px] text-[#385C8E]"
              />
            </li>
            <li>
              <img
                src={twitterIcon}
                alt="twitter icon"
                className="w-[14.63px] h-[11.89px] text-[#03A9F4]"
              />
            </li>
          </ul>
        </div>
        <div className="grid gap-3 w-[148.11px] h-[109.27px]">
          <span className="font-poppins font-medium text-lg w-[84px] h-[27px] text-nowrap">
            Contact Us
          </span>
          <p className="w-full h-[63px] font-poppins font-normal text-sm text-[#22262A] text-left">
            E-Comm , 4578 Marmora Road, Glasgow D04 89GR
          </p>
        </div>
        <div className="grid gap-3 w-[152px] h-[123px]">
          <span className="font-poppins font-medium text-lg w-[99px] h-[27px] text-nowrap text-[#22262A]">
            Information
          </span>
          <ul className="font-poppins font-normal text-sm text-[#262626] text-left">
            <li>About us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="grid gap-3 w-[152px] h-[123px]">
          <span className="font-poppins font-medium text-lg w-[99px] h-[27px] text-nowrap text-[#22262A] text-left">
            Service
          </span>
          <ul className="font-poppins font-normal text-sm text-[#262626] text-left">
            <li>About us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="grid gap-3 w-[152px] h-[123px]">
          <span className="font-poppins font-medium text-lg w-[99px] h-[27px] text-nowrap text-[#22262A] text-left">
            My Account
          </span>
          <ul className="font-poppins font-normal text-sm text-[#262626] text-left">
            <li>About us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="grid gap-3 w-[152px] h-[123px]">
          <span className="font-poppins font-medium text-lg w-[99px] h-[27px] text-nowrap text-[#22262A] text-left">
            Our Offers
          </span>
          <ul className="font-poppins font-normal text-sm text-[#262626] text-left">
            <li>About us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="h-[56.92]  w-[400%] place-content-end border-t-2 border-t-white">
          <div className="flex justify-end gap-4">
            <img
              src={westernUnionIcon}
              alt="western union icon"
              className="text-[#ECD345] w-[38.31px] h-[25.14px]"
            />
            <img
              src={masterCardIcon}
              alt="master card icon"
              className="w-[38.3px] h-[25.14px]"
            />
            <img
              src={paypalIcon}
              alt="master card icon"
              className="w-[38.04px] h-[25.14px]"
            />
            <img
              src={visaIcon}
              alt="visa icon"
              className="w-[38.33px] h-[25.14px]"
            />
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Layout;
