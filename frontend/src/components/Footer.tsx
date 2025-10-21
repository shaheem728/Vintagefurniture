import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] text-white ">
      <div className="container mx-auto px-5 md:px-40 py-20 relative">
       <div className="grid grid-cols-1 md:grid-cols-4 space-y-5 ">
        {/* INFORMATION */}
        <div className="w-[80%] md:w-2/3">
          <h2 className="text-2xl  mb-4">INFORMATION</h2>
          <p className="text-lg font-normal leading-7 ">
            There are many variat ions of passages of L orem Ipsum available , but the majority h ave suffered altera tion in some form, by
          </p>
        </div>

        {/* LET US HELP YOU */}
        <div className="w-[80%] md:w-2/3">
          <h2 className="text-2xl  mb-4">LET US HELP YOU</h2>
          <p className="text-lg leading-7 font-normal">
            There are many variat ions of passages of L orem Ipsum available , but the majority h ave suffered altera tion in some form, by
          </p>
        </div>

        {/* USEFUL LINKS */}
        <div className="w-auto md:w-2/3">
          <h2 className="text-2xl  mb-4">USEFUL LINKS</h2>
          <ul className=" font-normal text-md ">
            <li>About Us</li>
            <li>Careers</li>
            <li>Sell on shopee</li>
            <li>Press & News</li>
            <li>Competitions</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* OUR DESIGN + EMAIL */}
       <div className="w-[80%]  md:w-2/3">
          <h2 className="text-2xl  mb-4">OUR DESIGN</h2>
          <p className="text-lg leading-6  font-normal mb-4">
            There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by
          </p>
        </div>
           <div className="absolute right-3 md:right-52 bottom-10 md:w-lg  flex border-b border-gray-500 items-center py-2 justify-between">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-lg flex-2"
            />
            <button className="text-lg font-bold">SUBSCRIBE</button>
          </div>
      </div>
      </div>

      {/* Bottom Section */}
      <div className=" w-full  mt-5 py-6 text-center bg-white text-md text-black">
        2023 All Rights Reserved. Design by Free html Templates Distribution By ThemeWagon
      </div>
    </footer>
  );
};

export default Footer;
