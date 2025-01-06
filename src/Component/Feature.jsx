import React from 'react';
import image1 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/sub-banner1.5d5f9c6f.jpg';
import image2 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/sub-banner2.3b2448f3.jpg';

export default function Feature() {
  const feature = [
    {
      img: image1,
      title: '10% off',
      subtitle: 'Men'
    },
    {
      img: image2,
      title: '10% off',
      subtitle: 'Women'
    }
  ];

  return (
    <div className="flex flex-col md:flex-row gap-5 justify-center items-center w-full  md:px-20 pt-10 md:pt-20">
      {
        feature.map((item, index) => (
          <div key={index} className="w-full md:w-1/2">
            <div className='relative'>
              <img src={item.img} alt={`image-${index}`} className="w-full h-full object-cover" />
              <div className="absolute top-1/2 right-0 -translate-y-1/2 flex flex-col justify-center items-center text-center md:mr-[70px]">
                <p className="text-[#ff4c3b] font-bold tracking-wide uppercase text-[16px] md:text-[18px]">{item.title}</p>
                <h2 className="text-[24px] md:text-[55px] text-[#222] tracking-widest font-bold uppercase">{item.subtitle}</h2>
              </div>
            </div>
           
          </div>
        ))
      }
    </div>
  );
}
