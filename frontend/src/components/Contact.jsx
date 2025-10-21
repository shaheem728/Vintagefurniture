import React from 'react'
import BgLayout from '../layout/BgLayout'

const Contact = () => {
  return (
      <BgLayout>
      <div className="relative  container mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact Form */}
          <div>
            <h1 className="text-4xl text-white font-medium mb-6">CONTACT US</h1>
            <div className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full text-xl  outline-none p-4 bg-white rounded-md "
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full text-xl outline-none p-4 bg-white rounded-md"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full text-xl outline-none  p-4 bg-white rounded-md"
              />
              <textarea
                rows="5"
                placeholder="Message"
                className="w-full text-xl outline-none  p-4 bg-white rounded-md"
              ></textarea>
              <button className="hover:bg-white text-gray-500 font-bold text-xl border-2 border-white  w-40 h-16 ">
                SEND
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-full pb-16">
            <div className="w-full h-[300px] md:h-full  overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </BgLayout>
  )
}

export default Contact
