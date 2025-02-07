"use client";

import React from "react";

const Footer = () => {
  return (
    <div className="bg-neutral-50">
      <div className="w-full h-full md:h-[350px] bg-neutral-50 flex justify-center items-center">
        <div className="w-full gap-y-9 pt-3 pb-6 flex flex-col md:flex-row justify-evenly px-4">
          <div className="w-full md:w-[285px] items-center">
            <h1 className="font-normal text-base text-[#0c0c0c] mb-4">
              400 University Drive Suite 200 Coral Gables, <br />
              Fl 33134 USA
            </h1>
          </div>

          <div className="w-full md:w-[68px]">
            <h1 className="font-medium text-base mb-4 text-black">Links</h1>
            <ul className="flex flex-col gap-4 font-medium text-[#464141]">
              <li className="pt-1 cursor-pointer">Home</li>
              <li className="pt-1 cursor-pointer">Shop</li>
              <li className="pt-1 cursor-pointer">Contact</li>
            </ul>
          </div>

          <div className="w-full md:w-[140px]">
            <h1 className="font-medium text-base mb-4 text-black">Help</h1>
            <ul className="flex flex-col gap-4 font-medium text-[#555050]">
              <li className="pt-1 cursor-pointer">Payment Options</li>
              <li className="pt-1 cursor-pointer">Returns</li>
              <li className="pt-1 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          <div className="w-full md:w-[286px]">
            <h1 className="font-medium text-base mb-4 text-[#9F9F9F]">
              Newsletter
            </h1>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="border-b-2 border-gray-400"
              />
              <button className="border-b-2 border-black font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="pl-5 md:pl-[50px] font-medium">
        2022 Meubel House. All rights reserved
      </p>
    </div>
  );
};

export default Footer;