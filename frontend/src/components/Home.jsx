import React, { useState } from 'react'
import { assets, projects, slides, testimonials } from '../assets/assets'
import Services from './Services';
import About from './About';
import Shop from './Shop';
import Contact from './Contact';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import NavBarLayout from '../layout/NavBarLayout';
import BgLayout from '../layout/BgLayout';
import ProjectCard from '../card/ProjectCard';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay,Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Home = () => {

   return (
      <>
         <NavBarLayout>
            <div className="container h-full  pb-10   mx-auto px-4 text-center   relative">
               {/*Swiper Slide */}
               <Swiper modules={[Navigation,Autoplay]} 
               spaceBetween={30} 
               slidesPerView={1} 
               autoplay={{ delay: 2500, disableOnInteraction:true, }} 
               navigation={{ nextEl: ".rightArrow", prevEl: ".leftArrow", }} 
               loop={true} >
                   {slides.map((slide, index) => 
                     (<SwiperSlide key={index}> 
                     <div className='md:h-[90vh] flex flex-col justify-between items-center '> 
                        <div> <h1 className="text-5xl md:text-8xl mt-10 md:mt-20  md:mb-4">{slide.title}</h1> 
                        <p className="max-w-2xl mx-auto mb-6 text-sm md:text-lg">{slide.desc}</p> 
                        </div> 
                        <Link href="/contact" className=" bg-[#ffb607] text-lg px-5 md:px-10 hover:bg-black text-white py-3 rounded-md " > CONTACT US </Link> 
                        </div> 
                        </SwiperSlide>
                     ))} 
                        </Swiper>



               {/* Custom Navigation Buttons */}
               <button
                  className="leftArrow z-10 hidden md:flex absolute top-1/2 left-5 h-10 w-10 md:h-24 md:w-24  justify-center items-center bg-black rounded-full focus:bg-[#ffb607] hover:bg-[#ffb607]"
               >
                  <img src={assets.leftArrow} alt="Prev" className="w-3 md:w-7" />
               </button>

               <button
                  className="rightArrow z-10 hidden md:flex absolute top-1/2 right-5  h-10 w-10 md:h-24 md:w-24  justify-center items-center bg-black rounded-full focus:bg-[#ffb607] hover:bg-[#ffb607]">
                  <img src={assets.rightArrow} alt="Next" className="w-3 md:w-7" />
               </button>
            </div>
         </NavBarLayout>
         <Services />
         <About />
         <Shop />
         {/* who section start */}
         <BgLayout>
            <div className="relative  container mx-auto text-center px-4">
               <h1 className="text-4xl font-medium mb-4 text-white">WHO WE ARE ?</h1>
               <h4 className="text-lg font-semibold text-white mb-4">
                  DESIGNERS & INNOVATORS
               </h4>
               <p className="text-white max-w-5xl   mx-auto mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
               </p>
            </div>

            <div className="relative py-7 flex justify-center">
               <button className="bg-black w-48 hover:bg-white text-white hover:text-black text-md  py-4 rounded-md font-medium ">
                  GET A QUOTE
               </button>
            </div>
         </BgLayout>
         {/* who section end  */}
         {/* projects section start  */}
         <section className="py-16 px-2  md:px-40 ">
            <div className="text-center mb-10">
               <h2 className="text-3xl font-bold uppercase">Our Projects</h2>
               <p className="text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
               </p>
            </div>

            <div className="relative">
               <Swiper
                  modules={[Navigation,Autoplay]}
                  spaceBetween={10}
                  slidesPerView={1}
                  autoplay={{ delay: 2500, disableOnInteraction:true, }} 
                  navigation={{
                     nextEl: ".nextBtn",
                     prevEl: ".prevBtn",
                  }}
                  loop={true}
               >
                  {projects.map((group, index) => (
                     <SwiperSlide key={index}>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full ">
                           {group.map((item, idx) => (
                              <ProjectCard key={idx} image={item.img} title={item.title} />
                           ))}
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>


               {/* Custom Navigation Buttons */}
               <button className="prevBtn hidden md:flex bg-black hover:bg-yellow-500 w-16 h-16  items-center justify-center text-white text-2xl absolute top-1/2 -left-20 transform -translate-y-1/2 z-10">
                  &lt;
               </button>
               <button className="nextBtn hidden md:flex bg-black hover:bg-yellow-500  w-16 h-16  items-center justify-center text-white text-2xl absolute top-1/2 -right-20 transform -translate-y-1/2 z-10">
                  &gt;
               </button>
            </div>
         </section>

         {/* projects section end  */}

         {/* client section start  */}
         <div className="container mx-auto px-5 md:px-50 my-10 flex justify-center md:relative h-screen md:h-[80vh]">
        <Swiper
          modules={[ Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction:false, }}
          loop={true}
          pagination={{ clickable: true }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <h1 className="text-4xl uppercase  text-center mb-2">
                what is says our clients
              </h1>
              <p className="text-center text-lg font-light mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </p>

              <div className="grid md:grid-cols-2 gap-8  ">
                {/* Client 1 */}
                <div className="bg-white p-5 shadow w-auto md:w-[60%]  border md:absolute md:top-40 md:left-0    ">
                  <div className="flex md:flex-row flex-col space-y-3">
                    <div className="w-36 relative ">
                      <img src={item.img1} alt="client"   />
                      <img src={assets.quoteIcon} alt="Quote" className='absolute -bottom-1 md:bottom-3 left-16 '/>
                    </div>
                    <div className="w-3/4 md:pl-7 space-y-3">
                      <h1 className="text-xl  ">{item.name}</h1>
                      <p className="font-light text-lg ">{item.text}</p>
                    </div>
                  </div>
                </div>

                {/* Client 2 */}
                <div className="bg-white p-5 shadow w-auto md:w-[60%] border md:absolute md:bottom-10 md:right-1">
                 <div className="flex md:flex-row flex-col space-y-3">
                    <div className="w-36 relative  ">
                      <img src={item.img2} alt="client"   />
                      <img src={assets.quoteIcon} alt="Quote" className='absolute -bottom-1 md:bottom-3  left-16 '/>
                    </div>
                    <div className="w-3/4 md:pl-7 space-y-3">
                      <h1 className="text-xl ">{item.name}</h1>
                      <p className="font-light text-lg">{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
         {/* client section end  */}
         <Contact />
         <Footer />
      </>
   )
}

export default Home
