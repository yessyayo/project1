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
        <div className="w-full h-auto bg-inherit px-4">
          <div className="text-center w-full sm:w-3/4 md:w-1/2">
            <h2 className="text-[60px] sm:text-[80px] md:text-[90px] font-bold text-[#ff4c3b]">2023</h2>
            <h3 className="text-[40px] sm:text-[50px] md:text-[55px] font-bold text-[#333] uppercase">
              Fashion Trends
            </h3>
            <h4 className="text-[18px] sm:text-[20px] md:text-[24px] tracking-widest text-[#777] uppercase pt-[8px]">
              Special Offer
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
