import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
     <section className="h-screen bg-yellow-500 px-10 md:px-24 flex flex-col md:flex-row items-center justify-center">
          
          {/* Text Section */}
          <div className="md:w-5/12 h-auto lg:h-1/2 text-white flex flex-col justify-between ">
            <h1 className="text-4xl font-medium mb-4">ABOUT US</h1>
            <p className="text-lg">
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected 
              humour, or randomised words which don't look even slightly believable.
              There are many variations of passages of Lorem Ipsum available, 
              but the majority have able.
            </p>
            <button className="bg-black w-40 hover:bg-white text-white hover:text-black py-3 rounded-md font-medium">
              READ MORE
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 w-full  flex items-center justify-center">
            <img src={assets.img1} alt="About" className="h-80  md:w-10/12 md:h-2/12  " />
          </div>
    </section>
  )
}

export default About
