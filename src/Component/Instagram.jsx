import React from 'react';
import image1 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/1(2).jpg';
import image2 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/3(2).jpg';
import image3 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/5(2).jpg';
import image4 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/7(1).jpg';
import image5 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/9(1).jpg';
import image6 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/11(1).jpg';
import image7 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/13(1).jpg';

export default function Instagram() {
  return (
    <div className='mt-20'>
      {/* Instagram Section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-[32px] font-bold uppercase tracking-widest text-[#222] mb-[30px]"># Instagram</h1>

        {/* Image Grid */}
        <div className="grid grid-cols-3  md:grid-cols-7 gap-2">
          {
            [image1, image2, image3, image4, image5, image6, image7].map((image, index) => (
            <div key={index} className={`relative group ${
              index > 2 ? 'hidden sm:block' : 'block'
               }`}>
              <img
                src={image}
                className="w-full object-cover"
              />
              {/* Instagram overlay */}
              <div className='absolute inset-0 bg-[#ff4c3b] bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <i className='pi pi-instagram text-white text-[60px] transform group-hover:scale-300 group-hover:rotate-90 transition-transform duration-500 ease-in-out'></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
