"use client";
import React from "react";
import { Roboto } from "next/font/google";
import { IoSearch } from "react-icons/io5";
import { RiMenu5Line } from "react-icons/ri";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["700"],
});

const NavBar = () => {
  return (
    <div className="w-full h-[8vh] flex items-center px-5 justify-between">
      <h1 className={`${roboto.className} text-2xl`}>SAXAZAVI</h1>
      <div className=" hidden md:flex md:gap-5">
        <h3 className="cursor-pointer hover:scale-105 transition-all duration-150">
          მთავარი
        </h3>
        <h3 className="cursor-pointer hover:scale-105 transition-all duration-150">
          პროდუქთი
        </h3>
        <h3 className="cursor-pointer hover:scale-105 transition-all duration-150">
          ჩვენს შესახებ
        </h3>
        <h3 className="cursor-pointer hover:scale-105 transition-all duration-150">
          კონტაქტი
        </h3>
      </div>
      <RiMenu5Line className="block md:hidden text-3xl" />
      <IoSearch className="hidden md:block cursor-pointer" />
    </div>
  );
};

export default NavBar;
