import React from 'react'
import { furnituresData } from '../assets/assets'
import { Search } from 'lucide-react';
const Shop = () => {
  return (
   <section className="py-16 bg-white h-full ">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-md text-center mb-2">OUR FURNITURES</h1>
        <p className="text-center font-md mb-10">
          There are many variations of passages of Lorem Ipsum
        </p>

        <div className="flex md:flex-row flex-col justify-center gap-10">
          {furnituresData.map((item, index) => (
            <div key={index} className="group w-auto md:w-4/12 ">
              {/* Image with Overlay */}
              <div className="relative  overflow-hidden ">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto "
                />
                <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="bg-[#ffb607] p-5 rounded-full ">
                   <Search color="#ffffff" size={40} strokeWidth={3}  />
                  </a>
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-lg uppercase text-[#ffb607] font-bold mt-5">{item.title}</h3>
              <p className="text-black mt-3 text-lg font-extralight">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Shop
