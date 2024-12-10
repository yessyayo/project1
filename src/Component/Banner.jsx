import React from 'react';
import image from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/banner.jpg';

export default function Banner() {
  return (
    <div
      className="relative h-[80vh] bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Centered Div with 50% Width */}
      <div className="absolute inset-0 flex items-center justify-center text-black">
        <div className=" w-[100%] h-auto bg-inherit">
          <div className='w-1/2 text-center'>
            <h2 className="text-[90px] font-bold text-[#ff4c3b]">2023</h2>
            <h3 className="text-[55px] font-bold text-[#333] uppercase">Fashion Trends</h3>
            <h4 className="text-[24px] tracking-widest text-[#777] uppercase pt-[8px]">Special Offer</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
