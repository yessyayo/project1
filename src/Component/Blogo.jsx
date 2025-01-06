import React from 'react';
import brand1 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/1.png';
import brand2 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/2.png';
import brand3 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/3.png';
import brand4 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/8.png';
import brand5 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/7.png';

export default function Blogo() {
  return (
    <div className='w-full mb-[70px]'>
      {/* Brand Logos */}
      <div className="flex justify-around items-center pt-10 md:pt-20 w-full">
        {
          [brand1, brand2, brand3, brand4, brand5].map((image, index) => (
            <div key={index} className={`${index > 1 ? 'hidden sm:flex' : 'block'}`}>
              <img src={image} className='w-full'/>
            </div>
          ))
        }
      </div> 
    </div>
  );
}
