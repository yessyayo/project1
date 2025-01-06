import React, { useState, useEffect } from "react";
import image1 from "../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/4(1).jpg";
import image2 from "../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/5(1).jpg";
import image3 from "../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/6(1).jpg";
import image4 from "../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/1(1).jpg";
import image5 from "../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/2(1).jpg";
import image6 from "../assets/images/Multikart - Multi-purpopse E-commerce React Template_files/3(1).jpg";

export default function Product() {
  const collection = [
    { Image: image1, title: "29 January 2018" },
    { Image: image2, title: "29 January 2018" },
    { Image: image3, title: "29 January 2018" },
    { Image: image4, title: "25 January 2018" },
    { Image: image5, title: "26 January 2018" },
    { Image: image6, title: "29 January 2018" },
  ];

  const [visibleImages, setVisibleImages] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImages((prev) => {
        const nextIndex = (prev[2] + 1) % collection.length;
        return [prev[1], prev[2], nextIndex];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-5 md:px-20 pt-20">
      <div className="">
        {/* Section Title */}
        <div className="text-center">
          <h4 className="text-[18px] capitalize text-[#ff4c3b] mb-[10px]">Our Collection</h4>
          <div className="flex flex-col justify-center items-center mb-[30px]">
            <h2 className="text-[24px] md:text-[32px] font-bold pb-[10px] text-[#222] uppercase">
              Special Products
            </h2>
            <hr className="w-[50px] md:w-[70px] border border-[#ff4c3b]" />
          </div>
        </div>

        {/* Sliding Images */}
        <div className="flex flex-col md:flex-row gap-5">
          {visibleImages.map((index, i) => (
            <div
              key={i}
              className="flex-none w-full md:w-1/3 transition-transform duration-1000"
            >
              <div className="w-full bg-[#fff] px-3">
                <div className="relative">
                  {/* Image */}
                  <img
                    src={collection[index].Image}
                    alt={`Product ${index + 1}`}
                    className="w-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#ff4c3b] opacity-0 hover:opacity-50 transition-opacity duration-500 cursor-pointer"></div>
                </div>
                <div className="flex flex-col gap-[10px] justify-center items-center px-[15px]">
                  <h4 className="text-[16px] md:text-[18px] text-[#ff4c3b] mt-[20px] capitalize">
                    {collection[index].title}
                  </h4>
                  <p className="text-[14px] md:text-[16px] text-[#222] text-center uppercase font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <hr className="w-[50px] md:w-[70px] border border-[#ff4c3b]" />
                  <h6 className="text-[12px] md:text-[14px] text-[#777] tracking-widest">
                    By: John Dio, 2 Comments
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
