import React from 'react'
import { servicesData } from '../assets/assets'

const Services = () => {
  return (
    <section className="h-full my-10 mt-10 md:h-screen  flex flex-col items-center justify-center text-center  ">
        <div className='mb-28'>
        <h1 className="text-4xl mb-2">OUR SERVICES</h1>
        <p className="text-md  mt-5">
          There are many variations of passages of Lorem Ipsum
        </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {/* <div className="flex md:flex-nowrap flex-wrap justify-center items-center space-y-5"> */}
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white w-auto md:w-64   rounded-lg ">
              <div className="flex justify-center mb-4">
                <img src={service.icon} alt={service.title} className=" h-24" />
              </div>
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className=" text-lg mb-4 font-light">{service.desc}</p>
              <button className="bg-[#ffb607] w-40 hover:bg-black text-white text-lg  py-3 rounded-md ">
                READ MORE
              </button>
            </div>
          ))}
        </div>
        
    </section>
  )
}

export default Services
