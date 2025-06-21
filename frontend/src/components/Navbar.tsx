"use client";
import Image from "next/image";
import React from "react";
import logo from "../../public/images/logo.png";
import meauIcon from "../../public/images/menu-of-three-lines.png";
import Link from "next/link";
import { Search, Heart } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Brand" },
    { href: "/services", label: "Models" },
    { href: "/contact", label: "Reviews" },
  ];
  return (
    <div className="flex flex-col">
      <div className="h-[65px] w-full flex justify-between px-4">
        <div className="flex items-center gap-4 lg:gap-0">
          {/*menu icon */}
          <button onClick={() => alert("button clicked")} className="lg:hidden">
            <Image src={meauIcon} alt="menu icon" width={20} height={20} />
          </button>

          {/*logo section */}
          <div className="flex items-center w-[150px] gap-2">
            <Image
              src={logo}
              alt="logo image"
              width={40}
              height={40}
              className="hidden lg:flex w-7 h-7"
            />
            <p className="text-lg tracking-widest lg:text-2xl lg:font-medium">
              AutoHub
            </p>
          </div>

          {/*menu section */}

          <div className="hidden lg:flex items-center text-xl ml-16">
            <ul className="flex gap-16">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className=" hover:text-blue-600 transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/*search section */}
        <div className="flex items-center">
          <div className="w-[160px] h-[40px] bg-[#E8EDF5] text-[#4A709C] rounded-lg hidden sm:flex sm:items-center">
            <Search className="w-5 h-5 absolute ml-2" />
            <input
              type="text"
              className="border-none w-full h-full pl-8 outline-none"
              placeholder="Search"
            />
          </div>

          {/*favorites section*/}
          <button className="w-[30px] h-[30px] bg-[#E8EDF5] rounded-lg ml-6  items-center flex justify-center sm:w-[40px] sm:h-[40px]">
            <Heart className="w-2 h-2 sm:w-4 sm:h-4" />
          </button>

          {/*profile section */}
          <div className="w-[30px] h-[30px] bg-[#E8EDF5] rounded-full ml-6 sm:w-[40px] sm:h-[40px]"></div>
        </div>
      </div>

      <div className="w-full h-10 px-2 sm:hidden">
        <div className="w-full h-[30px] bg-[#E8EDF5] text-[#4A709C] rounded flex items-center ">
          <Search className="w-4 h-4 absolute ml-2" />
          <input
            type="text"
            className="border-none w-full h-full px-8 outline-none"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
