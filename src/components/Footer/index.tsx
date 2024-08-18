import React from "react";

import logo from "../../assets/images/logo.svg";
import facebookIcon from "../../assets/images/facebook.svg";
import twitterIcon from "../../assets/images/twitter.svg";
import westernUnionIcon from "../../assets/images/western_union.svg";
import masterCardIcon from "../../assets/images/master_card.svg";
import paypalIcon from "../../assets/images/paypal.svg";
import visaIcon from "../../assets/images/visa.svg";

const Footer = () => {
  return (
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
  );
};

export default Footer;
