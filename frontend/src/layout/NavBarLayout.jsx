import React, { useState,ReactNode } from 'react'
import { assets } from "../assets/assets";
import { Menu } from "lucide-react";

const NavBarLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
      <section className='header_section'>
          <nav className="container mx-auto md:flex items-center  justify-evenly p-3">
            {/* Logo */}
            <div className="flex w-full  md:w-auto justify-between">
            <a href="/" className="flex items-center">
              <img src={assets.logo} alt="logo" className="h-5 object-contain" />
            </a>
            {/* Mobile Toggle Button */}
            <button className="lg:hidden  bg-white py-1 px-3 text-gray-400 rounded-md" onClick={() => setOpen(!open)}>
              <Menu size={30}  />
            </button>
            </div>
            {/* Menu Items */}
            <div
              className={`${
                open ? "block" : "hidden"
              } w-full lg:flex lg:items-center lg:justify-between lg:w-2xl`}
            >
              <ul className="flex flex-col lg:flex-row lg:text-lg lg:space-x-10 ">
                <li><a href="/" className="block py-2 hover:text-[#ffb607]">HOME</a></li>
                <li><a href="/services" className="block py-2 hover:text-[#ffb607]">SERVICES</a></li>
                <li><a href="/about" className="block py-2 hover:text-[#ffb607]">ABOUT</a></li>
                <li><a href="/shop" className="block py-2 hover:text-[#ffb607]">SHOP</a></li>
                <li><a href="/contact" className="block py-2 hover:text-[#ffb607]">CONTACT</a></li>
              </ul>
              {/* Search + Login */}
              <div className="flex items-center space-x-4 lg:text-lg mt-4 lg:mt-0 lg:ml-6">
                <a href="#">
                  <img src={assets.searchIcon} alt="search" className="h-6 object-contain" />
                </a>
                <a href="#" className="hover:text-[#ffb607]">
                  LOGIN
                </a>
              </div>
            </div>
          </nav>
          {children}
        </section>
  )
}

export default NavBarLayout
