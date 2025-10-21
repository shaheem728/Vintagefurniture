import React from 'react'
import { assets } from '../assets/assets'

const BgLayout = ({children}) => {
  return (
      <section
     className="relative py-20 bg-cover bg-center"
     style={{
       backgroundImage: `url(${assets.img2})`,
     }}>
     {/* Transparent color overlay */}
  <div className="absolute inset-0 bg-amber-400/85"></div>   
      {children}
    </section>
  )
}

export default BgLayout
