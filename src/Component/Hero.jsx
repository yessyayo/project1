import React, { useState } from 'react';
import image1 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/men.jpg';
import image2 from '../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/women.jpg';

const slides = [
  {
    id: 1,
    image: image1,
    title: 'Men Fashion',
    subtitle: 'Welcome to Fashion',
  },
  {
    id: 2,
    image: image2,
    title: 'Women Fashion',
    subtitle: 'Welcome to Fashion',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 'translate-x-full'
          } ${
            index === currentSlide - 1 || (currentSlide === 0 && index === slides.length - 1)
              ? '-translate-x-full'
              : ''
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute top-1/2 left-20 transform -translate-y-1/2 items-center flex flex-col gap-2 p-10 text-black">
            <p className="capitalize font-bold tracking-widest text-[#777] text-[18px]">
              {slide.subtitle}
            </p>
            <h1 className="uppercase text-[60px] font-bold text-[#222]">
              {slide.title}
            </h1>
            <button className="px-5 py-2 bg-[#ff4c3b] hover:bg-white">
              Shop Now
            </button>
          </div>
        </div>
      ))}

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-28 transform -translate-y-1/2 bg-white bg-opacity-50 text-black rounded-full text-2xl p-5 pi pi-angle-left" 
      ></button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-28 transform -translate-y-1/2 bg-white bg-opacity-50 text-black rounded-full text-2xl p-5  pi pi-angle-right"
      ></button>
    </div>
  );
}
