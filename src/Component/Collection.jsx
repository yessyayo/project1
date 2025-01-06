import React, { useEffect, useState } from 'react';
import data from '../data/product.json';

export default function Collection() {
  const list = data;
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dynamically adjust items per slide based on screen width
  const getItemsPerSlide = () => {
    if (window.innerWidth <= 640) return 2;  // Mobile: 2 items per slide
    return 4; // Desktop: 4 items per slide
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());
  const totalSlides = Math.ceil(list.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Handle resizing for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to get items for the current slide
  const getCurrentItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return list.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <div className="flex flex-col gap-10 mt-10 md:mt-20">
      <div className="flex flex-col justify-center items-center">
        <h4 className="text-[#ff4c3b] mb-1 text-[18px] capitalize tracking-wide">Special Offer</h4>
        <div className="flex flex-col justify-center items-center mb-3">
          <h2 className="text-[32px] pb-1 uppercase text-[#222] font-bold">Top Collection</h2>
          <hr className="border border-[#ff4c3b] w-[70px]" />
        </div>
      </div>

      <div>
        <p className="text-center pb-2 text-[14px] text-[#777]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been  <br /> the industry's standard dummy text ever since the 1500s.
        </p>
        
        <div className="flex gap-5 px-2 sm:px-16 lg:px-48 my-10 md:my-20">
          {getCurrentItems().map((item, index) => (
            <div key={index} className="flex group flex-col relative w-full sm:w-1/2 lg:w-1/4">
              {/* Display Image */}
              <div className="relative group">
                <img src={item.images[0]} alt="" className="w-full h-auto" />

                {/* Small Images */}
                <div className="absolute bottom-0 left-0 flex flex-col">
                  {item.images.map((img, imgIndex) => (
                    <img key={imgIndex} src={img} className="h-[30px] mt-1 opacity-50 hover:opacity-100" />
                  ))}
                </div>

                {/* Hover Icons */}
                <div className="absolute bottom-0 right-0 hidden group-hover:flex flex-col gap-4">
                  <i className="pi pi-shopping-cart p-2 rounded-full cursor-pointer text-gray-500 font-bold hover:text-red-500"></i>
                  <i className="pi pi-heart-fill p-2 rounded-full cursor-pointer text-gray-500 font-bold hover:text-red-500"></i>
                  <i className="pi pi-search p-2 rounded-full cursor-pointer text-gray-500 font-bold hover:text-red-500"></i>
                  <i className="pi pi-sync p-2 rounded-full cursor-pointer text-gray-500 font-bold hover:text-red-500"></i>
                </div>
              </div>

              {/* Product Details */}
              <div>
                <div className="flex gap-1 my-2">
                  <i className="pi pi-star-fill text-xs text-[#ffa200]"></i>
                  <i className="pi pi-star-fill text-xs text-[#ffa200]"></i>
                  <i className="pi pi-star-fill text-xs text-[#ffa200]"></i>
                  <i className="pi pi-star-fill text-xs text-[#ffa200]"></i>
                  <i className="pi pi-star-fill text-xs text-gray-300"></i>
                </div>

                <p className="text-gray-500">{item.title}</p>

                <div className="flex gap-1 items-end font-bold">
                  <h1 className="text-sm text-gray-800">${item.price.toFixed(2)}</h1>
                  <p className="line-through text-xs text-gray-400">${item.old_price}</p>
                </div>

                <div className="flex gap-1 mt-1">
                  {item.colour.map((colorItem, colorIndex) => (
                    <div key={colorIndex} className={`w-4 h-4 ${colorItem} rounded-full`}></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
