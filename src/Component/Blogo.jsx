import React from 'react'
import brand1 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/1.png';
import brand2 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/2.png';
import brand3 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/3.png';
import brand4 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/8.png';
import brand5 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/7.png';

export default function Blogo() {
  return (
    <div className='mb-[70px]'>
      {/* Brand Logos */}
      <div className="flex justify-center w-[100%] pl-20 pr-20 pt-20 ">
        <div className='px-16'><img src={brand1} alt="Brand 1"/></div>
        <div className='px-16'><img src={brand2} alt="Brand 2"/></div>
        <div className='px-16'><img src={brand3} alt="Brand 3"/></div>
        <div className='px-16'><img src={brand4} alt="Brand 4"/></div>
        <div className='px-16'><img src={brand5} alt="Brand 5"/></div>
      </div>
    </div>
  )
}
