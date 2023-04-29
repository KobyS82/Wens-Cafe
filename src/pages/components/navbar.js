import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import logo from "./clear-color-nologo.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-auto flex justify-between border border-spacing-2 items-center bg-black px-4 py-8">
      {/* Logo */}
      <div className="flex justify-start items-center hover:opacity-0 transition duration-500">
        <Image
          src={logo}
          alt="logo"
          className="w-[110px] sm:w-[150px] xl:w-[210px] "
        />
      </div>
      {/* Menu */}
      <ul className="hidden flex-1 justify-center items-center lg:flex">
        <li className="my-0 mx-4 cursor-pointer hover:text-gray-500">
          <Link href="#home">Home</Link>
        </li>
        <li className="my-0 mx-4 cursor-pointer hover:text-gray-500">
          <Link href="#">Home</Link>
        </li>
        <li className="my-0 mx-4 cursor-pointer hover:text-gray-500">
          <Link href="#">Home</Link>
        </li>
        <li className="my-0 mx-4 cursor-pointer hover:text-gray-500">
          <Link href="#">Home</Link>
        </li>
        <li className="my-0 mx-4 cursor-pointer hover:text-gray-500">
          <Link href="#">Home</Link>
        </li>
      </ul>
      {/* Log in / Register */}
      <div className="justify-end items-center hidden sm:flex ">
        <Link
          href="#login"
          className="my-0 mx-4 transition-all ease-in-out delay-75 duration-100 hover:border-b border-[#DCCA87]"
        >
          Log in / Register
        </Link>
        <div className="w-[1px] h-[30px] bg-gray-600" />
        <Link
          href="#"
          className="my-0 mx-4 transition-all ease-in-out delay-75 duration-100 hover:border-b border-[#DCCA87]"
        >
          Cart
        </Link>
      </div>
      {/* Hamburger Menu */}
      <div id="smallScreen" className="flex justify-end items-center">
        <GiHamburgerMenu
          className="text-3xl cursor-pointer text-[#fff] lg:hidden"
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div
            id="smallScreenOverlay"
            className="flex justify-center fixed top-0 left-0 w-full h-full bg-black slide-bottom z-10"
          >
            <MdOutlineRestaurantMenu
              id="overlayClose"
              className="text-3xl cursor-pointer text-[#fff] absolute top-5 right-5"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul
              id="smallScreenLinks"
              className="flex flex-1 justify-center items-center flex-col "
            >
              {/* Login */}
              <li className="m-8 text-3xl text-center cursor-pointer font-serif text-[#DCCA87] sm:hidden hover:text-white">
                <Link href="#home">Login/ Register</Link>
              </li>
              {/* Normal */}
              <li className="m-8 text-3xl text-center cursor-pointer font-serif text-[#DCCA87] hover:text-white">
                <Link href="#home">Home</Link>
              </li>
              <li className="m-8 text-3xl text-center cursor-pointer font-serif text-[#DCCA87] hover:text-white">
                <Link href="#">Home</Link>
              </li>
              <li className="m-8 text-3xl text-center cursor-pointer font-serif text-[#DCCA87] hover:text-white">
                <Link href="#">Home</Link>
              </li>
              <li className="m-8 text-3xl text-center cursor-pointer font-serif text-[#DCCA87] hover:text-white">
                <Link href="#">Home</Link>
              </li>
              <li className="m-8 text-3xl text-center cursor-pointer font-serif text-[#DCCA87] hover:text-white">
                <Link href="#">Home</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
